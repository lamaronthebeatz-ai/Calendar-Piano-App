/**
 * Imitation and canon (Phạm Tú Hương tr. 46–63). One shape covers every kind the book teaches: a leader P whose opening A
 * is the đề and whose rest the machine writes, and followers R that copy P — later by `delay`, moved by `steps`, and for a
 * simple imitation possibly inverted, augmented, diminished or reversed. A canon copies the whole leader and repeats:
 * vô tận returns at the same pitch, mô tiến each time `step` higher or lower. The texture is then judged as two or three
 * voices (multi.ts: every pair by the two-voice rules, the fourth free in the upper pair of three) — during the search on
 * what is already known from the start, and once P is complete on every cycle, then again by the independent checker.
 */
import { barQ, inKey, mirrorOf, notesOf, pitchName, transposeBy, type Key, type Meter, type Pitch, type Seg } from './model'
import { placeOk } from './rules'
import { mcheck, mverify, type MProblem, type MReport } from './multi'
import type { Status } from './solver'

export type Transform = 'same' | 'inv' | 'aug' | 'dim' | 'retro' | 'inv-aug' | 'inv-dim'
export const TRANSFORMS: { id: Transform; label: string }[] = [
  { id: 'same', label: 'Cùng hướng' },
  { id: 'inv', label: 'Đảo ảnh' },
  { id: 'aug', label: 'Phóng to trường độ (×2)' },
  { id: 'dim', label: 'Thu nhỏ trường độ (÷2)' },
  { id: 'retro', label: 'Ngược hướng' },
  { id: 'inv-aug', label: 'Đảo ảnh + phóng to' },
  { id: 'inv-dim', label: 'Đảo ảnh + thu nhỏ' },
]
export type Follower = { delay: number; steps: number; transform: Transform }
export type CanonSpec = {
  key: Key
  meter: Meter
  /** simple: the followers copy the opening A only; canon: they copy the whole leader, cycle after cycle */
  kind: 'simple' | 'canon'
  A: Seg[]
  /** the leader's material in quarters: one cycle of a canon, the whole leader of a simple imitation */
  L: number
  cycles: number
  /** steps added to each new cycle of a canon (0 = vô tận) */
  step: number
  followers: Follower[]
  /** voices top to bottom: 0 = P, 1… = followers */
  order: number[]
  /** move by the exact interval (into the related key, like the Iv versions) instead of along the key's own notes */
  real?: boolean
}
export type CanonSolution = { lines: Seg[][]; report: MReport }
export type CanonResult = { solutions: CanonSolution[]; status: Status; nodes: number; disputed: number; furthest: number; domain: string; problem?: string }

const DURS = [8, 6, 4, 3, 2, 1]
const SPAN = 14
const lenOf = (segs: Seg[]) => (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)

/** Move a pitch by steps: along the key's notes (keeping any alteration of its own), or by the exact interval. */
export function mover(k: Key, steps: number, real: boolean): (p: Pitch) => Pitch {
  if (real) return transposeBy(k, steps)
  return (p) => {
    const dev = p.alter - inKey(k, p.step).alter
    const q = inKey(k, p.step + steps)
    return { step: q.step, alter: q.alter + dev, midi: q.midi + dev }
  }
}

/** What a follower plays, from its source melody (starting at time 0); null when the transform cannot be written. */
export function transformLine(k: Key, src: Seg[], f: Follower, real = false): Seg[] | null {
  const len = lenOf(src)
  let out = src.map((s) => ({ ...s }))
  if (f.transform.startsWith('inv')) {
    const m = mirrorOf(k, src, [])
    out = out.map((s) => ({ ...s, p: m(s.p) }))
  }
  if (f.transform.endsWith('aug')) out = out.map((s) => ({ ...s, start: s.start * 2, dur: s.dur * 2 }))
  if (f.transform.endsWith('dim')) {
    if (out.some((s) => s.start % 2 || s.dur % 2)) return null // no eighth notes in this search
    out = out.map((s) => ({ ...s, start: s.start / 2, dur: s.dur / 2 }))
  }
  if (f.transform === 'retro') {
    // notes in reverse order; ties become plain notes of the merged length
    out = notesOf(src).reverse().map((n) => ({ start: len - (n.start + n.dur), dur: n.dur, p: n.p }))
  }
  const t = mover(k, f.steps, real)
  return out.map((s) => ({ ...s, start: s.start + f.delay, p: t(s.p) }))
}

