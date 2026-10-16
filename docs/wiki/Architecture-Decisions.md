# Architecture decisions

The choices that shaped the portfolio, each with its reason and its cost. Status is **Accepted** unless noted.

## ADR-01: A static React single-page app

- **Decision:** one page built with React and Vite into static files; no server, no router.
- **Why:** a portfolio is read, not used: static files are fast, free to host and have nothing to keep running. Sections are anchors on one page, so a router would add nothing.
- **Cost:** the content is rendered in the browser, so crawlers that don't run JavaScript see only the `<head>` ([Performance and SEO](Performance-and-SEO)).

## ADR-02: Content in JSON files, read through one service

- **Decision:** every text and list lives in `src/data/*.json`, with a type per shape, and components read it only through `DataService`.
- **Why:** content changes don't touch components, the files are easy to review in a diff, and there is one place where data enters the app.
- **Cost:** no editor: content changes need a commit and a deploy. The JSON is cast, not validated, so a typo only shows on the page.

## ADR-03: Icons and images resolved by name in components

- **Decision:** JSON names icons (`"LuRocket"`) and implies images (company name, project name); small maps in the components turn them into imports.
- **Why:** JSON can't hold components or bundled files, and imports let Vite fingerprint and optimise every image.
- **Cost:** a new icon or logo needs a code change next to the data change.

## ADR-04: Tailwind CSS v4 utilities only

- **Decision:** all styling as utility classes, with the theme in `index.css` and classes sorted by Prettier.
- **Why:** styles live next to the markup they style, nothing is unused, and a consistent palette and spacing scale come for free.
- **Cost:** long class lists, and conditional classes written as template-literal ternaries.

## ADR-05: Class-based dark mode set before the first paint

- **Decision:** the `dark` class on `<html>`, set by an inline script in `index.html` from the saved choice or the system preference; only an explicit switch is saved.
- **Why:** no flash of the wrong theme, and visitors keep following their system until they choose.
- **Cost:** the script and `NavBar` must agree on the storage key and values (`theme`: `light` / `dark`).

## ADR-06: Motion for animation, a canvas for the background

- **Decision:** Motion for reveals and the gallery; a hand-written canvas for the dot grid.
- **Why:** Motion handles in-view triggers, exit animations, dragging and reduced motion in one place; a canvas can draw thousands of dots that react to the pointer, which DOM elements couldn't do smoothly.
- **Cost:** Motion adds noticeably to the bundle, and the canvas runs continuously, so it has to pause off screen and respect reduced motion by itself.

## ADR-07: Showcase images rendered from HTML mockups

- **Decision:** project images are HTML pages in `design/showcase` that frame real screenshots, rendered to WebP by `render.py` in light and dark.
- **Why:** the images share the site's typography, colours and frames, and can be re-rendered whenever a screenshot or a headline changes.
- **Cost:** a Python and Edge setup outside the Node toolchain, and screenshots to retake when an app changes ([Showcase images](Showcase-Images)).

## ADR-08: A light and a dark version of every showcase

- **Decision:** two images per showcase, swapped with Tailwind's `dark:` classes; app screenshots are taken in the app's matching theme.
- **Why:** an image that ignores the theme looks out of place on the page.
- **Cost:** twice the images to produce; only one is downloaded per visit.

## ADR-09: Deploys started by hand

- **Decision:** the GitHub Actions workflow runs only on `workflow_dispatch`, lints, builds and publishes to GitHub Pages; two deploys never run at once and a running one is never cancelled.
- **Why:** every change is reviewed before it goes live, and pushing to `main` is safe.
- **Cost:** a merged change isn't live until someone starts the workflow.

## ADR-10: Few dependencies

- **Decision:** React, Tailwind, Motion and react-icons at run time; nothing new without a reason.
- **Why:** a small surface to keep up to date and a small bundle.
- **Cost:** small things (the carousel, the Minimalist icon, the theme switch) are written in the project rather than installed.
