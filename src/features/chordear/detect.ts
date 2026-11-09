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
      if (a < peak * 0.16 || a < (s[m - 1] ?? 0) * 0.5 || a < (s[m + 1] ?? 0) * 0.5) continue
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
}

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
export type Reading = { label: string; role: string; deg: number | null; inKey: boolean; isK64?: boolean }

/** Inversion figure: triads 6, 64; seventh chords 7, 65, 43, 2. */
function figure(ch: Chord) {
  const sh = SHAPES[ch.q]
  const pos = sh.iv.findIndex((iv) => (ch.root + iv) % 12 === ch.bass)
  if (sh.seventh) return ['7', '65', '43', '2'][pos] ?? '7'
  if (sh.iv.length === 3 && sh.fam !== 's') return ['', '6', '64'][pos] ?? ''
  return pos > 0 ? ['', '6', '64', '2'][pos] ?? '' : ''
}

export function read(ch: Chord, k: Key): Reading {
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
  if (deg === 4 && fam === 'M' && !['maj7', '6', 'add9'].includes(ch.q)) return { label: tri('D'), role: 'Át', deg, inKey: true }
  if (deg === 3 && (fam === 'M' || fam === 'm') && diatonic) return { label: tri(fam === 'm' ? 's' : 'S'), role: 'Hạ át', deg, inKey: true }
  if (diatonic && deg >= 0) {
    const role = deg === 1 ? 'Hạ át (bậc II)' : deg === 5 ? 'Bậc VI (chủ – hạ át)' : deg === 2 ? 'Bậc III' : deg === 6 ? 'Át (bậc VII)' : 'Bậc ' + ROMAN[deg]
    return { label: ROMAN[deg] + fig, role, deg, inKey: true }
  }
  // major key borrowing the minor subdominant
  if (!k.minor && deg === 3 && fam === 'm') return { label: 's' + fig, role: 'Hạ át thứ (mượn)', deg, inKey: true }
  // Neapolitan
  if (rel === 1 && fam === 'M' && !sh.seventh) return { label: 'II♭' + fig, role: 'Hợp âm Napoli', deg: 1, inKey: true }
  // secondary dominants and leading-tone sevenths
  const target = fam === 'd' ? (rel + 1) % 12 : (rel + 5) % 12
  const td = scale.indexOf(target)
  if (td > 0 && (fam === 'M' && (ch.q === 'maj' || ch.q === '7') || ch.q === 'dim7' || ch.q === 'dim')) {
    const name = (fam === 'd' ? 'VII' : 'D') + fig
    return { label: `${name}→${ROMAN[td]}`, role: `Át phụ của bậc ${ROMAN[td]}`, deg: null, inKey: true }
  }
  return { label: '—', role: 'Ngoài giọng', deg: null, inKey: false }
}

/** A chain's key when it starts: the chord as tonic, except a dominant seventh, which points a fifth down. */
export function keyFromChord(ch: Chord): Key {
  if (ch.q === '7') return { tonic: (ch.root + 5) % 12, minor: false }
  if (ch.q === 'dim7' || ch.q === 'dim' || ch.q === 'hdim7') return { tonic: (ch.root + 1) % 12, minor: ch.q !== 'hdim7' }
  return { tonic: ch.root, minor: SHAPES[ch.q].fam === 'm' }
}

/* ---------- where the harmony may go next ---------- */

export type Way = { root: number; fam: Shape['fam'] | 'any'; bassFifth?: boolean; q: Quality; title: string; note: string }

const at = (k: Key, deg: number) => (k.tonic + (k.minor ? MINOR : MAJOR)[deg]) % 12
/** Quality of the diatonic triad on a degree (harmonic minor). */
function triadQ(k: Key, deg: number): Quality {
  const s = k.minor ? MINOR : MAJOR
  const r = s[deg]
  const t = (s[(deg + 2) % 7] - r + 12) % 12
  const f = (s[(deg + 4) % 7] - r + 12) % 12
  return t === 4 ? (f === 8 ? 'aug' : 'maj') : f === 6 ? 'dim' : 'min'
}
const way = (k: Key, deg: number, title: string, note: string, extra?: Partial<Way>): Way => {
  const q = extra?.q ?? triadQ(k, deg)
  return { root: at(k, deg), fam: SHAPES[q].fam, q, title, note, ...extra }
}

