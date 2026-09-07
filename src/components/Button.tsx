import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:opacity-90 active:opacity-80',
  secondary: 'bg-[var(--color-surface-sunken)] text-[var(--color-ink)] hover:bg-[var(--color-border)] border border-[var(--color-border)]',
  ghost: 'bg-transparent text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]',
  danger: 'bg-transparent text-[var(--color-status-cancelled)] hover:bg-[var(--color-status-cancelled-bg)]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-[13px] gap-1.5 rounded-lg',
  md: 'h-10 px-4 text-sm gap-2 rounded-xl',
  lg: 'h-12 px-5 text-[15px] gap-2 rounded-xl',
}

export function Button({ variant = 'secondary', size = 'md', icon, fullWidth, className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}

export function IconButton({
  label,
  icon,
  className,
  size = 'md',
  ...rest
}: { label: string; icon: ReactNode; size?: Size } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const dims = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  return (
    <button
      aria-label={label}
      title={label}
      className={clsx(
        'inline-flex items-center justify-center rounded-full text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] transition-colors disabled:opacity-40 disabled:pointer-events-none',
        dims,
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  )
}
