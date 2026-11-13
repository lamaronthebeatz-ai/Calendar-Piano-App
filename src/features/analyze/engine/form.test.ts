import { describe, expect, it } from 'vitest'
import { blank, writeAt, type Score } from '../../compose/model'
import { analyze } from './index'

const tok = (t: string) => {
  const m = /^([A-G])(#|b|)(\d)$/.exec(t)!
  return { step: 'CDEFGAB'.indexOf(m[1]), alter: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0, oct: +m[3] }
}
/** Bars of 4/4: melody notes (quarters, or a half when the bar has two, a whole when one) over a chord per bar. */
function piece(bars: { mel: string[]; chord: string }[]): Score {
  let s = blank('t', true)
  s = { ...s, measures: bars.length }
  bars.forEach((b, i) => {
    const d = 960 / b.mel.length
    b.mel.forEach((n, k) => (s = writeAt(s, 0, i * 960 + k * d, d, [tok(n)]).score))
    s = writeAt(s, 1, i * 960, 960, b.chord.split(' ').map(tok)).score
  })
  return s
}
const I = 'C3 E3 G3'
const IV = 'F2 A3 C4'
const V = 'G2 B3 D4'
const vi = 'A2 C3 E3'
const ii = 'D3 F3 A3'

describe('form', () => {
  it('two phrases, half cadence then full cadence: a period', () => {
    const s = piece([
      { mel: ['E4', 'D4', 'C4', 'E4'], chord: I },
      { mel: ['F4', 'E4', 'D4', 'F4'], chord: IV },
      { mel: ['E4', 'C4', 'D4', 'E4'], chord: I },
      { mel: ['D4'], chord: V },
      { mel: ['E4', 'D4', 'C4', 'E4'], chord: I },
      { mel: ['F4', 'E4', 'D4', 'F4'], chord: IV },
      { mel: ['E4', 'D4', 'D4', 'B3'], chord: V },
      { mel: ['C4'], chord: I },
    ])
    const f = analyze(s).form
    expect(f.phrases.map((p) => p.bars)).toEqual([[0, 3], [4, 7]])
    expect(f.guess?.concept).toBe('period')
    expect(f.repeats.some((r) => r.a[0] === 0 && r.b[0] === 4)).toBe(true)
  })
  it('finds a one-bar sequence going down by step', () => {
    const s = piece([
      { mel: ['G4', 'A4', 'G4', 'F4'], chord: I },
      { mel: ['F4', 'G4', 'F4', 'E4'], chord: ii },
      { mel: ['E4', 'F4', 'E4', 'D4'], chord: I },
      { mel: ['D4', 'E4', 'D4', 'C4'], chord: vi },
      { mel: ['C4'], chord: I },
    ])
    expect(analyze(s).form.repeats.some((r) => r.kind === 'sequence')).toBe(true)
  })
  it('opening material returning after a contrast: A – B – A', () => {
    const A = [
      { mel: ['C5', 'E5', 'G5', 'E5'], chord: I },
      { mel: ['F5', 'D5', 'B4', 'D5'], chord: V },
      { mel: ['C5', 'E5', 'G5', 'E5'], chord: I },
      { mel: ['C5'], chord: I },
    ]
    const B = [
      { mel: ['A4', 'A4', 'A4', 'A4'], chord: vi },
      { mel: ['D4', 'F4', 'D4', 'F4'], chord: ii },
      { mel: ['G4', 'G4', 'B4', 'B4'], chord: V },
      { mel: ['G4'], chord: V },
    ]
    const f = analyze(piece([...A, ...B, ...A])).form
    expect(f.sections.map((x) => x.letter.replace(/′/g, ''))).toEqual(['A', 'B', 'A'])
    expect(f.guess?.concept).toBe('ternary')
  })
})
