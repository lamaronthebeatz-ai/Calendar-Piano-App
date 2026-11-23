import type { ConsonanceDef } from '../repr/texture'
import type { Rulebook } from '../rulebook/rulebook'
import { abs, and, c, eq, ge, le, lt, ne, not, oneOf, or, sign, v, type Expr, type RuleDef } from './lang'

/**
 * The hard rules of strict two-voice counterpoint in the rule language. Written from the WORDS of the textbook as
 * summarised in the library article `doi-vi-don-gian-hai-be` / `giai-dieu-phuc-dieu-nghiem-khac` (pages in
 * rulebook/counterpoint.ts) and the audit table in docs/notes/counterpoint.md — not from features/counterpoint
 * (rules.ts, verify.ts). Where the two readings differ, the validator reports a dispute instead of hiding it.
 */

const C = (x: string) => v(x)
// "quãng 2 (số 1) luôn ở bè dưới; quãng 7 (số 6) luôn ở bè trên; 4 (số 3) và 9 (số 8) trên hoặc dưới; 11 (số 10), 14 (số 13) trên" — sơ đồ 2, tr. 11.
// Numbers the chart does not list (diminished fifth = 4, …) are allowed: the audit marks them "cần xác minh".
const positionOk: Expr = or(
  not(oneOf(C('number'), [1, 3, 6, 8, 10, 13])),
  and(eq(C('number'), c(1)), eq(C('held'), c('lower'))),
  and(oneOf(C('number'), [3, 8]), oneOf(C('held'), ['upper', 'lower'])),
  and(oneOf(C('number'), [6, 10, 13]), eq(C('held'), c('upper'))),
)
// "chuẩn bị bằng quãng thuận … trường độ nốt chuẩn bị ≥ nốt lưu … giải quyết đi xuống liền bậc" (tr. 10); "thuận – nghịch – thuận".
// Special resolutions (tr. 12–13): the free voice may leap at the resolution (it is consonant there), or the dissonant note may
// leap to a consonance and then step down.
const suspensionBody = (minPrep: number): Expr =>
  and(
    oneOf(C('held'), ['upper', 'lower']),
    // crossed voices are already a fault; no suspension is recognised across them
    eq(C('crossed'), c(false)),
    positionOk,
    ge(C('prepDur'), c(minPrep)),
    ge(C('prepDur'), C('restDur')),
    eq(C('prepConsonant'), c(true)),
    or(
      and(eq(C('resolutionStep'), c(-1)), eq(C('resolutionConsonant'), c(true)), eq(C('freeStrikesBefore'), c(false))),
      and(eq(C('ornamented'), c(true)), eq(C('freeStrikesBefore'), c(false))),
      // versions only (chuyển động chiều dọc, nguyên tắc 3): the resolution may pass through a dissonance
      and(eq(C('inVersion'), c(true)), eq(C('passingResolution'), c(true)), eq(C('freeStrikesBefore'), c(false))),
    ),
  )
const suspension = suspensionBody(2)
// "nốt lướt, nốt thêu, nốt sớm, nốt thoát (= thêu dưới rồi nhảy xuống quãng 3)" (tr. 11–12), for the voice that strikes.
const figure = (s: 'u' | 'l'): Expr =>
  and(
    eq(C(`struck${s.toUpperCase()}`), c(true)),
    or(
      and(eq(abs(C(`${s}In`)), c(1)), eq(C(`${s}Out`), C(`${s}In`))), // passing
      and(eq(abs(C(`${s}In`)), c(1)), eq({ op: 'add', args: [C(`${s}In`), C(`${s}Out`)] }, c(0))), // neighbour: back where it came from
      // anticipation: the next note repeats it. Approached by step: the book names the nốt thoát as THE leap around a dissonance
      and(eq(abs(C(`${s}In`)), c(1)), eq(C(`${s}Same`), c(true))),
      and(eq(C(`${s}In`), c(-1)), eq(C(`${s}Out`), c(-2))), // nốt thoát
    ),
  )
const flanked = and(or(eq(C('prevConsonant'), c(true)), and(eq(C('inVersion'), c(true)), eq(C('afterSuspension'), c(true)))), eq(C('nextConsonant'), c(true)))

