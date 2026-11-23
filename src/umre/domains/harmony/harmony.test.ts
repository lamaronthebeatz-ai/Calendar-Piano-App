import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { createEngine } from '../../engine'
import { auditResult } from '../../orchestration/orchestrator'
import type { Chord } from '../../repr/harmony'
import { formatPitch, fromDiatonic, parsePitch } from '../../repr/pitch'
import { notesOf, type Score } from '../../repr/score'
import { auditRulebook } from '../../rulebook/rulebook'
import { harmonyRulebook } from '../../rulebook/harmony'
import { search } from '../../search/search'
import { line } from '../../testing/fixtures'
import { harmonyValidator } from '../../validation/harmony'
import { renderExplanation } from '../../explain/explain'
import { fourPartModel, fourPartTask } from './task'

const rb = harmonyRulebook()
const ch = (letter: number, quality: Chord['quality'] = 'major'): Chord => ({ root: { letter: letter as 0, alter: 0 }, quality })
const I = ch(0), IV = ch(3), V = ch(4), vi = ch(5, 'minor')
const ARTICLE = readFileSync(new URL('../../../features/theory/content/harmony.ts', import.meta.url), 'utf8').split('\n')

/** Replace one voice of a solution with given pitches (to make faulty answers on purpose). */
const withVoice = (s: Score, v: number, pitches: string[]): Score => ({
  ...s, voices: s.voices.map((x, i) => (i !== v ? x : { ...x, events: x.events.map((e, k) => (e.kind === 'note' ? { ...e, pitch: parsePitch(pitches[k]) } : e)) })),
})

