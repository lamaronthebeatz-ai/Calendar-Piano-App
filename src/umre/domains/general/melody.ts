import type { AnalysisModule, Finding } from '../../analysis/types'
import { diatonic, formatPitch, midi } from '../../repr/pitch'
import type { Score, SoundingNote } from '../../repr/score'
import { barQ, lineOf, q, semis, steps, voiceName } from './common'

/**
 * Melody (per voice). Formalizable part — FACTS computed from the notes: range, interval content, contour shape,
 * exact repetition of an interval pattern (a motif occurrence), a sequence (the same pattern restated at once at
 * another pitch level), and constraint checks (largest leap, range) when the context gives limits. Analytical part —
 * phrase boundaries are a HYPOTHESIS (rest, long note or leap after a long note); motif "importance" is not claimed.
 */
const ID = 'melody.line'

export type Contour = 'ascending' | 'descending' | 'arch' | 'inverted-arch' | 'level' | 'wave'
/** Overall shape from where the highest and lowest notes fall (inner third = arch / inverted arch). */
export function contourOf(ns: readonly SoundingNote[]): Contour {
  if (ns.length < 2) return 'level'
  const ds = ns.map((n) => diatonic(n.pitch))
  const hi = Math.max(...ds), lo = Math.min(...ds)
  if (hi === lo) return 'level'
  const iHi = ds.indexOf(hi), iLo = ds.indexOf(lo)
  const n = ds.length - 1
  const inner = (i: number) => i > n / 6 && i < (5 * n) / 6
  const first = ds[0], last = ds[n]
  if (inner(iHi) && first < hi && last < hi && !inner(iLo)) return 'arch'
  if (inner(iLo) && first > lo && last > lo && !inner(iHi)) return 'inverted-arch'
  if (last - first >= (hi - lo) / 2) return 'ascending'
  if (first - last >= (hi - lo) / 2) return 'descending'
  return 'wave'
}

export type Pattern = { readonly intervals: readonly number[]; readonly at: readonly number[] }
/**
 * Interval patterns (diatonic steps, length ≥ `min`) that occur at least twice without overlap: the longest first; a
 * shorter pattern inside a longer one's occurrences is not repeated.
 */
export function repeatedPatterns(ns: readonly SoundingNote[], min = 3): Pattern[] {
  const st = steps(ns)
  const out: Pattern[] = []
  const covered = new Set<string>()
  for (let len = Math.min(12, Math.floor(st.length / 2)); len >= min; len--) {
    const seen = new Map<string, number[]>()
    for (let i = 0; i + len <= st.length; i++) {
      const k = st.slice(i, i + len).join(',')
      const xs = seen.get(k) ?? []
      if (!xs.length || i >= xs[xs.length - 1] + len) xs.push(i)
      seen.set(k, xs)
    }
    for (const [k, xs] of seen) {
      if (xs.length < 2 || xs.every((i) => covered.has(`${i}:${len}`))) continue
      if (out.some((p) => p.intervals.join(',').includes(k) && xs.every((i) => p.at.some((j) => i >= j && i + len <= j + p.intervals.length)))) continue
      out.push({ intervals: k.split(',').map(Number), at: xs })
      for (const i of xs) for (let l = min; l <= len; l++) for (let o = 0; o + l <= len; o++) covered.add(`${i + o}:${l}`)
    }
  }
  return out
}

/** A sequence: a pattern restated immediately after itself (next occurrence starts where the last ends) at another level. */
export function sequencesOf(ns: readonly SoundingNote[], ps: readonly Pattern[]) {
  const out: { pattern: Pattern; links: number; shift: number[] }[] = []
  for (const p of ps) {
    const len = p.intervals.length
    const chain = p.at.filter((i, k) => k > 0 && i === p.at[k - 1] + len)
    if (!chain.length) continue
    const shift = chain.map((i) => diatonic(ns[i].pitch) - diatonic(ns[i - len].pitch))
    if (shift.some((x) => x !== 0)) out.push({ pattern: p, links: chain.length, shift })
  }
  return out
}

