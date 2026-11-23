import type { AnalysisModule, Finding } from '../../analysis/types'
import type { Score, SoundingNote } from '../../repr/score'
import { barQ, lineOf, q, voiceName } from './common'

/**
 * Rhythm (formalizable). Facts from durations and onsets against the written meter: the duration palette, the metric
 * weight of every onset (a grid of nested beat levels, the strongest at the bar line), syncopations (a note struck on
 * a weaker position that is still sounding at a stronger one), the rhythm of each bar and which bars repeat it,
 * augmentation / diminution of a bar rhythm (all durations ×2 or ÷2), and polyrhythm (two voices dividing the same
 * beat by 2 and 3 at once). The meter is READ from the score, never inferred; the accent hierarchy is the metric grid,
 * not performed accent.
 */
const ID = 'rhythm.meter'

/** Metric weight of a position (quarters from the bar line): how many grid levels it lies on (bar = highest). */
export function weightGrid(barLen: number, beat: number) {
  const levels = [barLen]
  for (let v = beat * 2; v < barLen; v *= 2) if (barLen % v === 0) levels.push(v)
  levels.sort((a, b) => b - a)
  for (let v = beat; v >= beat / 8; v /= 2) if (!levels.includes(v)) levels.push(v)
  return (t: number) => {
    const x = ((t % barLen) + barLen) % barLen
    const k = levels.findIndex((v) => Math.abs(x / v - Math.round(x / v)) < 1e-6)
    return k < 0 ? 0 : levels.length - k
  }
}

/** Syncopations: onset weight lower than the weight of a grid point inside the note. */
export function syncopations(ns: readonly SoundingNote[], barLen: number, beat: number) {
  const w = weightGrid(barLen, beat)
  const out: { at: number; dur: number; from: number; over: number }[] = []
  for (const n of ns) {
    const a = q(n.onset), d = q(n.duration)
    let over = 0
    for (let t = Math.ceil((a + 1e-9) / (beat / 2)) * (beat / 2); t < a + d - 1e-9; t += beat / 2) over = Math.max(over, w(t))
    if (over > w(a)) out.push({ at: a, dur: d, from: w(a), over })
  }
  return out
}

const rhythmOfBar = (ns: readonly SoundingNote[], start: number, len: number) =>
  ns.filter((n) => q(n.onset) >= start && q(n.onset) < start + len).map((n) => `${q(n.onset) - start}:${q(n.duration)}`).join(' ')

