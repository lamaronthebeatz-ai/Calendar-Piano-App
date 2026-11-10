/**
 * Chord ear: microphone spectrum → active notes → chord → names (letter + Soviet function) → likely next chords.
 * Pure functions; the page feeds them one analyser frame at a time.
 */

/* ---------- spectrum → notes ---------- */

const LO = 36 // C2
const HI = 96 // C7

export type Frame = { notes: { m: number; a: number }[]; chroma: number[]; bass: number | null; level: number }

/**
 * Semitone spectrum from an analyser's dB bins, then a harmonic sieve: walking up from the bass, every note found
 * removes part of its overtones (octave, twelfth, two octaves…) so that a C3 does not also light G4 and E5.
 */
export function readFrame(db: Float32Array, sampleRate: number, level: number): Frame {
  const binHz = sampleRate / 2 / db.length
  // every bin belongs to its nearest semitone only: overlapping windows made a low G2 also light F♯2
  const s: number[] = Array(HI + 25).fill(0)
  for (let i = Math.ceil(62 / binHz); i < db.length; i++) {
    const m = Math.round(69 + 12 * Math.log2((i * binHz) / 440))
    if (m > HI + 24) break
    const v = 10 ** (db[i] / 20)
    if (v > s[m]) s[m] = v
  }
  let peak = 0
  for (let m = LO; m <= HI; m++) peak = Math.max(peak, s[m])
  const notes: { m: number; a: number }[] = []
  if (peak > 0) {
    for (let m = LO; m <= HI; m++) {
      const a = s[m]
      // loud enough, and not just leakage from a much louder neighbour (a strict local maximum would hide clusters)
      // below G3 two semitones share so few bins that leakage is strong: demand more there
      const r = m < 55 ? 0.85 : 0.5
      if (a < peak * 0.16 || a < (s[m - 1] ?? 0) * r || a < (s[m + 1] ?? 0) * r) continue
      notes.push({ m, a })
      for (let k = 2; k <= 8; k++) {
        const h = m + Math.round(12 * Math.log2(k))
        if (s[h] !== undefined) s[h] = Math.max(0, s[h] - a * (0.9 / k))
      }
    }
  }
  const top = Math.max(0, ...notes.map((n) => n.a))
  const kept = notes.filter((n) => n.a >= top * 0.2)
  const chroma = Array(12).fill(0)
  for (const n of kept) chroma[n.m % 12] += Math.sqrt(n.a)
  const low = kept.find((n) => n.a >= top * 0.3)
  return { notes: kept, chroma, bass: low ? low.m % 12 : null, level }
}

/* ---------- notes → chord ---------- */

export type Quality = 'maj' | 'min' | 'dim' | 'aug' | 'sus4' | 'sus2' | '7' | 'maj7' | 'm7' | 'hdim7' | 'dim7' | '6' | 'm6' | 'add9'
  | '9' | 'maj9' | 'm9' | '7b9' | '7#9' | '7sus4' | '13' | '69' | 'mMaj7'
type Shape = { iv: number[]; steps: number[]; sym: string; fam: 'M' | 'm' | 'd' | 'a' | 's'; seventh?: boolean; fifthOptional?: boolean }

