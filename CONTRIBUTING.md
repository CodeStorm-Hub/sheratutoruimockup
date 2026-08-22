# Contributing

## Workflow

1. Read `AGENTS.md` and `ARCHITECTURE.md`.
2. Inspect the existing component and its responsive/theme rules before editing.
3. Make the smallest change that fulfills the request.
4. Keep interaction states visible and keyboard-accessible where applicable.
5. Verify the build and inspect the affected page in light and dark mode.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite development server
npm run build     # production build verification
git diff --check  # whitespace/error check
```

## UI checklist

- Does the selected navigation item remain highlighted?
- Does the feature work after a browser refresh or have its prototype limitation documented?
- Are text, borders, inputs, icons, tags, and buttons readable in both themes?
- Does the layout still work at mobile widths?
- Does motion respect reduced-motion preferences?
- Are interactive controls usable with keyboard focus and not dependent on hover alone?

## Commit/change notes

Describe behavior changes in plain language. Mention any intentionally static or mocked behavior. Avoid committing generated `dist` output unless the surrounding workflow specifically requires it.
