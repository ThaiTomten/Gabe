# Beta Candidate 0.1 — Playtest brief

**Status:** Candidate on a separate branch; not a public beta or production release.
**Live iPhone build:** main remains unchanged until manual touch tests pass.

## Features in this candidate
- Original Emberfall exploration, 360° joystick, touch-scroll lock.
- Existing dungeon, NPC interactions, contracts, combat and inventory.
- Idle hero expeditions (60 seconds) with one-time completion rewards.
- Forge mastery: a bonus at every 10 crafted swords.
- Merchant reputation: better sale prices after contract milestones.
- Mine bulk upgrade +10 with discount.
- Existing offline production and save key retained.

## Playtest loop (15–20 minutes)
1. Start from an existing save and verify movement in eight directions.
2. Release joystick and confirm immediate stop.
3. Walk past buildings and NPCs; verify no softlocks.
4. Gather ore and wood, craft ten swords, check milestone bonus.
5. Sell swords, upgrade mine +10, hire a manager.
6. Start an expedition, close/reopen after 60 seconds, verify reward once.
7. Enter the goblin dungeon, defeat one goblin, exit and return.
8. Complete a merchant contract, confirm reputation changes price.
9. Reload Safari and confirm gold, equipment, progression and position.
10. Verify no document scroll while dragging the joystick; menus scroll.

## Beta gate
- No P0 movement or save bugs.
- Automated regression tests green.
- Manual iPhone Safari playtest complete.
- No obvious progression dead ends.
- A first-time player can understand the initial 10-minute loop.
- Beta is not declared until these gates are met.

## Inspiration and differentiation
- Shop Titans: fantasy shop + hero expeditions.
- Melvor Idle: connected production skills and offline progress.
- AdVenture Capitalist: automation, upgrades, milestones.
- Our differentiator: the player physically explores the world and runs the businesses supplying its adventurers.
