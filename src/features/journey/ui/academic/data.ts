import { blank, type Score as ComposeScore } from '../../../compose/model'
import { fromCompose } from '../../../../umre/repr/adapters/compose'
import type { MusicDatum } from '../../engine/academic'

const WHOLE = 960 // ticks (240 to the quarter, the editor's unit)

/**
 * An activity's music datum as the editor's score — the format the existing tools already read: `toMei` draws it with
 * Verovio (every drawn note keeps the event id), `fromCompose` hands it to UMRE. One source of notes for both: what
 * the player taps and what UMRE analyses are the same events.
 */
export function composeOf(m: MusicDatum): ComposeScore {
  const s = blank(m.title, false)
  const bar = (m.time[0] * WHOLE) / m.time[1]
  let t = 0
  const evs = m.notes.map((n) => {
    const e = { id: n.id, start: t, dur: n.dur, notes: [{ step: n.step, oct: n.oct, alter: n.alter }] }
    t += n.dur
    return e
  })
  return { ...s, id: m.id, clefs: [m.clef], time: m.time, measures: Math.max(1, Math.ceil(t / bar)), staves: [evs] }
}
/** The same notes as UMRE's score (through UMRE's own adapter). */
export const umreScoreOf = (m: MusicDatum) => fromCompose(composeOf(m))