/** Semitones above the root, and the letter steps used to spell each tone (third = 2 letters up…). */
export const SHAPES: Record<Quality, Shape> = {
  maj: { iv: [0, 4, 7], steps: [0, 2, 4], sym: '', fam: 'M' },
  min: { iv: [0, 3, 7], steps: [0, 2, 4], sym: 'm', fam: 'm' },
  dim: { iv: [0, 3, 6], steps: [0, 2, 4], sym: '°', fam: 'd' },
  aug: { iv: [0, 4, 8], steps: [0, 2, 4], sym: '+', fam: 'a' },
  sus4: { iv: [0, 5, 7], steps: [0, 3, 4], sym: 'sus4', fam: 's' },
  sus2: { iv: [0, 2, 7], steps: [0, 1, 4], sym: 'sus2', fam: 's' },
  '7': { iv: [0, 4, 7, 10], steps: [0, 2, 4, 6], sym: '7', fam: 'M', seventh: true, fifthOptional: true },
  maj7: { iv: [0, 4, 7, 11], steps: [0, 2, 4, 6], sym: 'maj7', fam: 'M', seventh: true, fifthOptional: true },
  m7: { iv: [0, 3, 7, 10], steps: [0, 2, 4, 6], sym: 'm7', fam: 'm', seventh: true, fifthOptional: true },
  hdim7: { iv: [0, 3, 6, 10], steps: [0, 2, 4, 6], sym: 'ø7', fam: 'd', seventh: true },
  dim7: { iv: [0, 3, 6, 9], steps: [0, 2, 4, 6], sym: '°7', fam: 'd', seventh: true },
  '6': { iv: [0, 4, 7, 9], steps: [0, 2, 4, 5], sym: '6', fam: 'M' },
  m6: { iv: [0, 3, 7, 9], steps: [0, 2, 4, 5], sym: 'm6', fam: 'm' },
  add9: { iv: [0, 2, 4, 7], steps: [0, 1, 2, 4], sym: 'add9', fam: 'M' },
  // jazz colours: the ninth and thirteenth sit after the seventh so inversion figures still count 1-3-5-7
  '9': { iv: [0, 4, 7, 10, 2], steps: [0, 2, 4, 6, 1], sym: '9', fam: 'M', seventh: true, fifthOptional: true },
  maj9: { iv: [0, 4, 7, 11, 2], steps: [0, 2, 4, 6, 1], sym: 'maj9', fam: 'M', seventh: true, fifthOptional: true },
  m9: { iv: [0, 3, 7, 10, 2], steps: [0, 2, 4, 6, 1], sym: 'm9', fam: 'm', seventh: true, fifthOptional: true },
  '7b9': { iv: [0, 4, 7, 10, 1], steps: [0, 2, 4, 6, 1], sym: '7♭9', fam: 'M', seventh: true, fifthOptional: true },
  '7#9': { iv: [0, 4, 7, 10, 3], steps: [0, 2, 4, 6, 1], sym: '7♯9', fam: 'M', seventh: true, fifthOptional: true },
  '7sus4': { iv: [0, 5, 7, 10], steps: [0, 3, 4, 6], sym: '7sus4', fam: 's', seventh: true, fifthOptional: true },
  '13': { iv: [0, 4, 7, 10, 9], steps: [0, 2, 4, 6, 5], sym: '13', fam: 'M', seventh: true, fifthOptional: true },
  '69': { iv: [0, 4, 7, 9, 2], steps: [0, 2, 4, 5, 1], sym: '6/9', fam: 'M', fifthOptional: true },
  mMaj7: { iv: [0, 3, 7, 11], steps: [0, 2, 4, 6], sym: 'm(maj7)', fam: 'm', seventh: true, fifthOptional: true },
}
/** Dominant-function qualities: any of them answers a way that asks for a "7". */
export const DOM: Quality[] = ['7', '9', '13', '7b9', '7#9', '7sus4']
/** Jazz roman numerals count every root from the major scale of the tonic (♭III, ♭VI… in minor too). */
const JAZZ_ROMAN = ['I', '♭II', 'II', '♭III', 'III', 'IV', '♯IV', 'V', '♭VI', 'VI', '♭VII', 'VII']

export type Chord = { root: number; q: Quality; bass: number }
export type Guess = { chord: Chord | null; sure: boolean; fit: number }

export const sameChord = (a: Chord | null, b: Chord | null) => !!a && !!b && a.root === b.root && a.q === b.q && a.bass === b.bass

/**
 * Template matching on the pitch-class profile. A chord is only named when every tone it needs is heard, most of the
 * energy lies inside it, and no rival reading is about as good — otherwise the guess is "not sure".
 */
export function guessChord(f: Frame): Guess {
  const total = f.chroma.reduce((a, b) => a + b, 0)
  if (total <= 0 || f.notes.length < 2) return { chord: null, sure: false, fit: 0 }
  const c = f.chroma.map((v) => v / total)
  const max = Math.max(...c)
  const heard = (pc: number) => c[pc] >= max * 0.14
  const scored: { chord: Chord; score: number; fit: number }[] = []
  for (let root = 0; root < 12; root++) {
    for (const q of Object.keys(SHAPES) as Quality[]) {
      const sh = SHAPES[q]
      const tones = sh.iv.map((i) => (root + i) % 12)
      const need = sh.fifthOptional ? tones.filter((_, i) => sh.iv[i] !== 7) : tones
      if (!need.every(heard)) continue
      const fit = tones.reduce((a, pc) => a + c[pc], 0)
      const bass = f.bass ?? root
      let score = fit - 0.035 * (tones.length - 3)
      if (bass === root) score += 0.05
      else if (!tones.includes(bass)) score -= 0.08
      scored.push({ chord: { root, q, bass: tones.includes(bass) ? bass : root }, score, fit })
    }
  }
  if (!scored.length) return { chord: null, sure: false, fit: 0 }
  scored.sort((a, b) => b.score - a.score)
  const [best, next] = scored
  const sure = best.fit >= 0.8 && (!next || best.score - next.score >= 0.03)
  return { chord: best.chord, sure, fit: best.fit }
}

/* ---------- keys and spelling ---------- */

export type Key = { tonic: number; minor: boolean }
const MAJOR = [0, 2, 4, 5, 7, 9, 11]
const MINOR = [0, 2, 3, 5, 7, 8, 11] // harmonic minor: the raised seventh makes the dominant
const LETTER_PC = [0, 2, 4, 5, 7, 9, 11]
const LETTERS = 'CDEFGAB'
const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
const ACC = (a: number) => (a > 0 ? '♯'.repeat(a) : a < 0 ? '♭'.repeat(-a) : '')

/** Letter (0–6) of each key's tonic: sharps keys spell up, flat keys down (F♯ major, but E♭ minor). */
const TONIC_LETTER: Record<string, number> = {
  '0M': 0, '1M': 1, '2M': 1, '3M': 2, '4M': 2, '5M': 3, '6M': 3, '7M': 4, '8M': 5, '9M': 5, '10M': 6, '11M': 6,
  '0m': 0, '1m': 0, '2m': 1, '3m': 2, '4m': 2, '5m': 3, '6m': 3, '7m': 4, '8m': 4, '9m': 5, '10m': 6, '11m': 6,
}
const tonicLetter = (k: Key) => TONIC_LETTER[`${k.tonic}${k.minor ? 'm' : 'M'}`]
const alterOf = (pc: number, letter: number) => ((((pc - LETTER_PC[letter]) % 12) + 18) % 12) - 6

