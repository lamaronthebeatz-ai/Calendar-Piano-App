/**
 * Depth-first search for a counterpoint line: note by note, every partial line is checked with `check` (hard rules
 * only), so a branch dies at the first broken rule. Complete lines are ranked by the soft-rule penalty.
 * When nothing is found the search reports where it got furthest and which rules stopped it there.
 */
import { barQ, inKey, interval, makeVersion, notesOf, pitchName, upperLower, type Pitch, type Seg } from './model'
import { check, checkLine, isSoft, placeOk, totalOf, type Problem, type Report, type RuleId, type VersionSpec } from './rules'
import type { Key, Meter } from './model'

export type Solution = { cp: Seg[]; penalty: number; report: Report }
export type Blocker = { rule: RuleId; t: number; count: number; detail?: string; version: string }
export type StarIssue = { t: number; reason: string }
export type SolveResult = { solutions: Solution[]; nodes: number; exhausted: boolean; furthest: number; blockers: Blocker[]; stars?: StarIssue[] }
/** `prefix`: notes already written (the search continues after them); `budget`: how many broken hard rules a line may
 *  carry (0 = a lawful line; 1–2 = the "fewest faults" search used when an exercise has no lawful answer). */
export type SolveOpts = { timeMs: number; maxSolutions: number; seed?: number; prefix?: Seg[]; budget?: number }
/** Distinct hard faults: the same broken rule at the same moment counts once, however many versions show it. */
export const faultsOf = (r: Report) => new Set(r.hard.map((v) => `${v.rule}|${v.t}`)).size

const DURS = [6, 4, 3, 2, 1]

