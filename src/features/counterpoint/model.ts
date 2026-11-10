/**
 * Strict-style counterpoint: pitches, keys, intervals in Taneyev numbers, and the shifted versions of a combination.
 * Rules come from the library's "Phức điệu nghiêm khắc" book (Phạm Tú Hương, Nhạc viện Hà Nội 1991, after Taneyev):
 * khai-niem-va-quy-uoc-phuc-dieu, doi-vi-don-gian-hai-be, doi-vi-chuyen-dong-chieu-doc.
 */

/** A written pitch: diatonic step from C0 (C4 = 28), alteration, and the sounding MIDI number. */
export type Pitch = { step: number; alter: number; midi: number }
/** One notated segment of a voice; a note crossing a barline or held over a beat is two segments joined by `tied`. */
export type Seg = { start: number; dur: number; p: Pitch; tied?: boolean }
/** A sounding note: tied segments merged. */
export type Note = { start: number; dur: number; p: Pitch }

const NAT = [0, 2, 4, 5, 7, 9, 11]
export const LETTERS = 'CDEFGAB'
export const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
export const pitch = (step: number, alter = 0): Pitch => ({ step, alter, midi: 12 * (Math.floor(step / 7) + 1) + NAT[((step % 7) + 7) % 7] + alter })
export const letterOf = (p: Pitch) => ((p.step % 7) + 7) % 7
export const octaveOf = (p: Pitch) => Math.floor(p.step / 7)
const ACC = (a: number) => (a > 0 ? '♯'.repeat(a) : a < 0 ? '♭'.repeat(-a) : '')
export const pitchName = (p: Pitch, solfa = true) => (solfa ? SOLFA[letterOf(p)] : LETTERS[letterOf(p)]) + ACC(p.alter) + octaveOf(p)

/* ---------- keys ---------- */

/** A key: tonic step class (0–6), tonic alteration, and mode; the scale is the key signature's seven notes. */
/** `sig` overrides the signature for the old modes (Rê Dorian = no sharps or flats, final Rê). */
export type Key = { tonic: number; alter: number; minor: boolean; sig?: number; mode?: string }
const SHARPS = [3, 0, 4, 1, 5, 2, 6] // F C G D A E B
const FLATS = [6, 2, 5, 1, 4, 0, 3] // B E A D G C F
/** Number of sharps (+) or flats (−) in the key signature. */
export function keySig(k: Key): number {
  if (k.sig !== undefined) return k.sig
  const pc = (NAT[k.tonic] + k.alter + 120) % 12
  const majorPc = k.minor ? (pc + 3) % 12 : pc
  const byPc: Record<number, number> = { 0: 0, 7: 1, 2: 2, 9: 3, 4: 4, 11: 5, 6: 6, 1: 7, 5: -1, 10: -2, 3: -3, 8: -4 }
  let n = byPc[majorPc]
  // spell by the tonic letter: G♭ major is 6 flats, F♯ major 6 sharps
  const majorLetter = k.minor ? (k.tonic + 2) % 7 : k.tonic
  if (n === 6 && majorLetter === 4) n = -6
  if (n === 7 && majorLetter === 1) n = -5
  if (n === 5 && majorLetter === 0) n = -7 // C♭ major
  return n
}
/** Alteration a key signature gives to a letter. */
export function sigAlter(sig: number, letter: number): number {
  if (sig > 0) return SHARPS.slice(0, sig).includes(letter) ? 1 : 0
  if (sig < 0) return FLATS.slice(0, -sig).includes(letter) ? -1 : 0
  return 0
}
/** The key's own pitch on a diatonic step. */
export const inKey = (k: Key, step: number) => pitch(step, sigAlter(keySig(k), ((step % 7) + 7) % 7))
export const keyName = (k: Key) => `${SOLFA[k.tonic]}${ACC(k.alter)} ${k.mode ?? (k.minor ? 'thứ' : 'trưởng')}`

/* ---------- intervals (Taneyev numbers: the count of seconds, unison = 0, octave = 7) ---------- */

export type Kind = 'perfect' | 'imperfect' | 'dissonant'
export type Interval = { n: number; semis: number; kind: Kind; name: string; quality: number }

/** Upper minus lower. In two voices the perfect fourth is a dissonance (doi-vi-don-gian-hai-be §3). */
export function interval(upper: Pitch, lower: Pitch): Interval {
  const n = upper.step - lower.step
  const semis = upper.midi - lower.midi
  const simple = ((n % 7) + 7) % 7
  const oct = Math.floor(n / 7)
  const quality = semis - 12 * oct - NAT[simple]
  let kind: Kind = 'dissonant'
  if (simple === 0 && quality === 0) kind = 'perfect'
  else if (simple === 4 && quality === 0) kind = 'perfect'
  else if ((simple === 2 || simple === 5) && (quality === 0 || quality === -1)) kind = 'imperfect'
  // the printed number is the traditional one (Taneyev number + 1); + / − mark augmented and diminished
  const perfectish = simple === 0 || simple === 3 || simple === 4
  const mark = perfectish ? (quality > 0 ? '+' : quality < 0 ? '−' : '') : quality > 0 ? '+' : quality < -1 ? '−' : ''
  return { n, semis, kind, quality, name: `${n + 1}${mark}` }
}
export const isPerfect = (i: Interval) => i.kind === 'perfect'
export const consonant = (i: Interval) => i.kind !== 'dissonant'
/** Unison/octave class or fifth class, for parallels. */
export const perfectClass = (i: Interval) => (i.kind !== 'perfect' ? null : ((i.n % 7) + 7) % 7 === 0 ? 'octave' : 'fifth')

