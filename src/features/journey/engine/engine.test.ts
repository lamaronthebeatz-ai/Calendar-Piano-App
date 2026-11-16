import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ARTICLES } from '../../theory/articles.source'
import { CHAPTERS, VN_CHAPTERS } from '../chapters'
import { legacyChapter, legacyPuzzle } from '../content/legacy'
import { analyzeDialogue, choicesOf, enter, step } from './dialogue'
import { checkPuzzle, puzzleProblem } from './puzzles'
import { levelOf, masteryOf, puzzleXp, recordAttempt, verdictXp } from './progression'
import { analyzeQuest, settleQuests } from './quest'
import { emptySave, fromV1, mergeSaves, readSave, type Save } from './save'
import type { DialogueDef, PuzzleDef, QuestDef } from './types'
import { validateChapter } from './validate'
import { apply, holds, questDone } from './world'

const slugs = new Set(ARTICLES.map((a) => a.slug))
const s0 = (o: Partial<Save> = {}): Save => ({ ...emptySave(), ...o })

describe('save', () => {
  it('reads a v1 save unchanged, adds the engine fields and records open chapters', () => {
    const v1 = { name: 'Minh', portrait: 'p-durer', done: ['trung-co/x'], cards: ['c1'], verdicts: { 'trung-co/k': 'fact' }, step: { 'trung-co/x': 3 }, seen: ['trung-co'], endless: {} }
    const { save, repaired } = fromV1(v1, () => ['trung-co'], () => ['a:organum'])
    expect(repaired).toEqual([])
    expect(save).toMatchObject({ version: 2, name: 'Minh', done: ['trung-co/x'], cards: ['c1'], step: { 'trung-co/x': 3 }, chaptersOpen: ['trung-co'], codex: ['a:organum'], xp: 0 })
  })
  it('repairs a broken field alone and keeps the rest', () => {
    const { save, repaired } = readSave({ version: 2, name: 'Minh', done: 'oops', cards: ['c1'], endless: { x: { seed: 'no' } }, skills: { history: 7 } })
    expect(repaired.sort()).toEqual(['done', 'endless'])
    expect(save.name).toBe('Minh')
    expect(save.cards).toEqual(['c1'])
    expect(save.done).toEqual([])
    expect(save.skills).toMatchObject({ history: 7, theory: 0 })
  })
  it('garbage reads as an empty save, flagged', () => {
    expect(readSave('x').repaired).toEqual(['*'])
    expect(readSave(undefined).repaired).toEqual([])
  })
  it('merging two saves loses nothing done on either side', () => {
    const a = s0({ done: ['a'], xp: 30, quests: { 'q:1': { stage: 's2', status: 'done', started: 1, done: 2 } } })
    const b = s0({ done: ['b'], xp: 10, quests: { 'q:1': { stage: 's1', status: 'active', started: 1 } }, name: 'Lan' })
    const m = mergeSaves(a, b)
    expect(m.done.sort()).toEqual(['a', 'b'])
    expect(m.xp).toBe(30)
    expect(m.quests['q:1'].status).toBe('done')
    expect(m.name).toBe('Lan')
  })
})

describe('progress store (localStorage)', () => {
  const mem = new Map<string, string>()
  beforeEach(() => {
    mem.clear()
    vi.resetModules()
    vi.stubGlobal('localStorage', { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, v), removeItem: (k: string) => void mem.delete(k) })
  })
  it('converts journey:v1 once, keeps the original aside, never relocks an opened chapter', async () => {
    const first = CHAPTERS[0]
    const v1 = JSON.stringify({ name: 'Minh', portrait: 'p-durer', done: first.scenes.map((s) => `${first.id}/${s.id}`), cards: [], verdicts: {}, step: {}, seen: [] })
    mem.set('journey:v1', v1)
    const p = await import('../progress')
    const s = p.currentSave()
    expect(mem.get('journey:v1.bak')).toBe(v1)
    expect(mem.get('journey:v1')).toBe(v1)
    expect(s.chaptersOpen).toContain(CHAPTERS[1].id)
    expect(s.xp).toBeGreaterThan(0)
    // the first chapter gains a scene the player has not played: chapter II stays open
    expect(p.opened(CHAPTERS[1], { ...s, done: s.done.slice(1) })).toBe(true)
  })
  it('an unreadable v2 save is set aside, not overwritten', async () => {
    mem.set('journey:v2', '{broken')
    const p = await import('../progress')
    expect(p.currentSave().name).toBe('')
    expect(mem.get('journey:v2.broken')).toBe('{broken')
  })
  it('starting over keeps the old journey aside', async () => {
    const p = await import('../progress')
    p.update(() => ({ name: 'Minh' }))
    p.resetJourney()
    expect(JSON.parse(mem.get('journey:v2.reset')!).name).toBe('Minh')
    expect(p.currentSave().name).toBe('')
  })
})

