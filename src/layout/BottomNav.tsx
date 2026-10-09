import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { PlusIcon } from '../components/icons'
import { navItems } from './navItems'
import { useUIStore } from '../store/uiStore'

export function BottomNav({ hidden = false }: { hidden?: boolean }) {
  const setQuickActionsOpen = useUIStore((s) => s.setQuickActionsOpen)

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]/95 backdrop-blur pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden',
        // Slide fully off-screen, including the raised "+" button above the bar.
        hidden && 'translate-y-[calc(100%+1.75rem)]',
      )}
      inert={hidden}
      aria-label="Điều hướng chính"
    >
      {navItems.slice(0, 2).map((item) => (
        <NavItem key={item.to} item={item} />
      ))}

      <div className="relative flex w-16 items-center justify-center">
        <button
          onClick={() => setQuickActionsOpen(true)}
          aria-label="Thêm nhanh"
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
