# Crash Beach v0.50 desktop release checklist

Date: 2026-10-22

## Launch decision

**Code/package candidate: GO for an owner-controlled Draft or Restricted itch.io upload.**  
**Public discovery launch: NO-GO until the two owner/acceptance gates below are cleared.**

## P0 — public launch gates

- [x] Desktop-only release promise is explicit; mobile support is out of scope and Mobile Friendly must remain off.
- [x] Three-day slice has nine tracked objectives and a clear completion state.
- [x] Objective progress is included in version-2 saves; version-1 saves migrate safely.
- [x] Landing beach and both camps are safe zones; predators begin beyond the starter route.
- [x] The camp shelter is player-built and gates resting and camp saves.
- [ ] Replace temporary route overlays with background-integrated paths and landmarks after the visual-direction interview.
- [x] Early resource/combat balance increased wood yield and spear durability while reducing spear cost.
- [x] Idle auto-pause is enabled by default and configurable.
- [x] Structural smoke test and vertical-slice behavior test pass.
- [x] Integrated inline browser script parses successfully and the ZIP archive structure is valid.
- [x] README, privacy statement, all-rights-reserved license notice, credits record, itch.io page copy, controls, and cover candidate exist.
- [ ] Owner confirms distribution rights/provenance for the previously embedded generated sprite/background assets and completes itch.io's AI disclosure.
- [ ] Acceptance playthrough on the packaged v0.50 build: new game, all nine objectives, craft, predator outcome, Day 3 completion, manual save, reload, death/continue, and post-slice continuation.

## P1 — recommended before broad promotion

- [ ] Test the packaged build in current Chrome and Firefox on desktop.
- [ ] Capture the four representative screenshots listed in `ITCHIO_PAGE_DRAFT.md`.
- [ ] Confirm game title, creator name, support/contact route, price/donation setting, and content rating on the itch.io draft page.
- [ ] Confirm the ZIP is uploaded as an HTML5 browser build with Click to Play and fullscreen enabled.

## P2 — later polish, not a v0.50 blocker

- [ ] Expand keyboard/accessibility semantics beyond the current canvas-heavy interface.
- [ ] Add a trailer or short GIF.
- [ ] Resume mobile layout/device work in a later release.
- [ ] Continue the larger map/art/camera overhaul described in the long-range build plan.

## Candidate artifact

- Build: `dist/crash-beach-v0.50-itchio.zip`
- Size: 1,040,265 bytes
- SHA-256: `E141BC94B423078610FCF9E0254526B70454FCE70E3B2D771D2371F70B5F0852`
- Archive root: `index.html` plus `css/game.css` and `js/vertical-slice.js`
- Cover: `assets/itch-cover-v050.png`
