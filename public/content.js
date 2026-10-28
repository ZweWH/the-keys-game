/* Two-edition editorial data. Original game projects are separate. Updated 28 October 2026. */
window.KEYS_CONTENT = {
  "five": {
    "name": "The Five Keys",
    "word": "FIVE",
    "engine": "Godot",
    "label": "THE ORIGINAL ADVENTURE",
    "status": "PLAYABLE BROWSER DEMO",
    "hero": "godot-hub.webp",
    "heroAlt": "The original Godot Jewel hub, waterfall, portal road and five-key final door.",
    "headline": "Five roles. One adventure.",
    "description": "Step through the portals. Discover your strengths. Bring the waterfall back to life.",
    "primary": "Play in browser",
    "intro": "BIG IDEAS.\nSMALL BEGINNINGS.",
    "introText": "Every extraordinary building starts with people. Our first adventure puts you in five of their roles — from finding a hidden clash to checking the final details.",
    "facts": [
      [
        "05",
        "ROLES TO DISCOVER"
      ],
      [
        "05",
        "KEYS TO COLLECT"
      ],
      [
        "01",
        "WATERFALL TO RESTORE"
      ]
    ],
    "storyLabel": "THE FIVE KEYS STORY",
    "storyTitle": "THE FLOW\nIS IN YOUR HANDS.",
    "storyText": "A mysterious mechanism has stopped the waterfall. A portal road leads to five construction challenges. Each role holds a key. Together, they open the way to bring the water back.",
    "storyImage": "godot-road.webp",
    "storyAlt": "Glowing role portals along the original Godot adventure road.",
    "steps": [
      [
        "Follow the portals",
        "Play each role in sequence and see a different side of construction."
      ],
      [
        "Earn every key",
        "Solve the five challenges to unlock the ornate final door."
      ],
      [
        "Restore the waterfall",
        "Reach the balcony, align the flow gear and bring the water back."
      ]
    ],
    "missionIntro": "Five implemented Godot missions, each with a setting, objective and final check. Choose a role to see what you will do and why the task matters to the team.",
    "missionLabel": "PLAYABLE GODOT MISSIONS",
    "missions": [
      {
        "id": "bim",
        "role": "BIM Coordinator",
        "title": "Shrink & Fix",
        "objective": "Shrink into the apartment service space and resolve the pipe–duct clash.",
        "success": "Restore clearance, then open the handover tablet to record your BIM result and earn the key.",
        "tag": "SEE THE BIG PICTURE. GO SMALL.",
        "description": "Enter a residential apartment and shrink through a low access hatch. Find the blue pipe crossing an orange air duct, then reroute it to restore clearance.",
        "actions": [
          "Explore the apartment and ceiling services.",
          "Shrink to reach the hidden pipe-and-duct clash.",
          "Reroute the pipe and open the handover report."
        ],
        "learning": "Spatial thinking, coordination and verification.",
        "image": "godot-bim.webp",
        "alt": "Godot BIM mission showing the pipe and duct coordination challenge.",
        "setting": "A residential apartment and its ceiling-service space.",
        "stage": "Coordination review",
        "futureEffect": "A route must fit alongside other services. Checking the revised crossing is as important as finding the clash."
      },
      {
        "id": "site",
        "role": "Site Engineer",
        "title": "Crane & Place",
        "objective": "Read the lifting plan and place all three PPVC modules in their correct bays and orientations.",
        "success": "Clear the lifting zone and safely secure P01, P02 and P03 in the matching A1, A2 and B1 bays.",
        "tag": "EVERY LIFT HAS A PLAN.",
        "description": "Read the lifting plan, match each prefabricated module to its bay and keep the lift zone clear. Guide three modules into place with the correct orientation.",
        "actions": [
          "Read the PPVC module number and target bay.",
          "Check the lift zone before moving the load.",
          "Guide, rotate and place all three modules."
        ],
        "learning": "Drawing reading, safe sequencing and precise placement.",
        "image": "godot-site.webp",
        "alt": "The Godot crane mission with a module suspended above its target bay.",
        "setting": "A PPVC installation area with numbered modules and drawing bays.",
        "stage": "Drawing to installation",
        "futureEffect": "The same component number, bay and orientation need to agree from the drawing to the site."
      },
      {
        "id": "technical",
        "role": "Technical Engineer",
        "title": "Spec Detective",
        "objective": "Compare the model with the approved training drawing and correct the pipe, door and pump data.",
        "success": "All three technical details match the supplied drawing.",
        "tag": "THE DETAILS MAKE THE DIFFERENCE.",
        "description": "Become a technical detective. Compare an approved training drawing with the digital model and use the evidence to correct three mismatches.",
        "actions": [
          "Check the pipe diameter against the drawing.",
          "Correct the door identification tag.",
          "Match the pump flow to the training specification."
        ],
        "learning": "Evidence-based checking of model data and drawings.",
        "image": "godot-technical.webp",
        "alt": "The Godot technical mission drawing and model data checking interface.",
        "setting": "A digital-model checking station beside the training drawing.",
        "stage": "Information review",
        "futureEffect": "A small data mismatch can travel through a project. Technical checking brings the records back into agreement."
      },
      {
        "id": "planning",
        "role": "Planning Engineer",
        "title": "Plan the Build",
        "objective": "Put construction tasks in the correct order and keep useful work moving during a delivery delay.",
        "success": "Prepare the base → lift the PPVC module → connect services → inspect and release. During the delay, choose to prepare the next empty bay.",
        "tag": "THINK THREE MOVES AHEAD.",
        "description": "Put the work in the right order, then respond when a delivery runs late. Keep progress moving by choosing useful work that is ready to happen.",
        "actions": [
          "Prepare the base before lifting the module.",
          "Connect services, then inspect and release.",
          "Use the delay to prepare the next empty bay."
        ],
        "learning": "Dependencies, sequencing and practical decisions.",
        "image": "godot-planning.webp",
        "alt": "The Godot planning mission showing the construction sequence choices.",
        "setting": "A construction-sequence board and the next available work bay.",
        "stage": "Work sequencing",
        "futureEffect": "The useful next task is one whose prerequisites are ready. A delay does not justify skipping the correct order."
      },
      {
        "id": "qaqc",
        "role": "QAQC Engineer",
        "title": "Build & Check",
        "objective": "Inspect the finished room, correct three defects and verify the repairs before handover.",
        "success": "Align the window frame, close the pipe-opening gap and correct the door tag, then choose “Reinspect then release”.",
        "tag": "FINISHED IS ONLY THE BEGINNING.",
        "description": "Inspect a room for a frame gap, an open pipe penetration and an incorrect door tag. Record the defects and choose the right fixes before handover.",
        "actions": [
          "Find and record all three defects.",
          "Apply the matching corrections.",
          "Reinspect the corrected work before release."
        ],
        "learning": "Careful inspection and verified handover.",
        "image": "godot-qaqc.webp",
        "alt": "Godot QAQC gameplay inspecting a residential room for defects.",
        "setting": "A finished room ready for its handover check.",
        "stage": "Inspection and release",
        "futureEffect": "Finding a defect starts the process. Correcting it and returning to reinspect completes the quality loop."
      }
    ],
    "gameplayTitle": "SEE IT.\nTHEN STEP INSIDE.",
    "gameplayText": "Explore the first adventure in your browser. Desktop or laptop recommended, with keyboard and mouse or an Xbox controller.",
    "videos": [
      {
        "src": "godot-crane.mp4",
        "poster": "godot-site.webp",
        "title": "Crane & Place",
        "label": "GODOT GAMEPLAY · SITE ENGINEER",
        "caption": "Actual Godot gameplay capture: a scripted demonstration of the crane and PPVC module placement. Historical prototype recording · approximately 16 seconds."
      },
      {
        "src": "godot-technical.mp4",
        "poster": "godot-technical.webp",
        "title": "Spec Detective",
        "label": "GODOT GAMEPLAY · TECHNICAL ENGINEER",
        "caption": "Actual Godot gameplay capture: compare training drawing information and correct the model data. Historical scripted demonstration · approximately 22 seconds."
      },
      {
        "src": "godot-planning.mp4",
        "poster": "godot-planning.webp",
        "title": "Plan the Build",
        "label": "GODOT GAMEPLAY · PLANNING ENGINEER",
        "caption": "Actual Godot gameplay capture: arrange the construction sequence and respond to a delivery delay. Historical scripted demonstration · approximately 15 seconds."
      },
      {
        "src": "godot-qaqc.mp4",
        "poster": "godot-qaqc.webp",
        "title": "Build & Check",
        "label": "GODOT GAMEPLAY · QAQC ENGINEER",
        "caption": "Actual Godot gameplay capture: inspect the training room, choose corrections and reinspect. Historical scripted demonstration · approximately 26 seconds."
      }
    ],
    "afterGame": {
      "title": "YOUR GAME ENDS.\nYOUR NEXT CHAPTER BEGINS.",
      "intro": "Complete The Five Keys at the open house and we’ll give you a student report card and a construction role badge. Your card will connect the strengths you showed in the game with roles to explore and a suggested learning path for your future.",
      "reportImage": "godot-team-report.webp",
      "reportCaption": "Example Godot report · demonstration results, not a student’s personal report.",
      "reportSteps": [
        [
          "Discover your strengths",
          "See the role or tied roles where your in-game decisions stood out. Explore how those strengths connect with real construction work."
        ],
        [
          "Explore your future",
          "Learn what the role involves and consider how it fits your interests. Your game results are a starting point for a conversation about your future career."
        ],
        [
          "Find a learning path",
          "Your report handout will point you towards subjects and course options to discuss with a BCA Academy course adviser."
        ]
      ],
      "reportNote": "The current demo compares decision accuracy for Site, Technical, Planning and QAQC. BIM completion is recorded separately. The printed report card and study-pathway guidance form part of the planned open-house experience.",
      "paths": [
        {
          "role": "BIM Coordinator",
          "focus": "BIM, digital models and coordinating building services.",
          "course": "Diploma in Digital Engineering",
          "url": "https://www.bcaa.edu.sg/what-we-offer/academic-programmes/Details/diploma-in-digital-engineering",
          "color": "#62a9d4"
        },
        {
          "role": "Site Engineer",
          "focus": "Construction methods, engineering fundamentals and site coordination.",
          "course": "Diploma in Construction Engineering (Digital)",
          "url": "https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29",
          "color": "#f5ad54"
        },
        {
          "role": "Technical Engineer",
          "focus": "Engineering drawings, technical information and digital construction.",
          "course": "Diploma in Construction Engineering (Digital)",
          "url": "https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29",
          "color": "#81c5a4"
        },
        {
          "role": "Planning Engineer",
          "focus": "Construction management, project coordination and scheduling.",
          "course": "Diploma in Construction Engineering (Digital)",
          "url": "https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29",
          "color": "#b39bd6"
        },
        {
          "role": "QAQC Engineer",
          "focus": "Construction quality, inspection and checking work against specifications.",
          "course": "Diploma in Construction Engineering (Digital)",
          "url": "https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29",
          "color": "#e99d91"
        }
      ],
      "pathwayNote": "Suggested study options for exploration. These are our role-to-course suggestions; check the official programme pages for current entry requirements and speak with a course adviser about further study and industry experience.",
      "badgeTitle": "TAKE YOUR\nNEXT CHAPTER HOME.",
      "badgeText": "Students will receive a construction role badge as an open-house keepsake, alongside their report card. Each of the five designs celebrates a different way to help build our world.",
      "badgeImage": "godot-badges-product.webp",
      "badgeCaption": "3D previews of the five role badge designs. Finished badge photographs will replace these previews when available."
    },
    "gallery": [
      [
        "godot-hub.webp",
        "The journey begins",
        "The original Jewel-inspired hub and the five-key door."
      ],
      [
        "godot-shrink.webp",
        "A different perspective",
        "Shrink to explore the hidden building services."
      ],
      [
        "godot-site.webp",
        "Lift. Rotate. Place.",
        "The Site Engineer’s PPVC crane challenge."
      ],
      [
        "godot-technical.webp",
        "Follow the evidence",
        "Model information meets the training drawing."
      ],
      [
        "godot-planning.webp",
        "Plan what happens next",
        "Choose the right construction sequence."
      ],
      [
        "godot-qaqc.webp",
        "Check every detail",
        "Inspect, correct and reinspect the room."
      ],
      [
        "godot-gear-repair.webp",
        "The final repair",
        "Repair the fictional flow gear beyond the door."
      ],
      [
        "godot-waterfall.webp",
        "Bring the flow back",
        "The waterfall at the heart of the adventure."
      ],
      [
        "godot-team-report.webp",
        "Your strengths, revealed",
        "Example Godot report using demonstration results.",
        "GODOT · EXAMPLE REPORT"
      ],
      [
        "godot-badges-product.webp",
        "A role to take home",
        "3D render of the five role badge designs planned as student keepsakes.",
        "ROLE BADGES · 3D DESIGN PREVIEW"
      ],
      [
        "godot-badges-front.webp",
        "Five roles. Five designs.",
        "Front-view 3D render of BIM, Site, Technical, Planning and QAQC badges.",
        "ROLE BADGES · 3D DESIGN PREVIEW"
      ]
    ],
    "controls": [
      [
        "MOVE / LOOK",
        "WASD + mouse",
        "Sticks"
      ],
      [
        "SPRINT",
        "Shift",
        "L3"
      ],
      [
        "DOUBLE JUMP",
        "Space",
        "A"
      ],
      [
        "SHRINK / GROW",
        "Q",
        "B"
      ],
      [
        "INTERACT",
        "E",
        "X"
      ],
      [
        "PAUSE",
        "Esc",
        "Menu"
      ]
    ],
    "endLabel": "YOUR FIRST KEY IS WAITING",
    "endTitle": "READY TO\nFIND YOUR ROLE?",
    "endText": "Five roles. Five keys. One shared adventure.",
    "note": "The Five Keys remains the original playable Godot demo. These mission briefs explain its existing mechanics; this website refresh does not change the game. Training defects and numerical examples are fictional. The report handout, study guidance and physical role keepsakes remain planned open-house material.",
    "heroCredit": "Actual Godot gameplay",
    "storyCaption": "Follow the portal road in the original Godot demo.",
    "controlsNote": "The crane uses a separate hoist control context. Follow the on-screen prompts. Desktop or laptop recommended.",
    "galleryIntro": "Glimpses from the original adventure, an example report and our role badge designs. Open an image to take a closer look.",
    "galleryLabel": "Godot gameplay captures · Example report · 3D badge design previews"
  },
  "eight": {
    "name": "The Eight Keys",
    "word": "EIGHT",
    "engine": "Unreal",
    "label": "THE NEXT CHAPTER",
    "status": "UNREAL DEVELOPMENT PROTOTYPE",
    "hero": "v055-upper-deck-cover.webp",
    "heroAlt": "User-supplied Unreal game screenshot from Jewel’s upper deck, with NY, dense trees and the flowing waterfall beyond the walkway.",
    "headline": "One place. Eight ways to build its future.",
    "description": "Explore Jewel with the Portal Hub guide. Discover eight roles and the time-travel missions taking shape around them.",
    "primary": "Explore the missions",
    "intro": "THE WORLD\nWE BUILD TOGETHER.",
    "introText": "The next adventure begins inside Jewel. One guide leads the present-day exploration; eight portals connect to prototype areas where you meet the crew and switch into each role. The larger story asks what changes when you return to an earlier decision and check it properly.",
    "facts": [
      [
        "08",
        "PORTALS ON THE SKYBRIDGE"
      ],
      [
        "08",
        "ROLES IN PROTOTYPE AREAS"
      ],
      [
        "01",
        "PRESENT-DAY HUB GUIDE"
      ]
    ],
    "prototype": {
      "date": "2026-10-27",
      "dateLabel": "27 OCTOBER 2026",
      "version": "v046",
      "eyebrow": "JEWEL EXPLORATION · THE CURRENT BUILD",
      "title": "A WORLD TO\nSTEP INTO.",
      "intro": "The current editor-hosted prototype starts with the Portal Hub guide in Jewel. Explore the waterfall and planted terraces, reach the eight skybridge portals and meet each role inside its prototype area. The full time-travel puzzles are the next stage.",
      "image": "v046-menu.webp",
      "alt": "Actual v046 home menu with New Game, Load Saved Game, Controls and Settings over the approved illustrated waterfall backdrop.",
      "caption": "Actual v046 home menu · Approved illustrated backdrop · Not a 3D gameplay view",
      "features": [
        [
          "Your journey, your controls",
          "New Game, Load Saved Game and a safe grounded exploration save are available. Input switches automatically between keyboard/mouse and Xbox. Separate Controls and Settings pages support remapping and bounded movement/camera speeds; English is the current language."
        ],
        [
          "Walk. Look closer. Fly.",
          "Walk by default and hold Shift or LB to run. Keep double jump, crouch, shrink and camera zoom. In tiny mode, toggle the jetpack with J or RB, rise and descend, then land. Air dash uses F or D-pad Up."
        ],
        [
          "One guide. Eight perspectives.",
          "Only the Portal Hub guide occupies present-day Jewel. Enter a portal, approach the waiting role character and interact to switch. The existing prototype return routes bring you back to the hub."
        ],
        [
          "Jewel, layer by layer",
          "The environment combines selected architecture and service areas with trees, palms, ferns and tropical clumps. The original flowing water treatment is retained. Large angular pool-lighting patches were reduced in the reviewed views; finishes and planting are still developing."
        ],
        [
          "Sound with a purpose",
          "The jetpack has its own startup, thrust and shutdown sound, separate from shoe footsteps. The company song is confined to the menu. Opening-camera completion and skip both hand control back to exploration."
        ],
        [
          "A prototype you can inspect",
          "Current captures show actual saved Unreal views. We are developing the complete mission challenges around these spaces while preserving the existing playable exploration and character movement."
        ]
      ],
      "pending": "Eight complete time-travel puzzles, reviewed answers, comparable role scoring, ordered unique-key awards, the final door and balcony gear-repair finale remain planned. The full story will only restore the waterfall after all eight unique keys and the final repair. Study-path guidance and the eight-role report also need review.",
      "note": "This website is a showcase. Unreal browser play and a portable Windows download are not available here yet. The current game still runs through the installed Unreal Editor; standalone packaging, physical-input acceptance and exhibition-PC performance remain release checks."
    },
    "storyLabel": "PROPOSED STORY · EIGHT CONSTRUCTION MOMENTS",
    "storyTitle": "TRAVEL BACK.\nBUILD A BETTER FUTURE.",
    "storyText": "A fictional time rift leaves Jewel’s waterfall silent. The clue is larger than one broken part: eight earlier reviews hold decisions that were never properly checked. Travel through the portals, meet each construction role and take control of that character. Resolve the training challenge, verify the result and bring its unique key back to the skybridge.",
    "storyNote": "An imagined construction adventure inspired by real project spaces. The time travel, defects, values, soil profiles, keys and repair mechanism are fictional training content, not records of actual Jewel faults or construction history. These stories and full puzzles are proposed, with specialist and educator review still required.",
    "storyImage": "v055-upper-deck-waterfall.webp",
    "storyAlt": "Native Unreal v046 capture from the upper deck, looking past trees toward the waterfall, planted terraces and basin.",
    "steps": [
      [
        "Meet the role in the past",
        "Follow the planned role order through eight construction review moments. Each portal leads to a role character, a focused training problem and three decisions."
      ],
      [
        "Check it before you leave",
        "The planned completion step is a verification action, not just selecting an answer. Earn each different key once, return as the hub guide and unlock the next route."
      ],
      [
        "Bring the whole team forward",
        "After eight unique keys, open the final door and reach the balcony. Repair the fictional inlet gear, then watch the waterfall return from the guide’s view."
      ]
    ],
    "missionIntro": "See each proposed mission in an AI-generated concept sketch. Choose a role to explore its setting, three decisions and final check. These sketches illustrate fictional puzzles; they are not gameplay screenshots.",
    "missionLabel": "EIGHT ROLES · PROPOSED TIME-TRAVEL MISSIONS",
    "missions": [
      {
        "id": "bim",
        "role": "BIM Coordinator",
        "title": "The Hidden Crossing",
        "setting": "Basement service coordination bay — proposed training scene.",
        "stage": "A fictional coordination review before the ceiling is closed.",
        "objective": "Resolve the supplied pipe–duct clash while preserving the marked inspection access.",
        "description": "The ceiling is about to close, but two services occupy the same space. Become the BIM Coordinator, shrink into the inspection route and compare the marked alternatives. Find a route that fits, then check the entire crossing before the team proceeds.",
        "actions": [
          "Read the service colours and identify the two conflicting routes.",
          "Choose a supplied alternative that clears the clash without blocking the marked access zone.",
          "Check the revised route at a second viewpoint before confirming it."
        ],
        "success": "The authored clash check and marked access check both pass; the player confirms the reviewed result.",
        "futureEffect": "The proposed timeline records a coordinated crossing with its marked inspection access preserved.",
        "learning": "Different trades share one space; resolving a clash requires checking the result, not simply moving one object.",
        "tag": "SHRINK INTO THE SERVICES AND FIND THE ROUTE EVERYONE MISSED.",
        "image": "mission-sketch-bim-v054.webp",
        "alt": "AI-generated concept sketch for The Hidden Crossing: a BIM Coordinator examines a pipe–duct clash and alternative service routes in a basement training bay.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "characterID": "bim_coordinator",
        "storyID": "bim_coordinator",
        "conceptSketch": true
      },
      {
        "id": "site",
        "role": "Site Engineer",
        "title": "The Missing Piece",
        "setting": "Basin-side installation training gallery — proposed training scene.",
        "stage": "A fictional installation shift before the last delivery is placed.",
        "objective": "Place three numbered training pieces in the correct bays and orientations, with the work zone checked.",
        "description": "Three numbered training pieces have arrived, but the drawing and the delivery order do not match. Become the Site Engineer, check the work zone, match each piece to its bay and turn it to the correct orientation. Release the installation only after the final alignment check.",
        "actions": [
          "Match each numbered piece to its drawing bay.",
          "Confirm the marked lifting and exclusion zone is clear before allowing movement.",
          "Choose the correct orientation and place all three pieces in their reviewed positions."
        ],
        "success": "All three bay and orientation checks pass and the work-zone confirmation is recorded.",
        "futureEffect": "The proposed timeline gains a verified installation and access route; the numbered pieces are generic training elements, not a claim about Jewel’s actual construction method.",
        "learning": "Drawings, component identity, safe sequencing and orientation must agree on site.",
        "tag": "READ THE DRAWING, CLEAR THE ZONE AND PLACE THE MISSING PIECES.",
        "image": "mission-sketch-site-v054.webp",
        "alt": "AI-generated concept sketch for The Missing Piece: a Site Engineer checks drawings and installation pieces beside a controlled training work zone.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "characterID": "site_engineer",
        "storyID": "site_engineer",
        "conceptSketch": true
      },
      {
        "id": "technical",
        "role": "Technical Engineer",
        "title": "The Wrong Revision",
        "setting": "Waterfall service-control training bay — proposed training scene.",
        "stage": "A fictional technical check before the training system is released.",
        "objective": "Reconcile three model and drawing mismatches against the supplied current revision.",
        "description": "A copied model revision contains three mismatches. Become the Technical Engineer and compare the highlighted pipe size, equipment tag and pump value with a supplied training drawing. Find evidence for every correction, then run the final consistency check.",
        "actions": [
          "Compare the highlighted service size with the supplied training drawing.",
          "Match the equipment tag to the correct item in the drawing legend.",
          "Select the pump value shown in the approved-for-game training schedule."
        ],
        "success": "All three authored data values match the supplied training evidence and the player confirms the check.",
        "futureEffect": "The proposed timeline carries one agreed set of technical information into the next review.",
        "learning": "Technical decisions use the correct drawing revision and evidence, rather than guesses or visual size alone.",
        "tag": "FIND THE WRONG REVISION BEFORE THE TEAM BUILDS FROM IT.",
        "image": "mission-sketch-technical-v054.webp",
        "alt": "AI-generated concept sketch for The Wrong Revision: a Technical Engineer compares drawing information with equipment, service tags and a pump in a training control bay.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "characterID": "technical_engineer",
        "storyID": "technical_engineer",
        "conceptSketch": true
      },
      {
        "id": "planning",
        "role": "Planning Engineer",
        "title": "The Lost Shift",
        "setting": "Upper enclosure work-sequence station — proposed training scene.",
        "stage": "A fictional shift when a delivery delay threatens the next activity.",
        "objective": "Build a valid task sequence and choose ready work when a delivery is delayed.",
        "description": "The delivery is late, and the timeline starts to unravel. Become the Planning Engineer and rebuild the task sequence. Prepare the base, place the training module, connect services and inspect in the correct order. When the delay appears, choose useful work whose prerequisites are already ready.",
        "actions": [
          "Identify the base-preparation prerequisite before the lift.",
          "Arrange lift, services and inspection in a valid dependency order.",
          "Respond to the late delivery by selecting a supplied ready task in the next bay, rather than skipping a prerequisite."
        ],
        "success": "The proposed sequence respects every supplied dependency and the delay response uses work that is ready.",
        "futureEffect": "The proposed timeline keeps services and inspection ahead of closure, with a practical response to the delay.",
        "learning": "A practical programme respects dependencies and can adapt without rushing unsafe or unready work.",
        "tag": "A LATE DELIVERY CHANGES THE PLAN. CAN YOU KEEP THE RIGHT WORK MOVING?",
        "image": "mission-sketch-planning-v054.webp",
        "alt": "AI-generated concept sketch for The Lost Shift: a Planning Engineer arranges task-sequence cards beside an upper enclosure work area and a delayed delivery.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "characterID": "planning_engineer",
        "storyID": "planning_engineer",
        "conceptSketch": true
      },
      {
        "id": "qaqc",
        "role": "QAQC Engineer",
        "title": "Check It Again",
        "setting": "Irrigation penetration inspection station — proposed training scene.",
        "stage": "A fictional inspection before handover.",
        "objective": "Record three training defects, select the reviewed corrections and reinspect before release.",
        "description": "The work looks finished from a distance. Become the QAQC Engineer and inspect the training frame, service opening and identification tag. Record what does not match the supplied checklist, choose the reviewed corrections and return for a reinspection. A repair is not complete until it has been checked again.",
        "actions": [
          "Identify the frame alignment that does not match the training checklist.",
          "Record the incomplete service-opening seal and choose the supplied correction.",
          "Match the item tag to its training record and correct the mismatch."
        ],
        "success": "Reinspect all three corrected fixtures and confirm them against the checklist before release.",
        "futureEffect": "The proposed timeline reaches handover with the three training fixtures corrected and reinspected.",
        "learning": "Quality work is recorded and verified; finding a defect and assuming it is fixed are different actions.",
        "tag": "LOOK CLOSELY, RECORD THE DEFECTS AND COME BACK TO VERIFY THE FIXES.",
        "image": "mission-sketch-qaqc-v054.webp",
        "alt": "AI-generated concept sketch for Check It Again: a QAQC Engineer inspects frame alignment, a service-opening seal and an identification tag against a checklist.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "characterID": "qaqc_engineer",
        "storyID": "qaqc_engineer",
        "conceptSketch": true
      },
      {
        "id": "safety",
        "role": "Safety Engineer",
        "title": "The Safe Way Through",
        "setting": "Upper terrace access training zone — proposed training scene.",
        "stage": "A fictional work-zone check before the next activity begins.",
        "objective": "Identify three hazards, choose the supplied controls and verify the protected route before reopening.",
        "description": "The shortest route is not ready for work. Become the Safety Engineer, identify the three marked hazards and choose controls from the training board. Secure the exposed edge, clear the exit and keep people out of the lift zone. Only reopen the route after checking that each control is in place.",
        "actions": [
          "Recognise the missing guardrail fixture and choose the reviewed edge-control option before entry.",
          "Identify the blocked training exit and choose the supplied clearance action.",
          "Stop the simulated lift-zone intrusion and choose the reviewed exclusion control."
        ],
        "success": "All three authored hazard controls pass their checks before work resumes or the route reopens.",
        "futureEffect": "The proposed timeline reopens the route only after its reviewed controls are verified.",
        "learning": "Recognise hazards, control access and verify prevention before allowing work to continue.",
        "tag": "PROTECT THE ROUTE BEFORE THE NEXT TEAM STEPS INTO IT.",
        "image": "mission-sketch-safety-v054.webp",
        "alt": "AI-generated concept sketch for The Safe Way Through: a Safety Engineer reviews edge protection, a blocked route and a simulated lift zone.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "isNew": true,
        "characterID": "safety_engineer",
        "storyID": "safety_engineer",
        "conceptSketch": true
      },
      {
        "id": "quantity",
        "role": "Quantity Surveyor",
        "title": "Count What Counts",
        "setting": "Terrace irrigation procurement bench — proposed training scene.",
        "stage": "A fictional order review before materials are purchased.",
        "objective": "Check the quantities and units, then select a complete quotation that meets the training brief.",
        "description": "The cheapest-looking quote is missing part of the job. Become the Quantity Surveyor, count a small training installation, use the supplied units and rate card, then compare quotes for the same complete scope. Explain which offer meets the requirement before releasing the order.",
        "actions": [
          "Take off the marked length and count the supplied fitting symbols using the stated units.",
          "Apply the supplied fictional rate to the matching quantity and unit.",
          "Compare the same stated specification and scope across three fictional quotes, including the marked exclusions."
        ],
        "success": "The take-off, unit calculation and justified quote comparison match the reviewed training answer set.",
        "futureEffect": "The proposed timeline releases a complete, checked procurement scope rather than the cheapest headline price.",
        "learning": "Compare quantities, units and complete scope before judging value; a low headline price may omit required work.",
        "tag": "FIND THE MISSING SCOPE HIDDEN BEHIND A TEMPTING PRICE.",
        "image": "mission-sketch-quantity-v054.webp",
        "alt": "AI-generated concept sketch for Count What Counts: a Quantity Surveyor compares a material take-off and quotation sheets at an irrigation procurement bench.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "isNew": true,
        "characterID": "quantity_surveyor",
        "storyID": "quantity_surveyor",
        "conceptSketch": true
      },
      {
        "id": "geotechnical",
        "role": "Geotechnical Engineer",
        "title": "Below the Surface",
        "setting": "Basement foundation training cutaway — proposed training scene.",
        "stage": "A fictional ground review before foundation work proceeds.",
        "objective": "Interpret the fictional ground evidence and request the supplied specialist review when conditions differ.",
        "description": "The last clue is beneath the building. Become the Geotechnical Engineer and read a short fictional borehole card beside the cutaway. Match the illustrated ground to a reviewed foundation explanation. When an unexpected layer appears, choose to stop and seek the specified review rather than inventing a fix. Verify the evidence to earn the eighth key.",
        "actions": [
          "Read the supplied fictional layer sequence and identify the marked change in ground.",
          "Match the example profile to one of the specialist-reviewed training foundation explanations.",
          "Respond to unexpected ground by selecting the supplied escalation and review action."
        ],
        "success": "The profile and explanation match the reviewed case, and the unexpected-ground response records the required review before proceeding.",
        "futureEffect": "The proposed timeline resolves the ground-review hold through evidence and specialist review, completing the eight-role record.",
        "learning": "Foundation decisions depend on ground evidence, and unexpected conditions require specialist review.",
        "tag": "READ THE GROUND, QUESTION THE SURPRISE AND EARN THE FINAL KEY.",
        "image": "mission-sketch-geotechnical-v054.webp",
        "alt": "AI-generated concept sketch for Below the Surface: a Geotechnical Engineer compares a guarded ground cutaway and fictional soil layers with a training borehole card.",
        "caption": "AI CONCEPT SKETCH · PROPOSED MISSION · ENLARGE ↗",
        "isNew": true,
        "characterID": "geotechnical_engineer",
        "storyID": "geotechnical_engineer",
        "conceptSketch": true
      }
    ],
    "gameplayTitle": "EXPLORE TODAY.\nBUILD THE NEXT CHAPTER.",
    "gameplayText": "See Jewel from its upper decks: follow the waterfall through the trees and look across the planted terraces. Open these game captures for a closer look, then explore the gallery for the guide, menu and role studies.",
    "showcase": {
      "label": "Jewel upper-deck environment views",
      "views": [
        "v055-upper-deck-cover.webp",
        "v055-upper-deck-waterfall.webp",
        "v055-upper-deck-garden.webp"
      ],
      "caption": "Jewel from the upper decks · Native game captures. Select a view to open the full image. Materials and planting remain in development; full mission puzzles are proposed."
    },
    "gallery": [
      [
        "v055-upper-deck-cover.webp",
        "Jewel from above",
        "NY among the trees on the upper walkway, with the waterfall and planted terraces beyond.",
        "UNREAL · NATIVE GAME CAPTURE"
      ],
      [
        "v046-menu.webp",
        "Begin your journey",
        "The actual New Game, Load Saved Game, Controls and Settings menu. Its waterfall backdrop is approved illustration, not a 3D gameplay capture.",
        "UNREAL v046 · ACTUAL MENU / ILLUSTRATED BACKDROP"
      ],
      [
        "v046-ny-exploration.webp",
        "Meet the hub guide",
        "The unchanged live Portal Hub character after New Game and cinematic skip. This is the current character in Jewel.",
        "UNREAL v046 · NATIVE EXPLORATION"
      ],
      [
        "v055-upper-deck-waterfall.webp",
        "Water through the gardens",
        "A native v046 upper-deck view across the trees, waterfall and basin, captured on 28 October 2026. Materials and planting remain in development.",
        "UNREAL v046 · NATIVE UPPER-DECK CAPTURE"
      ],
      [
        "v055-upper-deck-garden.webp",
        "Among the treetops",
        "Another native v046 upper-level viewpoint, with trees beside the waterfall and surrounding terraces, captured on 28 October 2026.",
        "UNREAL v046 · NATIVE UPPER-DECK CAPTURE"
      ],
      [
        "v031-site-player.webp",
        "A role to step into",
        "Earlier controlled Site Engineer capture in the v031 PPVC prototype area. The new story uses generic training pieces; the full lifting puzzle is proposed.",
        "EARLIER UNREAL v031 · ROLE PROTOTYPE"
      ],
      [
        "v031-bim-jetpack.webp",
        "Inspect from another angle",
        "Earlier BIM Coordinator tiny-jetpack capture in an isolated v031 lab. It illustrates the movement study, not a finished mission.",
        "EARLIER UNREAL v031 · ROLE LAB"
      ],
      [
        "v031-geotechnical_engineer.webp",
        "The final perspective",
        "Earlier Geotechnical Engineer review-camera still. The ground-evidence puzzle remains proposed.",
        "EARLIER UNREAL v031 · ROLE PROTOTYPE"
      ]
    ],
    "controls": [
      [
        "MOVE / LOOK",
        "WASD + mouse",
        "Left / right stick"
      ],
      [
        "RUN",
        "Hold Shift",
        "Hold LB"
      ],
      [
        "CROUCH / DESCEND",
        "Hold C",
        "Hold B"
      ],
      [
        "JUMP / RISE",
        "Space (double jump on foot)",
        "A"
      ],
      [
        "SHRINK / GROW",
        "Q",
        "Y"
      ],
      [
        "JETPACK / LAND",
        "J in tiny mode",
        "RB"
      ],
      [
        "AIR DASH",
        "F while airborne",
        "D-pad Up"
      ],
      [
        "CAMERA ZOOM",
        "Mouse wheel",
        "LT closer / RT farther"
      ],
      [
        "INTERACT",
        "E",
        "X"
      ]
    ],
    "endLabel": "MEET THE PEOPLE BEHIND THE KEYS",
    "endTitle": "DIFFERENT ROLES.\nONE CREW.",
    "endText": "One hub guide meets eight role characters through the portals. The next chapter connects their different ways of thinking through one fictional construction timeline.",
    "note": "Updated 28 October 2026. Current native v046 Jewel environment, hub character and UI are shown separately from AI-generated mission concept sketches and earlier v031 role studies. The time-travel puzzles, ordered unique keys, final door, gear repair and eight-role report remain proposed or in development. No Unreal browser launch, portable download, finished mission gameplay or measured exhibition performance is claimed.",
    "heroCredit": "Native Unreal game capture\nJewel · Upper deck",
    "storyCaption": "Native v046 upper-deck capture · 28 October 2026. The flowing-water exploration is playable locally; the stopped-water time-travel story and finale are planned.",
    "controlsNote": "Default prototype bindings shown; Controls can remap action buttons. Keyboard/mouse and Xbox are detected automatically. Shrink before enabling the jetpack. Settings adjust movement and camera speeds; English is the current language. Xbox Y changes size and never restarts the journey.",
    "galleryIntro": "Explore the upper decks through trees, waterfall and planted terraces. Discover the hub guide, current menu and earlier role studies below. Open an image to see the full view.",
    "galleryLabel": "Upper-deck game captures · Current v046 guide + menu · Earlier v031 roles · Full mission puzzles proposed"
  }
};