/** Phrase boundaries (hypothesis): after a rest, or after a note at least twice the median length and a whole beat long; a phrase is at least `minLen` quarters (two bars by default). */
export function phrasesOf(ns: readonly SoundingNote[], minLen = 8, beat = 1): { from: number; to: number; why: string }[] {
  if (!ns.length) return []
  const durs = ns.map((n) => q(n.duration)).sort((a, b) => a - b)
  const median = durs[Math.floor(durs.length / 2)]
  const cuts: { i: number; why: string }[] = []
  for (let i = 0; i + 1 < ns.length; i++) {
    const end = q(ns[i].onset) + q(ns[i].duration)
    const gap = q(ns[i + 1].onset) - end
    if (gap > 0) cuts.push({ i, why: 'dấu lặng' })
    else if (q(ns[i].duration) >= Math.max(2 * median, beat) && i > 1) cuts.push({ i, why: 'nốt dài' })
  }
  const out: { from: number; to: number; why: string }[] = []
  let start = 0
  for (const c of cuts) {
    if (c.i - start < 2 || q(ns[c.i].onset) + q(ns[c.i].duration) - q(ns[start].onset) < (c.why === 'dấu lặng' ? minLen / 2 : minLen)) continue
    out.push({ from: q(ns[start].onset), to: q(ns[c.i].onset) + q(ns[c.i].duration), why: c.why })
    start = c.i + 1
  }
  const last = ns[ns.length - 1]
  out.push({ from: q(ns[start].onset), to: q(last.onset) + q(last.duration), why: 'hết bè' })
  return out
}

const STEP_NAME = ['đồng âm', 'quãng 2', 'quãng 3', 'quãng 4', 'quãng 5', 'quãng 6', 'quãng 7', 'quãng 8']
const CONTOUR_VI: Record<Contour, string> = { ascending: 'đi lên', descending: 'đi xuống', arch: 'hình vòm', 'inverted-arch': 'vòm ngược', level: 'đứng yên', wave: 'lượn sóng' }

