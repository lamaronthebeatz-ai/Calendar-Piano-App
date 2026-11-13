import { describe, expect, it } from 'vitest'
import { identify, interval, name, parse, symbol, transpose, up, tempoName, diatonic, SCALES } from './harmony'

const n = (s: string) => parse(s)!

describe('harmony engine', () => {
  it('parses every way of writing an accidental', () => {
    for (const [s, a] of [['F#', 1], ['F♯', 1], ['Fx', 2], ['F##', 2], ['Bb', -1], ['B♭', -1], ['Bbb', -2], ['E', 0]] as const) expect(n(s).a, s).toBe(a)
    expect(parse('H')).toBeNull()
  })
  it('spells intervals by letter, not by semitone', () => {
    expect(name(up(n('C'), [2, 4]))).toBe('E')
    expect(name(up(n('E♭'), [2, 4]))).toBe('G')
    expect(name(up(n('C♯'), [2, 4]))).toBe('E♯')
    expect(name(up(n('B'), [6, 10]))).toBe('A')
  })
  it('names intervals the Vietnamese way', () => {
    expect(interval(n('C'), n('E')).name).toBe('3 trưởng')
    expect(interval(n('E'), n('C')).name).toBe('6 thứ')
    expect(interval(n('F'), n('B')).name).toBe('4 tăng')
    expect(interval(n('B'), n('F')).name).toBe('5 giảm')
  })
  it('identifies chords from pitch classes', () => {
    expect(identify([0, 4, 7]).map(symbol)).toContain('C')
    expect(identify([7, 11, 2, 5]).map(symbol)).toContain('G7')
    expect(identify([9, 0, 4]).map(symbol)).toContain('Am')
    expect(identify([0])).toEqual([])
  })
  it('transposes chord symbols, spelling roots in the new key', () => {
    expect(transpose('C Am7 F/G G7', n('C'), n('E♭'))).toBe('E♭ Cm7 A♭/B♭ B♭7')
  })
  it('builds the diatonic sevenths of C major', () => {
    const major = SCALES.find((s) => s.ivs.length === 7)!
    expect(diatonic(n('C'), major, true).map(symbol)).toEqual(['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bø7'])
  })
  it('names tempos', () => {
    expect(tempoName(60)).toBe('Larghetto')
    expect(tempoName(120)).toBe('Allegro')
  })
})
