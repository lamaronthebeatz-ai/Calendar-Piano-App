import { describe, expect, it } from 'vitest'
import { ARCS } from '../content/arcs'
import { banThao } from '../content/ban-thao'
import { emptySave } from '../engine/save'
import { HALF, LOCKED, TURN, goTo, reach, standSpot, tick, type Actor } from './actor'
import { live, danglingRefs } from './interact'
import { SceneHost } from './lifecycle'
import { centreOn, clampCamera, follow, layerWidth, sceneToScreen, screenToScene, viewOf } from './view'
import { passage, regionOf, regionStatus, SCENES, sceneById, sceneFor, spawnOf, WORLDS, worldStatus } from './world'
import type { CollisionDef, SceneDef } from './types'

const C: CollisionDef = { min: 70, max: 1940, solids: [{ id: 'rail', x0: 1690, x1: 1716 }] }
const at = (x: number, facing: 1 | -1 = 1): Actor => ({ x, facing, state: 'idle', target: null, turnLeft: 0 })
const run = (a: Actor, secs = 30) => {
  let arrived = false
  for (let t = 0; t < secs && !arrived; t += 1 / 60) ({ actor: a, arrived } = tick(a, 1 / 60))
  return { a, arrived }
}
const lib = sceneById('sc:bt/thu-vien')!
const scr = sceneById('sc:bt/phong-chep')!
const fresh = () => ({ ...emptySave(), name: 'Minh' })

describe('collision', () => {
  it('stops at the scene bounds', () => {
    expect(reach(C, 500, -300)).toBe(70)
    expect(reach(C, 500, 1600)).toBe(1600)
  })
  it('never passes a solid, from either side', () => {
    expect(reach(C, 500, 1900)).toBe(1690 - HALF)
    expect(reach(C, 1900, 500)).toBe(1716 + HALF)
    expect(run(goTo(at(500), C, 1900)).a.x).toBe(1690 - HALF)
  })
  it('stands beside a thing, never on it; one-sided things only from their side; unreachable → null', () => {
    expect(standSpot(C, 300, 700, { distance: 78 })).toBe(622)
    expect(standSpot(C, 1200, 700, { distance: 78 })).toBe(778)
    expect(standSpot(C, 1200, 700, { distance: 78, side: 'left' })).toBe(622)
    expect(standSpot(C, 500, 1800, { distance: 40 })).toBeNull() // behind the rail
    // the scriptorium desk is a solid; its sheets are used from in front of it
    const desk = scr.interactables.find((i) => i.id === 'desk-sheets')!
    const spot = standSpot(scr.collision, 160, desk.x, desk.approach)!
    expect(spot).toBeLessThanOrEqual(780 - HALF)
    expect(desk.x - spot).toBeGreaterThanOrEqual(desk.approach.distance - 2)
  })
})

describe('figure states', () => {
  it('turns before walking back, then arrives', () => {
    let a = goTo(at(800, 1), C, 400)
    expect(a.state).toBe('turn')
    a = tick(a, TURN / 2).actor
    expect(a.x).toBe(800)
    a = tick(a, TURN).actor
    expect(a.state).toBe('walk')
    expect(run(a).a.x).toBe(400)
  })
  it('locked states do not move', () => {
    for (const s of ['talk', 'examine', 'interact', 'scripted', 'locked'] as const) expect(LOCKED.has(s)).toBe(true)
    expect(tick({ ...at(300), state: 'talk', target: 900 }, 1).actor.x).toBe(300)
  })
})

