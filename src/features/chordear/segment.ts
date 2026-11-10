/**
 * Analysis mode: transcribed notes → chord segments → key → names and the ways taken between them.
 * Pure functions; the notes come from Basic Pitch (transcribe.ts).
 */
import { ALL_KEYS, guessChord, nextWays, sameChord, takes, type Chord, type Frame, type Key, type Style } from './detect'

export type Note = { m: number; t: number; d: number; a: number }
export type Segment = { t: number; end: number; chord: Chord | null; pcs: number[]; bass: number | null }
export type Step = Segment & { way: string | null; fresh: boolean }

/** Onsets closer than this belong to one attack (a rolled chord, a sloppy hand). */
const ONSET_GAP = 0.09

/**
 * Walk the attacks: at each one, take every note sounding a moment later, weight it by loudness and length, and ask the
 * same template matcher as the live mode. A melody note over a held chord usually keeps the chord; when the reading is
 * unsure it extends the chord before it instead of inventing one.
 */
export function segment(notes: Note[]): Segment[] {
  if (!notes.length) return []
  const sorted = [...notes].sort((x, y) => x.t - y.t)
  const attacks: number[] = []
  for (const n of sorted) if (!attacks.length || n.t - attacks[attacks.length - 1] > ONSET_GAP) attacks.push(n.t)
  const end = Math.max(...sorted.map((n) => n.t + n.d))
  const out: Segment[] = []
  for (const t of attacks) {
    const probe = t + ONSET_GAP
    const on = sorted.filter((n) => n.t <= probe && n.t + n.d > probe + 0.04)
    if (!on.length) continue
    const notesF = on.map((n) => ({ m: n.m, a: n.a * Math.min(1, 0.3 + n.d) }))
    const chroma = Array(12).fill(0)
    for (const n of notesF) chroma[n.m % 12] += n.a
    const top = Math.max(...notesF.map((n) => n.a))
    const low = [...notesF].sort((x, y) => x.m - y.m).find((n) => n.a >= top * 0.3)
    const frame: Frame = { notes: notesF, chroma, bass: low ? low.m % 12 : null, level: 1 }
    const g = guessChord(frame)
    const pcs = [...new Set(notesF.map((n) => n.m % 12))]
    const prev = out[out.length - 1]
    const chord = g.sure ? g.chord : null
    // a new chord must bring a pitch class of its own: what is left of the last chord while it rings out is not one
    const decay = !!prev && pcs.every((pc) => prev.pcs.includes(pc))
    if (prev && (decay || sameChord(prev.chord, chord) || (!chord && prev.chord && t - prev.t < 1.2))) {
      prev.end = t
      continue
    }
    if (prev) prev.end = t
    out.push({ t, end, chord, pcs, bass: frame.bass })
  }
  if (out.length) out[out.length - 1].end = end
  // drop flickers shorter than a fifth of a second unless nothing else is there
  return out.filter((s, i) => s.end - s.t >= 0.2 || out.length === 1 || i === out.length - 1)
}

/* Krumhansl – Kessler key profiles (major, minor), weighted by how long each pitch class sounds. */
const KK_MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88]
const KK_MINOR = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17]
export function estimateKey(notes: Note[]): Key {
  const h = Array(12).fill(0)
  for (const n of notes) h[n.m % 12] += n.d * n.a
  const corr = (p: number[], k: number) => {
    const xs = h
    const ys = Array.from({ length: 12 }, (_, i) => p[(i - k + 12) % 12])
    const mx = xs.reduce((a, b) => a + b, 0) / 12
    const my = ys.reduce((a, b) => a + b, 0) / 12
    let num = 0
    let dx = 0
    let dy = 0
    for (let i = 0; i < 12; i++) {
      num += (xs[i] - mx) * (ys[i] - my)
      dx += (xs[i] - mx) ** 2
      dy += (ys[i] - my) ** 2
    }
    return num / Math.sqrt(dx * dy || 1)
  }
  let best = ALL_KEYS[0]
  let score = -2
  for (const k of ALL_KEYS) {
    const c = corr(k.minor ? KK_MINOR : KK_MAJOR, k.tonic)
    if (c > score) {
      score = c
      best = k
    }
  }
  return best
}

/** Name the way each chord takes from the one before (as in the live mode), or mark a new chain. */
export function steps(segs: Segment[], key: Key, style: Style): Step[] {
  return segs.map((s, i) => {
    const prev = segs.slice(0, i).reverse().find((p) => p.chord)
    if (!s.chord || !prev?.chord) return { ...s, way: null, fresh: !!s.chord && i > 0 }
    const ways = nextWays(prev.chord, key, style)
    const w = ways.find((x) => takes(x, s.chord!, key) && x.q === s.chord!.q) ?? ways.find((x) => takes(x, s.chord!, key))
    return { ...s, way: w ? w.note : null, fresh: !w }
  })
}
