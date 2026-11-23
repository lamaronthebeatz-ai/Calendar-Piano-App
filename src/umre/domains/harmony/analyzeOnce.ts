import { analyze, type Analysis } from '../../../features/analyze/engine'
import { toCompose } from '../../repr/adapters/compose'
import type { Score } from '../../repr/score'

/**
 * One /analyze run per score object, shared by the modules that read it (harmony.tonal, form.sections): the engine is
 * deterministic for a given score and options, so the second module gets the very same result instead of recomputing
 * it. A WeakMap: the entry goes when the score does (no unbounded cache). Callers must not mutate the result.
 */
const memo = new WeakMap<Score, Analysis>()
export function analyzeOnce(s: Score): Analysis {
  let a = memo.get(s)
  if (!a) memo.set(s, (a = analyze(toCompose(s), { lens: 'classical' })))
  return a
}
