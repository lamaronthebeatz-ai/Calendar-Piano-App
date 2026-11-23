import { between, quality, simple, type Interval, type Quality } from './interval'
import { diatonic, midi, type Pitch } from './pitch'
import { add, cmp, eq, sub, toNumber, type Rational } from './rational'
import { soundingNotes, type Score, type SoundingNote, type Voice } from './score'
import { layoutBars, locate } from './time'

/**
 * Standard queries on a texture: what sounds together, the interval between two voices, how they move (voice
 * leading), melodic steps, and where a moment sits in the bar. They state FACTS only. Whether an interval is a
 * consonance, or a beat strong, is a rulebook's definition (passed in), never decided here.
 */

/** Motion of two voices from one vertical to the next (standard textbook terms). */
export type Motion = 'parallel' | 'similar' | 'contrary' | 'oblique' | 'static'

/** How two voices move between consecutive verticals: by direction of each voice and whether the interval number is kept. */
export function motionOf(prevU: Pitch, prevL: Pitch, u: Pitch, l: Pitch): Motion {
  const du = Math.sign(diatonic(u) - diatonic(prevU)) || Math.sign(midi(u) - midi(prevU))
  const dl = Math.sign(diatonic(l) - diatonic(prevL)) || Math.sign(midi(l) - midi(prevL))
  if (!du && !dl) return 'static'
  if (!du || !dl) return 'oblique'
  if (du !== dl) return 'contrary'
  return between(prevL, prevU).steps === between(l, u).steps ? 'parallel' : 'similar'
}

/** A vertical: both voices sounding at `at`, which of them strikes there, and the interval lower → upper. */
export type Vertical = {
  readonly at: Rational
  readonly u: SoundingNote
  readonly l: SoundingNote
  readonly hitU: boolean
  readonly hitL: boolean
  readonly interval: Interval
  /** motion from the previous vertical (null for the first) */
  readonly motion: Motion | null
}

const noteAt = (xs: readonly SoundingNote[], t: Rational) => xs.find((n) => cmp(n.onset, t) <= 0 && cmp(t, add(n.onset, n.duration)) < 0)

/** Every moment before `until` where either voice strikes and both sound. */
export function verticals(upper: Voice, lower: Voice, until: Rational): Vertical[] {
  const U = soundingNotes(upper)
  const L = soundingNotes(lower)
  const times = [...U, ...L].map((n) => n.onset).filter((t) => cmp(t, until) < 0)
  const uniq = times.filter((t, i) => times.findIndex((x) => eq(x, t)) === i).sort(cmp)
  const out: Vertical[] = []
  for (const t of uniq) {
    const u = noteAt(U, t)
    const l = noteAt(L, t)
    if (!u || !l) continue
    const prev = out[out.length - 1]
    out.push({ at: t, u, l, hitU: eq(u.onset, t), hitL: eq(l.onset, t), interval: between(l.pitch, u.pitch), motion: prev ? motionOf(prev.u.pitch, prev.l.pitch, u.pitch, l.pitch) : null })
  }
  return out
}

/** Interval class as a rulebook reads it: steps within the octave (crossed voices folded up) and quality. */
export function intervalClass(iv: Interval): { steps: number; quality: Quality | null; compound: number } {
  let x = iv
  while (x.steps < 0) x = { steps: x.steps + 7, semitones: x.semitones + 12 }
  const s = simple(x)
  return { steps: s.steps === 7 ? 0 : s.steps, quality: quality(x), compound: x.steps }
}

/** A consonance table from a rulebook: [steps within the octave, quality] pairs, split into perfect and imperfect. */
export type ConsonanceDef = { readonly perfect: readonly (readonly [number, Quality])[]; readonly imperfect: readonly (readonly [number, Quality])[] }
export function consonance(iv: Interval, def: ConsonanceDef): 'perfect' | 'imperfect' | 'dissonant' {
  const c = intervalClass(iv)
  if (def.perfect.some(([s, q]) => s === c.steps && q === c.quality)) return 'perfect'
  if (def.imperfect.some(([s, q]) => s === c.steps && q === c.quality)) return 'imperfect'
  return 'dissonant'
}

/** Melodic steps of a line: consecutive sounding notes and the interval between them (signed). */
export function melodicSteps(v: Voice): { from: SoundingNote; to: SoundingNote; interval: Interval }[] {
  const ns = soundingNotes(v)
  return ns.slice(1).map((to, i) => ({ from: ns[i], to, interval: between(ns[i].pitch, to.pitch) }))
}

/**
 * Where a moment sits in the bar: 1-based bar, offset, and the NOTATIONAL level — 3 at the bar line, 2 on a beat of
 * the metre, 1 between beats. Which level counts as "strong" is the rulebook's call.
 */
export function metricPosition(s: Score, at: Rational): { bar: number; offset: Rational; level: 1 | 2 | 3 } {
  const end = s.end ?? add(at, { n: 1, d: 1 })
  const bars = layoutBars([...s.meters], cmp(end, at) > 0 ? end : add(at, { n: 1, d: 1 }), s.pickup)
  const loc = locate(bars, at)
  if (!loc) return { bar: 0, offset: at, level: 1 }
  const beat = { n: 1, d: loc.bar.meter.den }
  const q = toNumber(loc.offset) / toNumber(beat)
  return { bar: loc.bar.index + (s.pickup ? 0 : 1), offset: loc.offset, level: cmp(loc.offset, { n: 0, d: 1 }) === 0 ? 3 : Number.isInteger(Math.round(q * 1e9) / 1e9) ? 2 : 1 }
}

export const durationOf = (n: SoundingNote) => n.duration
export const endOfNote = (n: SoundingNote) => add(n.onset, n.duration)
export const elapsed = (from: Rational, to: Rational) => sub(to, from)
