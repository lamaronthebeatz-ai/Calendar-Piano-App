import type { Analysis } from './index'
import type { AScore } from './extract'
import { barAt } from './extract'
import { mod } from './pitch'

/**
 * Form: phrases (bounded by cadences and by where the music stops), passages that come back (literally, at another
 * pitch, as a sequence, varied), sections lettered by their material, and a guess at the form they make. Everything
 * here is a proposal for the analyst to check, worded so (the report says what it is based on).
 */
export type Phrase = { from: number; to: number; bars: [number, number]; end?: string }
export type Repeat = { kind: 'exact' | 'transposed' | 'sequence' | 'varied'; a: [number, number]; b: [number, number]; shift: number; score: number }
export type Section = { letter: string; bars: [number, number]; key?: string }
export type FormGuess = { name: string; concept: 'period' | 'binary' | 'ternary' | 'rondo' | 'sonata' | 'variations' | 'songForm' | 'blues' | 'phrase'; why: string }
export type FormAnalysis = { phrases: Phrase[]; repeats: Repeat[]; sections: Section[]; guess: FormGuess | null }

/** What one bar says, compared bar against bar: the top line's intervals and rhythm, the bass, the pitch classes. */
type BarPrint = { mel: number[]; rhythm: string; first: number | null; firstDn: number | null; bass: number | null; chroma: number[]; empty: boolean }

function prints(sc: AScore): BarPrint[] {
  return sc.bars.map((b) => {
    const inBar = sc.notes.filter((n) => n.start >= b.start && n.start < b.start + b.len)
    const onsets = [...new Set(inBar.map((n) => n.start))].sort((x, y) => x - y)
    const top = onsets.map((t) => inBar.filter((n) => n.start === t).reduce((m, n) => (n.midi > m.midi ? n : m)))
    const low = onsets.map((t) => inBar.filter((n) => n.start === t).reduce((m, n) => (n.midi < m.midi ? n : m)))
    const chroma = new Array(12).fill(0)
    for (const n of sc.notes) if (n.start < b.start + b.len && n.end > b.start) chroma[n.midi % 12] += Math.min(n.end, b.start + b.len) - Math.max(n.start, b.start)
    return {
      // the line in letter steps: a sequence moves by scale degrees, so its semitones change from bar to bar
      mel: top.slice(1).map((n, i) => n.oct * 7 + n.step - (top[i].oct * 7 + top[i].step)),
      firstDn: top[0] ? top[0].oct * 7 + top[0].step : null,
      rhythm: onsets.map((t) => t - b.start).join(','),
      first: top[0]?.midi ?? null,
      bass: low[0]?.midi ?? null,
      chroma,
      empty: !inBar.length,
    }
  })
}

const cos = (a: number[], b: number[]) => {
  let d = 0
  let x = 0
  let y = 0
  for (let i = 0; i < a.length; i++) {
    d += a[i] * b[i]
    x += a[i] * a[i]
    y += b[i] * b[i]
  }
  return x && y ? d / Math.sqrt(x * y) : 0
}
const rot = (v: number[], k: number) => v.map((_, i) => v[mod(i - k, 12)])

/** How alike two bars are (0 – 1), and the transposition that makes them most alike. */
function barLike(p: BarPrint, q: BarPrint): { s: number; shift: number; steps: number; exact: boolean } {
  if (p.empty || q.empty) return { s: 0, shift: 0, steps: 0, exact: false }
  const rhythm = p.rhythm === q.rhythm ? 1 : 0
  const len = Math.max(p.mel.length, q.mel.length) || 1
  let same = 0
  for (let i = 0; i < Math.min(p.mel.length, q.mel.length); i++) if (p.mel[i] === q.mel[i]) same++
  const mel = p.mel.length === 0 && q.mel.length === 0 ? 1 : same / len
  const shift = p.first !== null && q.first !== null ? q.first - p.first : 0
  const steps = p.firstDn !== null && q.firstDn !== null ? q.firstDn - p.firstDn : 0
  // harmony compared after moving by the same interval (a diatonic sequence's chords move within the key too)
  const harm = Math.max(cos(rot(p.chroma, mod(shift, 12)), q.chroma), ...[-2, -1, 1, 2].map((d) => cos(rot(p.chroma, mod(shift + d, 12)), q.chroma)) .map((x) => x * 0.9))
  const s = 0.45 * mel + 0.3 * rhythm + 0.25 * harm
  return { s, shift, steps, exact: shift === 0 && mel === 1 && rhythm === 1 && harm > 0.97 }
}

