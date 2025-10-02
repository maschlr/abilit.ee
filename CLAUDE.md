# CLAUDE.md

This document provides context for AI assistants (like Claude) working on the abilit.ee codebase.

## Project Overview

**abilit.ee** is the company homepage for an Estonian-based software engineering consultancy. The site showcases services in Python backend development, Odoo customization, LLM integrations, and data-driven solutions for energy systems.

### Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.16+ - Static site generator with partial hydration
- **UI Components**: [React](https://react.dev/) v18 - For interactive components only
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v3 - Utility-first CSS with custom skin tokens
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/) v5.6+
- **Content**: Astro Content Collections with markdown support
- **Search**: [Fuse.js](https://fusejs.io/) - Lightweight fuzzy search
- **OG Images**: [Satori](https://github.com/vercel/satori) + [@resvg/resvg-js](https://github.com/yisibl/resvg-js) - Dynamic image generation

### Base Template

Built on [AstroPaper](https://github.com/satnaing/astro-paper) v4 theme - a minimal, accessible, SEO-friendly blog theme.

## Coding Philosophy

### Simplicity and Elegance

- **Prefer simplicity over abstraction** - Don't create unnecessary layers
- **Direct solutions** - Solve problems with the most straightforward approach
- **Avoid premature optimization** - Keep code readable and maintainable first
- **Minimal dependencies** - Only add libraries when genuinely needed
- **Clear over clever** - Explicit code is better than implicit magic

### Code Style

- Use TypeScript for type safety
- Follow existing patterns in the codebase
- Prefer functional components (React) and component-based architecture (Astro)
- Use Tailwind's utility classes directly; avoid creating wrapper components unless truly reusable
- Keep components small and focused
- Use Astro components (`.astro`) by default; only use React (`.tsx`) when interactivity is needed

### Formatting and Linting

- **Prettier**: Auto-formatting enforced
- **ESLint**: Linting configured for Astro and TypeScript
- Run `npm run format` before committing
- Run `npm run lint` to check for issues

## Project Structure

```
/
├── public/                      # Static assets served as-is
│   ├── assets/                  # Images and SVG files
│   │   ├── logo.svg            # Company logo
│   │   └── logo.png
│   ├── favicon.svg             # Site favicon
│   └── toggle-theme.js         # Theme switcher (loaded separately)
│
├── src/
│   ├── assets/                 # Assets processed by Astro
│   │   ├── images/             # Images imported in components
│   │   │   └── headshot.png    # Profile image
│   │   └── socialIcons.ts      # Social media icon definitions
│   │
│   ├── components/             # Reusable UI components
│   │   ├── *.astro            # Static Astro components
│   │   └── *.tsx              # Interactive React components
│   │
│   ├── content/               # Content collections (markdown, etc.)
│   │   └── config.ts          # Content schema definitions
│   │
│   ├── layouts/               # Page layout components
│   │   ├── Layout.astro       # Base HTML layout
│   │   └── Main.astro         # Main content layout
│   │
│   ├── pages/                 # File-based routing (Astro standard)
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── services.astro     # Services page
│   │   ├── projects.astro     # Projects showcase
│   │   ├── 404.astro          # Not found page
│   │   ├── og.png.ts          # Dynamic OG image endpoint
│   │   └── robots.txt.ts      # Robots.txt endpoint
│   │
│   ├── styles/                # Global styles
│   │   └── base.css           # Base Tailwind imports + custom CSS
│   │
│   ├── utils/                 # Utility functions
│   │   ├── og-templates/      # OG image templates
│   │   ├── getSortedPosts.ts  # Post sorting logic
│   │   ├── slugify.ts         # URL slug generation
│   │   └── ...                # Other utilities
│   │
│   ├── config.ts              # Site configuration (SITE, SOCIALS, etc.)
│   ├── types.ts               # TypeScript type definitions
│   └── env.d.ts               # Environment type declarations
│
├── astro.config.ts            # Astro configuration
├── tailwind.config.cjs        # Tailwind configuration (with skin tokens)
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── CLAUDE.md                  # This file
```

### Key Files to Know

- **`src/config.ts`** - Site metadata, social links, pagination settings
- **`src/types.ts`** - Core TypeScript types for the project
- **`tailwind.config.cjs`** - Custom color scheme using CSS variables (`--color-*`)
- **`src/styles/base.css`** - Global styles and CSS custom properties for theming

## Important Patterns

### Theming

The site uses a "skin" token system with CSS variables:
- Colors defined in `src/styles/base.css` as `--color-*` variables
- Accessed via Tailwind utilities: `text-skin-base`, `bg-skin-fill`, `border-skin-line`
- Supports light/dark mode via `[data-theme]` attribute

### Routing

Astro uses file-based routing:
- Files in `src/pages/` become routes
- `index.astro` → `/`
- `about.astro` → `/about`
- Dynamic routes would use `[param].astro` syntax (not currently used)

### Component Choice

- **Use `.astro` files** for static content and server-rendered UI
- **Use `.tsx` files** only when you need client-side interactivity (state, events, etc.)
- Example: `Header.astro` is static, `Search.tsx` needs client-side fuzzy search

## External Documentation

### Core Technologies
- [Astro Documentation](https://docs.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Styling
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Typography Plugin](https://tailwindcss.com/docs/typography-plugin)

### Integrations
- [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)
- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

### Utilities
- [Fuse.js Documentation](https://fusejs.io/)
- [Satori Documentation](https://github.com/vercel/satori)

### Markdown
- [remark-toc](https://github.com/remarkjs/remark-toc) - Table of contents generation
- [remark-collapse](https://github.com/Levi-Lesches/remark-collapse) - Collapsible sections

## Development Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production (runs type check + build)
npm run preview      # Preview production build locally
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
npm run lint         # Lint with ESLint
npm run sync         # Generate TypeScript types for Astro modules
```

## Company Context

**abilit.ee** is registered in Estonia and provides:
- Engineering consultancy for software and data solutions
- Python backend development
- Odoo ERP customization
- LLM/AI integrations
- Energy systems engineering consulting

Primary audience: International clients (especially US-based) looking for hands-on technical expertise.

## Notes for AI Assistants

- This project prioritizes **simplicity and directness**
- Avoid suggesting complex abstractions or over-engineering
- Respect the existing AstroPaper structure - don't reinvent working patterns
- When adding features, check if similar patterns exist first
- Keep the site lightweight and performant
- Maintain accessibility standards already in place
