/**
 * The score editor's model. Each staff is one continuous line of events over time (a quarter is 48 ticks); gaps are
 * rests, so writing a note overwrites what was there, as in Sibelius, instead of pushing the rest of the piece along.
 * Bar lines are not stored in the events: they come from the measure layout, and an event crossing one is split into
 * tied pieces only when it is drawn.
 */

// ticks per quarter: 240 = 48 × 5, so triplets, quintuplets and sextuplets down to the 64th stay whole numbers
import type { Inst } from '../theory/audio'

export const TPQ = 240
export const DUR = { 1: 960, 2: 480, 4: 240, 8: 120, 16: 60, 32: 30, 64: 15 } as const
export type DurName = keyof typeof DUR
export const DUR_NAMES: DurName[] = [1, 2, 4, 8, 16, 32, 64]

export type Clef = 'treble' | 'treble8' | 'bass' | 'alto' | 'tenor' // treble8: the tenor's G clef sounding an octave lower
export type Pitch = { step: number; oct: number; alter: number } // step 0–6 = C–B; middle C = { step 0, oct 4 }
export type Note = Pitch & { tie?: boolean } // tied to the same pitch in the next event of the staff
export type Artic = 'stacc' | 'stacciss' | 'ten' | 'acc' | 'marc'
export type Orn = 'trill' | 'mordent' | 'mordentInv' | 'turn'
export type Dyn = 'ppp' | 'pp' | 'p' | 'mp' | 'mf' | 'f' | 'ff' | 'fff' | 'sf' | 'sfz' | 'fp'
/** `n` notes in the time of `base` (3 in 2, 5 in 4, 6 in 4); the events of one group share `g`. */
export type Tup = { n: number; base: number; g: string }
export type Marks = { lyric?: { text: string; hyph?: boolean }; harm?: string; artic?: Artic[]; orn?: Orn; fermata?: boolean; arpeg?: boolean; dyn?: Dyn; tup?: Tup; text?: { kind: 'tempo' | 'expr'; text: string; bpm?: number } }
export type Ev = { id: string; start: number; dur: number; notes: Note[] } & Marks // no notes = a rest
/** A slur or hairpin from one event to another on the same staff. */
export type Span = { id: string; kind: 'slur' | 'cres' | 'dim'; staff: number; from: string; to: string }
export type Jump = 'fine' | 'dc' | 'dcfine' | 'dccoda' | 'ds' | 'dsfine' | 'dscoda' | 'tocoda'
export type Left = 'rptstart'
export type Right = 'single' | 'dbl' | 'end' | 'rptend'
export type MeasureAttr = { key?: number; time?: [number, number]; clefs?: Partial<Record<number, Clef>>; left?: Left; right?: Right; segno?: boolean; coda?: boolean; jump?: Jump }
export type Score = {
  id: string
  title: string
  clefs: Clef[] // one per staff, at the start
  key: number // sharps (+) or flats (−)
  time: [number, number]
  tempo: number // quarter notes per minute
  measures: number
  attrs: Record<number, MeasureAttr> // changes from a measure on (0-based)
  staves: Ev[][] // one event line per lane (a voice on a staff), see `lanes`
  /** Which staff and voice each line of `staves` is; missing = one voice per staff, line i on staff i. */
  lanes?: { staff: number; voice: number }[]
  labels?: string[] // staff names (Soprano, Alto…)
  instruments?: Inst[] // the sound of each staff; missing = piano
  spans: Span[]
  updated: number
  v?: number // 2 = ticks at TPQ 240
}

let seq = 0
export const newId = () => `e${Date.now().toString(36)}${(seq++).toString(36)}`

/* ---------- pitch ---------- */

