import { chordMembers, type Chord } from '../../repr/harmony'
import { NATURAL, type Pitch } from '../../repr/pitch'
import { toQuarters } from '../../repr/rational'
import type { Score } from '../../repr/score'

/**
 * A hand-written checker of the four-part harmony rules, independent of the rule language and of repr/texture.ts:
 * plain loops over note columns, its own interval arithmetic. It exists so that answers of the shared search (which
 * runs the rule-language rules) are confirmed by code that search does not run.
 */
export type Fault = { rule: string; at: number; voices: number[] }

const LINE = (p: Pitch) => p.octave * 7 + p.letter
const SEMI = (p: Pitch) => 12 * (p.octave + 1) + NATURAL[p.letter] + p.alter
/**
 * Perfect class of the interval from the lower VOICE to the upper voice: 'P8' (unison, octaves), 'P5' (fifths,
 * twelfths…), or null. Counted modulo the octave in voice order, so with crossed voices a fourth below reads as a
 * fifth — the convention UMRE uses everywhere (crossing itself is a separate fault).
 */
function perfect(upper: Pitch, lower: Pitch): 'P8' | 'P5' | null {
  const steps = (((LINE(upper) - LINE(lower)) % 7) + 7) % 7
  const semis = (((SEMI(upper) - SEMI(lower)) % 12) + 12) % 12
  if (steps === 0 && semis === 0) return 'P8'
  if (steps === 4 && semis === 7) return 'P5'
  return null
}
/** Augmented melodic interval: more semitones than the major/perfect interval of that size. */
function augmented(a: Pitch, b: Pitch): boolean {
  const [lo, hi] = LINE(a) <= LINE(b) ? [a, b] : [b, a]
  const steps = LINE(hi) - LINE(lo)
  // same letter (G♯ → G): the size is the distance in semitones whichever way it goes
  const semis = steps === 0 ? Math.abs(SEMI(hi) - SEMI(lo)) : SEMI(hi) - SEMI(lo)
  const ref = 12 * Math.floor(steps / 7) + [0, 2, 4, 5, 7, 9, 11][steps % 7]
  return semis > ref
}

/** Faults of a complete S-A-T-B score; `chords[k]` sounds during soprano note k. */
export function harmonyFaults(s: Score, chords: readonly Chord[]): Fault[] {
  const cols = s.voices.map((v) => v.events.filter((e) => e.kind === 'note'))
  const n = cols[0].length
  const out: Fault[] = []
  for (let k = 0; k < n; k++) {
    const at = toQuarters(cols[0][k].onset)
    const col = cols.map((c) => c[k])
    if (col.some((x) => !x || x.kind !== 'note')) {
      out.push({ rule: 'h.chord-tones', at, voices: [0, 1, 2, 3] })
      continue
    }
    const ps = col.map((x) => (x as { pitch: Pitch }).pitch)
    const members = chordMembers(chords[k])
    const role = ps.map((p) => members.findIndex((m) => m.letter === p.letter && m.alter === p.alter))
    if (role[3] !== 0) out.push({ rule: 'h.root-position', at, voices: [0, 1, 2, 3] })
    if (role.some((r) => r < 0)) out.push({ rule: 'h.chord-tones', at, voices: [0, 1, 2, 3] })
    else {
      const cnt = [0, 1, 2].map((i) => role.filter((r) => r === i).length)
      if (!(cnt[0] === 2 && cnt[1] === 1 && cnt[2] === 1)) out.push({ rule: 'h.double-root', at, voices: [0, 1, 2, 3] })
    }
    for (const [a, b] of [[0, 1], [1, 2]]) if (LINE(ps[a]) - LINE(ps[b]) > 5) out.push({ rule: 'h.spacing', at, voices: [a, b] })
    for (let a = 0; a < 4; a++)
      for (let b = a + 1; b < 4; b++) {
        if (LINE(ps[a]) < LINE(ps[b])) out.push({ rule: 'h.crossing', at, voices: [a, b] })
        if (k > 0) {
          const qa = (cols[a][k - 1] as { pitch: Pitch }).pitch
          const qb = (cols[b][k - 1] as { pitch: Pitch }).pitch
          const moved = SEMI(qa) !== SEMI(ps[a]) && SEMI(qb) !== SEMI(ps[b])
          const was = perfect(qa, qb)
          if (moved && was && was === perfect(ps[a], ps[b])) out.push({ rule: 'h.parallels', at, voices: [a, b] })
        }
      }
    if (k > 0) for (let v = 1; v < 4; v++) if (augmented((cols[v][k - 1] as { pitch: Pitch }).pitch, ps[v])) out.push({ rule: 'h.augmented', at, voices: [v] })
  }
  return out
}
