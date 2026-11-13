import type { Analysis, NamedKey } from './index'
import { barAt } from './extract'
import { mod, solfaOf } from './pitch'
import { CADENCE_NAME } from './cadence'
import { NCT_NAME, type NctKind } from './nct'
import type { Concept } from '../links'
import { chordSymbol } from './symbols'
import { rowMatrix } from './xx'
import { REPEAT_NAME } from './form'

/** A piece of report text: plain, a link to a library concept, or a reference to bars of the score. */
export type Run = { t: string; concept?: Concept; bars?: [number, number] }
export type Block = { id: string; title: string; paras: Run[][]; table?: { head: string[]; rows: { bar: number; cells: string[] }[] } }

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
  // a pickup: the first bar is silent for most of its length (a beat of 4/4 or 3/4, an eighth of 6/8)
  const pickup = !!b0 && !!first && first.start >= b0.start + b0.len * 0.6 && a.score.bars.length > 1
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
  if (homeKey && a.lens !== 'xx') ov.push({ t: ' Giọng chính: ' }, { t: keyName(homeKey), concept: 'key' }, { t: '.' })
  blocks.push({ id: 'tong-quan', title: 'Tổng quan', paras: [ov] })

  if (a.lens === 'xx') {
    blocks.push(...xxBlocks(a), ...formBlocks(a), barTable(a))
    return blocks.concat(commonTail(a))
  }
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
  if (a.lens === 'jazz') blocks.push(...jazzBlocks(a))
  else blocks.push({ id: 'hoa-am', title: 'Hoà âm', paras: notable })

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
  blocks.push(...formBlocks(a), barTable(a))
  return blocks
}

/** The jazz lens's own sections: the changes bar by bar, the progressions players name, chord-scales, the form. */
export function jazzBlocks(a: Analysis): Block[] {
  if (!a.jazz) return []
  const { num } = barNumbering(a)
  const { readings, patterns, fromSymbols } = a.jazz
  const out: Block[] = []
  const sym = (i: number) => chordSymbolOf(a, i)
  // changes, bar by bar
  const byBar = new Map<number, number[]>()
  a.harmony.forEach((h, i) => {
    const b = num(h.chord.start)
    ;(byBar.get(b) ?? byBar.set(b, []).get(b)!).push(i)
  })
  const changes: Run[] = [{ t: fromSymbols ? 'Ký hiệu hợp âm lấy từ chính bản lead sheet. ' : 'Ký hiệu hợp âm do máy đọc từ các nốt (bản không ghi sẵn ký hiệu). ' }]
  ;[...byBar].slice(0, 48).forEach(([b, is], k) => {
    changes.push({ t: k ? ' | ' : '| ' }, span(b, b), { t: `: ${is.map(sym).join(' ')}` })
  })
  if (byBar.size > 48) changes.push({ t: ' | …' })
  out.push({ id: 'chuoi', title: 'Chuỗi hợp âm', paras: [changes] })
  // named progressions
  const paras: Run[][] = []
  const of = (k: (typeof patterns)[number]['kind']) => patterns.filter((p) => p.kind === k)
  const listP = (ps: typeof patterns, label: (p: (typeof patterns)[number]) => string): Run[] => {
    const r: Run[] = []
    ps.slice(0, 16).forEach((p, j) => {
      if (j) r.push({ t: '; ' })
      r.push(span(num(a.harmony[p.from].chord.start), num(a.harmony[p.to].chord.end - 1)), { t: ` ${label(p)}` })
    })
    if (ps.length > 16) r.push({ t: ` và ${ps.length - 16} chỗ khác` })
    return r
  }
  const iiVI = of('II–V–I')
  const iiV = of('II–V')
  if (iiVI.length || iiV.length)
    paras.push([{ t: 'II–V–I', concept: 'iiVI' }, { t: ` (${iiVI.length}) và II–V chưa giải quyết (${iiV.length}): ` }, ...listP([...iiVI, ...iiV].sort((x, y) => x.from - y.from), (p) => `${p.from === p.to ? '' : [p.from, p.from + 1, p.to].filter((v, i, arr) => arr.indexOf(v) === i).map(sym).join(' → ')}${p.target ? ` (về ${p.target})` : ''}`), { t: '.' }])
  if (of('SubV').length) paras.push([{ t: 'Thay thế tritone', concept: 'subV' }, { t: ` (hợp âm át xuống nửa cung): ` }, ...listP(of('SubV'), (p) => `${sym(p.from)} → ${sym(p.to)}`), { t: '.' }])
  if (of('V/x').length) paras.push([{ t: 'Hợp âm át phụ', concept: 'applied' }, { t: ': ' }, ...listP(of('V/x'), (p) => `${readings[p.from].rn}`), { t: '.' }])
  if (of('backdoor').length) paras.push([{ t: 'Tiến hành "backdoor" ♭VII7 → I', concept: 'substitution' }, { t: ': ' }, ...listP(of('backdoor'), (p) => `${sym(p.from)} → ${sym(p.to)}`), { t: '.' }])
  if (of('turnaround').length) paras.push([{ t: 'Vòng quay đầu I–VI–II–V', concept: 'turnaround' }, { t: ': ' }, ...listP(of('turnaround'), () => ''), { t: '.' }])
  if (!paras.length) paras.push([{ t: 'Không thấy chuỗi II–V hay thay thế tritone rõ ràng — hoà âm ở đây gần với hoà âm chức năng cổ điển hơn là jazz.' }])
  out.push({ id: 'tien-hanh', title: 'Mẫu tiến hành jazz', paras })
  // chord-scales
  const seen = new Map<string, string>()
  a.harmony.forEach((_, i) => {
    const k = `${sym(i)}|${readings[i].rn}`
    if (!seen.has(k)) seen.set(k, readings[i].scale)
  })
  const sc: Run[][] = [[{ t: 'Thang âm cho từng hợp âm', concept: 'chordScale' }, { t: ' (theo Mark Levine), kèm ' }, { t: 'nốt dẫn hướng', concept: 'guideTones' }, { t: ' — quãng 3 và quãng 7 của hợp âm:' }]]
  ;[...seen].slice(0, 14).forEach(([k, scale]) => {
    const [s, rn] = k.split('|')
    const i = a.harmony.findIndex((_, j) => sym(j) === s && readings[j].rn === rn)
    sc.push([{ t: `• ${s} (${rn}) — ${scale}; nốt dẫn hướng ${readings[i].guide}` }])
  })
  out.push({ id: 'thang-am', title: 'Thang âm và nốt dẫn hướng', paras: sc })
  // twelve-bar blues
  const blues = bluesAt(a)
  if (blues.length)
    out.push({ id: 'blues', title: 'Hình thức', paras: [[{ t: 'Khung ' }, { t: 'blues 12 ô', concept: 'blues' }, { t: ': ' }, ...blues.flatMap((b, j) => [...(j ? [{ t: ', ' }] : []), span(b, b + 11)]), { t: ' (I – IV – I – V – I, hợp âm bảy át trên các bậc chính).' }]] })
  return out
}

