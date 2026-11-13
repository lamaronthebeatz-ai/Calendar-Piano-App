import type { Chord } from './chords'
import { chordPcs } from './chords'
import type { ANote } from './extract'
import { pcOf } from './pitch'

/** Non-chord tones, named as the library names them (not-ngoai-hop-am). */
export type NctKind = 'passing' | 'neighbor' | 'suspension' | 'appoggiatura' | 'escape' | 'anticipation' | 'pedal' | 'other'
export const NCT_NAME: Record<NctKind, string> = {
  passing: 'nốt lướt',
  neighbor: 'nốt thêu',
  suspension: 'nốt trễ',
  appoggiatura: 'nốt dựa',
  escape: 'nốt thoát',
  anticipation: 'nốt đón',
  pedal: 'âm pedal',
  other: 'nốt ngoài hợp âm',
}
export type Nct = { note: ANote; kind: NctKind; chord: number }

/**
 * Each foreign note of a chord, named by how its line reaches and leaves it: by step both ways in one direction
 * (passing), there and back (neighbour), held from a chord tone and falling a step (suspension), leapt to and left by
 * step (appoggiatura), stepped to and left by leap (escape), sounding early the tone of the next chord (anticipation),
 * held in the bass under changing chords (pedal).
 */
export function nctsOf(notes: ANote[], chords: Chord[]): Nct[] {
  const lines = new Map<number, ANote[]>()
  for (const n of notes) (lines.get(n.lane) ?? lines.set(n.lane, []).get(n.lane)!).push(n)
  const prevOf = new Map<ANote, ANote | undefined>()
  const nextOf = new Map<ANote, ANote | undefined>()
  for (const line of lines.values()) {
    // the line that moves: one note per onset, the top (inner voices of a chord lane are not followed)
    const mel = line.filter((n, i) => !line.some((m, j) => j !== i && m.start === n.start && m.midi > n.midi))
    mel.forEach((n, i) => {
      prevOf.set(n, mel[i - 1])
      nextOf.set(n, mel[i + 1])
    })
  }
  const out: Nct[] = []
  chords.forEach((c, ci) => {
    const pcs = new Set(chordPcs(c))
    for (const n of c.foreign) {
      if (n.start >= c.end || n.end <= c.start) continue
      const prev = prevOf.get(n)
      const next = nextOf.get(n)
      const step = (a?: ANote) => !!a && Math.abs(a.midi - n.midi) > 0 && Math.abs(a.midi - n.midi) <= 2
      const leap = (a?: ANote) => !!a && Math.abs(a.midi - n.midi) > 2
      const spansChords = n.end - n.start >= 960 && chords.some((d, di) => di !== ci && d.start < n.end && d.end > n.start)
      let kind: NctKind = 'other'
      const lowest = !notes.some((m) => m !== n && m.start < n.end && m.end > n.start && m.midi < n.midi)
      if (spansChords && lowest) kind = 'pedal'
      else if (n.start < c.start && step(next) && next!.midi < n.midi) kind = 'suspension'
      else if (prev && prev.midi === n.midi && prev.end === n.start && step(next) && next!.midi < n.midi) kind = 'suspension'
      else if (step(prev) && step(next) && Math.sign(n.midi - prev!.midi) === Math.sign(next!.midi - n.midi)) kind = 'passing'
      else if (step(prev) && step(next) && prev!.midi === next!.midi) kind = 'neighbor'
      else if (leap(prev) && step(next)) kind = 'appoggiatura'
      else if (step(prev) && leap(next)) kind = 'escape'
      else if (next && next.midi === n.midi && chords[ci + 1] && chordPcs(chords[ci + 1]).includes(pcOf(n))) kind = 'anticipation'
      if (pcs.has(pcOf(n))) continue
      out.push({ note: n, kind, chord: ci })
    }
  })
  return out
}
