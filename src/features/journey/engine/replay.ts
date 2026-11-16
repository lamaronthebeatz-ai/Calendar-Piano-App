import type { MasteryState, Save } from './save'
import { APPLIED, masteryOf } from './progression'
import type { PuzzleDef } from './types'

/**
 * Playing again: how hard the endless road should be (from what the player actually gets right, not from their level),
 * the daily challenge, spaced review of solved puzzles, replaying a chapter and the New Game+.
 */

export type Level = 'de' | 'vua' | 'kho'
export const LEVEL_LABEL: Record<Level, string> = { de: 'dễ', vua: 'vừa', kho: 'khó' }

/** From the last answers (right at first try or not): fewer than 5 → middle; ≥ 80 % → hard; ≤ 50 % → easy. */
export function levelFrom(recent: boolean[]): Level {
  const r = recent.slice(-20)
  if (r.length < 5) return 'vua'
  const rate = r.filter(Boolean).length / r.length
  return rate >= 0.8 ? 'kho' : rate <= 0.5 ? 'de' : 'vua'
}

/** Kinds of generated question and how often each comes up at a level: years and anecdotes are the hard ones. */
export const KIND_WEIGHTS: Record<Level, Record<'event' | 'year' | 'work' | 'claim', number>> = {
  de: { event: 3, year: 1, work: 3, claim: 1 },
  vua: { event: 2, year: 1, work: 1, claim: 2 },
  kho: { event: 1, year: 3, work: 1, claim: 3 },
}

/** "2026-11-16" in the player's own time zone: the daily challenge changes at their midnight. */
export const today = (now = new Date()) => `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

/** The same seed for everyone on the same day. */
export function dailySeed(date: string) {
  let h = 2166136261
  for (const c of date) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return (h >>> 0) || 1
}

/** The day's chapter, among those the player has open (the daily never reaches beyond where they are). */
export const dailyChapter = (date: string, open: string[]) => (open.length ? open[dailySeed(date) % open.length] : null)

export const dailyKey = (date: string) => `daily:${date}`

/** Days in a row, up to today (or yesterday, if today's is not played yet), with a finished daily challenge. */
export function streak(s: Save, date: string, stops = 5) {
  const done = (d: string) => (s.endless[dailyKey(d)]?.at ?? 0) >= stops
  const day = new Date(`${date}T12:00:00`)
  if (!done(date)) day.setDate(day.getDate() - 1)
  let n = 0
  while (done(today(day))) {
    n++
    day.setDate(day.getDate() - 1)
  }
  return n
}

/** Days to wait before reviewing, by the weakest linked concept's mastery (1 met · 2 understood · 3 applied). */
const WAIT_DAYS = [1, 1, 2, 4, Infinity]
const DAY = 86_400_000

/** Solved puzzles whose concepts are not yet mastered and whose waiting time is over, oldest first. */
export function dueReviews(puzzles: PuzzleDef[], s: Save, now = Date.now()): PuzzleDef[] {
  return puzzles
    .filter((p) => {
      const st = s.puzzles[p.id]
      if (!st?.solved || !p.links.length) return false
      const weakest = Math.min(...p.links.map((id) => masteryOf(s.mastery[id])))
      return weakest < 4 && now - st.at >= WAIT_DAYS[weakest] * DAY
    })
    .sort((a, b) => s.puzzles[a.id].at - s.puzzles[b.id].at)
}

const isoDay = (t: number) => new Date(t).toISOString().slice(0, 10)

/**
 * A review: no experience (the puzzle was already solved), but a clean right answer counts toward mastery — a second
 * kind of puzzle, a second day of applying — which is exactly what a single first answer could not prove.
 */
export function recordReview(s: Save, p: PuzzleDef, right: boolean, hints: number, now = Date.now()): Partial<Save> {
  const prev = s.puzzles[p.id] ?? { solved: false, tries: 0, hints: 0, at: now }
  const mastery = { ...s.mastery }
  if (right && hints === 0)
    for (const id of p.links) {
      const m: MasteryState = mastery[id] ?? { seen: 0, right: 0, kinds: [], applied: 0, days: [] }
      const applied = APPLIED.has(p.type)
      mastery[id] = {
        seen: m.seen + 1,
        right: m.right + 1,
        kinds: m.kinds.includes(p.type) ? m.kinds : [...m.kinds, p.type],
        applied: m.applied + (applied ? 1 : 0),
        days: applied && !m.days.includes(isoDay(now)) ? [...m.days, isoDay(now)] : m.days,
      }
    }
  // the clock restarts only on a right answer, so a missed review comes back at once
  return { puzzles: { ...s.puzzles, [p.id]: { ...prev, solved: true, tries: prev.tries + 1, at: right ? now : prev.at } }, mastery }
}

/** Replaying one chapter's story: its scenes, verdicts and sources start over; nothing learned or collected is lost. */
export function replayChapter(s: Save, chapter: string): Partial<Save> {
  const mine = (k: string) => k.startsWith(`${chapter}/`)
  const keep = <T,>(r: Record<string, T>) => Object.fromEntries(Object.entries(r).filter(([k]) => !mine(k)))
  return { done: s.done.filter((k) => !mine(k)), step: keep(s.step), verdicts: keep(s.verdicts), trial: keep(s.trial) }
}

/**
 * New Game+: the whole story again, the stories' quests and places too. Skills, experience, codex, mastery, evidence
 * cards, achievements and solved puzzles stay (a solved puzzle gives no experience twice); chapters stay open.
 */
export function newGamePlus(s: Save): Partial<Save> {
  return { done: [], step: {}, verdicts: {}, trial: {}, seen: [], quests: {}, flags: [], visited: [], inventory: [], dialogue: { history: [], topics: {} }, ngPlus: s.ngPlus + 1 }
}
