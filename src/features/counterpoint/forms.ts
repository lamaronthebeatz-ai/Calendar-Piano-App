import { barQ, type Key, type Meter, type Seg } from './model'
import type { Status } from './solver'
import { canonSolve, preset, type CanonSpec, type Transform } from './canon'
import { mcheck, msolve, mverify, octaveVersions, shiftLine, type MProblem, type MReport, type MVersion } from './multi'

/**
 * Phần IV (hinh-thuc-phuc-dieu-nghiem-khac, tr. 64–68): forms built from sections the earlier chapters already solve,
 * joined by a short bridge (câu nối) the machine writes. The book describes these forms, it gives no rules of their
 * own: every section and every bridge is judged by the three-/four-voice rules, and the whole piece is checked again.
 */
export type PartForm = 'hai-doan' | 'ba-doan' | 'hai-doan-mo-phong'
export const PART_FORMS: { id: PartForm; label: string; ref: string }[] = [
  { id: 'hai-doan', label: 'Thể hai đoạn tương phản', ref: 'hinh-thuc-phuc-dieu-nghiem-khac' },
  { id: 'hai-doan-mo-phong', label: 'Thể hai đoạn mô phỏng', ref: 'hinh-thuc-phuc-dieu-nghiem-khac' },
  { id: 'ba-doan', label: 'Thể ba đoạn', ref: 'hinh-thuc-phuc-dieu-nghiem-khac' },
]

export type FormSpec = {
  form: PartForm
  key: Key
  meter: Meter
  given: Seg[]
  /** voices (the imitative form is a three-voice canon) */
  n: 3 | 4
  /** the đề's voice in đoạn 1 (contrast forms) */
  at: number
  /** the version of đoạn 1 that comes back (đoạn 2 of the two-part form, đoạn 3 of the three-part form), an octaveVersions label */
  variant: string
  /** the imitation interval of the canon sections, in steps (− = below P) */
  steps: number
  /** how the followers copy A in the developing section */
  transform: Transform
  /** bars of bridge between sections */
  bridge: number
}
export type FormPart = { label: string; start: number; end: number }
export type FormSolution = { lines: Seg[][]; report: MReport; parts: FormPart[]; fixed: NonNullable<MProblem['fixed']> }
export type FormResult = { solutions: FormSolution[]; status: Status; nodes: number; why: string }

const lenOf = (segs: Seg[]) => (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)
const endOfAll = (lines: Seg[][]) => Math.max(0, ...lines.map(lenOf))
const later = (segs: Seg[], dt: number) => segs.map((s) => ({ ...s, start: s.start + dt }))

/** The đoạn 1 problem of a contrast form: the đề in one voice, the version that returns ticked so đoạn 1 is written for it. */
export function contrastProblem(f: FormSpec): { mp: MProblem; v: MVersion } | null {
  const v = octaveVersions(f.n).find((x) => x.label === f.variant)
  if (!v) return null
  return { v, mp: { key: f.key, meter: f.meter, voices: [...Array(f.n).keys()].map((i) => (i === f.at ? f.given : [])), free: [...Array(f.n).keys()].map((i) => i !== f.at), versions: [v] } }
}

/** A version of a section, by register: the top staff plays what the version puts on top, and so on down. */
export function versionByRegister(k: Key, lines: Seg[][], v: MVersion): Seg[][] {
  const moved = lines.map((l, i) => (v.steps[i] ? shiftLine(k, v.steps[i], l) : l))
  return v.order.map((i) => moved[i])
}

/** The canon section: A (the opening of the đề) imitated by every other voice, all ending together on a one-bar coda. */
export function canonSection(f: FormSpec, A: Seg[], develop: boolean): CanonSpec {
  const B = barQ(f.meter)
  const a = lenOf(A)
  const base = preset('ba-be-1', a, B, f.steps)
  const below = f.steps < 0
  const extra = f.n === 4 ? 1 : 0
  const order = below ? [0, 1, 2] : [2, 1, 0]
  if (extra) order.push(3)
  if (!develop) return { ...base, key: f.key, meter: f.meter, A, order, extraFree: extra || undefined, coda: B }
  // the developing section: the followers take A changed by the chosen technique (soi gương, phóng to, thu nhỏ…)
  return {
    key: f.key, meter: f.meter, kind: 'simple', A, L: 2 * a, cycles: 1, step: 0,
    followers: [{ delay: a, steps: f.steps, transform: f.transform }, { delay: 2 * a, steps: 2 * f.steps, transform: f.transform }],
    order, extraFree: extra || undefined, coda: B,
  }
}

