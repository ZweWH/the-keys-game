// Offline execution of actual rendering functions; no browser/server is launched.
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
const root=fileURLToPath(new URL('../public/',import.meta.url));
const app=readFileSync(join(root,'app.js'),'utf8');
const dataContext={window:{}};vm.runInNewContext(readFileSync(join(root,'content.js'),'utf8'),dataContext);
const editions=dataContext.window.KEYS_CONTENT;
let count=0;const check=(ok,label)=>{if(!ok)throw new Error(label);count++;};
const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=text=>escape(text).replace(/\n/g,'<br>');
function source(name,next){return app.slice(app.indexOf(`  function ${name}(`),app.indexOf(`  function ${next}(`));}
const videoFn=source('videoCard','afterGameSection');
for(const edition of ['five','eight']){
 const context={editions,current:edition,selectedVideo:0,escape,asset:n=>'assets/'+n,demoURL:'https://the-five-keys-demo.decent-bat-2665.chatgpt.site/'};
 vm.runInNewContext(videoFn+';result=videoCard();',context);const html=context.result;
 if(edition==='eight'){
  check(/<video controls playsinline preload="metadata"/.test(html),'Native video controls');
  check(!/autoplay/i.test(html),'No unsolicited autoplay');
  check(html.indexOf('<video')<html.indexOf('jewel-showcase'),'Video visible before retained still showcase');
  check(/opening-description/.test(html)&&html.includes(editions.eight.video.transcript),'Silent visual description');
  check((html.match(/data-gallery=/g)||[]).length===3,'All three historical stills remain accessible');
  check(html.includes('jewel-opening.mp4')&&html.includes('jewel-opening-poster.png'),'Exact intended video/poster');
 }else check(html.includes('id="watch-video"')&&html.includes('godot-crane.mp4')===false,'Original Five Keys modal launch card retained');
 for(const m of html.matchAll(/(?:src|poster)="([^"]+)"/g))check(existsSync(join(root,m[1])),'Rendered asset exists:'+m[1]);
}
const missionFn=source('renderMission','videoCard');
for(const edition of ['five','eight'])for(let i=0;i<editions[edition].missions.length;i++){
 const handlers={};const target={setAttribute(){},innerHTML:'',querySelector(selector){return edition==='eight'&&selector==='[data-mission-capture]'?{addEventListener(event,fn){handlers[event]=fn;}}:null;}};
 const context={editions,current:edition,escape,asset:n=>'assets/'+n,missionID:(e,n)=>`${e}-mission-${n}`,document:{querySelectorAll:()=>[],querySelector:()=>target},mediaKind:{},mediaTitle:{},mediaCaption:{},imageNavigation:{},mediaBody:{},dialog:{showModal(){this.open=true;}}};
 vm.runInNewContext(missionFn+`;renderMission(${i});`,context);
 check(target.innerHTML.includes(escape(editions[edition].missions[i].title)),edition+' title '+i);
 if(edition==='eight'){
  check(!target.innerHTML.includes('PLANNED GOAL')&&!target.innerHTML.includes('PROPOSED MISSION'),'Current mission status '+i);
  handlers.click({currentTarget:{}});check(context.dialog.open&&context.mediaKind.textContent==='UNREAL · MISSION INTRODUCTION','Actual mission modal '+i);
 }
}
check(app.indexOf('${teamPlaySection(data)}')>app.indexOf('${prototypeSection(data)}'),'Local demo precedes planned team section');
check(app.includes("panel.querySelectorAll('video').forEach(video=>video.pause())"),'Inline video pauses when switching editions');
check(app.includes("lastMediaTrigger.focus({preventScroll:true})"),'Existing media focus-return retained');
const css=readFileSync(join(root,'latest.css'),'utf8');
check(css.includes('@media(max-width:720px)')&&css.includes('minmax(0,1fr)')&&css.includes('width:100%'),'Responsive source rules present');
check(!/(?:^|\n)\s*(?:body\b(?!\[data-edition=eight\])|\.(?:hero|mission|prototype|team))/m.test(css),'New styling scoped to Jewel');
console.log(`Offline rendering checks passed:${count}. Native browser layout/focus/playback are not claimed.`);