/** The leader over all its cycles (or as far as `u` is known when it is not complete). */
function leaderOf(spec: CanonSpec, u: Seg[], complete: boolean): Seg[] {
  if (spec.kind === 'simple' || !complete) return u.slice()
  const out: Seg[] = []
  for (let c = 0; c < spec.cycles; c++) {
    const t = mover(spec.key, c * spec.step, !!spec.real)
    for (const s of u) out.push({ ...s, start: s.start + c * spec.L, p: t(s.p), tied: c > 0 && s === u[0] ? false : s.tied })
  }
  return out
}

/** All the voices (index 0 = P), and where each must end. */
export function textureOf(spec: CanonSpec, u: Seg[], complete: boolean): { lines: Seg[][]; ends: number[] } | null {
  const P = leaderOf(spec, u, complete)
  const lines = [P]
  const ends = [spec.kind === 'simple' ? spec.L : spec.L * spec.cycles]
  for (const f of spec.followers) {
    const src = spec.kind === 'simple' ? spec.A : P
    const r = transformLine(spec.key, src, f, spec.real)
    if (!r) return null
    lines.push(r)
    ends.push(spec.kind === 'simple' ? f.delay + lenOf(transformLine(spec.key, spec.A, { ...f, delay: 0 }) ?? []) : f.delay + spec.L * spec.cycles)
  }
  return { lines, ends }
}

/** The texture as a multi-voice problem: voices re-ordered top to bottom, every one judged (none is fixed). */
function asProblem(spec: CanonSpec, ends: number[], lines: Seg[][]): { mp: MProblem; lines: Seg[][] } {
  const o = spec.order
  return {
    mp: { key: spec.key, meter: spec.meter, voices: o.map((i) => lines[i]), free: o.map(() => true), versions: [], ends: o.map((i) => ends[i]) },
    lines: o.map((i) => lines[i]),
  }
}

export function canonDomain(spec: CanonSpec) {
  const steps = spec.A.map((s) => s.p.step)
  const lo = Math.min(...steps) - SPAN
  const hi = Math.max(...steps) + SPAN
  const pitches: Pitch[] = []
  for (let st = lo; st <= hi; st++) pitches.push(inKey(spec.key, st))
  for (const s of spec.A) if (!pitches.some((x) => x.step === s.p.step && x.alter === s.p.alter)) pitches.push(s.p)
  const text = `bè P viết tiếp bằng nốt của giọng (và biến âm có trong đề), trong khoảng ${pitchName(inKey(spec.key, lo))} – ${pitchName(inKey(spec.key, hi))}, không dấu lặng, không nốt móc đơn; chưa có đoạn kết riêng (các bè dừng lần lượt)`
  return { pitches, text }
}

/** Why a spec cannot be searched at all (asked before any search). */
export function canonProblem(spec: CanonSpec): string | null {
  const a = lenOf(spec.A)
  if (!spec.A.length) return 'Chưa có đoạn mở đầu A (bè đề).'
  if (a > spec.L) return 'Đoạn A dài hơn độ dài của bè P.'
  if (spec.followers.some((f) => f.transform !== 'same') && spec.kind === 'canon') return 'Canon chỉ chép nguyên giai điệu (cùng hướng).'
  if (spec.followers.some((f) => !transformLine(spec.key, spec.A, f))) return 'Thu nhỏ trường độ làm xuất hiện nốt móc đơn — ngoài phạm vi tìm kiếm.'
  if (spec.followers.some((f) => f.delay <= 0)) return 'Bè mô phỏng phải vào sau bè P.'
  return null
}

