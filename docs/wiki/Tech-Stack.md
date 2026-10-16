# Tech stack

Everything the portfolio is built with, with the versions installed. The reasons behind the bigger choices are on [Architecture decisions](Architecture-Decisions).

## Runtime

| Package | Version | Used for |
| --- | --- | --- |
| React and React DOM | 19.2.8 | Components and rendering |
| Tailwind CSS (with `@tailwindcss/vite`) | 4.3.3 | All styling, theme tokens, dark mode |
| Motion | 13.0.0 | Scroll reveals and the project gallery (`motion/react`) |
| react-icons | 5.7.0 | Lucide icons (`react-icons/lu`) and brand icons (`react-icons/fa`) |

## Build and tooling

| Package | Version | Used for |
| --- | --- | --- |
| Vite | 8.2.0 | Dev server and production build |
| `@vitejs/plugin-react` | 6.0.5 | React support in Vite |
| TypeScript | 6.0.3 | Types; `tsc -b` runs as part of `npm run build` |
| oxlint | 1.77.0 | Linting (`npm run lint`) |
| Prettier | 3.9.6 | Formatting |
| `prettier-plugin-tailwindcss` | 0.8.1 | Sorting Tailwind classes |
| `@types/react`, `@types/react-dom`, `@types/node` | 19.2, 19.2, 24.13 | Type definitions |

## Fonts and assets

| Thing | Source | Used for |
| --- | --- | --- |
| Inter | Google Fonts | All text |
| Archivo | Google Fonts | The Minimalist wordmark |
| Minimalist mark | Outlined from the studio's favicon (`MinimalistIcon.tsx`) | The studio's icon link |
| Showcase images | Rendered from `design/showcase` mockups | Project images |

## Design pipeline

| Tool | Used for |
| --- | --- |
| Python 3 with Pillow | `design/showcase/render.py`: screenshots to WebP and PNG |
| Microsoft Edge (headless) | Rendering the mockups; Chrome works through the `BROWSER` environment variable |

## Hosting and CI

| Service | Used for |
| --- | --- |
| GitHub Actions | Lint, build and deploy, started by hand |
| GitHub Pages | Hosting at the custom domain `mucnjakf.dev` |
| Node.js | 24 in CI |
