import { checkPuzzle, type Result } from './puzzles'
import { recordAttempt } from './progression'
import { settleQuests } from './quest'
import type { Save } from './save'
import type { ArcDef, Effect, LocationDef } from './types'
import { applyAll, holds } from './world'

/**
 * What the arc screen does with a tap: every action is a pure function save → save (the screen writes the result),
 * and every one ends by letting active quests move on.
 */
const defsOf = (arc: ArcDef) => (id: string) => arc.quests.find((q) => q.id === id)
const settle = (arc: ArcDef, s: Save) => settleQuests(s, defsOf(arc))

export const isOpen = (l: LocationDef, s: Save) => (!l.hidden || s.flags.includes(`open:${l.id}`)) && (!l.unlock || holds(l.unlock, s))
export const visibleLocations = (arc: ArcDef, s: Save) => arc.locations.filter((l) => isOpen(l, s))

export function effects(arc: ArcDef, list: Effect[] | undefined, s: Save): Save {
  return settle(arc, applyAll(list, s, defsOf(arc)))
}

export function enter(arc: ArcDef, l: LocationDef, s: Save): Save {
  const visited = s.visited.includes(l.id) ? s : { ...s, visited: [...s.visited, l.id] }
  return effects(arc, l.onEnter, visited)
}

export function attempt(arc: ArcDef, puzzleId: string, given: unknown, hints: number, s: Save): { save: Save; result: Result } {
  const p = arc.puzzles.find((x) => x.id === puzzleId)
  if (!p) return { save: s, result: { ok: false, wrong: [] } }
  const result = checkPuzzle(p, given)
  return { save: settle(arc, { ...s, ...recordAttempt(s, p, result.ok, hints) }), result }
}

/** The stage the main quest is at, or null before it starts / after it ends. */
export function currentStage(arc: ArcDef, s: Save, questId = arc.main) {
  const q = arc.quests.find((x) => x.id === questId)
  const st = s.quests[questId]
  if (!q || !st || st.status !== 'active') return null
  return q.stages.find((x) => x.id === st.stage) ?? null
}
