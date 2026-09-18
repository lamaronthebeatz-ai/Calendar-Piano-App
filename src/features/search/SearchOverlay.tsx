import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog } from '../../components/Dialog'
import { Avatar, LocationBadge } from '../../components/Badge'
import { SearchIcon, UsersIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { WEEKDAY_NAMES } from '../../utils/date'
import { formatTimeRange } from '../../utils/time'
import { EmptyState } from '../../components/EmptyState'
import { LEVEL_LABELS } from '../../utils/labels'

export function SearchOverlay() {
  const open = useUIStore((s) => s.searchOpen)
  const setOpen = useUIStore((s) => s.setSearchOpen)
  const openDetail = useUIStore((s) => s.openDetail)
  const navigate = useNavigate()
  const students = useStudents() ?? []
  const slots = useTimetableSlots() ?? []
  const [query, setQuery] = useState('')

  const studentMap = useMemo(() => new Map(students.map((s) => [s.id, s])), [students])

  const matchedStudents = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return students.filter(
      (s) => s.name.toLowerCase().includes(q) || s.nickname?.toLowerCase().includes(q) || s.phone?.includes(q) || s.notes?.toLowerCase().includes(q),
    )
  }, [students, query])

  const matchedSlots = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return slots
      .filter((s) => {
        const student = studentMap.get(s.studentId)
        const studentName = (student?.nickname || student?.name || '').toLowerCase()
        return (
          studentName.includes(q) ||
          s.location.toLowerCase().includes(q) ||
          s.type.toLowerCase().includes(q) ||
          WEEKDAY_NAMES[s.dayOfWeek].toLowerCase().includes(q) ||
          s.note?.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
      .slice(0, 20)
  }, [slots, studentMap, query])

  function close() {
    setOpen(false)
    setQuery('')
  }

  return (
    <Dialog open={open} onClose={close} title="Tìm kiếm" width="lg">
      <div className="space-y-4">
        <div className="relative">
          <SearchIcon width={17} height={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm học viên, ngày, địa điểm, ghi chú…"
            className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] pl-10 pr-3 text-[14px] outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        {!query.trim() && (
          <EmptyState icon={<SearchIcon width={26} height={26} />} title="Tìm kiếm trong lịch dạy" description="Tìm học viên, buổi học, ghi chú và nhiều hơn nữa." />
        )}

        {query.trim() && matchedStudents.length === 0 && matchedSlots.length === 0 && (
          <EmptyState icon={<SearchIcon width={26} height={26} />} title="Không có kết quả" description={`Không tìm thấy gì khớp với "${query}".`} />
        )}

        {matchedStudents.length > 0 && (
          <div>
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Học viên</p>
            <div className="space-y-1">
              {matchedStudents.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    close()
                    navigate(`/students/${s.id}`)
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-[var(--color-surface-sunken)]"
                >
                  <Avatar name={s.nickname || s.name} size={32} />
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-medium text-[var(--color-ink)]">{s.name}</p>
                    <p className="truncate text-[12px] text-[var(--color-ink-muted)]">{LEVEL_LABELS[s.level]}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {matchedSlots.length > 0 && (
          <div>
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Buổi học</p>
            <div className="space-y-1">
              {matchedSlots.map((s) => {
                const student = studentMap.get(s.studentId)
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      close()
                      navigate('/')
                      openDetail(s)
                    }}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left hover:bg-[var(--color-surface-sunken)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar name={student?.nickname || student?.name || '?'} size={32} />
                      <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-medium text-[var(--color-ink)]">{student?.nickname || student?.name}</p>
                        <p className="truncate text-[12px] text-[var(--color-ink-muted)]">
                          {WEEKDAY_NAMES[s.dayOfWeek]} · {formatTimeRange(s.startTime, s.endTime)}
                        </p>
                      </div>
                    </div>
                    <LocationBadge location={s.location} className="shrink-0" />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {students.length === 0 && (
          <div className="flex items-center gap-2 text-[12.5px] text-[var(--color-ink-faint)]">
            <UsersIcon width={14} height={14} /> Thêm học viên để bắt đầu tìm kiếm.
          </div>
        )}
      </div>
    </Dialog>
  )
}