const NAT = [0, 2, 4, 5, 7, 9, 11]
export const dn = (p: { step: number; oct: number }) => p.oct * 7 + p.step
export const fromDn = (d: number, alter = 0): Pitch => ({ step: ((d % 7) + 7) % 7, oct: Math.floor(d / 7), alter })
export const midiOf = (p: Pitch) => 12 * (p.oct + 1) + NAT[p.step] + p.alter
const SHARPS = [3, 0, 4, 1, 5, 2, 6]
const FLATS = [6, 2, 5, 1, 4, 0, 3]
/** The alteration the key signature gives a step. */
export function sigAlter(key: number, step: number) {
  if (key > 0) return SHARPS.slice(0, key).includes(step) ? 1 : 0
  if (key < 0) return FLATS.slice(0, -key).includes(step) ? -1 : 0
  return 0
}
export const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
const ACC: Record<number, string> = { [-2]: '𝄫', [-1]: '♭', 0: '', 1: '♯', 2: '𝄪' }
export const pitchName = (p: Pitch) => `${SOLFA[p.step]}${ACC[p.alter] ?? ''}${p.oct}`
/** Diatonic number of the bottom staff line for each clef (treble E4, bass G2, alto F3, tenor D3). */
export const CLEF_BOTTOM: Record<Clef, number> = { treble: 30, treble8: 23, bass: 18, alto: 24, tenor: 22 }

/* ---------- measures ---------- */

export type Bar = { index: number; start: number; len: number; key: number; time: [number, number]; clefs: Clef[]; left?: Left; right?: Right }
export const barLen = (t: [number, number]) => (t[0] * DUR[1]) / t[1]

/** Where each measure starts and what key, time and clefs are in force there. */
export function layout(s: Score): Bar[] {
  const out: Bar[] = []
  let key = s.key
  let time = s.time
  const clefs = s.clefs.slice()
  let start = 0
  for (let i = 0; i < s.measures; i++) {
    const a = s.attrs[i] ?? {}
    if (a.key !== undefined) key = a.key
    if (a.time) time = a.time
    for (const [n, c] of Object.entries(a.clefs ?? {})) if (c) clefs[+n] = c
    const len = barLen(time)
    out.push({ index: i, start, len, key, time, clefs: clefs.slice(), left: a.left, right: a.right ?? (i === s.measures - 1 ? 'end' : undefined) })
    start += len
  }
  return out
}
export const totalOf = (s: Score) => layout(s).reduce((n, b) => n + b.len, 0)
export const barAt = (bars: Bar[], t: number) => bars.find((b) => t >= b.start && t < b.start + b.len) ?? bars[bars.length - 1]

/* ---------- editing ---------- */

const rest = (start: number, dur: number): Ev => ({ id: newId(), start, dur, notes: [] })

/** Fill gaps with rests, merge neighbouring rests, cut anything past the end. */
function normalize(evs: Ev[], total: number): Ev[] {
  const sorted = evs.filter((e) => e.dur > 0 && e.start < total).sort((a, b) => a.start - b.start)
  const out: Ev[] = []
  let t = 0
  for (const e of sorted) {
    if (e.start > t) out.push(rest(t, e.start - t))
    const ev = e.start + e.dur > total ? { ...e, dur: total - e.start } : e
    out.push(ev)
    t = ev.start + ev.dur
  }
  if (t < total) out.push(rest(t, total - t))
  const merged: Ev[] = []
  for (const e of out) {
    const last = merged[merged.length - 1]
    if (last && !last.notes.length && !e.notes.length && !last.tup && !e.tup) merged[merged.length - 1] = { ...last, dur: last.dur + e.dur }
    else merged.push(e)
  }
  return merged
}

/** Measures are added at the end, in the last measure's time, until the score reaches `t`. */
function reach(s: Score, t: number): Score {
  let out = s
  while (totalOf(out) < t) out = { ...out, measures: out.measures + 1 }
  return out
}

