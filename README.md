# Manquel Tejeda

Personal website and source-linked public profile for Manquel Tejeda.

Public site: https://frankinkua.github.io/manquel-tejeda-com/

GitHub Pages publishes the repository root from `main`. The `.nojekyll`
marker preserves the static files and the Markdown source-link fallback.

An editorial-style, responsive portfolio built with plain HTML, CSS, and a
small progressive-enhancement script. No build step, runtime dependencies,
analytics, or externally hosted assets are required.

## Sections

- Introduction and original balcony-energy illustration.
- EnergyFromYourBalcony, Hope Printer, and robotics/MedTech project stories.
- Source-supported background and education.
- Frankfurt Valley founder interview.
- LinkedIn contact and an accessible sources-and-credits dialog.

## Preview

Open `index.html` directly, or serve this directory:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8766/`. All asset paths are relative, so the
site also works under a GitHub Pages repository subpath. There is no
canonical domain configured yet.

## Verification

```sh
node --check site.js
node --test tests/site.test.cjs
git diff --check
```

For browser QA, check 320px, 390px, 768px, and 1440px layouts; menu open,
anchor navigation, and Escape; source-dialog open, close, Escape and focus
return; loaded images/fonts; and no horizontal overflow. Core navigation,
content, and source links also work without JavaScript.

## Content and assets

Evidence and its limitations are recorded in [sources/README.md](sources/README.md).
Do not invent credentials, product performance, customers, quotations, or
current availability. Hope Printer is explicitly presented in the context
of the 2021 interview, not as a newly verified commercial product.

The SVG and CSS illustrations were created for this site. They are
illustrative concepts, not actual product photographs. Fonts are self-hosted
DM Sans and Instrument Serif, with their SIL Open Font License files in
`assets/fonts/`. No third-party portraits or media have been copied.

## Initial public sources

- [LinkedIn — EnergyFromYourBalcony](https://de.linkedin.com/in/manquel-tejeda-b42b39119)
- [LinkedIn — Robotics and MedTech](https://de.linkedin.com/in/manquel-tejeda-86104738)
- [Frankfurt Valley — Meet a Founder](https://medium.com/frankfurtvalley/meet-a-founder-manquel-tejeda-237bc4fca36f)
