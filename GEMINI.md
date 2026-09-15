# Project Overview: RenovaXpert (renovasmart-renovation)

## Stack & Technologies
- **Framework**: React Router v7 (`@react-router/node`, `@react-router/dev`, `@react-router/serve`)
- **Runtime & Bundler**: Node.js, Vite 7
- **UI & Components**: React 19, Radix UI (`@dazl-lib/radix-ui`, `radix-ui`), Lucide React
- **Styling**: CSS Modules, Theme CSS, Reset & Global CSS
- **Forms & Validation**: React Hook Form, `@hookform/resolvers`
- **Languages**: TypeScript 6 (`tsc`, `react-router typegen`)

## Key Commands
- `npm test`: Runs Node native test suite (`node --experimental-strip-types --loader ./tests/loader.mjs --test tests/**/*.test.ts`)
- `npm run typecheck`: Generates route types and verifies TypeScript types (`react-router typegen && tsc`)
- `npm run build`: Produces production client and SSR server bundles via Vite / React Router
- `npm run dev`: Starts local development server
- `npm run start`: Runs production server (`react-router-serve ./build/server/index.js`)

## Directory Architecture
- `app/`: Application source code
  - `routes/`: Page routes, local business pages, service pages, sitemap, robots, etc.
  - `components/`: UI components, forms (GHL quote form, cookie consent, etc.)
  - `styles/`: Global styles, themes, reset
- `public/`: Static assets, brand logos, WebP zone images, llms.txt
- `tests/`: Automated unit and integration test suites (`launch-gate.test.ts`, `location-pages.test.ts`, `seo-404.test.ts`, etc.)
- `build/`: Production build output (`build/client/` and `build/server/`)

## Quality & Deployment Gates
- All 21 test suites must pass (`npm test`).
- Zero type errors across code and generated types (`npm run typecheck`).
- Client and SSR server builds must succeed without missing asset or bundle errors (`npm run build`).
