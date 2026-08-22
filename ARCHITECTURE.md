# Architecture

## Runtime

The app is mounted from `index.html` by `createRoot(document.getElementById('root'))` in `src/main.jsx`. Vite serves and bundles the app. There is one React entry point and no client-side router.

## App shell

`App` owns the global UI state:

```text
open        mobile sidebar drawer visibility
collapsed   desktop sidebar visibility
focused     Home focus-session label
page        selected sidebar page label
darkMode    shared theme state, persisted as shera-theme
```

`Sidebar` receives navigation state and emits `setPage`. The header contains the responsive sidebar toggle, breadcrumb, search visual, theme toggle, notifications visual, and avatar. The current page is selected through a `content` object keyed by the exact sidebar label.

## Page components

| Component | Responsibility | Local state |
| --- | --- | --- |
| `HomePage` | Dashboard overview and focus CTA | Receives `focused` |
| `TutorPage` | Tutor workspace and prompt interaction | `prompt`, `question` |
| `GradingPage` | Sample answer-sheet review | None |
| `ExamsPage` | Mock exam cards or Board Simulator | `started`, `answer` |
| `PlannerPage` | Study streak, calendar, tasks, recommendation | None |
| `AnalyticsPage` | Results or Mistake Analysis variant | Props: `mistakes` |
| `AchievementsPage` | XP hero and milestone cards | None |
| `SettingsPage` | Profile form and theme control | Receives theme state |

Small reusable components include `Tag`, `PageHeader`, `ScoreRing`, `BarChart`, and `Sidebar`.

## Styling order

Stylesheets are imported in this order from `main.jsx`:

1. `styles.css`: reset, color tokens, app shell, Home, base responsive rules.
2. `pages.css`: page-specific layouts and responsive rules.
3. `layout-fixes.css`: final cascade layer. This is where animation, dark-mode contrast, desktop collapse, and fixes that must win over earlier rules live.

The visual language uses navy structure, coral actions, mint progress, sun highlights, rounded cards, and the Baloo 2 / Inter / Space Mono type pairing. Most of the layout is CSS Grid/Flexbox with inline SVG chart artwork.

## Theme implementation

Light mode is the default `.app`. Dark mode adds `.dark` to the same root and overrides surfaces, text, borders, controls, tags, and page-specific accents. The `--navy` token intentionally changes meaning in dark mode, so controls that need a fixed surface (for example the focus CTA) have explicit dark-mode rules.

## Data boundary

All subject values, tasks, exam content, chart paths, and achievement values are static constants or inline arrays. There is no fetch layer. To connect a backend later, keep API/data fetching above presentational page components and replace hard-coded arrays through props rather than scattering requests throughout JSX.

## Responsive behavior

- Above 1050px: fixed sidebar and desktop content canvas.
- At or below 1050px: sidebar becomes a drawer; the header menu opens it.
- At or below 760px: most multi-column page layouts become single-column.
- At or below 650px: Home cards tighten, command search hides, and exam/achievement layouts compact further.

## Known design debt

Some controls are intentionally demonstrative and do not submit data. There are repeated style rules across the three CSS files because this prototype evolved iteratively; preserve import order when making targeted fixes.
