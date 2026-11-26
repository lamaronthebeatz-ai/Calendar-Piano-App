import { describe, expect, it } from 'vitest'
import { ARCS } from '../content/arcs'
import { banThao } from '../content/ban-thao'
import { findArticle } from '../../theory/wiki'
import { choicesOf, enter as enterNode, step } from './dialogue'
import { advanceStory, analyzeNarrative, beatFlag, due, happened, journalOf, spotFlag, spotsOf, type Trigger } from './narrative'
import { effects, enter } from './runtime'
import { emptySave, type Save } from './save'

const arc = banThao
const story = arc.narrative!
const loc = (id: string) => arc.locations.find((l) => l.id === id)!
const narrate = (s: Save, t: Trigger) => advanceStory(arc, story, s, t)
/** what the screens do: enter a place, then the story */
const visit = (s: Save, place: string) => narrate(enter(arc, loc(place), s), { on: 'enter', place }).save
/** looking at a document spot: remembered, then the story */
const look = (s: Save, spot: string) => narrate(effects(arc, [{ set: spotFlag('doc:bt/sach-ca', spot) }], s), { on: 'look', doc: 'doc:bt/sach-ca', spot }).save
/** a conversation as DialoguePanel runs it: node effects on display, choice effects on choosing, the story after */
function talk(s: Save, dialogue: string, picks: string[]): Save {
  const d = arc.dialogues.find((x) => x.id === dialogue)!
  let at = enterNode(d, d.start, s)
  for (let guard = 0; at && guard < 40; guard++) {
    s = effects(arc, d.nodes[at].effects, s)
    const offered = choicesOf(d.nodes[at], s)
    let choice: number | undefined
    if (offered.length) {
      // each wanted line is taken once, in the order given; otherwise the last offered (the way out)
      const want = picks.find((p) => offered.some((c) => c.text === p))
      if (want) picks = picks.filter((p) => p !== want)
      const pick = offered.find((c) => c.text === want) ?? offered[offered.length - 1]
      choice = pick.i
      s = effects(arc, pick.effects, s)
    }
    const r = step(d, at, s, choice)
    at = r.next
    s = narrate(s, { on: 'state' }).save
  }
  return narrate(s, { on: 'talked', dialogue }).save
}
const reload = (s: Save): Save => JSON.parse(JSON.stringify(s))
const ids = (s: Save) => journalOf(story, s).map((e) => e.beat)

/** a player who has met the librarian and looked over the open book */
function atTheBook(): Save {
  let s: Save = { ...emptySave(), name: 'Minh' }
  s = visit(s, 'loc:bt/thu-vien')
  s = talk(s, 'dlg:bt/quan-thu', ['Trang ấy lạ thế nào?'])
  s = look(s, 'dong-ke')
  s = look(s, 'cao')
  return look(s, 'le')
}

describe('narrative: structure and checks', () => {
  it('every arc narrative passes the static checks (ids, flags someone sets, no after-cycles, facts with sources)', () => {
    for (const a of ARCS) if (a.narrative) expect(analyzeNarrative(a, a.narrative)).toEqual([])
  })
  it('every journal / document reference resolves to sourced evidence or a library article', () => {
    const refs = [...story.acts.flatMap((a) => a.beats).flatMap((b) => b.journal?.refs ?? []), ...(arc.documents ?? []).flatMap((d) => d.spots.flatMap((s) => s.refs ?? []))]
    expect(refs.length).toBeGreaterThan(0)
    for (const r of refs) {
      if (r.startsWith('ev:')) {
        const ev = arc.evidence.find((e) => e.id === r)
        expect(ev, r).toBeTruthy()
        expect(ev!.kind).not.toBe('fiction')
        expect(ev!.source, `${r} cần nguồn`).toBeTruthy()
      } else if (r.startsWith('a:')) expect(findArticle(r.slice(2))?.slug, r).toBe(r.slice(2))
      else throw new Error(`ref lạ: ${r}`)
    }
  })
  it('a spot marked as fact cites a source; a fiction spot cites none dressed up as one', () => {
    for (const d of arc.documents ?? [])
      for (const sp of d.spots) {
        if (sp.basis === 'fact') expect(sp.refs?.length, sp.id).toBeGreaterThan(0)
        if (sp.basis === 'fiction') expect(sp.refs ?? []).toEqual([])
      }
  })
  it('no fake consequences: every choice marked "consequence" changes the state', () => {
    for (const a of ARCS) for (const d of a.dialogues) for (const n of Object.values(d.nodes)) for (const c of n.choices ?? []) if (c.kind === 'consequence') expect(c.effects?.length, `${d.id}: ${c.text}`).toBeGreaterThan(0)
  })
})

