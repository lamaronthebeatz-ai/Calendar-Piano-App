import { setState, type Actor } from '../actor'
import type { CollisionDef, Facing } from '../types'
import { Animator } from './animator'
import { clipFor, type Context } from './clips'
import { visualOf, type Mood } from './defs'
import { ENGAGED, MOVING, type ControlState } from './machine'
import { npcAt, npcBusy, stepNpc, type Npc, type Step } from './npc'

/**
 * The characters of one scene (character instances): the player's animation side and every NPC and extra, each with
 * its own animator, clip, mood and control state. The scene owns one Cast for as long as it is loaded; it is dropped
 * with the scene, so nothing about a character outlives the scene it stood in (where the player stood is kept by the
 * scene in session state, not here).
 *
 * The Cast does not move the player (the scene's controller does, from input) and knows nothing of quests or
 * dialogue content: it plays clips, runs NPC scripts and delivers animation events — each event once, and only to
 * the handler registered for the play it belongs to.
 */
export type Handlers = Partial<Record<string, () => void>>
export type View = { id: string; look: string; x: number; facing: Facing; state: ControlState; clip: string; token: number; mood: Mood; extra: boolean }

type Slot = { animator: Animator; mood: Mood; last: ControlState; ctx: Context; handlers: Map<number, Handlers> }

export class Cast {
  npcs: Npc[] = []
  private slots = new Map<string, Slot>()
  private reduced: boolean
  /** bumped whenever something the renderer shows changes (clip, facing, mood, who is present) */
  version = 0
  constructor(reduced = false) {
    this.reduced = reduced
    this.slot('player', 'player')
  }

  private slot(id: string, look: string): Slot {
    let s = this.slots.get(id)
    if (!s) {
      s = { animator: new Animator(this.reduced), mood: 'neutral', last: 'idle', ctx: { idleClip: visualOf(look).idleClip }, handlers: new Map() }
      s.animator.play(s.ctx.idleClip ?? 'idle', 0)
      this.slots.set(id, s)
    }
    return s
  }
  addNpc(id: string, look: string, x: number, facing: Facing, watch?: number, steps: Step[] = []) {
    const n = { ...npcAt(id, look, x, facing, watch), script: steps }
    this.npcs = [...this.npcs.filter((m) => m.id !== id), n]
    this.slot(id, look)
    this.version++
    return n
  }
  npc = (id: string) => this.npcs.find((n) => n.id === id)
  setNpc(id: string, change: (n: Npc) => Npc) {
    this.npcs = this.npcs.map((n) => (n.id === id ? change(n) : n))
    this.version++
  }

  /** Plays a clip on a character; `on` gets this play's events (a later play makes them unreachable). */
  play(id: string, clip: string, now: number, on?: Handlers): number {
    const s = this.slots.get(id)
    if (!s) return 0
    const token = s.animator.play(clip, now)
    s.handlers.clear()
    if (on) s.handlers.set(token, on)
    this.version++
    return token
  }
  setMood(id: string, mood: Mood) {
    const s = this.slots.get(id)
    if (s && s.mood !== mood) {
      s.mood = mood
      this.version++
    }
  }
  clipOf = (id: string) => this.slots.get(id)?.animator.clip.id ?? 'idle'

  /**
   * The clip that follows a control state change — with the in-between clips of movement (start, stop, turn).
   * Engaged states (a talk, an interaction) get their clips from the scene, which knows the act; disabled keeps the
   * last pose.
   */
  sync(id: string, state: ControlState, now: number) {
    const s = this.slots.get(id)
    if (!s || state === s.last) return
    const was = s.last
    s.last = state
    if (ENGAGED.has(state) || state === 'disabled') return
    if (state === 'turn') this.play(id, 'turn', now)
    else if (MOVING.has(state)) this.play(id, MOVING.has(was) && was !== 'turn' ? 'walk' : was === 'turn' ? 'walk' : 'start', now)
    else if (state === 'idle') this.play(id, MOVING.has(was) ? 'stop' : clipFor('idle', s.ctx), now)
    if (state === 'idle' && MOVING.has(was) && s.ctx.idleClip) {
      // stop, then the character's own resting clip
      const t = this.slots.get(id)!.animator.token
      s.handlers.set(t, { end: () => this.play(id, s.ctx.idleClip!, now) })
    }
  }

