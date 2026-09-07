import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import clsx from 'clsx'
import type { Lesson, Student } from '../../types'
import { STATUS_PALETTE } from '../../utils/color'
import { formatTime } from '../../utils/time'
import { GRID_END_MINUTES, GRID_START_MINUTES, MIN_LESSON_MINUTES, PX_PER_MINUTE, SNAP_MINUTES } from './constants'

export interface ColumnRect {
  date: string
  left: number
  right: number
}

interface DragResult {
  date: string
  startMinutes: number
  endMinutes: number
}

interface LessonBlockProps {
  lesson: Lesson
  student: Student | undefined
  columnIndex: number
  columnCount: number
  interactive: boolean
  onOpen: (lesson: Lesson) => void
  onLongPressEdit?: (lesson: Lesson) => void
  onCommitChange: (lesson: Lesson, result: DragResult) => void
  getColumnRects?: () => ColumnRect[]
  currentDate: string
}

type DragMode = 'move' | 'resize-top' | 'resize-bottom'

function snap(value: number): number {
  return Math.round(value / SNAP_MINUTES) * SNAP_MINUTES
}

function minutesFromTime(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function timeFromMinutes(mins: number): string {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function LessonBlock({
  lesson,
  student,
  columnIndex,
  columnCount,
  interactive,
  onOpen,
  onLongPressEdit,
  onCommitChange,
  getColumnRects,
  currentDate,
}: LessonBlockProps) {
  const palette = STATUS_PALETTE[lesson.status]
  const originStart = minutesFromTime(lesson.startTime)
  const originEnd = minutesFromTime(lesson.endTime)

  const [drag, setDrag] = useState<null | { mode: DragMode; startClientX: number; startClientY: number; previewStart: number; previewEnd: number; previewDate: string }>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<number | null>(null)
  const movedRef = useRef(false)

  const start = drag ? drag.previewStart : originStart
  const end = drag ? drag.previewEnd : originEnd
  const dateForDisplay = drag ? drag.previewDate : currentDate

  const top = (start - GRID_START_MINUTES) * PX_PER_MINUTE
  const height = Math.max((end - start) * PX_PER_MINUTE, 22)
  const widthPct = 100 / columnCount
  const leftPct = widthPct * columnIndex

  const durationMin = end - start
  const dense = durationMin < 40

  function beginDrag(mode: DragMode, e: ReactPointerEvent) {
    if (!interactive) return
    e.stopPropagation()
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    movedRef.current = false
    setDrag({ mode, startClientX: e.clientX, startClientY: e.clientY, previewStart: originStart, previewEnd: originEnd, previewDate: currentDate })
  }

  function handlePointerMove(e: ReactPointerEvent) {
    if (!drag) return
    const deltaY = e.clientY - drag.startClientY
    if (Math.abs(deltaY) > 3 || Math.abs(e.clientX - drag.startClientX) > 3) movedRef.current = true
    const deltaMinutes = snap(deltaY / PX_PER_MINUTE)

    let newStart = originStart
    let newEnd = originEnd
    let newDate = currentDate

    if (drag.mode === 'move') {
      const duration = originEnd - originStart
      newStart = Math.min(Math.max(originStart + deltaMinutes, GRID_START_MINUTES), GRID_END_MINUTES - duration)
      newEnd = newStart + duration
      if (getColumnRects) {
        const rects = getColumnRects()
        const hit = rects.find((r) => e.clientX >= r.left && e.clientX <= r.right)
        if (hit) newDate = hit.date
      }
    } else if (drag.mode === 'resize-top') {
      newStart = Math.min(Math.max(originStart + deltaMinutes, GRID_START_MINUTES), originEnd - MIN_LESSON_MINUTES)
      newEnd = originEnd
    } else {
      newEnd = Math.max(Math.min(originEnd + deltaMinutes, GRID_END_MINUTES), originStart + MIN_LESSON_MINUTES)
      newStart = originStart
    }

    setDrag({ ...drag, previewStart: newStart, previewEnd: newEnd, previewDate: newDate })
  }

  function handlePointerUp() {
    if (!drag) return
    const changed = drag.previewStart !== originStart || drag.previewEnd !== originEnd || drag.previewDate !== currentDate
    const wasMoved = movedRef.current
    setDrag(null)
    if (changed && wasMoved) {
      onCommitChange(lesson, {
        date: drag.previewDate,
        startMinutes: drag.previewStart,
        endMinutes: drag.previewEnd,
      })
    } else if (!wasMoved) {
      onOpen(lesson)
    }
  }

  function handleTouchStart() {
    if (interactive || !onLongPressEdit) return
    longPressTimer.current = window.setTimeout(() => {
      onLongPressEdit(lesson)
    }, 500)
  }
  function clearLongPress() {
    if (longPressTimer.current) {
      window.clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }

  return (
    <div
      ref={blockRef}
      role="button"
      tabIndex={0}
      aria-label={`${student?.nickname ?? student?.name ?? 'Lesson'} ${formatTime(lesson.startTime)} to ${formatTime(lesson.endTime)}`}
      className={clsx(
        'group absolute select-none overflow-hidden rounded-lg border px-2 py-1 text-left shadow-[var(--shadow-soft)] transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
        palette.bg,
        drag ? 'z-30 cursor-grabbing shadow-[var(--shadow-float)]' : 'z-10 hover:z-20 hover:shadow-[var(--shadow-float)]',
        interactive && !drag && 'cursor-grab',
      )}
      style={{
        top,
        height,
        left: `calc(${leftPct}% + 2px)`,
        width: `calc(${widthPct}% - 4px)`,
        borderColor: `color-mix(in srgb, var(--color-status-${lesson.status === 'no-show' ? 'noshow' : lesson.status}) 35%, transparent)`,
      }}
      onPointerDown={(e) => {
        if (interactive) beginDrag('move', e)
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={clearLongPress}
      onTouchMove={clearLongPress}
      onClick={() => {
        if (!interactive) onOpen(lesson)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen(lesson)
      }}
    >
      {interactive && (
        <div
          className="absolute inset-x-0 top-0 h-1.5 cursor-ns-resize opacity-0 group-hover:opacity-100"
          onPointerDown={(e) => beginDrag('resize-top', e)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
      )}
      <p className={clsx('truncate text-[11.5px] font-semibold leading-tight', palette.text)}>
        {student?.nickname || student?.name || 'Unknown student'}
      </p>
      {!dense && (
        <p className="truncate text-[10.5px] leading-tight text-[var(--color-ink-muted)]">
          {formatTime(timeFromMinutes(start))} – {formatTime(timeFromMinutes(end))}
        </p>
      )}
      {durationMin >= 60 && (
        <p className="truncate text-[10.5px] leading-tight text-[var(--color-ink-muted)]">
          {lesson.type} · {lesson.location}
        </p>
      )}
      {dateForDisplay !== currentDate && <p className="text-[10px] text-[var(--color-ink-faint)]">→ moving…</p>}
      {interactive && (
        <div
          className="absolute inset-x-0 bottom-0 h-1.5 cursor-ns-resize opacity-0 group-hover:opacity-100"
          onPointerDown={(e) => beginDrag('resize-bottom', e)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
      )}
    </div>
  )
}
