import { Orchestrator } from './orchestration/orchestrator'
import { SolverRegistry, ValidatorRegistry } from './orchestration/registry'
import { counterpointRulebook } from './rulebook/counterpoint'
import { RulebookRegistry } from './rulebook/rulebook'
import { COUNTERPOINT_SOLVERS } from './solvers/counterpoint'
import { cspCounterpointSolver } from './solvers/csp'
import { COUNTERPOINT_VALIDATORS } from './validation/counterpoint'

/**
 * A ready engine: the counterpoint rulebook, its two validators, the page's two solvers and the shared constraint
 * search (umre.csp.counterpoint, asked for by id). Nothing in the app calls this
 * yet; the counterpoint page keeps using its own worker.
 */
export function createEngine() {
  const rulebooks = new RulebookRegistry()
  rulebooks.add(counterpointRulebook())
  const validators = new ValidatorRegistry()
  for (const v of COUNTERPOINT_VALIDATORS) validators.register(v)
  const solvers = new SolverRegistry()
  for (const s of COUNTERPOINT_SOLVERS) solvers.register(s)
  solvers.register(cspCounterpointSolver)
  return { rulebooks, validators, solvers, orchestrator: new Orchestrator(solvers, validators, rulebooks) }
}
