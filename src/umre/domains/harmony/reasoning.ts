import type { Finding } from '../../analysis/types'
import { chordMembers, type Chord } from '../../repr/harmony'
import { diatonic, formatPitch, formatSpelling, samePitch, sameSpelling } from '../../repr/pitch'
import { notesOf, type Score } from '../../repr/score'
import { toQuarters } from '../../repr/rational'
import type { Rulebook } from '../../rulebook/rulebook'
import type { Task } from '../../task'
import { harmonyValidator } from '../../validation/harmony'
import type { Violation } from '../../validation/types'
import { chordSequences, romanOf } from './harmonize'
import { chordsOfSolution, triadOn, type HarmonizeParams } from './task'
import type { HKey } from './check'

/**
 * Reasoning about four-part progressions, on top of the rulebook and the validator (no second checker):
 * - FACTS: root relation and common tones (Rimsky-Korsakov § 8, tr. 18), the connection a voicing makes (§ 11, tr. 21);
 * - INTERPRETATION: harmonic function of a primary chord (T / S / D, tr. 17);
 * - WHAT MAY COME NEXT: chord-level continuations that still lead to a complete chord sequence;
 * - CONSEQUENCES of changing one note: which rules start or stop failing.
 */
export type Relation = 'same' | 'second' | 'third' | 'fourth-fifth'
const REL: Relation[] = ['same', 'second', 'third', 'fourth-fifth', 'fourth-fifth', 'third', 'second']
export const relationOf = (a: Chord, b: Chord): Relation => REL[(((b.root.letter - a.root.letter) % 7) + 7) % 7]
export const commonTones = (a: Chord, b: Chord) => chordMembers(a).filter((m) => chordMembers(b).some((x) => sameSpelling(x, m)))

/** Rimsky's three main chords and their function (tr. 17); other degrees: no function claimed here. */
export const functionOf = (degree: number): 'T' | 'S' | 'D' | null => ({ 0: 'T', 3: 'S', 4: 'D' } as Record<number, 'T' | 'S' | 'D'>)[degree] ?? null

