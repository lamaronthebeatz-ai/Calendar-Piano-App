import { describe, expect, it } from 'vitest'
import {
  add, between, chordMembers, chordsFromSpellings, degreeOf, div, enharmonic, figures, format, formatPitch, formatSpelling, fromDiatonic, fromJson,
  fromMidi, fromQuarters, fromTicks, interval, intervalName, inversion, invert, isRational, keyScale, layoutBars, locate, beatOf, meter, midi, migrate,
  mul, parseInterval, parsePitch, parseSpelling, pitch, pitchClass, quality, rat, relative, respell, SCHEMA, SCHEMA_VERSION, scaleOf, signatureAlter,
  signatureOf, simple, soundingNotes, spacing, sub, toJson, toTicks, transpose, validateScore, ZERO, type Key, type Score,
} from './index'
import { interval as cpInterval, keySig as cpKeySig, pitch as cpPitch, sigAlter as cpSigAlter } from '../../features/counterpoint/model'

const P = parsePitch

describe('rational: thời gian chính xác', () => {
  it('rút gọn, phép tính, so sánh', () => {
    expect(rat(2, 8)).toEqual({ n: 1, d: 4 })
    expect(rat(3, -6)).toEqual({ n: -1, d: 2 })
    expect(add(rat(1, 3), rat(1, 6))).toEqual(rat(1, 2))
    expect(sub(rat(1, 4), rat(1, 4))).toEqual(ZERO)
    expect(mul(rat(2, 3), rat(3, 4))).toEqual(rat(1, 2))
    expect(div(rat(1, 4), rat(1, 12))).toEqual(rat(3))
    expect(format(rat(3, 8))).toBe('3/8')
    expect(() => rat(1, 0)).toThrow()
    expect(() => rat(0.5, 2)).toThrow()
    expect(isRational({ n: 2, d: 4 })).toBe(false) // not reduced
  })
  it('liên ba cộng lại đúng một phách, không sai số', () => {
    const t = [1, 2, 3].reduce((a) => add(a, rat(1, 12)), ZERO)
    expect(t).toEqual(rat(1, 4))
  })
  it('đổi với tick và phách đen; từ chối làm tròn ngầm', () => {
    expect(fromTicks(240, 240)).toEqual(rat(1, 4))
    expect(toTicks(rat(1, 12), 240)).toBe(80)
    expect(() => toTicks(rat(1, 7), 240)).toThrow()
    expect(fromQuarters(1.5)).toEqual(rat(3, 8))
    expect(fromQuarters(1 / 3)).toEqual(rat(1, 12))
  })
})

describe('pitch: cao độ có cách viết', () => {
  it('MIDI, lớp cao độ, chỉ số bậc', () => {
    expect(midi(P('C4'))).toBe(60)
    expect(midi(P('A4'))).toBe(69)
    expect(midi(P('B#3'))).toBe(60)
    expect(midi(P('Cb4'))).toBe(59)
    expect(pitchClass(P('E#4'))).toBe(5)
    expect(fromDiatonic(28)).toEqual(P('C4'))
  })
  it('đọc và viết tên nốt ba kiểu', () => {
    expect(formatPitch(P('F##3'), 'en')).toBe('F##3')
    expect(formatPitch(P('Bb2'))).toBe('B♭2')
    expect(formatPitch(P('C#4'), 'vi')).toBe('Đô♯4')
    expect(parseSpelling('E♭')).toEqual({ letter: 2, alter: -1 })
    expect(formatSpelling(parseSpelling('Gx'), 'en')).toBe('G##')
    expect(() => P('H4')).toThrow()
    expect(() => pitch(0, 4, 4)).toThrow()
  })
  it('đồng âm khác tên: cùng âm thanh, khác cách viết', () => {
    expect(enharmonic(P('C#4'), P('Db4'))).toBe(true)
    expect(respell(P('C#4'), 1)).toEqual(P('Db4'))
    expect(respell(P('B#3'), 0)).toEqual(P('C4'))
    expect(respell(P('C4'), 6)).toEqual(P('B#3'))
  })
  it('từ MIDI: cách viết là quy ước được khai báo, không phải dữ kiện', () => {
    expect(fromMidi(61)).toEqual(P('C#4'))
    expect(fromMidi(61, 'flats')).toEqual(P('Db4'))
    expect(fromMidi(70, { fifths: -2 })).toEqual(P('Bb4'))
    expect(() => fromMidi(128)).toThrow()
  })
})

