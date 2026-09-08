import { useMemo, useState } from 'react'
import { useUIStore } from '../../store/uiStore'
import { useSettings, useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { WeeklyStatsBar } from './WeeklyStatsBar'
import { TimetableGrid } from './TimetableGrid'
import { FilterSheet } from './FilterSheet'
import type { DayOfWeek, TimetableSlot } from '../../types'
import { checkConflicts, moveSlot } from '../../services/timetableService'
import { ConfirmDialog } from '../../components/Dialog'
import { minutesToTime, timeToMinutes } from '../../utils/time'
import { FilterIcon, SearchIcon } from '../../components/icons'
import { IconButton } from '../../components/Button'
import clsx from 'clsx'

export function CalendarPage() {
  const filters = useUIStore((s) => s.filters)
  const setFilters = useUIStore((s) => s.setFilters)
  const clearFilters = useUIStore((s) => s.clearFilters)
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const openDetail = useUIStore((s) => s.openDetail)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const pushToast = useUIStore((s) => s.pushToast)

  const [filterSheetOpen, setFilterSheetOpen] = useState(false)
  const [pendingMove, setPendingMove] = useState<{ slot: TimetableSlot; dayOfWeek: DayOfWeek; startTime: string; endTime: string; conflictCount: number } | null>(null)

  const allSlots = useTimetableSlots() ?? []
  const students = useStudents() ?? []
  const settings = useSettings()

  const hasActiveFilters = Object.values(filters).some(Boolean)

  const filteredSlots = useMemo(() => {
    return allSlots.filter((s) => {
      if (filters.studentId && s.studentId !== filters.studentId) return false
      if (filters.type && s.type !== filters.type) return false
      if (filters.location && s.location !== filters.location) return false
      return true
    })
  }, [allSlots, filters])

  async function handleCommitChange(slot: TimetableSlot, dayOfWeek: DayOfWeek, startTime: string, endTime: string) {
    const conflicts = await checkConflicts({ id: slot.id, dayOfWeek, startTime, endTime })
    if (conflicts.length > 0) {
      setPendingMove({ slot, dayOfWeek, startTime, endTime, conflictCount: conflicts.length })
    } else {
      await moveSlot(slot.id, dayOfWeek, startTime, endTime)
      pushToast('Lesson moved', 'success')
    }
  }

  function handleSlotClick(dayOfWeek: DayOfWeek, startTime: string) {
    const endTime = minutesToTime(Math.min(1439, timeToMinutes(startTime) + settings.defaultLessonDuration))
    openCreateLesson({ dayOfWeek, startTime, endTime })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <h1 className="flex-1 text-[16px] font-semibold text-[var(--color-ink)] lg:text-[17px]">Weekly Timetable</h1>
        <button
          onClick={() => setFilterSheetOpen(true)}
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
        <IconButton label="Search" icon={<SearchIcon width={17} height={17} />} onClick={() => setSearchOpen(true)} />
      </div>

      <WeeklyStatsBar slots={filteredSlots} students={students} currency={settings.currency} />

      <div className="min-h-0 flex-1">
        <TimetableGrid
          slots={filteredSlots}
          students={students}
          weekStartsOn={settings.firstDayOfWeek}
          onOpenSlot={openDetail}
          onEditSlot={(slot) => openEditLesson(slot.id)}
          onCommitChange={handleCommitChange}
          onSlotClick={handleSlotClick}
        />
      </div>

      <FilterSheet
        open={filterSheetOpen}
        onClose={() => setFilterSheetOpen(false)}
        filters={filters}
        onChange={setFilters}
        onClear={clearFilters}
        students={students}
      />

      <ConfirmDialog
        open={!!pendingMove}
        onClose={() => setPendingMove(null)}
        onConfirm={() => {
          if (!pendingMove) return
          moveSlot(pendingMove.slot.id, pendingMove.dayOfWeek, pendingMove.startTime, pendingMove.endTime)
          pushToast('Lesson moved despite conflict', 'default')
        }}
        title="Schedule Conflict"
        description={`This time overlaps with ${pendingMove?.conflictCount ?? 0} other lesson${pendingMove?.conflictCount === 1 ? '' : 's'}. Schedule anyway?`}
        confirmLabel="Schedule Anyway"
        tone="danger"
      />
    </div>
  )
}