describe('world', () => {
  const q: QuestDef = { id: 'q:a', chapter: 'c', title: '', summary: '', kind: 'side', stages: [{ id: 's1', text: '', objectives: [{ solve: 'pz:1' }] }], rewards: [], links: [] }
  it('conditions and effects', () => {
    let s = s0()
    s = apply({ set: 'f' }, s, () => q)
    s = apply({ startQuest: 'q:a' }, s, () => q, 5)
    s = apply({ remember: 'hexachord', with: 'npc:guido' }, s, () => q)
    s = apply({ xp: 20, skill: 'theory' }, s, () => q)
    expect(holds({ all: [{ flag: 'f' }, { quest: 'q:a', is: 'active' }, { met: 'npc:guido' }, { topic: 'hexachord', with: 'npc:guido' }] }, s)).toBe(true)
    expect(holds({ not: { any: [{ item: 'x' }, { solved: 'pz:1' }] } }, s)).toBe(true)
    expect(holds({ skill: 'theory', level: 1 }, s)).toBe(false)
    expect(s.quests['q:a']).toEqual({ stage: 's1', status: 'active', started: 5 })
    // starting a finished or running quest again changes nothing
    expect(apply({ startQuest: 'q:a' }, s, () => q, 9)).toBe(s)
  })
  it('a legacy quest is done when its story scene is', () => {
    expect(questDone('q:trung-co/x', s0({ done: ['trung-co/x'] }))).toBe(true)
  })
})

describe('dialogue', () => {
  const d: DialogueDef = {
    id: 'dlg:t',
    start: 'a',
    nodes: {
      a: { speaker: 'narrator', text: 'Mở', voice: 'narration', next: 'b' },
      b: { speaker: 'npc:x', text: 'Chỉ khi đã có thẻ', voice: 'reconstructed', when: { evidence: 'ev:1' }, next: 'c' },
      c: {
        speaker: 'npc:x',
        text: 'Hỏi gì?',
        voice: 'reconstructed',
        choices: [
          { text: 'Về neume', next: 'd', effects: [{ remember: 'neume', with: 'npc:x' }] },
          { text: 'Trình thẻ', next: 'e', when: { evidence: 'ev:1' } },
        ],
      },
      d: { speaker: 'npc:x', text: 'Neume…', voice: 'reconstructed', next: 'c' },
      e: { speaker: 'npc:x', text: 'Ồ!', voice: 'reconstructed', end: true },
    },
  }
  it('passes over nodes whose condition fails, hides choices, applies the choice taken', () => {
    expect(step(d, 'a', s0()).next).toBe('c')
    expect(step(d, 'a', s0({ cards: ['ev:1'] })).next).toBe('b')
    expect(choicesOf(d.nodes.c, s0()).map((c) => c.i)).toEqual([0])
    const r = step(d, 'c', s0(), 0)
    expect(r).toEqual({ next: 'd', effects: [{ remember: 'neume', with: 'npc:x' }] })
    // a hidden choice cannot be taken
    expect(step(d, 'c', s0(), 1).next).toBe('c')
    expect(enter(d, 'zz', s0())).toBeNull()
  })
  it('the structure is sound; dead ends, closed loops and unreachable nodes are reported', () => {
    expect(analyzeDialogue(d)).toEqual([])
    const bad: DialogueDef = {
      id: 'dlg:bad',
      start: 'a',
      nodes: {
        a: { speaker: 'me', text: '', voice: 'reconstructed', next: 'b' },
        b: { speaker: 'me', text: '', voice: 'reconstructed', next: 'a' },
        z: { speaker: 'me', text: '', voice: 'quote', end: true },
      },
    }
    const errs = analyzeDialogue(bad).join('\n')
    expect(errs).toMatch(/trích nguyên văn mà không có nguồn/)
    const loop = analyzeDialogue({ ...bad, nodes: { ...bad.nodes, z: { speaker: 'me', text: '', voice: 'narration', end: true } } }).join('\n')
    expect(loop).toMatch(/z: không tới được/)
    expect(loop).toMatch(/a: không đi được tới kết thúc/)
    expect(analyzeDialogue({ id: 'x', start: 'a', nodes: { a: { speaker: 'me', text: '', voice: 'narration' } } })[0]).toMatch(/ngõ cụt/)
  })
})

