import { describe, expect, it } from 'vitest'
import { pitch, type Seg } from '../../features/counterpoint/model'
import { msolve } from '../../features/counterpoint/multi'
import { check } from '../../features/counterpoint/rules'
import { solveMany } from '../../features/counterpoint/solver'
import { verify } from '../../features/counterpoint/verify'
import { multiSolution, toMProblem, toProblem, twoVoiceSolution } from '../domains/counterpoint/task'
import { format } from '../repr/rational'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { line, multiTask, twoVoiceTask } from '../testing/fixtures'
import { multiVoiceValidator, twoVoiceValidator } from './counterpoint'

const rb = counterpointRulebook()
const CF = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
const t2 = twoVoiceTask(CF)
const solutions = solveMany(toProblem(t2), 5000, 3).solutions
const V = (t: typeof t2, cp: Seg[]) => twoVoiceValidator.validate(t, twoVoiceSolution(t, cp), rb)

describe('GĐ5 — kiểm chứng độc lập: hai bè', () => {
  it('lời giải thật của bộ giải: VALID, mọi luật bắt buộc áp dụng được đều có bộ kiểm độc lập, kết quả tái lập được', () => {
    expect(solutions.length).toBeGreaterThan(0)
    for (const s of solutions) {
      const r = V(t2, s.cp)
      expect(r.status).toBe('VALID')
      expect(r.violations).toEqual([])
      expect(r.coverage).toMatchObject({ uncheckable: 0, disputed: 0, violated: 0, ratio: 1 })
      expect(r.coverage.checked).toBe(r.coverage.hardRules - r.coverage.notApplicable)
      // the same input gives the same digest and the same verdict
      const again = V(t2, s.cp)
      expect(again.inputDigest).toBe(r.inputDigest)
      expect(again.outcomes).toEqual(r.outcomes)
    }
  })
  it('một vi phạm: báo đủ mã luật, sổ luật, mức, vị trí, giá trị thực, điều kiện, nguồn, bộ kiểm', () => {
    // G4/C4 → A4/D4: two perfect fifths in similar motion
    const r = V(t2, line('G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4'))
    expect(r.status).toBe('INVALID')
    const v = r.violations.find((x) => x.ruleId === 'parallel')!
    expect(v).toMatchObject({ rulebookId: rb.id, rulebookVersion: rb.version, severity: 'hard', expected: rb.rules.find((x) => x.id === 'parallel')!.statement })
    expect(v.location.measure).toBe(2)
    expect(format(v.location.at)).toBe('1')
    expect(v.location.voices).toEqual(['t2-s1-v1', 't2-s1-v2'])
    expect(v.location.eventIds.length).toBe(2)
    expect(v.actual).toContain('quãng P5')
    expect(v.checkers).toEqual(expect.arrayContaining(['verify', 'umre-native']))
    for (const c of v.citations) expect(rb.evidence.citation(c).locator).toBe('tr. 9–10')
  })
  it('nhiều vi phạm cùng lúc, mỗi cái đúng chỗ', () => {
    const r = V(t2, line('G4:4 | A4:4 | C5:4 | G4:4 | B4:4 | C5:4'))
    expect(r.status).toBe('INVALID')
    expect(r.violations.map((v) => `${v.ruleId}@${v.location.measure}`).sort()).toEqual(['leap3-response@6', 'parallel@2', 'parallel@3', 'perfects3@3'])
    expect(r.coverage.violated).toBe(3)
  })
  it('dữ liệu thiếu: thiếu bè → INCOMPLETE; bè đối vị dừng giữa chừng → INCOMPLETE, lỗi đã thấy chỉ là tạm', () => {
    expect(twoVoiceValidator.validate(t2, t2.score, rb).status).toBe('INCOMPLETE')
    const r = V(t2, line('G4:4 | A4:4 | C5:4'))
    expect(r.status).toBe('INCOMPLETE')
    expect(r.violations).toEqual([])
    expect(r.provisional.map((v) => v.ruleId)).toContain('parallel')
  })
  it('ngoại lệ hợp lệ: nốt đen chuẩn bị nốt lưu khi đề bật tuỳ chọn — được ghi là đã áp ngoại lệ', () => {
    const t = twoVoiceTask('C4:4 | D4:4 | C4:4', { quarterPrep: true })
    const cp = line('C5:2 B4:1 C5:1~ | C5:1 B4:1 A4:2 | C5:4')
    const r = V(t, cp)
    expect(r.status).toBe('VALID')
    expect(r.coverage.exceptionsApplied.map((e) => [e.exceptionId, e.location.measure])).toEqual([['quarter-prep', 2]])
    // the same line without the option is a broken tie
    const off = V(twoVoiceTask('C4:4 | D4:4 | C4:4'), cp)
    expect(off.status).toBe('INVALID')
    expect(off.violations.map((v) => v.ruleId)).toContain('tie')
  })
  it('ngoại lệ sai phạm vi: nốt đen nối vào quãng thuận vẫn là lỗi dù đề bật tuỳ chọn; quãng 4 ở hai bè không được tính thuận', () => {
    const t = twoVoiceTask('C4:4 | D4:4 | C4:4', { quarterPrep: true })
    expect(V(t, line('G4:2 F4:1 E4:1~ | E4:2 F4:2 | E4:4')).violations.map((v) => v.ruleId)).toContain('tie')
    const four = V(twoVoiceTask('C4:4 | D4:4 | C4:4'), line('F4:4 | F4:4 | E4:4'))
    const v = four.violations.find((x) => x.ruleId === 'dis-strong')!
    expect(v.exceptionOutOfScope).toBe('fourth-upper-pair')
    expect(v.actual).toContain('quãng P4')
  })
  it('sổ luật không tương thích → UNKNOWN, không kiểm; sổ luật có luật bắt buộc không bộ kiểm nào phủ → UNKNOWN, không bao giờ VALID', () => {
    const cp = solutions[0].cp
    const other = V(t2, cp)
    expect(other.status).toBe('VALID')
    const wrong = twoVoiceValidator.validate(t2, twoVoiceSolution(t2, cp), { ...rb, version: '2' })
    expect(wrong.status).toBe('UNKNOWN')
    expect(wrong.reasons[0]).toMatch(/không được bộ kiểm/)
    const wider = { ...rb, rules: [...rb.rules, { id: 'luat-moi', statement: 'Một luật mới chưa có bộ kiểm', severity: 'hard' as const, citations: [], scope: '' }] }
    const r = twoVoiceValidator.validate(t2, twoVoiceSolution(t2, cp), wider)
    expect(r.status).toBe('UNKNOWN')
    expect(r.coverage.uncheckable).toBe(1)
    expect(r.outcomes.find((o) => o.ruleId === 'luat-moi')!.outcome).toBe('not-checked')
  })
  it('lời giải bị sửa sau khi tìm: sửa bè đối vị → phát hiện lỗi mới; sửa bè đề → vi phạm giữ nguyên đề', () => {
    const cp = solutions[0].cp.map((s) => ({ ...s }))
    const i = cp.findIndex((s, k) => k > 0 && !s.tied && !cp[k + 1]?.tied)
    cp[i] = { ...cp[i], p: pitch(cp[i - 1].p.step + 6) } // a seventh away from the previous note
    const r = V(t2, cp)
    expect(r.status).toBe('INVALID')
    expect(r.violations.map((v) => v.ruleId)).toContain('leap')
    const sol = twoVoiceSolution(t2, solutions[0].cp)
    const given = sol.voices[1]
    const edited = { ...sol, voices: [sol.voices[0], { ...given, events: given.events.map((e, k) => (k === 1 && e.kind === 'note' ? { ...e, pitch: { ...e.pitch, letter: 2 as const } } : e)) }] }
    const g = twoVoiceValidator.validate(t2, edited, rb)
    expect(g.status).toBe('INVALID')
    expect(g.violations.map((v) => v.ruleId)).toEqual(['task.given-preserved'])
  })
  it('tổng phổ hỏng cấu trúc → INVALID với mã umre.repr, không chạy luật', () => {
    const sol = twoVoiceSolution(t2, solutions[0].cp)
    const broken = { ...sol, voices: [sol.voices[0], { ...sol.voices[1], staff: 'khong-co' }] }
    const r = twoVoiceValidator.validate(t2, broken, rb)
    expect(r.status).toBe('INVALID')
    expect(r.violations[0].rulebookId).toBe('umre.repr')
  })
  it('kiểm thử sai khác (differential): 300 lời giải đột biến — bộ kiểm luật UMRE không bao giờ lỏng hơn verify.ts; VALID ⇒ verify và bộ kiểm của bộ giải đều sạch', () => {
    let seed = 11
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    const p = toProblem(t2)
    let valid = 0
    let disputes = 0
    for (let k = 0; k < 300; k++) {
      const base = solutions[k % solutions.length].cp
      const cp = base.map((s) => ({ ...s }))
      const i = Math.floor(rnd() * cp.length)
      if (cp[i].tied) continue
      cp[i] = { ...cp[i], p: pitch(cp[i].p.step + [-3, -2, -1, 1, 2, 3][Math.floor(rnd() * 6)], rnd() < 0.15 ? 1 : 0) }
      if (cp[i + 1]?.tied) cp[i + 1] = { ...cp[i + 1], p: cp[i].p }
      const r = V(t2, cp)
      if (r.status === 'VALID') {
        valid++
        expect(verify(p, cp)).toEqual([])
        expect(check(p, cp, Infinity).hard).toEqual([])
      }
      if (verify(p, cp).length) expect(r.status).not.toBe('VALID')
      // the native checker and the rule language agree exactly on the nine rules they share
      expect(r.reasons.filter((x) => /umre-native/.test(x))).toEqual([])
      // any remaining dispute is the rule checker being STRICTER than verify.ts (documented divergences), never laxer
      for (const x of r.reasons.filter((y) => /bất đồng/.test(y))) {
        disputes++
        const m = /verify (.*) \/ umre-rules (.*)$/.exec(x)!
        const vs = m[1].split(' ').filter((z) => z !== '∅')
        const us = new Set(m[2].split(' '))
        expect(vs.every((z) => us.has(z)), x).toBe(true)
      }
    }
    expect(valid).toBeGreaterThan(0)
    expect(disputes).toBeLessThan(10)
  })
})

