# Page sections

The page from top to bottom: what each section shows, where its content comes from and which components draw it. The data files are described field by field on [Content model](Content-Model).

| Section | Anchor | Data | Component |
| --- | --- | --- | --- |
| Navigation bar | | | `navigation/NavBar.tsx` |
| [Profile](#profile) | `#profile` | `profile.json` | `profile/ProfileSection.tsx` |
| [Studio](#studio) | `#studio` | `studio.json` | `studio/StudioSection.tsx` |
| [Projects](#projects) | `#projects` | `projects.json` | `projects/ProjectsSection.tsx`, `ProjectInfo.tsx`, `ProjectGallery.tsx` |
| [Skills](#skills) | `#skills` | `skills.json` | `skills/SkillsSection.tsx` |
| [Contracts](#contracts) | `#contracts` | `experience.json` | `experience/ExperienceSection.tsx` |
| [Education](#education) | `#education` | `education.json`, `certificates.json` | `education/EducationSection.tsx` |
| [Footer](#footer) | | `profile.json` | `navigation/Footer.tsx` |

Components are under `src/components`. Sections alternate between a plain and a lightly shaded background: Studio, Skills and Education are shaded.

## Profile

The hero fills the first screen, over the stronger dot grid.

- **Portrait** (`src/assets/portrait.webp`, 288 px, shown at 144 px in a circle).
- **"Available for hire"** badge with a pulsing dot.
- **Role** as the brow, the **full name** as the page's only `h1`, and the **introduction**.
- **Contact icons:** phone, email, Minimalist (the studio's M mark), LinkedIn and GitHub.
- **Highlights:** three numbers with a label each, side by side on wider screens and stacked on phones.
- **Scroll hint** to the Studio section (wider screens only).

The text block and the highlights are [mute zones](Glossary), so the dot grid stays quiet behind them.

## Studio

Minimalist, the studio Filip directs.

- The role as a blue badge, the studio's **wordmark** (Archivo, uppercase, with a square dot), the **tagline**, a description and a short note.
- **Visit the studio** (primary) and **Start a project** (secondary) buttons, linking to the studio's site and contact page.
- **Services:** four cards with an icon, a title and a description, in two columns on wider screens.
- **How we work:** six numbered steps in one row on large screens, three on tablets and one column on phones.

## Projects

One block per project, separated by dividers, followed by a "More on GitHub" call to action.

- The **brow** (what the project is), the **name**, the **status badge**, the description and the **tech stack**.
- A **GitHub** button linking to `github.com/mucnjakf/<name>`.
- The **showcase**: one image, or a gallery with arrows, dots and captions ([Project gallery](Project-Gallery)).
- On wider screens the text takes 5 of 12 columns and the image 7; every other project swaps the sides.

## Skills

Six areas (Frontend, Backend, Architecture, Infrastructure, Paradigms, Tools), each with an icon and groups of badges such as "Frameworks" or "Testing". Highlighted badges are blue. Two columns on wider screens, one on phones, with dividers between rows.

## Contracts

A vertical timeline of companies, newest first. Each entry shows the company **logo**, name and location, then every project done there: name, date range, description and tech stack. A company with several projects lists them under one logo.

## Education

The same timeline style for degrees: school **logo**, degree, dates, school and the subjects studied. Below it, **certificates** as cards that open their verification page in a new tab.

## Footer

The year on the left; phone, email, Minimalist, LinkedIn and GitHub as small flat icons on the right, from the same `profile.json` links as the hero.
