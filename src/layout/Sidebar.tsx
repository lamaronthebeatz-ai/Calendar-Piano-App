import { useLayoutEffect, useRef } from 'react'
import { matchPath, NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { BrandMark, MoonIcon, PlusIcon, SearchIcon, SunIcon } from '../components/icons'
import { navItems } from './navItems'
import { useUIStore } from '../store/uiStore'
import { useSettings } from '../hooks/useLiveData'
import { applyThemeToDocument, updateSettings } from '../services/settingsService'
import { Copyright } from '../components/Copyright'
import { DonateLink } from '../features/donate/Donate'

export function Sidebar() {
  const settings = useSettings()
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)

  const { pathname } = useLocation()
  const active = navItems.findIndex((i) => matchPath({ path: i.to, end: i.end }, pathname))
  const links = useRef<(HTMLAnchorElement | null)[]>([])
  const pill = useRef<HTMLSpanElement>(null)

  // The highlight is one shared pill that glides to the chosen item instead of each item lighting up on its own.
  useLayoutEffect(() => {
    const el = pill.current
    const link = active >= 0 ? links.current[active] : null
    if (!el) return
    if (!link) {
      el.style.opacity = '0'
      return
    }
    el.style.height = `${link.offsetHeight}px`
    el.style.transform = `translateY(${link.offsetTop}px)`
    el.style.opacity = '1'
    // Enable the glide only after the first placement, so it doesn't fly in from the top on load.
    requestAnimationFrame(() => el.classList.add('is-ready'))
  }, [active])

  const isDark = settings.theme === 'dark'
  const toggleTheme = async () => {
    const next = settings.theme === 'dark' ? 'light' : settings.theme === 'light' ? 'system' : 'dark'
    await updateSettings({ theme: next })
    applyThemeToDocument(next)
  }

  return (
    <aside className="vt-sidebar relative hidden w-[260px] shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-6 lg:flex">
      {/* A faint wash of gold behind the brand, the only ornament on the rail. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_oklch,var(--color-gold)_14%,transparent),transparent_70%)]" />

      <div className="relative mb-7 flex items-center gap-3 px-2">
        <BrandMark width={36} height={36} className="shrink-0 drop-shadow-sm" />
        <div className="min-w-0">
          <p className="font-display text-[16px] font-semibold leading-[1.15] tracking-tight text-balance text-[var(--color-ink)]">Trung tâm lý thuyết âm nhạc học</p>
          <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.14em] text-[var(--color-gold)]">by Lamar</p>
        </div>
      </div>

      <button
        onClick={() => openCreateLesson()}
        className="btn-sheen relative mb-6 flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-[color-mix(in_oklch,var(--color-accent)_88%,white)] to-[var(--color-accent)] text-sm font-medium text-[var(--color-accent-ink)] shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-px active:translate-y-0"
      >
        <PlusIcon width={16} height={16} />
        Thêm buổi học
      </button>

      <p className="mb-2 px-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">Điều hướng</p>
      <nav className="relative flex flex-1 flex-col gap-0.5">
        <span ref={pill} aria-hidden className="side-pill pointer-events-none absolute inset-x-0 top-0 rounded-xl bg-[color-mix(in_oklch,var(--color-accent)_10%,var(--color-surface-raised))] opacity-0">
          <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[var(--color-gold)]" />
        </span>
        {navItems.map((item, i) => (
          <NavLink
            key={item.to}
            ref={(el) => void (links.current[i] = el)}
            data-tour={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-200',
                isActive
                  ? 'text-[var(--color-ink)]'
                  : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]',
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon width={18} height={18} className={clsx('transition-colors', isActive ? 'nav-pop text-[var(--color-accent)]' : 'group-hover:text-[var(--color-ink)]')} />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
        <button
          data-tour="search"
          onClick={() => setSearchOpen(true)}
          className="flex h-9 flex-1 items-center gap-2 rounded-xl px-2.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-ink)]"
        >
          <SearchIcon width={16} height={16} />
          Tìm kiếm
          <kbd className="ml-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-1.5 py-0.5 font-sans text-[10px] text-[var(--color-ink-faint)]">⌘K</kbd>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Đổi giao diện sáng/tối"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-gold)]"
        >
          {isDark ? <MoonIcon width={16} height={16} /> : <SunIcon width={16} height={16} />}
        </button>
      </div>
      <Copyright className="mt-3" />
      <DonateLink className="mx-auto mt-1" />
    </aside>
  )
}
