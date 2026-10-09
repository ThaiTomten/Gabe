# Runeforge Empire release checklist

## Required before every merge
- [ ] Movement: joystick in 8 directions; stop on release; safe collision
- [ ] Safari: page does not scroll while moving; modal scrolling still works
- [ ] Save: existing runeforge_alpha6 save loads and persists
- [ ] Economy: crafting consumes inputs; no negative inventory; offline payout not duplicated
- [ ] Dungeon: enter, fight, flee, return, and rescue from blocked positions
- [ ] UI: no gray screen, no uncaught JS error, version label correct
- [ ] CI regression tests pass
- [ ] Manual iPhone Safari test and release notes

## Release procedure
1. Develop on branch.
2. Open PR and inspect diff.
3. Run automated tests and manual iPhone smoke test.
4. Merge after approval.
5. Confirm GitHub Pages success.
6. Retain rollback commit reference.

## Known good reference
Movement from Alpha 0.9 was restored in 2.0.7 after regression.
Do not replace touch input without an explicit regression test.
