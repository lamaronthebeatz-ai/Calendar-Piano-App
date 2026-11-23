// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { fromCompose, fromMusicXmlText, toCompose, toMidiFile, toMusicXmlText } from './compose'
import { fromCounterpoint, keyFromCounterpoint, toCounterpoint } from './counterpoint'
import { fromMidiNotes, toMidiNotes } from './midi'
import { fromCalcNote, toCalcNote } from './harmonyCalc'
import { format, midi, notesOf, parsePitch, signatureOf, soundingNotes, validateScore, type Score } from '../index'
import { migrate as composeMigrate, type Score as CScore } from '../../../features/compose/model'
import { pitch as cpPitch, type Seg } from '../../../features/counterpoint/model'
import { msolve, type MProblem } from '../../../features/counterpoint/multi'
import { parse as calcParse } from '../../../features/tools/harmony'

const errors = (s: Score) => validateScore(s).filter((i) => i.severity === 'error')

/* ---------- counterpoint ---------- */

/** "C5:4~ C5:2 B4:2" → Seg[] (quarters; ~ ties into the next segment), as in the counterpoint tests. */
function line(s: string): Seg[] {
  const out: Seg[] = []
  let t = 0
  let tie = false
  for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
    const m = /^([A-G])(#|b)?(\d):(\d)(~?)$/.exec(tok)!
    const alter = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0
    out.push({ start: t, dur: +m[4], p: cpPitch(+m[3] * 7 + 'CDEFGAB'.indexOf(m[1]), alter), ...(tie ? { tied: true } : {}) })
    t += +m[4]
    tie = m[5] === '~'
  }
  return out
}
const C = { tonic: 0, alter: 0, minor: false }

describe('bộ chuyển đổi phức điệu', () => {
  it('khứ hồi chính xác: nốt nối, nốt biến âm, nhiều bè, giọng điệu thức đặt tay', () => {
    const lines = [line('C5:4~ | C5:2 B4:2 | C5:4'), line('E4:4 | D4:4 | C4:4'), line('E3:4 | F#3:4 | E3:4')]
    for (const key of [C, { tonic: 1, alter: 0, minor: true, sig: 0, mode: 'Dorian' }]) {
      const s = fromCounterpoint({ key, meter: { num: 2, den: 2 }, lines })
      expect(errors(s)).toEqual([])
      expect(toCounterpoint(s)).toEqual({ key, meter: { num: 2, den: 2 }, lines })
    }
  })
  it('nốt nối thành một nốt khi suy luận; trường độ đúng theo nốt tròn', () => {
    const s = fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line('C5:4~ | C5:2 B4:2')] })
    const sn = soundingNotes(s.voices[0])
    expect(sn.map((n) => format(n.duration))).toEqual(['3/2', '1/2'])
  })
  it('giọng phức điệu → giọng UMRE: hoá biểu trùng với keySig của mô-đun cũ', () => {
    expect(signatureOf(keyFromCounterpoint({ tonic: 6, alter: -1, minor: false }))).toBe(-2)
    expect(signatureOf(keyFromCounterpoint({ tonic: 2, alter: 0, minor: true, sig: 0, mode: 'Phrygian' }))).toBe(0)
  })
  it('hồi quy: lời giải thật của bộ giải ba bè chuyển sang UMRE vẫn hợp lệ và khứ hồi không đổi', () => {
    const mp: MProblem = { key: C, meter: { num: 2, den: 2 }, voices: [[], [], line('C3:4 | D3:4 | B2:4 | C3:4')], free: [true, true, false], versions: [] }
    const r = msolve(mp, { timeMs: 20_000, maxSolutions: 2 })
    expect(r.status).toBe('valid')
    for (const sol of r.solutions) {
      const s = fromCounterpoint({ key: C, meter: mp.meter, lines: sol.lines, roles: ['tự do', 'tự do', 'cantus-firmus'] })
      expect(errors(s)).toEqual([])
      expect(toCounterpoint(s).lines).toEqual(sol.lines)
    }
  })
})

/* ---------- score editor ---------- */

function composeSample(): CScore {
  return {
    id: 'cs', title: 'Mẫu', clefs: ['treble', 'bass'], key: 0, time: [4, 4], tempo: 96, measures: 3,
    attrs: { 1: { key: 1 }, 2: { time: [3, 4], clefs: { 1: 'tenor' }, right: 'end' } },
    lanes: [{ staff: 0, voice: 1 }, { staff: 0, voice: 2 }, { staff: 1, voice: 1 }],
    labels: ['Tay phải', 'Contrabass'], instruments: ['piano', 'contrabass'],
    staves: [
      [
        { id: 'a', start: 0, dur: 480, notes: [{ step: 0, oct: 5, alter: 0 }, { step: 2, oct: 5, alter: 0 }], artic: ['stacc'] },
        { id: 'b', start: 480, dur: 480, notes: [{ step: 4, oct: 5, alter: 0, tie: true }] },
        { id: 'c', start: 960, dur: 480, notes: [{ step: 4, oct: 5, alter: 0 }] },
        { id: 't1', start: 1440, dur: 80, notes: [{ step: 3, oct: 5, alter: 1 }], tup: { n: 3, base: 2, g: 'g1' } },
        { id: 't2', start: 1520, dur: 80, notes: [{ step: 4, oct: 5, alter: 0 }], tup: { n: 3, base: 2, g: 'g1' } },
        { id: 't3', start: 1600, dur: 80, notes: [{ step: 5, oct: 5, alter: 0 }], tup: { n: 3, base: 2, g: 'g1' } },
        { id: 'r1', start: 1680, dur: 240, notes: [] },
        { id: 'd', start: 1920, dur: 720, notes: [{ step: 5, oct: 5, alter: 0 }], lyric: { text: 'la' } },
      ],
      [
        { id: 'r2', start: 0, dur: 1920, notes: [] },
        { id: 'e', start: 1920, dur: 720, notes: [{ step: 2, oct: 4, alter: 0 }] },
      ],
      [
        { id: 'f', start: 0, dur: 960, notes: [{ step: 0, oct: 3, alter: 0 }], dyn: 'p' },
        { id: 'r3', start: 960, dur: 960, notes: [] },
        { id: 'g', start: 1920, dur: 720, notes: [{ step: 4, oct: 2, alter: 0 }], dyn: 'f' },
      ],
    ],
    spans: [{ id: 'sl', kind: 'slur', staff: 0, from: 'a', to: 'c' }],
    updated: 1700000000000,
    v: 2,
  }
}

