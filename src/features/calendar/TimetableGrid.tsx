import { useEffect, useMemo, useRef } from 'react'
import clsx from 'clsx'
import type { DayOfWeek, Student, TimetableSlot } from '../../types'
import { getWeekdayOrder, todayDayOfWeek, WEEKDAY_SHORT } from '../../utils/date'
import { formatDuration } from '../../utils/time'
import { GRID_START_MINUTES, TimeGutter, gridBackgroundStyle } from './TimeGrid'
import { CurrentTimeIndicator, useNowMinutes } from './CurrentTimeIndicator'
import { LessonBlock, type ColumnRect } from './LessonBlock'
import { layoutSlotsForDay } from './layoutLessons'
import { computeDaySummary } from '../../services/statistics'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { PX_PER_MINUTE } from './constants'

interface TimetableGridProps {
  slots: TimetableSlot[]
  students: Student[]
  weekStartsOn: 0 | 1
  onOpenSlot: (slot: TimetableSlot) => void
  onEditSlot: (slot: TimetableSlot) => void
  onCommitChange: (slot: TimetableSlot, dayOfWeek: DayOfWeek, startTime: string, endTime: string) => void
  onSlotClick: (dayOfWeek: DayOfWeek, startTime: string) => void
}

function minutesToTimeStr(mins: number): string {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function TimetableGrid({ slots, students, weekStartsOn, onOpenSlot, onEditSlot, onCommitChange, onSlotClick }: TimetableGridProps) {
  const isDesktop = useIsDesktop()
  const weekdays = useMemo(() => getWeekdayOrder(weekStartsOn), [weekStartsOn])
  const today = todayDayOfWeek()
  const nowMinutes = useNowMinutes()
  const scrollRef = useRef<HTMLDivElement>(null)
  const columnRefs = useRef<Map<DayOfWeek, HTMLDivElement>>(new Map())
  const studentMap = useMemo(() => new Map(students.map((s) => [s.id, s])), [students])
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (hasScrolled.current || !scrollRef.current) return
    hasScrolled.current = true
    const top = Math.max((nowMinutes - GRID_START_MINUTES) * PX_PER_MINUTE - 160, 0)
    scrollRef.current.scrollTo({ top })
  }, [nowMinutes])

  const slotsByDay = useMemo(() => {
    const map = new Map<DayOfWeek, TimetableSlot[]>()
    for (const slot of slots) {
      const arr = map.get(slot.dayOfWeek) ?? []
      arr.push(slot)
      map.set(slot.dayOfWeek, arr)
    }
    return map
  }, [slots])

  function getColumnRects(): ColumnRect[] {
    return weekdays.map((day) => {
      const el = columnRefs.current.get(day)
      const rect = el?.getBoundingClientRect()
      return { dayOfWeek: day, left: rect?.left ?? 0, right: rect?.right ?? 0 }
    })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div style={{ width: 56 }} className="shrink-0" />
        {weekdays.map((day) => {
          const summary = computeDaySummary(slots, students, day)
          const isToday = day === today
          return (
            <div key={day} className="flex-1 border-l border-[var(--color-border)] px-1.5 py-2.5 text-center">
              <p
                className={clsx(
                  'mx-auto flex h-7 items-center justify-center rounded-full text-[12px] font-semibold uppercase tracking-wide',
                  isToday ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]' : 'text-[var(--color-ink)]',
                )}
              >
                {WEEKDAY_SHORT[day]}
              </p>
              <p className="mt-0.5 hidden text-[10px] text-[var(--color-ink-faint)] sm:block">
                {summary.count > 0 ? `${summary.count} · ${formatDuration(summary.hours * 60)}` : '—'}
              </p>
            </div>
          )
        })}
      </div>

      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex">
          <TimeGutter />
          {weekdays.map((day) => {
            const daySlots = slotsByDay.get(day) ?? []
            const positioned = layoutSlotsForDay(daySlots)
            const isToday = day === today
            return (
              <div
                key={day}
                ref={(el) => {
                  if (el) columnRefs.current.set(day, el)
                }}
                className="relative flex-1 border-l border-[var(--color-border)]"
                style={gridBackgroundStyle(false)}
                onDoubleClick={(e) => {
                  if (!isDesktop) return
                  const rect = e.currentTarget.getBoundingClientRect()
                  const y = e.clientY - rect.top + e.currentTarget.scrollTop
                  const mins = Math.round(y / PX_PER_MINUTE / 15) * 15 + GRID_START_MINUTES
                  onSlotClick(day, minutesToTimeStr(mins))
                }}
              >
                {isToday && <CurrentTimeIndicator minutes={nowMinutes} />}
                {positioned.map(({ slot, columnIndex, columnCount }) => (
                  <LessonBlock
                    key={slot.id}
                    slot={slot}
                    student={studentMap.get(slot.studentId)}
                    columnIndex={columnIndex}
                    columnCount={columnCount}
                    interactive={isDesktop}
                    currentDayOfWeek={day}
                    onOpen={onOpenSlot}
                    onLongPressEdit={onEditSlot}
                    getColumnRects={getColumnRects}
                    onCommitChange={(s, result) => onCommitChange(s, result.dayOfWeek, minutesToTimeStr(result.startMinutes), minutesToTimeStr(result.endMinutes))}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div className="hidden border-t border-[var(--color-border)] px-4 py-1.5 text-center text-[11px] text-[var(--color-ink-faint)] lg:block">
        Nhấp đúp vào ô trống để thêm buổi học · Kéo để di chuyển · Kéo mép để đổi thời lượng
      </div>
    </div>
  )
}
