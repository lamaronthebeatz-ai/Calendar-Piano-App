import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import clsx from 'clsx'
import { BrandMark } from './icons'
import { Copyright } from './Copyright'
import { introMuted, setIntroMuted } from './introMusic'
import './lock-motion.css'

/**
 * Welcome screen with a passcode, drawn as frosted glass over the live app. A correct code
 * lifts the glass away. This is a privacy curtain, not security: everything runs on the device,
 * so only a hash of the code ships in the bundle.
 */
const LENGTH = 6
const HASH = 'dab66e8584ed9a873292351037637ac6530b38370739bba605c9fbe42bbb6f1c'
const KEY = 'app:unlocked'
const MEDIA = `${import.meta.env.BASE_URL}media/lock-orchestra`
/** Commons: Midwest Young Artists Symphony Orchestra, Berlioz, Symphonie fantastique V (CC BY 3.0). */
const VIDEO_PAGE = 'https://commons.wikimedia.org/wiki/File:10_Berlioz_Symphonie_Fantastique_V_Songe_d%27une_nuit_du_sabbat.webm'

/** A still frame instead of the clip when the viewer asks for less motion or less data. */
function stillOnly() {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  return matchMedia('(prefers-reduced-motion: reduce)').matches || !!conn?.saveData
}

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

/** Order the glissando sweeps the keypad: up the rows, then 0. */
const GLISS_ORDER: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '0': 9 }
const GLISS_STEP = 45
const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** Text revealed letter by letter; screen readers get the whole string. */
function Letters({ text, delay = 0, step = 28 }: { text: string; delay?: number; step?: number }) {
  return (
    <span>
      <span className="sr-only">{text}</span>
      {[...text].map((ch, i) => (
        <span key={i} aria-hidden className="lock-letter" style={{ animationDelay: `${delay + i * step}ms` }}>
          {ch === ' ' ? '\u00a0' : ch}
        </span>
      ))}
    </span>
  )
}

/** A handful of notes drifting behind the glass. */
const NOTES = [
  { ch: '♪', left: '8%', size: 22, dur: 19, delay: -3 },
  { ch: '♫', left: '78%', size: 26, dur: 23, delay: -11 },
  { ch: '♩', left: '30%', size: 18, dur: 27, delay: -17 },
  { ch: '♬', left: '62%', size: 20, dur: 21, delay: -6 },
  { ch: '♪', left: '92%', size: 16, dur: 25, delay: -14 },
]

