import type { Score } from '../compose/model'
import { barAt, type ANote } from './engine/extract'
import type { Analysis } from './engine/index'
import { QUALITY_SYMBOL, chordSymbol } from './engine/symbols'
import { keyName } from './engine/report'

export type Notation = 'ru' | 'rn' | 'letter'
export type Layers = { harmony: boolean; accidentals: boolean; ncts: boolean; keys: boolean; cadences: boolean; form: boolean }
export const DEFAULT_LAYERS: Layers = { harmony: true, accidentals: true, ncts: false, keys: true, cadences: true, form: true }
export const COLORS = { accidental: '#c2410c', nct: '#2563eb', unsure: '#9a968f' }

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
void QUALITY_SYMBOL

/** The label of one harmony in the chosen notation; a doubtful reading ends in "?". */
export function labelOf(a: Analysis, i: number, notation: Notation) {
  const h = a.harmony[i]
  const t = notation === 'ru' ? h.reading.ru : notation === 'rn' ? h.reading.rn : chordSymbol(h.chord)
  return h.chord.fit < 0.6 ? `${t}?` : t
}

/**
 * The analysis written into the MEI the editor makes for Verovio, so the engraver lays it out like any marking:
 * chord labels as <harm> under the lowest staff, keys and cadences as <dir> above, notes coloured. Element ids:
 * ah<i> harmony i, ak<i> key region i, ac<i> cadence i, at<i> tonicisation i.
 */
