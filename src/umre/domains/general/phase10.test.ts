import { readFileSync } from 'node:fs'
import { Window } from 'happy-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import type { Meter, Seg } from '../../../features/counterpoint/model'
import { fromMusicXml } from '../../../features/compose/exchange'
import { handle } from '../../api'
import { checkModuleOutput, renderFinding } from '../../analysis/run'
import type { AnalysisResult } from '../../analysis/types'
import { fromCompose } from '../../repr/adapters/compose'
import { fromCounterpoint } from '../../repr/adapters/counterpoint'
import type { Score } from '../../repr/score'
import { C, line } from '../../testing/fixtures'
import { contourOf, repeatedPatterns } from './melody'
import { lineOf } from './common'
import { syncopations, weightGrid } from './rhythm'

beforeAll(() => {
  ;(globalThis as unknown as { DOMParser: unknown }).DOMParser = new Window().DOMParser
})
const score = (lines: Seg[][], meter: Meter = { num: 4, den: 4 }): Score => fromCounterpoint({ key: C, meter, lines, id: 't' })
const shift = (xs: Seg[], by: number) => xs.map((x) => ({ ...x, start: x.start + by }))
const run = async (s: Score, modules: string[], context?: Record<string, unknown>): Promise<AnalysisResult> => {
  const r = await handle({ op: 'analyze', score: s, modules, ...(context ? { context } : {}) })
  if (r.op !== 'analyze') throw new Error('op')
  return r.result
}
const topic = (r: AnalysisResult, t: string) => r.findings.filter((f) => f.topic === t)

// hand-written cases: the expected answers come from the definitions, not from the modules
describe('GĐ10 — giai điệu (hình thức hoá được)', () => {
  it('âm vực, quãng, hình nét vòm; mẫu (+1 +1 −2) lặp ba lần liền và dịch lên từng bậc → mô tiến', async () => {
    const s = score([line('C4:1 D4:1 E4:1 C4:1 | D4:1 E4:1 F4:1 D4:1 | E4:1 F4:1 G4:1 E4:1 | D4:4')])
    const r = await run(s, ['melody.line'])
    expect(r.status).toBe('COMPLETED')
    expect(topic(r, 'âm vực')[0].value).toMatchObject({ low: 'C4', high: 'G4', semitones: 7 })
    const ps = repeatedPatterns(lineOf(s.voices[0]))
    expect(ps[0].intervals).toEqual([1, 1, -2, 1])
    const seq = topic(r, 'mô tiến')
    expect(seq.length).toBeGreaterThan(0)
    expect((seq[0].value as { shift: number[] }).shift.every((x) => x === 1)).toBe(true)
    expect(contourOf(lineOf(score([line('C4:1 E4:1 G4:1 C5:1 | G4:1 E4:1 C4:2')]).voices[0]))).toBe('arch')
    expect(contourOf(lineOf(score([line('C5:1 B4:1 A4:1 G4:1 | F4:1 E4:1 D4:2')]).voices[0]))).toBe('descending')
  })
  it('kiểm ràng buộc: bước nhảy quá quãng 6 và vượt âm vực bị báo; câu là giả thuyết có độ tin cậy', async () => {
    const r = await run(score([line('C4:2 B4:2 | A4:2 G4:2 | C5:4 | G4:2 F4:2 | E4:2 D4:2 | C4:4')]), ['melody.line'], { melodyLimits: { maxLeapSteps: 5, high: 71 } })
    const lim = topic(r, 'ràng buộc giai điệu')[0]
    expect(lim.kind).toBe('rule-check')
    expect((lim.value as { faults: string[] }).faults.length).toBe(2) // C4→B4 is a seventh; C5 (72) is above B4 (71)
    for (const p of topic(r, 'câu')) expect(p.kind === 'hypothesis' && !!p.confidence).toBe(true)
  })
})

describe('GĐ10 — tiết tấu (hình thức hoá được)', () => {
  it('lưới phách 4/4: phách 1 > phách 3 > phách 2, 4 > móc đơn', () => {
    const w = weightGrid(4, 1)
    const [b1, b3, b2, b4, e] = [w(0), w(2), w(1), w(3), w(0.5)]
    expect(b1 > b3 && b3 > b2 && b2 === b4 && b4 > e).toBe(true)
  })
  it('nghịch phách: nốt đánh ở phách 2 ngân qua phách 3; mẫu ô nhịp lặp; tiết tấu giãn gấp đôi', async () => {
    const s = score([line('C4:1 D4:2 E4:1 | C4:1 D4:2 E4:1 | F4:4')])
    expect(syncopations(lineOf(s.voices[0]), 4, 1).map((x) => x.at)).toEqual([1, 5])
    const r = await run(s, ['rhythm.meter'])
    expect(topic(r, 'mẫu tiết tấu')[0].value).toMatchObject({ bars: [1, 2] })
    // 4/2: bar 1 holds 1 + 1 + 2 then silence, bar 2 the same rhythm doubled
    const aug = score([[{ start: 0, dur: 1, p: line('C4:1')[0].p }, { start: 1, dur: 1, p: line('D4:1')[0].p }, { start: 2, dur: 2, p: line('E4:1')[0].p }, ...shift(line('C4:2 D4:2 E4:4'), 8)]], { num: 4, den: 2 })
    const ra = await run(aug, ['rhythm.meter'])
    expect(topic(ra, 'biến đổi tiết tấu')[0].value).toMatchObject({ from: 1, to: 2, ratio: 2 })
  })
  it('đa tiết tấu: một bè chia phách làm 3, bè kia làm 2', async () => {
    const third = 1 / 3
    const p = line('C5:1')[0].p
    const tri: Seg[] = [0, third, 2 * third].map((t) => ({ start: t, dur: third, p }))
    const s = score([[...tri, { start: 1, dur: 3, p }], line('C3:1 C3:1 C3:2').flatMap((x, i) => (i === 0 ? [{ ...x, dur: 0.5 }, { ...x, start: 0.5, dur: 0.5 }] : [x]))])
    const r = await run(s, ['rhythm.meter'])
    expect(topic(r, 'đa tiết tấu')[0].value).toEqual([{ at: 0, voices: [0, 1], ratio: '3:2' }])
  })
})

