import { between, quality, simple } from '../repr/interval'
import { diatonic, midi, type Pitch } from '../repr/pitch'
import { add, cmp, eq, type Rational } from '../repr/rational'
import { endOf, soundingNotes, type SoundingNote, type Voice } from '../repr/score'

/**
 * A third implementation of part of the hard counterpoint rules, written on the UMRE representation (rational time,
 * spelled pitches, intervals as steps + semitones) and sharing no code with rules.ts (the search) or verify.ts (the
 * module's independent checker). It covers the rules whose statement needs no beat-strength or ornament analysis:
 * melodic steps, answering a leap, three repeated notes, a continuous line to the end, and — in the ORIGINAL only —
 * crossing, parallel perfect consonances and three perfect consonances in a row. The definitions follow the
 * rulebook: allowed melodic intervals (tr. 6), perfect consonance = perfect unison / fifth / octave (tr. 10).
 */
export type NativeFault = { readonly rule: string; readonly at: Rational; readonly voices: readonly string[]; readonly ids: readonly string[] }

export const NATIVE_RULES = ['leap', 'leap-response', 'leap3-response', 'repeat3', 'no-gap', 'end', 'crossing', 'parallel', 'perfects3'] as const
/** Rules the native checker judges only in the original (it does not build the counterpoint versions). */
export const NATIVE_ORIGINAL_ONLY = new Set(['crossing', 'parallel', 'perfects3'])

/** Melodic interval the book allows between consecutive notes: a repeat, m2/M2, m3/M3, P4, P5, m6/M6, P8. */
export function melodicAllowed(a: Pitch, b: Pitch): boolean {
  const iv = between(a, b)
  const steps = Math.abs(iv.steps)
  if (steps === 0) return iv.semitones === 0
  const q = quality(iv)
  if (steps === 1 || steps === 2 || steps === 5) return q === 'm' || q === 'M'
  if (steps === 3 || steps === 4 || steps === 7) return q === 'P'
  return false
}

/** Perfect consonance class of a vertical interval (lower → upper): 'octave' (unison and octaves), 'fifth', or null. */
export function perfectClass(lower: Pitch, upper: Pitch): 'octave' | 'fifth' | null {
  let iv = between(lower, upper)
  // crossed voices: the class is taken modulo the octave, as the vertical rules read a crossed fifth
  while (iv.steps < 0) iv = { steps: iv.steps + 7, semitones: iv.semitones + 12 }
  const s = simple(iv)
  if (quality(iv) !== 'P') return null
  if (s.steps === 0 || s.steps === 7) return 'octave'
  return s.steps === 4 ? 'fifth' : null
}

/** Line faults of one voice that should run continuously to `pieceEnd`. */
export function lineFaults(v: Voice, pieceEnd: Rational): NativeFault[] {
  const out: NativeFault[] = []
  const f = (rule: string, at: Rational, ids: string[]) => out.push({ rule, at, voices: [v.id], ids })
  const evs = v.events
  if (!evs.length) return [{ rule: 'end', at: { n: 0, d: 1 }, voices: [v.id], ids: [] }]
  let clock = evs[0].onset
  for (const e of evs) {
    if (e.kind === 'rest') f('no-gap', e.onset, [e.id])
    else if (!eq(e.onset, clock) && cmp(e.onset, clock) > 0) f('no-gap', e.onset, [e.id])
    if (cmp(endOf(e), clock) > 0) clock = endOf(e)
  }
  if (!eq(clock, pieceEnd)) f('end', clock, [])
  const sn = soundingNotes(v)
  for (let i = 1; i < sn.length; i++) {
    const a = sn[i - 1]
    const b = sn[i]
    if (!melodicAllowed(a.pitch, b.pitch)) f('leap', b.onset, [...a.ids, ...b.ids])
    if (i >= 2) {
      const z = sn[i - 2]
      if (midi(z.pitch) === midi(a.pitch) && midi(a.pitch) === midi(b.pitch)) f('repeat3', b.onset, [...z.ids, ...a.ids, ...b.ids])
      const leap = diatonic(a.pitch) - diatonic(z.pitch)
      const next = diatonic(b.pitch) - diatonic(a.pitch)
      const answered = next !== 0 && Math.sign(next) !== Math.sign(leap)
      if (Math.abs(leap) >= 2 && !answered) f(Math.abs(leap) === 2 ? 'leap3-response' : 'leap-response', b.onset, [...a.ids, ...b.ids])
    }
  }
  return out
}

type Onset = { at: Rational; u: SoundingNote; l: SoundingNote; hitU: boolean; hitL: boolean; cls: 'octave' | 'fifth' | null }

/** Moments where both voices sound, with the notes sounding and whether each voice strikes there. */
export function onsets(upper: Voice, lower: Voice, until: Rational): Onset[] {
  const U = soundingNotes(upper)
  const L = soundingNotes(lower)
  const at = (xs: SoundingNote[], t: Rational) => xs.find((n) => cmp(n.onset, t) <= 0 && cmp(t, add(n.onset, n.duration)) < 0)
  const times = [...U, ...L].map((n) => n.onset).filter((t) => cmp(t, until) < 0)
  const uniq = times.filter((t, i) => times.findIndex((x) => eq(x, t)) === i).sort(cmp)
  const out: Onset[] = []
  for (const t of uniq) {
    const u = at(U, t)
    const l = at(L, t)
    if (u && l) out.push({ at: t, u, l, hitU: eq(u.onset, t), hitL: eq(l.onset, t), cls: perfectClass(l.pitch, u.pitch) })
  }
  return out
}

/** Vertical faults of a pair in the original: `upper` is the voice written above. */
export function pairFaults(upper: Voice, lower: Voice, until: Rational): NativeFault[] {
  const out: NativeFault[] = []
  const os = onsets(upper, lower, until)
  const f = (rule: string, o: Onset) => out.push({ rule, at: o.at, voices: [upper.id, lower.id], ids: [...o.u.ids, ...o.l.ids] })
  os.forEach((o, k) => {
    if (diatonic(o.u.pitch) < diatonic(o.l.pitch)) f('crossing', o)
    if (k === 0) return
    const a = os[k - 1]
    const movedU = o.hitU && midi(o.u.pitch) !== midi(a.u.pitch)
    const movedL = o.hitL && midi(o.l.pitch) !== midi(a.l.pitch)
    const du = Math.sign(diatonic(o.u.pitch) - diatonic(a.u.pitch))
    const dl = Math.sign(diatonic(o.l.pitch) - diatonic(a.l.pitch))
    if (movedU && movedL && du === dl && a.cls && a.cls === o.cls) f('parallel', o)
    if (k >= 2 && os[k - 2].cls && a.cls && o.cls) f('perfects3', o)
  })
  return out
}

/** Perfect fourths between two voices in the original (for reporting where the upper-pair exception is used). */
export function perfectFourths(upper: Voice, lower: Voice, until: Rational): Onset[] {
  return onsets(upper, lower, until).filter((o) => {
    const iv = between(o.l.pitch, o.u.pitch)
    return iv.steps >= 0 && simple(iv).steps === 3 && quality(iv) === 'P'
  })
}
