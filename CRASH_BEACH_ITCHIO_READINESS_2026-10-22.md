# Crash Beach itch.io Readiness Review

Date: 2026-10-22  
Repository: `srw89314-dev/crash-beach`  
Live production inspected: `main` at `85347529de728facee6735c8b7fe7096fe9cec77` (`v0.45`)  
Prepared candidate: working tree on `v0.50-polish`  
Live site: `https://crash-beach.netlify.app`  
Decision: **GO for an owner-controlled Draft or Restricted desktop itch.io upload; NO-GO for public discovery until asset-rights confirmation and a packaged v0.50 acceptance playthrough are complete.**

## v0.50 desktop candidate update

The user explicitly narrowed this release to desktop. The v0.50 working candidate now adds:

- a nine-objective Field Journal spanning the opening three in-game days;
- a clear vertical-slice completion panel with optional continuation into the open-ended prototype;
- objective progress integrated with gathering, travel, fresh water, crafting, predator outcomes, shelter rest, and day rollover;
- a safe landing beach, player-built camp, terrain-aware movement, and gentler early spear economy; background-integrated route art remains open;
- save schema version 2 with migration from existing version-1 saves;
- configurable idle auto-pause for tab/window focus loss;
- release-facing title/onboarding, README, privacy statement, license notice, credits/asset record, itch.io page copy, cover candidate, and prioritized release checklist;
- a zero-dependency behavioral test for objective completion and save migration, in addition to the structural smoke test.

Both automated checks and an integrated-script syntax check pass. A controlled local browser visual/playthrough pass could not be performed because the available browser environment timed out on localhost. The existing live v0.45 desktop playability evidence below remains valid for the preserved gameplay foundation, but it is not a substitute for the final packaged v0.50 acceptance run.

## Evidence summary

### Live verified

- Netlify production is healthy and serves the same commit as GitHub `main`.
- Desktop browser: setup, intro transition, first predator encounter, Attack, dodge timing, encounter resolution, health, XP, loot, and spear durability all worked.
- Phone viewport (390 x 844): the page overflowed horizontally, showed a large empty region above the game, and compressed the setup form into a small internal scroller. The current build should not be marked Mobile Friendly.

### Code/package verified

- The production build contains `index.html` plus its local stylesheet and vertical-slice helper: 1,582,920 HTML bytes before compression.
- It contains 14 embedded image assets, no external network references, no duplicate HTML IDs, and one syntactically valid inline JavaScript block.
- The prepared ZIP contains `index.html` at archive root and is approximately 1.03 MB, comfortably inside itch.io's current HTML5 limits.
- Continue-mode saves use browser `localStorage`; saves are local to the browser/site origin, not cloud saves.

### Documentation/branch verified

- The repository does not contain separate design, story, memory, README, license, or credits files on `main`.
- The unpublished `v0.50-polish` branch is 12 commits ahead and contains a build plan, structural audit, CSS extraction, and a structural smoke test.
- Its own acceptance plan is unfinished: the intended Days 1-3 vertical slice, presentation pass, save/mode pass, and device/quality gauntlet are not complete. It is not a launch candidate.

## Actual playability and completeness

The current desktop build is genuinely playable, not a mock-up. It has a working survival loop, keyboard/touch controls, resource gathering and crafting hooks, progression, procedural audio, cutscenes, predator encounters, relationship systems, weather events, save/continue behavior, and multiple areas. The tested opening and combat loop are coherent.

It is not verified end-to-end. No automated test drives game state; the available branch smoke test checks only that important source structures still exist. A full acceptance run still needs to cover saving/loading, death/continue, every area transition, gathering and crafting, day rollover, storms, Duo/Wren progression, raft/second island access, and long-run balance.

The source itself defines the game as endless survival with no rescue ending. That can be a valid finished design, but it conflicts with the repository's newer plan for a polished Days 1-3 vertical slice. A public launch needs one explicit promise: either release v0.45 as an honest prototype/endless survival game, or finish v0.50 and launch that.

## Prioritized go/no-go checklist

### P0 — required before public launch

- [ ] Choose and state the release promise: v0.45 endless survival prototype or completed v0.50 vertical slice.
- [ ] Fix the phone layout, or explicitly ship desktop-only and leave itch.io's Mobile Friendly option off.
- [ ] Complete a recorded acceptance run covering save/load, death/continue, crafting, travel, storms, Duo/Wren progression, raft/second island, and long-run difficulty.
- [ ] Add a license/credits record and confirm rights/attribution for every embedded asset.
- [ ] Disclose the generative-AI artwork accurately in itch.io metadata; source comments identify AI-generated sprite and background art.
- [ ] Prepare the public page package: cover image, representative screenshots, concise description, controls, content/tone note, and accurate tags/classification.

### P1 — strongly recommended

- [ ] Replace the `Prototype v0.45` title and oversized opening feature paragraph with release-facing onboarding.
- [ ] Add behavioral tests rather than relying only on source-presence smoke checks.
- [ ] Test current Chrome, Firefox, Safari, keyboard-only input, touch input, and at least one physical phone/tablet if mobile support remains a goal.
- [ ] Review accessibility: page zoom is disabled, most play is canvas-rendered, and several controls are visually represented without semantic buttons.
- [ ] Version and test save-schema migrations before future releases change serialized state.
- [ ] Add README, changelog, known issues, support/contact route, and privacy statement (even if the game collects no data).

### P2 — page/release polish

- [ ] Add a short trailer or animated GIF if available.
- [ ] Decide whether the first public page is free/donation-supported and state that clearly.
- [ ] Use Click to Play so audio starts after an intentional player gesture.
- [ ] Prefer Click to launch in fullscreen unless the responsive embed is fixed and tested.

## Prepared artifact

### Current desktop candidate

`dist/crash-beach-v0.50-itchio.zip`

- Runtime entries: `index.html`, `css/game.css`, `js/vertical-slice.js`
- ZIP size: 1,040,265 bytes
- SHA-256: `E141BC94B423078610FCF9E0254526B70454FCE70E3B2D771D2371F70B5F0852`
- Cover candidate: `assets/itch-cover-v050.png`

This is the current Draft/Restricted itch.io candidate. It has passed source, behavior, syntax, and archive-structure checks; it still requires the owner acceptance playthrough and asset-rights confirmation listed in `V050_RELEASE_CHECKLIST.md` before public discovery.

### Preserved v0.45 production snapshot

`dist/crash-beach-v0.45-itchio.zip`

- Source: exact production/main `index.html` at commit `85347529de728facee6735c8b7fe7096fe9cec77`
- ZIP entries: 1 (`index.html` at archive root)
- ZIP size: 1,032,614 bytes
- SHA-256: `3FE45C58670E0C2D087BBE246C2344F731B493B19C3EF1698284186057B9D483`

This artifact is suitable for uploading to a Draft or Restricted itch.io HTML Game page for desktop playtesting. It should not yet be presented as the public finished release.

## Recommended itch.io settings for the staged playtest

- Kind of project: HTML Game
- Visibility: Draft or Restricted
- Launch mode: Click to launch in fullscreen
- Click to Play: On
- Mobile Friendly: Off
- Price: No payments until the public release decision is made
- Classification: English-language game; add only accurate genre/input/accessibility tags
- Generative AI disclosure: On/accurately completed for the embedded sprite and background art

## External requirements checked

- itch.io HTML5 guide: `https://itch.io/docs/creators/html5`
- itch.io creator quality guidelines: `https://itch.io/docs/creators/quality-guidelines`
