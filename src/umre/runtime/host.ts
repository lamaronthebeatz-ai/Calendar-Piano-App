import type { Answer, handle } from '../api'

type UmreRequest = Parameters<typeof handle>[0]
type UmreResponse = Answer

/**
 * Runs UMRE requests in a worker so the page never freezes, with REAL cancellation: the searches are synchronous, so
 * a cooperative signal cannot stop them — the host terminates the worker and starts a fresh one for the next request.
 * Every request carries an id; a reply whose id is not the one awaited (a late answer from before a cancel) is dropped,
 * so a caller never sees a stale result.
 */
export type WorkerLike = {
  postMessage(msg: unknown): void
  terminate(): void
  onmessage: ((e: { data: unknown }) => void) | null
  onerror: ((e: unknown) => void) | null
}
export type HostEvent = { readonly id: number; readonly kind: 'start' | Outcome['status']; readonly ms: number; readonly op?: string }
export type Envelope = { readonly id: number; readonly req: UmreRequest }
export type Reply = { readonly id: number; readonly ok: true; readonly res: UmreResponse } | { readonly id: number; readonly ok: false; readonly error: string }

export type Outcome =
  | { readonly status: 'done'; readonly response: UmreResponse; readonly elapsedMs: number }
  | { readonly status: 'timeout' | 'cancelled' | 'superseded'; readonly elapsedMs: number }
  | { readonly status: 'error'; readonly error: string; readonly elapsedMs: number }

export class UmreHost {
  private worker: WorkerLike | null = null
  private seq = 0
  private pending: { id: number; settle: (o: Outcome) => void; t0: number; timer?: ReturnType<typeof setTimeout> } | null = null
  /** number of workers started (a test sees that a cancel really replaced the worker) */
  spawned = 0
  private spawn: () => WorkerLike
  /** task lifecycle for diagnostics (no request content): start, then one of done / timeout / cancelled / superseded / error */
  private onEvent?: (e: HostEvent) => void
  constructor(spawn: () => WorkerLike, o: { onEvent?: (e: HostEvent) => void } = {}) {
    this.spawn = spawn
    this.onEvent = o.onEvent
  }
  /** what the host is doing now */
  get state(): 'idle' | 'running' {
    return this.pending ? 'running' : 'idle'
  }

  private ensure(): WorkerLike {
    if (this.worker) return this.worker
    const w = this.spawn()
    this.spawned++
    w.onmessage = (e) => {
      const r = e.data as Reply
      const p = this.pending
      if (!p || r.id !== p.id) return // stale: from a request already cancelled or superseded
      this.finish(r.ok ? { status: 'done', response: r.res, elapsedMs: Date.now() - p.t0 } : { status: 'error', error: r.error, elapsedMs: Date.now() - p.t0 })
    }
    w.onerror = (e) => {
      const p = this.pending
      this.kill()
      if (p) this.finish({ status: 'error', error: String((e as { message?: string })?.message ?? e), elapsedMs: Date.now() - p.t0 }, p)
    }
    this.worker = w
    return w
  }

  private kill() {
    this.worker?.terminate()
    this.worker = null
  }

  private finish(o: Outcome, p = this.pending) {
    if (!p) return
    this.onEvent?.({ id: p.id, kind: o.status, ms: o.elapsedMs })
    if (p.timer) clearTimeout(p.timer)
    if (this.pending === p) this.pending = null
    p.settle(o)
  }

  /**
   * One request at a time: a new request supersedes the running one (its caller gets 'superseded'). `timeMs` is a hard
   * wall-clock limit enforced here, whatever the solver's own limit; `signal` cancels.
   */
  run(req: UmreRequest, o: { timeMs: number; signal?: AbortSignal }): Promise<Outcome> {
    if (this.pending) {
      const p = this.pending
      this.kill()
      this.finish({ status: 'superseded', elapsedMs: Date.now() - p.t0 }, p)
    }
    const id = ++this.seq
    const t0 = Date.now()
    return new Promise<Outcome>((settle) => {
      if (o.signal?.aborted) return settle({ status: 'cancelled', elapsedMs: 0 })
      const p: NonNullable<UmreHost['pending']> = { id, settle, t0 }
      this.pending = p
      this.onEvent?.({ id, kind: 'start', ms: 0, op: req.op })
      p.timer = setTimeout(() => {
        if (this.pending !== p) return
        this.kill()
        this.finish({ status: 'timeout', elapsedMs: Date.now() - t0 }, p)
      }, o.timeMs)
      o.signal?.addEventListener('abort', () => {
        if (this.pending !== p) return
        this.kill()
        this.finish({ status: 'cancelled', elapsedMs: Date.now() - t0 }, p)
      }, { once: true })
      this.ensure().postMessage({ id, req } satisfies Envelope)
    })
  }

  dispose() {
    const p = this.pending
    this.kill()
    if (p) this.finish({ status: 'cancelled', elapsedMs: Date.now() - p.t0 }, p)
  }
}
