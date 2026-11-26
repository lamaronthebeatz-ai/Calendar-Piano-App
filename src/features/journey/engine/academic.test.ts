import { describe, expect, it } from 'vitest'
import { ARCS } from '../content/arcs'
import { banThao } from '../content/ban-thao'
import { findArticle } from '../../theory/wiki'
import { handle, analysisModules } from '../../../umre/api'
import { departures, directionsOf, progressOf, acFlag } from './academic'
import { composeOf, umreScoreOf } from '../ui/academic/data'
import { toMei } from '../../compose/mei'
import { checkPuzzle } from './puzzles'
import { emptySave } from './save'

const arc = banThao
const page = arc.scores!.find((m) => m.id === 'mu:bt/trang-chep-lai')!

describe('academic: data and references', () => {
  it('every activity points at what exists: puzzles, music, UMK ids (library articles), UMRE modules', () => {
    const modules = new Set(analysisModules().map((m) => m.descriptor.id))
    for (const a of ARCS)
      for (const sq of a.sequences ?? [])
        for (const st of sq.steps) {
          if (st.puzzle) expect(a.puzzles.some((p) => p.id === st.puzzle), st.puzzle).toBe(true)
          if (st.music) expect(a.scores?.some((m) => m.id === st.music), st.music).toBe(true)
          for (const k of st.knowledge ?? []) expect(findArticle(k.slice(2))?.slug, k).toBe(k.slice(2))
          for (const m of st.reasoning?.modules ?? []) expect(modules.has(m), m).toBe(true)
          if (st.kind === 'score' || st.kind === 'analysis') expect(st.music).toBeTruthy()
        }
    for (const a of ARCS) for (const o of a.locations.flatMap((l) => l.objects ?? [])) if (o.academic) expect(a.sequences?.some((s) => s.id === o.academic), o.academic).toBe(true)
  })
  it('the comparison puzzle is graded on the data: its answer is where the two witnesses part ways', () => {
    const pz = arc.puzzles.find((p) => p.id === 'pz:bt/so-huong')!
    expect(departures(page.old!.dirs, page.notes)).toEqual([pz.answer])
    expect((pz.content as { choices: string[] }).choices).toHaveLength(page.notes.length)
    expect(page.old!.dirs).toHaveLength(page.notes.length - 1)
  })
  it('the sources puzzle is graded on the evidence cards: each answer is the kind the card records', () => {
    const pz = arc.puzzles.find((p) => p.id === 'pz:bt/loai-nguon')!
    for (const [k, kind] of Object.entries(pz.answer as Record<string, string>)) {
      const ev = arc.evidence.find((e) => e.id === `ev:bt/${k}`)!
      expect(ev, k).toBeTruthy()
      expect(ev.kind).toBe(kind)
      expect(ev.source).toBeTruthy()
    }
  })
  it('the listening puzzle uses the arc’s recording at the openings already sourced by the arc', () => {
    const pz = arc.puzzles.find((p) => p.id === 'pz:bt/nghe-ca-vien')!
    const ref = arc.puzzles.find((p) => p.id === 'pz:bt/nghe-ut-queant')!
    const clips = (pz.content as { clips: { id: string; start: number }[] }).clips
    const refClips = (ref.content as { clips: { id: string; start: number }[] }).clips
    for (const c of clips) expect(refClips.find((r) => r.id === c.id)?.start).toBe(c.start)
    expect(checkPuzzle(pz, ['ut', 'mi', 'la']).ok).toBe(true)
  })
})

describe('academic: one source of notes for the drawing and the analysis', () => {
  it('every note of the datum is drawn with its own id (taps map back to structured data, not pixels)', () => {
    const { mei, pieces } = toMei(composeOf(page))
    for (const n of page.notes) {
      expect(mei).toContain(`xml:id="${n.id}"`)
      expect(pieces.get(n.id)?.evId).toBe(n.id)
    }
  })
  it('UMRE analyses the same notes: real facts from the melody module, hypotheses labelled, no key needed or set', async () => {
    const score = umreScoreOf(page)
    const ans = await handle({ op: 'analyze', score, modules: ['melody.line'] })
    expect(ans.op).toBe('analyze')
    if (ans.op !== 'analyze') return
    const fs = ans.result.modules.flatMap((m) => m.findings)
    const range = fs.find((f) => f.topic === 'âm vực')!
    expect(range.kind).toBe('fact')
    expect(range.value).toMatchObject({ semitones: 10 }) // D4 – C5, computed by UMRE from the notes
    expect(fs.find((f) => f.topic === 'hình nét')?.kind).toBe('fact')
    for (const f of fs.filter((x) => x.kind === 'hypothesis')) expect(f.confidence).toBeTruthy()
    expect(JSON.stringify(ans)).not.toContain('globalKey')
  })
})

describe('academic: progress kept apart', () => {
  it('tried, done, correct and explained are separate; a solved puzzle is not "explained" by itself', () => {
    const st = arc.sequences![0].steps.find((x) => x.id === 'ac:bt/so-huong')!
    const s0 = { ...emptySave(), name: 'Minh' }
    expect(progressOf(s0, st)).toEqual({ tried: false, done: false, correct: false, explained: false })
    const tried = { ...s0, puzzles: { 'pz:bt/so-huong': { tries: 1, solved: false } } } as never
    expect(progressOf(tried, st)).toMatchObject({ tried: true, done: false, correct: false })
    const solved = { ...s0, puzzles: { 'pz:bt/so-huong': { tries: 2, solved: true } } } as never
    expect(progressOf(solved, st)).toMatchObject({ done: true, correct: true, explained: false })
    expect(progressOf({ ...s0, flags: [acFlag(st.id, 'explained')] }, st).explained).toBe(true)
  })
  it('directions are read from pitches, alteration counted', () => {
    expect(directionsOf([{ id: 'a', step: 0, oct: 4, alter: 0, dur: 1 }, { id: 'b', step: 0, oct: 4, alter: 1, dur: 1 }, { id: 'c', step: 6, oct: 3, alter: 0, dur: 1 }])).toEqual(['up', 'down'])
  })
})
