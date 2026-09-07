import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { IconButton } from './Button'
import { XIcon } from './icons'

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  width?: 'sm' | 'md' | 'lg'
}

export function Dialog({ open, onClose, title, subtitle, children, footer, width = 'md' }: DialogProps) {
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  if (!open) return null

  const header = (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-5 py-4">
      <div>
        <h2 className="text-[15px] font-semibold text-[var(--color-ink)]">{title}</h2>
        {subtitle && <p className="mt-0.5 text-[13px] text-[var(--color-ink-muted)]">{subtitle}</p>}
      </div>
      <IconButton label="Close" icon={<XIcon width={18} height={18} />} onClick={onClose} />
    </div>
  )

  const body = (
    <>
      {header}
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
      {footer && <div className="border-t border-[var(--color-border)] px-5 py-4">{footer}</div>}
    </>
  )

  return createPortal(
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/35 animate-fade-in" onClick={onClose} />
      {isDesktop ? (
        <div className="relative m-auto flex max-h-[85vh] w-full animate-pop-in flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]" style={{ maxWidth: width === 'sm' ? 420 : width === 'lg' ? 640 : 520 }}>
          {body}
        </div>
      ) : (
        <div
          className={clsx(
            'relative mt-auto flex max-h-[88vh] w-full animate-sheet-up flex-col overflow-hidden rounded-t-2xl border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]',
          )}
        >
          <div className="mx-auto mt-2 h-1.5 w-10 shrink-0 rounded-full bg-[var(--color-border-strong)]" />
          {body}
        </div>
      )}
    </div>,
    document.body,
  )
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  tone = 'default',
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmLabel?: string
  tone?: 'default' | 'danger'
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      width="sm"
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="h-10 rounded-xl border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className={clsx(
              'h-10 rounded-xl px-4 text-sm font-medium',
              tone === 'danger'
                ? 'bg-[var(--color-status-cancelled)] text-white hover:opacity-90'
                : 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:opacity-90',
            )}
          >
            {confirmLabel}
          </button>
        </div>
      }
    >
      <p className="text-sm text-[var(--color-ink-muted)]">{description}</p>
    </Dialog>
  )
}
