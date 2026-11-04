import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../public/',import.meta.url));
const html=readFileSync(join(root,'index.html'),'utf8');
const source=readFileSync(join(root,'content.js'),'utf8');
const context={window:{}};
vm.runInNewContext(source,context);
let errors=[];
const assert=(value,message)=>{if(!value)errors.push(message);};
const data=context.window.KEYS_CONTENT;
const fiveContract=JSON.parse(readFileSync(new URL('./five-keys-contract.json',import.meta.url),'utf8'));
const sectionOrder=['id="overview"','id="option-one"','id="option-two"'].map(id=>html.indexOf(id));
assert(sectionOrder.every(index=>index>=0)&&sectionOrder.every((index,i)=>i===0||index>sectionOrder[i-1]),'Choice and both option sections must exist in order.');
for(const view of ['home','five','eight'])assert(html.includes(`data-view-switch="${view}"`),`Navigation missing ${view} view`);
assert(/Choose your<br><em>game adventure\./i.test(html),'Landing screen must invite a game choice.');
assert(!/<strong>THE KEYS\s*<span>\| A Construction Adventure/i.test(html),'Do not use The Keys as umbrella branding.');
assert(/id="option-one"[^>]*\bhidden/.test(html)&&/id="option-two"[^>]*\bhidden/.test(html),'Game pages start hidden until selected.');
const landing=html.slice(html.indexOf('id="overview"'),html.indexOf('id="option-one"'));
assert((landing.match(/class="choice-card"/g)||[]).length===2,'Landing must present exactly two game choices.');
const choiceCards=[...landing.matchAll(/<a class="choice-card"[\s\S]*?<\/a>/g)].map(match=>match[0]);
assert(choiceCards.length===2,'The game choices remain separate links.');
for(const [index,card] of choiceCards.entries()) {
  assert(/<dl class="choice-facts">/.test(card),`Choice ${index+1}: provide an accessible fact list.`);
  for(const label of ['Players','Style','Play']) assert(new RegExp(`<dt>${label}<\\/dt>`,'i').test(card),`Choice ${index+1}: include ${label} comparison.`);
}
assert(/1 student\s*·\s*1 PC/i.test(choiceCards[0]||'')&&/5 roles in order/i.test(choiceCards[0]||'')&&/personal report/i.test(choiceCards[0]||''),'Five Keys comparison explains its one-student setup, five roles and report.');
assert(/9 students\s*·\s*9 PCs planned/i.test(choiceCards[1]||'')&&/8 engineers/i.test(choiceCards[1]||'')&&/leader/i.test(choiceCards[1]||''),'Jewel comparison explains its planned nine-PC team setup.');
for(const [id,expected] of [['option-one',data.five.hero],['option-two',data.eight.hero]]){
  const start=html.indexOf(`id="${id}"`);
  const cover=html.slice(start,html.indexOf('game-cover-content',start));
  assert(cover.includes(`assets/${expected}`),`${id}: retain its established cover image.`);
}
const eventFigures=[...html.matchAll(/<figure class="event-imagination">[\s\S]*?<\/figure>/g)].map(match=>match[0]);
for(const [image,gameplay] of [['five-event-concept-20261104.png','godot-site.webp'],['nine-pc-event-v062.webp','v055-upper-deck-cover.webp']]){
  const figure=eventFigures.find(item=>item.includes(`src="assets/${image}"`));
  assert(figure&&/AI concept/i.test(figure),`${image}: identify the event illustration as AI concept art.`);
  assert(figure&&figure.includes(`href="assets/${gameplay}"`),`${image}: show the selected genuine game capture on the monitors.`);
  assert(figure&&/capture|gameplay/i.test(figure)&&/placed|overlay|overlaid/i.test(figure),`${image}: disclose that the real game image was placed into the imagined scene.`);
}
const jewelEvent=eventFigures.find(item=>item.includes('src="assets/nine-pc-event-v062.webp"'))||'';
assert((jewelEvent.match(/<image href="assets\/v055-upper-deck-cover\.webp"/g)||[]).length===9,'Jewel event illustration uses genuine game captures on all nine monitors.');
assert(/earlier Jewel gameplay/i.test(jewelEvent)&&/nine-PC setup still needs testing/i.test(jewelEvent),'Jewel event image explains the capture age and untested event setup.');
assert(/href="event-monitors\.css/.test(html),'Event monitor overlays require their layout stylesheet.');
const monitorCSS=readFileSync(join(root,'event-monitors.css'),'utf8');
assert(/\.event-screen-overlay\s*\{[^}]*position:\s*absolute/s.test(monitorCSS)&&/clip-path="url\(#five-monitor-screen\)"/.test(html),'Event monitor images need their positioned overlay and Five Keys monitor clipping.');
assert(html.includes('https://the-five-keys-demo.decent-bat-2665.chatgpt.site/'),'Five Keys browser demo link missing.');
assert(/planned event reward/i.test(html)&&/QR/i.test(html)&&/planned/i.test(html),'Physical badge and course QR must be identified as planned.');
assert(/BIM completion is recorded separately/i.test(html)&&/not as a career aptitude test/i.test(html),'Report description must preserve BIM and career-assessment limits.');
assert(/nine-PC venue LAN setup still needs testing/i.test(html),'Nine-PC event play must not be claimed as tested.');
assert(/fictional story/i.test(html)&&/not claims about the real Jewel/i.test(html),'Jewel story and faults must be labelled fictional.');
assert(/<video controls playsinline preload="metadata"/.test(html)&&/jewel-opening\.mp4/.test(html),'Opening film must retain native playback controls.');
assert(!html.includes('id="presentation-flow"'),'Keep the comparison on the home choice cards, not at the end of Jewel.');
assert(!html.includes('id="latest-gameplay"'),'The recently added character gameplay gallery stays removed.');
const crewStart=html.indexOf('<figure class="crew" id="crew-title">');
const crew=crewStart>=0?html.slice(crewStart,html.indexOf('</figure>',crewStart)+9):'';
assert(crew.includes('src="assets/crew-v7.webp"'),'Crew artwork retains the original group image underneath the updated characters.');
assert(/<svg[^>]*class="crew-overlay"/i.test(crew),'Crew artwork uses a separate character overlay.');
for(const file of ['crew-ny-v101-concept.png','jewel-bim-v101-idle.png']) {
  assert((crew.match(new RegExp(`href="assets/${file.replace('.', '\\.') }"`,'g'))||[]).length===1,`Crew artwork contains exactly one ${file} overlay.`);
}
assert(/Director is an illustration/i.test(crew)&&/actual game character/i.test(crew)&&/earlier concepts/i.test(crew),'Crew caption distinguishes the Director illustration, actual BIM character and earlier concepts.');
assert(/<text[^>]*>Director<\/text>/i.test(crew)&&/<text[^>]*>BIM Coordinator<\/text>/i.test(crew)&&!/<text[^>]*>(?:NY|Chien)<\/text>/i.test(crew),'Crew labels use role names only.');
assert(/Woh Hup/.test(html)&&/BCAA Open House Showcase/.test(html)&&/Back to top/.test(html),'Showcase footer and back-to-top link are required.');
assert(JSON.stringify(data.five)===JSON.stringify(fiveContract),'Preserve every existing Five Keys content field, mission, video, gallery and outcome.');
assert(data.five.missions.length===5,'Godot must explain five missions.');
assert(data.eight.missions.length===8,'Unreal must explain eight missions.');
assert(data.eight.missions[7].role==='Mechanical Engineer','The newest website brief uses Mechanical Engineer as role eight.');
assert(data.five.missions.map(m=>m.id).join(',')==='bim,site,technical,planning,qaqc','Preserve the five playable mission IDs and order.');
assert(data.eight.missions.map(m=>m.id).join(',')==='bim,site,technical,planning,qaqc,safety,quantity,mechanical','Preserve the newest eight-role website order, including Mechanical Engineer.');
for(const mission of data.five.missions){
  assert(mission.setting?.trim()&&mission.stage?.trim()&&mission.objective?.trim()&&mission.success?.trim(),`${mission.role}: playable mission brief needs its setting, objective and final check.`);
}
for(const mission of data.eight.missions){
  assert(mission.objective?.trim()&&mission.success?.trim(),`${mission.role}: proposed mission needs an objective and completion check.`);
  assert(mission.setting?.trim()&&mission.stage?.trim()&&mission.futureEffect?.trim(),`${mission.role}: proposed time-travel mission needs its place, review moment and future effect.`);
  assert(/waterfall/i.test(mission.futureEffect||''),`${mission.role}: explain how the proposed correction helps restore the fictional waterfall.`);
  assert(mission.conceptSketch===false&&mission.image===`jewel-mission-${mission.id}.png`,`${mission.role}: use the pinned actual mission introduction.`);
  assert(/Actual Unreal mission introduction/.test(mission.alt)&&/ACTUAL UNREAL/.test(mission.caption)&&/MISSION INTRODUCTION/.test(mission.caption),`${mission.role}: identify native introduction pixels accurately.`);
}
assert(new Set(data.eight.missions.map(m=>m.image)).size===8,'Each Eight Keys mission needs its own sketch.');
const missionText=id=>{
  const mission=data.eight.missions.find(item=>item.id===id);
  return [mission?.objective,mission?.description,...(mission?.actions||[]),mission?.success,mission?.futureEffect].filter(Boolean).join(' ');
};
const bimText=missionText('bim');
assert([/shrink/i,/jetpack/i,/menu/i,/clash/i,/waterfall/i].every(pattern=>pattern.test(bimText)),'BIM must explain Shrink Jetpack inspection, clash identification, menu repair and its waterfall connection.');
const siteText=missionText('site');
assert([/pump/i,/crane|lift/i,/stop/i,/recheck/i,/waterfall/i].every(pattern=>pattern.test(siteText)),'Site explains the actual controlled pump lift and Stop/recheck safety checks.');
const planningText=missionText('planning');
assert([/top[- ]down/i,/barrier/i,/arrow/i,/test|verif/i,/delivery|vehicle/i].every(pattern=>pattern.test(planningText)),'Planning explains the actual top-down diversion, barriers, arrows and delivery-route test.');
const finaleText=[data.eight.storyText,...data.eight.steps.flat(),data.eight.prototype.pending].join(' ');
assert([/eight unique keys/i,/returned/i,/director/i,/secret door/i,/hidden button/i].every(pattern=>pattern.test(finaleText)),'The revised finale needs eight unique returned keys, the Director, secret door and hidden button.');
assert(!/\bportal\b|balcony gear/i.test(finaleText),'The revised Eight Keys journey uses the time machine and hidden button.');
const stations=data.eight.teamPlay?.stations||[];
assert(stations.length===9&&stations.filter(s=>s.host).length===1,'Planned setup needs nine PCs with exactly one host.');
assert(stations.find(s=>s.host)?.role==='Director'&&stations.filter(s=>!s.host).length===8,'The Director hosts and eight student roles join.');
assert(stations.filter(s=>!s.host).map(s=>s.role).join(',')===data.eight.missions.map(m=>m.role).join(','),'Student PC roles must match the eight missions.');
assert(/time machine/i.test(finaleText)&&/watch/i.test(finaleText),'The revised story needs time-machine travel and watch returns.');
for(const [edition,d] of Object.entries(data)){
  const ids=d.missions.map(m=>m.id);
  assert(new Set(ids).size===ids.length,`${edition}: mission IDs must be unique.`);
  const assets=[d.hero,d.storyImage,d.prototype?.image,...(d.showcase?.views||[]),...d.gallery.map(g=>g[0]),...d.missions.map(m=>m.image),...(d.storyConcepts||[]).map(c=>c.image),d.teamPlay?.eventConcept?.image,...(d.videos||[d.video]).filter(Boolean).flatMap(v=>[v.src,v.poster])].filter(Boolean);
  for(const name of assets)assert(existsSync(join(root,'assets',name)),`${edition}: missing asset ${name}`);
  for(const name of d.showcase?.views||[])assert(d.gallery.some(item=>item[0]===name),`${edition}: showcase view must open an existing gallery image: ${name}`);
  if(d.prototype){
    assert(d.gallery.some(item=>item[0]===d.prototype.image),`${edition}: current-build image must open an existing gallery item.`);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(d.prototype.date),`${edition}: current-build update needs an ISO date.`);
  }
}
const provenance=JSON.parse(readFileSync(new URL('../MEDIA-PROVENANCE.json',import.meta.url),'utf8'));
for(const [file,kind] of [['assets/godot-site.webp','native Godot capture'],['assets/v055-upper-deck-cover.webp','user-supplied native Unreal screenshot']]){
  assert(provenance.assets.some(entry=>entry.file===file&&entry.kind===kind),`${file}: event monitor image needs native gameplay provenance.`);
}
for(const mission of data.eight.missions){
  const entry=provenance.assets.find(item=>item.file===`assets/${mission.image}`);
  assert(entry?.edition==='eight-keys'&&entry.kind==='native Unreal mission introduction capture'&&entry.role===mission.storyID&&entry.source?.sha256&&entry.transform?.byte_exact_copy===true,`${mission.role}: actual introduction image requires pinned native provenance.`);
}
for(const entry of provenance.assets){
  const path=join(root,entry.file);
  assert(existsSync(path),`Missing provenance asset ${entry.file}`);
  if(existsSync(path)){
    assert(createHash('sha256').update(readFileSync(path)).digest('hex')===entry.sha256,`Changed media hash ${entry.file}`);
    assert(statSync(path).size===entry.bytes,`Changed media size ${entry.file}`);
  }
  if(entry.kind==='native Unreal v031 capture'){
    assert(/^design\/evidence\/crew-upgrade-v031\/captures\/.+\.png$/.test(entry.source?.file||''),`v031 media requires a selected native evidence source: ${entry.file}`);
    assert(/^[a-f0-9]{64}$/.test(entry.source?.sha256||''),`v031 media requires its exact source SHA-256: ${entry.file}`);
  }
  if(entry.kind==='native Unreal v046 capture'){
    assert(/^design\/evidence\/jewel-water-v046\/images\/(review|bootreview)\/.+\.png$/.test(entry.source?.file||''),`Current media must come from selected native v046 evidence, not raw references: ${entry.file}`);
    assert(/^[a-f0-9]{64}$/.test(entry.source?.sha256||''),`Current media needs its exact source SHA-256: ${entry.file}`);
    assert(entry.transform?.crop===null&&entry.transform?.color_adjustments===false,`Current capture composition/colour must be preserved: ${entry.file}`);
  }
  if(['native Unreal v046 upper-deck capture','user-supplied native Unreal screenshot'].includes(entry.kind)){
    assert(/^notes\/upper-deck-v055\/originals\/.+\.png$/.test(entry.source?.file||''),`Upper-deck media requires its preserved source: ${entry.file}`);
    assert(/^[a-f0-9]{64}$/.test(entry.source?.sha256||''),`Upper-deck media requires its exact source SHA-256: ${entry.file}`);
    assert(entry.transform?.crop===null&&entry.transform?.color_adjustments===false&&entry.transform?.AI_image_alteration===false,`Upper-deck frames and colours must be preserved: ${entry.file}`);
  }
}
const jetpack=data.eight.controls.find(row=>row[0]==='JETPACK / LAND');
const dash=data.eight.controls.find(row=>row[0]==='AIR DASH');
assert(jetpack?.[2]==='LB'&&data.eight.controls.find(row=>row[0]==='RUN')?.[2]==='Hold RB'&&dash?.[2]==='D-pad Up','Current local Xbox mappings are RB Run and LB Jetpack; other mappings retained.');
assert(/earlier public Windows preview/i.test(data.eight.prototype.note)&&/does not contain all features/i.test(data.eight.prototype.note)&&/does not run in a browser/i.test(data.eight.prototype.note),'Distinguish earlier public preview, current local demonstration and browser availability.');
assert(/does not collect team keys/i.test(data.eight.prototype.pending)&&data.eight.storyNote.includes('fictional'),'Independent demo resets must be separate from the team finale and fictional story.');
assert(/nine-PC.*remain to be tested/i.test(data.eight.teamPlay.status),'Nine-PC event operation is pending, not accepted.');
assert(data.eight.video.src==='jewel-opening.mp4'&&data.eight.video.poster==='jewel-opening-poster.png'&&data.eight.video.transcript.length>80,'Opening video, genuine poster and visual description provided.');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(!/^(https?:|data:)/.test(match[1]))assert(existsSync(join(root,match[1].split(/[?#]/,1)[0])),`Missing HTML dependency ${match[1]}`);
}
const fontCSS=readFileSync(join(root,'fonts.css'),'utf8');
for(const match of fontCSS.matchAll(/url\('([^']+)'\)/g)){
  const font=join(root,match[1]);
  assert(existsSync(font),`Missing font ${match[1]}`);
  if(existsSync(font))assert(readFileSync(font).subarray(0,4).toString()==='wOF2',`Invalid WOFF2 ${match[1]}`);
}
for(const name of readdirSync(join(root,'assets'))){
  const path=join(root,'assets',name);
  assert(statSync(path).size<95_000_000,`${name} exceeds ordinary Git media size budget.`);
  if(name.endsWith('.mp4'))assert(readFileSync(path).subarray(4,8).toString()==='ftyp',`${name} is not an MP4 container.`);
}
assert(!/\b(?:[A-Z]:[\\/]|\.\.[\\/])/.test(source),'Public content must not expose absolute local paths.');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else{console.log(`Static checks passed:13 mission briefs, exact Five Keys content, stable role IDs, actual mission media, current controls/local-versus-team status, earlier-public-preview limit, all linked assets,${provenance.assets.length} media hashes, MP4 containers, fonts, relative paths and media sizes.`);}
