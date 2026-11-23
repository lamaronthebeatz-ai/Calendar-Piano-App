import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CURATED } from '../../features/sources/curated'
import { EvidenceError, EvidenceRegistry, fromCurated } from '../evidence/evidence'
import { createEngine } from '../engine'
import { auditResult } from '../orchestration/orchestrator'
import type { UnifiedResult } from '../orchestration/solver'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { auditRulebook, ruleOf } from '../rulebook/rulebook'
import { multiTask, twoVoiceTask } from '../testing/fixtures'
import { renderExplanation } from './explain'

const rb = counterpointRulebook()
const CF = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
const NOTES = readFileSync(new URL('../../../docs/notes/counterpoint.md', import.meta.url), 'utf8').split('\n')

describe('GĐ6 — bằng chứng: sổ luật và nguồn', () => {
  it('sổ luật phức điệu hợp lệ: id không trùng, mọi luật / ngoại lệ / định nghĩa có trích dẫn tồn tại', () => {
    expect(auditRulebook(rb)).toEqual([])
    expect(rb.rules.length).toBe(34)
  })
  it('không trích dẫn giả: dữ liệu sách lấy nguyên từ thư mục; mọi số trang có trong bảng kiểm toán, đúng dòng của luật đó', () => {
    const book = rb.evidence.source('pham-tu-huong-1991')
    const c = CURATED.find((x) => x.id === 'pham-tu-huong-1991')!
    expect([book.authors, book.title, book.year, book.publisher, book.place]).toEqual([c.authors, c.title, c.year, c.publisher, c.place])
    const anchor: Record<string, string> = { suspension: '`suspension()`', 'fourth-upper-pair': '`pair.fourthOk`', 'def.dissonance': 'Quãng nghịch: 2, 7' }
    const located = rb.evidence.allCitations().filter((x) => x.locator)
    expect(located.length).toBe(29) // 27 rule citations + the upper-pair fourth + the dissonance definition
    for (const cit of located) {
      const a = anchor[cit.scope] ?? `\`${cit.scope}\``
      const rows = NOTES.filter((l) => l.includes(a))
      expect(rows.length, `${cit.scope} không có dòng trong docs/notes/counterpoint.md`).toBeGreaterThan(0)
      expect(rows.some((l) => l.includes(cit.locator!)), `${cit.id}: "${cit.locator}" không có trong dòng của ${cit.scope}`).toBe(true)
    }
  })
  it('nguồn chưa xác minh không thể sinh trích dẫn đã xác minh; nguồn xuất bản không được gõ tay; đã xác minh phải có trang', () => {
    for (const cit of rb.evidence.allCitations()) {
      const s = rb.evidence.source(cit.sourceId)
      if (s.verification === 'unverified') expect(cit.verification).toBe('unverified')
    }
    const ev = new EvidenceRegistry()
    ev.addSource({ id: 'x', type: 'unverified-claim', verification: 'unverified', origin: 'umre', authors: [], title: 'x' })
    expect(() => ev.addCitation({ id: 'c', sourceId: 'x', locator: null, verification: 'verified', scope: 'r' })).toThrow(EvidenceError)
    expect(() => ev.addSource({ id: 'y', type: 'secondary', verification: 'verified', origin: 'umre', authors: ['Ai đó'], title: 'Sách bịa' })).toThrow(/thư mục/)
    ev.addSource(fromCurated('pham-tu-huong-1991', 'secondary', 'verified'))
    expect(() => ev.addCitation({ id: 'd', sourceId: 'pham-tu-huong-1991', locator: null, verification: 'verified', scope: 'r' })).toThrow(/vị trí/)
    expect(() => fromCurated('khong-co-sach-nay', 'secondary', 'verified')).toThrow(/không có trong thư mục/)
  })
  it('quy ước của người dạy và cách hiểu nội bộ được dán nhãn đúng, không giả làm luật của sách', () => {
    for (const id of ['star', 'star-extra']) expect(rb.evidence.source(rb.evidence.citation(ruleOf(rb, id)!.citations[0]).sourceId).type).toBe('unverified-claim')
    for (const id of ['end', 'no-gap', 'dis-both', 'range', 'cadence-step']) expect(rb.evidence.source(rb.evidence.citation(ruleOf(rb, id)!.citations[0]).sourceId).type).toBe('internal-interpretation')
  })
})

const engine = createEngine()
const run = (t: Parameters<typeof engine.orchestrator.run>[0], o: Parameters<typeof engine.orchestrator.run>[1] = {}) => engine.orchestrator.run(t, { timeMs: 5000, ...o })

function refsResolve(r: UnifiedResult) {
  const steps = new Set(r.trace.steps.map((s) => s.id))
  for (const s of r.explanation!.statements) {
    for (const st of s.refs.steps) expect(steps.has(st), `${s.id} trỏ tới bước ${st} không có`).toBe(true)
    for (const id of s.refs.rules) expect(ruleOf(rb, id) ?? rb.exceptions.find((e) => e.id === id), `${s.id}: luật ${id}`).toBeTruthy()
    for (const c of s.refs.citations) expect(rb.evidence.hasCitation(c), `${s.id}: trích dẫn ${c}`).toBe(true)
    for (const i of s.refs.solutions) expect(i).toBeLessThan(r.solutions.length + r.rejected.length)
  }
  // the evidence list is exactly what the explanation cites
  expect(new Set(r.evidence.map((e) => e.citation.id))).toEqual(new Set(r.explanation!.statements.flatMap((s) => s.refs.citations)))
}

