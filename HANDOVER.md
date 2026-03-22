# Handover Guide - E2E Test Simple Landing Page

## Overview

This is a single-page landing page (LP) built as a static site. It has no backend dependencies, no database, and no environment variables required.

## Architecture

- **Static Site Generation (SSG)**: The site is pre-rendered to static HTML at build time via `output: 'export'` in `next.config.js`. No server is needed at runtime.
- **Client Component**: Only `Header.tsx` uses client-side JavaScript (for the mobile menu toggle). All other components are Server Components rendered at build time.

## How to Customize Content

All content is centralized in `src/data/site.ts`:

- `SITE_METADATA` - Site title, description, OGP tags
- `NAV_LINKS` - Navigation menu items
- `HERO_CONTENT` - Hero section headline, subtext, CTA
- `FEATURES` - Feature cards (icon, title, description)
- `CONTACT_CONTENT` - Contact section info

Edit these constants to update the site content. No other files need to be changed for content updates.

## How to Customize Styling

- All styling uses Tailwind CSS utility classes directly in components
- Color scheme can be changed by modifying the Tailwind classes in each component
- The `tailwind.config.ts` file can be extended for custom themes

## Deployment

The site is deployed to Vercel. To redeploy:

1. Push changes to the connected Git repository
2. Vercel will automatically rebuild and deploy

For manual deployment, run `npm run build` and upload the `out/` directory to any static hosting service.

## Maintenance

- **Dependencies**: Run `npm audit` periodically and update with `npm update`
- **Node.js**: Tested with Node.js 18.x
- **Tests**: Run `npm test` before deploying changes to verify nothing is broken
