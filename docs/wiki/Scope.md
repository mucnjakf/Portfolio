# Scope

What the portfolio covers, what it deliberately leaves out, and the assumptions behind it.

## In scope

| Area | What is covered |
| --- | --- |
| Introduction | Portrait, name, role, a short introduction, an "Available for hire" badge, three highlight numbers |
| Contact | Phone, email, the Minimalist studio, LinkedIn and GitHub, as icon links in the hero and the footer |
| Studio | The Minimalist studio: what it does, its services, its six-step process, links to its site and contact page |
| Projects | Personal projects with a status (completed or in development), a tech stack, a GitHub link and a single showcase image or a gallery of slides |
| Skills | Technologies, tools and practices in six areas, with the core ones highlighted |
| Contracts | Companies Filip worked with and the projects done for each, with dates, descriptions and tech stacks |
| Education | Degrees with schools and dates, and certificates linking to their verification pages |
| Resume | The resume PDF, downloaded from the navigation bar |
| Theme | Light and dark, following the system until the visitor chooses |
| Sharing | A title, description and link preview image for search engines and social networks |

## Out of scope

These were left out on purpose:

- **A backend or CMS.** All content is in JSON files in the repository; changing it means editing a file and deploying again.
- **More than one page.** There is no router: navigation scrolls to sections of a single page.
- **A contact form.** Visitors use the email, phone or LinkedIn links instead.
- **A blog, analytics or cookies.** The site stores only the visitor's theme choice in their browser.
- **Other languages.** The content is in English.
- **Automatic deploys.** Pushing to `main` never publishes; a deploy is started by hand (see [Deployment](Deployment)).
- **Automated tests.** Quality is kept with the TypeScript type check (part of the build), oxlint and Prettier.

## Assumptions

- Visitors use a current browser. Tailwind CSS v4 needs Safari 16.4, Chrome 111 or Firefox 128 or newer.
- JavaScript is on: the page is rendered in the browser by React (see [Performance and SEO](Performance-and-SEO)).
- Project names match their GitHub repository names, because each project's GitHub link is built from its name.

## Constraints

- Hosting is **GitHub Pages**: static files only, served from the `dist` folder of a build, at the custom domain `mucnjakf.dev`.
- **No new dependencies** without a good reason; the stack is React, Tailwind CSS, Motion and react-icons (see [Tech stack](Tech-Stack)).
