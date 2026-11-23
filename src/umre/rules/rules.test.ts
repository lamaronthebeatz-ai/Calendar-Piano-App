import { describe, expect, it } from 'vitest'
import { verify } from '../../features/counterpoint/verify'
import { fromCounterpoint } from '../repr/adapters/counterpoint'
import { intervalName } from '../repr/interval'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { auditRulebook } from '../rulebook/rulebook'
import { C, line } from '../testing/fixtures'
import { CHART_COUNTER, GOLD_SUSPENSIONS } from '../testing/gold'
import { verticals, type ConsonanceDef } from '../repr/texture'
import { COUNTERPOINT_RULES } from './counterpoint'
import { and, c, eq, evaluate, evalExpr, ge, oneOf, RuleError, v, type RuleDef } from './lang'
import { textureQueries } from './queries'

const rb = counterpointRulebook()
const CONS = rb.definitions.find((d) => d.id === 'def.dissonance')!.data as ConsonanceDef
const two = (upper: string, lower: string) => fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line(upper), line(lower)] })
const end = (s: ReturnType<typeof two>) => ({ n: Math.max(...s.voices.flatMap((x) => x.events.map((e) => (e.onset.n / e.onset.d + e.duration.n / e.duration.d) * 4))) / 4, d: 1 })
const queries = (s: ReturnType<typeof two>) => textureQueries({ score: s, lines: [], pairs: [[0, 1]], end: end(s), consonance: () => CONS })

describe('GĐ2 — ngôn ngữ luật: biểu diễn, đăng ký, đánh giá', () => {
  it('biểu thức là dữ liệu: so sánh, logic, tập hợp; đường dẫn thiếu là null', () => {
    const f = { a: 3, b: { x: 'P' }, z: null }
    expect(evalExpr(and(ge(v('a'), c(2)), oneOf(v('b.x'), ['P', 'M'])), f)).toBe(true)
    expect(evalExpr(eq(v('nope.deep'), c(null)), f)).toBe(true)
    expect(() => evalExpr(v('b'), f)).toThrow(RuleError)
  })
  it('luật tuần tự hoá JSON và đánh giá ra y hệt; truy vấn không có thì báo lỗi', () => {
    const s = two('G4:4 | A4:4 | F4:4', 'C4:4 | D4:4 | D4:4')
    const a = evaluate(COUNTERPOINT_RULES, queries(s), new Set())
    const b = evaluate(JSON.parse(JSON.stringify(COUNTERPOINT_RULES)) as RuleDef[], queries(s), new Set())
    expect(b.hits).toEqual(a.hits)
    expect(a.hits.map((h) => `${h.ruleId}@${h.item.at}`)).toContain('parallel@4')
    expect(() => evaluate([{ id: 'x', query: 'khong-co', require: c(true) }], queries(s), new Set())).toThrow(/không có truy vấn/)
  })
  it('mọi luật trong ngôn ngữ luật đều có trong sổ luật (cùng mã → cùng nguồn); sổ luật vẫn hợp lệ', () => {
    for (const r of COUNTERPOINT_RULES) expect(rb.rules.some((x) => x.id === r.id), r.id).toBe(true)
    expect(auditRulebook(rb)).toEqual([])
    for (const r of COUNTERPOINT_RULES) for (const e of r.exceptions ?? []) expect(rb.exceptions.some((x) => x.id === e.id)).toBe(true)
  })
  it('ngoại lệ chỉ nới luật khi được bật và đúng phạm vi', () => {
    // quarter tied over the bar line into a dissonance: the teacher's allowance; the same tie into a consonance is not covered
    const s = two('C5:2 B4:1 C5:1~ | C5:1 B4:1 A4:2 | C5:4', 'C4:4 | D4:4 | C4:4')
    const off = evaluate(COUNTERPOINT_RULES, textureQueries({ score: s, lines: [0], pairs: [[0, 1]], end: { n: 3, d: 1 }, consonance: () => CONS }), new Set())
    const on = evaluate(COUNTERPOINT_RULES, textureQueries({ score: s, lines: [0], pairs: [[0, 1]], end: { n: 3, d: 1 }, consonance: () => CONS }), new Set(['quarter-prep']))
    expect(off.hits.map((h) => h.ruleId)).toEqual(expect.arrayContaining(['tie', 'dis-strong']))
    expect(on.hits).toEqual([])
    expect(on.exceptions.map((x) => `${x.ruleId}:${x.exceptionId}`).sort()).toEqual(['dis-strong:quarter-prep', 'tie:quarter-prep'])
  })
})

