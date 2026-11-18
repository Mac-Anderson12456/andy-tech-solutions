# Andy TecH Solutions: Website

A React + Vite + Tailwind CSS site for Andy TecH Solutions, with English/French
bilingual support, a blog, and an honest (empty-until-real) testimonials section.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

## Real business details

Already filled in at `src/data/socials.js`:

- Phone, WhatsApp, email, service area, and hours.
- Social links (Facebook, Instagram, TikTok) are still blank placeholders.
  Fill them in whenever those pages exist and the icons will light up
  automatically in the header/footer.

## Bilingual content (English / French)

The site uses a lightweight custom i18n system, not a third-party library:

- `src/i18n/LanguageContext.jsx`: React Context provider, detects the
  browser's language on first visit, remembers the choice in
  `localStorage`, and exposes `useLanguage()` with `{ language, t, pick }`.
- `src/i18n/translations.js`: short, reused UI strings (nav labels,
  buttons, footer chrome).
- Longer page copy lives directly in each page file as bilingual objects,
  e.g. `{ en: '...', fr: '...' }`, which keeps translations easy to find
  and edit without hunting through a separate giant dictionary file.
- Data files (`services.js`, `projects.js`, `blog.js`) store `name`,
  `title`, `description`, etc. as `{ en, fr }` objects too.

To add a new bilingual string anywhere, follow the same `{ en: '...', fr: '...' }`
pattern already used in that file, then read it with `object[language]`.

## Blog

Six practical, honest articles (`src/data/blog.js`), one per service
category, written to actually help a reader decide rather than to pad the
site with content. No invented statistics or client stories.

To add a new post: add an entry to the `blogPosts` array in
`src/data/blog.js` with a unique `slug`, then it automatically appears on
`/blog` and is reachable at `/blog/<slug>`.

## Testimonials

`src/components/Testimonials.jsx` intentionally ships with an empty
`testimonials` array and a friendly "we're just getting started" state
rather than invented quotes. As real reviews come in, add them to that
array (rating, quote per language, name) and they'll render as cards
automatically.

## Equipment requests

The Services page includes a dedicated call-out inviting people who
already know what equipment they want (a router, camera, panel, Starlink
kit, etc.) to reach out directly by call or WhatsApp, using the numbers in
`src/data/socials.js`.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, ServiceCard, ProjectCard, BlogCard, Testimonials, etc.)
  data/         Editable content: services.js, projects.js, blog.js, socials.js, nav.js, images.js
  i18n/         Language context and the short shared-string dictionary
  pages/        Home, Services, About, Projects, Blog, BlogPost, Contact, NotFound
  assets/       Optimized WebP images, organized by section
```

## Notes

- The Contact form validates client-side and opens the user's email app
  (`mailto:`) with the request pre-filled, addressed to the email in
  `src/data/socials.js`. There's no backend, so nothing is silently "sent"
  without the user's own follow-through, which avoids faking a successful
  submission.
- Fonts (Space Grotesk, Inter, JetBrains Mono) are self-hosted via
  `@fontsource`, so the site has no external runtime font dependency.
- The site address used in link previews, `robots.txt` and `sitemap.xml` is filled in
  automatically at build time. On Vercel nothing needs doing. Once you connect a custom
  domain, add an environment variable `SITE_URL` (for example `https://andytechsolutions.com`)
  in the Vercel project settings and redeploy.
- Link-preview image: `public/og-image.png` (1200x630). Home-screen icons: `public/icon-192.png`,
  `public/icon-512.png`, `public/apple-touch-icon.png`.
- Business details for Google live in the JSON-LD block in `index.html`. If the phone, email,
  address, hours, or social links change in `src/data/socials.js`, update that block too.

- The map section (Home and Contact pages) is `src/components/LocationMap.jsx`. The pin position is
  `mapLocation` in `src/data/socials.js`. It currently marks Molyko Omnisport Stadium; replace the two
  numbers with your exact shop coordinates when you have them.

## Deploying

This is a client-side-routed React app, so the host needs to send every
route back to `index.html` (already configured for you):

- **Netlify**: `public/_redirects` handles this automatically. Either
  drag the built `dist/` folder onto app.netlify.com/drop, or connect
  this repo on Netlify with build command `npm run build` and publish
  directory `dist`.
- **Vercel**: `vercel.json` at the project root handles this
  automatically. Import the repo at vercel.com/new, or run `vercel` from
  the project folder with the Vercel CLI. Vite projects are auto-detected,
  no extra config needed.
