import { pitch, type Key, type Seg } from '../../features/counterpoint/model'
import type { VersionSpec } from '../../features/counterpoint/rules'
import type { MVersion } from '../../features/counterpoint/multi'
import { fromCounterpoint } from '../repr/adapters/counterpoint'
import { fromQuarters } from '../repr/rational'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from '../rulebook/counterpoint'
import { MULTI_VOICE, ROLE_GIVEN, TWO_VOICE, type MultiVoiceParams, type TwoVoiceParams } from '../domains/counterpoint/task'
import type { Task } from '../task'

/** Test helpers (not used by the app): "C4:2 D4:2~ | D4:2" — letter, b/#, octave, quarters, ~ ties into the next. */
export function line(s: string): Seg[] {
  const out: Seg[] = []
  let t = 0
  let tie = false
  for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
    const m = /^([A-G])(b|#)?(\d):(\d)(~?)$/.exec(tok)
    if (!m) throw new Error(tok)
    out.push({ start: t, dur: +m[4], p: pitch(+m[3] * 7 + 'CDEFGAB'.indexOf(m[1]), m[2] === 'b' ? -1 : m[2] === '#' ? 1 : 0), ...(tie ? { tied: true } : {}) })
    t += +m[4]
    tie = m[5] === '~'
  }
  return out
}
export const C: Key = { tonic: 0, alter: 0, minor: false }
export const RB = { id: COUNTERPOINT_RULEBOOK_ID, version: COUNTERPOINT_RULEBOOK_VERSION }

export function twoVoiceTask(given: string, o: { givenIs?: 'I' | 'II'; stars?: number[]; versions?: VersionSpec[]; starsOnly?: boolean; quarterPrep?: boolean; id?: string } = {}): Task<TwoVoiceParams> {
  return {
    id: o.id ?? 't2', type: TWO_VOICE, domain: 'counterpoint', rulebook: RB,
    score: fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: [line(given)], roles: [ROLE_GIVEN], id: 'de' }),
    params: { givenIs: o.givenIs ?? 'II', stars: (o.stars ?? []).map(fromQuarters), versions: o.versions ?? [], starsOnly: o.starsOnly ?? false, ...(o.quarterPrep ? { quarterPrep: true } : {}) },
  }
}
export function multiTask(voices: string[], free: boolean[], versions: MVersion[] = [], id = 'tm'): Task<MultiVoiceParams> {
  return {
    id, type: MULTI_VOICE, domain: 'counterpoint', rulebook: RB,
    score: fromCounterpoint({ key: C, meter: { num: 2, den: 2 }, lines: voices.map((v, i) => (free[i] ? [] : line(v))), id: 'de' }),
    params: { free, versions },
  }
}
