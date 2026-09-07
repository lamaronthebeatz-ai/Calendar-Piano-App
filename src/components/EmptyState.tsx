import type { ReactNode } from 'react'

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-14 text-center">
      {icon && <div className="text-[var(--color-ink-faint)]">{icon}</div>}
      <div className="space-y-1">
        <p className="text-[15px] font-medium text-[var(--color-ink)]">{title}</p>
        {description && <p className="text-sm text-[var(--color-ink-muted)]">{description}</p>}
      </div>
      {action}
    </div>
  )
}
