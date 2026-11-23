import { readFileSync } from 'node:fs'
import { Window } from 'happy-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import { fromMusicXml } from '../../../features/compose/exchange'
import { handle } from '../../api'
import { createEngine } from '../../engine'
import { auditResult } from '../../orchestration/orchestrator'
import { fromCompose } from '../../repr/adapters/compose'
import { formatPitch, formatSpelling, fromDiatonic, parsePitch, parseSpelling } from '../../repr/pitch'
import { notesOf, type Score } from '../../repr/score'
import { harmonyRulebook } from '../../rulebook/harmony'
import { line } from '../../testing/fixtures'
import { harmonyValidator } from '../../validation/harmony'
import { identify } from './identify'
import { continuations, consequences } from './reasoning'
import { chordSequences } from './harmonize'
import { fourPartTask, harmonizeTask, triadOn } from './task'

const C = { tonic: { letter: 0 as const, alter: 0 }, minor: false }

const rb = harmonyRulebook()
const S = (xs: string) => xs.split(' ').map(parseSpelling)
const withVoice = (s: Score, v: number, pitches: string[]): Score => ({
  ...s, voices: s.voices.map((x, i) => (i !== v ? x : { ...x, events: x.events.map((e, k) => (e.kind === 'note' ? { ...e, pitch: parsePitch(pitches[k]) } : e)) })),
})
beforeAll(() => {
  ;(globalThis as unknown as { DOMParser: unknown }).DOMParser = new Window().DOMParser
})

/**
 * Ground truth written by hand from the definitions (stacked thirds, inversion by the bass, incomplete forms —
 * Rimsky-Korsakov tr. 11 – 14, 24, 47 – 48) — not produced by the system under test.
 */
const CHORDS: { notes: string; bass: string | null; spelled?: boolean; root: string; quality: string; inversion?: number | null; missing?: string[]; foreign?: string[]; ambiguous?: boolean; insufficient?: boolean; why: string }[] = [
  { notes: 'C E G', bass: 'C', root: 'C', quality: 'major', inversion: 0, why: 'hợp âm ba trưởng thế gốc' },
  { notes: 'E G C', bass: 'E', root: 'C', quality: 'major', inversion: 1, why: 'hợp âm sáu' },
  { notes: 'G C E', bass: 'G', root: 'C', quality: 'major', inversion: 2, why: 'hợp âm bốn – sáu' },
  { notes: 'A C E', bass: 'A', root: 'A', quality: 'minor', inversion: 0, why: 'ba thứ' },
  { notes: 'B D F', bass: 'B', root: 'B', quality: 'diminished', inversion: 0, why: 'ba giảm bậc VII' },
  { notes: 'C E G#', bass: 'C', root: 'C', quality: 'augmented', inversion: 0, why: 'ba tăng: G♯ viết thăng là quãng 5 tăng' },
  { notes: 'G B D F', bass: 'G', root: 'G', quality: 'dominant-7', inversion: 0, why: 'D7' },
  { notes: 'B D F G', bass: 'B', root: 'G', quality: 'dominant-7', inversion: 1, why: 'D6/5' },
  { notes: 'D F G B', bass: 'D', root: 'G', quality: 'dominant-7', inversion: 2, why: 'D4/3' },
  { notes: 'F G B D', bass: 'F', root: 'G', quality: 'dominant-7', inversion: 3, why: 'D2: quãng 7 ở bass' },
  { notes: 'G B F', bass: 'G', root: 'G', quality: 'dominant-7', missing: ['fifth'], why: 'D7 thiếu quãng 5 (tr. 47 – 48)' },
  { notes: 'C E', bass: 'C', root: 'C', quality: 'major', missing: ['fifth'], insufficient: true, why: 'hai âm: không đủ dữ liệu để chắc là hợp âm nào' },
  { notes: 'C E G D', bass: 'C', root: 'C', quality: 'major', foreign: ['D'], why: 'D là nốt ngoài hợp âm (ứng viên nốt lướt / thêu)' },
  { notes: 'B D F Ab', bass: 'B', root: 'B', quality: 'diminished-7', inversion: 0, why: 'bảy giảm viết theo bậc VII của Đô thứ' },
  { notes: 'C E G#', bass: null, spelled: false, root: 'C', quality: 'augmented', ambiguous: true, why: 'không có cách viết và bass: ba tăng chia đều quãng 8, ba cách đọc ngang nhau' },
  { notes: 'B D F Ab', bass: null, spelled: false, root: 'B', quality: 'diminished-7', ambiguous: true, why: 'bảy giảm không cách viết: bốn gốc ngang nhau' },
  { notes: 'C E Ab', bass: 'C', root: 'Ab', quality: 'augmented', inversion: 1, why: 'cách viết quyết định: C–E–A♭ là A♭ tăng thể đảo 1' },
]

