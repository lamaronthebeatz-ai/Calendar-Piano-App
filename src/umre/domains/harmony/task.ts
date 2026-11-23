import { fromCounterpoint } from '../../repr/adapters/counterpoint'
import type { Seg } from '../../../features/counterpoint/model'
import { chordMembers, type Chord } from '../../repr/harmony'
import { diatonic, fromDiatonic, type Pitch } from '../../repr/pitch'
import { add, cmp, fromQuarters, toQuarters, type Rational } from '../../repr/rational'
import { notesOf, type NoteEvent, type Score } from '../../repr/score'
import { validateScore } from '../../repr/validate'
import type { Task } from '../../task'
import type { CspModel, View } from '../../constraints/model'
import { frontierOf } from '../../constraints/model'
import { textureQueries } from '../../rules/queries'
import { HARMONY_RULES } from '../../rules/harmony'
import type { ConsonanceDef } from '../../repr/texture'
import type { Rulebook } from '../../rulebook/rulebook'

/**
 * Four-part harmony exercise: a given soprano and one chord per soprano note (root-position triads); alto, tenor and
 * bass are to be written, note against note. Score voices top to bottom: S, A, T, B — S given, the rest empty.
 */
export const FOUR_PART = 'harmony.four-part'
export type FourPartParams = { readonly chords: readonly Chord[] }

export function checkFourPartTask(t: Task): string[] {
  const out = validateScore(t.score).filter((i) => i.severity === 'error').map((i) => `${i.code}: ${i.message}`)
  const p = t.params as Partial<FourPartParams> | undefined
  if (t.type !== FOUR_PART) out.push(`loại bài phải là ${FOUR_PART}`)
  if (t.score.voices.length !== 4) out.push('cần bốn bè S, A, T, B')
  const s = t.score.voices[0] ? notesOf(t.score.voices[0]) : []
  if (!s.length) out.push('bè soprano (đề) không có nốt')
  if (t.score.voices.slice(1).some((v) => v.events.length)) out.push('alto, tenor, bass phải để trống')
  if (!p || !Array.isArray(p.chords) || p.chords.length !== s.length) out.push('params.chords: mỗi nốt soprano một hợp âm')
  return out
}

/** Typical ranges — a SEARCH DOMAIN, not a rule (rulebook/harmony.ts). Diatonic positions (C4 = 28). */
const RANGE: Record<number, [number, number]> = { 1: [25, 35], 2: [21, 32], 3: [16, 28] } // A: G3–C5, T: C3–G4, B: E2–C4

/** The chord spans: chord k sounds while soprano note k sounds. */
export function chordSpans(t: Task<FourPartParams>) {
  return notesOf(t.score.voices[0]).map((n, k) => ({ at: toQuarters(n.onset), end: toQuarters(n.onset) + toQuarters(n.duration), chord: t.params.chords[k] }))
}

export function fourPartModel(t: Task<FourPartParams>, rb: Rulebook): CspModel {
  const base = t.score
  const spans = chordSpans(t)
  const sop = notesOf(base.voices[0])
  const last = sop[sop.length - 1]
  const end: Rational = last ? add(last.onset, last.duration) : fromQuarters(0)
  const cons = rb.definitions.find((d) => d.id === 'def.perfect')!.data as ConsonanceDef
  const pairs: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
  return {
    id: `${t.id}-csp`, base, free: [1, 2, 3], end, exceptions: new Set(),
    domain: 'UMRE — alto, tenor, bass nốt đối nốt với soprano, chỉ âm của hợp âm đã cho, trong âm vực thông dụng (alto Sol3–Đô5, tenor Đô3–Sol4, bass Mi2–Đô4)',
    candidates: (voice, at, line) => {
      const k = sop.findIndex((n) => cmp(n.onset, at) === 0)
      if (k < 0) return []
      const members = chordMembers(t.params.chords[k])
      const [lo, hi] = RANGE[voice]
      const ps: Pitch[] = []
      for (let d = lo; d <= hi; d++) {
        const m = members.find((x) => x.letter === ((d % 7) + 7) % 7)
        if (m) ps.push(fromDiatonic(d, m.alter))
      }
      // nearest to the voice's previous note first (a heuristic: smooth lines are tried first)
      const prev = line[line.length - 1] as NoteEvent | undefined
      if (prev?.kind === 'note') ps.sort((a, b) => Math.abs(diatonic(a) - diatonic(prev.pitch)) - Math.abs(diatonic(b) - diatonic(prev.pitch)))
      return ps.map((pitch) => ({ duration: sop[k].duration, pitch }))
    },
    write: (voice, at, c, n) => [{ kind: 'note', id: `${base.voices[voice].id}-h${n}`, onset: at, duration: c.duration, pitch: c.pitch }],
    views: (s: Score, partial): View[] => [{
      label: 'Bốn bè', rules: HARMONY_RULES, frontier: frontierOf(s),
      queries: textureQueries({
        score: s, lines: [1, 2, 3], pairs, end, partial, chords: spans, consonance: () => cons,
        role: ([a, b]) => ({ outer: a === 0 && b === 3, outerSomewhere: false, adjacentUpper: b === a + 1 && b <= 2 }),
      }),
    }],
  }
}

/** A four-part task from a soprano line written like the counterpoint helpers ("C5:4 | D5:4"). */
export function fourPartTask(id: string, soprano: Seg[], chords: Chord[], key = { tonic: 0, alter: 0, minor: false }): Task<FourPartParams> {
  const score = fromCounterpoint({ key, meter: { num: 4, den: 4 }, lines: [soprano, [], [], []], names: ['Soprano', 'Alto', 'Tenor', 'Bass'], roles: ['given', 'free', 'free', 'free'], id })
  return { id, type: FOUR_PART, domain: 'harmony', rulebook: { id: 'harmony.four-part.rimsky-korsakov-1886', version: '1' }, score, params: { chords } }
}