export function formOf(a: Analysis): FormAnalysis {
  const sc = a.score
  const bars = sc.bars
  const P = prints(sc)
  // ---- phrases: end at cadences that stop the music, at fermatas, before rests of a beat or more after a long note
  const ends = new Set<number>()
  for (const c of a.cadences) if (c.strength >= 0.55) ends.add(barAt(bars, c.end - 1).i)
  for (const n of sc.notes) if (n.fermata) ends.add(barAt(bars, n.end - 1).i)
  ends.add(bars.length - 1)
  const phrases: Phrase[] = []
  let from = 0
  for (const e of [...ends].sort((x, y) => x - y)) {
    if (e < from) continue
    // a phrase shorter than two bars joins the next one (a cadence inside a phrase does not split it)
    if (e - from + 1 < 2 && e !== bars.length - 1) continue
    const cad = a.cadences.find((c) => barAt(bars, c.end - 1).i === e)
    phrases.push({ from: bars[from].start, to: bars[e].start + bars[e].len, bars: [from, e], end: cad?.kind })
    from = e + 1
  }

  // ---- repeats: runs of two or more bars that match an earlier run
  const repeats: Repeat[] = []
  const used = new Set<string>()
  for (let j = 1; j < bars.length; j++) {
    for (let i = 0; i < j; i++) {
      let len = 0
      let total = 0
      let shift: number | null = null
      let exact = true
      while (i + len < j && j + len < bars.length) {
        const l = barLike(P[i + len], P[j + len])
        if (l.s < 0.72 || (shift !== null && l.steps !== shift && !P[j + len].empty)) break
        shift ??= l.steps
        exact &&= l.exact
        total += l.s
        len++
      }
      if (len < 2 || used.has(`${j}`)) continue
      const kind: Repeat['kind'] = exact ? 'exact' : shift && i + len === j ? 'sequence' : shift ? 'transposed' : 'varied'
      repeats.push({ kind, a: [i, i + len - 1], b: [j, j + len - 1], shift: shift ?? 0, score: total / len })
      for (let k = 0; k < len; k++) used.add(`${j + k}`)
      break
    }
  }

  // one-bar sequences: three or more bars in a row, each the one before moved by the same interval
  for (let k = 0; k + 2 < bars.length; ) {
    const l1 = barLike(P[k], P[k + 1])
    if (l1.s < 0.75 || !l1.steps || Math.abs(l1.steps) > 4) {
      k++
      continue
    }
    let m = k + 1
    while (m + 1 < bars.length) {
      const l = barLike(P[m], P[m + 1])
      if (l.s < 0.75 || l.steps !== l1.steps) break
      m++
    }
    if (m - k >= 2 && !repeats.some((r) => r.kind === 'sequence' && r.a[0] <= k && r.b[1] >= m)) repeats.push({ kind: 'sequence', a: [k, k], b: [k + 1, m], shift: l1.steps, score: l1.s })
    k = m
  }
  repeats.sort((x, y) => x.b[0] - y.b[0])

  // ---- sections: cut where a phrase ends, where a long passage (4+ bars) comes back or ends, where a key lasting
  // four bars or more begins; each section lettered by its opening bars (same material → same letter, varied → prime)
  const cuts = new Set<number>([0])
  for (const ph of phrases) if (ph.bars[1] + 1 < bars.length) cuts.add(ph.bars[1] + 1)
  for (const r of repeats) if (r.b[1] - r.b[0] >= 3) {
    cuts.add(r.b[0])
    if (r.b[1] + 1 < bars.length) cuts.add(r.b[1] + 1)
    cuts.add(r.a[0])
    if (r.a[1] + 1 < bars.length) cuts.add(r.a[1] + 1)
  }
  // no section shorter than two bars
  const cutList = [...cuts].sort((x, y) => x - y).filter((c, i, arr) => i === 0 || c - arr[i - 1] >= 2)
  const sections: Section[] = []
  const letters: { letter: string; first: number }[] = []
  cutList.forEach((start, ci) => {
    const end = (cutList[ci + 1] ?? bars.length) - 1
    let found: { letter: string; s: number } | null = null
    // a passage found to return (repeats above) takes the letter of the section it returns from
    const back = repeats.find((r) => r.b[1] - r.b[0] >= 3 && r.b[0] >= start && r.b[0] <= Math.min(end, start + 1))
    if (back) {
      const src = sections.find((x) => x.bars[0] <= r0(back) && x.bars[1] >= r0(back))
      if (src) found = { letter: src.letter.replace(/′/g, ''), s: back.kind === 'exact' ? 1 : 0.9 }
    }
    for (const l of found ? [] : letters) {
      const s = (barLike(P[l.first], P[start]).s + (P[l.first + 1] && P[start + 1] ? barLike(P[l.first + 1], P[start + 1]).s : 0)) / 2
      if (s > 0.8 && (!found || s > found.s)) found = { letter: l.letter, s }
    }
    const key = a.harmony.find((h) => h.chord.start >= bars[start].start)?.key.name
    if (found) {
      const prev = sections[sections.length - 1]
      if (prev && prev.letter.replace(/′/g, '') === found.letter) prev.bars[1] = end
      else sections.push({ letter: found.s > 0.95 ? found.letter : `${found.letter}′`, bars: [start, end], key })
    } else {
      const letter = String.fromCharCode(65 + letters.length)
      letters.push({ letter, first: start })
      const prev = sections[sections.length - 1]
      // a cut inside continuing new material does not make a new letter of its own if the previous section is also new
      sections.push({ letter, bars: [start, end], key })
      void prev
    }
  })
  // material heard once and next to other material heard once is one contrasting section, not several
  const count = (l: string) => sections.filter((x) => x.letter.replace(/′/g, '') === l.replace(/′/g, '')).length
  for (let i = sections.length - 1; i > 0; i--) if (count(sections[i].letter) === 1 && count(sections[i - 1].letter) === 1) {
    sections[i - 1].bars[1] = sections[i].bars[1]
    sections.splice(i, 1)
  }
  // letters again, in order of first appearance
  const map = new Map<string, string>()
  for (const x of sections) {
    const base = x.letter.replace(/′/g, '')
    if (!map.has(base)) map.set(base, String.fromCharCode(65 + map.size))
    x.letter = map.get(base)! + x.letter.slice(base.length)
  }

  return { phrases, repeats, sections, guess: guessForm(a, phrases, sections) }
}

