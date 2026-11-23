import { describe, expect, it } from 'vitest'
import { pitch } from '../../features/counterpoint/model'
import { toCounterpoint } from '../repr/adapters/counterpoint'
import { EvidenceRegistry } from '../evidence/evidence'
import { createEngine } from '../engine'
import { twoVoiceSolution, TWO_VOICE, type TwoVoiceParams } from '../domains/counterpoint/task'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { RulebookRegistry, type Rulebook } from '../rulebook/rulebook'
import { twoVoiceSolver } from '../solvers/counterpoint'
import { multiTask, twoVoiceTask } from '../testing/fixtures'
import type { Task } from '../task'
import { COUNTERPOINT_VALIDATORS } from '../validation/counterpoint'
import type { Validator } from '../validation/types'
import { auditResult, decideStatus, Orchestrator } from './orchestrator'
import { ValidatorRegistry } from './registry'
import type { Solver, SolverDescriptor, SolverOutput } from './solver'

const CF = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
const t2 = () => twoVoiceTask(CF)

/** A solver with the counterpoint solver's contract but scripted behaviour. */
function fake(id: string, solve: Solver['solve'], over: Partial<SolverDescriptor> = {}, available?: () => string | null): Solver {
  return {
    descriptor: { ...twoVoiceSolver.descriptor, id, version: '0.1.0', priority: 10, ...over },
    checkInput: (t) => twoVoiceSolver.checkInput(t),
    solve,
    ...(available ? { available } : {}),
  }
}
function engineWith(...extra: Solver[]) {
  const e = createEngine()
  for (const s of extra) e.solvers.register(s)
  return e
}

describe('GĐ7 — sổ đăng ký bộ giải', () => {
  it('quản lý nhiều bộ giải: đăng ký, tra cứu, phiên bản, tắt / bật, gỡ; từ chối trùng và sai phiên bản máy', () => {
    const e = createEngine()
    const harmony = fake('harmony.chorale.test', () => ({ status: 'unknown', solutions: [], diagnostics: {}, steps: [] }), { domain: 'harmony', taskTypes: ['harmony.chorale'], rulebooks: [{ id: 'harmony.test', versions: ['1'] }], priority: 0 })
    e.solvers.register(harmony)
    e.solvers.register(fake('counterpoint.two-voice.search', twoVoiceSolver.solve, { version: '1.1.0', priority: 0 }))
    expect(e.solvers.list().map((d) => `${d.id}@${d.version}`).sort()).toEqual(['counterpoint.multi-voice.search@1.0.0', 'counterpoint.two-voice.search@1.0.0', 'counterpoint.two-voice.search@1.1.0', 'harmony.chorale.test@0.1.0', 'umre.csp.counterpoint@1.0.0', 'umre.csp.harmony@1.0.0', 'umre.harmonize@1.0.0'])
    expect(e.solvers.get('counterpoint.two-voice.search')!.descriptor.version).toBe('1.1.0')
    expect(() => e.solvers.register(harmony)).toThrow(/đã đăng ký/)
    expect(() => e.solvers.register(fake('old', twoVoiceSolver.solve, { requires: { umre: '0.4' } }))).toThrow(/UMRE 0.4/)
    expect(() => e.solvers.register(fake('bad', twoVoiceSolver.solve, { version: 'v1' }))).toThrow(/x\.y\.z/)
    const t = t2()
    expect(e.solvers.match(t, t.rulebook).candidates.map((s) => `${s.descriptor.id}@${s.descriptor.version}`)).toEqual(['counterpoint.two-voice.search@1.1.0', 'counterpoint.two-voice.search@1.0.0', 'umre.csp.counterpoint@1.0.0'])
    e.solvers.disable('counterpoint.two-voice.search', 'bảo trì')
    const m = e.solvers.match(t, t.rulebook)
    // with the page's solver switched off the shared search is the one left
    expect(m.candidates.map((s) => s.descriptor.id)).toEqual(['umre.csp.counterpoint'])
    expect(m.rejected.find((r) => r.id === 'harmony.chorale.test')!.reasons.join()).toMatch(/lĩnh vực harmony/)
    expect(m.rejected.find((r) => r.id === 'counterpoint.two-voice.search')!.reasons.join()).toMatch(/đang tắt: bảo trì/)
    e.solvers.enable('counterpoint.two-voice.search')
    expect(e.solvers.unregister('counterpoint.two-voice.search', '1.1.0')).toBe(1)
    expect(e.solvers.match(t, t.rulebook).candidates.map((s) => s.descriptor.version)).toEqual(['1.0.0', '1.0.0'])
  })
  it('bộ giải chưa sẵn sàng hoặc không dùng sổ luật của bài thì không được gọi', () => {
    const e = createEngine()
    e.solvers.register(fake('offline', twoVoiceSolver.solve, {}, () => 'chưa nạp worker'))
    e.solvers.register(fake('other-book', twoVoiceSolver.solve, { rulebooks: [{ id: 'counterpoint.fux', versions: ['1'] }] }))
    const t = t2()
    const m = e.solvers.match(t, t.rulebook)
    expect(m.candidates.map((s) => s.descriptor.id)).toEqual(['counterpoint.two-voice.search', 'umre.csp.counterpoint'])
    expect(m.rejected.find((r) => r.id === 'offline')!.reasons).toEqual(['không sẵn sàng: chưa nạp worker'])
    expect(m.rejected.find((r) => r.id === 'other-book')!.reasons.join()).toMatch(/sổ luật/)
  })
})

