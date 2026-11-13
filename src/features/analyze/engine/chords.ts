import { meter } from '../../compose/model'
import { barAt, type ANote, type AScore } from './extract'
import { above, mod, pcOf, type Spelled } from './pitch'

/**
 * Chord qualities as spelled intervals from the root ([letter steps, semitones]). `opt` marks tones a chord may
 * lack without losing its name (the fifth of a seventh chord, the fifth of a triad, the root of a ninth chord).
 */
export type Quality = 'M' | 'm' | 'd' | 'A' | '7' | 'M7' | 'm7' | 'ø7' | 'o7' | 'mM7' | 'Fr' | '9' | 'b9' | '6' | 'm6' | 'M9' | 'm9' | '#9' | '7#11' | '13' | '7sus4' | 'sus4' | '69' | 'm11' | '7alt'
export const QUALITIES: Record<Quality, { iv: [number, number][]; opt: number[]; prior: number; name: string }> = {
  M: { iv: [[0, 0], [2, 4], [4, 7]], opt: [2], prior: 0.06, name: 'trưởng' },
  m: { iv: [[0, 0], [2, 3], [4, 7]], opt: [2], prior: 0.05, name: 'thứ' },
  d: { iv: [[0, 0], [2, 3], [4, 6]], opt: [], prior: 0.0, name: 'giảm' },
  A: { iv: [[0, 0], [2, 4], [4, 8]], opt: [], prior: -0.06, name: 'tăng' },
  '7': { iv: [[0, 0], [2, 4], [4, 7], [6, 10]], opt: [2], prior: 0.03, name: 'bảy át' },
  M7: { iv: [[0, 0], [2, 4], [4, 7], [6, 11]], opt: [2], prior: -0.03, name: 'bảy trưởng' },
  m7: { iv: [[0, 0], [2, 3], [4, 7], [6, 10]], opt: [2], prior: -0.01, name: 'bảy thứ' },
  'ø7': { iv: [[0, 0], [2, 3], [4, 6], [6, 10]], opt: [], prior: 0.0, name: 'bảy nửa giảm' },
  o7: { iv: [[0, 0], [2, 3], [4, 6], [6, 9]], opt: [], prior: 0.02, name: 'bảy giảm' },
  mM7: { iv: [[0, 0], [2, 3], [4, 7], [6, 11]], opt: [2], prior: -0.1, name: 'thứ – bảy trưởng' },
  // the French sixth as a chord of its own: from the bass, major third, augmented fourth, augmented sixth
  Fr: { iv: [[0, 0], [2, 4], [3, 6], [5, 10]], opt: [], prior: -0.02, name: 'sáu tăng Pháp' },
  '9': { iv: [[0, 0], [2, 4], [4, 7], [6, 10], [1, 2]], opt: [2], prior: -0.06, name: 'chín át' },
  b9: { iv: [[0, 0], [2, 4], [4, 7], [6, 10], [1, 1]], opt: [2], prior: -0.05, name: 'chín át thứ' },
  // jazz vocabulary: sixth chords, extensions and alterations
  '6': { iv: [[0, 0], [2, 4], [4, 7], [5, 9]], opt: [2], prior: -0.02, name: 'sáu trưởng' },
  m6: { iv: [[0, 0], [2, 3], [4, 7], [5, 9]], opt: [2], prior: -0.03, name: 'sáu thứ' },
  M9: { iv: [[0, 0], [2, 4], [4, 7], [6, 11], [1, 2]], opt: [2], prior: -0.04, name: 'chín trưởng' },
  m9: { iv: [[0, 0], [2, 3], [4, 7], [6, 10], [1, 2]], opt: [2], prior: -0.04, name: 'chín thứ' },
  '#9': { iv: [[0, 0], [2, 4], [4, 7], [6, 10], [1, 3]], opt: [2], prior: -0.06, name: 'bảy át chín tăng' },
  '7#11': { iv: [[0, 0], [2, 4], [6, 10], [3, 6]], opt: [], prior: -0.07, name: 'bảy át mười một tăng' },
  '13': { iv: [[0, 0], [2, 4], [6, 10], [5, 9]], opt: [], prior: -0.06, name: 'mười ba át' },
  '7sus4': { iv: [[0, 0], [3, 5], [4, 7], [6, 10]], opt: [2], prior: -0.05, name: 'bảy át treo bốn' },
  sus4: { iv: [[0, 0], [3, 5], [4, 7]], opt: [], prior: -0.07, name: 'treo bốn' },
  '69': { iv: [[0, 0], [2, 4], [4, 7], [5, 9], [1, 2]], opt: [2], prior: -0.06, name: 'sáu – chín' },
  m11: { iv: [[0, 0], [2, 3], [6, 10], [3, 5], [1, 2]], opt: [4], prior: -0.07, name: 'mười một thứ' },
  '7alt': { iv: [[0, 0], [2, 4], [6, 10], [1, 3], [5, 8]], opt: [], prior: -0.08, name: 'bảy át biến (alt)' },
}
/** The jazz vocabulary: every quality but the French sixth (it is a 7♭5 sound there). */
export const JAZZ: Quality[] = ['M', 'm', 'd', 'A', '7', 'M7', 'm7', 'ø7', 'o7', 'mM7', '6', 'm6', '9', 'b9', 'M9', 'm9', '#9', '7#11', '13', '7sus4', 'sus4', '69', 'm11', '7alt']
/** The triad underneath a quality — what key finding and functions read. */
export function core(q: Quality): 'M' | 'm' | 'd' | 'A' | '7' | 'sus' {
  if (['7', '9', 'b9', '#9', '7#11', '13', '7alt'].includes(q)) return '7'
  if (['M', 'M7', '6', 'M9', '69'].includes(q)) return 'M'
  if (['m', 'm7', 'm6', 'm9', 'm11', 'mM7'].includes(q)) return 'm'
  if (['d', 'o7', 'ø7'].includes(q)) return 'd'
  if (q === 'A') return 'A'
  return q === 'Fr' ? '7' : 'sus'
}

