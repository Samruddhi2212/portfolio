# Portfolio

A lightweight, responsive portfolio site built with React + Vite. Dark, glassmorphism aesthetic with subtle scroll animations (framer-motion) — no heavy visuals, so it's easy to reskin.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Customizing

Almost everything you need to change lives in one file: [`src/data/content.js`](src/data/content.js). It exports plain objects/arrays for:

- `profile` — name, role, tagline, summary, resume link
- `about` — bio paragraphs + quick facts
- `skills` — grouped skill tags
- `experience` — work history timeline entries
- `projects` — project cards (title, description, tags, links, image)
- `publications` — papers/talks/writing (delete all entries to hide the section)
- `contact` — intro message + contact links

Edit the values there and the whole site updates — no need to touch component files for basic content changes.

### Other things to swap

- `public/favicon.svg` — replace with your own icon
- `public/resume.pdf` — add your resume and it'll be served at `/resume.pdf` (already linked from the navbar)
- Project images — drop files in `public/images/` and reference them from `content.js`, e.g. `image: '/images/my-project.png'`
- `index.html` — update the `<title>` and meta description
- Colors — CSS variables at the top of [`src/index.css`](src/index.css) (`--cyan`, `--purple`, `--pink`, `--bg`, etc.)

## Deploying

This is a static Vite build, so it deploys to any static host (GitHub Pages, Vercel, Netlify). For GitHub Pages, build with `npm run build` and publish the `dist/` folder.