describe('GĐ7 — điều phối: định tuyến và lỗi', () => {
  const e = createEngine()
  it('không có bộ giải phù hợp → ERROR no-solver kèm lý do; chỉ định bộ giải không hợp → không tự thay bằng bộ khác', async () => {
    const r = await e.orchestrator.run({ ...t2(), type: 'counterpoint.canon' })
    expect(r.status).toBe('ERROR')
    expect(r.error!.code).toBe('no-validator')
    const v = new ValidatorRegistry()
    for (const x of COUNTERPOINT_VALIDATORS) v.register(x)
    v.register({ ...COUNTERPOINT_VALIDATORS[0], id: 'canon-check', taskTypes: ['counterpoint.canon'] })
    const o = new Orchestrator(e.solvers, v, e.rulebooks)
    const r2 = await o.run({ ...t2(), type: 'counterpoint.canon' })
    expect(r2.error!.code).toBe('no-solver')
    expect(r2.error!.details!.join('\n')).toMatch(/không giải loại bài counterpoint\.canon/)
    const r3 = await e.orchestrator.run(t2(), { solverId: 'counterpoint.multi-voice.search' })
    expect(r3.status).toBe('ERROR')
    expect(r3.error!.code).toBe('no-solver')
    expect(r3.solverId).toBeNull()
  })
  it('sổ luật lạ → ERROR rulebook-unknown; đầu vào sai → ERROR invalid-input; loại bài khác lĩnh vực → invalid-input', async () => {
    expect((await e.orchestrator.run({ ...t2(), rulebook: { id: 'x', version: '1' } })).error!.code).toBe('rulebook-unknown')
    const two = multiTask(['C5:4 | D5:4', 'C4:4 | B3:4', 'C3:4 | G2:4'], [false, false, false])
    const bad: Task = { ...two, type: TWO_VOICE, params: { givenIs: 'II', stars: [], versions: [], starsOnly: false } }
    const r = await e.orchestrator.run(bad)
    expect(r.error!.code).toBe('invalid-input')
    expect(r.error!.details!.join()).toMatch(/đúng một bè/)
    expect((await e.orchestrator.run({ ...t2(), domain: 'harmony' })).error!.code).toBe('invalid-input')
  })
  it('lỗi nội bộ, hết tài nguyên, kết quả sai hợp đồng của bộ giải đều là ERROR, không phải vô nghiệm; máy vẫn chạy tiếp', async () => {
    const boom = engineWith(fake('boom', () => { throw new Error('nổ') }))
    const a = await boom.orchestrator.run(t2())
    expect([a.status, a.error!.code]).toEqual(['ERROR', 'solver-error'])
    const deep = engineWith(fake('deep', () => { throw new RangeError('Maximum call stack size exceeded') }))
    expect((await deep.orchestrator.run(t2())).error!.code).toBe('resource')
    const junk = engineWith(fake('junk', () => ({ status: 'unsat', solutions: [t2().score], diagnostics: {}, steps: [] }) as SolverOutput))
    const j = await junk.orchestrator.run(t2())
    expect([j.status, j.error!.code]).toEqual(['ERROR', 'output-schema'])
    expect(j.explanation!.statements.some((s) => /không phải là vô nghiệm/.test(s.text.technical))).toBe(true)
    // the same engine still solves the next task with the real solver
    boom.solvers.disable('boom', 'hỏng')
    expect((await boom.orchestrator.run(t2(), { timeMs: 5000, maxSolutions: 1 })).status).toBe('SOLVED')
  })
  it('hết giờ và huỷ: TIMEOUT khi bộ giải không trả lời, CANCELLED khi huỷ trước hoặc trong lúc giải', async () => {
    const hang = engineWith(fake('hang', () => new Promise<SolverOutput>(() => {})))
    const r = await hang.orchestrator.run(t2(), { timeMs: 20, graceMs: 10 })
    expect(r.status).toBe('TIMEOUT')
    const ac = new AbortController()
    ac.abort()
    expect((await createEngine().orchestrator.run(t2(), { signal: ac.signal })).status).toBe('CANCELLED')
    const ac2 = new AbortController()
    const p = hang.orchestrator.run(t2(), { timeMs: 10_000, signal: ac2.signal })
    setTimeout(() => ac2.abort(), 10)
    const c = await p
    expect(c.status).toBe('CANCELLED')
    expect(auditResult(c)).toEqual([])
  })
  it('bộ kiểm lỗi → phương án thành UNKNOWN, lỗi ghi lại; truy nguồn lỗi → ghi evidence-error, trạng thái không đổi', async () => {
    const broken: Validator = { ...COUNTERPOINT_VALIDATORS[0], validate: () => { throw new Error('bộ kiểm hỏng') } }
    const v = new ValidatorRegistry()
    v.register(broken)
    const en = createEngine()
    const r = await new Orchestrator(en.solvers, v, en.rulebooks).run(t2(), { timeMs: 5000, maxSolutions: 1 })
    expect(r.status).toBe('UNKNOWN')
    expect(r.metadata.errors.map((x) => x.code)).toContain('validation-error')
    // a rulebook whose evidence store cannot resolve one citation
    const rb = counterpointRulebook()
    class Leaky extends EvidenceRegistry {
      override citation(id: string) {
        if (id.startsWith('parallel#')) throw new Error('mất bản ghi')
        return rb.evidence.citation(id)
      }
    }
    const leaky = Object.assign(new Leaky(), { hasCitation: rb.evidence.hasCitation, source: rb.evidence.source.bind(rb.evidence), allCitations: rb.evidence.allCitations })
    const books = new RulebookRegistry()
    books.add({ ...rb, evidence: leaky } as Rulebook)
    const r2 = await new Orchestrator(en.solvers, en.validators, books).run(t2(), { timeMs: 5000, maxSolutions: 1 })
    expect(r2.status).toBe('SOLVED')
    expect(r2.metadata.errors.map((x) => x.code)).toEqual(['evidence-error'])
    expect(r2.explanation!.statements.some((s) => s.kind === 'limitation' && /parallel/.test(s.text.technical) && /Không đọc được trích dẫn/.test(s.text.technical))).toBe(true)
  })
})