describe('narrative: flow, choices and consequences', () => {
  it('setup and discoveries: beats fire on their triggers, once, and the journal holds only what was found', () => {
    let s: Save = { ...emptySave(), name: 'Minh' }
    s = visit(s, 'loc:bt/thu-vien')
    expect(ids(s)).toEqual([]) // nothing before meeting the librarian
    s = talk(s, 'dlg:bt/quan-thu', ['Trang ấy lạ thế nào?'])
    expect(ids(s)).toEqual(['bt:sach-mo'])
    // the margin note cannot be seen before the scraped patch
    const doc = arc.documents![0]
    expect(spotsOf(doc, s).map((x) => x.id)).toEqual(['dong-ke', 'cao'])
    s = look(s, 'cao')
    expect(spotsOf(doc, s).map((x) => x.id)).toContain('le')
    expect(s.quests['q:bt/ghi-chu']).toMatchObject({ status: 'active', stage: 'hoi' })
    const again = look(s, 'cao')
    expect(again.flags.filter((f) => f === beatFlag('bt:cao'))).toHaveLength(1) // once
    s = look(s, 'le')
    expect(journalOf(story, s).find((e) => e.beat === 'bt:chu-r')).toMatchObject({ knowing: 'hypothesis', basis: 'fiction' })
  })

  it('branch A — believe the librarian: the case closes, Rinaldo stays silent, nothing more is revealed', () => {
    let s = atTheBook()
    s = talk(s, 'dlg:bt/quan-thu', ['Ai đã cạo trang sách ca trên bục đọc?', 'Con tin lời thầy. Chuyện trang ấy khép lại ở đây.'])
    expect(s.flags).toContain('bt:tin-quan-thu')
    expect(s.quests['q:bt/ghi-chu'].status).toBe('done')
    expect(ids(s)).toEqual(expect.arrayContaining(['bt:loi-quan-thu', 'bt:chon-tin', 'bt:khep']))
    // the later conversation reflects the choice
    const r = arc.dialogues.find((d) => d.id === 'dlg:bt/rinaldo')!
    const offered = choicesOf(r.nodes[r.start], s).map((c) => c.text)
    expect(offered).toContain('Thầy quản thư bảo trang sách ca ấy chép hỏng.')
    expect(offered).not.toContain('Thầy có cạo một trang sách ca trong thư viện không?')
    s = talk(s, 'dlg:bt/rinaldo', ['Thầy quản thư bảo trang sách ca ấy chép hỏng.'])
    expect(s.inventory).not.toContain('item:bt/manh-cu')
    expect(happened(s, 'bt:loi-rinaldo')).toBe(false)
    expect(journalOf(story, s).find((e) => e.beat === 'bt:chu-r')!.settledBy).toBeUndefined() // the R. stays a guess
  })

  it('branch B — investigate: Rinaldo gives another account, the guess is settled, the paths converge on telling it back', () => {
    let s = atTheBook()
    s = talk(s, 'dlg:bt/quan-thu', ['Ai đã cạo trang sách ca trên bục đọc?', 'Sửa chỗ chép hỏng là việc nên làm.', 'Con muốn hỏi thầy Rinaldo trước đã.'])
    expect(s.flags).toContain('bt:dieu-tra')
    expect(s.flags).not.toContain('bt:tin-quan-thu') // the expressive line changed nothing
    expect(s.quests['q:bt/ghi-chu']).toMatchObject({ status: 'active', stage: 'rinaldo' })
    s = visit(s, 'loc:bt/phong-chep')
    s = talk(s, 'dlg:bt/rinaldo', ['Thầy có cạo một trang sách ca trong thư viện không?'])
    expect(s.inventory).toContain('item:bt/manh-cu')
    expect(s.cards).toContain('ev:bt/hai-loi-ke')
    expect(s.quests['q:bt/ghi-chu'].stage).toBe('doi-chieu')
    const j = journalOf(story, s)
    expect(j.find((e) => e.beat === 'bt:chu-r')!.settledBy).toBe('bt:loi-rinaldo')
    expect(j.find((e) => e.beat === 'bt:loi-rinaldo')!.knowing).toBe('confirmed')
    expect(j.find((e) => e.beat === 'bt:hai-loi')!.knowing).toBe('hypothesis') // two accounts: not decided for the player
    s = talk(s, 'dlg:bt/quan-thu', ['Con đã nghe thầy Rinaldo kể về trang sách ca.'])
    expect(s.quests['q:bt/ghi-chu'].status).toBe('done')
    expect(happened(s, 'bt:doi-chieu')).toBe(true)
    expect(happened(s, 'bt:khep')).toBe(false)
  })

  it('reload: the save alone restores the story (beats, journal, quest, choices); nothing fires twice', () => {
    let s = atTheBook()
    s = talk(s, 'dlg:bt/quan-thu', ['Ai đã cạo trang sách ca trên bục đọc?', 'Con muốn hỏi thầy Rinaldo trước đã.'])
    const back = reload(s)
    expect(ids(back)).toEqual(ids(s))
    expect(due(story, back, { on: 'state' })).toEqual([])
    expect(narrate(back, { on: 'state' }).fired).toEqual([])
  })

  it('left half-way: leaving a conversation before choosing changes nothing, and the question is still there', () => {
    let s = atTheBook()
    // the librarian's account is heard (topic remembered), then the dialogue is closed at the choice
    const d = arc.dialogues.find((x) => x.id === 'dlg:bt/quan-thu')!
    s = effects(arc, d.nodes.g1.effects, s)
    s = narrate(s, { on: 'talked', dialogue: d.id }).save
    expect(s.flags.some((f) => f === 'bt:tin-quan-thu' || f === 'bt:dieu-tra')).toBe(false)
    expect(s.quests['q:bt/ghi-chu'].stage).toBe('hoi')
    // back later: the choice node is reached again from the question node's follow-up
    expect(d.nodes.g2.choices!.filter((c) => c.kind === 'consequence')).toHaveLength(2)
    expect(choicesOf(d.nodes.n2, s).some((c) => c.text.startsWith('Ai đã cạo'))).toBe(false)
  })
})