export const keyName = (k: Key) => {
  const l = tonicLetter(k)
  return `${SOLFA[l]}${ACC(alterOf(k.tonic, l))} ${k.minor ? 'thứ' : 'trưởng'}`
}
export const ALL_KEYS: Key[] = Array.from({ length: 24 }, (_, i) => ({ tonic: i % 12, minor: i >= 12 }))

/** Root letter inside a key: a scale degree keeps its letter; a chromatic root takes the letter that makes it ♭ in major-flat
 *  contexts or ♯ as a raised degree (♯IV, ♯I…) — the spelling a harmony book would use. */
function rootLetter(pc: number, k: Key): number {
  const scale = k.minor ? MINOR : MAJOR
  const rel = (pc - k.tonic + 12) % 12
  const deg = scale.indexOf(rel)
  const tl = tonicLetter(k)
  if (deg >= 0) return (tl + deg) % 7
  // chromatic: ♭II, ♭III, ♭VI, ♭VII lower the upper degree; ♯IV raises the fourth
  const raised = rel === 6 || (k.minor && rel === 9)
  const d = raised ? scale.findIndex((s) => s === rel - 1) : scale.findIndex((s) => s > rel)
  return (tl + (d < 0 ? 0 : d)) % 7
}

export type Spelled = { letter: string; solfa: string; tones: string[]; bass: string }
export function spell(ch: Chord, k: Key): Spelled {
  const sh = SHAPES[ch.q]
  const rl = rootLetter(ch.root, k)
  const name = (pc: number, l: number) => LETTERS[l] + ACC(alterOf(pc, l))
  const tones = sh.iv.map((iv, i) => name((ch.root + iv) % 12, (rl + sh.steps[i]) % 7))
  const bi = sh.iv.findIndex((iv) => (ch.root + iv) % 12 === ch.bass)
  const bass = bi >= 0 ? tones[bi] : name(ch.bass, rootLetter(ch.bass, k))
  const root = tones[0]
  const solfaRoot = SOLFA[rl] + ACC(alterOf(ch.root, rl))
  const slash = ch.bass !== ch.root ? `/${bass}` : ''
  return { letter: root + sh.sym + slash, solfa: solfaRoot + sh.sym + (slash ? `/${bass}` : ''), tones, bass }
}

/* ---------- function names (Soviet school, as in the library's harmony books) ---------- */

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
export type Reading = { label: string; role: string; jazz: string; deg: number | null; inKey: boolean; isK64?: boolean }

/** Inversion figure: triads 6, 64; seventh chords 7, 65, 43, 2. */
function figure(ch: Chord) {
  const sh = SHAPES[ch.q]
  const pos = sh.iv.findIndex((iv) => (ch.root + iv) % 12 === ch.bass)
  if (sh.seventh) return ['7', '65', '43', '2'][pos] ?? '7'
  if (sh.iv.length === 3 && sh.fam !== 's') return ['', '6', '64'][pos] ?? ''
  return pos > 0 ? ['', '6', '64', '2'][pos] ?? '' : ''
}

export function read(ch: Chord, k: Key): Reading {
  const rel0 = (ch.root - k.tonic + 12) % 12
  return { ...readFn(ch, k), jazz: JAZZ_ROMAN[rel0] + SHAPES[ch.q].sym }
}

