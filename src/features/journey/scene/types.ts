import type { Cond, Effect } from '../engine/types'

/**
 * The scene & world engine's data: where things stand, never what they mean. Who a person is, what a thing does,
 * when a place opens, quests, items, evidence, puzzles — all stay in the arc's content (LocationDef and the rest) and
 * the Journey save. A scene only points at them by id (`ref`), so nothing is defined twice.
 *
 * Units: one scene unit is one CSS pixel at scale 1; a scene is `width` × `height` units, feet stand on `floor`.
 * Coordinates: scene (x inside one scene) · world (region origin + scene origin + x, for maps) · screen (CSS px).
 */
export type Facing = 1 | -1

/** Layer roles, back to front. Every role is optional in a scene. */
export type LayerRole = 'background' | 'distant' | 'midground' | 'effects' | 'characters' | 'foreground' | 'occlusion' | 'interaction'
export type LayerDef = {
  id: string
  role: LayerRole
  /** drawing order; higher is nearer */
  z: number
  /** 1 moves with the room, < 1 farther (slower), > 1 nearer (faster) */
  parallax: number
  opacity?: number
  /** shown only while the condition holds on the save (a door drawn open once the place is open…) */
  when?: Cond
  /** an image of public/images/journey/<id>.webp, or a drawing exported by the scene's art module */
  source?: { image: string } | { art: string }
}

export type SpawnDef = { id: string; x: number; facing: Facing }

/** The floor: one walkable span with solids the figure cannot enter (a table, a rail). */
export type Solid = { id: string; x0: number; x1: number }
export type CollisionDef = { min: number; max: number; solids: readonly Solid[] }

/** Where the figure stands to use something: `distance` beside it, from either side or only one. */
export type Approach = { distance: number; side?: 'left' | 'right' | 'either' }

type Spot = {
  id: string
  /** where the thing stands (its centre), and how high its marker sits */
  x: number
  top: number
  /** the tap area: `width` around x (default 130), from `top` down `height` (default: to the floor) */
  width?: number
  height?: number
  approach: Approach
  /** the word on the action button */
  verb: string
}
/**
 * Something in the scene to use. One mechanism for all kinds (walk up, then act); the act differs by kind:
 * npc → the arc's dialogue for that person here · object → the LocationDef object (effects, puzzle, a look) ·
 * door / exit → a transition · lookout → a short description written here (scene text, not story content).
 */
export type InteractableDef =
  | (Spot & { kind: 'npc'; ref: string; look: 'monk' | 'scholar'; facing: Facing })
  | (Spot & { kind: 'object'; ref: string })
  | (Spot & { kind: 'door' | 'exit'; transition: string; label: string })
  | (Spot & { kind: 'lookout'; label: string; text: string })

export type TransitionDef = {
  id: string
  /** a location of the same arc; `scene` and `spawn` pick where in it (default: its first scene, first spawn) */
  to: { location: string; scene?: string; spawn?: string }
  /** besides the target place being open (always required) */
  when?: Cond
  /** said when the way is shut */
  locked: string
  effect?: 'fade' | 'none'
}

/** A zone that does something when walked into: a line of narration, and/or Journey effects (through the engine). */
export type SceneEventDef = { id: string; x0: number; x1: number; when?: Cond; note?: string; effects?: Effect[]; once: 'session' | 'visit' }

export type CameraDef = { mode: 'fixed' | 'follow'; /** narrowest slice shown across (follow) */ minView?: number; /** the band the figure moves in before the camera follows */ deadZone?: number }

export type SceneDef = {
  id: string
  name: string
  region: string
  location: string
  /** x of this scene's left edge in its region (world coordinates) */
  origin: number
  dimensions: { width: number; height: number; floor: number }
  camera: CameraDef
  /** the module holding this scene's drawings and figure looks, loaded with the scene */
  art: string
  layers: readonly LayerDef[]
  spawns: readonly SpawnDef[]
  collision: CollisionDef
  interactables: readonly InteractableDef[]
  transitions: readonly TransitionDef[]
  events?: readonly SceneEventDef[]
  /** the arc's music plays unless the scene names a track of music.ts */
  audio?: { track?: string }
}

export type RegionDef = {
  id: string
  name: string
  arc: string
  /** the arc's locations in this region (their access stays the arc's: hidden / unlock) */
  locations: readonly string[]
  /** x of the region in the world strip */
  origin: number
  /** neighbouring regions (shown on the world list; travel between them goes through their places) */
  links: readonly string[]
}
export type WorldDef = { id: string; arc: string; name: string; regions: readonly RegionDef[] }
