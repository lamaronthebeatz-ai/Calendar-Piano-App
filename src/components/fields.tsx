import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ChevronDownIcon } from './icons'

export function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-[var(--color-ink-muted)]">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-[12px] text-[var(--color-status-cancelled)]">{error}</span>
      ) : hint ? (
        <span className="mt-1 block text-[12px] text-[var(--color-ink-faint)]">{hint}</span>
      ) : null}
    </label>
  )
}

const inputBase =
  'h-10 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15'

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={clsx(inputBase, props.className)} />
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={clsx(inputBase, 'h-auto min-h-[84px] resize-none py-2.5', props.className)} />
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={clsx(inputBase, 'appearance-none pr-9', props.className)} />
      <ChevronDownIcon width={16} height={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
    </div>
  )
}

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (value: T) => void
  options: Array<{ value: T; label: string }>
}) {
  return (
    <div className="inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={clsx(
            'rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors',
            value === opt.value ? 'bg-[var(--color-surface-raised)] text-[var(--color-ink)] shadow-[var(--shadow-soft)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
