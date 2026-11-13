import { describe, expect, it } from 'vitest'
import { keyName, read, spell, type Chord, type Key } from './detect'

const C: Key = { tonic: 0, minor: false }
const a: Key = { tonic: 9, minor: true }
const Eb: Key = { tonic: 3, minor: false }
const ch = (root: number, q: Chord['q'], bass = root): Chord => ({ root, q, bass })

describe('chord ear — names', () => {
  it('names keys in solfège', () => {
    expect(keyName(C)).toBe('Đô trưởng')
    expect(keyName(Eb)).toBe('Mi♭ trưởng')
    expect(keyName({ tonic: 8, minor: true })).toBe('Sol♯ thứ')
  })
  it('spells chords the way the key writes them', () => {
    expect(spell(ch(7, '7'), C).letter).toBe('G7')
    expect(spell(ch(10, 'maj'), Eb).letter).toBe('B♭')
    expect(spell(ch(4, 'maj'), a).tones).toEqual(['E', 'G♯', 'B'])
    expect(spell(ch(0, 'maj', 4), C).letter).toBe('C/E')
  })
  it('reads functions the Soviet way', () => {
    expect(read(ch(0, 'maj'), C).label).toBe('T')
    expect(read(ch(7, '7'), C).label).toBe('D7')
    expect(read(ch(5, 'maj'), C).label).toBe('S')
    expect(read(ch(0, 'maj', 4), C).label).toBe('T6')
  })
})
