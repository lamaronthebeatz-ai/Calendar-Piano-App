import type { Save } from './save'
import type { Cond, Effect, EntityId } from './types'
import type { Basis } from './narrative'

/**
 * Academic gameplay: activities that put musicology in the player's hands, declared as data. This layer organises
 * and records; it does not know music theory. Knowledge comes from UMK (ids the activity names, resolved through
 * UMK's own API), analysis from UMRE (a request the activity names, run through UMRE's host), grading of puzzles from
 * the existing puzzle system (`arc.puzzles`, `attempt`). Progress is flags in the Journey save — no score of its own.
 *
 * Every value shown says where it came from (`Origin`): what the player chose, what the document holds, what UMK
 * records, what UMRE computed, what a puzzle's own data defines, or text written to present it.
 */
export type Origin = 'player' | 'document' | 'umk' | 'umre' | 'puzzle-data' | 'presentation'
export type ActivityKind = 'listening' | 'score' | 'analysis' | 'history' | 'puzzle'

export type ActivityDef = {
  id: string
  kind: ActivityKind
  title: string
  /** what the player is to learn or find out */
  aim: string
  /** why it happens here, in the story */
  context: string
  /** UMK ids (a:, x:, s:…) giving the theoretical frame — resolved through UMK, never copied */
  knowledge?: EntityId[]
  /** a puzzle of the arc (the existing puzzle system grades it) */
  puzzle?: string
  /** a music datum of the arc (structured notes) the activity shows or analyses */
  music?: string
  /** a UMRE request this activity runs, and on what */
  reasoning?: { op: 'analyze'; modules: string[]; why: string }
  /** score survey: notes to inspect before the activity counts as done */
  minNotes?: number
  /** effects once done (through the engine: evidence, flags, xp) */
  onDone?: Effect[]
}
/** A chain of activities at one place of the story, offered while `when` holds. */
export type SequenceDef = { id: string; title: string; basis: Basis; note: string; when: Cond; steps: ActivityDef[] }

/**
 * Structured music data — notes with ids, pitch and length (ticks, 240 to the quarter). Never read off an image:
 * the score drawn from it and every analysis use the same notes. `old` keeps another witness of the same line when
 * there is one (here: the directions of unheighted neumes, which record only up / down / same — not intervals).
 */
export type Dir = 'up' | 'down' | 'same'
export type MusicNote = { id: string; step: number; oct: number; alter: number; dur: number }
export type MusicDatum = { id: string; title: string; basis: Basis; note: string; clef: 'treble' | 'alto'; time: [number, number]; notes: MusicNote[]; old?: { label: string; dirs: Dir[] } }

/* ------------------------------------------------------------- progress */

export type Mark = 'tried' | 'done' | 'correct' | 'explained'
export const acFlag = (activity: string, m: Mark) => `ac:${activity}:${m}`
/**
 * What the save says about an activity, kept apart on purpose: tried it, finished it, met the criterion (a puzzle
 * solved), saw the explanation. None of them claims the player has mastered the idea.
 */
export function progressOf(s: Save, a: ActivityDef) {
  const has = (m: Mark) => s.flags.includes(acFlag(a.id, m))
  const solved = a.puzzle ? !!s.puzzles[a.puzzle]?.solved : false
  return { tried: has('tried') || (a.puzzle ? !!s.puzzles[a.puzzle] : false), done: has('done') || solved, correct: a.puzzle ? solved : has('correct'), explained: has('explained') }
}
export const markEffects = (a: ActivityDef, ms: Mark[]): Effect[] => ms.map((m) => ({ set: acFlag(a.id, m) }))

/* ------------------------------------------------------ comparing witnesses */

const diatonicOf = (n: Pick<MusicNote, 'step' | 'oct'>) => n.oct * 7 + n.step
/** Direction from each note to the next, read from the structured pitches (diatonic position, then alteration). */
export function directionsOf(notes: readonly MusicNote[]): Dir[] {
  return notes.slice(1).map((n, i) => {
    const a = notes[i]
    const d = diatonicOf(n) - diatonicOf(a) || n.alter - a.alter
    return d > 0 ? 'up' : d < 0 ? 'down' : 'same'
  })
}
/**
 * Where two witnesses of a line part ways: the indexes of the notes (of the new copy) reached by a move whose
 * direction differs from the old one. A comparison of data, not an analysis: the old neumes give directions only.
 */
export function departures(old: readonly Dir[], notes: readonly MusicNote[]): number[] {
  const now = directionsOf(notes)
  return now.flatMap((d, i) => (old[i] !== undefined && old[i] !== d ? [i + 1] : []))
}

export const STEP_VI = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
export const noteName = (n: Pick<MusicNote, 'step' | 'oct' | 'alter'>) => `${STEP_VI[n.step]}${n.alter > 0 ? '♯' : n.alter < 0 ? '♭' : ''}${n.oct}`
export const DIR_VI: Record<Dir, string> = { up: 'đi lên', down: 'đi xuống', same: 'giữ nguyên' }
