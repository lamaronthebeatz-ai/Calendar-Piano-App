import { useNavigate } from 'react-router-dom'
import { Dialog } from '../components/Dialog'
import { CalendarIcon, UsersIcon } from '../components/icons'
import { useUIStore } from '../store/uiStore'

export function QuickActionsSheet() {
  const open = useUIStore((s) => s.quickActionsOpen)
  const setOpen = useUIStore((s) => s.setQuickActionsOpen)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openCreateStudent = useUIStore((s) => s.openCreateStudent)
  const navigate = useNavigate()

  const actions = [
    {
      label: 'Thêm buổi học',
      description: 'Thêm một buổi học cố định hằng tuần',
      icon: CalendarIcon,
      onClick: () => {
        navigate('/')
        openCreateLesson()
      },
    },
    {
      label: 'Thêm học viên',
      description: 'Tạo hồ sơ học viên mới',
      icon: UsersIcon,
      onClick: () => openCreateStudent(),
    },
  ]

  return (
    <Dialog open={open} onClose={() => setOpen(false)} title="Thêm nhanh" width="sm">
      <div className="space-y-1.5">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => {
              setOpen(false)
              action.onClick()
            }}
            className="flex w-full items-center gap-3.5 rounded-xl border border-[var(--color-border)] p-3.5 text-left transition-colors hover:bg-[var(--color-surface-sunken)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-sunken)] text-[var(--color-ink)]">
              <action.icon width={19} height={19} />
            </div>
            <div>
              <p className="text-[14px] font-medium text-[var(--color-ink)]">{action.label}</p>
              <p className="text-[12.5px] text-[var(--color-ink-muted)]">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </Dialog>
  )
}
