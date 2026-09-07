import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { CalendarIcon, ChartIcon, MoonIcon, PlusIcon, SearchIcon, SettingsIcon, SunIcon, UsersIcon } from '../components/icons'
import { useUIStore } from '../store/uiStore'
import { useSettings } from '../hooks/useLiveData'
import { applyThemeToDocument, updateSettings } from '../services/settingsService'

const navItems = [
  { to: '/', label: 'Calendar', icon: CalendarIcon, end: true },
  { to: '/students', label: 'Students', icon: UsersIcon, end: false },
  { to: '/statistics', label: 'Statistics', icon: ChartIcon, end: false },
  { to: '/settings', label: 'Settings', icon: SettingsIcon, end: false },
]

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
    <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-6 lg:flex">
      <div className="mb-8 px-2">
        <p className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">Piano Schedule</p>
        <p className="text-[12px] text-[var(--color-ink-muted)]">Private Piano Teaching Manager</p>
      </div>

      <button
        onClick={() => openCreateLesson()}
        className="mb-5 flex h-10 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] text-sm font-medium text-[var(--color-accent-ink)] transition-opacity hover:opacity-90"
      >
        <PlusIcon width={16} height={16} />
        New Lesson
      </button>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors',
                isActive
                  ? 'bg-[var(--color-surface-sunken)] text-[var(--color-ink)]'
                  : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]',
              )
            }
          >
            <item.icon width={18} height={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-1 border-t border-[var(--color-border)] pt-4">
        <button
          onClick={() => setSearchOpen(true)}
          className="flex h-9 flex-1 items-center gap-2 rounded-lg px-2.5 text-[13px] text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]"
        >
          <SearchIcon width={16} height={16} />
          Search
          <kbd className="ml-auto rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] text-[var(--color-ink-faint)]">/</kbd>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]"
        >
          {isDark ? <MoonIcon width={16} height={16} /> : <SunIcon width={16} height={16} />}
        </button>
      </div>
    </aside>
  )
}