function chordSymbolOf(a: Analysis, i: number) {
  const c = a.harmony[i].chord
  return chordSymbol(c)
}

/** Bars where a twelve-bar blues starts: I (1–4), IV (5–6), I (7–8), V or II–V (9–10), I (11–12), dominant chords. */
function bluesAt(a: Analysis): number[] {
  // the chord sounding at the start of each bar (a chord held over from the bar before counts)
  const roots = a.score.bars.map((b) => {
    const h = a.harmony.find((x) => x.chord.start <= b.start && x.chord.end > b.start) ?? a.harmony.find((x) => x.chord.start >= b.start && x.chord.start < b.start + b.len)
    return h ? mod(h.chord.root - h.key.tonicPc, 12) : -1
  })
  const { num } = barNumbering(a)
  const out: number[] = []
  for (let b = 0; b + 11 < roots.length; b++) {
    const r = (k: number) => roots[b + k]
    if (r(0) === 0 && (r(1) === 0 || r(1) === 5) && r(2) === 0 && r(3) === 0 && r(4) === 5 && r(6) === 0 && (r(8) === 7 || r(8) === 2) && r(10) === 0) {
      if (!out.length || num(a.score.bars[b].start) >= out[out.length - 1] + 12) out.push(num(a.score.bars[b].start))
    }
  }
  return out
}

const PC = ['Đô', 'Đô♯', 'Rê', 'Mi♭', 'Mi', 'Fa', 'Fa♯', 'Sol', 'La♭', 'La', 'Si♭', 'Si']

