/* Editorial source: website/notes/mission-content-research.md. All paths are relative for GitHub Pages. */
window.KEYS_CONTENT = {
  five: {
    name: 'The Five Keys', word: 'FIVE', engine: 'Godot', label: 'THE ORIGINAL ADVENTURE', status: 'PLAYABLE BROWSER DEMO',
    hero: 'godot-hub.webp', heroAlt: 'The original Godot Jewel hub, waterfall, portal road and five-key final door.',
    headline: 'Five roles. One adventure.', description: 'Step through the portals. Discover your strengths. Bring the waterfall back to life.',
    primary: 'Play in browser', intro: 'BIG IDEAS.\nSMALL BEGINNINGS.', introText: 'Every extraordinary building starts with people. Our first adventure puts you in five of their roles — from finding a hidden clash to checking the final details.',
    facts: [['05', 'ROLES TO DISCOVER'], ['05', 'KEYS TO COLLECT'], ['01', 'WATERFALL TO RESTORE']],
    storyLabel: 'THE FIVE KEYS STORY', storyTitle: 'THE FLOW\nIS IN YOUR HANDS.',
    storyText: 'A mysterious mechanism has stopped the waterfall. A portal road leads to five construction challenges. Each role holds a key. Together, they open the way to bring the water back.',
    storyImage: 'godot-road.webp', storyAlt: 'Glowing role portals along the original Godot adventure road.',
    steps: [['Follow the portals', 'Play each role in sequence and see a different side of construction.'], ['Earn every key', 'Solve the five challenges to unlock the ornate final door.'], ['Restore the waterfall', 'Reach the balcony, align the flow gear and bring the water back.']],
    missionIntro: 'Five hands-on missions. Five different ways to think. Select a role to explore its challenge.', missionLabel: 'PLAYABLE GODOT MISSIONS',
    missions: [
      {id:'bim',role:'BIM Coordinator',title:'Shrink & Fix',tag:'SEE THE BIG PICTURE. GO SMALL.',description:'Enter a residential apartment and shrink through a low access hatch. Find the blue pipe crossing an orange air duct, then reroute it to restore clearance.',actions:['Explore the apartment and ceiling services.','Shrink to reach the hidden pipe-and-duct clash.','Reroute the pipe and open the handover report.'],learning:'Spatial thinking, coordination and verification.',image:'godot-bim.webp',alt:'Godot BIM mission showing the pipe and duct coordination challenge.'},
      {id:'site',role:'Site Engineer',title:'Crane & Place',tag:'EVERY LIFT HAS A PLAN.',description:'Read the lifting plan, match each prefabricated module to its bay and keep the lift zone clear. Guide three modules into place with the correct orientation.',actions:['Read the PPVC module number and target bay.','Check the lift zone before moving the load.','Guide, rotate and place all three modules.'],learning:'Drawing reading, safe sequencing and precise placement.',image:'godot-site.webp',alt:'The Godot crane mission with a module suspended above its target bay.'},
      {id:'technical',role:'Technical Engineer',title:'Spec Detective',tag:'THE DETAILS MAKE THE DIFFERENCE.',description:'Become a technical detective. Compare an approved training drawing with the digital model and use the evidence to correct three mismatches.',actions:['Check the pipe diameter against the drawing.','Correct the door identification tag.','Match the pump flow to the training specification.'],learning:'Evidence-based checking of model data and drawings.',image:'godot-technical.webp',alt:'The Godot technical mission drawing and model data checking interface.'},
      {id:'planning',role:'Planning Engineer',title:'Plan the Build',tag:'THINK THREE MOVES AHEAD.',description:'Put the work in the right order, then respond when a delivery runs late. Keep progress moving by choosing useful work that is ready to happen.',actions:['Prepare the base before lifting the module.','Connect services, then inspect and release.','Use the delay to prepare the next empty bay.'],learning:'Dependencies, sequencing and practical decisions.',image:'godot-planning.webp',alt:'The Godot planning mission showing the construction sequence choices.'},
      {id:'qaqc',role:'QAQC Engineer',title:'Build & Check',tag:'FINISHED IS ONLY THE BEGINNING.',description:'Inspect a room for a frame gap, an open pipe penetration and an incorrect door tag. Record the defects and choose the right fixes before handover.',actions:['Find and record all three defects.','Apply the matching corrections.','Reinspect the corrected work before release.'],learning:'Careful inspection and verified handover.',image:'godot-qaqc.webp',alt:'Godot QAQC gameplay inspecting a residential room for defects.'}
    ],
    gameplayTitle:'SEE IT.\nTHEN STEP INSIDE.', gameplayText:'Explore the first adventure in your browser. Desktop or laptop recommended, with keyboard and mouse or an Xbox controller.',
    videos:[
      {src:'godot-crane.mp4',poster:'godot-site.webp',title:'Crane & Place',label:'GODOT GAMEPLAY · SITE ENGINEER',caption:'Actual Godot gameplay capture: a scripted demonstration of the crane and PPVC module placement. Historical prototype recording · approximately 16 seconds.'},
      {src:'godot-technical.mp4',poster:'godot-technical.webp',title:'Spec Detective',label:'GODOT GAMEPLAY · TECHNICAL ENGINEER',caption:'Actual Godot gameplay capture: compare training drawing information and correct the model data. Historical scripted demonstration · approximately 22 seconds.'},
      {src:'godot-planning.mp4',poster:'godot-planning.webp',title:'Plan the Build',label:'GODOT GAMEPLAY · PLANNING ENGINEER',caption:'Actual Godot gameplay capture: arrange the construction sequence and respond to a delivery delay. Historical scripted demonstration · approximately 15 seconds.'},
      {src:'godot-qaqc.mp4',poster:'godot-qaqc.webp',title:'Build & Check',label:'GODOT GAMEPLAY · QAQC ENGINEER',caption:'Actual Godot gameplay capture: inspect the training room, choose corrections and reinspect. Historical scripted demonstration · approximately 26 seconds.'}
    ],
    afterGame:{
      title:'YOUR GAME ENDS.\nYOUR NEXT CHAPTER BEGINS.',
      intro:'Complete The Five Keys at the open house and we’ll give you a student report card and a construction role badge. Your card will connect the strengths you showed in the game with roles to explore and a suggested learning path for your future.',
      reportImage:'godot-team-report.webp',
      reportCaption:'Example Godot report · demonstration results, not a student’s personal report.',
      reportSteps:[
        ['Discover your strengths','See the role or tied roles where your in-game decisions stood out. Explore how those strengths connect with real construction work.'],
        ['Explore your future','Learn what the role involves and consider how it fits your interests. Your game results are a starting point for a conversation about your future career.'],
        ['Find a learning path','Your report handout will point you towards subjects and course options to discuss with a BCA Academy course adviser.']
      ],
      reportNote:'The current demo compares decision accuracy for Site, Technical, Planning and QAQC. BIM completion is recorded separately. The printed report card and study-pathway guidance form part of the planned open-house experience.',
      paths:[
        {role:'BIM Coordinator',focus:'BIM, digital models and coordinating building services.',course:'Diploma in Digital Engineering',url:'https://www.bcaa.edu.sg/what-we-offer/academic-programmes/Details/diploma-in-digital-engineering',color:'#62a9d4'},
        {role:'Site Engineer',focus:'Construction methods, engineering fundamentals and site coordination.',course:'Diploma in Construction Engineering (Digital)',url:'https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29',color:'#f5ad54'},
        {role:'Technical Engineer',focus:'Engineering drawings, technical information and digital construction.',course:'Diploma in Construction Engineering (Digital)',url:'https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29',color:'#81c5a4'},
        {role:'Planning Engineer',focus:'Construction management, project coordination and scheduling.',course:'Diploma in Construction Engineering (Digital)',url:'https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29',color:'#b39bd6'},
        {role:'QAQC Engineer',focus:'Construction quality, inspection and checking work against specifications.',course:'Diploma in Construction Engineering (Digital)',url:'https://www.bcaa.edu.sg/what-we-offer/academic-programmes/diploma/diploma-list/Details/diploma-in-construction-engineering-%28digital%29',color:'#e99d91'}
      ],
      pathwayNote:'Suggested study options for exploration. These are our role-to-course suggestions; check the official programme pages for current entry requirements and speak with a course adviser about further study and industry experience.',
      badgeTitle:'TAKE YOUR\nNEXT CHAPTER HOME.',
      badgeText:'Students will receive a construction role badge as an open-house keepsake, alongside their report card. Each of the five designs celebrates a different way to help build our world.',
      badgeImage:'godot-badges-product.webp',
      badgeCaption:'3D previews of the five role badge designs. Finished badge photographs will replace these previews when available.'
    },
    gallery:[
      ['godot-hub.webp','The journey begins','The original Jewel-inspired hub and the five-key door.'],
      ['godot-shrink.webp','A different perspective','Shrink to explore the hidden building services.'],
      ['godot-site.webp','Lift. Rotate. Place.','The Site Engineer’s PPVC crane challenge.'],
      ['godot-technical.webp','Follow the evidence','Model information meets the training drawing.'],
      ['godot-planning.webp','Plan what happens next','Choose the right construction sequence.'],
      ['godot-qaqc.webp','Check every detail','Inspect, correct and reinspect the room.'],
      ['godot-gear-repair.webp','The final repair','Repair the fictional flow gear beyond the door.'],
      ['godot-waterfall.webp','Bring the flow back','The waterfall at the heart of the adventure.'],
      ['godot-team-report.webp','Your strengths, revealed','Example Godot report using demonstration results.','GODOT · EXAMPLE REPORT'],
      ['godot-badges-product.webp','A role to take home','3D render of the five role badge designs planned as student keepsakes.','ROLE BADGES · 3D DESIGN PREVIEW'],
      ['godot-badges-front.webp','Five roles. Five designs.','Front-view 3D render of BIM, Site, Technical, Planning and QAQC badges.','ROLE BADGES · 3D DESIGN PREVIEW']
    ],
    controls:[['MOVE / LOOK','WASD + mouse','Sticks'],['SPRINT','Shift','L3'],['DOUBLE JUMP','Space','A'],['SHRINK / GROW','Q','B'],['INTERACT','E','X'],['PAUSE','Esc','Menu']],
    endLabel:'YOUR FIRST KEY IS WAITING', endTitle:'READY TO\nFIND YOUR ROLE?', endText:'Five roles. Five keys. One shared adventure.',
    note:'Screenshots show the original Godot demo. Puzzles use fictional training data and do not describe actual building defects.'
  },
  eight: {
    name:'The Eight Keys',word:'EIGHT',engine:'Unreal',label:'THE NEXT CHAPTER',status:'UNREAL DEVELOPMENT PROTOTYPE',
    hero:'unreal-hero.webp',heroAlt:'Native Unreal development screenshot of the Portal Hub character beside the Jewel waterfall and planted terraces.',
    headline:'One team. Every key.',description:'A bigger world. Eight perspectives. Discover the next chapter of our construction adventure.',
    primary:'Explore the missions',intro:'THE WORLD\nWE BUILD TOGETHER.',introText:'Step into Jewel. Meet the crew. The Eight Keys expands our original adventure with a new Unreal world and three more construction roles — each with a different way to see what others miss.',
    facts:[['08','ROLES IN THE JOURNEY'],['03','NEW MISSION CONCEPTS'],['01','SHARED ADVENTURE']],
    storyLabel:'THE PLANNED EIGHT KEYS STORY',storyTitle:'EIGHT KEYS.\nONE EXTRAORDINARY JOURNEY.',
    storyText:'When a fictional inlet mechanism jams, the waterfall falls silent. The full adventure will take you through eight construction roles, each holding a unique key. Beyond the final door, one last repair will restore the flow.',
    storyImage:'unreal-terraces.webp',storyAlt:'Actual Unreal development capture of the waterfall and forest terraces.',
    steps:[['Discover eight perspectives','The planned journey adapts five original missions and introduces Safety, Quantity Surveying and Geotechnical challenges.'],['Open the final door','The story design requires eight different keys, earned in order, before the final door can open.'],['Bring Jewel back to life','The planned balcony gear repair restores the waterfall and completes the shared journey.']],
    missionIntro:'Explore the design for all eight missions. Current Unreal play covers the hub, movement and temporary role rooms; these mission challenges are still in development.',missionLabel:'EIGHT PLANNED MISSIONS',
    missions:[
      {id:'bim',role:'BIM Coordinator',title:'Find the Hidden Clash',tag:'SEE WHAT OTHERS MISS.',description:'Follow a service route, shrink into the ceiling zone and inspect a pipe-and-duct clash. Choose a clear route and verify that the services fit together.',actions:['Read the service route.','Inspect and resolve the clash.','Verify the new clearance.'],learning:'Spatial coordination and verification.',image:'unreal-role-room.webp',alt:'The BIM role character in an actual temporary Unreal prototype room.',caption:'Current prototype role room · Mission challenge planned'},
      {id:'site',role:'Site Engineer',title:'Crane and Place',tag:'BUILD IT RIGHT. FROM THE FIRST LIFT.',description:'Match a PPVC module number to the drawing, check the lift zone, then rotate and place three modules in their correct bays.',actions:['Read the drawing and identify each module.','Confirm the lifting zone is clear.','Place three modules in the right orientation.'],learning:'Drawing reading, safe sequence and precise placement.',image:'unreal-portals.webp',alt:'Eight role portals along the current Unreal prototype skybridge.',caption:'Current prototype hub route · Mission challenge planned'},
      {id:'technical',role:'Technical Engineer',title:'Data Detective',tag:'MAKE EVERY DETAIL ADD UP.',description:'Compare the digital model with an approved training drawing. Correct three mismatches in pipe size, door identification and pump flow.',actions:['Compare model data with the drawing.','Correct the three mismatches.','Verify each change against the evidence.'],learning:'Evidence-based technical checking.',image:'unreal-role-room.webp',alt:'Actual Unreal temporary role-room environment, used as development context.',caption:'Current prototype room environment · Mission challenge planned'},
      {id:'planning',role:'Planning Engineer',title:'Build in the Right Order',tag:'THE NEXT MOVE MATTERS.',description:'Sequence the base preparation, module lifting, services and inspection. When a delivery is late, find work that is ready to proceed.',actions:['Arrange the work by its dependencies.','Respond to a late delivery.','Check the revised sequence.'],learning:'Dependencies and practical work planning.',image:'unreal-portals.webp',alt:'The current Unreal hub route connecting the temporary role rooms.',caption:'Current prototype hub route · Mission challenge planned'},
      {id:'qaqc',role:'QAQC Engineer',title:'Inspect Before Handover',tag:'LOOK CLOSER. CHECK AGAIN.',description:'Find frame, pipe-opening and door-tag defects in a training unit. Choose the fixes and reinspect the corrected work before release.',actions:['Inspect and record three defects.','Choose the matching corrections.','Reinspect before handover.'],learning:'Careful inspection and verified release.',image:'unreal-role-room.webp',alt:'An actual Unreal prototype role room, shown as development context.',caption:'Current prototype room environment · Mission challenge planned'},
      {id:'safety',role:'Safety Engineer',title:'Safe to Start',tag:'A SAFE START CHANGES EVERYTHING.',description:'Identify a missing guardrail, a blocked exit and an intrusion into a lifting exclusion zone. Choose the appropriate controls before reopening the route.',actions:['Recognise the hazards.','Choose controls for the training scenario.','Verify the area before work resumes.'],learning:'Hazard recognition and prevention.',image:'unreal-portals.webp',alt:'The Unreal prototype skybridge and role portals.',caption:'Current prototype hub · Proposed new mission',isNew:true},
      {id:'quantity',role:'Quantity Surveyor',title:'Measure & Budget',tag:'VALUE IS IN THE DETAILS.',description:'Measure or count from the supplied drawing or model. Use training quantities and rates to calculate a cost, then compare quotes for the same scope.',actions:['Take off a small quantity with the right units.','Calculate the cost using the supplied rate.','Compare like-for-like quotes.'],learning:'Units, scope, cost and value.',image:'unreal-terraces.webp',alt:'Actual Unreal development environment overlooking the planted terraces.',caption:'Current Unreal environment · Proposed new mission',isNew:true},
      {id:'geotechnical',role:'Geotechnical Engineer',title:'Read the Ground',tag:'EVERY GREAT BUILD STARTS BELOW.',description:'Read soil layers and borehole information, match an illustrated foundation option to a training brief and flag unexpected ground conditions.',actions:['Read the ground investigation evidence.','Match a reviewed foundation option.','Flag unexpected conditions for investigation.'],learning:'Ground evidence, foundations and escalation.',image:'unreal-terraces.webp',alt:'Actual Unreal environment screenshot, shown as development context.',caption:'Current Unreal environment · Proposed new mission',isNew:true}
    ],
    gameplayTitle:'A NEW WORLD.\nTAKING SHAPE.',gameplayText:'Explore the current Jewel hub, character movement, shrinking and tiny jetpack flight. Eight portal routes lead to temporary role rooms. The full mission progression and story finale are still being built. We’ll expand this showcase with the complete mission gameplay after The Eight Keys is finished.',
    video:{src:'unreal-movement-study.mp4',poster:'unreal-movement-poster.webp',title:'Portal Hub movement study',label:'HISTORICAL UNREAL PROTOTYPE',caption:'Recorded native Unreal courtyard locomotion and coat study (v015). This earlier silent clip demonstrates character movement; it does not show current Jewel gameplay or finished missions.'},
    gallery:[
      ['unreal-hero.webp','Welcome to Jewel','Native Unreal environment and Portal Hub character capture · v023.'],
      ['unreal-flight.webp','A smaller world. A higher view.','Tiny jetpack flight with animated blue exhaust · v024.'],
      ['unreal-portals.webp','Meet the eight roles','The skybridge route to eight temporary role rooms · v022.'],
      ['unreal-terraces.webp','Inside the forest','Waterfall, planted terraces and the glazed roof · v023.'],
      ['unreal-ascent.webp','Take flight','Portal Hub character in the current jetpack development prototype · v024.'],
      ['unreal-role-room.webp','A new perspective','BIM role character in a temporary development room · v022.']
    ],
    controls:[['MOVE / LOOK','WASD + mouse','Sticks'],['RUN','Hold Shift','Hold LB'],['DOUBLE JUMP','Space','A'],['SHRINK / GROW','Q','Y'],['TINY FLIGHT / LAND','J','D-pad Up'],['INTERACT','E','X']],
    endLabel:'MEET THE PEOPLE BEHIND THE KEYS',endTitle:'DIFFERENT ROLES.\nONE CREW.',endText:'Eight construction perspectives, brought together by one shared goal.',
    note:'Unreal imagery shows development prototypes. Full missions, ordered key progression, scoring and the repair finale remain in development. The three new mission concepts require specialist and educator review.'
  }
};
