import type { MasteryState, Save } from './save'
import type { PuzzleDef, SkillId } from './types'

/**
 * Experience, skills and mastery. Experience is a measure of how far the player has gone, not a gate: content opens on
 * skills and evidence. Easy questions answered again give nothing.
 */
const BASE = [0, 10, 15, 20, 30, 40]
export const SKILL_STEPS = [0, 50, 150, 300, 500]

/** XP for a first solve: by difficulty, less for each hint and each wrong try, never below 2. */
export function puzzleXp(p: Pick<PuzzleDef, 'difficulty'>, hints: number, wrongTries: number) {
  return Math.max(2, Math.round(BASE[p.difficulty] * (1 - 0.3 * hints) * (1 - 0.15 * Math.min(wrongTries, 3))))
}

/** Character level n needs 50·n·(n+1) XP in total. */
export const levelOf = (xp: number) => Math.floor((Math.sqrt(1 + (8 * xp) / 100) - 1) / 2) + 1
export const skillLevel = (points: number) => SKILL_STEPS.filter((t) => points >= t).length - 1

/**
 * Mastery of a concept, from what was done with it, never from a single answer:
 * 0 not met · 1 met (seen) · 2 understood (right twice in two kinds of puzzle) · 3 applied (used in a practical or
 * investigative task) · 4 mastered (applied twice, on two different days).
 */
export function masteryOf(m: MasteryState | undefined): 0 | 1 | 2 | 3 | 4 {
  if (!m || m.seen < 1) return 0
  const understood = m.right >= 2 && m.kinds.length >= 2
  if (!understood) return 1
  if (m.applied < 1) return 2
  return m.applied >= 2 && m.days.length >= 2 ? 4 : 3
}
export const MASTERY_LABEL = ['Chưa gặp', 'Đã gặp', 'Đã hiểu', 'Đã vận dụng', 'Thành thạo'] as const

/** Puzzle types that count as using knowledge, not recalling it. */
const APPLIED = new Set(['neume', 'hexachord', 'aural', 'interval', 'chord', 'cadence', 'counterpoint', 'score', 'compose', 'investigation'])

const day = (t: number) => new Date(t).toISOString().slice(0, 10)

/**
 * What solving (or failing) a puzzle changes: the puzzle's record, XP and skills on the first solve, mastery of each
 * linked concept, and the codex. Returns the fields to merge into the save.
 */
export function recordAttempt(s: Save, p: PuzzleDef, right: boolean, hintsUsed: number, now = Date.now()): Partial<Save> {
  const prev = s.puzzles[p.id] ?? { solved: false, tries: 0, hints: 0, at: now }
  const first = right && !prev.solved
  const rec = { solved: prev.solved || right, tries: prev.tries + 1, hints: Math.max(prev.hints, hintsUsed), at: now }
  const xp = first && !(p.difficulty === 1 && prev.tries > 0) ? puzzleXp(p, hintsUsed, prev.tries) : 0
  const skills = { ...s.skills }
  if (xp) for (const k of p.skills) skills[k as SkillId] = (skills[k as SkillId] ?? 0) + Math.round(xp / p.skills.length)
  const mastery = { ...s.mastery }
  for (const id of p.links) {
    const m: MasteryState = mastery[id] ?? { seen: 0, right: 0, kinds: [], applied: 0, days: [] }
    const clean = right && hintsUsed === 0
    mastery[id] = {
      seen: m.seen + 1,
      // a concept is "right" once per puzzle, not once per retry
      right: m.right + (first ? 1 : 0),
      kinds: clean && !m.kinds.includes(p.type) ? [...m.kinds, p.type] : m.kinds,
      applied: m.applied + (first && APPLIED.has(p.type) ? 1 : 0),
      days: first && APPLIED.has(p.type) && !m.days.includes(day(now)) ? [...m.days, day(now)] : m.days,
    }
  }
  return {
    puzzles: { ...s.puzzles, [p.id]: rec },
    xp: s.xp + xp,
    skills,
    mastery,
    codex: right ? [...new Set([...s.codex, ...p.links])] : s.codex,
  }
}

/** A court verdict judged right the first time trains source criticism; changing one's mind later gives nothing. */
export function verdictXp(s: Save, claim: string, right: boolean): Partial<Save> {
  if (claim in s.verdicts || !right) return {}
  return { xp: s.xp + 5, skills: { ...s.skills, sources: (s.skills.sources ?? 0) + 5 } }
}

/** Achievements: each a rule over the save; earned ones are added, never removed. */
export const ACHIEVEMENTS: { id: string; title: string; text: string; earned: (s: Save) => boolean }[] = [
  { id: 'first-card', title: 'Thẻ chứng cứ đầu tiên', text: 'Nhận thẻ chứng cứ đầu tiên.', earned: (s) => s.cards.length >= 1 },
  { id: 'collector', title: 'Người sưu tầm chứng cứ', text: 'Giữ 30 thẻ chứng cứ.', earned: (s) => s.cards.length >= 30 },
  { id: 'no-hint-10', title: 'Không cần gợi ý', text: '10 câu đố giải ngay lần đầu, không gợi ý.', earned: (s) => Object.values(s.puzzles).filter((p) => p.solved && p.tries === 1 && p.hints === 0).length >= 10 },
  { id: 'judge', title: 'Sử gia công tâm', text: 'Phán quyết 20 lời khai ở các phiên toà.', earned: (s) => Object.keys(s.verdicts).length >= 20 },
  { id: 'understood-10', title: 'Hiểu chứ không thuộc', text: '10 khái niệm đạt bậc "Đã hiểu".', earned: (s) => Object.values(s.mastery).filter((m) => masteryOf(m) >= 2).length >= 10 },
]

export const newAchievements = (s: Save) => ACHIEVEMENTS.filter((a) => !s.achievements.includes(a.id) && a.earned(s)).map((a) => a.id)
