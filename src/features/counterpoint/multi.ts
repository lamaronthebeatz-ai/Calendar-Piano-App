/**
 * Three and four voices (Phạm Tú Hương tr. 37–45): "nếu viết từng cặp hai bè đúng thì ba bè cũng sẽ đúng". Every pair
 * of every version is judged by the two-voice rules, with what the book changes for more voices: the perfect fourth is
 * a consonance in the upper pairs (I–II; in four voices also II–III), and similar motion into a perfect consonance is
 * forbidden in the outer pair when the top voice leaps. Complex counterpoint (Iv for every pair, tam/tứ trùng) is a set
 * of versions — each voice shifted by whole steps and the voices re-ordered — and every pair that becomes the outer pair
 * in some version may not move by similar motion into a perfect consonance at all (tr. 41–43).
 * The search writes every free voice together, a quarter-note grid DFS that always extends the voice that ends first;
 * like the two-voice solver it answers 'valid' (checked again by verify.ts), 'unsat' (domain exhausted) or 'unknown'.
 */
import { barQ, inKey, interval, notesOf, pitchName, transposeBy, type Key, type Meter, type Pitch, type Seg } from './model'
import { check, checkLine, isSoft, placeOk, type Problem, type RuleId } from './rules'
import { verify } from './verify'
import type { Status } from './solver'

/** A version of the whole texture: each voice moved by `steps`, sounding top-to-bottom in `order` (voice indices). */
export type MVersion = { label: string; steps: number[]; order: number[] }
export type MProblem = {
  key: Key
  meter: Meter
  /** top to bottom in the original; a free voice's line is ignored (empty) */
  voices: Seg[][]
  free: boolean[]
  versions: MVersion[]
  /** where each voice ends when they do not end together (a canon's voices finish one after another) */
  ends?: number[]
  /** a bridge (phần IV): every voice is free only between its fixed head and its fixed tail (absolute times) */
  head?: Seg[][]
  tail?: Seg[][]
  /** stretches of a voice that are the đề (a cantus firmus inside a longer form): its own line is not judged there */
  fixed?: { voice: number; start: number; end: number }[]
}
const inFixed = (mp: MProblem, voice: number, t: number) => !!mp.fixed?.some((f) => f.voice === voice && t >= f.start && t < f.end)
export type MViolation = { rule: RuleId; t: number; version: string; detail?: string }
export type MReport = { hard: MViolation[]; soft: MViolation[]; penalty: number }
export type MSolution = { lines: Seg[][]; report: MReport }
export type MResult = { solutions: MSolution[]; status: Status; nodes: number; disputed: number; furthest: number; domain: string }

export type MultiForm = 'ba-be' | 'bon-be' | 'tam-trung' | 'tu-trung'
export const MULTI_FORMS: { id: MultiForm; label: string; ref: string }[] = [
  { id: 'ba-be', label: 'Đối vị ba bè', ref: 'doi-am-ba-bon-be' },
  { id: 'tam-trung', label: 'Tam trùng đối vị quãng 8 (ba bè, đổi chỗ)', ref: 'doi-am-ba-bon-be' },
  { id: 'bon-be', label: 'Đối vị bốn bè', ref: 'doi-am-ba-bon-be' },
  { id: 'tu-trung', label: 'Tứ trùng đối vị quãng 8 (bốn bè, đổi chỗ)', ref: 'doi-am-ba-bon-be' },
]
export const ROMAN = ['I', 'II', 'III', 'IV']
const DURS = [8, 6, 4, 3, 2, 1]
const SPAN = 14

export const totalOfM = (mp: MProblem) => (mp.ends ? Math.max(...mp.ends) : Math.max(...mp.voices.flatMap((v, i) => (mp.free[i] ? [] : v.map((s) => s.start + s.dur)))))
/** The end of one voice, and of the stretch where two voices sound together. */
const endOf = (mp: MProblem, total: number, i: number) => mp.ends?.[i] ?? total
export const original = (n: number): MVersion => ({ label: 'Nguyên thể', steps: Array(n).fill(0), order: [...Array(n).keys()] })

