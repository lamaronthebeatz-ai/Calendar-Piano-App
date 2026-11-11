import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { CalendarIcon, PlusIcon, SearchIcon, UsersIcon } from '../components/icons'
import { useUIStore } from '../store/uiStore'
import './quick-fan.css'

const svg = (d: ReactNode) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)

/**
 * The "+" of the bottom bar: the tools that used to sit at the top of the Theory page and the quick schedule actions
 * fly out of it in two arched rows, each lighting up as it lands. The items' resting place is their normal style —
 * the animation only brings them there, so they show even when it does not run (Safari, reduced motion).
 */
export function QuickActionsSheet() {
  const open = useUIStore((s) => s.quickActionsOpen)
  const setOpen = useUIStore((s) => s.setQuickActionsOpen)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openCreateStudent = useUIStore((s) => s.openCreateStudent)
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const navigate = useNavigate()
  const [shown, setShown] = useState(open)
  const [prevOpen, setPrevOpen] = useState(open)
  if (prevOpen !== open) {
    setPrevOpen(open)
    if (open) setShown(true)
  }
  // stay mounted while the items fly back in
  useEffect(() => {
    if (open || !shown) return
    const t = window.setTimeout(() => setShown(false), 240)
    return () => window.clearTimeout(t)
  }, [open, shown])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  if (!shown) return null

  const go = (to: string) => () => navigate(to)
  // outer row first, then the row nearest the button
  const items: { label: string; icon: ReactNode; run: () => void }[] = [
    { label: 'Solfège', icon: <span className="qf-glyph">𝄞</span>, run: go('/solfege') },
    { label: 'Nghe hợp âm', icon: svg(<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>), run: go('/chord-ear') },
    { label: 'Giải phức điệu', icon: <span className="qf-glyph is-small">𝄪</span>, run: go('/counterpoint') },
    { label: 'Bảng tính', icon: <span className="qf-glyph is-small">♫</span>, run: go('/tools') },
    { label: 'Tìm & đi nhanh', icon: <SearchIcon width={20} height={20} />, run: () => setSearchOpen(true) },
    { label: 'Soạn nhạc', icon: svg(<><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z" /><path d="M13.5 6.5l4 4" /></>), run: go('/compose') },
    { label: 'Thêm buổi học', icon: <CalendarIcon width={20} height={20} />, run: () => (navigate('/'), openCreateLesson()) },
    { label: 'Thêm học viên', icon: <UsersIcon width={20} height={20} />, run: () => openCreateStudent() },
  ]

  // the fan opens from the "+" itself (bottom middle when the bar is not there)
  const plus = document.querySelector('[data-tour="quick"]')?.getBoundingClientRect()
  const ox = plus?.width ? plus.left + plus.width / 2 : window.innerWidth / 2
  const oy = plus?.width ? plus.top + plus.height / 2 : window.innerHeight - 64
  const w = Math.min(92, (window.innerWidth - 24) / 4)

  return createPortal(
    <div className={`qf-root${open ? '' : ' is-closing'}`} role="dialog" aria-modal="true" aria-label="Thao tác nhanh" style={{ '--ox': `${ox}px`, '--oy': `${oy}px` } as CSSProperties}>
      <button className="qf-scrim" aria-label="Đóng" tabIndex={-1} onClick={() => setOpen(false)} />
      {items.map((it, i) => {
        const row = i < 4 ? 1 : 0
        const col = (i % 4) - 1.5
        // two arches: the side items sit lower, like the ribs of an opened fan
        const x = col * w
        const y = -(row ? 222 : 118) + col * col * 12
        return (
          <button
            key={it.label}
            className="qf-item"
            style={{ '--x': `${x}px`, '--y': `${y}px`, '--r': `${col * 24}deg`, '--d': `${(row * 2 + Math.abs(col) - 0.5) * 38}ms` } as CSSProperties}
            onClick={() => {
              setOpen(false)
              it.run()
            }}
          >
            <span className="qf-orb">{it.icon}</span>
            <span className="qf-label">{it.label}</span>
          </button>
        )
      })}
      <button className="qf-close btn-gold" aria-label="Đóng thao tác nhanh" autoFocus onClick={() => setOpen(false)}>
        <PlusIcon width={24} height={24} />
      </button>
    </div>,
    document.body,
  )
}
