import { Orchestrator } from './orchestration/orchestrator'
import { SolverRegistry, ValidatorRegistry } from './orchestration/registry'
import { counterpointRulebook } from './rulebook/counterpoint'
import { RulebookRegistry } from './rulebook/rulebook'
import { COUNTERPOINT_SOLVERS } from './solvers/counterpoint'
import { COUNTERPOINT_VALIDATORS } from './validation/counterpoint'

/**
 * A ready engine: the counterpoint rulebook, its two validators and its two solvers. Nothing in the app calls this
 * yet; the counterpoint page keeps using its own worker.
 */
export function createEngine() {
  const rulebooks = new RulebookRegistry()
  rulebooks.add(counterpointRulebook())
  const validators = new ValidatorRegistry()
  for (const v of COUNTERPOINT_VALIDATORS) validators.register(v)
  const solvers = new SolverRegistry()
  for (const s of COUNTERPOINT_SOLVERS) solvers.register(s)
  return { rulebooks, validators, solvers, orchestrator: new Orchestrator(solvers, validators, rulebooks) }
}
