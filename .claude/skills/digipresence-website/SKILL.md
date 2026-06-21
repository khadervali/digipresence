# DigiPresence Website Skill

## When to use

Use this skill when editing or extending the DigiPresence website in this repository.

## Scope

The project is a React 18 + Vite marketing site with a local copy of the DigiPresence design system in `src/ds/`.

## Required behavior

- Read `README.md`, `DESIGN.md`, and `CLAUDE.md` before making changes.
- Prefer local DS primitives from `src/designSystem.js`.
- Keep the site premium, minimal, and motion-aware.
- Preserve the hero pulse, header polish, and reveal animations.
- Validate with `npm run build` after edits.
- If first-party files changed, run the Aikido scan and fix any findings.

## Implementation notes

- Section components live in `src/components/`.
- Global styles live in `src/styles.css`.
- Shared DS assets live in `src/ds/`.
- The site should remain self-contained.
