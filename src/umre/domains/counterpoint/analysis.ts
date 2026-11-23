import type { AnalysisModule, Finding } from '../../analysis/types'
import { toQuarters } from '../../repr/rational'
import type { Score } from '../../repr/score'
import type { Rulebook } from '../../rulebook/rulebook'
import type { Task } from '../../task'
import { COUNTERPOINT_VALIDATORS } from '../../validation/counterpoint'
import type { Violation } from '../../validation/types'

/**
 * A student's written counterpoint as an ANALYSIS (what is wrong, where, by which rule, caught by whom), on the same
 * independent validator the solvers are judged by — no second checker. Context: `task` (the exercise the score
 * answers) and `rulebook`. A rule check is formalizable: every finding is a rule-check, no confidence needed.
 */
const ID = 'counterpoint.check'

const toFinding = (v: Violation, i: number, kind: 'hard' | 'soft' | 'provisional'): Finding => {
  const at = toQuarters(v.location.at)
  const where = `ô ${v.location.measure}${v.location.version ? `, ${v.location.version}` : ''}`
  return {
    id: `${ID}#${kind}-${i + 1}`, module: ID, kind: 'rule-check', topic: kind === 'soft' ? 'khuyến nghị' : 'luật bắt buộc', at,
    value: { ruleId: v.ruleId, severity: v.severity, provisional: kind === 'provisional', checkers: v.checkers },
    text: {
      basic: `${where}: ${v.expected}${kind === 'provisional' ? ' (bài chưa xong — lỗi tạm)' : ''}`,
      technical: `${v.ruleId} @ ${where}: ${v.actual}; bộ kiểm: ${v.checkers.join(', ')}`,
      academic: `${v.description} — ${v.actual}`,
    },
    evidence: [v.actual, ...v.location.eventIds],
    ruleIds: [v.ruleId], citations: v.citations,
  }
}

export const counterpointCheck: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'counterpoint', kind: 'formalizable',
    method: 'bộ kiểm chứng độc lập UMRE (verify.ts + bộ kiểm viết lại + ngôn ngữ luật), cùng bộ kiểm dùng cho lời giải của bộ giải',
    limits: ['chỉ phức điệu nghiêm khắc theo sổ luật Phạm Tú Hương 1991', 'luật mềm do bộ kiểm của bộ giải chấm, không độc lập'],
  },
  checkInput(input) {
    const task = input.context?.task as Task | undefined
    const out: string[] = []
    if (!task) out.push('context.task: bài tập mà tổng phổ trả lời')
    else if (!COUNTERPOINT_VALIDATORS.some((v) => v.taskTypes.includes(task.type))) out.push(`không có bộ kiểm cho loại bài ${task.type}`)
    if (!input.context?.rulebook) out.push('context.rulebook: sổ luật')
    return out
  },
  analyze(input) {
    const task = input.context!.task as Task
    const rb = input.context!.rulebook as Rulebook
    const v = COUNTERPOINT_VALIDATORS.find((x) => x.taskTypes.includes(task.type))!.validate(task, input.score as Score, rb)
    const findings = [
      ...v.violations.map((x, i) => toFinding(x, i, 'hard')),
      ...v.provisional.map((x, i) => toFinding(x, i, 'provisional')),
      ...v.advisories.map((x, i) => toFinding(x, i, 'soft')),
    ]
    const summary: Finding = {
      id: `${ID}#verdict`, module: ID, kind: 'rule-check', topic: 'kết luận', value: { status: v.status, coverage: v.coverage },
      text: {
        basic: v.status === 'VALID' ? 'Bài đúng mọi luật bắt buộc.' : v.status === 'INVALID' ? `Bài sai ${v.violations.length} chỗ.` : v.status === 'INCOMPLETE' ? 'Bài chưa viết xong.' : 'Chưa kết luận được.',
        technical: `${v.status}; phủ ${v.coverage.checked}/${v.coverage.hardRules - v.coverage.notApplicable} luật bắt buộc, ${v.coverage.disputed} bất đồng`,
      },
      evidence: [`validator ${v.validator.id}@${v.validator.version}`, `digest ${v.inputDigest}`],
    }
    const status = v.status === 'UNKNOWN' ? 'UNKNOWN' : v.status === 'INCOMPLETE' ? 'PARTIAL' : 'COMPLETED'
    return { status, statusReason: `kiểm chứng: ${v.status}${v.reasons.length ? ` (${v.reasons.join('; ')})` : ''}`, findings: [summary, ...findings] }
  },
}
