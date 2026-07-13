# Per-Route Canonical & Title Fix — EPI-65

**Date:** 2026-07-11
**Owner:** Discovery Optimization Agent
**Status:** Done (implemented, awaiting deploy)

## Problem

All 15 subpages shared:
- **Canonical:** `https://digiprezence.com` (homepage) → blocked subpage indexation
- **Title:** `DigiPrezence | Premium digital presence for small businesses` (same as homepage)
- **Server HTML:** Identical for all routes (SPA shell limitation)

## Root Cause

- `<title>` and `<link rel="canonical">` were hardcoded in `index.html` with no client-side override mechanism
- `react-helmet-async` was not installed
- Footer links used `/#/pages/:slug` hash-style navigation instead of proper routes
- The `*` catch-all route rendered `<SeoPage slug="" />` (always 404 for direct URL access)

## Changes Made

| File | Change |
|------|--------|
| `package.json` | Added `react-helmet-async` dependency |
| `src/main.jsx` | Wrapped app with `<HelmetProvider>` |
| `src/App.jsx` | Added 15 explicit routes mapped via `pageMap`; added `<Helmet>` to `HomePage` with title + canonical; added `SeoPageCatchAll` for unknown routes |
| `src/pages/SeoPage.jsx` | Replaced `document.title` with `<Helmet>` component; added `rel="canonical"` link per page |
| `src/pages/Assets.jsx` | Added `<Helmet>` with `Brand Assets | DigiPrezence` title and `/assets` canonical |
| `src/components/Footer.jsx` | Migrated from `/#/pages/:slug` hash links to direct routes with React Router `<Link>` |

## Route Map

| Route | Title | Canonical |
|-------|-------|-----------|
| `/` | DigiPrezence | Premium digital presence for small businesses | `https://digiprezence.com` |
| `/web-product-services` | Web and Product Development Services for Small Business Growth | `https://digiprezence.com/web-product-services` |
| `/social-content-services` | Social Media and Content Marketing Services | `https://digiprezence.com/social-content-services` |
| `/talent-consultancy-services` | Talent and Digital Growth Consultancy Services | `https://digiprezence.com/talent-consultancy-services` |
| `/paid-ads-services` | Paid Ads Management Services for Qualified Lead Growth | `https://digiprezence.com/paid-ads-services` |
| `/work` | DigiPresence Work and Results | `https://digiprezence.com/work` |
| `/about` | About DigiPresence | `https://digiprezence.com/about` |
| `/blog` | Digital Marketing Blog and Insights | `https://digiprezence.com/blog` |
| `/guides` | SEO and Growth Guides for Small Businesses | `https://digiprezence.com/guides` |
| `/pricing` | DigiPresence Pricing and Engagement Models | `https://digiprezence.com/pricing` |
| `/contact` | Contact DigiPresence | `https://digiprezence.com/contact` |
| `/support` | Client Support and Delivery Help | `https://digiprezence.com/support` |
| `/privacy` | Privacy Policy | DigiPresence | `https://digiprezence.com/privacy` |
| `/terms` | Terms and Conditions | DigiPresence | `https://digiprezence.com/terms` |
| `/cookies` | Cookie Policy | DigiPresence | `https://digiprezence.com/cookies` |
| `/careers` | Careers at DigiPresence | `https://digiprezence.com/careers` |
| `/assets` | Brand Assets | DigiPrezence | `https://digiprezence.com/assets` |

## Build Verification

- `npm run build` completes successfully
- All 15 routes are present in the compiled JS bundle
- Helmet renders `<title>` and `<link rel="canonical">` for each route
- Fallback `*` catch-all still renders "Page not found" for unknown routes

## Deploy Instructions

```bash
cd /tmp/digipresence-repo
npm run build
# Deploy dist/ to Hostinger via existing deploy script:
bash ./scripts/deploy-hostinger.sh
```

## Post-Deploy Validation

1. Visit each route and verify `<title>` and `<link rel="canonical">` via browser DevTools
2. Run Google Rich Results Test on 3-5 pages
3. Monitor Google Search Console for canonical coverage improvement over 2-4 weeks
4. Expected: subpages move from "duplicate without user-selected canonical" to independently indexable pages
