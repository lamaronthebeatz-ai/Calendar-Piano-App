import { describe, expect, it } from 'vitest'
import { pitch, type Seg } from './model'
import { formSolve, type FormSpec } from './forms'
import { mcheck, mverify, type MProblem } from './multi'

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
const base = { key: C, meter: { num: 2, den: 2 }, n: 3 as const, variant: 'BT1', steps: -7, transform: 'inv' as const, bridge: 1 }

describe('phần IV: hình thức', () => {
  for (const f of [
    { ...base, form: 'hai-doan', given: line('E5:4 | F5:4 | D5:4 | C5:4'), at: 0 },
    { ...base, form: 'ba-doan', given: line('E5:4 | F5:4 | D5:4 | C5:4'), at: 0 },
    { ...base, form: 'hai-doan-mo-phong', given: line('C5:2 D5:2 | E5:2 C5:2'), at: 0 },
  ] as FormSpec[]) {
    it(`${f.form}: các đoạn và câu nối ghép thành một bài, cả bài qua hai bộ kiểm`, () => {
      const r = formSolve(f, 30_000)
      expect(r.status).toBe('valid')
      const { lines, parts, fixed } = r.solutions[0]
      const total = Math.max(...lines.map((l) => l.at(-1)!.start + l.at(-1)!.dur))
      const mp: MProblem = { key: C, meter: f.meter, voices: lines.map(() => []), free: lines.map(() => true), versions: [], ends: lines.map(() => total), fixed }
      expect(mcheck(mp, lines).hard).toEqual([])
      expect(mverify(mp, lines)).toEqual([])
      expect(parts.filter((p) => p.label === 'Câu nối')).toHaveLength(f.form === 'ba-doan' ? 2 : 1)
    }, 60_000)
  }
  it('đoạn 2 phạm luật ngay trong đoạn A (phóng to trường độ ở quãng 8 dưới): báo vô nghiệm kèm lý do, không bịa câu nối', () => {
    const r = formSolve({ ...base, form: 'hai-doan-mo-phong', transform: 'aug', given: line('C5:2 D5:2 | E5:2 C5:2'), at: 0 } as FormSpec, 10_000)
    expect(r.status).toBe('unsat')
    expect(r.why).toMatch(/^Đoạn 2/)
  })
})
