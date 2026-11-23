import { abs, and, c, eq, ge, le, ne, not, oneOf, or, sign, v, type Expr, type RuleDef } from './lang'

const plus = (a: Expr, b: Expr): Expr => ({ op: 'add', args: [a, b] })
const P = 'harmony.progression'

/**
 * The four-part harmony rules in the rule language (rulebook/harmony.ts for statements and pages). Same interpreter,
 * same queries as counterpoint; only the conditions differ.
 */
export const HARMONY_RULES: RuleDef[] = [
  { id: 'h.chord-tones', query: 'texture.sonorities', require: and(eq(v('complete'), c(true)), eq(v('allMembers'), c(true))) },
  { id: 'h.root-position', query: 'texture.sonorities', when: eq(v('complete'), c(true)), require: eq(v('bassMember'), c(0)) },
  // a root-position triad in four voices: root twice, third once, fifth once
  { id: 'h.double-root', query: 'texture.sonorities', when: and(eq(v('complete'), c(true)), eq(v('allMembers'), c(true)), eq(v('sevenths'), c(0))), require: and(eq(v('roots'), c(2)), eq(v('thirds'), c(1)), eq(v('fifths'), c(1))) },
  { id: 'h.spacing', query: 'pair.verticals', when: eq(v('adjacentUpper'), c(true)), require: le(v('steps'), c(5)) },
  // both voices move and the perfect interval class repeats (similar or contrary motion alike)
  { id: 'h.parallels', query: 'pair.verticals', when: and(eq(v('movedU'), c(true)), eq(v('movedL'), c(true)), ne(v('prevCls'), c(null))), require: ne(v('prevCls'), v('cls')) },
  { id: 'h.augmented', query: 'line.steps', require: not(oneOf(v('quality'), ['A', 'AA', 'AAA'])) },
  { id: 'h.crossing', query: 'pair.verticals', require: ge(v('steps'), c(0)) },
  // § 11 (tr. 21): connecting two different triads with the root doubled — no upper voice moves more than a third
  // (the soprano is the given melody: § 13 rule 3 governs its leaps), so alto and tenor only
  { id: 'h.upper-third', query: P, when: and(ne(v('prevDegree'), c(null)), ne(v('relation'), c('same')), eq(v('complete'), c(true))), require: and(le(abs(v('aSteps')), c(2)), le(abs(v('tSteps')), c(2))) },
  // § 11 (tr. 21): roots a second apart — the three upper voices move against the bass
  {
    id: 'h.second-relation', query: P, when: and(eq(v('relation'), c('second')), eq(v('complete'), c(true))),
    require: and(ne(v('bDir'), c(0)), eq(plus(v('sDir'), v('bDir')), c(0)), eq(plus(v('aDir'), v('bDir')), c(0)), eq(plus(v('tDir'), v('bDir')), c(0))),
  },
]

/** Rules on the CHOICE of chords (melody harmonization, § 13 / tr. 23 – 25): not applicable when the chords are given. */
export const CHOICE_RULES: RuleDef[] = [
  { id: 'h.primary-only', query: P, require: oneOf(v('degree'), [0, 3, 4]) },
  { id: 'h.tonic-frame', query: P, when: or(eq(v('first'), c(true)), eq(v('last'), c(true))), require: eq(v('degree'), c(0)) },
  { id: 'h.no-v-iv', query: P, when: eq(v('prevDegree'), c(4)), require: ne(v('degree'), c(3)) },
  { id: 'h.leap-same-chord', query: P, when: and(eq(v('complete'), c(true)), ge(abs(v('sSteps')), c(3))), require: eq(v('sameChord'), c(true)) },
  { id: 'h.leading-tone', query: P, when: and(eq(v('complete'), c(true)), eq(v('prevDegree'), c(4)), eq(v('degree'), c(0)), eq(v('prevSopDegree'), c(6))), require: eq(v('sSteps'), c(1)) },
  // recommendations (soft): ranking only
  { id: 'h.repeat-change', query: P, when: and(eq(v('complete'), c(true)), eq(v('sSame'), c(true))), require: not(and(eq(v('sameChord'), c(true)), eq(v('sameVoicing'), c(true)))) },
  { id: 'h.strong-weak', query: P, when: and(eq(v('complete'), c(true)), eq(v('strong'), c(true)), eq(v('prevStrong'), c(false))), require: eq(v('sameChord'), c(false)) },
  {
    id: 'h.bass-fourths', query: P, when: and(eq(v('complete'), c(true)), ne(v('prevBSteps'), c(null)), ge(abs(v('bSteps')), c(3)), le(abs(v('bSteps')), c(4)), ge(abs(v('prevBSteps')), c(3)), le(abs(v('prevBSteps')), c(4))),
    require: ne(sign(v('bSteps')), sign(v('prevBSteps'))),
  },
]
export const CHOICE_RULE_IDS = new Set(CHOICE_RULES.map((r) => r.id))

