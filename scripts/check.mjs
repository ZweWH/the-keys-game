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
assert(data.five.missions.map(m=>m.id).join(',')==='bim,site,technical,planning,qaqc','Preserve the five playable mission IDs and order.');
assert(data.eight.missions.map(m=>m.id).join(',')==='bim,site,technical,planning,qaqc,safety,quantity,geotechnical','Preserve the eight website mission IDs and role order.');
for(const mission of data.five.missions){
  assert(mission.setting?.trim()&&mission.stage?.trim()&&mission.objective?.trim()&&mission.success?.trim(),`${mission.role}: playable mission brief needs its setting, objective and final check.`);
}
for(const mission of data.eight.missions){
  assert(mission.objective?.trim()&&mission.success?.trim(),`${mission.role}: proposed mission needs an objective and completion check.`);
  assert(mission.setting?.trim()&&mission.stage?.trim()&&mission.futureEffect?.trim(),`${mission.role}: proposed time-travel mission needs its place, review moment and future effect.`);
  assert(mission.conceptSketch===true&&new RegExp(`^mission-sketch-${mission.id}-v\\d{3}\\.webp$`).test(mission.image),`${mission.role}: show its versioned mission concept sketch first.`);
  assert(/concept sketch/i.test(mission.alt)&&/CONCEPT SKETCH/.test(mission.caption)&&/PROPOSED MISSION/.test(mission.caption),`${mission.role}: concept artwork must be distinguished from gameplay.`);
}
assert(new Set(data.eight.missions.map(m=>m.image)).size===8,'Each Eight Keys mission needs its own sketch.');
for(const [edition,d] of Object.entries(data)){
  const ids=d.missions.map(m=>m.id);
  assert(new Set(ids).size===ids.length,`${edition}: mission IDs must be unique.`);
  const assets=[d.hero,d.storyImage,d.prototype?.image,...(d.showcase?.views||[]),...d.gallery.map(g=>g[0]),...d.missions.map(m=>m.image),...(d.videos||[d.video]).filter(Boolean).flatMap(v=>[v.src,v.poster])].filter(Boolean);
  for(const name of assets)assert(existsSync(join(root,'assets',name)),`${edition}: missing asset ${name}`);
  for(const name of d.showcase?.views||[])assert(d.gallery.some(item=>item[0]===name),`${edition}: showcase view must open an existing gallery image: ${name}`);
  if(d.prototype){
    assert(d.gallery.some(item=>item[0]===d.prototype.image),`${edition}: current-build image must open an existing gallery item.`);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(d.prototype.date),`${edition}: current-build update needs an ISO date.`);
  }
}
const provenance=JSON.parse(readFileSync(new URL('../MEDIA-PROVENANCE.json',import.meta.url),'utf8'));
for(const mission of data.eight.missions){
  const entry=provenance.assets.find(item=>item.file===`assets/${mission.image}`);
  assert(entry?.edition==='eight-keys'&&/AI.generated.*concept sketch/i.test(entry.kind),`${mission.role}: mission artwork needs AI concept-sketch provenance.`);
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
assert(jetpack?.[2]==='RB'&&dash?.[2]==='D-pad Up','Current default Xbox mappings must distinguish RB jetpack from D-pad Up air dash.');
assert(data.eight.prototype.note.includes('not available here yet'),'Unreal browser play and portable download must remain clearly pending.');
assert(data.eight.prototype.pending.includes('unique-key')&&data.eight.storyNote.includes('fictional'),'Planned unique keys and fictional story context must be explicit.');
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
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else{console.log(`Static checks passed: 13 mission briefs, stable Five/Eight role IDs, proposed objectives and verification, current controls/release status, current-build gallery link, all linked assets, ${provenance.assets.length} media hashes, native source identities, MP4 containers, relative paths and media sizes.`);}