export const normalized = (s: Score): Score => {
  const total = totalOf(s)
  const staves = s.staves.map((evs) => normalize(evs, total))
  // a slur or hairpin whose ends are gone goes too
  const spans = (s.spans ?? []).filter((sp) => staves[sp.staff]?.some((e) => e.id === sp.from) && staves[sp.staff].some((e) => e.id === sp.to))
  return { ...s, staves, spans }
}

/** Scores saved before tuplets counted 48 ticks to the quarter. */
export function migrate(s: Score): Score {
  if (s.v === 2) return s
  const k = TPQ / 48
  return { ...s, v: 2, spans: s.spans ?? [], staves: s.staves.map((evs) => evs.map((e) => ({ ...e, start: e.start * k, dur: e.dur * k }))) }
}

/**
 * Write an event over [t, t + dur) on one staff: whatever was there is cut away — a note that started before keeps its
 * head, and what is left after the new event turns into rest.
 */
export function writeAt(s0: Score, staff: number, t: number, dur: number, notes: Note[], id = newId(), marks: Marks = {}): { score: Score; id: string } {
  const s = reach(s0, t + dur)
  const end = t + dur
  // a plain note over part of a tuplet dissolves the whole group into rest first; a tuplet note fills its own slot
  const broken = new Set(marks.tup ? [] : s.staves[staff].filter((e) => e.tup && e.start < end && e.start + e.dur > t).map((e) => e.tup!.g))
  const src = broken.size ? s.staves[staff].map((e) => (e.tup && broken.has(e.tup.g) ? { id: e.id, start: e.start, dur: e.dur, notes: [] } : e)) : s.staves[staff]
  const evs: Ev[] = []
  for (const e of src) {
    const eEnd = e.start + e.dur
    if (eEnd <= t || e.start >= end) {
      evs.push(e)
      continue
    }
    if (e.start < t) evs.push({ ...e, dur: t - e.start, notes: e.notes.map((n) => ({ ...n, tie: false })) })
    if (eEnd > end) evs.push(e.tup ? { ...rest(end, eEnd - end), tup: e.tup } : rest(end, eEnd - end))
  }
  evs.push({ ...marks, id, start: t, dur, notes })
  const staves = s.staves.slice()
  staves[staff] = evs
  return { score: normalized({ ...s, staves }), id }
}

export function updateEv(s: Score, staff: number, id: string, f: (e: Ev) => Ev): Score {
  const staves = s.staves.slice()
  staves[staff] = staves[staff].map((e) => (e.id === id ? f(e) : e))
  return normalized({ ...s, staves })
}

/** Change an event's length: longer overwrites what follows, shorter leaves rest behind. */
export function resize(s: Score, staff: number, id: string, dur: number): Score {
  const e = s.staves[staff].find((x) => x.id === id)
  if (!e) return s
  const { id: _id, start: _s, dur: _d, notes, ...marks } = e
  return writeAt(s, staff, e.start, dur, notes, e.id, marks).score
}

/** Deleting a note or chord leaves a rest of the same length; the bar stays full. */
export const clearEv = (s: Score, staff: number, id: string) => updateEv(s, staff, id, (e) => ({ ...e, notes: [] }))

/* ---------- lanes: a voice on a staff ---------- */

export const lanesOf = (s: Score) => s.lanes ?? s.staves.map((_, i) => ({ staff: i, voice: 1 }))
export const staffOfLane = (s: Score, lane: number) => lanesOf(s)[lane]?.staff ?? 0
export const voiceOfLane = (s: Score, lane: number) => lanesOf(s)[lane]?.voice ?? 1
export const laneIndex = (s: Score, staff: number, voice: number) => lanesOf(s).findIndex((l) => l.staff === staff && l.voice === voice)
/** The lane of a voice on a staff, added (all rest) the first time it is written in. */
export function ensureLane(s: Score, staff: number, voice: number): { score: Score; lane: number } {
  const i = laneIndex(s, staff, voice)
  if (i >= 0) return { score: s, lane: i }
  const lanes = [...lanesOf(s), { staff, voice }]
  return { score: normalized({ ...s, lanes, staves: [...s.staves, []] }), lane: lanes.length - 1 }
}

