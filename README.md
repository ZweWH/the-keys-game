# The Keys — game showcase

[Live website](https://zwewh.github.io/the-keys-game/) · [Five Keys student outcomes](https://zwewh.github.io/the-keys-game/?edition=five#next-chapter)

A standalone static website for The Five Keys (Godot) and The Eight Keys (Unreal), prepared for a separate GitHub Pages repository.

The two switchable editions contain their own story, all mission descriptions, controls and screenshot gallery. Five Keys also has gameplay videos; Eight Keys features a current Jewel environment showcase. Option 1 links to the existing [playable Godot browser demo](https://the-five-keys-demo.decent-bat-2665.chatgpt.site/). Option 2 clearly distinguishes the playable Unreal exploration prototype from its planned mission challenges.

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

Only the Portal Hub guide is placed in present-day Jewel. Eight skybridge portals lead to prototype areas with the corresponding role characters, interaction/swap and return routes. The current-build section covers walking and held running, jump/shrink/flight/zoom, separate jetpack sound, menu-only company music, the English menu, automatic device detection, editable Controls and bounded Settings. Saves are grounded exploration checkpoints; they do not persist completed puzzles or earned keys. The default Xbox mappings are **RB for jetpack** and **D-pad Up for air dash**. Earlier v031 role and lab sources are preserved; their gallery cards were hidden on 28 October at the user’s request.

On **28 October 2026**, the old Portal Hub courtyard/character-playground video and its poster were removed from the published website. The Eight Keys gameplay section now opens three verified v046 Jewel stills: waterfall, roof inlet and arrival route. The existing gallery dialog supports enlargement, keyboard navigation and focus restoration. Source recordings remain preserved in project history; Five Keys keeps its four Godot clips.

The website has no current Unreal browser-play launch or portable executable download. The development game remains editor-hosted. The page does not turn the Unreal project into a browser game or establish standalone, physical-input, exhibition-performance or listening acceptance.

Eight full Unreal mission puzzles, comparable scoring, ordered unique-key awards, the eight-role report, final door and balcony gear-repair/waterfall finale remain proposed or in development. The missions use role order BIM, Site, Technical, Planning, QAQC, Safety, Quantity Surveyor and Geotechnical Engineer. Each mission tab now leads with its own concept sketch; earlier native role-area sources are preserved outside the displayed gallery.

The **28 October v054 mission sketches** illustrate all eight proposed puzzles in a consistent ivory, forest-green and gold pencil style. They were made with built-in image generation, then encoded as eight 1600×900 WebPs totalling **3,854,818 bytes**, with the full composition preserved. They are clearly labelled as AI concept sketches, not gameplay or verified construction drawings. Select a sketch to enlarge it; Escape closes it and returns focus. Original PNGs, complete generation/edit prompts and source/output hashes are retained in ignored `notes/mission-sketches-v054/manifest.json` and its originals folder. The separate Five Keys content and existing galleries are preserved.

The Eight Keys story and mission tabs now use the **27 October v052 time-travel proposal for review**, recorded in `design/mission-story-proposals-v052.json` in the parent workspace. Each mission explains its proposed place, construction moment, three decisions, verification step and effect on the fictional timeline. Selected basement service and structure contexts inform the proposals; the fixtures, defects, values, soil examples and history are invented training content. Site installation uses generic numbered training pieces and does not imply that Jewel used PPVC construction. These editorial proposals do not replace the project's canonical mission catalogue or implement gameplay. User-approved project geometry supplies context; final mission layouts, engineering answer sets and specialist/educator review remain pending. Eight-role course guidance and the report/study-path QR also await review and approval.

On **28 October 2026**, the **v055 upper-deck photo refresh** replaces the Eight Keys cover, story image, environment showcase and three environment-gallery placements. The cover is the user's supplied game screenshot with NY, foreground trees and the waterfall; its original HUD is retained and its scene version is not independently verified. Two clean native captures from the running v046 Jewel scene show the water curtain, basin and planted terraces from upper-level viewpoints. Their temporary photo camera was removed afterwards and the journey menu was reopened. No saved game assets were changed. The three WebPs total **998,042 bytes**. They preserve the full source frames and colours without AI repainting; responsive CSS crops affect presentation only. Original PNGs, commanded camera transforms and conversion receipts are retained in ignored `notes/upper-deck-v055/`. The Five edition and all eight mission sketches are unchanged.

Five earlier v046 WebP derivatives total **1,094,614 bytes**. They preserve the full source frame and colours, with no crop or AI repainting. The existing thirteen v031 derivatives remain available as historical media. `MEDIA-PROVENANCE.json` records source evidence paths, source/output SHA-256, dimensions and derivative conversion settings. No raw director portrait, private replacement-head preparation, raw BIM delivery or real-life visitor image is published. `npm run check` validates role order, mission briefs, current default mappings, release-status wording, linked assets, all 55 media hashes, native source identities and sketch provenance. Local editorial and generation receipts remain in ignored `notes/`.

Scenes, defects and numerical examples are fictional training cases. No game performance, physical controller coverage or packaged Windows acceptance is claimed by this website work.

The cinematic scale, bold typography and image-led presentation take inspiration from the [GTA VI website](https://www.rockstargames.com/VI). The design uses this project's own media and supplied branding; no Rockstar artwork is included.

On **28 October 2026**, the recovered website request renames the first crew member to **Director** throughout the Eight Keys public copy, captions and accessible descriptions. A responsive HTML label also replaces the displayed name beneath the first crew character, while preserving the original crew-v7 image bytes and approved character appearance. This website display name does not rename canonical game IDs or assets. Edition switching now returns to the overview when the selected edition lacks the previous section, while preserving shared section links.

The continuation passed JavaScript syntax and static checks for all 13 mission briefs, release-status wording, linked assets and all 55 media hashes. Browser QA covered both editions, all mission panels, keyboard tabs, gallery navigation, sketch enlargement, focus return, the report and badge viewers, Godot video playback, desktop layout and a 390px mobile viewport (375px content area), with no page overflow or browser warning/error logs observed. These checks verify the website; Unreal gameplay acceptance remains pending as described above. Full recovery notes, source receipts, screenshots and deployment evidence remain in ignored `notes/continuation-20261028/`. Original project/source exports are preserved.

On **28 October 2026**, the Site Engineer, BIM Coordinator jetpack and Geotechnical Engineer prototype screenshot cards were removed from the Eight Keys gallery at the user’s request. The gallery now contains five Director, menu and Jewel environment views. Source media and provenance are preserved. Mission text and sketches await the user’s role-by-role ideas before revision.
