# E2E Test Simple Landing Page

A simple, single-page landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Build**: SSG (Static Site Generation) with `output: 'export'`
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Static files will be generated in the `out/` directory.

### Lint

```bash
npm run lint
```

### Test

```bash
npm test
```

With coverage report:

```bash
npm run test:coverage
```

## Project Structure

```
src/
  app/
    layout.tsx          - Root layout (metadata, fonts)
    page.tsx            - Main page (section integration)
    globals.css         - Global styles (Tailwind directives)
  components/
    Header.tsx          - Header / Navigation (Client Component)
    HeroSection.tsx     - Hero section
    FeaturesSection.tsx - Features section
    FeatureCard.tsx     - Individual feature card
    ContactSection.tsx  - Contact section
    Footer.tsx          - Footer
  data/
    site.ts             - Dummy content constants
  types/
    index.ts            - Type definitions
__tests__/
  components/           - Component tests
  page.test.tsx         - Page integration test
```

## Customization

All content (text, links, metadata) is centralized in `src/data/site.ts`. To customize the landing page, edit this file.

## Deployment

This project is configured for Vercel deployment:

1. Connect the repository to Vercel
2. Set the root directory to this project folder
3. Vercel will auto-detect Next.js and deploy the static output

## License

All rights reserved.
