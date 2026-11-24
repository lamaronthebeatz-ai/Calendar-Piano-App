import type { Analysis } from '../../../features/analyze/engine'
import { analyzeOnce, globalKeyOf } from './analyzeOnce'
import { relation } from '../../../features/analyze/engine/report'
import type { NamedKey } from '../../../features/analyze/engine'
import { CADENCE_NAME } from '../../../features/analyze/engine/cadence'
import { QUALITIES } from '../../../features/analyze/engine/chords'
import { NCT_NAME } from '../../../features/analyze/engine/nct'
import { nameOf, type Spelled } from '../../../features/analyze/engine/pitch'
import type { AnalysisModule, Finding, ModuleOutput } from '../../analysis/types'
import { spelling, type Letter } from '../../repr/pitch'
import { notesOf, type Score } from '../../repr/score'
import { identify } from './identify'

/**
 * The /analyze engine (chords by dynamic programming, keys by Viterbi over 24 keys, Russian–Soviet and international
 * labels, non-chord tones, cadences) behind the analysis contract — adapted, not rebuilt. What the engine computes is
 * kept; this layer only says which of its outputs are facts (the sounding pitch classes) and which are readings (root,
 * key, function, cadence), attaches the engine's own measure of fit as the confidence basis, and adds the other
 * readings of each sonority from the chord identifier, so an ambiguity is shown, not hidden.
 * Time: the engine counts 960 per whole note; findings are in quarters.
 */
const ID = 'harmony.tonal'
const Q = 240
const sp = (s: Spelled) => spelling(s.step as Letter, s.alter)
const keyName = (k: { name: string; minor: boolean }) => `${k.name.replace(/m$/, '')} ${k.minor ? 'thứ' : 'trưởng'}`
const mod12 = (x: number) => ((x % 12) + 12) % 12
// the local key's scale; minor takes natural, harmonic and melodic forms together (raised 6th and 7th are its own)
const scaleOf = (k: { tonicPc: number; minor: boolean }) => new Set((k.minor ? [0, 2, 3, 5, 7, 8, 9, 10, 11] : [0, 2, 4, 5, 7, 9, 11]).map((d) => mod12(k.tonicPc + d)))
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const ACC = (a: number) => (a > 0 ? '♯'.repeat(a) : '♭'.repeat(-a))

/**
 * What a chord is in its LOCAL key — the global key does not force every chord into its scale: diatonic; applied
 * (secondary dominant / leading-tone chord of another degree); special chromatic (Neapolitan, augmented sixths);
 * borrowed (not in the local mode, all in the parallel mode); other chromatic.
 */
export function chordClass(h: Analysis['harmony'][number]): 'diatonic' | 'applied' | 'special' | 'borrowed' | 'chromatic' {
  if (h.reading.of !== undefined) return 'applied'
  if (h.reading.special) return 'special'
  const own = scaleOf(h.key)
  if (h.pcs.every((p) => own.has(p))) return 'diatonic'
  const parallel = scaleOf({ tonicPc: h.key.tonicPc, minor: !h.key.minor })
  return h.pcs.every((p) => parallel.has(p)) ? 'borrowed' : 'chromatic'
}
const CLASS_NAME = { diatonic: 'hợp âm của giọng', applied: 'hợp âm phụ (át / VII của bậc khác)', special: 'hợp âm biến hoá đặc biệt', borrowed: 'hợp âm mượn từ điệu thức cùng tên', chromatic: 'hợp âm biến hoá khác' }
/** The region's tonic as a degree of the global key: "V", "♭VI", "iii"… */
export function degreeIn(k: NamedKey, home: NamedKey) {
  const letters = (((k.tonic.step - home.tonic.step) % 7) + 7) % 7
  // degrees of the home mode's own scale (natural minor in minor): III of A minor is C, ♭VI of C major is A♭
  const scale = home.minor ? [0, 2, 3, 5, 7, 8, 10] : [0, 2, 4, 5, 7, 9, 11]
  const acc = mod12(k.tonicPc - home.tonicPc - scale[letters] + 6) - 6
  return `${ACC(acc)}${k.minor ? ROMAN[letters].toLowerCase() : ROMAN[letters]}`
}

