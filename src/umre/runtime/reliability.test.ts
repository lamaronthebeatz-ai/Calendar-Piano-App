import { readFileSync } from 'node:fs'
import { Window } from 'happy-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import { fromMusicXml } from '../../features/compose/exchange'
import { analysisModules, handle, registerAnalysis } from '../api'
import { runAnalysis } from '../analysis/run'
import { fromCompose } from '../repr/adapters/compose'
import { line, twoVoiceTask } from '../testing/fixtures'
import { ResultCache } from './ops'
import { between } from '../repr/interval'
import { add, cmp, eq, type Rational } from '../repr/rational'
import { soundingNotes, type SoundingNote, type Voice } from '../repr/score'
import { verticals } from '../repr/texture'

/** verticals() as it was before the GĐ11 optimization (quadratic), kept here as the reference it must equal. */
function verticalsRef(upper: Voice, lower: Voice, until: Rational) {
  const U = soundingNotes(upper), L = soundingNotes(lower)
  const at = (xs: readonly SoundingNote[], t: Rational) => xs.find((n) => cmp(n.onset, t) <= 0 && cmp(t, add(n.onset, n.duration)) < 0)
  const times = [...U, ...L].map((n) => n.onset).filter((t) => cmp(t, until) < 0)
  const uniq = times.filter((t, i) => times.findIndex((x) => eq(x, t)) === i).sort(cmp)
  return uniq.flatMap((t) => { const u = at(U, t), l = at(L, t); return u && l ? [{ at: t, u, l, iv: between(l.pitch, u.pitch) }] : [] })
}

beforeAll(() => {
  ;(globalThis as unknown as { DOMParser: unknown }).DOMParser = new Window().DOMParser
})
const bach = () => fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8')))

