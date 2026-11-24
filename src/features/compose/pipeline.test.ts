import { readFileSync } from 'node:fs'
import { Window } from 'happy-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import { engraver, render } from './engrave'
import { fromMusicXml } from './exchange'
import { toMei } from './mei'
import type { Score } from './model'

/**
 * The MusicXML import → model → MEI → Verovio pipeline, counted at every stage (24/11/2026: a dense 105-bar score
 * showed only 11 bars — Verovio broke it onto further pages and only page 1 was drawn). Fixtures are generated
 * deterministically by scripts/fixtures/musicxml.py; the expected counts below come from the files, not the code.
 */
const DIR = 'tests/fixtures/musicxml/'
const read = (f: string) => readFileSync(f.startsWith('public/') ? f : DIR + f, 'utf8')
beforeAll(() => {
  ;(globalThis as unknown as { DOMParser: unknown }).DOMParser = new Window().DOMParser
})

/** A dense orchestral layout from the ensemble fixture: its three parts copied four times (12 staves). */
function orchestra() {
  const x = read('ensemble-105.musicxml')
  const parts = x.match(/<part id="P\d">[\s\S]*?<\/part>/g)!
  const list = x.match(/<score-part id="P\d">[\s\S]*?<\/score-part>/g)!
  const re = (s: string, k: number, i: number) => s.replace(/id="P\d"/, `id="Q${k}${i}"`)
  return x.replace(/<part-list>[\s\S]*<\/part-list>/, `<part-list>${[0, 1, 2, 3].flatMap((k) => list.map((p, i) => re(p, k, i))).join('')}</part-list>`).replace(/<part id=[\s\S]*<\/part>/, [0, 1, 2, 3].flatMap((k) => parts.map((p, i) => re(p, k, i))).join('\n'))
}

// expected = the music's bars: split bars (3 + 3a) count once, a pickup counts as a bar of its own
const CASES: [string, () => string, number, number][] = [
  ['piano-8', () => read('piano-8.musicxml'), 8, 2],
  ['piano-11', () => read('piano-11.musicxml'), 11, 2],
  ['piano-12 (nhắc lại)', () => read('piano-12.musicxml'), 12, 2],
  ['piano-32 (đổi nhịp)', () => read('piano-32.musicxml'), 32, 2],
  ['piano-64 (hai bè)', () => read('piano-64.musicxml'), 64, 2],
  ['piano-105 (đổi nhịp, nhắc lại, ô dài bất thường)', () => read('piano-105.musicxml'), 105, 2],
  ['pickup-17 (ô lấy đà)', () => read('pickup-17.musicxml'), 17, 2],
  ['ensemble-105 (ba nhạc cụ, kèn dịch giọng)', () => read('ensemble-105.musicxml'), 105, 3],
  ['orchestra-105 (12 khuông)', orchestra, 105, 12],
  ['Bach BWV 269 (lấy đà + ô tách 7/7a, 14/14a)', () => read('public/analyze/bach-bwv269.musicxml'), 22, 4],
  ['Debussy Clair de lune (ô 54 dài bất thường)', () => read('public/analyze/debussy-clair-de-lune.musicxml'), 72, 2],
]

describe('MusicXML → mô hình → MEI → Verovio: đủ ô ở mọi tầng', () => {
  for (const [name, xml, bars, staves] of CASES)
    it(`${name}: ${bars} ô`, async () => {
      const s = fromMusicXml(xml())
      expect(s.measures, 'mô hình').toBe(bars)
      expect(s.clefs.length, 'số khuông').toBe(staves)
      const { mei } = toMei(s)
      expect((mei.match(/<measure /g) ?? []).length, 'MEI').toBe(bars)
      const tk = await engraver()
      for (const [w, scale] of [[360, 34], [1200, 40]]) {
        const svg = render(tk, mei, w, scale)
        // every bar of the score drawn, at phone width as on a wide screen, across however many pages
        const ids = new Set(svg.match(/data-id="m\d+"/g))
        const meiIds = new Set([...mei.matchAll(/<measure [^>]*xml:id="(m\d+)"/g)].map((m) => `data-id="${m[1]}"`))
        expect([...ids].filter((i) => meiIds.has(i)).length, `SVG ở ${w}px (${tk.getPageCount()} trang): ${[...ids].filter((i) => !meiIds.has(i)).join(' ')}`).toBe(bars)
      }
    }, 120_000)
})

describe('Bảo toàn dữ liệu khi nhập', () => {
  const evs = (s: Score) => s.staves.flat()
  it('piano-105: đủ nốt, dấu lặng, dấu nối, liên ba, sắc thái, luyến, dấu chấm, dấu nhắc, đổi nhịp, ô dài bất thường giữ độ dài', () => {
    const x = read('piano-105.musicxml')
    const s = fromMusicXml(x)
    const xmlNotes = (x.match(/<note>(?:(?!<rest)[\s\S])*?<\/note>/g) ?? []).length
    expect(evs(s).reduce((n, e) => n + e.notes.length, 0)).toBe(xmlNotes)
    expect(evs(s).filter((e) => !e.notes.length).length).toBe((x.match(/<rest/g) ?? []).length)
    expect(evs(s).flatMap((e) => e.notes).filter((n) => n.tie).length).toBe((x.match(/<tie type="start"/g) ?? []).length)
    expect(evs(s).filter((e) => e.tup).length).toBe((x.match(/<time-modification>/g) ?? []).length)
    expect(evs(s).filter((e) => e.dyn).length).toBe((x.match(/<dynamics>/g) ?? []).length)
    expect(s.spans.filter((p) => p.kind === 'slur').length).toBe((x.match(/<slur type="start"/g) ?? []).length)
    expect(evs(s).filter((e) => e.artic?.includes('stacc')).length).toBe((x.match(/<staccato\/>/g) ?? []).length)
    expect(Object.values(s.attrs).filter((a) => a.left === 'rptstart').length).toBe(1)
    expect(Object.values(s.attrs).filter((a) => a.right === 'rptend').length).toBe(1)
    // meter changes at bars 41, 61, 71 (0-based 40, 60, 70) and the five-beat bar 91 with the return to 4/4 after it
    expect(Object.entries(s.attrs).filter(([, a]) => a.time).map(([k, a]) => `${+k + 1}:${a.time!.join('/')}`)).toEqual(['41:3/4', '61:2/4', '71:4/4', '91:5/4', '92:4/4'])
    expect(s.lanes?.length ?? s.staves.length).toBe(3) // right hand two voices + left hand
  })
  it('kèn clarinet Si♭: lưu ở cao độ thực (Mi viết → Rê nghe), tên khuông ghi rõ', () => {
    const s = fromMusicXml(read('ensemble-105.musicxml'))
    const clar = s.staves[1].find((e) => e.notes.length)!.notes[0]
    expect([clar.step, clar.oct, clar.alter]).toEqual([1, 4, 0])
    expect(s.labels?.[1]).toBe('Clarinet in Bb (cao độ thực)')
    expect(s.labels?.[0]).toBe('Flute')
  })
})