/** The chord vocabulary of common-practice harmony (ninth chords are left to the jazz and 20th-century lenses). */
export const CLASSICAL: Quality[] = ['M', 'm', 'd', 'A', '7', 'M7', 'm7', 'ø7', 'o7', 'Fr']

/** A stretch of time with one harmony. */
export type Chord = {
  start: number
  end: number
  root: number
  rootName: Spelled
  quality: Quality
  /** sounding tones, spelled as written where present */
  tones: Spelled[]
  bass: Spelled
  bassPc: number
  /** 0 root, 1 third, 2 fifth, 3 seventh in the bass */
  inversion: number
  /** how well the notes fit, 0 – 1: below ~0.6 the reading is a guess */
  fit: number
  /** notes of the stretch that are not chord tones */
  foreign: ANote[]
}

/** `bass`: the lowest note heard in the beat the slice belongs to — an Alberti bass is one bass per beat, not per note. */
type Slice = { start: number; end: number; notes: ANote[]; weight: number; bass: ANote | null }

/** Salami slices: a new slice wherever any note starts or stops. */
export function slicesOf(sc: AScore): Slice[] {
  const cuts = new Set<number>([0, sc.end])
  for (const n of sc.notes) {
    cuts.add(n.start)
    cuts.add(n.end)
  }
  for (const b of sc.bars) cuts.add(b.start)
  const ts = [...cuts].filter((t) => t <= sc.end).sort((a, b) => a - b)
  const out: Slice[] = []
  let k = 0
  const active: ANote[] = []
  for (let i = 0; i + 1 < ts.length; i++) {
    const [s, e] = [ts[i], ts[i + 1]]
    while (k < sc.notes.length && sc.notes[k].start < e) active.push(sc.notes[k++])
    const here = active.filter((n) => n.start < e && n.end > s)
    for (let j = active.length - 1; j >= 0; j--) if (active[j].end <= s) active.splice(j, 1)
    const bar = barAt(sc.bars, s)
    const m = meter(bar.time)
    const pos = s - bar.start
    // the metre's weight of the moment the slice begins: downbeat, beat, off-beat
    const weight = pos === 0 ? 1.15 : m.beats.some(([b0]) => b0 === pos) ? 1 : pos % (m.sub || 1) === 0 ? 0.8 : 0.65
    // the beat around this slice
    const bi = m.beats.findIndex(([b0, b1]) => pos >= b0 && pos < b1)
    const [b0, b1] = bi >= 0 ? m.beats[bi] : [pos, pos + (e - s)]
    const beatNotes = sc.notes.filter((n) => n.start < bar.start + b1 && n.end > bar.start + b0)
    const bass = beatNotes.reduce<ANote | null>((lo, x) => (!lo || x.midi < lo.midi ? x : lo), null)
    out.push({ start: s, end: e, notes: here, weight, bass: bass && here.includes(bass) ? bass : (here.reduce<ANote | null>((lo, x) => (!lo || x.midi < lo.midi ? x : lo), null) && bass) })
  }
  return out
}

