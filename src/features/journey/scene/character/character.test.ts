import { describe, expect, it } from 'vitest'
import { SCENES } from '../world'
import { goTo, setState, type Actor } from '../actor'
import { Animator } from './animator'
import { Cast } from './cast'
import { CLIPS, clipFor } from './clips'
import { CHARACTERS, visualOf } from './defs'
import { CONTROL_STATES, LOCKED, canGo, transitionsOf } from './machine'
import { npcAt, stepNpc, type Npc, type Step } from './npc'
import type { CollisionDef } from '../types'

const C: CollisionDef = { min: 0, max: 2000, solids: [] }
const at = (x: number, state: Actor['state'] = 'idle'): Actor => ({ x, facing: 1, state, target: null, turnLeft: 0 })

describe('state machine', () => {
  it('every transition names a known state; disabled is released only to idle', () => {
    for (const s of CONTROL_STATES) for (const t of transitionsOf(s)) expect(CONTROL_STATES).toContain(t)
    expect(transitionsOf('disabled')).toEqual(['idle'])
  })
  it('no walking out of a conversation, a look or a disabled state; every engaged state can end', () => {
    for (const s of ['talk', 'listen', 'inspect', 'interact', 'gesture', 'disabled'] as const) {
      expect(canGo(s, 'walk')).toBe(false)
      expect(goTo(at(100, s), C, 900)).toEqual(at(100, s))
      expect(canGo(s, 'idle')).toBe(true)
    }
    expect(LOCKED.has('walk')).toBe(false)
  })
  it('a refused move leaves the state as it was; an allowed one clears any walk target', () => {
    expect(setState(at(1, 'talk'), 'walk').state).toBe('talk')
    expect(setState({ ...at(1, 'approach'), target: 500 }, 'interact')).toMatchObject({ state: 'interact', target: null })
  })
})

describe('animation controller', () => {
  it('fires each event once, at its point on the clip timeline, then ends and moves to `then`', () => {
    const a = new Animator()
    const tok = a.play('reach', 1000)
    expect(a.advance(1000 + 0.5 * 560)).toEqual([])
    expect(a.advance(1000 + 0.56 * 560)).toEqual([{ name: 'contact', clip: 'reach', token: tok }])
    expect(a.advance(1000 + 0.6 * 560)).toEqual([])
    expect(a.advance(1000 + 560).map((e) => e.name)).toEqual(['done', 'end'])
    expect(a.advance(5000)).toEqual([])
    const b = new Animator()
    b.play('nod', 0)
    b.advance(440)
    expect(b.clip.id).toBe('listen') // nod → back to listening
  })
  it('a replaced clip never delivers its events (new token)', () => {
    const a = new Animator()
    const old = a.play('push', 0)
    const now = a.play('settle', 100)
    const ev = a.advance(10_000)
    expect(ev.every((e) => e.token === now && e.token !== old)).toBe(true)
    expect(ev.some((e) => e.name === 'open')).toBe(false)
  })
  it('pausing stops the timeline; reduced motion takes no time but still fires every event', () => {
    const a = new Animator()
    a.play('reach', 0)
    a.pause(100)
    expect(a.advance(10_000)).toEqual([])
    a.resume(10_000)
    expect(a.advance(10_000 + 0.56 * 560 - 100).map((e) => e.name)).toEqual(['contact'])
    const r = new Animator(true)
    r.play('push', 0)
    expect(r.advance(0).map((e) => e.name)).toEqual(['open', 'end'])
  })
  it('replaying a running loop does not restart it', () => {
    const a = new Animator()
    const t = a.play('walk', 0)
    expect(a.play('walk', 300)).toBe(t)
  })
})

describe('clips and characters (data)', () => {
  it('clips are well formed: keys and events within 0–1, sorted, `then` known', () => {
    for (const c of Object.values(CLIPS)) {
      for (const keys of Object.values(c.tracks)) {
        expect(keys![0].at).toBe(0)
        expect(keys![keys!.length - 1].at).toBe(1)
        expect(keys!.every((k, i) => i === 0 || k.at > keys![i - 1].at)).toBe(true)
      }
      for (const e of c.events ?? []) expect(e.at >= 0 && e.at <= 1).toBe(true)
      if (c.then) expect(CLIPS[c.then]).toBeTruthy()
      expect(c.duration).toBeGreaterThan(0)
    }
  })
  it('every control state has a clip; a character may name its own resting clip', () => {
    for (const s of CONTROL_STATES) expect(CLIPS[clipFor(s)]).toBeTruthy()
    expect(clipFor('idle', { idleClip: 'write' })).toBe('write')
    expect(clipFor('interact', { act: 'door' })).toBe('push')
  })
  it('every NPC in a scene and every event extra has a visual definition; NPCs look different', () => {
    for (const s of SCENES) {
      for (const i of s.interactables) if (i.kind === 'npc') expect(CHARACTERS[i.ref], i.ref).toBeTruthy()
      for (const e of s.events ?? []) if (e.extra) expect(CHARACTERS[e.extra.look]).toBeTruthy()
    }
    const a = visualOf('npc:bt/quan-thu').appearance
    const b = visualOf('npc:bt/rinaldo').appearance
    expect(a).not.toEqual(b)
    for (const v of Object.values(CHARACTERS)) if (v.idleClip) expect(CLIPS[v.idleClip]).toBeTruthy()
  })
})

