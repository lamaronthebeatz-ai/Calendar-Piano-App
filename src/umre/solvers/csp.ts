import { multiVoiceModel, twoVoiceModel } from '../domains/counterpoint/csp'
import { checkMultiVoiceTask, checkTwoVoiceTask, MULTI_VOICE, TWO_VOICE, type MultiVoiceParams, type TwoVoiceParams } from '../domains/counterpoint/task'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION, counterpointRulebook } from '../rulebook/counterpoint'
import { search } from '../search/search'
import type { Task } from '../task'
import type { Solver, SolverOutput, SolverStep } from '../orchestration/solver'

/**
 * The shared engine as a solver: constraint model (stage 3) + search (stage 4) over the rulebook's rules in the rule
 * language. For counterpoint it is a SECOND solver beside the page's own, built from different code — the two can be
 * compared, and each one's answers are confirmed by checkers the other runs (this one consults only `umre-rules`).
 */
export const cspCounterpointSolver: Solver = {
  descriptor: {
    id: 'umre.csp.counterpoint',
    version: '1.0.0',
    domain: 'counterpoint',
    taskTypes: [TWO_VOICE, MULTI_VOICE],
    representations: ['umre.score@1'],
    rulebooks: [{ id: COUNTERPOINT_RULEBOOK_ID, versions: [COUNTERPOINT_RULEBOOK_VERSION] }],
    input: { schema: 'counterpoint.*/params@1', description: 'như hai bộ giải của trang phức điệu' },
    output: { schema: 'umre.score@1', description: 'tổng phổ UMRE đủ các bè' },
    // runs synchronously; the time limit is checked between nodes
    capabilities: { proofOfUnsat: true, multipleSolutions: true, cancellation: 'none' },
    defaults: { timeMs: 15_000, maxSolutions: 4 },
    limits: { maxTimeMs: 120_000, maxSolutions: 24 },
    requires: { umre: '0.5' },
    consults: ['umre-rules'],
    // the page's own solvers stay the default; this one is asked for by id or used when they are disabled
    priority: -1,
  },
  checkInput: (t) => (t.type === TWO_VOICE ? checkTwoVoiceTask(t) : checkMultiVoiceTask(t)),
  solve(task, ctx): SolverOutput {
    const rb = counterpointRulebook()
    const model = task.type === TWO_VOICE ? twoVoiceModel(task as Task<TwoVoiceParams>, rb) : multiVoiceModel(task as Task<MultiVoiceParams>, rb)
    const steps: SolverStep[] = [
      { operation: 'problem', output: { summary: `mô hình ràng buộc chung: ${model.free.length} bè tự do, ${model.base.voices.length} bè` } },
      { operation: 'domain', output: model.domain, level: 'detailed' },
    ]
    const r = search(model, { timeMs: ctx.timeMs, maxSolutions: ctx.maxSolutions, signal: ctx.signal })
    steps.push({ operation: 'search', output: { status: r.status, nodes: r.nodes, deadStates: r.deadStates, furthest: r.furthest, solutions: r.solutions.length } })
    if (r.blockers.length) steps.push({ operation: 'blockers', ruleIds: [...new Set(r.blockers.map((b) => b.rule))], output: r.blockers.map((b) => ({ rule: b.rule, bar: Math.floor(b.at / 4) + 1, count: b.count, version: b.view })), level: 'detailed' })
    const proof = r.status === 'unsat' ? `đã duyệt hết miền tìm kiếm (${model.domain})` : undefined
    if (proof) steps.push({ operation: 'proof', output: proof })
    return {
      status: r.status, proof,
      reason: r.status === 'timeout' ? `hết ${ctx.timeMs} ms, đã thử ${r.nodes} nút` : undefined,
      solutions: r.solutions.map((s, i) => ({ ...s, id: `${task.id}-g${i + 1}` })),
      diagnostics: { nodes: r.nodes, deadStates: r.deadStates, furthest: r.furthest, domain: model.domain },
      steps,
    }
  },
}
