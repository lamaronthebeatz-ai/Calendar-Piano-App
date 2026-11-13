import { layout, lanesOf, midiOf, type Score } from '../../compose/model'
import type { Spelled } from './pitch'

/** One sounding note, ties merged: from the first written piece to the end of the last. */
export type ANote = Spelled & {
  /** the events it is drawn from (several when tied), for colouring on the score */
  ids: string[]
  /** where it is written: event id, index in the event's chord, size of that chord (to find it in the MEI) */
  refs: { ev: string; j: number; n: number }[]
  lane: number
  staff: number
  start: number
  end: number
  midi: number
  oct: number
  /** 0 – 1: how much it looks like an ornament of its line (stepwise in and out, short, off the beat) */
  orn?: number
  /** a fermata stands on it (a phrase end in chorales) */
  fermata?: boolean
}
export type ABar = { i: number; start: number; len: number; time: [number, number]; key: number }
export type AScore = { title: string; bars: ABar[]; notes: ANote[]; lanes: number; staffOfLane: number[]; end: number; labels?: string[] }

/** The score as analysis sees it: notes in time order, ties joined, with bars, metres and key signatures. */
export function extract(s: Score): AScore {
  const bars = layout(s).map((b) => ({ i: b.index, start: b.start, len: b.len, time: b.time, key: b.key }))
  const lanes = lanesOf(s)
  const notes: ANote[] = []
  s.staves.forEach((evs, lane) => {
    const open = new Map<number, ANote>() // midi → note still tied onward
    for (const ev of evs) {
      const next = new Map<number, ANote>()
      ev.notes.forEach((n, j) => {
        const midi = midiOf(n)
        const held = open.get(midi)
        let note: ANote
        if (held && held.end === ev.start) {
          held.end = ev.start + ev.dur
          held.ids.push(ev.id)
          held.refs.push({ ev: ev.id, j, n: ev.notes.length })
          if (ev.fermata) held.fermata = true
          note = held
        } else {
          note = { step: n.step, alter: n.alter, oct: n.oct, midi, ids: [ev.id], refs: [{ ev: ev.id, j, n: ev.notes.length }], lane, staff: lanes[lane]?.staff ?? lane, start: ev.start, end: ev.start + ev.dur, fermata: !!ev.fermata }
          notes.push(note)
        }
        if (n.tie) next.set(midi, note)
      })
      open.clear()
      next.forEach((v, k) => open.set(k, v))
    }
  })
  notes.sort((a, b) => a.start - b.start || a.midi - b.midi)
  markOrnaments(notes, bars)
  const end = bars.length ? bars[bars.length - 1].start + bars[bars.length - 1].len : 0
  return { title: s.title, bars, notes, lanes: s.staves.length, staffOfLane: s.staves.map((_, i) => lanes[i]?.staff ?? i), end, labels: s.labels }
}

export const barAt = (bars: ABar[], t: number) => {
  let lo = 0
  let hi = bars.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (bars[mid].start <= t) lo = mid
    else hi = mid - 1
  }
  return bars[lo]
}

/**
 * How each note sits in its line, the way an analyst first tells chord tones from ornaments: reached and left by step,
 * shorter than a beat and off the beat (passing, neighbour); held over a beat and falling a step (suspension).
 */
function markOrnaments(notes: ANote[], bars: ABar[]) {
  const byLane = new Map<number, ANote[]>()
  for (const n of notes) (byLane.get(n.lane) ?? byLane.set(n.lane, []).get(n.lane)!).push(n)
  for (const line of byLane.values()) {
    // one line per lane: in a chordal lane follow the top note
    const mel = line.filter((n, i) => !line.some((m, j) => j !== i && m.start === n.start && m.midi > n.midi))
    mel.forEach((n, i) => {
      const prev = mel[i - 1]
      const next = mel[i + 1]
      const bar = barAt(bars, n.start)
      const beat = 960 / bar.time[1] * (bar.time[1] >= 8 && bar.time[0] % 3 === 0 ? 3 : 1)
      const pos = n.start - bar.start
      const onBeat = pos % beat === 0
      const dur = n.end - n.start
      const stepIn = !!prev && prev.end === n.start && Math.abs(prev.midi - n.midi) <= 2 && prev.midi !== n.midi
      const stepOut = !!next && next.start === n.end && Math.abs(next.midi - n.midi) <= 2 && next.midi !== n.midi
      let orn = 0
      if (stepIn && stepOut && dur < beat && !onBeat) orn = 0.75
      else if (stepIn && stepOut && dur <= beat / 2) orn = 0.55
      else if (stepOut && next && next.midi < n.midi && onBeat && dur <= beat && prev && prev.midi === n.midi && prev.end === n.start) orn = 0.6 // suspension, re-struck
      else if (stepOut && dur < beat && !onBeat && !!prev && Math.abs(prev.midi - n.midi) > 2) orn = 0.35 // escape / leap in
      n.orn = orn
    })
  }
}