/** Every pair of a version, upper first, with the book's three-/four-voice role of the pair. */
function pairsOf(n: number, v: MVersion) {
  const out: { a: number; b: number; fourthOk: boolean; outer: boolean; name: string }[] = []
  for (let x = 0; x < n; x++)
    for (let y = x + 1; y < n; y++) {
      const a = v.order[x]
      const b = v.order[y]
      out.push({ a, b, fourthOk: y === x + 1 && y <= n - 2, outer: x === 0 && y === n - 1, name: `${ROMAN[a]}–${ROMAN[b]}` })
    }
  return out
}

/** Pairs (as unordered voice sets) that are the outer pair in at least one version, when there are versions at all. */
function outerSomewhere(mp: MProblem): Set<string> {
  const s = new Set<string>()
  if (!mp.versions.length) return s
  for (const v of [original(mp.voices.length), ...mp.versions]) {
    const o = [v.order[0], v.order[v.order.length - 1]].sort()
    s.add(o.join(','))
  }
  return s
}

/** The two-voice problem for one pair of one version, with the given (upper) voice in the `given` slot. */
function pairProblem(mp: MProblem, total: number, upper: Seg[], role: { fourthOk: boolean; outer: boolean; hiddenHard: boolean }): Problem {
  return {
    key: mp.key, meter: mp.meter, given: upper, givenIs: 'I', stars: [], versions: [], starsOnly: false,
    total, noLine: true, pair: role,
  }
}

export const shiftLine = (k: Key, steps: number, segs: Seg[]) => {
  const t = transposeBy(k, steps)
  return segs.map((s) => ({ ...s, p: t(s.p) }))
}

/**
 * All the rules on lines known so far. `only`: judge just the pairs holding this voice (the search changes one voice at a
 * time); `from[v]`: report only from that time on for voice v's pairs and line (the solver's window).
 */
export function mcheck(mp: MProblem, lines: Seg[][], stopAtHard = false, only = -1, from: number[] = []): MReport {
  const n = mp.voices.length
  const total = totalOfM(mp)
  const out: MReport = { hard: [], soft: [], penalty: 0 }
  const ends = lines.map((l) => (l.length ? l[l.length - 1].start + l[l.length - 1].dur : 0))
  const hardOuter = outerSomewhere(mp)
  // the line of each free voice
  for (let i = 0; i < n; i++) {
    if (!mp.free[i] || (only >= 0 && i !== only)) continue
    checkLine(mp.meter, lines[i], ends[i], endOf(mp, total, i), { from: from[i] ?? 0 }, (rule, t, detail) => {
      if (inFixed(mp, i, t)) return
      const x = { rule, t, version: `bè ${ROMAN[i]}`, detail }
      if (isSoft(rule)) out.soft.push(x)
      else out.hard.push(x)
    })
    if (stopAtHard && out.hard.length) return out
  }
  for (const v of [original(n), ...mp.versions]) {
    const moved = lines.map((l, i) => (v.steps[i] ? shiftLine(mp.key, v.steps[i], l) : l))
    for (const pr of pairsOf(n, v)) {
      if (only >= 0 && pr.a !== only && pr.b !== only) continue
      if (!mp.free[pr.a] && !mp.free[pr.b]) continue
      const H = Math.min(ends[pr.a], ends[pr.b])
      if (H <= 0) continue
      const role = { fourthOk: pr.fourthOk, outer: pr.outer, hiddenHard: hardOuter.has([pr.a, pr.b].sort().join(',')) }
      const f = Math.min(from[pr.a] ?? 0, from[pr.b] ?? 0)
      const together = Math.min(endOf(mp, total, pr.a), endOf(mp, total, pr.b))
      const r = check(pairProblem(mp, together, moved[pr.a], role), moved[pr.b], Math.min(H, together), stopAtHard, f)
      const label = `${v.label} · ${pr.name}`
      for (const x of r.hard) out.hard.push({ ...x, version: label })
      for (const x of r.soft) out.soft.push({ ...x, version: label })
      out.penalty += r.penalty
      if (stopAtHard && out.hard.length) return out
    }
  }
  return out
}

