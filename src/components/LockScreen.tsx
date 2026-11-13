import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import clsx from 'clsx'
import { checkCode } from '../lib/passcode'
import logoFull from '../assets/logo-full.webp'
import './lock.css'
import { openVault } from '../lib/vault'

/**
 * The lock screen is the entrance hall of the home page: the same painting (P. S. Krøyer, Duet, 1887; public domain,
 * Statens Museum for Kunst) under a quiet column — signature, date, time, six dots, a hairline keypad. A correct code
 * fades the column away and then the hall itself, uncovering the home page's hero on the very same painting, whose
 * title rises as the curtain goes. Everything runs on the device, so what ships is a slow PBKDF2 verifier of the code
 * (lib/passcode.ts, made in Settings → Bảo mật), never the code; the code also opens the vault of private data.
 */
const LENGTH = 6
const HASH = 'pbkdf2$1000000$4+7hiSBix4JdVfAEYE1MNw==$Gh7ZGKIGbq6KMq1GPTP3jRQTSVYqDsxN+kW9kw/e68w='
const KEY = 'app:unlocked'
const ART = `${import.meta.env.BASE_URL}images/home/duet`

/** Unlocked once per app session: a reload stays in, a fresh launch asks again. */
export function isUnlocked() {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

const matches = (code: string) => checkCode(code, HASH)

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'] as const
type Phase = 'input' | 'checking' | 'wrong' | 'right' | 'leaving'
const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** The current time, ticking on the minute. */
function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    let iv = 0
    const t = window.setTimeout(() => {
      setNow(new Date())
      iv = window.setInterval(() => setNow(new Date()), 60_000)
    }, 60_000 - (Date.now() % 60_000) + 50)
    return () => {
      clearTimeout(t)
      clearInterval(iv)
    }
  }, [])
  return now
}

/** Gold dust in the candlelight, as on the home page (fixed positions, so every launch looks the same). */
const DUST = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 41 + 7) % 100}%`,
  top: `${35 + ((i * 29) % 60)}%`,
  size: 1.5 + ((i * 5) % 3) * 0.8,
  dur: `${10 + ((i * 7) % 8)}s`,
  delay: `${-((i * 11) % 15)}s`,
}))

export function LockScreen({ onUnlock, onDone }: { onUnlock: () => void; onDone: () => void }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<Phase>('input')
  const now = useClock()

  const press = useCallback(
    (key: string) => {
      if (phase !== 'input') return
      if (key === 'del') return setCode((c) => c.slice(0, -1))
      if (code.length >= LENGTH) return
      const next = code + key
      setCode(next)
      if (next.length < LENGTH) return
      // the slow check takes a moment on a phone: say so, and take no keys meanwhile
      setPhase('checking')
      matches(next).then((ok) => {
        if (ok) {
          setPhase('right')
          // the same code opens the vault of private data (derivation runs in the background)
          void openVault(next)
          try {
            sessionStorage.setItem(KEY, '1')
          } catch {
            // Storage unavailable: the code will be asked again on reload.
          }
          // The dots light up, the column fades; then the hall itself dissolves into the home page.
          setTimeout(
            () => {
              setPhase('leaving')
              onUnlock()
            },
            reducedMotion() ? 150 : 520,
          )
        } else {
          setPhase('wrong')
          navigator.vibrate?.(80)
          setTimeout(() => {
            setCode('')
            setPhase('input')
          }, 620)
        }
      })
    },
    [code, phase, onUnlock],
  )

  // A hardware keyboard works too; capturing and stopping every key keeps the app's shortcuts quiet behind the lock.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (/^\d$/.test(e.key)) press(e.key)
      else if (e.key === 'Backspace') press('del')
    }
    addEventListener('keydown', onKey, true)
    return () => removeEventListener('keydown', onKey, true)
  }, [press])

  // Touch feedback that works on iOS too (where :active needs a touch listener): a ring that lights and fades.
  const down = (e: React.PointerEvent<HTMLButtonElement>) => {
    const el = e.currentTarget
    el.classList.add('is-down')
    const up = () => {
      setTimeout(() => el.classList.remove('is-down'), 90)
      el.removeEventListener('pointerup', up)
      el.removeEventListener('pointercancel', up)
      el.removeEventListener('pointerleave', up)
    }
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)
    el.addEventListener('pointerleave', up)
  }

  const date = now
    .toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' })
    .replace(', ', ' · ')
  const time = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false })
  const done = phase === 'right' || phase === 'leaving'

  return (
    <div
      role="dialog"
      aria-modal
      aria-label="Màn hình khoá"
      data-phase={phase}
      onTransitionEnd={(e) => e.target === e.currentTarget && phase === 'leaving' && onDone()}
      className={clsx('lk', phase === 'leaving' && 'is-leaving')}
    >
      <div className="lk-art" aria-hidden>
        <picture>
          <source media="(max-width: 760px)" srcSet={`${ART}-sm.webp`} />
          <img src={`${ART}.webp`} alt="" className="lk-art-img" decoding="async" />
        </picture>
      </div>
      <div className="lk-veil" aria-hidden />
      <div className="lk-dust" aria-hidden>
        {DUST.map((d, i) => (
          <span key={i} style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDuration: d.dur, animationDelay: d.delay }} />
        ))}
      </div>

      <main className={clsx('lk-column', phase === 'wrong' && 'is-wrong', phase === 'checking' && 'is-checking', done && 'is-done')}>
        <div className="lk-sign" style={{ '--logo': `url(${logoFull})` } as CSSProperties}>
          <img src={logoFull} alt="Lamar" draggable={false} />
        </div>

        <p className="lk-date">{date}</p>
        <p className="lk-time" aria-label={`Bây giờ là ${time}`}>
          <span>{time}</span>
        </p>

        <p className="lk-status" aria-live="polite">
          {phase === 'wrong' ? 'Mã chưa đúng' : phase === 'checking' ? 'Đang kiểm…' : done ? 'Mời vào' : 'Nhập mã riêng'}
        </p>
        <div className="lk-dots" aria-label={`${code.length} trên ${LENGTH} số`}>
          {Array.from({ length: LENGTH }, (_, i) => (
            <span key={i} className={clsx('lk-dot', (i < code.length || done) && 'is-on')} style={{ '--d': i } as CSSProperties} />
          ))}
        </div>

        <div className="lk-keys">
          {KEYS.map((key, i) =>
            key === '' ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                type="button"
                onPointerDown={down}
                onClick={() => press(key)}
                aria-label={key === 'del' ? 'Xoá' : key}
                className={clsx('lk-key', key === 'del' && 'is-del', key === 'del' && !code && 'is-idle')}
                style={{ '--k': i } as CSSProperties}
              >
                {key === 'del' ? 'Xoá' : key}
              </button>
            ),
          )}
        </div>
      </main>

      <footer className="lk-foot">
        <span>P. S. Krøyer, <i>Song tấu</i>, 1887 · SMK</span>
        <span>© {now.getFullYear()} Lamar</span>
      </footer>
    </div>
  )
}
