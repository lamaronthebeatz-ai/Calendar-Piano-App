import type { Save } from './save'
import type { ArcDef, Cond, Effect } from './types'
import { effects } from './runtime'
import { holds } from './world'

/**
 * The narrative layer: how an arc's story unfolds, beat by beat, on top of the systems that already hold its state.
 * A beat is the smallest step of the story — a discovery, a mention, a contradiction, a decision — with a trigger
 * (where it can happen), a condition (when), effects (through the Journey engine: quests, items, evidence, flags) and
 * what it adds to the journal. Nothing here stores anything: a beat that happened is the flag `beat:<id>` in the
 * Journey save (so it survives a reload and never fires twice); quests, items and evidence stay in their own systems.
 *
 * Content kinds are kept apart on every journal entry: `fact` (with references that resolve to sourced evidence or
 * library articles), `interpretation` (a reading, labelled as such) and `fiction` (the game's own reconstruction).
 */
export type Basis = 'fact' | 'interpretation' | 'fiction'
/** what the player holds: seen directly, a guess not yet settled, or settled (in the story, or by a source) */
export type Knowing = 'known' | 'hypothesis' | 'confirmed'
export type BeatKind = 'setup' | 'discovery' | 'mention' | 'contradiction' | 'reveal' | 'decision' | 'turn' | 'outcome'

/** Where a beat may happen. `state` beats are checked whenever the save changes. */
export type Trigger = { on: 'state' } | { on: 'enter'; place: string } | { on: 'look'; doc: string; spot?: string } | { on: 'talked'; dialogue: string }

export type JournalEntry = {
  text: string
  knowing: Knowing
  basis: Basis
  /** evidence (ev:…) or library / source ids (a:…, s:…) that back the entry — never invented (checked by tests) */
  refs?: string[]
  /** an earlier entry this one settles (shown struck through, pointing here) */
  settles?: string
}
export type BeatDef = {
  id: string
  kind: BeatKind
  trigger: Trigger
  when?: Cond
  /** beats that must have happened first */
  after?: string[]
  effects?: Effect[]
  /** a line shown in the scene: the player's own thought, or the narrator */
  show?: { style: 'thought' | 'narration'; text: string }
  journal?: JournalEntry
}
export type Act = { id: 'setup' | 'development' | 'climax' | 'resolution'; title: string; beats: BeatDef[] }
/** A story arc's narrative: its premise and acts. The quests it drives stay in `arc.quests`. */
export type NarrativeDef = { id: string; title: string; premise: string; basis: Basis; acts: Act[] }

export const beatFlag = (id: string) => `beat:${id}`
export const happened = (s: Save, id: string) => s.flags.includes(beatFlag(id))
export const beatsOf = (n: NarrativeDef) => n.acts.flatMap((a) => a.beats)
const sameTrigger = (a: Trigger, b: Trigger) =>
  a.on === b.on && (a.on !== 'enter' || a.place === (b as typeof a).place) && (a.on !== 'look' || (a.doc === (b as typeof a).doc && (a.spot === undefined || a.spot === (b as typeof a).spot))) && (a.on !== 'talked' || a.dialogue === (b as typeof a).dialogue)

/** The beats that happen now, in story order: trigger matches (a `state` beat matches any check), condition holds, not happened yet, every `after` done. */
export function due(n: NarrativeDef, s: Save, t: Trigger): BeatDef[] {
  return beatsOf(n).filter((b) => !happened(s, b.id) && (b.trigger.on === 'state' || sameTrigger(b.trigger, t)) && (!b.when || holds(b.when, s)) && (b.after ?? []).every((a) => happened(s, a)))
}

/**
 * Runs every beat due for this trigger, then every `state` beat their effects made due, until none is left. Each
 * beat sets its flag before anything else, so none can fire twice and no chain can loop; the loop is also bounded by
 * the number of beats. Returns the new save and the beats that happened (for the scene to show).
 */
export function advanceStory(arc: ArcDef, n: NarrativeDef, s: Save, t: Trigger): { save: Save; fired: BeatDef[] } {
  let save = s
  const fired: BeatDef[] = []
  let trigger = t
  for (let guard = 0; guard <= beatsOf(n).length; guard++) {
    const next = due(n, save, trigger)
    if (!next.length) break
    for (const b of next) {
      if (happened(save, b.id)) continue
      save = effects(arc, [{ set: beatFlag(b.id) }, ...(b.effects ?? [])], save)
      fired.push(b)
    }
    trigger = { on: 'state' }
  }
  return { save, fired }
}

/** The journal: what the player has found out, in the order it happened; entries settled by later ones are marked. */
export type Entry = JournalEntry & { beat: string; kind: BeatKind; settledBy?: string }
export function journalOf(n: NarrativeDef, s: Save): Entry[] {
  const out: Entry[] = beatsOf(n).filter((b) => b.journal && happened(s, b.id)).map((b) => ({ ...b.journal!, beat: b.id, kind: b.kind }))
  for (const e of out) if (e.settles) {
    const old = out.find((x) => x.beat === e.settles)
    if (old) old.settledBy = e.beat
  }
  return out
}

/* ------------------------------------------------------------------ checks */

const condRefs = (c: Cond | undefined, out: { flags: string[]; quests: string[]; items: string[]; evidence: string[] }) => {
  if (!c) return
  if ('flag' in c) out.flags.push(c.flag)
  else if ('not' in c) condRefs(c.not, out)
  else if ('all' in c) c.all.forEach((x) => condRefs(x, out))
  else if ('any' in c) c.any.forEach((x) => condRefs(x, out))
  else if ('quest' in c) out.quests.push(c.quest)
  else if ('item' in c) out.items.push(c.item)
  else if ('evidence' in c) out.evidence.push(c.evidence)
}