describe('interval: số bậc + số nửa cung', () => {
  const table: [string, string, string][] = [
    ['C4', 'C4', 'P1'], ['C4', 'D4', 'M2'], ['C4', 'Eb4', 'm3'], ['C4', 'F#4', 'A4'], ['C4', 'Gb4', 'd5'], ['C4', 'G4', 'P5'],
    ['C4', 'A4', 'M6'], ['C4', 'Bb4', 'm7'], ['C#4', 'Bb4', 'd7'], ['C4', 'C5', 'P8'], ['C4', 'E5', 'M10'], ['E4', 'C4', '-M3'], ['C4', 'C#4', 'A1'],
  ]
  it.each(table)('%s → %s = %s', (a, b, name) => expect(intervalName(between(P(a), P(b)))).toBe(name))
  it('đọc tên quãng ↔ viết tên quãng, mọi chất lượng 1 – 15', () => {
    for (let n = 1; n <= 15; n++)
      for (const q of n === 1 ? ['P', 'A', 'AA'] : [0, 3, 4].includes((n - 1) % 7) ? ['P', 'A', 'd', 'AA', 'dd'] : ['M', 'm', 'A', 'd']) {
        const iv = parseInterval(`${q}${n}`)
        expect(intervalName(iv)).toBe(`${q}${n}`)
      }
    expect(() => parseInterval('M5')).toThrow()
    expect(() => parseInterval('P3')).toThrow()
    expect(() => parseInterval('d1')).toThrow()
    expect(intervalName(parseInterval('-A1'))).toBe('-A1')
  })
  it('chuyển cao độ giữ đúng cách viết theo bậc', () => {
    expect(transpose(P('C4'), parseInterval('A4'))).toEqual(P('F#4'))
    expect(transpose(P('C4'), parseInterval('d5'))).toEqual(P('Gb4'))
    expect(transpose(P('E4'), parseInterval('-m3'))).toEqual(P('C#4'))
    expect(transpose(P('B3'), parseInterval('M2'))).toEqual(P('C#4'))
  })
  it('đảo quãng, rút gọn quãng kép', () => {
    expect(intervalName(invert(parseInterval('M3')))).toBe('m6')
    expect(intervalName(invert(parseInterval('A4')))).toBe('d5')
    expect(intervalName(simple(parseInterval('m10')))).toBe('m3')
    expect(intervalName(simple(parseInterval('P8')))).toBe('P8')
    expect(quality(interval(1, 9))).toBeNull() // a "second" of 9 semitones does not exist
  })
  it('khớp với mô-đun phức điệu: cùng số bậc, số nửa cung và độ lệch chất lượng trên mọi cặp nốt trong 2 quãng tám', () => {
    let n = 0
    for (let a = 21; a <= 35; a++)
      for (let b = a; b <= a + 14; b++)
        for (const [x, y] of [[0, 0], [1, 0], [0, -1], [-1, 1]]) {
          const lo = cpPitch(a, x)
          const hi = cpPitch(b, y)
          const c = cpInterval(hi, lo)
          const u = between(fromDiatonic(a, x), fromDiatonic(b, y))
          expect(u.steps).toBe(c.n)
          expect(u.semitones).toBe(c.semis)
          n++
        }
    expect(n).toBeGreaterThan(800)
  })
})

