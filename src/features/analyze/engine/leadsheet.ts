import type { Score } from '../../compose/model'
import type { Chord, Quality } from './chords'
import { tonesOf } from './chords'
import type { AScore } from './extract'
import { pcOf, type Spelled } from './pitch'

/** "Dm7", "G7♭9", "C/E", "F♯ø7", "B♭maj7", "E-7", "AΔ", "Ddim7"… → root, quality, bass. Null if not a chord symbol. */
export function parseSymbol(text: string): { root: Spelled; quality: Quality; bass?: Spelled } | null {
  const t = text.trim().replace(/♯/g, '#').replace(/♭/g, 'b').replace(/\s+/g, '')
  const m = /^([A-G])([#b]?)(.*?)(?:\/([A-G])([#b]?))?$/.exec(t)
  if (!m) return null
  const root = { step: 'CDEFGAB'.indexOf(m[1]), alter: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0 }
  const q = m[3]
  const table: [RegExp, Quality][] = [
    [/^(maj7|M7|Δ7?|ma7)$/, 'M7'],
    [/^(maj9|M9|Δ9)$/, 'M9'],
    [/^(m|min|-)$/, 'm'],
    [/^(m7|min7|-7)$/, 'm7'],
    [/^(m9|min9|-9)$/, 'm9'],
    [/^(m11|min11|-11)$/, 'm11'],
    [/^(m6|min6|-6)$/, 'm6'],
    [/^(m\(?maj7\)?|mM7|-Δ7?)$/, 'mM7'],
    [/^(ø7?|m7b5|-7b5|min7b5)$/, 'ø7'],
    [/^(°7|o7|dim7)$/, 'o7'],
    [/^(°|o|dim)$/, 'd'],
    [/^(\+|aug)$/, 'A'],
    [/^7$/, '7'],
    [/^9$/, '9'],
    [/^13$/, '13'],
    [/^7b9$/, 'b9'],
    [/^7#9$/, '#9'],
    [/^7#11$/, '7#11'],
    [/^(7alt|alt)$/, '7alt'],
    [/^(7sus4?|sus7)$/, '7sus4'],
    [/^(sus4?)$/, 'sus4'],
    [/^(6\/9|69)$/, '69'],
    [/^6$/, '6'],
    [/^$/, 'M'],
  ]
  const hit = table.find(([re]) => re.test(q))
  if (!hit) return null
  const bass = m[4] ? { step: 'CDEFGAB'.indexOf(m[4]), alter: m[5] === '#' ? 1 : m[5] === 'b' ? -1 : 0 } : undefined
  return { root, quality: hit[1], bass }
}

/**
 * A lead sheet's own chord symbols (MusicXML <harmony>, kept on events as `harm`) as the chords of the analysis: each
 * lasts until the next symbol. Used by the jazz lens when a score has them — the composer's chords beat any guess.
 */
export function chordsFromSymbols(s: Score, sc: AScore): Chord[] {
  const marks: { t: number; text: string }[] = []
  for (const evs of s.staves) for (const e of evs) if (e.harm) marks.push({ t: e.start, text: e.harm })
  marks.sort((a, b) => a.t - b.t)
  const out: Chord[] = []
  marks.forEach((m, i) => {
    const p = parseSymbol(m.text)
    if (!p) return
    const end = i + 1 < marks.length ? marks[i + 1].t : sc.end
    if (end <= m.t) return
    const tones = tonesOf({ rootName: p.root, quality: p.quality })
    const bass = p.bass ?? p.root
    const pcs = tones.map(pcOf)
    out.push({ start: m.t, end, root: pcOf(p.root), rootName: p.root, quality: p.quality, tones, bass, bassPc: pcOf(bass), inversion: Math.max(0, pcs.indexOf(pcOf(bass))), fit: 1, foreign: [] })
  })
  return out
}
