import { keySig, pitch as cpPitch, type Key as CpKey, type Meter as CpMeter, type Seg } from '../../../features/counterpoint/model'
import { fromDiatonic, diatonic } from '../pitch'
import { fromQuarters, toQuarters } from '../rational'
import { SCHEMA, SCHEMA_VERSION, notesOf, type Clef, type NoteEvent, type Score, type Voice } from '../score'
import { isModeId, type Key, type ModeId } from '../tonal'
import { meter } from '../time'

/**
 * Bridge to the counterpoint module (features/counterpoint/model.ts): lines of Seg (quarters, absolute diatonic step,
 * `tied` = continues the previous segment) ⇄ a UMRE score with one part / staff / voice per line, top to bottom.
 * The counterpoint key is mapped to a UMRE key AND kept verbatim in ext.counterpoint, so the round trip is exact even
 * for the old modes whose signature the page sets by hand.
 */

export type CounterpointInput = { key: CpKey; meter: CpMeter; lines: Seg[][]; names?: string[]; roles?: string[]; id?: string; title?: string }

export function keyFromCounterpoint(k: CpKey): Key {
  const mode = k.mode?.toLowerCase()
  const m: ModeId = mode && isModeId(mode) ? mode : k.minor ? 'natural-minor' : 'major'
  return { tonic: { letter: k.tonic as 0, alter: k.alter }, mode: m }
}

export function fromCounterpoint(input: CounterpointInput): Score {
  const { key, lines } = input
  const id = input.id ?? 'cp'
  const voices: Voice[] = lines.map((segs, i) => {
    const vid = `${id}-v${i + 1}`
    const events: NoteEvent[] = segs.map((s, k) => {
      const next = segs[k + 1]
      const from = !!s.tied
      const to = !!next?.tied
      return {
        kind: 'note',
        id: `${vid}-n${k + 1}`,
        onset: fromQuarters(s.start),
        duration: fromQuarters(s.dur),
        pitch: fromDiatonic(s.p.step, s.p.alter),
        ...(from || to ? { tie: from && to ? 'continue' : to ? 'start' : 'stop' } : {}),
      }
    })
    return { id: vid, staff: `${id}-st${i + 1}`, events, ...(input.names?.[i] ? { name: input.names[i] } : {}), ...(input.roles?.[i] ? { role: input.roles[i] } : {}) }
  })
  const clefOf = (segs: Seg[]): Clef => {
    if (!segs.length) return 'treble'
    const mean = segs.reduce((a, s) => a + s.p.step, 0) / segs.length
    return mean >= 27 ? 'treble' : 'bass' // around B3: the counterpoint page's own split between the staves
  }
  return {
    schema: SCHEMA,
    version: SCHEMA_VERSION,
    id,
    ...(input.title ? { title: input.title } : {}),
    parts: lines.map((_, i) => ({ id: `${id}-p${i + 1}`, name: input.names?.[i] ?? `Bè ${i + 1}` })),
    staves: lines.map((segs, i) => ({ id: `${id}-st${i + 1}`, part: `${id}-p${i + 1}`, clefs: [{ at: fromQuarters(0), clef: clefOf(segs) }] })),
    voices,
    meters: [{ at: fromQuarters(0), meter: meter(input.meter.num, input.meter.den) }],
    keySignatures: [{ at: fromQuarters(0), fifths: keySig(key) }],
    keys: [{ at: fromQuarters(0), key: keyFromCounterpoint(key), basis: 'exercise' }],
    ext: { counterpoint: { key } },
  }
}

/** Back to counterpoint lines. Every voice becomes a line in score order; rests are dropped (a gap is silence there too). */
export function toCounterpoint(s: Score): { key: CpKey; meter: CpMeter; lines: Seg[][] } {
  const m = s.meters[0]?.meter
  if (!m || (m.den !== 2 && m.den !== 4)) throw new Error('mô-đun phức điệu chỉ nhận nhịp có mẫu số 2 hoặc 4')
  const kept = (s.ext?.counterpoint as { key?: CpKey } | undefined)?.key
  const ukey = s.keys?.[0]?.key
  const key: CpKey = kept ?? (ukey ? { tonic: ukey.tonic.letter, alter: ukey.tonic.alter, minor: /minor|aeolian/.test(ukey.mode) } : { tonic: 0, alter: 0, minor: false })
  const lines = s.voices.map((v) =>
    notesOf(v).map((n): Seg => {
      const seg: Seg = { start: toQuarters(n.onset), dur: toQuarters(n.duration), p: cpPitch(diatonic(n.pitch), n.pitch.alter) }
      return n.tie === 'stop' || n.tie === 'continue' ? { ...seg, tied: true } : seg
    }),
  )
  return { key, meter: { num: m.num, den: m.den as 2 | 4 }, lines }
}