/** The independent check of a finished texture: every pair of every version through verify.ts, each line once. */
export function mverify(mp: MProblem, lines: Seg[][]): string[] {
  const n = mp.voices.length
  const total = totalOfM(mp)
  const hardOuter = outerSomewhere(mp)
  const faults: string[] = []
  for (let i = 0; i < n; i++) {
    if (!mp.free[i]) continue
    const other = lines[(i + 1) % n]
    const p: Problem = { key: mp.key, meter: mp.meter, given: other, givenIs: 'I', stars: [], versions: [], starsOnly: false, total: endOf(mp, total, i) }
    // only the line faults of voice i: the pair itself is judged below with its proper role
    for (const f of verify(p, lines[i])) if (['gap', 'seg-place', 'tie', 'end', 'leap', 'rhythm-change', 'repeat3', 'leap-response'].includes(f.rule) && !inFixed(mp, i, f.t)) faults.push(`bè ${ROMAN[i]}: ${f.rule}@${f.t}`)
  }
  for (const v of [original(n), ...mp.versions]) {
    const moved = lines.map((l, i) => (v.steps[i] ? shiftLine(mp.key, v.steps[i], l) : l))
    for (const pr of pairsOf(n, v)) {
      if (!mp.free[pr.a] && !mp.free[pr.b]) continue
      const role = { fourthOk: pr.fourthOk, outer: pr.outer, hiddenHard: hardOuter.has([pr.a, pr.b].sort().join(',')) }
      const together = Math.min(endOf(mp, total, pr.a), endOf(mp, total, pr.b))
      const cut = (l: Seg[]) => l.filter((x) => x.start < together)
      for (const f of verify(pairProblem(mp, together, cut(moved[pr.a]), role), cut(moved[pr.b]))) faults.push(`${v.label} · ${pr.name}: ${f.rule}@${f.t}`)
    }
  }
  return faults
}

/** The search space of each free voice: the key's notes (plus the đề's alterations), two octaves around the given voices. */
export function mdomain(mp: MProblem) {
  const given = [...mp.voices.flatMap((v, i) => (mp.free[i] ? [] : v)), ...(mp.head ?? []).flat(), ...(mp.tail ?? []).flat()]
  const steps = given.map((s) => s.p.step)
  const lo = Math.min(...steps) - SPAN
  const hi = Math.max(...steps) + SPAN
  const alters = new Map<number, Set<number>>()
  for (const s of given) {
    if (s.p.alter === inKey(mp.key, s.p.step).alter) continue
    const L = ((s.p.step % 7) + 7) % 7
    if (!alters.has(L)) alters.set(L, new Set())
    alters.get(L)!.add(s.p.alter)
  }
  const pitches: Pitch[] = []
  for (let st = lo; st <= hi; st++) {
    pitches.push(inKey(mp.key, st))
    for (const a of alters.get(((st % 7) + 7) % 7) ?? []) pitches.push({ step: st, alter: a, midi: inKey(mp.key, st).midi - inKey(mp.key, st).alter + a })
  }
  const text = `${mp.head ? 'câu nối' : 'các bè tự do bắt đầu từ đầu bài'}, không dấu lặng, không nốt móc đơn, dùng nốt của giọng, trong khoảng ${pitchName(inKey(mp.key, lo))} – ${pitchName(inKey(mp.key, hi))}`
  return { pitches, text }
}

