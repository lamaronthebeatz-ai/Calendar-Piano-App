/** Questions with an exact answer (chords of a key, ii–V–I, intervals…), worked out by the calculators' harmony engine. */
import { borrowed, chordNotes, diatonic, interval, jazz, KEYS, name, parse, pc, QUALITIES, SCALES, scaleNotes, secondary, simplify, symbol, up, type Chord, type Note } from '../tools/harmony'
import { fold } from './engine'

export interface Computed {
  lead: string
  table: [string, string][]
  tool: string
}

const NOTE = /(?<![\p{L}])([A-G])(𝄪|##|♯|#|𝄫|bb|♭|b)?(?![a-zà-ỹ])/gu
const CHORD = /(?<![\p{L}])([A-G](?:♯|#|♭|b)?)(maj9|maj7|maj|mMaj7|m7b5|m7♭5|ø7|ø|dim7|°7|dim|°|aug|\+|m9|m7|m6|min|m|7b9|7♭9|7#9|7♯9|7#11|7♯11|7alt|7sus4|sus4|sus2|add9|13|9|7|6)?(?![\p{L}0-9])/gu
const SUFFIX: Record<string, string> = { maj: '', min: 'm', m7b5: 'ø7', 'm7♭5': 'ø7', ø: 'ø7', dim: '°', dim7: '°7', aug: '+', '7b9': '7♭9', '7#9': '7♯9', '7#11': '7♯11' }

const notesIn = (q: string) => [...q.matchAll(NOTE)].map((m) => parse(m[1] + (m[2] ?? ''))!).filter(Boolean)
const chordIn = (q: string): Chord | null => {
  for (const m of q.matchAll(CHORD)) {
    const root = parse(m[1])
    const s = m[2] ?? ''
    const qid = SUFFIX[s] ?? s
    if (root && QUALITIES.some((x) => x.id === qid)) return { root, q: qid }
  }
  return null
}
const row = (c: Chord): [string, string] => [`${c.role ? `${c.role} · ` : ''}${symbol(c)}`, chordNotes(c).map(name).join(' – ')]
const keyIndex = (n: Note) => KEYS.findIndex((k) => pc(k) === pc(n))

const SCALE_WORDS: [RegExp, string][] = [
  [/hoa thanh/, 'harmonic'], [/giai dieu/, 'melodic'], [/dorian/, 'dorian'], [/phrygian/, 'phrygian'], [/lydian/, 'lydian'], [/mixolydian/, 'mixolydian'], [/locrian/, 'locrian'],
  [/ngu cung thu|pentatonic minor/, 'pentam'], [/ngu cung|pentatonic/, 'penta'], [/blues/, 'blues'], [/toan cung|whole/, 'whole'], [/giam|diminished/, 'dimHW'], [/bebop/, 'bebop'],
  [/altered|alt\b/, 'altered'], [/\bthu\b|minor|aeolian/, 'minor'],
]
const scaleOf = (f: string) => SCALES.find((s) => s.id === (SCALE_WORDS.find(([re]) => re.test(f))?.[1] ?? 'major'))!

export function compute(q: string): Computed | null {
  const f = fold(q)
  const notes = notesIn(q)
  const T = notes[0]

  // Interval between two notes.
  if (/quang/.test(f) && notes.length >= 2) {
    const iv = interval(notes[0], notes[1])
    return { lead: `Từ ${name(notes[0])} lên ${name(notes[1])} là quãng **${iv.name}** (${iv.semis} nửa cung). Đảo lại: quãng ${interval(notes[1], notes[0]).name}.`, table: [], tool: '/tools' }
  }

  // Tritone substitute of a dominant.
  if (/tritone|subv|thay the/.test(f) && T) {
    const sub = simplify(up(T, [4, 6]))
    return {
      lead: `Hợp âm thay thế tritone của **${name(T)}7** là **${name(sub)}7**: hai hợp âm chung quãng ba cung (nốt 3 và 7 đổi chỗ cho nhau), bè trầm của ${name(sub)}7 đi nửa cung xuống chủ.`,
      table: [row({ root: T, q: '7', role: 'V7' }), row({ root: sub, q: '7', role: 'subV7' })],
      tool: '/tools',
    }
  }

  // ii–V–I (major and minor) in a key.
  if (/(\bii\W*v\W*i\b|\b2\W*5\W*1\b|251)/.test(f) && T) {
    const [maj, min] = jazz(T)
    const minor = /\bthu\b|minor/.test(f)
    const show = minor ? [min, maj] : [maj, min]
    return { lead: `Vòng **${show[0].title}** ở ${name(T)}: ${show[0].chords.map(symbol).join(' – ')}.`, table: show.flatMap((p) => p.chords.map(row)), tool: '/tools' }
  }

  // Secondary dominants, backdoor, turnarounds, borrowed chords of a key.
  if (/at phu|secondary/.test(f) && T) {
    return { lead: `Át phụ trong ${name(T)} trưởng (V7 của từng bậc, kèm subV):`, table: secondary(T).flatMap((r) => [row(r.dom), row(r.sub)]), tool: '/tools' }
  }
  if (/turnaround|vong quay|backdoor/.test(f) && T) {
    const ps = jazz(T).filter((p) => /Turnaround|Backdoor/.test(p.title))
    return { lead: `Các vòng quay về trong ${name(T)}:`, table: ps.map((p) => [p.title, p.chords.map(symbol).join(' – ')] as [string, string]), tool: '/tools' }
  }
  if (/muon|modal interchange|giong thu cung ten/.test(f) && T) {
    return { lead: `Hợp âm mượn từ ${name(T)} thứ dùng trong ${name(T)} trưởng:`, table: borrowed(T).map(row), tool: '/tools' }
  }

  // Notes of a chord.
  const chord = chordIn(q)
  if (chord && (chord.q || /hop am|not|gom|cau tao|chord/.test(f)) && !/giong|tone|am giai|gam/.test(f)) {
    const ql = QUALITIES.find((x) => x.id === chord.q)!
    return { lead: `**${symbol(chord)}** (${name(chord.root)} ${ql.label}) gồm các nốt **${chordNotes(chord).map(name).join(' – ')}**.`, table: [], tool: '/tools' }
  }

  // Chords of a key.
  if (/hop am/.test(f) && /giong|tone|gam|trong/.test(f) && T) {
    const s = scaleOf(f)
    const seven = /bay|7/.test(f.replace(/[a-g]7/g, ''))
    const cs = diatonic(T, s.ivs.length === 7 ? s : SCALES[0], seven || true)
    const triads = diatonic(T, s.ivs.length === 7 ? s : SCALES[0], false)
    return { lead: `Hợp âm trên các bậc của ${name(T)} ${s.label.toLowerCase()}:`, table: cs.map((c, i) => [`${c.role}`, `${symbol(triads[i])} · ${symbol(c)}`]), tool: '/tools' }
  }

  // Notes of a scale.
  if (/am giai|thang am|\bgam\b|scale|dieu thuc/.test(f) && T) {
    const s = scaleOf(f)
    return { lead: `Âm giai ${name(T)} ${s.label.toLowerCase()}: **${scaleNotes(T, s).map(name).join(' – ')}**.`, table: [], tool: '/tools' }
  }

  // Relative key, key signature.
  if (/song song|tuong ung|relative/.test(f) && T) {
    const minorGiven = /\bthu\b/.test(f)
    const other = minorGiven ? up(T, [2, 3]) : up(T, [5, 9])
    return { lead: minorGiven ? `Giọng trưởng song song của ${name(T)} thứ là **${name(other)} trưởng**.` : `Giọng thứ song song của ${name(T)} trưởng là **${name(other)} thứ**.`, table: [], tool: '/tools' }
  }
  if (/hoa bieu|bao nhieu dau|dau hoa/.test(f) && T) {
    const major = /\bthu\b/.test(f) ? up(T, [2, 3]) : T
    const k = keyIndex(major)
    if (k < 0) return null
    const sig = k === 0 ? 'không có dấu hoá' : k <= 6 ? `${k} dấu thăng` : `${12 - k} dấu giáng`
    return { lead: `Giọng ${name(T)} ${/\bthu\b/.test(f) ? 'thứ' : 'trưởng'} có **${sig}** (cùng hoá biểu với ${name(major)} trưởng).`, table: [], tool: '/tools' }
  }
  return null
}
