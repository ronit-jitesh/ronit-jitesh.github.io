# ronit-jitesh.github.io

Personal portfolio — Ronit Jitesh, Business Analyst & AI Builder.
Live at <https://ronit-jitesh.github.io/>.

## Stack

Vanilla HTML / CSS / JS. No build step. PWA-enabled via `manifest.json` +
`service-worker.js`.

## Local development

Serve the repo with any static server, e.g.:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

GitHub Pages serves `main` automatically. Push to deploy.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Single-page content |
| `styles.css` | All styles |
| `script.js` | Animations, counters, nav, contact form |
| `service-worker.js` | PWA offline cache |
| `manifest.json` | PWA manifest |
| `robots.txt`, `sitemap.xml` | SEO |

## TODO

- Replace the "Request CV" mailto button with a direct PDF/Drive link once the
  latest CV is uploaded (see hero section in `index.html`).
