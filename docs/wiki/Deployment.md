# Deployment

The site is published to **GitHub Pages** by the workflow in `.github/workflows/deploy.yml`, and served at the custom domain **[mucnjakf.dev](https://mucnjakf.dev)**.

## Starting a deploy

Deploys are manual: pushing to `main` never publishes.

1. Open the repository's **Actions** tab.
2. Choose **Deploy to GitHub Pages**.
3. **Run workflow** on `main`.

## What the workflow does

| Job | Steps |
| --- | --- |
| Build | Check out · set up Node 24 with the npm cache · `npm ci` · `npm run lint` · `npm run build` · configure Pages · upload `dist` as the Pages artifact |
| Deploy | Publish the artifact to the `github-pages` environment |

- A failing lint or type check stops the deploy before anything is published.
- Two deploys never run at the same time, and a running deploy is never cancelled, so the live site is never left half-published.
- The workflow only has the permissions it needs: read the code, write to Pages, and an identity token for the deploy.

## Repository settings

- **Pages → Source:** GitHub Actions.
- **Pages → Custom domain:** `mucnjakf.dev`. The domain is set in the settings, so there is no `CNAME` file in the repository.
- Vite's `base` is `/`, because the site is at the root of the domain.

## After a deploy

- The workflow run links to the published site in its summary.
- Browsers may hold the old `index.html` for a moment; assets have hashed names, so a reload always gets consistent files.
- If the link preview changed, refresh it with the social network's inspector ([Performance and SEO](Performance-and-SEO#search-and-sharing)).

## Going back

Open an earlier successful run of the workflow and choose **Re-run all jobs**: it builds and publishes the commit that run used.
