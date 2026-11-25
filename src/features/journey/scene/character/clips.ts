import type { ControlState } from './machine'

/**
 * Animation clips as data, shared by every character with the standard rig. A clip moves named parts of the rig with
 * transform keyframes (offsets 0–1); the renderer plays them with the Web Animations API, the animator (animator.ts)
 * runs the same timeline and fires the clip's events at their offsets — the same numbers drive both, so "the hand
 * reaches the shelf" (an event) happens when the drawn hand gets there, not after a guessed delay.
 *
 * Only transform is animated (compositor-friendly on iPhone). Looping clips run only while their state lasts; a new
 * clip cancels the old one, and an old clip's events are never delivered after it has been replaced.
 */
export type Part = 'body' | 'head' | 'armF' | 'armB' | 'legF' | 'legB' | 'mouth' | 'prop'
export type Key = { at: number; rotate?: number; x?: number; y?: number; sx?: number; sy?: number }
export type ClipEvent = { at: number; name: string }
export type Clip = {
  id: string
  /** milliseconds (one cycle for a loop) */
  duration: number
  loop: boolean
  tracks: Partial<Record<Part, readonly Key[]>>
  events?: readonly ClipEvent[]
  /** played next when a one-shot clip ends (stand back up, return to listening…) */
  then?: string
}

