# Configuration

Every configuration file in the repository and what it sets. The site has no environment variables or secrets.

## Build

| File | What it sets |
| --- | --- |
| `vite.config.ts` | The React and Tailwind plugins; `base: "/"` because the site is served from the root of `mucnjakf.dev` |
| `tsconfig.json` | References the two projects below; `tsc -b` builds both |
| `tsconfig.app.json` | `src/`: ES2023 with the DOM, bundler module resolution, `react-jsx`, `verbatimModuleSyntax` (type imports must say `import type`), `allowImportingTsExtensions` (imports name `.tsx`/`.ts`), `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`. `strict` is not on. |
| `tsconfig.node.json` | `vite.config.ts` only, with Node types |

## Quality

| File | What it sets |
| --- | --- |
| `.oxlintrc.json` | Plugins `react`, `typescript`, `oxc`; `react/rules-of-hooks` as an error; `react/only-export-components` as a warning, constants allowed |
| `.prettierrc` | `prettier-plugin-tailwindcss` with `index.css` as the Tailwind stylesheet; `endOfLine: auto` |
| `.prettierignore` | `build`, `coverage` |

`index.html` is kept in its own four-space style and is not run through Prettier.

## Page

`index.html` holds everything that isn't a component:

- `<html lang="en" class="scroll-smooth dark">` and the body background.
- The title, description, canonical address, `theme-color`, Open Graph and Twitter tags ([Performance and SEO](Performance-and-SEO)).
- The favicon (`/favicon.svg`), the Google Fonts links and `index.css`.
- The theme script that sets `dark` before the first paint ([Styling and theme](Styling-and-Theme#dark-mode)).

## Theme

`index.css` imports Tailwind, defines the `dark` variant and the theme tokens: the two font families and the blue scale ([Styling and theme](Styling-and-Theme)).

## Deployment

`.github/workflows/deploy.yml` builds and publishes the site; see [Deployment](Deployment).

## Showcase rendering

Constants at the top of `design/showcase/render.py`:

| Constant | Value |
| --- | --- |
| `PROJECTS` | `orderpoint`, `codex`, `herculean` |
| `SLIDES` | Slide ids per project with a gallery (OrderPoint: `overview`, `customer`, `bar`, `service`, `admin`, `management`) |
| `THEMES` | `light`, `dark` |
| `WIDTH`, `HEIGHT`, `SCALE` | 1200 × 800 at 2×, so images are 2400 × 1600 |
| `OG`, `OG_WIDTH`, `OG_HEIGHT` | `public/og-image.png`, 1200 × 630 at 1× |
| `BROWSER` (environment) | Path to the browser; defaults to Microsoft Edge |
