(() => {
  'use strict';
  const dialog = document.querySelector('.image-viewer');
  const media = dialog.querySelector('.image-viewer__media');
  const caption = dialog.querySelector('.image-viewer__caption');
  const close = dialog.querySelector('.image-viewer__close');
  let opener;
  let previewNumber = 0;

  // Give a copied SVG its own definitions so its masks and clips do not clash
  // with the original artwork still present behind the dialog.
  const copyComposition = source => {
    const copy = source.cloneNode(true);
    copy.removeAttribute('tabindex');
    copy.removeAttribute('role');
    copy.removeAttribute('aria-label');
    copy.classList.remove('enlargeable');
    const names = new Map();
    copy.querySelectorAll('[id]').forEach(element => {
      const old = element.id;
      const next = `preview-${previewNumber}-${old}`;
      names.set(old, next);
      element.id = next;
    });
    copy.querySelectorAll('*').forEach(element => {
      for (const attribute of [...element.attributes]) {
        let value = attribute.value;
        names.forEach((next, old) => {
          value = value.split(`url(#${old})`).join(`url(#${next})`);
          if (value === `#${old}`) value = `#${next}`;
        });
        if (value !== attribute.value) element.setAttribute(attribute.name, value);
      }
      element.removeAttribute('tabindex');
    });
    return copy;
  };

  const open = (source, trigger, description, composed = false) => {
    opener = trigger;
    previewNumber += 1;
    media.replaceChildren();
    const picture = composed ? copyComposition(source) : document.createElement('img');
    if (!composed) {
      picture.src = source.currentSrc || source.src;
      picture.alt = source.alt || description || 'Website cover artwork';
    }
    media.append(picture);
    caption.textContent = description || source.alt || '';
    dialog.showModal();
    close.focus();
  };

  const captionFor = element => element.closest('figure')?.querySelector('figcaption')?.textContent.trim() || element.alt || '';
  const activate = (element, action, label) => {
    element.classList.add('enlargeable');
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    element.setAttribute('aria-label', `Enlarge ${label || 'image'}`);
    element.title = 'Click to enlarge';
    element.addEventListener('click', action);
    element.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        action();
      }
    });
  };

  document.querySelectorAll('.event-scene, .crew-lineup').forEach(scene => {
    const image = scene.querySelector('img');
    const description = captionFor(scene) || image.alt;
    activate(scene, () => open(scene, scene, description, true), image.alt);
  });

  document.querySelectorAll('main img').forEach(image => {
    if (image.closest('.event-scene, .crew-lineup, .hero, .game-cover, a, video')) return;
    activate(image, () => open(image, image, captionFor(image)), image.alt);
  });

  document.querySelectorAll('.choice-hero, .game-cover').forEach(cover => {
    const image = cover.querySelector(':scope > img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cover-photo-button';
    button.textContent = 'Enlarge photo ↗';
    button.setAttribute('aria-label', `Enlarge ${image.alt || 'home page cover artwork'}`);
    button.addEventListener('click', () => open(image, button, cover.querySelector('.hero-credit')?.textContent.trim() || image.alt));
    cover.append(button);
    cover.addEventListener('click', event => {
      if (event.target === cover || event.target === image || event.target.matches('.hero-shade, .game-cover-shade')) {
        open(image, button, cover.querySelector('.hero-credit')?.textContent.trim() || image.alt);
      }
    });
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    media.replaceChildren();
    opener?.focus();
  });
})();
