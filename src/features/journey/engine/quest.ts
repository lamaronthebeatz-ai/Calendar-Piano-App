import type { Save } from './save'
import { applyAll, holds } from './world'
import type { Objective, QuestDef } from './types'

/**
 * Quests: a quest is in one stage at a time; a stage is done when all its objectives are met, then its effects run and
 * the quest moves on (a fixed next stage, or the first branch whose condition holds), or ends with its rewards.
 */
export function met(o: Objective, s: Save): boolean {
  if ('talk' in o) return o.talk in s.dialogue.topics
  if ('visit' in o) return s.visited.includes(o.visit)
  if ('solve' in o) return !!s.puzzles[o.solve]?.solved
  if ('collect' in o) return s.cards.includes(o.collect) || s.inventory.includes(o.collect)
  return holds(o.cond, s)
}

const nextOf = (q: QuestDef, stage: QuestDef['stages'][number], s: Save) => {
  if (typeof stage.next === 'string') return stage.next
  if (Array.isArray(stage.next)) return stage.next.find((b) => holds(b.when, s))?.to ?? null
  const i = q.stages.indexOf(stage)
  return q.stages[i + 1]?.id ?? null
}

/**
 * Moves every active quest on as far as its objectives allow (a stage whose objectives are already met is passed at
 * once). Bounded by the number of stages, so a badly written quest cannot spin.
 */
export function settleQuests(s: Save, defs: (id: string) => QuestDef | undefined, now = Date.now()): Save {
  let out = s
  for (const [id, st] of Object.entries(s.quests)) {
    const q = defs(id)
    if (!q || st.status !== 'active') continue
    for (let guard = 0; guard <= q.stages.length; guard++) {
      const cur = out.quests[id]
      const stage = q.stages.find((x) => x.id === cur.stage)
      if (!stage || cur.status !== 'active' || !stage.objectives.every((o) => met(o, out))) break
      out = applyAll(stage.onDone, out, defs, now)
      const next = nextOf(q, stage, out)
      if (next) out = { ...out, quests: { ...out.quests, [id]: { ...out.quests[id], stage: next } } }
      else {
        out = { ...out, quests: { ...out.quests, [id]: { ...out.quests[id], status: 'done', done: now } } }
        out = applyAll(q.rewards, out, defs, now)
        break
      }
    }
  }
  return out
}

/** Structure: stage ids unique, every `next` exists, every stage reachable from the first, the last ones end. */
export function analyzeQuest(q: QuestDef): string[] {
  const errs: string[] = []
  const ids = q.stages.map((x) => x.id)
  if (!ids.length) return [`${q.id}: không có giai đoạn`]
  if (new Set(ids).size !== ids.length) errs.push(`${q.id}: trùng id giai đoạn`)
  const nexts = (i: number) => {
    const st = q.stages[i]
    if (typeof st.next === 'string') return [st.next]
    if (Array.isArray(st.next)) return st.next.map((b) => b.to)
    return q.stages[i + 1] ? [q.stages[i + 1].id] : []
  }
  q.stages.forEach((st, i) => nexts(i).forEach((t) => !ids.includes(t) && errs.push(`${q.id}/${st.id}: tới ${t} không có`)))
  for (const st of q.stages) if (!st.objectives.length) errs.push(`${q.id}/${st.id}: giai đoạn không có mục tiêu`)
  const reach = new Set<string>()
  const walk = (id: string) => {
    if (reach.has(id) || !ids.includes(id)) return
    reach.add(id)
    nexts(ids.indexOf(id)).forEach(walk)
  }
  walk(ids[0])
  for (const id of ids) if (!reach.has(id)) errs.push(`${q.id}/${id}: không tới được`)
  return errs
}
