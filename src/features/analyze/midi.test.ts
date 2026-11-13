import { describe, expect, it } from 'vitest'
import { blank, writeAt, midiOf } from '../compose/model'
import { toMidi } from '../compose/exchange'
import { fromMidi } from './midi'

describe('MIDI import', () => {
  it('reads back the notes, metre and key the app wrote', () => {
    let s = blank('t', true)
    s = { ...s, key: -2, time: [3, 4] }
    s = writeAt(s, 0, 0, 240, [{ step: 4, oct: 4, alter: 0 }, { step: 6, oct: 4, alter: -1 }]).score
    s = writeAt(s, 0, 240, 480, [{ step: 3, oct: 5, alter: 0 }]).score
    s = writeAt(s, 1, 0, 720, [{ step: 4, oct: 2, alter: 0 }]).score
    const back = fromMidi(toMidi(s).buffer)
    expect(back.time).toEqual([3, 4])
    expect(back.key).toBe(-2)
    const sounding = (x: typeof s) => x.staves.flatMap((evs) => evs.filter((e) => e.notes.length).flatMap((e) => e.notes.map((n) => `${e.start}:${e.dur}:${midiOf(n)}`))).sort()
    expect(sounding(back)).toEqual(sounding(s))
  })
  it('spells black keys with flats in a flat key', () => {
    let s = blank('t', false)
    s = { ...s, key: -2 }
    s = writeAt(s, 0, 0, 240, [{ step: 6, oct: 4, alter: -1 }]).score
    const n = fromMidi(toMidi(s).buffer).staves[0].find((e) => e.notes.length)!.notes[0]
    expect([n.step, n.alter]).toEqual([6, -1])
  })
})
