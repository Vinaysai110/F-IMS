# IMS — Integrity Management Services

Rebuilt on React + TypeScript + Tailwind CSS + Framer Motion, following the
"3D Creator" motion-design brief but re-grounded in IMS's actual content and
assets. Dark, premium theme with a recurring "case file" identity system
(monospace file tags, exhibit corner marks) tying the borrowed animation
language back to the subject: evidence-based insurance investigation.

## Sections

1. **Hero** — nav, massive gradient heading, magnetic handshake mark
2. **Marquee** — two scroll-driven rows using IMS's own service/advisor imagery
3. **About** — character-reveal paragraph, case-file corner marks
4. **Services** — numbered list of all 6 claim types
5. **Coverage** — sticky-stacking cards grouping claim types (the brief's "Projects" section, repurposed)
6. **Advisors** — new section for the 3 named advisors
7. **Our Process** — new scroll-driven timeline for the 7-step workflow
8. **Contact** — new form + office info card

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL to preview. Edit content in `src/data/*.ts` —
that's where all the copy for services, advisors, process steps, and
marquee images lives, separate from the layout code.

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically on every push to `main`. To turn it on:

1. Push this project to your `Vinaysai110/ims-website` repo (replacing
   the old static files).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically.

Your site will be live at `https://vinaysai110.github.io/ims-website/`.

`vite.config.ts` is already set with `base: '/ims-website/'` to match
that URL. If you ever rename the repo or use a custom domain, update that
`base` value (custom domain -> `base: '/'`).

## Known content gaps to fix before launch

- **Contact info is still the placeholder from the old repo** (a New York
  address, a `+1` phone number, `info@integritymanagement.com`) — this
  lives directly in `src/sections/ContactSection.tsx`. Swap in IMS's real
  India-based address, phone, and email.
- **`advisor-2.jpg` and `advisor-3.jpg` are the same file** — Clara Vance
  and Arthur Vance currently show identical photos. Needs two distinct
  images.
- **`service-4.png` and `service-5.png` are the same file** — Marine Claim
  Investigations and Fire & Property Claims currently show identical
  images. Needs two distinct images.
- Advisor names and bios read like placeholders — confirm these are real
  before launch.
