import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { CalendarIcon, PlusIcon, SearchIcon, UsersIcon } from '../components/icons'
import { useUIStore } from '../store/uiStore'
import './quick-sheet.css'
import '../phn.css'

const svg = (d: ReactNode) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)

/**
 * The "+" of the bottom bar (brand "Phòng hoà nhạc"): a sheet rises from the bottom with the tools and the quick
 * schedule actions as rows — no bubbles. The sheet's resting place is its normal style; the animation only brings
 * it there, so it shows even when the animation does not run (Safari, reduced motion).
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
  // stay mounted while the sheet slides away
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
  const groups: { title: string; items: { label: string; sub: string; icon: ReactNode; run: () => void }[] }[] = [
    {
      title: 'Công cụ',
      items: [
        { label: 'Tìm & đi nhanh', sub: 'Bài, sách, trang, thao tác', icon: <SearchIcon width={20} height={20} />, run: () => setSearchOpen(true) },
        { label: 'Soạn nhạc', sub: 'Viết bản nhạc trên giấy trắng', icon: svg(<><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z" /><path d="M13.5 6.5l4 4" /></>), run: go('/compose') },
        { label: 'Giải phức điệu', sub: 'Viết và chấm bè đối vị', icon: <span className="qs-glyph is-x">𝄪</span>, run: go('/counterpoint') },
        { label: 'Nghe hợp âm', sub: 'Mở micro, máy gọi tên hợp âm', icon: svg(<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>), run: go('/chord-ear') },
        { label: 'Solfège', sub: 'Đoán nốt, đoán quãng', icon: <span className="qs-glyph">𝄞</span>, run: go('/solfege') },
        { label: 'Bảng tính', sub: 'Vòng quãng năm, hợp âm, jazz', icon: <span className="qs-glyph is-small">♫</span>, run: go('/tools') },
      ],
    },
    {
      title: 'Lịch dạy',
      items: [
        { label: 'Thêm buổi học', sub: 'Vào thời khoá biểu', icon: <CalendarIcon width={20} height={20} />, run: () => (navigate('/'), openCreateLesson()) },
        { label: 'Thêm học viên', sub: 'Hồ sơ học viên mới', icon: <UsersIcon width={20} height={20} />, run: () => openCreateStudent() },
      ],
    },
  ]

  return createPortal(
    <div className={`qs-root phn${open ? '' : ' is-closing'}`} role="dialog" aria-modal="true" aria-label="Thao tác nhanh">
      <button className="qs-scrim" aria-label="Đóng" tabIndex={-1} onClick={() => setOpen(false)} />
      <div className="qs-sheet">
        <span className="qs-grab" aria-hidden />
        {groups.map((g) => (
          <section key={g.title} aria-label={g.title}>
            <p className="phn-eyebrow qs-head">{g.title}</p>
            <ul className="phn-rows">
              {g.items.map((it) => (
                <li key={it.label}>
                  <button
                    type="button"
                    aria-label={it.label}
                    className="phn-row qs-row"
                    onClick={() => {
                      setOpen(false)
                      it.run()
                    }}
                  >
                    <span className="phn-row-icon qs-icon" aria-hidden>{it.icon}</span>
                    <span className="min-w-0">
                      <span className="phn-row-title">{it.label}</span>
                      <span className="phn-row-sub">{it.sub}</span>
                    </span>
                    <span className="phn-row-end" aria-hidden>›</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <button className="qs-close" aria-label="Đóng thao tác nhanh" autoFocus onClick={() => setOpen(false)}>
          <PlusIcon width={22} height={22} />
        </button>
      </div>
    </div>,
    document.body,
  )
}
