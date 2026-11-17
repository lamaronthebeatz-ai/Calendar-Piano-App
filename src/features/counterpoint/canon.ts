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
import { gradeMulti, mcheck, mverify, type Graded, type MProblem, type MReport } from './multi'
import type { Status } from './solver'

export type Transform = 'same' | 'inv' | 'aug' | 'dim' | 'retro' | 'inv-aug' | 'inv-dim' | 'rhythm'
export const TRANSFORMS: { id: Transform; label: string }[] = [
  { id: 'same', label: 'Cùng hướng' },
  { id: 'inv', label: 'Đảo ảnh' },
  { id: 'aug', label: 'Phóng to trường độ (×2)' },
  { id: 'dim', label: 'Thu nhỏ trường độ (÷2)' },
  { id: 'retro', label: 'Ngược hướng' },
  { id: 'inv-aug', label: 'Đảo ảnh + phóng to' },
  { id: 'inv-dim', label: 'Đảo ảnh + thu nhỏ' },
  { id: 'rhythm', label: 'Chỉ nhắc tiết tấu (cao độ tự do)' },
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
  /** free voices besides P and the followers (mô phỏng ba bè: one, tr. 55); their texture index follows the followers */
  extraFree?: number
  /** quarters of free ending after the imitation, every voice reaching the same final (đoạn nhạc kết) */
  coda?: number
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

/** The rhythm a "tiết tấu" follower keeps: the durations of A, augmented or not, from its entry. */
const rhythmOf = (spec: CanonSpec, f: Follower) => {
  let t = f.delay
  return notesOf(spec.A).map((n) => {
    const s = { start: t, dur: n.dur }
    t += n.dur
    return s
  })
}

/** Where every voice's own material ends, and where the piece ends (after the coda). */
export function plan(spec: CanonSpec) {
  const nF = spec.followers.length
  const own: number[] = [spec.kind === 'simple' ? spec.L : spec.L * spec.cycles]
  for (const f of spec.followers) {
    if (f.transform === 'rhythm') own.push(f.delay + lenOf(spec.A))
    else own.push(spec.kind === 'simple' ? f.delay + lenOf(transformLine(spec.key, spec.A, { ...f, delay: 0 }) ?? []) : f.delay + spec.L * spec.cycles)
  }
  const natural = Math.max(...own)
  for (let i = 0; i < (spec.extraFree ?? 0); i++) own.push(natural)
  const end = natural + (spec.coda ?? 0)
  const ends = own.map((e) => (spec.coda ? end : e))
  /** the lines the machine writes besides P's continuation, in a fixed order */
  const items: { voice: number; start: number; end: number; rhythm?: { start: number; dur: number }[] }[] = []
  spec.followers.forEach((f, j) => f.transform === 'rhythm' && items.push({ voice: j + 1, start: f.delay, end: own[j + 1], rhythm: rhythmOf(spec, f) }))
  for (let i = 0; i < (spec.extraFree ?? 0); i++) items.push({ voice: nF + 1 + i, start: 0, end: natural })
  if (spec.coda) own.forEach((e, v) => e < end && v <= nF && items.push({ voice: v, start: e, end }))
  return { own, ends, end, items }
}

/** All the voices (index 0 = P, then the followers, then the free voices), from P's material and the written lines. */
export function textureOf(spec: CanonSpec, u: Seg[], complete: boolean, written: Seg[][] = []): { lines: Seg[][]; ends: number[] } | null {
  const pl = plan(spec)
  const P = leaderOf(spec, u, complete)
  const lines: Seg[][] = [P]
  spec.followers.forEach((f, j) => {
    if (f.transform === 'rhythm') {
      const k = pl.items.findIndex((it) => it.voice === j + 1 && it.rhythm)
      lines.push((written[k] ?? []).slice())
      return
    }
    const src = spec.kind === 'simple' ? spec.A : P
    lines.push(transformLine(spec.key, src, f, spec.real) ?? [])
  })
  if (spec.followers.some((f) => f.transform !== 'rhythm' && !transformLine(spec.key, spec.A, f, spec.real))) return null
  pl.items.forEach((it, k) => {
    if (it.rhythm) return
    const w = written[k] ?? []
    if (it.voice > spec.followers.length) lines[it.voice] = w.slice()
    // a coda only joins a voice whose own material is complete
    else if (w.length && lenOf(lines[it.voice]) === it.start) lines[it.voice] = [...lines[it.voice], ...w]
  })
  for (let v = 0; v < pl.ends.length; v++) lines[v] ??= []
  return { lines, ends: pl.ends }
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
  const parts = [
    'bè P viết tiếp',
    spec.followers.some((f) => f.transform === 'rhythm') && 'cao độ bè nhắc tiết tấu',
    spec.extraFree && 'bè tự do',
    spec.coda && 'đoạn kết',
  ].filter(Boolean)
  const text = `${parts.join(', ')} bằng nốt của giọng (và biến âm có trong đề), trong khoảng ${pitchName(inKey(spec.key, lo))} – ${pitchName(inKey(spec.key, hi))}, không dấu lặng, không nốt móc đơn${spec.coda ? '' : '; không có đoạn kết riêng (các bè dừng lần lượt)'}`
  return { pitches, text }
}

/** Why a spec cannot be searched at all (asked before any search). */
export function canonProblem(spec: CanonSpec): string | null {
  const a = lenOf(spec.A)
  if (!spec.A.length) return 'Chưa có đoạn mở đầu A (bè đề).'
  if (a > spec.L) return 'Đoạn A dài hơn độ dài của bè P.'
  if (spec.followers.some((f) => f.transform !== 'same') && spec.kind === 'canon') return 'Canon chỉ chép nguyên giai điệu (cùng hướng).'
  if (spec.followers.some((f) => f.transform !== 'rhythm' && !transformLine(spec.key, spec.A, f))) return 'Thu nhỏ trường độ làm xuất hiện nốt móc đơn — ngoài phạm vi tìm kiếm.'
  if (spec.followers.some((f) => f.delay <= 0)) return 'Bè mô phỏng phải vào sau bè P.'
  if (spec.coda && spec.coda % barQ(spec.meter)) return 'Đoạn kết phải tròn ô.'
  return null
}

export function canonSolve(spec: CanonSpec, o: { timeMs: number; maxSolutions: number; seed?: number }): CanonResult {
  const { pitches, text } = canonDomain(spec)
  const bad = canonProblem(spec)
  if (bad) return { solutions: [], status: 'unsat', nodes: 0, disputed: 0, furthest: 0, domain: text, problem: bad }
  const B = barQ(spec.meter)
  const pl = plan(spec)
  const u: Seg[] = spec.A.map((s) => ({ ...s }))
  const written: Seg[][] = pl.items.map(() => [])
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
  const uDone = () => lenOf(u) >= spec.L
  const itemEnd = (k: number) => (written[k].length ? lenOf(written[k]) : pl.items[k].start)
  /** Everything later checks can depend on: the followers replay the leader, so the last `maxDelay` of it, plus three notes per line. */
  const stateKey = () => {
    const tail = (l: Seg[]) => notesOf(l).slice(-3).map((x) => `${x.start}.${x.dur}.${x.p.step}.${x.p.alter}`).join(',')
    const lines = written.map((w, k) => `${itemEnd(k)}:${tail(w)}:${w[w.length - 1]?.dur ?? 0}`).join('/')
    // the cycles bring back the whole of P: no shortcut while P is being written, but once it is fixed the key holds all of it
    if (spec.kind === 'canon' && spec.cycles > 1) return uDone() ? `P${u.map((x) => `${x.dur}.${x.p.step}.${x.p.alter}${x.tied ? '~' : ''}`).join(',')}|${lines}` : ''
    const h = lenOf(u)
    const ns = notesOf(u)
    const from = ns.findIndex((n) => n.start + n.dur > h - (spec.kind === 'canon' ? maxDelay : 0))
    return `${h}|${ns.slice(Math.max(0, Math.min(from, ns.length - 3))).map((x) => `${x.start}.${x.dur}.${x.p.step}.${x.p.alter}`).join(',')}|${u[u.length - 1]?.dur ?? 0}|${lines}`
  }

  const judge = (complete: boolean): MReport | null => {
    // once P is written its cycles are known too, so a coda joins and is checked note by note
    const tx = textureOf(spec, u, uDone(), written)
    if (!tx) return null
    const { mp, lines } = asProblem(spec, tx.ends, tx.lines)
    if (complete) return mcheck(mp, lines)
    const from = lines.map((l) => notesOf(l).slice(-3)[0]?.start ?? 0)
    return mcheck(mp, lines, true, -1, from)
  }

  /** The candidates for the next segment of a line ending at `h`, last segment `last`, up to `limit`; or one fixed duration. */
  function moves(h: number, last: Seg | undefined, limit: number, dur?: number): Seg[] {
    const off = h % B
    const out: { s: Seg; cost: number }[] = []
    for (const d of dur ? [dur] : DURS) {
      if (h + d > limit || !placeOk(spec.meter, off, d)) continue
      const contiguous = last && last.start + last.dur === h
      const oneNote = contiguous && off !== 0 && placeOk(spec.meter, last.start % B, last.dur + d)
      if (!dur && contiguous && !oneNote && last.dur >= 2 && (last.dur >= d || (last.dur === 2 && d === 4))) out.push({ s: { start: h, dur: d, p: last.p, tied: true }, cost: 0.6 + rnd() * 1.2 })
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

  /** The unknown that is furthest behind moves next: P's continuation (-1) or a written line (its index). */
  function next(): number | null {
    let best: number | null = null
    let at = Infinity
    if (!uDone()) {
      best = -1
      at = lenOf(u)
    }
    pl.items.forEach((it, k) => {
      if (itemEnd(k) >= it.end) return
      // a coda waits until the material it follows is complete
      if (!it.rhythm && it.voice <= spec.followers.length) {
        const own = pl.items.findIndex((x) => x.rhythm && x.voice === it.voice)
        if (own >= 0 ? itemEnd(own) < pl.items[own].end : !uDone()) return
      }
      if (itemEnd(k) < at) {
        best = k
        at = itemEnd(k)
      }
    })
    return best
  }

  function dfs(): void {
    if (timedOut || found.length >= o.maxSolutions) return
    const k = next()
    if (k === null) {
      const report = judge(true)
      if (!report || report.hard.length) return
      const tx = textureOf(spec, u, true, written)!
      const { mp, lines } = asProblem(spec, tx.ends, tx.lines)
      if (mverify(mp, lines).length) {
        disputed++
        return
      }
      found.push({ lines: tx.lines.map((l) => l.slice()), report })
      return
    }
    const key = stateKey()
    if (key && dead.has(key)) return
    const before = found.length
    const line = k < 0 ? u : written[k]
    const it = k >= 0 ? pl.items[k] : null
    const h = k < 0 ? lenOf(u) : itemEnd(k)
    const dur = it?.rhythm?.[line.length]?.dur
    for (const s of moves(h, line[line.length - 1], k < 0 ? spec.L : it!.end, dur)) {
      if ((++nodes & 1023) === 0 && Date.now() - t0 > o.timeMs) {
        timedOut = true
        return
      }
      line.push(s)
      const r = judge(false)
      if (r && !r.hard.length) {
        furthest = Math.max(furthest, Math.min(lenOf(u), ...written.map((_, j) => itemEnd(j))))
        dfs()
      }
      line.pop()
      if (timedOut || found.length >= o.maxSolutions) return
    }
    if (key && found.length === before) dead.add(key)
  }
  // the opening itself must already be lawful against what the followers play over it
  const pre = judge(false)
  if (pre?.hard.length) {
    const v = pre.hard[0]
    return { solutions: [], status: 'unsat', nodes: 0, disputed: 0, furthest: 0, domain: text, problem: `Ngay trong đoạn A đã phạm luật với bè mô phỏng (${v.version}, phách đen thứ ${v.t + 1}): ${v.rule}. Đổi quãng hoặc thời điểm vào của bè mô phỏng.` }
  }
  if (pre) dfs()
  const exhausted = !timedOut && found.length < o.maxSolutions && !disputed
  const status: Status = found.length ? 'valid' : exhausted ? 'unsat' : 'unknown'
  return { solutions: found, status, nodes, disputed, furthest, domain: text }
}

/** Several searches for variety; the first one decides 'unsat'. The answers come back with the fewest soft remarks first. */
export function canonSolveMany(spec: CanonSpec, timeMs: number, want = 3): CanonResult {
  const t0 = Date.now()
  const first = canonSolve(spec, { timeMs, maxSolutions: 1, seed: 1 })
  if (first.status !== 'valid') return first
  const all = new Map(first.solutions.map((s) => [JSON.stringify(s.lines), s]))
  for (let seed = 2; all.size < want * 2 && Date.now() - t0 < timeMs; seed++) {
    const r = canonSolve(spec, { timeMs: Math.min(timeMs - (Date.now() - t0), timeMs / 3), maxSolutions: 1, seed: seed * 7919 })
    for (const s of r.solutions) all.set(JSON.stringify(s.lines), s)
  }
  return { ...first, solutions: [...all.values()].sort((a, b) => a.report.penalty - b.report.penalty).slice(0, want) }
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

/** The lines a student writes for a spec: P's continuation after A, then each line the machine would write. */
export function slotsOf(spec: CanonSpec): { label: string; start: number; end: number }[] {
  const pl = plan(spec)
  const nF = spec.followers.length
  const name = (v: number) => (v === 0 ? 'P' : v <= nF ? `R${v}` : 'bè tự do')
  return [
    { label: 'P (viết tiếp sau A)', start: lenOf(spec.A), end: spec.L },
    ...pl.items.map((it) => ({
      label: it.rhythm ? `${name(it.voice)} (cao độ, giữ tiết tấu A)` : it.voice > nF ? 'Bè tự do' : `Đoạn kết ${name(it.voice)}`,
      start: it.start,
      end: it.end,
    })),
  ]
}

/** Grade what the student wrote for a canon or imitation: the texture built from it, judged like an answer. */
export function gradeCanon(spec: CanonSpec, lines: Seg[][]): (Graded & { texture: Seg[][] }) | null {
  const slots = slotsOf(spec)
  const unfinished = slots.filter((sl, k) => lenOf(lines[k] ?? []) !== sl.end && !(k === 0 && sl.start === sl.end)).map((sl) => sl.label)
  const pl = plan(spec)
  const written = pl.items.map((_, k) => lines[k + 1] ?? [])
  const u = [...spec.A.map((x) => ({ ...x })), ...(lines[0] ?? [])]
  const tx = textureOf(spec, u, lenOf(u) >= spec.L, written)
  if (!tx) return null
  const { mp, lines: ordered } = asProblem(spec, tx.ends, tx.lines)
  const g = gradeMulti({ ...mp, free: mp.free }, ordered)
  // a "tiết tấu" follower must keep A's rhythm exactly
  pl.items.forEach((it, k) => {
    if (!it.rhythm) return
    const got = notesOf(written[k]).map((n) => `${n.start}.${n.dur}`).join()
    if (got && got !== it.rhythm.map((r) => `${r.start}.${r.dur}`).join()) g.report.hard.push({ rule: 'seg-place', t: it.start, version: slots[k + 1].label, detail: 'không giữ đúng tiết tấu của A' })
  })
  return { ...g, unfinished, texture: tx.lines }
}