/** The 20th-century lens's sections: pitch centre, set classes, collections, techniques, rows. */
export function xxBlocks(a: Analysis): Block[] {
  const x = a.xx
  if (!x) return []
  const { num } = barNumbering(a)
  const out: Block[] = []
  const centre: Run[] = [{ t: 'Trung tâm cao độ', concept: 'tonalCentre' }, { t: ': ' }]
  centre.push({ t: x.centre === null ? 'không có âm nào trội rõ — âm nhạc không xoay quanh một chủ âm (vô điệu tính hoặc đa trung tâm).' : `${PC[x.centre]} — âm vang lâu nhất, nhất là ở bè trầm.` })
  const ic = ['quãng 2 thứ / 7 trưởng', 'quãng 2 trưởng / 7 thứ', 'quãng 3 thứ / 6 trưởng', 'quãng 3 trưởng / 6 thứ', 'quãng 4 / 5 đúng', 'tritone']
  const total = x.vector.reduce((s, v) => s + v, 0) || 1
  const ranked = x.vector.map((v, i) => ({ v, i })).sort((p, q) => q.v - p.v)
  const quality: Run[] = [{ t: 'Chất liệu quãng (cộng vectơ quãng của mọi hợp âm): ' }]
  ranked.slice(0, 3).forEach((r, j) => quality.push({ t: `${j ? ', ' : ''}${ic[r.i]} ${Math.round((100 * r.v) / total)}%` }))
  quality.push({ t: x.vector[0] + x.vector[5] > 0.35 * total ? '. Quãng 2 thứ và tritone chiếm nhiều — âm thanh căng, đặc trưng của hoà âm vô điệu tính.' : x.vector[4] > 0.3 * total ? '. Quãng 4 – 5 trội — âm thanh rỗng, "quãng 4", gần ngũ cung.' : '.' })
  out.push({ id: 'trung-tam', title: 'Trung tâm cao độ và chất liệu quãng', paras: [centre, quality] })

  // set classes
  const counts = new Map<string, { n: number; first: number; name?: string; prime?: string }>()
  for (const s of x.sonorities) {
    if (!s.forte) continue
    const e = counts.get(s.forte) ?? counts.set(s.forte, { n: 0, first: s.start, name: s.name, prime: s.prime }).get(s.forte)!
    e.n++
  }
  const sets: Run[][] = [[{ t: `${x.sonorities.filter((s) => s.forte).length} hợp âm được gọi tên theo ` }, { t: 'lý thuyết tập cao độ', concept: 'setTheory' }, { t: ' (số Forte, dạng nguyên thuỷ). Hay gặp nhất:' }]]
  ;[...counts].sort((p, q) => q[1].n - p[1].n).slice(0, 10).forEach(([f, e]) => sets.push([{ t: `• ${f} ${e.prime ?? ''}${e.name ? ` — ${e.name}` : ''}: ${e.n} lần, lần đầu ở ` }, span(num(e.first), num(e.first))]))
  out.push({ id: 'tap-cao-do', title: 'Tập cao độ', paras: sets })

  // collections
  if (x.collections.length) {
    const runs: Run[][] = [[{ t: 'Những ô có từ năm lớp cao độ trở lên được đối chiếu với các ' }, { t: 'thang âm thế kỷ XX', concept: 'scales20' }, { t: ':' }]]
    const groups: { kind: string; from: number; to: number }[] = []
    for (const c of x.collections) {
      const g = groups[groups.length - 1]
      if (g && g.kind === c.kind && c.bar === g.to + 1) g.to = c.bar
      else groups.push({ kind: c.kind, from: c.bar, to: c.bar })
    }
    groups.slice(0, 20).forEach((g) => {
      const concept: Concept | undefined = g.kind.includes('bát cung') ? 'octatonic' : g.kind.includes('toàn cung') ? 'wholeTone' : g.kind.includes('diatonic') ? 'modes' : undefined
      runs.push([{ t: '• ' }, span(num(a.score.bars[g.from].start), num(a.score.bars[g.to].start)), { t: ': ' }, { t: g.kind, concept }])
    })
    out.push({ id: 'thang-am-xx', title: 'Thang âm và tập hợp', paras: runs })
  }

  // techniques
  const tq = x.techniques.filter((t) => t.kind !== 'row')
  if (tq.length) {
    const names: Record<string, [string, Concept]> = { quartal: ['Hợp âm quãng 4', 'quartal'], planing: ['Chuyển động song song', 'planing'], pedal: ['Âm pedal', 'pedal'], ostinato: ['Ostinato', 'ostinato'], polychord: ['Hợp âm chồng', 'polychord'] }
    const paras: Run[][] = []
    for (const kind of ['planing', 'ostinato', 'pedal', 'quartal']) {
      const items = tq.filter((t) => t.kind === kind)
      if (!items.length) continue
      const r: Run[] = [{ t: names[kind][0], concept: names[kind][1] }, { t: ` (${items.length}): ` }]
      items.slice(0, 10).forEach((t, j) => r.push({ t: j ? '; ' : '' }, span(num(t.from), num(t.to - 1)), { t: kind === 'quartal' ? '' : ` ${t.text}` }))
      if (items.length > 10) r.push({ t: '…' })
      paras.push(r)
    }
    out.push({ id: 'ky-thuat', title: 'Kỹ thuật', paras })
  }

  // rows
  if (x.rows.length) {
    const paras: Run[][] = []
    for (const r of x.rows) {
      paras.push([{ t: 'Dãy 12 âm', concept: 'twelveTone' }, { t: ' ở ' }, span(num(r.from), num(r.to - 1)), { t: `: ${r.pcs.map((p) => PC[p]).join(' – ')}.` }])
      if (r.forms.length) paras.push([{ t: `Xuất hiện lại ${r.forms.length} lần: ` }, ...r.forms.slice(0, 12).flatMap((f, j) => [{ t: j ? ', ' : '' }, { t: `${f.label} ` }, span(num(f.from), num(f.from))])])
      paras.push([{ t: 'Ma trận 12 âm (hàng: dạng nguyên P, cột: dạng đảo I):' }])
      for (const line of rowMatrix(r.pcs)) paras.push([{ t: line.join(' ') }])
    }
    out.push({ id: 'day-12-am', title: 'Kỹ thuật 12 âm', paras })
  }
  return out
}