export type Connection = 'harmonic' | 'melodic' | 'same-chord'
/** Harmonic: a common tone stays in the same voice; melodic: none does (§ 11). */
export function connectionOf(prev: readonly Chord[], s: Score, k: number): Connection {
  if (relationOf(prev[k - 1], prev[k]) === 'same') return 'same-chord'
  const common = commonTones(prev[k - 1], prev[k])
  const held = s.voices.some((v) => {
    const ns = notesOf(v)
    return ns[k] && ns[k - 1] && samePitch(ns[k].pitch, ns[k - 1].pitch) && common.some((c) => sameSpelling(c, ns[k].pitch))
  })
  return held ? 'harmonic' : 'melodic'
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const degreeOf = (c: Chord, key: HKey) => (((c.root.letter - key.tonic.letter) % 7) + 7) % 7

/** Why each chord of a solution is where it is: facts (relation, common tones, connection) and its function. */
export function explainProgression(s: Score, chords: readonly Chord[], key: HKey, rb: Rulebook): Finding[] {
  const M = 'harmony.progression'
  const cite = (id: string) => rb.rules.find((r) => r.id === id)?.citations ?? []
  const out: Finding[] = []
  const sop = notesOf(s.voices[0])
  chords.forEach((c, k) => {
    const at = toQuarters(sop[k].onset)
    const d = degreeOf(c, key)
    const fn = functionOf(d)
    out.push({
      id: `${M}#chord-${k + 1}`, module: M, kind: 'fact', topic: 'hợp âm', at, value: { degree: d, roman: ROMAN[d], root: formatSpelling(c.root), quality: c.quality },
      text: { basic: `Hợp âm ${ROMAN[d]} (${formatSpelling(c.root)} ${c.quality === 'major' ? 'trưởng' : c.quality === 'minor' ? 'thứ' : c.quality})`, technical: `${ROMAN[d]}: ${chordMembers(c).map((m) => formatSpelling(m)).join('–')}` },
      evidence: s.voices.map((v) => formatPitch(notesOf(v)[k].pitch)),
    })
    if (fn)
      out.push({
        id: `${M}#function-${k + 1}`, module: M, kind: 'interpretation', topic: 'chức năng', at, value: fn,
        text: { basic: `Chức năng ${fn === 'T' ? 'chủ (T)' : fn === 'S' ? 'hạ át (S)' : 'át (D)'}`, technical: `${ROMAN[d]} → ${fn}` },
        confidence: { value: 1, basis: 'hợp âm chính bậc I / IV / V mang chức năng T / S / D theo định nghĩa của sách (tr. 17); không xét ngữ cảnh chuyển giọng' },
        evidence: [`bậc ${ROMAN[d]} trong ${formatSpelling(key.tonic)} ${key.minor ? 'thứ' : 'trưởng'}`], citations: [],
      })
    if (k === 0) return
    const rel = relationOf(chords[k - 1], c)
    const common = commonTones(chords[k - 1], c)
    const conn = connectionOf(chords, s, k)
    const relVi = { same: 'cùng hợp âm', second: 'quãng 2', third: 'quãng 3', 'fourth-fifth': 'quãng 4 – 5' }[rel]
    out.push({
      id: `${M}#connection-${k + 1}`, module: M, kind: 'fact', topic: 'nối hợp âm', at, value: { relation: rel, commonTones: common.length, connection: conn },
      text: {
        basic: rel === 'same' ? 'Giữ hợp âm, đổi cách xếp' : `Quan hệ ${relVi}: ${common.length} âm chung — nối ${conn === 'harmonic' ? 'hoà thanh (giữ âm chung)' : 'giai điệu'}`,
        technical: `${ROMAN[degreeOf(chords[k - 1], key)]}→${ROMAN[d]}: ${rel}, âm chung ${common.map((m) => formatSpelling(m)).join(', ') || '∅'}, ${conn}`,
        academic: `Quan hệ ${relVi} có ${common.length} âm chung (Rimsky-Korsakov § 8); kiểu nối ${conn} theo § 11`,
      },
      evidence: s.voices.map((v) => `${formatPitch(notesOf(v)[k - 1].pitch)}→${formatPitch(notesOf(v)[k].pitch)}`),
      ruleIds: rel === 'second' ? ['h.second-relation'] : rel === 'same' ? [] : ['h.upper-third'], citations: rel === 'second' ? cite('h.second-relation') : rel === 'same' ? [] : cite('h.upper-third'),
    })
  })
  return out
}

export type Continuation = { readonly degree: number; readonly roman: string; readonly function: 'T' | 'S' | 'D' | null; readonly completions: number; readonly blockedBy?: string }

/**
 * Which chords may come next after `prefix` (degrees of the first notes): each primary chord holding the next melody
 * note, with how many complete chord sequences still follow (0 = a dead end) or the rule that forbids it now.
 */
export function continuations(t: Task<HarmonizeParams>, prefix: readonly number[]): Continuation[] {
  const i = prefix.length
  const sop = notesOf(t.score.voices[0])
  if (i >= sop.length) return []
  const k = t.params.key
  const holds = (d: number) => chordMembers(triadOn(k, d)).some((m) => sameSpelling(m, sop[i].pitch))
  return [0, 3, 4].filter(holds).map((d) => {
    const n = chordSequences(t, 2000, [...prefix, d]).sequences.length
    const p = prefix[i - 1]
    const leap = i > 0 ? Math.abs(diatonic(sop[i].pitch) - diatonic(sop[i - 1].pitch)) : 0
    const blockedBy = i === 0 && d !== 0 ? 'h.tonic-frame' : i === sop.length - 1 && d !== 0 ? 'h.tonic-frame' : p === 4 && d === 3 ? 'h.no-v-iv' : leap >= 3 && d !== p ? 'h.leap-same-chord' : undefined
    return { degree: d, roman: ROMAN[d], function: functionOf(d), completions: n, ...(blockedBy ? { blockedBy } : {}) }
  })
}

export type Change = { readonly voice: number; readonly index: number; readonly pitch: import('../../repr/pitch').Pitch }
export type Consequence = { readonly before: string; readonly after: string; readonly introduced: readonly Violation[]; readonly resolved: readonly Violation[]; readonly chordsAfter: string }

/** What changing one note does: the validator runs on both versions and the violations are compared by rule and place. */
export function consequences(t: Task, s: Score, change: Change, rb: Rulebook): Consequence {
  const changed: Score = {
    ...s,
    voices: s.voices.map((v, i) => (i !== change.voice ? v : { ...v, events: v.events.map((e) => (e.kind === 'note' && notesOf(v).indexOf(e) === change.index ? { ...e, pitch: change.pitch } : e)) })),
  }
  const a = harmonyValidator.validate(t, s, rb)
  const b = harmonyValidator.validate(t, changed, rb)
  const key = (v: Violation) => `${v.ruleId}@${toQuarters(v.location.at)}`
  const A = new Set([...a.violations, ...a.advisories].map(key))
  const B = new Set([...b.violations, ...b.advisories].map(key))
  const hk = (t.params as Partial<HarmonizeParams>).key
  return {
    before: a.status, after: b.status,
    introduced: [...b.violations, ...b.advisories].filter((v) => !A.has(key(v))),
    resolved: [...a.violations, ...a.advisories].filter((v) => !B.has(key(v))),
    chordsAfter: hk ? romanOf(chordsOfSolution(changed, hk).map((c) => degreeOf(c, hk))) : '',
  }
}
