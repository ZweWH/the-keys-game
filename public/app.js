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
    const objective = mission.objective ? `<div class="mission-objective"><span class="eyebrow">${current === 'eight' ? 'PLANNED GOAL' : 'GOAL'}</span><p>${escape(mission.objective)}</p></div>` : '';
    const success = mission.success ? `<div class="mission-success"><strong>Complete when${current === 'eight' ? ' · planned' : ''}</strong><p>${escape(mission.success)}</p></div>` : '';
    const setting = mission.setting ? `<div class="mission-setting"><span class="eyebrow">${current === 'eight' ? 'PLANNED SETTING' : 'SETTING'}</span><p>${escape(mission.setting)}</p><span>${escape(mission.stage)}</span></div>` : '';
    const future = mission.futureEffect ? `<div class="mission-future"><strong>${current === 'eight' ? 'How it helps the waterfall · planned' : 'The teamwork lesson'}</strong><p>${escape(mission.futureEffect)}</p></div>` : '';
    const picture = `<img src="${asset(mission.image)}" alt="${escape(mission.alt)}" width="1600" height="900"><span class="image-tag">${escape(mission.caption || 'Actual Godot gameplay')}</span>`;
    const image = mission.conceptSketch ? `<button class="mission-image mission-sketch" type="button" data-mission-sketch aria-label="Enlarge concept sketch: ${escape(mission.title)}">${picture}</button>` : `<div class="mission-image">${picture}</div>`;
    target.innerHTML = `${image}${setting}${objective}<div class="mission-copy"><div><span class="eyebrow">${escape(mission.tag)}</span><h3>${escape(mission.title)}</h3><p>${escape(mission.description)}</p></div><div class="mission-actions"><span class="eyebrow">${current === 'eight' ? 'PLANNED STEPS' : 'YOUR STEPS'}</span><ol>${mission.actions.map(action=>`<li>${escape(action)}</li>`).join('')}</ol>${success}<div class="learning"><strong>What you learn</strong><br>${escape(mission.learning)}</div>${future}</div></div>`;
    target.querySelector('[data-mission-sketch]')?.addEventListener('click',event=>{
      lastMediaTrigger = event.currentTarget;
      mediaKind.textContent = 'AI CONCEPT SKETCH · PROPOSED MISSION';
      mediaTitle.textContent = mission.title;
      mediaCaption.textContent = `${mission.alt} This is a planned game idea, not gameplay.`;
      imageNavigation.hidden = true;
      mediaBody.innerHTML = `<img src="${asset(mission.image)}" alt="${escape(mission.alt)}">`;
      dialog.showModal();
    });
  }

  function videoCard() {
    const data = editions[current];
    if (data.showcase) {
      return `<div class="jewel-showcase" aria-label="${escape(data.showcase.label)}">${data.showcase.views.map(name=>{
        const index = data.gallery.findIndex(item=>item[0] === name);
        const [image,title,caption] = data.gallery[index];
        return `<button class="jewel-view" type="button" data-gallery="${index}" aria-label="View full image: ${escape(title)}"><img src="${asset(image)}" alt="${escape(caption)}" width="1600" height="900" loading="lazy"><span class="jewel-view-title"><strong>${escape(title)}</strong><span aria-hidden="true">↗</span></span></button>`;
      }).join('')}</div><p class="video-note">${escape(data.showcase.caption)}</p>`;
    }
    const video = data.videos?.[selectedVideo] || data.video;
    if (!video) return `<a class="video-card" href="${demoURL}" target="_blank" rel="noopener noreferrer"><img src="${asset('godot-hub.webp')}" alt="Launch The Five Keys browser game" width="1600" height="900" loading="lazy"><span class="video-play"><span class="play-triangle" aria-hidden="true"></span></span><span class="video-info"><span><span class="eyebrow">PLAY THE ORIGINAL</span><strong>Your adventure starts here</strong></span><span>OPEN BROWSER GAME ↗</span></span></a><p class="video-note">Opens the Godot game in a new tab. The first download is approximately 93 MB; allow the game to finish loading.</p>`;
    return `<button class="video-card" id="watch-video" type="button" aria-label="Watch ${escape(video.title)}"><img src="${asset(video.poster)}" alt="${escape(video.title)} video preview" width="1600" height="900" loading="lazy"><span class="video-play"><span class="play-triangle" aria-hidden="true"></span></span><span class="video-info"><span><span class="eyebrow">${escape(video.label)}</span><strong>${escape(video.title)}</strong></span><span>WATCH VIDEO ↗</span></span></button>${data.videos?.length > 1 ? `<div class="clip-list" aria-label="Gameplay clips">${data.videos.map((v,i)=>`<button type="button" class="clip-button" data-clip="${i}" aria-pressed="${i === selectedVideo}">${escape(v.title)}</button>`).join('')}</div>` : ''}<p class="video-note">${escape(video.caption)}</p>`;
  }

  function afterGameSection(data) {
    const after = data.afterGame;
    if (!after) return '';
    const reportIndex = data.gallery.findIndex(item=>item[0] === after.reportImage);
    const badgeIndex = data.gallery.findIndex(item=>item[0] === after.badgeImage);
    return `<section class="chapter outcomes" id="next-chapter" aria-labelledby="outcomes-title">
      <div class="chapter-number">05 / BEYOND THE GAME</div>
      <div class="outcomes-heading reveal"><span class="eyebrow">YOUR REPORT · STUDY OPTIONS · YOUR BADGE</span><h2 class="display" id="outcomes-title">${lines(after.title)}</h2><p>${escape(after.intro)}</p></div>
      <div class="report-layout"><div class="report-steps">${after.reportSteps.map(([title,text],i)=>`<article class="report-step reveal"><span class="number">0${i+1}</span><div><h3>${escape(title)}</h3><p>${escape(text)}</p></div></article>`).join('')}</div><figure class="report-preview reveal"><button type="button" class="outcome-image" data-gallery="${reportIndex}" aria-label="Enlarge the example student report"><img src="${asset(after.reportImage)}" alt="Example Five Keys report showing role strengths, mission results and a BCA Academy study-pathways link." width="1600" height="900" loading="lazy"><span class="enlarge-label">VIEW EXAMPLE REPORT <span aria-hidden="true">↗</span></span></button><figcaption>${escape(after.reportCaption)}</figcaption></figure></div>
      <p class="report-context">${escape(after.reportNote)}</p>
      <div class="pathway-heading"><span class="eyebrow">STUDY OPTIONS</span><h3 class="display">FIND YOUR NEXT STEP.</h3><p>Choose a role, then visit BCA Academy to learn about the course.</p></div>
      <div class="pathway-grid">${after.paths.map((path,i)=>`<article class="pathway-card reveal" style="--role-color:${path.color}"><span class="pathway-number">0${i+1} / ROLE TO EXPLORE</span><h4>${escape(path.role)}</h4><p>${escape(path.focus)}</p><div class="pathway-course"><span>STUDY OPTION</span><strong>${escape(path.course)}</strong><a href="${path.url}" target="_blank" rel="noopener noreferrer" aria-label="Explore ${escape(path.course)} for ${escape(path.role)} on BCA Academy">Explore this diploma <span aria-hidden="true">↗</span></a></div></article>`).join('')}</div>
      <p class="pathway-note">${escape(after.pathwayNote)}</p>
      <div class="badge-layout"><div class="badge-copy reveal"><span class="eyebrow">YOUR ROLE BADGE</span><h3 class="display">${lines(after.badgeTitle)}</h3><p>${escape(after.badgeText)}</p><div class="badge-roles">${after.paths.map(path=>`<span style="--role-color:${path.color}">${escape(path.role)}</span>`).join('')}</div></div><figure class="badge-preview reveal"><button type="button" class="outcome-image" data-gallery="${badgeIndex}" aria-label="Enlarge the five role badge designs"><img src="${asset(after.badgeImage)}" alt="3D product render of the five circular Woh Hup role badges: BIM Coordinator, Site Engineer, Technical Engineer, Planning Engineer and QAQC Engineer." width="2000" height="1420" loading="lazy"><span class="enlarge-label">VIEW BADGES <span aria-hidden="true">↗</span></span></button><figcaption>${escape(after.badgeCaption)}</figcaption></figure></div>
    </section>`;
  }

  function prototypeSection(data) {
    const update = data.prototype;
    if (!update) return '';
    const imageIndex = data.gallery.findIndex(item=>item[0] === update.image);
    return `<section class="chapter prototype-update" id="current-build" aria-labelledby="prototype-title">
      <div class="prototype-dateline"><span class="chapter-number">SHOWN BUILD / ${escape(update.version)}</span><time datetime="${escape(update.date)}">${escape(update.dateLabel)}</time></div>
      <div class="prototype-layout"><div class="prototype-copy reveal"><span class="eyebrow">${escape(update.eyebrow || 'THE CURRENT UNREAL PROTOTYPE')}</span><h2 class="display" id="prototype-title">${lines(update.title)}</h2><p class="body-copy">${escape(update.intro)}</p><a class="text-link" href="#missions">See the mission plans <span aria-hidden="true">↓</span></a></div><figure class="prototype-image reveal"><button type="button" data-gallery="${imageIndex}" aria-label="Enlarge the current prototype capture"><img src="${asset(update.image)}" alt="${escape(update.alt)}" width="1600" height="900" loading="lazy"><span class="enlarge-label">VIEW GAME IMAGE <span aria-hidden="true">↗</span></span></button><figcaption>${escape(update.caption)}</figcaption></figure></div>
      <div class="prototype-features">${update.features.map(([title,text],i)=>`<article class="reveal"><span class="number">0${i+1}</span><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join('')}</div>
      <p class="prototype-pending"><strong>STILL TO BUILD</strong>${escape(update.pending)}</p><p class="prototype-note">${escape(update.note)}</p>
    </section>`;
  }

  function renderEdition(id, updateURL = true) {
    if (!(id in editions)) return;
    current = id;
    selectedVideo = 0;
    const data = editions[id];
    if (dialog.open) dialog.close();
    document.body.dataset.edition = id;
    document.querySelector('#outcomes-nav').hidden = !data.afterGame;
    document.querySelector('#gallery-nav').hidden = id === 'eight';
    document.title = `${data.name} — The Keys · Woh Hup`;
    document.querySelector('meta[property="og:title"]').content = data.name;
    document.querySelector('meta[property="og:description"]').content = `${data.headline} ${data.description}`;
    document.querySelector('meta[name="description"]').content = `${data.headline} ${data.description} See the missions and game views.`;
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
        <div class="hero-content"><div class="eyebrow">WOH HUP · BCAA OPEN HOUSE 2027</div><h1 id="hero-title" aria-label="${data.name}"><span>THE</span><span class="title-middle">${data.word}</span><span>KEYS.</span>${data.subtitle ? `<span class="hero-subtitle">${escape(data.subtitle)}</span>` : ''}</h1><p class="hero-tagline">${data.headline}</p><p class="hero-description">${data.description}</p><div class="hero-actions">${primary}<a class="button button-outline" href="${id === 'five' ? '#gameplay' : '#current-build'}">${id === 'five' ? '<span class="play-triangle" aria-hidden="true"></span>Watch gameplay' : 'See the current build <span aria-hidden="true">↓</span>'}</a></div></div>
        <div class="image-credit">${lines(data.heroCredit || 'Development capture')}</div><div class="hero-bottom"><span class="hero-status"><span class="status-dot" aria-hidden="true"></span>${data.status}</span><a class="scroll-link" href="#story">THE STORY <span aria-hidden="true">↓</span></a></div>
      </section>
      <section class="chapter intro" aria-labelledby="intro-title"><div class="chapter-number">01 / ${data.label}</div><div class="intro-layout reveal"><h2 class="display" id="intro-title">${lines(data.intro)}</h2><div><p class="intro-copy">${data.introText}</p>${data.afterGame ? '<a class="outcomes-teaser" href="#next-chapter">Your report, study options & badge <span aria-hidden="true">↓</span></a>' : ''}</div></div><div class="facts">${data.facts.map(([value,label])=>`<div class="fact"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></section>
      ${prototypeSection(data)}
      <section class="chapter story" id="story" aria-labelledby="story-title"><div class="chapter-number">02 / THE STORY</div><div class="story-layout"><div class="reveal"><span class="eyebrow">${data.storyLabel}</span><h2 class="display" id="story-title">${lines(data.storyTitle)}</h2><p class="body-copy">${data.storyText}</p>${data.storyNote ? `<p class="story-note">${escape(data.storyNote)}</p>` : ''}</div><figure class="story-image-wrap reveal"><img src="${asset(data.storyImage)}" alt="${data.storyAlt}" width="1600" height="900" loading="lazy"><figcaption class="small-caption">${escape(data.storyCaption || '')}</figcaption></figure></div><div class="story-steps">${data.steps.map(([title,text],i)=>`<article class="story-step reveal"><span class="number">0${i+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>
      <section class="chapter missions" id="missions" aria-labelledby="missions-title"><div class="chapter-number">03 / ${data.missionLabel}</div><div class="section-head"><h2 id="missions-title" class="display">FIND YOUR ROLE.</h2><p>${data.missionIntro}</p></div><div class="mission-layout"><div class="mission-tabs" role="tablist" aria-label="${data.name} missions" aria-orientation="vertical">${data.missions.map((mission,i)=>`<button id="${missionID(id,i)}" type="button" class="mission-tab" role="tab" aria-controls="mission-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-mission="${i}"><span class="mission-index">0${i+1}</span><span>${mission.role}</span>${mission.isNew ? '<span class="new-tag">NEW</span>' : ''}<span class="mission-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><div class="mission-panel" id="mission-panel" role="tabpanel" tabindex="0"></div></div></section>
      <section class="chapter gameplay" id="gameplay" aria-labelledby="gameplay-title"><div class="chapter-number">04 / ${id === 'five' ? 'PLAY THE ORIGINAL' : 'INSIDE DEVELOPMENT'}</div><div class="gameplay-layout"><div class="reveal"><h2 class="display" id="gameplay-title">${lines(data.gameplayTitle)}</h2><p class="body-copy">${data.gameplayText}</p>${id === 'five' ? playLink('Play in browser') : '<a class="button button-outline" href="#crew-title">Meet the crew <span aria-hidden="true">↓</span></a>'}</div><div id="video-area">${videoCard()}</div></div><details class="controls-details"><summary>Controls <span class="muted">Keyboard + mouse / Xbox</span></summary><div class="controls-grid">${data.controls.map(([action,key,pad])=>`<div class="control"><span>${action}</span>${key}<br><em>Xbox: ${pad}</em></div>`).join('')}</div><p class="controls-note">${escape(data.controlsNote || '')}</p></details></section>
      ${afterGameSection(data)}
      ${id === 'five' ? `<section class="chapter gallery" id="gallery" aria-labelledby="gallery-title"><div class="chapter-number">${data.afterGame ? '06' : '05'} / THROUGH THE LENS</div><div class="section-head"><h2 class="display" id="gallery-title">A WORLD TO DISCOVER.</h2><p>${escape(data.galleryIntro || '')}</p></div><div class="gallery-grid">${data.gallery.map(([image,title,caption],i)=>`<button class="gallery-item reveal" type="button" data-gallery="${i}" aria-label="Enlarge image: ${escape(title)}"><div class="gallery-photo"><img src="${asset(image)}" alt="${escape(caption)}" width="1600" height="900" loading="lazy"></div><h3>${title}</h3><p>${caption}</p></button>`).join('')}</div><p class="gallery-label">${escape(data.galleryLabel || '')}</p></section>` : ''}
      ${id === 'eight' ? `<section class="crew" aria-labelledby="crew-title"><span class="eyebrow">${data.endLabel}</span><h2 class="display" id="crew-title">${lines(data.endTitle)}</h2><p>${data.endText}</p><figure class="crew-art"><div class="crew-poster"><img src="${asset('crew-v7.webp')}" alt="The approved crew concept: Director, BIM Coordinator, Site Engineer, Technical Engineer, Planning Engineer, QAQC Engineer, Safety Engineer, Quantity Surveyor and Mechanical Engineer." width="1920" height="707" loading="lazy"><span class="crew-director-label" aria-hidden="true">Director</span><span class="crew-mechanical-label" aria-hidden="true">Mechanical<br>Engineer</span></div><figcaption>Character concept art · Swipe to see the full crew on small screens.</figcaption></figure></section>` : `<section class="end-cta" style="--end-image:url('assets/godot-waterfall.webp')" aria-labelledby="end-title"><span class="eyebrow">${data.endLabel}</span><h2 id="end-title" class="display">${lines(data.endTitle)}</h2><p>${data.endText}</p>${playLink('Play The Five Keys')}</section>`}
      <p class="content-note">${data.note}</p>`;
    renderMission(0);
    bindPanel();
    observeReveals();
    if (updateURL || (id === 'eight' && location.hash === '#gallery')) {
      const url = new URL(location.href);
      url.searchParams.set('edition',id);
      if (url.hash && !document.getElementById(url.hash.slice(1))) {
        url.hash = '#overview';
        document.querySelector('#overview').scrollIntoView();
      }
      history.replaceState({edition:id},'',url);
      document.querySelector('#edition-announcement').textContent = `${data.name} selected. ${data.missions.length} ${id === 'eight' ? 'planned ' : ''}missions to explore.`;
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
    const [image,title,caption,kind] = data.gallery[galleryIndex];
    mediaKind.textContent = kind || `${data.engine} · SCREENSHOT`;
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
