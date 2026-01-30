# Copilot Instructions for Slaney EE Website

## Project Overview

Static marketing website for Slaney EE game studio. Built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed as a GitHub Pages site with build output at repository root.

## Architecture

- **Entry**: `src/main.tsx` → `src/app.tsx`
- **Components**: `src/components/` — flat structure, one component per file
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (no config file needed)
- **Build output**: Compiled to root `index.html` and `assets/` (not `dist/`)

### Build Configuration

Vite builds from `src/` to repository root for GitHub Pages compatibility. The `main` branch is used for both source control and hosting, so build output (`index.html`, `assets/`) must be committed and is not gitignored.

The custom `serveStaticAssets()` plugin in `vite.config.ts` serves `/img/` during development, ensuring image paths (e.g., `/img/logo.png`) work identically in dev and production.

## Code Conventions

### Component Patterns

- Use named exports for components: `export function ComponentName()`
- Exception: default exports for `App`, `Navbar`, `ProductCard`
- Props interfaces inline or co-located: `interface ComponentNameProps { ... }`
- Wrap page sections with `<Section id="section-name">` and `<Header>` components

### Styling

- Use Tailwind utility classes directly in JSX
- Custom brand classes in `src/index.css`:
  - `.text-wexford` — gradient text (purple to gold)
  - `.bg-wexford` — gradient background
- Brand colors: purple (`#4b0082`, `purple-500/800/900`) and gold (`#ffd700`, `yellow-500`)
- Dark theme: black background, light text

### Formatting (Biome)

- 2-space indentation
- Single quotes, no semicolons
- Run `npm run lint:fix` before committing

## Commands

```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + production build
npm run lint:fix # Fix linting issues
npm run format   # Format code
```

## File Naming

- Components: `kebab-case.tsx` (e.g., `button-link.tsx`)
- Use `.tsx` for all React files
