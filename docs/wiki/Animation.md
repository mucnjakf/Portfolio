# Animation

Three kinds of motion: reveals with **Motion**, the project gallery with **Motion**, and the background dot grid on a **canvas**. All of them respect the visitor's reduced motion setting.

## Reduced motion

| Where | With "reduce motion" on |
| --- | --- |
| Motion (reveals, gallery) | `<MotionConfig reducedMotion="user">` in `App.tsx`: transforms (zoom, slide) are dropped, fades stay |
| Tailwind loops | The scroll hint's bounce and the badge's pulse use `motion-safe:`, so they don't run |
| DotField | Draws once, follows the pointer without easing, no wave, and redraws only on pointer and scroll |

## Reveals (`ScrollReveal`)

A `motion.div` that fades and zooms blocks in as they scroll into view.

| Setting | Value |
| --- | --- |
| From → to | opacity 0 → 1, scale 0.95 → 1 |
| Duration and easing | 0.8 s, `[0.22, 1, 0.36, 1]` |
| Trigger | 10 % of the block in view (`amount: 0.1`), every time it enters (`once: false`) |
| Stagger | `delay={index * 0.1}` for cards, `index * 0.05` for denser lists |

Wrap a block in `<ScrollReveal>` rather than writing a new `motion.*` animation.

## Gallery

Slides enter from the side they come from and leave to the other, with a fade (0.5 s, the same easing). Dragging the slide sideways is Motion's `drag="x"`; see [Project gallery](Project-Gallery).

## DotField

`src/components/animation/DotField.tsx` draws a grid of dots on a canvas. Near the pointer the dots swell, brighten, tint slightly towards the accent blue and are pushed away; a slow diagonal wave runs across the grid. Elements marked `data-bg-mute` damp the effect behind them, fading out over 90 px.

| Setting | Hero | Page |
| --- | --- | --- |
| Spacing | 24 px | 28 px |
| Dot size, idle → near the pointer | 1.1 → 1.7 | 0.9 → 1.15 |
| Opacity, idle → near the pointer | 0.26 → 0.45 | 0.15 → 0.24 |
| Pointer radius | 150 px | 120 px |
| Push | 5 px | 2 px |
| Glow under the pointer | 0.006 | 0.004 |
| Tint towards blue | 0.05 | 0.05 |
| Wave | 1.8 | 0.8 |
| Parallax on scroll | none | 0.3 |
| Mute behind `data-bg-mute` | 0.18 | off |

- `wave` scales against the idle → active size and opacity range, so when the pointer effect is made subtler, `wave` is raised to keep the ambient wave the same.
- The pointer position is eased (12 % per frame) and its strength fades in and out (6 % per frame).
- The canvas follows the device pixel ratio, capped at 2.
- It stops drawing while off screen (`IntersectionObserver`), and the page grid skips frames while the hero covers the whole screen.
- Dot and accent colours come from a small light and dark palette, read from the `dark` class on every frame.
- The canvases are `aria-hidden` and ignore the pointer (`pointer-events-none`).
