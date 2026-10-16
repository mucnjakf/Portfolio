# Glossary

Words used across the code and this wiki, in alphabetical order.

| Term | Meaning |
| --- | --- |
| **Brow** | The small, spaced-out uppercase line above a title, in the accent blue, such as "SOFTWARE ENGINEER" or "BAR ORDER MANAGEMENT PLATFORM". |
| **Contracts** | The section listing companies and the projects done for them; its data file is `experience.json`. |
| **DataService** | The one module components read content through (`src/services/dataService.tsx`); each getter returns a JSON file typed. |
| **DotField** | The interactive dot grid behind the page, drawn on a canvas. It has two variants: `hero` (stronger, behind the profile) and `page` (subtle, behind everything else). |
| **Gallery** | A project's list of slides, shown as a carousel. A project without a gallery shows its single showcase image. |
| **Highlight** | A tech stack or skill badge marked `"highlight": true`, drawn in blue to mark a core technology. Also the three numbers under the hero ("5+ years of experience"). |
| **Icon map** | A small object in a section component that turns an icon's name from JSON (`"LuRocket"`) into the icon component. Unknown names fall back to a default icon. |
| **Image map** | A small object that pairs content with imported images: `CompanyMap` (logos by company name), `SchoolMap` (logos by the start of the institution's name) and `ProjectMap` (showcase images by project name and slide). |
| **Link preview** | The image, title and description shown when a link to the site is shared. The image is `public/og-image.png`. |
| **Mockup** | An HTML page in `design/showcase` that arranges app screenshots in browser, tablet and phone frames, with a headline and features. It is rendered into a showcase image. |
| **Mute zone** | An element marked with `data-bg-mute`; the hero's dot grid is damped behind it so text stays easy to read. |
| **Occluder** | The element (the hero) that, while it covers the whole screen, lets the page-wide dot grid skip drawing. |
| **Reveal** | The fade and slight zoom with which blocks appear as they scroll into view (`ScrollReveal`). |
| **Screen** | A raw screenshot of an app, in light and dark, kept in `design/showcase/screens` and placed into mockups. |
| **Section shell** | The common frame of every content section: full-width background, a centred column of at most 1300 px, a subtitle with the anchor id and a divider. |
| **Showcase image** | A rendered mockup in `src/assets/projects/<project>/`, in a light and a dark version (`*-light.webp`, `*-dark.webp`). |
| **Slide** | One image of a project gallery, with an id, a title and a caption. |
| **Studio** | Minimalist, the software development studio Filip directs, presented in its own section. |
