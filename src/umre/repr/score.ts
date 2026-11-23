import type { Interval } from './interval'
import type { Pitch } from './pitch'
import { add, cmp, eq, max, ZERO, type Rational } from './rational'
import type { Key } from './tonal'
import type { MeterChange, TempoChange } from './time'
import type { HarmonicLabel } from './harmony'
import type { FormNode } from './structure'

/**
 * The unified score. Hierarchy: Score → Part (an instrument / singer) → Staff → Voice → events. Every object has an
 * id that is stable across edits and unique in the score, so a rule violation, an analysis label or an explanation
 * can point at exactly one note.
 *
 * Time: onset and duration in whole notes (rational.ts), measured from the start of the first bar (a pickup bar
 * starts at 0 too). A voice is one melodic line: its events do not overlap, except notes sharing onset AND duration
 * (a chord written in one voice).
 */

export const SCHEMA = 'umre.score' as const
export const SCHEMA_VERSION = 1

export type Id = string

/** How a note connects to the next note of the same pitch in its voice. */
export type Tie = 'start' | 'stop' | 'continue'

export type NoteEvent = {
  readonly kind: 'note'
  readonly id: Id
  readonly onset: Rational
  readonly duration: Rational
  /** WRITTEN pitch (for a transposing instrument the sounding pitch is pitch + part.instrument.transposition). */
  readonly pitch: Pitch
  readonly tie?: Tie
  /** Notes of one chord written in one voice share a group id (and onset and duration). */
  readonly group?: Id
  /** Data owned by an adapter or a later stage (articulation, lyrics…), carried unchanged. Namespaced by owner. */
  readonly ext?: Readonly<Record<string, unknown>>
}
export type RestEvent = {
  readonly kind: 'rest'
  readonly id: Id
  readonly onset: Rational
  readonly duration: Rational
  readonly ext?: Readonly<Record<string, unknown>>
}
export type MusicEvent = NoteEvent | RestEvent

export type Voice = {
  readonly id: Id
  readonly staff: Id
  /** Optional role in an exercise: 'cantus-firmus', 'soprano', 'P' (canon leader)… free text, not interpreted here. */
  readonly role?: string
  readonly name?: string
  /** Sorted by onset. */
  readonly events: readonly MusicEvent[]
}
export type Clef = 'treble' | 'treble-8vb' | 'bass' | 'alto' | 'tenor' | 'percussion'
export type ClefChange = { readonly at: Rational; readonly clef: Clef }
export type Staff = { readonly id: Id; readonly part: Id; readonly clefs: readonly ClefChange[] }
export type Instrument = {
  readonly name: string
  /** Written → sounding (clarinet in B♭: down a major second). Absent = concert pitch. */
  readonly transposition?: Interval
  readonly midiProgram?: number
}
export type Part = { readonly id: Id; readonly name: string; readonly instrument?: Instrument }

/** Notated key signature in fifths (+ sharps, − flats) from a position on. */
export type KeySignatureChange = { readonly at: Rational; readonly fifths: number }
/** An analytical key over a span (stated by the source or by analysis; `basis` says which). */
export type KeyArea = { readonly at: Rational; readonly key: Key; readonly basis: 'source' | 'analysis' | 'exercise' }

export type Score = {
  readonly schema: typeof SCHEMA
  readonly version: number
  readonly id: Id
  readonly title?: string
  readonly parts: readonly Part[]
  readonly staves: readonly Staff[]
  readonly voices: readonly Voice[]
  readonly meters: readonly MeterChange[]
  readonly keySignatures: readonly KeySignatureChange[]
  readonly keys?: readonly KeyArea[]
  readonly tempos?: readonly TempoChange[]
  /** Length of an anacrusis bar, if the piece starts with one. */
  readonly pickup?: Rational
  /** Total length; absent = end of the last event. */
  readonly end?: Rational
  readonly harmony?: readonly HarmonicLabel[]
  readonly structure?: readonly FormNode[]
  readonly ext?: Readonly<Record<string, unknown>>
}

/* ---------- queries ---------- */

export const endOf = (e: MusicEvent) => add(e.onset, e.duration)
export const notesOf = (v: Voice) => v.events.filter((e): e is NoteEvent => e.kind === 'note')
export const scoreEnd = (s: Score) => s.end ?? s.voices.reduce((t, v) => v.events.reduce((u, e) => max(u, endOf(e)), t), ZERO)
export const byId = (s: Score) => {
  const m = new Map<Id, MusicEvent>()
  for (const v of s.voices) for (const e of v.events) m.set(e.id, e)
  return m
}
export const voiceById = (s: Score, id: Id) => s.voices.find((v) => v.id === id)
/** The value of a change list in force at a position (last change with at ≤ t). */
export function inForce<T extends { at: Rational }>(changes: readonly T[], t: Rational): T | undefined {
  let found: T | undefined
  for (const c of changes) if (cmp(c.at, t) <= 0) found = c
  return found
}
/** Events of a voice sounding at a position (onset ≤ t < end). */
export const soundingAt = (v: Voice, t: Rational) => v.events.filter((e) => cmp(e.onset, t) <= 0 && cmp(t, endOf(e)) < 0)
export const sortEvents = (evs: MusicEvent[]) => evs.slice().sort((a, b) => cmp(a.onset, b.onset) || (a.kind === b.kind ? 0 : a.kind === 'rest' ? -1 : 1))

/**
 * Sounding notes with ties merged: one entry per written chain, from the first onset to the end of the last tied note.
 * This is what counterpoint and harmony rules reason about; the written events stay intact for display.
 */
export type SoundingNote = { readonly ids: Id[]; readonly voice: Id; readonly onset: Rational; readonly duration: Rational; readonly pitch: Pitch }
export function soundingNotes(v: Voice): SoundingNote[] {
  const out: SoundingNote[] = []
  const open = new Map<string, number>() // pitch key → index in out
  const keyOf = (p: Pitch) => `${p.letter}.${p.alter}.${p.octave}`
  for (const e of v.events) {
    if (e.kind !== 'note') continue
    const k = keyOf(e.pitch)
    const i = open.get(k)
    if ((e.tie === 'stop' || e.tie === 'continue') && i !== undefined && eq(add(out[i].onset, out[i].duration), e.onset)) {
      const prev = out[i]
      out[i] = { ...prev, ids: [...prev.ids, e.id], duration: add(prev.duration, e.duration) }
    } else {
      out.push({ ids: [e.id], voice: v.id, onset: e.onset, duration: e.duration, pitch: e.pitch })
      open.set(k, out.length - 1)
    }
    if (e.tie !== 'start' && e.tie !== 'continue') open.delete(k)
  }
  return out
}
