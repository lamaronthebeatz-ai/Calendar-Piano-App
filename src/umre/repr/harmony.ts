import { between, transposeSpelling, type Interval } from './interval'
import { pitchClass, sameSpelling, type Pitch, type Spelling } from './pitch'
import type { Rational } from './rational'
import type { Key } from './tonal'
import type { Id } from './score'

/**
 * Harmonic OBJECTS (what a chord is made of) — not harmonic INTERPRETATION. Naming a chord's function (T, S, D in the
 * Russian–Soviet system; I, IV, V in roman numerals; a jazz symbol) is a claim of a theory, so labels carry the system
 * they belong to and are produced by rulebooks / reasoners in later stages, never inferred here.
 */

export type ChordQualityId =
  | 'major' | 'minor' | 'diminished' | 'augmented'
  | 'dominant-7' | 'major-7' | 'minor-7' | 'half-diminished-7' | 'diminished-7' | 'minor-major-7' | 'augmented-major-7'

const iv = (steps: number, semitones: number): Interval => ({ steps, semitones })
/** Members above the root (root itself is iv(0,0)), in stacked-third order. */
export const CHORD_QUALITIES: Record<ChordQualityId, { vi: string; members: Interval[] }> = {
  major: { vi: 'hợp âm ba trưởng', members: [iv(0, 0), iv(2, 4), iv(4, 7)] },
  minor: { vi: 'hợp âm ba thứ', members: [iv(0, 0), iv(2, 3), iv(4, 7)] },
  diminished: { vi: 'hợp âm ba giảm', members: [iv(0, 0), iv(2, 3), iv(4, 6)] },
  augmented: { vi: 'hợp âm ba tăng', members: [iv(0, 0), iv(2, 4), iv(4, 8)] },
  'dominant-7': { vi: 'hợp âm bảy át', members: [iv(0, 0), iv(2, 4), iv(4, 7), iv(6, 10)] },
  'major-7': { vi: 'hợp âm bảy trưởng', members: [iv(0, 0), iv(2, 4), iv(4, 7), iv(6, 11)] },
  'minor-7': { vi: 'hợp âm bảy thứ', members: [iv(0, 0), iv(2, 3), iv(4, 7), iv(6, 10)] },
  'half-diminished-7': { vi: 'hợp âm bảy nửa giảm', members: [iv(0, 0), iv(2, 3), iv(4, 6), iv(6, 10)] },
  'diminished-7': { vi: 'hợp âm bảy giảm', members: [iv(0, 0), iv(2, 3), iv(4, 6), iv(6, 9)] },
  'minor-major-7': { vi: 'hợp âm bảy thứ – trưởng', members: [iv(0, 0), iv(2, 3), iv(4, 7), iv(6, 11)] },
  'augmented-major-7': { vi: 'hợp âm bảy trưởng tăng', members: [iv(0, 0), iv(2, 4), iv(4, 8), iv(6, 11)] },
}

/** A chord as an object: root, quality, and the member in the bass (absent = root position). */
export type Chord = { readonly root: Spelling; readonly quality: ChordQualityId; readonly bass?: Spelling }

export const chordMembers = (c: Chord): Spelling[] => CHORD_QUALITIES[c.quality].members.map((m) => transposeSpelling(c.root, m))
/** 0 = root position, 1 = first inversion (third in the bass), 2 = second, 3 = third (seventh in the bass). Null if the bass is not a member. */
export function inversion(c: Chord): number | null {
  if (!c.bass) return 0
  const i = chordMembers(c).findIndex((m) => sameSpelling(m, c.bass!))
  return i < 0 ? null : i
}
/**
 * Thoroughbass figures of an inversion (5/3, 6, 6/4; 7, 6/5, 4/3, 2). These figures are shared by the Western and the
 * Russian–Soviet traditions; how a school NAMES the inversion (секстаккорд, "hợp âm sáu"…) is a rulebook concern.
 */
export function figures(c: Chord): string | null {
  const inv = inversion(c)
  if (inv === null) return null
  const seventh = CHORD_QUALITIES[c.quality].members.length === 4
  return seventh ? ['7', '6/5', '4/3', '2'][inv] : ['5/3', '6', '6/4'][inv]
}

/**
 * Chords whose members are exactly these spellings (doubling ignored): every quality × every member as root, compared
 * by spelling, so C–E–G♯ is augmented on C and A♭–C–E is not. Several answers are possible (enharmonic or symmetric
 * chords); choosing among them is interpretation and is left to the caller. `bass` sets the inversion.
 */
export function chordsFromSpellings(notes: Spelling[], bass?: Spelling): Chord[] {
  const uniq: Spelling[] = []
  for (const n of notes) if (!uniq.some((u) => sameSpelling(u, n))) uniq.push(n)
  const out: Chord[] = []
  for (const root of uniq)
    for (const q of Object.keys(CHORD_QUALITIES) as ChordQualityId[]) {
      const members = chordMembers({ root, quality: q })
      if (members.length === uniq.length && members.every((m) => uniq.some((u) => sameSpelling(u, m)))) out.push({ root, quality: q, bass: bass && !sameSpelling(bass, root) ? bass : undefined })
    }
  return out
}
/** Pitch-class set of a chord (for comparison by sound). */
export const chordPcs = (c: Chord) => [...new Set(chordMembers(c).map(pitchClass))].sort((a, b) => a - b)

/** A vertical sonority: which voice sounds which pitch at a moment (rests omitted). */
export type Voicing = { readonly at: Rational; readonly pitches: readonly { readonly voice: Id; readonly pitch: Pitch }[] }
/** Intervals between adjacent voices, top to bottom as given (spacing between upper voices is a voice-leading rule). */
export const spacing = (v: Voicing): Interval[] => v.pitches.slice(1).map((p, i) => between(p.pitch, v.pitches[i].pitch))

/** The system a harmonic label belongs to. Labels of different systems are never merged. */
export type HarmonicSystem = 'russian-soviet-function' | 'roman-numeral' | 'jazz-chord-symbol' | 'figured-bass'
/**
 * A harmonic label over a span, as written by a source or produced by a reasoner. `text` is the label in its own
 * system's notation (e.g. "D65", "V6/5", "G7"); `provenance` records who claims it.
 */
export type HarmonicLabel = {
  readonly id: Id
  readonly start: Rational
  readonly end: Rational
  readonly system: HarmonicSystem
  readonly text: string
  readonly key?: Key
  readonly chord?: Chord
  readonly provenance: { readonly kind: 'source' | 'analysis' | 'user'; readonly ref?: string }
  /** Other readings judged plausible for the same span (ambiguity is kept, not collapsed). */
  readonly alternatives?: readonly { readonly text: string; readonly chord?: Chord; readonly note?: string }[]
}
