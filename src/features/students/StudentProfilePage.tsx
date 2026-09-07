import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLessons, useSettings, useStudent } from '../../hooks/useLiveData'
import { Avatar, StatusBadge } from '../../components/Badge'
import { Button, IconButton } from '../../components/Button'
import { EmptyState } from '../../components/EmptyState'
import { ArrowLeftIcon, CalendarIcon, EditIcon, MapPinIcon, PhoneIcon, PlusIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { computeStudentStats } from '../../services/statistics'
import { formatCurrency } from '../../utils/format'
import { formatDuration, formatTimeRange } from '../../utils/time'
import { formatDayLabel, toDateKey } from '../../utils/date'
import { SegmentedControl } from '../../components/fields'
import type { Lesson } from '../../types'

export function StudentProfilePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const student = useStudent(id)
  const lessons = useLessons() ?? []
  const settings = useSettings()
  const openEditStudent = useUIStore((s) => s.openEditStudent)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openDetail = useUIStore((s) => s.openDetail)
  const [tab, setTab] = useState<'upcoming' | 'history'>('upcoming')

  const todayKey = toDateKey(new Date())

  const studentLessons = useMemo(() => lessons.filter((l) => l.studentId === id), [lessons, id])

  const stats = id ? computeStudentStats(id, lessons, student ?? undefined, todayKey) : undefined

  const upcoming = studentLessons
    .filter((l) => l.date >= todayKey && l.status !== 'cancelled' && l.status !== 'completed')
    .sort((a, b) => (a.date + a.startTime > b.date + b.startTime ? 1 : -1))

  const history = studentLessons
    .filter((l) => l.date < todayKey || l.status === 'completed' || l.status === 'cancelled' || l.status === 'no-show')
    .sort((a, b) => (a.date + a.startTime < b.date + b.startTime ? 1 : -1))

  if (student === undefined) {
    return null
  }
  if (!student) {
    return (
      <EmptyState title="Student not found" description="This student may have been deleted." action={<Button onClick={() => navigate('/students')}>Back to Students</Button>} />
    )
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto pb-24 lg:pb-6">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <div className="flex items-center gap-2">
          <IconButton label="Back" icon={<ArrowLeftIcon width={18} height={18} />} onClick={() => navigate('/students')} />
        </div>
        <div className="mt-2 flex items-center gap-4">
          <Avatar name={student.nickname || student.name} size={56} />
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-[19px] font-semibold text-[var(--color-ink)]">{student.name}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[12.5px] text-[var(--color-ink-muted)]">
              <span>{student.level}</span>
              <span>·</span>
              <span>{student.instrument}</span>
              {student.status !== 'active' && (
                <span className="rounded-full bg-[var(--color-status-pending-bg)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-status-pending)]">{student.status}</span>
              )}
            </div>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button variant="secondary" icon={<EditIcon width={14} height={14} />} onClick={() => openEditStudent(student.id)}>
              Edit
            </Button>
            <Button variant="primary" icon={<PlusIcon width={14} height={14} />} onClick={() => openCreateLesson({ studentId: student.id })}>
              Add Lesson
            </Button>
          </div>
        </div>
        <div className="mt-3 flex gap-2 sm:hidden">
          <Button variant="secondary" size="sm" fullWidth icon={<EditIcon width={13} height={13} />} onClick={() => openEditStudent(student.id)}>
            Edit
          </Button>
          <Button variant="primary" size="sm" fullWidth icon={<PlusIcon width={13} height={13} />} onClick={() => openCreateLesson({ studentId: student.id })}>
            Add Lesson
          </Button>
        </div>
      </div>

      <div className="space-y-6 px-4 py-5 lg:px-6">
        {(student.phone || student.guardian) && (
          <div className="flex flex-wrap gap-4 rounded-xl border border-[var(--color-border)] p-3.5 text-[13px] text-[var(--color-ink-muted)]">
            {student.phone && (
              <span className="flex items-center gap-1.5">
                <PhoneIcon width={14} height={14} /> {student.phone}
              </span>
            )}
            {student.guardian && (
              <span className="flex items-center gap-1.5">
                <MapPinIcon width={14} height={14} /> {student.guardian}
              </span>
            )}
            {student.age && <span>Age {student.age}</span>}
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile label="Completed" value={String(stats.completed)} />
            <StatTile label="Teaching Hours" value={`${stats.teachingHours}h`} />
            <StatTile label="Attendance" value={`${stats.attendanceRate}%`} />
            <StatTile label="Total Lessons" value={String(stats.totalLessons)} />
            {stats.estimatedRevenue > 0 && <StatTile label="Est. Revenue" value={formatCurrency(stats.estimatedRevenue, settings.currency)} />}
            {stats.cancelled > 0 && <StatTile label="Cancelled" value={String(stats.cancelled)} />}
            {stats.noShows > 0 && <StatTile label="No Shows" value={String(stats.noShows)} />}
          </div>
        )}

        {student.notes && (
          <div className="rounded-xl bg-[var(--color-surface-sunken)] p-3.5">
            <p className="mb-1 text-[12px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">Notes</p>
            <p className="text-[13.5px] text-[var(--color-ink)]">{student.notes}</p>
          </div>
        )}

        <div>
          <div className="mb-3 flex items-center justify-between">
            <SegmentedControl
              value={tab}
              onChange={setTab}
              options={[
                { value: 'upcoming', label: `Upcoming (${upcoming.length})` },
                { value: 'history', label: `History (${history.length})` },
              ]}
            />
          </div>

          {tab === 'upcoming' &&
            (upcoming.length === 0 ? (
              <EmptyState icon={<CalendarIcon width={26} height={26} />} title="No upcoming lessons" description="Schedule the next lesson for this student." />
            ) : (
              <ul className="space-y-2">
                {upcoming.map((lesson) => (
                  <LessonRow key={lesson.id} lesson={lesson} onClick={() => openDetail(lesson)} />
                ))}
              </ul>
            ))}

          {tab === 'history' &&
            (history.length === 0 ? (
              <EmptyState icon={<CalendarIcon width={26} height={26} />} title="No lesson history yet" />
            ) : (
              <ul className="space-y-2">
                {history.map((lesson) => (
                  <LessonRow key={lesson.id} lesson={lesson} onClick={() => openDetail(lesson)} />
                ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] p-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">{label}</p>
      <p className="mt-0.5 truncate text-[17px] font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  )
}

function LessonRow({ lesson, onClick }: { lesson: Lesson; onClick: () => void }) {
  return (
    <li>
      <button onClick={onClick} className="flex w-full items-center justify-between rounded-xl border border-[var(--color-border)] p-3 text-left transition-colors hover:bg-[var(--color-surface-sunken)]">
        <div className="min-w-0">
          <p className="text-[13.5px] font-medium text-[var(--color-ink)]">{formatDayLabel(new Date(lesson.date))}</p>
          <p className="text-[12px] text-[var(--color-ink-muted)]">
            {formatTimeRange(lesson.startTime, lesson.endTime)} · {formatDuration(lesson.duration)}
          </p>
          {lesson.note && <p className="mt-1 truncate text-[12px] italic text-[var(--color-ink-faint)]">“{lesson.note}”</p>}
        </div>
        <StatusBadge status={lesson.status} className="ml-3 shrink-0" />
      </button>
    </li>
  )
}
