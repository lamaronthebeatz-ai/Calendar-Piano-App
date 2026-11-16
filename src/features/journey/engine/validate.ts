import { parseId, type EntityId } from '../../knowledge/ids'
import { analyzeDialogue } from './dialogue'
import { puzzleProblem } from './puzzles'
import { analyzeQuest } from './quest'
import type { ChapterDef, Cond, Effect, Objective } from './types'

/**
 * Everything a chapter refers to must exist; every dialogue must be walkable to an end; every puzzle must be solved
 * by its own answer; every historical person and quotation must have a source. Returns the problems, [] when sound.
 * `articleExists` checks `a:` ids against the library (the test passes the article index).
 */
export function validateChapter(ch: ChapterDef, articleExists: (slug: string) => boolean, outside: (id: string) => boolean = () => false): string[] {
  const errs: string[] = []
  const all = [ch.locations, ch.characters, ch.dialogues, ch.quests, ch.puzzles, ch.evidence, ch.items, ch.claims].flat().map((x) => x.id)
  const seen = new Set<string>()
  for (const id of all) {
    if (seen.has(id)) errs.push(`id trùng: ${id}`)
    seen.add(id)
  }
  // a reference may point into another chapter (a quest that needs one from before): `outside` knows those ids
  const has = (id: string) => seen.has(id) || outside(id)
  const stagesOf = new Map(ch.quests.map((q) => [q.id, q.stages.map((s) => s.id)]))
  const entity = (where: string, id: EntityId) => {
    const p = parseId(id)
    if (!p) errs.push(`${where}: mã tri thức sai ${id}`)
    else if (p.prefix === 'a' && !articleExists(p.local)) errs.push(`${where}: bài ${p.local} không có`)
  }
  const ref = (where: string, id: string) => {
    if (!has(id)) errs.push(`${where}: trỏ tới ${id} không có`)
  }

  const cond = (where: string, c: Cond | undefined): void => {
    if (!c) return
    if ('not' in c) return cond(where, c.not)
    if ('all' in c) return c.all.forEach((x) => cond(where, x))
    if ('any' in c) return c.any.forEach((x) => cond(where, x))
    if ('quest' in c) return void ref(where, c.quest)
    if ('stage' in c) {
      if (!stagesOf.get(c.of)?.includes(c.stage) && !outside(c.of)) errs.push(`${where}: giai đoạn ${c.of}/${c.stage} không có`)
      return
    }
    if ('solved' in c) return void ref(where, c.solved)
    if ('evidence' in c) return void ref(where, c.evidence)
    if ('item' in c) return void ref(where, c.item)
    if ('met' in c) return void ref(where, c.met)
    if ('topic' in c) return void ref(where, c.with)
    if ('knows' in c) return entity(where, c.knows)
    if ('visited' in c) return void ref(where, c.visited)
  }
  const effect = (where: string, e: Effect) => {
    if ('startQuest' in e) ref(where, e.startQuest)
    else if ('advance' in e) {
      if (!stagesOf.get(e.advance)?.includes(e.to)) errs.push(`${where}: giai đoạn ${e.advance}/${e.to} không có`)
    }
    else if ('completeQuest' in e) ref(where, e.completeQuest)
    else if ('give' in e) ref(where, e.give)
    else if ('evidence' in e) ref(where, e.evidence)
    else if ('discover' in e) entity(where, e.discover)
    else if ('remember' in e) ref(where, e.with)
    else if ('unlock' in e) ref(where, e.unlock)
  }
  const objective = (where: string, o: Objective) => {
    if ('talk' in o) ref(where, o.talk)
    else if ('visit' in o) ref(where, o.visit)
    else if ('solve' in o) ref(where, o.solve)
    else if ('collect' in o) ref(where, o.collect)
    else cond(where, o.cond)
  }

  const speakers = new Set(['narrator', 'me', ...ch.characters.map((c) => c.id)])
  for (const c of ch.characters) {
    if (c.status === 'historical' && !c.person) errs.push(`${c.id}: nhân vật lịch sử thiếu bài về người (person)`)
    if (c.status === 'historical' && !c.sources.length) errs.push(`${c.id}: nhân vật lịch sử thiếu nguồn`)
    if (c.person) entity(c.id, c.person)
    c.sources.forEach((x) => entity(c.id, x))
    for (const r of c.relations ?? []) {
      ref(c.id, r.to)
      if (r.basis !== 'fiction') entity(c.id, r.basis)
      else if (c.status === 'historical' && ch.characters.find((x) => x.id === r.to)?.status === 'historical') errs.push(`${c.id}: quan hệ giữa hai người thật không được là hư cấu`)
    }
  }
  for (const d of ch.dialogues) {
    errs.push(...analyzeDialogue(d))
    for (const [nid, n] of Object.entries(d.nodes)) {
      const w = `${d.id}/${nid}`
      if (!speakers.has(n.speaker)) errs.push(`${w}: người nói ${n.speaker} không có`)
      if (n.quote) entity(w, n.quote.source)
      n.refs?.forEach((x) => entity(w, x))
      cond(w, n.when)
      n.effects?.forEach((e) => effect(w, e))
      for (const c of n.choices ?? []) {
        cond(w, c.when)
        c.effects?.forEach((e) => effect(w, e))
      }
    }
  }
  for (const l of ch.locations) {
    cond(l.id, l.unlock)
    l.onEnter?.forEach((e) => effect(l.id, e))
    for (const p of l.present) {
      ref(l.id, p.npc)
      ref(l.id, p.dialogue)
      cond(l.id, p.when)
    }
    for (const o of l.objects ?? []) {
      cond(`${l.id}/${o.id}`, o.when)
      o.effects?.forEach((e) => effect(`${l.id}/${o.id}`, e))
      if (o.dialogue) ref(`${l.id}/${o.id}`, o.dialogue)
      if (o.puzzle) ref(`${l.id}/${o.id}`, o.puzzle)
    }
  }
  for (const q of ch.quests) {
    errs.push(...analyzeQuest(q))
    cond(q.id, q.requires)
    q.links.forEach((x) => entity(q.id, x))
    q.rewards.forEach((e) => effect(q.id, e))
    for (const st of q.stages) {
      st.objectives.forEach((o) => objective(`${q.id}/${st.id}`, o))
      st.onDone?.forEach((e) => effect(`${q.id}/${st.id}`, e))
      if (Array.isArray(st.next)) st.next.forEach((b) => cond(`${q.id}/${st.id}`, b.when))
    }
  }
  for (const p of ch.puzzles) {
    const bad = puzzleProblem(p)
    if (bad) errs.push(`${p.id}: ${bad}`)
    if (!p.links.length) errs.push(`${p.id}: câu đố không nối với tri thức nào`)
    p.links.forEach((x) => entity(p.id, x))
    p.sources?.forEach((x) => entity(p.id, x))
  }
  for (const e of ch.evidence) {
    if (e.kind !== 'fiction' && !e.source) errs.push(`${e.id}: chứng cứ thiếu nguồn`)
    if (e.source) entity(e.id, e.source)
  }
  for (const i of ch.items) {
    if (!i.links.length && !i.use) errs.push(`${i.id}: vật phẩm không có công dụng hay tri thức`)
    i.links.forEach((x) => entity(i.id, x))
  }
  for (const c of ch.claims) entity(c.id, c.source)
  cond(`${ch.id}: completion`, ch.completion)
  return errs
}
