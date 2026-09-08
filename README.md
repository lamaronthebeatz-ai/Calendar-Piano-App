# Piano Schedule

**Private Piano Teaching Manager** — a fast, local-first weekly timetable for private piano teachers. Build out a fixed Mon–Sun schedule for your students and manage it from one calm, professional interface that works equally well on iPhone and desktop.

## Features

- **A single fixed weekly timetable** (Monday–Sunday, or Sunday–Saturday) with a 15-minute time grid and a live current-time indicator — no dates, no calendar navigation. Every lesson you add repeats every week indefinitely.
- **Drag to move, drag edges to resize** lessons across days on desktop; tap-to-view and long-press-to-edit on mobile.
- **Conflict detection** — live inline warnings while scheduling, plus a confirmation step before double-booking a time slot.
- **Add a lesson to multiple days at once** (e.g. Tue + Thu, 15:00–16:00) in a single step.
- **Student management** — profiles with contact info, their weekly schedule, estimated weekly/monthly revenue, and per-lesson notes.
- **Weekly dashboard** — lessons, teaching hours, students, and estimated income, all per week.
- **Statistics page** with simple charts (lessons by day of week, hours by day of week, students by weekly lesson count).
- **Global search, filters, quick-add menu, and keyboard shortcuts** (`N` new lesson, `E` edit selected, `/` search).
- **Light & dark themes**, carefully tuned (not simple inversion), persisted per device.
- **Local-first storage** via IndexedDB (Dexie) — your timetable works fully offline and survives reloads.
- **Backup & restore** — export/import your entire studio as a JSON file.
- **Installable PWA** — add to your iPhone home screen for a native, standalone experience.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first theming, light/dark tokens)
- Dexie (IndexedDB) + `dexie-react-hooks` for reactive, local-first data
- Zustand for lightweight UI state (modals, filters, toasts)
- React Router (hash-based, so it works from a static file host)
- `vite-plugin-pwa` for the installable, offline-capable build

## Getting Started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). On first launch the app seeds a realistic demo timetable (10 students, ~13 fixed weekly lessons) into IndexedDB so you can explore immediately. Clearing your browser's site data resets it.

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
  services/       Business logic: conflicts, timetable CRUD, statistics, backup, students
  store/          Zustand UI store (modals, filters, toasts)
  hooks/          Reactive data hooks, keyboard shortcuts, media queries
  features/
    calendar/     The fixed weekly timetable grid, time axis, drag & resize, stats bar
    lessons/      Lesson form modal (student/day(s)/time/location/type/note), detail sheet
    students/     Student list, profile (weekly schedule + stats), form modal
    statistics/   Charts and studio-wide metrics
    settings/     Preferences, theme, backup/import
    search/       Global search overlay
  layout/         App shell, sidebar (desktop), bottom nav (mobile), quick actions
  types/          Shared TypeScript types
  utils/          Time/currency/color/weekday helpers
```

## Architectural Notes

- **Local-first, no backend.** All data lives in IndexedDB via Dexie; UI components subscribe with `useLiveQuery` so the timetable updates instantly and consistently after every write — no separate client-side cache to keep in sync.
- **The timetable is dateless by design.** A `TimetableSlot` is keyed by `dayOfWeek` (0–6) and start/end time, not a calendar date — there is no per-occurrence history, status, or completion tracking. This matches a teacher who manages one fixed weekly routine rather than a dated event calendar.
- **Conflict detection** is a pure function over same-weekday slots (`services/conflicts.ts`) used both for live warnings in the lesson form and for confirming drag/resize moves on the grid.
- **Hash-based routing** so the built app can be hosted on any static file server (including as a home-screen PWA) without server-side rewrite rules.
- **Custom drag & resize** on the grid uses pointer events directly (no drag-and-drop library) to keep the bundle small and the interaction fully tailored to the time-grid geometry.
