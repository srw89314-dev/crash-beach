# Crash Beach v0.50 — Phase 0 Structural Audit

## Baseline inspected
- Repository: srw89314-dev/crash-beach
- Baseline branch: main
- Source blob: 15b45f664436747743c244456499cd9a1416ad83
- index.html: 1,589,069 bytes; 6,705 lines
- Architecture: one HTML file, one inline style block, one inline script block, one Canvas (#game)
- Named functions: 217
- Declared variables: 827 (635 unique names)
- Embedded data-image assets: 14
- Input listeners include pointer, keyboard, click, and pointer-move handling.
- Persistence uses localStorage for run saves, best-run records, and cutscene state.

## System map found in source
The monolith already contains distinct conceptual seams:
1. Settings / options / name and run setup
2. Audio and procedural music
3. Cutscene engine and cutscene drawing
4. Sprite loading and character/predator presentation
5. Crafting and recipes
6. Screen/world construction and transitions
7. Player movement, collision, bounds, and input
8. Interaction targeting and resource gathering
9. Survival stats, tides, surges, storms, and difficulty scaling
10. Hidden islandTrust and supernatural tricks
11. Player/crafting XP and progression
12. Predator spawning and overworld AI
13. Turn-based battle system and dodge/block meter
14. Wren state, autonomy, hunting, injury, relationship scenes, and behavior
15. Save/load/serialization/best-run handling
16. HUD and rendering
17. Area-specific background and object drawing

## KEEP
Preserve behavior first:
- Existing run-state model and core survival resources
- Data-driven RECIPES/crafting behavior
- Existing screen transition concepts while the world presentation evolves
- Player/crafting XP foundations
- Predator species/scaling logic
- v0.45 advantage/disadvantage battle opening
- v0.45 dodge/block meter
- Wren autonomy/relationship foundations
- hidden islandTrust behavior
- save/load semantics and best-run records
- procedural audio/music foundations
- cutscene engine concept
- Story/Survival foundations
- pointer + keyboard input support

## MODIFY
Retain intent but rework implementation/presentation:
- Movement: responsive 8-direction movement, animation, facing, collision feel
- World/screens: evolve into larger scrolling areas plus composed rooms/screens
- Interaction targeting: contextual prompts plus restrained in-range glow
- HUD: adaptive desktop/tablet/phone presentation
- Settings: add locked v0.50 time, idle pause, difficulty/custom, language-intensity architecture
- Time/survival: move toward 3 real seconds = 1 game minute and task/sleep time rules
- Save schema: version it and prepare forward-compatible state
- Cutscenes: retain engine but replace inconsistent/placeholder presentation
- Weather: preserve foundations while introducing controlled story/weather-director rules needed by the new design
- Progression: evolve into Survival Level + individual proficiencies
- Area rendering: replace prototype composition with the locked B/C pixel-art language

## REPLACE
- Prototype CSS/UI visual language
- Old HUD layout as the final interface
- Existing inconsistent/incorrect-perspective environment presentation in the v0.50 slice
- Static/prototype-feeling character presentation where it conflicts with the new movement/animation standard
- Any remaining placeholder cutscene silhouettes inside the slice
- Ad-hoc monolithic ownership of unrelated systems as those systems are safely extracted

## LATER
Do not let these block v0.50:
- Full Wren Days 1–16 simulation
- Day 17 meeting implementation overhaul
- Day 21 Category 4 climax
- Cat 5 reconstruction system
- Second Island overhaul
- late-game supernatural/guardian content
- full-island content conversion
- deep relationship content beyond architecture needed for compatibility

## Technical conclusion
A full rewrite is not justified. The source is large, but its functions already reveal strong conceptual boundaries. v0.50 should use incremental extraction: move one low-risk subsystem at a time into external files, preserve globals/behavior initially where necessary, load in deterministic order, and regression-test after every extraction. Architectural purity is secondary to preserving the working game.

## Recommended first extraction order
1. CSS -> css/game.css
2. Audio/music -> js/audio.js
3. Save/persistence -> js/save.js (only after explicit save-compatibility tests)
4. Cutscene engine -> js/cutscenes.js
5. Crafting data/logic -> js/crafting.js
6. Battle -> js/battle.js
7. Wren -> js/wren.js
8. Weather/islandTrust -> js/world-systems.js
9. Rendering/world -> split only as v0.50 environment work requires it

CSS is first because it removes a large presentation concern with comparatively little gameplay risk and gives the upcoming visual-language work a clean home.

## Phase 0 status
- [x] Confirm authoritative repository/default branch
- [x] Confirm current source layout
- [x] Preserve main and create v0.50-polish branch
- [x] Inspect complete v0.45 source structurally
- [x] Produce Keep / Modify / Replace / Later inventory
- [x] Identify minimum safe modularization strategy
- [ ] Establish executable regression baseline
- [ ] Freeze first implementation queue
