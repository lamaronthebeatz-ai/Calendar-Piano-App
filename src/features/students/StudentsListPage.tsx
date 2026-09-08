import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { Avatar } from '../../components/Badge'
import { Button } from '../../components/Button'
import { EmptyState } from '../../components/EmptyState'
import { SegmentedControl } from '../../components/fields'
import { PlusIcon, UsersIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import type { Student, StudentStatus } from '../../types'
import { WEEKDAY_SHORT } from '../../utils/date'
import { formatTime } from '../../utils/time'

type FilterValue = 'all' | StudentStatus

export function StudentsListPage() {
  const students = useStudents() ?? []
  const slots = useTimetableSlots() ?? []
  const openCreateStudent = useUIStore((s) => s.openCreateStudent)
  const navigate = useNavigate()
  const [filter, setFilter] = useState<FilterValue>('all')
  const [query, setQuery] = useState('')

  const scheduleByStudent = useMemo(() => {
    const map = new Map<string, string>()
    const grouped = new Map<string, typeof slots>()
    for (const s of slots) {
      const arr = grouped.get(s.studentId) ?? []
      arr.push(s)
      grouped.set(s.studentId, arr)
    }
    for (const [studentId, studentSlots] of grouped) {
      const sorted = studentSlots.slice().sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
      map.set(studentId, sorted.map((s) => `${WEEKDAY_SHORT[s.dayOfWeek]} ${formatTime(s.startTime)}`).join(', '))
    }
    return map
  }, [slots])

  const filtered = students
    .filter((s) => filter === 'all' || s.status === filter)
    .filter((s) => !query || s.name.toLowerCase().includes(query.toLowerCase()) || s.nickname?.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Students</h1>
          <Button variant="primary" size="sm" icon={<PlusIcon width={15} height={15} />} onClick={openCreateStudent} className="hidden sm:inline-flex">
            Add Student
          </Button>
        </div>
        <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students…"
            className="h-9 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-[13px] outline-none focus:border-[var(--color-accent)] sm:max-w-xs"
          />
          <SegmentedControl
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'paused', label: 'Paused' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pb-24 lg:pb-6">
        {filtered.length === 0 ? (
          <EmptyState
            icon={<UsersIcon width={30} height={30} />}
            title={students.length === 0 ? 'No students yet' : 'No students match'}
            description={students.length === 0 ? 'Add your first student to start building your timetable.' : 'Try a different search or filter.'}
            action={
              students.length === 0 ? (
                <Button variant="primary" onClick={openCreateStudent}>
                  Add Student
                </Button>
              ) : undefined
            }
          />
        ) : (
          <ul className="divide-y divide-[var(--color-border)]">
            {filtered.map((student) => (
              <StudentRow key={student.id} student={student} schedule={scheduleByStudent.get(student.id)} onClick={() => navigate(`/students/${student.id}`)} />
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={openCreateStudent}
        className="fixed bottom-24 right-5 z-30 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] shadow-[var(--shadow-float)] sm:hidden"
        aria-label="Add student"
        style={{ height: 52, width: 52 }}
      >
        <PlusIcon width={22} height={22} />
      </button>
    </div>
  )
}

function StudentRow({ student, schedule, onClick }: { student: Student; schedule?: string; onClick: () => void }) {
  return (
    <li>
      <button onClick={onClick} className="flex w-full items-center gap-3.5 px-4 py-3 text-left transition-colors hover:bg-[var(--color-surface-sunken)] lg:px-6">
        <Avatar name={student.nickname || student.name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-[14.5px] font-medium text-[var(--color-ink)]">{student.name}</p>
            {student.status !== 'active' && (
              <span
                className={clsx(
                  'shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium',
                  student.status === 'paused' ? 'bg-[var(--color-status-pending-bg)] text-[var(--color-status-pending)]' : 'bg-[var(--color-status-noshow-bg)] text-[var(--color-status-noshow)]',
                )}
              >
                {student.status}
              </span>
            )}
          </div>
          <p className="truncate text-[12.5px] text-[var(--color-ink-muted)]">
            {student.level} · {student.defaultLocation}
            {schedule ? ` · ${schedule}` : ' · No fixed lessons yet'}
          </p>
        </div>
      </button>
    </li>
  )
}
