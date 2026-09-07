import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { CalendarIcon, ChartIcon, PlusIcon, SettingsIcon, UsersIcon } from '../components/icons'
import { useUIStore } from '../store/uiStore'

const navItems = [
  { to: '/', label: 'Calendar', icon: CalendarIcon, end: true },
  { to: '/students', label: 'Students', icon: UsersIcon, end: false },
  { to: '/statistics', label: 'Stats', icon: ChartIcon, end: false },
  { to: '/settings', label: 'Settings', icon: SettingsIcon, end: false },
]

export function BottomNav() {
  const setQuickActionsOpen = useUIStore((s) => s.setQuickActionsOpen)

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]/95 backdrop-blur pb-[env(safe-area-inset-bottom)] lg:hidden"
      aria-label="Primary"
    >
      {navItems.slice(0, 2).map((item) => (
        <NavItem key={item.to} item={item} />
      ))}

      <div className="relative flex w-16 items-center justify-center">
        <button
          onClick={() => setQuickActionsOpen(true)}
          aria-label="Quick add"
          className="absolute -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] shadow-[var(--shadow-float)] active:scale-95 transition-transform"
        >
          <PlusIcon width={24} height={24} />
        </button>
      </div>

      {navItems.slice(2).map((item) => (
        <NavItem key={item.to} item={item} />
      ))}
    </nav>
  )
}

function NavItem({ item }: { item: (typeof navItems)[number] }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        clsx(
          'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
          isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink-faint)]',
        )
      }
    >
      <item.icon width={21} height={21} />
      {item.label}
    </NavLink>
  )
}