describe('thí điểm lĩnh vực thứ hai — hoà âm bốn bè trên bộ máy chung (tiêu chí vào Wave C)', () => {
  it('sổ luật: mọi luật có nguồn; số trang là trang bài thư viện đã trích từ Rimsky-Korsakov, đúng dòng của ý đó', () => {
    expect(auditRulebook(rb)).toEqual([])
    const anchor: Record<string, string> = { 'h.chord-tones': 'Hợp âm ba gồm âm gốc', 'h.root-position': 'Tên thể đảo chỉ phụ thuộc', 'h.double-root': 'nhân đôi âm gốc', 'h.spacing': 'Xếp gần', 'h.parallels': 'quãng 5 và quãng 8 song song', 'h.augmented': 'quãng tăng', 'h.upper-third': '§ 11 là quy tắc nền', 'h.second-relation': '§ 11 là quy tắc nền', 'h.primary-only': 'Phối hoà âm giai điệu', 'h.tonic-frame': 'Phối hoà âm giai điệu', 'h.leap-same-chord': 'Phối hoà âm giai điệu', 'h.repeat-change': 'Phối hoà âm giai điệu', 'h.strong-weak': 'Phối hoà âm giai điệu', 'h.bass-fourths': 'Phối hoà âm giai điệu', 'a.iv-v-adjacent': 'Phối hoà âm giai điệu', 'h.leading-tone': 'Phối hoà âm bè trầm', 'h.no-v-iv': 'Phối hoà âm bè trầm', 'p.final-tonic-no-fifth': 'Phối hoà âm bè trầm' }
    for (const c of rb.evidence.allCitations().filter((x) => x.locator)) {
      const rows = ARTICLE.filter((l) => l.includes(anchor[c.scope]) && l.includes('rimsky-korsakov-1886'))
      expect(rows.some((l) => l.includes(`rimsky-korsakov-1886, ${c.locator}`)), `${c.scope}: ${c.locator}`).toBe(true)
    }
    expect(rb.evidence.source(rb.evidence.citation(rb.rules.find((r) => r.id === 'h.crossing')!.citations[0]).sourceId).type).toBe('internal-interpretation')
  })
  it('qua bộ điều phối: I–IV–I–V–I và I–vi–IV–V–I → SOLVED, được bộ kiểm viết tay (bộ giải không dùng) xác nhận độc lập; giải thích có nguồn', async () => {
    const e = createEngine()
    for (const [sop, chords] of [['E5:4 | F5:4 | E5:4 | D5:4 | C5:4', [I, IV, I, V, I]], ['C5:4 | C5:4 | C5:4 | B4:4 | C5:4', [I, vi, IV, V, I]]] as const) {
      const r = await e.orchestrator.run(fourPartTask('h1', line(sop), [...chords]), { timeMs: 5000, maxSolutions: 2 })
      expect([r.status, r.solverId, r.domain]).toEqual(['SOLVED', 'umre.csp.harmony', 'harmony'])
      expect(auditResult(r)).toEqual([])
      for (const s of r.solutions) {
        expect(s.validation.status).toBe('VALID')
        expect(s.confirmation.by['h.parallels']).toEqual(['harmony-native'])
        expect(notesOf(s.score.voices[3]).map((n) => n.pitch.letter)).toEqual(chords.map((c) => c.root.letter)) // root in the bass
      }
      expect(renderExplanation(r.explanation!, 'academic', rb.evidence)).toContain('Римский-Корсаков, Н. А., Практический учебник гармонии')
    }
  })
  it('vô nghiệm đã chứng minh trong miền: soprano không thuộc hợp âm → PROVEN_UNSAT (không phải lỗi, không phải hết giờ)', async () => {
    const r = await createEngine().orchestrator.run(fourPartTask('h2', line('D5:4 | C5:4'), [I, I]), { timeMs: 5000 })
    expect(r.status).toBe('PROVEN_UNSAT')
    expect(r.explanation!.statements.some((s) => s.kind === 'inference' && /miền tìm kiếm/.test(s.text.technical))).toBe(true)
  })
  it('bắt lỗi do người viết cố ý: quãng 5 song song, chéo bè — cả hai bộ kiểm cùng thấy', () => {
    const t = fourPartTask('h3', line('E5:4 | F5:4 | E5:4 | D5:4 | C5:4'), [I, IV, I, V, I])
    const good = search(fourPartModel(t, rb), { timeMs: 5000, maxSolutions: 1 }).solutions[0]
    expect(harmonyValidator.validate(t, good, rb).status).toBe('VALID')
    const bass = notesOf(good.voices[3]).map((n) => formatPitch(n.pitch))
    // tenor a fifth above the bass in chords 1–2: C3/G3 → F3/C4 is parallel fifths between tenor and bass
    const tenor = notesOf(good.voices[2]).map((n) => formatPitch(n.pitch))
    const bad = withVoice(good, 2, ['G3', 'C4', ...tenor.slice(2)])
    const r = harmonyValidator.validate(t, bad, rb)
    expect(r.status).toBe('INVALID')
    expect(r.violations.find((v) => v.ruleId === 'h.parallels')!.checkers).toEqual(['umre-rules', 'harmony-native'])
    expect(bass[0]).toBe('C3')
    const crossed = withVoice(good, 1, ['C3', ...notesOf(good.voices[1]).slice(1).map((n) => formatPitch(n.pitch))])
    expect(harmonyValidator.validate(t, crossed, rb).violations.map((v) => v.ruleId)).toEqual(expect.arrayContaining(['h.crossing']))
    expect(r.coverage).toMatchObject({ disputed: 0, uncheckable: 0 })
  })
  it('kiểm thử sai khác: 300 lời giải đột biến — bộ kiểm viết tay và ngôn ngữ luật không bao giờ bất đồng', () => {
    const t = fourPartTask('h4', line('C5:4 | C5:4 | C5:4 | B4:4 | C5:4'), [I, vi, IV, V, I])
    const sols = search(fourPartModel(t, rb), { timeMs: 5000, maxSolutions: 6 }).solutions
    let seed = 7
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    let invalid = 0
    for (let k = 0; k < 300; k++) {
      const s = sols[k % sols.length]
      const v = 1 + Math.floor(rnd() * 3)
      const ps = notesOf(s.voices[v]).map((n) => n.pitch)
      const i = Math.floor(rnd() * ps.length)
      const d = ps[i].octave * 7 + ps[i].letter + [-3, -2, -1, 1, 2, 3][Math.floor(rnd() * 6)]
      ps[i] = fromDiatonic(d, rnd() < 0.2 ? 1 : 0)
      const r = harmonyValidator.validate(t, withVoice(s, v, ps.map((p) => formatPitch(p))), rb)
      expect(r.reasons, JSON.stringify(ps.map((p) => formatPitch(p)))).toEqual([])
      if (r.status === 'INVALID') invalid++
    }
    expect(invalid).toBeGreaterThan(200)
  })
})