describe('coordinates and camera', () => {
  const phone = viewOf(lib, 393, 600)!
  const wide = viewOf(lib, 1440, 760)!
  it('scale keeps a minimum slice across on a narrow screen, fills the height on a wide one', () => {
    expect(phone.span).toBeCloseTo(560)
    expect(wide.scale).toBeCloseTo(760 / 600)
  })
  it('screen ↔ scene round-trips at any size and camera', () => {
    for (const v of [phone, wide, viewOf(lib, 852, 300)!])
      for (const cam of [0, 333.3, 1200]) {
        const p = sceneToScreen(v, cam, 1234.5, 400)
        const q = screenToScene(v, cam, p.x, p.y)
        expect(q.x).toBeCloseTo(1234.5)
        expect(q.y).toBeCloseTo(400)
      }
  })
  it('the camera stays inside the scene and does not move while the figure is in the dead zone', () => {
    expect(clampCamera(lib, phone, -50)).toBe(0)
    expect(clampCamera(lib, phone, 5000)).toBeCloseTo(2000 - phone.span)
    const c = centreOn(lib, phone, 1000)
    expect(follow(lib, phone, c, 1010)).toBe(c) // a small step: no camera move (no jitter)
    const far = follow(lib, phone, c, 1000 + phone.span) // a big one: follows, the figure stays in view
    expect(1000 + phone.span).toBeLessThanOrEqual(far + phone.span)
  })
  it('a fixed camera shows the whole small scene, centred, without parallax past its walls', () => {
    for (const [w, h] of [[852, 300], [1440, 760], [1024, 700]]) {
      const v = viewOf(scr, w, h)!
      expect(v.fixed).toBe(true)
      expect(v.span).toBeGreaterThanOrEqual(scr.dimensions.width - 0.001)
      expect(follow(scr, v, 0, 900)).toBe(follow(scr, v, 0, 100))
      expect(layerWidth(scr, v, 0.4)).toBe(scr.dimensions.width)
    }
  })
  it('on an upright phone a "fixed" room too wide to show whole scrolls instead of shrinking the figures', () => {
    const v = viewOf(scr, 393, 700)!
    expect(v.fixed).toBe(false)
    expect(v.span).toBeCloseTo(560)
    expect(follow(scr, v, 0, 900)).toBeGreaterThan(0)
  })
  it('a parallax layer is wide enough never to show its edge', () => {
    for (const p of [0.4, 1, 1.18]) {
      const w = layerWidth(lib, phone, p)
      const camMax = 2000 - phone.span
      expect(camMax * p + phone.span).toBeLessThanOrEqual(w)
    }
  })
})

describe('scene lifecycle', () => {
  const loaders = (over: Partial<ConstructorParameters<typeof SceneHost<string>>[0]> = {}) => ({ definition: sceneById, art: async () => 'art', image: async () => true, ...over })
  it('unloaded → loading → ready → active ⇄ suspended → unloaded', async () => {
    const h = new SceneHost(loaders())
    const seen: string[] = []
    h.subscribe(() => seen.push(h.phase))
    await h.load(lib.id)
    h.activate()
    h.suspend()
    h.resume()
    h.unload()
    expect(seen).toEqual(['loading', 'ready', 'active', 'suspended', 'active', 'unloading', 'unloaded'])
    expect(h.loaded).toBeNull()
  })
  it('a missing definition or art fails with a reason, and can be retried', async () => {
    const h = new SceneHost(loaders())
    await h.load('sc:khong-co')
    expect(h.phase).toBe('failed')
    expect(h.error).toMatch(/khong-co/)
    let ok = false
    const h2 = new SceneHost(loaders({ art: async () => (ok ? 'art' : Promise.reject(new Error('mạng'))) }))
    await h2.load(lib.id)
    expect(h2.phase).toBe('failed')
    ok = true
    await h2.retry(lib.id)
    expect(h2.phase).toBe('ready')
  })
  it('a failed image only drops its layer; a hung load times out', async () => {
    const h = new SceneHost(loaders({ image: async () => Promise.reject(new Error('404')) }))
    await h.load(lib.id)
    expect(h.phase).toBe('ready')
    expect(h.loaded!.missing).toEqual(['pythagoras'])
    const slow = new SceneHost(loaders({ art: () => new Promise(() => {}) }), 20)
    await slow.load(lib.id)
    expect(slow.phase).toBe('failed')
  })
  it('unloading during a load drops the late result', async () => {
    let done!: (v: string) => void
    const h = new SceneHost(loaders({ art: () => new Promise<string>((r) => (done = r)) }))
    const p = h.load(lib.id)
    h.unload()
    done('art')
    await p
    expect(h.phase).toBe('unloaded')
    expect(h.loaded).toBeNull()
  })
})

