import { reprTag, type Task } from '../task'
import type { Rulebook, RulebookRef } from '../rulebook/rulebook'
import type { Validator } from '../validation/types'
import { UMRE_ENGINE_VERSION } from '../version'
import type { Solver, SolverDescriptor } from './solver'

const majorMinor = (v: string) => v.split('.').slice(0, 2).join('.')

/** Problems with a descriptor (empty = acceptable). */
export function checkDescriptor(d: SolverDescriptor): string[] {
  const out: string[] = []
  if (!d.id || !/^[a-z0-9.-]+$/.test(d.id)) out.push('id phải là chữ thường, số, dấu chấm, gạch nối')
  if (!/^\d+\.\d+\.\d+$/.test(d.version)) out.push(`phiên bản "${d.version}" phải dạng x.y.z`)
  if (!d.domain) out.push('thiếu domain')
  if (!d.taskTypes.length) out.push('không khai báo loại bài nào')
  if (!d.representations.length) out.push('không khai báo biểu diễn nào')
  if (!d.rulebooks.length) out.push('không khai báo sổ luật nào')
  if (d.defaults.timeMs <= 0 || d.defaults.timeMs > d.limits.maxTimeMs) out.push('thời gian mặc định phải trong (0, giới hạn]')
  if (d.defaults.maxSolutions < 1 || d.defaults.maxSolutions > d.limits.maxSolutions) out.push('số lời giải mặc định phải trong [1, giới hạn]')
  if (majorMinor(d.requires.umre) !== majorMinor(UMRE_ENGINE_VERSION)) out.push(`viết cho UMRE ${d.requires.umre}, máy đang là ${UMRE_ENGINE_VERSION}`)
  return out
}

export type Rejection = { readonly id: string; readonly version: string; readonly reasons: readonly string[] }

/** Solvers by id and version; disabled ones stay registered but are never routed to. */
export class SolverRegistry {
  private solvers = new Map<string, Solver>()
  private disabled = new Map<string, string>()
  private key = (id: string, version: string) => `${id}@${version}`

  register(s: Solver) {
    const problems = checkDescriptor(s.descriptor)
    if (problems.length) throw new Error(`không đăng ký được ${s.descriptor.id}: ${problems.join('; ')}`)
    const k = this.key(s.descriptor.id, s.descriptor.version)
    if (this.solvers.has(k)) throw new Error(`bộ giải đã đăng ký: ${k}`)
    this.solvers.set(k, s)
  }
  /** Remove every version of `id`, or one version. Returns how many were removed. */
  unregister(id: string, version?: string): number {
    let n = 0
    for (const [k, s] of this.solvers)
      if (s.descriptor.id === id && (!version || s.descriptor.version === version)) {
        this.solvers.delete(k)
        n++
      }
    return n
  }
  disable(id: string, reason: string) {
    this.disabled.set(id, reason)
  }
  enable(id: string) {
    this.disabled.delete(id)
  }
  list = () => [...this.solvers.values()].map((s) => s.descriptor)
  /** One solver; without a version, the highest registered version. */
  get(id: string, version?: string): Solver | undefined {
    if (version) return this.solvers.get(this.key(id, version))
    return [...this.solvers.values()].filter((s) => s.descriptor.id === id).sort((a, b) => cmpVersion(b.descriptor.version, a.descriptor.version))[0]
  }

  /** Why a solver cannot take a task (empty = it can). */
  incompatibility(s: Solver, task: Task, rb: RulebookRef): string[] {
    const d = s.descriptor
    const out: string[] = []
    const off = this.disabled.get(d.id)
    if (off) out.push(`đang tắt: ${off}`)
    if (d.domain !== task.domain) out.push(`lĩnh vực ${d.domain} ≠ ${task.domain}`)
    if (!d.taskTypes.includes(task.type)) out.push(`không giải loại bài ${task.type}`)
    if (!d.representations.includes(reprTag(task.score))) out.push(`không đọc biểu diễn ${reprTag(task.score)}`)
    if (!d.rulebooks.some((r) => r.id === rb.id && r.versions.includes(rb.version))) out.push(`không dùng sổ luật ${rb.id}@${rb.version}`)
    if (!out.length) {
      try {
        const why = s.available?.() ?? null
        if (why) out.push(`không sẵn sàng: ${why}`)
      } catch (e) {
        out.push(`không sẵn sàng: ${(e as Error).message}`)
      }
    }
    return out
  }

  /** Compatible solvers (best first: priority, then newest version) and why every other one was set aside. */
  match(task: Task, rb: RulebookRef): { candidates: Solver[]; rejected: Rejection[] } {
    const candidates: Solver[] = []
    const rejected: Rejection[] = []
    for (const s of this.solvers.values()) {
      const why = this.incompatibility(s, task, rb)
      if (why.length) rejected.push({ id: s.descriptor.id, version: s.descriptor.version, reasons: why })
      else candidates.push(s)
    }
    candidates.sort((a, b) => (b.descriptor.priority ?? 0) - (a.descriptor.priority ?? 0) || cmpVersion(b.descriptor.version, a.descriptor.version))
    return { candidates, rejected }
  }
}

export function cmpVersion(a: string, b: string): number {
  const x = a.split('.').map(Number)
  const y = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return (x[i] ?? 0) - (y[i] ?? 0)
  return 0
}

/** Validators by task type and the rulebooks they can check. */
export class ValidatorRegistry {
  private validators: Validator[] = []
  register(v: Validator) {
    if (this.validators.some((x) => x.id === v.id && x.version === v.version)) throw new Error(`bộ kiểm đã đăng ký: ${v.id}@${v.version}`)
    this.validators.push(v)
  }
  for(taskType: string, rb: Rulebook | RulebookRef): Validator | undefined {
    return this.validators.find((v) => v.taskTypes.includes(taskType) && v.rulebooks[rb.id]?.includes(rb.version))
  }
  list = () => this.validators.slice()
}
