import { useEffect, useMemo, useRef } from 'react'
import clsx from 'clsx'
import type { Lesson, Student } from '../../types'
import { formatDayNumber, formatShortDay, getWeekDays, isToday, toDateKey } from '../../utils/date'
import { formatDuration } from '../../utils/time'
import { GRID_START_MINUTES, TimeGutter, gridBackgroundStyle } from './TimeGrid'
import { CurrentTimeIndicator, useNowMinutes } from './CurrentTimeIndicator'
import { LessonBlock, type ColumnRect } from './LessonBlock'
import { layoutLessonsForDay } from './layoutLessons'
import { computeDaySummary } from '../../services/statistics'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { PX_PER_MINUTE } from './constants'

interface WeekViewProps {
  currentDate: string
  lessons: Lesson[]
  students: Student[]
  weekStartsOn: 0 | 1
  onOpenLesson: (lesson: Lesson) => void
  onEditLesson: (lesson: Lesson) => void
  onCommitChange: (lesson: Lesson, date: string, startTime: string, endTime: string) => void
  onSlotClick: (date: string, startTime: string) => void
}

function minutesToTimeStr(mins: number): string {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function WeekView({ currentDate, lessons, students, weekStartsOn, onOpenLesson, onEditLesson, onCommitChange, onSlotClick }: WeekViewProps) {
  const isDesktop = useIsDesktop()
  const weekDays = useMemo(() => getWeekDays(new Date(currentDate), weekStartsOn), [currentDate, weekStartsOn])
  const nowMinutes = useNowMinutes()
  const scrollRef = useRef<HTMLDivElement>(null)
  const columnRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const studentMap = useMemo(() => new Map(students.map((s) => [s.id, s])), [students])
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (hasScrolled.current || !scrollRef.current) return
    hasScrolled.current = true
    const top = Math.max((nowMinutes - GRID_START_MINUTES) * PX_PER_MINUTE - 160, 0)
    scrollRef.current.scrollTo({ top })
  }, [nowMinutes])

  const lessonsByDate = useMemo(() => {
    const map = new Map<string, Lesson[]>()
    for (const lesson of lessons) {
      const arr = map.get(lesson.date) ?? []
      arr.push(lesson)
      map.set(lesson.date, arr)
    }
    return map
  }, [lessons])

  function getColumnRects(): ColumnRect[] {
    return weekDays.map((d) => {
      const key = toDateKey(d)
      const el = columnRefs.current.get(key)
      const rect = el?.getBoundingClientRect()
      return { date: key, left: rect?.left ?? 0, right: rect?.right ?? 0 }
    })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div style={{ width: 56 }} className="shrink-0" />
        {weekDays.map((day) => {
          const key = toDateKey(day)
          const summary = computeDaySummary(lessons, students, key)
          const today = isToday(day)
          return (
            <div key={key} className="flex-1 border-l border-[var(--color-border)] px-1.5 py-2.5 text-center">
              <p className="text-[10.5px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">{formatShortDay(day)}</p>
              <p
                className={clsx(
                  'mx-auto mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-[14px] font-semibold',
                  today ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]' : 'text-[var(--color-ink)]',
                )}
              >
                {formatDayNumber(day)}
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
          {weekDays.map((day) => {
            const key = toDateKey(day)
            const dayLessons = lessonsByDate.get(key) ?? []
            const positioned = layoutLessonsForDay(dayLessons)
            const today = isToday(day)
            return (
              <div
                key={key}
                ref={(el) => {
                  if (el) columnRefs.current.set(key, el)
                }}
                className="relative flex-1 border-l border-[var(--color-border)]"
                style={gridBackgroundStyle(false)}
                onDoubleClick={(e) => {
                  if (!isDesktop) return
                  const rect = e.currentTarget.getBoundingClientRect()
                  const y = e.clientY - rect.top + e.currentTarget.scrollTop
                  const mins = Math.round((y / PX_PER_MINUTE) / 15) * 15 + GRID_START_MINUTES
                  onSlotClick(key, minutesToTimeStr(mins))
                }}
              >
                {today && <CurrentTimeIndicator minutes={nowMinutes} />}
                {positioned.map(({ lesson, columnIndex, columnCount }) => (
                  <LessonBlock
                    key={lesson.id}
                    lesson={lesson}
                    student={studentMap.get(lesson.studentId)}
                    columnIndex={columnIndex}
                    columnCount={columnCount}
                    interactive={isDesktop}
                    currentDate={key}
                    onOpen={onOpenLesson}
                    onLongPressEdit={onEditLesson}
                    getColumnRects={getColumnRects}
                    onCommitChange={(l, result) => onCommitChange(l, result.date, minutesToTimeStr(result.startMinutes), minutesToTimeStr(result.endMinutes))}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div className="hidden border-t border-[var(--color-border)] px-4 py-1.5 text-center text-[11px] text-[var(--color-ink-faint)] lg:block">
        Double-click a slot to add a lesson · Drag to move · Drag edges to resize
      </div>
    </div>
  )
}