/** `armed` false while the opening intro plays: keys and taps are ignored until it ends. */
export function LockScreen({ onUnlock, onDone, armed = true }: { onUnlock: () => void; onDone: () => void; armed?: boolean }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<Phase>('input')
  const [now] = useState(() => new Date())
  const [muted, setMuted] = useState(introMuted)

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
          // The keys sweep like a glissando and the lock opens, then the glass lifts and the app takes input.
          setTimeout(
            () => {
              setPhase('leaving')
              onUnlock()
            },
            reducedMotion() ? 280 : 10 * GLISS_STEP + 420,
          )
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
      if (!armed) return
      if (/^\d$/.test(e.key)) press(e.key)
      else if (e.key === 'Backspace') press('del')
    }
    addEventListener('keydown', onKey, true)
    return () => removeEventListener('keydown', onKey, true)
  }, [press, armed])

  const date = now.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div
      role="dialog"
      aria-modal
      aria-label="Màn hình chào mừng"
      onTransitionEnd={(e) => e.target === e.currentTarget && phase === 'leaving' && onDone()}
      className={clsx('lock-glass lock-cinema fixed inset-0 z-[100] flex flex-col overflow-hidden', armed && 'is-armed', phase === 'leaving' && 'is-leaving')}
    >
      {/* An orchestra on stage: shown clear under the opening signature, then softened behind the passcode. */}
      {stillOnly() ? (
        <img aria-hidden src={`${MEDIA}.webp`} alt="" className="lock-video pointer-events-none absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video aria-hidden autoPlay muted loop playsInline poster={`${MEDIA}.webp`} className="lock-video pointer-events-none absolute inset-0 h-full w-full object-cover">
          <source src={`${MEDIA}.mp4`} type="video/mp4" />
          <source src={`${MEDIA}.webm`} type="video/webm" />
        </video>
      )}
      <div aria-hidden className="lock-scrim pointer-events-none absolute inset-0" />
      {/* Warm light behind the frosting, like the hero of the library. */}
      <div aria-hidden className="lock-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {NOTES.map((n, i) => (
          <span key={i} className="lock-note" style={{ left: n.left, fontSize: n.size, animationDuration: `${n.dur}s`, animationDelay: `${n.delay}s` }}>
            {n.ch}
          </span>
        ))}
      </div>

      <div
        data-phase={phase}
        className={clsx(
          'lock-content relative mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,env(safe-area-inset-top))]',
          phase === 'wrong' && 'lock-frame-shake',
        )}
      >
        <div className="animate-float-up flex flex-col items-center text-center">
          <span data-intro="logo" className={clsx('lock-logo relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-white/40 bg-[var(--color-surface-raised)]/70 shadow-[var(--shadow-float)]', (phase === 'right' || phase === 'leaving') && 'is-open')}>
            <BrandMark width={62} height={62} />
            {/* A small padlock on the keys; its shackle springs open with the right code. */}
            <span aria-hidden className="lock-logo-badge absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-gold)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path className="lock-logo-shackle" d="M8 11V7.5a4 4 0 0 1 8 0V11" />
                <rect x="5" y="11" width="14" height="10" rx="2.5" />
              </svg>
            </span>
          </span>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
            <Letters key={String(armed)} text={greeting(now.getHours())} delay={260} />
          </p>
          <h1 className="mt-2 font-display text-[34px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">Trung tâm lý thuyết âm nhạc học<span className="mt-1 block font-sans text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">by Lamar</span></h1>
          <p className="mt-1 text-[13.5px] capitalize text-[var(--color-ink-muted)]">
            <Letters key={String(armed)} text={date} delay={520} step={18} />
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center" style={{ animationDelay: '80ms' }}>
          <p aria-live="polite" className={clsx('h-5 text-[13.5px] font-medium transition-colors', phase === 'wrong' ? 'text-[var(--color-status-cancelled)]' : 'text-[var(--color-ink-muted)]')}>
            {phase === 'wrong' ? 'Sai mã, thử lại' : phase === 'input' ? 'Nhập mã để vào' : 'Chào mừng trở lại'}
          </p>
          <div className={clsx('mt-4 flex gap-4', phase === 'wrong' && 'lock-dots-wrong')} aria-label={`${code.length} trên ${LENGTH} số`}>
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
                style={key in GLISS_ORDER ? ({ '--gliss-delay': `${GLISS_ORDER[key] * GLISS_STEP}ms` } as CSSProperties) : undefined}
                className={clsx(
                  (phase === 'right' || phase === 'leaving') && key in GLISS_ORDER && 'lock-gliss',
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
      <button
        type="button"
        onClick={() => {
          setIntroMuted(!muted)
          setMuted(!muted)
        }}
        aria-label={muted ? 'Bật nhạc mở đầu' : 'Tắt nhạc mở đầu'}
        title="Dvořák — Giao hưởng số 9, chương IV (Musopen, phạm vi công cộng)"
        className="lock-content lock-sound absolute left-3 top-[max(0.5rem,env(safe-area-inset-top))] flex h-9 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium text-[var(--color-ink-muted)]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          {muted ? <path d="m16 9 5 6m0-6-5 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />}
        </svg>
        Dvořák · Giao hưởng số 9
      </button>
      <a href={VIDEO_PAGE} target="_blank" rel="noreferrer" title="Midwest Young Artists Symphony Orchestra — Berlioz, Symphonie fantastique, chương V (Wikimedia Commons, CC BY 3.0)" className="lock-content absolute right-3 top-[max(0.5rem,env(safe-area-inset-top))] text-[10px] text-[var(--color-ink-muted)]/70 underline-offset-2 hover:underline">
        Video: MYA Symphony Orchestra · CC BY 3.0
      </a>

      {/* The handle hints which way the glass goes. */}
      <div aria-hidden className="relative mx-auto mb-[max(0.75rem,env(safe-area-inset-bottom))] h-1.5 w-32 rounded-full bg-[var(--color-ink)]/25" />
    </div>
  )
}
