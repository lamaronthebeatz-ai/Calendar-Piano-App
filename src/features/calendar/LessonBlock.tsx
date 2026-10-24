import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import clsx from 'clsx'
import type { DayOfWeek, Student, TimetableSlot } from '../../types'
import { LOCATION_PALETTE } from '../../utils/color'
import { LESSON_TYPE_LABELS } from '../../utils/labels'
import { formatTime } from '../../utils/time'
import { EditIcon, TrashIcon } from '../../components/icons'
import { GRID_END_MINUTES, GRID_START_MINUTES, MIN_LESSON_MINUTES, PX_PER_MINUTE, SNAP_MINUTES } from './constants'
import './motion-calendar.css'

export interface ColumnRect {
  dayOfWeek: DayOfWeek
  left: number
  right: number
}

interface DragResult {
  dayOfWeek: DayOfWeek
  startMinutes: number
  endMinutes: number
}

export type SwipeAction = 'edit' | 'delete'

/** Grid-level drop preview: draws the snapped ghost and reports whether that spot overlaps another lesson. */
export interface DropPreview {
  show: (slotId: string, day: DayOfWeek, start: number, end: number) => boolean
  hide: () => void
}

interface LessonBlockProps {
  slot: TimetableSlot
  student: Student | undefined
  columnIndex: number
  columnCount: number
  interactive: boolean
  upcoming?: boolean
  onOpen: (slot: TimetableSlot) => void
  onSwipeAction?: (slot: TimetableSlot, action: SwipeAction) => void
  onCommitChange: (slot: TimetableSlot, result: DragResult) => void
  getColumnRects?: () => ColumnRect[]
  dropPreview?: DropPreview
  currentDayOfWeek: DayOfWeek
}

type ResizeMode = 'resize-top' | 'resize-bottom'

const LONG_PRESS_MS = 350
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

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

const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
const buzz = (ms: number) => {
  try {
    navigator.vibrate?.(ms)
  } catch {
    // Vibration blocked (iframe, permissions): silent is fine.
  }
}

interface Gesture {
  pointerId: number
  touch: boolean
  x0: number
  y0: number
  dx: number
  dy: number
  phase: 'pending' | 'drag' | 'swipe' | 'scroll'
  timer: number | null
  raf: number
  target: { day: DayOfWeek; start: number; end: number; conflict: boolean } | null
  armed: SwipeAction | null
}