/** Melodic step quality: a melodic interval is usable only if consonant or a major/minor second (giai-dieu §2). */
export function melodicOk(from: Pitch, to: Pitch): { ok: boolean; why?: string } {
  const n = to.step - from.step
  const a = Math.abs(n)
  if (a === 0) return { ok: true }
  const up = n > 0 ? to : from
  const lo = n > 0 ? from : to
  const iv = interval(up, lo)
  if (a > 7) return { ok: false, why: 'nhảy rộng hơn quãng 8' }
  if (a === 6) return { ok: false, why: 'nhảy quãng 7' }
  if (a === 1) return iv.quality === 0 || iv.quality === -1 ? { ok: true } : { ok: false, why: 'quãng 2 tăng' }
  if (a === 3) return iv.quality === 0 ? { ok: true } : { ok: false, why: iv.quality > 0 ? 'nhảy quãng 4 tăng' : 'nhảy quãng 4 giảm' }
  if (iv.kind === 'dissonant') return { ok: false, why: `nhảy quãng ${iv.name}` }
  return { ok: true }
}

/* ---------- versions (nguyên thể / biến thể) ---------- */

/**
 * A version shifts voice I (upper in the original) and voice II (lower) by a number of steps with Taneyev's signs:
 * − brings the two voices closer, + takes them apart (I up = +, II up = −). Iv = I + II.
 * The shift is an exact transposition by the key's own interval (C down 4 steps = F, a perfect fifth), so both voices
 * move into one new key when I + II is a multiple of −7, and into related keys otherwise (doi-vi-chuyen-dong-chieu-doc).
 */
export type Shift = { I: number; II: number }
export const ivOf = (s: Shift) => s.I + s.II

function transposeBy(k: Key, steps: number): (p: Pitch) => Pitch {
  if (steps === 0) return (p) => p
  const t = inKey(k, 28 + k.tonic)
  const target = inKey(k, 28 + k.tonic + steps)
  const semis = target.midi - t.midi
  return (p) => {
    const step = p.step + steps
    const midi = p.midi + semis
    const nat = pitch(step, 0).midi
    return { step, alter: midi - nat, midi }
  }
}
/** Signed step movement of each voice for a shift: I moves by +I, II moves by −II. */
export const voiceSteps = (s: Shift) => ({ upper: s.I, lower: -s.II })

/** The key a voice lands in after its shift. */
export function shiftedKey(k: Key, steps: number): Key {
  const t = transposeBy(k, steps)(inKey(k, 28 + k.tonic))
  const out: Key = { tonic: letterOf(t), alter: t.alter, minor: k.minor, mode: k.mode }
  if (k.sig !== undefined) {
    // a mode keeps its shape: the signature moves with the final (each fifth up adds a sharp)
    const fifths = [0, 2, 4, -1, 1, 3, 5] // from C: D +2, E +4, F −1, G +1, A +3, B +5
    const from = fifths[k.tonic] + 7 * k.alter
    const to = fifths[out.tonic] + 7 * out.alter
    out.sig = k.sig + (to - from)
  }
  return out
}

/** How the voices stand in a version: change places (chuyển chỗ), come closer (chuyển gần) or move apart (chuyển xa). */
export type Motion = 'swap' | 'near' | 'far'
export type Version = { shift: Shift; label: string; motion: Motion; I: Seg[]; II: Seg[]; keyI: Key; keyII: Key }
/** Build a version: transposed copies of both voices. In a swap, voice II sounds above voice I. */
export function makeVersion(k: Key, I: Seg[], II: Seg[], shift: Shift, label: string, motion: Motion): Version {
  const v = voiceSteps(shift)
  const tI = transposeBy(k, v.upper)
  const tII = transposeBy(k, v.lower)
  return {
    shift,
    label,
    motion,
    I: I.map((s) => ({ ...s, p: tI(s.p) })),
    II: II.map((s) => ({ ...s, p: tII(s.p) })),
    keyI: shiftedKey(k, v.upper),
    keyII: shiftedKey(k, v.lower),
  }
}
/** Upper and lower voice of a version. */
export const upperLower = (v: Version) => (v.motion === 'swap' ? { upper: v.II, lower: v.I } : { upper: v.I, lower: v.II })

/* ---------- time ---------- */

export type Meter = { num: number; den: 2 | 4 }
/** Quarter notes per bar and per beat. */
export const barQ = (m: Meter) => m.num * (4 / m.den)
export const beatQ = (m: Meter) => 4 / m.den
/** 3 = first beat of the bar, 2 = another beat (or the half-bar of 4/2), 1 = between beats. */
export function strength(m: Meter, t: number): 1 | 2 | 3 {
  const o = t % barQ(m)
  if (o === 0) return 3
  return o % beatQ(m) === 0 ? 2 : 1
}

/** Merge tied segments into sounding notes. */
export function notesOf(segs: Seg[]): Note[] {
  const out: Note[] = []
  for (const s of segs) {
    const last = out[out.length - 1]
    if (s.tied && last && last.p.midi === s.p.midi && last.start + last.dur === s.start) last.dur += s.dur
    else out.push({ start: s.start, dur: s.dur, p: s.p })
  }
  return out
}
/** The sounding note of a voice at time t, if any. */
export function noteAt(notes: Note[], t: number): Note | undefined {
  let lo = 0
  let hi = notes.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const n = notes[mid]
    if (t < n.start) hi = mid - 1
    else if (t >= n.start + n.dur) lo = mid + 1
    else return n
  }
  return undefined
}
