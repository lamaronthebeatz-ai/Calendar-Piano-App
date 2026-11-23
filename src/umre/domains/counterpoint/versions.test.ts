import { describe, expect, it } from 'vitest'
import { makeVersion, pitch, upperLower, type Key } from '../../../features/counterpoint/model'
import { octaveVersions, shiftLine } from '../../../features/counterpoint/multi'
import type { VersionSpec } from '../../../features/counterpoint/rules'
import { solveMany } from '../../../features/counterpoint/solver'
import { verify } from '../../../features/counterpoint/verify'
import { fromCounterpoint, toCounterpoint } from '../../repr/adapters/counterpoint'
import { counterpointRulebook } from '../../rulebook/counterpoint'
import { C, line, twoVoiceTask } from '../../testing/fixtures'
import { twoVoiceValidator } from '../../validation/counterpoint'
import { toProblem, twoVoiceSolution } from './task'
import { multiVersions, twoVoiceVersions } from './versions'

const SPECS: VersionSpec[] = [
  { shift: { I: 0, II: -7 }, motion: 'near', label: 'Iv −7' }, { shift: { I: -2, II: -7 }, motion: 'swap', label: 'chuyển chỗ −9' },
  { shift: { I: 0, II: -9 }, motion: 'swap', label: 'II −9' }, { shift: { I: 0, II: 0 }, motion: 'near', label: 'Ih −1', ih: -4 },
  { shift: { I: 0, II: 0 }, motion: 'near', label: 'Ih +½', ih: 2 }, { shift: { I: 0, II: 0 }, motion: 'near', label: 'đảo ảnh', mirror: true },
  { shift: { I: 0, II: -7 }, motion: 'near', label: 'đảo ảnh + Ih', mirror: true, ih: 4 },
]
const KEYS: Key[] = [C, { tonic: 5, alter: 0, minor: true }, { tonic: 1, alter: 0, minor: true, sig: 0, mode: 'Dorian' }, { tonic: 6, alter: -1, minor: false }]
const sig = (l: { start: number; p: { step: number; midi: number } }[]) => l.map((x) => `${x.start}:${x.p.step}:${x.p.midi}`).join(' ')

describe('biến thể dựng trong UMRE (code riêng, cùng nghĩa với dữ liệu của mô-đun phức điệu)', () => {
  it('hai bè: 7 loại biến thể × 4 giọng (có Dorian, Si♭ trưởng, nốt biến âm) — trùng từng nốt với makeVersion', () => {
    const I = line('C5:2 B4:2 | A4:4 | G#4:2 A4:2 | Bb4:4')
    const II = line('A3:4 | D4:2 E4:2 | F4:4 | E4:4')
    for (const k of KEYS) {
      const mine = twoVoiceVersions(fromCounterpoint({ key: k, meter: { num: 2, den: 2 }, lines: [I, II] }), SPECS)
      SPECS.forEach((sp, i) => {
        const ul = upperLower(makeVersion(k, I, II, sp.shift, sp.label, sp.motion, { ih: sp.ih, mirror: sp.mirror }))
        const back = toCounterpoint(mine[i].score).lines
        expect([sig(back[0]), sig(back[1])], `${JSON.stringify(k)} ${sp.label}`).toEqual([sig(ul.upper), sig(ul.lower)])
      })
    }
  })
  it('ba – bốn bè: dời quãng 8 từng bè trùng shiftLine', () => {
    const lines = [line('E5:4 | D5:4'), line('G4:4 | B4:4'), line('C4:4 | G3:4')]
    const s = fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines })
    for (const v of octaveVersions(3)) {
      const mv = multiVersions(s, [v])[0]
      const back = toCounterpoint(mv.score).lines
      lines.forEach((l, i) => expect(sig(back[i])).toBe(sig(shiftLine(C, v.steps[i], l))))
      expect(mv.order).toEqual(v.order)
    }
  })
  it('kiểm thử sai khác trên mọi loại biến thể: bộ luật UMRE không bao giờ lỏng hơn verify.ts; lời giải thật VALID', () => {
    const rb = counterpointRulebook()
    let seed = 3
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    for (const sp of SPECS) {
      const t = twoVoiceTask('C4:4 | E4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4', { versions: [sp] })
      const sols = solveMany(toProblem(t), 4000, 2).solutions
      expect(sols.length, sp.label).toBeGreaterThan(0)
      for (const s of sols) expect(twoVoiceValidator.validate(t, twoVoiceSolution(t, s.cp), rb).status).toBe('VALID')
      for (let k = 0; k < 40; k++) {
        const cp = sols[k % sols.length].cp.map((x) => ({ ...x }))
        const i = Math.floor(rnd() * cp.length)
        if (cp[i].tied) continue
        cp[i] = { ...cp[i], p: pitch(cp[i].p.step + [-2, -1, 1, 2][Math.floor(rnd() * 4)]) }
        for (let j = i + 1; cp[j]?.tied; j++) cp[j] = { ...cp[j], p: cp[i].p }
        const r = twoVoiceValidator.validate(t, twoVoiceSolution(t, cp), rb)
        if (verify(toProblem(t), cp).length) expect(r.status).not.toBe('VALID')
        for (const x of r.reasons.filter((y) => /bất đồng/.test(y) && /^.*: verify /.test(y))) {
          const m = /verify (.*) \/ umre-rules (.*)$/.exec(x)
          if (!m) continue
          const ours = new Set(m[2].split(' '))
          expect(m[1].split(' ').filter((z) => z !== '∅').every((z) => ours.has(z)), x).toBe(true)
        }
      }
    }
  })
})
