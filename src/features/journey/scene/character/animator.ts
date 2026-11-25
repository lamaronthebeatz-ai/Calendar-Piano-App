import { CLIPS, type Clip } from './clips'

/**
 * The animation controller of one character: which clip plays, since when, and which of its events have fired.
 * Pure — time comes in as an argument (the scene's frame clock), so it is tested without a browser and stays in step
 * with the renderer, which starts the same clip at the same moment.
 *
 * Every play gets a token. Events carry the token they were fired under; a listener checks it, so an event of a clip
 * that has since been replaced is never acted on. Each event fires once per play (a looping clip has no once-only
 * events). With motion reduced, one-shot clips take no time: their events all fire on the next advance.
 */
export type Fired = { name: string; clip: string; token: number }

export class Animator {
  clip: Clip = CLIPS.idle
  token = 0
  private started = 0
  private fired = new Set<number>()
  private ended = false
  private speed: number
  constructor(reduced = false) {
    this.speed = reduced ? 0 : 1
  }

  /** Starts `id` (unknown ids fall back to idle). Replaying the same looping clip keeps it running. */
  play(id: string, now: number): number {
    const next = CLIPS[id] ?? CLIPS.idle
    if (next.id === this.clip.id && next.loop && !this.ended) return this.token
    this.clip = next
    this.started = now
    this.fired = new Set()
    this.ended = false
    return ++this.token
  }
  private pausedAt: number | null = null
  /** The scene went to the background: time stops for this clip (its events wait), and resumes where it stopped. */
  pause(now: number) {
    if (this.pausedAt === null) this.pausedAt = now
  }
  resume(now: number) {
    if (this.pausedAt === null) return
    this.started += now - this.pausedAt
    this.pausedAt = null
  }
  /** true while a one-shot clip has events or an end still to come (the scene keeps its frame loop running) */
  get busy() {
    return !this.clip.loop && !this.ended
  }
  /** The clip's events that are due at `now`, each once; a finished one-shot ends and moves to its `then`. */
  advance(now: number): Fired[] {
    const c = this.clip
    const out: Fired[] = []
    if (c.loop || this.ended || this.pausedAt !== null) return out
    const t = this.speed === 0 ? 1 : (now - this.started) / c.duration
    ;(c.events ?? []).forEach((e, i) => {
      if (!this.fired.has(i) && t >= e.at) {
        this.fired.add(i)
        out.push({ name: e.name, clip: c.id, token: this.token })
      }
    })
    if (t >= 1) {
      this.ended = true
      out.push({ name: 'end', clip: c.id, token: this.token })
      if (c.then) this.play(c.then, now)
    }
    return out
  }
}
