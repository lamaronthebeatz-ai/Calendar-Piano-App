import { describe, expect, it } from 'vitest'
import { handle } from '../../api'
import { auditResult } from '../../orchestration/orchestrator'
import { toCounterpoint } from '../../repr/adapters/counterpoint'
import { counterpointRulebook } from '../../rulebook/counterpoint'
import { line, twoVoiceTask } from '../../testing/fixtures'
import { twoVoiceValidator } from '../../validation/counterpoint'
import { diagnose, generateExercise, nextNotes } from './ops'
import { twoVoiceSolution } from './task'

const rb = counterpointRulebook()
const CF = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'

describe('GĐ8 — mọi khả năng của trang phức điệu qua UMRE', () => {
  it('sinh đề: có đáp án, đáp án được bộ kiểm độc lập xác nhận (không phải bộ kiểm của máy sinh)', () => {
    const a = generateExercise('de', 7, 8000, rb)!
    const b = generateExercise('de', 7, 8000, rb)!
    expect(a.validation.status).toBe('VALID')
    expect(a.confirmation.independent).toBe(true)
    expect(a.task.params.stars.length).toBeGreaterThan(0)
    // not asserted: the same seed giving the same đề — generate() works to a time limit, so a slow machine can give another one
    expect(b.validation.status).toBe('VALID')
  }, 60_000)
  it('gợi ý nốt tiếp: mỗi nốt có trạng thái ok/dead/unknown; đi theo một nốt "ok" thì vẫn còn đáp án', () => {
    const t = twoVoiceTask(CF)
    const hs = nextNotes(t, null, 4000)
    expect(hs.length).toBeGreaterThan(0)
    expect(hs.every((h) => ['ok', 'dead', 'unknown'].includes(h.status))).toBe(true)
    const ok = hs.find((h) => h.status === 'ok')!
    const partial = twoVoiceSolution(t, toCounterpoint(ok.note).lines[0])
    const after = nextNotes(t, partial, 4000)
    expect(after.some((h) => h.status === 'ok')).toBe(true)
    expect(after.every((h) => h.start === ok.start + ok.dur)).toBe(true)
  }, 60_000)
  it('chẩn đoán đề vô nghiệm: ✱ giữa ô 1 bắt bè đề (Đô4 giữ qua ✱) làm nốt lưu mà nó lại đi lên — chứng minh bằng duyệt miền, nới ✱ đó thì có đáp án — được kiểm độc lập', () => {
    const t = twoVoiceTask(CF, { stars: [2] })
    const d = diagnose(t, 6000, rb)
    expect(d.impossibleStars.map((s) => s.bar)).toEqual([1])
    const relax = d.relaxations.find((r) => r.id === 'noStar')!
    expect(relax.answers.length).toBeGreaterThan(0)
    expect(relax.validAnswers).toBe(relax.answers.length)
  }, 60_000)
  it('phân tích bài viết tay (hợp đồng phân tích): sai → COMPLETED với phát hiện kiểm luật có nguồn; chưa xong → PARTIAL; thiếu đề → INSUFFICIENT_DATA', async () => {
    const t = twoVoiceTask(CF)
    const bad = await handle({ op: 'analyze', score: twoVoiceSolution(t, line('G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4')), context: { task: t }, modules: ['counterpoint.check'] })
    if (bad.op !== 'analyze') throw new Error('op')
    expect(bad.result.status).toBe('COMPLETED')
    const par = bad.result.findings.find((f) => f.ruleIds?.includes('parallel'))!
    expect(par.kind).toBe('rule-check')
    expect(par.citations!.length).toBeGreaterThan(0)
    expect(bad.result.findings[0].text.basic).toMatch(/sai/)
    const half = await handle({ op: 'analyze', score: twoVoiceSolution(t, line('G4:4 | A4:4')), context: { task: t }, modules: ['counterpoint.check'] })
    expect(half.op === 'analyze' && half.result.status).toBe('PARTIAL')
    const none = await handle({ op: 'analyze', score: t.score, modules: ['counterpoint.check'] })
    if (none.op !== 'analyze') throw new Error('op')
    expect(none.result.status).toBe('INSUFFICIENT_DATA')
    expect(none.result.modules[0].missing).toContain('context.task: bài tập mà tổng phổ trả lời')
  })
  it('tối ưu tách khỏi tìm kiếm: lời giải hợp lệ được xếp theo điểm phạt luật mềm của sổ luật; thứ tự tất định; xếp hạng không đổi lời giải nào thành hợp lệ', async () => {
    const r = await handle({ op: 'solve', task: twoVoiceTask(CF), options: { timeMs: 6000, maxSolutions: 6 } })
    if (r.op !== 'solve') throw new Error('op')
    expect(r.result.status).toBe('SOLVED')
    expect(auditResult(r.result)).toEqual([])
    const pen = r.result.solutions.map((s) => s.rank!.penalty)
    expect([...pen].sort((a, b) => a - b)).toEqual(pen)
    for (const s of r.result.solutions) {
      expect(s.validation.status).toBe('VALID')
      for (const f of s.rank!.faults) expect(rb.rules.find((x) => x.id === f.ruleId)!.severity).toBe('soft')
    }
    expect(r.result.trace.steps.some((s) => s.operation === 'rank')).toBe(true)
  }, 60_000)
  it('sổ luật cho Lý thuyết / Nghiên cứu: phân loại từng mục và trích dẫn qua đầu mối chung', async () => {
    const r = await handle({ op: 'rulebook', ref: { id: rb.id, version: rb.version } })
    if (r.op !== 'rulebook' || !r.result) throw new Error('op')
    expect(new Set(r.result.entries.map((e) => e.standing))).toEqual(new Set(['hard', 'recommendation', 'permitted', 'exception', 'ambiguous']))
    expect(r.result.citations.some((c) => c.locator === 'tr. 9–10')).toBe(true)
    expect(twoVoiceValidator.id).toBeTruthy()
  })
})
