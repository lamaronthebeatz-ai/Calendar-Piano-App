import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog } from '../../components/Dialog'
import { Avatar, StatusBadge } from '../../components/Badge'
import { SearchIcon, UsersIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { useLessons, useStudents } from '../../hooks/useLiveData'
import { formatDayLabel } from '../../utils/date'
import { formatTimeRange } from '../../utils/time'
import { EmptyState } from '../../components/EmptyState'

export function SearchOverlay() {
  const open = useUIStore((s) => s.searchOpen)
  const setOpen = useUIStore((s) => s.setSearchOpen)
  const openDetail = useUIStore((s) => s.openDetail)
  const setCurrentDate = useUIStore((s) => s.setCurrentDate)
  const setViewMode = useUIStore((s) => s.setViewMode)
  const navigate = useNavigate()
  const students = useStudents() ?? []
  const lessons = useLessons() ?? []
  const [query, setQuery] = useState('')

  const studentMap = useMemo(() => new Map(students.map((s) => [s.id, s])), [students])

  const matchedStudents = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return students.filter(
      (s) => s.name.toLowerCase().includes(q) || s.nickname?.toLowerCase().includes(q) || s.phone?.includes(q) || s.notes?.toLowerCase().includes(q),
    )
  }, [students, query])

  const matchedLessons = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return lessons
      .filter((l) => {
        const student = studentMap.get(l.studentId)
        const studentName = (student?.nickname || student?.name || '').toLowerCase()
        return (
          studentName.includes(q) ||
          l.location.toLowerCase().includes(q) ||
          l.type.toLowerCase().includes(q) ||
          l.date.includes(q) ||
          l.note?.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => (a.date + a.startTime < b.date + b.startTime ? 1 : -1))
      .slice(0, 20)
  }, [lessons, studentMap, query])

  function close() {
    setOpen(false)
    setQuery('')
  }

  return (
    <Dialog open={open} onClose={close} title="Search" width="lg">
      <div className="space-y-4">
        <div className="relative">
          <SearchIcon width={17} height={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students, lessons, dates, locations, notes…"
            className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] pl-10 pr-3 text-[14px] outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        {!query.trim() && (
          <EmptyState icon={<SearchIcon width={26} height={26} />} title="Search your studio" description="Find students, lessons, notes, and more." />
        )}

        {query.trim() && matchedStudents.length === 0 && matchedLessons.length === 0 && (
          <EmptyState icon={<SearchIcon width={26} height={26} />} title="No results" description={`Nothing matches "${query}".`} />
        )}

        {matchedStudents.length > 0 && (
          <div>
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Students</p>
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
                    <p className="truncate text-[12px] text-[var(--color-ink-muted)]">{s.level}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {matchedLessons.length > 0 && (
          <div>
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Lessons</p>
            <div className="space-y-1">
              {matchedLessons.map((l) => {
                const student = studentMap.get(l.studentId)
                return (
                  <button
                    key={l.id}
                    onClick={() => {
                      close()
                      setCurrentDate(l.date)
                      setViewMode('day')
                      navigate('/')
                      openDetail(l)
                    }}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left hover:bg-[var(--color-surface-sunken)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar name={student?.nickname || student?.name || '?'} size={32} />
                      <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-medium text-[var(--color-ink)]">{student?.nickname || student?.name}</p>
                        <p className="truncate text-[12px] text-[var(--color-ink-muted)]">
                          {formatDayLabel(new Date(l.date))} · {formatTimeRange(l.startTime, l.endTime)}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={l.status} className="shrink-0" />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {students.length === 0 && (
          <div className="flex items-center gap-2 text-[12.5px] text-[var(--color-ink-faint)]">
            <UsersIcon width={14} height={14} /> Add students to start searching your studio.
          </div>
        )}
      </div>
    </Dialog>
  )
}
