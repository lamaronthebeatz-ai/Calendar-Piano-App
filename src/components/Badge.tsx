import clsx from 'clsx'
import type { LessonStatus } from '../types'
import { STATUS_PALETTE } from '../utils/color'

export function StatusBadge({ status, className }: { status: LessonStatus; className?: string }) {
  const palette = STATUS_PALETTE[status]
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide',
        palette.bg,
        palette.text,
        className,
      )}
    >
      <span className={clsx('h-1.5 w-1.5 rounded-full', palette.dot)} />
      {palette.label}
    </span>
  )
}

export function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(-2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-sunken)] font-semibold text-[var(--color-ink-muted)]"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials}
    </div>
  )
}