export function canonSolve(spec: CanonSpec, o: { timeMs: number; maxSolutions: number; seed?: number }): CanonResult {
  const { pitches, text } = canonDomain(spec)
  const bad = canonProblem(spec)
  if (bad) return { solutions: [], status: 'unsat', nodes: 0, disputed: 0, furthest: 0, domain: text, problem: bad }
  const B = barQ(spec.meter)
  const u: Seg[] = spec.A.map((s) => ({ ...s }))
  let seed = o.seed ?? 1
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const t0 = Date.now()
  let nodes = 0
  let timedOut = false
  let disputed = 0
  let furthest = 0
  const found: CanonSolution[] = []
  const dead = new Set<string>()
  const maxDelay = Math.max(...spec.followers.map((f) => f.delay))
  /** Everything later checks can depend on: the followers replay the leader, so the last `maxDelay` of it, plus three notes. */
  const stateKey = (h: number) => {
    if (spec.kind === 'canon' && spec.cycles > 1) return '' // the cycles bring back the whole of P: no shortcut
    const ns = notesOf(u)
    const from = ns.findIndex((n) => n.start + n.dur > h - (spec.kind === 'canon' ? maxDelay : 0))
    return `${h}|${ns.slice(Math.max(0, Math.min(from, ns.length - 3))).map((x) => `${x.start}.${x.dur}.${x.p.step}.${x.p.alter}`).join(',')}|${u[u.length - 1]?.dur ?? 0}`
  }

  const judge = (complete: boolean): MReport | null => {
    const tx = textureOf(spec, u, complete)
    if (!tx) return null
    const { mp, lines } = asProblem(spec, tx.ends, tx.lines)
    if (complete) return mcheck(mp, lines)
    // only what is known from the start on: P up to h, each follower up to its delay + h
    const from = lines.map((l) => notesOf(l).slice(-3)[0]?.start ?? 0)
    return mcheck(mp, lines, true, -1, from)
  }

  function moves(h: number): Seg[] {
    const last = u[u.length - 1]
    const off = h % B
    const out: { s: Seg; cost: number }[] = []
    for (const d of DURS) {
      if (h + d > spec.L || !placeOk(spec.meter, off, d)) continue
      const oneNote = last && off !== 0 && placeOk(spec.meter, last.start % B, last.dur + d)
      if (last && !oneNote && last.dur >= 2 && (last.dur >= d || (last.dur === 2 && d === 4))) out.push({ s: { start: h, dur: d, p: last.p, tied: true }, cost: 0.6 + rnd() * 1.2 })
      for (const pt of pitches) {
        let cost = rnd() * 1.6
        if (last) {
          const leap = Math.abs(pt.step - last.p.step)
          cost += leap === 0 ? 4 : leap === 1 ? 0 : leap === 2 ? 1 : leap <= 4 ? 2 : 3
        }
        cost += d === 1 ? 0.6 : d >= 4 ? 0.4 : 0
        out.push({ s: { start: h, dur: d, p: pt }, cost })
      }
    }
    return out.sort((a, b) => a.cost - b.cost).map((x) => x.s)
  }

  function dfs(): void {
    if (timedOut || found.length >= o.maxSolutions) return
    const h = lenOf(u)
    if (h >= spec.L) {
      const report = judge(true)
      if (!report || report.hard.length) return
      const tx = textureOf(spec, u, true)!
      const { mp, lines } = asProblem(spec, tx.ends, tx.lines)
      if (mverify(mp, lines).length) {
        disputed++
        return
      }
      found.push({ lines: tx.lines.map((l) => l.slice()), report })
      return
    }
    const key = stateKey(h)
    if (key && dead.has(key)) return
    const before = found.length
    for (const s of moves(h)) {
      if ((++nodes & 1023) === 0 && Date.now() - t0 > o.timeMs) {
        timedOut = true
        return
      }
      u.push(s)
      const r = judge(false)
      if (r && !r.hard.length) {
        furthest = Math.max(furthest, s.start + s.dur)
        dfs()
      }
      u.pop()
      if (timedOut || found.length >= o.maxSolutions) return
    }
    if (key && found.length === before) dead.add(key)
  }
  // the opening itself must already be lawful against what the followers play over it
  const pre = judge(lenOf(u) >= spec.L)
  if (pre?.hard.length) {
    const v = pre.hard[0]
    return { solutions: [], status: 'unsat', nodes: 0, disputed: 0, furthest: 0, domain: text, problem: `Ngay trong đoạn A đã phạm luật với bè mô phỏng (${v.version}, phách đen thứ ${v.t + 1}): ${v.rule}. Đổi quãng hoặc thời điểm vào của bè mô phỏng.` }
  }
  if (pre) {
    if (lenOf(u) >= spec.L) {
      const tx = textureOf(spec, u, true)!
      const { mp, lines } = asProblem(spec, tx.ends, tx.lines)
      if (!mverify(mp, lines).length) found.push({ lines: tx.lines, report: pre })
    } else dfs()
  }
  const exhausted = !timedOut && found.length < o.maxSolutions && !disputed
  const status: Status = found.length ? 'valid' : exhausted ? 'unsat' : 'unknown'
  return { solutions: found, status, nodes, disputed, furthest, domain: text }
}

