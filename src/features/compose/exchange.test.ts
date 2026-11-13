// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { blank, DUR, writeAt, type Score } from './model'
import { fromMusicXml, toMidi, toMusicXml } from './exchange'

const Q = DUR[4]
// what sounds: events joined across ties (a file writes a long note as tied values; both are the same music)
const notes = (s: Score, staff = 0) => {
  const out: [number, number, string][] = []
  let tied = false
  for (const e of s.staves[staff].filter((x) => x.notes.length)) {
    const key = e.notes.map((n) => `${n.step}/${n.oct}/${n.alter}`).join('+')
    if (tied && out.length && out[out.length - 1][2] === key) out[out.length - 1][1] += e.dur
    else out.push([e.start, e.dur, key])
    tied = e.notes.every((n) => n.tie)
  }
  return out
}

function sample() {
  let s = blank('Thử', true)
  s = writeAt(s, 0, 0, Q, [{ step: 0, oct: 5, alter: 0 }, { step: 2, oct: 5, alter: 0 }]).score
  s = writeAt(s, 0, Q, Q / 2, [{ step: 3, oct: 5, alter: 1 }]).score
  s = writeAt(s, 0, 3 * Q / 2, 5 * Q / 2, [{ step: 6, oct: 4, alter: -1 }]).score
  s = writeAt(s, 1, 0, 4 * Q, [{ step: 0, oct: 3, alter: 0 }]).score
  return s
}

describe('MusicXML', () => {
  it('round-trips pitches, chords, accidentals and lengths (incl. a note tied across the middle)', () => {
    const s = sample()
    const back = fromMusicXml(toMusicXml(s))
    expect(back.title).toBe('Thử')
    expect(back.time).toEqual([4, 4])
    expect(notes(back, 0)).toEqual(notes(s, 0))
    expect(notes(back, 1)).toEqual(notes(s, 1))
  })
  it('rejects files that are not MusicXML', () => {
    expect(() => fromMusicXml('<html/>')).toThrow()
  })
})

describe('MIDI', () => {
  it('writes a standard MIDI file header', () => {
    const b = toMidi(sample())
    expect(String.fromCharCode(...b.slice(0, 4))).toBe('MThd')
    expect(b.length).toBeGreaterThan(40)
  })
})