export function tonalFindings(a: Analysis): ModuleOutput {
  const f: Finding[] = []
  const total = a.harmony.reduce((s, h) => s + (h.chord.end - h.chord.start), 0) || 1
  const lowFit = a.harmony.filter((h) => h.chord.fit < 0.6).length
  const shareIn = (k: { tonicPc: number; minor: boolean }) => a.harmony.filter((h) => h.key.tonicPc === k.tonicPc && h.key.minor === k.minor).reduce((s, h) => s + h.chord.end - h.chord.start, 0) / total
  if (a.home) {
    const inHome = shareIn(a.home)
    const last = a.harmony.at(-1)?.key
    f.push({
      id: `${ID}#home`, module: ID, kind: 'premise', topic: 'giọng chủ', value: { tonicPc: a.home.tonicPc, minor: a.home.minor, name: a.home.name, from: 'user' },
      text: { basic: `Giọng chủ (người phân tích chọn): ${keyName(a.home)}`, technical: `global key = ${a.home.name} (tiền đề của người phân tích, không suy ra); ${Math.round(100 * inHome)}% thời lượng hợp âm đọc trong giọng này` },
      evidence: ['người phân tích chọn trước khi chạy', `${Math.round(100 * inHome)}% thời lượng hợp âm đọc ở giọng này; hợp âm cuối ở ${last ? keyName(last) : '?'}`],
    })
    const est = a.homeEstimate
    if (est && !(est.tonicPc === a.home.tonicPc && est.minor === a.home.minor)) {
      const lastOk = !!last && last.tonicPc === a.home.tonicPc && last.minor === a.home.minor
      const weak = inHome < 0.2 && !lastOk
      f.push({
        id: `${ID}#home-evidence`, module: ID, kind: 'estimate', topic: weak ? 'cảnh báo giọng chủ' : 'giọng ước lượng', value: { name: est.name, share: Math.round(shareIn(est) * 100) / 100, userShare: Math.round(inHome * 100) / 100, endsInUserKey: lastOk },
        text: {
          basic: `${weak ? 'Bằng chứng ít ủng hộ giọng chủ đã chọn: ' : ''}máy ước lượng ${keyName(est)} (${Math.round(shareIn(est) * 100)}% thời lượng); giọng chủ vẫn là ${keyName(a.home)}`,
          technical: `homeEstimate ${est.name}: ${Math.round(shareIn(est) * 100)}% vs ${a.home.name}: ${Math.round(inHome * 100)}%; kết ${lastOk ? 'ở' : 'không ở'} giọng chủ`,
        },
        confidence: { value: Math.round(shareIn(est) * 100) / 100, basis: 'tỉ lệ thời lượng hợp âm bộ Viterbi đặt trong giọng ước lượng — chỉ là bằng chứng, không thay giọng chủ' },
        evidence: [`${a.regions.length} vùng giọng`, `hợp âm cuối ở ${last ? keyName(last) : '?'}`],
      })
    }
  }
  a.regions.slice(1).forEach((r, i) => {
    const prev = a.regions[i]
    f.push({
      id: `${ID}#region-${i + 2}`, module: ID, kind: 'interpretation', topic: 'chuyển giọng', at: r.start / Q, end: r.end / Q,
      value: { from: prev.key.name, to: r.key.name, ...(a.home ? { degree: degreeIn(r.key, a.home), relation: relation(r.key, a.home) } : {}) },
      text: { basic: `Sang ${keyName(r.key)}${a.home ? ` — ${relation(r.key, a.home)} (${degreeIn(r.key, a.home)})` : ''}`, technical: `${prev.key.name} → ${r.key.name} @${r.start / Q}${a.home ? `; ${degreeIn(r.key, a.home)} của ${a.home.name}` : ''}` },
      confidence: { value: Math.min(1, (r.end - r.start) / (4 * 960)), basis: 'độ dài vùng giọng mới tính bằng ô 4/4 (vùng ngắn hơn bốn ô có thể chỉ là ly giọng)' },
      alternatives: [{ value: { tonicization: true }, text: `chỉ là ly giọng tạm sang ${r.key.name}, vẫn ở ${prev.key.name}` }],
      evidence: [`hợp âm từ ${r.start / Q} đến ${r.end / Q} (phách đen) đọc trong ${r.key.name}`],
    })
  })
  a.tonicizations.forEach((t, i) =>
    f.push({
      id: `${ID}#tonicization-${i + 1}`, module: ID, kind: 'interpretation', topic: 'ly giọng', at: t.from / Q, end: t.to / Q, value: { key: t.name },
      text: { basic: `Ly giọng sang ${t.name}`, technical: `tonicization ${t.name} ${t.from / Q}–${t.to / Q}` },
      confidence: { value: 0.5, basis: 'vùng giọng quá ngắn được gộp lại thành ly giọng (ngưỡng độ dài của bộ phân tích), không phải bằng chứng hoà âm riêng' },
      evidence: [`vùng ${t.from / Q}–${t.to / Q}`],
    }),
  )
  a.harmony.forEach((h, i) => {
    const at = h.chord.start / Q
    const end = h.chord.end / Q
    f.push({
      id: `${ID}#sonority-${i + 1}`, module: ID, kind: 'fact', topic: 'âm vang', at, end, value: { pcs: h.pcs, bass: nameOf(h.chord.bass), tones: h.chord.tones.map(nameOf) },
      text: { basic: `Các âm: ${h.chord.tones.map(nameOf).join(' ')}`, technical: `pcs {${h.pcs.join(',')}}, bass ${nameOf(h.chord.bass)}` },
      evidence: [`${h.chord.tones.length} âm khác nhau vang trong đoạn`],
    })
    const id = identify(h.chord.tones.map(sp), sp(h.chord.bass))
    const alts = id.readings
      .filter((r) => !r.foreign.length && !(r.chord.root.letter === h.chord.rootName.step && r.chord.root.alter === h.chord.rootName.alter))
      .slice(0, 2)
      .map((r) => ({ value: { root: r.chord.root, quality: r.chord.quality }, text: `${nameOf({ step: r.chord.root.letter, alter: r.chord.root.alter })} ${r.chord.quality}${r.missing.length ? ` thiếu ${r.missing.join(', ')}` : ''}` }))
    f.push({
      id: `${ID}#chord-${i + 1}`, module: ID, kind: 'interpretation', topic: 'hợp âm', at, end,
      value: { rootPc: h.chord.root, root: nameOf(h.chord.rootName), quality: h.chord.quality, inversion: h.chord.inversion, key: { tonicPc: h.key.tonicPc, minor: h.key.minor, name: h.key.name }, rn: h.reading.rn, ru: h.reading.ru, fn: h.reading.fn ?? null, of: h.reading.of ?? null, pcs: h.pcs, class: chordClass(h) },
      text: { basic: `${h.reading.ru} (${h.reading.rn}) ở ${keyName(h.key)}`, technical: `${nameOf(h.chord.rootName)} ${QUALITIES[h.chord.quality].name}, đảo ${h.chord.inversion}; ${h.reading.rn} / ${h.reading.ru}${h.reading.fn ? `, chức năng ${h.reading.fn}` : ''}; ${CLASS_NAME[chordClass(h)]}` },
      confidence: { value: Math.round(h.chord.fit * 100) / 100, basis: 'độ khớp nốt – hợp âm của bộ quy hoạch động (fit); dưới 0,6 là đoán' },
      ...(alts.length ? { alternatives: alts } : {}),
      evidence: [`âm vang: ${h.chord.tones.map(nameOf).join(' ')}`, ...(h.chord.foreign.length ? [`${h.chord.foreign.length} nốt ngoài hợp âm`] : [])],
    })
  })
  a.cadences.forEach((c, i) =>
    f.push({
      id: `${ID}#cadence-${i + 1}`, module: ID, kind: 'interpretation', topic: 'kết', at: c.at / Q, end: c.end / Q, value: { kind: c.kind, key: c.key },
      text: { basic: `${CADENCE_NAME[c.kind]} ở ${c.key}`, technical: `${c.kind} @${c.at / Q}, độ rõ ${c.strength.toFixed(2)}` },
      confidence: { value: Math.round(c.strength * 100) / 100, basis: 'độ rõ của chỗ dừng (trường độ, dấu lặng/fermata, vị trí phách) do bộ phân tích kết đo' },
      evidence: [`hợp âm ${a.harmony[c.chord]?.reading.rn ?? '?'}`],
    }),
  )
  a.ncts.forEach((n, i) => {
    const ch = a.harmony[n.chord]?.chord
    f.push({
      id: `${ID}#nct-${i + 1}`, module: ID, kind: 'interpretation', topic: 'nốt ngoài hợp âm', at: n.note.start / Q, end: n.note.end / Q, voices: [n.note.lane], value: { kind: n.kind, note: nameOf(n.note) },
      text: { basic: `${NCT_NAME[n.kind]}: ${nameOf(n.note)}`, technical: `${n.kind} ${nameOf(n.note)}${n.note.oct} @${n.note.start / Q}` },
      confidence: { value: Math.round((ch?.fit ?? 0) * 100) / 100, basis: 'độ khớp của hợp âm chứa nốt — nốt ngoài chỉ có nghĩa khi hợp âm được đọc đúng' },
      evidence: [`${nameOf(n.note)} không thuộc hợp âm ${ch ? nameOf(ch.rootName) : '?'}`],
    })
  })
  // how tonal the notes are: share of note duration inside the home key's scale (major, or the union of natural and
  // harmonic minor). Atonal music can still produce well-fitting triads and a "home" key; this is the warning sign.
  let diatonic = 0
  if (a.home) {
    const steps = a.home.minor ? [0, 2, 3, 5, 7, 8, 10, 11] : [0, 2, 4, 5, 7, 9, 11]
    const inScale = (m: number) => steps.includes((((m - a.home!.tonicPc) % 12) + 12) % 12)
    const all = a.score.notes.reduce((x, n) => x + n.end - n.start, 0) || 1
    diatonic = a.score.notes.filter((n) => inScale(n.midi)).reduce((x, n) => x + n.end - n.start, 0) / all
    f.push({
      id: `${ID}#tonality`, module: ID, kind: 'estimate', topic: 'độ điệu tính', value: Math.round(diatonic * 100) / 100,
      text: { basic: `${Math.round(diatonic * 100)}% thời lượng nốt nằm trong âm giai của giọng chính`, technical: `diatonic share ${diatonic.toFixed(2)} trong ${a.home.name}` },
      confidence: { value: 1, basis: 'đếm trực tiếp trên nốt; ngưỡng 0,8 để coi là điệu tính rõ là quy ước của người biên soạn' },
      evidence: [`${a.score.notes.length} nốt`],
    })
  }
  const ambiguous = !a.home || lowFit / Math.max(1, a.harmony.length) > 0.25 || diatonic < 0.8
  return {
    status: ambiguous ? 'AMBIGUOUS' : 'COMPLETED',
    statusReason: ambiguous ? (!a.home ? 'không xác định được giọng chính' : diatonic < 0.8 ? `chỉ ${Math.round(diatonic * 100)}% nốt thuộc âm giai giọng chính — có thể phi điệu tính hoặc chuyển giọng nhiều; đọc giọng và chức năng là giả thuyết` : `${lowFit}/${a.harmony.length} hợp âm khớp kém (fit < 0,6)`) : `${a.harmony.length} hợp âm, ${a.regions.length} vùng giọng, ${a.cadences.length} kết`,
    findings: f,
  }
}

