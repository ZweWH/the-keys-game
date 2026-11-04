// Exercise the actual presentation renderer offline. Browser layout and playback need separate checks.
import {readFileSync, existsSync} from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const content = readFileSync(join(root, 'content.js'), 'utf8');
const renderer = readFileSync(join(root, 'presentation.js'), 'utf8');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'presentation.css'), 'utf8');
let count = 0;
const check = (ok, message) => { if (!ok) throw new Error(message); count++; };

function render(hash = '', search = '') {
  const nodes = Object.fromEntries(['five-roles', 'eight-roles', 'five-media', 'jewel-media', 'option-one', 'option-two', 'gallery'].map(id => [id, {
    innerHTML: '', scrolled: false, scrollIntoView() { this.scrolled = true; }
  }]));
  let pauses = 0;
  const details = {open: true, handler: null, addEventListener(type, handler) { if (type === 'toggle') this.handler = handler; }, querySelectorAll(selector) { return selector === 'video' ? [{pause() { pauses++; }}] : []; }};
  const document = {
    querySelector(selector) { return nodes[selector.slice(1)]; },
    querySelectorAll(selector) { return selector === 'details' ? [details] : []; },
    getElementById(id) { return nodes[id]; }
  };
  const context = {window: {}, document, location: {hash, search, href: `https://example.com/${search}${hash}`}, URL, URLSearchParams};
  vm.runInNewContext(content, context);
  vm.runInNewContext(renderer, context);
  return {nodes, details, get pauses() { return pauses; }, data: context.window.KEYS_CONTENT};
}

const result = render();
for (const [edition, id] of [['five','five-roles'], ['eight','eight-roles']]) {
  const markup = result.nodes[id].innerHTML;
  const missions = result.data[edition].missions;
  check((markup.match(/class="role-card"/g) || []).length === missions.length, `${edition}: one visible card per role`);
  for (const mission of missions) {
    check(markup.includes(mission.role), `${edition}: role ${mission.role}`);
    check(markup.includes(`assets/${mission.image}`), `${edition}: image for ${mission.role}`);
  }
}
for (const item of result.data.five.videos) {
  check(result.nodes['five-media'].innerHTML.includes(`assets/${item.src}`), `Five Keys clip ${item.src}`);
  check(result.nodes['five-media'].innerHTML.includes(`assets/${item.poster}`), `Five Keys clip poster ${item.poster}`);
}
for (const [edition, id] of [['five','five-media'], ['eight','jewel-media']]) {
  for (const [image] of result.data[edition].gallery) check(result.nodes[id].innerHTML.includes(`assets/${image}`), `${edition}: gallery image ${image}`);
}
check(result.nodes['jewel-media'].innerHTML.includes(`assets/${result.data.eight.teamPlay.eventConcept.image}`), 'Planned event sketch retained');
check(html.includes(`assets/${result.data.eight.storyConcepts[0].image}`), 'Team-story sketch retained');
check(html.includes('assets/crew-v7.webp'), 'Group crew artwork retained');
check((result.nodes['five-media'].innerHTML.match(/<video controls playsinline preload="metadata"/g) || []).length === result.data.five.videos.length, 'All Five Keys clips have native playback controls');
check(!/autoplay/i.test(result.nodes['five-media'].innerHTML + html), 'Videos do not autoplay');
check(typeof result.details.handler === 'function', 'Disclosure media installs a toggle handler');
result.details.handler();
check(result.pauses === 0, 'Opening media does not pause it');
result.details.open = false;
result.details.handler();
check(result.pauses === 1, 'Closing media pauses contained video');
check(render('#story', '?edition=five').nodes['option-one'].scrolled, 'Older Five Keys story link reaches Option 1');
check(render('#story', '?edition=eight').nodes['option-two'].scrolled, 'Older Jewel story link reaches Option 2');
check(render('#missions', '?edition=five').nodes['five-roles'].scrolled, 'Older Five Keys missions link reaches its role cards');
const fiveGameplay = render('#gameplay', '?edition=five').nodes.gallery;
check(fiveGameplay.scrolled && fiveGameplay.open, 'Older Five Keys gameplay link opens its media');
for (const match of (Object.values(result.nodes).map(node => node.innerHTML).join('') + html).matchAll(/(?:src|poster)="(assets\/[^"#?]+)"/g)) {
  check(existsSync(join(root, match[1])), `Rendered media exists: ${match[1]}`);
}
check(css.includes('@media(max-width:720px)') && css.includes('@media(max-width:430px)'), 'Responsive rules retained for small screens');
check(css.includes(':focus-visible') && css.includes('prefers-reduced-motion'), 'Keyboard focus and reduced-motion styles provided');
console.log(`Offline presentation checks passed: ${count}. Browser layout and playback are not claimed.`);
