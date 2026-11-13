// @vitest-environment happy-dom
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { fromMusicXml } from '../../compose/exchange'
import { blank, writeAt, type Score } from '../../compose/model'
import { tonesOf } from './chords'
import { analyze } from './index'
import { parseSymbol } from './leadsheet'
import { report } from './report'

const midi = (p: { step: number; alter: number }, oct: number) => 12 * (oct + 1) + [0, 2, 4, 5, 7, 9, 11][p.step] + p.alter

/** A lead sheet: symbols per bar (space = split the bar), root in the bass, the rest closed above G3. */
function leadSheet(bars: string[], fifths: number): Score {
  let s = blank('t', true)
  s = { ...s, key: fifths, measures: bars.length }
  bars.forEach((bar, b) => {
    const syms = bar.split(' ')
    syms.forEach((sym, k) => {
      const c = parseSymbol(sym)!
      const dur = 960 / syms.length
      const t = b * 960 + k * dur
      const upper = tonesOf({ rootName: c.root, quality: c.quality }).slice(1).map((p) => {
        let o = 3
        while (midi(p, o) < 55) o++
        return { step: p.step, alter: p.alter, oct: o }
      })
      s = writeAt(s, 1, t, dur, [{ step: c.root.step, alter: c.root.alter, oct: midi(c.root, 2) >= 43 ? 2 : 3 }]).score
      const r = writeAt(s, 0, t, dur, upper)
      s = { ...r.score, staves: r.score.staves.map((evs, i) => (i === 0 ? evs.map((e) => (e.id === r.id ? { ...e, harm: sym } : e)) : evs)) }
    })
  })
  return s
}

const homeLine = (s: Score, lens: 'classical' | 'jazz') => report(analyze(s, { lens }))[0].paras[0].map((r) => r.t).join('')

describe('home key', () => {
  // AABA in F whose A sections lean on D minor (A7 → Dm7) and whose bridge is in D minor: it is still in F
  it('is the key a standard ends in, not the relative minor it visits most (Georgia-like changes)', () => {
    const A = ['Fmaj7 A7', 'Dm7 G7', 'Am7 D7', 'Gm7 C7', 'Fmaj7 Bb7', 'Am7 D7', 'Gm7 C7']
    const s = leadSheet([...A, 'Gm7 C7', ...A, 'F6', 'Dm Gm7', 'Dm Bb7', 'Dm Gm7', 'Bb7 A7', 'Dm Gm7', 'Dm G7', 'Am7 D7', 'Gm7 C7', ...A, 'F6'], -1)
    expect(analyze(s, { lens: 'jazz' }).home?.name).toBe('F')
    expect(homeLine(s, 'jazz')).toContain('Giọng chính: Fa trưởng')
  })

  it('stays in the major key when D7 and G7 appear in a minor-key reading (no I7 tonic in minor)', () => {
    const s = leadSheet(['Ebmaj7', 'Bbm7 Eb7', 'Abmaj7', 'Abm7 Db7', 'Ebmaj7 Cm7', 'Fm7 Bb7', 'Gm7 C7', 'Fm7 Bb7', 'Eb6'], -3)
    expect(analyze(s, { lens: 'jazz' }).home?.name).toBe('E♭')
  })

  // Clair de lune ends on D♭ after borrowed C♭ and F♭ (which read as A♭ minor when the last chord decided)
  it('is D♭ major for Clair de lune, and the key plan names B♭ minor as the relative', () => {
    const s = fromMusicXml(readFileSync('public/analyze/debussy-clair-de-lune.musicxml', 'utf8'))
    const a = analyze(s, { lens: 'classical' })
    expect(a.home?.name).toBe('D♭')
    const text = report(a).map((b) => b.paras.map((p) => p.map((r) => r.t).join('')).join('\n')).join('\n')
    expect(text).toContain('Giọng chính: Rê♭ trưởng')
    expect(text).toContain('Si♭ thứ (giọng song song (bậc VI))')
  })
})