describe('GĐ7 — tích hợp bộ giải phức điệu qua bộ điều phối', () => {
  const e = createEngine()
  it('hai bè: SOLVED, mọi lời giải đã qua bộ kiểm độc lập (VALID), bè đề giữ nguyên, kèm giải thích – bằng chứng – truy vết', async () => {
    const t = t2()
    const r = await e.orchestrator.run(t, { timeMs: 5000, maxSolutions: 3 })
    expect(r).toMatchObject({ status: 'SOLVED', solverId: 'counterpoint.two-voice.search', solverVersion: '1.0.0', domain: 'counterpoint', rulebook: t.rulebook })
    expect(r.solutions.length).toBeGreaterThan(0)
    for (const s of r.solutions) {
      expect(s.validation.status).toBe('VALID')
      expect(toCounterpoint(s.score).lines[1]).toEqual(toCounterpoint(t.score).lines[0])
    }
    expect(r.metadata.solverStatus).toBe('solved')
    expect(r.metadata.validator!.id).toBe('umre.validate.counterpoint.two-voice')
    expect(r.evidence.length).toBeGreaterThan(0)
    expect(auditResult(r)).toEqual([])
  })
  it('ba bè: SOLVED qua msolve, mọi lời giải VALID', async () => {
    const r = await e.orchestrator.run(multiTask(['', '', 'C3:4 | D3:4 | B2:4 | C3:4'], [true, true, false]), { timeMs: 5000 })
    expect(r.status).toBe('SOLVED')
    expect(r.solverId).toBe('counterpoint.multi-voice.search')
    expect(r.solutions.every((s) => s.validation.status === 'VALID')).toBe(true)
  })
  it('vô nghiệm đã chứng minh → PROVEN_UNSAT (khác hẳn lỗi kỹ thuật và hết giờ)', async () => {
    const r = await e.orchestrator.run(twoVoiceTask(CF, { stars: [0], starsOnly: true }), { timeMs: 5000 })
    expect(r.status).toBe('PROVEN_UNSAT')
    expect(r.error).toBeUndefined()
    expect(r.trace.steps.some((s) => s.operation === 'solver:proof')).toBe(true)
  })
  it('bộ giải báo có lời giải nhưng lời giải sai: bộ kiểm phát hiện, kết quả không bao giờ là SOLVED', async () => {
    const corrupt = (o: SolverOutput, which: (i: number) => boolean, t: Task): SolverOutput => ({
      ...o,
      solutions: o.solutions.map((s, i) => {
        if (!which(i)) return s
        const cp = toCounterpoint(s).lines[0].map((x) => ({ ...x }))
        const k = cp.findIndex((x, j) => j > 0 && !x.tied && !cp[j + 1]?.tied)
        cp[k] = { ...cp[k], p: pitch(cp[k - 1].p.step + 6) }
        return twoVoiceSolution(t as Task<TwoVoiceParams>, cp, i + 1)
      }),
    })
    const liar = engineWith(fake('liar', async (t, ctx) => corrupt(await twoVoiceSolver.solve(t, ctx), () => true, t)))
    const r = await liar.orchestrator.run(t2(), { timeMs: 5000, maxSolutions: 2 })
    expect(r.solverId).toBe('liar')
    expect(r.metadata.solverStatus).toBe('solved')
    expect(r.status).toBe('UNKNOWN')
    expect(r.solutions).toEqual([])
    expect(r.rejected.every((s) => s.validation.status === 'INVALID' && s.validation.violations.some((v) => v.ruleId === 'leap'))).toBe(true)
    expect(r.statusReason).toMatch(/không công nhận/)
    // only some answers wrong: the run is SOLVED, the wrong ones are listed apart
    const half = engineWith(fake('half', async (t, ctx) => corrupt(await twoVoiceSolver.solve(t, ctx), (i) => i === 0, t)))
    const h = await half.orchestrator.run(t2(), { timeMs: 5000, maxSolutions: 2 })
    expect(h.status).toBe('SOLVED')
    expect(h.rejected.length).toBe(1)
    expect(h.solutions.every((s) => s.validation.status === 'VALID')).toBe(true)
  })
  it('bước 1 — không lấy bộ kiểm của chính bộ giải làm bằng chứng: lời giải thật được bộ kiểm luật UMRE xác nhận; bộ giải dùng mọi bộ kiểm thì không còn gì để xác nhận', async () => {
    const r = await e.orchestrator.run(t2(), { timeMs: 5000, maxSolutions: 1 })
    expect(r.status).toBe('SOLVED')
    const c = r.solutions[0].confirmation
    expect(c.independent).toBe(true)
    expect(c.by['dis-strong']).toContain('umre-rules')
    expect(c.by['dis-strong']).not.toContain('verify')
    expect(r.trace.steps.some((x) => x.operation === 'confirm' && x.check === 'independent')).toBe(true)
    const greedy = engineWith(fake('greedy', twoVoiceSolver.solve, { consults: ['search-rules', 'verify', 'umre-native', 'umre-rules'] }))
    const g = await greedy.orchestrator.run(t2(), { timeMs: 5000, maxSolutions: 1 })
    expect(g.status).toBe('UNKNOWN')
    expect(g.solutions).toEqual([])
    expect(g.rejected[0].validation.status).toBe('VALID')
    expect(g.statusReason).toMatch(/chính bộ giải đã chạy/)
  })
  it('bài có biến thể: UMRE tự dựng biến thể nên luật chiều dọc ở biến thể cũng được xác nhận độc lập → SOLVED', async () => {
    const t = twoVoiceTask('C4:4 | E4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4', { versions: [{ shift: { I: 0, II: -7 }, motion: 'near', label: 'Iv = −7' }] })
    const r = await e.orchestrator.run(t, { timeMs: 5000, maxSolutions: 1 })
    expect(r.status).toBe('SOLVED')
    const c = r.solutions[0].confirmation
    expect(c.unconfirmed).toEqual([])
    expect(c.by.parallel).toContain('umre-rules')
    expect(c.by.parallel).not.toContain('umre-native') // native looks at the original only
  })
  it('quyết định trạng thái là hàm thuần: phân biệt SOLVED / PROVEN_UNSAT / UNKNOWN / TIMEOUT', () => {
    expect(decideStatus({ solverStatus: 'solved', verdicts: ['INVALID', 'VALID'], confirmed: [false, true], proofOfUnsat: true }).status).toBe('SOLVED')
    // VALID only on the word of checkers the solver itself ran: not enough
    const own = decideStatus({ solverStatus: 'solved', verdicts: ['VALID'], confirmed: [false], unconfirmed: [['dis-strong']], proofOfUnsat: true })
    expect(own.status).toBe('UNKNOWN')
    expect(own.reason).toMatch(/dis-strong.*chính bộ giải/)
    expect(decideStatus({ solverStatus: 'solved', verdicts: ['INVALID', 'UNKNOWN'], confirmed: [false, false], proofOfUnsat: true }).status).toBe('UNKNOWN')
    expect(decideStatus({ solverStatus: 'unsat', verdicts: [], confirmed: [], proofOfUnsat: true }).status).toBe('PROVEN_UNSAT')
    expect(decideStatus({ solverStatus: 'unsat', verdicts: [], confirmed: [], proofOfUnsat: false }).status).toBe('UNKNOWN')
    expect(decideStatus({ solverStatus: 'timeout', verdicts: [], confirmed: [], proofOfUnsat: true }).status).toBe('TIMEOUT')
    expect(decideStatus({ solverStatus: 'unknown', verdicts: [], confirmed: [], proofOfUnsat: true }).status).toBe('UNKNOWN')
    expect(decideStatus({ solverStatus: 'unsat', verdicts: ['VALID'], confirmed: [true], proofOfUnsat: true }).status).toBe('UNKNOWN')
  })
})
