import { multiVoiceModel, twoVoiceModel } from '../domains/counterpoint/csp'
import { checkMultiVoiceTask, checkTwoVoiceTask, MULTI_VOICE, TWO_VOICE, type MultiVoiceParams, type TwoVoiceParams } from '../domains/counterpoint/task'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION, counterpointRulebook } from '../rulebook/counterpoint'
import { search } from '../search/search'
import type { Task } from '../task'
import { checkFourPartTask, checkHarmonizeTask, FOUR_PART, fourPartModel, HARMONIZE, type FourPartParams, type HarmonizeParams } from '../domains/harmony/task'
import { harmonize, romanOf } from '../domains/harmony/harmonize'
import { notesOf } from '../repr/score'
import { HARMONY_RULEBOOK_ID, HARMONY_RULEBOOK_VERSION, harmonyRulebook } from '../rulebook/harmony'
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
    requires: { umre: '1.0' },
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

/** The same shared search on the four-part harmony model: no search code of its own. */
export const cspHarmonySolver: Solver = {
  descriptor: {
    ...cspCounterpointSolver.descriptor,
    id: 'umre.csp.harmony',
    domain: 'harmony',
    taskTypes: [FOUR_PART],
    rulebooks: [{ id: HARMONY_RULEBOOK_ID, versions: [HARMONY_RULEBOOK_VERSION] }],
    input: { schema: 'harmony.four-part/params@1', description: 'soprano cho trước và một hợp âm ba thế gốc cho mỗi nốt' },
    output: { schema: 'umre.score@1', description: 'tổng phổ bốn bè S-A-T-B' },
    priority: 0,
  },
  checkInput: (t) => checkFourPartTask(t),
  solve(task, ctx): SolverOutput {
    const model = fourPartModel(task as Task<FourPartParams>, harmonyRulebook())
    const r = search(model, { timeMs: ctx.timeMs, maxSolutions: ctx.maxSolutions, signal: ctx.signal })
    const proof = r.status === 'unsat' ? `đã duyệt hết miền tìm kiếm (${model.domain})` : undefined
    return {
      status: r.status, proof, reason: r.status === 'timeout' ? `hết ${ctx.timeMs} ms, đã thử ${r.nodes} nút` : undefined,
      solutions: r.solutions.map((s, i) => ({ ...s, id: `${task.id}-g${i + 1}` })),
      diagnostics: { nodes: r.nodes, deadStates: r.deadStates, domain: model.domain },
      steps: [
        { operation: 'problem', output: { summary: `hoà âm bốn bè: ${(task.params as FourPartParams).chords.length} hợp âm, soprano cho trước` } },
        { operation: 'domain', output: model.domain, level: 'detailed' },
        { operation: 'search', output: { status: r.status, nodes: r.nodes, deadStates: r.deadStates, solutions: r.solutions.length } },
        ...(proof ? [{ operation: 'proof', output: proof }] : []),
        ...(r.blockers.length ? [{ operation: 'blockers', ruleIds: [...new Set(r.blockers.map((b) => b.rule))], output: r.blockers.map((b) => ({ rule: b.rule, bar: Math.floor(b.at / 4) + 1, count: b.count, version: b.view })), level: 'detailed' as const }] : []),
      ],
    }
  },
}

/** Melody harmonization: chord-sequence enumeration (§ 13 rules) + the same shared search for the voicing. */
export const harmonizeSolver: Solver = {
  descriptor: {
    ...cspHarmonySolver.descriptor,
    id: 'umre.harmonize',
    taskTypes: [HARMONIZE],
    input: { schema: 'harmony.harmonize-melody/params@1', description: 'giai điệu soprano và giọng; hợp âm do bộ giải chọn trong I, IV, V' },
    output: { schema: 'umre.score@1', description: 'tổng phổ bốn bè S-A-T-B, mỗi phương án một chuỗi hợp âm khác nhau trước' },
    defaults: { timeMs: 10_000, maxSolutions: 6 },
  },
  checkInput: (t) => checkHarmonizeTask(t),
  solve(task, ctx): SolverOutput {
    const t = task as Task<HarmonizeParams>
    const r = harmonize(t, harmonyRulebook(), ctx)
    return {
      status: r.status, proof: r.proof, reason: r.reason, solutions: r.solutions,
      diagnostics: { candidates: r.candidates, sequences: r.sequences.map((s) => ({ chords: romanOf(s.degrees), status: s.status, nodes: s.nodes })), options: r.options },
      steps: [
        { operation: 'problem', output: { summary: `phối hoà âm giai điệu ${notesOf(t.score.voices[0]).length} nốt, ${t.params.key.minor ? 'thứ' : 'trưởng'}` } },
        { operation: 'chord-options', ruleIds: ['h.primary-only'], output: r.options.map((o) => o.map((d) => romanOf([d])).join('/') || '∅') },
        { operation: 'chord-sequences', ruleIds: ['h.tonic-frame', 'h.no-v-iv', 'h.leap-same-chord', 'h.leading-tone'], output: { candidates: r.candidates } },
        ...r.sequences.map((s) => ({ operation: 'voicing', input: romanOf(s.degrees), output: { status: s.status, nodes: s.nodes }, level: 'detailed' as const })),
        ...(r.proof ? [{ operation: 'proof', output: r.proof }] : []),
      ],
    }
  },
}
