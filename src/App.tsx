import { lazy, Suspense, useEffect, useState } from 'react'
import { RouteLoading } from './layout/pageCurtain'
import { createHashRouter, createRoutesFromElements, Navigate, Route, RouterProvider, useRouteError } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { isUnlocked, LockScreen } from './components/LockScreen'
import { CalendarPage } from './features/calendar/CalendarPage'
import { StudentsListPage } from './features/students/StudentsListPage'
import { StudentProfilePage } from './features/students/StudentProfilePage'
import { SettingsPage } from './features/settings/SettingsPage'
import { PrivateArea } from './components/PrivateArea'
import { Onboarding } from './features/onboarding/Onboarding'
import { installViewTransitions } from './layout/viewTransitions'
import { logError } from './lib/errorLog'

// Theory content is large and independent of the timetable, so it loads on demand.
const loadTheory = () => import('./features/theory/TheoryPage')
const loadCurriculum = () => import('./features/curriculum/CurriculumPage')
const loadNotebook = () => import('./features/notebook/NotebookPage')
const loadMusicology = () => import('./features/musicology/MusicologyPage')
const TheoryPage = lazy(() => loadTheory().then((m) => ({ default: m.TheoryPage })))
const CurriculumPage = lazy(() => loadCurriculum().then((m) => ({ default: m.CurriculumPage })))
const NotebookPage = lazy(() => loadNotebook().then((m) => ({ default: m.NotebookPage })))
const BrainPage = lazy(() => import('./features/brain/BrainPage').then((m) => ({ default: m.BrainPage })))
const AnalyzePage = lazy(() => import('./features/analyze/AnalyzePage').then((m) => ({ default: m.AnalyzePage })))
const ResearchPage = lazy(() => import('./features/research/ResearchPage').then((m) => ({ default: m.ResearchPage })))
const ExplorePage = lazy(() => import('./features/explore/ExplorePage').then((m) => ({ default: m.ExplorePage })))
const TermsPage = lazy(() => import('./features/terms/TermsPage').then((m) => ({ default: m.TermsPage })))
const SourcesPage = lazy(() => import('./features/sources/SourcesPage').then((m) => ({ default: m.SourcesPage })))
const ToolsPage = lazy(() => import('./features/tools/ToolsPage').then((m) => ({ default: m.ToolsPage })))
const CounterpointPage = lazy(() => import('./features/counterpoint/CounterpointPage').then((m) => ({ default: m.CounterpointPage })))
const ComposePage = lazy(() => import('./features/compose/ComposePage').then((m) => ({ default: m.ComposePage })))
const ChordEarPage = lazy(() => import('./features/chordear/ChordEarPage').then((m) => ({ default: m.ChordEarPage })))
const SolfegePage = lazy(() => import('./features/solfege/SolfegePage').then((m) => ({ default: m.SolfegePage })))
const MusicologyPage = lazy(() => loadMusicology().then((m) => ({ default: m.MusicologyPage })))
const HomePage = lazy(() => import('./features/home/HomePage').then((m) => ({ default: m.HomePage })))

// Fetched once the app is idle, so the first visit to a page doesn't capture an empty page in its view transition.
if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 2500))
  idle(() => [loadTheory, loadMusicology, loadCurriculum, loadNotebook].forEach((load) => load().catch(() => {})))
  // then, one at a time, the code of every other page: a first visit then opens without the curtain
  const rest = [
    () => import('./features/home/HomePage'), () => import('./features/tools/ToolsPage'), () => import('./features/solfege/SolfegePage'),
    () => import('./features/compose/ComposePage'), () => import('./features/explore/ExplorePage'), () => import('./features/research/ResearchPage'),
    () => import('./features/sources/SourcesPage'), () => import('./features/terms/TermsPage'), () => import('./features/counterpoint/CounterpointPage'),
    () => import('./features/chordear/ChordEarPage'),
  ]
  const next = () => {
    const load = rest.shift()
    if (load) load().catch(() => {}).finally(() => idle(next))
  }
  setTimeout(() => idle(next), 4000)
}

export function App() {
  // The app renders behind the welcome glass from the start (so the frosting shows it), but stays inert until the code is right.
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [glass, setGlass] = useState(!unlocked)
  return (
    <>
      {/* The app waits, inert, under the opaque lock screen; the lock dissolves straight into it. */}
      <div inert={!unlocked}>
        <Router />
      </div>
      {unlocked && !glass && <Onboarding />}
      {glass && (
        <LockScreen
          onUnlock={() => {
            setUnlocked(true)
            // the home page replays its title as the lock dissolves over it
            dispatchEvent(new Event('app-unlocked'))
            // Fallback in case the dissolve's transitionend never fires.
            setTimeout(() => setGlass(false), 1600)
          }}
          onDone={() => setGlass(false)}
        />
      )}
    </>
  )
}

