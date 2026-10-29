# The Keys — game showcase

[Live website](https://zwewh.github.io/the-keys-game/) · [Five Keys student outcomes](https://zwewh.github.io/the-keys-game/?edition=five#next-chapter)

A standalone static website for The Five Keys (Godot) and The Eight Keys (Unreal), prepared for a separate GitHub Pages repository.

The two switchable editions contain their own story, all mission descriptions and controls. Five Keys also has a screenshot gallery and gameplay videos; Eight Keys features a current Jewel environment showcase. Option 1 links to the existing [playable Godot browser demo](https://the-five-keys-demo.decent-bat-2665.chatgpt.site/). Option 2 clearly distinguishes the playable Unreal exploration prototype from its planned mission challenges.

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

Deep links: `?edition=five#missions` and `?edition=eight#crew-title`. Arrow keys, Home and End switch edition/mission tabs; Escape closes media; Left/Right navigate gallery images.

## Content status

On **29 October 2026**, the Eight Keys **05 / Through the Lens** section and its navigation link were hidden at the user's request. Its images and media data remain preserved for the current-prototype and environment-showcase viewers. Existing Eight Keys `#gallery` links return to the overview; Five Keys retains its gallery.

The original Godot demo has five implemented mission mechanics. Four historical scripted-input gameplay recordings accompany the native screenshots. Its playable link, objectives, completion checks, action lists, controls, report and study-path suggestions are preserved. The 27 October website refresh adds each mission's setting, review stage and teamwork context; it does not modify the separate Godot game.

The Eight Keys showcase uses the **v046 Jewel exploration checkpoint** for its current-game coverage. Native captures show Jewel, its existing guide and the actual home menu. The menu uses an approved illustrated background; that illustration is explicitly distinguished from the 3D gameplay/environment views.

Only the existing guide, displayed as **Director** on this website, is placed in present-day Jewel. Eight skybridge portals lead to earlier prototype role areas with interaction/swap and return routes. Those game areas predate the new website mission brief; they do not establish that its Mechanical Engineer or new puzzles are implemented. The current-build section covers walking and held running, jump/shrink/flight/zoom, separate jetpack sound, menu-only company music, the English menu, automatic device detection, editable Controls and bounded Settings. Saves are grounded exploration checkpoints; they do not persist completed puzzles or earned keys. The default Xbox mappings are **RB for jetpack** and **D-pad Up for air dash**. Earlier v031 role and lab sources are preserved; their gallery cards were hidden on 28 October at the user’s request.

On **28 October 2026**, the old Portal Hub courtyard/character-playground video and its poster were removed from the published website. The Eight Keys gameplay section now opens three verified v046 Jewel stills: waterfall, roof inlet and arrival route. The existing gallery dialog supports enlargement, keyboard navigation and focus restoration. Source recordings remain preserved in project history; Five Keys keeps its four Godot clips.

The website has no current Unreal browser-play launch or portable executable download. The development game remains editor-hosted. The page does not turn the Unreal project into a browser game or establish standalone, physical-input, exhibition-performance or listening acceptance.

The **28 October 2026 user interview** is the newest brief for the website's proposed missions. The user explicitly replaced role eight, Geotechnical Engineer, with **Mechanical Engineer**. The website order is BIM Coordinator, Site Engineer, Technical Engineer, Planning Engineer, QAQC Engineer, Safety Engineer, Quantity Surveyor and Mechanical Engineer. This is a website design update: canonical Unreal mission/character files and existing game assets are unchanged. Their older Geotechnical role records remain historical source material for this website revision.

Every proposed mission now explains a specific connection to the fictional waterfall stoppage. BIM uses Shrink Jetpack inspection of basement overhead M&E, followed by clash repair through an interaction menu. Site uses several timed crane lifts of waterfall-service equipment/components with required safety checks. Technical compares model information and specifications against supplied training drawings. Planning becomes a **top-down 2D road-diversion puzzle**: position barriers and direction arrows for construction phases, then test a delivery route while preserving the supplied safe access. These are proposed game interactions. Timed lifting must retain its safety requirements; the website does not claim measured play time or completed implementation.

Eight complete Unreal mission puzzles, comparable scoring, ordered unique-key awards, the eight-role report, final door and balcony gear-repair/waterfall finale remain proposed or in development. The Mechanical mission checks functional water-system behaviour, distinct from Technical Engineer's information checks; it does not replace the finale repair. All **eight unique keys** must still open the final door before the student reaches the balcony, repairs the fictional gear and restores the waterfall. Separate mission levels and smooth loading between them are design targets, with no measured loading or exhibition-performance result claimed.

The new **v056 mission sketches** accompany the newest user brief. They are labelled as AI concept sketches of proposed puzzles, not gameplay screenshots or verified construction drawings. Select a sketch to enlarge it; Escape closes it and returns focus. Generation originals, prompts and metadata are retained in ignored `notes/mission-sketches-v056/`; `MEDIA-PROVENANCE.json` records each published derivative's identity. The earlier **v054 sketches** and **v052 time-travel proposal** are superseded on the website. Their source receipts and original artwork remain preserved, including `notes/mission-sketches-v054/` and the parent workspace's `design/mission-story-proposals-v052.json`. The separate Five Keys content is unchanged.

The time rift, faults, quantities, specifications, road layouts, construction phases and commissioning results are fictional training content inspired by project spaces. They are not claims about actual Jewel defects, its construction history or real traffic arrangements. These website proposals do not edit live BIM models or implement gameplay. Reviewed answer sets, final layouts, specialist/educator review, eight-role course guidance and the report/study-path QR remain pending.

On **28 October 2026**, the **v055 upper-deck photo refresh** replaces the Eight Keys cover, story image, environment showcase and three environment-gallery placements. The cover is the user's supplied game screenshot with NY, foreground trees and the waterfall; its original HUD is retained and its scene version is not independently verified. Two clean native captures from the running v046 Jewel scene show the water curtain, basin and planted terraces from upper-level viewpoints. Their temporary photo camera was removed afterwards and the journey menu was reopened. No saved game assets were changed. The three WebPs total **998,042 bytes**. They preserve the full source frames and colours without AI repainting; responsive CSS crops affect presentation only. Original PNGs, commanded camera transforms and conversion receipts are retained in ignored `notes/upper-deck-v055/`. The Five edition and all eight mission sketches are unchanged.

Five earlier v046 WebP derivatives total **1,094,614 bytes**. They preserve the full source frame and colours, with no crop or AI repainting. The existing thirteen v031 derivatives remain preserved as historical media. `MEDIA-PROVENANCE.json` records source evidence paths, source/output SHA-256, dimensions and derivative conversion settings. No raw director portrait, private replacement-head preparation, raw BIM delivery or real-life visitor image is published. `npm run check` validates the current website role order, mission briefs and waterfall links, the BIM/Site/Planning interaction requirements, finale requirements, current default mappings, release-status wording, linked assets, all recorded media hashes, native source identities and sketch provenance. Local editorial and generation receipts remain in ignored `notes/`.

Scenes, defects and numerical examples are fictional training cases. No game performance, physical controller coverage or packaged Windows acceptance is claimed by this website work.

The cinematic scale, bold typography and image-led presentation take inspiration from the [GTA VI website](https://www.rockstargames.com/VI). The design uses this project's own media and supplied branding; no Rockstar artwork is included.

On **28 October 2026**, the recovered website request renames the first crew member to **Director** throughout the Eight Keys public copy, captions and accessible descriptions. A responsive HTML label also replaces the displayed name beneath the first crew character, while preserving the original crew-v7 image bytes and approved character appearance. This website display name does not rename canonical game IDs or assets. Edition switching now returns to the overview when the selected edition lacks the previous section, while preserving shared section links.

The preserved group crew artwork keeps its original character appearance. Website role labels reflect the newer display names; this does not establish a new Mechanical game character, rig or animation asset.

The earlier continuation passed JavaScript syntax and static checks for all 13 mission briefs, release-status wording, linked assets and its 55 media hashes. Browser QA covered both editions, all mission panels, keyboard tabs, gallery navigation, sketch enlargement, focus return, the report and badge viewers, Godot video playback, desktop layout and a 390px mobile viewport (375px content area), with no page overflow or browser warning/error logs observed. These receipts apply to that revision; later content and sketch updates require fresh checks. They verify the website; Unreal gameplay acceptance remains pending as described above. Full recovery notes, source receipts, screenshots and deployment evidence remain in ignored `notes/continuation-20261028/`. Original project/source exports are preserved.

On **28 October 2026**, the Site Engineer, BIM Coordinator jetpack and Geotechnical Engineer prototype screenshot cards were removed from the Eight Keys gallery at the user's request. The gallery retains five Director, menu and Jewel environment views. Source media and provenance are preserved. The user subsequently completed the role-by-role interview that supplies the new website mission text and v056 sketches above.

The **v056 publication** adds eight full-frame 1600×900 WebP concept sketches totalling **3,595,124 bytes**. Fresh syntax and static checks passed for 13 mission briefs, the revised role order and waterfall links, all linked assets and **63 recorded media hashes**. Desktop and 390px mobile browser QA verified all eight revised panels and sketch dialogs, Escape/focus return, keyboard Home/End, the Mechanical crew label and contained horizontal crew scrolling. Five Keys retained its five panels, play link, report/badge dialogs and working video playback. No broken loaded images, document overflow or warning/error logs were observed. These results verify the website; game implementation, engineering review and loading performance remain pending. Exact prompts, generation/edit receipts, original images and screenshots are retained in ignored `notes/mission-sketches-v056/`.