describe('GĐ5 — kiểm chứng độc lập: ba – bốn bè', () => {
  it('lời giải thật của msolve: VALID, ghi các chỗ dùng ngoại lệ quãng 4 ở cặp trên', () => {
    const t = multiTask(['', '', 'C3:4 | D3:4 | B2:4 | C3:4'], [true, true, false])
    const r = msolve(toMProblem(t), { timeMs: 10_000, maxSolutions: 2 })
    expect(r.status).toBe('valid')
    for (const s of r.solutions) {
      const v = multiVoiceValidator.validate(t, multiSolution(t, s.lines), rb)
      expect(v.status).toBe('VALID')
      expect(v.coverage.exceptionsApplied.every((e) => e.exceptionId === 'fourth-upper-pair' && e.location.voices.length === 2)).toBe(true)
    }
  })
  it('quãng 4 ở cặp trên được tính thuận (ngoại lệ đúng phạm vi); ở cặp dưới là quãng nghịch, ghi rõ ngoại lệ không áp', () => {
    const voices = ['C5:4 | B4:4', 'G4:4 | G4:4', 'E4:4 | D4:4']
    const t = multiTask(voices, [true, true, false])
    const r = multiVoiceValidator.validate(t, multiSolution(t, voices.map(line)), rb)
    // bar 1: C5 over G4 in the upper pair I–II is a fourth, counted as a consonance
    expect(r.coverage.exceptionsApplied.map((e) => [e.location.measure, e.location.voices.join()])).toEqual([[1, 'tm-s1-v1,tm-s1-v2']])
    expect(r.violations.filter((v) => v.location.voices.join() === 'tm-s1-v1,tm-s1-v2')).toEqual([])
    const lower = r.violations.find((v) => v.ruleId === 'dis-strong')!
    expect(lower.exceptionOutOfScope).toBe('fourth-upper-pair')
    expect(lower.actual).toContain('bè II: G4 · bè III: D4')
  })
  it('bè tự do còn trống → INCOMPLETE; sửa bè đề → INVALID', () => {
    const t = multiTask(['', '', 'C3:4 | D3:4 | B2:4 | C3:4'], [true, true, false])
    const empty = multiSolution(t, [[], line('E4:4 | F4:4 | D4:4 | E4:4'), line('C3:4 | D3:4 | B2:4 | C3:4')])
    expect(multiVoiceValidator.validate(t, empty, rb).status).toBe('INCOMPLETE')
    const r = msolve(toMProblem(t), { timeMs: 10_000, maxSolutions: 1 })
    const lines = r.solutions[0].lines.map((l) => l.slice())
    lines[2] = line('C3:4 | E3:4 | B2:4 | C3:4')
    expect(multiVoiceValidator.validate(t, multiSolution(t, lines), rb).violations.map((v) => v.ruleId)).toEqual(['task.given-preserved'])
  })
})
