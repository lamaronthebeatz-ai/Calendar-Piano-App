import clsx from 'clsx'
import type { Lesson, Student } from '../../types'
import { computeRangeStats } from '../../services/statistics'
import { formatCurrency } from '../../utils/format'

interface WeeklyStatsBarProps {
  lessons: Lesson[]
  students: Student[]
  currency: string
}

export function WeeklyStatsBar({ lessons, students, currency }: WeeklyStatsBarProps) {
  const stats = computeRangeStats(lessons, students)

  const tiles = [
    { label: 'Lessons', value: String(stats.lessonCount) },
    { label: 'Teaching Hours', value: `${stats.teachingHours}h` },
    { label: 'Students', value: String(stats.studentCount) },
    { label: 'Completion', value: `${stats.completionRate}%` },
    ...(stats.estimatedIncome > 0 ? [{ label: 'Est. Income', value: formatCurrency(stats.estimatedIncome, currency) }] : []),
  ]

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3 lg:grid-cols-5">
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
