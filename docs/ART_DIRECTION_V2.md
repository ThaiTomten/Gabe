# Runeforge Empire — Visual Direction v2 (proposed)

Research-informed direction, 2026-10-09. This is a design brief, not proof of broad player preference.

## Research observations
- Eastward is frequently praised in community discussions for rich, intricate pixel environments and distinctive characters.
- Sea of Stars and CrossCode are praised for polished pixel art and legibility in motion.
- Stardew Valley is often praised for cohesive color and warm, inviting scenes.
- Silhouette-first character design and consistent scale/outline/color language help recognition at small mobile sizes.

## Proposed art identity: Runeforge Storybook Fantasy
- 3/4 top-down view with readable depth, painterly light and sharp pixel silhouettes.
- Not Minecraft Dungeons assets; instead original chunky medieval architecture and detailed pixel sprites.
- Character target: 32x48 or 48x64 authored sprites, rendered at a consistent scale; distinguish face, hair, armor and weapon.
- 8-direction movement, minimum 6–8 distinct frames per direction for hero (start with 4 if production-limited), idle breathing, attack, hurt, interact, emote.
- NPCs have recognizable profiles and clothing; guard, merchant, smith, miners, expedition heroes differ by silhouette and accessories.
- Monsters have unique proportions and telegraphed attacks; not simply humanoids recolored.
- Palette families: Emberfall warm ochre/forest teal; Whisperwood moss/cyan dusk; dungeon slate/purple rune glow.
- Lighting: fixed light direction, grounded contact shadows, subtle atmospheric particles.
- UI: parchment-metal panels, equipment paper-doll, inventory item icons, clear rarity markers, 44px+ touch targets, contrast-first.

## Production pipeline
1. Draw silhouette sheets for hero, Elric, Mira, Goblin Scout, Brute, Shaman, Duskwolf.
2. Validate silhouettes at real iPhone gameplay size before detailing.
3. Create original layered spritesheets and animation atlas with named frames.
4. Add sprite loader with safe fallback to current procedural sprites.
5. Replace one character at a time; performance/profile test.
6. Add environment tilesets and animation FX only after sprites remain readable.
7. Preserve existing joystick/zone tests.

## Art review gates
- Every character recognizable in grayscale and silhouette-only view.
- Equipment change visible from normal gameplay zoom.
- No inconsistent pixel scales or mixed lighting direction.
- Motion feels distinct for heavy brute vs agile scout.
- Asset provenance documented; no unlicensed copying.

## Research references
- https://www.reddit.com/r/eastward/comments/145tz04/
- https://www.reddit.com/r/CozyGamers/comments/1peuf2p/
- https://www.reddit.com/r/seaofstars/comments/18k6x9g/
- https://brokenbuildstudios.com/pixel-art-silhouette-design-for-readable-characters/
- https://www.pixelbook.io/blog/best-pixel-art-games-to-study
