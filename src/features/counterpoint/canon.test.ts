import { describe, expect, it } from 'vitest'
import { pitch, type Seg } from './model'
import { canonSolve, preset, textureOf, transformLine, type CanonSpec, type Transform } from './canon'
import { mcheck, mverify, type MProblem } from './multi'

function line(s: string): Seg[] {
  const out: Seg[] = []
  let t = 0
  for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
    const m = /^([A-G])(\d):(\d)$/.exec(tok)!
    out.push({ start: t, dur: +m[3], p: pitch(+m[2] * 7 + 'CDEFGAB'.indexOf(m[1])) })
    t += +m[3]
  }
  return out
}
const C = { tonic: 0, alter: 0, minor: false }
const meter = { num: 2, den: 2 } as const
const A = line('C5:2 D5:2 | E5:2 C5:2')
const spec = (extra: Partial<CanonSpec>): CanonSpec => ({ key: C, meter, A, ...preset('mp-don-gian', 8, 4, -7), ...extra })
const asMP = (s: CanonSpec, lines: Seg[][], ends: number[]): MProblem => ({
  key: s.key, meter: s.meter, voices: s.order.map((i) => lines[i]), free: s.order.map(() => true), versions: [], ends: s.order.map((i) => ends[i]),
})

describe('biến đổi của bè mô phỏng (tr. 47–48)', () => {
  it('cùng hướng, đảo ảnh, phóng to, thu nhỏ, ngược hướng', () => {
    const src = line('C5:2 D5:2 | E5:4')
    const f = (transform: Transform) => transformLine(C, src, { delay: 0, steps: 0, transform })!
    expect(f('same').map((s) => s.p.step)).toEqual(src.map((s) => s.p.step))
    // đảo ảnh quanh Rê: Đô ↔ Mi (giọng Đô trưởng)
    expect(f('inv').map((s) => s.p.step)).toEqual(src.map((s) => 2 * src[1].p.step - s.p.step))
    expect(f('aug').map((s) => [s.start, s.dur])).toEqual([[0, 4], [4, 4], [8, 8]])
    expect(f('dim').map((s) => [s.start, s.dur])).toEqual([[0, 1], [1, 1], [2, 2]])
    expect(f('retro').map((s) => [s.start, s.p.step])).toEqual([[0, src[2].p.step], [4, src[1].p.step], [6, src[0].p.step]])
    expect(transformLine(C, line('C5:1 D5:1'), { delay: 0, steps: 0, transform: 'dim' })).toBeNull()
  })
})

describe('bộ giải mô phỏng – canon', () => {
  for (const [name, s] of [
    ['mô phỏng đơn giản quãng 8', spec({})],
    ['mô phỏng đảo ảnh quãng 5', spec({ followers: [{ delay: 8, steps: -4, transform: 'inv' }] })],
    ['canon vô tận loại I', spec(preset('vo-tan-1', 8, 4, -7))],
    ['canon mô tiến loại I', spec(preset('mo-tien-1', 8, 4, -7, -1))],
    ['canon ba bè loại I kiểu 1', spec(preset('ba-be-1', 8, 4, -4))],
  ] as const) {
    it(`${name}: có lời giải, bè mô phỏng đúng là bản sao, qua bộ kiểm độc lập; đổi một nốt thì hai bộ kiểm cùng kết luận`, () => {
      const r = canonSolve(s, { timeMs: 20_000, maxSolutions: 1 })
      expect(r.status).toBe('valid')
      const lines = r.solutions[0].lines
      const u = lines[0].filter((x) => x.start < s.L)
      const tx = textureOf(s, u, true)!
      expect(tx.lines).toEqual(lines)
      expect(mverify(asMP(s, tx.lines, tx.ends), s.order.map((i) => tx.lines[i]))).toEqual([])
      // mutate the leader's continuation (after A): both checkers must still agree on the rebuilt texture
      const a = A.length
      for (let k = a; k < u.length; k++)
        for (const d of [-1, 1]) {
          const m = u.map((x, j) => (j === k || (j === k + 1 && x.tied) ? { ...x, p: pitch(u[k].p.step + d) } : x))
          const t2 = textureOf(s, m, true)!
          const mp = asMP(s, t2.lines, t2.ends)
          const ls = s.order.map((i) => t2.lines[i])
          expect(mverify(mp, ls).length === 0, `${name} nốt ${k} ${d}`).toBe(mcheck(mp, ls).hard.length === 0)
        }
    }, 60_000)
  }
  it('đoạn A đã phạm luật với bè mô phỏng: báo vô nghiệm và nói lý do', () => {
    const r = canonSolve(spec(preset('vo-tan-2', 8, 4, -4)), { timeMs: 5_000, maxSolutions: 1 })
    expect(r.status).toBe('unsat')
    expect(r.problem).toContain('đoạn A')
  })
})