export function LessonBlock({
  slot,
  student,
  columnIndex,
  columnCount,
  interactive,
  upcoming,
  onOpen,
  onSwipeAction,
  onCommitChange,
  getColumnRects,
  dropPreview,
  currentDayOfWeek,
}: LessonBlockProps) {
  const palette = LOCATION_PALETTE[slot.location]
  const originStart = minutesFromTime(slot.startTime)
  const originEnd = minutesFromTime(slot.endTime)

  // Resizing (desktop edges) keeps its React preview; moving and swiping write straight to the DOM.
  const [resize, setResize] = useState<null | { mode: ResizeMode; startClientY: number; previewStart: number; previewEnd: number }>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLParagraphElement>(null)
  const gesture = useRef<Gesture | null>(null)
  const settleTimer = useRef<number | null>(null)
  const resizeMoved = useRef(false)
  const tapped = useRef(false)

  const start = resize ? resize.previewStart : originStart
  const end = resize ? resize.previewEnd : originEnd

  const top = (start - GRID_START_MINUTES) * PX_PER_MINUTE
  const height = Math.max((end - start) * PX_PER_MINUTE, 22)
  const widthPct = 100 / columnCount
  const leftPct = widthPct * columnIndex

  const durationMin = end - start
  const dense = durationMin < 40
  const timeLabel = `${formatTime(timeFromMinutes(start))} – ${formatTime(timeFromMinutes(end))}`

  // Once the store moves the lesson, the block renders at its new place: drop the drop-animation offset.
  useLayoutEffect(() => {
    const el = blockRef.current
    if (!el) return
    el.style.transition = ''
    el.style.transform = ''
    el.classList.remove('is-lifted', 'is-settling')
    if (settleTimer.current) window.clearTimeout(settleTimer.current)
  }, [slot.dayOfWeek, slot.startTime, slot.endTime])

  // While dragging or swiping, the page must not scroll under the finger (touch-action alone can't
  // switch mid-gesture, so cancel the native touchmove instead).
  useEffect(() => {
    const el = blockRef.current
    if (!el) return
    const onTouchMove = (e: TouchEvent) => {
      const g = gesture.current
      if (g && (g.phase === 'drag' || g.phase === 'swipe') && e.cancelable) e.preventDefault()
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      el.removeEventListener('touchmove', onTouchMove)
      const g = gesture.current
      if (g?.timer) window.clearTimeout(g.timer)
      if (g?.raf) cancelAnimationFrame(g.raf)
      if (settleTimer.current) window.clearTimeout(settleTimer.current)
    }
  }, [])

  // ---------- Move (drag) and swipe ----------

  function startDrag(g: Gesture) {
    g.phase = 'drag'
    if (g.timer) window.clearTimeout(g.timer)
    g.timer = null
    if (g.touch) buzz(10)
    const el = blockRef.current
    if (!el) return
    el.style.transition = ''
    el.classList.add('is-lifted')
    el.closest('.cal-grid')?.classList.add('cal-dragging')
    try {
      el.setPointerCapture(g.pointerId)
    } catch {
      // Pointer already released.
    }
    frame()
  }

  function frame() {
    const g = gesture.current
    if (!g || g.raf) return
    g.raf = requestAnimationFrame(() => {
      g.raf = 0
      if (g.phase === 'drag') paintDrag(g)
      else if (g.phase === 'swipe') paintSwipe(g)
    })
  }

  function paintDrag(g: Gesture) {
    const el = blockRef.current
    if (!el) return
    el.style.transform = `translate3d(${g.dx}px, ${g.dy}px, 0) scale(1.04)`
    const duration = originEnd - originStart
    const s = Math.min(Math.max(originStart + snap(g.dy / PX_PER_MINUTE), GRID_START_MINUTES), GRID_END_MINUTES - duration)
    let day = currentDayOfWeek
    const hit = getColumnRects?.().find((r) => g.x0 + g.dx >= r.left && g.x0 + g.dx <= r.right)
    if (hit) day = hit.dayOfWeek
    const prev = g.target
    if (!prev || prev.day !== day || prev.start !== s) {
      const conflict = dropPreview?.show(slot.id, day, s, s + duration) ?? false
      g.target = { day, start: s, end: s + duration, conflict }
      el.classList.toggle('is-conflict', conflict)
      if (timeRef.current) timeRef.current.textContent = `${formatTime(timeFromMinutes(s))} – ${formatTime(timeFromMinutes(s + duration))}`
      if (prev && g.touch) buzz(4)
    }
  }

  function swipeThreshold() {
    const w = blockRef.current?.offsetWidth ?? 60
    return Math.max(26, w * 0.45)
  }

  function paintSwipe(g: Gesture) {
    const card = cardRef.current
    const el = blockRef.current
    if (!card || !el) return
    const w = el.offsetWidth
    // Rubber band past the block's own width.
    const limit = w * 0.85
    const abs = Math.abs(g.dx)
    const x = abs <= limit ? g.dx : Math.sign(g.dx) * (limit + (abs - limit) * 0.25)
    card.style.transform = `translate3d(${x}px, 0, 0)`
    el.dataset.swipe = g.dx > 0 ? 'edit' : 'delete'
    const armed: SwipeAction | null = abs >= swipeThreshold() ? (g.dx > 0 ? 'edit' : 'delete') : null
    if (armed !== g.armed) {
      g.armed = armed
      el.classList.toggle('is-armed', !!armed)
      if (armed) buzz(8)
    }
  }

  function springBackCard() {
    const card = cardRef.current
    const el = blockRef.current
    if (!card || !el) return
    card.style.transition = reducedMotion() ? '' : `transform 380ms ${SPRING}`
    card.style.transform = ''
    el.classList.remove('is-armed')
    window.setTimeout(() => {
      card.style.transition = ''
      delete el.dataset.swipe
    }, 400)
  }

  function endDrag(g: Gesture, cancelled: boolean) {
    const el = blockRef.current
    el?.closest('.cal-grid')?.classList.remove('cal-dragging')
    if (timeRef.current) timeRef.current.textContent = timeLabel
    if (!el) return
    el.classList.remove('is-conflict')
    const t = g.target
    const unchanged = !t || (t.day === currentDayOfWeek && t.start === originStart)
    if (cancelled || unchanged || t.conflict) {
      dropPreview?.hide()
      el.style.transition = reducedMotion() ? '' : `transform 360ms ${SPRING}`
      el.style.transform = ''
      el.classList.remove('is-lifted')
      // A blocked drop goes back home first, then the page asks whether to double-book.
      if (!cancelled && t && t.conflict) onCommitChange(slot, { dayOfWeek: t.day, startMinutes: t.start, endMinutes: t.end })
      return
    }
    const rects = getColumnRects?.() ?? []
    const from = rects.find((r) => r.dayOfWeek === currentDayOfWeek)
    const to = rects.find((r) => r.dayOfWeek === t.day)
    const tx = from && to ? to.left - from.left : 0
    const ty = (t.start - originStart) * PX_PER_MINUTE
    const commit = () => {
      dropPreview?.hide()
      onCommitChange(slot, { dayOfWeek: t.day, startMinutes: t.start, endMinutes: t.end })
      // If the store never moves the block (e.g. a late conflict prompt), let it go home.
      settleTimer.current = window.setTimeout(() => {
        el.style.transition = `transform 300ms ${SPRING}`
        el.style.transform = ''
        el.classList.remove('is-lifted', 'is-settling')
      }, 1500)
    }
    if (reducedMotion()) {
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      commit()
      return
    }
    el.classList.add('is-settling')
    el.style.transition = `transform 340ms ${SPRING}`
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    settleTimer.current = window.setTimeout(commit, 340)
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.button !== 0 || gesture.current) return
    tapped.current = false
    const touch = e.pointerType === 'touch'
    const g: Gesture = { pointerId: e.pointerId, touch, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0, phase: 'pending', timer: null, raf: 0, target: null, armed: null }
    gesture.current = g
    if (touch) {
      g.timer = window.setTimeout(() => gesture.current === g && g.phase === 'pending' && startDrag(g), LONG_PRESS_MS)
    }
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const g = gesture.current
    if (!g || e.pointerId !== g.pointerId) return
    g.dx = e.clientX - g.x0
    g.dy = e.clientY - g.y0
    if (g.phase === 'pending') {
      const ax = Math.abs(g.dx)
      const ay = Math.abs(g.dy)
      if (!g.touch) {
        if (ax > 4 || ay > 4) startDrag(g)
      } else if (ax > 8 && ax > ay * 1.2 && onSwipeAction) {
        if (g.timer) window.clearTimeout(g.timer)
        g.timer = null
        g.phase = 'swipe'
        g.x0 += Math.sign(g.dx) * 8
        g.dx = e.clientX - g.x0
      } else if (ax > 8 || ay > 8) {
        if (g.timer) window.clearTimeout(g.timer)
        g.phase = 'scroll'
      }
      return
    }
    if (g.phase === 'drag' || g.phase === 'swipe') frame()
  }

  function finish(e: ReactPointerEvent<HTMLDivElement>, cancelled: boolean) {
    const g = gesture.current
    if (!g || e.pointerId !== g.pointerId) return
    gesture.current = null
    if (g.timer) window.clearTimeout(g.timer)
    if (g.raf) cancelAnimationFrame(g.raf)
    // Open on the click that follows, so that click can't land on the new dialog's backdrop.
    if (g.phase === 'pending' && !cancelled) tapped.current = true
    else if (g.phase === 'drag') endDrag(g, cancelled)
    else if (g.phase === 'swipe') {
      const action = cancelled ? null : g.armed
      springBackCard()
      if (action) onSwipeAction?.(slot, action)
    }
  }

  // ---------- Resize (desktop edges) ----------

  function beginResize(mode: ResizeMode, e: ReactPointerEvent) {
    if (!interactive) return
    e.stopPropagation()
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    resizeMoved.current = false
    setResize({ mode, startClientY: e.clientY, previewStart: originStart, previewEnd: originEnd })
  }

  function handleResizeMove(e: ReactPointerEvent) {
    if (!resize) return
    e.stopPropagation()
    const deltaY = e.clientY - resize.startClientY
    if (Math.abs(deltaY) > 3) resizeMoved.current = true
    const deltaMinutes = snap(deltaY / PX_PER_MINUTE)
    if (resize.mode === 'resize-top') {
      const s = Math.min(Math.max(originStart + deltaMinutes, GRID_START_MINUTES), originEnd - MIN_LESSON_MINUTES)
      if (s !== resize.previewStart) setResize({ ...resize, previewStart: s, previewEnd: originEnd })
    } else {
      const en = Math.max(Math.min(originEnd + deltaMinutes, GRID_END_MINUTES), originStart + MIN_LESSON_MINUTES)
      if (en !== resize.previewEnd) setResize({ ...resize, previewStart: originStart, previewEnd: en })
    }
  }

  function handleResizeUp(e: ReactPointerEvent) {
    if (!resize) return
    e.stopPropagation()
    const changed = resize.previewStart !== originStart || resize.previewEnd !== originEnd
    setResize(null)
    if (changed && resizeMoved.current) {
      onCommitChange(slot, { dayOfWeek: currentDayOfWeek, startMinutes: resize.previewStart, endMinutes: resize.previewEnd })
    }
  }

  return (
    <div
      ref={blockRef}
      role="button"
      tabIndex={0}
      aria-label={`${student?.nickname ?? student?.name ?? 'Buổi học'} ${formatTime(slot.startTime)} đến ${formatTime(slot.endTime)}${upcoming ? ', sắp bắt đầu' : ''}`}
      className={clsx(
        'cal-block group absolute select-none rounded-lg text-left shadow-[var(--shadow-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
        resize ? 'z-30 shadow-[var(--shadow-float)]' : 'z-10 hover:z-20 hover:shadow-[var(--shadow-float)]',
        interactive ? 'cursor-grab' : 'cursor-pointer',
        upcoming && 'is-upcoming',
      )}
      style={{
        top,
        height,
        left: `calc(${leftPct}% + 2px)`,
        width: `calc(${widthPct}% - 4px)`,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(e) => finish(e, false)}
      onPointerCancel={(e) => finish(e, true)}
      onContextMenu={(e) => e.preventDefault()}
      onClick={() => {
        if (!tapped.current) return
        tapped.current = false
        onOpen(slot)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen(slot)
      }}
    >
      {onSwipeAction && (
        <div aria-hidden className="cal-swipe-actions">
          <span className="cal-swipe-edit">
            <EditIcon width={14} height={14} />
          </span>
          <span className="cal-swipe-delete">
            <TrashIcon width={14} height={14} />
          </span>
        </div>
      )}
      <div
        ref={cardRef}
        className={clsx('cal-card relative h-full overflow-hidden rounded-lg border px-2 py-1', palette.bg)}
        style={{
          borderColor: `color-mix(in srgb, var(--color-status-${slot.location === 'Studio' ? 'confirmed' : slot.location === 'Home' ? 'completed' : slot.location === 'Online' ? 'pending' : 'noshow'}) 35%, transparent)`,
        }}
      >
        <p className={clsx('truncate text-[11.5px] font-semibold leading-tight', palette.text)}>
          {student?.nickname || student?.name || 'Unknown student'}
        </p>
        {!dense && (
          <p ref={timeRef} className="truncate text-[10.5px] leading-tight text-[var(--color-ink-muted)]">
            {timeLabel}
          </p>
        )}
        {durationMin >= 60 && (
          <p className="truncate text-[10.5px] leading-tight text-[var(--color-ink-muted)]">
            {LESSON_TYPE_LABELS[slot.type]} · {LOCATION_PALETTE[slot.location].label}
          </p>
        )}
      </div>
      {interactive && (
        <>
          <div
            className="absolute inset-x-0 top-0 z-[2] h-1.5 cursor-ns-resize opacity-0 group-hover:opacity-100"
            onPointerDown={(e) => beginResize('resize-top', e)}
            onPointerMove={handleResizeMove}
            onPointerUp={handleResizeUp}
          />
          <div
            className="absolute inset-x-0 bottom-0 z-[2] h-1.5 cursor-ns-resize opacity-0 group-hover:opacity-100"
            onPointerDown={(e) => beginResize('resize-bottom', e)}
            onPointerMove={handleResizeMove}
            onPointerUp={handleResizeUp}
          />
        </>
      )}
    </div>
  )
}
