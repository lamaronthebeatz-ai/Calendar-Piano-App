import { chordMembers, type Chord } from '../../repr/harmony'
import { NATURAL, type Pitch, type Spelling } from '../../repr/pitch'
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

export type HKey = { readonly tonic: Spelling; readonly minor: boolean }
// own scale arithmetic (not repr/tonal): semitones of each degree above the tonic; minor = harmonic minor (Rimsky tr. 18)
const SCALE = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 11] }
const PC = (l: number, a: number) => (((NATURAL[l] + a) % 12) + 12) % 12

/** The diatonic triad whose root is the bass note's degree — how the native checker reads an unlabelled column. */
export function triadOnBass(bass: Pitch, k: HKey): Chord {
  const sc = k.minor ? SCALE.minor : SCALE.major
  const d = (((bass.letter - k.tonic.letter) % 7) + 7) % 7
  const spell = (deg: number) => {
    const letter = (k.tonic.letter + deg) % 7
    const want = (PC(k.tonic.letter, k.tonic.alter) + sc[deg % 7]) % 12
    let alter = want - NATURAL[letter]
    if (alter > 6) alter -= 12
    if (alter < -6) alter += 12
    return { letter, alter }
  }
  const r = spell(d), t = spell(d + 2), f = spell(d + 4)
  const third = (((PC(t.letter, t.alter) - PC(r.letter, r.alter)) % 12) + 12) % 12
  const fifth = (((PC(f.letter, f.alter) - PC(r.letter, r.alter)) % 12) + 12) % 12
  const quality = third === 4 ? (fifth === 8 ? 'augmented' : 'major') : fifth === 6 ? 'diminished' : 'minor'
  return { root: r as Chord['root'], quality }
}

/**
 * Connection rules (§ 11) and, with `choice`, the chord-choice rules of melody harmonization (§ 13, tr. 23 – 25),
 * written as plain loops — independent of the rule language and of the progression query.
 */
export function progressionFaults(s: Score, chords: readonly Chord[], k: HKey, choice: boolean): Fault[] {
  const cols = s.voices.map((v) => v.events.filter((e) => e.kind === 'note') as { pitch: Pitch; onset: { n: number; d: number } }[])
  const n = cols[0].length
  const out: Fault[] = []
  const deg = (c: Chord) => (((c.root.letter - k.tonic.letter) % 7) + 7) % 7
  const all = [0, 1, 2, 3]
  const bar = s.meters[0].meter
  const barQ = (bar.num * 4) / bar.den
  const strong = (i: number) => Math.abs(toQuarters(cols[0][i].onset as never) % barQ) < 1e-9
  const same = (a: Chord, b: Chord) => a.root.letter === b.root.letter && a.root.alter === b.root.alter && a.quality === b.quality
  for (let i = 0; i < n; i++) {
    const at = toQuarters(cols[0][i].onset as never)
    const d = deg(chords[i])
    if (choice) {
      if (![0, 3, 4].includes(d)) out.push({ rule: 'h.primary-only', at, voices: all })
      if ((i === 0 || i === n - 1) && d !== 0) out.push({ rule: 'h.tonic-frame', at, voices: all })
    }
    if (i === 0) continue
    const pd = deg(chords[i - 1])
    const mv = all.map((v) => LINE(cols[v][i].pitch) - LINE(cols[v][i - 1].pitch))
    const rel = (((chords[i].root.letter - chords[i - 1].root.letter) % 7) + 7) % 7
    if (rel !== 0 && (Math.abs(mv[1]) > 2 || Math.abs(mv[2]) > 2)) out.push({ rule: 'h.upper-third', at, voices: all })
    if (rel === 1 || rel === 6) {
      const b = Math.sign(mv[3])
      if (b === 0 || [0, 1, 2].some((v) => Math.sign(mv[v]) !== -b)) out.push({ rule: 'h.second-relation', at, voices: all })
    }
    if (!choice) continue
    const sameChord = same(chords[i], chords[i - 1])
    if (pd === 4 && d === 3) out.push({ rule: 'h.no-v-iv', at, voices: all })
    if (Math.abs(mv[0]) >= 3 && !sameChord) out.push({ rule: 'h.leap-same-chord', at, voices: all })
    const prevSopDeg = (((cols[0][i - 1].pitch.letter - k.tonic.letter) % 7) + 7) % 7
    if (pd === 4 && d === 0 && prevSopDeg === 6 && mv[0] !== 1) out.push({ rule: 'h.leading-tone', at, voices: all })
    const eqP = (v: number) => SEMI(cols[v][i].pitch) === SEMI(cols[v][i - 1].pitch) && LINE(cols[v][i].pitch) === LINE(cols[v][i - 1].pitch)
    if (eqP(0) && sameChord && all.every(eqP)) out.push({ rule: 'h.repeat-change', at, voices: all })
    if (strong(i) && !strong(i - 1) && sameChord) out.push({ rule: 'h.strong-weak', at, voices: all })
    if (i >= 2) {
      const pb = LINE(cols[3][i - 1].pitch) - LINE(cols[3][i - 2].pitch)
      const isFourthFifth = (x: number) => Math.abs(x) === 3 || Math.abs(x) === 4
      if (isFourthFifth(mv[3]) && isFourthFifth(pb) && Math.sign(mv[3]) === Math.sign(pb)) out.push({ rule: 'h.bass-fourths', at, voices: all })
    }
  }
  return out
}
