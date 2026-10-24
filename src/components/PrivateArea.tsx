import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import clsx from 'clsx'
import { isUnlocked as welcomePassed } from './LockScreen'
import { setPrivateUnlocked as set, usePrivateUnlocked } from './privateLock'
import './lock-motion.css'

/**
 * A second, local lock for the private pages (timetable and students). The frosted pane covers only the
 * page body, so the sidebar and tab bar stay usable. One code opens both pages for the rest of the session.
 * Like the welcome screen this is a privacy curtain, not security: only a hash of the code ships.
 */
const LENGTH = 6
const HASH = 'f097eeb70c91d47a592f00b7ecd261567c8098a45133c1ef8325b18dbcf15ef6'
async function matches(code: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(code))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('') === HASH
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'] as const
type Phase = 'input' | 'wrong' | 'right' | 'leaving'
const GLISS_ORDER: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '0': 9 }
const GLISS_STEP = 26
const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function PrivateArea({ title, children }: { title: string; children: ReactNode }) {
  const unlocked = usePrivateUnlocked()
  // The pane stays mounted while it lifts away, and comes back down when the pages are locked again.
  const [pane, setPane] = useState<'hidden' | 'shown' | 'dropping'>(unlocked ? 'hidden' : 'shown')
  if (!unlocked && pane === 'hidden') setPane('dropping')

  return (
    <div className="relative h-full overflow-hidden">
      <div inert={!unlocked} aria-hidden={!unlocked} className={clsx('private-veil h-full', !unlocked && 'is-veiled')}>
        {children}
      </div>
      {pane !== 'hidden' && <Pane title={title} dropping={pane === 'dropping'} onDone={() => setPane('hidden')} />}
    </div>
  )
}

function Pane({ title, dropping, onDone }: { title: string; dropping: boolean; onDone: () => void }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<Phase>('input')

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
          // The keys sweep and the shackle opens, then the pane lifts and the page clears.
          const beat = reducedMotion() ? 420 : 10 * GLISS_STEP + 320
          setTimeout(() => {
            setPhase('leaving')
            set(true)
          }, beat)
          setTimeout(onDone, beat + 1080)
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
    [code, phase, onDone],
  )

  // A hardware keyboard works too, unless the welcome glass is still up or the user is typing in a form.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!welcomePassed()) return
      const t = e.target as HTMLElement | null
      if (t?.closest('input, textarea, select, [contenteditable], [role="dialog"]')) return
      if (/^\d$/.test(e.key)) {
        e.stopPropagation()
        press(e.key)
      } else if (e.key === 'Backspace') {
        e.stopPropagation()
        press('del')
      }
    }
    addEventListener('keydown', onKey, true)
    return () => removeEventListener('keydown', onKey, true)
  }, [press])

  return (
    <div
      role="dialog"
      aria-modal={false}
      aria-label={`${title} đang khoá`}
      onTransitionEnd={(e) => e.target === e.currentTarget && phase === 'leaving' && onDone()}
      className={clsx('private-glass absolute inset-0 z-30 flex flex-col overflow-y-auto', dropping && 'is-dropping', phase === 'leaving' && 'is-leaving')}
    >
      <div aria-hidden className="lock-glow pointer-events-none absolute inset-0" />
      <div className="private-content relative m-auto w-full max-w-xs px-6 py-8">
        <div className={clsx('flex flex-col items-center text-center', phase === 'wrong' && 'lock-frame-shake')}>
          <span
            className={clsx(
              'private-emblem flex h-16 w-16 items-center justify-center rounded-[20px] text-[var(--color-gold)]',
              (phase === 'right' || phase === 'leaving') && 'is-open',
            )}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path className="private-shackle" d="M8 11V7.5a4 4 0 0 1 8 0V11" />
              <rect x="5" y="11" width="14" height="10" rx="2.5" />
              <path d="M12 15v2" />
            </svg>
          </span>
          <p className="mt-5 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Khu vực riêng tư</p>
          <h2 className="mt-1.5 font-display text-[26px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">{title}</h2>
          <p aria-live="polite" className={clsx('mt-2 h-5 text-[13px] transition-colors', phase === 'wrong' ? 'text-[var(--color-status-cancelled)]' : 'text-[var(--color-ink-muted)]')}>
            {phase === 'wrong' ? 'Sai mã, thử lại' : phase === 'input' ? 'Nhập mã riêng để xem' : 'Đã mở khoá'}
          </p>

          <div className={clsx('mt-5 flex gap-3.5', phase === 'wrong' && 'lock-dots-wrong')} aria-label={`${code.length} trên ${LENGTH} số`}>
            {Array.from({ length: LENGTH }, (_, i) => (
              <span
                key={i}
                className={clsx(
                  'lock-dot h-3 w-3 rounded-full border-[1.5px]',
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

          <div className="mt-7 grid grid-cols-3 gap-x-5 gap-y-3">
            {KEYS.map((key, i) =>
              key === '' ? (
                <span key={i} />
              ) : (
                <button
                  key={i}
                  type="button"
                  onClick={() => press(key)}
                  aria-label={key === 'del' ? 'Xoá' : key}
                  style={key in GLISS_ORDER ? ({ '--gliss-delay': `${GLISS_ORDER[key] * GLISS_STEP}ms` } as CSSProperties) : undefined}
                  className={clsx(
                    (phase === 'right' || phase === 'leaving') && key in GLISS_ORDER && 'lock-gliss',
                    'lock-key flex h-[58px] w-[58px] items-center justify-center rounded-full text-[var(--color-ink)] select-none',
                    key === 'del' ? 'text-[13px] font-medium text-[var(--color-ink-muted)]' : 'lock-key-digit font-display text-[24px] font-medium',
                  )}
                >
                  {key === 'del' ? (code ? 'Xoá' : '') : key}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
