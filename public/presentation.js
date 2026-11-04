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
  // Keep links shared from the earlier edition layout useful on the one-page showcase.
  const oldEdition = new URLSearchParams(location.search).get('edition');
  if (location.hash === '#story') {
    document.getElementById(oldEdition === 'five' ? 'option-one' : 'option-two').scrollIntoView();
  } else if (oldEdition === 'five' && location.hash === '#missions') {
    document.getElementById('five-roles').scrollIntoView();
  } else if (oldEdition === 'five' && location.hash === '#gameplay') {
    const galleryDetails = document.getElementById('gallery');
    galleryDetails.open = true;
    galleryDetails.scrollIntoView();
  }
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => {
    if (!details.open) details.querySelectorAll('video').forEach(video => video.pause());
  }));
})();