function readFn(ch: Chord, k: Key): Omit<Reading, 'jazz'> {
  const sh = SHAPES[ch.q]
  const scale = k.minor ? MINOR : MAJOR
  const rel = (ch.root - k.tonic + 12) % 12
  const deg = scale.indexOf(rel)
  const fig = figure(ch)
  const fam = sh.fam
  const tri = (t: string) => t + fig
  // diatonic triads / sevenths whose quality fits the key
  const diatonic = sh.iv.every((iv) => scale.includes((rel + iv) % 12) || (k.minor && (rel + iv) % 12 === 10 && deg !== 4))
  if (deg === 0 && (fam === 'M' || fam === 'm') && diatonic) {
    if (fig === '64') return { label: 'K64', role: 'Hợp âm sáu – bốn kết (chủ trên âm át)', deg, inKey: true, isK64: true }
    return { label: tri(k.minor ? 't' : 'T'), role: 'Chủ', deg, inKey: true }
  }
  const dom = DOM.includes(ch.q)
  if (deg === 4 && (dom || ch.q === 'maj')) return { label: tri('D'), role: 'Át', deg, inKey: true }
  if (deg === 3 && (fam === 'M' || fam === 'm') && diatonic) return { label: tri(fam === 'm' ? 's' : 'S'), role: 'Hạ át', deg, inKey: true }
  if (diatonic && deg >= 0) {
    const role = deg === 1 ? 'Hạ át (bậc II)' : deg === 5 ? 'Bậc VI (chủ – hạ át)' : deg === 2 ? 'Bậc III' : deg === 6 ? 'Át (bậc VII)' : 'Bậc ' + ROMAN[deg]
    return { label: ROMAN[deg] + fig, role, deg, inKey: true }
  }
  // major key borrowing the minor subdominant
  if (!k.minor && deg === 3 && fam === 'm') return { label: 's' + fig, role: 'Hạ át thứ (mượn)', deg, inKey: true }
  // tritone substitute of the dominant, and the backdoor dominant (♭VII7 → I)
  if (dom && rel === 1) return { label: 'II♭7', role: 'Át thay thế (tritone) của D', deg: null, inKey: true }
  if (!k.minor && dom && rel === 10) return { label: 'VII♭7', role: 'Át cửa sau (backdoor)', deg: null, inKey: true }
  // Neapolitan
  if (rel === 1 && fam === 'M' && !sh.seventh) return { label: 'II♭' + fig, role: 'Hợp âm Napoli', deg: 1, inKey: true }
  // secondary dominants and leading-tone sevenths
  const target = fam === 'd' ? (rel + 1) % 12 : (rel + 5) % 12
  const td = scale.indexOf(target)
  if (td > 0 && ((fam === 'M' && (ch.q === 'maj' || dom)) || ch.q === 'dim7' || ch.q === 'dim')) {
    const name = (fam === 'd' ? 'VII' : 'D') + fig
    return { label: `${name}→${ROMAN[td]}`, role: `Át phụ của bậc ${ROMAN[td]}`, deg: null, inKey: true }
  }
  // secondary tritone substitute: a dominant a semitone above a degree
  const ts = scale.indexOf((rel + 11) % 12)
  if (dom && ts > 0) return { label: `II♭7→${ROMAN[ts]}`, role: `Át thay thế của bậc ${ROMAN[ts]}`, deg: null, inKey: true }
  return { label: '—', role: 'Ngoài giọng', deg: null, inKey: false }
}

/** A chain's key when it starts: the chord as tonic, except a dominant seventh, which points a fifth down — and, when jazz
 *  is in play, a minor seventh, heard as the ii of a major key a tone below (Dm7 → Đô trưởng). */
export function keyFromChord(ch: Chord, style: Style = 'classic'): Key {
  if (style !== 'classic' && (ch.q === 'm7' || ch.q === 'm9')) return { tonic: (ch.root + 10) % 12, minor: false }
  if (DOM.includes(ch.q)) return { tonic: (ch.root + 5) % 12, minor: false }
  if (ch.q === 'dim7' || ch.q === 'dim' || ch.q === 'hdim7') return { tonic: (ch.root + 1) % 12, minor: ch.q !== 'hdim7' }
  return { tonic: ch.root, minor: SHAPES[ch.q].fam === 'm' }
}

/* ---------- where the harmony may go next ---------- */

/** `src`: which body of theory the way comes from; `ref`: the library article that teaches it. */
export type Way = { root: number; fam: Shape['fam'] | 'any'; bassFifth?: boolean; q: Quality; title: string; note: string; src: Src; ref: string }
export type Src = 'classic' | 'jazz' | 'xx'
/** 'both' (stored name kept from the two-style days) = every body of theory at once. */
export type Style = Src | 'both'

const at = (k: Key, deg: number) => (k.tonic + (k.minor ? MINOR : MAJOR)[deg]) % 12
/** Quality of the diatonic triad on a degree (harmonic minor). */
function triadQ(k: Key, deg: number): Quality {
  const s = k.minor ? MINOR : MAJOR
  const r = s[deg]
  const t = (s[(deg + 2) % 7] - r + 12) % 12
  const f = (s[(deg + 4) % 7] - r + 12) % 12
  return t === 4 ? (f === 8 ? 'aug' : 'maj') : f === 6 ? 'dim' : 'min'
}
const way = (k: Key, deg: number, title: string, note: string, ref: string, extra?: Partial<Way>): Way => {
  const q = extra?.q ?? triadQ(k, deg)
  return { root: at(k, deg), fam: SHAPES[q].fam, q, title, note, src: 'classic', ref, ...extra }
}
/** A way named by its root's distance from the tonic (♭VI, ♯IV…), as jazz and modal writing count. */
const byRel = (k: Key, src: Src, rel: number, q: Quality, title: string, note: string, ref: string): Way => ({
  root: (k.tonic + rel + 120) % 12, fam: SHAPES[q].fam, q, title, note, src, ref,
})
const relOf = (ch: Chord, k: Key) => (ch.root - k.tonic + 12) % 12
const rn = (rel: number) => JAZZ_ROMAN[(rel + 120) % 12]

/** The diminished seventh read four ways: each of its notes can be the leading tone of a new tonic. */
function dim7Ways(ch: Chord, k: Key): Way[] {
  return [0, 3, 6, 9].map((n) => {
    const t = (ch.root + n + 1) % 12
    return { root: t, fam: 'any' as const, q: 'maj' as const, title: rn(t - k.tonic), note: `7 giảm đọc trùng âm: nốt ${n ? 'khác' : 'gốc'} làm cảm âm, giải quyết về ${rn(t - k.tonic)}`, src: 'classic' as const, ref: 'hop-am-bay-giam' }
  })
}

