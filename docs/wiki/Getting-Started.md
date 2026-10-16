# Getting started

From a clean machine to the site running locally. It takes a few minutes, most of it `npm` downloading packages.

## 1. Install the tools

| Tool | Version | Why |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | 24 (what CI uses) | Builds and runs the site |
| [Git](https://git-scm.com/) | any | Getting the code |
| [Python 3](https://www.python.org/) with [Pillow](https://pypi.org/project/pillow/) (optional) | any recent | Only to render showcase images |
| Microsoft Edge or Chrome (optional) | current | Only to render showcase images |

## 2. Get the code and install

```bash
git clone https://github.com/mucnjakf/Portfolio.git
cd Portfolio
npm ci
```

`npm ci` installs exactly what `package-lock.json` lists, as CI does.

## 3. Run it

```bash
npm run dev
```

Vite prints the local address (by default `http://localhost:5173`). Changes to components, styles and JSON show up immediately.

## 4. Check a change

| Command | What it does |
| --- | --- |
| `npm run build` | Type check (`tsc -b`) and production build into `dist/` |
| `npm run lint` | oxlint |
| `npx prettier --write <files>` | Formats the files you changed (classes are sorted too) |
| `npm run preview` | Serves the last build, to check it as it will be published |

CI runs the lint and the build before every deploy, so a change that passes both locally will deploy.

## 5. Find your way around

- What is where: [Architecture](Architecture).
- How to change content: [Editing content](Editing-Content).
- The house style: [Coding conventions](Coding-Conventions).
