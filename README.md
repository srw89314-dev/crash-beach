# Crash Beach

Crash Beach is a desktop-first HTML5 survival game about establishing a foothold after a plane crash on a dangerous tropical island. The v0.50 candidate turns the opening three in-game days into a guided vertical slice while preserving the open-ended prototype after completion.

## Play locally

Serve this directory with any static web server, then open `index.html` through that server. The release ZIP is intended for itch.io's HTML Game uploader and keeps `index.html` at the archive root.

## Desktop controls

- Move: `WASD` or arrow keys
- Interact: `E`
- Crafting: `C`
- Hunt: `H`
- Manual save at camp: `K` (Continue mode only)
- Dodge/block timing: `Space`
- Pause/options or close most panels: `Escape`
- Advance a cutscene: `Space`, `Enter`, or click

## v0.50 slice

The Field Journal tracks nine objectives across three days: gather supplies, find a clearing, build your own shelter, find fresh water, craft, survive a predator beyond the safe zones, reach the ridge, and rest at camp. Completing them on Day 3 presents a clear end-of-slice state; the player can then keep surviving in the larger prototype.

## Saves and privacy

Continue-mode saves and best-run records are stored in the player's browser with `localStorage`. There are no accounts, analytics, ads, cookies, or network services in the game build. Clearing browser site data removes saves. See [PRIVACY.md](PRIVACY.md).

## Development checks

Run:

```text
node tests/smoke.mjs
node tests/vertical-slice.test.cjs
```

## Release status

This branch is a desktop-only v0.50 release candidate. Mobile support is deliberately out of scope for this release. See `V050_RELEASE_CHECKLIST.md` and `CRASH_BEACH_ITCHIO_READINESS_2026-10-22.md` for verified evidence and remaining approval gates.

## Rights and credits

Crash Beach is not open-source software. See [LICENSE.md](LICENSE.md) and [CREDITS.md](CREDITS.md).
