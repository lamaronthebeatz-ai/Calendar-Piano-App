import { forwardRef, useEffect, useRef } from 'react'
import { CLIPS, transformOf, type Part } from '../../scene/character/clips'
import type { Appearance, CharacterVisual, Mood } from '../../scene/character/defs'
import type { Facing } from '../../scene/types'

const INK = '#24170d'

/**
 * The character renderer: one rig for every character — legs, a torso (robe, arms, head) and a held item — drawn from
 * the character's appearance and moved only by the clip it is given (Web Animations on transform). Position along the
 * floor is set by the scene on the root element each frame (ref); this component re-renders only when the clip,
 * facing, mood or pause state changes.
 *
 * Anchor: the root sits on the floor line at the character's x; the figure stands on it, centred. Height and build
 * scale the rig around that anchor, so characters of different sizes share every clip.
 */
type Props = { visual: CharacterVisual; facing: Facing; clip: string; token: number; mood: Mood; paused: boolean; reduced: boolean; testId?: string; state?: string; className?: string; top: number; x?: number }

export const Character = forwardRef<HTMLDivElement, Props>(function Character({ visual, facing, clip, token, mood, paused, reduced, testId, state, className, top, x }, ref) {
  const parts = useRef<Partial<Record<Part, HTMLElement | null>>>({})
  const running = useRef<Animation[]>([])
  const a = visual.appearance

  // a new clip (or the same clip played again: a new token) cancels the old animations and starts its tracks
  useEffect(() => {
    running.current.forEach((x) => x.cancel())
    running.current = []
    const c = CLIPS[clip] ?? CLIPS.idle
    for (const [part, keys] of Object.entries(c.tracks) as [Part, NonNullable<(typeof c.tracks)[Part]>][]) {
      const el = parts.current[part]
      if (!el || typeof el.animate !== 'function') continue
      // motion reduced: no loops, one-shots jump to their last pose (events still fire: the animator does not wait)
      if (reduced && c.loop) continue
      const frames = keys.map((k) => ({ transform: transformOf(k), offset: k.at }))
      const anim = reduced
        ? el.animate([frames[frames.length - 1]], { duration: 1, fill: 'forwards' })
        : el.animate(frames, { duration: c.duration, iterations: c.loop ? Infinity : 1, fill: 'forwards', easing: 'ease-in-out' })
      running.current.push(anim)
    }
  }, [clip, token, reduced])
  useEffect(() => {
    running.current.forEach((x) => (paused ? x.pause() : x.play()))
  }, [paused])
  useEffect(() => () => running.current.forEach((x) => x.cancel()), [])

  const p = (k: Part) => (el: HTMLElement | null) => {
    parts.current[k] = el
  }
  const tunic = a.garment === 'tunic'
  return (
    <div ref={ref} className={`ch ${className ?? ''}`} style={{ top, ...(x !== undefined ? { transform: `translate3d(${x}px, 0, 0)` } : {}) }} data-testid={testId} data-state={state} data-clip={clip} data-mood={mood}>
      <div className="ch-flip" style={{ transform: `scaleX(${facing})` }}>
        <div className="ch-rig" style={{ transform: `scale(${visual.build * visual.height}, ${visual.height})` }}>
          <span className="ch-shadow" />
          <span ref={p('legB')} className="ch-leg is-back" style={{ background: tunic ? '#4a3a2a' : a.colour }} />
          <span ref={p('legF')} className="ch-leg is-front" style={{ background: tunic ? '#4a3a2a' : a.colour }} />
          <div ref={p('body')} className="ch-torso">
            <span ref={p('armB')} className="ch-arm is-back" style={{ background: a.colour }} />
            <Robe a={a} />
            <div ref={p('head')} className="ch-head">
              <Head a={a} mood={mood} />
              <span ref={p('mouth')} className={`ch-mouth is-${mood}`} />
            </div>
            <span ref={p('armF')} className="ch-arm is-front" style={{ background: a.colour }}>
              <span ref={p('prop')} className={`ch-held is-${a.held}`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

function Robe({ a }: { a: Appearance }) {
  const tunic = a.garment === 'tunic'
  return (
    <svg className={`ch-robe${tunic ? ' is-tunic' : ''}`} viewBox="0 0 80 120" aria-hidden="true">
      {a.garment === 'cloak' ? (
        <>
          <path d="M22 4H58L72 116H8Z" fill={a.colour} stroke={INK} strokeWidth="3" />
          <path d="M22 4L40 60L58 4" fill="rgb(0 0 0 / 0.22)" stroke={INK} strokeWidth="2" />
          <path d="M14 70H66" stroke={a.trim} strokeWidth="4" />
        </>
      ) : a.garment === 'habit' ? (
        <>
          <path d="M20 4H60L74 116H6Z" fill={a.colour} stroke={INK} strokeWidth="3" />
          {/* scapular: the band hanging front and back */}
          <path d="M33 6H47V116H33Z" fill="rgb(255 255 255 / 0.06)" stroke={INK} strokeWidth="1.5" />
        </>
      ) : (
        <path d="M20 4H60L68 92H12Z" fill={a.colour} stroke={INK} strokeWidth="3" />
      )}
      {a.accessory === 'satchel' && <rect x="50" y="62" width="18" height="22" rx="3" fill="#5e3a1e" stroke={INK} strokeWidth="2" />}
      {a.accessory === 'rope-belt' && <path d={tunic ? 'M14 50H66M56 50V74' : 'M16 52H64M54 52V82'} stroke="#c8b07a" strokeWidth="3" fill="none" />}
      {a.accessory === 'keys' && (
        <>
          <path d="M16 52H64" stroke={a.trim} strokeWidth="4" />
          <circle cx="56" cy="62" r="5" fill="none" stroke="#b8a070" strokeWidth="2.5" />
          <path d="M56 67V76M56 72H60" stroke="#b8a070" strokeWidth="2.5" />
        </>
      )}
    </svg>
  )
}

/** Brows and eyes per mood (the mouth is its own part, moved by the talk clip). Facing right: features on the right. */
const BROW: Record<Mood, string> = {
  neutral: 'M21 17L29 17',
  focus: 'M21 16L29 18',
  surprise: 'M21 13L29 13',
  happy: 'M21 16Q25 14 29 16',
  sad: 'M21 15L29 18',
  worried: 'M21 17L29 14',
  thoughtful: 'M21 15L29 17',
}
function Head({ a, mood }: { a: Appearance; mood: Mood }) {
  return (
    <svg className="ch-face" viewBox="0 0 38 44" aria-hidden="true">
      {a.hair === 'hood' && <path d="M3 30C1 10 10 1 20 1C31 1 37 10 36 30L32 38H6Z" fill={a.hairColour} stroke={INK} strokeWidth="2.5" />}
      <ellipse cx="20" cy="23" rx="14" ry="16" fill={a.skin} stroke={INK} strokeWidth="2.5" />
      {a.hair === 'tonsure' && <path d="M6 22C5 14 9 10 12 9M34 22C35 14 31 10 28 9" stroke={a.hairColour} strokeWidth="6" fill="none" strokeLinecap="round" />}
      {a.hair === 'cap' && <path d="M6 16C6 6 34 6 34 16Z" fill={a.hairColour} stroke={INK} strokeWidth="2" />}
      {a.hair === 'short' && <path d="M6 18C6 6 34 4 34 16C28 12 14 12 6 18Z" fill={a.hairColour} />}
      {a.face === 'beard' && <path d="M8 28C10 40 30 42 33 28C30 33 12 34 8 28Z" fill={a.hairColour} stroke={INK} strokeWidth="1.5" />}
      {a.face === 'old' && <path d="M27 20L31 21" stroke={INK} strokeWidth="1" />}
      <path d={BROW[mood]} stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="21" r={mood === 'surprise' ? 2.3 : 1.7} fill={INK} />
    </svg>
  )
}
