import type { Score } from '../../compose/model'
import { chordsOf, chordPcs, type Chord, type ChordOptions } from './chords'
import { extract, type AScore } from './extract'
import { foldTonicizations, keyPc, keysOf, sameKey, type Key, type KeyOptions, type Tonicization } from './key'
import { nameOf } from './pitch'
import { readChord, type Reading } from './roman'
import { nctsOf, type Nct } from './nct'
import { accidentalsOf, type Accidental } from './accidentals'
import { cadencesOf, type Cadence } from './cadence'

export type NamedKey = Key & { tonicPc: number; name: string }
export type HarmonyItem = { chord: Chord; key: NamedKey; reading: Reading; pcs: number[] }
/** A stretch in one key (after tonicisations are folded in): the key plan of the piece. */
export type KeyRegion = { start: number; end: number; key: NamedKey }
export type Analysis = { score: AScore; harmony: HarmonyItem[]; tonicizations: (Tonicization & { name: string })[]; regions: KeyRegion[]; ncts: Nct[]; accidentals: Accidental[]; cadences: Cadence[] }
export type AnalyzeOptions = ChordOptions & KeyOptions & { fold?: number; lens?: 'classical' | 'jazz' | 'xx' }

export const named = (k: Key): NamedKey => ({ ...k, tonicPc: keyPc(k), name: `${nameOf(k.tonic)}${k.minor ? 'm' : ''}` })

/** The whole analysis of a score (classical lens). */
export function analyze(s: Score, opts: AnalyzeOptions = {}): Analysis {
  const sc = extract(s)
  const chords = chordsOf(sc, opts)
  const { keys, tonicizations } = foldTonicizations(chords, keysOf(sc, chords, opts), opts.fold ?? 960)
  respell(sc, chords, keys)
  const harmony = chords.map((chord, i) => ({ chord, key: named(keys[i]), reading: readChord(chord, keys[i], chords[i + 1], chords[i - 1]), pcs: chordPcs(chord) }))
  const regions: KeyRegion[] = []
  harmony.forEach((h) => {
    const last = regions[regions.length - 1]
    if (last && sameKey(last.key, h.key)) last.end = h.chord.end
    else regions.push({ start: h.chord.start, end: h.chord.end, key: h.key })
  })
  const ncts = nctsOf(sc.notes, chords)
  const accidentals = accidentalsOf(sc, harmony, ncts)
  const cadences = cadencesOf(sc, harmony)
  return { score: sc, harmony, tonicizations: tonicizations.map((t) => ({ ...t, name: named(t.key).name })), regions, ncts, accidentals, cadences }
}

/**
 * Name each key as the music writes it: a run of chords in one key takes the spelling its notes use for the tonic
 * (A♭ minor in a rag full of flats, G♯ minor in a piece full of sharps), whatever the key table chose.
 */
function respell(sc: AScore, chords: Chord[], keys: Key[]) {
  let i = 0
  while (i < keys.length) {
    let j = i
    while (j + 1 < keys.length && sameKey(keys[j + 1], keys[i])) j++
    const pc = keyPc(keys[i])
    const votes = new Map<string, { n: number; step: number; alter: number }>()
    for (const n of sc.notes) {
      if (n.end <= chords[i].start || n.start >= chords[j].end || (n.midi % 12) !== pc) continue
      const id = `${n.step}:${n.alter}`
      const v = votes.get(id) ?? votes.set(id, { n: 0, step: n.step, alter: n.alter }).get(id)!
      v.n += n.end - n.start
    }
    const best = [...votes.values()].sort((a, b) => b.n - a.n)[0]
    if (best && Math.abs(best.alter) <= 1) for (let k = i; k <= j; k++) keys[k] = { tonic: { step: best.step, alter: best.alter }, minor: keys[k].minor }
    i = j + 1
  }
}
