import { notesOf, type Score } from '../../repr/score'
import { sameSpelling } from '../../repr/pitch'
import { chordMembers } from '../../repr/harmony'
import type { Rulebook } from '../../rulebook/rulebook'
import { search } from '../../search/search'
import type { Task } from '../../task'
import { FOUR_PART, fourPartModel, triadOn, type FourPartParams, type HarmonizeParams } from './task'

/**
 * Melody harmonization (Rimsky-Korsakov § 13) in two layers. Chord CHOICE: every sequence of I / IV / V triads that
 * holds the soprano note and keeps the chord-level rules (tonic frame, IV before V, a leap over a third keeps the chord,
 * the leading tone rises). VOICING: for each sequence, the shared constraint search writes alto, tenor and bass under
 * the four-part rules and the § 11 connection rules. Each sequence is an alternative; ranking (soft rules) is done by
 * the orchestrator after independent validation, not here.
 */
export type SequenceOutcome = { readonly degrees: readonly number[]; readonly status: 'solved' | 'unsat' | 'timeout'; readonly nodes: number }
export type HarmonizeResult = {
  readonly status: 'solved' | 'unsat' | 'timeout'
  readonly solutions: Score[]
  readonly sequences: readonly SequenceOutcome[]
  /** sequences that passed the chord-level rules (before voicing) */
  readonly candidates: number
  readonly proof?: string
  readonly reason?: string
  /** per soprano note: the primary triads that hold it (empty = no primary chord can harmonize that note) */
  readonly options: readonly (readonly number[])[]
}

const PRIMARY = [0, 3, 4]
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
export const romanOf = (ds: readonly number[]) => ds.map((d) => ROMAN[d]).join('–')

/** `prefix`: degrees already chosen for the first notes (continuations are asked with a prefix). */
export function chordSequences(t: Task<HarmonizeParams>, limit = 2000, prefix: readonly number[] = []): { sequences: number[][]; options: number[][] } {
  const k = t.params.key
  const sop = notesOf(t.score.voices[0])
  const deg = (l: number) => (((l - k.tonic.letter) % 7) + 7) % 7
  const options = sop.map((n) => PRIMARY.filter((d) => chordMembers(triadOn(k, d)).some((m) => sameSpelling(m, n.pitch))))
  const out: number[][] = []
  const seq: number[] = []
  const step = (i: number) => sop[i].pitch.octave * 7 + sop[i].pitch.letter - (sop[i - 1].pitch.octave * 7 + sop[i - 1].pitch.letter)
  const ok = (i: number, d: number) => {
    if ((i === 0 || i === sop.length - 1) && d !== 0) return false
    if (i === 0) return true
    const p = seq[i - 1]
    if (p === 4 && d === 3) return false
    if (Math.abs(step(i)) >= 3 && d !== p) return false
    if (p === 4 && d === 0 && deg(sop[i - 1].pitch.letter) === 6 && step(i) !== 1) return false
    return true
  }
  const go = (i: number) => {
    if (out.length >= limit) return
    if (i === sop.length) {
      out.push([...seq])
      return
    }
    for (const d of options[i]) {
      if (i < prefix.length && d !== prefix[i]) continue
      if (!ok(i, d)) continue
      seq.push(d)
      go(i + 1)
      seq.pop()
    }
  }
  go(0)
  return { sequences: out, options }
}

export function harmonize(t: Task<HarmonizeParams>, rb: Rulebook, o: { timeMs: number; maxSolutions: number; signal?: AbortSignal }): HarmonizeResult {
  const t0 = Date.now()
  const { sequences, options } = chordSequences(t)
  if (!sequences.length) {
    const bad = options.findIndex((x) => !x.length)
    const proof = bad >= 0
      ? `nốt ${bad + 1} của giai điệu không thuộc hợp âm I, IV hay V nào`
      : 'không chuỗi I/IV/V nào giữ được các luật chọn hợp âm (mở – kết bằng I, IV trước V, giai điệu nhảy thì giữ hợp âm, âm dẫn đi lên)'
    return { status: 'unsat', solutions: [], sequences: [], candidates: 0, proof, options }
  }
  const outcomes: SequenceOutcome[] = []
  const solutions: Score[] = []
  let timedOut = false
  for (const [i, ds] of sequences.entries()) {
    const left = o.timeMs - (Date.now() - t0)
    if (left <= 0 || o.signal?.aborted) {
      timedOut = true
      break
    }
    const ft: Task<FourPartParams> = { ...t, type: FOUR_PART, params: { chords: ds.map((d) => triadOn(t.params.key, d)), key: t.params.key } }
    // a fair share of what is left for each remaining sequence, at least 50 ms
    const share = Math.max(50, left / Math.max(1, Math.min(sequences.length - i, 8)))
        // alternatives: spread the wanted answers over the sequences still to try (different chords first)
    const want = Math.max(1, Math.ceil((o.maxSolutions - solutions.length) / (sequences.length - i)))
    const r = search(fourPartModel(ft, rb, { choice: true }), { timeMs: share, maxSolutions: want, signal: o.signal })
    outcomes.push({ degrees: ds, status: r.status, nodes: r.nodes })
    if (r.status === 'timeout') timedOut = true
    for (const s of r.solutions) solutions.push({ ...s, id: `${t.id}-h${solutions.length + 1}` })
    if (solutions.length >= o.maxSolutions) break
  }
  if (solutions.length) return { status: 'solved', solutions, sequences: outcomes, candidates: sequences.length, options }
  if (!timedOut && outcomes.length === sequences.length && sequences.length < 2000)
    return { status: 'unsat', solutions: [], sequences: outcomes, candidates: sequences.length, options, proof: `cả ${sequences.length} chuỗi hợp âm hợp luật đều không xếp được bè trong miền tìm kiếm (${romanOf(sequences[0])}…)` }
  return { status: 'timeout', solutions: [], sequences: outcomes, candidates: sequences.length, options, reason: `hết ${o.timeMs} ms sau ${outcomes.length}/${sequences.length} chuỗi hợp âm` }
}
