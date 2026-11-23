import { HARMONY_RULEBOOK_ID, HARMONY_RULEBOOK_VERSION } from '../rulebook/harmony'
import type { Rulebook } from '../rulebook/rulebook'
import { harmonyFaults, progressionFaults, triadOnBass } from '../domains/harmony/check'
import { chordSpans, chordsOfSolution, FOUR_PART, fourPartModel, HARMONIZE, type FourPartParams, type HarmonizeParams } from '../domains/harmony/task'
import { CHOICE_RULE_IDS } from '../rules/harmony'
import { evaluate } from '../rules/lang'
import { formatPitch } from '../repr/pitch'
import { fromQuarters, rat, toQuarters } from '../repr/rational'
import { notesOf } from '../repr/score'
import { validateScore } from '../repr/validate'
import type { Task } from '../task'
import { digest, type CheckerInfo, type RuleOutcome, type ValidationResult, type Validator, type Violation } from './types'

/**
 * Validator of four-part harmony solutions — the same contract as counterpoint (statuses, violations, coverage,
 * digest), with two independent checkers: the rule-language rules (`umre-rules`) and a hand-written checker
 * (`harmony-native`, domains/harmony/check.ts). They are compared rule by rule; a disagreement makes the solution
 * UNKNOWN, never VALID.
 */
const CHECKERS: CheckerInfo[] = [
  { id: 'umre-rules', independent: true, description: 'Luật hoà âm trong ngôn ngữ luật UMRE (rules/harmony.ts), bộ đánh giá chung' },
  { id: 'harmony-native', independent: true, description: 'Bộ kiểm viết tay (domains/harmony/check.ts), không dùng ngôn ngữ luật hay texture.ts' },
]
type Raw = { checker: string; rule: string; at: number; voices: number[] }

