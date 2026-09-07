import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { useUIStore } from '../store/uiStore'
import { CheckIcon, XIcon, AlertTriangleIcon } from './icons'

export function ToastHost() {
  const toasts = useUIStore((s) => s.toasts)
  const dismissToast = useUIStore((s) => s.dismissToast)

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+84px)] z-[60] flex flex-col items-center gap-2 lg:bottom-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            'pointer-events-auto flex max-w-sm animate-slide-up items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-[var(--shadow-float)]',
            toast.tone === 'success' && 'border-[var(--color-status-completed)]/30 bg-[var(--color-status-completed-bg)] text-[var(--color-status-completed)]',
            toast.tone === 'error' && 'border-[var(--color-status-cancelled)]/30 bg-[var(--color-status-cancelled-bg)] text-[var(--color-status-cancelled)]',
            toast.tone === 'default' && 'border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)]',
          )}
        >
          {toast.tone === 'success' && <CheckIcon width={16} height={16} />}
          {toast.tone === 'error' && <AlertTriangleIcon width={16} height={16} />}
          <span>{toast.message}</span>
          <button onClick={() => dismissToast(toast.id)} className="ml-1 opacity-60 hover:opacity-100">
            <XIcon width={14} height={14} />
          </button>
        </div>
      ))}
    </div>,
    document.body,
  )
}