/** Common continuations from the chord just heard, in the order a harmony book would teach them. */
function classicWays(ch: Chord, k: Key, r: Reading): Way[] {
  const T = k.minor ? 't' : 'T'
  const S = k.minor ? 's' : 'S'
  const fn = 'chuc-nang-hoa-am'
  if (ch.q === 'aug') {
    // V+ → I: the augmented triad divides the octave in three, so any of its notes may be the raised fifth of a dominant
    return [0, 4, 8].map((n) => byRel(k, 'classic', (ch.root + n + 5 - k.tonic) % 12, 'maj', rn(ch.root + n + 5 - k.tonic), 'Hợp âm ba tăng giải quyết như V+ → I (nốt 5 nâng đi lên)', 'hop-am-ba-tang'))
  }
  if (r.isK64) return [way(k, 4, 'D', 'K64 → D: hai bè đi xuống, chủ âm ở bè trầm giữ nguyên', 'hop-am-sau-bon', { q: 'maj' }), way(k, 4, 'D7', 'K64 → D7: kết trọn sắp tới', 'cau-ket', { q: '7' })]
  // the German sixth sounds as a dominant seventh a semitone above V
  if (r.label === 'II♭7→V') return [way(k, 0, 'K64', '6 tăng (Đức) → K64 → D: tránh quãng 5 song song', 'hop-am-sau-tang', { bassFifth: true }), way(k, 4, 'D', '6 tăng → D: hai nốt quãng 6 tăng mở ra quãng 8', 'hop-am-sau-tang', { q: 'maj' })]
  if (r.label.includes('→') && !r.label.startsWith('II♭7')) {
    const td = ROMAN.indexOf(r.label.split('→')[1])
    const out = [way(k, td, ROMAN[td], `Giải quyết ly điệu về bậc ${ROMAN[td]}`, 'hop-am-at-phu'), way(k, 0, T, 'Bỏ ly điệu, trở về chủ', 'hop-am-at-phu', { fam: 'any' })]
    return ch.q === 'dim7' ? [...out, ...dim7Ways(ch, k).filter((w) => w.root !== out[0].root)] : out
  }
  if (r.label.startsWith('II♭') && !r.label.startsWith('II♭7')) return [way(k, 0, 'K64', 'Napoli → K64 → D', 'hop-am-napoli', { bassFifth: true }), way(k, 4, 'D', 'Napoli → D: kết nửa', 'hop-am-napoli', { q: 'maj' }), way(k, 4, 'D7', 'Napoli → D7', 'hop-am-napoli', { q: '7' })]
  if (r.label.startsWith('s') && !k.minor) return [way(k, 4, 'D', 's → D', fn, { q: 'maj' }), way(k, 0, 'K64', 's → K64', 'hop-am-sau-bon', { bassFifth: true }), way(k, 0, T, 'Kết plagal thứ: s → T', 'hop-am-muon')]
  const toV = [way(k, 1, 'D7→V', 'Át của át: dẫn mạnh về D', 'hop-am-at-phu', { q: '7', fam: 'M' }), byRel(k, 'classic', 6, 'dim7', 'VII7→V', '7 giảm của át (bè trầm đi nửa cung lên bậc V)', 'hop-am-at-phu')]
  switch (r.deg) {
    case 4:
      return [
        way(k, 0, T, 'Kết trọn: D → ' + T, 'cau-ket'),
        way(k, 5, 'VI', 'Kết lừa: D → VI', 'cau-ket'),
        ...(SHAPES[ch.q].seventh ? [] : [way(k, 4, 'D7', 'Thêm quãng 7: tăng sức hút về chủ', 'hop-am-bay', { q: '7' })]),
        ...(k.minor ? [] : [byRel(k, 'classic', 8, 'maj', 'VI♭', 'Kết lừa sang VI hạ (mượn giọng thứ)', 'trung-am-cromatic')]),
      ]
    case 6:
      return ch.q === 'dim7'
        ? [way(k, 0, T, 'Âm dẫn lên chủ: VII7 → ' + T, 'hop-am-cam-am'), way(k, 4, 'D7', 'VII7 → D7', 'hop-am-cam-am', { q: '7' }), ...dim7Ways(ch, k).filter((w) => w.root !== k.tonic)]
        : [way(k, 0, T, 'Âm dẫn lên chủ: VII → ' + T, 'hop-am-cam-am'), way(k, 4, 'D7', 'VII → D7', 'hop-am-cam-am', { q: '7' })]
    case 0:
      return [
        way(k, 3, S, 'Sang hạ át', fn),
        way(k, 4, 'D', 'Sang át', fn, { q: 'maj' }),
        way(k, 5, 'VI', 'Sang bậc VI (quãng 3 xuống)', fn),
        way(k, 1, 'II', 'Bậc II — chuẩn bị át', fn),
        ...(k.minor ? [] : [way(k, 3, 's', 'Hạ át thứ mượn: T → s → T', 'hop-am-muon', { q: 'min' })]),
        way(k, 0, 'D7→IV', 'Thêm 7 thứ: ly điệu sang hạ át', 'hop-am-at-phu', { q: '7', fam: 'M' }),
        ...toV,
      ]
    case 3:
      return [
        way(k, 4, 'D', 'S → D', fn, { q: 'maj' }),
        way(k, 0, 'K64', 'S → K64: chuẩn bị kết', 'hop-am-sau-bon', { bassFifth: true }),
        way(k, 0, T, 'Kết plagal: S → ' + T, 'cau-ket'),
        way(k, 1, 'II', 'Sang bậc II', fn),
        way(k, 4, 'D7', 'S → D7', fn, { q: '7' }),
        ...(k.minor ? [] : [way(k, 3, 's', 'S → s: hạ bậc VI, bè trong đi la – la♭ – sol', 'truong-hoa-am', { q: 'min' })]),
        toV[1],
      ]
    case 1:
      return [way(k, 4, 'D', 'II → D', fn, { q: 'maj' }), way(k, 0, 'K64', 'II → K64', 'hop-am-sau-bon', { bassFifth: true }), way(k, 4, 'D7', 'II → D7', fn, { q: '7' }), toV[1]]
    case 5:
      return [way(k, 1, 'II', 'Vòng quãng 5 đi xuống: VI → II', 'mo-tien-hoa-am'), way(k, 3, S, 'VI → S', fn), way(k, 4, 'D', 'VI → D', fn, { q: 'maj' }), way(k, 5, 'D7→II', 'Thêm 7, nâng quãng 3: VI thành át của II', 'hop-am-at-phu', { q: '7', fam: 'M' })]
    case 2:
      return [way(k, 5, 'VI', 'Vòng quãng 5: III → VI', 'mo-tien-hoa-am'), way(k, 3, S, 'III → S', fn), way(k, 2, 'D7→VI', 'III thành át của VI', 'hop-am-at-phu', { q: '7', fam: 'M' })]
    default:
      return []
  }
}

