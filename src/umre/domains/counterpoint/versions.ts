import type { MVersion } from '../../../features/counterpoint/multi'
import type { VersionSpec } from '../../../features/counterpoint/rules'
import { transpose, type Interval } from '../../repr/interval'
import { diatonic, fromDiatonic, NATURAL, type Letter, type Pitch } from '../../repr/pitch'
import { add, fromQuarters, type Rational } from '../../repr/rational'
import { endOf, scoreEnd, type MusicEvent, type Score, type Voice } from '../../repr/score'
import { signatureAlter } from '../../repr/tonal'

/**
 * The versions (biến thể) of a counterpoint combination, built on the UMRE representation with code of its own —
 * not features/counterpoint/model.ts — so that the vertical rules can be checked in every version without the
 * solver's version builder. The MEANING of a version spec is the counterpoint module's data format (Phạm Tú Hương
 * tr. 13–36):
 *  - a vertical shift moves a voice by N steps as an EXACT transposition by the key's own interval from the tonic
 *    to the note N steps above it (C down 4 steps = F, a perfect fifth);
 *  - Taneyev's signs: voice I moves by +I, voice II by −II; in a "swap" voice II sounds above voice I;
 *  - `ih` delays voice I by that many quarters (negative: voice II is delayed);
 *  - `mirror` inverts both voices around the key's axis (major: degree II, minor: degree IV), an altered note
 *    mirrors to the opposite alteration, and the voices change places.
 */
export type KeyInfo = { readonly tonic: Letter; readonly fifths: number; readonly minor: boolean }

/** Key facts the versions need, from the score (signature) and the kept counterpoint key (minor flag). */
export function keyInfo(s: Score): KeyInfo {
  const kept = (s.ext?.counterpoint as { key?: { tonic: number; minor: boolean } } | undefined)?.key
  const k = s.keys?.[0]?.key
  const tonic = (kept?.tonic ?? k?.tonic.letter ?? 0) as Letter
  const minor = kept ? kept.minor : !!k && /minor|aeolian/.test(k.mode)
  return { tonic, fifths: s.keySignatures[0]?.fifths ?? 0, minor }
}

/** The pitch the key's signature gives on a diatonic position (C4 = 28). */
const inKey = (k: KeyInfo, d: number): Pitch => {
  const letter = (((d % 7) + 7) % 7) as Letter
  return fromDiatonic(d, signatureAlter(k.fifths, letter))
}
const midiOf = (p: Pitch) => 12 * (p.octave + 1) + NATURAL[p.letter] + p.alter

/** The interval a voice is transposed by for a shift of `steps` (the key's own interval from the tonic). */
export function shiftInterval(k: KeyInfo, steps: number): Interval {
  const from = inKey(k, 28 + k.tonic)
  const to = inKey(k, 28 + k.tonic + steps)
  return { steps, semitones: midiOf(to) - midiOf(from) }
}

/** Mirror around the key's axis, the axis octave chosen in the middle of the material. */
export function mirrorFn(k: KeyInfo, all: Pitch[]): (p: Pitch) => Pitch {
  const axisClass = (k.tonic + (k.minor ? 3 : 1)) % 7
  const ds = all.map(diatonic)
  const mid = ds.length ? (Math.min(...ds) + Math.max(...ds)) / 2 : 28
  const axis = axisClass + 7 * Math.round((mid - axisClass) / 7)
  return (p) => {
    const d = diatonic(p)
    const dev = p.alter - inKey(k, d).alter
    const m = 2 * axis - d
    return fromDiatonic(m, inKey(k, m).alter - dev)
  }
}

function mapVoice(v: Voice, id: string, f: (p: Pitch) => Pitch, delay: Rational): Voice {
  return {
    ...v, id,
    events: v.events.map((e): MusicEvent => (e.kind === 'note' ? { ...e, id: `${id}:${e.id}`, onset: add(e.onset, delay), pitch: f(e.pitch) } : { ...e, id: `${id}:${e.id}`, onset: add(e.onset, delay) })),
  }
}

/** A version as a two-voice UMRE score, upper voice first. */
export type VersionTexture = { readonly label: string; readonly score: Score; readonly end: Rational }

const retexture = (s: Score, voices: Voice[], label: string): VersionTexture => {
  const sc: Score = { ...s, id: `${s.id}·${label}`, voices, staves: s.staves.slice(0, voices.length).map((st, i) => ({ ...st, id: `vst${i}` })), end: undefined }
  const fixed: Score = { ...sc, voices: voices.map((v, i) => ({ ...v, staff: `vst${i}` })) }
  const end = voices.reduce((t, v) => v.events.reduce((u, e) => (endOf(e).n / endOf(e).d > u.n / u.d ? endOf(e) : u), t), scoreEnd({ ...fixed, voices: [] }))
  return { label, score: fixed, end }
}

/** Two voices: voices[0] is voice I (upper in the original), voices[1] voice II. */
export function twoVoiceVersions(s: Score, specs: readonly VersionSpec[]): VersionTexture[] {
  const k = keyInfo(s)
  const [I, II] = s.voices
  const all = [I, II].flatMap((v) => v.events.flatMap((e) => (e.kind === 'note' ? [e.pitch] : [])))
  return specs.map((sp) => {
    const mirror = sp.mirror ? mirrorFn(k, all) : (p: Pitch) => p
    const tI = shiftInterval(k, sp.shift.I)
    const tII = shiftInterval(k, -sp.shift.II)
    const ih = sp.ih ?? 0
    const vI = mapVoice(I, 'I', (p) => transpose(mirror(p), tI), fromQuarters(Math.max(0, ih)))
    const vII = mapVoice(II, 'II', (p) => transpose(mirror(p), tII), fromQuarters(Math.max(0, -ih)))
    const motion = sp.mirror ? (sp.motion === 'swap' ? 'near' : 'swap') : sp.motion
    return retexture(s, motion === 'swap' ? [vII, vI] : [vI, vII], sp.label)
  })
}

/** Three or four voices: every voice moved by its steps, then laid out in the version's order (top first). Returns the
 *  version's voices in ORIGINAL index order plus the order, so pairs can be named by original voices. */
export function multiVersions(s: Score, versions: readonly MVersion[]): { label: string; score: Score; end: Rational; order: readonly number[] }[] {
  const k = keyInfo(s)
  return versions.map((v) => {
    const vs = s.voices.map((voice, i) => mapVoice(voice, `v${i}`, (p) => transpose(p, shiftInterval(k, v.steps[i])), fromQuarters(0)))
    const t = retexture(s, vs, v.label)
    return { label: v.label, score: t.score, end: t.end, order: v.order }
  })
}