describe('GĐ9 — chuẩn đối chiếu viết tay: nhận diện hợp âm', () => {
  for (const c of CHORDS)
    it(`${c.notes}${c.bass ? ` / ${c.bass}` : ''}: ${c.why}`, () => {
      const r = identify(S(c.notes), c.bass ? parseSpelling(c.bass) : null, { spelled: c.spelled })
      const best = r.readings[0]
      expect(`${formatSpelling(best.chord.root, 'en')} ${best.chord.quality}`).toBe(`${c.root} ${c.quality}`)
      if (c.inversion !== undefined) expect(best.inversion).toBe(c.inversion)
      expect(best.missing).toEqual(c.missing ?? [])
      expect(best.foreign.map((f) => formatSpelling(f, 'en'))).toEqual(c.foreign ?? [])
      expect(r.ambiguous).toBe(!!c.ambiguous)
      expect(r.insufficient).toBe(!!c.insufficient)
    })
})

describe('GĐ9 — phối hoà âm giai điệu (Rimsky-Korsakov § 13)', () => {
  it('đáp án duy nhất theo luật: Mi–Fa–Mi–Rê–Đô chỉ có thể là I–IV–I–V–I; mọi phương án được bộ kiểm viết tay (bộ giải không dùng) xác nhận, xếp theo luật mềm', async () => {
    const t = harmonizeTask('hz1', line('E5:4 | F5:4 | E5:4 | D5:4 | C5:4'))
    expect(chordSequences(t).sequences).toEqual([[0, 3, 0, 4, 0]])
    const r = await createEngine().orchestrator.run(t, { timeMs: 8000, maxSolutions: 4 })
    expect([r.status, r.solverId]).toEqual(['SOLVED', 'umre.harmonize'])
    expect(auditResult(r)).toEqual([])
    for (const s of r.solutions) {
      expect(s.confirmation.by['h.second-relation'] ?? s.confirmation.by['h.parallels']).toContain('harmony-native')
      expect(notesOf(s.score.voices[3]).map((n) => 'CDEFGAB'[n.pitch.letter])).toEqual(['C', 'F', 'C', 'G', 'C'])
    }
    const pen = r.solutions.map((s) => s.rank!.penalty)
    expect([...pen].sort((a, b) => a - b)).toEqual(pen)
  }, 60_000)
  it('nhiều cách hợp luật (mơ hồ có thật): Đô–Đô–Rê–Si–Đô có hai chuỗi hợp âm; bộ giải thử cả hai, báo chuỗi nào xếp được bè', async () => {
    const t = harmonizeTask('hz2', line('C5:4 C5:4 | D5:4 B4:4 | C5:4'))
    expect(chordSequences(t).sequences.length).toBe(2)
    const r = await createEngine().orchestrator.run(t, { timeMs: 8000, maxSolutions: 4 })
    expect(r.status).toBe('SOLVED')
    const seqs = r.metadata.solverDiagnostics.sequences as { chords: string; status: string }[]
    expect(new Set(seqs.map((s) => s.chords))).toEqual(new Set(['I–I–V–V–I', 'I–IV–V–V–I']))
    // I–IV–V: roots a second apart, the soprano C→D rises with the bass F→G — § 11 forbids it, so no voicing exists
    expect(seqs.find((s) => s.chords === 'I–IV–V–V–I')!.status).toBe('unsat')
  }, 60_000)
  it('vô nghiệm có chứng minh: nốt Fa♯ không thuộc I, IV, V của Đô trưởng; giai điệu mở bằng Rê không mở được bằng I', async () => {
    const e = createEngine()
    const a = await e.orchestrator.run(harmonizeTask('hz3', line('C5:4 | F#5:4 | G5:4 | C5:4')), { timeMs: 3000 })
    expect(a.status).toBe('PROVEN_UNSAT')
    expect(a.statusReason).toMatch(/nốt 2/)
    const b = await e.orchestrator.run(harmonizeTask('hz4', line('D5:4 | C5:4')), { timeMs: 3000 })
    expect(b.status).toBe('PROVEN_UNSAT')
  })
  it('bài sai do người viết: V → IV và quãng 5 song song — cả hai bộ kiểm cùng bắt; luật chọn hợp âm không áp cho bài hợp âm cho sẵn', async () => {
    const t = harmonizeTask('hz5', line('G5:4 | A5:4 | G5:4'))
    // bass G2 → F3 → C3 (V → IV → I); alto/tenor written to also make parallel fifths between tenor and bass
    const s = (await createEngine().orchestrator.run(harmonizeTask('hz5b', line('G5:4 | A5:4 | G5:4')), { timeMs: 5000 })).solutions[0]?.score
    expect(s).toBeDefined()
    let bad = withVoice(s!, 3, ['G2', 'F2', 'C3'])
    bad = withVoice(bad, 2, ['D3', 'C3', 'G3'])
    bad = withVoice(bad, 1, ['B3', 'A3', 'E4'])
    const v = harmonyValidator.validate(t, bad, rb)
    expect(v.status).toBe('INVALID')
    const ids = v.violations.map((x) => x.ruleId)
    expect(ids).toEqual(expect.arrayContaining(['h.no-v-iv', 'h.parallels']))
    for (const x of v.violations) expect(x.checkers).toEqual(['umre-rules', 'harmony-native'])
    expect(v.reasons).toEqual([])
    // the same notes as a four-part task with the chords GIVEN: choosing chords is not the student's job there
    const given = fourPartTask('hz5c', line('G5:4 | A5:4 | G5:4'), [triadOn(C, 4), triadOn(C, 3), triadOn(C, 0)], { tonic: 0, alter: 0, minor: false })
    const w = harmonyValidator.validate({ ...given, params: { ...given.params, key: C } }, bad, rb)
    expect(w.violations.map((x) => x.ruleId)).not.toContain('h.no-v-iv')
    expect(w.outcomes.find((o) => o.ruleId === 'h.no-v-iv')!.outcome).toBe('not-applicable')
  }, 60_000)
  it('kiểm thử sai khác: 300 lời giải phối hoà âm bị đột biến — hai bộ kiểm không bất đồng ở bất kỳ luật nào (kể cả luật chọn hợp âm, luật mềm)', async () => {
    const t = harmonizeTask('hz6', line('E5:4 D5:4 C5:4 G5:4 | E5:4 F5:4 D5:4 B4:4 | C5:4'))
    const sols = (await createEngine().orchestrator.run(t, { timeMs: 8000, maxSolutions: 4 })).solutions.map((x) => x.score)
    let seed = 11
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    let invalid = 0
    for (let k = 0; k < 300; k++) {
      const s = sols[k % sols.length]
      const v = 1 + Math.floor(rnd() * 3)
      const ps = notesOf(s.voices[v]).map((n) => n.pitch)
      const i = Math.floor(rnd() * ps.length)
      ps[i] = fromDiatonic(ps[i].octave * 7 + ps[i].letter + [-4, -3, -2, -1, 1, 2, 3, 4][Math.floor(rnd() * 8)], 0)
      const r = harmonyValidator.validate(t, withVoice(s, v, ps.map((p) => formatPitch(p))), rb)
      expect(r.reasons, ps.map((p) => formatPitch(p)).join(' ')).toEqual([])
      if (r.status === 'INVALID') invalid++
    }
    expect(invalid).toBeGreaterThan(150)
  }, 60_000)
})

