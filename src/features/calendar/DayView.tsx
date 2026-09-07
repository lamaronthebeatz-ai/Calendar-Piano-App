import { useEffect, useRef } from 'react'
import type { Lesson, Student } from '../../types'
import { formatDayLabel, isToday } from '../../utils/date'
import { GRID_START_MINUTES, TimeGutter, gridBackgroundStyle } from './TimeGrid'
import { CurrentTimeIndicator, useNowMinutes } from './CurrentTimeIndicator'
import { LessonBlock } from './LessonBlock'
import { layoutLessonsForDay } from './layoutLessons'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { PX_PER_MINUTE } from './constants'
import { EmptyState } from '../../components/EmptyState'
import { CalendarIcon } from '../../components/icons'
import { Button } from '../../components/Button'

interface DayViewProps {
  currentDate: string
  lessons: Lesson[]
  students: Student[]
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

export function DayView({ currentDate, lessons, students, onOpenLesson, onEditLesson, onCommitChange, onSlotClick }: DayViewProps) {
  const isDesktop = useIsDesktop()
  const nowMinutes = useNowMinutes()
  const scrollRef = useRef<HTMLDivElement>(null)
  const hasScrolled = useRef(false)
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const dayLessons = lessons.filter((l) => l.date === currentDate)
  const positioned = layoutLessonsForDay(dayLessons)
  const today = isToday(new Date(currentDate))

  useEffect(() => {
    if (hasScrolled.current || !scrollRef.current) return
    hasScrolled.current = true
    const top = Math.max((nowMinutes - GRID_START_MINUTES) * PX_PER_MINUTE - 160, 0)
    scrollRef.current.scrollTo({ top })
  }, [nowMinutes])

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-5 py-3">
        <p className="text-[15px] font-semibold text-[var(--color-ink)]">{formatDayLabel(new Date(currentDate))}</p>
      </div>

      {dayLessons.length === 0 ? (
        <EmptyState
          icon={<CalendarIcon width={32} height={32} />}
          title="Your teaching day is clear"
          description="No lessons scheduled for this day."
          action={
            <Button variant="primary" onClick={() => onSlotClick(currentDate, '15:00')}>
              Add Lesson
            </Button>
          }
        />
      ) : (
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex">
            <TimeGutter />
            <div
              className="relative flex-1 border-l border-[var(--color-border)]"
              style={gridBackgroundStyle(false)}
              onDoubleClick={(e) => {
                if (!isDesktop) return
                const rect = e.currentTarget.getBoundingClientRect()
                const y = e.clientY - rect.top
                const mins = Math.round(y / PX_PER_MINUTE / 15) * 15 + GRID_START_MINUTES
                onSlotClick(currentDate, minutesToTimeStr(mins))
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
                  currentDate={currentDate}
                  onOpen={onOpenLesson}
                  onLongPressEdit={onEditLesson}
                  onCommitChange={(l, result) => onCommitChange(l, currentDate, minutesToTimeStr(result.startMinutes), minutesToTimeStr(result.endMinutes))}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