/** Jazz continuations: ii – V – I and its substitutes, turnarounds, the backdoor, blues, Coltrane, deceptive resolutions. */
function jazzWays(ch: Chord, k: Key, r: Reading): Way[] {
  const j = (rel: number, q: Quality, title: string, note: string, ref: string) => byRel(k, 'jazz', rel, q, title, note, ref)
  const home = k.minor ? j(0, 'm6', 'Im6', 'ii – V – i: về chủ thứ', 'ii-v-i') : j(0, 'maj7', 'Imaj7', 'ii – V – I: về chủ', 'ii-v-i')
  const rel = relOf(ch, k)
  let out: Way[] = []
  if (r.label.startsWith('II♭7→')) {
    const td = ROMAN.indexOf(r.label.split('→')[1])
    out = [{ ...way(k, td, ROMAN[td], `Thay thế tritone: trượt nửa cung xuống bậc ${ROMAN[td]}`, 'thay-the-tritone'), src: 'jazz' }]
  } else if (r.label === 'II♭7') out = [{ ...home, note: 'Thay thế tritone: ♭II7 trượt nửa cung xuống chủ', ref: 'thay-the-tritone' }]
  else if (r.label === 'VII♭7') out = [{ ...home, note: 'Backdoor: ♭VII7 → I', ref: 'thay-the-hop-am' }]
  else if (r.label.startsWith('D') && r.label.includes('→')) {
    const td = ROMAN.indexOf(r.label.split('→')[1])
    const tgt = (at(k, td) - k.tonic + 12) % 12
    out = [
      j(tgt + 1, '7', `♭II7/${ROMAN[td]}`, `Thay thế tritone của át phụ, rồi về bậc ${ROMAN[td]}`, 'thay-the-tritone'),
      j(tgt, '7', `${rn(tgt)}7`, 'Chuỗi át theo quãng 5 (đoạn B của rhythm changes)', 'rhythm-changes'),
      ...(td === 5 && !k.minor ? [{ ...home, note: 'Cửa trước: ii – V của vi nhưng về I', ref: 'thay-the-hop-am' }] : []),
    ]
  } else if (r.label.startsWith('s')) out = [j(10, '7', '♭VII7', 'Backdoor: IVm7 – ♭VII7 – I', 'thay-the-hop-am')]
  else
    switch (r.deg) {
      case 0:
        out = k.minor
          ? [j(8, 'maj7', '♭VImaj7', 'i – ♭VI – iiø – V', 'turnaround-jazz'), j(2, 'hdim7', 'IIø7', 'Mở ii – V – i thứ', 'ii-v-i'), j(5, 'm7', 'IVm7', 'i – iv7', 'blues-12-nhip'), j(8, '7', '♭VI7', 'Blues thứ: ♭VI7 – V7 – i', 'blues-12-nhip'), j(0, 'mMaj7', 'Im(maj7)', 'Line cliché: bè trong đi xuống nửa cung', 'line-cliche')]
          : [
              j(9, '7', 'VI7', 'Turnaround: I – VI7 – II – V', 'turnaround-jazz'),
              j(2, 'm7', 'IIm7', 'Mở ii – V – I', 'ii-v-i'),
              j(5, '7', 'IV7', 'Blues: I7 – IV7', 'blues-12-nhip'),
              j(1, 'dim7', '♯I°7', 'Giảm lướt lên IIm7', 'hop-am-luot-jazz'),
              j(4, 'm7', 'IIIm7', 'iii – VI – ii – V', 'turnaround-jazz'),
              j(11, 'hdim7', 'VIIø7', 'Cửa trước: ii – V của vi', 'thay-the-hop-am'),
              j(3, '7', '♭III7', 'Coltrane: át dẫn sang giọng cách quãng 3 trưởng', 'vong-coltrane'),
            ]
        break
      case 1:
        out = [j(7, '7', 'V7', 'ii – V', 'ii-v-i'), j(1, '7', '♭II7', 'ii – ♭II7 – I: thay thế tritone', 'thay-the-tritone'), j(2, '7', 'II7', 'ii thành V của V', 'tai-hoa-am'), j(7, '7sus4', 'V7sus4', 'Hợp âm sus thay cả cặp ii – V', 'ket-lua-va-tiep-can-hop-am')]
        break
      case 4:
        out = [home, j(4, 'm7', 'IIIm7', 'Kết lừa kiểu jazz: V7 → IIIm7', 'ket-lua-va-tiep-can-hop-am'), j(9, 'm7', 'VIm7', 'Kết lừa: V7 → VIm7', 'ket-lua-va-tiep-can-hop-am'), j(0, '7', 'I7', 'Blues: ii – V – I7 ở ô 9 – 11', 'blues-12-nhip')]
        break
      case 3:
        out = k.minor ? [j(7, '7', 'V7', 'iv – V7', 'ii-v-i')] : [j(5, 'm7', 'IVm7', 'IV – IVm7: thứ hoá, sắp về chủ', 'thay-the-hop-am'), j(6, 'hdim7', '♯IVø7', 'IV – ♯IVø7 – I64', 'hop-am-luot-jazz'), j(0, '7', 'I7', 'Blues: IV7 → I7', 'blues-12-nhip')]
        break
      case 5:
        out = [j(2, '7', 'II7', 'VI – II7 – V: át của át', 'turnaround-jazz'), j(2, 'm7', 'IIm7', 'I – vi – ii – V', 'turnaround-jazz')]
        break
      case 2:
        out = [j(9, '7', 'VI7', 'iii – VI7 – ii – V', 'turnaround-jazz'), j(3, 'dim7', '♭III°7', 'Giảm lướt xuống IIm7', 'turnaround-jazz'), j(3, 'm7', '♭IIIm7', 'Chuỗi ii – V đi xuống cromatic', 'blues-12-nhip')]
        break
      case 6:
        if (ch.q === 'hdim7') out = [j(4, '7', 'III7', 'Cửa trước: iiø – V của vi', 'thay-the-hop-am')]
        break
    }
  // any dominant also goes down a fifth, slides a semitone down (tritone resolution) or, Strayhorn's way, up a major third
  if (DOM.includes(ch.q)) {
    const more = [
      j(rel + 5, 'maj7', `${rn(rel + 5)}maj7`, 'Át giải quyết xuống quãng 5', 'ii-v-i'),
      j(rel - 1, 'maj7', `${rn(rel - 1)}maj7`, 'Tiếp cận nửa cung: át trượt xuống', 'hop-am-luot-jazz'),
      j(rel + 4, 'maj7', `${rn(rel + 4)}maj7`, 'Kết lừa kiểu Strayhorn: lên quãng 3 trưởng', 'ket-lua-va-tiep-can-hop-am'),
    ]
    out = [...out, ...more.filter((w) => !out.some((x) => x.root === w.root))]
  }
  return out
}

