import { CHORD_QUALITIES, chordMembers, inversion, type Chord, type ChordQualityId } from '../../repr/harmony'
import { pitchClass, sameSpelling, spelling, type Letter, type Spelling } from '../../repr/pitch'

/**
 * Chord identification from SPELLED notes (formalizable). The facts — the spellings and pitch classes present — are
 * certain; which chord they make is a reading, so every reading that explains the notes is returned, ranked, with
 * what it leaves out (missing members) and what it does not explain (foreign tones, candidates for non-chord tones).
 * Readings that need an enharmonic respelling are kept apart: spelling is evidence (C–E–G♯ is augmented, C–E–A♭ is
 * not a tertian chord as written).
 *
 * Basis (definitions): triads and seventh chords as stacked thirds, inversion named by the bass member
 * (Rimsky-Korsakov tr. 11 – 14, as the harmony rulebook cites them); incomplete forms: a triad or seventh without its
 * fifth (tr. 24, D7 "thiếu" tr. 47 – 48).
 */
export type Reading = {
  readonly chord: Chord
  /** 0 root position, 1 first inversion, 2 second, 3 third (seventh in the bass); null = bass not a member */
  readonly inversion: number | null
  readonly missing: readonly ('third' | 'fifth' | 'seventh')[]
  /** notes that are not members (non-chord-tone candidates) */
  readonly foreign: readonly Spelling[]
  /** the reading respells some notes enharmonically */
  readonly respelled: boolean
  readonly score: number
}
export type Identification = {
  /** facts */
  readonly spellings: readonly Spelling[]
  readonly pcs: readonly number[]
  readonly bass: Spelling | null
  /** readings, best first */
  readonly readings: readonly Reading[]
  /** two or more readings with the best score: the notes alone do not decide */
  readonly ambiguous: boolean
  /** fewer than three distinct pitch classes and no reading with all core members: insufficient data */
  readonly insufficient: boolean
}

const QUALS: ChordQualityId[] = ['major', 'minor', 'diminished', 'augmented', 'dominant-7', 'major-7', 'minor-7', 'half-diminished-7', 'diminished-7']
const MEMBER = ['root', 'third', 'fifth', 'seventh'] as const

function readingsAsSpelled(uniq: Spelling[], bass: Spelling | null): Reading[] {
  const out: Reading[] = []
  for (const root of uniq) {
    for (const q of QUALS) {
      let members: Spelling[]
      try {
        members = chordMembers({ root, quality: q })
      } catch {
        continue // a respelled root whose chord would need more than a triple accidental
      }
      const present = members.map((m) => uniq.some((u) => sameSpelling(u, m)))
      // the root and third are always required; the fifth may be omitted (incomplete chord), the seventh defines the quality
      if (!present[0] || !present[1]) continue
      if (members.length === 4 && !present[3]) continue
      const missing = present.flatMap((p, i) => (p ? [] : [MEMBER[i] as 'third' | 'fifth' | 'seventh']))
      // an augmented or diminished triad is only that if its altered fifth is there
      if ((q === 'augmented' || q === 'diminished' || q === 'diminished-7' || q === 'half-diminished-7') && !present[2]) continue
      const foreign = uniq.filter((u) => !members.some((m) => sameSpelling(m, u)))
      const chord: Chord = bass && !sameSpelling(bass, root) && members.some((m) => sameSpelling(m, bass)) ? { root, quality: q, bass } : { root, quality: q }
      const inv = bass ? (members.some((m) => sameSpelling(m, bass)) ? inversion(chord) : null) : 0
      // a parsimony score: explained notes count, missing members and foreign notes cost; triads are simpler than sevenths
      const score = 3 * (uniq.length - foreign.length) - 2 * missing.length - 2.5 * foreign.length - (members.length === 4 ? 0.5 : 0) + (inv === 0 ? 0.25 : 0) - (inv === null ? 1 : 0)
      out.push({ chord, inversion: inv, missing, foreign, respelled: false, score })
    }
  }
  return out
}

const accidentals = (r: Reading): number => 2 * Math.abs(r.chord.root.alter) + chordMembers(r.chord).reduce((n, m) => n + Math.abs(m.alter), 0)

/** `spelled: false` — the input's spelling carries no information (MIDI, pitch classes): every spelling is tried and none is preferred. */
export function identify(notes: readonly Spelling[], bass: Spelling | null = null, o: { spelled?: boolean } = {}): Identification {
  const spelled = o.spelled ?? true
  const uniq: Spelling[] = []
  for (const n of notes) if (!uniq.some((u) => sameSpelling(u, n))) uniq.push(n)
  const pcs = [...new Set(uniq.map(pitchClass))].sort((a, b) => a - b)
  let readings = spelled ? readingsAsSpelled(uniq, bass) : []
  // nothing tertian as written (or no spelling given): try respellings (each note under each letter within a double accidental)
  if (!readings.some((r) => !r.foreign.length)) {
    const alts = uniq.map((u) => {
      const xs: Spelling[] = [u]
      for (let l = 0; l < 7; l++) {
        if (l === u.letter) continue
        for (const a of [-2, -1, 0, 1, 2]) {
          const s = spelling(l as Letter, a)
          if (pitchClass(s) === pitchClass(u)) xs.push(s)
        }
      }
      return xs
    })
    const seen = new Set<string>()
    const combos = (i: number, acc: Spelling[]) => {
      if (i === alts.length) {
        const respelledBass = bass ? acc[uniq.findIndex((u) => sameSpelling(u, bass))] ?? bass : null
        for (const r of readingsAsSpelled(acc, respelledBass)) {
          if (r.foreign.length) continue
          const k = `${r.chord.root.letter}${r.chord.root.alter}${r.chord.quality}`
          if (seen.has(k)) continue
          seen.add(k)
          readings.push({ ...r, respelled: spelled, score: r.score - (spelled ? 1 : 0) })
        }
        return
      }
      for (const s of alts[i]) combos(i + 1, [...acc, s])
    }
    if (uniq.length <= 5) combos(0, [])
  }
  readings = readings.sort((a, b) => b.score - a.score || Number(a.respelled) - Number(b.respelled) || accidentals(a) - accidentals(b))
  // respellings of the same chord (B♯ major = C major) are one reading: keep the simplest spelling
  const seenChord = new Set<string>()
  readings = readings.filter((r) => {
    const k = `${pitchClass(r.chord.root)}|${r.chord.quality}|${r.respelled}`
    if (seenChord.has(k)) return false
    seenChord.add(k)
    return true
  })
  const best = readings[0]?.score
  const ambiguous = readings.filter((r) => r.score === best).length > 1
  const insufficient = pcs.length < 3 && !readings.some((r) => !r.missing.length && CHORD_QUALITIES[r.chord.quality].members.length === 3)
  return { spellings: uniq, pcs, bass, readings, ambiguous, insufficient }
}
