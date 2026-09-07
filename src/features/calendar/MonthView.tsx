import clsx from 'clsx'
import type { Lesson, Student } from '../../types'
import { formatDayNumber, getMonthGridDays, isSameMonth, isToday, toDateKey } from '../../utils/date'
import { STATUS_PALETTE } from '../../utils/color'
import { timeToMinutes } from '../../utils/time'

interface MonthViewProps {
  currentDate: string
  lessons: Lesson[]
  students: Student[]
  weekStartsOn: 0 | 1
  onSelectDay: (date: string) => void
}

const WEEKDAY_LABELS_MON = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const WEEKDAY_LABELS_SUN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function MonthView({ currentDate, lessons, students, weekStartsOn, onSelectDay }: MonthViewProps) {
  const monthAnchor = new Date(currentDate)
  const days = getMonthGridDays(monthAnchor, weekStartsOn)
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const labels = weekStartsOn === 1 ? WEEKDAY_LABELS_MON : WEEKDAY_LABELS_SUN

  const lessonsByDate = new Map<string, Lesson[]>()
  for (const lesson of lessons) {
    if (lesson.status === 'cancelled') continue
    const arr = lessonsByDate.get(lesson.date) ?? []
    arr.push(lesson)
    lessonsByDate.set(lesson.date, arr)
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="grid grid-cols-7 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        {labels.map((label) => (
          <div key={label} className="py-2 text-center text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">
            {label}
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-7 auto-rows-fr">
        {days.map((day) => {
          const key = toDateKey(day)
          const dayLessons = (lessonsByDate.get(key) ?? []).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))
          const inMonth = isSameMonth(day, monthAnchor)
          const today = isToday(day)
          const visible = dayLessons.slice(0, 3)
          const overflow = dayLessons.length - visible.length

          return (
            <button
              key={key}
              onClick={() => onSelectDay(key)}
              className={clsx(
                'flex min-h-[92px] flex-col items-stretch gap-1 border-b border-l border-[var(--color-border)] p-1.5 text-left transition-colors hover:bg-[var(--color-surface-sunken)]',
                !inMonth && 'bg-[var(--color-surface-sunken)]/40',
              )}
            >
              <span
                className={clsx(
                  'flex h-6 w-6 items-center justify-center rounded-full text-[12.5px] font-semibold',
                  today ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]' : inMonth ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-faint)]',
                )}
              >
                {formatDayNumber(day)}
              </span>
              <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                {visible.map((lesson) => {
                  const palette = STATUS_PALETTE[lesson.status]
                  const student = studentMap.get(lesson.studentId)
                  return (
                    <div key={lesson.id} className={clsx('truncate rounded px-1 py-0.5 text-[10.5px] font-medium', palette.bg, palette.text)}>
                      {student?.nickname || student?.name || 'Lesson'}
                    </div>
                  )
                })}
                {overflow > 0 && <div className="px-1 text-[10px] font-medium text-[var(--color-ink-faint)]">+{overflow} more</div>}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
