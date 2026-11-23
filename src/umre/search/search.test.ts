import { describe, expect, it } from 'vitest'
import { solveMany } from '../../features/counterpoint/solver'
import { msolve } from '../../features/counterpoint/multi'
import { frontierOf, type CspModel } from '../constraints/model'
import { multiVoiceModel, twoVoiceModel } from '../domains/counterpoint/csp'
import { toMProblem, toProblem } from '../domains/counterpoint/task'
import { createEngine } from '../engine'
import { fromCounterpoint } from '../repr/adapters/counterpoint'
import { fromDiatonic } from '../repr/pitch'
import { fromQuarters } from '../repr/rational'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { c, eq, type RuleDef } from '../rules/lang'
import { textureQueries } from '../rules/queries'
import { C, multiTask, twoVoiceTask } from '../testing/fixtures'
import { multiVoiceValidator, twoVoiceValidator } from '../validation/counterpoint'
import { search } from './search'

const rb = counterpointRulebook()

/** A toy domain with nothing of counterpoint in it: one free voice of whole notes that must climb by step. */
function toy(bars: number, top = 35): CspModel {
  const base = fromCounterpoint({ key: C, meter: { num: 4, den: 4 }, lines: [[]] })
  const rules: RuleDef[] = [{ id: 'step-up', query: 'line.steps', require: eq({ var: 'steps' }, c(1)) }]
  const end = fromQuarters(4 * bars)
  return {
    id: 'toy', domain: `nốt tròn Đô4 – ${top}`, base, free: [0], end, exceptions: new Set(),
    candidates: () => Array.from({ length: top - 28 + 1 }, (_, i) => ({ duration: fromQuarters(4), pitch: fromDiatonic(28 + i) })),
    write: (_v, at, ch, n) => [{ kind: 'note', id: `n${n}`, onset: at, duration: ch.duration, pitch: ch.pitch }],
    views: (s, partial) => [{ label: 'toy', rules, frontier: frontierOf(s), queries: textureQueries({ score: s, lines: [0], pairs: [], end, consonance: () => ({ perfect: [], imperfect: [] }), partial }) }],
  }
}

describe('GĐ3–4 — mô hình ràng buộc và tìm kiếm dùng chung', () => {
  it('không biết gì về lĩnh vực: bài đồ chơi "đi lên liền bậc" — có lời giải, vô nghiệm đã chứng minh, hết giờ là ba kết luận khác nhau', () => {
    const ok = search(toy(4), { timeMs: 5000, maxSolutions: 10 })
    expect(ok.status).toBe('solved')
    expect(ok.solutions.length).toBe(5) // C4…F4, D4…G4, E4…A4, F4…B4, G4…C5
    const no = search(toy(9), { timeMs: 5000, maxSolutions: 1 }) // nine steps up do not fit in an octave of choices
    expect(no.status).toBe('unsat')
    const cut = search(toy(9, 60), { timeMs: 5000, maxSolutions: 1, nodeLimit: 3 })
    expect(cut.status).toBe('timeout')
  })
  it('phức điệu hai bè: cùng kết luận với bộ giải của trang (có lời giải / vô nghiệm đã chứng minh), mọi lời giải qua bộ kiểm độc lập', () => {
    const tasks = [
      twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'),
      twoVoiceTask('C5:4 | B4:4 | A4:4 | G4:4 | A4:4 | B4:4 | C5:4', { givenIs: 'I' }),
      twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4', { stars: [0], starsOnly: true }),
      twoVoiceTask('C4:4 | E4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4', { versions: [{ shift: { I: 0, II: -7 }, motion: 'near', label: 'Iv −7' }] }),
      twoVoiceTask('C4:4 | E4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4', { versions: [{ shift: { I: 0, II: 0 }, motion: 'near', label: 'đảo ảnh', mirror: true }] }),
    ]
    for (const t of tasks) {
      const ours = search(twoVoiceModel(t, rb), { timeMs: 10_000, maxSolutions: 3 })
      const page = solveMany(toProblem(t), 10_000, 1)
      expect(ours.status === 'solved' ? 'valid' : ours.status, t.score.voices[0].id).toBe(page.status)
      for (const s of ours.solutions) expect(twoVoiceValidator.validate(t, s, rb).status).toBe('VALID')
    }
  }, 60_000)
  it('ba bè: cùng kết luận với msolve, lời giải qua bộ kiểm độc lập', () => {
    const t = multiTask(['', '', 'C3:4 | D3:4 | B2:4 | C3:4'], [true, true, false])
    const ours = search(multiVoiceModel(t, rb), { timeMs: 10_000, maxSolutions: 2 })
    expect(ours.status).toBe(msolve(toMProblem(t), { timeMs: 10_000, maxSolutions: 1 }).status === 'valid' ? 'solved' : 'unsat')
    for (const s of ours.solutions) expect(multiVoiceValidator.validate(t, s, rb).status).toBe('VALID')
  }, 60_000)
  it('bộ giải chung làm "đối thủ" của bộ kiểm: 30 đề ngẫu nhiên (✱, biến thể) — mọi lời giải nó tìm ra đều qua verify.ts và bộ kiểm UMRE', () => {
    let seed = 29
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    const L = 'CDEFGAB'
    let sols = 0
    for (let k = 0; k < 30; k++) {
      const bars = 4 + Math.floor(rnd() * 2)
      let d = 28 + Math.floor(rnd() * 3)
      const cf: string[] = []
      for (let b = 0; b < bars; b++) {
        if (b) d += [-2, -1, 1, 2, -1, 1][Math.floor(rnd() * 6)]
        if (b === bars - 1) d = 28
        cf.push(`${L[((d % 7) + 7) % 7]}${Math.floor(d / 7)}:4`)
      }
      const opts: Parameters<typeof twoVoiceTask>[1] = {}
      if (rnd() < 0.4) Object.assign(opts, { stars: [4 * (1 + Math.floor(rnd() * (bars - 2)))], starsOnly: true })
      if (rnd() < 0.4) opts.versions = [[{ shift: { I: 0, II: -7 }, motion: 'near' as const, label: 'Iv' }], [{ shift: { I: 0, II: 0 }, motion: 'near' as const, label: 'Ih', ih: -4 }], [{ shift: { I: 0, II: 0 }, motion: 'near' as const, label: 'đảo', mirror: true }]][Math.floor(rnd() * 3)]
      const t = twoVoiceTask(cf.join(' | '), opts)
      for (const s of search(twoVoiceModel(t, rb), { timeMs: 3000, maxSolutions: 2 }).solutions) {
        sols++
        expect(twoVoiceValidator.validate(t, s, rb).status, cf.join(' ')).toBe('VALID')
      }
    }
    expect(sols).toBeGreaterThan(20)
  }, 60_000)
  it('qua bộ điều phối: chọn bộ giải chung theo id → SOLVED, được bộ kiểm mà nó không dùng (verify.ts) xác nhận', async () => {
    const e = createEngine()
    const r = await e.orchestrator.run(twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'), { solverId: 'umre.csp.counterpoint', timeMs: 5000, maxSolutions: 1 })
    expect([r.status, r.solverId]).toEqual(['SOLVED', 'umre.csp.counterpoint'])
    expect(r.solutions[0].confirmation.by['dis-strong']).toContain('verify')
    expect(r.solutions[0].confirmation.by['dis-strong']).not.toContain('umre-rules')
    // the page's solver stays the default
    expect((await e.orchestrator.run(twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'), { timeMs: 5000, maxSolutions: 1 })).solverId).toBe('counterpoint.two-voice.search')
  })
})