/** Shown instead of React Router's developer page when a screen throws: says what happened and offers a way back. */
function RouteError() {
  const err = useRouteError()
  const msg = err instanceof Error ? err.message : String(err)
  useEffect(() => {
    logError(err)
  }, [err])
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[var(--color-surface)] px-6 text-center">
      <p className="font-display text-[24px] font-semibold text-[var(--color-ink)]">Có lỗi khi mở trang này</p>
      <p className="max-w-md text-[14px] text-[var(--color-ink-muted)]">Dữ liệu của bạn vẫn an toàn. Thử tải lại; nếu lỗi lặp lại, hãy chụp màn hình dòng dưới đây gửi Lamar.</p>
      <code className="max-w-md break-words rounded-lg bg-[var(--color-surface-sunken)] px-3 py-2 text-[12px] text-[var(--color-ink-muted)]">{msg}</code>
      <div className="flex gap-2">
        <button onClick={() => location.reload()} className="rounded-full bg-[var(--color-ink)] px-5 py-2 text-[14px] font-medium text-[var(--color-surface)]">Tải lại</button>
        <a href="#/curriculum" onClick={() => setTimeout(() => location.reload(), 0)} className="rounded-full border border-[var(--color-border)] px-5 py-2 text-[14px] text-[var(--color-ink)]">Về giá sách</a>
      </div>
    </div>
  )
}

// A data router, so navigations can run as view transitions (see layout/viewTransitions.ts).
// A fresh launch (the lock screen shows) opens on the home page, not the timetable; a link to a page still opens that page.
if (!isUnlocked() && /^#?\/?$/.test(location.hash)) history.replaceState(null, '', '#/home')

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppShell />} errorElement={<RouteError />}>
      <Route path="/" element={<PrivateArea title="Thời khoá biểu"><CalendarPage /></PrivateArea>} />
      <Route path="/students" element={<PrivateArea title="Học viên"><StudentsListPage /></PrivateArea>} />
      <Route path="/students/:id" element={<PrivateArea title="Học viên"><StudentProfilePage /></PrivateArea>} />
      <Route path="/statistics" element={<Navigate to="/curriculum" replace />} />
      <Route path="/curriculum/:id?/:item?" element={<Suspense fallback={<RouteLoading />}><CurriculumPage /></Suspense>} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/musicology/:branch?" element={<Suspense fallback={<RouteLoading />}><MusicologyPage /></Suspense>} />
      <Route path="/notes" element={<Suspense fallback={<RouteLoading />}><NotebookPage /></Suspense>} />
      <Route path="/brain/:id?" element={<Suspense fallback={<RouteLoading />}><BrainPage /></Suspense>} />
      <Route path="/analyze/:id?" element={<Suspense fallback={<RouteLoading />}><AnalyzePage /></Suspense>} />
      <Route path="/research/:id?" element={<Suspense fallback={<RouteLoading />}><ResearchPage /></Suspense>} />
      <Route path="/explore" element={<Suspense fallback={<RouteLoading />}><ExplorePage /></Suspense>} />
      <Route path="/terms" element={<Suspense fallback={<RouteLoading />}><TermsPage /></Suspense>} />
      <Route path="/sources/:id?" element={<Suspense fallback={<RouteLoading />}><SourcesPage /></Suspense>} />
      <Route path="/tools" element={<Suspense fallback={<RouteLoading />}><ToolsPage /></Suspense>} />
      <Route path="/solfege" element={<Suspense fallback={<RouteLoading />}><SolfegePage /></Suspense>} />
      <Route path="/chord-ear" element={<Suspense fallback={<RouteLoading />}><ChordEarPage /></Suspense>} />
      <Route path="/counterpoint" element={<Suspense fallback={<RouteLoading />}><CounterpointPage /></Suspense>} />
      <Route path="/compose" element={<Suspense fallback={<RouteLoading />}><ComposePage /></Suspense>} />
      <Route path="/theory/:slug?" element={<Suspense fallback={<RouteLoading />}><TheoryPage /></Suspense>} />
      <Route path="/home" element={<Suspense fallback={<RouteLoading />}><HomePage /></Suspense>} />
    </Route>,
  ),
)
installViewTransitions(router)

function Router() {
  return <RouterProvider router={router} />
}
