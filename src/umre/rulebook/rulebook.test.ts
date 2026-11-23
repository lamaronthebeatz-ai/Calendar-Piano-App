import { readFileSync, writeFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { multiSolution, twoVoiceSolution } from '../domains/counterpoint/task'
import { line, multiTask, twoVoiceTask } from '../testing/fixtures'
import { multiVoiceValidator, twoVoiceValidator } from '../validation/counterpoint'
import { checkersOf, judgedAs } from '../validation/coverage'
import { counterpointRulebook } from './counterpoint'
import { harmonyRulebook } from './harmony'
import { RULE_CASES, type RuleCase } from './cases'
import { auditRulebook, entries, hardRules } from './rulebook'

const rb = counterpointRulebook()
const DOC = new URL('../../../docs/umre/COVERAGE.md', import.meta.url)

function run(c: RuleCase) {
  if (c.kind === 'two') {
    const t = twoVoiceTask(c.given, { stars: c.stars, starsOnly: c.starsOnly })
    const cp = line(c.lines[0])
    if (c.gap) for (let i = c.gap[0]; i < cp.length; i++) cp[i] = { ...cp[i], start: cp[i].start + c.gap[1] }
    return twoVoiceValidator.validate(t, twoVoiceSolution(t, cp), rb)
  }
  const t = multiTask(c.lines, [true, true, false])
  return multiVoiceValidator.validate(t, multiSolution(t, c.lines.map(line)), rb)
}

describe('GĐ8 — sổ luật phức điệu chuẩn hoá', () => {
  it('mỗi mục có mã, tên, phát biểu, nguồn, phạm vi, phân loại; luật bắt buộc nói rõ chỗ đánh giá', () => {
    expect(auditRulebook(rb)).toEqual([])
    for (const r of rb.rules) {
      expect(r.name, r.id).toBeTruthy()
      expect(r.logic, r.id).toBeDefined()
    }
    for (const r of hardRules(rb)) expect(checkersOf(r.id).length, `${r.id}: không bộ kiểm độc lập nào`).toBeGreaterThan(0)
    const count = (s: string) => entries(rb).filter((e) => e.standing === s).length
    expect([count('hard'), count('recommendation'), count('permitted'), count('exception'), count('ambiguous')]).toEqual([18, 16, 3, 2, 6])
    // ambiguity is applied as a labelled reading, never silently: every ambiguous entry names its current reading
    for (const a of rb.ambiguous!) expect(a.currentReading).toBeTruthy()
    expect(auditRulebook(harmonyRulebook())).toEqual([])
  })
  it('ca kiểm từng luật bắt buộc: ví dụ viết tay vi phạm đúng luật đó, MỌI bộ kiểm độc lập phủ luật đều bắt được', () => {
    const covered = new Set(RULE_CASES.map((c) => c.rule))
    for (const r of hardRules(rb)) expect(covered.has(r.id), `${r.id} chưa có ca kiểm`).toBe(true)
    const rows: string[] = []
    for (const c of RULE_CASES) {
      const res = run(c)
      expect(res.status, c.rule).toBe('INVALID')
      const v = res.violations.find((x) => x.ruleId === judgedAs(c.rule))
      expect(v, `${c.rule}: không bị bắt (${res.violations.map((x) => x.ruleId)})`).toBeDefined()
      const independent = v!.checkers.filter((x) => x !== 'search-rules')
      expect(independent.sort(), c.rule).toEqual(checkersOf(c.rule).sort())
      rows.push(`| \`${c.rule}\` | ${rb.rules.find((r) => r.id === c.rule)!.name} | ${c.why} | ${independent.join(', ')} | ${independent.length} |`)
    }
    const table = ['| Luật | Tên | Ca vi phạm viết tay | Bộ kiểm độc lập bắt được | Số |', '|---|---|---|---|---|', ...rows].join('\n')
    const doc = readFileSync(DOC, 'utf8')
    const block = /<!-- cases -->\n([\s\S]*?)\n<!-- \/cases -->/
    if (process.env.UMRE_WRITE_COVERAGE) writeFileSync(DOC, doc.replace(block, `<!-- cases -->\n${table}\n<!-- /cases -->`))
    else expect(doc.match(block)![1], 'docs/umre/COVERAGE.md lệch với kết quả thật — chạy lại với UMRE_WRITE_COVERAGE=1').toBe(table)
  })
})