describe('NPCs and the cast', () => {
  it('a script walks, faces, plays (waiting for the clip end), says, and an extra leaves', () => {
    const script: Step[] = [{ walk: 900 }, { face: 'player' }, { play: 'point' }, { say: 'hi' }, { leave: true }]
    let n: Npc = { ...npcAt('x', 'extra:lay-brother', 1000, -1), script }
    let t = 0
    const said: string[] = []
    for (let i = 0; i < 400 && !n.gone; i++) {
      t += 16
      const r = stepNpc(n, 0.016, t, 1500, C, n.playing !== null && i % 60 === 59)
      if (r.say) said.push(r.say)
      n = r.npc
    }
    expect(n.gone).toBe(true)
    expect(n.actor.x).toBe(900)
    expect(n.actor.facing).toBe(1) // faced the player on its right
    expect(said).toEqual(['hi'])
  })
  it('an NPC at rest watches the player who comes near, and looks home when they leave', () => {
    const n = npcAt('l', 'npc:bt/quan-thu', 700, -1, 260)
    expect(stepNpc(n, 0.016, 0, 900, C, false).npc.actor.facing).toBe(1)
    expect(stepNpc({ ...n, actor: { ...n.actor, facing: 1 } }, 0.016, 0, 100, C, false).npc.actor.facing).toBe(-1)
  })
  it('a conversation: engage turns the NPC to the player; lines swap talk / listen with moods; release returns home', () => {
    const c = new Cast()
    c.addNpc('librarian', 'npc:bt/quan-thu', 700, -1, 260)
    c.engage('librarian', 600, 0)
    expect(c.npc('librarian')!.actor).toMatchObject({ state: 'listen', facing: -1 })
    c.speak('librarian', ['player', 'librarian'], 'thoughtful', 10)
    const v = (id: string) => c.views(at(600)).find((x) => x.id === id)!
    expect(v('librarian')).toMatchObject({ state: 'talk', clip: 'talk', mood: 'thoughtful' })
    expect(v('player')).toMatchObject({ clip: 'nod', mood: 'focus' })
    c.speak('player', ['player', 'librarian'], 'surprise', 20)
    expect(v('librarian').clip).toBe('nod')
    expect(v('player').clip).toBe('surprise')
    c.frame(1000, 0.016, 600, C) // surprise ends → talk
    expect(v('player').clip).toBe('talk')
    c.release('librarian', 2000, [])
    expect(c.npc('librarian')!.actor.state).toBe('idle')
    for (let t = 2000; t < 4000; t += 16) c.frame(t, 0.016, 100, C)
    expect(v('librarian')).toMatchObject({ clip: 'read', mood: 'neutral', facing: -1 }) // its own resting clip, facing home
  })
  it('animation events reach only their play, once', () => {
    const c = new Cast()
    let n = 0
    c.play('player', 'reach', 0, { contact: () => n++ })
    for (let t = 0; t < 2000; t += 16) c.frame(t, 0.016, 0, C)
    expect(n).toBe(1)
    let stale = 0
    c.play('player', 'push', 0, { open: () => stale++ })
    c.play('player', 'settle', 10)
    for (let t = 10; t < 2000; t += 16) c.frame(t, 0.016, 0, C)
    expect(stale).toBe(0)
  })
  it('walking clips follow movement: start → walk, stop → idle (or the resting clip)', () => {
    const c = new Cast()
    c.sync('player', 'walk', 0)
    expect(c.clipOf('player')).toBe('start')
    c.frame(300, 0.016, 0, C)
    expect(c.clipOf('player')).toBe('walk')
    c.sync('player', 'idle', 400)
    expect(c.clipOf('player')).toBe('stop')
    c.frame(700, 0.016, 0, C)
    expect(c.clipOf('player')).toBe('idle')
  })
})
