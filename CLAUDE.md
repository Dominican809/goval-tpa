# CLAUDE.md

Guidance for working in this repo.

## What this is

Single-page **bilingual (ES / EN) marketing site** for Goval TPA — a Panama
third-party administrator for medical and travel assistance. Static
HTML/CSS/JS with **no build step, no dependencies, no framework, no package
manager**. Hosted on GitHub Pages.

Default language is **Spanish** (`<html lang="es">`); English is the toggle.

## Run locally

```bash
python3 -m http.server 4173
# open http://127.0.0.1:4173
```

There are no tests, no linter, no CI. Verify changes by eye in the browser,
in both languages (`?lang=es` / `?lang=en`) and both themes (light / dark).

## File map

| File | Role |
|---|---|
| `index.html` | The entire page. Sections in order: `#top` (hero), `#cifras` (stats band), `#operacion`, `#especializacion`, `#servicios` (value cards), `#filosofia`, `#momento` (rotating "matters most" panel), `#proceso`, `#contact`. |
| `styles.css` | All styling, single file. |
| `i18n.js` | Translation dict (`dict.es` / `dict.en`), per-language `<meta>` (`meta` object), language toggle, **and** the theme toggle logic. |
| `form-validate.js` | Contact-form name/email/phone/message validation. IIFE. The `#contact` **form** + its CSS + `form.*` keys are kept verbatim from upstream — restore from `upstream/main` rather than editing. The contact-card copy above the form has since been updated with the real phone (`+507 836 6014`, `tel:` link) and email. |
| `nav.js` | Mobile hamburger menu. IIFE. |
| `impact.js` | `#momento` carousel: auto-rotates the 3 `.impact-slide`s every 5.5s, pauses on hover/focus, manual nav via `.impact-dot`s. All 3 slides live in the DOM (i18n translates them); JS only toggles `.is-active`. IIFE. |
| `public/` | Logo, favicons, OG share image (binary assets). |
| `robots.txt`, `sitemap.xml` | SEO. Contain absolute URLs — see "Hardcoded URLs". |
| `CLIENT-DELIVERY-*.{md,html}` | Client handoff notes and slide decks. **Not** part of the site; don't wire them into `index.html`. |

## Conventions

### Formatting
- 2-space indentation, double-quoted strings, semicolons.
- Trailing commas in multiline object/array literals.
- Vanilla JS only. Wrap scripts in an IIFE (`(function () { ... })();`).
- Defensive guards: `if (!el) return;`. Wrap every `localStorage` access in
  `try / catch`.

### i18n — do not hard-code visible copy
- Any user-visible string in `index.html` carries `data-i18n="section.key"`
  (or `data-i18n-aria` for aria-labels).
- The string is defined in **both** `dict.es` and `dict.en` in `i18n.js`.
  Adding a key to one language without the other is a bug.
- Page `<title>` / meta description / OG strings live in the `meta` object in
  `i18n.js`, also per language.
- Form validation messages are `form.err.*` keys, resolved at runtime by
  `form-validate.js` via `window.dict`.

### Theming
- CSS custom properties declared on `:root` (light), overridden under
  `html[data-theme="dark"]`.
- The inline `<head>` script in `index.html` sets `data-theme` before first
  paint — keep it inline and first. Preference persists as `goval-theme` in
  `localStorage`.
- New colors go through a token (`--navy`, `--teal`, `--green`, `--ink`,
  `--muted`, `--border`, …), and get a dark-mode value too.

### CSS
- Flat, semantic class names (`.contact-form`, `.header-cta`, `.value-card`).
- Breakpoints: `@media (max-width: 860px)` (main mobile), `380px` (tiny);
  min-width bumps at `700` / `820` / `900` / `1000` for grids.