describe('GĐ6 — giải thích và truy vết', () => {
  it('SOLVED: mỗi câu giải thích trỏ về bước truy vết, luật, trích dẫn có thật; ba mức trình bày đều sinh từ cùng dữ liệu', async () => {
    const r = await run(twoVoiceTask(CF), { maxSolutions: 2 })
    expect(r.status).toBe('SOLVED')
    refsResolve(r)
    const kinds = new Set(r.explanation!.statements.map((s) => s.kind))
    for (const k of ['fact', 'rule', 'inference', 'hypothesis', 'limitation']) expect(kinds.has(k as never)).toBe(true)
    const basic = renderExplanation(r.explanation!, 'basic')
    const tech = renderExplanation(r.explanation!, 'technical')
    const acad = renderExplanation(r.explanation!, 'academic', rb.evidence)
    expect(basic).not.toMatch(/counterpoint\.|@/)
    expect(tech).toContain(r.solutions[0].validation.validator.id)
    expect(acad).toContain('Phạm Tú Hương, Phức điệu nghiêm khắc (Hà Nội: Nhạc viện Hà Nội, 1991), tr. 9–10 — đã đối chiếu')
    expect(acad).toContain('[Giả thuyết]')
    expect(acad).toMatch(/chưa xác minh/)
  })
  it('truy vết dựng lại được quyết định và không mâu thuẫn kết quả; sửa kết quả thì kiểm toán phát hiện', async () => {
    const r = await run(multiTask(['', '', 'C3:4 | D3:4 | B2:4 | C3:4'], [true, true, false]))
    expect(r.status).toBe('SOLVED')
    expect(auditResult(r)).toEqual([])
    const ops = r.trace.steps.map((s) => s.operation)
    for (const op of ['receive', 'rulebook', 'route', 'check-input', 'strategy', 'solver:problem', 'solver:domain', 'solver:search', 'validate', 'decide', 'evidence', 'explain']) expect(ops).toContain(op)
    expect(r.trace.steps.map((s) => s.seq)).toEqual([...r.trace.steps.map((s) => s.seq)].sort((a, b) => a - b))
    expect(r.trace.steps.every((s) => s.engineVersion === r.metadata.engineVersion && s.taskId === r.taskId)).toBe(true)
    // each validation step carries the digest of exactly what was judged
    for (const s of r.solutions) expect(r.trace.steps.some((x) => x.operation === 'validate' && (x.input as { digest: string }).digest === s.validation.inputDigest)).toBe(true)
    expect(auditResult({ ...r, status: 'PROVEN_UNSAT' })).not.toEqual([])
    expect(auditResult({ ...r, solutions: [...r.solutions, { ...r.solutions[0], validation: { ...r.solutions[0].validation, status: 'INVALID' } }] })).not.toEqual([])
  })
  it('mức truy vết: tóm tắt bỏ bước của bộ giải (và giải thích nói rõ), chẩn đoán thêm từng bộ kiểm', async () => {
    const t = twoVoiceTask(CF)
    const s = await run(t, { traceLevel: 'summary', maxSolutions: 1 })
    expect(s.trace.steps.some((x) => x.component === 'solver')).toBe(false)
    expect(s.explanation!.statements.some((x) => x.kind === 'limitation' && /mức tóm tắt/.test(x.text.technical))).toBe(true)
    const d = await run(t, { traceLevel: 'diagnostic', maxSolutions: 1 })
    expect(d.trace.steps.some((x) => x.operation === 'validate:checkers')).toBe(true)
    refsResolve(s)
    refsResolve(d)
  })
  it('UNKNOWN / TIMEOUT không bao giờ thành kết luận chắc chắn; PROVEN_UNSAT nói rõ giới hạn miền tìm kiếm', async () => {
    const cf = 'C4:4 | D4:4 | F4:4 | E4:4 | G4:4 | A4:4 | G4:4 | E4:4 | F4:4 | E4:4 | D4:4 | C4:4'
    const to = await run(twoVoiceTask(cf, { versions: [{ shift: { I: 0, II: -9 }, motion: 'near', label: 'Iv = −9' }, { shift: { I: 0, II: -11 }, motion: 'near', label: 'Iv = −11' }] }), { timeMs: 5 })
    expect(to.status).toBe('TIMEOUT')
    refsResolve(to)
    expect(to.explanation!.statements.some((s) => s.kind === 'inference')).toBe(false)
    expect(renderExplanation(to.explanation!, 'basic')).not.toMatch(/không có lời giải/i)
    const un = await run(twoVoiceTask(CF, { stars: [0], starsOnly: true }))
    expect(un.status).toBe('PROVEN_UNSAT')
    refsResolve(un)
    const concl = un.explanation!.statements.filter((s) => s.topic === 'conclusion' || s.topic === 'limit')
    expect(concl.some((s) => s.kind === 'inference' && /miền tìm kiếm/.test(s.text.technical))).toBe(true)
    expect(concl.some((s) => s.kind === 'limitation' && /miền/.test(s.text.basic ?? ''))).toBe(true)
  })
})