export function annotateMei(mei: string, score: Score, a: Analysis, layers: Layers, notation: Notation): string {
  const bars = a.score.bars
  const extra: string[] = bars.map(() => '')
  const low = score.clefs.length
  const ts = (t: number) => {
    const b = barAt(bars, t)
    return 1 + (t - b.start) / (960 / b.time[1])
  }
  const at = (t: number) => barAt(bars, t).i
  if (layers.harmony && a.lens === 'xx' && a.xx) {
    // 20th century: each sonority's set class under the music; collections and techniques above
    a.xx.sonorities.forEach((so, i) => {
      if (so.pcs.length < 3) return
      extra[at(so.start)] += `<harm xml:id="ax${i}" staff="${low}" tstamp="${ts(so.start)}" place="below">${esc(so.forte ?? `${so.pcs.length} âm`)}</harm>`
    })
    let lastKind = ''
    a.xx.collections.forEach((c, i) => {
      if (c.kind === lastKind) return
      lastKind = c.kind
      const t = a.score.bars[c.bar].start
      extra[c.bar] += `<dir xml:id="ao${i}" staff="1" tstamp="${ts(t)}" place="above"><rend fontweight="bold">${esc(c.kind)}</rend></dir>`
    })
    a.xx.techniques.forEach((tq, i) => {
      if (tq.kind === 'quartal') return
      extra[at(tq.from)] += `<dir xml:id="aq${i}" staff="1" tstamp="${ts(tq.from)}" place="above"><rend fontstyle="italic">${esc(tq.text)}</rend></dir>`
    })
  } else if (layers.harmony && a.lens === 'jazz' && a.jazz) {
    // jazz: the chord symbol above the music (as on a lead sheet), its numeral below
    a.harmony.forEach((h, i) => {
      const sym = chordSymbol(h.chord) + (h.chord.fit < 0.6 ? '?' : '')
      extra[at(h.chord.start)] += `<harm xml:id="ah${i}" staff="1" tstamp="${ts(h.chord.start)}" place="above">${esc(sym)}</harm>`
      extra[at(h.chord.start)] += `<harm xml:id="aj${i}" staff="${low}" tstamp="${ts(h.chord.start)}" place="below">${esc(a.jazz!.readings[i].rn)}</harm>`
    })
    a.jazz.patterns.forEach((p, i) => {
      const t = a.harmony[p.from].chord.start
      const text = p.kind === 'II–V–I' ? `II–V–I${p.target ? ` → ${p.target}` : ''}` : p.kind === 'V/x' ? 'át phụ' : p.kind === 'SubV' ? 'thay thế tritone' : p.kind === 'backdoor' ? 'backdoor' : p.kind
      extra[at(t)] += `<dir xml:id="ap${i}" staff="1" tstamp="${ts(t)}" place="above"><rend fontstyle="italic">${esc(text)}</rend></dir>`
    })
  } else if (layers.harmony)
    a.harmony.forEach((h, i) => {
      extra[at(h.chord.start)] += `<harm xml:id="ah${i}" staff="${low}" tstamp="${ts(h.chord.start)}" place="below">${esc(labelOf(a, i, notation))}</harm>`
    })
  // keys and cadences are tonal ideas: the 20th-century lens does not draw them
  const tonal = a.lens !== 'xx'
  if (layers.keys && tonal) {
    a.regions.forEach((r, i) => {
      extra[at(r.start)] += `<dir xml:id="ak${i}" staff="1" tstamp="${ts(r.start)}" place="above"><rend fontweight="bold">${esc(keyName(r.key))}</rend></dir>`
    })
    a.tonicizations.forEach((t, i) => {
      extra[at(t.from)] += `<dir xml:id="at${i}" staff="1" tstamp="${ts(t.from)}" place="above"><rend fontstyle="italic">ly điệu → ${esc(keyName({ tonic: t.key.tonic, minor: t.key.minor }))}</rend></dir>`
    })
  }
  if (layers.cadences && tonal) {
    const short = { PAC: 'kết trọn', IAC: 'kết trọn (không hoàn toàn)', HC: 'kết nửa', DC: 'kết lừa', PC: 'kết plagal' }
    a.cadences.forEach((c, i) => {
      extra[at(c.at)] += `<dir xml:id="ac${i}" staff="1" tstamp="${ts(c.at)}" place="above"><rend fontstyle="italic">${short[c.kind]}</rend></dir>`
    })
  }
  if (layers.form && a.form) {
    // section letters, and the passages that come back (sequences, repeats)
    a.form.sections.forEach((x, i) => {
      if (a.form.sections.length < 2) return
      extra[x.bars[0]] += `<dir xml:id="as${i}" staff="1" tstamp="1" place="above"><rend fontweight="bold" fontsize="large">${esc(x.letter)}</rend></dir>`
    })
    const names = { exact: 'nhắc lại', transposed: 'nhắc lại (dời cao độ)', sequence: 'mô tiến', varied: 'nhắc lại có biến đổi' }
    a.form.repeats.forEach((r, i) => {
      if (r.kind === 'varied' && r.score <= 0.85) return
      extra[r.b[0]] += `<dir xml:id="ar${i}" staff="1" tstamp="1" place="above"><rend fontstyle="italic">${esc(names[r.kind])}</rend></dir>`
    })
  }
  const parts = mei.split('</measure>')
  const out = parts.map((p, i) => (i < extra.length ? p + extra[i] : p)).join('</measure>')
  // colour notes: every written piece of an altered or ornamental note
  const color = new Map<string, string>()
  const mark = (n: ANote, c: string) => n.refs.forEach((r) => color.set(`${r.ev}|${r.n > 1 ? r.j : -1}`, c))
  if (layers.ncts) a.ncts.forEach((x) => mark(x.note, COLORS.nct))
  if (layers.accidentals) a.accidentals.forEach((x) => mark(x.note, COLORS.accidental))
  if (!color.size) return out
  return out.replace(/<note xml:id="([^"]+)"/g, (m, id: string) => {
    const g = /^(.+?)(?:_\d+)?(?:-(\d+))?$/.exec(id)
    if (!g) return m
    const c = color.get(`${g[1]}|${g[2] !== undefined ? +g[2] : -1}`)
    return c ? `${m} color="${c}"` : m
  })
}
