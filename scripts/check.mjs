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
assert(data.five.missions.length===5,'Godot must explain five missions.');
assert(data.eight.missions.length===8,'Unreal must explain eight missions.');
assert(data.eight.missions[7].role==='Geotechnical Engineer','Eighth role must be Geotechnical Engineer.');
for(const mission of data.eight.missions){
  assert(mission.objective?.trim()&&mission.success?.trim(),`${mission.role}: proposed mission needs an objective and completion check.`);
  assert(mission.setting?.trim()&&mission.stage?.trim()&&mission.futureEffect?.trim(),`${mission.role}: proposed time-travel mission needs its place, review moment and future effect.`);
}
for(const [edition,d] of Object.entries(data)){
  const ids=d.missions.map(m=>m.id);
  assert(new Set(ids).size===ids.length,`${edition}: mission IDs must be unique.`);
  const assets=[d.hero,d.storyImage,d.prototype?.image,...d.gallery.map(g=>g[0]),...d.missions.map(m=>m.image),...(d.videos||[d.video]).filter(Boolean).flatMap(v=>[v.src,v.poster])].filter(Boolean);
  for(const name of assets)assert(existsSync(join(root,'assets',name)),`${edition}: missing asset ${name}`);
  if(d.prototype){
    assert(d.gallery.some(item=>item[0]===d.prototype.image),`${edition}: current-build image must open an existing gallery item.`);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(d.prototype.date),`${edition}: current-build update needs an ISO date.`);
  }
}
const provenance=JSON.parse(readFileSync(new URL('../MEDIA-PROVENANCE.json',import.meta.url),'utf8'));
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
}
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(!/^(https?:|data:)/.test(match[1]))assert(existsSync(join(root,match[1])),`Missing HTML dependency ${match[1]}`);
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
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else{console.log(`Static checks passed: 13 missions, eight proposed objectives/completion checks and time-travel settings, current-build gallery link, all linked assets, ${provenance.assets.length} media hashes, native source identities, MP4 containers, relative paths and media sizes.`);}
