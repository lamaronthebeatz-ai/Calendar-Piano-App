/**
 * The control state machine every character runs (player and NPC alike). Control state answers "what is this
 * character doing, and may it be moved?"; which animation shows is decided from it by the animation controller
 * (clips.ts) — the two are kept apart: one control state can show several clips (talk: gestures, a nod…).
 *
 * Transitions are a table, not a set of booleans: a move the table does not allow is refused (returns false) and the
 * state stays as it was — so a tap during a conversation cannot start a walk, and an interaction cannot start twice.
 */
export type ControlState = 'idle' | 'walk' | 'turn' | 'approach' | 'interact' | 'talk' | 'listen' | 'inspect' | 'gesture' | 'scripted' | 'disabled'

const ALL: ControlState[] = ['idle', 'walk', 'turn', 'approach', 'interact', 'talk', 'listen', 'inspect', 'gesture', 'scripted', 'disabled']
const T: Record<ControlState, readonly ControlState[]> = {
  idle: ['walk', 'turn', 'approach', 'interact', 'talk', 'listen', 'inspect', 'gesture', 'scripted', 'disabled'],
  walk: ['idle', 'walk', 'turn', 'approach', 'disabled'],
  turn: ['walk', 'approach', 'scripted', 'idle', 'disabled'],
  approach: ['idle', 'walk', 'turn', 'approach', 'interact', 'talk', 'inspect', 'gesture', 'disabled'],
  // an interaction ends in its result (a talk, a look) or back at rest; leaving the scene disables
  interact: ['talk', 'listen', 'inspect', 'gesture', 'idle', 'disabled'],
  // in a conversation the two sides swap speaking and listening; a gesture (a nod) happens in between
  talk: ['listen', 'gesture', 'idle', 'disabled'],
  listen: ['talk', 'gesture', 'idle', 'disabled'],
  inspect: ['idle', 'gesture', 'disabled'],
  gesture: ['idle', 'talk', 'listen', 'inspect', 'disabled'],
  scripted: ['idle', 'turn', 'gesture', 'scripted', 'disabled'],
  // only the scene releases a disabled character
  disabled: ['idle'],
}

export const canGo = (from: ControlState, to: ControlState) => from === to || T[from].includes(to)
/** States in which player input does not move the character. */
export const LOCKED: ReadonlySet<ControlState> = new Set(ALL.filter((s) => !['idle', 'walk', 'turn', 'approach'].includes(s)))
/** States in which the character moves along the floor. */
export const MOVING: ReadonlySet<ControlState> = new Set(['walk', 'approach', 'scripted', 'turn'])
/** A conversation, a look or a gesture: what is ended (back to idle) when its panel closes. */
export const ENGAGED: ReadonlySet<ControlState> = new Set(['interact', 'talk', 'listen', 'inspect', 'gesture'])
export const transitionsOf = (s: ControlState) => T[s]
export const CONTROL_STATES = ALL
