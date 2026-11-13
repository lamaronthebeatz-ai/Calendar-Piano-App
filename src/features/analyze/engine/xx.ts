import { barAt, type ANote, type AScore } from './extract'
import { FORTE } from './forte'
import { mod, nameOf, plainSpelling } from './pitch'

/**
 * The 20th-century lens: no keys or functions assumed. The music is cut into sonorities (what sounds together), each
 * named as a pitch-class set (Forte); bars are matched to the collections composers drew on (diatonic, octatonic,
 * whole-tone, hexatonic, acoustic…); and the techniques around them are looked for: quartal chords, planing, pedals,
 * ostinati, twelve-tone rows. Names follow the library's articles (tap-hop-cao-do, ky-thuat-12-am…).
 */
export type Sonority = { start: number; end: number; pcs: number[]; forte?: string; prime?: string; iv?: string; name?: string; quartal: boolean; lowest: ANote | null }
export type Collection = { bar: number; kind: string; pcs: number[]; t: number }
export type Technique = { kind: 'quartal' | 'planing' | 'pedal' | 'ostinato' | 'row' | 'polychord'; from: number; to: number; text: string }
export type Row = { pcs: number[]; lane: number; from: number; to: number; forms: { label: string; from: number }[] }
export type XxAnalysis = { sonorities: Sonority[]; collections: Collection[]; techniques: Technique[]; rows: Row[]; centre: number | null; vector: number[] }

/** Smallest 12-bit mask of a set over all transpositions and inversions: the key of FORTE. */
export function canonOf(pcs: number[]): number {
  let best = Infinity
  for (const inv of [false, true])
    for (let t = 0; t < 12; t++) {
      let m = 0
      for (const p of pcs) m |= 1 << mod((inv ? -p : p) + t, 12)
      if (m < best) best = m
    }
  return best
}

/** Names of set classes musicians use (Forte number → name in the app's words). */
export const SET_NAMES: Record<string, string> = {
  '3-11': 'hợp âm ba trưởng / thứ',
  '3-12': 'hợp âm ba tăng',
  '3-10': 'hợp âm ba giảm',
  '3-9': 'hợp âm quãng 4 – 5 (0 2 7)',
  '3-5': 'tam âm "Viên" (0 1 6)',
  '3-8': 'tam âm toàn cung (0 2 6)',
  '4-19': 'hợp âm ba tăng thêm quãng 7 trưởng / thứ – bảy trưởng',
  '4-20': 'hợp âm bảy trưởng',
  '4-26': 'hợp âm bảy thứ',
  '4-27': 'hợp âm bảy át / bảy nửa giảm',
  '4-28': 'hợp âm bảy giảm',
  '4-23': 'chồng quãng 4 (0 2 5 7)',
  '4-25': 'hợp âm bảy át quãng 5 hạ / sáu tăng Pháp',
  '4-24': 'hợp âm bảy át quãng 5 tăng',
  '4-Z15': 'tứ âm đủ mọi quãng',
  '4-Z29': 'tứ âm đủ mọi quãng',
  '4-9': 'hai tritone cách nửa cung (0 1 6 7)',
  '5-35': 'ngũ cung',
  '5-34': 'hợp âm chín át',
  '6-35': 'âm giai toàn cung',
  '6-34': 'hợp âm huyền bí (Scriabin)',
  '6-20': 'lục cung (hexatonic)',
  '6-32': 'lục âm diatonic',
  '6-30': 'lục âm "Petrushka" (hai hợp âm trưởng cách tritone)',
  '7-35': 'âm giai diatonic (bảy âm)',
  '7-34': 'âm giai âm học (Lydian ♭7)',
  '7-32': 'âm giai thứ hoà âm',
  '7-31': 'bảy âm của bát cung',
  '8-28': 'âm giai bát cung (octatonic)',
}

/** The collections a bar's pitch classes may come from, most specific first. */
const COLLECTIONS: { kind: string; base: number[]; n: number }[] = [
  { kind: 'âm giai toàn cung', base: [0, 2, 4, 6, 8, 10], n: 2 },
  { kind: 'lục cung (hexatonic)', base: [0, 1, 4, 5, 8, 9], n: 4 },
  { kind: 'ngũ cung', base: [0, 2, 4, 7, 9], n: 12 },
  { kind: 'âm giai bát cung (octatonic)', base: [0, 1, 3, 4, 6, 7, 9, 10], n: 3 },
  { kind: 'âm giai diatonic', base: [0, 2, 4, 5, 7, 9, 11], n: 12 },
  { kind: 'âm giai âm học (Lydian ♭7)', base: [0, 2, 4, 6, 7, 9, 10], n: 12 },
  { kind: 'âm giai thứ hoà âm', base: [0, 2, 3, 5, 7, 8, 11], n: 12 },
]