/**
 * Static checks that keep a player from getting stuck: every id a beat names exists; `after` forms no cycle and
 * points at real beats; every flag a beat waits on is set by something in the arc (a dialogue, an object, a beat, a
 * quest); every look trigger names a document spot that exists; facts carry references.
 */
export function analyzeNarrative(arc: ArcDef, n: NarrativeDef): string[] {
  const errs: string[] = []
  const beats = beatsOf(n)
  const ids = new Set(beats.map((b) => b.id))
  if (ids.size !== beats.length) errs.push(`${n.id}: trùng id nhịp`)
  // flags anything in the arc can set
  const sets = new Set<string>()
  const addFx = (fx?: Effect[]) => fx?.forEach((e) => ('set' in e ? sets.add(e.set) : 'unlock' in e ? sets.add(`open:${e.unlock}`) : undefined))
  arc.dialogues.forEach((d) => Object.values(d.nodes).forEach((nd) => (addFx(nd.effects), nd.choices?.forEach((c) => addFx(c.effects)))))
  arc.locations.forEach((l) => (addFx(l.onEnter), l.objects?.forEach((o) => addFx(o.effects))))
  arc.quests.forEach((q) => (addFx(q.rewards), q.stages.forEach((st) => addFx(st.onDone))))
  arc.documents?.forEach((d) => d.spots.forEach((sp) => sets.add(spotFlag(d.id, sp.id))))
  beats.forEach((b) => (sets.add(beatFlag(b.id)), addFx(b.effects)))
  for (const b of beats) {
    for (const a of b.after ?? []) if (!ids.has(a)) errs.push(`${b.id}: after ${a} không có`)
    const r = { flags: [] as string[], quests: [] as string[], items: [] as string[], evidence: [] as string[] }
    condRefs(b.when, r)
    for (const f of r.flags) if (!sets.has(f)) errs.push(`${b.id}: chờ cờ ${f} mà không gì đặt nó — người chơi sẽ kẹt`)
    for (const q of r.quests) if (!arc.quests.some((x) => x.id === q)) errs.push(`${b.id}: quest ${q} không có`)
    for (const i of r.items) if (!arc.items.some((x) => x.id === i)) errs.push(`${b.id}: vật ${i} không có`)
    for (const e of r.evidence) if (!arc.evidence.some((x) => x.id === e)) errs.push(`${b.id}: chứng cứ ${e} không có`)
    for (const e of b.effects ?? []) {
      if ('startQuest' in e && !arc.quests.some((x) => x.id === e.startQuest)) errs.push(`${b.id}: startQuest ${e.startQuest} không có`)
      if ('give' in e && !arc.items.some((x) => x.id === e.give)) errs.push(`${b.id}: give ${e.give} không có`)
      if ('evidence' in e && !arc.evidence.some((x) => x.id === e.evidence)) errs.push(`${b.id}: evidence ${e.evidence} không có`)
    }
    const t = b.trigger
    if (t.on === 'look') {
      const d = arc.documents?.find((x) => x.id === t.doc)
      if (!d) errs.push(`${b.id}: tài liệu ${t.doc} không có`)
      else if (t.spot && !d.spots.some((x) => x.id === t.spot)) errs.push(`${b.id}: điểm ${t.spot} không có trong ${t.doc}`)
    }
    if (t.on === 'enter' && !arc.locations.some((l) => l.id === t.place)) errs.push(`${b.id}: nơi ${t.place} không có`)
    if (t.on === 'talked' && !arc.dialogues.some((d) => d.id === t.dialogue)) errs.push(`${b.id}: hội thoại ${t.dialogue} không có`)
    if (b.journal?.basis === 'fact' && !b.journal.refs?.length) errs.push(`${b.id}: dữ kiện lịch sử mà không có nguồn`)
    if (b.journal?.settles && !ids.has(b.journal.settles)) errs.push(`${b.id}: settles ${b.journal.settles} không có`)
  }
  // after: no cycle
  const seen = new Set<string>()
  const stack = new Set<string>()
  const visit = (id: string): boolean => {
    if (stack.has(id)) return false
    if (seen.has(id)) return true
    seen.add(id)
    stack.add(id)
    const ok = (beats.find((b) => b.id === id)?.after ?? []).every(visit)
    stack.delete(id)
    return ok
  }
  for (const b of beats) if (!visit(b.id)) errs.push(`${b.id}: vòng lặp after`)
  return errs
}

/* --------------------------------------------------------------- documents */

/**
 * A document to examine (a manuscript, a register): a drawing with spots to look at closely. Each spot is an
 * observation — what the eye finds there — with its basis; looking at it is remembered (flag `seen:<doc>/<spot>`)
 * and may trigger beats. Spots can wait on a condition (a detail only noticed once another was seen).
 */
export type DocSpot = { id: string; label: string; x: number; y: number; w: number; h: number; text: string; basis: Basis; refs?: string[]; when?: Cond }
export type DocumentDef = { id: string; title: string; kind: string; basis: Basis; note: string; art: string; spots: DocSpot[] }
export const spotFlag = (doc: string, spot: string) => `seen:${doc}/${spot}`
export const spotsOf = (d: DocumentDef, s: Save) => d.spots.filter((x) => !x.when || holds(x.when, s))
