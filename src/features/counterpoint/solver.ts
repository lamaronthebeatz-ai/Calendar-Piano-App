/**
 * Depth-first search for a counterpoint line: note by note, every partial line is checked with `check` (hard rules
 * only), so a branch dies at the first broken rule. Complete lines are ranked by the soft-rule penalty.
 * When nothing is found the search reports where it got furthest and which rules stopped it there.
 */
import { barQ, inKey, interval, makeVersion, notesOf, pitchName, upperLower, type Pitch, type Seg } from './model'
import { check, placeOk, totalOf, type Problem, type Report, type RuleId } from './rules'

export type Solution = { cp: Seg[]; penalty: number; report: Report }
export type Blocker = { rule: RuleId; t: number; count: number; detail?: string; version: string }
export type StarIssue = { t: number; reason: string }
export type SolveResult = { solutions: Solution[]; nodes: number; exhausted: boolean; furthest: number; blockers: Blocker[]; stars?: StarIssue[] }
export type SolveOpts = { timeMs: number; maxSolutions: number; seed?: number }

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

  const cp: Seg[] = []
  /** States already searched to the end without an answer. Hard rules look back at most three notes, so the time plus
   *  the last three notes (and how the last segment may be tied) decide everything that can still follow. */
  const dead = new Set<string>()
  const stateKey = (t: number) => {
    const n = notesOf(cp).slice(-3)
    const last = cp[cp.length - 1]
    return `${t}|${n.map((x) => `${x.start}.${x.dur}.${x.p.midi}`).join(',')}|${last ? last.dur : 0}`
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

  function dfs(t: number): void {
    if (timedOut || found.size >= o.maxSolutions) return
    const key = t < total ? stateKey(t) : ''
    if (key && dead.has(key)) return
    const before = found.size
    if (t >= total) {
      const report = check(p, cp, total)
      if (report.hard.length === 0) {
        const k = keyOf(cp)
        if (!found.has(k)) found.set(k, { cp: cp.slice(), penalty: report.penalty, report })
      } else note(report)
      return
    }
    for (const s of moves(t)) {
      if ((++nodes & 1023) === 0 && Date.now() - t0 > o.timeMs) {
        timedOut = true
        return
      }
      cp.push(s)
      const end = s.start + s.dur
      const r = check(p, cp, end, true)
      if (r.hard.length === 0) {
        if (end > furthest) {
          furthest = end
          fails.clear()
        }
        dfs(end)
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

  dfs(0)
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
