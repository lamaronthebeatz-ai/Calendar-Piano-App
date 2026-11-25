import { goTo, setState, tick, type Actor } from '../actor'
import type { CollisionDef, Facing } from '../types'
import { CLIPS } from './clips'

/**
 * NPCs and extras: the same character (actor + animator) as the player, driven by a behaviour instead of input.
 * A behaviour is a resting clip, an optional "watch" (turn toward the player who comes within range), and scripts —
 * short lists of steps run in order: walk somewhere, face a point or the player, play a clip (waiting for its end),
 * wait. No AI: everything an NPC does is written down in the scene data.
 */
export type Step = { walk: number } | { face: number | 'player' | 'home' } | { play: string } | { wait: number } | { say: string } | { leave: true }
export type Behaviour = { watch?: number; home: { x: number; facing: Facing } }

export type Npc = {
  id: string
  /** the visual definition (defs.ts) */
  look: string
  actor: Actor
  behaviour: Behaviour
  script: Step[]
  waitUntil: number
  /** a clip the script asked for, still playing */
  playing: string | null
  /** an extra leaves the scene when its script says so */
  gone: boolean
}

export const npcAt = (id: string, look: string, x: number, facing: Facing, watch?: number): Npc => ({
  id, look, actor: { x, facing, state: 'idle', target: null, turnLeft: 0 }, behaviour: { watch, home: { x, facing } }, script: [], waitUntil: 0, playing: null, gone: false,
})

/** What the scene does for an NPC on a frame: the clip to show, if the NPC's step asks for one. */
export type NpcFrame = { npc: Npc; play?: string; say?: string }

/**
 * One frame of an NPC: its walk (scripted walks ignore the player's collision — the scene author placed the path),
 * then its script. `clipEnded` tells the runner the clip it was waiting for has finished (the animator's 'end').
 */
export function stepNpc(n: Npc, dt: number, now: number, playerX: number, c: CollisionDef, clipEnded: boolean): NpcFrame {
  let npc = { ...n, actor: tick(n.actor, dt).actor }
  let play: string | undefined
  let say: string | undefined
  // a walk step finishes when the walker arrives
  if (npc.actor.state === 'scripted' && npc.actor.target === null) npc = { ...npc, actor: setState({ ...npc.actor, state: 'scripted' }, 'idle') }
  if (npc.playing && clipEnded) npc = { ...npc, playing: null }
  const busy = npc.actor.target !== null || npc.playing !== null || now < npc.waitUntil
  if (!busy && npc.script.length) {
    const [s, ...rest] = npc.script
    npc = { ...npc, script: rest }
    if ('walk' in s) {
      npc = { ...npc, actor: goTo(npc.actor, c, s.walk, 'scripted') }
      play = 'walk'
    } else if ('face' in s) {
      const at = s.face === 'player' ? playerX : s.face === 'home' ? null : s.face
      const facing: Facing = at === null ? npc.behaviour.home.facing : at >= npc.actor.x ? 1 : -1
      npc = { ...npc, actor: { ...npc.actor, facing } }
    } else if ('play' in s) {
      npc = { ...npc, playing: CLIPS[s.play]?.loop ? null : s.play }
      play = s.play
    } else if ('wait' in s) npc = { ...npc, waitUntil: now + s.wait }
    else if ('say' in s) say = s.say
    else npc = { ...npc, gone: true }
  }
  // watching: an NPC at rest turns toward the player who comes near (and back home when they leave)
  const w = npc.behaviour.watch
  if (w && !npc.script.length && npc.actor.state === 'idle' && !npc.playing) {
    const near = Math.abs(playerX - npc.actor.x) <= w
    const facing: Facing = near ? (playerX >= npc.actor.x ? 1 : -1) : npc.behaviour.home.facing
    if (facing !== npc.actor.facing) npc = { ...npc, actor: { ...npc.actor, facing } }
  }
  return { npc, play, say }
}
/** Whether this NPC still needs frames (walking, a script running, a clip it waits on). */
export const npcBusy = (n: Npc, now: number) => n.actor.target !== null || n.script.length > 0 || n.playing !== null || now < n.waitUntil
