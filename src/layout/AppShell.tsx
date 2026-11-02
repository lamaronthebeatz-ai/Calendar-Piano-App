import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from '../components/icons'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { QuickActionsSheet } from './QuickActionsSheet'
import { ToastHost } from '../components/ToastHost'
import { LessonFormModal } from '../features/lessons/LessonFormModal'
import { LessonDetailSheet } from '../features/lessons/LessonDetailSheet'
import { StudentFormModal } from '../features/students/StudentFormModal'
import { SearchOverlay } from '../features/search/SearchOverlay'
import { BookOpenLayer } from '../features/curriculum/BookOpen'
import { Assistant } from '../features/assistant/Assistant'
import { DonateDialog } from '../features/donate/Donate'
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
  const autoHidden = useAutoHideNav(mainRef)
  // Each section fades in as a whole; moving within a section (articles, a student's profile) keeps its own transitions.
  // Where view transitions run (layout/viewTransitions.ts) they animate every page change instead.
  const { pathname } = useLocation()
  const section = pathname.split('/')[1]
  // the full-screen musicology map needs the whole height: the bottom bar stays out of the way there
  const navHidden = autoHidden || pathname === '/musicology/ban-do'
  // the home page runs edge to edge under the tab bar, so the bar hiding never resizes it mid-scroll
  const fullBleed = pathname === '/home'
  useCardGlow()
  // Desktop navigation is a drawer behind the Lamar mark in the top-left corner, so every page gets the full width.
  const [railOpen, setRailOpen] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close the drawer whenever the page changes
    setRailOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!railOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setRailOpen(false)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [railOpen])
  // on the home page the mark is the only way in on every screen: the tab bar stays out of the gallery
  useEffect(() => {
    if (fullBleed) document.documentElement.dataset.route = 'home'
    else delete document.documentElement.dataset.route
  }, [fullBleed])
  // the reader has its own top bar; there the mark would sit on its buttons
  const reading = /^\/curriculum\/[^/]+/.test(pathname)
  useEdgeSwipeBack(mainRef)
  useRubberBand(mainRef)

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      {!reading && (
        <button
          onClick={() => setRailOpen(true)}
          aria-label="Mở menu"
          aria-expanded={railOpen}
          className={clsx('rail-mark', fullBleed ? 'flex' : 'hidden lg:flex', railOpen && 'is-hidden')}
        >
          <BrandMark width={30} height={30} />
          <span className="rail-mark-bars" aria-hidden><i /><i /></span>
        </button>
      )}
      <div className={clsx('rail-scrim', fullBleed ? 'block' : 'hidden lg:block', railOpen && 'is-open')} onClick={() => setRailOpen(false)} aria-hidden />
      <Sidebar open={railOpen} onClose={() => setRailOpen(false)} everywhere={fullBleed} />
      <main
        ref={mainRef}
        className={clsx('app-main relative min-w-0 flex-1 overflow-hidden lg:pb-0', fullBleed ? 'pb-0' : clsx('transition-[padding] duration-300', navHidden ? 'pb-0' : 'pb-16'))}
      >
        <div key={section} className={clsx('vt-page h-full', !viewTransitionsOn() && 'page-enter')}>
          <Outlet />
        </div>
      </main>
      <BottomNav hidden={navHidden || fullBleed} />

      <QuickActionsSheet />
      <LessonFormModal />
      <LessonDetailSheet />
      <StudentFormModal />
      <SearchOverlay />
      <BookOpenLayer />
      <Assistant />
      <DonateDialog />
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