describe('quest', () => {
  const q: QuestDef = {
    id: 'q:m',
    chapter: 'c',
    title: '',
    summary: '',
    kind: 'main',
    stages: [
      { id: 'tim', text: '', objectives: [{ visit: 'loc:thu-vien' }], onDone: [{ set: 'thay-ban-thao' }] },
      { id: 'giai', text: '', objectives: [{ solve: 'pz:neume' }], next: [{ when: { flag: 'tin-theodoric' }, to: 'sai' }, { when: { not: { flag: 'tin-theodoric' } }, to: 'ket' }] },
      { id: 'sai', text: '', objectives: [{ collect: 'ev:2' }], next: 'ket' },
      { id: 'ket', text: '', objectives: [{ cond: { flag: 'ket-luan' } }] },
    ],
    rewards: [{ give: 'item:ban-tay' }],
    links: [],
  }
  const defs = (id: string) => (id === q.id ? q : undefined)
  it('stages advance as objectives are met, branch on conditions, and end with rewards', () => {
    let s = s0({ quests: { 'q:m': { stage: 'tim', status: 'active', started: 0 } }, visited: ['loc:thu-vien'] })
    s = settleQuests(s, defs, 1)
    expect(s.quests['q:m'].stage).toBe('giai')
    expect(s.flags).toContain('thay-ban-thao')
    s = settleQuests({ ...s, puzzles: { 'pz:neume': { solved: true, tries: 1, hints: 0, at: 1 } } }, defs, 2)
    expect(s.quests['q:m'].stage).toBe('ket')
    s = settleQuests({ ...s, flags: [...s.flags, 'ket-luan'] }, defs, 3)
    expect(s.quests['q:m']).toMatchObject({ status: 'done', done: 3 })
    expect(s.inventory).toEqual(['item:ban-tay'])
    expect(analyzeQuest(q)).toEqual([])
    expect(analyzeQuest({ ...q, stages: [{ id: 'a', text: '', objectives: [], next: 'zz' }] }).join()).toMatch(/zz không có/)
  })
})

