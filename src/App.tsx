import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { createHashRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { isUnlocked, LockScreen } from './components/LockScreen'
import { Intro } from './components/Intro'
import { CalendarPage } from './features/calendar/CalendarPage'
import { StudentsListPage } from './features/students/StudentsListPage'
import { StudentProfilePage } from './features/students/StudentProfilePage'
import { SettingsPage } from './features/settings/SettingsPage'
import { PrivateArea } from './components/PrivateArea'
import { Onboarding } from './features/onboarding/Onboarding'
import { tourSeen } from './features/onboarding/tour'
import { openDonate } from './features/donate/store'
import { installViewTransitions } from './layout/viewTransitions'

// Theory content is large and independent of the timetable, so it loads on demand.
const loadTheory = () => import('./features/theory/TheoryPage')
const loadCurriculum = () => import('./features/curriculum/CurriculumPage')
const loadNotebook = () => import('./features/notebook/NotebookPage')
const loadMusicology = () => import('./features/musicology/MusicologyPage')
const TheoryPage = lazy(() => loadTheory().then((m) => ({ default: m.TheoryPage })))
const CurriculumPage = lazy(() => loadCurriculum().then((m) => ({ default: m.CurriculumPage })))
const NotebookPage = lazy(() => loadNotebook().then((m) => ({ default: m.NotebookPage })))
const ToolsPage = lazy(() => import('./features/tools/ToolsPage').then((m) => ({ default: m.ToolsPage })))
const MusicologyPage = lazy(() => loadMusicology().then((m) => ({ default: m.MusicologyPage })))

// Fetched once the app is idle, so the first visit to a page doesn't capture an empty page in its view transition.
if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 2500))
  idle(() => [loadTheory, loadMusicology, loadCurriculum, loadNotebook].forEach((load) => load().catch(() => {})))
}

export function App() {
  // The app renders behind the welcome glass from the start (so the frosting shows it), but stays inert until the code is right.
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [glass, setGlass] = useState(!unlocked)
  // The opening intro plays whenever the app opens on the lock screen.
  const [intro, setIntro] = useState(() => !unlocked && !matchMedia('(prefers-reduced-motion: reduce)').matches)
  // Right after the code is entered (not on a reload of an unlocked session), the support card greets once —
  // except on the very first visit, which belongs to the guided tour.
  const justUnlocked = useRef(false)
  useEffect(() => {
    if (!unlocked || glass || !justUnlocked.current || !tourSeen()) return
    justUnlocked.current = false
    const t = setTimeout(openDonate, 900)
    return () => clearTimeout(t)
  }, [unlocked, glass])
  return (
    <>
      {/* Blurred directly as well as through the glass's backdrop filter, which some browsers don't paint. */}
      <div inert={!unlocked} className={clsx('app-veil', !unlocked && 'is-veiled')}>
        <Router />
      </div>
      {unlocked && !glass && <Onboarding />}
      {glass && (
        <LockScreen
          onUnlock={() => {
            justUnlocked.current = true
            setUnlocked(true)
            // Fallback in case the lift's transitionend never fires.
            setTimeout(() => setGlass(false), 1400)
          }}
          onDone={() => setGlass(false)}
          armed={!intro}
        />
      )}
      {glass && intro && <Intro onDone={() => setIntro(false)} />}
    </>
  )
}

// A data router, so navigations can run as view transitions (see layout/viewTransitions.ts).
const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppShell />}>
      <Route path="/" element={<PrivateArea title="Thời khoá biểu"><CalendarPage /></PrivateArea>} />
      <Route path="/students" element={<PrivateArea title="Học viên"><StudentsListPage /></PrivateArea>} />
      <Route path="/students/:id" element={<PrivateArea title="Học viên"><StudentProfilePage /></PrivateArea>} />
      <Route path="/statistics" element={<Navigate to="/curriculum" replace />} />
      <Route path="/curriculum/:id?/:item?" element={<Suspense><CurriculumPage /></Suspense>} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/musicology/:branch?" element={<Suspense><MusicologyPage /></Suspense>} />
      <Route path="/notes" element={<Suspense><NotebookPage /></Suspense>} />
      <Route path="/tools" element={<Suspense><ToolsPage /></Suspense>} />
      <Route path="/theory/:slug?" element={<Suspense><TheoryPage /></Suspense>} />
    </Route>,
  ),
)
installViewTransitions(router)

function Router() {
  return <RouterProvider router={router} />
}
