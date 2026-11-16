import type { EntityId } from '../../knowledge/ids'
import type { Verdict } from '../types'

/**
 * The game's content model (docs/journey/DATA_MODEL.md). Everything here is data: conditions and effects are plain
 * objects, so the validator can follow every reference. Ids carry their kind (`loc:`, `npc:`, `dlg:`, `q:`, `pz:`,
 * `ev:`, `item:`) and never change once released (save data refers to them).
 */

export const SKILLS = ['history', 'theory', 'aural', 'analysis', 'sources', 'research'] as const
export type SkillId = (typeof SKILLS)[number]

export type Cond =
  | { flag: string }
  | { not: Cond }
  | { all: Cond[] }
  | { any: Cond[] }
  | { quest: string; is: 'active' | 'done' }
  | { stage: string; of: string }
  | { solved: string }
  | { evidence: string }
  | { item: string }
  | { met: string }
  | { topic: string; with: string }
  | { knows: EntityId }
  | { skill: SkillId; level: number }
  | { chapterOpen: string }
  | { visited: string }

export type Effect =
  | { set: string }
  | { unset: string }
  | { startQuest: string }
  | { advance: string; to: string }
  | { completeQuest: string }
  | { give: string }
  | { evidence: string }
  | { discover: EntityId }
  | { xp: number; skill?: SkillId }
  | { remember: string; with: string }
  | { unlock: string }

export type Voice = 'reconstructed' | 'quote' | 'fiction' | 'narration'

export interface DNode {
  /** 'narrator', 'me' (the player) or a character id */
  speaker: string
  text: string
  voice: Voice
  quote?: { source: EntityId; page?: string }
  refs?: EntityId[]
  when?: Cond
  effects?: Effect[]
  next?: string
  choices?: { text: string; when?: Cond; effects?: Effect[]; next: string }[]
  end?: true
}

export interface DialogueDef {
  id: string
  start: string
  nodes: Record<string, DNode>
}

export interface CharacterDef {
  id: string
  name: string
  status: 'historical' | 'fictional'
  /** the library page about the person (historical: required) */
  person?: EntityId
  role: string
  portrait?: string
  sources: EntityId[]
  relations?: { to: string; kind: 'mentor' | 'student' | 'colleague' | 'rival' | 'patron' | 'associate'; basis: EntityId | 'fiction' }[]
}

export interface LocationDef {
  id: string
  name: string
  lat: number
  lon: number
  far?: boolean
  year?: string
  bg: string
  focus?: string
  hidden?: boolean
  unlock?: Cond
  present: { npc: string; dialogue: string; when?: Cond }[]
  objects?: { id: string; label: string; when?: Cond; effects?: Effect[]; dialogue?: string; puzzle?: string }[]
  onEnter?: Effect[]
}

export type Objective = { talk: string } | { visit: string } | { solve: string } | { collect: string } | { cond: Cond }

export interface QuestStage {
  id: string
  text: string
  objectives: Objective[]
  onDone?: Effect[]
  /** the stage after this one; branches are checked in order, the first whose condition holds wins */
  next?: string | { when: Cond; to: string }[]
}

export interface QuestDef {
  id: string
  chapter: string
  title: string
  summary: string
  kind: 'main' | 'side' | 'investigation' | 'academic' | 'hidden'
  requires?: Cond
  stages: QuestStage[]
  rewards: Effect[]
  links: EntityId[]
}

export interface PuzzleDef<T extends string = string, C = unknown, A = unknown> {
  id: string
  type: T
  difficulty: 1 | 2 | 3 | 4 | 5
  title: string
  instructions: string
  content: C
  answer: A
  accept?: A[]
  hints: string[]
  /** shown once solved, right or after tries — never a bare right/wrong */
  explanation: string
  feedback?: { key: string; text: string }[]
  skills: SkillId[]
  links: EntityId[]
  sources?: EntityId[]
}

export type EvidenceKind = 'primary' | 'secondary' | 'artifact' | 'interpretation' | 'anecdote' | 'hypothesis' | 'fiction'

export interface EvidenceDef {
  id: string
  title: string
  text: string
  kind: EvidenceKind
  /** required unless the evidence is part of the fiction */
  source?: EntityId
  page?: string
  date?: string
  claims?: string[]
  reliability: string
  verification: 'checked' | 'library' | 'unverified'
}

export interface ItemDef {
  id: string
  name: string
  kind: 'document' | 'manuscript' | 'instrument' | 'record' | 'work' | 'special'
  text: string
  links: EntityId[]
  use?: { at: string; effects: Effect[] }
}

export interface ClaimDef {
  id: string
  text: string
  verdict: Verdict
  explain: string
  source: EntityId
}

export interface ChapterDef {
  id: string
  period?: EntityId
  locations: LocationDef[]
  characters: CharacterDef[]
  dialogues: DialogueDef[]
  quests: QuestDef[]
  puzzles: PuzzleDef[]
  evidence: EvidenceDef[]
  items: ItemDef[]
  claims: ClaimDef[]
  /** when the chapter counts as finished (opens the next one) */
  completion: Cond
}

/** A story arc inside a chapter (the "Bản thảo thất lạc" kind): its own places, people and quests on the chapter's map. */
export interface ArcDef extends ChapterDef {
  chapter: string
  title: string
  year: string
  intro: string
  /** when the arc shows on the chapter's map */
  opens: Cond
  /** the main quest (its completion is the arc's) */
  main: string
  /** MUSIC key played on the arc's hub */
  music: string
}
