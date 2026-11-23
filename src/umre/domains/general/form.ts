import { analyzeOnce } from '../harmony/analyzeOnce'
import type { AnalysisModule, Finding } from '../../analysis/types'
import type { Score } from '../../repr/score'

/**
 * Form, adapted from /analyze (form.ts: bar fingerprints, repeats exact / transposed / sequence / varied, phrases cut
 * at cadences and stops, sections lettered by return, a form guess). Every level above the motive is a HYPOTHESIS here:
 * phrases and sections carry the evidence /analyze used (a cadence, a repeat), and the form name is offered with its
 * reason, never as a fact. Analytical.
 */
const ID = 'form.sections'
const NAME: Record<string, string> = { period: 'đoạn nhạc (period)', binary: 'hai đoạn', ternary: 'ba đoạn', rondo: 'rondo', sonata: 'sonata', variations: 'biến tấu', songForm: 'hình thức bài hát', blues: 'blues 12 ô', phrase: 'một câu' }

export const formModule: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'form', kind: 'analytical',
    method: 'bộ phân tích hình thức của /analyze (dấu vân ô nhịp, nhắc lại, câu theo kết, đoạn theo chỗ trở lại)',
    limits: ['ranh giới câu dựa vào kết do bộ hoà âm đọc — hoà âm sai thì câu sai', 'tên hình thức là giả thuyết; sonata/rondo cần đủ dài và có chuyển giọng'],
  },
  checkInput: (input) => (input.score.voices.some((v) => v.events.some((e) => e.kind === 'note')) ? [] : ['không có nốt']),
  analyze(input) {
    const a = analyzeOnce(input.score as Score)
    const Q = 240
    const barStart = (b: number) => (a.score.bars[b]?.start ?? 0) / Q
    const f: Finding[] = []
    const fa = a.form
    if (a.score.bars.length < 4) return { status: 'INSUFFICIENT_DATA', statusReason: 'quá ngắn để bàn hình thức', findings: [], missing: ['ít nhất 4 ô nhịp'] }
    fa.repeats.slice(0, 12).forEach((r, i) =>
      f.push({
        id: `${ID}#repeat-${i + 1}`, module: ID, kind: 'fact', topic: 'nhắc lại', at: barStart(r.b[0]), value: r,
        text: { basic: `Ô ${r.a[0] + 1}–${r.a[1] + 1} nhắc lại ở ô ${r.b[0] + 1}–${r.b[1] + 1} (${{ exact: 'y nguyên', transposed: 'dịch giọng', sequence: 'mô tiến', varied: 'biến đổi' }[r.kind]})`, technical: `${r.kind}, độ giống ${r.score.toFixed(2)}, dịch ${r.shift}` },
        evidence: [`so dấu vân từng ô: giai điệu, tiết tấu, bass, tập cao độ`],
      }),
    )
    fa.phrases.forEach((p, i) =>
      f.push({
        id: `${ID}#phrase-${i + 1}`, module: ID, kind: 'hypothesis', topic: 'câu', at: p.from / Q, end: p.to / Q, value: { bars: [p.bars[0] + 1, p.bars[1] + 1], cadence: p.end ?? null },
        text: { basic: `Câu ${i + 1}: ô ${p.bars[0] + 1}–${p.bars[1] + 1}${p.end ? ` (kết ${p.end})` : ''}`, technical: `${p.from / Q}–${p.to / Q}` },
        confidence: { value: p.end === 'PAC' ? 0.9 : p.end ? 0.7 : 0.5, basis: p.end ? `kết thúc bằng kết ${p.end} do bộ hoà âm đọc` : 'cắt ở chỗ nhạc dừng, không có kết rõ' },
        evidence: [p.end ? `kết ${p.end}` : 'chỗ dừng'],
      }),
    )
    fa.sections.forEach((sct, i) =>
      f.push({
        id: `${ID}#section-${i + 1}`, module: ID, kind: 'hypothesis', topic: 'đoạn', at: barStart(sct.bars[0]), value: { letter: sct.letter, bars: [sct.bars[0] + 1, sct.bars[1] + 1], key: sct.key ?? null },
        text: { basic: `Đoạn ${sct.letter}: ô ${sct.bars[0] + 1}–${sct.bars[1] + 1}${sct.key ? ` (${sct.key})` : ''}`, technical: sct.letter },
        confidence: { value: 0.6, basis: 'chữ cái theo chỗ chất liệu trở lại (nhắc lại ≥ ngưỡng giống của /analyze)' },
        evidence: [`ô ${sct.bars[0] + 1}–${sct.bars[1] + 1}`],
      }),
    )
    if (fa.guess)
      f.push({
        id: `${ID}#form`, module: ID, kind: 'hypothesis', topic: 'hình thức', value: fa.guess.concept,
        text: { basic: `Giả thuyết hình thức: ${NAME[fa.guess.concept] ?? fa.guess.name}`, technical: fa.guess.why },
        confidence: { value: 0.5, basis: `bộ đoán hình thức của /analyze: ${fa.guess.why}` },
        alternatives: fa.sections.length >= 2 ? [{ value: 'through-composed', text: 'viết liền (không có đoạn trở lại thật sự) nếu các chỗ nhắc lại chỉ là motif' }] : [],
        evidence: fa.sections.map((x) => x.letter),
      })
    const status = !fa.guess ? 'AMBIGUOUS' : 'COMPLETED'
    return { status, statusReason: fa.guess ? `${fa.phrases.length} câu, ${fa.sections.length} đoạn` : 'không đủ bằng chứng để gọi tên hình thức', findings: f }
  },
}
