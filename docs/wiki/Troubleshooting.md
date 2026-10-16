# Troubleshooting

Problems you may run into while changing the portfolio, and what fixes them.

## Content

| Symptom | Cause | Fix |
| --- | --- | --- |
| A project's GitHub button leads to a 404 | The project's `name` isn't its repository name | Use the exact repository name; the link is `github.com/mucnjakf/<name>` |
| A project shows no image | Its `name` isn't a key in `ProjectMap`, or (for a single image) there's no `showcase` entry | Add the images to `ProjectMap` under the exact name ([Editing content](Editing-Content)) |
| A gallery has fewer slides than its `gallery` list | A slide's `id` has no images in `ProjectMap` | Add the slide's images under that id |
| A company or school shows an "X" instead of a logo | No `CompanyMap` key equal to the company, or no `SchoolMap` key the institution starts with | Add the logo and the key |
| A service or skill area shows the wrong icon | Its `icon` name isn't in that section's `IconMap`, so the fallback is used | Import the icon and add it to the map |
| A project shows "In development" though it's done | `status` isn't exactly `completed` | Use `completed` or `in-development` |
| A misspelt field shows nothing, and the build passes | JSON is cast to its type, not checked | Compare with [Content model](Content-Model) |
| A navigation link isn't highlighted | The section's `Subtitle` `id` and the `NavItems` `href` differ | Make them the same |

## Building and formatting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Git warns "LF will be replaced by CRLF" | Windows with `core.autocrlf=true`; the repository stores LF | Nothing: the warning is harmless and the diff is unaffected |
| Prettier rewrites all of `index.html` | It's kept in its own style | Don't run Prettier on `index.html`; revert its formatting changes |
| `npm run build` fails on an unused variable or parameter | `noUnusedLocals` / `noUnusedParameters` | Remove it |
| `npm run build` fails on an import | Type imports must use `import type` (`verbatimModuleSyntax`) | Change the import |

## Showcase images

| Symptom | Cause | Fix |
| --- | --- | --- |
| `render.py` can't find the browser | Edge isn't at its default path | Set `BROWSER` to Edge's or Chrome's path |
| `Screenshot not written` | The browser failed or took longer than 30 seconds | Run again; check the mockup opens in a normal browser |
| A frame in a mockup is empty | The screen is missing for one theme | Add both `<screen>-light.webp` and `<screen>-dark.webp` |
| A headline wraps onto three lines | It's longer than about 15 characters per line at 48 px | Shorten it; the copy column is 380 px wide |

## After a deploy

| Symptom | Cause | Fix |
| --- | --- | --- |
| A shared link still shows the old preview | Social networks cache previews | Refresh it with the network's inspector |
| The site still shows the old version | The browser holds the old `index.html` | Reload; assets are hashed, so files never mix |
| The deploy stopped at Lint or Build | The change fails a check | Run `npm run lint` and `npm run build` locally and fix it |
