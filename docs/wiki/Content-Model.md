# Content model

All content is in `src/data`, one JSON file per section. Each shape has a TypeScript type in `src/types` (one type per file), and components read the files only through `DataService` in `src/services/dataService.tsx`.

| File | Getter | Type | Shown in |
| --- | --- | --- | --- |
| `profile.json` | `getProfile()` | `Profile` | Hero, footer |
| `studio.json` | `getStudio()` | `Studio` | Studio |
| `projects.json` | `getProjects()` | `Project[]` | Projects |
| `skills.json` | `getSkills()` | `Skill[]` | Skills |
| `experience.json` | `getExperience()` | `Experience[]` | Contracts |
| `education.json` | `getEducation()` | `Education[]` | Education |
| `certificates.json` | `getCertificates()` | `Certificate[]` | Education |

The getters cast the JSON to its type (`as Project[]`), so TypeScript doesn't check the files themselves: a misspelt field or a wrong value only shows on the page. Lists appear in the order of the file.

## profile.json — `Profile`

| Field | Type | Notes |
| --- | --- | --- |
| `fullName` | string | The `h1`; also used in the portrait's alternative text |
| `role` | string | The brow above the name |
| `description` | string | The introduction |
| `socialLinks` | `ProfileSocialLinks` | `github`, `linkedin`, `minimalist` (addresses), `email`, `phone` (plain values; `mailto:` and `tel:` are added in code) |
| `highlights` | `ProfileHighlight[]` | `title` (the number, e.g. "5+") and `description` (e.g. "years of experience") |

## studio.json — `Studio`

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Shown as the wordmark |
| `tagline` | string | The large line under the wordmark |
| `role` | string | Filip's role, shown as the badge |
| `description`, `note` | string | Paragraph and the short line under it |
| `url`, `contactUrl` | string | "Visit the studio" and "Start a project" |
| `services` | `StudioService[]` | `icon` (an icon name, see below), `title`, `description` |
| `process` | `StudioProcessStep[]` | `title`, `description`; numbered 01, 02 … in order |

## projects.json — `Project`

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Title; must equal the GitHub repository name and the project's key in `ProjectMap` |
| `brow` | string | One line saying what it is |
| `status` | `"completed"` \| `"in-development"` | The badge |
| `description` | string | |
| `techStack` | `ProjectTechStack[]` | `name`, `highlight` (blue when `true`) |
| `gallery` | `ProjectGallerySlide[]`, optional | `id` (key in `ProjectMap`), `title`, `caption`; see [Project gallery](Project-Gallery) |

## skills.json — `Skill`

| Field | Type | Notes |
| --- | --- | --- |
| `category` | string | E.g. "Frontend" |
| `icon` | string | An icon name, see below |
| `sections` | `SkillSection[]` | `title` (e.g. "Frameworks") and `skills`: `SkillSectionSkills[]` with `name` and `highlight` |

## experience.json — `Experience`

| Field | Type | Notes |
| --- | --- | --- |
| `company` | string | Must equal its key in `CompanyMap` for the logo to show |
| `location` | string | |
| `projects` | `ExperienceProject[]` | `name`, `dateRange` (free text, e.g. "Oct 2025 - May 2026"), `description`, `techStack` (`ExperienceProjectTechStack[]`; an empty list hides the group) |

## education.json — `Education`

| Field | Type | Notes |
| --- | --- | --- |
| `degree` | string | |
| `institution` | string | Its start must match a key in `SchoolMap` ("Algebra", "Fran") for the logo |
| `dateRange` | string | Free text, e.g. "2017 - 2022" |
| `description` | string | Subjects, separated by " · " |
| `icon` | string | Kept in the data but not shown; the logo is used instead |

## certificates.json — `Certificate`

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | |
| `issuer` | string | |
| `link` | string | Verification page, opened in a new tab |

## Icons by name

Fields named `icon` hold a [react-icons](https://react-icons.github.io/react-icons/) Lucide name. Each section knows only the icons it imports:

| Section | Known names | Fallback |
| --- | --- | --- |
| Studio services | `LuRocket`, `LuBlocks`, `LuRefreshCcw`, `LuCompass` | `LuBlocks` |
| Skills | `LuMonitor`, `LuServer`, `LuLayers`, `LuCloud`, `LuGitFork`, `LuWrench` | `LuMonitor` |

A new icon name needs an import and an entry in that section's `IconMap`.

## Images

Images aren't in the JSON; components pair content with imported files:

| Map | In | Key | Images |
| --- | --- | --- | --- |
| `CompanyMap` | `ExperienceSection.tsx` | Exact company name | `src/assets/companies/*.jpg` |
| `SchoolMap` | `EducationSection.tsx` | Start of the institution's name | `src/assets/education/*.jpg` |
| `ProjectMap` | `ProjectInfo.tsx` | Project name, then slide id (`showcase` for a single image) | `src/assets/projects/<project>/*-{light,dark}.webp` |

Without a logo the timeline shows an "X" placeholder.