describe('world, regions, transitions (read from the arc, never duplicated)', () => {
  it('every scene points only at what its arc has; ids and spawns are sound', () => {
    expect(new Set(SCENES.map((s) => s.id)).size).toBe(SCENES.length)
    for (const s of SCENES) {
      const arc = ARCS.find((a) => a.locations.some((l) => l.id === s.location))!
      expect(danglingRefs(arc, s)).toEqual([])
      expect(regionOf(s.location)?.id).toBe(s.region)
      for (const sp of s.spawns) expect(reach(s.collision, sp.x, sp.x)).toBe(sp.x)
      for (const t of s.transitions) {
        if (t.to.scene) expect(sceneById(t.to.scene)?.location).toBe(t.to.location)
        if (t.to.spawn) expect(sceneById(t.to.scene!)!.spawns.some((p) => p.id === t.to.spawn)).toBe(true)
      }
    }
    for (const w of WORLDS) for (const r of w.regions) for (const l of r.locations) expect(ARCS.find((a) => a.id === w.arc)!.locations.some((x) => x.id === l)).toBe(true)
  })
  it('every interactable can be reached from a spawn', () => {
    for (const s of SCENES)
      for (const i of s.interactables) expect(standSpot(s.collision, s.spawns[0].x, i.x, i.approach), `${s.id}/${i.id}`).not.toBeNull()
  })
  it('access follows the arc: the council room opens only with the arc unlock flag', () => {
    const s = fresh()
    expect(passage(banThao, lib, 't:thu-vien>phong-chep', s)).toMatchObject({ ok: true, scene: { id: 'sc:bt/phong-chep' }, spawn: 'from-library' })
    expect(passage(banThao, lib, 't:thu-vien>phong-hop', s).ok).toBe(false)
    const opened = { ...s, flags: ['open:loc:bt/phong-hop'] }
    expect(passage(banThao, lib, 't:thu-vien>phong-hop', opened)).toMatchObject({ ok: true, location: { id: 'loc:bt/phong-hop' } })
    // back the other way, to the library's spawn by the passage
    const back = passage(banThao, scr, 't:phong-chep>thu-vien', s)
    expect(back.ok && spawnOf(back.scene!, back.spawn).x).toBe(190)
  })
  it('region and world status come from the save', () => {
    const s = { ...fresh(), visited: ['loc:bt/thu-vien'] }
    const r = regionStatus(banThao, regionOf('loc:bt/thu-vien')!, s)
    expect(r.open).toBe(true)
    expect(r.visited).toBe(1)
    expect(r.places.map((p) => [p.location.id, p.open])).toEqual([['loc:bt/phong-chep', true], ['loc:bt/thu-vien', true], ['loc:bt/phong-hop', false]])
    const w = worldStatus(banThao, WORLDS[0], s)
    expect(w.find((x) => x.region.id === 'rg:bt/arezzo')!.open).toBe(false)
    expect(worldStatus(banThao, WORLDS[0], { ...s, flags: ['open:loc:bt/arezzo'] }).find((x) => x.region.id === 'rg:bt/arezzo')!.open).toBe(true)
  })
  it('interactables follow the arc conditions; labels come from the arc', () => {
    const loc = banThao.locations.find((l) => l.id === 'loc:bt/thu-vien')!
    const ids = (s: ReturnType<typeof fresh>) => live(banThao, loc, lib, s).map((x) => x.id)
    expect(ids(fresh())).not.toContain('shelf')
    const active = { ...fresh(), quests: { 'q:bt/ban-thao': { stage: 'tim', status: 'active' as const, started: 0 } } }
    expect(ids(active)).toContain('shelf')
    expect(live(banThao, loc, lib, fresh()).find((x) => x.id === 'librarian')!.label).toBe('Thầy quản thư')
  })
  it('`w=1` still opens the first scene of a place (Phase 1 addresses)', () => {
    expect(sceneFor('loc:bt/thu-vien', '1')?.id).toBe('sc:bt/thu-vien')
    expect(sceneFor('loc:bt/thu-vien', 'sc:bt/phong-chep')).toBeUndefined()
    expect(sceneFor('loc:bt/arezzo', '1')).toBeUndefined()
  })
  it('scene data is plain data (no functions), so it can be declared apart from the code', () => {
    const plain = (x: unknown): boolean => (typeof x === 'function' ? false : x && typeof x === 'object' ? Object.values(x).every(plain) : true)
    for (const s of SCENES as SceneDef[]) expect(plain(s)).toBe(true)
  })
})
