import type { AnalysisModule, Finding } from '../../analysis/types'
import { midi } from '../../repr/pitch'
import type { Score } from '../../repr/score'
import { barQ, lineOf, q } from './common'

/**
 * Style — only as far as the data supports: OBSERVATIONS (measurable features: chromatic share, pitch-class spread,
 * rhythmic density, range, simultaneous voices). Each is an estimate with how it is computed. There is no style
 * classifier and no attribution: a request to attribute a piece to a composer or period is answered UNKNOWN with the
 * reason, never with a guess. Interpretation of the features belongs to the analyst (and to the other modules' findings).
 */
const ID = 'style.features'

export const styleModule: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'style', kind: 'probabilistic',
    method: 'đặc trưng đo được trên nốt (tỉ lệ biến âm so với hoá biểu, độ trải 12 cao độ, mật độ nốt mỗi phách, âm vực, số bè vang cùng lúc)',
    limits: ['KHÔNG có mô hình phong cách: không quy kết tác giả, thời kỳ hay trường phái', 'đặc trưng không có chuẩn so sánh trong bộ máy; con số chỉ là mô tả'],
  },
  checkInput: (input) => (input.score.voices.some((v) => lineOf(v).length) ? [] : ['không có nốt']),
  analyze(input) {
    if (input.context?.attribute)
      return { status: 'UNKNOWN', statusReason: 'quy kết tác giả / thời kỳ không được hỗ trợ: bộ máy không có dữ liệu chuẩn và mô hình đã kiểm định cho việc này', findings: [] }
    const s = input.score as Score
    const ns = s.voices.flatMap(lineOf)
    // chromatic share: notes whose spelling differs from the key signature's letter alteration
    const sig = s.keySignatures?.[0]?.fifths ?? 0
    const sigAlter = (letter: number) => {
      const sharps = [3, 0, 4, 1, 5, 2, 6], flats = [6, 2, 5, 1, 4, 0, 3]
      if (sig > 0) return sharps.slice(0, sig).includes(letter) ? 1 : 0
      if (sig < 0) return flats.slice(0, -sig).includes(letter) ? -1 : 0
      return 0
    }
    const chromatic = ns.filter((n) => n.pitch.alter !== sigAlter(n.pitch.letter)).length / ns.length
    const pcs = new Map<number, number>()
    for (const n of ns) pcs.set(midi(n.pitch) % 12, (pcs.get(midi(n.pitch) % 12) ?? 0) + q(n.duration))
    const tot = [...pcs.values()].reduce((a, b) => a + b, 0)
    const entropy = -[...pcs.values()].reduce((h, w) => h + (w / tot) * Math.log2(w / tot), 0)
    const end = Math.max(...ns.map((n) => q(n.onset) + q(n.duration)))
    const beats = end / (4 / (s.meters[0]?.meter.den ?? 4))
    const ms = ns.map((n) => midi(n.pitch))
    const f: Finding[] = [
      { id: `${ID}#chromatic`, module: ID, kind: 'estimate', topic: 'biến âm', value: Math.round(chromatic * 100) / 100, text: { basic: `${Math.round(chromatic * 100)}% nốt mang dấu hoá khác hoá biểu`, technical: `chromatic share ${chromatic.toFixed(2)}, hoá biểu ${sig}` }, confidence: { value: 1, basis: 'đếm trực tiếp' }, evidence: [`${ns.length} nốt`] },
      { id: `${ID}#pc-spread`, module: ID, kind: 'estimate', topic: 'độ trải cao độ', value: Math.round(entropy * 100) / 100, text: { basic: `${pcs.size}/12 cao độ có mặt; độ trải ${entropy.toFixed(2)} / 3,58 bit`, technical: `entropy Shannon của phân bố 12 cao độ theo trường độ` }, confidence: { value: 1, basis: 'đếm trực tiếp' }, evidence: [`${pcs.size} cao độ`] },
      { id: `${ID}#density`, module: ID, kind: 'estimate', topic: 'mật độ', value: Math.round((ns.length / Math.max(1, beats)) * 100) / 100, text: { basic: `${(ns.length / Math.max(1, beats)).toFixed(1)} nốt mỗi phách (mọi bè)`, technical: `${ns.length} nốt / ${beats.toFixed(1)} phách; ô = ${barQ(s)} phách đen` }, confidence: { value: 1, basis: 'đếm trực tiếp' }, evidence: [`${s.voices.length} bè`] },
      { id: `${ID}#ambitus`, module: ID, kind: 'estimate', topic: 'âm vực toàn bài', value: Math.max(...ms) - Math.min(...ms), text: { basic: `Âm vực toàn bài ${Math.max(...ms) - Math.min(...ms)} nửa cung`, technical: `MIDI ${Math.min(...ms)}–${Math.max(...ms)}` }, confidence: { value: 1, basis: 'đếm trực tiếp' }, evidence: [`${ns.length} nốt`] },
    ]
    return { status: 'COMPLETED', statusReason: 'chỉ đặc trưng quan sát được; không diễn giải phong cách', findings: f }
  },
}
