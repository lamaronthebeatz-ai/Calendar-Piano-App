import type { Save } from '../engine/save'
import type { ArcDef, LocationDef } from '../engine/types'
import { holds } from '../engine/world'
import { passage } from './world'
import type { InteractableDef, SceneDef } from './types'

type Obj = NonNullable<LocationDef['objects']>[number]
/** An interactable as it stands now: its label and act resolved from the arc, or absent when the arc says not now. */
export type Live = InteractableDef & { label: string; open?: boolean; dialogue?: string; object?: Obj }

/**
 * The scene's interactables filtered by the arc: a person shows only while the arc has them here (their `when`), a
 * thing only while usable. Doors always show — shut ones say why. Labels come from the arc, never from the scene.
 */
export function live(arc: ArcDef, loc: LocationDef, scene: SceneDef, save: Save): Live[] {
  const out: Live[] = []
  for (const i of scene.interactables) {
    if (i.kind === 'npc') {
      const p = loc.present.find((x) => x.npc === i.ref && (!x.when || holds(x.when, save)))
      const c = arc.characters.find((x) => x.id === i.ref)
      if (p && c) out.push({ ...i, label: c.name, dialogue: p.dialogue })
    } else if (i.kind === 'object') {
      const o = loc.objects?.find((x) => x.id === i.ref)
      if (o && (!o.when || holds(o.when, save))) out.push({ ...i, label: o.label, object: o })
    } else if (i.kind === 'door' || i.kind === 'exit') out.push({ ...i, open: passage(arc, scene, i.transition, save).ok })
    else out.push(i)
  }
  return out
}

/** The ids a scene points at that the arc does not have — a content error (tested for every scene). */
export function danglingRefs(arc: ArcDef, scene: SceneDef): string[] {
  const loc = arc.locations.find((l) => l.id === scene.location)
  if (!loc) return [scene.location]
  const bad: string[] = []
  for (const i of scene.interactables) {
    if (i.kind === 'npc' && !loc.present.some((p) => p.npc === i.ref)) bad.push(i.ref)
    if (i.kind === 'object' && !loc.objects?.some((o) => o.id === i.ref)) bad.push(i.ref)
    if ((i.kind === 'door' || i.kind === 'exit') && !scene.transitions.some((t) => t.id === i.transition)) bad.push(i.transition)
  }
  for (const t of scene.transitions) if (!arc.locations.some((l) => l.id === t.to.location)) bad.push(t.to.location)
  return bad
}
