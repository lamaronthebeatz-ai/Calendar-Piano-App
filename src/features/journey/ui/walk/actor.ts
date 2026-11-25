/**
 * The walking figure of the side-view scene, as plain data: where it stands, which way it faces, what it is doing.
 * Pure functions only — the scene component runs them each frame and paints the result. Nothing here is saved: the
 * place the figure stands is screen state, the story state stays in the Journey save.
 */
export type ActorState = 'idle' | 'walk' | 'turn' | 'approach' | 'interact' | 'talk' | 'examine' | 'scripted' | 'locked'
export type Facing = 1 | -1
type Going = 'walk' | 'approach' | 'scripted'
/** `then`: what the figure goes on doing once it has turned round. */
export type Actor = { x: number; facing: Facing; state: ActorState; target: number | null; turnLeft: number; then?: Going }
/** The walkable floor: one span, with blocks the figure cannot pass (a rail, a chest). */
export type Collision = { min: number; max: number; blocks: readonly { x0: number; x1: number }[] }

export const SPEED = 230 // world units per second
export const TURN = 0.14 // seconds spent turning round before walking
export const HALF = 22 // half the figure's width: it stops with its body, not its centre, against a block

/** States in which the player's input moves nothing (a conversation, a look, a scripted walk). */
export const LOCKED: ReadonlySet<ActorState> = new Set(['interact', 'talk', 'examine', 'scripted', 'locked'])
export const moving = (a: Actor) => a.state === 'walk' || a.state === 'approach' || a.state === 'scripted' || a.state === 'turn'

/** The furthest point toward `to` the figure can reach from `from` without entering a block or leaving the floor. */
export function reach(c: Collision, from: number, to: number): number {
  let x = Math.min(c.max, Math.max(c.min, to))
  for (const b of c.blocks) {
    if (from <= b.x0 - HALF && x > b.x0 - HALF) x = b.x0 - HALF
    if (from >= b.x1 + HALF && x < b.x1 + HALF) x = b.x1 + HALF
  }
  return x
}

/** Sets off toward `to` (as far as the floor allows). Turns round first when the target is behind. */
export function goTo(a: Actor, c: Collision, to: number, state: Going = 'walk'): Actor {
  const t = state === 'scripted' ? to : reach(c, a.x, to)
  // already there: no target — the caller treats that as arriving at once
  if (Math.abs(t - a.x) < 1) return { ...a, target: null, state: 'idle' }
  const dir: Facing = t > a.x ? 1 : -1
  if (dir !== a.facing) return { ...a, facing: dir, target: t, state: 'turn', turnLeft: TURN, then: state }
  return { ...a, target: t, state }
}

/** One frame. `arrived` is true on the frame the figure reaches its target. */
export function tick(a: Actor, dt: number): { actor: Actor; arrived: boolean } {
  if (a.state === 'turn') {
    const left = a.turnLeft - dt
    if (left > 0) return { actor: { ...a, turnLeft: left }, arrived: false }
    return { actor: { ...a, turnLeft: 0, state: a.then ?? 'walk', then: undefined }, arrived: false }
  }
  if (!moving(a) || a.target === null) return { actor: a, arrived: false }
  const d = a.target - a.x
  const stepLen = SPEED * dt
  if (Math.abs(d) <= stepLen) return { actor: { ...a, x: a.target, target: null }, arrived: true }
  return { actor: { ...a, x: a.x + Math.sign(d) * stepLen, facing: d > 0 ? 1 : -1 }, arrived: false }
}

/** Where to stand to use something at `at`: beside it, on the side the figure comes from, on the floor it can reach. */
export function standSpot(c: Collision, from: number, at: number, gap: number): number {
  const side = from <= at ? -1 : 1
  const want = at + side * gap
  const got = reach(c, from, want)
  // the near side is cut off by a block: try the far side
  return Math.abs(got - want) > 2 ? reach(c, from, at - side * gap) : got
}

/** The thing within `range` of the figure, nearest first. */
export function nearest<T extends { x: number }>(x: number, spots: readonly T[], range: number): T | undefined {
  let best: T | undefined
  for (const s of spots) if (Math.abs(s.x - x) <= range && (!best || Math.abs(s.x - x) < Math.abs(best.x - x))) best = s
  return best
}
