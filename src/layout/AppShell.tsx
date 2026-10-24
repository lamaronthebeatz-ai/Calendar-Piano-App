import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { QuickActionsSheet } from './QuickActionsSheet'
import { ToastHost } from '../components/ToastHost'
import { LessonFormModal } from '../features/lessons/LessonFormModal'
import { LessonDetailSheet } from '../features/lessons/LessonDetailSheet'
import { StudentFormModal } from '../features/students/StudentFormModal'
import { SearchOverlay } from '../features/search/SearchOverlay'
import { BookOpenLayer } from '../features/curriculum/BookOpen'
import { useGlobalShortcuts } from '../hooks/useGlobalShortcuts'
import { useAutoHideNav } from '../hooks/useAutoHideNav'
import clsx from 'clsx'
import { useEdgeSwipeBack } from '../hooks/useEdgeSwipeBack'
import { useRubberBand } from '../hooks/useRubberBand'
import { viewTransitionsOn } from './viewTransitions'
import './motion-nav.css'

export function AppShell() {
  useGlobalShortcuts()
  const mainRef = useRef<HTMLElement>(null)
  const navHidden = useAutoHideNav(mainRef)
  // Each section fades in as a whole; moving within a section (articles, a student's profile) keeps its own transitions.
  // Where view transitions run (layout/viewTransitions.ts) they animate every page change instead.
  const section = useLocation().pathname.split('/')[1]
  useCardGlow()
  useEdgeSwipeBack(mainRef)
  useRubberBand(mainRef)

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Sidebar />
      <main
        ref={mainRef}
        className={clsx('relative min-w-0 flex-1 overflow-hidden transition-[padding] duration-300 lg:pb-0', navHidden ? 'pb-0' : 'pb-16')}
      >
        <div key={section} className={clsx('vt-page h-full', !viewTransitionsOn() && 'page-enter')}>
          <Outlet />
        </div>
      </main>
      <BottomNav hidden={navHidden} />

      <QuickActionsSheet />
      <LessonFormModal />
      <LessonDetailSheet />
      <StudentFormModal />
      <SearchOverlay />
      <BookOpenLayer />
      <ToastHost />
    </div>
  )
}

/** Feeds the pointer position to the card under it, so its light (see .theory-card in index.css) follows the cursor. */
function useCardGlow() {
  useEffect(() => {
    if (!matchMedia('(hover: hover)').matches) return
    const move = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.theory-card') as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    addEventListener('pointermove', move, { passive: true })
    return () => removeEventListener('pointermove', move)
  }, [])
}
