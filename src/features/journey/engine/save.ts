import type { Verdict } from '../types'
import { SKILLS, type SkillId } from './types'

/**
 * The player's save, version 2. It keeps every field of version 1 at the same place (the story screens read them as
 * before) and adds the engine's state. Reading is field by field: a broken field is reset on its own and reported,
 * never the whole save.
 */
export const SAVE_VERSION = 2

export interface Endless {
  seed: number
  at: number
  total: number
  right: number
  asked: string[]
}

export interface PuzzleState {
  solved: boolean
  tries: number
  hints: number
  at: number
}

export interface QuestState {
  stage: string
  status: 'active' | 'done'
  started: number
  done?: number
}

/** Evidence of a concept, counted by kind of use (see progression.ts masteryOf). */
export interface MasteryState {
  seen: number
  right: number
  /** distinct puzzle types answered right without hints */
  kinds: string[]
  applied: number
  /** days (yyyy-mm-dd) on which it was applied */
  days: string[]
}

export interface Save {
  version: number
  // ---- version 1 fields (unchanged meaning)
  name: string
  portrait: string
  /** story scenes finished, `chapter/scene` */
  done: string[]
  /** evidence cards kept, by id */
  cards: string[]
  /** court verdicts, `chapter/claim` */
  verdicts: Record<string, Verdict>
  /** line reached inside a story scene */
  step: Record<string, number>
  /** chapters whose historical prologue was watched */
  seen: string[]
  endless: Record<string, Endless>
  // ---- version 2
  /** chapters ever opened: once open, never locked again (adding content to an old chapter must not relock the next) */
  chaptersOpen: string[]
  flags: string[]
  visited: string[]
  quests: Record<string, QuestState>
  puzzles: Record<string, PuzzleState>
  dialogue: { history: string[]; topics: Record<string, string[]> }
  inventory: string[]
  /** knowledge discovered (entity ids of the knowledge platform) */
  codex: string[]
  xp: number
  skills: Record<SkillId, number>
  mastery: Record<string, MasteryState>
  achievements: string[]
  /** historian's court: the article the player named as the ground of each verdict, `chapter/claim` → slug */
  trial: Record<string, string>
}

export const emptySave = (): Save => ({
  version: SAVE_VERSION,
  name: '',
  portrait: '',
  done: [],
  cards: [],
  verdicts: {},
  step: {},
  seen: [],
  endless: {},
  chaptersOpen: [],
  flags: [],
  visited: [],
  quests: {},
  puzzles: {},
  dialogue: { history: [], topics: {} },
  inventory: [],
  codex: [],
  xp: 0,
  skills: Object.fromEntries(SKILLS.map((s) => [s, 0])) as Record<SkillId, number>,
  mastery: {},
  achievements: [],
  trial: {},
})

const isObj = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x)
const strs = (x: unknown) => Array.isArray(x) && x.every((v) => typeof v === 'string')
const num = (x: unknown) => typeof x === 'number' && Number.isFinite(x)
const recordOf = (x: unknown, ok: (v: unknown) => boolean) => isObj(x) && Object.values(x).every(ok)

const VERDICTS = ['fact', 'legend', 'unsure']
const CHECKS: { [K in keyof Save]?: (v: unknown) => boolean } = {
  name: (v) => typeof v === 'string',
  portrait: (v) => typeof v === 'string',
  done: strs,
  cards: strs,
  verdicts: (v) => recordOf(v, (x) => VERDICTS.includes(x as string)),
  step: (v) => recordOf(v, num),
  seen: strs,
  endless: (v) => recordOf(v, (e) => isObj(e) && num(e.seed) && num(e.at) && num(e.total) && num(e.right) && strs(e.asked)),
  chaptersOpen: strs,
  flags: strs,
  visited: strs,
  quests: (v) => recordOf(v, (q) => isObj(q) && typeof q.stage === 'string' && (q.status === 'active' || q.status === 'done') && num(q.started)),
  puzzles: (v) => recordOf(v, (p) => isObj(p) && typeof p.solved === 'boolean' && num(p.tries) && num(p.hints) && num(p.at)),
  dialogue: (v) => isObj(v) && strs(v.history) && recordOf(v.topics, strs),
  inventory: strs,
  codex: strs,
  xp: (v) => num(v) && (v as number) >= 0,
  skills: (v) => isObj(v) && SKILLS.every((s) => num(v[s]) || v[s] === undefined),
  mastery: (v) => recordOf(v, (m) => isObj(m) && num(m.seen) && num(m.right) && strs(m.kinds) && num(m.applied) && strs(m.days)),
  achievements: strs,
  trial: (v) => recordOf(v, (x) => typeof x === 'string'),
}

