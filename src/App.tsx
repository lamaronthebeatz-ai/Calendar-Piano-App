import { lazy, Suspense, useState } from 'react'
import clsx from 'clsx'
import { Navigate, Route, HashRouter, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { isUnlocked, LockScreen } from './components/LockScreen'
import { CalendarPage } from './features/calendar/CalendarPage'
import { StudentsListPage } from './features/students/StudentsListPage'
import { StudentProfilePage } from './features/students/StudentProfilePage'
import { SettingsPage } from './features/settings/SettingsPage'
import { PrivateArea } from './components/PrivateArea'
import { Onboarding } from './features/onboarding/Onboarding'

// Theory content is large and independent of the timetable, so it loads on demand.
const TheoryPage = lazy(() => import('./features/theory/TheoryPage').then((m) => ({ default: m.TheoryPage })))

const CurriculumPage = lazy(() => import('./features/curriculum/CurriculumPage').then((m) => ({ default: m.CurriculumPage })))

const MusicologyPage = lazy(() => import('./features/musicology/MusicologyPage').then((m) => ({ default: m.MusicologyPage })))

export function App() {
  // The app renders behind the welcome glass from the start (so the frosting shows it), but stays inert until the code is right.
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [glass, setGlass] = useState(!unlocked)
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
            setUnlocked(true)
            // Fallback in case the lift's transitionend never fires.
            setTimeout(() => setGlass(false), 1400)
          }}
          onDone={() => setGlass(false)}
        />
      )}
    </>
  )
}

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<PrivateArea title="Thời khoá biểu"><CalendarPage /></PrivateArea>} />
          <Route path="/students" element={<PrivateArea title="Học viên"><StudentsListPage /></PrivateArea>} />
          <Route path="/students/:id" element={<PrivateArea title="Học viên"><StudentProfilePage /></PrivateArea>} />
          <Route path="/statistics" element={<Navigate to="/curriculum" replace />} />
          <Route path="/curriculum/:id?/:item?" element={<Suspense><CurriculumPage /></Suspense>} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/musicology/:branch?" element={<Suspense><MusicologyPage /></Suspense>} />
          <Route path="/theory/:slug?" element={<Suspense><TheoryPage /></Suspense>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
