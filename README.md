# Piano Schedule

**Private Piano Teaching Manager** — a fast, local-first scheduling app for private piano teachers. Manage your weekly teaching schedule, students, recurring lessons, and studio statistics from one calm, professional interface that works equally well on iPhone and desktop.

## Features

- **Day / Week / Month calendar** with a 15-minute time grid, live current-time indicator, and auto-scroll to now.
- **Drag to move, drag edges to resize** lessons on desktop; tap-to-view and long-press-to-edit on mobile.
- **Conflict detection** — live inline warnings while scheduling, plus a confirmation step before double-booking.
- **Recurring lessons** (weekly / biweekly / monthly) with automatic, duplicate-safe generation of individual lesson records.
- **Student management** — profiles with contact info, lesson history, attendance stats, and per-lesson notes.
- **Weekly dashboard & daily summaries** — lessons, teaching hours, students, completion rate, estimated income.
- **Statistics page** with simple charts (lessons/day, hours/week, students by lesson count).
- **Global search, filters, quick-add menu, and keyboard shortcuts** (`N` new lesson, `T` today, `W` week, `D` day, `E` edit selected, `/` search).
- **Light & dark themes**, carefully tuned (not simple inversion), persisted per device.
- **Local-first storage** via IndexedDB (Dexie) — your schedule works fully offline and survives reloads.
- **Backup & restore** — export/import your entire studio as a JSON file.
- **Installable PWA** — add to your iPhone home screen for a native, standalone experience.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first theming, light/dark tokens)
- Dexie (IndexedDB) + `dexie-react-hooks` for reactive, local-first data
- Zustand for lightweight UI state (view mode, modals, filters, toasts)
- React Router (hash-based, so it works from a static file host)
- `vite-plugin-pwa` for the installable, offline-capable build

## Getting Started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). On first launch the app seeds realistic demo data (10 students, ~30 lessons, several recurring series) into IndexedDB so you can explore immediately. Clearing your browser's site data resets it.

## Build

```bash
npm run build   # type-checks, then builds to dist/, generates the service worker
npm run preview # serve the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3…) to get a real, installable-on-iPhone URL for daily use.

### GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys automatically on every push to this branch. One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**. After that the app is live at `https://<owner>.github.io/<repo>/` and redeploys on every push — no manual build/upload needed. (The workflow builds with `--base=./` so the exact same `dist/` output works whether it's served from a domain root or a GitHub Pages subpath.)

### Single-file build (Claude Artifact)

```bash
npx vite build --config vite.artifact.config.ts   # builds dist-artifact/artifact.html
```

This produces one self-contained HTML file (all JS/CSS inlined, no service worker) suitable for embedding or publishing as a Claude Artifact — everything still runs against the browser's own IndexedDB, so each viewer's schedule is private to their browser. Export Backup uses the platform's `downloads` capability when running inside an Artifact (declare `capabilities: {downloads: true}` on publish) and falls back to a normal browser download otherwise.

## Project Structure

```
src/
  components/     Shared UI primitives (Button, Dialog, fields, Badge, icons…)
  data/           Dexie database schema + demo data seeding
  services/       Business logic: conflicts, recurrence, statistics, backup, students/lessons CRUD
  store/          Zustand UI store (view mode, modals, filters, toasts)
  hooks/          Reactive data hooks, keyboard shortcuts, media queries
  features/
    calendar/     Day/Week/Month views, time grid, drag & resize, stats bar
    lessons/      Lesson form modal, detail sheet, quick-note flow
    students/     Student list, profile, form modal
    statistics/   Charts and studio-wide metrics
    settings/     Preferences, theme, backup/import
    search/       Global search overlay
  layout/         App shell, sidebar (desktop), bottom nav (mobile), quick actions
  types/          Shared TypeScript types
  utils/          Date/time/currency/color helpers
```

## Architectural Notes

- **Local-first, no backend.** All data lives in IndexedDB via Dexie; UI components subscribe with `useLiveQuery` so the schedule updates instantly and consistently after every write — no separate client-side cache to keep in sync.
- **Recurring lessons are materialized**, not computed on the fly: creating a recurring rule generates concrete `Lesson` rows up front (deduplicated against existing rows for the same student/date/time), which keeps rendering, editing, and history simple and fast.
- **Conflict detection** is a pure function over same-day lessons (`services/conflicts.ts`) used both for live warnings in the lesson form and for confirming drag/resize moves on the calendar.
- **Hash-based routing** so the built app can be hosted on any static file server (including as a home-screen PWA) without server-side rewrite rules.
- **Custom drag & resize** on the calendar uses pointer events directly (no drag-and-drop library) to keep the bundle small and the interaction fully tailored to the time-grid geometry.