/** What each staff can sound as. `transpose`: the double bass sounds an octave below the written note. */
export const INSTRUMENTS: { id: Inst; label: string; clef: Clef; program: number; transpose: number }[] = [
  { id: 'piano', label: 'Piano', clef: 'treble', program: 0, transpose: 0 },
  { id: 'violin', label: 'Violin', clef: 'treble', program: 40, transpose: 0 },
  { id: 'viola', label: 'Viola', clef: 'alto', program: 41, transpose: 0 },
  { id: 'cello', label: 'Cello', clef: 'bass', program: 42, transpose: 0 },
  { id: 'contrabass', label: 'Contrabass', clef: 'bass', program: 43, transpose: -12 },
  // winds are written at sounding pitch for now (a transposing score for clarinet, horn, trumpet is a later step)
  { id: 'flute', label: 'Flute', clef: 'treble', program: 73, transpose: 0 },
  { id: 'oboe', label: 'Oboe', clef: 'treble', program: 68, transpose: 0 },
  { id: 'clarinet', label: 'Clarinet', clef: 'treble', program: 71, transpose: 0 },
  { id: 'bassoon', label: 'Bassoon', clef: 'bass', program: 70, transpose: 0 },
  { id: 'horn', label: 'Horn', clef: 'treble', program: 60, transpose: 0 },
  { id: 'trumpet', label: 'Trumpet', clef: 'treble', program: 56, transpose: 0 },
  { id: 'trombone', label: 'Trombone', clef: 'bass', program: 57, transpose: 0 },
  { id: 'tuba', label: 'Tuba', clef: 'bass', program: 58, transpose: 0 },
]
export const instOf = (s: Score, staff: number): Inst => s.instruments?.[staff] ?? 'piano'
export const transposeOf = (inst: Inst) => INSTRUMENTS.find((i) => i.id === inst)?.transpose ?? 0

export type Template = 'grand' | 'single' | 'satb4' | 'satb2' | 'quartet' | 'strings' | 'winds' | 'brass' | 'orchestra'
export const TEMPLATES: { id: Template; label: string }[] = [
  { id: 'grand', label: 'Khuông đôi (piano)' },
  { id: 'single', label: 'Khuông đơn' },
  { id: 'satb4', label: 'Hợp xướng SATB — 4 khuông' },
  { id: 'satb2', label: 'Hợp xướng SATB — 2 khuông, 4 bè' },
  { id: 'quartet', label: 'Tứ tấu đàn dây' },
  { id: 'strings', label: 'Dàn dây (5 bè)' },
  { id: 'winds', label: 'Ngũ tấu kèn gỗ' },
  { id: 'brass', label: 'Ngũ tấu kèn đồng' },
  { id: 'orchestra', label: 'Dàn nhạc (13 bè)' },
]

// staves of the ensemble templates: instrument and staff name, in score order
const ENSEMBLES: Partial<Record<Template, { title: string; parts: [Inst, string][] }>> = {
  quartet: { title: 'Tứ tấu mới', parts: [['violin', 'Violin I'], ['violin', 'Violin II'], ['viola', 'Viola'], ['cello', 'Cello']] },
  strings: { title: 'Bản cho dàn dây', parts: [['violin', 'Violin I'], ['violin', 'Violin II'], ['viola', 'Viola'], ['cello', 'Cello'], ['contrabass', 'Contrabass']] },
  winds: { title: 'Ngũ tấu kèn gỗ', parts: [['flute', 'Flute'], ['oboe', 'Oboe'], ['clarinet', 'Clarinet'], ['horn', 'Horn'], ['bassoon', 'Bassoon']] },
  brass: { title: 'Ngũ tấu kèn đồng', parts: [['trumpet', 'Trumpet I'], ['trumpet', 'Trumpet II'], ['horn', 'Horn'], ['trombone', 'Trombone'], ['tuba', 'Tuba']] },
  orchestra: {
    title: 'Bản cho dàn nhạc',
    parts: [
      ['flute', 'Flute'], ['oboe', 'Oboe'], ['clarinet', 'Clarinet'], ['bassoon', 'Bassoon'], ['horn', 'Horn'], ['trumpet', 'Trumpet'],
      ['trombone', 'Trombone'], ['tuba', 'Tuba'], ['violin', 'Violin I'], ['violin', 'Violin II'], ['viola', 'Viola'], ['cello', 'Cello'], ['contrabass', 'Contrabass'],
    ],
  },
}