export function solve(p: Problem, o: SolveOpts): SolveResult {
  const total = totalOf(p)
  const B = barQ(p.meter)
  const gSteps = p.given.map((s) => s.p.step)
  const gLo = Math.min(...gSteps)
  const gHi = Math.max(...gSteps)
  const cpUpper = p.givenIs === 'II'
  const lo = cpUpper ? gLo - 2 : gLo - 10
  const hi = cpUpper ? gHi + 10 : gHi + 2
  const steps: number[] = []
  for (let s = lo; s <= hi; s++) steps.push(s)
  const givenNotes = notesOf(p.given)
  const givenAt = (t: number) => givenNotes.find((n) => n.start <= t && t < n.start + n.dur)!

  let seed = o.seed ?? 1
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const t0 = Date.now()
  let nodes = 0
  let timedOut = false
  const found = new Map<string, Solution>()
  let furthest = 0
  const fails = new Map<string, Blocker>()

  const cp: Seg[] = (o.prefix ?? []).slice()
  const budget = o.budget ?? 0
  /** States already searched to the end without an answer. Hard rules look back at most three notes, so the time plus
   *  the last three notes (and how the last segment may be tied) decide everything that can still follow. */
  const dead = new Set<string>()
  const stateKey = (t: number) => {
    const n = notesOf(cp).slice(-3)
    const last = cp[cp.length - 1]
    return `${t}|${n.map((x) => `${x.start}.${x.dur}.${x.p.midi}`).join(',')}|${last ? last.dur : 0}|${budget ? faults : 0}`
  }
  const keyOf = (segs: Seg[]) => segs.map((s) => `${s.start}:${s.dur}:${s.p.midi}${s.tied ? '~' : ''}`).join(' ')

  function moves(t: number): Seg[] {
    const off = t % B
    const last = cp[cp.length - 1]
    const out: { s: Seg; cost: number }[] = []
    const g = givenAt(t)
    for (const d of DURS) {
      if (t + d > total || !placeOk(p.meter, off, d)) continue
      // the last note must reach the end, and nothing shorter than a half ends the piece
      if (t + d === total && d < 2) continue
      // held over: a tie from the previous segment (no quarter ties, no short-to-long)
      // a tie inside a bar only where one note could not be written instead (a whole note, not a dotted half + a quarter)
      const oneNote = last && off !== 0 && placeOk(p.meter, last.start % B, last.dur + d)
      if (last && !oneNote && last.start + last.dur === t && (last.dur >= 2 || p.quarterPrep) && (last.dur >= d || (last.dur === 2 && d === 4))) {
        out.push({ s: { start: t, dur: d, p: last.p, tied: true }, cost: 0.6 + rnd() * 1.2 })
      }
      for (const st of steps) {
        const pt = inKey(p.key, st)
        const iv = cpUpper ? interval(pt, g.p) : interval(g.p, pt)
        if (iv.n < 0) continue
        let cost = rnd() * 1.6
        if (last) {
          const leap = Math.abs(st - last.p.step)
          cost += leap === 0 ? 4 : leap === 1 ? 0 : leap === 2 ? 1 : leap <= 4 ? 2 : 3
        }
        cost += t === 0 ? (iv.kind === 'perfect' ? 0 : 2) : iv.kind === 'imperfect' ? 0 : iv.kind === 'perfect' ? 1.5 : 1
        // rhythmic contrast: avoid striking together with the đề for the same length
        if (g.start === t && g.dur === d) cost += 1
        cost += d === 1 ? 0.6 : d >= 4 ? 0.4 : 0
        out.push({ s: { start: t, dur: d, p: pt }, cost })
      }
    }
    return out.sort((a, b) => a.cost - b.cost).map((x) => x.s)
  }

  let faults = 0
  function dfs(t: number): void {
    if (timedOut || found.size >= o.maxSolutions) return
    const key = t < total ? stateKey(t) : ''
    if (key && dead.has(key)) return
    const before = found.size
    if (t >= total) {
      const report = check(p, cp, total)
      const f = faultsOf(report)
      if (f <= budget) {
        const k = keyOf(cp)
        if (!found.has(k)) found.set(k, { cp: cp.slice(), penalty: f * 1000 + report.penalty, report })
      } else note(report)
      return
    }
    let tries: { s: Seg; r?: Report; f?: number }[] = moves(t).map((s) => ({ s }))
    if (budget) {
      // with faults allowed, spend them as late as possible: lawful continuations first
      for (const x of tries) {
        cp.push(x.s)
        x.r = check(p, cp, x.s.start + x.s.dur)
        x.f = faultsOf(x.r)
        cp.pop()
      }
      tries = tries.sort((a, b) => a.f! - b.f!)
    }
    for (const { s, r: pre, f: preF } of tries) {
      if ((++nodes & 1023) === 0 && Date.now() - t0 > o.timeMs) {
        timedOut = true
        return
      }
      cp.push(s)
      const end = s.start + s.dur
      const r = pre ?? check(p, cp, end, true)
      const f = preF ?? r.hard.length
      if (f <= budget) {
        if (end > furthest) {
          furthest = end
          fails.clear()
        }
        const keep = faults
        faults = f
        dfs(end)
        faults = keep
      } else note(r)
      cp.pop()
      if (timedOut || found.size >= o.maxSolutions) return
    }
    if (key && found.size === before) dead.add(key)
  }
  /** Remember what broke at the furthest point reached: that is where the exercise is stuck. */
  function note(r: Report) {
    const v = r.hard[0]
    if (!v || v.t + 1 < furthest) return
    const k = `${v.rule}|${v.t}|${v.version}|${v.detail ?? ''}`
    const b = fails.get(k)
    if (b) b.count++
    else fails.set(k, { rule: v.rule, t: v.t, count: 1, detail: v.detail, version: v.version })
  }

  const start = cp.length ? cp[cp.length - 1].start + cp[cp.length - 1].dur : 0
  if (cp.length) faults = faultsOf(check(p, cp, start))
  if (faults <= budget) dfs(start)
  const solutions = [...found.values()].sort((a, b) => a.penalty - b.penalty)
  const blockers = [...fails.values()].sort((a, b) => b.t - a.t || b.count - a.count).slice(0, 8)
  return { solutions, nodes, exhausted: !timedOut && found.size < o.maxSolutions, furthest, blockers }
}

/** Several searches with different random orders: more varied answers than one long search. */
export function solveMany(p: Problem, timeMs: number, want = 6): SolveResult {
  const stars = starCheck(p)
  if (stars.length) return { solutions: [], nodes: 0, exhausted: true, furthest: 0, blockers: [], stars }
  const t0 = Date.now()
  const all = new Map<string, Solution>()
  let nodes = 0
  let last: SolveResult | null = null
  let exhausted = false
  for (let seed = 1; Date.now() - t0 < timeMs && all.size < want * 3; seed++) {
    const left = timeMs - (Date.now() - t0)
    const r = solve(p, { timeMs: seed === 1 ? left : Math.min(left, timeMs / 4), maxSolutions: seed === 1 ? 2 : 4, seed: seed * 7919 })
    nodes += r.nodes
    last = r
    for (const s of r.solutions) all.set(s.cp.map((x) => `${x.start}:${x.dur}:${x.p.midi}${x.tied ? '~' : ''}`).join(' '), s)
    // the first search ran with the whole budget: if it finished without a single answer, there is none
    if (seed === 1 && r.exhausted && r.solutions.length === 0) {
      exhausted = true
      break
    }
  }
  const solutions = [...all.values()].sort((a, b) => a.penalty - b.penalty).slice(0, want)
  return { solutions, nodes, exhausted, furthest: last?.furthest ?? 0, blockers: last?.blockers ?? [] }
}

