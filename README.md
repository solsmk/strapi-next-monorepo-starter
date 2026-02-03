# Sols Alk

Strapi v5 + Next.js v15 monorepo web platform.

## Tech stack

- [Strapi v5](https://strapi.io/) - Headless CMS
- [Next.js App Router v15](https://nextjs.org/docs) - React framework
- [Shadcn/ui](https://ui.shadcn.com/) - TailwindCSS UI components
- [TailwindCSS v4](https://tailwindcss.com/) - Utility-first CSS
- [Turborepo](https://turbo.build/) - Monorepo management

## Prerequisites

- Docker
- Node 22
- Yarn 1.22

## Getting started

1. Install dependencies

   ```sh
   nvm use
   yarn
   ```

2. Run apps

   ```sh
   # Start Strapi first to create an API token
   yarn dev:strapi

   # Copy the API token to apps/ui/.env.local as STRAPI_REST_READONLY_API_KEY

   # Then run everything
   yarn dev
   ```

3. Open the apps

   - UI: [http://localhost:3000](http://localhost:3000)
   - Strapi admin: [http://localhost:1337/admin](http://localhost:1337/admin)

## Apps

- `apps/ui` - Next.js frontend
- `apps/strapi` - Strapi CMS backend

## Packages

- `packages/eslint-config` - ESLint configurations
- `packages/prettier-config` - Prettier configuration
- `packages/typescript-config` - Shared tsconfig
- `packages/design-system` - Shared styles
- `packages/shared-data` - Common values across frontend and backend

## Scripts

```sh
yarn dev          # Run all apps in dev mode
yarn build        # Build all apps
yarn dev:ui       # Run UI only
yarn dev:strapi   # Run Strapi only
yarn lint         # Lint all apps
yarn format       # Format code
```
