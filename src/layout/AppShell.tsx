import { useRef } from 'react'
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
import { useAutoHideNav } from '../hooks/useAutoHideNav'
import clsx from 'clsx'

export function AppShell() {
  useGlobalShortcuts()
  const mainRef = useRef<HTMLElement>(null)
  const navHidden = useAutoHideNav(mainRef)

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Sidebar />
      <main
        ref={mainRef}
        className={clsx('min-w-0 flex-1 overflow-hidden transition-[padding] duration-300 lg:pb-0', navHidden ? 'pb-0' : 'pb-16')}
      >
        <Outlet />
      </main>
      <BottomNav hidden={navHidden} />

      <QuickActionsSheet />
      <LessonFormModal />
      <LessonDetailSheet />
      <StudentFormModal />
      <SearchOverlay />
      <ToastHost />
    </div>
  )
}