function guessForm(a: Analysis, phrases: Phrase[], sections: Section[]): FormGuess | null {
  const seq = sections.map((s) => s.letter.replace(/′/g, '')).join('')
  const nBars = a.score.bars.length
  if (a.lens === 'jazz' && nBars >= 32 && nBars <= 34 && seq.startsWith('AABA')) return { name: 'hình thức ca khúc 32 ô AABA', concept: 'songForm', why: 'bốn câu tám ô, câu thứ ba mang chất liệu khác' }
  if (phrases.length === 2 && phrases[0].end && ['HC', 'IAC'].includes(phrases[0].end) && phrases[1].end === 'PAC')
    return { name: 'đoạn nhạc hai câu', concept: 'period', why: 'câu thứ nhất dừng ở kết nửa hoặc kết không hoàn toàn, câu thứ hai khép bằng kết trọn' }
  if (/^A+B+A+$/.test(seq)) return { name: 'hình thức ba đoạn (A – B – A)', concept: 'ternary', why: 'chất liệu đầu trở lại sau một phần tương phản' }
  if (/^A+B+A+C+A+/.test(seq)) return { name: 'rondo (A – B – A – C – A…)', concept: 'rondo', why: 'chủ đề chính trở lại nhiều lần, xen giữa các đoạn khác nhau' }
  if (/^A+B+$/.test(seq)) return { name: 'hình thức hai đoạn (A – B)', concept: 'binary', why: 'hai phần với chất liệu khác nhau, không có sự trở lại' }
  // sonata, by the textbook test: the second theme is heard twice, first in another key, then in the home key
  const home = a.regions[0]?.key
  if (home && sections.length >= 4) {
    const bs = sections.filter((x) => x.letter.startsWith('B'))
    const firstA = sections.findIndex((x) => x.letter.startsWith('A'))
    const aBack = sections.findIndex((x, i) => i > firstA + 1 && x.letter.startsWith('A'))
    if (bs.length >= 2 && bs[0].key && bs[0].key !== home.name && bs[bs.length - 1].key === home.name && aBack > 0)
      return { name: 'hình thức sonata', concept: 'sonata', why: `chủ đề hai (B) xuất hiện ở ${bs[0].key} rồi trở lại ở giọng chính ${home.name}, chủ đề một trở lại sau phần giữa` }
  }
  // march / ragtime: strains A – B – A, then a trio in the subdominant
  if (home && /^AB+A+C/.test(seq)) {
    const c = sections.find((x) => x.letter.startsWith('C'))
    const trio = c?.key && a.harmony.find((h) => h.key.name === c.key)?.key
    const sub = trio && mod(trio.tonicPc - home.tonicPc, 12) === 5
    return { name: `hình thức nhiều đoạn kiểu march / ragtime (A – B – A – C${sub ? ': trio ở giọng hạ át' : ''})`, concept: 'rondo', why: 'các đoạn nối tiếp, đoạn đầu trở lại một lần, rồi một đoạn mới' + (sub ? ' ở giọng bậc IV như phần trio của march' : '') }
  }
  if (sections.length >= 3 && new Set(sections.map((s) => s.letter.replace(/′/g, ''))).size === 1) return { name: 'biến tấu hoặc nhắc lại nhiều lần', concept: 'variations', why: 'mọi câu đều dùng chung một chất liệu mở đầu' }
  if (phrases.length === 1 && a.score.bars.length <= 8) return { name: 'một câu nhạc', concept: 'phrase', why: 'chỉ có một chỗ kết' }
  return null
}

const r0 = (r: Repeat) => r.a[0]

export const REPEAT_NAME: Record<Repeat['kind'], string> = { exact: 'nhắc lại nguyên', transposed: 'nhắc lại ở cao độ khác', sequence: 'mô tiến', varied: 'nhắc lại có biến đổi' }
