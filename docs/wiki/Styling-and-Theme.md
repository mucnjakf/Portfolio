# Styling and theme

All styling is **Tailwind CSS v4** utility classes in the components. There are no CSS modules or component stylesheets; the only stylesheet, `index.css`, holds the theme.

## Theme tokens (`index.css`)

| Token | Value |
| --- | --- |
| `--font-sans` | Inter, then the system font |
| `--font-archivo` | Archivo, used only for the studio wordmark |
| `--color-blue-50` … `--color-blue-950` | A custom blue scale that replaces Tailwind's; `blue-700` is `#007aff`, `blue-600` is `#068aff` |

Inter (400–700) and Archivo (500) load from Google Fonts in `index.html`, with `preconnect` and one stylesheet request.

## Palette

| Use | Light | Dark |
| --- | --- | --- |
| Page background | `zinc-50` | `zinc-950` |
| Shaded section | `zinc-100/60` | `zinc-900/60` |
| Headings | `zinc-950` | `zinc-50` |
| Body and muted text | `zinc-500`–`zinc-600` | `zinc-400` |
| Borders and dividers | `zinc-200`–`zinc-300` | `zinc-600`–`zinc-800` |
| Accent (brows, highlights, primary buttons, focus) | `blue-700` | `blue-600` |
| Completed, available | green | green |
| In development | orange | orange |

## Dark mode

- Dark mode is **class-based**: `@custom-variant dark (&:where(.dark, .dark *))` makes `dark:` utilities apply under `<html class="dark">`.
- Every colour utility has a `dark:` partner.
- Before the page paints, a script in `index.html` adds or removes `dark`: a saved `localStorage.theme` wins, otherwise the system preference.
- `NavBar` starts from that class and saves the theme only when the visitor uses the switch.
- Showcase images exist twice and swap with `dark:hidden` / `hidden dark:block`.

## Layout and breakpoints

| Breakpoint | Used for |
| --- | --- |
| below `min-[650px]` | Phones: one column, 16 px side padding (`px-4`), centred hero |
| `min-[650px]` | The main switch: 40 px padding (`px-10`), two-column grids, left-aligned hero |
| `md` (768 px) | Navigation links in the bar instead of the menu; project grid in Contracts |
| `min-[768px]` | Project text and image side by side (5 + 7 of 12 columns) |
| `lg`, `min-[1026px]` | Wider hero portrait column; studio steps in one row of six |

Content is centred in a column of at most **1300 px**. Layouts are written mobile-first.

## Shapes and details

- Radius: `rounded-xl` for buttons, badges, cards and icon tiles; `rounded-2xl` for showcase frames; `rounded-full` for the portrait and dots.
- Hover and state changes use `transition-colors` (or `transition-opacity`).
- Focus: `focus-visible:outline-2 outline-offset-2` in the accent blue on every interactive element.
- Conditional classes are template-literal ternaries; class order is sorted by `prettier-plugin-tailwindcss`.