/** Several searches for variety; the first one decides 'unsat'. */
export function canonSolveMany(spec: CanonSpec, timeMs: number, want = 3): CanonResult {
  const t0 = Date.now()
  const first = canonSolve(spec, { timeMs, maxSolutions: 1, seed: 1 })
  if (first.status !== 'valid') return first
  const all = new Map(first.solutions.map((s) => [JSON.stringify(s.lines), s]))
  for (let seed = 2; all.size < want && Date.now() - t0 < timeMs; seed++) {
    const r = canonSolve(spec, { timeMs: Math.min(timeMs - (Date.now() - t0), timeMs / 3), maxSolutions: 1, seed: seed * 7919 })
    for (const s of r.solutions) all.set(JSON.stringify(s.lines), s)
  }
  return { ...first, solutions: [...all.values()] }
}

/** Ready-made settings for the book's kinds (a = the length of the opening A, B = one bar). */
export function preset(kind: 'mp-don-gian' | 'vo-tan-1' | 'vo-tan-2' | 'mo-tien-1' | 'ba-be-1', a: number, B: number, steps: number, step = 0): Pick<CanonSpec, 'kind' | 'L' | 'cycles' | 'step' | 'followers' | 'order'> {
  const below = steps < 0
  switch (kind) {
    case 'mp-don-gian':
      return { kind: 'simple', L: 2 * a, cycles: 1, step: 0, followers: [{ delay: a, steps, transform: 'same' }], order: below ? [0, 1] : [1, 0] }
    case 'vo-tan-1':
      return { kind: 'canon', L: 2 * a, cycles: 2, step: 0, followers: [{ delay: a, steps, transform: 'same' }], order: below ? [0, 1] : [1, 0] }
    case 'vo-tan-2':
      return { kind: 'canon', L: 2 * a, cycles: 2, step: 0, followers: [{ delay: Math.max(B, a / 2), steps, transform: 'same' }], order: below ? [0, 1] : [1, 0] }
    case 'mo-tien-1':
      return { kind: 'canon', L: 2 * a, cycles: 3, step, followers: [{ delay: a, steps, transform: 'same' }], order: below ? [0, 1] : [1, 0] }
    case 'ba-be-1':
      return { kind: 'canon', L: 3 * a, cycles: 1, step: 0, followers: [{ delay: a, steps, transform: 'same' }, { delay: 2 * a, steps: 2 * steps, transform: 'same' }], order: below ? [0, 1, 2] : [2, 1, 0] }
  }
}

export type CanonForm = 'mo-phong' | 'canon-vo-tan' | 'canon-mo-tien' | 'canon-ba-be'
export const CANON_FORMS: { id: CanonForm; label: string; ref: string }[] = [
  { id: 'mo-phong', label: 'Mô phỏng đơn giản (hai bè)', ref: 'mo-phong-don-gian' },
  { id: 'canon-vo-tan', label: 'Canon vô tận (hai bè)', ref: 'canon-hai-be' },
  { id: 'canon-mo-tien', label: 'Canon mô tiến (hai bè)', ref: 'canon-hai-be' },
  { id: 'canon-ba-be', label: 'Canon ba bè', ref: 'canon-ba-bon-be' },
]
/** Imitation intervals offered, in steps (− = below the leader). */
export const IMIT_STEPS = [-14, -11, -9, -7, -5, -4, -3, -2, 0, 2, 3, 4, 5, 7, 9, 11]
const NAMES = ['đồng âm', 'quãng 2', 'quãng 3', 'quãng 4', 'quãng 5', 'quãng 6', 'quãng 7', 'quãng 8', 'quãng 9', 'quãng 10', 'quãng 11', 'quãng 12', 'quãng 13', 'quãng 14', 'quãng 15']
export const stepsName = (n: number) => (n === 0 ? 'đồng âm' : `${NAMES[Math.abs(n)]} ${n < 0 ? 'dưới' : 'trên'}`)
