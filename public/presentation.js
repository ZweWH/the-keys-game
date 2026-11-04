(() => {
  'use strict';
  const {five, eight} = window.KEYS_CONTENT;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const image = (name, alt) => `<img src="assets/${escape(name)}" alt="${escape(alt)}" loading="lazy">`;
  const figure = (name, alt, caption) => `<figure>${image(name,alt)}<figcaption>${escape(caption)}</figcaption></figure>`;
  const roles = data => data.missions.map((role, i) => `<article class="role-card">${image(role.image,role.alt)}<div><span class="role-number">${String(i+1).padStart(2,'0')} / ${escape(role.role)}</span><h4>${escape(role.title)}</h4><p>${escape(role.description)}</p></div></article>`).join('');
  document.querySelector('#five-roles').innerHTML = roles(five);
  document.querySelector('#eight-roles').innerHTML = roles(eight);
  const videos = five.videos.map(video => `<figure class="clip"><video controls playsinline preload="metadata" poster="assets/${escape(video.poster)}" aria-label="${escape(video.title)}"><source src="assets/${escape(video.src)}" type="video/mp4">Your browser cannot play the video. <a href="assets/${escape(video.src)}">Open the video</a>.</video><figcaption><strong>${escape(video.title)}</strong> · ${escape(video.caption)}</figcaption></figure>`).join('');
  const gallery = data => data.gallery.map(([src,title,caption])=>figure(src,caption,`${title} · ${caption}`)).join('');
  document.querySelector('#five-media').innerHTML = `<h4>Gameplay clips</h4><div class="media-grid">${videos}</div><h4>Images from the game and badge designs</h4><div class="media-grid">${gallery(five)}${figure(five.storyImage,five.storyAlt,five.storyCaption || 'Game view')}</div>`;
  const event = eight.teamPlay.eventConcept;
  document.querySelector('#jewel-media').innerHTML = `<p class="small-note">Actual game views and concept art are labelled below. Earlier captures may show older character designs.</p><div class="media-grid">${gallery(eight)}${figure(event.image,event.alt,`${event.caption} · ${event.text}`)}</div>`;
  // Three views share the same document; ordinary links keep keyboard and browser navigation natural.
  const views = {home: document.getElementById('overview'), five: document.getElementById('option-one'), eight: document.getElementById('option-two')};
  const comparison = document.getElementById('presentation-flow');
  const navLinks = document.querySelectorAll('.view-nav [data-view-switch]');
  const links = document.querySelectorAll('[data-view-switch]');
  const detectView = () => {
    const edition = new URLSearchParams(location.search).get('edition');
    if (edition === 'five' || edition === 'eight') return edition;
    const hash = location.hash;
    if (['#option-one', '#five-details', '#five-roles', '#gallery', '#next-chapter'].includes(hash)) return 'five';
    if (['#option-two', '#eight-details', '#team-play', '#event-setup', '#missions', '#gameplay', '#crew-title', '#current-build', '#presentation-flow', '#story'].includes(hash)) return 'eight';
    return 'home';
  };
  const showView = (name, target) => {
    Object.entries(views).forEach(([key, section]) => { section.hidden = key !== name; });
    document.body.dataset.view = name;
    comparison.hidden = name !== 'eight';
    navLinks.forEach(link => {
      if (link.dataset.viewSwitch === name) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = name === 'five' ? 'The Five Keys: Beyond the Lock' : name === 'eight' ? 'Jewel: The Last Timeline' : 'BCAA Open House | Game Showcase';
    document.querySelectorAll('video').forEach(video => video.pause());
    if (['overview', 'option-one', 'option-two'].includes(target)) window.scrollTo({top: 0, behavior: 'instant'});
    else if (target) document.getElementById(target)?.scrollIntoView();
  };
  const restore = () => {
    const view = detectView();
    let target = location.hash.slice(1);
    if (view !== 'home' && target === 'overview') target = `option-${view === 'five' ? 'one' : 'two'}`;
    if (target === 'story') target = view === 'five' ? 'option-one' : 'option-two';
    if (view === 'five' && target === 'missions') target = 'five-roles';
    if (view === 'five' && target === 'gameplay') { document.getElementById('gallery').open = true; target = 'gallery'; }
    showView(view, target || (view === 'home' ? 'overview' : `option-${view === 'five' ? 'one' : 'two'}`));
  };
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const view = link.dataset.viewSwitch;
    const destination = view === 'home' ? location.pathname : `${location.pathname}?edition=${view}#option-${view === 'five' ? 'one' : 'two'}`;
    history.pushState({}, '', destination);
    showView(view, view === 'home' ? 'overview' : `option-${view === 'five' ? 'one' : 'two'}`);
  }));
  window.addEventListener('popstate', restore);
  restore();
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => {
    if (!details.open) details.querySelectorAll('video').forEach(video => video.pause());
  }));
})();



