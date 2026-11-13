import { describe, expect, it } from 'vitest'
import { blank, writeAt, type Score } from '../../compose/model'
import { analyze } from './index'

/** A chord per half note, all in one lane: 'C3 E4 G4 C5'. Keys by signature (fifths). */
function prog(chords: string[], fifths = 0, minorEnd = false): Score {
  let s = blank('t', false)
  s = { ...s, key: fifths, measures: Math.ceil(chords.length / 2) + 1 }
  chords.forEach((c, i) => {
    const notes = c.split(' ').map((tok) => {
      const m = /^([A-G])(#|b|)(\d)$/.exec(tok)!
      return { step: 'CDEFGAB'.indexOf(m[1]), alter: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0, oct: +m[3] }
    })
    s = writeAt(s, 0, i * 480, 480, notes).score
  })
  void minorEnd
  return s
}
const labels = (s: Score, ru = true) => analyze(s).harmony.map((h) => (ru ? h.reading.ru : h.reading.rn))

describe('analysis engine — classical lens', () => {
  it('reads a plain cadence in C major: T S D7 T', () => {
    expect(labels(prog(['C3 E4 G4 C5', 'F3 F4 A4 C5', 'G3 F4 B4 D5', 'C3 E4 G4 C5']))).toEqual(['T', 'S', 'D7', 'T'])
    expect(labels(prog(['C3 E4 G4 C5', 'F3 F4 A4 C5', 'G3 F4 B4 D5', 'C3 E4 G4 C5']), false)).toEqual(['I', 'IV', 'V7', 'I'])
  })
  it('names inversions: T6, D65', () => {
    expect(labels(prog(['C3 E4 G4 C5', 'E3 G4 C5 E5', 'B2 D4 F4 G4', 'C3 E4 G4 C5']))).toEqual(['T', 'T6', 'D65', 'T'])
  })
  it('the cadential six-four is K64', () => {
    expect(labels(prog(['C3 E4 G4 C5', 'F3 A4 C5 F5', 'G3 C4 E4 G4', 'G3 B3 D4 G4', 'C3 C4 E4 G4']))).toEqual(['T', 'S', 'K64', 'D', 'T'])
  })
  it('the dominant of the dominant is II♯3 / V/V', () => {
    const s = prog(['C3 E4 G4 C5', 'D3 F#4 A4 C5', 'G3 D4 G4 B4', 'C3 E4 G4 C5'])
    expect(labels(s)).toEqual(['T', 'II7♯3', 'D', 'T'])
    expect(labels(s, false)).toEqual(['I', 'V7/V', 'V', 'I'])
  })
  it('an applied dominant to IV is D7→IV', () => {
    expect(labels(prog(['C3 E4 G4 C5', 'C3 E4 Bb4 G5', 'F3 F4 A4 C5', 'G3 D4 G4 B4', 'C3 E4 G4 C5']))).toEqual(['T', 'D7→IV', 'S', 'D', 'T'])
  })
  it('the Neapolitan sixth is II♭6', () => {
    expect(labels(prog(['A2 E4 A4 C5', 'D3 F4 Bb4 D5', 'E3 E4 G#4 B4', 'A2 E4 A4 C5'], 0), false)).toEqual(['i', 'N6', 'V', 'i'])
    expect(labels(prog(['A2 E4 A4 C5', 'D3 F4 Bb4 D5', 'E3 E4 G#4 B4', 'A2 E4 A4 C5'], 0))).toEqual(['t', 'II♭6', 'D', 't'])
  })
  it('the German sixth is IV♯65♭3 (not a dominant seventh, by its spelling)', () => {
    const s = prog(['C3 E4 G4 C5', 'Ab2 Eb4 F#4 C5', 'G2 D4 G4 B4', 'C3 E4 G4 C5'])
    expect(labels(s)[1]).toBe('IV♯65♭3')
    expect(labels(s, false)[1]).toBe('Ger65')
  })
  it('finds the key from the music, not only the signature: A minor with no signature', () => {
    const a = analyze(prog(['A2 E4 A4 C5', 'D3 F4 A4 D5', 'E3 E4 G#4 B4', 'A2 E4 A4 C5']))
    expect(a.harmony.map((h) => h.key.name)).toEqual(['Am', 'Am', 'Am', 'Am'])
  })
  it('reports a modulation to the dominant once it is confirmed by a cadence', () => {
    const s = prog(['C3 E4 G4 C5', 'F3 F4 A4 C5', 'G3 D4 G4 B4', 'C3 E4 G4 C5', 'D3 F#4 A4 D5', 'G3 G4 B4 D5', 'C3 E4 G4 C5', 'D3 F#4 A4 C5', 'G3 G4 B4 D5', 'E3 G4 B4 E5', 'A2 E4 A4 C5', 'D3 F#4 A4 C5', 'G2 G4 B4 D5', 'G2 G4 B4 D5'])
    const keys = analyze(s).harmony.map((h) => h.key.name)
    expect(keys[0]).toBe('C')
    expect(keys[keys.length - 1]).toBe('G')
  })
})
