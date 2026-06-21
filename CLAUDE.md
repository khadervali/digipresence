# DigiPresence AI Working Notes

This repository is a self-contained React + Vite marketing site. The local DigiPresence design system has already been copied into `src/ds/`, so future work should stay inside this repo and should not depend on a sibling design-system project.

## Core rules

- Use `src/designSystem.js` for DS primitives.
- Keep the site aligned with `DESIGN.md`.
- Prefer minimal, targeted edits over broad rewrites.
- After any meaningful UI change, run a build.
- If the change touches first-party source files, run an Aikido scan on the modified files and fix anything it flags.

## Editing guidance

- Use `apply_patch` for file edits.
- Do not reintroduce cross-repo runtime imports.
- Do not restore the old brochure-style layout.
- Keep the header, hero pulse, and reveal animations intact unless there is a specific bug.

## Validation checklist

- `npm run build`
- Browser check for layout and motion if the change affects the UI
- Aikido scan for modified first-party files when applicable

## Useful paths

- `src/App.jsx` - page composition
- `src/components/` - page sections
- `src/ds/` - local design system copy
- `src/styles.css` - global styles
