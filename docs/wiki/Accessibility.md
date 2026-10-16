# Accessibility

What the site does so it works with a keyboard, a screen reader and reduced motion.

## Structure

- **Landmarks:** a `<header>` with the main `<nav>`, one `<main>`, one `<section>` per content section and a `<footer>`.
- **Headings:** one `h1` (the name), an `h2` per section, `h3` for projects, companies, degrees and sub-blocks, `h4` for their items. Text that only looks like a small heading (dates, locations, descriptions) is a `<p>`.
- **Language:** `<html lang="en">`.

## Names and labels

| Element | What assistive technology hears |
| --- | --- |
| Icon links (hero and footer) | "Phone +385 …", "Email …", "Minimalist studio", "LinkedIn", "GitHub" |
| Theme switch | "Switch to dark mode" or "Switch to light mode" |
| Menu button | "Open menu" / "Close menu", with `aria-expanded` and `aria-controls` |
| Brand | "mucnjakf, back to top" |
| Scroll hint | "Scroll to the studio section" |
| Active nav link | `aria-current="location"` |
| Portrait | "Portrait of Filip Mučnjak" |
| Logos and showcases | "<company> logo", "<project> showcase", "<project>: <slide>" |
| Decorative icons, canvases | hidden (`aria-hidden`) |

## Keyboard

- Every interactive element is a real `<a>` or `<button>`.
- Focus is always visible: a 2 px accent outline with an offset, on `:focus-visible` only.
- The folded mobile menu is `inert`, so its links can't be tabbed into while hidden.
- The gallery moves with the left and right arrow keys while focus is inside it; see [Project gallery](Project-Gallery).

## Motion

The system's reduced motion setting is respected everywhere; see [Animation](Animation#reduced-motion).

## Links

Web links open in a new tab with `rel="noreferrer"`; `tel:` and `mailto:` links don't. The Resume button is a real download link, so it can also be opened or saved from the context menu.
