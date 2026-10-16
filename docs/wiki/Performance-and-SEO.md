# Performance and SEO

How the site keeps loading light and how it presents itself to search engines and social networks.

## Size of a build

| File | Size | Gzipped |
| --- | --- | --- |
| JavaScript | ≈ 393 kB | ≈ 125 kB |
| CSS | ≈ 33 kB | ≈ 7 kB |
| `index.html` | ≈ 2.5 kB | ≈ 0.9 kB |

Images are separate files, loaded as needed.

## Images

- **WebP** everywhere it counts: showcases (≈ 120–190 kB each at 2400 × 1600) and the portrait (288 px, ≈ 8 kB).
- Showcase images have `width` and `height` and `loading="lazy"`; the gallery loads only the visible slide and preloads its two neighbours in the current theme.
- Only the image of the current theme is downloaded: the other one is `display: none`, and current browsers don't load hidden lazy images.
- The resume, favicon and link preview image are plain files in `public/`.

## Fonts

One Google Fonts request for exactly the weights in use (Inter 400, 500, 600, 700; Archivo 500), with `preconnect` to both font hosts and `display=swap`.

## Background canvas

The dot grid is the only continuous work on the page. It stops while off screen, the page grid pauses while the hero fills the screen, the pixel ratio is capped at 2, and with reduced motion it doesn't animate at all ([Animation](Animation#dotfield)).

## Search and sharing

| Tag | Value |
| --- | --- |
| `<title>` | Filip Mučnjak · Software Engineer |
| `description` | "Filip Mučnjak, software engineer specializing in .NET and modern frontend frameworks. Projects, skills, experience and contact." |
| `canonical` | `https://mucnjakf.dev/` |
| Open Graph | type, URL, title, description, `og:image` (1200 × 630) with its size and alternative text |
| Twitter | `summary_large_image` with the same image |
| `theme-color` | `#fafafa` in light, `#09090b` in dark |

The link preview image is rendered from `design/showcase/og.html` ([Showcase images](Showcase-Images#link-preview-image)). Social networks cache previews: after changing it, refresh it with the network's inspector (for example LinkedIn's Post Inspector).

## A limit to know

The page is rendered in the browser. Crawlers that run JavaScript (Google) see the content; those that don't see only the `<head>`, which is why the title, description and preview tags matter. Rendering the page to HTML at build time is listed on the [Roadmap](Roadmap).