export function msolve(mp: MProblem, o: { timeMs: number; maxSolutions: number; seed?: number }): MResult {
  const n = mp.voices.length
  const total = totalOfM(mp)
  const B = barQ(mp.meter)
  const { pitches, text } = mdomain(mp)
  const lines = mp.voices.map((v, i) => (mp.free[i] ? (mp.head?.[i] ?? []).slice() : v.slice()))
  const tailAt = mp.voices.map((_, i) => mp.tail?.[i]?.[0]?.start ?? total)
  const freeIdx = [...Array(n).keys()].filter((i) => mp.free[i])
  let seed = o.seed ?? 1
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const t0 = Date.now()
  let nodes = 0
  let timedOut = false
  let disputed = 0
  let furthest = 0
  const found: MSolution[] = []
  const dead = new Set<string>()
  const endOf = (i: number) => (lines[i].length ? lines[i][lines[i].length - 1].start + lines[i][lines[i].length - 1].dur : 0)
  const stateKey = () =>
    freeIdx.map((i) => `${endOf(i)}:${notesOf(lines[i]).slice(-3).map((x) => `${x.start}.${x.dur}.${x.p.step}.${x.p.alter}`).join(',')}:${lines[i].length ? lines[i][lines[i].length - 1].dur : 0}`).join('|')

  /** The voice sounding just above / below voice i at time t in the original, to keep the order without crossing. */
  // order only: each free voice keeps a register of its own, about a fifth per voice from the given one
  const gi = mp.free.findIndex((f) => !f)
  const gSteps = mp.voices[gi]?.map((x) => x.p.step).sort((a, b) => a - b) ?? [28]
  const home = (i: number) => {
    const h = mp.head?.[i]?.at(-1)?.p.step
    const z = mp.tail?.[i]?.[0]?.p.step
    if (h !== undefined && z !== undefined) return (h + z) / 2
    return gSteps[gSteps.length >> 1] + 4 * (gi - i)
  }
  const neighbour = (i: number, t: number, dir: -1 | 1) => {
    for (let j = i + dir; j >= 0 && j < n; j += dir) {
      const s = lines[j].find((x) => x.start <= t && t < x.start + x.dur)
      if (s) return s.p.step
    }
    return null
  }

  function moves(i: number): Seg[] {
    const t = endOf(i)
    const line = lines[i]
    const last = line[line.length - 1]
    const off = t % B
    const out: { s: Seg; cost: number }[] = []
    const above = neighbour(i, t, -1)
    const below = neighbour(i, t, 1)
    for (const d of DURS) {
      if (t + d > tailAt[i] || !placeOk(mp.meter, off, d)) continue
      const oneNote = last && off !== 0 && placeOk(mp.meter, last.start % B, last.dur + d)
      if (last && !oneNote && last.start + last.dur === t && last.dur >= 2 && (last.dur >= d || (last.dur === 2 && d === 4)))
        out.push({ s: { start: t, dur: d, p: last.p, tied: true }, cost: 0.6 + rnd() * 1.2 })
      for (const pt of pitches) {
        // crossing in the original is a hard fault: never try it
        if ((above !== null && pt.step > above) || (below !== null && pt.step < below)) continue
        let cost = rnd() * 1.6
        if (last) {
          const leap = Math.abs(pt.step - last.p.step)
          cost += leap === 0 ? 4 : leap === 1 ? 0 : leap === 2 ? 1 : leap <= 4 ? 2 : 3
        }
        // order only (the set of answers does not change): keep each voice in its own register, a third to a sixth apart
        for (const nb of [above, below]) {
          if (nb === null) continue
          const gap = Math.abs(nb - pt.step)
          cost += gap === 0 ? 5 : gap < 2 ? 2 : gap > 9 ? 2 : 0
          cost += interval(inKey(mp.key, Math.max(nb, pt.step)), inKey(mp.key, Math.min(nb, pt.step))).kind === 'imperfect' ? 0 : 1
        }
        cost += d === 1 ? 0.6 : d >= 4 ? 0.4 : 0
        cost += Math.abs(pt.step - home(i)) / 3
        out.push({ s: { start: t, dur: d, p: pt }, cost })
      }
    }
    return out.sort((a, b) => a.cost - b.cost).map((x) => x.s)
  }

  function dfs(): void {
    if (timedOut || found.length >= o.maxSolutions) return
    // the free voice that ends first moves next
    let i = -1
    for (const j of freeIdx) if (endOf(j) < total && (i < 0 || endOf(j) < endOf(i))) i = j
    if (i < 0) {
      const report = mcheck(mp, lines)
      if (report.hard.length) return
      if (mverify(mp, lines).length) {
        disputed++
        return
      }
      found.push({ lines: lines.map((l) => l.slice()), report })
      return
    }
    const key = stateKey()
    if (dead.has(key)) return
    const before = found.length
    // a bridge reaching its tail goes on into it at once, so a junction that cannot work fails here, not after the
    // other voices have tried every way through the bridge
    const tl = mp.tail?.[i] ?? []
    for (const s of endOf(i) === tailAt[i] && tl.length ? [tl] : moves(i).map((x) => (tl.length && x.start + x.dur === tailAt[i] ? [x, ...tl] : [x]))) {
      if ((++nodes & 1023) === 0 && Date.now() - t0 > o.timeMs) {
        timedOut = true
        return
      }
      const from = lines.map((l) => notesOf(l).slice(-3)[0]?.start ?? 0)
      lines[i].push(...s)
      if (s.length === 1) from[i] = notesOf(lines[i]).slice(-3)[0]?.start ?? 0
      const r = mcheck(mp, lines, true, i, from)
      if (!r.hard.length) {
        furthest = Math.max(furthest, Math.min(...freeIdx.map(endOf)))
        dfs()
      }
      lines[i].length -= s.length
      if (timedOut || found.length >= o.maxSolutions) return
    }
    if (found.length === before) dead.add(key)
  }
  dfs()
  const exhausted = !timedOut && found.length < o.maxSolutions && !disputed
  const status: Status = found.length ? 'valid' : exhausted ? 'unsat' : 'unknown'
  return { solutions: found, status, nodes, disputed, furthest, domain: text }
}