- `clamp()` for fluid type. `.wrap` is the standard max-width container.
- **Color palette** — defined and documented in the block comment at the top of
  `styles.css`. Section grounds: `--bg` (white), `--fog` (cool blue-grey, via
  `.ground-fog`), `--mint` (soft green — **only** `#cifras`), `--navy-deep`
  (dark), and the `#momento` navy→teal accent gradient. Green (`--green`) is
  **CTA-only**. Hard rule: **no two consecutive sections share a ground** — the
  order is hero·mint·white·fog·white·fog·dark·accent·white·footer(fog); check it
  when adding/reordering sections. `.band` is centered-layout only (no bg).
- **The hero is a fixed dark section in both themes** — its background
  (`public/hero-map`, a dark LatAm map with glowing nodes) carries the look, so
  hero text colors are hard-coded light (not tokens) and there is no dark-mode
  override. Everything below the hero is token-driven and theme-aware as normal.

### Images
- Source art (often `ChatGPT Image ….png`, ~2 MB) gets optimized on drop:
  resize to display width, then `cwebp -q ~80` + a JPG fallback via
  `magick … -quality ~80`, delete the original. Reference with `<picture>`
  (`webp` `<source>` + `jpg` `<img>` with `width`/`height`), or `image-set()`
  for CSS backgrounds. Current: `hero-map.*` (hero bg), `hero-diagram.*`
  (ecosystem infographic, in `#operacion`). Infographic art is Spanish-only —
  `TODO(goval)` flags where an EN version would plug in.

### Cache busting
`index.html` references assets with a `?v=N` query
(`styles.css?v=24`, `logo.png?v=7`). **Bump that number** when you change the
referenced file, so GitHub Pages / browsers pick it up.

### Accessibility
Skip link, `aria-*`, `role`, focus management on the mobile nav and form are
intentional. Preserve them.

### Commits
Short, imperative, capitalized, single line. E.g.
`Fix Goval dark-mode logo plate and Panama TPA copy.`

## Hardcoded URLs / placeholders

These are known and intentional until the client confirms real values — don't
"fix" them without being asked:

- Absolute URLs use `https://hectortorrese.github.io/goval-tpa/` in
  `index.html` (canonical, hreflang, OG, JSON-LD), `robots.txt`, `sitemap.xml`,
  and the form's `_next`. A real domain means updating all of these together.
- Contact email `info@govaltpa.com` is provisional (also the FormSubmit
  `action` target). Phone `+507 836 6014` is confirmed.
- No `[PLACEHOLDER]` tokens remain. Several figures are **proposed
  industry-standard values that Goval still has to confirm**, each flagged with a
  `TODO(goval)` comment in `index.html` and `i18n.js`: claims SLA (`services.s3.p`
  — 48–72 h), and in `#momento` the reimbursement window (`impact.s2.title` —
  48–72 h), the sample reimbursement notification (`impact.s2.text` — $1,920 /
  54 h), language count (`impact.s3.title` — 5), and agent-assign time
  (`impact.s3.text` — 22 s). `services.s2.p` (400 providers / 175 countries) is
  derived from the confirmed `#cifras` stats. Onboarding time (`process.s3.p` —
  "1 semana desde el kickoff") is user-confirmed.
- Confirmed real: the 4 `#cifras` stats (+20 yrs, +175 countries, +250K
  passengers, +400 providers), the 1-week onboarding figure, and the phone
  `+507 836 6014`.
- `#momento` notification examples ("Hospitalización — Madrid…", "$1,920 —
  Tiempo de resolución: 54 horas", "Agente asignado en 22 segundos") are
  illustrative sample data, not real cases — keep them plausible and generic.
- The English copy in `i18n.js` was adapted from the Spanish to keep the toggle
  working; it carries a `TODO(goval)` note for a commercial review.
- Whole page addresses an **insurer** reader (ops/product management at LatAm
  insurers). No traveler-facing copy or CTAs.

## Git remotes

- `origin` → this fork (`Dominican809/goval-tpa`). Push here.
- `upstream` → original (`HectorTorresE/goval-tpa`). Pull-only, if syncing
  upstream changes is explicitly wanted.
