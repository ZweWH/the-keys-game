(() => {
  'use strict';
  const editions = window.KEYS_CONTENT;
  const panel = document.querySelector('#edition-panel');
  const editionTabs = [...document.querySelectorAll('.edition-tab')];
  const dialog = document.querySelector('#media-dialog');
  const mediaBody = document.querySelector('#media-body');
  const mediaTitle = document.querySelector('#media-title');
  const mediaKind = document.querySelector('#media-kind');
  const mediaCaption = document.querySelector('#media-caption');
  const imageNavigation = document.querySelector('#image-navigation');
  const demoURL = 'https://the-five-keys-demo.decent-bat-2665.chatgpt.site/';
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => `assets/${name}`;
  const initial = new URL(location.href).searchParams.get('edition');
  let current = initial === 'five' ? 'five' : 'eight';
  let galleryIndex = 0;
  let selectedVideo = 0;
  let lastMediaTrigger;
  let revealObserver;
  const lines = text => escape(text).replace(/\n/g, '<br>');
  const playLink = (label, cls = 'button-gold') => `<a class="button ${cls}" href="${demoURL}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
  const missionID = (edition,index) => `${edition}-mission-${index}`;

  function renderMission(index) {
    const data = editions[current];
    const mission = data.missions[index];
    document.querySelectorAll('.mission-tab').forEach((tab,i) => {
      tab.setAttribute('aria-selected',String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    const target = document.querySelector('#mission-panel');
    target.setAttribute('aria-labelledby',missionID(current,index));
    target.innerHTML = `<div class="mission-image"><img src="${asset(mission.image)}" alt="${escape(mission.alt)}" width="1600" height="900"><span class="image-tag">${escape(mission.caption || 'Actual Godot gameplay')}</span></div><div class="mission-copy"><div><span class="eyebrow">${escape(mission.tag)}</span><h3>${escape(mission.title)}</h3><p>${escape(mission.description)}</p></div><div class="mission-actions"><span class="eyebrow">${current === 'eight' ? 'THE PLANNED CHALLENGE' : 'YOUR CHALLENGE'}</span><ol>${mission.actions.map(action=>`<li>${escape(action)}</li>`).join('')}</ol><div class="learning"><strong>What you’ll explore</strong><br>${escape(mission.learning)}</div></div></div>`;
  }

  function videoCard() {
    const data = editions[current];
    const video = data.videos?.[selectedVideo] || data.video;
    if (!video) return `<a class="video-card" href="${demoURL}" target="_blank" rel="noopener noreferrer"><img src="${asset('godot-hub.webp')}" alt="Launch The Five Keys browser game" width="1600" height="900" loading="lazy"><span class="video-play"><span class="play-triangle" aria-hidden="true"></span></span><span class="video-info"><span><span class="eyebrow">PLAY THE ORIGINAL</span><strong>Your adventure starts here</strong></span><span>OPEN BROWSER GAME ↗</span></span></a><p class="video-note">Opens the Godot game in a new tab. The first download is approximately 93 MB; allow the game to finish loading.</p>`;
    return `<button class="video-card" id="watch-video" type="button" aria-label="Watch ${escape(video.title)}"><img src="${asset(video.poster)}" alt="${escape(video.title)} video preview" width="1600" height="900" loading="lazy"><span class="video-play"><span class="play-triangle" aria-hidden="true"></span></span><span class="video-info"><span><span class="eyebrow">${escape(video.label)}</span><strong>${escape(video.title)}</strong></span><span>WATCH FILM ↗</span></span></button>${data.videos?.length > 1 ? `<div class="clip-list" aria-label="Gameplay clips">${data.videos.map((v,i)=>`<button type="button" class="clip-button" data-clip="${i}" aria-pressed="${i === selectedVideo}">${escape(v.title)}</button>`).join('')}</div>` : ''}<p class="video-note">${escape(video.caption)}</p>`;
  }

  function renderEdition(id, updateURL = true) {
    if (!(id in editions)) return;
    current = id;
    selectedVideo = 0;
    const data = editions[id];
    if (dialog.open) dialog.close();
    document.body.dataset.edition = id;
    document.title = `${data.name} — The Keys · Woh Hup`;
    document.querySelector('meta[name="description"]').content = `${data.headline} ${data.description} Explore missions, screenshots and gameplay from ${data.name}, the ${data.engine} adventure.`;
    editionTabs.forEach(tab=>{
      const active = tab.dataset.edition === id;
      tab.setAttribute('aria-selected',String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby',`tab-${id}`);
    const primary = id === 'five' ? playLink(data.primary) : `<a class="button button-gold" href="#missions">${data.primary}<span aria-hidden="true">↓</span></a>`;
    panel.innerHTML = `
      <section class="hero" id="overview" aria-labelledby="hero-title">
        <img class="hero-image" src="${asset(data.hero)}" alt="${escape(data.heroAlt)}" width="1920" height="1080" fetchpriority="high">
        <div class="hero-content"><div class="eyebrow">WOH HUP · BCAA OPEN HOUSE 2027</div><h1 id="hero-title" aria-label="${data.name}"><span>THE</span><span class="title-middle">${data.word}</span><span>KEYS.</span></h1><p class="hero-tagline">${data.headline}</p><p class="hero-description">${data.description}</p><div class="hero-actions">${primary}<a class="button button-outline" href="#gameplay"><span class="play-triangle" aria-hidden="true"></span>Watch gameplay</a></div></div>
        <div class="image-credit">${id === 'five' ? 'Actual Godot gameplay' : 'Native Unreal development capture<br>Jewel environment · v023'}</div><div class="hero-bottom"><span class="hero-status"><span class="status-dot" aria-hidden="true"></span>${data.status}</span><a class="scroll-link" href="#story">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a></div>
      </section>
      <section class="chapter intro" aria-labelledby="intro-title"><div class="chapter-number">01 / ${data.label}</div><div class="intro-layout reveal"><h2 class="display" id="intro-title">${lines(data.intro)}</h2><p class="intro-copy">${data.introText}</p></div><div class="facts">${data.facts.map(([value,label])=>`<div class="fact"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></section>
      <section class="chapter story" id="story" aria-labelledby="story-title"><div class="chapter-number">02 / THE STORY</div><div class="story-layout"><div class="reveal"><span class="eyebrow">${data.storyLabel}</span><h2 class="display" id="story-title">${lines(data.storyTitle)}</h2><p class="body-copy">${data.storyText}</p></div><figure class="story-image-wrap reveal"><img src="${asset(data.storyImage)}" alt="${data.storyAlt}" width="1600" height="900" loading="lazy"><figcaption class="small-caption">${id === 'five' ? 'Follow the portal road in the original Godot demo.' : 'Current Unreal environment. The story journey is in development.'}</figcaption></figure></div><div class="story-steps">${data.steps.map(([title,text],i)=>`<article class="story-step reveal"><span class="number">0${i+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>
      <section class="chapter missions" id="missions" aria-labelledby="missions-title"><div class="chapter-number">03 / ${data.missionLabel}</div><div class="section-head"><h2 id="missions-title" class="display">FIND YOUR ROLE.</h2><p>${data.missionIntro}</p></div><div class="mission-layout"><div class="mission-tabs" role="tablist" aria-label="${data.name} missions" aria-orientation="vertical">${data.missions.map((mission,i)=>`<button id="${missionID(id,i)}" type="button" class="mission-tab" role="tab" aria-controls="mission-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-mission="${i}"><span class="mission-index">0${i+1}</span><span>${mission.role}</span>${mission.isNew ? '<span class="new-tag">NEW</span>' : ''}<span class="mission-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><div class="mission-panel" id="mission-panel" role="tabpanel" tabindex="0"></div></div></section>
      <section class="chapter gameplay" id="gameplay" aria-labelledby="gameplay-title"><div class="chapter-number">04 / ${id === 'five' ? 'PLAY THE ORIGINAL' : 'INSIDE DEVELOPMENT'}</div><div class="gameplay-layout"><div class="reveal"><h2 class="display" id="gameplay-title">${lines(data.gameplayTitle)}</h2><p class="body-copy">${data.gameplayText}</p>${id === 'five' ? playLink('Play in browser') : '<a class="button button-outline" href="#gallery">Explore the screenshots <span aria-hidden="true">↓</span></a>'}</div><div id="video-area">${videoCard()}</div></div><details class="controls-details"><summary>Know your controls <span class="muted">Keyboard + mouse / Xbox</span></summary><div class="controls-grid">${data.controls.map(([action,key,pad])=>`<div class="control"><span>${action}</span>${key}<br><em>Xbox: ${pad}</em></div>`).join('')}</div><p class="controls-note">${id === 'five' ? 'The crane uses a separate hoist control context. Follow the on-screen prompts. Desktop or laptop recommended.' : 'Prototype control mappings. Shrink before activating flight. Hold Space / A to rise; C / B to descend. Physical Xbox validation is pending.'}</p></details></section>
      <section class="chapter gallery" id="gallery" aria-labelledby="gallery-title"><div class="chapter-number">05 / THROUGH THE LENS</div><div class="section-head"><h2 class="display" id="gallery-title">A WORLD TO DISCOVER.</h2><p>${id === 'five' ? 'Glimpses from the original adventure. Open a screenshot to take a closer look.' : 'Real development captures from Jewel, the role rooms and the latest jetpack prototype.'}</p></div><div class="gallery-grid">${data.gallery.map(([image,title,caption],i)=>`<button class="gallery-item reveal" type="button" data-gallery="${i}" aria-label="Enlarge screenshot: ${escape(title)}"><div class="gallery-photo"><img src="${asset(image)}" alt="${escape(caption)}" width="1600" height="900" loading="lazy"></div><h3>${title}</h3><p>${caption}</p></button>`).join('')}</div><p class="gallery-label">${id === 'five' ? 'Captured in Godot · Original five-mission demo' : 'Captured in Unreal · Development images, not completed mission scenes'}</p></section>
      ${id === 'eight' ? `<section class="crew" aria-labelledby="crew-title"><span class="eyebrow">${data.endLabel}</span><h2 class="display" id="crew-title">${lines(data.endTitle)}</h2><p>${data.endText}</p><figure class="crew-art"><img src="${asset('crew-v7.webp')}" alt="The approved crew concept: Portal Hub, BIM Coordinator, Site Engineer, Technical Engineer, Planning Engineer, QAQC Engineer, Safety Engineer, Quantity Surveyor and Geotechnical Engineer." width="1920" height="707" loading="lazy"><figcaption>Crew v7 · Character concept artwork. On small screens, swipe to meet the full crew.</figcaption></figure></section>` : `<section class="end-cta" style="--end-image:url('assets/godot-waterfall.webp')" aria-labelledby="end-title"><span class="eyebrow">${data.endLabel}</span><h2 id="end-title" class="display">${lines(data.endTitle)}</h2><p>${data.endText}</p>${playLink('Play The Five Keys')}</section>`}
      <p class="content-note">${data.note}</p>`;
    renderMission(0);
    bindPanel();
    observeReveals();
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('edition',id);
      history.replaceState({edition:id},'',url);
      document.querySelector('#edition-announcement').textContent = `${data.name} selected. ${data.missions.length} ${id === 'eight' ? 'planned ' : ''}missions available to explore.`;
    }
  }

  function bindPanel() {
    document.querySelectorAll('[data-mission]').forEach(tab=>{
      tab.addEventListener('click',()=>renderMission(Number(tab.dataset.mission)));
      tab.addEventListener('keydown',event=>{
        const keys = ['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const count = editions[current].missions.length;
        const index = Number(tab.dataset.mission);
        let next = event.key === 'Home' ? 0 : event.key === 'End' ? count-1 : (index + (['ArrowDown','ArrowRight'].includes(event.key) ? 1 : -1) + count) % count;
        renderMission(next);
        document.querySelector(`[data-mission="${next}"]`).focus();
      });
    });
    document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
      lastMediaTrigger = button;
      galleryIndex = Number(button.dataset.gallery);
      showImage();
      dialog.showModal();
    }));
    bindVideo();
  }

  function bindVideo() {
    document.querySelector('#watch-video')?.addEventListener('click',event=>{
      lastMediaTrigger = event.currentTarget;
      const data = editions[current];
      const video = data.videos?.[selectedVideo] || data.video;
      mediaKind.textContent = video.label;
      mediaTitle.textContent = video.title;
      mediaCaption.textContent = video.caption;
      imageNavigation.hidden = true;
      mediaBody.innerHTML = `<video controls playsinline preload="metadata" poster="${asset(video.poster)}" aria-label="${escape(video.title)}"><source src="${asset(video.src)}" type="video/mp4">Your browser does not support this video. <a href="${asset(video.src)}">Open the MP4</a>.</video>`;
      dialog.showModal();
      mediaBody.querySelector('video').play().catch(()=>{});
    });
    document.querySelectorAll('[data-clip]').forEach(button=>button.addEventListener('click',()=>{
      selectedVideo = Number(button.dataset.clip);
      document.querySelector('#video-area').innerHTML = videoCard();
      bindVideo();
      document.querySelector(`[data-clip="${selectedVideo}"]`)?.focus();
    }));
  }

  function showImage() {
    const data = editions[current];
    const [image,title,caption] = data.gallery[galleryIndex];
    mediaKind.textContent = `${data.engine} · SCREENSHOT`;
    mediaTitle.textContent = title;
    mediaCaption.textContent = caption;
    imageNavigation.hidden = false;
    document.querySelector('#image-count').textContent = `${galleryIndex+1} / ${data.gallery.length}`;
    mediaBody.innerHTML = `<img src="${asset(image)}" alt="${escape(caption)}">`;
  }

  function changeImage(direction) {
    galleryIndex = (galleryIndex + direction + editions[current].gallery.length) % editions[current].gallery.length;
    showImage();
  }
  document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
  document.querySelector('#previous-image').addEventListener('click',()=>changeImage(-1));
  document.querySelector('#next-image').addEventListener('click',()=>changeImage(1));
  dialog.addEventListener('keydown',event=>{
    if (imageNavigation.hidden) return;
    if (event.key === 'ArrowRight') {event.preventDefault();changeImage(1);}
    if (event.key === 'ArrowLeft') {event.preventDefault();changeImage(-1);}
  });
  dialog.addEventListener('click',event=>{
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close',()=>{
    mediaBody.querySelector('video')?.pause();
    mediaBody.innerHTML = '';
    if (lastMediaTrigger?.isConnected) lastMediaTrigger.focus({preventScroll:true});
  });
  editionTabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>renderEdition(tab.dataset.edition));
    tab.addEventListener('keydown',event=>{
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1-index;
      renderEdition(editionTabs[next].dataset.edition);
      editionTabs[next].focus();
    });
  });
  document.querySelectorAll('[data-switch]').forEach(button=>button.addEventListener('click',()=>{
    renderEdition(button.dataset.switch);
    document.querySelector('#overview').scrollIntoView();
    document.querySelector(`#tab-${current}`).focus({preventScroll:true});
  }));
  function observeReveals() {
    revealObserver?.disconnect();
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('motion-ready');
    revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if (entry.isIntersecting) {entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
    }),{threshold:.08,rootMargin:'0px 0px 30px 0px'});
    document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));
  }
  window.addEventListener('popstate',()=>renderEdition(new URL(location.href).searchParams.get('edition') === 'five' ? 'five' : 'eight',false));
  renderEdition(current,false);
})();
