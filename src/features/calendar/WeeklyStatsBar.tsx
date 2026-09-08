import clsx from 'clsx'
import type { Student, TimetableSlot } from '../../types'
import { computeOverallStats } from '../../services/statistics'
import { formatCurrency } from '../../utils/format'

interface WeeklyStatsBarProps {
  slots: TimetableSlot[]
  students: Student[]
  currency: string
}

export function WeeklyStatsBar({ slots, students, currency }: WeeklyStatsBarProps) {
  const stats = computeOverallStats(slots, students)

  const tiles = [
    { label: 'Lessons / Week', value: String(stats.lessonCount) },
    { label: 'Teaching Hours', value: `${stats.teachingHoursPerWeek}h` },
    { label: 'Students', value: String(stats.studentCount) },
    ...(stats.estimatedWeeklyIncome > 0 ? [{ label: 'Est. Income / Week', value: formatCurrency(stats.estimatedWeeklyIncome, currency) }] : []),
  ]

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
      {tiles.map((tile, i) => (
        <div
          key={tile.label}
          className={clsx(
            'bg-[var(--color-surface-raised)] px-4 py-3',
            i === tiles.length - 1 && tiles.length % 2 === 1 && 'col-span-2 sm:col-span-1',
          )}
        >
          <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">{tile.label}</p>
          <p className="mt-0.5 truncate text-[19px] font-semibold text-[var(--color-ink)]">{tile.value}</p>
        </div>
      ))}
    </div>
  )
}
