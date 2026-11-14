import { useLayoutEffect, useRef } from 'react'
import { matchPath, NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { PlusIcon } from '../components/icons'
import { navItems } from './navItems'
import { useUIStore } from '../store/uiStore'
import '../phn.css'
import './bottom-nav.css'

const barItems = navItems.filter((i) => !('desktop' in i))

export function BottomNav({ hidden = false }: { hidden?: boolean }) {
  const setQuickActionsOpen = useUIStore((s) => s.setQuickActionsOpen)
  const { pathname } = useLocation()
  const active = barItems.findIndex((i) => matchPath({ path: i.to, end: i.end }, pathname))
  const links = useRef<(HTMLAnchorElement | null)[]>([])
  const blob = useRef<HTMLSpanElement>(null)
  const lastX = useRef<number | null>(null)

  // One gold bar travels between the tabs: it stretches like a drop of liquid on the way and settles with a squash.
  useLayoutEffect(() => {
    const bar = blob.current
    if (!bar) return
    const place = (animate: boolean) => {
      const link = active >= 0 ? links.current[active] : null
      if (!link) {
        bar.style.opacity = '0'
        lastX.current = null
        return
      }
      const x = link.offsetLeft + link.offsetWidth / 2 - bar.offsetWidth / 2
      const from = lastX.current
      bar.style.opacity = '1'
      bar.style.transform = `translateX(${x}px)`
      lastX.current = x
      if (!animate || from == null || from === x || matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const stretch = Math.min(3.4, 1 + Math.abs(x - from) / 36)
      bar.animate(
        [
          { transform: `translateX(${from}px) scaleX(1)` },
          { transform: `translateX(${from + (x - from) * 0.55}px) scaleX(${stretch})`, offset: 0.45 },
          { transform: `translateX(${x}px) scaleX(0.8)`, offset: 0.82 },
          { transform: `translateX(${x}px) scaleX(1)` },
        ],
        { duration: 560, easing: 'cubic-bezier(0.3, 0.7, 0.2, 1)' },
      )
    }
    place(true)
    const ro = new ResizeObserver(() => place(false))
    if (bar.parentElement) ro.observe(bar.parentElement)
    return () => ro.disconnect()
  }, [active])

  return (
    <nav
      className={clsx(
        // brand "Phòng hoà nhạc": words and thin icons on the stage, a gold dot over the current place, no glass
        'vt-bottom-nav phn phn-tabbar fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden',
        // Slide fully off-screen, including the raised "+" button above the bar.
        hidden && 'translate-y-[calc(100%+1.75rem)]',
      )}
      inert={hidden}
      aria-label="Điều hướng chính"
    >
      <span ref={blob} aria-hidden className="nav-blob tb-dot pointer-events-none absolute left-0 top-[7px] opacity-0" />
      {barItems.slice(0, 3).map((item, i) => (
        <NavItem key={item.to} item={item} ref={(el) => void (links.current[i] = el)} />
      ))}

      <div className="relative flex w-14 shrink-0 items-center justify-center">
        <button
          data-tour="quick"
          onClick={() => setQuickActionsOpen(true)}
          aria-label="Thêm nhanh"
          className="tb-plus"
        >
          <PlusIcon width={22} height={22} />
        </button>
      </div>

      {barItems.slice(3).map((item, i) => (
        <NavItem key={item.to} item={item} ref={(el) => void (links.current[i + 3] = el)} />
      ))}
    </nav>
  )
}

function NavItem({ item, ref }: { item: (typeof navItems)[number]; ref: (el: HTMLAnchorElement | null) => void }) {
  return (
    <NavLink
      ref={ref}
      to={item.to}
      data-tour={item.to}
      end={item.end}
      className={({ isActive }) =>
        clsx(
          // Sized by their labels ("Âm nhạc học" is longer than the rest), sharing the leftover width equally.
          'tb-item relative flex flex-auto flex-col items-center justify-center gap-1.5 whitespace-nowrap px-0.5 pb-2.5 pt-4 transition-colors',
          isActive ? 'is-on' : '',
        )
      }
    >
      {({ isActive }) => (
        <>
          <item.icon width={20} height={20} className={clsx('tb-icon', isActive && 'nav-pop')} />
          <span className="tb-label">{item.label}</span>
        </>
      )}
    </NavLink>
  )
}
