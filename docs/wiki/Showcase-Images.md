# Showcase images

Project images aren't screenshots dropped on the page: they are HTML **mockups** that place real app screenshots in browser, tablet and phone frames next to a headline and a few features, rendered into WebP in a light and a dark version. The source is in `design/showcase`; the results go to `src/assets/projects`.

## Files

```
design/showcase/
  showcase.css                shared look: canvas, copy, frames, tags (light and dark tokens)
  render.py                   renders mockups into images
  codex.html, herculean.html  single-image projects
  orderpoint-<slide>.html     one mockup per gallery slide
  og.html                     the link preview image
  screens/                    screenshots (c-*, h-* for Codex and Herculean)
  screens/orderpoint/         <screen>-light.webp and <screen>-dark.webp
```

## A mockup

Every mockup is a 1200 × 800 page using `showcase.css`:

| Part | Class | Notes |
| --- | --- | --- |
| Background | `.canvas` | Dot grid and a soft accent glow; move the glow with `--glow-x` / `--glow-y` |
| Text column | `.copy` with `.brow`, `.headline` (with an `<em>` in the accent), `.lede`, `.features` | Top left, 380 px wide; keep the headline to two lines |
| Feature chips | `.feature` with an `.icon` holding a Lucide SVG | Three or four |
| Frames | `.browser` (with `.bar`, `.dots`, `.url`), `.tablet`, `.phone` | Placed with inline `left`, `top`, `width`; frames may run off the right or bottom edge |
| Labels | `.tag` with a `.dot` | Short names of what each frame shows |

`?theme=dark` in the address turns the page dark. Mockups whose screenshots exist in both themes use `<img data-screen="admin-dashboard">` and a small script at the end of the page that picks `screens/<project>/<name>-<theme>.webp`.

## Rendering

```bash
python design/showcase/render.py              # every project
python design/showcase/render.py orderpoint   # one project
python design/showcase/render.py og           # the link preview image
```

| Kind | Mockups | Output |
| --- | --- | --- |
| Single image | `<project>.html` | `src/assets/projects/<project>/showcase-{light,dark}.webp` |
| Gallery (listed in `SLIDES`) | `<project>-<slide>.html` | `src/assets/projects/<project>/<slide>-{light,dark}.webp` |
| Link preview | `og.html` | `public/og-image.png` |

Showcases are 2400 × 1600 (1200 × 800 at 2×) WebP at quality 90; each is about 120–190 kB. The script uses a headless Microsoft Edge; set `BROWSER` to a Chrome path to use Chrome instead.

## Taking screenshots

- Take every screen in the app's **light and dark** theme, with real-looking data.
- Desktop and tablet screens at their natural size (for example 1440 × 900 or 1280 × 800) at 2× pixel density, saved 1600 px wide; phone screens at 390 × 844 at 2×, saved 520 px wide.
- Save them as WebP (quality 90) as `<app>-<screen>-<theme>.webp`. At these sizes a screen is 30–120 kB.
- Leave out screens with test data or anything private.

## Link preview image

`og.html` is a 1200 × 630 card in the dark style: the portrait (`src/assets/portrait.webp`), "Software engineer", the name, one summary line, the `mucnjakf.` brand and the address. It is rendered at 1× as PNG, the format every network accepts, and referenced from `index.html` as `https://mucnjakf.dev/og-image.png`. Render it again after changing the portrait.
