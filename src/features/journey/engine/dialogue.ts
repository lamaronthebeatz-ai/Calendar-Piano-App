import type { Save } from './save'
import { holds } from './world'
import type { DialogueDef, DNode, Effect } from './types'

/**
 * Branching dialogue: a graph of nodes. A node whose condition fails is passed over (its `next`); choices whose
 * condition fails are hidden. The runner never loops by itself — every move is the player's tap or choice.
 */
export function enter(d: DialogueDef, id: string, s: Save): string | null {
  const seen = new Set<string>()
  let at: string | undefined = id
  while (at && !seen.has(at)) {
    seen.add(at)
    const n: DNode | undefined = d.nodes[at]
    if (!n) return null
    if (!n.when || holds(n.when, s)) return at
    at = n.next
  }
  return null
}

export const choicesOf = (n: DNode, s: Save) => (n.choices ?? []).map((c, i) => ({ ...c, i })).filter((c) => !c.when || holds(c.when, s))

/** Moving on from a node: by its `next`, or by the choice taken. Returns the next node shown and the effects to apply. */
export function step(d: DialogueDef, at: string, s: Save, choice?: number): { next: string | null; effects: Effect[] } {
  const n = d.nodes[at]
  if (!n) return { next: null, effects: [] }
  const effects = [...(n.effects ?? [])]
  if (n.choices?.length) {
    const c = n.choices[choice ?? -1]
    if (!c || (c.when && !holds(c.when, s))) return { next: at, effects: [] }
    return { next: enter(d, c.next, s), effects: [...effects, ...(c.effects ?? [])] }
  }
  return { next: n.end || !n.next ? null : enter(d, n.next, s), effects }
}

/**
 * Structural checks: every link points at a node, every node is reachable, every node can reach an end (no dead
 * end, no loop without a way out), and a node with choices offers at least one without a condition or has a `next`.
 */
export function analyzeDialogue(d: DialogueDef): string[] {
  const errs: string[] = []
  const out = (id: string) => {
    const n = d.nodes[id]
    return [...(n.next ? [n.next] : []), ...(n.choices ?? []).map((c) => c.next)]
  }
  if (!d.nodes[d.start]) errs.push(`${d.id}: start ${d.start} không có`)
  for (const [id, n] of Object.entries(d.nodes)) {
    for (const t of out(id)) if (!d.nodes[t]) errs.push(`${d.id}/${id}: tới ${t} không có`)
    if (!n.end && !n.next && !n.choices?.length) errs.push(`${d.id}/${id}: ngõ cụt (không next, không lựa chọn, không end)`)
    if (n.choices?.length && n.choices.every((c) => c.when) && !n.next) errs.push(`${d.id}/${id}: mọi lựa chọn đều có điều kiện — có thể không còn lựa chọn nào`)
    if (n.voice === 'quote' && !n.quote?.source) errs.push(`${d.id}/${id}: trích nguyên văn mà không có nguồn`)
    // a node passed over (condition false) continues at `next`; without one the conversation would stop silently
    if (n.when && !n.next && !n.end) errs.push(`${d.id}/${id}: có điều kiện nhưng không có next để đi tiếp khi bị bỏ qua`)
  }
  if (errs.length) return errs
  const reach = new Set<string>()
  const walk = (id: string) => {
    if (reach.has(id)) return
    reach.add(id)
    out(id).forEach(walk)
  }
  walk(d.start)
  for (const id of Object.keys(d.nodes)) if (!reach.has(id)) errs.push(`${d.id}/${id}: không tới được từ đầu`)
  // nodes that can reach an end, by walking edges backwards from the ends
  const ok = new Set(Object.entries(d.nodes).filter(([, n]) => n.end).map(([id]) => id))
  for (let grew = true; grew; ) {
    grew = false
    for (const id of Object.keys(d.nodes))
      if (!ok.has(id) && out(id).some((t) => ok.has(t))) {
        ok.add(id)
        grew = true
      }
  }
  for (const id of reach) if (!ok.has(id)) errs.push(`${d.id}/${id}: không đi được tới kết thúc (vòng lặp kín)`)
  return errs
}
