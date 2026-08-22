# SheraTutor UI (Next.js + TypeScript)

SheraTutor is a modern dashboard and learning workspace prototype for an HSC science student built with **Next.js (App Router)** and **TypeScript**. It presents a complete learning workspace: progress overview, AI tutoring, mock exams, board simulation, AI grading, study planning, results, mistake analysis, achievements, and profile settings.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Icons**: Lucide React
- **Styling**: Pure CSS design tokens with responsive layout and Dark Mode support

## Run locally

Requirements: Node.js with npm.

```bash
npm install
npm run dev
```

Next.js will serve the application at `http://localhost:3000`.

Create a production build and type-check with:

```bash
npm run build
```

Start the production server with:

```bash
npm run start
```

## Product Routes

- `/`: Home dashboard — prediction, readiness, next exam, subjects, daily focus, and weekly progress.
- `/ai-tutor`: AI Tutor — chapter navigation, tutor explanation, prompt suggestions, and local question state.
- `/mock-exams`: Mock Exams — exam cards and filters.
- `/board-simulator`: Board Simulator — simulation landing screen and interactive multiple-choice question test.
- `/ai-grading`: AI Grading — sample answer sheet, grading workflow, rubric breakdown, and examiner notes.
- `/results`: Results / Progress — score history and subject performance.
- `/mistake-analysis`: Mistake Analysis — recoverable marks and recurring error patterns.
- `/study-planner`: Study Planner — streak, calendar strip, daily tasks, and recommendation panel.
- `/achievements`: Achievements — XP, level progress, and unlocked milestones.
- `/settings`: Settings — profile fields and dark mode toggle.

## Project Structure

```text
.
├── next.config.mjs            # Next.js configuration
├── tsconfig.json              # TypeScript compiler configuration
├── package.json               # Dependencies and scripts
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout, fonts, and global stylesheets
│   │   ├── ClientShell.tsx    # Responsive shell, theme, and sidebar state
│   │   ├── page.tsx           # Home view
│   │   ├── ai-tutor/          # /ai-tutor
│   │   ├── mock-exams/        # /mock-exams
│   │   ├── board-simulator/   # /board-simulator
│   │   ├── ai-grading/        # /ai-grading
│   │   ├── results/           # /results
│   │   ├── mistake-analysis/  # /mistake-analysis
│   │   ├── study-planner/     # /study-planner
│   │   ├── achievements/      # /achievements
│   │   └── settings/          # /settings
│   ├── components/            # Reusable typed UI components
│   │   ├── Header.tsx         # App header & controls
│   │   ├── Sidebar.tsx        # Navigation sidebar & drawer
│   │   ├── BarChart.tsx       # Progress chart
│   │   ├── ScoreRing.tsx      # Radial score indicator
│   │   ├── Tag.tsx            # Badge / Tag component
│   │   ├── PageHeader.tsx     # Section header
│   │   └── pages/             # Dedicated page components
│   ├── context/               # React Context (ThemeContext)
│   ├── data/                  # Typed mock data models
│   ├── types/                 # TypeScript interfaces and types
│   ├── styles.css             # Base styles & design tokens
│   ├── pages.css              # Page-specific layouts
│   └── layout-fixes.css       # Responsive, dark theme & animation overrides
├── AGENTS.md                  # Contributor instructions
├── ARCHITECTURE.md            # Architecture documentation
└── CONTRIBUTING.md            # Contribution workflow
```

