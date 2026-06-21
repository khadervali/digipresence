# DigiPresence Website

Premium React marketing site for DigiPresence. The app is built with React 18 and Vite, and it is fully self-contained inside this repository.

## What lives here

- `src/components/` contains the page sections and modal flows.
- `src/ds/` contains the local DigiPresence design system copy used by the site.
- `src/designSystem.js` re-exports the local DS primitives used across the app.
- `src/styles.css` holds the project-wide base styles.

## Local workflow

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

- `src/components/Header.jsx` - sticky navigation and primary CTA.
- `src/components/Hero.jsx` - animated hero with the pulse visual.
- `src/components/Services.jsx` - service cards and proof band.
- `src/components/Work.jsx` - showcase grid and filters.
- `src/components/Pricing.jsx` - pricing plans and billing toggle.
- `src/components/Cta.jsx` - final conversion block.
- `src/components/Footer.jsx` - footer navigation and support links.
- `src/components/StartModal.jsx` - project-start modal.

## Design system note

This site is not meant to import a sibling design-system repo at runtime. The required DS primitives, tokens, fonts, and base CSS are copied locally into `src/ds/` so the website stays portable and buildable on its own.

## AI guidance

If you are an AI assistant working in this repo, read `CLAUDE.md` and `AGENTS.md` first. They contain the implementation rules, design constraints, and validation expectations for this project.
