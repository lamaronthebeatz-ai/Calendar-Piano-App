import type { Analysis, NamedKey } from './index'
import { barAt } from './extract'
import { mod, solfaOf } from './pitch'
import { CADENCE_NAME } from './cadence'
import { NCT_NAME, type NctKind } from './nct'
import type { Concept } from '../links'

/** A piece of report text: plain, a link to a library concept, or a reference to bars of the score. */
export type Run = { t: string; concept?: Concept; bars?: [number, number] }
export type Block = { id: string; title: string; paras: Run[][] }

export const keyName = (k: Pick<NamedKey, 'tonic' | 'minor'>) => `${solfaOf(k.tonic)} ${k.minor ? 'thứ' : 'trưởng'}`

/** How a key stands to the home key, in the words of the harmony textbooks. */
export function relation(k: NamedKey, home: NamedKey): string {
  const d = mod(k.tonicPc - home.tonicPc, 12)
  if (d === 0) return k.minor === home.minor ? 'giọng chính' : 'giọng cùng tên'
  if (!home.minor && k.minor && d === 9) return 'giọng song song (bậc VI)'
  if (home.minor && !k.minor && d === 3) return 'giọng song song (bậc III)'
  // degrees as the home mode has them: in major ♭III, ♭VI, ♭VII are lowered degrees; in minor they are the scale's own
  const deg: Record<number, string> = home.minor
    ? { 7: 'bậc V', 5: 'bậc IV', 2: 'bậc II', 4: 'bậc III nâng', 8: 'bậc VI', 9: 'bậc VI nâng', 10: 'bậc VII', 11: 'bậc VII nâng', 1: 'bậc II hạ', 6: 'bậc IV tăng' }
    : { 7: 'bậc V', 5: 'bậc IV', 2: 'bậc II', 4: 'bậc III', 9: 'bậc VI', 11: 'bậc VII', 1: 'bậc II hạ', 3: 'bậc III hạ', 8: 'bậc VI hạ', 10: 'bậc VII hạ', 6: 'bậc IV tăng' }
  return `giọng ${deg[d] ?? 'xa'}`
}

/** Bar numbers as printed: a pickup bar is bar 0. */
export function barNumbering(a: Analysis) {
  const b0 = a.score.bars[0]
  const first = a.score.notes[0]
  const pickup = !!b0 && !!first && first.start >= b0.start + b0.len / 2 && a.score.bars.length > 1
  return { pickup, num: (t: number) => barAt(a.score.bars, t).i + (pickup ? 0 : 1) }
}

const span = (a: number, b: number): Run => ({ t: a === b ? `ô ${a}` : `ô ${a}–${b}`, bars: [a, b] })