export const rhythmModule: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'rhythm', kind: 'formalizable',
    method: 'lưới trọng lượng phách theo số chỉ nhịp đã ghi; nghịch phách = nốt đánh ở vị trí nhẹ còn ngân qua vị trí nặng hơn; so tiết tấu từng ô',
    limits: ['số chỉ nhịp lấy từ bản nhạc (chỉ số chỉ nhịp đầu), không tự đoán', 'phân cấp trọng âm là lưới nhịp, không phải trọng âm khi diễn tấu'],
  },
  checkInput: (input) => (input.score.meters.length ? (input.score.voices.some((v) => lineOf(v).length) ? [] : ['không có nốt']) : ['số chỉ nhịp']),
  analyze(input) {
    const s = input.score as Score
    const m = s.meters[0].meter
    const B = barQ(s)
    const beat = 4 / m.den
    const f: Finding[] = []
    const lines = s.voices.map(lineOf)
    const all = lines.flat()
    const durs = new Map<number, number>()
    for (const n of all) durs.set(q(n.duration), (durs.get(q(n.duration)) ?? 0) + 1)
    f.push({
      id: `${ID}#meter`, module: ID, kind: 'fact', topic: 'nhịp', value: { num: m.num, den: m.den, barQuarters: B, changes: s.meters.length - 1 },
      text: { basic: `Nhịp ${m.num}/${m.den}${s.meters.length > 1 ? ` (đổi nhịp ${s.meters.length - 1} lần — chỉ phân tích theo số chỉ nhịp đầu)` : ''}`, technical: `ô = ${B} phách đen, phách = ${beat}` },
      evidence: ['số chỉ nhịp ghi trong bản nhạc'],
    })
    f.push({
      id: `${ID}#durations`, module: ID, kind: 'fact', topic: 'trường độ', value: Object.fromEntries([...durs].sort((a, b) => b[0] - a[0])),
      text: { basic: `${durs.size} loại trường độ; nhiều nhất là ${[...durs].sort((a, b) => b[1] - a[1])[0][0]} phách đen`, technical: [...durs].sort((a, b) => b[0] - a[0]).map(([d, n]) => `${d}: ${n}`).join(', ') },
      evidence: [`${all.length} nốt`],
    })
    const w = weightGrid(B, beat)
    const onsetWeights = new Map<number, number>()
    for (const n of all) onsetWeights.set(w(q(n.onset)), (onsetWeights.get(w(q(n.onset))) ?? 0) + 1)
    f.push({
      id: `${ID}#accents`, module: ID, kind: 'fact', topic: 'phân cấp trọng âm', value: Object.fromEntries([...onsetWeights].sort((a, b) => b[0] - a[0])),
      text: { basic: `${Math.round((100 * (onsetWeights.get(Math.max(...onsetWeights.keys())) ?? 0)) / all.length)}% nốt rơi vào vị trí mạnh nhất có mặt`, technical: [...onsetWeights].sort((a, b) => b[0] - a[0]).map(([k, n]) => `mức ${k}: ${n}`).join(', ') },
      evidence: ['lưới phách theo số chỉ nhịp'],
    })
    lines.forEach((ns, vi) => {
      if (!ns.length) return
      const sy = syncopations(ns, B, beat)
      if (sy.length)
        f.push({
          id: `${ID}#syncopation-${vi + 1}`, module: ID, kind: 'fact', topic: 'nghịch phách', voices: [vi], at: sy[0].at, value: sy,
          text: { basic: `${voiceName(s, vi)}: ${sy.length} chỗ nghịch phách`, technical: sy.slice(0, 8).map((x) => `@${x.at} (mức ${x.from} → ${x.over})`).join(', ') },
          evidence: sy.slice(0, 4).map((x) => `nốt ở ${x.at} dài ${x.dur} ngân qua vị trí mức ${x.over}`),
        })
      const end = Math.max(...ns.map((n) => q(n.onset) + q(n.duration)))
      const bars = Math.ceil(end / B)
      const prints = Array.from({ length: bars }, (_, b) => rhythmOfBar(ns, b * B, B))
      const groups = new Map<string, number[]>()
      prints.forEach((p, b) => p && groups.set(p, [...(groups.get(p) ?? []), b + 1]))
      const repeated = [...groups].filter(([, bs]) => bs.length > 1).sort((a, b) => b[1].length - a[1].length)
      repeated.slice(0, 4).forEach(([p, bs], k) =>
        f.push({
          id: `${ID}#pattern-${vi + 1}-${k + 1}`, module: ID, kind: 'fact', topic: 'mẫu tiết tấu', voices: [vi], at: (bs[0] - 1) * B, value: { rhythm: p, bars: bs },
          text: { basic: `${voiceName(s, vi)}: một mẫu tiết tấu ô nhịp lặp ở ${bs.length} ô (${bs.join(', ')})`, technical: p }, evidence: bs.map((b) => `ô ${b}`),
        }),
      )
      // augmentation / diminution: a bar rhythm whose durations are all ×2 (or ÷2) of another bar's
      const parsed = prints.map((p) => (p ? p.split(' ').map((x) => x.split(':').map(Number)) : []))
      for (let a = 0; a < bars; a++)
        for (let b = 0; b < bars; b++) {
          if (a === b || parsed[a].length < 2 || parsed[a].length !== parsed[b].length) continue
          if (parsed[a].every(([, d], i) => Math.abs(parsed[b][i][1] - 2 * d) < 1e-9) && a < b) {
            f.push({
              id: `${ID}#augmentation-${vi + 1}-${a + 1}-${b + 1}`, module: ID, kind: 'fact', topic: 'biến đổi tiết tấu', voices: [vi], at: b * B, value: { from: a + 1, to: b + 1, ratio: 2 },
              text: { basic: `${voiceName(s, vi)}: ô ${b + 1} là tiết tấu ô ${a + 1} giãn gấp đôi`, technical: `${prints[a]} → ${prints[b]}` }, evidence: [`ô ${a + 1}`, `ô ${b + 1}`],
            })
          }
        }
    })
    // polyrhythm: in one beat, one voice divides it in 2 (or 4) while another divides it in 3
    const div = (ns: readonly SoundingNote[], t: number) => {
      const xs = ns.filter((n) => q(n.onset) >= t - 1e-9 && q(n.onset) < t + beat - 1e-9)
      return xs.length > 1 ? xs.length : 1
    }
    const poly: { at: number; voices: [number, number]; ratio: string }[] = []
    const end = Math.max(0, ...all.map((n) => q(n.onset) + q(n.duration)))
    for (let t = 0; t < end; t += beat)
      for (let a = 0; a < lines.length; a++)
        for (let b = a + 1; b < lines.length; b++) {
          const x = div(lines[a], t), y = div(lines[b], t)
          if ((x % 3 === 0 && y % 2 === 0) || (x % 2 === 0 && y % 3 === 0)) poly.push({ at: t, voices: [a, b], ratio: `${x}:${y}` })
        }
    if (poly.length)
      f.push({
        id: `${ID}#polyrhythm`, module: ID, kind: 'fact', topic: 'đa tiết tấu', at: poly[0].at, value: poly,
        text: { basic: `${poly.length} phách có chia 2 chồng chia 3 giữa hai bè`, technical: poly.slice(0, 6).map((p) => `@${p.at} bè ${p.voices[0] + 1}/${p.voices[1] + 1} ${p.ratio}`).join(', ') },
        evidence: ['đếm số nốt mỗi bè trong cùng một phách'],
      })
    const constraint = input.context?.rhythmLimits as { minDur?: number } | undefined
    if (constraint?.minDur !== undefined) {
      const bad = all.filter((n) => q(n.duration) < constraint.minDur!)
      f.push({ id: `${ID}#limits`, module: ID, kind: 'rule-check', topic: 'ràng buộc tiết tấu', value: { ok: !bad.length, faults: bad.map((n) => q(n.onset)) }, text: { basic: bad.length ? `${bad.length} nốt ngắn hơn giới hạn` : 'trong giới hạn', technical: `minDur ${constraint.minDur}` }, evidence: [JSON.stringify(constraint)] })
    }
    return { status: 'COMPLETED', statusReason: `nhịp ${m.num}/${m.den}, ${all.length} nốt`, findings: f }
  },
}
