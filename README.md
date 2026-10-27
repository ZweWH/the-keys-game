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

The original Godot demo has five implemented mission mechanics. Four historical scripted-input gameplay recordings accompany the native screenshots. Its playable link, objectives, completion checks, action lists, controls, report and study-path suggestions are preserved. The 27 October website refresh adds each mission's setting, review stage and teamwork context; it does not modify the separate Godot game.

The Eight Keys showcase was updated on **27 October 2026** to the current **v046 Jewel exploration checkpoint**. Five new native capture derivatives show the lower arrival route, waterfall, roof inlet, existing live Portal Hub character and actual home menu. The menu uses an approved illustrated background; that illustration is explicitly distinguished from the 3D gameplay/environment views.

Only the Portal Hub guide is placed in present-day Jewel. Eight skybridge portals lead to prototype areas with the corresponding role characters, interaction/swap and return routes. The current-build section covers walking and held running, jump/shrink/flight/zoom, separate jetpack sound, menu-only company music, the English menu, automatic device detection, editable Controls and bounded Settings. Saves are grounded exploration checkpoints; they do not persist completed puzzles or earned keys. The default Xbox mappings are **RB for jetpack** and **D-pad Up for air dash**. Earlier v031 role and lab stills and the v015 courtyard movement film remain explicitly historical.

The website has no current Unreal browser-play launch or portable executable download. The development game remains editor-hosted. The page does not turn the Unreal project into a browser game or establish standalone, physical-input, exhibition-performance or listening acceptance.

Eight full Unreal mission puzzles, comparable scoring, ordered unique-key awards, the eight-role report, final door and balcony gear-repair/waterfall finale remain proposed or in development. The missions use role order BIM, Site, Technical, Planning, QAQC, Safety, Quantity Surveyor and Geotechnical Engineer. The role pictures are earlier prototype-area reviews, not finished historical construction scenes or completed puzzle screenshots.

The Eight Keys story and mission tabs now use the **27 October v052 time-travel proposal for review**, recorded in `design/mission-story-proposals-v052.json` in the parent workspace. Each mission explains its proposed place, construction moment, three decisions, verification step and effect on the fictional timeline. Selected basement service and structure contexts inform the proposals; the fixtures, defects, values, soil examples and history are invented training content. Site installation uses generic numbered training pieces and does not imply that Jewel used PPVC construction. These editorial proposals do not replace the project's canonical mission catalogue or implement gameplay. User-approved project geometry supplies context; final mission layouts, engineering answer sets and specialist/educator review remain pending. Eight-role course guidance and the report/study-path QR also await review and approval.

Five v046 WebP derivatives total **1,094,614 bytes**. They preserve the full source frame and colours, with no crop or AI repainting. The existing thirteen v031 derivatives remain available as historical media. `MEDIA-PROVENANCE.json` records source evidence paths, source/output SHA-256, dimensions and the lossless-source-to-WebP conversion settings. No raw director portrait, private replacement-head preparation, raw BIM delivery or real-life visitor image is published. `npm run check` validates role order, mission briefs, current default mappings, release-status wording, linked assets, all 46 media hashes and native source identities. Local editorial and generation receipts remain in ignored `notes/`.

Scenes, defects and numerical examples are fictional training cases. No game performance, physical controller coverage or packaged Windows acceptance is claimed by this website work.

The cinematic scale, bold typography and image-led presentation take inspiration from the [GTA VI website](https://www.rockstargames.com/VI). The design uses this project's own media and supplied branding; no Rockstar artwork is included.

Full local editorial notes, source receipts and website QA evidence remain in ignored `notes/`. Original project/source exports are preserved. The 27 October source refresh passed syntax, static content and media checks. Publication and browser/mobile QA for this revision are handled by the owning checkpoint task; earlier deployment or browser receipts do not certify the new revision.
