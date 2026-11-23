import { transpose } from '../interval'
import { fromMidi, midi } from '../pitch'
import { cmp, eq, fromTicks, max, toTicks, ZERO, type Rational } from '../rational'
import { SCHEMA, SCHEMA_VERSION, endOf, soundingNotes, type NoteEvent, type Score, type Voice } from '../score'
import { meter as mkMeter, type Meter } from '../time'

/**
 * MIDI at the level of NOTES (key number, start and length in ticks). MIDI has no spelling, no voices and no rests,
 * so going in needs explicit choices — the spelling policy and one voice per track — and going out loses spelling.
 * Standard MIDI File bytes are written by the editor's exporter (compose adapter: toMidiFile).
 */
export type MidiNote = { readonly track: string; readonly start: number; readonly duration: number; readonly key: number; readonly velocity?: number }

/** Sounding notes (ties merged, instrument transposition applied) at `ppq` ticks per quarter. Exact or it throws. */
export function toMidiNotes(s: Score, ppq = 480): MidiNote[] {
  const partOfStaff = new Map(s.staves.map((st) => [st.id, s.parts.find((p) => p.id === st.part)]))
  const out: MidiNote[] = []
  for (const v of s.voices) {
    const tr = partOfStaff.get(v.staff)?.instrument?.transposition
    for (const n of soundingNotes(v)) {
      const sounding = tr ? transpose(n.pitch, tr) : n.pitch
      out.push({ track: v.id, start: toTicks(n.onset, ppq), duration: toTicks(n.duration, ppq), key: midi(sounding) })
    }
  }
  return out.sort((a, b) => a.start - b.start || a.key - b.key)
}

export type MidiImportOptions = { ppq: number; meter?: Meter; fifths?: number; policy?: 'sharps' | 'flats' | { fifths: number }; id?: string }

/**
 * Notes → UMRE score: one voice (and staff, and part) per track. Notes of a track that start together with the same
 * length become a chord; any other overlap inside a track is refused (the caller must split it into voices first —
 * guessing voices is analysis, not import). Gaps become rests so each voice is a continuous line.
 */
export function fromMidiNotes(notes: MidiNote[], o: MidiImportOptions): Score {
  const id = o.id ?? 'midi'
  const fifths = o.fifths ?? 0
  const policy = o.policy ?? { fifths }
  const tracks = [...new Set(notes.map((n) => n.track))]
  let end: Rational = ZERO
  const voices: Voice[] = tracks.map((t, ti) => {
    const vid = `${id}-v${ti + 1}`
    const mine = notes.filter((n) => n.track === t).sort((a, b) => a.start - b.start || b.key - a.key)
    const events: (NoteEvent | { kind: 'rest'; id: string; onset: Rational; duration: Rational })[] = []
    let cursor: Rational = ZERO
    let k = 0
    for (let i = 0; i < mine.length; ) {
      const head = mine[i]
      const group = mine.filter((n, j) => j >= i && n.start === head.start)
      if (group.some((g) => g.duration !== head.duration)) throw new Error(`track ${t}: các nốt cùng lúc phải cùng trường độ (tách thành nhiều bè trước khi nhập)`)
      const onset = fromTicks(head.start, o.ppq)
      const duration = fromTicks(head.duration, o.ppq)
      if (cmp(onset, cursor) < 0) throw new Error(`track ${t}: nốt chồng nhau ở tick ${head.start} (tách thành nhiều bè trước khi nhập)`)
      if (cmp(onset, cursor) > 0) events.push({ kind: 'rest', id: `${vid}-r${++k}`, onset: cursor, duration: fromTicks(head.start - toTicks(cursor, o.ppq), o.ppq) })
      const gid = group.length > 1 ? `${vid}-c${++k}` : undefined
      for (const g of group) events.push({ kind: 'note', id: `${vid}-n${++k}`, onset, duration, pitch: fromMidi(g.key, policy), ...(gid ? { group: gid } : {}) })
      cursor = endOf(events[events.length - 1])
      i += group.length
    }
    end = max(end, cursor)
    return { id: vid, staff: `${id}-st${ti + 1}`, events }
  })
  return {
    schema: SCHEMA,
    version: SCHEMA_VERSION,
    id,
    parts: tracks.map((t, i) => ({ id: `${id}-p${i + 1}`, name: t })),
    staves: tracks.map((_, i) => ({ id: `${id}-st${i + 1}`, part: `${id}-p${i + 1}`, clefs: [{ at: ZERO, clef: 'treble' as const }] })),
    voices,
    meters: [{ at: ZERO, meter: o.meter ?? mkMeter(4, 4) }],
    keySignatures: [{ at: ZERO, fifths }],
    ...(eq(end, ZERO) ? {} : { end }),
  }
}