describe('GĐ10 — kết cấu và tương tác bè (phân tích)', () => {
  it('canon: bè sau nhắc nguyên giai điệu bè trước muộn một ô → phức điệu mô phỏng, có bằng chứng', async () => {
    const tune = 'C5:1 E5:1 D5:1 G5:1 | F5:1 A5:1 G5:1 C5:1 | E5:4'
    const s = score([line(`${tune} | C5:4`), shift(line('C4:1 E4:1 D4:1 G4:1 | F4:1 A4:1 G4:1 C4:1'), 4)])
    const r = await run(s, ['texture.voices'])
    const t = topic(r, 'loại kết cấu')[0]
    expect(t.value).toBe('phức điệu mô phỏng')
    expect(t.evidence.some((e) => e.startsWith('mô phỏng @0→@4'))).toBe(true)
  })
  it('bốn bè cùng nhịp (hợp xướng Bach BWV 269) → chủ điệu; piano Mozart K. 545 → AMBIGUOUS với hai cách đọc, không đoán bừa', async () => {
    const bach = await run(fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8'))), ['texture.voices'])
    expect(topic(bach, 'loại kết cấu')[0].value).toBe('chủ điệu (các bè đi cùng nhịp)')
    const mozart = await run(fromCompose(fromMusicXml(readFileSync('public/analyze/mozart-k545-1.musicxml', 'utf8'))), ['texture.voices'])
    expect(mozart.status).toBe('AMBIGUOUS')
    expect(topic(mozart, 'loại kết cấu')[0].alternatives!.length).toBe(2)
  })
})

describe('GĐ10 — hình thức (giả thuyết, adapter /analyze) và phong cách (chỉ quan sát)', () => {
  it('Maple Leaf Rag: đoạn và câu là giả thuyết có cơ sở; tên hình thức chỉ là giả thuyết', async () => {
    const r = await run(fromCompose(fromMusicXml(readFileSync('public/analyze/joplin-maple-leaf.musicxml', 'utf8'))), ['form.sections'])
    expect(r.status).toBe('COMPLETED')
    expect(topic(r, 'hình thức')[0].kind).toBe('hypothesis')
    expect(topic(r, 'đoạn').length).toBeGreaterThan(2)
    for (const x of [...topic(r, 'đoạn'), ...topic(r, 'câu')]) expect(x.kind === 'hypothesis' && !!x.confidence?.basis).toBe(true)
  })
  it('quá ngắn → INSUFFICIENT_DATA; phong cách: chỉ đặc trưng đo được, yêu cầu quy kết tác giả → UNKNOWN có lý do', async () => {
    expect((await run(score([line('C4:4 | D4:4')]), ['form.sections'])).status).toBe('INSUFFICIENT_DATA')
    const st = await run(score([line('C4:1 D4:1 E4:1 F#4:1 | G4:4')]), ['style.features'])
    expect(st.findings.every((f) => f.kind === 'estimate' && f.confidence!.basis)).toBe(true)
    expect(topic(st, 'biến âm')[0].value).toBe(0.2)
    const att = await run(score([line('C4:4')]), ['style.features'], { attribute: true })
    expect(att.status).toBe('UNKNOWN')
    expect(att.modules[0].statusReason).toMatch(/không được hỗ trợ/)
  })
})

describe('GĐ10 — tích hợp: mọi mô-đun qua một đầu mối, đúng hợp đồng, giải thích ba mức', () => {
  it('chạy cả 8 mô-đun trên một hợp xướng: không mô-đun nào sai hợp đồng; mô-đun thiếu ngữ cảnh báo INSUFFICIENT_DATA thay vì lỗi; tổng PARTIAL', async () => {
    const r = await run(fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8'))), [])
    const all = await handle({ op: 'analyze', score: fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8'))) })
    if (all.op !== 'analyze') throw new Error('op')
    expect(r.modules.length).toBe(0)
    const res = all.result
    expect(res.modules.map((m) => m.module)).toEqual(['counterpoint.check', 'harmony.tonal', 'harmony.progression', 'melody.line', 'rhythm.meter', 'texture.voices', 'form.sections', 'style.features'])
    expect(res.metadata.errors).toEqual([])
    for (const m of res.modules) expect(checkModuleOutput(m, m.module)).toEqual([])
    expect(res.modules.find((m) => m.module === 'counterpoint.check')!.status).toBe('INSUFFICIENT_DATA')
    expect(res.status).toBe('PARTIAL')
    const f = res.findings.find((x) => x.topic === 'giọng chính')!
    expect(renderFinding(f, 'basic')).toBe('Giọng chính: G trưởng')
    expect(renderFinding(f, 'academic')).toMatch(/^Diễn giải: .*Cơ sở độ tin cậy/)
  }, 60_000)
})
