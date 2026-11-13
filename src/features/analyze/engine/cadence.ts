import type { HarmonyItem } from './index'
import type { AScore } from './extract'
import { barAt } from './extract'
import { meter } from '../../compose/model'

export type CadenceKind = 'PAC' | 'IAC' | 'HC' | 'DC' | 'PC'
export const CADENCE_NAME: Record<CadenceKind, string> = {
  PAC: 'kết trọn (D → T, chủ âm ở bè cao)',
  IAC: 'kết trọn không hoàn toàn (D → T)',
  HC: 'kết nửa (dừng trên D)',
  DC: 'kết lừa (D → VI)',
  PC: 'kết plagal (S → T)',
}
export type Cadence = { at: number; end: number; kind: CadenceKind; chord: number; key: string; strength: number }

/**
 * Cadences: where the music stops (a fermata, a long note on a strong beat, a rest after, a phrase-length gap) and
 * the harmony makes a formula of a close — D → T (perfect when root position with the tonic on top), D → VI
 * (deceptive), S → T (plagal), or a stop on D (half). `strength` 0 – 1 says how clearly the music stops there.
 */
export function cadencesOf(sc: AScore, harmony: HarmonyItem[]): Cadence[] {
  const out: Cadence[] = []
  harmony.forEach((h, i) => {
    const c = h.chord
    const bar = barAt(sc.bars, c.start)
    const m = meter(bar.time)
    const pos = c.start - bar.start
    const strongBeat = pos === 0 || (m.half !== null && pos === m.half) || m.beats.length === 3 && pos === 0
    const sounding = sc.notes.filter((n) => n.start < c.end && n.end > c.start)
    const fermata = sounding.some((n) => n.fermata && n.end >= c.end - 1)
    const len = c.end - c.start
    const next = harmony[i + 1]
    const silence = next ? next.chord.start - c.end : 0
    const last = i === harmony.length - 1
    // how much the music stops here
    // the top voice holding a long note where the chord arrives is the clearest sign of a phrase end
    const top = sounding.filter((n) => n.start >= c.start - 1).reduce<(typeof sounding)[number] | null>((t, n) => (!t || n.midi > t.midi ? n : t), null)
    const held = !!top && top.end - top.start >= Math.max(480, len / 2)
    let stop = (fermata ? 0.7 : 0) + (last ? 0.7 : 0) + (len >= 480 ? 0.25 : 0) + (len >= 960 ? 0.1 : 0) + (held ? 0.15 : 0) + (silence >= 240 ? 0.3 : 0) + (strongBeat ? 0.15 : 0)
    stop = Math.min(1, stop)
    if (stop < 0.4) return
    const prev = harmony[i - 1]
    const r = h.reading
    const pr = prev?.reading
    const sameKey = prev && prev.key.tonicPc === h.key.tonicPc && prev.key.minor === h.key.minor
    let kind: CadenceKind | null = null
    if (pr && sameKey && pr.fn === 'D' && pr.of === undefined && r.degree === 0 && r.alter === 0 && r.of === undefined && !r.special) {
      const top = sounding.reduce((a, b) => (b.midi > a.midi ? b : a), sounding[0])
      const tonicTop = top && (top.midi - h.key.tonicPc) % 12 === 0
      kind = c.inversion === 0 && prev.chord.inversion === 0 && tonicTop ? 'PAC' : 'IAC'
    } else if (pr && sameKey && pr.fn === 'D' && r.degree === 5 && r.of === undefined) kind = 'DC'
    else if (pr && sameKey && pr.degree === 3 && pr.of === undefined && r.degree === 0 && r.alter === 0) kind = 'PC'
    else if (r.fn === 'D' && r.degree === 4 && r.of === undefined && !r.special) kind = 'HC'
    if (kind) out.push({ at: c.start, end: c.end, kind, chord: i, key: h.key.name, strength: stop })
  })
  return out
}