/**
 * Each ✱ on its own: is there any way at all to sound a lawful dissonance there? A strong-beat dissonance can only be
 * a suspension (doi-vi-don-gian-hai-be §3a), so either the đề holds a note over the ✱ and the counterpoint strikes
 * against it, or the đề strikes and the counterpoint must hold a prepared note. Checked in the original and every
 * version, with the same placement and tie rules as the search. A ✱ with no way is a proof that the exercise has no
 * answer, and the reason names the notes of the đề that close every door.
 */
export function starCheck(p: Problem): StarIssue[] {
  const total = totalOf(p)
  const B = barQ(p.meter)
  const g = notesOf(p.given)
  const gAt = (t: number) => g.find((n) => n.start <= t && t < n.start + n.dur)!
  const steps = p.given.map((x) => x.p.step)
  const cpUpper = p.givenIs === 'II'
  const lo = cpUpper ? Math.min(...steps) - 2 : Math.min(...steps) - 10
  const hi = cpUpper ? Math.max(...steps) + 10 : Math.max(...steps) + 2
  const specs = [{ shift: { I: 0, II: 0 }, motion: 'near' as const, label: 'Nguyên thể' }, ...p.versions]
  /** The interval at time t when the counterpoint sounds `c`, in every version (index 0 = the original). */
  const ivs = (c: Pitch, t: number) =>
    specs.map((sp) => {
      const cpSeg: Seg[] = [{ start: 0, dur: total, p: c }]
      const gSeg: Seg[] = [{ start: 0, dur: total, p: gAt(t).p }]
      const v = makeVersion(p.key, p.givenIs === 'I' ? gSeg : cpSeg, p.givenIs === 'I' ? cpSeg : gSeg, sp.shift, sp.label, sp.motion)
      const { upper, lower } = upperLower(v)
      const it = interval(upper[0].p, lower[0].p)
      // which voice is on top in this version: the counterpoint or the đề
      const cpIsUp = (upper === v.I) === (p.givenIs === 'II')
      return { it, cpIsUp }
    })
  const posOk = (n: number, heldIsUp: boolean) => {
    const s = ((n % 7) + 7) % 7
    if (s === 1 && n === 1 && heldIsUp) return false
    if (s === 6 && !heldIsUp) return false
    if (s === 3 && n >= 10 && !heldIsUp) return false
    return true
  }
  const out: StarIssue[] = []
  for (const t of p.stars) {
    const gn = gAt(t)
    const gStrikes = gn.start === t
    let ok = false
    if (gStrikes) {
      // the counterpoint holds a prepared note over the ✱
      for (let s0 = t - (p.quarterPrep ? 1 : 2); s0 >= Math.max(0, t - B) && !ok; s0--) {
        const L = t - s0
        if (!placeOk(p.meter, s0 % B, L) || Math.floor(s0 / B) !== Math.floor((t - 1) / B)) continue
        const gTimes = [s0, ...g.filter((n) => n.start > s0 && n.start < t).map((n) => n.start)]
        for (let st = lo; st <= hi && !ok; st++) {
          const c = inKey(p.key, st)
          if (!gTimes.every((x) => ivs(c, x).every((r) => r.it.n >= 0 && r.it.kind !== 'dissonant'))) continue
          const at = ivs(c, t)
          if (at[0].it.kind !== 'dissonant') continue
          if (!at.every((r) => r.it.n >= 0 && (r.it.kind !== 'dissonant' || posOk(r.it.n, r.cpIsUp)))) continue
          for (let dd = 1; dd <= L && !ok; dd++) {
            const r = t + dd
            if (r >= total || !placeOk(p.meter, t % B, dd) || g.some((n) => n.start > t && n.start < r)) continue
            const res = inKey(p.key, st - 1)
            if (ivs(res, r).every((x) => x.it.n >= 0 && x.it.kind !== 'dissonant')) ok = true
          }
        }
      }
      if (!ok) {
        const win = g.filter((n) => n.start + n.dur > t - B && n.start < t)
        out.push({ t, reason: `Bè đề đánh nốt mới (${pitchName(gn.p)}) ngay ở chỗ ✱, nên quãng nghịch chỉ có thể là nốt lưu ở bè đối vị. Nốt chuẩn bị phải dài từ nốt trắng trở lên, đặt đúng phách, thuận với mọi nốt bè đề vang trong lúc chuẩn bị (${win.map((n) => pitchName(n.p)).join(', ')}) ở cả nguyên thể lẫn biến thể, rồi giải quyết xuống liền bậc vào quãng thuận — không có nốt nào thoả cả bốn điều kiện.` })
      }
    } else {
      // the đề holds its note over the ✱: the counterpoint strikes a dissonance and the đề must resolve down by step
      const nx = g.find((n) => n.start === gn.start + gn.dur)
      const prep = t - gn.start
      const r = gn.start + gn.dur
      if (!nx || nx.p.step !== gn.p.step - 1) out.push({ t, reason: `Bè đề giữ ${pitchName(gn.p)} qua chỗ ✱ nhưng không giải quyết xuống liền bậc, nên không thành nốt lưu được.` })
      else if ((prep < 2 && !p.quarterPrep) || prep < r - t) out.push({ t, reason: `Nốt lưu ở bè đề (${pitchName(gn.p)}) có phần chuẩn bị ngắn hơn phần nghịch hoặc là nốt đen.` })
      else {
        for (let st = lo; st <= hi && !ok; st++) {
          const c = inKey(p.key, st)
          const at = ivs(c, t)
          if (at[0].it.kind !== 'dissonant') continue
          if (!at.every((x) => x.it.n >= 0 && (x.it.kind !== 'dissonant' || posOk(x.it.n, !x.cpIsUp)))) continue
          if (ivs(c, r).every((x) => x.it.n >= 0 && x.it.kind !== 'dissonant')) ok = true
        }
        if (!ok) out.push({ t, reason: `Bè đề giữ ${pitchName(gn.p)} làm nốt lưu, nhưng không có nốt nào của bè đối vị vừa nghịch đúng vị trí ở chỗ ✱ vừa thuận với nốt giải quyết ${pitchName(nx.p)} ở mọi bản.` })
      }
    }
  }
  return out
}

