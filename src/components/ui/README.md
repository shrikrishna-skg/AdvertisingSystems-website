# UI Components (shadcn-style)

React components used by the app, with Tailwind CSS and TypeScript. Path alias `@/` points to `src/`.

## Why `src/components/ui`?

- Keeps shared UI primitives (Button, etc.) separate from Astro layout/components.
- Matches shadcn conventions so we can add more components from shadcn or 21st.dev without renaming.
- `@/components/ui` and `@/lib/utils` stay consistent across the codebase.

## Contents

- **button.tsx** — shadcn Button (variants: default, destructive, outline, secondary, ghost, link).
- **background-paths.tsx** — Animated hero from [21st.dev/community](https://21st.dev/community/components/popular): floating SVG paths + title + CTA. Uses `framer-motion` and `Button`.

## Usage

In an Astro page, import with `client:load` so the React component hydrates:

```astro
---
import { BackgroundPaths } from "@/components/ui/background-paths";
---

<BackgroundPaths client:load title="Your Title" />
```

Demo page: **[/demo-background-paths](/demo-background-paths)** (noindex).

## Dependencies

- `framer-motion` — animations
- `@radix-ui/react-slot` — Button `asChild`
- `class-variance-authority` — button variants
- `clsx` + `tailwind-merge` — `cn()` in `@/lib/utils`