/**
 * Reads a stored save of any version. Fields that are missing take their empty value; fields of the wrong shape are
 * reset one by one and listed in `repaired`. A newer version than this build knows is read the same way: unknown
 * fields are kept as they are.
 */
export function readSave(raw: unknown): { save: Save; repaired: string[] } {
  const base = emptySave()
  if (!isObj(raw)) return { save: base, repaired: raw === undefined || raw === null ? [] : ['*'] }
  const repaired: string[] = []
  const out: Record<string, unknown> = { ...raw }
  for (const [k, ok] of Object.entries(CHECKS) as [keyof Save, (v: unknown) => boolean][]) {
    if (!(k in raw)) out[k] = base[k]
    else if (!ok(raw[k])) {
      out[k] = base[k]
      repaired.push(k)
    }
  }
  out.skills = { ...base.skills, ...(out.skills as object) }
  out.version = Math.max(SAVE_VERSION, num(raw.version) ? (raw.version as number) : 1)
  return { save: out as unknown as Save, repaired }
}

/**
 * Version 1 → 2: the old fields carry over unchanged; chapters the old rule considered open at this moment are
 * recorded as open for good; the codex starts with what the finished scenes taught (`discovered`).
 */
export function fromV1(raw: unknown, opened: (s: Save) => string[], discovered: (s: Save) => string[]): { save: Save; repaired: string[] } {
  const r = readSave(isObj(raw) ? { ...raw, version: SAVE_VERSION } : raw)
  const s = r.save
  return { ...r, save: { ...s, chaptersOpen: [...new Set([...s.chaptersOpen, ...opened(s)])], codex: [...new Set([...s.codex, ...discovered(s)])] } }
}

/**
 * Two saves of the same player (a backup restored on top of this device): each part keeps the union, numbers the
 * larger value. Nothing done on either side is lost.
 */
export function mergeSaves(a: Save, b: Save): Save {
  const u = (x: string[], y: string[]) => [...new Set([...x, ...y])]
  const later = <T,>(x: Record<string, T>, y: Record<string, T>, newer: (p: T, q: T) => boolean) => {
    const out = { ...x }
    for (const [k, v] of Object.entries(y)) if (!(k in out) || newer(v, out[k])) out[k] = v
    return out
  }
  return {
    ...a,
    ...b,
    name: b.name || a.name,
    portrait: b.portrait || a.portrait,
    done: u(a.done, b.done),
    cards: u(a.cards, b.cards),
    verdicts: { ...a.verdicts, ...b.verdicts },
    step: later(a.step, b.step, (p, q) => p > q),
    seen: u(a.seen, b.seen),
    endless: later(a.endless, b.endless, (p, q) => p.total > q.total),
    chaptersOpen: u(a.chaptersOpen, b.chaptersOpen),
    flags: u(a.flags, b.flags),
    visited: u(a.visited, b.visited),
    quests: later(a.quests, b.quests, (p, q) => p.status === 'done' && q.status !== 'done'),
    puzzles: later(a.puzzles, b.puzzles, (p, q) => p.solved && !q.solved),
    dialogue: { history: u(a.dialogue.history, b.dialogue.history), topics: later(a.dialogue.topics, b.dialogue.topics, (p, q) => p.length > q.length) },
    inventory: u(a.inventory, b.inventory),
    codex: u(a.codex, b.codex),
    xp: Math.max(a.xp, b.xp),
    skills: Object.fromEntries(SKILLS.map((k) => [k, Math.max(a.skills[k] ?? 0, b.skills[k] ?? 0)])) as Record<SkillId, number>,
    mastery: later(a.mastery, b.mastery, (p, q) => p.applied + p.right > q.applied + q.right),
    achievements: u(a.achievements, b.achievements),
    trial: { ...a.trial, ...b.trial },
  }
}