type Fit = { root: Spelled; quality: Quality; score: number; foreign: ANote[]; tones: Spelled[]; fit: number }

/**
 * The best chord for a set of slices. Every note weighs its sounding time × the metric weight of where it sounds,
 * more when it starts there, more in the bass. Score = matched − unmatched − missing tones + the quality's prior
 * + a bonus when the bass is a chord tone (most of all the root) — the spirit of Pardo & Birmingham's template matching.
 */
export function bestChord(slices: Slice[], qualities: Quality[] = CLASSICAL, seventhShare = 0.2, ornWeight = 0.8): Fit | null {
  const w = new Map<string, { p: Spelled; w: number }>() // spelled pitch → weight
  let total = 0
  let bassNote: ANote | null = null
  for (const sl of slices) {
    const dur = sl.end - sl.start
    const low = sl.bass
    if (!bassNote && low) bassNote = low
    for (const n of sl.notes) {
      const onset = n.start >= sl.start && n.start < sl.end ? 1.25 : 1
      const v = dur * sl.weight * onset * (n === low ? 1.6 : 1) * (1 - ornWeight * (n.orn ?? 0))
      const key = `${n.step}:${n.alter}`
      const e = w.get(key)
      if (e) e.w += v
      else w.set(key, { p: { step: n.step, alter: n.alter }, w: v })
      total += v
    }
  }
  if (!total || !bassNote) return null
  const byPc = new Map<number, number>()
  for (const { p, w: v } of w.values()) byPc.set(pcOf(p), (byPc.get(pcOf(p)) ?? 0) + v)
  const bassPc = pcOf(bassNote)
  let best: Fit | null = null
  // roots: every spelled pitch present, and each pitch a third / fifth below one present (a chord may lack its root)
  const roots = new Map<string, Spelled>()
  for (const { p } of w.values()) {
    for (const r of [p, above(p, 5, 8), above(p, 5, 9), above(p, 3, 5), above(p, 1, 2), above(p, 1, 1)]) roots.set(`${r.step}:${r.alter}`, r)
  }
  for (const root of roots.values()) {
    for (const q of qualities) {
      const def = QUALITIES[q]
      const tones = def.iv.map(([s, t]) => above(root, s, t))
      const pcs = tones.map(pcOf)
      let matched = 0
      let missing = 0
      def.iv.forEach((_, i) => {
        const v = byPc.get(pcs[i]) ?? 0
        // a seventh or ninth must be heard, not just brushed by a passing note, to name the chord after it
        if (i >= 3 && v < seventhShare * total) missing += 0.25
        if (v > 0) matched += v
        else missing += def.opt.includes(i) ? 0.06 : i === 0 ? 0.3 : 0.22
      })
      // a ninth chord must show its ninth and its seventh; otherwise the plain seventh chord says it better
      const unmatched = total - matched
      let score = (matched - 1.15 * unmatched) / total - missing + def.prior
      if (pcs.includes(bassPc)) score += 0.08 + (bassPc === pcs[0] ? 0.05 : 0)
      else score -= 0.12
      // spelling: letters that fit the chord's spelling count; a G♭ is not the F♯ of a D major chord
      let spellMiss = 0
      for (const { p, w: v } of w.values()) {
        const i = pcs.indexOf(pcOf(p))
        if (i >= 0 && (tones[i].step !== p.step || tones[i].alter !== p.alter)) spellMiss += v
      }
      score -= (0.25 * spellMiss) / total
      if (!best || score > best.score) {
        const fitTones = tones.filter((t) => (byPc.get(pcOf(t)) ?? 0) > 0)
        best = { root, quality: q, score, foreign: [], tones: fitTones.length ? fitTones : tones, fit: Math.max(0, Math.min(1, matched / total)) }
      }
    }
  }
  if (best) {
    const pcs = new Set(QUALITIES[best.quality].iv.map(([s, t]) => pcOf(above(best!.root, s, t))))
    const seen = new Set<ANote>()
    for (const sl of slices) for (const n of sl.notes) if (!pcs.has(pcOf(n)) && !seen.has(n)) seen.add(n)
    best.foreign = [...seen]
  }
  return best
}

export type ChordOptions = { changeCost?: number; maxSlices?: number; qualities?: Quality[]; seventhShare?: number; ornWeight?: number }

/**
 * Segment the piece into chords: the path through the slices that maximises Σ score × duration − a cost per new chord
 * (dynamic programming over slice boundaries), then neighbours with the same chord are joined.
 */