describe('tonal: hoá biểu, điệu thức, giọng', () => {
  it('hoá biểu của 15 giọng trưởng và giọng thứ song song', () => {
    const majors: [string, number][] = [['C', 0], ['G', 1], ['D', 2], ['A', 3], ['E', 4], ['B', 5], ['F#', 6], ['C#', 7], ['F', -1], ['Bb', -2], ['Eb', -3], ['Ab', -4], ['Db', -5], ['Gb', -6], ['Cb', -7]]
    for (const [t, f] of majors) {
      const k: Key = { tonic: parseSpelling(t), mode: 'major' }
      expect(signatureOf(k)).toBe(f)
      expect(signatureOf(relative(k))).toBe(f)
    }
  })
  it('các điệu thức nhà thờ trên nốt trắng đều không dấu', () => {
    for (const [t, m] of [['D', 'dorian'], ['E', 'phrygian'], ['F', 'lydian'], ['G', 'mixolydian'], ['A', 'aeolian'], ['B', 'locrian']] as const) expect(signatureOf({ tonic: parseSpelling(t), mode: m })).toBe(0)
  })
  it('dấu hoá theo hoá biểu khớp với mô-đun phức điệu, −7 … +7', () => {
    for (let f = -7; f <= 7; f++) for (let l = 0; l < 7; l++) expect(signatureAlter(f, l as 0)).toBe(cpSigAlter(f, l))
    expect(signatureAlter(8, 3)).toBe(2) // G♯ major: F double sharp
  })
  it('hoá biểu khớp với mô-đun phức điệu cho mọi giọng của trang Giải phức điệu', () => {
    const KEYS = [
      { tonic: 0, alter: 0, minor: false }, { tonic: 4, alter: 0, minor: false }, { tonic: 1, alter: 0, minor: false }, { tonic: 3, alter: 0, minor: false },
      { tonic: 6, alter: -1, minor: false }, { tonic: 5, alter: 0, minor: true }, { tonic: 2, alter: 0, minor: true }, { tonic: 1, alter: 0, minor: true },
      { tonic: 4, alter: 0, minor: true }, { tonic: 1, alter: 0, minor: true, sig: 0, mode: 'Dorian' }, { tonic: 2, alter: 0, minor: true, sig: 0, mode: 'Phrygian' },
      { tonic: 3, alter: 0, minor: false, sig: 0, mode: 'Lydian' }, { tonic: 4, alter: 0, minor: false, sig: 0, mode: 'Mixolydian' },
    ]
    for (const k of KEYS) {
      const mode = (k.mode?.toLowerCase() ?? (k.minor ? 'natural-minor' : 'major')) as Key['mode']
      expect(signatureOf({ tonic: { letter: k.tonic as 0, alter: k.alter }, mode })).toBe(cpKeySig(k))
    }
  })
  it('thang âm có cách viết đúng; bậc theo chữ cái', () => {
    expect(scaleOf(parseSpelling('F#'), 'major').map((s) => formatSpelling(s, 'en'))).toEqual(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'])
    expect(scaleOf(parseSpelling('A'), 'harmonic-minor').map((s) => formatSpelling(s, 'en'))).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G#'])
    expect(keyScale({ tonic: parseSpelling('D'), mode: 'dorian' }).map((s) => formatSpelling(s, 'en'))).toEqual(['D', 'E', 'F', 'G', 'A', 'B', 'C'])
    expect(degreeOf(parseSpelling('F#'), { tonic: parseSpelling('C'), mode: 'major' })).toEqual({ degree: 4, alteration: 1 })
    expect(degreeOf(parseSpelling('G#'), { tonic: parseSpelling('A'), mode: 'natural-minor' })).toEqual({ degree: 7, alteration: 1 })
  })
})

describe('time: ô nhịp, đổi nhịp, ô lấy đà', () => {
  it('xếp ô theo nhịp đổi, tìm ô và phách', () => {
    const bars = layoutBars([{ at: ZERO, meter: meter(3, 4) }, { at: rat(3, 2), meter: meter(6, 8) }], rat(3))
    expect(bars.map((b) => format(b.start))).toEqual(['0', '3/4', '3/2', '9/4'])
    expect(locate(bars, rat(7, 4))!.bar.index).toBe(2)
    expect(beatOf(meter(6, 8), rat(3, 8))).toEqual({ beat: 1, rest: ZERO }) // compound: dotted-quarter beats
    expect(beatOf(meter(3, 4), rat(5, 8))).toEqual({ beat: 2, rest: rat(1, 8) })
  })
  it('ô lấy đà là ô 0, ô đầy đủ bắt đầu sau nó', () => {
    const bars = layoutBars([{ at: ZERO, meter: meter(4, 4) }], rat(5, 4), rat(1, 4))
    expect(bars.map((b) => [format(b.start), b.pickup])).toEqual([['0', true], ['1/4', false]])
    expect(() => meter(3, 5)).toThrow()
  })
})

/** A small valid score: soprano with a tie and a chord, bass with a rest. */
function sample(): Score {
  const Q = rat(1, 4)
  return {
    schema: SCHEMA, version: SCHEMA_VERSION, id: 's',
    parts: [{ id: 'p1', name: 'Soprano' }, { id: 'p2', name: 'Bass' }],
    staves: [{ id: 'st1', part: 'p1', clefs: [{ at: ZERO, clef: 'treble' }] }, { id: 'st2', part: 'p2', clefs: [{ at: ZERO, clef: 'bass' }] }],
    voices: [
      { id: 'v1', staff: 'st1', events: [
        { kind: 'note', id: 'a', onset: ZERO, duration: rat(1, 2), pitch: P('E5'), tie: 'start' },
        { kind: 'note', id: 'b', onset: rat(1, 2), duration: Q, pitch: P('E5'), tie: 'stop' },
        { kind: 'note', id: 'c1', onset: rat(3, 4), duration: Q, pitch: P('C5'), group: 'c' },
        { kind: 'note', id: 'c2', onset: rat(3, 4), duration: Q, pitch: P('E5'), group: 'c' },
      ] },
      { id: 'v2', staff: 'st2', events: [
        { kind: 'rest', id: 'r', onset: ZERO, duration: Q },
        { kind: 'note', id: 'd', onset: Q, duration: rat(3, 4), pitch: P('C3') },
      ] },
    ],
    meters: [{ at: ZERO, meter: meter(4, 4) }],
    keySignatures: [{ at: ZERO, fifths: 0 }],
    keys: [{ at: ZERO, key: { tonic: parseSpelling('C'), mode: 'major' }, basis: 'source' }],
    harmony: [{ id: 'h1', start: ZERO, end: rat(1), system: 'roman-numeral', text: 'I', chord: { root: parseSpelling('C'), quality: 'major' }, provenance: { kind: 'user' } }],
    structure: [{ id: 'f1', kind: 'phrase', label: 'a', start: ZERO, end: rat(1), provenance: { kind: 'user' }, children: [{ id: 'f2', kind: 'motif', label: 'm', start: ZERO, end: rat(1, 2), provenance: { kind: 'user' } }] }],
  }
}
const codes = (s: Score) => validateScore(s).filter((i) => i.severity === 'error').map((i) => i.code)

describe('score + validate: tổng phổ đúng cấu trúc', () => {
  it('bài mẫu hợp lệ; nốt nối được gộp khi suy luận', () => {
    const s = sample()
    expect(validateScore(s)).toEqual([])
    const sn = soundingNotes(s.voices[0])
    expect(sn[0]).toMatchObject({ ids: ['a', 'b'], duration: rat(3, 4) })
    expect(sn).toHaveLength(3)
  })
  const broken: [string, (s: Score) => Score, string][] = [
    ['id trùng', (s) => ({ ...s, voices: [s.voices[0], { ...s.voices[1], events: s.voices[1].events.map((e) => (e.id === 'd' ? { ...e, id: 'a' } : e)) }] }), 'id-duplicate'],
    ['chồng nốt trong một bè', (s) => ({ ...s, voices: [{ ...s.voices[0], events: [...s.voices[0].events.slice(0, 1), { ...s.voices[0].events[1], onset: rat(1, 4) }, ...s.voices[0].events.slice(2)] }, s.voices[1]] }), 'overlap'],
    ['dấu nối gặp nốt khác cao độ', (s) => ({ ...s, voices: [{ ...s.voices[0], events: s.voices[0].events.map((e) => (e.id === 'b' ? { ...e, pitch: P('F5') } : e)) }, s.voices[1]] }), 'tie'],
    ['dấu nối tới nốt đồng âm khác tên vẫn là lỗi', (s) => ({ ...s, voices: [{ ...s.voices[0], events: s.voices[0].events.map((e) => (e.id === 'b' ? { ...e, pitch: P('Fb5') } : e)) }, s.voices[1]] }), 'tie'],
    ['tham chiếu khuông không có', (s) => ({ ...s, voices: [{ ...s.voices[0], staff: 'x' }, s.voices[1]] }), 'ref'],
    ['trường độ 0', (s) => ({ ...s, voices: [s.voices[0], { ...s.voices[1], events: [{ ...s.voices[1].events[0], duration: ZERO }, s.voices[1].events[1]] }] }), 'duration'],
    ['đổi nhịp lệch vạch nhịp', (s) => ({ ...s, meters: [...s.meters, { at: rat(1, 2), meter: meter(3, 4) }] }), 'meter-barline'],
    ['thiếu nhịp ở 0', (s) => ({ ...s, meters: [] }), 'meter-start'],
    ['bass không thuộc hợp âm', (s) => ({ ...s, harmony: [{ ...s.harmony![0], chord: { root: parseSpelling('C'), quality: 'major', bass: parseSpelling('D') } }] }), 'chord-bass'],
    ['nút hình thức con vượt ra ngoài', (s) => ({ ...s, structure: [{ ...s.structure![0], children: [{ ...s.structure![0].children![0], end: rat(2) }] }] }), 'form-nest'],
    ['phân số chưa rút gọn', (s) => ({ ...s, voices: [s.voices[0], { ...s.voices[1], events: [{ ...s.voices[1].events[0], duration: { n: 2, d: 8 } }, s.voices[1].events[1]] }] }), 'time'],
  ]
  it.each(broken)('%s → %s', (_, f, code) => expect(codes(f(sample()))).toContain(code))
  it('hợp âm trong một bè mà không chung group chỉ là cảnh báo', () => {
    const s = sample()
    const t = { ...s, voices: [{ ...s.voices[0], events: s.voices[0].events.map((e) => (e.kind === 'note' && e.group ? { ...e, group: undefined } : e)) }, s.voices[1]] }
    const issues = validateScore(t)
    expect(issues.some((i) => i.code === 'group' && i.severity === 'warning')).toBe(true)
    expect(codes(t)).toEqual([])
  })
})

describe('harmony: đối tượng hoà âm, không phải diễn giải', () => {
  it('thành phần hợp âm có cách viết đúng', () => {
    const fmt = (q: Parameters<typeof chordMembers>[0]) => chordMembers(q).map((s) => formatSpelling(s, 'en'))
    expect(fmt({ root: parseSpelling('C#'), quality: 'diminished' })).toEqual(['C#', 'E', 'G'])
    expect(fmt({ root: parseSpelling('G#'), quality: 'diminished-7' })).toEqual(['G#', 'B', 'D', 'F'])
    expect(fmt({ root: parseSpelling('Bb'), quality: 'dominant-7' })).toEqual(['Bb', 'D', 'F', 'Ab'])
  })
  it('thể đảo và con số bè trầm', () => {
    const g7 = (bass?: string) => ({ root: parseSpelling('G'), quality: 'dominant-7' as const, ...(bass ? { bass: parseSpelling(bass) } : {}) })
    expect([undefined, 'B', 'D', 'F'].map((b) => figures(g7(b)))).toEqual(['7', '6/5', '4/3', '2'])
    expect(inversion(g7('C'))).toBeNull()
  })
  it('nhận hợp âm từ cách viết: theo chữ, giữ mọi khả năng', () => {
    expect(chordsFromSpellings(['C', 'E', 'G'].map(parseSpelling))).toEqual([{ root: parseSpelling('C'), quality: 'major' }])
    expect(chordsFromSpellings(['C', 'E', 'G#'].map(parseSpelling)).map((c) => c.quality)).toEqual(['augmented'])
    // the augmented triad is symmetric by sound but not by spelling: Ab–C–E is a different object
    expect(chordsFromSpellings(['Ab', 'C', 'E'].map(parseSpelling))[0].root).toEqual(parseSpelling('Ab'))
    expect(chordsFromSpellings(['B', 'D', 'G', 'F'].map(parseSpelling), parseSpelling('B'))).toEqual([{ root: parseSpelling('G'), quality: 'dominant-7', bass: parseSpelling('B') }])
    expect(chordsFromSpellings(['C', 'D', 'E'].map(parseSpelling))).toEqual([])
  })
  it('khoảng cách giữa các bè', () => {
    expect(spacing({ at: ZERO, pitches: [{ voice: 's', pitch: P('E5') }, { voice: 'a', pitch: P('G4') }, { voice: 'b', pitch: P('C3') }] }).map(intervalName)).toEqual(['M6', 'P12'])
  })
})

describe('schema: lưu, đọc, phiên bản', () => {
  it('JSON khứ hồi không mất gì', () => {
    const s = sample()
    expect(fromJson(toJson(s)).score).toEqual(s)
  })
  it('từ chối schema khác, phiên bản mới hơn, dữ liệu sai cấu trúc', () => {
    expect(() => migrate({ ...sample(), schema: 'x' })).toThrow()
    expect(() => migrate({ ...sample(), version: SCHEMA_VERSION + 1 })).toThrow(/mới hơn/)
    expect(() => fromJson(JSON.stringify({ ...sample(), meters: [] }))).toThrow(/số chỉ nhịp/)
  })
})