export function fromTemplate(t: Template): Score {
  const ens = ENSEMBLES[t]
  const base = blank(ens?.title ?? (t === 'single' ? 'Giai điệu mới' : t.startsWith('satb') ? 'Hợp xướng mới' : 'Bản nhạc mới'), t !== 'single')
  if (ens)
    return normalized({
      ...base,
      clefs: ens.parts.map(([i]) => INSTRUMENTS.find((x) => x.id === i)!.clef),
      labels: ens.parts.map(([, l]) => l),
      instruments: ens.parts.map(([i]) => i),
      staves: ens.parts.map(() => []),
    })
  if (t === 'satb4')
    return normalized({ ...base, clefs: ['treble', 'treble', 'treble8', 'bass'], labels: ['Soprano', 'Alto', 'Tenor', 'Bass'], staves: [[], [], [], []] })
  if (t === 'satb2')
    return normalized({
      ...base,
      clefs: ['treble', 'bass'],
      labels: ['S A', 'T B'],
      lanes: [{ staff: 0, voice: 1 }, { staff: 0, voice: 2 }, { staff: 1, voice: 1 }, { staff: 1, voice: 2 }],
      staves: [[], [], [], []],
    })
  return base
}

export function blank(title = 'Bản nhạc mới', grand = true): Score {
  const s: Score = {
    id: `s${Date.now().toString(36)}`,
    title,
    clefs: grand ? ['treble', 'bass'] : ['treble'],
    key: 0,
    time: [4, 4],
    tempo: 80,
    measures: 8,
    attrs: {},
    staves: grand ? [[], []] : [[]],
    spans: [],
    v: 2,
    updated: Date.now(),
  }
  return normalized(s)
}

/* ---------- notation of lengths ---------- */

export type Piece = { dur: DurName; dots: number; ticks: number }
const VALUES: Piece[] = DUR_NAMES.flatMap((d) => [2, 1, 0].map((dots) => ({ dur: d, dots, ticks: DUR[d] * (dots === 2 ? 1.75 : dots === 1 ? 1.5 : 1) })))
  .filter((v) => Number.isInteger(v.ticks))
  .sort((a, b) => b.ticks - a.ticks)

/** A length inside one measure as the fewest written values (largest first), tied together when drawn. */
export function spell(ticks: number): Piece[] {
  const out: Piece[] = []
  let left = ticks
  while (left > 0) {
    const v = VALUES.find((x) => x.ticks <= left)
    if (!v) break
    out.push(v)
    left -= v.ticks
  }
  return out
}
export const ticksOf = (d: DurName, dots: number) => DUR[d] * (dots === 2 ? 1.75 : dots === 1 ? 1.5 : 1)

/* ---------- the meter: how notes and rests are grouped and beamed ---------- */

/**
 * The beat structure of a bar (ticks from its start). Compound meters (6/8, 9/8, 12/8, 3/8, 6/4…) beat in dotted
 * values; 5/8 and 7/8 in 3+2 and 2+2+3; 5/4 as 3+2. `barriers` are the points a note may not tie across unless it
 * starts at the bar (or that point) and ends on a beat — the middle of 4/4, every beat of a compound meter.
 * `half` is a rest that may stand for two beats (the half rest on beat 1 or 3 of 4/4). `wide` is the window in which
 * eighths alone are beamed together (half a bar of 4/4, the whole of 2/4 and 3/4); otherwise beams follow the beats.
 */
