import { Orchestrator } from './orchestration/orchestrator'
import { SolverRegistry, ValidatorRegistry } from './orchestration/registry'
import { counterpointRulebook } from './rulebook/counterpoint'
import { RulebookRegistry } from './rulebook/rulebook'
import { COUNTERPOINT_SOLVERS } from './solvers/counterpoint'
import { cspCounterpointSolver, cspHarmonySolver } from './solvers/csp'
import { harmonyRulebook } from './rulebook/harmony'
import { harmonyValidator } from './validation/harmony'
import { COUNTERPOINT_VALIDATORS } from './validation/counterpoint'

/**
 * A ready engine: the counterpoint rulebook, its two validators, the page's two solvers and the shared constraint
 * search (umre.csp.counterpoint, asked for by id). Nothing in the app calls this
 * yet; the counterpoint page keeps using its own worker.
 */
export function createEngine() {
  const rulebooks = new RulebookRegistry()
  rulebooks.add(counterpointRulebook())
  rulebooks.add(harmonyRulebook())
  const validators = new ValidatorRegistry()
  for (const v of COUNTERPOINT_VALIDATORS) validators.register(v)
  validators.register(harmonyValidator)
  const solvers = new SolverRegistry()
  for (const s of COUNTERPOINT_SOLVERS) solvers.register(s)
  solvers.register(cspCounterpointSolver)
  // a second domain on the shared engine: four-part harmony (rulebook + rules + domain model only)
  solvers.register(cspHarmonySolver)
  return { rulebooks, validators, solvers, orchestrator: new Orchestrator(solvers, validators, rulebooks) }
}