/** Sections every lens ends with (none yet for the 20th-century lens: accidentals and non-chord tones assume a key). */
function commonTail(a: Analysis): Block[] {
  void a
  return []
}

/** Form: phrases, the passages that come back, the sections and the form they suggest. */
export function formBlocks(a: Analysis): Block[] {
  const f = a.form
  if (!f) return []
  const { num } = barNumbering(a)
  const n = (i: number) => num(a.score.bars[i].start)
  const paras: Run[][] = []
  if (f.guess) paras.push([{ t: 'Gợi ý hình thức: ' }, { t: f.guess.name, concept: f.guess.concept }, { t: ` — vì ${f.guess.why}. Đây là đề xuất của máy; người phân tích nên đối chiếu lại.` }])
  if (f.sections.length) {
    const r: Run[] = [{ t: 'Sơ đồ: ' }]
    f.sections.forEach((s, i) => r.push({ t: i ? ' – ' : '' }, { t: `${s.letter} ` }, span(n(s.bars[0]), n(s.bars[1]))))
    paras.push(r)
  }
  if (f.phrases.length === 1 && f.phrases[0].bars[1] - f.phrases[0].bars[0] > 12) paras.push([{ t: 'Không thấy chỗ ' }, { t: 'kết', concept: 'cadence' }, { t: ' rõ bên trong — nhạc chạy liền, các phần được chia theo chất liệu trở lại.' }])
  else if (f.phrases.length) {
    const r: Run[] = [{ t: `${f.phrases.length} ` }, { t: 'câu nhạc', concept: 'phrase' }, { t: a.lens === 'xx' ? ' (ranh giới ở chỗ nhạc dừng): ' : ' (ranh giới ở câu kết và chỗ nhạc dừng): ' }]
    f.phrases.slice(0, 24).forEach((p, i) => r.push({ t: i ? '; ' : '' }, span(n(p.bars[0]), n(p.bars[1])), { t: ` (${p.bars[1] - p.bars[0] + 1} ô${p.end && a.lens !== 'xx' ? `, ${{ PAC: 'kết trọn', IAC: 'kết trọn không hoàn toàn', HC: 'kết nửa', DC: 'kết lừa', PC: 'kết plagal' }[p.end]}` : ''})` }))
    paras.push(r)
  }
  const reps = f.repeats.filter((x) => x.kind !== 'varied' || x.score > 0.85)
  if (reps.length) {
    const r: Run[] = [{ t: 'Chất liệu trở lại: ' }]
    reps.slice(0, 16).forEach((x, i) => {
      r.push({ t: i ? '; ' : '' }, span(n(x.b[0]), n(x.b[1])), { t: ` là ${REPEAT_NAME[x.kind]}${x.shift ? ` (${x.shift > 0 ? 'lên' : 'xuống'} ${Math.abs(x.shift) % 7 === 0 ? `${Math.abs(x.shift) / 7} quãng tám` : `quãng ${Math.abs(x.shift) + 1}`})` : ''} của ` }, span(n(x.a[0]), n(x.a[1])))
    })
    if (reps.length > 16) r.push({ t: '…' })
    const seq = reps.some((x) => x.kind === 'sequence')
    if (seq) r.push({ t: '. Xem thêm ' }, { t: 'mô tiến', concept: 'sequence' })
    r.push({ t: '.' })
    paras.push(r)
  }
  return paras.length ? [{ id: 'hinh-thuc', title: 'Hình thức', paras }] : []
}

