# Editing content

Step-by-step recipes for the usual changes. Field details are on [Content model](Content-Model). After any change, run `npm run build` and `npm run lint`, then [deploy](Deployment).

## Change a text, link or list

Edit the field in the matching file in `src/data`. Lists show in the order of the file.

## Add a project with one image

1. Add an entry to `projects.json`: `name` (exactly the GitHub repository name), `brow`, `status` (`completed` or `in-development`), `description`, `techStack`.
2. Make its showcase: a mockup `design/showcase/<name>.html` with screenshots in `design/showcase/screens/`, then `python design/showcase/render.py <name>` ([Showcase images](Showcase-Images)).
3. In `src/components/projects/ProjectInfo.tsx`, import `src/assets/projects/<name>/showcase-light.webp` and `showcase-dark.webp` and add them to `ProjectMap`:

   ```ts
   NewProject: { showcase: { light: NewProjectLight, dark: NewProjectDark } },
   ```

Projects alternate sides automatically.

## Add a project with a gallery

1. Add the project to `projects.json` with a `gallery`: one `{ "id", "title", "caption" }` per slide.
2. Make one mockup per slide, `design/showcase/<name>-<slide>.html`, add the slide ids under `SLIDES` in `render.py` and render.
3. Import every `<slide>-light.webp` and `<slide>-dark.webp` and add them to `ProjectMap` under the project's name, keyed by slide id.

See [Project gallery](Project-Gallery).

## Add a company or a project done for one

1. Add the company to `experience.json` (newest first), or a project to its `projects` list.
2. For a new company, add its logo as `src/assets/companies/<name>.jpg`, import it in `ExperienceSection.tsx` and add it to `CompanyMap` under the exact company name.

## Add a degree or a certificate

- **Degree:** add it to `education.json`. For a new school, add the logo under `src/assets/education/`, import it in `EducationSection.tsx` and add it to `SchoolMap` under the first word of the institution's name.
- **Certificate:** add `name`, `issuer` and `link` to `certificates.json`.

## Add a skill or a skill area

- **Skill:** add `{ "name", "highlight" }` to a section in `skills.json`; `highlight: true` makes it blue.
- **Area:** add a category with its `icon` and `sections`. A new icon name also needs an import and an `IconMap` entry in `SkillsSection.tsx`.

## Change the studio

Everything is in `studio.json`. A service with a new icon also needs the icon in `StudioSection.tsx`'s `IconMap`.

## Replace the resume

Overwrite `public/Filip_Mucnjak_Resume.pdf`, keeping the name; the Resume button downloads that file.

## Replace the portrait

Save a square image as `src/assets/portrait.webp`, 288 × 288 (twice the 144 px it is shown at), centred on the face. Then render the link preview again, since it uses the same file.

## Update the link preview image

Edit `design/showcase/og.html` and run `python design/showcase/render.py og`. It writes `public/og-image.png` ([Showcase images](Showcase-Images#link-preview-image)).

## Add a section to the navigation

Give the section's `Subtitle` an `id` and add `{ label, href: "<id>", icon }` to `NavItems` in `NavBar.tsx`. The id is both the anchor and how the active link is found.