export type Meter = { len: number; beats: [number, number][]; barriers: number[]; half: number | null; sub: number; wide: [number, number][] }
export function meter([n, d]: [number, number]): Meter {
  const unit = DUR[1] / d
  const len = n * unit
  const compound = n % 3 === 0 && (n > 3 || d >= 8) && d >= 4
  let sizes: number[]
  if (compound) sizes = Array(n / 3).fill(3)
  else if (d >= 8 && n > 3) sizes = n === 5 ? [3, 2] : n === 7 ? [2, 2, 3] : [...Array(Math.floor(n / 2) - (n % 2)).fill(2), ...(n % 2 ? [3] : [2])]
  else if (n === 5) sizes = [1, 1, 1, 1, 1]
  else sizes = Array(n).fill(1)
  const beats: [number, number][] = []
  let t = 0
  for (const sz of sizes) beats.push([t, (t += sz * unit)])
  const barriers = compound || (d >= 8 && n > 3) ? beats.slice(1).map((b) => b[0]) : n === 4 ? [len / 2] : n === 5 ? [3 * unit] : []
  const half = n === 4 && !compound ? len / 2 : n === 12 && compound ? len / 2 : null
  const sub = compound || (d >= 8 && n > 3) ? unit : unit / 2
  const wide: [number, number][] = compound || (d >= 8 && n > 3) ? beats : n === 4 ? [[0, len / 2], [len / 2, len]] : n === 2 || n === 3 ? [[0, len]] : beats
  return { len, beats, barriers, half, sub, wide }
}

const value = (ticks: number): Piece[] => {
  const v = VALUES.find((x) => x.ticks === ticks)
  return v ? [v] : spell(ticks)
}

/** A rest from `s` to `e` (ticks from the bar's start) as the rests a reader expects: whole beats, then parts of a beat. */
export function restPieces(m: Meter, s: number, e: number): Piece[] {
  const out: Piece[] = []
  let t = s
  while (t < e) {
    if (m.half && t % m.half === 0 && t + m.half <= e) {
      out.push(...value(m.half))
      t += m.half
      continue
    }
    const b = m.beats.find(([b0, b1]) => t >= b0 && t < b1) ?? [t, e]
    if (t === b[0] && b[1] <= e) {
      out.push(...value(b[1] - b[0]))
      t = b[1]
      continue
    }
    const room = Math.min(e, b[1]) - t
    let u = m.sub
    while (u > 15 && (u > room || (t - b[0]) % u)) u /= 2
    u = Math.max(15, Math.min(u, room))
    out.push(...value(u))
    t += u
  }
  return out
}

/** A note (or chord) from `s` to `e` as tied values that show the beats: the fewest values that do not hide a barrier. */
export function notePieces(m: Meter, s: number, e: number): Piece[] {
  // one value only where it starts on half of its plain length: a quarter on an off-beat is fine, a double-dotted
  // quarter starting on the second sixteenth is not
  const v = VALUES.find((x) => x.ticks === e - s)
  const single = !!v && s % (DUR[v.dur] / 2) === 0
  const inside = m.barriers.filter((b) => b > s && b < e)
  const onBeat = (x: number) => x === m.len || m.beats.some(([b0]) => b0 === x)
  // a long note may stand across the middle when it starts at the bar or barrier and ends on a beat (a dotted half on 1)
  const crossing = (s === 0 || m.barriers.includes(s)) && onBeat(e)
  if (!inside.length || crossing) return single ? value(e - s) : restPieces(m, s, e)
  const cuts = [s, ...inside, e]
  return cuts.slice(1).flatMap((c, i) => notePieces(m, cuts[i], c))
}