describe('puzzles', () => {
  const base = { difficulty: 2 as const, title: '', instructions: '', hints: ['h'], explanation: 'vì…', skills: ['history' as const], links: ['a:organum' as const] }
  it('each kind checks answers, marks the wrong parts and rejects a puzzle its own answer cannot solve', () => {
    const order: PuzzleDef = { ...base, id: 'pz:o', type: 'order', content: { ask: '', items: [{ id: 'a', text: '' }, { id: 'b', text: '' }, { id: 'c', text: '' }] }, answer: ['a', 'b', 'c'] }
    expect(checkPuzzle(order, ['a', 'c', 'b'])).toEqual({ ok: false, wrong: ['c', 'b'], feedback: undefined })
    expect(puzzleProblem(order)).toBeNull()
    expect(puzzleProblem({ ...order, answer: ['a', 'b'] })).toMatch(/hoán vị/)
    const match: PuzzleDef = { ...base, id: 'pz:m', type: 'match', content: { ask: '', left: [{ id: 'g', text: 'Guido' }], right: [{ id: 'mi', text: 'Micrologus' }, { id: 'x', text: 'x' }] }, answer: { g: 'mi' } }
    expect(checkPuzzle(match, { g: 'x' }).wrong).toEqual(['g'])
    const blank: PuzzleDef = { ...base, id: 'pz:b', type: 'blank', content: { ask: '', text: '{1} queant laxis, {2} sonare' }, answer: { 1: 'Ut', 2: ['re', 'resonare'] } }
    expect(checkPuzzle(blank, { 1: ' ut ', 2: 'Re' }).ok).toBe(true)
    expect(checkPuzzle(blank, { 1: 'do', 2: 're' }).wrong).toEqual(['1'])
    const classify: PuzzleDef = { ...base, id: 'pz:c', type: 'classify', content: { ask: '', items: [{ id: 'm', text: '' }], labels: [{ id: 'primary', text: '' }, { id: 'anecdote', text: '' }] }, answer: { m: 'primary' } }
    expect(puzzleProblem({ ...classify, answer: { m: 'nope' } })).toMatch(/nhãn/)
    const choice: PuzzleDef = { ...base, id: 'pz:x', type: 'choice', content: { ask: '', choices: ['a', 'b'] }, answer: 1, feedback: [{ key: '0', text: 'Nhầm với…' }] }
    expect(checkPuzzle(choice, 0)).toEqual({ ok: false, wrong: ['0'], feedback: '0' })
    expect(puzzleProblem({ ...choice, explanation: ' ' })).toMatch(/giải thích/)
    expect(puzzleProblem({ ...choice, type: 'zzz' })).toMatch(/chưa có/)
  })
})

describe('progression', () => {
  const p: PuzzleDef = { id: 'pz:n', type: 'neume', difficulty: 3, title: '', instructions: '', content: {}, answer: 0, hints: ['h'], explanation: 'x', skills: ['theory', 'history'], links: ['a:ky-am-binh-ca-gregorian'] }
  it('XP once per puzzle, less with hints and wrong tries, never below 2', () => {
    expect(puzzleXp({ difficulty: 3 }, 0, 0)).toBe(20)
    expect(puzzleXp({ difficulty: 3 }, 1, 2)).toBeLessThan(20)
    expect(puzzleXp({ difficulty: 1 }, 3, 3)).toBe(2)
    let s = s0()
    s = { ...s, ...recordAttempt(s, p, false, 0, 0) }
    s = { ...s, ...recordAttempt(s, p, true, 0, 0) }
    const xp = s.xp
    expect(xp).toBeGreaterThan(0)
    s = { ...s, ...recordAttempt(s, p, true, 0, 0) }
    expect(s.xp).toBe(xp)
    expect(s.puzzles['pz:n']).toMatchObject({ solved: true, tries: 3 })
    expect(levelOf(0)).toBe(1)
    expect(levelOf(100)).toBe(2)
  })
  it('one right answer never makes a concept more than "met"; mastery needs varied, applied, repeated use', () => {
    const c = 'a:ky-am-binh-ca-gregorian'
    let s = s0()
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:1', type: 'choice' }, true, 0, 0) }
    expect(masteryOf(s.mastery[c])).toBe(1)
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:1', type: 'choice' }, true, 0, 0) }
    expect(masteryOf(s.mastery[c])).toBe(1)
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:2', type: 'order' }, true, 0, 0) }
    expect(masteryOf(s.mastery[c])).toBe(2)
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:3' }, true, 0, Date.UTC(2026, 10, 16)) }
    expect(masteryOf(s.mastery[c])).toBe(3)
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:4' }, true, 0, Date.UTC(2026, 10, 16, 5)) }
    expect(masteryOf(s.mastery[c])).toBe(3)
    s = { ...s, ...recordAttempt(s, { ...p, id: 'pz:5' }, true, 0, Date.UTC(2026, 10, 18)) }
    expect(masteryOf(s.mastery[c])).toBe(4)
  })
  it('a court verdict trains source criticism once, only when right', () => {
    expect(verdictXp(s0(), 'k', true)).toMatchObject({ xp: 5 })
    expect(verdictXp(s0(), 'k', false)).toEqual({})
    expect(verdictXp(s0({ verdicts: { k: 'fact' } }), 'k', true)).toEqual({})
  })
})

