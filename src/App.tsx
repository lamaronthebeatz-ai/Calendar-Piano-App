import { Route, HashRouter, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { CalendarPage } from './features/calendar/CalendarPage'
import { StudentsListPage } from './features/students/StudentsListPage'
import { StudentProfilePage } from './features/students/StudentProfilePage'
import { StatisticsPage } from './features/statistics/StatisticsPage'
import { SettingsPage } from './features/settings/SettingsPage'

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
        </Route>
      </Routes>
    </HashRouter>
  )
}
