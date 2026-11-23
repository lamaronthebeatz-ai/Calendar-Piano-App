import type { Choice, CspModel, View } from '../../constraints/model'
import { frontierOf } from '../../constraints/model'
import { diatonic, formatPitch, fromDiatonic, type Letter, type Pitch } from '../../repr/pitch'
import { between } from '../../repr/interval'
import { consonance } from '../../repr/texture'
import { add, cmp, fromQuarters, min, toQuarters, type Rational } from '../../repr/rational'
import { notesOf, scoreEnd, type NoteEvent, type Score } from '../../repr/score'
import { signatureAlter } from '../../repr/tonal'
import { consonanceOf, COUNTERPOINT_RULES, VERSION_RULES } from '../../rules/counterpoint'
import { textureQueries } from '../../rules/queries'
import type { Rulebook } from '../../rulebook/rulebook'
import type { ConsonanceDef } from '../../repr/texture'
import type { Task } from '../../task'
import { multiSolution, twoVoiceSolution, toMProblem, type MultiVoiceParams, type TwoVoiceParams } from './task'
import { multiVersions, twoVoiceVersions } from './versions'

/**
 * Counterpoint tasks as constraint models for the shared search: what is specific to the domain is only the
 * variables' domain (durations of the strict style, the key's notes plus the đề's own alterations, two octaves on the
 * free voice's side), how a note is written (split at the bar line into tied notes) and which views are checked
 * (the original and every version). The constraints are the rulebook's rules in the rule language.
 */
const DURATIONS = [4, 2, 8, 6, 3, 1] // quarters; the order is a heuristic only
const SPAN = 14

function pitchDomain(fifths: number, given: Pitch[], lo: number, hi: number): Pitch[] {
  const altered = new Map<Letter, Set<number>>()
  for (const p of given) {
    const sig = signatureAlter(fifths, p.letter)
    if (p.alter !== sig) {
      if (!altered.has(p.letter)) altered.set(p.letter, new Set())
      altered.get(p.letter)!.add(p.alter)
    }
  }
  const out: Pitch[] = []
  for (let d = lo; d <= hi; d++) {
    const letter = (((d % 7) + 7) % 7) as Letter
    out.push(fromDiatonic(d, signatureAlter(fifths, letter)))
    for (const a of altered.get(letter) ?? []) out.push(fromDiatonic(d, a))
  }
  return out
}

const describe = (lo: Pitch, hi: Pitch, extra: string) =>
  `UMRE — bè tự do bắt đầu từ đầu bài, không dấu lặng, trường độ 1/2/3/4/6/8 phách đen (qua vạch nhịp thì viết bằng dấu nối), nốt của giọng và biến âm có trong đề, trong khoảng ${formatPitch(lo)}–${formatPitch(hi)}${extra}`

/** Write a sounding note: one note per bar it touches, tied. */
function writer(barQ: number, idOf: (voice: number) => string) {
  return (voice: number, at: Rational, c: Choice, n: number): NoteEvent[] => {
    const out: NoteEvent[] = []
    let t = toQuarters(at)
    const end = t + toQuarters(c.duration)
    let j = 0
    while (t < end) {
      const barEnd = (Math.floor(t / barQ + 1e-9) + 1) * barQ
      const e = Math.min(end, barEnd)
      out.push({ kind: 'note', id: `${idOf(voice)}-c${n}.${j++}`, onset: fromQuarters(t), duration: fromQuarters(e - t), pitch: c.pitch })
      t = e
    }
    if (out.length > 1) out.forEach((e, i) => Object.assign(e, { tie: i === 0 ? 'start' : i === out.length - 1 ? 'stop' : 'continue' }))
    return out
  }
}

/**
 * Value ordering (a heuristic: it changes speed, never the answer): imperfect consonances with the voices sounding at
 * that moment first, then perfect ones, dissonances last; within that, the smallest melodic step.
 */
function order(prev: NoteEvent | undefined, ps: Pitch[], others: Pitch[] = [], cons?: ConsonanceDef): Pitch[] {
  const d0 = prev && prev.kind === 'note' ? diatonic(prev.pitch) : null
  const rank = (p: Pitch) => {
    if (!cons || !others.length) return 0
    const k = others.map((o) => consonance(diatonic(o) <= diatonic(p) ? between(o, p) : between(p, o), cons))
    return k.includes('dissonant') ? 2 : k.every((x) => x === 'imperfect') ? 0 : 1
  }
  return [...ps].sort((a, b) => rank(a) - rank(b) || (d0 === null ? 0 : Math.abs(diatonic(a) - d0) - Math.abs(diatonic(b) - d0)) || diatonic(a) - diatonic(b))
}
/** Pitches sounding at a moment in the voices other than `voice`. */
const soundingAt = (s: Score, voice: number, at: Rational): Pitch[] =>
  s.voices.flatMap((v, i) => (i === voice ? [] : notesOf(v).filter((e) => cmp(e.onset, at) <= 0 && cmp(at, add(e.onset, e.duration)) < 0).map((e) => e.pitch)))

