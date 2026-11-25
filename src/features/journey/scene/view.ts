import type { SceneDef } from './types'

/**
 * Coordinates and camera. Three spaces:
 *  - scene: units inside one scene (x along the floor, y down from the top), fixed whatever the device;
 *  - world: region origin + scene origin + scene x — where a scene sits on the region and world maps;
 *  - screen: CSS pixels of the stage element.
 * The view is recomputed from the stage size on every resize or rotation; positions are only ever kept in scene
 * units, so nothing drifts when the scale changes.
 */
export type View = {
  /** stage size, CSS px */
  w: number
  h: number
  /** CSS px per scene unit */
  scale: number
  /** how much of the scene fits across, in scene units */
  span: number
  /** vertical offset of the scene inside the stage (letterbox), CSS px */
  offY: number
  /** the camera does not move: the whole scene is in view */
  fixed: boolean
}

const FIT_MIN = 0.75

export function viewOf(def: Pick<SceneDef, 'dimensions' | 'camera'>, w: number, h: number): View | null {
  if (w <= 0 || h <= 0) return null
  const { width, height } = def.dimensions
  // fixed: the whole room fits — unless that would shrink it below FIT_MIN of its height-filling size (an upright phone
  // and a wide room): then it scrolls like a large scene rather than shrinking the figures past easy reading
  const fixed = def.camera.mode === 'fixed' && w / width >= FIT_MIN * (h / height)
  const scale = fixed ? Math.min(h / height, w / width) : Math.min(h / height, w / (def.camera.minView ?? 560))
  return { w, h, scale, span: w / scale, offY: (h - height * scale) / 2, fixed }
}

/** Where the camera's left edge stands (scene units). A room narrower than the view is centred, never scrolled. */
export function clampCamera(def: Pick<SceneDef, 'dimensions'>, v: View, x: number): number {
  const width = def.dimensions.width
  if (v.span >= width) return (width - v.span) / 2
  return Math.min(width - v.span, Math.max(0, x))
}

/**
 * Following: the camera stays put while the figure is inside the middle band (span minus `deadZone` on each side),
 * and moves only by as much as the figure leaves it — no jitter from small steps, never losing the figure.
 */
export function follow(def: Pick<SceneDef, 'dimensions' | 'camera'>, v: View, cam: number, x: number): number {
  if (v.fixed) return clampCamera(def, v, 0)
  const dz = Math.min(def.camera.deadZone ?? 0.3 * v.span, v.span / 2 - 1)
  let c = cam
  if (x < c + dz) c = x - dz
  else if (x > c + v.span - dz) c = x - v.span + dz
  return clampCamera(def, v, c)
}
/** The camera placed for a figure just arrived (a spawn): figure centred as far as the bounds allow. */
export const centreOn = (def: Pick<SceneDef, 'dimensions' | 'camera'>, v: View, x: number) => (v.fixed ? clampCamera(def, v, 0) : clampCamera(def, v, x - v.span / 2))

export const sceneToScreen = (v: View, cam: number, x: number, y: number, parallax = 1) => ({ x: (x - cam * parallax) * v.scale, y: y * v.scale + v.offY })
export const screenToScene = (v: View, cam: number, x: number, y: number) => ({ x: x / v.scale + cam, y: (y - v.offY) / v.scale })
/** Parallax only where the camera moves: in a room shown whole, every layer stays with the room (no layer past its walls). */
export const parallaxOf = (def: Pick<SceneDef, 'dimensions'>, v: View, parallax: number) => (v.span >= def.dimensions.width ? 1 : parallax)
/** A layer at `parallax` is this wide (scene units) so it never shows an edge while the camera crosses the room. */
export const layerWidth = (def: Pick<SceneDef, 'dimensions'>, v: View, parallax: number) => {
  const p = parallaxOf(def, v, parallax)
  return Math.ceil(p === 1 ? def.dimensions.width : Math.max(def.dimensions.width, (def.dimensions.width - v.span) * p + v.span))
}
/** CSS transform of a layer for camera position `cam`. */
export const layerTransform = (def: Pick<SceneDef, 'dimensions'>, v: View, cam: number, parallax: number) => `translate3d(${-cam * parallaxOf(def, v, parallax) * v.scale}px, ${v.offY}px, 0) scale(${v.scale})`

export const sceneToWorld = (regionOrigin: number, def: Pick<SceneDef, 'origin'>, x: number) => regionOrigin + def.origin + x