const still = (rotate = 0) => [{ at: 0, rotate }, { at: 1, rotate }]
export const CLIPS: Record<string, Clip> = {
  // movement
  idle: { id: 'idle', duration: 3200, loop: true, tracks: { body: [{ at: 0, y: 0 }, { at: 0.5, y: -1.5 }, { at: 1, y: 0 }] } },
  start: { id: 'start', duration: 200, loop: false, tracks: { body: [{ at: 0, rotate: 0 }, { at: 1, rotate: 4 }] }, then: 'walk' },
  walk: {
    id: 'walk',
    duration: 560,
    loop: true,
    tracks: {
      legF: [{ at: 0, rotate: 22 }, { at: 0.5, rotate: -22 }, { at: 1, rotate: 22 }],
      legB: [{ at: 0, rotate: -22 }, { at: 0.5, rotate: 22 }, { at: 1, rotate: -22 }],
      armF: [{ at: 0, rotate: -14 }, { at: 0.5, rotate: 14 }, { at: 1, rotate: -14 }],
      armB: [{ at: 0, rotate: 14 }, { at: 0.5, rotate: -14 }, { at: 1, rotate: 14 }],
      body: [{ at: 0, y: 0, rotate: 3 }, { at: 0.25, y: -4, rotate: 3 }, { at: 0.5, y: 0, rotate: 3 }, { at: 0.75, y: -4, rotate: 3 }, { at: 1, y: 0, rotate: 3 }],
    },
  },
  stop: { id: 'stop', duration: 240, loop: false, tracks: { body: [{ at: 0, rotate: 3 }, { at: 0.5, rotate: -2, y: 1 }, { at: 1, rotate: 0, y: 0 }] }, then: 'idle' },
  turn: { id: 'turn', duration: 160, loop: false, tracks: { body: [{ at: 0, sx: 1 }, { at: 0.5, sx: 0.8 }, { at: 1, sx: 1 }] }, events: [{ at: 1, name: 'turned' }] },

  // interaction
  reach: {
    id: 'reach',
    duration: 560,
    loop: false,
    tracks: { armF: [{ at: 0, rotate: 0 }, { at: 0.55, rotate: -88 }, { at: 0.8, rotate: -88 }, { at: 1, rotate: -40 }], body: [{ at: 0, rotate: 0 }, { at: 0.55, rotate: 6 }, { at: 1, rotate: 2 }] },
    // the hand touches the thing at 55%: the take happens there; at the end the pose settles
    events: [{ at: 0.55, name: 'contact' }, { at: 1, name: 'done' }],
  },
  take: { id: 'take', duration: 420, loop: false, tracks: { armF: [{ at: 0, rotate: -40 }, { at: 1, rotate: -20 }], body: [{ at: 0, rotate: 2 }, { at: 1, rotate: 0 }] }, events: [{ at: 1, name: 'stowed' }] },
  push: {
    id: 'push',
    duration: 520,
    loop: false,
    tracks: { armF: [{ at: 0, rotate: 0 }, { at: 0.6, rotate: -96 }, { at: 1, rotate: -96 }], body: [{ at: 0, rotate: 0 }, { at: 0.6, rotate: 8 }, { at: 1, rotate: 8 }] },
    // the door gives at 70%: the scene may leave then
    events: [{ at: 0.7, name: 'open' }],
  },
  read: {
    id: 'read',
    duration: 2400,
    loop: true,
    tracks: { head: [{ at: 0, rotate: 14 }, { at: 0.5, rotate: 18 }, { at: 1, rotate: 14 }], armF: still(-52), armB: still(-44), body: still(3) },
  },
  'look-up': {
    id: 'look-up',
    duration: 480,
    loop: false,
    tracks: { head: [{ at: 0, rotate: 0 }, { at: 1, rotate: -16 }], body: [{ at: 0, rotate: 0 }, { at: 1, rotate: -3 }], armF: [{ at: 0, rotate: 0 }, { at: 1, rotate: -20 }] },
    events: [{ at: 1, name: 'open' }],
  },
  write: {
    id: 'write',
    duration: 1800,
    loop: true,
    tracks: { armF: [{ at: 0, rotate: -42 }, { at: 0.3, rotate: -36 }, { at: 0.6, rotate: -46 }, { at: 1, rotate: -42 }], head: still(18), body: still(4) },
  },

  // conversation
  greet: { id: 'greet', duration: 420, loop: false, tracks: { armF: [{ at: 0, rotate: 0 }, { at: 0.5, rotate: -118 }, { at: 1, rotate: -30 }], head: [{ at: 0, rotate: 0 }, { at: 0.5, rotate: 6 }, { at: 1, rotate: 0 }] }, events: [{ at: 1, name: 'ready' }] },
  talk: {
    id: 'talk',
    duration: 1500,
    loop: true,
    tracks: {
      armF: [{ at: 0, rotate: -8 }, { at: 0.25, rotate: -38 }, { at: 0.5, rotate: -16 }, { at: 0.75, rotate: -44 }, { at: 1, rotate: -8 }],
      head: [{ at: 0, rotate: -2 }, { at: 0.5, rotate: 3 }, { at: 1, rotate: -2 }],
      mouth: [{ at: 0, sy: 1 }, { at: 0.12, sy: 0.3 }, { at: 0.25, sy: 1 }, { at: 0.4, sy: 0.4 }, { at: 0.55, sy: 1 }, { at: 0.7, sy: 0.3 }, { at: 0.85, sy: 0.9 }, { at: 1, sy: 1 }],
    },
  },
  listen: { id: 'listen', duration: 3000, loop: true, tracks: { head: [{ at: 0, rotate: 4 }, { at: 0.5, rotate: 6 }, { at: 1, rotate: 4 }], body: still(0) } },
  nod: { id: 'nod', duration: 440, loop: false, tracks: { head: [{ at: 0, rotate: 4 }, { at: 0.3, rotate: 14 }, { at: 0.6, rotate: 2 }, { at: 0.8, rotate: 10 }, { at: 1, rotate: 4 }] }, then: 'listen' },
  surprise: { id: 'surprise', duration: 420, loop: false, tracks: { body: [{ at: 0, y: 0 }, { at: 0.3, y: -7 }, { at: 1, y: 0 }], head: [{ at: 0, rotate: 0 }, { at: 0.3, rotate: -10 }, { at: 1, rotate: -4 }] } },
  point: {
    id: 'point',
    duration: 900,
    loop: false,
    tracks: { armF: [{ at: 0, rotate: 0 }, { at: 0.35, rotate: -78 }, { at: 0.8, rotate: -78 }, { at: 1, rotate: -10 }], head: [{ at: 0, rotate: 0 }, { at: 0.35, rotate: -4 }, { at: 1, rotate: 0 }] },
    events: [{ at: 0.35, name: 'pointing' }, { at: 1, name: 'done' }],
  },
  settle: { id: 'settle', duration: 300, loop: false, tracks: { body: [{ at: 0, y: 0 }, { at: 0.5, y: 2 }, { at: 1, y: 0 }], armF: [{ at: 0, rotate: -20 }, { at: 1, rotate: 0 }] }, events: [{ at: 1, name: 'done' }], then: 'idle' },
}

/** What a character is doing besides its control state: the act it is performing, and who is speaking now. */
export type Context = { act?: 'take' | 'door' | 'look' | 'read'; speaking?: boolean; idleClip?: string }

/** The clip that shows a control state. Characters may name their own idle clip (a scribe writes, a reader reads). */
export function clipFor(state: ControlState, ctx: Context = {}): string {
  switch (state) {
    case 'walk':
    case 'approach':
    case 'scripted':
      return 'walk'
    case 'turn':
      return 'turn'
    case 'interact':
      return ctx.act === 'door' ? 'push' : ctx.act === 'look' ? 'look-up' : 'reach'
    case 'talk':
      return 'talk'
    case 'listen':
      return 'listen'
    case 'inspect':
      return ctx.act === 'look' ? 'look-up' : 'read'
    case 'gesture':
      return 'nod'
    default:
      return ctx.idleClip ?? 'idle'
  }
}

/** The CSS transform of a key (the renderer passes these to element.animate). */
export const transformOf = (k: Key) => `translate(${k.x ?? 0}px, ${k.y ?? 0}px) rotate(${k.rotate ?? 0}deg) scale(${k.sx ?? 1}, ${k.sy ?? 1})`