export function twoVoiceModel(task: Task<TwoVoiceParams>, rb: Rulebook): CspModel {
  const base = twoVoiceSolution(task, [], 0)
  const gi = task.params.givenIs === 'I' ? 0 : 1
  const ci = 1 - gi
  const given = notesOf(base.voices[gi]).map((e) => e.pitch)
  const ds = given.map(diatonic)
  const [lo, hi] = ci === 0 ? [Math.min(...ds), Math.max(...ds) + SPAN] : [Math.min(...ds) - SPAN, Math.max(...ds)]
  const fifths = base.keySignatures[0].fifths
  const dom = pitchDomain(fifths, given, lo, hi)
  const end = scoreEnd({ ...base, voices: [base.voices[gi]] })
  const m = base.meters[0].meter
  const barQ = (m.num * 4) / m.den
  const cons: ConsonanceDef = consonanceOf(rb)
  const stars = task.params.stars.map(toQuarters)
  const versionsOf = (s: Score) => twoVoiceVersions(s, task.params.versions)
  return {
    id: `${task.id}-csp`, base, free: [ci], end,
    domain: describe(dom[0], dom[dom.length - 1], task.params.versions.length ? `; luật chiều dọc ở ${task.params.versions.length} biến thể` : ''),
    exceptions: new Set(task.params.quarterPrep ? ['quarter-prep'] : []),
    candidates: (v, at, line, s) => {
      const ps = order(line[line.length - 1], dom, soundingAt(s, v, at), cons)
      return DURATIONS.filter((d) => cmp(add(at, fromQuarters(d)), end) <= 0).flatMap((d) => ps.map((pitch) => ({ duration: fromQuarters(d), pitch })))
    },
    write: writer(barQ, () => base.voices[ci].id),
    views: (s, partial): View[] => [
      {
        label: 'Nguyên thể', rules: COUNTERPOINT_RULES, frontier: frontierOf(s),
        queries: textureQueries({ score: s, lines: [ci], pairs: [[0, 1]], end, consonance: () => cons, stars, starsOnly: task.params.starsOnly, partial }),
      },
      ...versionsOf(s).map((vt) => ({
        label: vt.label, rules: VERSION_RULES, frontier: min(frontierOf(vt.score), end),
        queries: textureQueries({ score: vt.score, lines: [], pairs: [[0, 1]], end: min(vt.end, end), consonance: () => cons, inVersion: true, partial }),
      })),
    ],
  }
}

export function multiVoiceModel(task: Task<MultiVoiceParams>, rb: Rulebook): CspModel {
  const mp = toMProblem(task)
  const n = mp.voices.length
  const base = multiSolution(task, mp.voices.map((v, i) => (mp.free[i] ? [] : v)), 0)
  const free = mp.free.flatMap((f, i) => (f ? [i] : []))
  const given = base.voices.flatMap((v) => notesOf(v).map((e) => e.pitch))
  const ds = given.map(diatonic)
  const dom = pitchDomain(base.keySignatures[0].fifths, given, Math.min(...ds) - SPAN, Math.max(...ds) + SPAN)
  const end = base.voices.reduce((t, v) => (v.events.length ? (cmp(scoreEnd({ ...base, voices: [v] }), t) > 0 ? scoreEnd({ ...base, voices: [v] }) : t) : t), fromQuarters(0))
  const m = base.meters[0].meter
  const barQ = (m.num * 4) / m.den
  const base0 = consonanceOf(rb)
  const withFourth: ConsonanceDef = { ...base0, imperfect: [...base0.imperfect, [3, 'P']] }
  const all = [{ label: 'Nguyên thể', steps: Array(n).fill(0), order: [...Array(n).keys()] }, ...mp.versions]
  const outerSomewhere = new Set(mp.versions.length ? all.map((v) => [v.order[0], v.order[n - 1]].sort().join(',')) : [])
  const pairsIn = (ord: readonly number[]) => {
    const ps: [number, number][] = []
    for (let x = 0; x < n; x++) for (let y = x + 1; y < n; y++) if (mp.free[ord[x]] || mp.free[ord[y]]) ps.push([ord[x], ord[y]])
    return ps
  }
  const ctx = (ord: readonly number[]) => ({
    consonance: ([a, b]: readonly [number, number]) => (ord.indexOf(b) === ord.indexOf(a) + 1 && ord.indexOf(b) <= n - 2 ? withFourth : base0),
    role: ([a, b]: readonly [number, number]) => ({ outer: ord.indexOf(a) === 0 && ord.indexOf(b) === n - 1, outerSomewhere: outerSomewhere.has([a, b].sort().join(',')) }),
  })
  return {
    id: `${task.id}-csp`, base, free, end,
    domain: describe(dom[0], dom[dom.length - 1], mp.versions.length ? `; luật chiều dọc ở ${mp.versions.length} biến thể` : ''),
    exceptions: new Set(),
    candidates: (v, at, line, s) => {
      const ps = order(line[line.length - 1], dom, soundingAt(s, v, at), base0)
      return DURATIONS.filter((d) => cmp(add(at, fromQuarters(d)), end) <= 0).flatMap((d) => ps.map((pitch) => ({ duration: fromQuarters(d), pitch })))
    },
    write: writer(barQ, (v) => base.voices[v].id),
    views: (s, partial): View[] => [
      { label: 'Nguyên thể', rules: COUNTERPOINT_RULES, frontier: frontierOf(s), queries: textureQueries({ score: s, lines: free, pairs: pairsIn([...Array(n).keys()]), end, partial, ...ctx([...Array(n).keys()]) }) },
      ...multiVersions(s, mp.versions).map((mv) => ({
        label: mv.label, rules: VERSION_RULES, frontier: min(frontierOf(mv.score), end),
        queries: textureQueries({ score: mv.score, lines: [], pairs: pairsIn(mv.order), end: min(mv.end, end), inVersion: true, partial, ...ctx(mv.order) }),
      })),
    ],
  }
}