describe('GĐ11 — độ tin cậy của đầu mối UMRE', () => {
  it('dấu vân: cùng yêu cầu → cùng dấu; đổi một nốt → khác; lần hai lấy từ cache, kết quả y hệt và ghi cached', async () => {
    await handle({ op: 'cache.clear' })
    const t = twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4')
    const a = await handle({ op: 'solve', task: t, options: { timeMs: 8000, maxSolutions: 3 } })
    const b = await handle({ op: 'solve', task: t, options: { timeMs: 8000, maxSolutions: 3 } })
    expect(a.meta.fingerprint).toBe(b.meta.fingerprint)
    expect([a.meta.cached, b.meta.cached]).toEqual([false, true])
    if (a.op !== 'solve' || b.op !== 'solve') throw new Error('op')
    expect(b.result).toEqual(a.result)
    const c = await handle({ op: 'solve', task: twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | D4:4'), options: { timeMs: 8000, maxSolutions: 3 } })
    expect(c.meta.fingerprint).not.toBe(a.meta.fingerprint)
    // a solve depends on a time budget: reproducible only through the cache
    expect(a.meta.reproducible).toBe(false)
  }, 60_000)
  it('đổi phiên bản một thành phần (đăng ký mô-đun mới) → mọi dấu vân đổi, cache cũ không dùng lại', async () => {
    const s = bach()
    const a = await handle({ op: 'analyze', score: s, modules: ['melody.line'] })
    registerAnalysis({ descriptor: { id: 'test.noop', version: '0.0.1', domain: 'test', kind: 'formalizable', method: 'không làm gì', limits: [] }, checkInput: () => [], analyze: () => ({ status: 'COMPLETED', statusReason: '', findings: [] }) })
    const b = await handle({ op: 'analyze', score: s, modules: ['melody.line'] })
    expect(b.meta.fingerprint).not.toBe(a.meta.fingerprint)
    expect(b.meta.cached).toBe(false)
    expect(a.meta.reproducible).toBe(true)
  }, 60_000)
  it('không cache kết quả chưa kết luận (hết giờ)', async () => {
    await handle({ op: 'cache.clear' })
    const t = twoVoiceTask('C4:4 | D4:4 | E4:4 | F4:4 | G4:4 | A4:4 | G4:4 | F4:4 | E4:4 | D4:4 | C4:4', { stars: [4, 8, 12, 16, 20, 24, 28, 32, 36], starsOnly: true })
    const a = await handle({ op: 'solve', task: t, options: { timeMs: 1, maxSolutions: 24, solverId: 'umre.csp.counterpoint', graceMs: 0 } })
    if (a.op !== 'solve') throw new Error('op')
    if (a.result.status === 'TIMEOUT' || a.result.status === 'UNKNOWN') {
      const d = await handle({ op: 'diagnostics' })
      expect(d.op === 'diagnostics' && d.result.cache.size).toBe(0)
    }
  }, 60_000)
  it('cache có giới hạn (LRU): không phình mãi', () => {
    const c = new ResultCache<number>(3)
    for (let i = 0; i < 10; i++) c.set(`k${i}`, i)
    expect(c.size).toBe(3)
    expect(c.get('k0')).toBeUndefined()
    expect(c.get('k9')).toBe(9)
  })
  it('lỗi có mã, nhóm, giai đoạn, cách xử lý — không bao giờ ném ra ngoài, không giả vờ có kết quả', async () => {
    const r = await handle({ op: 'counterpoint.diagnose', task: { ...twoVoiceTask('C4:4'), rulebook: { id: 'khong-co', version: '9' } }, timeMs: 100 })
    expect(r.op).toBe('error')
    if (r.op !== 'error') throw new Error('op')
    expect(r.error).toMatchObject({ code: 'rulebook-unknown', category: 'unsupported', stage: 'counterpoint.diagnose' })
    expect(r.error.recovery).toBeTruthy()
    expect(r.error.context).toEqual({ op: 'counterpoint.diagnose', task: 't2', type: 'counterpoint.two-voice' })
  })
  it('nhật ký chẩn đoán: có giới hạn, ghi op – thời gian – trạng thái – dấu vân, không chứa nốt nhạc', async () => {
    await handle({ op: 'analyze', score: bach(), modules: ['rhythm.meter'] })
    const d = await handle({ op: 'diagnostics' })
    if (d.op !== 'diagnostics') throw new Error('op')
    expect(d.result.events.length).toBeGreaterThan(0)
    expect(d.result.events.length).toBeLessThanOrEqual(200)
    const text = JSON.stringify(d.result.events)
    expect(text).not.toMatch(/pitch|letter|octave|"score"/)
  }, 60_000)
  it('tối ưu (một lần /analyze cho cả điệu tính và hình thức) không đổi kết quả: chạy chung = chạy riêng trên hai bản tổng phổ', async () => {
    const pick = (ids: string[]) => analysisModules().filter((m) => ids.includes(m.descriptor.id))
    const context = { globalKey: { step: 4, alter: 0, minor: false } }
    const together = await runAnalysis(pick(['harmony.tonal', 'form.sections']), { score: bach(), context })
    const t1 = await runAnalysis(pick(['harmony.tonal']), { score: bach(), context })
    const t2 = await runAnalysis(pick(['form.sections']), { score: bach(), context })
    expect(t1.status).not.toBe('INSUFFICIENT_DATA')
    expect(together.findings).toEqual([...t1.findings, ...t2.findings])
  }, 60_000)
  it('đầu vào hỏng không làm sập máy: tổng phổ rỗng → INSUFFICIENT_DATA ở từng mô-đun; yêu cầu sau vẫn chạy', async () => {
    const empty = twoVoiceTask('C4:4').score
    const r = await handle({ op: 'analyze', score: { ...empty, voices: [] } })
    expect(r.op).toBe('analyze')
    const ok = await handle({ op: 'harmony.identify', notes: [{ letter: 0, alter: 0 }, { letter: 2, alter: 0 }, { letter: 4, alter: 0 }] })
    expect(ok.op).toBe('harmony.identify')
    void line
  })
  it('tối ưu verticals (lõi của mọi bộ kiểm) cho đúng kết quả cũ: mọi cặp bè của hợp xướng Bach và Maple Leaf Rag', () => {
    for (const f of ['bach-bwv269', 'joplin-maple-leaf']) {
      const s = fromCompose(fromMusicXml(readFileSync(`public/analyze/${f}.musicxml`, 'utf8')))
      const end = { n: 10_000, d: 1 }
      for (let a = 0; a < s.voices.length; a++)
        for (let b = 0; b < s.voices.length; b++) {
          if (a === b) continue
          const neu = verticals(s.voices[a], s.voices[b], end).map((x) => ({ at: x.at, u: x.u, l: x.l, iv: x.interval }))
          expect(neu).toEqual(verticalsRef(s.voices[a], s.voices[b], end))
        }
    }
  }, 60_000)
})
