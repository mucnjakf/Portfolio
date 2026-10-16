# Features overview

What the site does for a visitor, feature by feature. What each section shows is on [Page sections](Page-Sections).

## Navigation

| Feature | How it works |
| --- | --- |
| Fixed navigation bar | Stays at the top with a blurred, translucent background. Brand on the left (back to the top), section links, the Resume button and the theme switch on the right. |
| Section links | Studio, Projects, Skills, Contracts and Education scroll smoothly to their section; the link of the section in view is highlighted. |
| Mobile menu | Below the `md` breakpoint the links move into a menu that folds open under the bar and closes when a link is chosen. |
| Scroll hint | On wider screens a bouncing "Scroll" link at the bottom of the hero jumps to the Studio section. |

## Theme

| Feature | How it works |
| --- | --- |
| System theme | On a first visit the site follows the system's light or dark preference. |
| Theme switch | The sun or moon button switches the theme; only this explicit choice is saved, in `localStorage` (`theme`). |
| No flash | A small script in `index.html` sets the theme before the page paints, so a dark page never flashes white. |
| Matching images | Every showcase image has a light and a dark version; the one matching the theme is shown. |

See [Styling and theme](Styling-and-Theme).

## Contact and resume

| Feature | How it works |
| --- | --- |
| Contact icons | Phone, email, Minimalist, LinkedIn and GitHub as icon buttons in the hero and flat icons in the footer. Hovering shows the phone number or address. |
| Resume | The Resume button downloads `Filip_Mucnjak_Resume.pdf` from `public/`. |
| External links | Web links open in a new tab; `tel:` and `mailto:` links open the phone or mail app instead. |

## Projects

| Feature | How it works |
| --- | --- |
| Status badge | "Completed" in green or "In development" in orange. |
| Tech stack | Badges, with the core technologies in blue. |
| GitHub link | Built from the project's name: `github.com/mucnjakf/<name>`. |
| Showcase | One image, or a gallery of slides with captions; see [Project gallery](Project-Gallery). |
| Alternating layout | Text and image swap sides on every other project on wider screens. |

## Motion

| Feature | How it works |
| --- | --- |
| Reveals | Blocks fade and zoom in slightly as they scroll into view; lists stagger. |
| Interactive background | A dot grid behind the page swells and tints towards the pointer, with a slow ambient wave. |
| Reduced motion | With the system's "reduce motion" setting, reveals only fade, the background stops moving and bouncing or pulsing hints stay still. |

See [Animation](Animation).

## Sharing and search

- A descriptive title, a meta description and a canonical address.
- Open Graph and Twitter tags with a 1200 × 630 link preview image, so links show a card with the portrait and name.
- A colour for the browser's interface in light and dark (`theme-color`).

See [Performance and SEO](Performance-and-SEO).

## Accessibility

Landmarks, a correct heading outline, labelled icon buttons, visible keyboard focus, a keyboard-friendly carousel and reduced motion. See [Accessibility](Accessibility).
