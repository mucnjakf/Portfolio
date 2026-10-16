# Coding conventions

How code is written in the portfolio, so every component reads like the others. The full rule book is [`CLAUDE.md`](https://github.com/mucnjakf/Portfolio/blob/main/CLAUDE.md) in the repository; this page is the readable summary.

## General

- **Follow the existing pattern.** Before adding a file, open the closest existing one and mirror its structure, naming and level of detail.
- **Content goes in JSON, not in components** ([Content model](Content-Model)).
- **No new dependencies** without a reason agreed first.
- **Responsive and accessible:** every change works on phones, tablets and desktops, keeps semantic HTML, alternative text, visible focus and reduced motion ([Accessibility](Accessibility)).

## Components

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

| Thing | Convention |
| --- | --- |
| Files | One component per PascalCase `.tsx` file, in a section folder (`profile`, `projects` …) or a kind folder (`button`, `display`, `typography`, `animation`) |
| Declaration | `function` component, props typed inline, `export default` at the bottom; no `React.FC`, no arrow components |
| Shared props | Types used by several components go in `src/propTypes/<name>Props.ts` |
| `className` | Optional, defaulting to `""`, appended to the component's own classes |
| Constants | Module-level and PascalCase: `NavItems`, `IconMap`, `CompanyMap`, `Variants` |
| Imports | Explicit `.tsx` / `.ts` extensions; `import type` for types |
| Icons | Lucide (`react-icons/lu`) by default, `react-icons/fa` for brands; passed as `icon: ElementType` |
| Comments | Rare and short, only for something surprising |

## Data

| Thing | Convention |
| --- | --- |
| Content | `src/data/<section>.json` |
| Types | One exported `type` per file in `src/types`, camelCase file name; nested shapes in their own files |
| Access | Only through `DataService` getters |

## Styling

| Thing | Convention |
| --- | --- |
| Classes | Tailwind utilities only; order sorted by Prettier |
| Colours | Zinc neutrals and the blue accent; every colour has a `dark:` partner |
| Sections | The section shell: full-width `<section>`, a `max-w-[1300px]` column, `px-4 py-10 min-[650px]:p-10`, a `Subtitle` with the anchor id and a `Divider` |
| Breakpoints | `min-[650px]` first, then `md`, `min-[768px]`, `lg`, `min-[1026px]` as needed; mobile-first |
| Interactive elements | `cursor-pointer`, `transition-colors`, and the shared `focus-visible` outline |
| Conditional classes | Template-literal ternaries; no `clsx` |

See [Styling and theme](Styling-and-Theme).

## Motion

- Wrap blocks in `ScrollReveal` instead of writing new `motion.*` animations; stagger with `delay={index * 0.1}`.
- Anything that moves must respect reduced motion ([Animation](Animation#reduced-motion)).

## Formatting and checks

- Prettier on the files you change (`npx prettier --write <files>`); `index.html` keeps its own style.
- `npm run build` (includes the type check) and `npm run lint` pass before a change is done.
