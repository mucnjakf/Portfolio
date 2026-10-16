# Portfolio

Portfolio is the personal website of Filip Mučnjak, live at [mucnjakf.dev](https://mucnjakf.dev). It is one page that introduces Filip, the Minimalist studio he directs, his projects, skills, contracts and education, with contact links and a downloadable resume. Everything is static: the content lives in JSON files, the site is built with Vite and published to GitHub Pages by hand.

## The page at a glance

| Section | What it shows | Content from |
| --- | --- | --- |
| Profile (hero) | Portrait, role, introduction, contact icons, three highlights | `profile.json` |
| [Studio](Page-Sections#studio) | Minimalist, its services and how it works | `studio.json` |
| [Projects](Page-Sections#projects) | Personal projects with status, tech stack, GitHub link and showcase images | `projects.json` |
| [Skills](Page-Sections#skills) | Technologies and practices, grouped by area | `skills.json` |
| [Contracts](Page-Sections#contracts) | Companies and the projects done for them, as a timeline | `experience.json` |
| [Education](Page-Sections#education) | Degrees and certificates | `education.json`, `certificates.json` |

## Highlights

- **Content without code:** every text, link and list on the page comes from a JSON file in `src/data`; changing content never means touching a component.
- **Light and dark:** the theme follows the visitor's system until they pick one, and every showcase image exists in both themes.
- **Project galleries:** a project can show one image or a carousel of slides, with swipe, keyboard and screen reader support.
- **Showcase pipeline:** project images are HTML mockups of real app screenshots, rendered to WebP by a script, so they always match the site's look.
- **Accessible by default:** landmarks, a correct heading outline, labelled icon buttons, visible keyboard focus and reduced motion respected everywhere.
- **Calm motion:** blocks fade in as they scroll into view, and a subtle interactive dot grid sits behind the page.

## Where to start

- **Seeing what it does:** [Features overview](Features-Overview), then [Page sections](Page-Sections).
- **Changing content:** [Editing content](Editing-Content) and [Content model](Content-Model).
- **Understanding how it is built:** [Architecture](Architecture), [Styling and theme](Styling-and-Theme), [Animation](Animation).
- **Running and publishing it:** [Getting started](Getting-Started), then [Deployment](Deployment).
- **Unfamiliar words:** [Glossary](Glossary).

## Wiki map

- **Overview:** [Scope](Scope) · [Glossary](Glossary) · [Roadmap](Roadmap)
- **Product:** [Features overview](Features-Overview) · [Page sections](Page-Sections) · [Project gallery](Project-Gallery)
- **Architecture:** [Architecture](Architecture) · [Styling and theme](Styling-and-Theme) · [Animation](Animation) · [Accessibility](Accessibility) · [Performance and SEO](Performance-and-SEO)
- **Data:** [Content model](Content-Model)
- **Technical specification:** [Tech stack](Tech-Stack) · [Configuration](Configuration) · [Architecture decisions](Architecture-Decisions)
- **Development:** [Getting started](Getting-Started) · [Editing content](Editing-Content) · [Showcase images](Showcase-Images) · [Deployment](Deployment) · [Coding conventions](Coding-Conventions) · [Troubleshooting](Troubleshooting)