/**
 * Twentieth-century ways, counted from the chord itself (it needs no key): Neo-Riemann P, L, R; chromatic mediants;
 * the modal cadences and colour chords; planing; the tritone relation Persichetti calls ambiguous.
 */
function xxWays(ch: Chord, k: Key): Way[] {
  const fam = SHAPES[ch.q].fam
  if (fam !== 'M' && fam !== 'm') return []
  const rel = relOf(ch, k)
  // named from the tonic like every other way (P, L, R keep their Neo-Riemann names)
  const x = (n: number, q: Quality, title: string, note: string, ref: string): Way => ({
    root: (ch.root + n + 120) % 12, fam: SHAPES[q].fam, q, title: /^[PLR]$/.test(title) ? title : rn(rel + n) + (SHAPES[q].fam === 'm' ? 'm' : ''), note, src: 'xx', ref,
  })
  const out: Way[] = []
  // colour chords of a mode, heard against the key
  if (fam === 'M' && !k.minor && rel === 10) out.push(x(2, 'maj', 'I', 'Mixolydian: ♭VII – I', 'hoa-am-dieu-thuc'), x(7, 'maj', 'IV', 'Plagal kép: ♭VII – IV – I', 'hoa-am-pop'))
  if (fam === 'M' && !k.minor && rel === 8) out.push(x(2, 'maj', '♭VII', 'I – ♭VI – ♭VII – I: "kết anh hùng"', 'hop-am-muon'), x(-3, 'maj', 'IV', 'I – ♭VI – IV', 'hop-am-muon'))
  if (fam === 'M' && !k.minor && rel === 2) out.push(x(3, 'maj', 'IV', 'Lydian: kết II – IV – I', 'hoa-am-dieu-thuc'))
  if (fam === 'M' && k.minor && rel === 1) out.push(x(-1, 'min', 'i', 'Kết Phrygian: ♭II – i', 'hoa-am-dieu-thuc'))
  if (fam === 'M' && k.minor && rel === 5) out.push(x(-5, 'min', 'i', 'Dorian: IV – i (con thoi Dorian)', 'hoa-am-dieu-thuc'))
  if (fam === 'm' && !k.minor && rel === 5) out.push(x(-5, 'maj', 'I', 'Plagal sigh: IV – iv – I', 'hoa-am-pop'))
  if (fam === 'M')
    out.push(
      x(0, 'min', 'P', 'Neo-Riemann P: quãng 3 hạ nửa cung, trưởng → thứ', 'neo-riemann'),
      x(4, 'min', 'L', 'Neo-Riemann L: nốt gốc đi xuống nửa cung', 'neo-riemann'),
      x(-3, 'min', 'R', 'Neo-Riemann R: nốt 5 đi lên một cung', 'neo-riemann'),
      x(-4, 'maj', '♭VI', 'Trung âm cromatic: quãng 3 trưởng xuống, chung một nốt', 'trung-am-cromatic'),
      x(4, 'maj', 'III', 'Trung âm cromatic: quãng 3 trưởng lên', 'trung-am-cromatic'),
      x(3, 'maj', '♭III', 'Trung âm cromatic: quãng 3 thứ lên', 'trung-am-cromatic'),
      x(-3, 'maj', 'VI', 'Trung âm cromatic: quãng 3 thứ xuống', 'trung-am-cromatic'),
      x(-2, 'maj', '♭VII', 'Mixolydian ♭VII / song song đi xuống một cung', 'hoa-am-dieu-thuc'),
      x(2, 'maj', 'II', 'Lydian I – II / song song thực đi lên', 'hoa-am-song-song'),
      x(6, 'maj', '♯IV', 'Gốc cách tritone: hướng mơ hồ', 'persichetti-huong-hoa-am'),
    )
  else
    out.push(
      x(0, 'maj', 'P', 'Neo-Riemann P: quãng 3 nâng nửa cung, thứ → trưởng', 'neo-riemann'),
      x(-4, 'maj', 'L', 'Neo-Riemann L: nốt 5 đi lên nửa cung', 'neo-riemann'),
      x(3, 'maj', 'R', 'Neo-Riemann R: nốt gốc đi xuống một cung', 'neo-riemann'),
      x(5, 'maj', 'IV', 'Dorian: i – IV trưởng', 'hoa-am-dieu-thuc'),
      x(8, 'maj', '♭VI', 'Aeolian: i – ♭VI – ♭VII', 'hoa-am-dieu-thuc'),
      x(10, 'maj', '♭VII', 'Aeolian: i – ♭VII', 'hoa-am-dieu-thuc'),
      x(1, 'maj', '♭II', 'Phrygian: i ↔ ♭II', 'hoa-am-dieu-thuc'),
      x(4, 'min', 'iii', 'Trung âm cromatic (thứ – thứ): quãng 3 trưởng lên', 'trung-am-cromatic'),
      x(-4, 'min', '♭vi', 'Trung âm cromatic (thứ – thứ): quãng 3 trưởng xuống', 'trung-am-cromatic'),
      x(6, 'min', '♯iv', 'Gốc cách tritone: hướng mơ hồ', 'persichetti-huong-hoa-am'),
    )
  // the key's own colour chords first; a way to the same chord is offered once
  return out.filter((w, i) => out.findIndex((y) => y.root === w.root && y.fam === w.fam) === i).slice(0, 10)
}

