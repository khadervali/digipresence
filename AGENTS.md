# Agent Guide

This file is for future AI agents working in the DigiPresence website repo.

## Mission

Keep the site premium, self-contained, and easy to maintain. The current implementation is intentionally local-first: the website owns its own design-system copy and should not rely on a separate repository at runtime.

## Working rules

- Read `README.md`, `DESIGN.md`, and `CLAUDE.md` before editing.
- Make the smallest safe change that solves the task.
- Preserve the premium motion language and the local DS primitives.
- Use browser validation when the task affects layout, animation, or interactions.
- Run `npm run build` before handing the repo back.
- If first-party source files changed, run the Aikido scan and address any findings.

## What to preserve

- The sticky header behavior.
- The hero pulse visual.
- The reveal-on-scroll animations.
- The local DS copy in `src/ds/`.
- The current premium visual direction.

## What to avoid

- Avoid generic marketing-site patterns.
- Avoid moving the site back to external DS imports.
- Avoid broad refactors that do not support the requested change.
- Avoid deleting motion unless it is broken or impacts accessibility.
