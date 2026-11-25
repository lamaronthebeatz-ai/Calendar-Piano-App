import type { SceneDef } from './types'

/**
 * A scene's life: unloaded → loading → ready → active ⇄ suspended → unloading → unloaded, or `failed` (with the reason)
 * from loading. Loading = the definition, the scene's art module (a code-split chunk, fetched only for scenes that are
 * entered) and its images (decoded before the scene shows, so it never pops in half-drawn). Only the scene on screen
 * is held; leaving it unloads it (its images are let go; the browser's HTTP cache keeps them cheap to come back to).
 *
 * An image that fails is not fatal: its layer is dropped and the scene still plays (`missing`). A definition or art
 * module that fails is: the scene ends `failed` and the screen offers retry or the list view of the place.
 */
export type ScenePhase = 'unloaded' | 'loading' | 'ready' | 'active' | 'suspended' | 'unloading' | 'failed'

export type Loaders<Art> = {
  definition: (id: string) => SceneDef | undefined
  art: (key: string) => Promise<Art>
  image: (id: string) => Promise<unknown>
}
export type Loaded<Art> = { def: SceneDef; art: Art; missing: string[] }

const MOVES: Record<ScenePhase, readonly ScenePhase[]> = {
  unloaded: ['loading'],
  loading: ['ready', 'failed', 'unloading'],
  ready: ['active', 'unloading'],
  active: ['suspended', 'unloading'],
  suspended: ['active', 'unloading'],
  unloading: ['unloaded'],
  failed: ['loading', 'unloading'],
}

export class SceneHost<Art> {
  phase: ScenePhase = 'unloaded'
  loaded: Loaded<Art> | null = null
  error: string | null = null
  private run = 0
  private listeners = new Set<() => void>()
  private loaders: Loaders<Art>
  private timeoutMs: number
  constructor(loaders: Loaders<Art>, timeoutMs = 10_000) {
    this.loaders = loaders
    this.timeoutMs = timeoutMs
  }

  subscribe(f: () => void) {
    this.listeners.add(f)
    return () => void this.listeners.delete(f)
  }
  private to(p: ScenePhase) {
    if (!MOVES[this.phase].includes(p)) throw new Error(`SceneHost: ${this.phase} → ${p} không hợp lệ`)
    this.phase = p
    this.listeners.forEach((l) => l())
  }

  async load(id: string): Promise<void> {
    if (this.phase !== 'unloaded' && this.phase !== 'failed') return
    const run = ++this.run
    this.error = null
    this.to('loading')
    try {
      const def = this.loaders.definition(id)
      if (!def) throw new Error(`Không có phân cảnh "${id}"`)
      const art = await this.within(this.loaders.art(def.art), `tranh của "${def.name}"`)
      const images = [...new Set(def.layers.flatMap((l) => (l.source && 'image' in l.source ? [l.source.image] : [])))]
      const results = await Promise.allSettled(images.map((i) => this.within(this.loaders.image(i), `ảnh ${i}`)))
      const missing = images.filter((_, i) => results[i].status === 'rejected')
      if (run !== this.run) return // unloaded or reloaded meanwhile
      this.loaded = { def, art, missing }
      this.to('ready')
    } catch (e) {
      if (run !== this.run) return
      this.error = e instanceof Error ? e.message : String(e)
      this.to('failed')
    }
  }
  activate() {
    if (this.phase === 'ready' || this.phase === 'suspended') this.to('active')
  }
  /** The app went to the background (or a panel covers the scene): the frame loop stops, nothing is lost. */
  suspend() {
    if (this.phase === 'active') this.to('suspended')
  }
  resume() {
    if (this.phase === 'suspended') this.to('active')
  }
  unload() {
    if (this.phase === 'unloaded' || this.phase === 'unloading') return
    this.run++
    this.to('unloading')
    this.loaded = null
    this.to('unloaded')
  }
  async retry(id: string) {
    if (this.phase === 'failed') await this.load(id)
  }

  private within<T>(p: Promise<T>, what: string): Promise<T> {
    return new Promise<T>((ok, fail) => {
      const t = setTimeout(() => fail(new Error(`Quá thời gian khi tải ${what}`)), this.timeoutMs)
      p.then(
        (v) => (clearTimeout(t), ok(v)),
        (e) => (clearTimeout(t), fail(e)),
      )
    })
  }
}