/* ---------- key names ---------- */

const MAJ = ['Đô', 'Sol', 'Rê', 'La', 'Mi', 'Si', 'Fa♯', 'Đô♯']
const MAJ_F = ['Đô', 'Fa', 'Si♭', 'Mi♭', 'La♭', 'Rê♭', 'Sol♭', 'Đô♭']
const MIN = ['La', 'Mi', 'Si', 'Fa♯', 'Đô♯', 'Sol♯', 'Rê♯', 'La♯']
const MIN_F = ['La', 'Rê', 'Sol', 'Đô', 'Fa', 'Si♭', 'Mi♭', 'La♭']
export const keyLabel = (k: number) =>
  k >= 0 ? `${MAJ[k]} trưởng / ${MIN[k]} thứ` : `${MAJ_F[-k]} trưởng / ${MIN_F[-k]} thứ`

/* ---------- playback ---------- */

export type Anchor = { sec: number; tick: number; tps: number } // seconds per tick from here
/**
 * The score as sound: every note once, tied notes joined, bars in the order the repeats, D.C. and D.S. ask for, at the
 * tempo of the last tempo mark with a number (or the score's). `anchors` map the sounding time back to score time.
 */
const DYN_VEL: Record<Dyn, number> = { ppp: 0.25, pp: 0.35, p: 0.45, mp: 0.55, mf: 0.65, f: 0.8, ff: 0.9, fff: 1, sf: 0.85, sfz: 0.9, fp: 0.8 }
export type SoundStep = { at: number; dur: number; midis: number[]; inst: Inst; vel: number }
export function soundOf(s: Score, from = 0): { steps: SoundStep[]; anchors: Anchor[] } {
  const bars = layout(s)
  const order = playOrder(bars, s.attrs)
  const marks = s.staves.flat().filter((e) => e.text?.bpm).sort((a, b) => a.start - b.start)
  const tempoAt = (t: number) => [...marks].reverse().find((e) => e.start <= t)?.text?.bpm ?? s.tempo
  const first = Math.max(0, order.findIndex((b) => bars[b].start + bars[b].len > from))
  const steps: SoundStep[] = []
  const lanes = lanesOf(s)
  // the dynamic in force at each event of a voice (mf until the first mark)
  const vels = s.staves.map((evs) => {
    let v = 0.65
    return new Map(evs.map((e) => [e.id, (v = e.dyn ? DYN_VEL[e.dyn] : v)]))
  })
  const anchors: Anchor[] = []
  const open = s.staves.map(() => new Map<number, { step: { at: number; dur: number }; end: number }>())
  let acc = 0
  let prevBar = -2
  for (const bi of order.slice(first)) {
    const b = bars[bi]
    const tps = 60 / (tempoAt(b.start) * TPQ)
    const from0 = acc === 0 && from > b.start ? from : b.start
    anchors.push({ sec: acc - (from0 - b.start) * tps, tick: b.start, tps })
    const bEnd = b.start + b.len
    s.staves.forEach((evs, st) => {
      evs.forEach((e, ei) => {
        const p0 = Math.max(e.start, from0)
        const p1 = Math.min(e.start + e.dur, bEnd)
        if (p1 <= p0 || e.start >= bEnd) return
        const at = acc + (p0 - b.start) * tps - (from0 - b.start) * tps
        const prev = evs[ei - 1]
        const inst = instOf(s, lanes[st]?.staff ?? st)
        const shift = transposeOf(inst)
        for (const n of e.notes) {
          const m = midiOf(n) + shift
          const held = open[st].get(m)
          const continuing = p0 > e.start && p0 === b.start && prevBar === bi - 1
          const tied = p0 === e.start && !!prev && prev.start + prev.dur === e.start && prev.notes.some((x) => x.tie && midiOf(x) + shift === m) && (e.start > b.start || prevBar === bi - 1)
          if (held && (continuing || tied) && Math.abs(held.end - at) < 1e-6) {
            held.step.dur += (p1 - p0) * tps
            held.end = at + (p1 - p0) * tps
          } else {
            const step = { at, dur: (p1 - p0) * tps, midis: [m], inst, vel: vels[st].get(e.id) ?? 0.65 }
            steps.push(step)
            open[st].set(m, { step, end: at + step.dur })
          }
        }
      })
    })
    acc += (bEnd - from0) * tps
    prevBar = bi
  }
  return { steps: steps.sort((a, b) => a.at - b.at), anchors }
}