describe('GĐ9 — suy luận: nước đi tiếp, hệ quả của một thay đổi, lời giải thích', () => {
  it('nước đi tiếp sau I trên nốt Đô: I và IV đều hợp luật, kèm số chuỗi hoàn chỉnh còn lại; sau V không được IV', () => {
    const t = harmonizeTask('hz7', line('C5:4 C5:4 | D5:4 B4:4 | C5:4'))
    const next = continuations(t, [0])
    expect(next.map((c) => [c.roman, c.function, c.completions])).toEqual([['I', 'T', 1], ['IV', 'S', 1]])
    const t2 = harmonizeTask('hz8', line('C5:4 | D5:4 | C5:4 | C5:4'))
    const afterV = continuations(t2, [0, 4])
    expect(afterV.find((c) => c.roman === 'IV')).toMatchObject({ completions: 0, blockedBy: 'h.no-v-iv' })
  })
  it('hệ quả: đổi một nốt alto thì sinh lỗi gì, gỡ lỗi gì (bộ kiểm chạy trên cả hai bản)', async () => {
    const t = harmonizeTask('hz9', line('E5:4 | F5:4 | E5:4 | D5:4 | C5:4'))
    const s = (await createEngine().orchestrator.run(t, { timeMs: 5000 })).solutions[0].score
    const alto = notesOf(s.voices[1])
    const c = consequences(t, s, { voice: 1, index: 1, pitch: parsePitch('B4') }, rb)
    expect(c.before).toBe('VALID')
    expect(c.after).toBe('INVALID')
    expect(c.introduced.map((v) => v.ruleId)).toContain('h.chord-tones')
    expect(formatPitch(alto[1].pitch)).not.toBe('B4')
  }, 60_000)
  it('giải thích qua hợp đồng phân tích: dữ kiện (quan hệ, âm chung, kiểu nối) tách khỏi diễn giải (chức năng), có nguồn', async () => {
    const t = harmonizeTask('hz10', line('E5:4 | F5:4 | E5:4 | D5:4 | C5:4'))
    const s = (await createEngine().orchestrator.run(t, { timeMs: 5000 })).solutions[0].score
    const r = await handle({ op: 'analyze', score: s, context: { task: t }, modules: ['harmony.progression'] })
    if (r.op !== 'analyze') throw new Error('op')
    expect(r.result.status).toBe('COMPLETED')
    const conn = r.result.findings.find((f) => f.id === 'harmony.progression#connection-2')!
    expect(conn.kind).toBe('fact')
    expect(conn.value).toMatchObject({ relation: 'fourth-fifth', commonTones: 1 })
    expect(r.result.findings.find((f) => f.id === 'harmony.progression#function-4')).toMatchObject({ kind: 'interpretation', value: 'D' })
    expect(conn.citations!.length).toBeGreaterThan(0)
  }, 60_000)
})

