import { describe, expect, it } from 'vitest'
import { blank, meter, notePieces, restPieces, spell, writeAt, totalOf, DUR } from './model'

const durs = (p: { dur: number; dots: number }[]) => p.map((x) => `${x.dur}${'.'.repeat(x.dots)}`)
const Q = DUR[4]

describe('meter', () => {
  it('4/4 beats in quarters with a barrier in the middle', () => {
    const m = meter([4, 4])
    expect(m.len).toBe(4 * Q)
    expect(m.beats).toHaveLength(4)
    expect(m.barriers).toEqual([2 * Q])
  })
  it('6/8 is compound: two dotted-quarter beats', () => {
    const m = meter([6, 8])
    expect(m.beats).toEqual([[0, 3 * DUR[8]], [3 * DUR[8], 6 * DUR[8]]])
  })
  it('7/8 groups 2+2+3', () => {
    expect(meter([7, 8]).beats.map(([a, b]) => (b - a) / DUR[8])).toEqual([2, 2, 3])
  })
})

describe('notation of lengths', () => {
  it('spells a dotted half as one value', () => expect(durs(spell(3 * Q))).toEqual(['2.']))
  it('a half note on beat 2 of 4/4 is tied across the middle', () => {
    expect(durs(notePieces(meter([4, 4]), Q, 3 * Q))).toEqual(['4', '4'])
  })
  it('a dotted half from beat 1 stands across the middle', () => {
    expect(durs(notePieces(meter([4, 4]), 0, 3 * Q))).toEqual(['2.'])
  })
  it('rests show the beats', () => {
    expect(durs(restPieces(meter([4, 4]), Q, 4 * Q))).toEqual(['4', '2'])
    expect(durs(restPieces(meter([4, 4]), 0, 2 * Q))).toEqual(['2'])
  })
})

describe('writing', () => {
  it('a note over part of another cuts it and leaves rest after', () => {
    const s0 = blank('t', false)
    const a = writeAt(s0, 0, 0, 4 * Q, [{ step: 0, oct: 4, alter: 0 }]).score
    const b = writeAt(a, 0, Q, Q, [{ step: 4, oct: 4, alter: 0 }]).score
    // what is left after the new note is rest (merged with the rest that follows)
    const ev = b.staves[0].filter((e) => e.start < 4 * Q).map((e) => [e.start, e.notes.length])
    expect(ev).toEqual([[0, 1], [Q, 1], [2 * Q, 0]])
    expect(b.staves[0][0].dur).toBe(Q)
    expect(totalOf(b)).toBeGreaterThanOrEqual(4 * Q)
  })
})