export function setInfo(pcs: number[]) {
  if (pcs.length < 3 || pcs.length > 9) return {}
  const f = FORTE[canonOf(pcs)]
  if (!f) return {}
  return { forte: f[0], prime: `(${f[1]})`, iv: `<${f[2]}>`, name: SET_NAMES[f[0]] }
}

export function analyzeXx(sc: AScore): XxAnalysis {
  // sonorities: per beat, the pitch classes sounding at least a fifth of it; equal neighbours joined
  const sons: Sonority[] = []
  for (const bar of sc.bars) {
    const beat = (960 / bar.time[1]) * (bar.time[1] >= 8 && bar.time[0] % 3 === 0 ? 3 : 1)
    for (let t = bar.start; t < bar.start + bar.len; t += beat) {
      const e = Math.min(t + beat, bar.start + bar.len)
      const w = new Map<number, number>()
      let lowest: ANote | null = null
      for (const n of sc.notes) {
        if (n.end <= t || n.start >= e) continue
        const d = Math.min(n.end, e) - Math.max(n.start, t)
        w.set(n.midi % 12, (w.get(n.midi % 12) ?? 0) + d)
        if (!lowest || n.midi < lowest.midi) lowest = n
      }
      const pcs = [...w].filter(([, d]) => d >= (e - t) / 5).map(([p]) => p).sort((a, b) => a - b)
      const prev = sons[sons.length - 1]
      if (prev && prev.end === t && prev.pcs.join() === pcs.join()) {
        prev.end = e
        continue
      }
      const sounding = sc.notes.filter((n) => n.start < e && n.end > t).sort((a, b) => a.midi - b.midi)
      // quartal: three or more notes stacked mostly in perfect fourths
      const steps = sounding.slice(1).map((n, i) => n.midi - sounding[i].midi).filter((d) => d > 0)
      const quartal = steps.length >= 2 && steps.filter((d) => d === 5 || d === 6).length >= Math.max(2, steps.length - 1)
      sons.push({ start: t, end: e, pcs, quartal, lowest, ...setInfo(pcs) })
    }
  }
  const sonorities = sons.filter((s) => s.pcs.length)

  // collections, bar by bar (a bar of five or more pitch classes that fits one collection)
  const collections: Collection[] = []
  for (const bar of sc.bars) {
    const pcs = [...new Set(sc.notes.filter((n) => n.start < bar.start + bar.len && n.end > bar.start).map((n) => n.midi % 12))].sort((a, b) => a - b)
    if (pcs.length < 5) continue
    if (pcs.length === 12) {
      collections.push({ bar: bar.i, kind: 'đủ 12 âm (tổng thể cromatic)', pcs, t: 0 })
      continue
    }
    for (const c of COLLECTIONS) {
      if (pcs.length > c.base.length) continue
      const t = [...Array(c.n).keys()].find((tr) => pcs.every((p) => c.base.includes(mod(p - tr, 12))))
      if (t !== undefined) {
        collections.push({ bar: bar.i, kind: c.kind, pcs, t })
        break
      }
    }
  }

  // techniques
  const techniques: Technique[] = []
  sonorities.forEach((s) => s.quartal && techniques.push({ kind: 'quartal', from: s.start, to: s.end, text: 'hợp âm chồng quãng 4' }))
  // planing: three or more sonorities in a row with the same intervals above the bass, moved
  const shape = (s: Sonority) => (s.lowest ? s.pcs.map((p) => mod(p - (s.lowest!.midi % 12), 12)).sort((a, b) => a - b).join() : '')
  for (let i = 0; i + 2 < sonorities.length; ) {
    let j = i
    while (j + 1 < sonorities.length && sonorities[j + 1].pcs.length >= 3 && shape(sonorities[j + 1]) === shape(sonorities[i]) && sonorities[j + 1].lowest?.midi !== sonorities[j].lowest?.midi) j++
    if (j - i >= 2 && sonorities[i].pcs.length >= 3) techniques.push({ kind: 'planing', from: sonorities[i].start, to: sonorities[j].end, text: `chuyển động song song: ${j - i + 1} hợp âm cùng cấu trúc (${sonorities[i].forte ?? sonorities[i].pcs.length + ' âm'})` })
    i = j + 1
  }
  // pedal: a low note held across two bars or more while the sound above changes
  for (const n of sc.notes) {
    const bar = barAt(sc.bars, n.start)
    if (n.end - n.start < 2 * bar.len) continue
    const lowest = !sc.notes.some((m) => m !== n && m.start < n.end && m.end > n.start && m.midi < n.midi)
    if (lowest) techniques.push({ kind: 'pedal', from: n.start, to: n.end, text: `âm pedal ${nameOf(n)}` })
  }
  // ostinato: a figure of 2–8 notes repeated three times or more in a row in one line
  const lanes = new Map<number, ANote[]>()
  for (const n of sc.notes) (lanes.get(n.lane) ?? lanes.set(n.lane, []).get(n.lane)!).push(n)
  for (const [, line] of lanes) {
    const mel = line.filter((n, i) => !line.some((m, j) => j !== i && m.start === n.start && m.midi > n.midi))
    const seq = mel.map((n) => `${n.midi}:${n.end - n.start}`)
    for (let len = 2; len <= 8; len++) {
      for (let i = 0; i + 3 * len <= seq.length; ) {
        let reps = 1
        while (i + (reps + 1) * len <= seq.length && seq.slice(i, i + len).join() === seq.slice(i + reps * len, i + (reps + 1) * len).join()) reps++
        const distinct = new Set(seq.slice(i, i + len)).size
        if (reps >= 3 && distinct > 1 && !techniques.some((t) => t.kind === 'ostinato' && t.from <= mel[i].start && t.to >= mel[i].start)) {
          techniques.push({ kind: 'ostinato', from: mel[i].start, to: mel[i + reps * len - 1].end, text: `ostinato ${len} nốt × ${reps}` })
          i += reps * len
        } else i++
      }
    }
  }

  // twelve-tone rows: twelve different pitch classes in a row in one line
  const rows: Row[] = []
  for (const [lane, line] of lanes) {
    const mel = line.filter((n, i) => !line.some((m, j) => j !== i && m.start === n.start && m.midi > n.midi))
    for (let i = 0; i + 12 <= mel.length; i++) {
      const pcs = mel.slice(i, i + 12).map((n) => n.midi % 12)
      if (new Set(pcs).size !== 12) continue
      rows.push({ pcs, lane, from: mel[i].start, to: mel[i + 11].end, forms: [] })
      break
    }
  }
  // other statements of a row, in any of its 48 forms
  for (const row of rows) {
    const forms = rowForms(row.pcs)
    for (const [, line] of lanes) {
      const mel = line.filter((n, i) => !line.some((m, j) => j !== i && m.start === n.start && m.midi > n.midi))
      for (let i = 0; i + 12 <= mel.length; i++) {
        const key = mel.slice(i, i + 12).map((n) => n.midi % 12).join()
        const hit = forms.find((f) => f.pcs.join() === key)
        if (hit && mel[i].start !== row.from) row.forms.push({ label: hit.label, from: mel[i].start })
      }
    }
  }
  rows.forEach((r) => techniques.push({ kind: 'row', from: r.from, to: r.to, text: 'dãy 12 âm' }))

  // centre: the pitch class that sounds longest, the bass counting double
  const weight = new Array(12).fill(0)
  for (const n of sc.notes) {
    const lowest = !sc.notes.some((m) => m !== n && m.start < n.end && m.end > n.start && m.midi < n.midi)
    weight[n.midi % 12] += (n.end - n.start) * (lowest ? 2 : 1)
  }
  const top = weight.indexOf(Math.max(...weight))
  const sorted = [...weight].sort((a, b) => b - a)
  const centre = sorted[0] > 1.35 * sorted[1] ? top : null

  // the interval classes the piece is made of, summed over its sonorities (each counted once per sonority)
  const vector = [0, 0, 0, 0, 0, 0]
  for (const s of sonorities) for (let i = 0; i < s.pcs.length; i++) for (let j = i + 1; j < s.pcs.length; j++) vector[Math.min(mod(s.pcs[j] - s.pcs[i], 12), mod(s.pcs[i] - s.pcs[j], 12)) - 1]++
  return { sonorities, collections, techniques: techniques.sort((a, b) => a.from - b.from), rows, centre, vector }
}

/** The 48 forms of a row: P, I, R, RI on each of the 12 transpositions, labelled from the row's first note (P0). */
export function rowForms(row: number[]): { label: string; pcs: number[] }[] {
  const p0 = row.map((p) => mod(p - row[0], 12))
  const i0 = p0.map((p) => mod(-p, 12))
  const out: { label: string; pcs: number[] }[] = []
  for (let t = 0; t < 12; t++) {
    const P = p0.map((p) => mod(p + t + row[0], 12))
    const I = i0.map((p) => mod(p + t + row[0], 12))
    out.push({ label: `P${t}`, pcs: P }, { label: `I${t}`, pcs: I }, { label: `R${t}`, pcs: [...P].reverse() }, { label: `RI${t}`, pcs: [...I].reverse() })
  }
  return out
}

/** The 12 × 12 matrix of a row (rows: prime forms; columns: inversions), as note names. */
export function rowMatrix(row: number[], flats = false): string[][] {
  const p0 = row.map((p) => mod(p - row[0], 12))
  return p0.map((_, r) => p0.map((_, c) => mod(p0[c] - p0[r] + row[0], 12))).map((line) => line.map((pc) => nameOf(plainSpelling(pc, flats))))
}
