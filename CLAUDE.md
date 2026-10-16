# Portfolio — mucnjakf.dev

Personal portfolio SPA. React 19 + TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), Motion, react-icons, Vite. No router, no state library, no backend.

## Commands
- `npm run dev` — dev server
- `npm run build` — `tsc -b && vite build` (this is the type check)
- `npm run lint` — oxlint (`.oxlintrc.json`)
- `npx prettier --write <changed files>` — format only what you touched. `index.html` is intentionally not Prettier-formatted; leave its style alone.

After every change: run build + lint and fix anything that breaks before reporting.

## Working rules
- Follow existing patterns exactly; consistency over preference. Don't refactor beyond the task.
- No new dependencies without asking first.
- Propose a plan and wait for OK on anything bigger than a small fix.
- Don't touch `.github/workflows/` or `vite.config.ts` deployment settings unless asked.
- Never commit or push. Finish with a summary of what changed and which files.
- Keep everything responsive (mobile → desktop) and accessible: semantic HTML, alt text, focus states, reduced motion for animations.

## Structure
- `src/App.tsx` — page composition: `DotField` background, hero (`NavBar` + `ProfileSection`), then Studio, Projects, Skills, Experience ("Contracts"), Education, `Footer`.
- `src/components/<group>/` — one component per PascalCase `.tsx` file. Groups are per section (`profile`, `studio`, `projects`, `skills`, `experience`, `education`, `navigation`) or per kind (`button`, `display`, `typography`, `animation`).
- `src/data/*.json` — all site content. Edit content here, not in components.
- `src/types/*.ts` — one exported `type` per file, camelCase filename, nested shapes split into their own files (e.g. `experience.ts` → `experienceProject.ts` → `experienceProjectTechStack.ts`).
- `src/propTypes/*Props.ts` — prop types shared between components.
- `src/services/dataService.tsx` — `DataService.getX()` getters that cast the JSON to its type. Components get data only through these.
- `src/assets/` — images imported by components (`companies/`, `education/`, `projects/<name>/`, `portrait.png`).
- `public/` — `favicon.svg` and `Filip_Mucnjak_Resume.pdf` (downloaded by the NavBar "Resume" button).
- `design/showcase/` — HTML mockups + `render.py` that render the project showcase images (see below). Not part of the build.

## Component conventions
```tsx
import type { ElementType } from "react";

function Thing({
  text,
  icon: Icon,
  className = "",
}: {
  text: string;
  icon: ElementType;
  className?: string;
}) {
  return <div className={`flex items-center ${className}`}>...</div>;
}

export default Thing;
```
- `function` declarations, inline prop types, `export default` at the bottom. No `React.FC`, no arrow components.
- Import local modules with explicit `.tsx`/`.ts` extensions. Use `import type` for types (`verbatimModuleSyntax`).
- Module-level constants are PascalCase (`NavItems`, `IconMap`, `CompanyMap`, `Variants`).
- Icons come from react-icons: Lucide (`react-icons/lu`) by default, `react-icons/fa` for brand marks (GitHub, LinkedIn). Icon components are passed as `icon: ElementType` and rendered at `size={14}`–`18`.
- JSON references icons by string name (`"LuRocket"`). The section component resolves them through a local `IconMap: Record<string, ElementType>` with a fallback icon.
- Images are imported from `src/assets` and looked up by name through a local map (`CompanyMap`, `SchoolMap`, `ProjectMap`).
- Conditional classes use template-literal ternaries; no `clsx`.
- Reuse the existing primitives: `Subtitle`/`Title`/`Paragraph`, `Badge`, `Divider`, `TechStackGroup`, `ButtonPrimary`/`ButtonLinkPrimary`/`ButtonLinkSecondary`/`IconButtonSecondary`/`IconLinkFlat`.

