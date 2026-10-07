import { lazy, Suspense } from 'react'
import { Route, HashRouter, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { CalendarPage } from './features/calendar/CalendarPage'
import { StudentsListPage } from './features/students/StudentsListPage'
import { StudentProfilePage } from './features/students/StudentProfilePage'
import { StatisticsPage } from './features/statistics/StatisticsPage'
import { SettingsPage } from './features/settings/SettingsPage'

// Theory content is large and independent of the timetable, so it loads on demand.
const TheoryPage = lazy(() => import('./features/theory/TheoryPage').then((m) => ({ default: m.TheoryPage })))

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/students" element={<StudentsListPage />} />
          <Route path="/students/:id" element={<StudentProfilePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/theory/:slug?" element={<Suspense><TheoryPage /></Suspense>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