export const COUNTERPOINT_RULES: RuleDef[] = [
  // giai điệu (tr. 6–8)
  {
    id: 'leap', query: 'line.steps',
    require: or(
      and(eq(C('absSteps'), c(0)), eq(C('semitones'), c(0))),
      and(oneOf(C('absSteps'), [1, 2, 5]), oneOf(C('quality'), ['m', 'M'])),
      and(oneOf(C('absSteps'), [3, 4, 7]), eq(C('quality'), c('P'))),
    ),
  },
  { id: 'leap-response', query: 'line.triples', when: ge(abs(C('leap')), c(3)), require: and(ne(C('next'), c(0)), ne(sign(C('next')), sign(C('leap')))) },
  { id: 'leap3-response', query: 'line.triples', when: eq(abs(C('leap')), c(2)), require: and(ne(C('next'), c(0)), ne(sign(C('next')), sign(C('leap')))) },
  { id: 'repeat3', query: 'line.triples', require: not(and(eq(C('zMidi'), C('aMidi')), eq(C('aMidi'), C('bMidi')))) },
  { id: 'no-gap', query: 'line.events', require: and(ne(C('kind'), c('rest')), eq(C('gapBefore'), c(false))) },
  { id: 'end', query: 'line.end', require: eq(C('endsAt'), C('pieceEnd')) },
  // "không đảo phách, nghịch phách" (tr. 8): a note does not run through a stronger position than the one it starts on, nor over the bar line
  { id: 'seg-place', query: 'line.segments', require: and(eq(C('crossesStronger'), c(false)), eq(C('crossesBar'), c(false))) },
  // "không nối nốt đen, không nối nốt ngắn sang nốt dài hơn (trừ trắng sang tròn)" (tr. 8)
  {
    id: 'tie', query: 'line.ties',
    require: and(eq(C('samePitch'), c(true)), ge(C('prevDur'), c(2)), or(ge(C('prevDur'), C('dur')), and(eq(C('prevDur'), c(2)), eq(C('dur'), c(4))))),
    exceptions: [{ id: 'quarter-prep', applies: and(eq(C('samePitch'), c(true)), eq(C('prevDur'), c(1)), le(C('dur'), c(1)), eq(C('overBar'), c(true)), eq(C('intoDissonance'), c(true))) }],
  },
  // "đổi sang nốt ngắn hơn ở phách mạnh phải chuẩn bị bằng nốt lưu" (tr. 8): a note STRUCK on the downbeat is not shorter than the one before
  { id: 'rhythm-change', query: 'line.steps', when: eq(C('bLevel'), c(3)), require: ge(C('bDur'), C('aDur')) },
  // chiều dọc (tr. 9–10)
  { id: 'crossing', query: 'pair.verticals', require: ge(C('steps'), c(0)) },
  { id: 'parallel', query: 'pair.verticals', when: and(eq(C('movedU'), c(true)), eq(C('movedL'), c(true)), eq(C('dirU'), C('dirL')), ne(C('prevCls'), c(null))), require: ne(C('prevCls'), C('cls')) },
  { id: 'perfects3', query: 'pair.verticals', require: not(and(ne(C('prevPrevCls'), c(null)), ne(C('prevCls'), c(null)), ne(C('cls'), c(null)))) },
  // ba – bốn bè (tr. 37–45; "không được" tr. 41–43)
  {
    id: 'hidden-hard', query: 'pair.verticals',
    when: and(eq(C('movedU'), c(true)), eq(C('movedL'), c(true)), eq(C('dirU'), C('dirL')), ne(C('cls'), c(null)), ne(C('prevCls'), C('cls'))),
    require: not(or(eq(C('outerSomewhere'), c(true)), and(eq(C('outer'), c(true)), ge(C('upperLeap'), c(2))))),
  },
  // quãng nghịch (tr. 10–13)
  {
    id: 'dis-strong', query: 'pair.dissonances', when: eq(C('level'), c(3)),
    require: and(eq(C('prevConsonant'), c(true)), suspension),
    exceptions: [{ id: 'quarter-prep', applies: and(eq(C('prevConsonant'), c(true)), eq(C('prepDur'), c(1)), suspensionBody(1)) }],
  },
  // "ở phách mạnh … chủ yếu là nốt lưu"; on a weak BEAT a held note may still be a suspension, between beats only a figure moves
  { id: 'dis-weak', query: 'pair.dissonances', when: lt(C('level'), c(3)), require: and(flanked, or(figure('u'), figure('l'), and(eq(C('level'), c(2)), suspension))) },
  // ✱ — the exercise's own convention
  { id: 'star', query: 'pair.stars', require: eq(C('sounding'), c(true)) },
  { id: 'star', query: 'pair.verticals', when: eq(C('star'), c(true)), require: eq(C('cons'), c('dissonant')) },
  { id: 'star-extra', query: 'pair.verticals', when: and(eq(C('starsOnly'), c(true)), eq(C('level'), c(3)), eq(C('cons'), c('dissonant'))), require: eq(C('star'), c(true)) },
]

/** Rules judged in every version (vertical ones; the ✱ convention belongs to the original only). */
export const VERSION_RULES = COUNTERPOINT_RULES.filter((r) => r.query.startsWith('pair.') && !r.id.startsWith('star'))

/** The rulebook's consonance table (def.dissonance); the rules cannot run without it. */
export function consonanceOf(rb: Rulebook): ConsonanceDef {
  const d = rb.definitions.find((x) => x.id === 'def.dissonance')?.data as ConsonanceDef | undefined
  if (!d?.perfect || !d.imperfect) throw new Error(`sổ luật ${rb.id} không có bảng quãng thuận (def.dissonance.data)`)
  return d
}