const sameWay = (a: Way, b: Way) => a.root === b.root && a.fam === b.fam && DOM.includes(a.q) === DOM.includes(b.q) && !!a.bassFifth === !!b.bassFifth

/** Ways forward in the chosen style; "both" takes from each body of theory in turn, the same way only once. */
export function nextWays(ch: Chord, k: Key, style: Style = 'both'): Way[] {
  const r = read(ch, k)
  const lists = { classic: classicWays(ch, k, r), jazz: jazzWays(ch, k, r), xx: xxWays(ch, k) }
  if (style !== 'both') return lists[style]
  const out: Way[] = []
  for (let i = 0; out.length < 10 && i < 12; i++)
    for (const l of [lists.classic, lists.jazz, lists.xx]) if (l[i] && !out.some((x) => sameWay(x, l[i])) && out.length < 10) out.push(l[i])
  return out
}

/** Did the chord just heard take one of the ways? */
export function takes(w: Way, ch: Chord, k: Key): boolean {
  if (ch.root !== w.root) return false
  if (w.bassFifth) return ch.bass === (k.tonic + 7) % 12
  if (w.fam === 'any') return true
  const fam = SHAPES[ch.q].fam
  if (DOM.includes(w.q)) return DOM.includes(ch.q)
  return fam === w.fam || (w.fam === 'M' && fam === 's')
}
