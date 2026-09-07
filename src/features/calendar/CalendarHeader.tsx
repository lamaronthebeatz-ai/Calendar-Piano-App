import clsx from 'clsx'
import type { CalendarViewMode } from '../../types'
import { formatDayLabel, formatMonthYear, getWeekDays } from '../../utils/date'
import { format } from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon, FilterIcon, SearchIcon } from '../../components/icons'
import { IconButton } from '../../components/Button'
import { SegmentedControl } from '../../components/fields'

interface CalendarHeaderProps {
  viewMode: CalendarViewMode
  currentDate: string
  weekStartsOn: 0 | 1
  onViewModeChange: (mode: CalendarViewMode) => void
  onToday: () => void
  onPrev: () => void
  onNext: () => void
  onOpenSearch: () => void
  onOpenFilters: () => void
  hasActiveFilters: boolean
}

function rangeLabel(viewMode: CalendarViewMode, currentDate: string, weekStartsOn: 0 | 1): string {
  const date = new Date(currentDate)
  if (viewMode === 'day') return formatDayLabel(date)
  if (viewMode === 'month') return formatMonthYear(date)
  const days = getWeekDays(date, weekStartsOn)
  const start = days[0]
  const end = days[6]
  const sameMonth = start.getMonth() === end.getMonth()
  return sameMonth
    ? `${format(start, 'MMMM d')} – ${format(end, 'd, yyyy')}`
    : `${format(start, 'MMM d')} – ${format(end, 'MMM d, yyyy')}`
}

export function CalendarHeader({
  viewMode,
  currentDate,
  weekStartsOn,
  onViewModeChange,
  onToday,
  onPrev,
  onNext,
  onOpenSearch,
  onOpenFilters,
  hasActiveFilters,
}: CalendarHeaderProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToday}
          className="h-9 rounded-lg border border-[var(--color-border)] px-3 text-[13px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]"
        >
          Today
        </button>
        <IconButton label="Previous" icon={<ChevronLeftIcon width={17} height={17} />} onClick={onPrev} size="sm" />
        <IconButton label="Next" icon={<ChevronRightIcon width={17} height={17} />} onClick={onNext} size="sm" />
      </div>

      <h1 className="min-w-0 flex-1 truncate text-[16px] font-semibold text-[var(--color-ink)] lg:text-[17px]">
        {rangeLabel(viewMode, currentDate, weekStartsOn)}
      </h1>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onOpenFilters}
          className={clsx(
            'flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-[13px] font-medium transition-colors',
            hasActiveFilters
              ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-status-confirmed-bg)]'
              : 'border-[var(--color-border)] text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]',
          )}
        >
          <FilterIcon width={15} height={15} />
          <span className="hidden sm:inline">Filter</span>
        </button>
        <IconButton label="Search" icon={<SearchIcon width={17} height={17} />} onClick={onOpenSearch} className="lg:hidden" />
        <SegmentedControl
          value={viewMode}
          onChange={onViewModeChange}
          options={[
            { value: 'day', label: 'Day' },
            { value: 'week', label: 'Week' },
            { value: 'month', label: 'Month' },
          ]}
        />
      </div>
    </div>
  )
}
