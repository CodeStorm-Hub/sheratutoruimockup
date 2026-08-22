# AI contributor instructions

## Scope

This is a Next.js (App Router) + TypeScript UI prototype. Make focused, type-safe, and reversible edits.

## Source of truth

- `src/app/layout.tsx` owns the root HTML shell, font declarations, and global stylesheets.
- `src/app/ClientShell.tsx` owns responsive layout wrappers, desktop collapse, mobile drawer, and header.
- `src/components/Sidebar.tsx` and `src/components/Header.tsx` own navigation and top-level workspace controls.
- `src/components/pages/` contains individual page views.
- `src/types/` contains TypeScript interfaces and types.
- `src/data/` contains typed mock data.
- `src/styles.css` owns base layout tokens and Home styles.
- `src/pages.css` owns secondary page layouts.
- `src/layout-fixes.css` is the final stylesheet in import order containing responsive overrides, animations, and dark mode rules.

## Coding conventions

- Use React function components and TypeScript typing for all props and state.
- Reuse `lucide-react` icons and existing CSS tokens (`--navy`, `--muted`, `--coral`, `--mint`, `--sun`, `--border`).
- Keep sample content aligned with the SheraTutor / HSC study context.
- Preserve responsive behavior at existing breakpoints: approximately 1050px, 760px, and 650px.
- Maintain dark mode compatibility (`.app.dark` root class).

## Verification

Run:

```bash
npm run build
```

