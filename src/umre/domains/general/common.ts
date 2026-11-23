import { diatonic, midi } from '../../repr/pitch'
import { cmp, eq, toQuarters } from '../../repr/rational'
import { soundingNotes, type Score, type SoundingNote, type Voice } from '../../repr/score'

/** A voice's melodic line: one note per onset (the highest when the voice holds a chord), ties merged. */
export function lineOf(v: Voice): SoundingNote[] {
  const ns = soundingNotes(v)
  const out: SoundingNote[] = []
  for (const n of ns) {
    const last = out[out.length - 1]
    if (last && eq(last.onset, n.onset)) {
      if (midi(n.pitch) > midi(last.pitch)) out[out.length - 1] = n
    } else out.push(n)
  }
  return out.sort((a, b) => cmp(a.onset, b.onset))
}

export const q = toQuarters
export const steps = (ns: readonly SoundingNote[]) => ns.slice(1).map((n, i) => diatonic(n.pitch) - diatonic(ns[i].pitch))
export const semis = (ns: readonly SoundingNote[]) => ns.slice(1).map((n, i) => midi(n.pitch) - midi(ns[i].pitch))
export const voiceName = (s: Score, i: number) => s.voices[i].name ?? `bè ${i + 1}`
export const barQ = (s: Score) => {
  const m = s.meters[0]?.meter ?? { num: 4, den: 4 }
  return (m.num * 4) / m.den
}
