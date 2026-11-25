import { isOpen } from '../engine/runtime'
import type { Save } from '../engine/save'
import type { ArcDef, LocationDef } from '../engine/types'
import { holds } from '../engine/world'
import { POMPOSA_SCENES, BAN_THAO_WORLD } from '../content/scenes/ban-thao'
import type { RegionDef, SceneDef, SpawnDef, WorldDef } from './types'

/**
 * World → region → location → scene. The world and its regions group an arc's locations; whether a place is open,
 * visited, who is there and what happens stay the arc's (LocationDef.hidden / unlock, the save's visited and flags):
 * this file only reads them. A region is open when any of its places is.
 */
export const SCENES: readonly SceneDef[] = [...POMPOSA_SCENES]
export const WORLDS: readonly WorldDef[] = [BAN_THAO_WORLD]

export const sceneById = (id: string) => SCENES.find((s) => s.id === id)
export const scenesOf = (location: string) => SCENES.filter((s) => s.location === location)
/** `w` from the address: "1" (the place's first scene) or a scene id of that place. */
export const sceneFor = (location: string, w: string | null | undefined) => (w ? (scenesOf(location).find((s) => s.id === w) ?? (w === '1' ? scenesOf(location)[0] : undefined)) : undefined)
export const spawnOf = (s: SceneDef, id?: string | null): SpawnDef => s.spawns.find((p) => p.id === id) ?? s.spawns[0]

export const worldOf = (arc: string) => WORLDS.find((w) => w.arc === arc)
export const regionOf = (location: string) => WORLDS.flatMap((w) => w.regions).find((r) => r.locations.includes(location))
export const regionById = (id: string) => WORLDS.flatMap((w) => w.regions).find((r) => r.id === id)

export type PlaceStatus = { location: LocationDef; open: boolean; visited: boolean; scene?: SceneDef }
export type RegionStatus = { region: RegionDef; open: boolean; visited: number; places: PlaceStatus[] }

export function regionStatus(arc: ArcDef, region: RegionDef, save: Save): RegionStatus {
  const places = region.locations.flatMap((id) => {
    const location = arc.locations.find((l) => l.id === id)
    return location ? [{ location, open: isOpen(location, save), visited: save.visited.includes(id), scene: scenesOf(id)[0] }] : []
  })
  return { region, open: places.some((p) => p.open), visited: places.filter((p) => p.visited).length, places }
}
export const worldStatus = (arc: ArcDef, world: WorldDef, save: Save) => world.regions.map((r) => regionStatus(arc, r, save))

export type Passage = { ok: true; location: LocationDef; scene?: SceneDef; spawn?: string } | { ok: false; reason: string }
/** Can the figure go through this transition now? The target place must be open (the arc decides) and `when` hold. */
export function passage(arc: ArcDef, scene: SceneDef, transition: string, save: Save): Passage {
  const t = scene.transitions.find((x) => x.id === transition)
  if (!t) return { ok: false, reason: 'Lối này không dẫn đi đâu.' }
  const location = arc.locations.find((l) => l.id === t.to.location)
  if (!location || !isOpen(location, save) || (t.when && !holds(t.when, save))) return { ok: false, reason: t.locked }
  const target = t.to.scene ? sceneById(t.to.scene) : scenesOf(location.id)[0]
  return { ok: true, location, scene: target, spawn: t.to.spawn }
}
