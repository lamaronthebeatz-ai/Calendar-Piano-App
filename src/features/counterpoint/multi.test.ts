import { describe, expect, it } from 'vitest'
import { pitch, type Seg } from './model'
import { mcheck, msolve, mverify, octaveVersions, type MProblem } from './multi'

function line(s: string): Seg[] {
  const out: Seg[] = []
  let t = 0
  let tie = false
  for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
    const m = /^([A-G])(\d):(\d)(~?)$/.exec(tok)!
    out.push({ start: t, dur: +m[3], p: pitch(+m[2] * 7 + 'CDEFGAB'.indexOf(m[1])), tied: tie })
    t += +m[3]
    tie = m[4] === '~'
  }
  return out
}
const C = { tonic: 0, alter: 0, minor: false }
const M = (voices: string[], given: number, versions = [] as MProblem['versions']): MProblem => ({
  key: C, meter: { num: 2, den: 2 }, voices: voices.map(line), free: voices.map((_, i) => i !== given), versions,
})
const hardOf = (mp: MProblem) => mcheck(mp, mp.voices).hard.map((v) => `${v.rule} ${v.version}`)

describe('ba bè: luật riêng (tr. 37–40)', () => {
  it('quãng 4 ở cặp trên là quãng thuận, ở cặp dưới và cặp ngoài là quãng nghịch', () => {
    // Đô5 – Sol4 – Mi4: cặp trên I–II là quãng 4, không cần chuẩn bị
    const ok = M(['C5:4 | B4:4', 'G4:4 | G4:4', 'E4:4 | D4:4'], 2)
    expect(hardOf(ok).filter((h) => h.endsWith(' · I–II'))).toEqual([])
    // Sol4 – Mi4 – Si3? no: Sol4 – Đô4 ở cặp dưới II–III là quãng 4 không chuẩn bị → lỗi
    const bad = M(['E5:4 | D5:4', 'G4:4 | G4:4', 'D4:4 | B3:4'], 2)
    expect(hardOf(bad).some((h) => h.endsWith(' · II–III'))).toBe(true)
    expect(mverify(bad, bad.voices).some((f) => f.includes('· II–III:'))).toBe(true)
  })
  it('cặp ngoài: cùng hướng vào quãng hoàn toàn khi bè trên nhảy là lỗi; bè trên đi liền bậc thì chỉ là ghi chú', () => {
    // bè trên nhảy xuống quãng 5, bè dưới cũng đi xuống: vào quãng 8 Đô5 – Đô4 bằng cùng hướng
    const leap = M(['G5:4 | C5:4', 'G4:4 | E4:4', 'E4:4 | C4:4'], 2)
    expect(hardOf(leap).some((h) => h.startsWith('hidden-hard') && h.includes('I–III'))).toBe(true)
    expect(mverify(leap, leap.voices).some((f) => f.includes('hidden-hard'))).toBe(true)
    const step = M(['D5:4 | C5:4', 'A4:4 | E4:4', 'F4:4 | C4:4'], 2)
    expect(hardOf(step).some((h) => h.startsWith('hidden-hard'))).toBe(false)
  })
  it('móc xích nốt nghịch (tr. 38): nốt giải quyết của bè I thành quãng nghịch mới với bè III — mỗi cặp vẫn thuận – nghịch – thuận nên được', () => {
    // I–II: Đô5 ngân thành quãng 7 với Rê4, giải quyết xuống Si4; Si4 lại nghịch (5 giảm) với Fa3 bè III đang ngân, Fa3 giải quyết xuống Mi3
    const chain = M(['C5:4~ | C5:2 B4:2 | G4:4', 'E4:4 | D4:4 | C4:4', 'E3:4 | F3:4 | E3:4'], 0)
    expect(hardOf(chain)).toEqual([])
    expect(mverify(chain, chain.voices)).toEqual([])
  })
})

describe('bộ giải ba – bốn bè', () => {
  const d4 = 'C3:4 | D3:4 | B2:4 | C3:4'
  for (const [name, mp] of [
    ['ba bè, đề dưới', M(['', '', d4], 2)],
    ['ba bè, đề giữa', M(['', 'E4:4 | F4:4 | D4:4 | C4:4', ''], 1)],
    ['bốn bè, đề dưới', M(['', '', '', d4], 3)],
    ['tam trùng quãng 8', M(['E5:4 | F5:4 | D5:4 | C5:4', '', ''], 0, octaveVersions(3))],
  ] as const) {
    it(`${name}: có lời giải, qua bộ kiểm độc lập; đổi một nốt thì hai bộ kiểm cùng kết luận`, () => {
      const r = msolve(mp, { timeMs: 20_000, maxSolutions: 1 })
      expect(r.status).toBe('valid')
      const sol = r.solutions[0].lines
      expect(mverify(mp, sol)).toEqual([])
      let compared = 0
      sol.forEach((l, v) => {
        if (!mp.free[v]) return
        l.forEach((_, k) => {
          for (const d of [-2, -1, 1, 2]) {
            const m = sol.map((x, j) => (j !== v ? x : x.map((s, q) => (q === k || (q === k + 1 && s.tied) ? { ...s, p: pitch(l[k].p.step + d) } : s))))
            expect(mverify(mp, m).length === 0, `${name} bè ${v} nốt ${k} ${d}`).toBe(mcheck(mp, m).hard.length === 0)
            compared++
          }
        })
      })
      expect(compared).toBeGreaterThan(10)
    }, 60_000)
  }
  it('vô nghiệm đã chứng minh: bè I và III cách nhau một bậc, bè II kẹp giữa buộc phải thành quãng 2 ngay nốt đầu', () => {
    const mp: MProblem = { ...M(['D4:4 | D4:4', '', 'C4:4 | C4:4'], 0), free: [false, true, false] }
    const r = msolve(mp, { timeMs: 20_000, maxSolutions: 1 })
    expect(r.status).toBe('unsat')
  }, 30_000)
  it('tứ trùng một hợp âm có lời giải đúng luật dù xấu (cả bốn bè cùng tên nốt): máy phải chấp nhận', () => {
    const mp = M(['C5:4', '', '', ''], 0, octaveVersions(4))
    const r = msolve(mp, { timeMs: 20_000, maxSolutions: 1 })
    expect(r.status).toBe('valid')
    expect(mverify(mp, r.solutions[0].lines)).toEqual([])
  }, 30_000)
})