export function chordsOf(sc: AScore, opts: ChordOptions = {}): Chord[] {
  const slices = slicesOf(sc).filter((s) => s.end > s.start)
  const n = slices.length
  if (!n) return []
  const beat = 240
  // tuned on the Bach chorale analyses (scripts/analyze/eval.mjs)
  const change = (opts.changeCost ?? 0.15) * beat
  const maxK = opts.maxSlices ?? 12
  const best = new Array<number>(n + 1).fill(-Infinity)
  const from = new Array<number>(n + 1).fill(-1)
  const fitAt = new Array<Fit | null>(n + 1).fill(null)
  best[0] = 0
  for (let j = 1; j <= n; j++) {
    for (let i = Math.max(0, j - maxK); i < j; i++) {
      if (best[i] === -Infinity) continue
      const part = slices.slice(i, j)
      const dur = part[part.length - 1].end - part[0].start
      // never join across more than a bar and a half: harmony is re-read at least that often
      if (dur > 1440 && j - i > 1) continue
      const empty = part.every((s) => !s.notes.length)
      const f = empty ? null : bestChord(part, opts.qualities, opts.seventhShare, opts.ornWeight)
      const v = best[i] + (f ? f.score * dur : 0) - change
      if (v > best[j]) {
        best[j] = v
        from[j] = i
        fitAt[j] = f
      }
    }
  }
  const segs: { i: number; j: number; f: Fit | null }[] = []
  for (let j = n; j > 0; j = from[j]) segs.unshift({ i: from[j], j, f: fitAt[j] })
  // a new bass note on a beat inside one harmony starts a new inversion (T → T6): analysts label each
  const split: typeof segs = []
  for (const s of segs) {
    let i0 = s.i
    for (let k = s.i + 1; k < s.j; k++) {
      const a = slices[k - 1].bass
      const b = slices[k].bass
      // a new bass counts only if it holds: within the next beat nothing lower comes and the old bass does not return
      // (an Alberti or broken-chord bass keeps its lowest note as the bass of the whole figure)
      const holds =
        !!a && !!b &&
        !slices.slice(k).some((sl) => sl.start < slices[k].start + 480 && sl.notes.some((x) => x.midi < b.midi || (x.midi === a.midi && x.start > a.start)))
      if (a && b && holds && b.start === slices[k].start && pcOf(a) !== pcOf(b) && slices[k].weight >= 1 && (b.orn ?? 0) < 0.5) {
        split.push({ i: i0, j: k, f: s.f })
        i0 = k
      }
    }
    split.push({ i: i0, j: s.j, f: s.f })
  }
  const out: Chord[] = []
  for (const s of split) {
    if (!s.f) continue
    const start = slices[s.i].start
    const end = slices[s.j - 1].end
    const prev = out[out.length - 1]
    const pcs = QUALITIES[s.f.quality].iv.map(([a, b]) => pcOf(above(s.f!.root, a, b)))
    // the chord's bass: the lowest note of its first beat or two (the foot of a broken-chord figure)
    const t0 = slices[s.i].start
    const bassNote = slices.slice(s.i, s.j).filter((sl) => sl.start < t0 + 480).flatMap((sl) => sl.notes).reduce<ANote | null>((lo, x) => (!lo || x.midi < lo.midi ? x : lo), null) ?? slices.slice(s.i, s.j).flatMap((sl) => sl.notes).reduce<ANote | null>((lo, x) => (!lo || x.midi < lo.midi ? x : lo), null)!
    const bass = { step: bassNote.step, alter: bassNote.alter }
    const bassPc = pcOf(bass)
    const inv = Math.max(0, pcs.indexOf(bassPc))
    const c: Chord = { start, end, root: pcOf(s.f.root), rootName: s.f.root, quality: s.f.quality, tones: s.f.tones, bass, bassPc, inversion: inv, fit: s.f.fit, foreign: s.f.foreign }
    if (prev && prev.end === start && prev.root === c.root && prev.quality === c.quality && prev.bassPc === c.bassPc) {
      prev.end = end
      prev.foreign = [...new Set([...prev.foreign, ...c.foreign])]
    } else out.push(c)
  }
  return out
}

export const chordPcs = (c: Pick<Chord, 'rootName' | 'quality'>) => QUALITIES[c.quality].iv.map(([s, t]) => pcOf(above(c.rootName, s, t)))
export const tonesOf = (c: Pick<Chord, 'rootName' | 'quality'>) => QUALITIES[c.quality].iv.map(([s, t]) => above(c.rootName, s, t))
export const _mod = mod
