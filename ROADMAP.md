# Runeforge Empire — Master Roadmap v1.0

Status: PLAN (not implemented). Working title pending trademark clearance.
Last reviewed: 2026-10-09
Playable test: https://thaitomten.github.io/Gabe/
Repository: https://github.com/ThaiTomten/Gabe

## Locked design decisions
- 50/50 Fantasy RPG + Business Tycoon.
- Top-down exploration with smooth 360-degree touch joystick.
- Empire management accessible from menus anywhere.
- Production, hero equipment, dungeon loot and trade share one inventory/economy.
- Idle and offline progress, meaningful active play.
- Original blocky fantasy art direction; do not copy third-party assets.
- iPhone Safari first, Android later.
- Runeforge Empire remains a working name.

## Non-negotiable release gates
- Movement works on iPhone; page does not scroll while using joystick.
- No save corruption; migration tested with existing saves.
- Each feature has acceptance criteria and a manual iPhone smoke test.
- Avoid direct large edits to main: use branches/PRs, test and review before merging.
- Keep rollback path to last known good commit.
- New features must not break existing RPG/tycoon systems.

## Roadmap
### Milestone 2.1 — Stabilize foundation [NEXT]
- [ ] Snapshot known-good movement and document regression test.
- [ ] Extract input, movement, world, economy, combat, UI, persistence into modules.
- [ ] Add smoke tests: joystick moves, player stops, collision, dungeon transition, modal interaction, save/reload.
- [ ] Add version indicator and error panel for debug builds.
- [ ] Test offline simulation caps, resource conservation, no double payouts.
- [ ] Define save schema/version and migration from runeforge_alpha6.
Acceptance: 10 minutes of iPhone gameplay without stuck movement, scroll, or lost progress.

### Milestone 2.5 — Vertical slice: Emberfall
- [ ] Original coherent tiles/sprites, player walk/idle directions, 3 NPCs.
- [ ] One quest chain: gather -> craft -> equip -> dungeon -> sell -> upgrade.
- [ ] One balanced dungeon with encounter, rewards, exit, and no softlocks.
- [ ] Clear UI for resources, quest goals, map interactions.
Acceptance: first-time player completes the full loop without instructions in 10–15 minutes.

### Milestone 3.0 — Adventure & living world
- [ ] Multiple regions, dungeon variants, enemy AI and combat feedback.
- [ ] Hero skills, equipment tiers and meaningful item effects.
- [ ] NPC routines, dialogue and branching quest hooks.
- [ ] Map transitions and unlockable areas.
Acceptance: RPG play offers distinct decisions, not only larger numbers.

### Milestone 4.0 — Business empire
- [ ] Production recipes, inventories, queues, workers, managers.
- [ ] Upgrade milestones, buy x1/x10/MAX, visible building evolution.
- [ ] Supply/demand events, contracts, transport and bottlenecks.
- [ ] Offline production with caps and deterministic resource consumption.
Acceptance: different investment choices change throughput and adventure options.

### Milestone 5.0 — Kingdoms & legacy
- [ ] Multiple towns, factions and trade routes.
- [ ] Research specializations and long-term prestige/legacy.
- [ ] Regional world events with reversible effects.
- [ ] Endgame goals and replayability review.
Acceptance: long-term progression creates new playstyles and content.

## Unique design pillars
1. Living Empire: businesses visibly reshape towns and unlock quests.
2. Supply the Adventurers: player sells equipment to heroes whose success changes local markets.
3. Dual Expedition: personally explore dangerous dungeons or finance idle hero expeditions.
4. Rune Contracts: region-specific demand and rare magical materials.
5. Legacy with choices: prestige changes specialization, not just global multipliers.

## Tracking workflow
- GitHub Issues: one issue per feature/bug with acceptance criteria.
- Labels: type:bug, type:feature, area:movement, area:world, area:economy, area:combat, area:ui, priority:P0/P1/P2.
- GitHub Project board columns: Backlog, Ready, In progress, In review, iPhone test, Done.
- Milestones: 2.1, 2.5, 3.0, 4.0, 5.0.
- Each PR links an issue, includes screenshots/notes, and identifies save migration impact.
- Weekly review: shipped, bugs, next 3 priorities, performance, balance.
- Release log: version, commit, tested device/browser, pass/fail.

## Immediate next three tasks
1. P0 — Stabilize joystick and collision with regression test.
2. P0 — Save schema migration and offline accounting tests.
3. P1 — Emberfall vertical slice: NPC -> crafting -> dungeon -> contract.

## Definition of done
Code merged, tests passed, iPhone Safari smoke test passed, save migration safe, release notes updated.