/* ---------- when there is no lawful answer: ways out that never touch the đề ---------- */

export type Relax = { id: 'quarterPrep' | 'noStar'; t?: number; label: string; solutions: Solution[]; exhausted: boolean }
export type Rescue = { stars: StarIssue[]; relax: Relax[]; near: Solution[]; nearFaults: number }

/**
 * The đề (notes, ✱, required versions) stays exactly as given; nothing here is offered as a corrected đề. Ways out:
 * a teacher's allowance the book does not make (a quarter-note preparation); for each ✱ the book makes impossible, the
 * answer that keeps every other rule with only that spot left consonant; failing those, the line breaking the fewest
 * hard rules — each named, so the student can ask the teacher about that one spot.
 */
export function rescue(p: Problem, timeMs: number): Rescue {
  const t0 = Date.now()
  const stars = starCheck(p)
  const relax: Relax[] = []
  const slice = timeMs / (2 + stars.length)
  if (!p.quarterPrep) {
    const q = { ...p, quarterPrep: true }
    const r = starCheck(q).length ? { solutions: [], exhausted: true } : solveMany(q, slice, 4)
    relax.push({ id: 'quarterPrep', label: 'Nếu thầy cho phép nốt đen làm nốt chuẩn bị', solutions: r.solutions, exhausted: r.exhausted })
  }
  const bad = [...new Set(stars.map((x) => x.t))]
  for (const t of bad) {
    const q = { ...p, stars: p.stars.filter((x) => x !== t) }
    const r = starCheck(q).length ? { solutions: [], exhausted: true } : solveMany(q, slice, 4)
    relax.push({ id: 'noStar', t, label: '', solutions: r.solutions, exhausted: r.exhausted })
  }
  let near: Solution[] = []
  let nearFaults = 0
  if (!relax.some((x) => x.solutions.length)) {
    for (const budget of [1, 2, 3]) {
      const left = timeMs - (Date.now() - t0)
      if (left < 300) break
      const r = solve(p, { timeMs: left / (4 - budget), maxSolutions: 4, budget, seed: 11 * budget })
      if (r.solutions.length) {
        near = r.solutions
        nearFaults = budget
        break
      }
    }
  }
  return { stars, relax, near, nearFaults }
}