export const harmonyValidator: Validator = {
  id: 'umre.validate.harmony.four-part',
  version: '1',
  taskTypes: [FOUR_PART, HARMONIZE],
  rulebooks: { [HARMONY_RULEBOOK_ID]: [HARMONY_RULEBOOK_VERSION] },
  validate(task, solution, rb) {
    const choice = task.type === HARMONIZE
    const dig = digest({ task, solution, rulebook: { id: rb.id, version: rb.version } })
    const base = (status: ValidationResult['status'], reasons: string[], violations: Violation[] = [], outcomes: RuleOutcome[] = []): ValidationResult => {
      const hard = outcomes.filter((o) => o.severity === 'hard')
      const n = (k: RuleOutcome['outcome']) => hard.filter((o) => o.outcome === k).length
      const soft = outcomes.filter((o) => o.severity === 'soft')
      return {
        status, reasons, taskId: task.id, rulebook: { id: rb.id, version: rb.version }, validator: { id: this.id, version: this.version }, checkers: CHECKERS,
        violations: violations.filter((x) => x.severity === 'hard'), advisories: violations.filter((x) => x.severity === 'soft'), provisional: [], outcomes,
        coverage: { hardRules: hard.length, checked: hard.length - n('not-checked') - n('not-applicable'), passed: n('pass'), violated: n('fail'), uncheckable: n('not-checked'), disputed: n('disputed'), notApplicable: n('not-applicable'), softChecked: soft.length, exceptionsApplied: [], ratio: hard.length - n('not-applicable') ? (hard.length - n('not-checked') - n('not-applicable')) / (hard.length - n('not-applicable')) : 0 },
        inputDigest: dig,
      }
    }
    if (!this.rulebooks[rb.id]?.includes(rb.version)) return base('UNKNOWN', [`Sổ luật ${rb.id}@${rb.version} không được bộ kiểm hỗ trợ`])
    const errs = validateScore(solution).filter((i) => i.severity === 'error')
    if (errs.length) return base('INVALID', ['Tổng phổ lời giải hỏng cấu trúc'], errs.map((e) => sysV(rb, `repr.${e.code}`, 'umre.repr', e.message)))
    if (solution.voices.length !== 4) return base(solution.voices.length < 4 ? 'INCOMPLETE' : 'INVALID', [`Lời giải có ${solution.voices.length} bè, cần 4`])
    const sop = notesOf(task.score.voices[0])
    const same = notesOf(solution.voices[0])
    if (same.length !== sop.length || same.some((n, i) => toQuarters(n.onset) !== toQuarters(sop[i].onset) || formatPitch(n.pitch) !== formatPitch(sop[i].pitch)))
      return base('INVALID', ['Lời giải không giữ nguyên soprano'], [sysV(rb, 'task.given-preserved', 'umre.task', 'Soprano là đề nhưng lời giải đã sửa nó')])
    if (solution.voices.slice(1).some((v) => notesOf(v).length < sop.length)) return base('INCOMPLETE', ['Còn bè chưa viết đủ nốt'])

    // the chords: given (four-part task) or read off the solution — each checker reads them its own way
    const given = choice ? (task.params as HarmonizeParams).key : (task.params as FourPartParams).key
    const k = given ?? { tonic: { letter: 0 as const, alter: 0 }, minor: false }
    const chords = choice ? chordsOfSolution(solution, k) : (task.params as FourPartParams).chords
    const nativeChords = choice ? notesOf(solution.voices[3]).map((n) => triadOnBass(n.pitch, k)) : chords
    const t: Task<FourPartParams> = { ...task, type: FOUR_PART, params: { chords, key: k } }
    const model = fourPartModel(t, rb, { choice, all: true })
    const view = model.views(solution, false)[0]
    const raws: Raw[] = evaluate(view.rules, view.queries, new Set()).hits.map((h) => ({ checker: 'umre-rules', rule: h.ruleId, at: h.item.at, voices: [...h.item.voices] }))
    for (const f of [...harmonyFaults(solution, nativeChords), ...progressionFaults(solution, nativeChords, k, choice)]) raws.push({ checker: 'harmony-native', rule: f.rule, at: f.at, voices: f.voices })
    const key = (r: Raw) => `${r.voices.join(',')}|${r.at}`
    const outcomes: RuleOutcome[] = []
    const violations: Violation[] = []
    const reasons: string[] = []
    for (const spec of rb.rules) {
      if (!choice && CHOICE_RULE_IDS.has(spec.id)) {
        outcomes.push({ ruleId: spec.id, severity: spec.severity, outcome: 'not-applicable', checkers: [], note: 'hợp âm do đề cho sẵn: luật chọn hợp âm không áp' })
        continue
      }
      const a = raws.filter((r) => r.checker === 'umre-rules' && r.rule === spec.id)
      const b = raws.filter((r) => r.checker === 'harmony-native' && r.rule === spec.id)
      const A = new Set(a.map(key))
      const B = new Set(b.map(key))
      const disputed = A.size !== B.size || [...A].some((k) => !B.has(k))
      if (disputed) reasons.push(`Bộ kiểm độc lập bất đồng ở luật ${spec.id}: umre-rules ${[...A].join(' ') || '∅'} / harmony-native ${[...B].join(' ') || '∅'}`)
      const outcome: RuleOutcome['outcome'] = disputed ? 'disputed' : a.length ? 'fail' : 'pass'
      outcomes.push({ ruleId: spec.id, severity: spec.severity, outcome, checkers: [{ id: 'umre-rules', independent: true, faults: a.length, complete: true }, { id: 'harmony-native', independent: true, faults: b.length, complete: true }] })
      if (outcome === 'fail')
        for (const r of a) {
          const ps = solution.voices.map((v) => notesOf(v).find((n) => toQuarters(n.onset) <= r.at && r.at < toQuarters(n.onset) + toQuarters(n.duration)))
          violations.push({
            ruleId: spec.id, rulebookId: rb.id, rulebookVersion: rb.version, severity: spec.severity,
            location: { at: fromQuarters(r.at), measure: Math.floor(r.at / 4) + 1, offset: fromQuarters(r.at % 4), voices: r.voices.map((i) => solution.voices[i].id), eventIds: ps.flatMap((n) => (n ? [n.id] : [])) },
            actual: `S-A-T-B: ${ps.map((n) => (n ? formatPitch(n.pitch) : '—')).join(' ')} — hợp âm ${chordSpans(t).find((c) => c.at <= r.at && r.at < c.end)?.chord.quality ?? '?'}`,
            expected: spec.statement, description: `${spec.statement} (ô ${Math.floor(r.at / 4) + 1})`, citations: spec.citations, checkers: ['umre-rules', ...(b.some((x) => key(x) === key(r)) ? ['harmony-native'] : [])],
          })
        }
    }
    const res = base('VALID', reasons, violations, outcomes)
    const status = res.coverage.violated ? 'INVALID' : res.coverage.disputed ? 'UNKNOWN' : 'VALID'
    return { ...res, status }
  },
}

function sysV(_rb: Rulebook, ruleId: string, rulebookId: string, text: string): Violation {
  return { ruleId, rulebookId, rulebookVersion: '1', severity: 'hard', location: { at: rat(0), measure: 1, offset: rat(0), voices: [], eventIds: [] }, actual: text, expected: '', description: text, citations: [], checkers: ['umre-structure'] }
}
