import { useMemo, useState } from 'react'
import { useUIStore } from '../../store/uiStore'
import { useLessons, useSettings, useStudents } from '../../hooks/useLiveData'
import { CalendarHeader } from './CalendarHeader'
import { WeeklyStatsBar } from './WeeklyStatsBar'
import { WeekView } from './WeekView'
import { DayView } from './DayView'
import { MonthView } from './MonthView'
import { FilterSheet } from './FilterSheet'
import type { Lesson } from '../../types'
import { getWeekDays, toDateKey } from '../../utils/date'
import { checkConflicts, moveLesson } from '../../services/lessonsService'
import { ConfirmDialog } from '../../components/Dialog'
import { minutesToTime } from '../../utils/time'

export function CalendarPage() {
  const viewMode = useUIStore((s) => s.viewMode)
  const setViewMode = useUIStore((s) => s.setViewMode)
  const currentDate = useUIStore((s) => s.currentDate)
  const setCurrentDate = useUIStore((s) => s.setCurrentDate)
  const goToday = useUIStore((s) => s.goToday)
  const goNext = useUIStore((s) => s.goNext)
  const goPrev = useUIStore((s) => s.goPrev)
  const filters = useUIStore((s) => s.filters)
  const setFilters = useUIStore((s) => s.setFilters)
  const clearFilters = useUIStore((s) => s.clearFilters)
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const openDetail = useUIStore((s) => s.openDetail)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const pushToast = useUIStore((s) => s.pushToast)

  const [filterSheetOpen, setFilterSheetOpen] = useState(false)
  const [pendingMove, setPendingMove] = useState<{ lesson: Lesson; date: string; startTime: string; endTime: string; conflictCount: number } | null>(null)

  const allLessons = useLessons() ?? []
  const students = useStudents() ?? []
  const settings = useSettings()

  const hasActiveFilters = Object.values(filters).some(Boolean)

  const filteredLessons = useMemo(() => {
    return allLessons.filter((l) => {
      if (filters.studentId && l.studentId !== filters.studentId) return false
      if (filters.status && l.status !== filters.status) return false
      if (filters.type && l.type !== filters.type) return false
      if (filters.location && l.location !== filters.location) return false
      return true
    })
  }, [allLessons, filters])

  const weekLessons = useMemo(() => {
    if (viewMode !== 'week') return []
    const days = getWeekDays(new Date(currentDate), settings.firstDayOfWeek).map(toDateKey)
    return filteredLessons.filter((l) => days.includes(l.date))
  }, [filteredLessons, currentDate, settings.firstDayOfWeek, viewMode])

  async function handleCommitChange(lesson: Lesson, date: string, startTime: string, endTime: string) {
    const conflicts = await checkConflicts({ id: lesson.id, date, startTime, endTime })
    if (conflicts.length > 0) {
      setPendingMove({ lesson, date, startTime, endTime, conflictCount: conflicts.length })
    } else {
      await moveLesson(lesson.id, date, startTime, endTime)
      pushToast('Lesson moved', 'success')
    }
  }

  function handleSlotClick(date: string, startTime: string) {
    const endTime = minutesToTime(
      Math.min(
        1439,
        (() => {
          const [h, m] = startTime.split(':').map(Number)
          return h * 60 + m + settings.defaultLessonDuration
        })(),
      ),
    )
    openCreateLesson({ date, startTime, endTime })
  }

  return (
    <div className="flex h-full flex-col">
      <CalendarHeader
        viewMode={viewMode}
        currentDate={currentDate}
        weekStartsOn={settings.firstDayOfWeek}
        onViewModeChange={setViewMode}
        onToday={goToday}
        onPrev={goPrev}
        onNext={goNext}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenFilters={() => setFilterSheetOpen(true)}
        hasActiveFilters={hasActiveFilters}
      />

      {viewMode === 'week' && <WeeklyStatsBar lessons={weekLessons} students={students} currency={settings.currency} />}

      <div className="min-h-0 flex-1">
        {viewMode === 'week' && (
          <WeekView
            currentDate={currentDate}
            lessons={filteredLessons}
            students={students}
            weekStartsOn={settings.firstDayOfWeek}
            onOpenLesson={openDetail}
            onEditLesson={(lesson) => openEditLesson(lesson.id)}
            onCommitChange={handleCommitChange}
            onSlotClick={handleSlotClick}
          />
        )}
        {viewMode === 'day' && (
          <DayView
            currentDate={currentDate}
            lessons={filteredLessons}
            students={students}
            onOpenLesson={openDetail}
            onEditLesson={(lesson) => openEditLesson(lesson.id)}
            onCommitChange={handleCommitChange}
            onSlotClick={handleSlotClick}
          />
        )}
        {viewMode === 'month' && (
          <MonthView
            currentDate={currentDate}
            lessons={filteredLessons}
            students={students}
            weekStartsOn={settings.firstDayOfWeek}
            onSelectDay={(date) => {
              setCurrentDate(date)
              setViewMode('day')
            }}
          />
        )}
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
          moveLesson(pendingMove.lesson.id, pendingMove.date, pendingMove.startTime, pendingMove.endTime)
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
