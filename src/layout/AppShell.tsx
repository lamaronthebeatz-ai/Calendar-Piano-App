import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { QuickActionsSheet } from './QuickActionsSheet'
import { ToastHost } from '../components/ToastHost'
import { LessonFormModal } from '../features/lessons/LessonFormModal'
import { LessonDetailSheet } from '../features/lessons/LessonDetailSheet'
import { StudentFormModal } from '../features/students/StudentFormModal'
import { SearchOverlay } from '../features/search/SearchOverlay'
import { useGlobalShortcuts } from '../hooks/useGlobalShortcuts'

export function AppShell() {
  useGlobalShortcuts()

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-hidden pb-16 lg:pb-0">
        <Outlet />
      </main>
      <BottomNav />

      <QuickActionsSheet />
      <LessonFormModal />
      <LessonDetailSheet />
      <StudentFormModal />
      <SearchOverlay />
      <ToastHost />
    </div>
  )
}
