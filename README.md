# Hi, I'm Samruddhi's portfolio 👋

**Live:** [samruddhi-kaledeshmukh.netlify.app](https://samruddhi-kaledeshmukh.netlify.app/)
**Author:** [Samruddhi Kaledeshmukh](https://github.com/Samruddhi2212) — MS Data Science @ Northeastern, deep learning researcher

This is the source for my personal site: a single-page React app that walks through who I am, what I've built (Vision/Swin Transformers from scratch, RL-based object detection, mHealth pipelines for dementia care), and how to reach me. I built it myself rather than using a template generator because I wanted full control over the interaction details — the scroll-reactive mascot, the section-aware speech bubbles, the exact shade of every accent color — and because, as someone who implements things from scratch for a living (see: the ViT project below), it felt right to do the same for my own front door on the internet.

No CSS framework, no component library, no CMS. Just React, Vite, Framer Motion, and a single content file.

---

## What makes it a little different

- **A scroll-reactive mascot.** [`ScrollBot.jsx`](src/components/ScrollBot.jsx) is a hand-drawn SVG character that follows you down the page (spring-physics vertical tracking via `framer-motion`'s `useSpring`), changes its eyes/mouth/pose per section via an `IntersectionObserver`-driven state machine, waves on Hero/Contact, puts on reading glasses for Experience, sprouts star-eyes and pulls out a tiny animated laptop for Projects, and pops a context-aware speech bubble on every section change. It's a hollow line-art figure — every fill is `var(--bg)` so it always matches whatever background color the site currently has, while the outline cycles through a deliberately loud, candy-bright multicolor palette (inspired by the LV × Murakami Multicolore monogram, if you're curious) so it stays legible and fun against any theme.
- **One file drives the whole site.** Every word of copy — bio, skills, experience, project descriptions, publications, contact links — lives in [`src/data/content.js`](src/data/content.js) as plain exported objects/arrays. Components are pure rendering layers over that data; there's no prop-drilling gymnastics or CMS round-trip.
- **A real design system, not just "some colors."** All theming flows through nine CSS custom properties defined once in [`src/index.css`](src/index.css) (`--bg`, `--bg2`, `--ruby`, `--gold`, `--rose`, `--text`, `--muted`, `--card`, `--border`). Swap those nine values and the entire site — buttons, gradients, glass cards, the mascot's fills, the scroll-progress bar — re-themes consistently. Every accent color was picked and hand-tuned against the background for WCAG-reasonable contrast (see the design notes below), not eyeballed.
- **Scroll-triggered reveals, not a wall of motion.** Sections fade/slide in once via `useInView({ once: true })` so re-scrolling doesn't replay animations, and the whole page respects a scroll-linked progress bar at the very top (`ScrollProgress` in [`App.jsx`](src/App.jsx)).

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| UI | [React 18](https://react.dev/) | Function components + hooks, nothing fancier needed for a single page |
| Build tool | [Vite 5](https://vitejs.dev/) | Instant dev server, fast HMR, trivial static build |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) | Spring physics for the mascot, `useInView` for scroll reveals, `AnimatePresence` for the speech bubble/laptop mount-unmount |
| Styling | Plain CSS + custom properties | No Tailwind/CSS-in-JS — a `glass-card` utility class, BEM-ish component classes, and a `:root` theme token block are enough for a page this size |
| Hosting | [Netlify](https://netlify.com) | Connected via GitHub integration — every push to `main` triggers a build (`npm run build`) and deploy of `dist/`, config in [`netlify.toml`](netlify.toml) |

No backend, no database, no analytics script. It's static HTML/CSS/JS after `vite build`.

## Project structure

```
src/
├── main.jsx              # React root
├── App.jsx               # Layout shell + scroll-progress bar
├── index.css             # Design tokens (:root) + all component styles
├── data/
│   └── content.js        # Every string on the site — the one file to edit
└── components/
    ├── Navbar.jsx         # Fixed nav, mobile hamburger menu, Resume button
    ├── Hero.jsx            # Name, role, summary, CTA buttons
    ├── About.jsx           # Bio + quick-facts panel
    ├── Skills.jsx          # Grouped skill tag grid
    ├── Experience.jsx      # Timeline of roles/research positions
    ├── Projects.jsx        # Project cards (image, tags, links)
    ├── Publications.jsx    # Papers/posters/talks
    ├── Contact.jsx         # Contact links
    ├── SectionTitle.jsx    # Shared "01. About ─────" heading component
    └── ScrollBot.jsx       # The scroll-following mascot (see above)
public/
├── favicon.svg
├── resume.pdf             # Served at /resume.pdf, linked from the navbar
└── images/                # Project cover images, referenced from content.js
```

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build      # production build → dist/
npm run preview    # serve that build locally to sanity-check before deploying
```

## Customizing (for anyone forking this)

**Content.** Everything text-based lives in [`src/data/content.js`](src/data/content.js):

- `profile` — name, role, tagline, summary, location, resume link
- `about` — bio paragraphs + the quick-facts list
- `skills` — grouped skill tags
- `experience` — timeline entries (company, role, dates, bullet points)
- `projects` — cards: `title`, `description`, `tags`, `image`, `liveUrl`, `githubUrl`, `featured`
- `publications` — papers/posters/talks (leave the array empty to hide the whole section)
- `contact` — intro message + contact links

Edit values there and the site updates everywhere it's referenced — no component edits needed for text changes.

**Colors.** Nine custom properties at the top of [`src/index.css`](src/index.css):

```css
:root {
  --bg: #f7f3ea;       /* page background */
  --bg2: #efe8d8;       /* secondary surface (nav-on-scroll, mobile menu) */
  --ruby: #c81a3a;      /* primary accent — links, section numbers, borders */
  --gold: #7a5b15;      /* secondary accent — gradients, bullets */
  --rose: #ff2d78;      /* tertiary accent — decorative only */
  --text: #3b2417;      /* body text */
  --muted: #7a6a5f;     /* secondary text */
  --card: rgba(255, 255, 255, 0.55);
  --border: rgba(200, 26, 58, 0.18);
}
```

Change these nine values and every button, gradient, glass card, and the mascot's outline re-themes together. If you push contrast-sensitive colors (anything used as text, i.e. `--ruby`/`--gold`), check them against `--bg` with a contrast checker — the current values are tuned to stay above ~4.5:1 on the cream background.

**Other assets:**

- `public/favicon.svg` — swap for your own mark
- `public/resume.pdf` — drop in a PDF; it's already linked from the navbar Resume button
- `public/images/*` — project cover images, referenced by path from `content.js` (`image: '/images/my-project.png'`)
- `index.html` — page `<title>` and meta description

**The mascot.** If you fork this and want to keep `ScrollBot` but restyle it, everything it draws is one `BOT` color object at the top of [`ScrollBot.jsx`](src/components/ScrollBot.jsx) plus `fill="var(--bg)"` on every solid shape — recolor the object, leave the fills alone, and it'll always match your theme.

## Deployment

Hosted on Netlify via [`netlify.toml`](netlify.toml) (`npm run build`, publish directory `dist`), connected directly to this repo through Netlify's GitHub integration. Push to `main` → Netlify rebuilds and republishes automatically. No manual deploy step, no CI config beyond what Netlify provides out of the box.

---

If you're reading this because you're evaluating my work rather than forking a template — the more interesting engineering is one level down, in the Vision Transformer, DemCare, and transfer-learning projects described on the site itself (see the [Projects](https://samruddhi-kaledeshmukh.netlify.app/#projects) section). This repo is the front door; that's where the research lives.
