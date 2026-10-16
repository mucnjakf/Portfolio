# Architecture

The portfolio is a **single-page React app** built by Vite into static files. There is no server code, no router and no state library: content is bundled from JSON, and each section component reads it and renders it.

## From source to page

```
src/data/*.json ──► DataService (typed getters) ──► section components ──► App.tsx ──► #root
src/assets/*    ──► imported by components (Vite fingerprints and copies them)
public/*        ──► copied as is (resume, favicon, link preview image)
index.html      ──► head, fonts, theme script, mounts src/main.tsx
```

- `vite build` bundles the JSON, the components and the imported images into `dist/`, with hashed file names.
- GitHub Pages serves `dist/` at `mucnjakf.dev` ([Deployment](Deployment)).

## Folders

| Folder | Holds |
| --- | --- |
| `src/components/<section>/` | The components of one section: `profile`, `studio`, `projects`, `skills`, `experience`, `education`, `navigation` |
| `src/components/<kind>/` | Shared building blocks: `button`, `display`, `typography`, `animation` |
| `src/data/` | The content, one JSON file per section ([Content model](Content-Model)) |
| `src/types/` | One TypeScript type per JSON shape, one file each |
| `src/propTypes/` | Prop types shared by several components |
| `src/services/` | `dataService.tsx`, the only place JSON is imported |
| `src/assets/` | Images components import: logos, the portrait, project showcases |
| `public/` | Files served as they are |
| `design/showcase/` | Mockups and the script that renders showcase images; not part of the build ([Showcase images](Showcase-Images)) |

## The page

`App.tsx` puts the page together:

```
<MotionConfig reducedMotion="user">
  <NavBar />                      fixed <header> with the main <nav>
  <main>
    <DotField variant="page" />   fixed, behind everything
    hero: <DotField variant="hero" /> + <section id="profile"><ProfileSection /></section>
    <StudioSection /> <ProjectsSection /> <SkillsSection /> <ExperienceSection /> <EducationSection />
  </main>
  <Footer />
</MotionConfig>
```

Every content section renders its own `<section>` with the [section shell](Glossary): a full-width background, a 1300 px column, a `Subtitle` (an `h2` carrying the anchor id) and a divider.

## Data flow

- Components never import JSON: they call `DataService.getProjects()`, `getSkills()` and so on, which return the file cast to its type.
- JSON can't hold components or images, so names are turned into them in the component:
  - icons by name through an **icon map** (`"LuRocket"` → `LuRocket`), with a fallback icon;
  - logos and showcases through **image maps** (`CompanyMap`, `SchoolMap`, `ProjectMap`).
- Content is fixed at build time; nothing is fetched at run time.

## State

The only state lives in `NavBar` (the active section, the mobile menu, the theme) and `ProjectGallery` (the current slide and direction). The theme is the `dark` class on `<html>`; every component styles itself with Tailwind's `dark:` variant, and `DotField` reads the class when it draws.

## Building blocks

| Kind | Components |
| --- | --- |
| Typography | `Title` (the `h1`), `Subtitle` (`h2` or `h3`, with an optional brow and description), `Paragraph` |
| Buttons and links | `ButtonPrimary` (a button, or a download link), `ButtonLinkPrimary`, `ButtonLinkSecondary`, `IconButtonSecondary`, `IconLinkSecondary`, `IconLinkFlat` |
| Display | `Badge`, `Divider`, `TechStackGroup`, `MinimalistIcon` |
| Animation | `ScrollReveal`, `DotField` |
| Projects | `ProjectInfo`, `ProjectGallery` |

Link components open web addresses in a new tab with `rel="noreferrer"` and leave `tel:` and `mailto:` links in the same tab.
