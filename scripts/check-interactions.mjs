// Run the real renderer and navigation against a small DOM fixture. Browser layout and playback need separate checks.
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
  const ids = ['five-roles', 'eight-roles', 'five-media', 'jewel-media', 'overview', 'option-one', 'option-two', 'presentation-flow', 'gallery', 'team-play', 'missions', 'gameplay', 'event-setup'];
  const nodes = Object.fromEntries(ids.map(id => [id, {
    innerHTML: '', hidden: false, scrolled: false, open: false,
    scrollIntoView() { this.scrolled = true; }
  }]));
  let pauses = 0;
  const video = {pause() { pauses++; }};
  const details = {open: true, handler: null, addEventListener(type, handler) { if (type === 'toggle') this.handler = handler; }, querySelectorAll(selector) { return selector === 'video' ? [video] : []; }};
  const links = ['home', 'five', 'eight'].map(view => ({
    dataset: {viewSwitch: view}, attrs: {}, handler: null,
    addEventListener(type, handler) { if (type === 'click') this.handler = handler; },
    setAttribute(name, value) { this.attrs[name] = value; },
    removeAttribute(name) { delete this.attrs[name]; }
  }));
  const document = {
    body: {dataset: {}}, title: '',
    querySelector(selector) { return nodes[selector.slice(1)]; },
    querySelectorAll(selector) {
      if (selector === '.view-nav [data-view-switch]' || selector === '[data-view-switch]') return links;
      if (selector === 'details') return [details];
      if (selector === 'video') return [video];
      return [];
    },
    getElementById(id) { return nodes[id]; }
  };
  const location = {hash, search, pathname: '/the-keys-game/'};
  const history = {pushState(_state, _title, url) {
    const parsed = new URL(url, 'https://example.com');
    location.hash = parsed.hash; location.search = parsed.search; location.pathname = parsed.pathname;
  }};
  const handlers = {};
  const topScrolls = [];
  const context = {window: {addEventListener(type, handler) {handlers[type] = handler;}, scrollTo(options) {topScrolls.push({view: document.body.dataset.view, top: options.top});}}, document, location, history, URL, URLSearchParams};
  vm.runInNewContext(content, context);
  vm.runInNewContext(renderer, context);
  return {nodes, details, links, location, document, handlers, topScrolls, get pauses() { return pauses; }, data: context.window.KEYS_CONTENT};
}

const result = render();
for (const [edition, id] of [['five','five-roles'], ['eight','eight-roles']]) {
  const markup = result.nodes[id].innerHTML;
  const missions = result.data[edition].missions;
  check((markup.match(/class="role-card"/g) || []).length === missions.length, `${edition}: one card per role`);
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
check(result.nodes['jewel-media'].innerHTML.includes(`assets/${result.data.eight.teamPlay.eventConcept.image}`), 'Planned event sketch retained in gallery');
check(html.includes(`assets/${result.data.eight.storyConcepts[0].image}`), 'Team-story sketch retained');
check(html.includes('assets/crew-v7.webp'), 'Group crew artwork retained');
check((result.nodes['five-media'].innerHTML.match(/<video controls playsinline preload="metadata"/g) || []).length === result.data.five.videos.length, 'All Five Keys clips have native playback controls');
check(!/autoplay/i.test(result.nodes['five-media'].innerHTML + html), 'Videos do not autoplay');
check(typeof result.details.handler === 'function', 'Disclosure media installs a toggle handler');
const priorPauseCount = result.pauses;
result.details.handler();
check(result.pauses === priorPauseCount, 'Opening media does not pause it');
result.details.open = false;
result.details.handler();
check(result.pauses === priorPauseCount + 1, 'Closing media pauses contained video');

check(result.document.body.dataset.view === 'home' && !result.nodes.overview.hidden && result.nodes['option-one'].hidden && result.nodes['option-two'].hidden, 'Landing starts as its own view');
check(result.nodes['presentation-flow'].hidden, 'Comparison does not appear on landing');
function activate(fixture, view) {
  let prevented = false;
  fixture.links.find(link => link.dataset.viewSwitch === view).handler({preventDefault() { prevented = true; }});
  check(prevented, `${view}: navigation intercepts the link`);
}
activate(result, 'five');
check(result.document.body.dataset.view === 'five' && !result.nodes['option-one'].hidden && result.nodes.overview.hidden && result.nodes['option-two'].hidden, 'Five Keys selection shows only that game');
check(result.location.search === '?edition=five' && result.location.hash === '#option-one', 'Five Keys selection creates a shareable link');
check(result.links[1].attrs['aria-current'] === 'page' && !result.links[0].attrs['aria-current'], 'Current navigation is announced');
activate(result, 'eight');
check(result.document.body.dataset.view === 'eight' && !result.nodes['option-two'].hidden && result.nodes['option-one'].hidden && !result.nodes['presentation-flow'].hidden, 'Jewel selection shows its game and comparison');
check(result.location.search === '?edition=eight' && result.location.hash === '#option-two', 'Jewel selection creates a shareable link');
activate(result, 'home');
check(result.document.body.dataset.view === 'home' && result.location.search === '' && result.location.hash === '', 'Home returns to the game choice');
check(result.pauses >= priorPauseCount + 4, 'Changing views pauses videos');
check(typeof result.handlers.popstate === 'function', 'Back/forward history handler installed');
result.location.search = '?edition=eight'; result.location.hash = '#team-play'; result.handlers.popstate();
check(result.document.body.dataset.view === 'eight' && result.nodes['team-play'].scrolled, 'History restores the previous view and section');
check(render('#story', '?edition=five').topScrolls.some(s => s.view === 'five' && s.top === 0), 'Older Five Keys story link reaches Option 1');
check(render('#story', '?edition=eight').topScrolls.some(s => s.view === 'eight' && s.top === 0), 'Older Jewel story link reaches Option 2');
check(render('#overview', '?edition=five').topScrolls.some(s => s.view === 'five' && s.top === 0), 'Older Five Keys overview link reaches its game cover');
check(render('#overview', '?edition=eight').topScrolls.some(s => s.view === 'eight' && s.top === 0), 'Older Jewel overview link reaches its game cover');
check(render('#missions', '?edition=five').nodes['five-roles'].scrolled, 'Older Five Keys missions link reaches its role cards');
const fiveGameplay = render('#gameplay', '?edition=five').nodes.gallery;
check(fiveGameplay.scrolled && fiveGameplay.open, 'Older Five Keys gameplay link opens its media');
const jewelTeam = render('#team-play', '?edition=eight');
check(jewelTeam.document.body.dataset.view === 'eight' && jewelTeam.nodes['team-play'].scrolled, 'Older Jewel team-play link selects its game and section');
for (const match of (Object.values(result.nodes).map(node => node.innerHTML).join('') + html).matchAll(/(?:src|poster)="(assets\/[^"#?]+)"/g)) {
  check(existsSync(join(root, match[1])), `Rendered media exists: ${match[1]}`);
}
check(/<nav[^>]*class="view-nav"/.test(html) && /<a href="\?edition=five#option-one" data-view-switch="five"/.test(html), 'Game navigation uses native keyboard-accessible links');
check(css.includes('@media(max-width:720px)') && css.includes('@media(max-width:430px)'), 'Responsive rules retained for small screens');
check(css.includes(':focus-visible') && css.includes('prefers-reduced-motion'), 'Keyboard focus and reduced-motion styles provided');
console.log(`Offline presentation checks passed: ${count}. Browser layout, native keyboard behavior and playback require separate verification.`);
