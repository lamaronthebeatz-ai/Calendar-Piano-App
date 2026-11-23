import type { AnalysisModule, Finding } from '../../analysis/types'
import type { Score } from '../../repr/score'
import type { Rulebook } from '../../rulebook/rulebook'
import type { Task } from '../../task'
import { harmonyValidator } from '../../validation/harmony'
import { toQuarters } from '../../repr/rational'
import { explainProgression } from './reasoning'
import { chordsOfSolution, FOUR_PART, HARMONIZE, type FourPartParams, type HarmonizeParams } from './task'

/**
 * A four-part progression answering a harmony task, explained and checked: the facts of each connection (relation,
 * common tones, harmonic / melodic), the function of each primary chord, and every rule the independent validator
 * finds broken (hard) or not followed (recommendation). Context: `task` (four-part or harmonization) and `rulebook`.
 */
const ID = 'harmony.progression'
export const harmonyProgression: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'harmony', kind: 'formalizable',
    method: 'sổ luật hoà âm (Rimsky-Korsakov) + bộ kiểm chứng độc lập hoà âm; quan hệ và kiểu nối tính từ nốt',
    limits: ['bốn bè nốt đối nốt, hợp âm ba thế gốc (chặng § 8 – § 13 của sách)', 'chức năng chỉ nêu cho hợp âm chính I, IV, V'],
  },
  checkInput(input) {
    const t = input.context?.task as Task | undefined
    const out: string[] = []
    if (!t || (t.type !== FOUR_PART && t.type !== HARMONIZE)) out.push('context.task: bài hoà âm bốn bè hoặc phối hoà âm giai điệu')
    if (!input.context?.rulebook) out.push('context.rulebook: sổ luật')
    if (input.score.voices.length !== 4) out.push('tổng phổ bốn bè S, A, T, B')
    return out
  },
  analyze(input) {
    const t = input.context!.task as Task
    const rb = input.context!.rulebook as Rulebook
    const s = input.score as Score
    const v = harmonyValidator.validate(t, s, rb)
    if (v.status === 'INCOMPLETE') return { status: 'INSUFFICIENT_DATA', statusReason: v.reasons.join('; '), findings: [], missing: ['đủ nốt ở cả bốn bè'] }
    const key = t.type === HARMONIZE ? (t.params as HarmonizeParams).key : (t.params as FourPartParams).key ?? { tonic: { letter: 0 as const, alter: 0 }, minor: false }
    const chords = t.type === HARMONIZE ? chordsOfSolution(s, key) : (t.params as FourPartParams).chords
    const checks: Finding[] = [...v.violations, ...v.advisories].map((x, i) => ({
      id: `${ID}#rule-${i + 1}`, module: ID, kind: 'rule-check', topic: x.severity === 'hard' ? 'luật bắt buộc' : 'khuyến nghị', at: toQuarters(x.location.at),
      value: { ruleId: x.ruleId, severity: x.severity, checkers: x.checkers },
      text: { basic: `Ô ${x.location.measure}: ${x.expected}`, technical: `${x.ruleId}: ${x.actual}` }, evidence: [x.actual], ruleIds: [x.ruleId], citations: x.citations,
    }))
    return { status: v.status === 'UNKNOWN' ? 'UNKNOWN' : 'COMPLETED', statusReason: `kiểm chứng: ${v.status}`, findings: [...explainProgression(s, chords, key, rb), ...checks] }
  },
}