export const melodyModule: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'melody', kind: 'formalizable',
    method: 'đếm trên nốt từng bè: âm vực, phân bố quãng (bậc và nửa cung), hình nét, mẫu quãng lặp lại (motif), mô tiến, ranh giới câu theo dấu lặng / nốt dài',
    limits: ['motif = mẫu quãng lặp đúng (kể cả dịch giọng), chưa nhận biến thể (đảo, nghịch hành, giãn)', 'ranh giới câu là giả thuyết, không dùng hoà âm'],
  },
  checkInput: (input) => (input.score.voices.some((v) => lineOf(v).length >= 2) ? [] : ['ít nhất một bè có hai nốt']),
  analyze(input) {
    const s = input.score as Score
    const limits = input.context?.melodyLimits as { maxLeapSteps?: number; low?: number; high?: number } | undefined
    const f: Finding[] = []
    s.voices.forEach((v, vi) => {
      const ns = lineOf(v)
      if (ns.length < 2) return
      const name = voiceName(s, vi)
      const ms = ns.map((n) => midi(n.pitch))
      const lo = ns[ms.indexOf(Math.min(...ms))], hi = ns[ms.indexOf(Math.max(...ms))]
      const st = steps(ns), se = semis(ns)
      const hist = new Map<number, number>()
      for (const x of st) hist.set(Math.min(7, Math.abs(x)), (hist.get(Math.min(7, Math.abs(x))) ?? 0) + 1)
      const leaps = st.filter((x) => Math.abs(x) >= 2).length
      f.push({
        id: `${ID}#range-${vi + 1}`, module: ID, kind: 'fact', topic: 'âm vực', voices: [vi], value: { low: formatPitch(lo.pitch), high: formatPitch(hi.pitch), semitones: midi(hi.pitch) - midi(lo.pitch) },
        text: { basic: `${name}: ${formatPitch(lo.pitch)} – ${formatPitch(hi.pitch)} (${midi(hi.pitch) - midi(lo.pitch)} nửa cung)`, technical: `range ${formatPitch(lo.pitch)}–${formatPitch(hi.pitch)}` },
        evidence: [`${ns.length} nốt`],
      })
      f.push({
        id: `${ID}#intervals-${vi + 1}`, module: ID, kind: 'fact', topic: 'quãng', voices: [vi],
        value: { histogram: Object.fromEntries([...hist].sort((a, b) => a[0] - b[0])), stepwise: st.filter((x) => Math.abs(x) === 1).length, leaps, largest: Math.max(...se.map(Math.abs)) },
        text: { basic: `${name}: ${Math.round((100 * st.filter((x) => Math.abs(x) <= 1).length) / st.length)}% liền bậc hoặc nhắc nốt, ${leaps} bước nhảy`, technical: [...hist].sort((a, b) => a[0] - b[0]).map(([k, n]) => `${STEP_NAME[k]}${k === 7 ? '+' : ''}: ${n}`).join(', ') },
        evidence: [`${st.length} quãng giai điệu`],
      })
      const c = contourOf(ns)
      f.push({
        id: `${ID}#contour-${vi + 1}`, module: ID, kind: 'fact', topic: 'hình nét', voices: [vi], value: c,
        text: { basic: `${name}: hình nét ${CONTOUR_VI[c]}`, technical: `contour ${c}; đỉnh ${formatPitch(hi.pitch)} @${q(hi.onset)}, đáy ${formatPitch(lo.pitch)} @${q(lo.onset)}` },
        evidence: [`nốt đầu ${formatPitch(ns[0].pitch)}, nốt cuối ${formatPitch(ns[ns.length - 1].pitch)}`],
      })
      const ps = repeatedPatterns(ns)
      ps.slice(0, 6).forEach((p, k) =>
        f.push({
          id: `${ID}#motif-${vi + 1}-${k + 1}`, module: ID, kind: 'fact', topic: 'mẫu lặp', voices: [vi], at: q(ns[p.at[0]].onset), value: { intervals: p.intervals, occurrences: p.at.map((i) => q(ns[i].onset)) },
          text: { basic: `${name}: mẫu ${p.intervals.length + 1} nốt lặp ${p.at.length} lần`, technical: `bậc ${p.intervals.map((x) => (x > 0 ? `+${x}` : `${x}`)).join(' ')} tại ${p.at.map((i) => q(ns[i].onset)).join(', ')}` },
          evidence: p.at.map((i) => ns.slice(i, i + p.intervals.length + 1).map((n) => formatPitch(n.pitch)).join(' ')),
        }),
      )
      sequencesOf(ns, ps).forEach((x, k) =>
        f.push({
          id: `${ID}#sequence-${vi + 1}-${k + 1}`, module: ID, kind: 'fact', topic: 'mô tiến', voices: [vi], at: q(ns[x.pattern.at[0]].onset), value: { intervals: x.pattern.intervals, links: x.links, shift: x.shift },
          text: { basic: `${name}: mô tiến — mẫu nhắc ngay ${x.links} lần ở cao độ khác`, technical: `dịch ${x.shift.join(', ')} bậc` },
          evidence: [`mẫu ${x.pattern.intervals.join(' ')}`],
        }),
      )
      phrasesOf(ns, 2 * barQ(s), 4 / (s.meters[0]?.meter.den ?? 4)).forEach((p, k) =>
        f.push({
          id: `${ID}#phrase-${vi + 1}-${k + 1}`, module: ID, kind: 'hypothesis', topic: 'câu', voices: [vi], at: p.from, end: p.to, value: { from: p.from, to: p.to, boundary: p.why },
          text: { basic: `${name}: câu ${k + 1} (${p.from}–${p.to} phách đen)`, technical: `ranh giới: ${p.why}` },
          confidence: { value: p.why === 'dấu lặng' || p.why === 'hết bè' ? 0.8 : 0.5, basis: 'dấu lặng hoặc hết bè là ranh giới rõ; nốt dài chỉ là gợi ý (chưa xét hoà âm và kết)' },
          evidence: [p.why],
        }),
      )
      if (limits) {
        const bad: string[] = []
        if (limits.maxLeapSteps !== undefined) st.forEach((x, i) => Math.abs(x) > limits.maxLeapSteps! && bad.push(`nhảy ${Math.abs(x) + 1} @${q(ns[i + 1].onset)}`))
        if (limits.low !== undefined && Math.min(...ms) < limits.low) bad.push(`thấp hơn giới hạn (${formatPitch(lo.pitch)})`)
        if (limits.high !== undefined && Math.max(...ms) > limits.high) bad.push(`cao hơn giới hạn (${formatPitch(hi.pitch)})`)
        f.push({
          id: `${ID}#limits-${vi + 1}`, module: ID, kind: 'rule-check', topic: 'ràng buộc giai điệu', voices: [vi], value: { ok: !bad.length, faults: bad },
          text: { basic: bad.length ? `${name}: ${bad.length} chỗ vượt giới hạn` : `${name}: trong giới hạn`, technical: bad.join('; ') || 'ok' }, evidence: [JSON.stringify(limits)],
        })
      }
    })
    return { status: 'COMPLETED', statusReason: `${s.voices.length} bè`, findings: f }
  },
}
