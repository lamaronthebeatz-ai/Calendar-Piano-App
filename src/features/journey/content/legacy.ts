import type { EntityId } from '../../knowledge/ids'
import type { ChapterDef, CharacterDef, DialogueDef, DNode, PuzzleDef } from '../engine/types'
import type { ChoiceContent } from '../engine/puzzles'
import type { Chapter, Scene } from '../types'

/**
 * The six original chapters, seen through the engine: each story scene is a location with one character, a linear
 * dialogue, a one-stage main quest and a multiple-choice puzzle; its card is a piece of evidence. Ids are derived from
 * the old ones (`q:chapter/scene` ↔ save.done "chapter/scene", card ids unchanged), so old progress maps straight on.
 */
const a = (slug: string) => `a:${slug}` as EntityId
const tag = (c: Chapter, s: Scene) => `${c.id}/${s.id}`

export const legacyPuzzleId = (c: Chapter, s: Scene) => `pz:${tag(c, s)}`

export function legacyPuzzle(c: Chapter, s: Scene): PuzzleDef<'choice', ChoiceContent, number> {
  return {
    id: legacyPuzzleId(c, s),
    type: 'choice',
    difficulty: 2,
    title: s.title,
    instructions: s.quest.ask,
    content: { ask: s.quest.ask, choices: s.quest.choices },
    answer: s.quest.answer,
    hints: [`Đọc ${s.quest.where} trong bài thư viện.`],
    explanation: s.quest.explain,
    skills: ['history'],
    links: [...new Set([a(s.quest.read), a(s.card.read)])],
  }
}

const characterOf = (c: Chapter, s: Scene): CharacterDef =>
  s.npc.slug
    ? { id: `npc:${s.npc.slug}`, name: s.npc.name, status: 'historical', person: a(s.npc.slug), role: s.npc.role, portrait: s.npc.img, sources: [a(s.npc.slug)] }
    : { id: `npc:${tag(c, s)}`, name: s.npc.name, status: 'fictional', role: s.npc.role, portrait: s.npc.img, sources: [] }

function dialogueOf(c: Chapter, s: Scene, npc: string): DialogueDef {
  const nodes: Record<string, DNode> = {}
  s.lines.forEach((l, i) => {
    nodes[`n${i}`] = {
      speaker: l.who === 'narrator' ? 'narrator' : l.who === 'me' ? 'me' : npc,
      text: l.text,
      voice: l.quote ? 'quote' : l.fiction ? 'fiction' : l.who === 'narrator' ? 'narration' : 'reconstructed',
      quote: l.quote ? { source: a(l.quote) } : undefined,
      ...(i < s.lines.length - 1 ? { next: `n${i + 1}` } : { end: true as const }),
    }
  })
  return { id: `dlg:${tag(c, s)}`, start: 'n0', nodes }
}

export function legacyChapter(c: Chapter): ChapterDef {
  const characters = new Map<string, CharacterDef>()
  const def: ChapterDef = { id: c.id, locations: [], characters: [], dialogues: [], quests: [], puzzles: [], evidence: [], items: [], claims: [], completion: { all: [] } }
  c.scenes.forEach((s, i) => {
    const npc = characterOf(c, s)
    characters.set(npc.id, npc)
    const dlg = dialogueOf(c, s, npc.id)
    const pz = legacyPuzzle(c, s)
    const q = `q:${tag(c, s)}`
    def.locations.push({ id: `loc:${tag(c, s)}`, name: s.place, lat: s.lat, lon: s.lon, far: s.far, year: s.year, bg: s.bg, focus: s.focus, present: [{ npc: npc.id, dialogue: dlg.id }] })
    def.dialogues.push(dlg)
    def.puzzles.push(pz)
    def.quests.push({
      id: q,
      chapter: c.id,
      title: s.title,
      summary: s.quest.ask,
      kind: 'main',
      // the story is a route: a stop opens once the one before it is done
      requires: i ? { quest: `q:${tag(c, c.scenes[i - 1])}`, is: 'done' } : undefined,
      stages: [{ id: 'hoi', text: s.quest.ask, objectives: [{ solve: pz.id }] }],
      rewards: [{ evidence: s.card.id }],
      links: pz.links,
    })
    def.evidence.push({ id: s.card.id, title: s.card.title, text: s.card.text, kind: 'secondary', source: a(s.card.read), reliability: 'Theo bài thư viện (có nguồn ở bài).', verification: 'library' })
  })
  def.characters = [...characters.values()]
  def.claims = c.court.claims.map((x) => ({ id: `claim:${c.id}/${x.id}`, text: x.text, verdict: x.verdict, explain: x.explain, source: a(x.read) }))
  def.completion = { all: def.quests.map((q) => ({ quest: q.id, is: 'done' as const })) }
  return def
}