/** The opening of the đề used as A for a canon inside a longer form: two bars at most. */
export const motifOf = (f: FormSpec) => {
  const two = 2 * barQ(f.meter)
  return f.given.filter((s) => s.start < two).map((s) => (s.start + s.dur > two ? { ...s, dur: two - s.start } : s))
}

/** Write the bridge from what is written so far to the next section; null when no bridge fits in the time given. */
export function bridgeTo(f: FormSpec, head: Seg[][], next: Seg[][], fixed: MProblem['fixed'], timeMs: number, seed = 1): { lines: Seg[][]; status: Status; nodes: number; start: number } {
  const start = endOfAll(head)
  const at = start + f.bridge * barQ(f.meter)
  const tail = next.map((l) => later(l, at))
  const total = endOfAll(tail)
  const mp: MProblem = { key: f.key, meter: f.meter, voices: head.map(() => []), free: head.map(() => true), versions: [], ends: head.map(() => total), head, tail, fixed }
  const r = msolve(mp, { timeMs, maxSolutions: 1, seed })
  return { lines: r.solutions[0]?.lines ?? [], status: r.status, nodes: r.nodes, start: at }
}

const canonLines = (spec: CanonSpec, lines: Seg[][]) => spec.order.map((i) => lines[i])

/** Build the whole form: the sections from their own solvers, then the bridges, then one check of everything. */
export function formSolve(f: FormSpec, timeMs: number): FormResult {
  const t0 = Date.now()
  const left = () => Math.max(200, timeMs - (Date.now() - t0))
  let nodes = 0
  const why = (s: string): FormResult => ({ solutions: [], status: 'unknown', nodes, why: s })

  // the sections each form is made of, as lists of candidate textures (register order, from time 0)
  // `cf`: the register that holds the đề in that section (a cantus firmus is not judged as a free line)
  const options: { label: string; cands: Seg[][][]; cf?: number }[] = []
  if (f.form === 'hai-doan-mo-phong') {
    if (f.n !== 3) return { solutions: [], status: 'unsat', nodes, why: 'Thể hai đoạn mô phỏng ở đây là canon ba bè: chọn ba bè.' }
    const s1 = canonSection(f, f.given, false)
    const s2 = canonSection(f, f.given, true)
    const r1 = canonSolve(s1, { timeMs: timeMs * 0.3, maxSolutions: 3 })
    nodes += r1.nodes
    if (r1.status !== 'valid') return { solutions: [], status: r1.status, nodes, why: `Đoạn 1 (canon ba bè): ${r1.status === 'unsat' ? r1.problem ?? 'đã chứng minh không có lời giải trong phạm vi tìm kiếm' : 'chưa tìm được lời giải trong thời gian cho phép'}.` }
    const r2 = canonSolve(s2, { timeMs: timeMs * 0.3, maxSolutions: 3 })
    nodes += r2.nodes
    if (r2.status !== 'valid') return { solutions: [], status: r2.status, nodes, why: `Đoạn 2 (mô phỏng phát triển): ${r2.status === 'unsat' ? r2.problem ?? 'đã chứng minh không có lời giải trong phạm vi tìm kiếm' : 'chưa tìm được lời giải trong thời gian cho phép'}.` }
    options.push({ label: 'Đoạn 1 · canon ba bè', cands: r1.solutions.map((s) => canonLines(s1, s.lines)) })
    options.push({ label: 'Đoạn 2 · mô phỏng phát triển', cands: r2.solutions.map((s) => canonLines(s2, s.lines)) })
  } else {
    const cp = contrastProblem(f)
    if (!cp) return { solutions: [], status: 'unsat', nodes, why: 'Chưa chọn biến thể.' }
    const r1 = msolve(cp.mp, { timeMs: timeMs * 0.35, maxSolutions: 4 })
    nodes += r1.nodes
    if (r1.status !== 'valid') return { solutions: [], status: r1.status, nodes, why: `Đoạn 1 (nguyên thể, viết sao cho ${cp.v.label} cũng đúng luật): ${r1.status === 'unsat' ? 'đã chứng minh không có lời giải trong phạm vi tìm kiếm' : 'chưa tìm được lời giải trong thời gian cho phép'}.` }
    const nt = r1.solutions.map((s) => s.lines)
    options.push({ label: 'Đoạn 1 · nguyên thể', cands: nt, cf: f.at })
    if (f.form === 'ba-doan') {
      const s2 = canonSection(f, motifOf(f), true)
      const r2 = canonSolve(s2, { timeMs: timeMs * 0.25, maxSolutions: 3 })
      nodes += r2.nodes
      if (r2.status !== 'valid') return { solutions: [], status: r2.status, nodes, why: `Đoạn 2 (mô phỏng trên hai ô đầu của đề): ${r2.status === 'unsat' ? r2.problem ?? 'đã chứng minh không có lời giải trong phạm vi tìm kiếm' : 'chưa tìm được lời giải trong thời gian cho phép'}.` }
      options.push({ label: 'Đoạn 2 · mô phỏng', cands: r2.solutions.map((s) => canonLines(s2, s.lines)) })
    }
    // the return is the chosen version of the same đoạn 1, so it follows đoạn 1's candidate (index tied below)
    options.push({ label: `Đoạn ${f.form === 'ba-doan' ? 3 : 2} · ${cp.v.label}`, cands: nt.map((l) => versionByRegister(f.key, l, cp.v)), cf: cp.v.order.indexOf(f.at) })
  }

  // try the combinations (the return section always goes with its own đoạn 1) until the bridges fit
  const tied = f.form !== 'hai-doan-mo-phong'
  const first = options[0].cands.length
  const mids = options.length === 3 ? options[1].cands.length : 1
  const out: FormSolution[] = []
  let bridgeFailed = false
  for (let i = 0; i < first && out.length < 2; i++)
    for (let j = 0; j < (tied ? mids : options[1].cands.length) && out.length < 2; j++) {
      if (Date.now() - t0 > timeMs) break
      const seq = options.map((o, k) => o.cands[k === 0 ? i : tied && k === options.length - 1 ? i : j])
      let lines = seq[0]
      const parts: FormPart[] = [{ label: options[0].label, start: 0, end: endOfAll(lines) }]
      const fixed: NonNullable<MProblem['fixed']> = []
      const lock = (k: number, start: number, end: number) => options[k].cf !== undefined && fixed.push({ voice: options[k].cf!, start, end })
      lock(0, 0, endOfAll(lines))
      let ok = true
      for (let k = 1; k < seq.length && ok; k++) {
        const at = endOfAll(lines) + f.bridge * barQ(f.meter)
        lock(k, at, at + endOfAll(seq[k]))
        const r = bridgeTo(f, lines, seq[k], fixed, Math.min(left(), Math.max(800, timeMs / 10)), i * 31 + j + 1)
        nodes += r.nodes
        if (r.status !== 'valid') {
          ok = false
          bridgeFailed = true
          break
        }
        parts.push({ label: 'Câu nối', start: endOfAll(lines), end: r.start })
        lines = r.lines
        parts.push({ label: options[k].label, start: r.start, end: endOfAll(lines) })
      }
      if (!ok) continue
      const total = endOfAll(lines)
      const mp: MProblem = { key: f.key, meter: f.meter, voices: lines.map(() => []), free: lines.map(() => true), versions: [], ends: lines.map(() => total), fixed }
      const report = mcheck(mp, lines)
      // the whole piece once more, by both checkers: a section or bridge that only looked right on its own is caught here
      if (report.hard.length || mverify(mp, lines).length) continue
      out.push({ lines, report, parts, fixed })
    }
  if (out.length) return { solutions: out, status: 'valid', nodes, why: '' }
  return why(
    bridgeFailed
      ? `Các đoạn đều có lời giải, nhưng với ${first} lời giải đoạn 1 máy đã thử, chưa viết được câu nối ${f.bridge} ô đúng luật trong thời gian cho phép. Thử câu nối ${f.bridge === 1 ? 2 : 1} ô, đổi biến thể hoặc tìm lâu hơn.`
      : 'Máy hết thời gian trước khi ghép xong các đoạn.',
  )
}
