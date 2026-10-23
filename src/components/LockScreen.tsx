import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { BrandMark } from './icons'
import { Copyright } from './Copyright'

/**
 * Welcome screen with a passcode, drawn as frosted glass over the live app. A correct code
 * lifts the glass away. This is a privacy curtain, not security: everything runs on the device,
 * so only a hash of the code ships in the bundle.
 */
const LENGTH = 6
const HASH = 'dab66e8584ed9a873292351037637ac6530b38370739bba605c9fbe42bbb6f1c'
const KEY = 'app:unlocked'

/** Unlocked once per app session: a reload stays in, a fresh launch asks again. */
export function isUnlocked() {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

async function matches(code: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(code))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('') === HASH
}

function greeting(hour: number) {
  if (hour < 11) return 'Chào buổi sáng'
  if (hour < 13) return 'Chào buổi trưa'
  if (hour < 18) return 'Chào buổi chiều'
  return 'Chào buổi tối'
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'] as const

type Phase = 'input' | 'wrong' | 'right' | 'leaving'

export function LockScreen({ onUnlock, onDone }: { onUnlock: () => void; onDone: () => void }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<Phase>('input')
  const [now] = useState(() => new Date())

  const press = useCallback(
    (key: string) => {
      if (phase !== 'input') return
      if (key === 'del') return setCode((c) => c.slice(0, -1))
      if (code.length >= LENGTH) return
      const next = code + key
      setCode(next)
      if (next.length < LENGTH) return
      matches(next).then((ok) => {
        if (ok) {
          setPhase('right')
          try {
            sessionStorage.setItem(KEY, '1')
          } catch {
            // Storage unavailable: the code will be asked again on reload.
          }
          // A beat to show the filled dots, then the glass lifts and the app takes input.
          setTimeout(() => {
            setPhase('leaving')
            onUnlock()
          }, 280)
        } else {
          setPhase('wrong')
          navigator.vibrate?.(90)
          setTimeout(() => {
            setCode('')
            setPhase('input')
          }, 650)
        }
      })
    },
    [code, phase, onUnlock],
  )

  // A hardware keyboard works too. Listening in the capture phase and stopping every key keeps
  // the app's own shortcuts (n, /) from opening dialogs behind the glass.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (/^\d$/.test(e.key)) press(e.key)
      else if (e.key === 'Backspace') press('del')
    }
    addEventListener('keydown', onKey, true)
    return () => removeEventListener('keydown', onKey, true)
  }, [press])

  const date = now.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div
      role="dialog"
      aria-modal
      aria-label="Màn hình chào mừng"
      onTransitionEnd={(e) => e.target === e.currentTarget && phase === 'leaving' && onDone()}
      className={clsx('lock-glass fixed inset-0 z-[100] flex flex-col overflow-hidden', phase === 'leaving' && 'is-leaving')}
    >
      {/* Warm light behind the frosting, like the hero of the library. */}
      <div aria-hidden className="lock-glow pointer-events-none absolute inset-0" />

      <div className="lock-content relative mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,env(safe-area-inset-top))]">
        <div className="animate-float-up flex flex-col items-center text-center">
          <span className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-white/40 bg-[var(--color-surface-raised)]/70 shadow-[var(--shadow-float)]">
            <BrandMark width={44} height={44} />
          </span>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">{greeting(now.getHours())}</p>
          <h1 className="mt-2 font-display text-[34px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">Lịch Dạy Piano</h1>
          <p className="mt-1 text-[13.5px] capitalize text-[var(--color-ink-muted)]">{date}</p>
        </div>

        <div className="mt-10 flex flex-col items-center" style={{ animationDelay: '80ms' }}>
          <p aria-live="polite" className={clsx('h-5 text-[13.5px] font-medium transition-colors', phase === 'wrong' ? 'text-[var(--color-status-cancelled)]' : 'text-[var(--color-ink-muted)]')}>
            {phase === 'wrong' ? 'Sai mã, thử lại' : phase === 'input' ? 'Nhập mã để vào' : 'Chào mừng trở lại'}
          </p>
          <div className={clsx('mt-4 flex gap-4', phase === 'wrong' && 'lock-shake')} aria-label={`${code.length} trên ${LENGTH} số`}>
            {Array.from({ length: LENGTH }, (_, i) => (
              <span
                key={i}
                className={clsx(
                  'lock-dot h-3.5 w-3.5 rounded-full border-[1.5px]',
                  phase === 'wrong'
                    ? 'border-[var(--color-status-cancelled)] bg-[var(--color-status-cancelled)]'
                    : phase === 'right' || phase === 'leaving'
                      ? 'border-[var(--color-gold)] bg-[var(--color-gold)]'
                      : i < code.length
                        ? 'is-filled border-[var(--color-ink)] bg-[var(--color-ink)]'
                        : 'border-[var(--color-ink-muted)]',
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
          {KEYS.map((key, i) =>
            key === '' ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                type="button"
                onClick={() => press(key)}
                aria-label={key === 'del' ? 'Xoá' : key}
                className={clsx(
                  'lock-key flex h-[72px] w-[72px] items-center justify-center rounded-full text-[var(--color-ink)] select-none',
                  key === 'del' ? 'text-[14px] font-medium text-[var(--color-ink-muted)]' : 'lock-key-digit font-display text-[30px] font-medium',
                )}
              >
                {key === 'del' ? (code ? 'Xoá' : '') : key}
              </button>
            ),
          )}
        </div>
      </div>

      <Copyright className="lock-content relative mb-3 text-[var(--color-ink-muted)]" />

      {/* The handle hints which way the glass goes. */}
      <div aria-hidden className="relative mx-auto mb-[max(0.75rem,env(safe-area-inset-bottom))] h-1.5 w-32 rounded-full bg-[var(--color-ink)]/25" />
    </div>
  )
}
