import { digest } from '../validation/types'

/**
 * Run-time services of the UMRE entry point: input fingerprints, a bounded result cache, a typed error model and a
 * diagnostics ring. None of them changes what a request computes; they record and reuse it.
 */

/** The API contract version (bump the major on a breaking change of requests or responses). */
export const UMRE_API_VERSION = '1.0.0'

export type Meta = {
  readonly api: string
  readonly engine: string
  /** digest of (request, engine version, every registered solver / validator / rulebook / analysis module with its version) */
  readonly fingerprint: string
  readonly cached: boolean
  readonly elapsedMs: number
  /** the same request again gives this result (cache) or an equal one; false when the result depends on a time budget or randomness */
  readonly reproducible: boolean
}

export type ErrorCategory = 'input' | 'unsupported' | 'solver' | 'validation' | 'resource' | 'internal'
export type UmreError = {
  readonly code: string
  readonly category: ErrorCategory
  /** where it happened: 'dispatch', 'solve', 'analyze', an analysis module id… */
  readonly stage: string
  readonly message: string
  /** request kind and ids only — never the music */
  readonly context: Readonly<Record<string, string>>
  readonly recovery: string
}

export function classify(e: unknown, stage: string, context: Record<string, string>): UmreError {
  const message = e instanceof Error ? e.message : String(e)
  if (e instanceof RangeError) return { code: 'resource', category: 'resource', stage, message, context, recovery: 'Giảm quy mô bài (ít ô / ít bè) hoặc thời gian; tác vụ đã dừng, máy vẫn chạy.' }
  if (/không có sổ luật|sổ luật .* không|unknown rulebook/i.test(message)) return { code: 'rulebook-unknown', category: 'unsupported', stage, message, context, recovery: 'Chọn sổ luật có trong danh sách (op "rulebook").' }
  if (/không hợp lệ|thiếu|invalid|must|phải/i.test(message)) return { code: 'invalid-input', category: 'input', stage, message, context, recovery: 'Sửa đầu vào theo thông báo rồi gửi lại.' }
  return { code: 'internal', category: 'internal', stage, message, context, recovery: 'Lỗi trong máy, đã ghi vào nhật ký chẩn đoán; các yêu cầu khác không bị ảnh hưởng.' }
}

/** A small LRU of finished results, keyed by fingerprint (so any version change misses). */
export class ResultCache<T> {
  private map = new Map<string, T>()
  hits = 0
  misses = 0
  readonly max: number
  constructor(max = 32) {
    this.max = max
  }
  get(k: string): T | undefined {
    const v = this.map.get(k)
    if (v === undefined) {
      this.misses++
      return undefined
    }
    this.hits++
    this.map.delete(k)
    this.map.set(k, v)
    return v
  }
  set(k: string, v: T) {
    this.map.delete(k)
    this.map.set(k, v)
    while (this.map.size > this.max) this.map.delete(this.map.keys().next().value!)
  }
  clear() {
    this.map.clear()
  }
  get size() {
    return this.map.size
  }
}

export type DiagEvent = { readonly t: number; readonly op: string; readonly kind: 'done' | 'cache-hit' | 'error'; readonly ms: number; readonly status?: string; readonly fingerprint: string; readonly code?: string }
/** The last `max` task events — op, timing, status, fingerprint; never the music. */
export class Diagnostics {
  private events: DiagEvent[] = []
  readonly max: number
  constructor(max = 200) {
    this.max = max
  }
  push(e: DiagEvent) {
    this.events.push(e)
    if (this.events.length > this.max) this.events.splice(0, this.events.length - this.max)
  }
  list = (): readonly DiagEvent[] => this.events.slice()
  clear() {
    this.events = []
  }
}

export const fingerprintOf = (req: unknown, environment: unknown) => digest({ req, environment })
