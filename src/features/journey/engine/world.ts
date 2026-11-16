import type { Save } from './save'
import { skillLevel } from './progression'
import type { Cond, Effect, QuestDef } from './types'

/**
 * Conditions and effects over the save. Pure: an effect returns a new save, nothing is written here.
 * Story scenes of the six original chapters keep their progress in `save.done` ("chapter/scene"); their quest ids are
 * `q:chapter/scene`, so a condition on such a quest reads that list (content/legacy.ts).
 */
export const questDone = (id: string, s: Save) => s.quests[id]?.status === 'done' || (id.startsWith('q:') && s.done.includes(id.slice(2)))

export function holds(c: Cond, s: Save): boolean {
  if ('flag' in c) return s.flags.includes(c.flag)
  if ('not' in c) return !holds(c.not, s)
  if ('all' in c) return c.all.every((x) => holds(x, s))
  if ('any' in c) return c.any.some((x) => holds(x, s))
  if ('quest' in c) return c.is === 'done' ? questDone(c.quest, s) : s.quests[c.quest]?.status === 'active'
  if ('stage' in c) return s.quests[c.of]?.stage === c.stage
  if ('solved' in c) return !!s.puzzles[c.solved]?.solved
  if ('evidence' in c) return s.cards.includes(c.evidence)
  if ('item' in c) return s.inventory.includes(c.item)
  if ('met' in c) return c.met in s.dialogue.topics
  if ('topic' in c) return !!s.dialogue.topics[c.with]?.includes(c.topic)
  if ('knows' in c) return s.codex.includes(c.knows)
  if ('skill' in c) return skillLevel(s.skills[c.skill] ?? 0) >= c.level
  if ('chapterOpen' in c) return s.chaptersOpen.includes(c.chapterOpen)
  if ('visited' in c) return s.visited.includes(c.visited)
  return false
}

const add = (xs: string[], x: string) => (xs.includes(x) ? xs : [...xs, x])

/** One effect. `quests` resolves a quest id to its definition (for its first stage). */
export function apply(e: Effect, s: Save, quests: (id: string) => QuestDef | undefined, now = Date.now()): Save {
  if ('set' in e) return { ...s, flags: add(s.flags, e.set) }
  if ('unset' in e) return { ...s, flags: s.flags.filter((f) => f !== e.unset) }
  if ('startQuest' in e) {
    const q = quests(e.startQuest)
    if (!q || s.quests[q.id] || questDone(q.id, s)) return s
    return { ...s, quests: { ...s.quests, [q.id]: { stage: q.stages[0].id, status: 'active', started: now } } }
  }
  if ('advance' in e) {
    const st = s.quests[e.advance]
    return st && st.status === 'active' ? { ...s, quests: { ...s.quests, [e.advance]: { ...st, stage: e.to } } } : s
  }
  if ('completeQuest' in e) {
    const st = s.quests[e.completeQuest]
    return st ? { ...s, quests: { ...s.quests, [e.completeQuest]: { ...st, status: 'done', done: now } } } : s
  }
  if ('give' in e) return { ...s, inventory: add(s.inventory, e.give) }
  if ('evidence' in e) return { ...s, cards: add(s.cards, e.evidence) }
  if ('discover' in e) return { ...s, codex: add(s.codex, e.discover) }
  if ('xp' in e) return { ...s, xp: s.xp + e.xp, skills: e.skill ? { ...s.skills, [e.skill]: (s.skills[e.skill] ?? 0) + e.xp } : s.skills }
  if ('remember' in e) return { ...s, dialogue: { ...s.dialogue, topics: { ...s.dialogue.topics, [e.with]: add(s.dialogue.topics[e.with] ?? [], e.remember) } } }
  if ('unlock' in e) return { ...s, flags: add(s.flags, `open:${e.unlock}`) }
  return s
}

export const applyAll = (effects: Effect[] | undefined, s: Save, quests: (id: string) => QuestDef | undefined, now = Date.now()) =>
  (effects ?? []).reduce((acc, e) => apply(e, acc, quests, now), s)
