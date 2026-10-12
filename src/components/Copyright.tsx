import clsx from 'clsx'

export const OWNER = 'Lamar'
export const COPYRIGHT = `© ${new Date().getFullYear()} · Bản quyền thuộc về ${OWNER}`

/** The ownership line shown on the welcome glass, the sidebar and at the foot of every page. */
export function Copyright({ className }: { className?: string }) {
  return <p className={clsx('select-none text-center text-[11.5px] tracking-wide text-[var(--color-ink-faint)]', className)}>{COPYRIGHT}</p>
}
