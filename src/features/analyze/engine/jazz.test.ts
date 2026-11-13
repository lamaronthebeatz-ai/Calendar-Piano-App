import { describe, expect, it } from 'vitest'
import { blank, writeAt, type Score } from '../../compose/model'
import { analyze } from './index'
import { parseSymbol } from './leadsheet'
import { report } from './report'

const tok = (t: string) => {
  const m = /^([A-G])(#|b|)(\d)$/.exec(t)!
  return { step: 'CDEFGAB'.indexOf(m[1]), alter: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0, oct: +m[3] }
}
/** One chord per bar of 4/4, voiced in one lane. */
function bars(chords: string[], fifths = 0): Score {
  let s = blank('t', false)
  s = { ...s, key: fifths, measures: chords.length }
  chords.forEach((c, i) => (s = writeAt(s, 0, i * 960, 960, c.split(' ').map(tok)).score))
  return s
}

describe('jazz lens', () => {
  it('reads II–V–I in C with Levine’s scales', () => {
    const a = analyze(bars(['D3 F4 A4 C5', 'G2 F4 B4 D5', 'C3 E4 G4 B4', 'C3 E4 G4 B4']), { lens: 'jazz' })
    expect(a.jazz!.readings.slice(0, 3).map((r) => r.rn)).toEqual(['IIm7', 'V7', 'Imaj7'])
    expect(a.jazz!.readings.slice(0, 3).map((r) => r.scale)).toEqual(['Dorian', 'Mixolydian', 'Ionian (trưởng)'])
    expect(a.jazz!.readings[1].guide).toBe('B – F')
    expect(a.jazz!.patterns.map((p) => p.kind)).toContain('II–V–I')
  })
  it('names a tritone substitute', () => {
    const a = analyze(bars(['D3 F4 A4 C5', 'Db3 F4 B4 Eb5', 'C3 E4 G4 B4', 'C3 E4 G4 B4']), { lens: 'jazz' })
    expect(a.jazz!.patterns.map((p) => p.kind)).toContain('SubV')
    expect(a.jazz!.readings[1].rn).toMatch(/^SubV/)
  })
  it('finds a twelve-bar blues in F', () => {
    const F7 = 'F2 A3 Eb4 C5'
    const Bb7 = 'Bb2 D4 Ab4 F5'
    const C7 = 'C3 E4 Bb4 G5'
    const s = bars([F7, Bb7, F7, F7, Bb7, Bb7, F7, F7, C7, Bb7, F7, C7], -1)
    const text = report(analyze(s, { lens: 'jazz' })).map((b) => b.paras.map((p) => p.map((r) => r.t).join('')).join(' ')).join(' ')
    expect(text).toContain('blues 12 ô')
  })
  it('parses lead-sheet symbols', () => {
    expect(parseSymbol('F♯ø7')?.quality).toBe('ø7')
    expect(parseSymbol('B7♭9')?.quality).toBe('b9')
    expect(parseSymbol('E-7')?.quality).toBe('m7')
    expect(parseSymbol('AΔ7')?.quality).toBe('M7')
    expect(parseSymbol('C/E')).toMatchObject({ quality: 'M', bass: { step: 2, alter: 0 } })
    expect(parseSymbol('Hello')).toBeNull()
  })
  it('uses the lead sheet’s own symbols when it has them', () => {
    let s = bars(['C4', 'C4', 'C4', 'C4', 'C4'])
    s = { ...s, staves: [s.staves[0].map((e, i) => (e.notes.length && i < 5 ? { ...e, harm: ['Em7', 'A7', 'Dm7', 'G7', 'Cmaj7'][i] } : e))] }
    const a = analyze(s, { lens: 'jazz' })
    expect(a.jazz!.fromSymbols).toBe(true)
    expect(a.jazz!.patterns.filter((p) => p.kind === 'II–V–I').length + a.jazz!.patterns.filter((p) => p.kind === 'II–V').length).toBeGreaterThanOrEqual(2)
  })
})
