import type { Score } from '../../compose/model'
import { chordsOf, chordPcs, JAZZ, type Chord, type ChordOptions } from './chords'
import { chordsFromSymbols } from './leadsheet'
import { patternsOf, readJazz, type JazzReading, type Pattern } from './jazz'
import { analyzeXx, type XxAnalysis } from './xx'
import { formOf, type FormAnalysis } from './form'
import { extract, type AScore } from './extract'
import { foldTonicizations, homeOf, keyPc, keysOf, sameKey, type Key, type KeyOptions, type Tonicization } from './key'
import { nameOf } from './pitch'
import { readChord, type Reading } from './roman'
import { nctsOf, type Nct } from './nct'
import { accidentalsOf, type Accidental } from './accidentals'
import { cadencesOf, type Cadence } from './cadence'

export type NamedKey = Key & { tonicPc: number; name: string }
export type HarmonyItem = { chord: Chord; key: NamedKey; reading: Reading; pcs: number[] }
/** A stretch in one key (after tonicisations are folded in): the key plan of the piece. */
export type KeyRegion = { start: number; end: number; key: NamedKey }
export type Analysis = { score: AScore; harmony: HarmonyItem[]; home: NamedKey | null; tonicizations: (Tonicization & { name: string })[]; regions: KeyRegion[]; ncts: Nct[]; accidentals: Accidental[]; cadences: Cadence[]; lens: 'classical' | 'jazz' | 'xx'; jazz?: { readings: JazzReading[]; patterns: Pattern[]; fromSymbols: boolean }; xx?: XxAnalysis; form: FormAnalysis }
export type AnalyzeOptions = ChordOptions & KeyOptions & { fold?: number; lens?: 'classical' | 'jazz' | 'xx' }

export const named = (k: Key): NamedKey => ({ ...k, tonicPc: keyPc(k), name: `${nameOf(k.tonic)}${k.minor ? 'm' : ''}` })

/** The whole analysis of a score (classical lens). */
export function analyze(s: Score, opts: AnalyzeOptions = {}): Analysis {
  const sc = extract(s)
  const lens = opts.lens ?? 'classical'
  // the jazz lens reads a lead sheet's own symbols when there are some, else listens with the jazz vocabulary
  const symbols = lens === 'jazz' ? chordsFromSymbols(s, sc) : []
  const fromSymbols = symbols.length >= 4
  const chords = fromSymbols ? symbols : chordsOf(sc, lens === 'jazz' ? { ...opts, qualities: opts.qualities ?? JAZZ } : opts)
  if (fromSymbols) {
    // notes outside each symbol's chord, for the non-chord-tone layer
    const pcsOf = (c: Chord) => new Set(chordPcs(c))
    for (const c of chords) c.foreign = sc.notes.filter((n) => n.start < c.end && n.end > c.start && !pcsOf(c).has(n.midi % 12))
  }
  const { keys, tonicizations } = foldTonicizations(chords, keysOf(sc, chords, { ...opts, jazz: lens === 'jazz' }), opts.fold ?? (lens === 'jazz' ? 2880 : 960))
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
  const xx = lens === 'xx' ? analyzeXx(sc) : undefined
  const jazz = lens === 'jazz' ? { readings: chords.map((c, i) => readJazz(c, keys[i], chords[i + 1])), patterns: patternsOf(chords, keys), fromSymbols } : undefined
  const homeKey = homeOf(sc, chords, keys, lens === 'jazz')
  const base = { score: sc, harmony, home: homeKey && named(homeKey), tonicizations: tonicizations.map((t) => ({ ...t, name: named(t.key).name })), regions, ncts, accidentals, cadences, lens, jazz, xx }
  return { ...base, form: formOf(base as Analysis) }
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