/* ---------- practice: which next notes still lead to an answer ---------- */

export type Hint = { seg: Seg; status: 'ok' | 'dead' | 'unknown' }

/** Every lawful next note after `prefix`, each tested by a short search: does a complete answer still exist from it? */
export function hints(p: Problem, prefix: Seg[], timeMs: number): Hint[] {
  const t0 = Date.now()
  const total = totalOf(p)
  const B = barQ(p.meter)
  const t = prefix.length ? prefix[prefix.length - 1].start + prefix[prefix.length - 1].dur : 0
  if (t >= total) return []
  const last = prefix[prefix.length - 1]
  const gSteps = p.given.map((x) => x.p.step)
  const cpUpper = p.givenIs === 'II'
  const lo = cpUpper ? Math.min(...gSteps) - 2 : Math.min(...gSteps) - 10
  const hi = cpUpper ? Math.max(...gSteps) + 10 : Math.max(...gSteps) + 2
  const cands: Seg[] = []
  for (const d of DURS) {
    if (t + d > total || !placeOk(p.meter, t % B, d) || (t + d === total && d < 2)) continue
    if (last && last.start + last.dur === t && (last.dur >= 2 || p.quarterPrep) && (last.dur >= d || (last.dur === 2 && d === 4))) cands.push({ start: t, dur: d, p: last.p, tied: true })
    for (let st = lo; st <= hi; st++) cands.push({ start: t, dur: d, p: inKey(p.key, st) })
  }
  const legal = cands.filter((c) => check(p, [...prefix, c], c.start + c.dur, true).hard.length === 0)
  const out: Hint[] = []
  for (const c of legal) {
    const left = timeMs - (Date.now() - t0)
    if (left < 40) {
      out.push({ seg: c, status: 'unknown' })
      continue
    }
    const r = solve(p, { timeMs: Math.min(700, left / 2), maxSolutions: 1, prefix: [...prefix, c], seed: 3 })
    out.push({ seg: c, status: r.solutions.length ? 'ok' : r.exhausted ? 'dead' : 'unknown' })
  }
  const rank = { ok: 0, unknown: 1, dead: 2 }
  return out.sort((a, b) => rank[a.status] - rank[b.status])
}

/* ---------- the exercise generator ---------- */

export type Level = 'de' | 'vua' | 'kho'
export type Generated = { key: Key; meter: Meter; given: Seg[]; givenIs: 'I' | 'II'; stars: number[]; versions: VersionSpec[]; answer: Solution }

const GEN_KEYS: Key[] = [
  { tonic: 0, alter: 0, minor: false },
  { tonic: 4, alter: 0, minor: false },
  { tonic: 3, alter: 0, minor: false },
  { tonic: 5, alter: 0, minor: true },
  { tonic: 1, alter: 0, minor: true, sig: 0, mode: 'Dorian' },
  { tonic: 4, alter: 0, minor: false, sig: 0, mode: 'Mixolydian' },
]

/**
 * A new exercise that is sure to have an answer: a đề written by the same melodic and rhythmic rules, ✱ only where a
 * lawful dissonance can exist, and a full solve before it is handed out (the answer comes with it).
 */
