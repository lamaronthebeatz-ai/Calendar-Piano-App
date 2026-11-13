import type { Chord } from './chords'
import { chordPcs, core } from './chords'
import type { AScore } from './extract'
import { barAt } from './extract'
import { above, majorOfSig, mod, pcOf, type Spelled } from './pitch'

/** A key: its tonic as spelled and its mode. */
export type Key = { tonic: Spelled; minor: boolean }
export const keyPc = (k: Key) => pcOf(k.tonic)
export const sameKey = (a: Key, b: Key) => keyPc(a) === keyPc(b) && a.minor === b.minor

// Krumhansl–Kessler probe-tone profiles (1982), the usual starting point for key finding
const KK_MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88]
const KK_MINOR = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17]

/** The 24 keys, spelled the way a signature would (no E♯ major: F major; D♯ minor kept, as in Bach's E♭/D♯ minor). */
export const KEYS: Key[] = (() => {
  const out: Key[] = []
  for (let f = -6; f <= 6; f++) {
    const maj = majorOfSig(f)
    out.push({ tonic: maj, minor: false })
    out.push({ tonic: above(maj, 5, 9), minor: true })
  }
  // 13 signatures give 26 keys with two enharmonic doubles (F♯/G♭ major, D♯/E♭ minor): keep one per pitch class and mode
  const seen = new Set<string>()
  return out.filter((k) => {
    const id = `${keyPc(k)}${k.minor}`
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
})()

/** Fifths of a key's signature (major or its relative). */
export const sigOf = (k: Key) => {
  const maj = k.minor ? above(k.tonic, 2, 3) : k.tonic
  for (let f = -7; f <= 7; f++) {
    const m = majorOfSig(f)
    if (m.step === maj.step && m.alter === maj.alter) return f
  }
  return 0
}

/** Scale degrees (semitones) of a mode; minor counts the raised 6th and 7th as its own (harmonic / melodic). */
const SCALE_MAJOR = [0, 2, 4, 5, 7, 9, 11]
const SCALE_MINOR = [0, 2, 3, 5, 7, 8, 10, 11, 9]

/** How strongly a chord points to a key: diatonic chords, and above all dominant → tonic. */
function chordFit(c: Chord, k: Key, next?: Chord, jazz = false): number {
  const t = keyPc(k)
  const pcs = chordPcs(c)
  const scale = k.minor ? SCALE_MINOR : SCALE_MAJOR
  const out = pcs.filter((p) => !scale.includes(mod(p - t, 12))).length
  const r = mod(c.root - t, 12)
  // a chromatic chord that leads to a chord of the key as its dominant or leading-tone chord is a tonicisation
  // inside the key (V/V, VII7/II…), not a reason to leave it
  const applied =
    out > 0 && !!next && mod(next.root - t, 12) !== 0 && scale.includes(mod(next.root - t, 12)) &&
    (((core(c.quality) === 'M' || core(c.quality) === '7') && mod(next.root - c.root, 12) === 5) || (core(c.quality) === 'd' && mod(next.root - c.root, 12) === 1))
  let v = applied ? -0.25 : -0.9 * out
  // the chords that define a key
  const q = core(c.quality)
  if (r === 0 && (k.minor ? q === 'm' : q === 'M')) v += 1.1
  // blues and jazz: a dominant seventh on the tonic is the tonic (I7), and the ♭7 and ♭3 of the blues are not foreign
  if (jazz && r === 0 && q === '7') v += 1.4 + 0.9 * out
  if (jazz && r === 5 && q === '7') v += 0.6 + 0.9 * out
  if (r === 7 && (q === 'M' || q === '7')) v += 0.9
  if (r === 11 && q === 'd') v += 0.5
  if (r === 5 && (k.minor ? q === 'm' : q === 'M')) v += 0.5
  if (r === 2 && (k.minor ? q === 'd' : q === 'm')) v += 0.35
  // a cadence: V(7) → I confirms the key strongly
  if (next && r === 7 && mod(next.root - t, 12) === 0 && (q === 'M' || q === '7')) v += 1.2
  if (next && r === 0 && mod(next.root - t, 12) === 7) v += 0.2
  return v
}

/** Krumhansl–Kessler correlation of the notes heard around a moment with a key. */
function profileFit(hist: number[], k: Key) {
  const prof = k.minor ? KK_MINOR : KK_MAJOR
  const t = keyPc(k)
  const xs = hist
  const ys = hist.map((_, i) => prof[mod(i - t, 12)])
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
  return dx && dy ? num / Math.sqrt(dx * dy) : 0
}

export type KeyOptions = { change?: number; window?: number; sigBonus?: number; jazz?: boolean }

/**
 * The key of every chord: a hidden-Markov path through the 24 keys (Viterbi). Each chord votes by how it fits the key
 * (diatonic, dominant → tonic) and by the profile of the notes within `window` ticks around it; changing key costs
 * `change`; keys of the written signature get a small head start, and the first and last chords lean to the home key.
 */
export function keysOf(sc: AScore, chords: Chord[], opts: KeyOptions = {}): Key[] {
  if (!chords.length) return []
  const win = opts.window ?? 1920
  const change = opts.change ?? 6
  const sigBonus = opts.sigBonus ?? 0.35
  const n = chords.length
  // pitch-class histograms around each chord (duration-weighted)
  const hists = chords.map((c) => {
    const h = new Array(12).fill(0)
    const a = c.start - win / 2
    const b = c.end + win / 2
    for (const note of sc.notes) {
      if (note.end <= a || note.start >= b) continue
      h[pcOf(note)] += Math.min(note.end, b) - Math.max(note.start, a)
    }
    return h
  })
  const emit = (i: number, k: Key) => {
    const c = chords[i]
    const sig = barAt(sc.bars, c.start).key
    let v = 1.6 * chordFit(c, k, chords[i + 1], opts.jazz) + (opts.jazz ? 1.2 : 2.2) * profileFit(hists[i], k)

    if (sigOf(k) === sig) v += sigBonus
    return v * Math.min(2, (c.end - c.start) / 240 + 0.5)
  }
  const K = KEYS.length
  let score = KEYS.map((k) => emit(0, k) + (sigOf(k) === sc.bars[0]?.key ? 1.5 : 0))
  const back: number[][] = []
  for (let i = 1; i < n; i++) {
    const row: number[] = []
    const next: number[] = []
    for (let j = 0; j < K; j++) {
      let bi = j
      let bv = score[j]
      for (let p = 0; p < K; p++) {
        // close keys (one accidental apart, relative, parallel) cost less to move to
        const d = Math.abs(sigOf(KEYS[p]) - sigOf(KEYS[j]))
        const v = score[p] - (p === j ? 0 : change * (0.6 + 0.2 * Math.min(d, 4)))
        if (v > bv) {
          bv = v
          bi = p
        }
      }
      row.push(bi)
      next.push(bv + emit(i, KEYS[j]))
    }
    back.push(row)
    score = next
  }
  // the piece ends at home: a final bonus for the key of the start signature (a minor piece may end on its major tonic)
  let last = 0
  for (let j = 1; j < K; j++) if (score[j] > score[last]) last = j
  const path = [last]
  for (let i = n - 2; i >= 0; i--) path.unshift(back[i][path[0]])
  return path.map((j) => KEYS[j])
}

/** A short visit to another key inside the home key (ly điệu), told apart from a real modulation (chuyển giọng). */
export type Tonicization = { from: number; to: number; key: Key }

/**
 * Fold brief key regions back into the surrounding key: a run of at most `maxLen` ticks whose neighbours on both sides
 * share one key is a tonicisation of that key, as the Russian–Soviet textbooks distinguish it from modulation. The
 * chords keep the home key (so V/x and VII/x are read), and the run is reported. Returns the new keys.
 */
export function foldTonicizations(chords: Chord[], keys: Key[], maxLen = 1440): { keys: Key[]; tonicizations: Tonicization[] } {
  const out = keys.slice()
  const tz: Tonicization[] = []
  let i = 0
  while (i < out.length) {
    let j = i
    while (j + 1 < out.length && sameKey(out[j + 1], out[i])) j++
    const before = i > 0 ? out[i - 1] : null
    const after = j + 1 < out.length ? out[j + 1] : null
    const len = chords[j].end - chords[i].start
    const home = before && after && sameKey(before, after) ? before : !before && after && len <= maxLen / 2 ? after : before && !after && len <= maxLen / 2 ? before : null
    if (home && len <= maxLen && !sameKey(home, out[i])) {
      tz.push({ from: chords[i].start, to: chords[j].end, key: out[i] })
      for (let k = i; k <= j; k++) out[k] = home
    }
    i = j + 1
  }
  return { keys: out, tonicizations: tz }
}