describe('GĐ4 (bước 4) — đáp án chuẩn từ thí dụ giáo trình', () => {
  for (const g of GOLD_SUSPENSIONS) {
    it(`${g.id}: nốt lưu đúng số quãng, đúng bè, giải quyết như sách in — cả hai bộ kiểm độc lập đều chấp nhận`, () => {
      const s = two(g.upper, g.lower)
      const q = queries(s)
      const d = q['pair.dissonances']().find((x) => x.at === g.expect.at)!
      expect(d.facts).toMatchObject({ number: g.expect.number, held: g.expect.held, level: 3 })
      const res = verticals(s.voices[0], s.voices[1], end(s)).find((x) => x.at.n / x.at.d * 4 === g.expect.at + 2)!
      expect(intervalName(res.interval)).toBe(g.expect.resolvesTo)
      const ours = evaluate(COUNTERPOINT_RULES.filter((r) => r.id.startsWith('dis')), q, new Set()).hits.filter((h) => h.item.at === g.expect.at)
      expect(ours).toEqual([])
      const theirs = verify({ key: C, meter: { num: 2, den: 2 }, given: line(g.upper), givenIs: 'I', stars: [], versions: [], starsOnly: false, noLine: true }, line(g.lower)).filter((f) => f.t === g.expect.at)
      expect(theirs).toEqual([])
    })
  }
  for (const g of CHART_COUNTER) {
    it(`${g.id}: bị bác bởi cả hai bộ kiểm`, () => {
      const s = two(g.upper, g.lower)
      const q = queries(s)
      expect(q['pair.dissonances']().find((x) => x.at === g.expect.at)!.facts).toMatchObject({ number: g.expect.number, held: g.expect.held })
      expect(evaluate(COUNTERPOINT_RULES, q, new Set()).hits.filter((h) => h.item.at === g.expect.at).map((h) => h.ruleId)).toContain('dis-strong')
      expect(verify({ key: C, meter: { num: 2, den: 2 }, given: line(g.upper), givenIs: 'I', stars: [], versions: [], starsOnly: false, noLine: true }, line(g.lower)).some((f) => f.t === g.expect.at)).toBe(true)
    })
  }
})

describe('bất đồng đã biết với verify.ts (bộ luật UMRE chặt hơn, theo câu chữ)', () => {
  it('"nốt sớm" phải đúng cao độ nốt sau: Mi♯ → Mi không phải nốt sớm (verify.ts so theo tên nốt nên nhận)', () => {
    // a mutated solution observed in the differential run: F4 held into a fourth over C4 (bar 6), "resolving" to E♯4 —
    // an augmented third over C4 — then E4. E♯4 → E4 keeps the letter, not the pitch, so it is not an anticipation.
    const cp = 'G4:3 A4:1 | B4:1 C5:1 B4:2 | A4:3 B4:1 | C5:2 G4:2~ | G4:1 A4:1 F4:2~ | F4:2 E#4:1 E4:1'
    const cf = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
    const s = two(cp, cf)
    const ours = evaluate(COUNTERPOINT_RULES.filter((r) => r.id === 'dis-weak'), queries(s), new Set()).hits.map((h) => h.item.at)
    expect(ours).toContain(22)
    const theirs = verify({ key: C, meter: { num: 2, den: 2 }, given: line(cf), givenIs: 'II', stars: [], versions: [], starsOnly: false }, line(cp)).filter((f) => f.rule === 'dissonance' && f.t === 22)
    expect(theirs).toEqual([])
  })
})