describe.each([...CHAPTERS, ...VN_CHAPTERS])('chương $numeral qua engine', (ch) => {
  const def = legacyChapter(ch)
  it('nội dung cũ hợp lệ: tham chiếu, thoại, câu đố tự giải được, nhân vật lịch sử có nguồn', () => {
    expect(validateChapter(def, (s) => slugs.has(s))).toEqual([])
  })
  it('giải đúng mọi câu đố thì xong chương; đáp án cũ vẫn đúng qua engine', () => {
    for (const sc of ch.scenes) expect(checkPuzzle(legacyPuzzle(ch, sc), sc.quest.answer).ok).toBe(true)
    const done = s0({ done: ch.scenes.map((sc) => `${ch.id}/${sc.id}`) })
    expect(holds(def.completion, done)).toBe(true)
    expect(holds(def.completion, s0({ done: done.done.slice(1) }))).toBe(false)
  })
})

describe('id đã phát hành', () => {
  it('không id nào trong ids.lock.json biến mất (save của người chơi trỏ tới chúng)', async () => {
    const locked: string[] = (await import('../content/ids.lock.json')).default
    const now = new Set(CHAPTERS.flatMap((c) => [`chapter:${c.id}`, ...c.scenes.map((s) => `scene:${c.id}/${s.id}`), ...c.scenes.map((s) => `card:${s.card.id}`), ...c.court.claims.map((x) => `claim:${c.id}/${x.id}`)]))
    expect(locked.filter((id) => !now.has(id))).toEqual([])
  })
})

describe('lát cắt "Bản thảo thất lạc"', async () => {
  const { banThao } = await import('../content/ban-thao')
  const defs = (id: string) => banThao.quests.find((q) => q.id === id)
  it('nội dung hợp lệ, mọi câu đố tự giải được', () => {
    expect(validateChapter(banThao, (s) => slugs.has(s), (id) => id.startsWith('q:trung-co/'))).toEqual([])
  })
  it('đáp án neume và hexachord đúng theo khoá và lục âm (không tin lời người soạn)', () => {
    for (const id of ['pz:bt/doc-khoa-do', 'pz:bt/doc-khoa-fa', 'pz:bt/luc-am']) expect(puzzleProblem(banThao.puzzles.find((p) => p.id === id)!)).toBeNull()
    const fa = banThao.puzzles.find((p) => p.id === 'pz:bt/doc-khoa-fa')!
    expect(puzzleProblem({ ...fa, answer: ['Đô', 'Rê', 'Mi', 'Fa', 'Sol'] })).toMatch(/không khớp/)
  })
  it('kết luận phải có chứng cứ: lời đồn làm chỗ dựa bị bác, thiếu chứng cứ bị nhắc', () => {
    const p = banThao.puzzles.find((x) => x.id === 'pz:bt/ket-luan')!
    expect(checkPuzzle(p, { conclusion: 'co', evidence: ['ev:bt/sigebert', 'ev:bt/loi-ca-truong'] })).toMatchObject({ ok: false, feedback: 'ket-luan:co' })
    expect(checkPuzzle(p, { conclusion: 'mot-phan', evidence: ['ev:bt/micrologus', 'ev:bt/ban-tay-the-ky-12', 'ev:bt/loi-ca-truong'] })).toMatchObject({ ok: false, feedback: 'yeu:ev:bt/loi-ca-truong' })
    expect(checkPuzzle(p, { conclusion: 'mot-phan', evidence: ['ev:bt/micrologus', 'ev:bt/sigebert'] })).toMatchObject({ ok: false, feedback: 'thieu' })
    expect(checkPuzzle(p, { conclusion: 'mot-phan', evidence: ['ev:bt/micrologus', 'ev:bt/ban-tay-the-ky-12', 'ev:bt/sigebert'] }).ok).toBe(true)
  })
  it('đi hết tuyến chính bằng engine: mỗi giai đoạn mở đúng nơi tiếp theo, kết thúc có phần thưởng', () => {
    let s = s0({ done: ['trung-co/neume'] })
    expect(holds(banThao.opens, s)).toBe(true)
    const solve = (...ids: string[]) => (s = settleQuests({ ...s, puzzles: { ...s.puzzles, ...Object.fromEntries(ids.map((id) => [id, { solved: true, tries: 1, hints: 0, at: 1 }])) } }, defs, 1))
    s = apply({ startQuest: 'q:bt/ban-thao' }, s, defs, 1)
    s = settleQuests({ ...s, visited: ['loc:bt/thu-vien'], inventory: ['item:bt/trang-ban-thao'] }, defs, 1)
    expect(s.quests['q:bt/ban-thao'].stage).toBe('doc')
    s = { ...s, dialogue: { ...s.dialogue, topics: { 'npc:bt/rinaldo': ['gap'] } } }
    solve('pz:bt/hai-loi-ghi', 'pz:bt/doc-khoa-do')
    expect(s.flags).toContain('open:loc:bt/arezzo')
    s = { ...s, dialogue: { ...s.dialogue, topics: { ...s.dialogue.topics, 'npc:bt/guido': ['gap'] } } }
    solve('pz:bt/nghe-ut-queant', 'pz:bt/dien-am-tiet', 'pz:bt/luc-am')
    expect(s.inventory).toContain('item:bt/ban-tay')
    s = { ...s, dialogue: { ...s.dialogue, topics: { ...s.dialogue.topics, 'npc:bt/gualtiero': ['gap'] } } }
    solve('pz:bt/nien-dai', 'pz:bt/phan-loai-chung-cu', 'pz:bt/tac-pham-guido')
    expect(s.flags).toContain('open:loc:bt/phong-hop')
    solve('pz:bt/ket-luan')
    expect(s.quests['q:bt/ban-thao'].status).toBe('done')
    expect(s.flags).toContain('bt-xong')
    expect(holds(banThao.completion, s)).toBe(true)
  })
})