## Section layout
Every content section follows this shell:
```tsx
<div className="w-full border-b border-b-zinc-200 dark:border-b-zinc-800 [bg-zinc-100/60 dark:bg-zinc-900/60]">
  <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
    <div className="flex flex-col gap-2">
      <Subtitle text="..." id="..." description="..." />
      <Divider className="mb-10" />
    </div>
    ...
  </div>
</div>
```
- Shaded backgrounds alternate: Studio, Skills, Education are shaded; Projects, Experience are not.
- The anchor `id` goes on `Subtitle` (it has `scroll-mt-22` for the fixed nav) and must match an entry in `NavItems` in `NavBar.tsx`.

## Styling
- Tailwind utilities only; no CSS modules or extra stylesheets. Class order comes from `prettier-plugin-tailwindcss`.
- Theme lives in `index.css` `@theme`: a custom `blue-50…950` scale (replaces Tailwind's blue), `font-sans` = Inter, `font-archivo` = Archivo (studio wordmark only).
- Dark mode is class-based (`@custom-variant dark`). Every color utility needs a `dark:` counterpart.
- Palette: zinc neutrals (text `zinc-950`/`zinc-50`, muted `zinc-500/600`/`zinc-400`, borders `zinc-200/300` / `zinc-600/800`), accent `blue-700` (dark `blue-600`), green for completed/available, orange for in development.
- Radii: `rounded-xl` for buttons, badges, cards, icon tiles; `rounded-2xl` for showcase images.
- Breakpoints: `min-[650px]` is the main mobile → tablet switch (padding, grids). `md` is used for the nav and the experience grid, `min-[768px]` for the project layout, `lg` and `min-[1026px]` for wider layouts. Design mobile-first.
- Page padding: `px-4` on mobile, `min-[650px]:px-10` and up. Max width `max-w-[1300px]`.

## Animation
- **Scroll reveals:** wrap blocks in `components/animation/ScrollReveal.tsx` (Motion `motion.div`, imported from `"motion/react"`: opacity 0→1, scale 0.95→1, 0.8s, ease `[0.22, 1, 0.36, 1]`, `whileInView`, `once: false`, `amount: 0.1`). Stagger lists with `delay={index * 0.1}` (or `0.05` for dense lists). Don't create one-off `motion.*` animations when `ScrollReveal` fits.
- **Background:** `components/animation/DotField.tsx` is a hand-written canvas (`variant="hero" | "page"`), not Motion. It handles `prefers-reduced-motion` itself. Add `data-bg-mute` to hero content to quiet the effect behind it.
- Hover and state changes use Tailwind `transition-colors` / `transition-opacity`. Small loops use `animate-bounce` / `animate-ping`.

## Theme
- An inline script in `index.html` sets the `dark` class before paint, based on `localStorage.theme` and the system preference.
- `NavBar` owns the toggle and persists `"dark"`/`"light"` to `localStorage.theme`.
- `DotField` reads the `dark` class every frame for its palette.

## Adding content
- **Text and data changes:** edit the JSON in `src/data/`. If the shape changes, update the matching type in `src/types/`.
- **New dataset:** JSON file + type file(s) + a getter in `DataService`.
- **New experience or education entry:** add the logo to `src/assets/companies|education/` and register it in `CompanyMap` (matched by exact company name) or `SchoolMap` (matched by an institution-name prefix).
- **New project:**
  1. Add an entry to `projects.json`. `name` must equal the GitHub repo name, because the link is built as `github.com/mucnjakf/<name>`.
  2. Create a showcase mockup at `design/showcase/<name>.html` (reuse `showcase.css`) and add it to `PROJECTS` in `render.py`.
  3. Run `python design/showcase/render.py <name>` (needs Pillow + Edge). It writes `src/assets/projects/<name>/showcase-{light,dark}.webp` (2400×1600).
  4. Import both images into `ProjectMap` in `ProjectInfo.tsx`.
  5. Layout alternates automatically (`reverse` on odd indexes).

## Deploy
- `.github/workflows/deploy.yml` runs on manual `workflow_dispatch` only (pushing to `main` does not deploy). It uses Node 24 and runs `npm ci` → `npm run lint` → `npm run build`, then uploads `dist` to GitHub Pages.
- The custom domain `mucnjakf.dev` is configured in the repo's Pages settings (no CNAME file). Vite `base` is `/`.
