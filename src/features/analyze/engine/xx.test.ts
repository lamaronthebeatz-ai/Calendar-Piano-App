import { describe, expect, it } from 'vitest'
import { blank, writeAt, type Score } from '../../compose/model'
import { analyze } from './index'
import { canonOf, rowForms, rowMatrix, setInfo } from './xx'

const tok = (t: string) => {
  const m = /^([A-G])(#|b|)(\d)$/.exec(t)!
  return { step: 'CDEFGAB'.indexOf(m[1]), alter: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0, oct: +m[3] }
}

describe('20th-century lens', () => {
  it('names set classes by Forte, whatever the transposition or inversion', () => {
    expect(setInfo([0, 4, 7]).forte).toBe('3-11')
    expect(setInfo([2, 5, 9]).forte).toBe('3-11') // D minor: the inversion of a major triad
    expect(setInfo([0, 3, 6, 9]).forte).toBe('4-28')
    expect(setInfo([0, 6, 10, 4, 9, 2]).name).toMatch(/huyền bí/) // Scriabin's mystic chord C F♯ B♭ E A D
    expect(setInfo([0, 1, 3, 4, 6, 7, 9, 10]).forte).toBe('8-28')
    expect(canonOf([0, 4, 7])).toBe(canonOf([9, 1, 4]))
  })
  it('finds a whole-tone bar and quartal chords', () => {
    let s = blank('t', false)
    s = { ...s, measures: 2 }
    ;['C4', 'D4', 'E4', 'F#4', 'G#4', 'A#4'].forEach((n, i) => (s = writeAt(s, 0, i * 120, 120, [tok(n)]).score))
    s = writeAt(s, 0, 960, 960, ['C3', 'F3', 'Bb3', 'Eb4'].map(tok)).score
    const a = analyze(s, { lens: 'xx' })
    expect(a.xx!.collections[0].kind).toMatch(/toàn cung/)
    expect(a.xx!.techniques.some((t) => t.kind === 'quartal')).toBe(true)
  })
  it('finds a twelve-tone row and a later inversion of it, and builds its matrix', () => {
    const row = [0, 11, 7, 8, 3, 1, 2, 10, 6, 5, 4, 9] // Berg-like
    const inv = rowForms(row).find((f) => f.label === 'I5')!.pcs
    let s: Score = blank('t', false)
    s = { ...s, measures: 6 }
    ;[...row, ...inv].forEach((pc, i) => (s = writeAt(s, 0, i * 240, 240, [{ step: [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6][pc], alter: [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0][pc], oct: 4 }]).score))
    const a = analyze(s, { lens: 'xx' })
    expect(a.xx!.rows[0].pcs).toEqual(row)
    expect(a.xx!.rows[0].forms.map((f) => f.label)).toContain('I5')
    const m = rowMatrix(row)
    expect(m).toHaveLength(12)
    expect(m[0][0]).toBe('C')
    expect(new Set(m.map((r) => r[0])).size).toBe(12)
  })
})