describe('Phase 5–6: kỹ năng, tranh luận, báo cáo, phiên toà', async () => {
  const { banThao } = await import('../content/ban-thao')
  const { branch, hasPerk } = await import('./skills')
  const { reportDraft, reportProblems } = await import('./report')
  it('cây kỹ năng: bậc theo điểm, phần thưởng mở đúng bậc', () => {
    expect(branch(s0(), 'theory')).toMatchObject({ level: 0, toNext: 50 })
    const s = s0({ skills: { ...s0().skills, theory: 60, research: 150 } })
    expect(branch(s, 'theory')).toMatchObject({ level: 1, title: 'Người đọc nốt', toNext: 90 })
    expect(hasPerk(s, 'mutation')).toBe(true)
    expect(hasPerk(s0(), 'report')).toBe(false)
    // the hidden quest's object only shows with the skill and the item
    const obj = banThao.locations.find((l) => l.id === 'loc:bt/arezzo')!.objects!.find((o) => o.id === 'doi-luc-am')!
    expect(holds(obj.when!, s0({ inventory: ['item:bt/ban-tay'] }))).toBe(false)
    expect(holds(obj.when!, { ...s, inventory: ['item:bt/ban-tay'] })).toBe(true)
  })
  it('tranh luận: mỗi lượt một câu đáp có căn cứ; câu dựa vào uy tín có lời giải thích riêng', () => {
    const p = banThao.puzzles.find((x) => x.id === 'pz:bt/tranh-luan')!
    expect(checkPuzzle(p, { t1: 'enchiriadis', t2: 'giao-hoang', t3: 'so-dong' })).toMatchObject({ ok: false, wrong: ['t2'], feedback: 't2:giao-hoang' })
    expect(checkPuzzle(p, { t1: 'enchiriadis', t2: 'khoa', t3: 'so-dong' }).ok).toBe(true)
    expect(puzzleProblem({ ...p, answer: { t1: 'zzz' } })).toMatch(/mỗi lượt/)
  })
  it('báo cáo: cần câu hỏi, hai chứng cứ có nguồn, không dựa vào giai thoại; tham khảo là nguồn thật', () => {
    const ev = (id: string) => banThao.evidence.find((e) => e.id === id)!
    const base = { title: 'x', question: 'Ai vẽ bàn tay?', analysis: 'a'.repeat(90), conclusion: 'Đời sau.' }
    expect(reportProblems({ ...base, evidence: [ev('ev:bt/micrologus')] }).join()).toMatch(/hai chứng cứ/)
    expect(reportProblems({ ...base, evidence: [ev('ev:bt/micrologus'), ev('ev:bt/sigebert'), ev('ev:bt/loi-ca-truong')] }).join()).toMatch(/Lời ca trưởng/)
    const ok = { ...base, evidence: [ev('ev:bt/micrologus'), ev('ev:bt/ban-tay-the-ky-12')] }
    expect(reportProblems(ok)).toEqual([])
    const r = reportDraft(ok)
    expect(r.articles).toEqual(['hexachord-va-ban-tay-guido'])
    expect(r.draft).toMatch(/## Tài liệu tham khảo\n- \[\[hexachord-va-ban-tay-guido\]\]/)
  })
  it('phiên toà: nguồn đã chỉ ra được giữ khi gộp hai save', () => {
    expect(mergeSaves(s0({ trial: { 'a/1': 'x' } }), s0({ trial: { 'a/2': 'y' } })).trial).toEqual({ 'a/1': 'x', 'a/2': 'y' })
    expect(readSave({ trial: { k: 3 } }).repaired).toEqual(['trial'])
  })
})

describe('Phase 8: chơi lại, độ khó theo năng lực, thử thách ngày, ôn luyện', async () => {
  const r = await import('./replay')
  const { makeTrip, loadPool } = await import('../endless')
  const { banThao } = await import('../content/ban-thao')
  it('độ khó theo tỉ lệ đúng ngay gần đây, không theo cấp', () => {
    expect(r.levelFrom([true, true])).toBe('vua')
    expect(r.levelFrom(Array(10).fill(true))).toBe('kho')
    expect(r.levelFrom([...Array(6).fill(false), ...Array(4).fill(true)])).toBe('de')
    // only the last 20 count
    expect(r.levelFrom([...Array(30).fill(false), ...Array(20).fill(true)])).toBe('kho')
  })
  it('chuyến khó nhiều câu năm và giai thoại hơn chuyến dễ (cùng kho dữ liệu đã kiểm)', async () => {
    const pool = await loadPool()
    const count = (w: Record<'event' | 'year' | 'work' | 'claim', number>) => {
      const kinds = { y: 0, c: 0 }
      for (let seed = 1; seed <= 40; seed++)
        for (const st of makeTrip(CHAPTERS[2], pool, seed, [], 5, w)) {
          if (st.scene.title === 'Dòng thời gian') kinds.y++
          if (st.scene.title === 'Lời đồn') kinds.c++
        }
      return kinds.y + kinds.c
    }
    expect(count(r.KIND_WEIGHTS.kho)).toBeGreaterThan(count(r.KIND_WEIGHTS.de))
  })
  it('thử thách ngày: cùng ngày cùng hạt giống và chương; chuỗi ngày liên tiếp', () => {
    expect(r.dailySeed('2026-11-16')).toBe(r.dailySeed('2026-11-16'))
    expect(r.dailySeed('2026-11-16')).not.toBe(r.dailySeed('2026-11-17'))
    expect(r.dailyChapter('2026-11-16', [])).toBeNull()
    expect(['a', 'b']).toContain(r.dailyChapter('2026-11-16', ['a', 'b']))
    const e = { seed: 1, at: 5, total: 5, right: 4, asked: [] }
    const s = s0({ endless: { [r.dailyKey('2026-11-14')]: e, [r.dailyKey('2026-11-15')]: e } })
    expect(r.streak(s, '2026-11-16')).toBe(2)
    expect(r.streak({ ...s, endless: { ...s.endless, [r.dailyKey('2026-11-16')]: e } }, '2026-11-16')).toBe(3)
  })
  it('ôn luyện: câu đã giải đến hạn theo mức thành thạo; lần ôn đúng nâng mức, không cộng XP', () => {
    const p = banThao.puzzles.find((x) => x.id === 'pz:bt/doc-khoa-do')!
    const day = 86_400_000
    let s = s0({ ...recordAttempt(s0(), p, true, 0, 0) })
    expect(r.dueReviews(banThao.puzzles, s, day / 2)).toEqual([])
    expect(r.dueReviews(banThao.puzzles, s, day + 1).map((x) => x.id)).toEqual(['pz:bt/doc-khoa-do'])
    const xp = s.xp
    s = { ...s, ...r.recordReview(s, { ...p, type: 'order' }, true, 0, day + 1) }
    expect(s.xp).toBe(xp)
    // right twice in two kinds, and the first solve was a practical (neume) one: applied
    expect(masteryOf(s.mastery['a:ky-am-binh-ca-gregorian'])).toBe(3)
    // a wrong review leaves the clock where it was: due again at once
    const before = s.puzzles[p.id].at
    s = { ...s, ...r.recordReview(s, p, false, 0, 3 * day) }
    expect(s.puzzles[p.id].at).toBe(before)
  })
  it('chơi lại chương và Hành trình mới+ giữ kỹ năng, thẻ, Codex, chương đã mở', () => {
    const s = s0({ done: ['a/1', 'b/1'], verdicts: { 'a/k': 'fact', 'b/k': 'legend' }, trial: { 'a/k': 'x' }, step: { 'a/1': 2 }, cards: ['c'], codex: ['a:x'], xp: 90, chaptersOpen: ['a', 'b'], quests: { 'q:z': { stage: 's', status: 'done', started: 1 } } })
    const one = { ...s, ...r.replayChapter(s, 'a') }
    expect(one).toMatchObject({ done: ['b/1'], verdicts: { 'b/k': 'legend' }, trial: {}, step: {}, cards: ['c'], xp: 90 })
    const ng = { ...s, ...r.newGamePlus(s) }
    expect(ng).toMatchObject({ done: [], quests: {}, ngPlus: 1, cards: ['c'], codex: ['a:x'], xp: 90, chaptersOpen: ['a', 'b'] })
  })
})

describe('mọi tuyến điều tra (Phase 7)', async () => {
  const { ARCS } = await import('../content/arcs')
  for (const arc of ARCS)
    it(`${arc.title}: hợp lệ, tuyến chính đi hết được bằng engine`, () => {
      expect(validateChapter(arc, (s) => slugs.has(s), (id) => id.startsWith(`q:${arc.chapter}/`))).toEqual([])
      for (const p of arc.puzzles) expect([p.id, puzzleProblem(p)]).toEqual([p.id, null])
      const defs = (id: string) => arc.quests.find((q) => q.id === id)
      const scene = arc.opens as { quest: string }
      let s = s0({ done: [scene.quest.slice(2)] })
      expect(holds(arc.opens, s)).toBe(true)
      s = apply({ startQuest: arc.main }, s, defs, 1)
      for (const stage of defs(arc.main)!.stages) {
        expect(s.quests[arc.main]?.stage).toBe(stage.id)
        for (const o of stage.objectives) {
          if ('talk' in o) s = { ...s, dialogue: { ...s.dialogue, topics: { ...s.dialogue.topics, [o.talk]: [...(s.dialogue.topics[o.talk] ?? []), 'gap'] } } }
          if ('visit' in o) s = { ...s, visited: [...s.visited, o.visit] }
          if ('collect' in o) s = { ...s, inventory: [...s.inventory, o.collect] }
          if ('solve' in o) s = { ...s, puzzles: { ...s.puzzles, [o.solve]: { solved: true, tries: 1, hints: 0, at: 1 } } }
        }
        s = settleQuests(s, defs, 1)
      }
      expect(holds(arc.completion, s)).toBe(true)
      // every place a stage opens exists, and every hidden place is opened by some stage
      const opened = defs(arc.main)!.stages.flatMap((st) => st.onDone ?? []).flatMap((e) => ('unlock' in e ? [e.unlock] : []))
      for (const l of arc.locations.filter((x) => x.hidden)) expect(opened).toContain(l.id)
      // every piece of evidence a puzzle asks for can be found somewhere in the arc
      const given = new Set(JSON.stringify(arc).match(/"evidence":"ev:[^"]+"/g)?.map((x) => x.slice(12, -1)))
      for (const p of arc.puzzles.filter((x) => x.type === 'investigation')) for (const e of (p.content as { evidence: string[] }).evidence) expect([p.id, e, given.has(e)]).toEqual([p.id, e, true])
    })
})
