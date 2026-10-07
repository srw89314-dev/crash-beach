# Crash Beach v0.50 — The Polish Era

## Mission
Build a polished Days 1–3 vertical slice that establishes the production standard for the rest of Crash Beach while preserving the working v0.45 gameplay foundation.

## Scope guardrails
- No major new feature enters v0.50 unless Days 1–3 require it.
- Preserve working systems before replacing presentation.
- Prepare architecture for later systems; do not build later-game content now.
- Finish and test one phase before expanding scope.
- Day 17 Wren meeting and Day 21 Category 4 storm remain later milestones.

## Locked vertical-slice direction
- Days 1–3 are the v0.50 acceptance slice.
- Visual style: GBC/Pokémon-era readability and charm blended with richer modern pixel-art environments, lighting, water, weather, effects, portraits, and cinematic art.
- Camera/world: larger scrolling exploration areas plus tightly composed rooms/screens where useful.
- Paths and major exits must always be clearly readable.
- Medium-scale expressive characters; responsive 8-direction movement.
- Contextual interactions with a restrained in-range glow.
- Adaptive HUD across PC, tablet, and phone.
- Normal clock: 3 real seconds = 1 in-game minute.
- Idle auto-pause is enabled by default and configurable.
- Journal + objectives is a core resource and is introduced early.
- Hand-drawn exploration map grows with knowledge.
- Story/Survival mode is separate from difficulty.
- Difficulty offers presets plus Custom.
- Language Intensity is customizable from clean/no-swearing through unfiltered.
- Autosaves plus manual saves, with stricter Survival Permadeath behavior later.

## Build phases
0. Preserve & baseline
1. Technical foundation
2. Visual language & Crash Beach environment
3. Sean, movement & camera feel
4. HUD, menus & responsive UX
5. Time, survival & daily life
6. Skills, crafting & learning
7. Journal, objectives & hand-drawn map
8. Days 1–3 content pass
9. Presentation pass
10. Save, difficulty & modes
11. Device & quality gauntlet
12. v0.50 acceptance

## Phase 0 checklist
- [x] Confirm authoritative repository and default branch.
- [x] Confirm current source layout.
- [x] Preserve main; create isolated v0.50 working branch.
- [x] Establish repository baseline: v0.45 commit identified; no GitHub Actions/status checks exist on the baseline commit. Historical regression evidence remains documentation-only until a runnable harness is added.
- [ ] Inventory current systems as Keep / Modify / Replace / Later.
- [ ] Identify the minimum safe modularization needed before polish work.
- [x] Freeze the first implementation queue.

## Repository baseline
- Source of truth: srw89314-dev/crash-beach
- Baseline branch: main
- v0.50 working branch: v0.50-polish
- Current layout at start of v0.50: one root index.html
- Baseline index.html size: 1,589,069 bytes
- Baseline index.html blob SHA: 15b45f664436747743c244456499cd9a1416ad83

## Acceptance test for v0.50
At the end of the slice:
1. Does it look good?
2. Does movement feel good?
3. Is surviving fun?
4. Do we want to continue into Day 4?

If any answer is no, v0.50 is not finished.

## Frozen implementation queue — Phase 1 opening
1. Add a lightweight automated smoke/regression harness before source extraction.
2. Verify the untouched v0.45 baseline through the harness.
3. Extract inline CSS to `css/game.css` with zero intended visual/behavior change.
4. Re-run regression checks and compare the page before/after extraction.
5. Only then begin the first v0.50 presentation changes.

### Safety rule
Every structural extraction must be behavior-preserving and independently reversible. Do not combine refactoring with redesign in the same change.