  /**
   * One frame: NPC scripts and walks, then every animator; events go to their handlers. Returns lines NPC scripts
   * say. `playerX` lets NPCs watch and face the player.
   */
  frame(now: number, dt: number, playerX: number, c: CollisionDef): string[] {
    const says: string[] = []
    const ended = new Set<string>()
    for (const [id, s] of this.slots)
      for (const e of s.animator.advance(now)) {
        if (e.name === 'end') ended.add(id)
        const h = s.handlers.get(e.token)?.[e.name]
        if (h) {
          // once: a delivered event is removed before its handler runs (a handler may play the next clip)
          const hs = s.handlers.get(e.token)!
          delete hs[e.name]
          h()
        }
      }
    const next: Npc[] = []
    for (const n of this.npcs) {
      const before = n
      const r = stepNpc(n, dt, now, playerX, c, ended.has(n.id))
      if (r.say) says.push(r.say)
      if (r.npc.gone) {
        this.slots.delete(n.id)
        this.version++
        continue
      }
      if (r.play) this.play(n.id, r.play, now)
      if (r.npc.actor.facing !== before.actor.facing) this.version++
      next.push(r.npc)
      this.sync(n.id, r.npc.actor.state, now)
    }
    this.npcs = next
    return says
  }
  /** true while anything still needs frames: an NPC walking or scripted, a one-shot clip with events to come */
  busy(now: number) {
    return this.npcs.some((n) => npcBusy(n, now)) || [...this.slots.values()].some((s) => s.animator.busy)
  }
  pause(now: number) {
    this.slots.forEach((s) => s.animator.pause(now))
  }
  resume(now: number) {
    this.slots.forEach((s) => s.animator.resume(now))
  }

  /** NPC enters a conversation: stops its script, turns to the player and listens. */
  engage(id: string, playerX: number, now: number) {
    this.setNpc(id, (n) => ({ ...n, script: [], playing: null, waitUntil: 0, actor: setState({ ...n.actor, target: null, state: n.actor.state === 'scripted' ? 'idle' : n.actor.state, facing: playerX >= n.actor.x ? 1 : -1 }, 'listen') }))
    this.slots.get(id)!.last = 'listen'
    this.play(id, 'listen', now)
  }
  /** Talk / listen as the dialogue moves on; the listener nods, the speaker shows the line's mood. */
  speak(talker: string | null, ids: string[], mood: Mood, now: number) {
    for (const id of ids) {
      const s = this.slots.get(id)
      if (!s) continue
      const talking = id === talker
      const to: ControlState = talking ? 'talk' : 'listen'
      if (id !== 'player') this.setNpc(id, (n) => ({ ...n, actor: setState(n.actor, to) }))
      s.last = to
      this.setMood(id, talking ? mood : 'focus')
      if (talking && mood === 'surprise') this.play(id, 'surprise', now, { end: () => this.play(id, 'talk', now) })
      else this.play(id, talking ? 'talk' : 'nod', now)
    }
  }
  /** The conversation closed: back to rest, then the NPC's after-talk script (if any) or home. */
  release(id: string, now: number, steps: Step[]) {
    this.setMood(id, 'neutral')
    this.setNpc(id, (n) => ({ ...n, actor: setState(n.actor, 'idle'), script: steps.length ? steps : [{ face: 'home' }] }))
    const s = this.slots.get(id)!
    s.last = 'idle'
    this.play(id, 'settle', now, { end: () => this.play(id, s.ctx.idleClip ?? 'idle', now) })
  }

  views(player: Actor): View[] {
    const v = (id: string, look: string, a: Actor, extra: boolean): View => {
      const s = this.slots.get(id)!
      return { id, look, x: a.x, facing: a.facing, state: a.state, clip: s.animator.clip.id, token: s.animator.token, mood: s.mood, extra }
    }
    return [...this.npcs.map((n) => v(n.id, n.look, n.actor, n.id.startsWith('extra:'))), v('player', 'player', player, false)]
  }
}