describe('bộ chuyển đổi trình soạn nhạc', () => {
  it('ra UMRE hợp lệ: liên ba chính xác, nốt nối, hợp âm, đổi giọng – nhịp – khoá đúng vị trí', () => {
    const s = fromCompose(composeSample())
    expect(errors(s)).toEqual([])
    const v1 = s.voices[0].events
    expect(v1.filter((e) => e.kind === 'note' && e.group === 'a')).toHaveLength(2)
    expect(v1.find((e) => e.id === 'b')).toMatchObject({ tie: 'start' })
    expect(v1.find((e) => e.id === 'c')).toMatchObject({ tie: 'stop' })
    expect(format(v1.find((e) => e.id === 't2')!.onset)).toBe('19/12')
    expect(s.keySignatures.map((k) => [format(k.at), k.fifths])).toEqual([['0', 0], ['1', 1]])
    expect(s.meters.map((m) => [format(m.at), `${m.meter.num}/${m.meter.den}`])).toEqual([['0', '4/4'], ['2', '3/4']])
    expect(s.staves[1].clefs.map((c) => [format(c.at), c.clef])).toEqual([['0', 'bass'], ['2', 'tenor']])
    expect(s.voices.map((v) => v.staff)).toEqual(['st1', 'st1', 'st2'])
    expect(s.parts[1].instrument).toMatchObject({ name: 'Contrabass', transposition: { steps: -7, semitones: -12 } })
  })
  it('khứ hồi trình soạn nhạc → UMRE → trình soạn nhạc không mất gì (kể cả dấu diễn tấu, lời, luyến)', () => {
    const c = composeSample()
    expect(toCompose(fromCompose(c))).toEqual(composeMigrate(c))
  })
  it('MusicXML: ghi bằng bộ ghi của trình soạn nhạc, đọc lại ra cùng cao độ, vị trí, trường độ', () => {
    const s = fromCompose(composeSample())
    const back = fromMusicXmlText(toMusicXmlText(s))
    expect(errors(back)).toEqual([])
    const sig = (x: Score) => x.voices.map((v) => notesOf(v).map((n) => `${format(n.onset)}+${format(n.duration)}:${midi(n.pitch)}${n.tie ? n.tie[0] : ''}`).join(' '))
    expect(sig(back)).toEqual(sig(s))
  })
  it('một bài từ phức điệu (không có dữ liệu riêng của trình soạn nhạc) vẫn ra được bản soạn nhạc và MIDI', () => {
    const s = fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line('C5:4 | D5:4'), line('C3:4 | B2:4')] })
    const c = toCompose(s)
    expect(c.staves).toHaveLength(2)
    expect(c.measures).toBe(2)
    expect(toMidiFile(s).byteLength).toBeGreaterThan(20)
  })
})

describe('MIDI mức nốt', () => {
  it('ra nốt đang vang (nối gộp, nhạc cụ dịch giọng áp dụng), vào lại đúng âm và vị trí', () => {
    const s = fromCompose(composeSample())
    const notes = toMidiNotes(s, 480)
    // the contrabass sounds an octave below what is written
    expect(notes.find((n) => n.track === 'v3' && n.start === 0)!.key).toBe(midi(parsePitch('C3')) - 12)
    // G5 (two tied half notes, editor TPQ 240) is one sounding note of a whole note
    expect(notes.find((n) => n.track === 'v1' && n.key === 79)).toMatchObject({ start: 960, duration: 1920 })
    const back = fromMidiNotes(notes, { ppq: 480 })
    expect(errors(back)).toEqual([])
    // voices follow the order in which tracks first appear
    const tracks = [...new Set(notes.map((n) => n.track))]
    expect(toMidiNotes(back, 480)).toEqual(notes.map((n) => ({ ...n, track: back.voices[tracks.indexOf(n.track)].id })))
  })
  it('từ chối nốt chồng nhau trong một track (chia bè là phân tích, không phải nhập)', () => {
    expect(() => fromMidiNotes([{ track: 't', start: 0, duration: 480, key: 60 }, { track: 't', start: 240, duration: 480, key: 64 }], { ppq: 480 })).toThrow(/chồng/)
  })
})

describe('bảng tính hoà âm', () => {
  it('{l, a} ⇄ Spelling', () => {
    const n = calcParse('F#')!
    expect(toCalcNote(fromCalcNote(n))).toEqual(n)
  })
})