export const harmonyTonal: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.1.0', domain: 'harmony', kind: 'analytical',
    method: 'bộ phân tích /analyze: hợp âm bằng quy hoạch động + Pardo – Birmingham, giọng bằng Viterbi trên 24 giọng, nhãn Nga – Xô viết và số La Mã, nốt ngoài hợp âm, kết',
    limits: ['đo trên 19 hợp xướng Bach (Tymoczko và cs.): gốc hợp âm ~84%, giọng ~77%, hợp âm phụ tìm ra ~38%', 'không phân tích dẫn giọng; không có luận cứ phong cách', 'nhạc phi điệu tính: dùng lăng kính xx của /analyze, không qua mô-đun này'],
  },
  checkInput(input) {
    const n = input.score.voices.reduce((s, v) => s + notesOf(v).length, 0)
    return n ? [] : ['tổng phổ không có nốt']
  },
  analyze(input) {
    // the global key is the analyst's: without it there is no premise for degrees and functions, and none is guessed
    const home = globalKeyOf(input.context)
    if (!home) return { status: 'INSUFFICIENT_DATA', statusReason: 'chưa có giọng chủ — người phân tích chọn giọng chủ trước khi đọc bậc và chức năng', findings: [], missing: ['giọng chủ do người phân tích chọn (context.globalKey)'] }
    const a = analyzeOnce(input.score as Score, home)
    if (a.harmony.length < 2) return { status: 'INSUFFICIENT_DATA', statusReason: 'quá ít hợp âm để đọc giọng và chức năng', findings: [], missing: ['ít nhất hai hợp âm (hoặc một giai điệu đủ dài để đoán hoà âm)'] }
    return tonalFindings(a)
  },
}
