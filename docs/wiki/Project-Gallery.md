# Project gallery

A project can show one showcase image or a carousel of slides. OrderPoint uses six slides, one per part of the system; Codex and Herculean show a single image. The component is `src/components/projects/ProjectGallery.tsx`.

## What the visitor sees

- The current slide in the same rounded, shadowed frame a single image uses (3:2).
- Under it, the slide's **title** and "**2 / 6 · caption**", with **previous** and **next** buttons.
- A row of **dots**, one per slide; the current one is a longer blue pill.

## Ways to move

| Input | Result |
| --- | --- |
| Previous / Next buttons | One slide back or forward; the ends wrap around |
| Dots | Jump to that slide |
| Left / Right arrow keys | Back or forward, while focus is anywhere inside the gallery |
| Swipe or drag | More than 60 px, or a quick flick, moves one slide |

Slides slide in from the side they come from and fade. With reduced motion only the fade remains.

## Loading

Only the visible slide is in the page. When a slide is shown, the next and previous slides are preloaded in the current theme, so moving feels instant while the other slides cost nothing until they're needed. Images keep their size (`width` and `height`), so the page doesn't shift.

## For screen readers

- The gallery is a region announced as a carousel ("OrderPoint screenshots").
- Each slide is announced as "slide, 2 of 6: Customer app", and its image's alternative text names the project and the slide.
- The caption is a polite live region, so moving to another slide is announced.
- The buttons say "Previous screenshot", "Next screenshot" and "Show Bar app"; the current dot is marked as current.

## Adding slides to a project

1. Make one mockup per slide and render them ([Showcase images](Showcase-Images)).
2. Add a `gallery` array to the project in `projects.json`, one entry per slide: `id`, `title`, `caption`.
3. Import each slide's light and dark image in `ProjectInfo.tsx` and add them to `ProjectMap` under the project's name, keyed by slide id.

A slide whose images are missing from `ProjectMap` is skipped. A project without `gallery` uses the image under the key `showcase`.
