import { analyze, type Analysis } from '../../../features/analyze/engine'
import type { Key } from '../../../features/analyze/engine/key'
import { toCompose } from '../../repr/adapters/compose'
import type { Score } from '../../repr/score'

/** The analyst's global key as a request carries it in `context.globalKey` (step 0–6 from C, alter, minor). */
export type GlobalKey = { readonly step: number; readonly alter: number; readonly minor: boolean }
export function globalKeyOf(context: Readonly<Record<string, unknown>> | undefined): GlobalKey | null {
  const k = context?.globalKey as GlobalKey | undefined
  return k && Number.isInteger(k.step) && k.step >= 0 && k.step <= 6 && Number.isInteger(k.alter) && Math.abs(k.alter) <= 2 && typeof k.minor === 'boolean' ? k : null
}
const toKey = (k: GlobalKey): Key => ({ tonic: { step: k.step, alter: k.alter }, minor: k.minor })

/**
 * One /analyze run per score object and global key, shared by the modules that read it (harmony.tonal, form.sections):
 * the engine is deterministic for a given score and options, so the second module gets the very same result instead
 * of recomputing it. A WeakMap: the entry goes when the score does (no unbounded cache). Callers must not mutate it.
 */
const memo = new WeakMap<Score, Map<string, Analysis>>()
export function analyzeOnce(s: Score, home?: GlobalKey | null): Analysis {
  const id = home ? `${home.step}.${home.alter}.${home.minor ? 'm' : 'M'}` : '-'
  let m = memo.get(s)
  if (!m) memo.set(s, (m = new Map()))
  let a = m.get(id)
  if (!a) m.set(id, (a = analyze(toCompose(s), { lens: 'classical', ...(home ? { home: toKey(home) } : {}) })))
  return a
}
