/**
 * The score editor's model. Each staff is one continuous line of events over time (a quarter is 48 ticks); gaps are
 * rests, so writing a note overwrites what was there, as in Sibelius, instead of pushing the rest of the piece along.
 * Bar lines are not stored in the events: they come from the measure layout, and an event crossing one is split into
 * tied pieces only when it is drawn.
 */

export const TPQ = 48 // ticks per quarter: 3 per 64th, so dotted 64ths and (later) triplets stay whole numbers
export const DUR = { 1: 192, 2: 96, 4: 48, 8: 24, 16: 12, 32: 6, 64: 3 } as const
export type DurName = keyof typeof DUR
export const DUR_NAMES: DurName[] = [1, 2, 4, 8, 16, 32, 64]

export type Clef = 'treble' | 'bass' | 'alto' | 'tenor'
export type Pitch = { step: number; oct: number; alter: number } // step 0–6 = C–B; middle C = { step 0, oct 4 }
export type Note = Pitch & { tie?: boolean } // tied to the same pitch in the next event of the staff
export type Ev = { id: string; start: number; dur: number; notes: Note[] } // no notes = a rest
export type Left = 'rptstart'
export type Right = 'single' | 'dbl' | 'end' | 'rptend'
export type MeasureAttr = { key?: number; time?: [number, number]; clefs?: Partial<Record<number, Clef>>; left?: Left; right?: Right }
export type Score = {
  id: string
  title: string
  clefs: Clef[] // one per staff, at the start
  key: number // sharps (+) or flats (−)
  time: [number, number]
  tempo: number // quarter notes per minute
  measures: number
  attrs: Record<number, MeasureAttr> // changes from a measure on (0-based)
  staves: Ev[][]
  updated: number
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
export const CLEF_BOTTOM: Record<Clef, number> = { treble: 30, bass: 18, alto: 24, tenor: 22 }

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
    if (last && !last.notes.length && !e.notes.length) merged[merged.length - 1] = { ...last, dur: last.dur + e.dur }
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
  return { ...s, staves: s.staves.map((evs) => normalize(evs, total)) }
}

/**
 * Write an event over [t, t + dur) on one staff: whatever was there is cut away — a note that started before keeps its
 * head, and what is left after the new event turns into rest.
 */
export function writeAt(s0: Score, staff: number, t: number, dur: number, notes: Note[], id = newId()): { score: Score; id: string } {
  const s = reach(s0, t + dur)
  const end = t + dur
  const evs: Ev[] = []
  for (const e of s.staves[staff]) {
    const eEnd = e.start + e.dur
    if (eEnd <= t || e.start >= end) {
      evs.push(e)
      continue
    }
    if (e.start < t) evs.push({ ...e, dur: t - e.start, notes: e.notes.map((n) => ({ ...n, tie: false })) })
    if (eEnd > end) evs.push(rest(end, eEnd - end))
  }
  evs.push({ id, start: t, dur, notes })
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
  return writeAt(s, staff, e.start, dur, e.notes, e.id).score
}

/** Deleting a note or chord leaves a rest of the same length; the bar stays full. */
export const clearEv = (s: Score, staff: number, id: string) => updateEv(s, staff, id, (e) => ({ ...e, notes: [] }))

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

/* ---------- key names ---------- */

const MAJ = ['Đô', 'Sol', 'Rê', 'La', 'Mi', 'Si', 'Fa♯', 'Đô♯']
const MAJ_F = ['Đô', 'Fa', 'Si♭', 'Mi♭', 'La♭', 'Rê♭', 'Sol♭', 'Đô♭']
const MIN = ['La', 'Mi', 'Si', 'Fa♯', 'Đô♯', 'Sol♯', 'Rê♯', 'La♯']
const MIN_F = ['La', 'Rê', 'Sol', 'Đô', 'Fa', 'Si♭', 'Mi♭', 'La♭']
export const keyLabel = (k: number) =>
  k >= 0 ? `${MAJ[k]} trưởng / ${MIN[k]} thứ` : `${MAJ_F[-k]} trưởng / ${MIN_F[-k]} thứ`

/* ---------- playback ---------- */

/** Every sounding note once, tied notes joined: start and length in seconds at the score's tempo. */
export function soundOf(s: Score, from = 0): { at: number; dur: number; midis: number[] }[] {
  const sec = (ticks: number) => (ticks / TPQ) * (60 / s.tempo)
  const out: { at: number; dur: number; midis: number[] }[] = []
  for (const evs of s.staves) {
    const open = new Map<number, { at: number; end: number }>() // midi → note still held by a tie
    for (const e of evs) {
      for (const n of e.notes) {
        const m = midiOf(n)
        const held = open.get(m)
        if (held && held.end === e.start) held.end = e.start + e.dur
        else open.set(m, { at: e.start, end: e.start + e.dur })
        if (!n.tie) {
          const h = open.get(m)!
          if (h.end > from) out.push({ at: sec(Math.max(0, h.at - from)), dur: sec(h.end - Math.max(h.at, from)), midis: [m] })
          open.delete(m)
        }
      }
    }
  }
  return out.sort((a, b) => a.at - b.at)
}
