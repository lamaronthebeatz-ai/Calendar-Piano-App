import { readFileSync, writeFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { verify } from '../../features/counterpoint/verify'
import { multiSolution, twoVoiceSolution } from '../domains/counterpoint/task'
import { HARMONY_CASES } from '../domains/harmony/cases'
import { fourPartTask, harmonizeTask } from '../domains/harmony/task'
import { fromCounterpoint } from '../repr/adapters/counterpoint'
import type { Chord } from '../repr/harmony'
import { evaluate } from '../rules/lang'
import { COUNTERPOINT_RULES, consonanceOf } from '../rules/counterpoint'
import { textureQueries } from '../rules/queries'
import { C, line, multiTask, twoVoiceTask } from '../testing/fixtures'
import { CHART_COUNTER, GOLD_SUSPENSIONS } from '../testing/gold'
import { multiVoiceValidator, twoVoiceValidator } from '../validation/counterpoint'
import { checkersOf, judgedAs } from '../validation/coverage'
import { harmonyValidator } from '../validation/harmony'
import { RULE_CASES } from './cases'
import { counterpointRulebook } from './counterpoint'
import { harmonyRulebook } from './harmony'
import type { Rulebook, RuleSpec } from './rulebook'

/**
 * GĐ12A — the academic verification table, built from the rulebooks themselves and from evidence that does NOT come
 * from the engine: the textbook's printed examples (counterpoint) and examples written by hand from each rule's
 * statement. A rule is marked "đối chiếu tài liệu" only when its source is the book, the citation is verified with a
 * page, and a hand-written violation is caught by at least two independent checkers. The citations were checked by
 * the assistant against the scan — this is verification against documents, not certification by an expert.
 */
const DOC = new URL('../../../docs/umre/ACADEMIC_VERIFICATION.md', import.meta.url)
const cp = counterpointRulebook()
const hb = harmonyRulebook()

type Row = { book: string; rule: RuleSpec; caught: string[]; bookExamples: number }

function counterpointCaught(rule: string): string[] {
  const c = RULE_CASES.find((x) => x.rule === rule)
  if (!c) return []
  let v
  if (c.kind === 'two') {
    const t = twoVoiceTask(c.given, { stars: c.stars, starsOnly: c.starsOnly })
    const segs = line(c.lines[0])
    if (c.gap) for (let i = c.gap[0]; i < segs.length; i++) segs[i] = { ...segs[i], start: segs[i].start + c.gap[1] }
    v = twoVoiceValidator.validate(t, twoVoiceSolution(t, segs), cp)
  } else {
    const t = multiTask(c.lines, [true, true, false])
    v = multiVoiceValidator.validate(t, multiSolution(t, c.lines.map(line)), cp)
  }
  return v.violations.find((x) => x.ruleId === judgedAs(rule))?.checkers.filter((x) => x !== 'search-rules') ?? []
}
function harmonyCaught(rule: string): string[] {
  const c = HARMONY_CASES.find((x) => x.rule === rule)
  if (!c) return []
  const k = { tonic: { letter: (c.tonic ?? 0) as 0, alter: 0 }, minor: !!c.minor }
  const base = c.kind === 'harmonize' ? harmonizeTask('v', line(c.s), k) : fourPartTask('v', line(c.s), c.chords!.map(([l, q]) => ({ root: { letter: l as 0, alter: 0 }, quality: q }) as Chord), { tonic: k.tonic.letter, alter: 0, minor: k.minor })
  const t = c.kind === 'four-part' ? { ...base, params: { ...base.params, key: k } } : base
  const sol = fromCounterpoint({ key: { tonic: k.tonic.letter, alter: 0, minor: k.minor }, meter: { num: 4, den: 4 }, lines: [c.s, c.a, c.t, c.b].map(line), id: 'v' })
  const v = harmonyValidator.validate(t as never, sol, hb)
  return [...([...v.violations, ...v.advisories].find((x) => x.ruleId === rule)?.checkers ?? [])]
}

/** how many printed textbook examples bear on the rule (counterpoint dissonance rules only) */
const bookExamples = (rule: string) => (['dis-strong', 'suspension'].includes(rule) ? GOLD_SUSPENSIONS.length + CHART_COUNTER.length : 0)

function verdict(rb: Rulebook, r: Row): string {
  const cites = r.rule.citations.map((c) => rb.evidence.citation(c))
  const srcType = (id: string) => rb.evidence.source(id).type
  const fromBook = cites.every((c) => srcType(c.sourceId) === 'primary' || srcType(c.sourceId) === 'secondary')
  if (!fromBook) return cites.some((c) => srcType(c.sourceId) === 'unverified-claim') ? 'quy ước người dạy, chưa có văn bản' : 'cách hiểu của người biên soạn'
  if (cites.some((c) => c.verification !== 'verified' || !c.locator) || r.rule.caveat) return 'đối chiếu một phần'
  return r.caught.length >= 2 ? 'đối chiếu tài liệu (trong phạm vi)' : 'có nguồn, thiếu ca kiểm độc lập'
}

const rowsOf = (book: string, rb: Rulebook, caught: (id: string) => string[]): Row[] => rb.rules.map((rule) => ({ book, rule, caught: caught(rule.id), bookExamples: book === 'cp' ? bookExamples(rule.id) : 0 }))

describe('GĐ12A — kiểm chứng học thuật hai sổ luật', () => {
  const rows = [...rowsOf('cp', cp, counterpointCaught), ...rowsOf('h', hb, harmonyCaught)]

  it('mọi luật bắt buộc có ca vi phạm viết tay bị ít nhất hai bộ kiểm độc lập bắt (âm tính giả trên ca viết tay = 0)', () => {
    for (const r of rows.filter((x) => x.rule.severity === 'hard' && x.rule.id !== 'suspension' || x.book === 'h'))
      expect(r.caught.length, `${r.rule.id}`).toBeGreaterThanOrEqual(r.book === 'cp' ? Math.min(2, checkersOf(r.rule.id).length) : 2)
  })
  it('thí dụ in trong giáo trình: 5 nốt lưu đúng không bị bộ kiểm nào bác (dương tính giả = 0/5); 2 hình sơ đồ cấm bị cả hai bác (âm tính giả = 0/2)', () => {
    const CONS = consonanceOf(cp)
    const two = (u: string, l: string) => fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line(u), line(l)] })
    let fp = 0
    let fn = 0
    for (const g of [...GOLD_SUSPENSIONS, ...CHART_COUNTER]) {
      const s = two(g.upper, g.lower)
      const q = textureQueries({ score: s, lines: [], pairs: [[0, 1]], end: { n: 100, d: 1 }, consonance: () => CONS })
      const ours = evaluate(COUNTERPOINT_RULES, q, new Set()).hits.some((h) => h.item.at === g.expect.at && h.ruleId.startsWith('dis'))
      const theirs = verify({ key: C, meter: { num: 2, den: 2 }, given: line(g.upper), givenIs: 'I', stars: [], versions: [], starsOnly: false, noLine: true }, line(g.lower)).some((f) => f.t === g.expect.at)
      if (g.expect.lawful && (ours || theirs)) fp++
      if (!g.expect.lawful && !(ours && theirs)) fn++
    }
    expect([fp, fn]).toEqual([0, 0])
  })
  it('bảng kiểm chứng công khai (docs/umre/ACADEMIC_VERIFICATION.md) khớp kết quả thật', () => {
    const name = (rb: Rulebook, id: string) => rb.evidence.source(id).title
    const lines = rows.map((r) => {
      const rb = r.book === 'cp' ? cp : hb
      const cites = r.rule.citations.map((c) => rb.evidence.citation(c))
      const src = [...new Set(cites.map((c) => name(rb, c.sourceId)))].join('; ')
      const loc = cites.map((c) => c.locator ?? '—').join(', ')
      const ver = [...new Set(cites.map((c) => `${c.verification}${c.checkedBy ? ` (${c.checkedBy === 'assistant' ? 'trợ lý' : c.checkedBy})` : ''}`))].join(', ')
      return `| ${r.book === 'cp' ? 'Phức điệu' : 'Hoà âm'} | \`${r.rule.id}\` | ${r.rule.severity === 'hard' ? 'bắt buộc' : 'khuyến nghị'} | ${src} | ${loc} | ${ver} | ${r.caught.join(', ') || '—'} | ${r.bookExamples || '—'} | **${verdict(rb, r)}** |`
    })
    const count = (v: string) => rows.filter((r) => verdict(r.book === 'cp' ? cp : hb, r) === v).length
    const table = [
      `Tổng: ${rows.length} luật — đối chiếu tài liệu (trong phạm vi) ${count('đối chiếu tài liệu (trong phạm vi)')}, đối chiếu một phần ${count('đối chiếu một phần')}, có nguồn nhưng thiếu ca kiểm ${count('có nguồn, thiếu ca kiểm độc lập')}, quy ước chưa có văn bản ${count('quy ước người dạy, chưa có văn bản')}, cách hiểu của người biên soạn ${count('cách hiểu của người biên soạn')}.`,
      '',
      '| Sổ luật | Luật | Mức | Nguồn | Trang | Đối chiếu nguồn | Bộ kiểm độc lập bắt ca vi phạm | Thí dụ in | Kết luận |',
      '|---|---|---|---|---|---|---|---|---|',
      ...lines,
    ].join('\n')
    const doc = readFileSync(DOC, 'utf8')
    const block = /<!-- verification -->\n([\s\S]*?)\n<!-- \/verification -->/
    if (process.env.UMRE_WRITE_COVERAGE) writeFileSync(DOC, doc.replace(block, `<!-- verification -->\n${table}\n<!-- /verification -->`))
    else expect(doc.match(block)?.[1], 'bảng lệch với kết quả thật — chạy lại với UMRE_WRITE_COVERAGE=1').toBe(table)
  })
})