describe('GĐ9 — adapter /analyze qua hợp đồng phân tích (chuẩn ngoài: giọng chính đã biết của các tác phẩm mẫu)', () => {
  const run = async (f: string) => {
    const score = fromCompose(fromMusicXml(readFileSync(`public/analyze/${f}.musicxml`, 'utf8')))
    const r = await handle({ op: 'analyze', score, modules: ['harmony.tonal'] })
    if (r.op !== 'analyze') throw new Error('op')
    return r.result
  }
  // keys as published (Bach BWV 269 in G; Mozart K. 545 "Sonata facile" in C; Debussy Clair de lune in D♭; Joplin Maple Leaf Rag in A♭)
  for (const [f, key] of [['bach-bwv269', 'G trưởng'], ['mozart-k545-1', 'C trưởng'], ['debussy-clair-de-lune', 'D♭ trưởng'], ['joplin-maple-leaf', 'A♭ trưởng']] as const)
    it(`${f}: giọng chính ${key}; mọi hợp âm là diễn giải có độ tin cậy kèm cơ sở; âm vang là dữ kiện`, async () => {
      const r = await run(f)
      expect(r.status).toBe('COMPLETED')
      expect(r.findings.find((x) => x.topic === 'giọng chính')!.text.basic).toBe(`Giọng chính: ${key}`)
      for (const x of r.findings.filter((y) => y.topic === 'hợp âm')) expect(x.kind === 'interpretation' && !!x.confidence?.basis).toBe(true)
      expect(r.findings.filter((y) => y.topic === 'âm vang').every((y) => y.kind === 'fact')).toBe(true)
    }, 60_000)
  it('Schoenberg op. 19 số 6 (phi điệu tính): AMBIGUOUS, không giả vờ chắc; op. 19 số 2 — LỖI ĐÃ BIẾT: vẫn đọc ra giọng (86% nốt trong âm giai), ghi trong KNOWN_LIMITATIONS', async () => {
    expect((await run('schoenberg-op19-6')).status).toBe('AMBIGUOUS')
    expect((await run('schoenberg-op19-2')).status).toBe('COMPLETED')
  }, 60_000)
  it('thiếu dữ liệu: một nốt → INSUFFICIENT_DATA, nói rõ thiếu gì', async () => {
    const t = harmonizeTask('one', line('C5:4'))
    const r = await handle({ op: 'analyze', score: t.score, modules: ['harmony.tonal'] })
    if (r.op !== 'analyze') throw new Error('op')
    expect(r.result.status).toBe('INSUFFICIENT_DATA')
    expect(r.result.modules[0].missing!.length).toBeGreaterThan(0)
  })
})