/** The bar-by-bar table, as in the appendix of an analysis essay. */
export function barTable(a: Analysis): Block {
  const { num } = barNumbering(a)
  const rows = a.score.bars.map((b) => {
    const bar = num(b.start)
    const inBar = (t: number) => t >= b.start && t < b.start + b.len
    if (a.lens === 'xx' && a.xx) {
      const sets = a.xx.sonorities.filter((x) => inBar(x.start) && x.forte).map((x) => x.forte!)
      const col = a.xx.collections.find((c) => c.bar === b.i)?.kind ?? ''
      const tq = a.xx.techniques.filter((t) => inBar(t.from) && t.kind !== 'quartal').map((t) => t.text)
      return { bar, cells: [String(bar), sets.join(', '), col, tq.join('; ')] }
    }
    const hs = a.harmony.map((h, i) => ({ h, i })).filter(({ h }) => inBar(h.chord.start))
    const key = (a.harmony.find((h) => h.chord.start <= b.start && h.chord.end > b.start) ?? hs[0]?.h)?.key
    if (a.lens === 'jazz' && a.jazz) {
      return { bar, cells: [String(bar), hs.map(({ h }) => chordSymbol(h.chord)).join(' '), hs.map(({ i }) => a.jazz!.readings[i].rn).join(' '), [...new Set(hs.map(({ i }) => a.jazz!.readings[i].scale))].join('; ')] }
    }
    const notes: string[] = []
    for (const c of a.cadences) if (inBar(c.at)) notes.push({ PAC: 'kết trọn', IAC: 'kết trọn (không hoàn toàn)', HC: 'kết nửa', DC: 'kết lừa', PC: 'kết plagal' }[c.kind])
    for (const t of a.tonicizations) if (inBar(t.from)) notes.push(`ly điệu → ${t.name}`)
    for (const x of new Set(a.accidentals.filter((x) => inBar(x.note.start)).map((x) => x.reason))) notes.push(x)
    return { bar, cells: [String(bar), hs.map(({ h }) => h.reading.ru).join(' – '), key ? keyName(key) : '', notes.join('; ')] }
  })
  const head = a.lens === 'xx' ? ['Ô', 'Tập cao độ', 'Tập hợp', 'Kỹ thuật'] : a.lens === 'jazz' ? ['Ô', 'Hợp âm', 'Số La Mã', 'Thang âm'] : ['Ô', 'Hợp âm (Nga – Xô viết)', 'Giọng', 'Ghi chú']
  return { id: 'bang', title: 'Bảng phân tích từng ô', paras: [], table: { head, rows } }
}

/**
 * The report as library Markdown: terms become [[slug|term]] links (so a note made from it joins the second brain's
 * web), the bar table a Markdown table. `slugOf` resolves a concept to its article.
 */
export function toMarkdown(title: string, blocks: Block[], slugOf: (c: Concept) => string): string {
  const run = (r: Run) => (r.concept ? `[[${slugOf(r.concept)}|${r.t}]]` : r.t)
  const out: string[] = [`## ${title}`, '']
  for (const b of blocks) {
    out.push(`### ${b.title}`)
    for (const p of b.paras) out.push(p.map(run).join(''), '')
    if (b.table) {
      out.push(`| ${b.table.head.join(' | ')} |`, `|${b.table.head.map(() => '---').join('|')}|`)
      for (const r of b.table.rows) out.push(`| ${r.cells.map((c) => c.replace(/\|/g, '/')).join(' | ')} |`)
      out.push('')
    }
  }
  return out.join('\n')
}
