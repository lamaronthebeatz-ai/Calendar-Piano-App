import { describe, expect, it } from 'vitest'
import { pitch, type Seg } from './model'
import { canonSolve, gradeCanon, preset, textureOf, transformLine, type CanonSpec, type Transform } from './canon'
import { gradeMulti, mcheck, msolve, mverify, type MProblem } from './multi'

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

describe('mô phỏng tiết tấu, bè tự do thứ ba, đoạn kết', () => {
  const lenOf = (l: Seg[]) => (l.length ? l[l.length - 1].start + l[l.length - 1].dur : 0)
  const solved = (s: CanonSpec) => {
    const r = canonSolve(s, { timeMs: 20_000, maxSolutions: 1 })
    expect(r.status).toBe('valid')
    const lines = r.solutions[0].lines
    const ends = lines.map(lenOf)
    const mp: MProblem = { key: s.key, meter: s.meter, voices: s.order.map((i) => lines[i]), free: s.order.map(() => true), versions: [], ends: s.order.map((i) => ends[i]) }
    expect(mverify(mp, mp.voices)).toEqual([])
    return lines
  }
  it('mô phỏng tiết tấu: bè R giữ đúng tiết tấu của A, cao độ do máy viết (tr. 48)', () => {
    const lines = solved(spec({ followers: [{ delay: 8, steps: -7, transform: 'rhythm' }] }))
    expect(lines[1].map((x) => [x.start, x.dur])).toEqual(A.map((x) => [x.start + 8, x.dur]))
  }, 30_000)
  it('mô phỏng ba bè: hai bè mô phỏng, một bè tự do ở dưới (tr. 55)', () => {
    const lines = solved(spec({ followers: [{ delay: 8, steps: -4, transform: 'same' }], extraFree: 1, order: [0, 1, 2] }))
    expect(lines).toHaveLength(3)
    expect(lines[2][0].start).toBe(0)
    expect(lenOf(lines[2])).toBe(16)
  }, 30_000)
  it('đoạn kết: mọi bè cùng dừng sau một ô thêm', () => {
    for (const s of [spec({ coda: 4 }), spec({ ...preset('vo-tan-1', 8, 4, -7), coda: 4 }), spec({ ...preset('ba-be-1', 8, 4, -4), coda: 4 })]) {
      const lines = solved(s)
      const end = Math.max(...lines.map(lenOf))
      expect(lines.every((l) => lenOf(l) === end)).toBe(true)
    }
  }, 60_000)
})

describe('chấm bài tự viết (canon, ba bè)', () => {
  it('canon: bài đúng (lấy từ lời giải) được nhận, sửa một nốt thành nhảy quãng 7 thì bị bắt, viết thiếu thì báo chưa xong', () => {
    const s = spec(preset('vo-tan-1', 8, 4, -7))
    const sol = canonSolve(s, { timeMs: 10_000, maxSolutions: 1 }).solutions[0]
    const cont = sol.lines[0].filter((x) => x.start >= 8 && x.start < s.L)
    const ok = gradeCanon(s, [cont])!
    expect(ok.report.hard).toEqual([])
    expect(ok.unfinished).toEqual([])
    const bad = gradeCanon(s, [cont.map((x, i) => (i === 0 ? { ...x, tied: false, p: pitch(x.p.step + 6) } : x))])!
    expect(bad.report.hard.length).toBeGreaterThan(0)
    expect(gradeCanon(s, [cont.slice(0, 1)])!.unfinished).toContain('P (viết tiếp sau A)')
  }, 30_000)
  it('ba bè: lời giải của máy chấm lại vẫn đúng', () => {
    const mp: MProblem = { key: C, meter, voices: [[], [], line('C3:4 | D3:4 | B2:4 | C3:4')], free: [true, true, false], versions: [] }
    const r = msolve(mp, { timeMs: 10_000, maxSolutions: 1 })
    const g = gradeMulti(mp, r.solutions[0].lines)
    expect(g.report.hard).toEqual([])
    expect(g.unfinished).toEqual([])
    expect(gradeMulti(mp, [r.solutions[0].lines[0], [], r.solutions[0].lines[2]]).unfinished).toEqual(['bè II'])
  }, 30_000)
})
