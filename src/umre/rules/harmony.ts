import { and, c, eq, ge, le, ne, not, oneOf, v, type RuleDef } from './lang'

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
]