export function generate(level: Level, seed: number, timeMs: number): Generated | null {
  const t0 = Date.now()
  let sd = seed
  const rnd = () => ((sd = (sd * 16807) % 2147483647) / 2147483647)
  const pick = <T,>(xs: T[]) => xs[Math.floor(rnd() * xs.length)]
  const conf = {
    de: { bars: 4, stars: [1, 2], versions: [[{ shift: { I: -7, II: 0 }, motion: 'swap', label: 'Iv −7' }]] },
    vua: { bars: 6, stars: [2, 3], versions: [[{ shift: { I: -7, II: 0 }, motion: 'swap', label: 'Iv −7' }, { shift: { I: -4, II: -3 }, motion: 'swap', label: 'BT1' }]] },
    kho: { bars: 8, stars: [3, 4], versions: [[{ shift: { I: -7, II: 0 }, motion: 'swap', label: 'Iv −7' }, { shift: { I: -11, II: 0 }, motion: 'swap', label: 'Iv −11' }], [{ shift: { I: -7, II: 0 }, motion: 'swap', label: 'Iv −7' }, { shift: { I: -9, II: 0 }, motion: 'swap', label: 'Iv −9' }]] },
  }[level] as { bars: number; stars: number[]; versions: VersionSpec[][] }
  while (Date.now() - t0 < timeMs) {
    const key = pick(GEN_KEYS)
    const meter: Meter = pick([{ num: 3, den: 2 }, { num: 2, den: 2 }, { num: 4, den: 2 }] as Meter[])
    const givenIs: 'I' | 'II' = level === 'kho' && rnd() < 0.5 ? 'I' : 'II'
    const given = genLine(key, meter, conf.bars, givenIs, rnd)
    if (!given) continue
    const B = barQ(meter)
    const versions = pick(conf.versions)
    const base: Problem = { key, meter, given, givenIs, stars: [], versions, starsOnly: true }
    const cands: number[] = []
    for (let b = 1; b < conf.bars - 1; b++) if (starCheck({ ...base, stars: [b * B] }).length === 0) cands.push(b * B)
    const want = conf.stars[0] + Math.floor(rnd() * (conf.stars[1] - conf.stars[0] + 1))
    if (cands.length < conf.stars[0]) continue
    const stars = cands.sort(() => rnd() - 0.5).slice(0, want).sort((a, b) => a - b)
    const p = { ...base, stars }
    const r = solveMany(p, Math.min(3000, timeMs - (Date.now() - t0)), 3)
    if (r.solutions.length) return { key, meter, given, givenIs, stars, versions, answer: r.solutions[0] }
  }
  return null
}

/** A đề line: starts and ends on the final, mostly stepwise, mixed values with some ties, every line rule obeyed. */
function genLine(key: Key, meter: Meter, bars: number, voice: 'I' | 'II', rnd: () => number): Seg[] | null {
  const B = barQ(meter)
  const total = bars * B
  const tonic = voice === 'II' ? 28 + key.tonic - (key.tonic > 4 ? 7 : 0) : 35 + key.tonic - (key.tonic > 2 ? 7 : 0)
  const segs: Seg[] = []
  let tries = 0
  const ok = (H: number) => {
    let bad = false
    checkLine(meter, segs, H, total, {}, (r) => {
      if (!isSoft(r)) bad = true
    })
    return !bad
  }
  const go = (t: number): boolean => {
    if (++tries > 4000) return false
    if (t === total) return ok(total)
    const bar = Math.floor(t / B)
    const off = t % B
    // the last bar: the final, held for the whole bar, reached by step
    if (bar === bars - 1) {
      if (off !== 0) return false
      const last = segs[segs.length - 1]
      if (!last || Math.abs(last.p.step - tonic) !== 1) return false
      segs.push({ start: t, dur: B, p: inKey(key, tonic) })
      if (ok(total)) return true
      segs.pop()
      return false
    }
    const durs = (off === 0 ? [4, 2, 2, 3, 6, 1] : [2, 2, 1, 1, 4, 3]).filter((d) => placeOk(meter, off, d))
    const last = segs[segs.length - 1]
    const opts: Seg[] = []
    for (const d of durs.sort(() => rnd() - 0.5)) {
      // a tie over the bar line now and then: it gives the counterpoint a suspension in the đề to answer
      if (last && off === 0 && last.dur >= 2 && last.dur >= d && rnd() < 0.3) opts.push({ start: t, dur: d, p: last.p, tied: true })
      const moves = [-1, 1, -1, 1, -2, 2, 3, -3, 4, -4].sort(() => rnd() - 0.5)
      for (const mv of moves) {
        const st = t === 0 ? tonic : (last?.p.step ?? tonic) + mv
        if (Math.abs(st - tonic) > 5) continue
        opts.push({ start: t, dur: d, p: inKey(key, st) })
        if (t === 0) break
      }
    }
    for (const sg of opts.slice(0, 14)) {
      segs.push(sg)
      if (ok(t + sg.dur) && go(t + sg.dur)) return true
      segs.pop()
    }
    return false
  }
  return go(0) ? segs.slice() : null
}
