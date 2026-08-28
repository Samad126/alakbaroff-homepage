# Samad Alakbarov — Portfolio

A single-page portfolio site built with **Next.js 15 (App Router) · React 19 · TypeScript · GSAP + ScrollTrigger**.

## The idea

**Absheron limestone.** A mineral off-white ground (`#E9E7E0`) with olive / petrol / clay accent
tones — earth tones, no neon, no pure black — and a light/dark theme toggle that persists to
`localStorage` and follows the OS preference until the visitor picks one.

The hero types the name on the page, then the page "pushes through" it on scroll (a pinned,
scrubbed GSAP timeline) before landing on a word-by-word profile statement, an experience
timeline, a toolkit list, education/languages, and a contact section that flips the page to ink.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Run it with Docker

```bash
docker build -t alakbaroff-homepage .
docker run -p 3000:3000 alakbaroff-homepage
# or:
docker compose up --build
```

The image is a multi-stage build using Next.js's `output: "standalone"` — the final runtime
image only contains the built server and static assets, running as a non-root user.

## Before you deploy

1. **`lib/site.ts`** → replace `url` with your real domain (drives OG tags, `sitemap.xml`, `robots.txt`).
2. **`lib/data.ts`** → single source of truth for all content — experience, skills, education,
   languages, and contact details.

## Structure

```
app/
  layout.tsx          metadata, JSON-LD Person schema, theme init script, Google Fonts
  page.tsx            section composition
  globals.css         design tokens (CSS custom properties), light/dark theme, section styles
  icon.svg  robots.ts  sitemap.ts
components/
  nav.tsx              sticky nav with scroll-aware background
  theme-toggle.tsx     light/dark toggle, persisted + OS-synced
  scroll-fx.tsx        GSAP ScrollTrigger setup (hero intro, pinned zoom, reveals)
  sections/            hero · statement · work · skills · education · contact
lib/                  data.ts (content) · site.ts (site config)
```

## Accessibility & performance notes

- `prefers-reduced-motion` is honoured: all GSAP animations are skipped and content is shown
  in its final state immediately.
- Semantic landmarks, focus-visible rings, and labelled controls throughout.
- Theme is applied via a blocking inline script before hydration, so there's no flash of the
  wrong theme on load.

## Licence

Code: yours to use. Content and CV: Samad Alakbarov.