/** Common continuations from the chord just heard, in the order a harmony book would teach them. */
export function nextWays(ch: Chord, k: Key): Way[] {
  const r = read(ch, k)
  const T = k.minor ? 't' : 'T'
  if (r.isK64) return [way(k, 4, 'D', 'K64 → D: hai bè đi xuống, chủ âm ở bè trầm giữ nguyên', { q: 'maj' }), way(k, 4, 'D7', 'K64 → D7: kết trọn sắp tới', { q: '7' })]
  if (r.label.includes('→')) {
    const td = ROMAN.indexOf(r.label.split('→')[1])
    return [way(k, td, ROMAN[td], `Giải quyết ly điệu về bậc ${ROMAN[td]}`), way(k, 0, T, 'Bỏ ly điệu, trở về chủ', { fam: 'any' })]
  }
  if (r.label.startsWith('II♭')) return [way(k, 0, 'K64', 'Napoli → K64 → D', { bassFifth: true }), way(k, 4, 'D', 'Napoli → D: kết nửa', { q: 'maj' }), way(k, 4, 'D7', 'Napoli → D7', { q: '7' })]
  switch (r.deg) {
    case 4:
      return [
        way(k, 0, T, 'Kết trọn: D → ' + T),
        way(k, 5, 'VI', 'Kết ngắt (kết lừa): D → VI'),
        ...(SHAPES[ch.q].seventh ? [] : [way(k, 4, 'D7', 'Thêm quãng 7: tăng sức hút về chủ', { q: '7' })]),
      ]
    case 6:
      return [way(k, 0, T, 'Âm dẫn lên chủ: VII → ' + T), way(k, 4, 'D7', 'VII → D7', { q: '7' })]
    case 0:
      return [
        way(k, 3, k.minor ? 's' : 'S', 'Sang hạ át'),
        way(k, 4, 'D', 'Sang át', { q: 'maj' }),
        way(k, 5, 'VI', 'Sang bậc VI (quãng 3 xuống)'),
        way(k, 1, 'II', 'Bậc II — chuẩn bị át'),
        way(k, 0, 'D7→IV', 'Thêm 7 thứ: ly điệu sang hạ át', { q: '7', fam: 'M' }),
      ]
    case 3:
      return [
        way(k, 4, 'D', 'S → D', { q: 'maj' }),
        way(k, 0, 'K64', 'S → K64: chuẩn bị kết', { bassFifth: true }),
        way(k, 0, T, 'Kết plagal: S → ' + T),
        way(k, 1, 'II', 'Sang bậc II'),
      ]
    case 1:
      return [way(k, 4, 'D', 'II → D', { q: 'maj' }), way(k, 0, 'K64', 'II → K64', { bassFifth: true }), way(k, 4, 'D7', 'II → D7', { q: '7' })]
    case 5:
      return [way(k, 1, 'II', 'Vòng quãng 5 đi xuống: VI → II'), way(k, 3, k.minor ? 's' : 'S', 'VI → S'), way(k, 4, 'D', 'VI → D', { q: 'maj' })]
    case 2:
      return [way(k, 5, 'VI', 'Vòng quãng 5: III → VI'), way(k, 3, k.minor ? 's' : 'S', 'III → S')]
    default:
      return []
  }
}

/** Did the chord just heard take one of the ways? */
export function takes(w: Way, ch: Chord, k: Key): boolean {
  if (ch.root !== w.root) return false
  if (w.bassFifth) return ch.bass === (k.tonic + 7) % 12
  if (w.fam === 'any') return true
  const fam = SHAPES[ch.q].fam
  if (w.q === '7') return ch.q === '7'
  return fam === w.fam || (w.fam === 'M' && fam === 's')
}
