/**
 * The UMRE rule language (stage 2). A rule is DATA: which query produces the items it judges, an optional filter,
 * the condition every item must meet, and exceptions that lift it in a stated scope. Items are plain facts computed
 * by a domain's queries (repr/texture.ts underneath); the condition is a small expression tree over those facts.
 * Rules serialise to JSON, are registered with their rulebook (same ids, so every verdict carries its sources), and
 * are evaluated here — one interpreter for every domain.
 */
export type Value = number | string | boolean | null
export type Expr =
  | { readonly var: string }
  | { readonly const: Value }
  | { readonly op: 'eq' | 'ne' | 'lt' | 'le' | 'gt' | 'ge'; readonly args: readonly [Expr, Expr] }
  | { readonly op: 'and' | 'or'; readonly args: readonly Expr[] }
  | { readonly op: 'not' | 'abs' | 'sign'; readonly arg: Expr }
  | { readonly op: 'in'; readonly arg: Expr; readonly values: readonly Value[] }
  | { readonly op: 'add'; readonly args: readonly [Expr, Expr] }

export type RuleDef = {
  /** the rulebook rule this implements */
  readonly id: string
  /** query name in the domain's query set */
  readonly query: string
  readonly when?: Expr
  readonly require: Expr
  /** exception ids (rulebook ExceptionSpec) with the condition under which each lifts the rule for an item */
  readonly exceptions?: readonly { readonly id: string; readonly applies: Expr }[]
}

/** An item a query yields: facts, plus where it is (for the violation's location). */
export type Item = { readonly at: number; readonly voices: readonly number[]; readonly ids?: readonly string[]; readonly facts: Readonly<Record<string, unknown>> }
export type Queries = Readonly<Record<string, () => Item[]>>

export type RuleHit = { readonly ruleId: string; readonly item: Item }
export type ExceptionUse = { readonly ruleId: string; readonly exceptionId: string; readonly item: Item }

export class RuleError extends Error {}

function lookup(facts: Readonly<Record<string, unknown>>, path: string): Value {
  let x: unknown = facts
  for (const k of path.split('.')) {
    if (x === null || x === undefined) return null
    x = (x as Record<string, unknown>)[k]
  }
  if (x === undefined) return null
  if (x !== null && typeof x === 'object') throw new RuleError(`"${path}" là đối tượng, không phải giá trị`)
  return x as Value
}

export function evalExpr(e: Expr, facts: Readonly<Record<string, unknown>>): Value {
  if ('var' in e) return lookup(facts, e.var)
  if ('const' in e) return e.const
  switch (e.op) {
    case 'and':
      return e.args.every((a) => evalExpr(a, facts) === true)
    case 'or':
      return e.args.some((a) => evalExpr(a, facts) === true)
    case 'not':
      return evalExpr(e.arg, facts) !== true
    case 'abs': {
      const v = evalExpr(e.arg, facts)
      return typeof v === 'number' ? Math.abs(v) : null
    }
    case 'sign': {
      const v = evalExpr(e.arg, facts)
      return typeof v === 'number' ? Math.sign(v) : null
    }
    case 'in':
      return e.values.includes(evalExpr(e.arg, facts))
    case 'add': {
      const [a, b] = e.args.map((x) => evalExpr(x, facts))
      return typeof a === 'number' && typeof b === 'number' ? a + b : null
    }
    default: {
      const [a, b] = e.args.map((x) => evalExpr(x, facts))
      if (e.op === 'eq') return a === b
      if (e.op === 'ne') return a !== b
      if (typeof a !== 'number' || typeof b !== 'number') return false
      return e.op === 'lt' ? a < b : e.op === 'le' ? a <= b : e.op === 'gt' ? a > b : a >= b
    }
  }
}

/** Run rules over a query set. `enabled`: exception ids switched on for this task (the rest never apply). */
export function evaluate(rules: readonly RuleDef[], q: Queries, enabled: ReadonlySet<string>): { hits: RuleHit[]; exceptions: ExceptionUse[]; judged: Set<string> } {
  const hits: RuleHit[] = []
  const exceptions: ExceptionUse[] = []
  const judged = new Set<string>()
  const cache = new Map<string, Item[]>()
  for (const r of rules) {
    const make = q[r.query]
    if (!make) throw new RuleError(`luật ${r.id}: không có truy vấn "${r.query}"`)
    if (!cache.has(r.query)) cache.set(r.query, make())
    judged.add(r.id)
    for (const item of cache.get(r.query)!) {
      if (r.when && evalExpr(r.when, item.facts) !== true) continue
      if (evalExpr(r.require, item.facts) === true) continue
      const ex = r.exceptions?.find((x) => enabled.has(x.id) && evalExpr(x.applies, item.facts) === true)
      if (ex) exceptions.push({ ruleId: r.id, exceptionId: ex.id, item })
      else hits.push({ ruleId: r.id, item })
    }
  }
  return { hits, exceptions, judged }
}

/** Shorthands for writing rules as data. */
export const v = (name: string): Expr => ({ var: name })
export const c = (value: Value): Expr => ({ const: value })
export const eq = (a: Expr, b: Expr): Expr => ({ op: 'eq', args: [a, b] })
export const ne = (a: Expr, b: Expr): Expr => ({ op: 'ne', args: [a, b] })
export const lt = (a: Expr, b: Expr): Expr => ({ op: 'lt', args: [a, b] })
export const le = (a: Expr, b: Expr): Expr => ({ op: 'le', args: [a, b] })
export const ge = (a: Expr, b: Expr): Expr => ({ op: 'ge', args: [a, b] })
export const gt = (a: Expr, b: Expr): Expr => ({ op: 'gt', args: [a, b] })
export const and = (...args: Expr[]): Expr => ({ op: 'and', args })
export const or = (...args: Expr[]): Expr => ({ op: 'or', args })
export const not = (arg: Expr): Expr => ({ op: 'not', arg })
export const abs = (arg: Expr): Expr => ({ op: 'abs', arg })
export const sign = (arg: Expr): Expr => ({ op: 'sign', arg })
export const oneOf = (arg: Expr, values: Value[]): Expr => ({ op: 'in', arg, values })
export const T: Expr = { const: true }