/* ---------- the versions the book names ---------- */

/** Every re-ordering of n voices by octave shifts (tam trùng / tứ trùng quãng 8, tr. 43–45): voice moved by 7 × (rank change). */
/** Every order of n voices, the original first. */
export function perms(n: number): number[][] {
  const out: number[][] = []
  const go = (a: number[], rest: number[]) => (rest.length ? rest.forEach((x, k) => go([...a, x], rest.filter((_, j) => j !== k))) : out.push(a))
  go([], [...Array(n).keys()])
  return out
}
/** The book's Iv of the pair (upper v, lower w) in the original: v up is +, w up is − (tr. 40, sơ đồ 29); Iv1 + Iv2 = Iv3. */
export const pairIv = (steps: number[], v: number, w: number) => steps[v] - steps[w]

export function octaveVersions(n: number): MVersion[] {
  return perms(n)
    .filter((p) => p.some((x, k) => x !== k))
    .map((order, k) => ({ label: `BT${k + 1}`, order, steps: [...Array(n).keys()].map((v) => 7 * (order.indexOf(v) * -1 + v)) }))
}

/** Several searches: the first with the whole time (its verdict decides 'unsat'), then a few more for variety. */
export function msolveMany(mp: MProblem, timeMs: number, want = 4): MResult {
  const t0 = Date.now()
  const first = msolve(mp, { timeMs, maxSolutions: 2, seed: 1 })
  if (first.status !== 'valid') return first
  const all = new Map(first.solutions.map((s) => [JSON.stringify(s.lines), s]))
  let nodes = first.nodes
  // more answers than shown, then the ones with the fewest soft remarks (none of them breaks a hard rule)
  for (let seed = 2; all.size < want * 3 && Date.now() - t0 < timeMs / 2; seed++) {
    const r = msolve(mp, { timeMs: Math.min(timeMs / 2 - (Date.now() - t0), timeMs / 8), maxSolutions: 2, seed: seed * 7919 })
    nodes += r.nodes
    for (const s of r.solutions) all.set(JSON.stringify(s.lines), s)
  }
  return { ...first, nodes, solutions: [...all.values()].sort((a, b) => a.report.penalty - b.report.penalty).slice(0, want) }
}

export type Graded = { report: MReport; unfinished: string[]; disputed: string[] }
/** Grade a texture the student wrote: every rule (as for an answer), what is not written to the end, and any line
 *  the independent checker sees differently (a bug, shown rather than hidden). */
export function gradeMulti(mp: MProblem, lines: Seg[][]): Graded {
  const total = totalOfM(mp)
  const unfinished: string[] = []
  lines.forEach((l, i) => {
    if (!mp.free[i]) return
    const end = mp.ends?.[i] ?? total
    const got = l.length ? l[l.length - 1].start + l[l.length - 1].dur : 0
    if (got !== end) unfinished.push(`bè ${ROMAN[i]}`)
  })
  const report = mcheck(mp, lines)
  const faults = mverify(mp, lines)
  return { report, unfinished, disputed: (faults.length === 0) !== (report.hard.length === 0) ? faults : [] }
}
