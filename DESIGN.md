# DigiPresence Design System

This website should feel premium, calm, and precise. The reference is a polished Apple-like marketing site, but the implementation must stay uniquely DigiPresence: confident, modern, and service-driven.

## Design principles

- Use generous whitespace and strong hierarchy.
- Prefer sharp, editorial layouts over generic card farms.
- Keep the UI restrained, but make motion deliberate and memorable.
- Use dark surfaces, soft highlights, and subtle contrast instead of loud gradients.
- Treat every section as a focused story block with one clear job.

## Typography

- Headlines should be large, compact, and readable at a glance.
- Body text should stay calm and comfortably spaced.
- Avoid default-feeling UI typography.
- Keep line lengths short enough that the hero and section headings remain premium on a small laptop.

## Motion

- Use motion to reinforce meaning, not to decorate everything.
- The logo pulse and reveal-on-scroll effects are part of the brand language.
- Animations should be smooth, subtle, and hardware-friendly.
- Avoid noisy hover effects, bouncing motion, or random transitions.

## Layout rules

- Keep the header sticky and lightweight.
- Keep the hero spacious and confident.
- Use alternating section rhythms so the page does not feel repetitive.
- Preserve consistent alignment, spacing, and corner radius values across the site.
- Avoid nested-card clutter and crowded feature grids.

## Color and surfaces

- The base palette should stay dark and premium.
- Use accent colors sparingly for emphasis, status, and calls to action.
- Surfaces should feel layered without heavy shadows.
- Prefer controlled contrast and quiet depth over bright decorative color.

## Do

- Reuse the local design system primitives in `src/ds/`.
- Keep sections conversion-oriented.
- Preserve the logo pulse and reveal patterns.
- Validate visual changes in the browser after edits.

## Do not

- Do not rebuild the site into a generic brochure template.
- Do not reintroduce external runtime dependency paths for the DS.
- Do not change the visual language to a flat corporate default.
- Do not remove motion unless it is broken or harming performance.