/* ---------- tuplets ---------- */

export const TUPLETS: { n: number; base: number; label: string }[] = [
  { n: 3, base: 2, label: 'Liên ba' },
  { n: 5, base: 4, label: 'Liên năm' },
  { n: 6, base: 4, label: 'Liên sáu' },
]

/**
 * Open a tuplet group at `t`: `n` rests, each a written `unit`, together lasting `base` of them. It must fit in the bar;
 * returns null when it does not (or the ticks would not be whole).
 */
export function openTuplet(s: Score, staff: number, t: number, unit: number, n: number, base: number): { score: Score; slot: number; g: string } | null {
  const span = unit * base
  const slot = span / n
  if (!Number.isInteger(slot)) return null
  const s1 = writeAt(s, staff, t, span, []).score
  const bar = barAt(layout(s1), t)
  if (t + span > bar.start + bar.len) return null
  const g = newId()
  const staves = s1.staves.slice()
  staves[staff] = [...staves[staff].filter((e) => e.start + e.dur <= t || e.start >= t + span), ...Array.from({ length: n }, (_, i) => ({ id: newId(), start: t + i * slot, dur: slot, notes: [], tup: { n, base, g } }))]
  return { score: normalized({ ...s1, staves }), slot, g }
}

/* ---------- repeats in playback ---------- */

/** The order bars are played in: repeat signs taken once each, then D.C. / D.S. with al Fine / al Coda. */
export function playOrder(bars: Bar[], attrs: Record<number, MeasureAttr>): number[] {
  const out: number[] = []
  const pass = (from: number, opts: { stopAtFine: boolean; toCoda: boolean; repeats: boolean }) => {
    let start = from
    const done = new Set<number>()
    for (let i = from; i < bars.length; i++) {
      if (bars[i].left === 'rptstart') start = i
      out.push(i)
      const a = attrs[i] ?? {}
      if (opts.stopAtFine && a.jump === 'fine') return 'end'
      if (opts.toCoda && a.jump === 'tocoda') {
        const coda = bars.findIndex((_b, j) => j > i && attrs[j]?.coda)
        if (coda > 0) return pass(coda, { stopAtFine: false, toCoda: false, repeats: false })
      }
      if (opts.repeats && bars[i].right === 'rptend' && !done.has(i)) {
        done.add(i)
        i = start - 1
        continue
      }
      if (opts.repeats && a.jump && a.jump !== 'fine' && a.jump !== 'tocoda') {
        const target = a.jump.startsWith('dc') ? 0 : Math.max(0, bars.findIndex((_, j) => attrs[j]?.segno))
        return pass(target, { stopAtFine: a.jump.endsWith('fine'), toCoda: a.jump.endsWith('coda'), repeats: false })
      }
    }
    return 'end'
  }
  pass(0, { stopAtFine: false, toCoda: false, repeats: true })
  return out.slice(0, 2000)
}

/** The written values of the slice of an event that lies in one bar: tuplet notes as they look, the rest by the meter. */
export function piecesIn(ev: Ev, bar: Bar, start: number, len: number, m: Meter = meter(bar.time)): Piece[] {
  if (ev.tup) return spell((len * ev.tup.n) / ev.tup.base)
  const from = start - bar.start
  return ev.notes.length ? notePieces(m, from, from + len) : restPieces(m, from, from + len)
}
