import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { BrandMark, MoonIcon, PlusIcon, SearchIcon, SunIcon } from '../components/icons'
import { navItems } from './navItems'
import { useUIStore } from '../store/uiStore'
import { useSettings } from '../hooks/useLiveData'
import { applyThemeToDocument, updateSettings } from '../services/settingsService'

export function Sidebar() {
  const settings = useSettings()
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)

  const isDark = settings.theme === 'dark'
  const toggleTheme = async () => {
    const next = settings.theme === 'dark' ? 'light' : settings.theme === 'light' ? 'system' : 'dark'
    await updateSettings({ theme: next })
    applyThemeToDocument(next)
  }

  return (
    <aside className="relative hidden w-[260px] shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-6 lg:flex">
      {/* A faint wash of gold behind the brand, the only ornament on the rail. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_oklch,var(--color-gold)_14%,transparent),transparent_70%)]" />

      <div className="relative mb-7 flex items-center gap-3 px-2">
        <BrandMark width={36} height={36} className="shrink-0 drop-shadow-sm" />
        <div className="min-w-0">
          <p className="font-display text-[18px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">Lịch Dạy Piano</p>
          <p className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--color-gold)]">Studio & thư viện</p>
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
      <nav className="flex flex-1 flex-col gap-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-all duration-200',
                isActive
                  ? 'bg-[color-mix(in_oklch,var(--color-accent)_10%,var(--color-surface-raised))] text-[var(--color-ink)]'
                  : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]',
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={clsx(
                    'absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[var(--color-gold)] transition-all duration-300',
                    isActive ? 'opacity-100' : 'scale-y-0 opacity-0',
                  )}
                />
                <item.icon width={18} height={18} className={clsx('transition-colors', isActive ? 'text-[var(--color-accent)]' : 'group-hover:text-[var(--color-ink)]')} />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
        <button
          onClick={() => setSearchOpen(true)}
          className="flex h-9 flex-1 items-center gap-2 rounded-xl px-2.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-ink)]"
        >
          <SearchIcon width={16} height={16} />
          Tìm kiếm
          <kbd className="ml-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-1.5 py-0.5 font-sans text-[10px] text-[var(--color-ink-faint)]">/</kbd>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Đổi giao diện sáng/tối"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-gold)]"
        >
          {isDark ? <MoonIcon width={16} height={16} /> : <SunIcon width={16} height={16} />}
        </button>
      </div>
    </aside>
  )
}
