# The Keys — game showcase

[Live website](https://zwewh.github.io/the-keys-game/) · [Five Keys student outcomes](https://zwewh.github.io/the-keys-game/?edition=five#next-chapter)

A standalone static website for The Five Keys (Godot) and The Eight Keys (Unreal), prepared for a separate GitHub Pages repository.

The two switchable editions contain their own story, all mission descriptions, controls, screenshot gallery and videos. Option 1 links to the existing [playable Godot browser demo](https://the-five-keys-demo.decent-bat-2665.chatgpt.site/). Option 2 clearly distinguishes the playable Unreal exploration prototype from its planned mission challenges.

The Five Keys **Your next step** section explains the planned student report-card handout, career exploration, suggested BCA Academy study options and role badge keepsakes. It includes the actual demonstration report interface and 3D previews of the five badge designs. Game strengths provide a starting point for exploration; the report is not a career aptitude assessment. The website's course suggestions are separate from the Godot game's existing generic course link.

## Preview

Run `node scripts/serve.mjs`, or double-click `Start-Website.cmd` on Windows. Open the URL printed in the terminal: `http://127.0.0.1:4173/the-keys-game/`.

Node 22 or later is sufficient. No package installation, build step or API keys are needed. The site also opens directly from `public/index.html`; use the local server for video and deployment checks.

Check the site with:

```sh
node --check public/app.js
node --check public/content.js
node scripts/check.mjs
```

## Publish to GitHub Pages

1. Put this website folder's contents in its own repository. Do not add the parent Unreal workspace or original Godot project.
2. Push the website to `main`.
3. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Run **Deploy game showcase to GitHub Pages** from Actions, or push a new commit to `main`.

The supplied workflow validates the site and deploys **only `public/`**. It does not fetch LFS, build Unreal, or publish research notes. See [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

All asset paths are relative. A repository project URL such as `https://OWNER.github.io/REPOSITORY/` works without changing the source. The Godot WebAssembly game stays at its existing external URL, retaining its own hosting headers.

## Edit

- `public/content.js`: edition copy, missions, controls, images and video clips.
- `public/styles.css`: layout, colour, responsive styles and reduced-motion support.
- `public/outcomes.css`: Five Keys report, learning-path and badge sections.
- `public/app.js`: edition tabs, mission tabs, media dialogs and navigation.
- `public/assets/`: optimized screenshot derivatives, supplied logo, concept artwork and finished gameplay clips.
- `public/fonts.css` and `public/assets/fonts/`: self-hosted fonts and their SIL OFL licenses.
- `MEDIA-PROVENANCE.json`: selected asset hashes, categories and limitations.

Deep links: `?edition=five#missions` and `?edition=eight#gallery`. Arrow keys, Home and End switch edition/mission tabs; Escape closes media; Left/Right navigate gallery images.

## Content status

The original Godot demo has five implemented mission mechanics. Four historical scripted-input gameplay recordings accompany the native screenshots. The Unreal showcase uses actual Jewel/flight/temporary-room screenshots and a clearly labelled earlier courtyard movement study. Eight full Unreal mission puzzles, ordered unique-key progression, scoring, final door and gear-repair finale remain in development. The three new mission concepts require specialist and educator review.

Scenes, defects and numerical examples are fictional training cases. No game performance, physical controller coverage or packaged Windows acceptance is claimed by this website work.

The cinematic scale, bold typography and image-led presentation take inspiration from the [GTA VI website](https://www.rockstargames.com/VI). The design uses this project's own media and supplied branding; no Rockstar artwork is included.

Full local editorial notes, source receipts and website QA evidence remain in ignored `notes/`. Original project/source exports are preserved.