/** The analysis as a text that reads in the order of the music; every bar reference and term is clickable. */
export function report(a: Analysis): Block[] {
  const { num } = barNumbering(a)
  const sc = a.score
  const blocks: Block[] = []
  const home = a.regions.length ? a.regions.reduce((x, y) => (y.end - y.start > x.end - x.start ? y : x)).key : null
  const homeKey = a.harmony.length ? a.harmony[a.harmony.length - 1].key : home
  const first = sc.bars[0]
  const lastBar = num(sc.end - 1)

  // overview
  const staves = new Set(sc.staffOfLane).size
  const ov: Run[] = [
    { t: `Bản nhạc gồm ${lastBar} ô, ${staves} khuông` },
    { t: sc.labels?.length ? ` (${sc.labels.join(', ')})` : '' },
    { t: ', ' },
    { t: `nhịp ${first.time[0]}/${first.time[1]}`, concept: 'timeSignature' },
    { t: ', ' },
    { t: first.key === 0 ? 'không có dấu hoá ở hoá biểu' : `hoá biểu ${Math.abs(first.key)} dấu ${first.key > 0 ? 'thăng' : 'giáng'}`, concept: 'keySignature' },
    { t: '.' },
  ]
  if (homeKey) ov.push({ t: ' Giọng chính: ' }, { t: keyName(homeKey), concept: 'key' }, { t: '.' })
  blocks.push({ id: 'tong-quan', title: 'Tổng quan', paras: [ov] })

  // key plan
  if (homeKey && a.regions.length) {
    const plan: Run[] = [{ t: 'Kế hoạch giọng: ' }]
    a.regions.forEach((r, i) => {
      if (i) plan.push({ t: ' → ' })
      plan.push(span(num(r.start), num(r.end - 1)), { t: `: ${keyName(r.key)}` })
      if (i) plan.push({ t: ` (${relation(r.key, homeKey)})` })
    })
    plan.push({ t: '.' })
    const paras: Run[][] = [plan]
    if (a.regions.length > 1) paras.push([{ t: 'Mỗi lần đổi vùng giọng kéo dài và được củng cố bằng câu kết là một lần ' }, { t: 'chuyển giọng', concept: 'modulation' }, { t: '.' }])
    if (a.tonicizations.length) {
      const tz: Run[] = [{ t: 'Ly điệu', concept: 'modulation' }, { t: ' (chạm qua giọng khác trong thời gian ngắn, không rời giọng chính): ' }]
      a.tonicizations.forEach((t, i) => {
        if (i) tz.push({ t: '; ' })
        tz.push(span(num(t.from), num(t.to - 1)), { t: ` sang ${keyName({ tonic: t.key.tonic, minor: t.key.minor })}` })
      })
      tz.push({ t: '.' })
      paras.push(tz)
    }
    blocks.push({ id: 'giong', title: 'Giọng và chuyển giọng', paras })
  }

  // cadences
  if (a.cadences.length) {
    const cad: Run[] = [{ t: 'Các ' }, { t: 'câu kết', concept: 'cadence' }, { t: ' tìm thấy: ' }]
    a.cadences.forEach((c, i) => {
      if (i) cad.push({ t: '; ' })
      cad.push(span(num(c.at), num(c.end - 1)), { t: ` — ${CADENCE_NAME[c.kind]} ở ${keyName(a.harmony[c.chord].key)}` })
    })
    cad.push({ t: '.' })
    blocks.push({ id: 'ket', title: 'Câu kết', paras: [cad] })
  }

  // notable chords
  const notable: Run[][] = []
  const where = (pred: (i: number) => boolean) => a.harmony.map((h, i) => ({ h, i })).filter(({ i }) => pred(i))
  const list = (items: { h: (typeof a.harmony)[number] }[], max = 12): Run[] => {
    const out: Run[] = []
    items.slice(0, max).forEach(({ h }, j) => {
      if (j) out.push({ t: ', ' })
      out.push(span(num(h.chord.start), num(h.chord.end - 1)), { t: ` (${h.reading.ru})` })
    })
    if (items.length > max) out.push({ t: ` và ${items.length - max} chỗ khác` })
    return out
  }
  const applied = where((i) => a.harmony[i].reading.of !== undefined)
  if (applied.length) notable.push([{ t: 'Hợp âm át phụ', concept: 'applied' }, { t: ` (${applied.length}): ` }, ...list(applied), { t: '.' }])
  const nea = where((i) => a.harmony[i].reading.special === 'N')
  if (nea.length) notable.push([{ t: 'Hợp âm sáu Napoli', concept: 'neapolitan' }, { t: ': ' }, ...list(nea), { t: '.' }])
  const aug = where((i) => ['It', 'Fr', 'Ger'].includes(a.harmony[i].reading.special ?? ''))
  if (aug.length) notable.push([{ t: 'Hợp âm sáu tăng', concept: 'augSixth' }, { t: ': ' }, ...list(aug), { t: '.' }])
  const k64 = where((i) => a.harmony[i].reading.special === 'K64')
  if (k64.length) notable.push([{ t: 'Hợp âm bốn sáu kết', concept: 'cadence' }, { t: ' (K64): ' }, ...list(k64), { t: '.' }])
  const mixture = where((i) => { const r = a.harmony[i].reading; return r.alter !== 0 && r.of === undefined && !r.special })
  if (mixture.length) notable.push([{ t: 'Hợp âm biến âm, hợp âm mượn', concept: 'mixture' }, { t: ': ' }, ...list(mixture), { t: '.' }])
  const d7 = a.harmony.filter((h) => h.reading.fn === 'D' && ['7', '65', '43', '2'].includes(h.reading.fig) && h.reading.of === undefined).length
  const vii = a.harmony.filter((h) => h.reading.ru.startsWith('VII') && h.reading.of === undefined).length
  notable.unshift([
    { t: `Có ${a.harmony.length} hợp âm được nhận diện; ` },
    { t: 'nhóm chức năng', concept: 'function' },
    { t: ` T ${a.harmony.filter((h) => h.reading.fn === 'T').length}, S ${a.harmony.filter((h) => h.reading.fn === 'S').length}, D ${a.harmony.filter((h) => h.reading.fn === 'D').length}; ` },
    { t: `${d7} ` },
    { t: 'hợp âm bảy át', concept: 'seventh' },
    { t: ` và ${vii} hợp âm bậc VII.` },
  ])
  blocks.push({ id: 'hoa-am', title: 'Hoà âm', paras: notable })

  // unusual accidentals
  if (a.accidentals.length) {
    const byReason = new Map<string, { concept: Concept; bars: number[] }>()
    for (const x of a.accidentals) {
      const e = byReason.get(x.reason) ?? byReason.set(x.reason, { concept: x.concept, bars: [] }).get(x.reason)!
      const b = num(x.note.start)
      if (!e.bars.includes(b)) e.bars.push(b)
    }
    const paras: Run[][] = [[{ t: `${a.accidentals.length} nốt mang ` }, { t: 'dấu hoá', concept: 'accidental' }, { t: ' khác hoá biểu (được tô màu trên bản nhạc):' }]]
    for (const [reason, e] of [...byReason].sort((x, y) => y[1].bars.length - x[1].bars.length)) {
      const runs: Run[] = [{ t: '• ' }, { t: reason, concept: e.concept }, { t: ' — ' }]
      e.bars.slice(0, 14).forEach((b, i) => {
        if (i) runs.push({ t: ', ' })
        runs.push(span(b, b))
      })
      if (e.bars.length > 14) runs.push({ t: '…' })
      paras.push(runs)
    }
    blocks.push({ id: 'dau-hoa', title: 'Dấu hoá bất thường', paras })
  }

  // non-chord tones
  if (a.ncts.length) {
    const counts = new Map<NctKind, number>()
    for (const n of a.ncts) counts.set(n.kind, (counts.get(n.kind) ?? 0) + 1)
    const runs: Run[] = [{ t: 'Nốt ngoài hợp âm', concept: 'nct' }, { t: ': ' }]
    ;[...counts].sort((x, y) => y[1] - x[1]).forEach(([k, v], i) => runs.push({ t: `${i ? ', ' : ''}${NCT_NAME[k]} ${v}` }))
    runs.push({ t: '.' })
    blocks.push({ id: 'ngoai-hop-am', title: 'Nốt ngoài hợp âm', paras: [runs] })
  }

  // honesty
  const unsure = a.harmony.filter((h) => h.chord.fit < 0.6)
  if (unsure.length) {
    const runs: Run[] = [{ t: `${unsure.length} chỗ hợp âm đọc chưa chắc (nhiều nốt ngoài hợp âm hoặc thiếu âm), đánh dấu “?” trên bản nhạc: ` }]
    unsure.slice(0, 10).forEach((h, i) => {
      if (i) runs.push({ t: ', ' })
      runs.push(span(num(h.chord.start), num(h.chord.end - 1)))
    })
    if (unsure.length > 10) runs.push({ t: '…' })
    runs.push({ t: '. Nên xem lại các chỗ này.' })
    blocks.push({ id: 'do-tin-cay', title: 'Độ tin cậy', paras: [runs] })
  }
  return blocks
}
