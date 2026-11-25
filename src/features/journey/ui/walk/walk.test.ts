import { describe, expect, it } from 'vitest'
import { ARCS } from '../../content/arcs'
import { goTo, nearest, reach, standSpot, tick, TURN, HALF, LOCKED, type Actor, type Collision } from './actor'
import { WALK_LAYOUTS } from './scenes'

const C: Collision = { min: 70, max: 1940, blocks: [{ x0: 1690, x1: 1716 }] }
const at = (x: number, facing: 1 | -1 = 1): Actor => ({ x, facing, state: 'idle', target: null, turnLeft: 0 })
const run = (a: Actor, secs = 30) => {
  let arrived = false
  for (let t = 0; t < secs && !arrived; t += 1 / 60) ({ actor: a, arrived } = tick(a, 1 / 60))
  return { a, arrived }
}

describe('walk: collision', () => {
  it('stops at the floor edges', () => {
    expect(reach(C, 500, -300)).toBe(70)
    expect(reach(C, 500, 1600)).toBe(1600)
  })
  it('never passes a block, from either side', () => {
    expect(reach(C, 500, 1900)).toBe(1690 - HALF)
    expect(reach(C, 1900, 500)).toBe(1716 + HALF)
    const { a } = run(goTo(at(500), C, 1900))
    expect(a.x).toBe(1690 - HALF)
  })
  it('stands beside a thing on the side it comes from', () => {
    expect(standSpot(C, 300, 700, 78)).toBe(622)
    expect(standSpot(C, 1200, 700, 78)).toBe(778)
  })
})

describe('walk: states', () => {
  it('turns round before walking back, then walks and arrives', () => {
    let a = goTo(at(800, 1), C, 400)
    expect(a.state).toBe('turn')
    expect(a.facing).toBe(-1)
    a = tick(a, TURN / 2).actor
    expect(a.x).toBe(800) // no step while turning
    a = tick(a, TURN).actor
    expect(a.state).toBe('walk')
    const r = run(a)
    expect(r.arrived).toBe(true)
    expect(r.a.x).toBe(400)
  })
  it('an approach keeps its state through the turn', () => {
    const a = tick(goTo(at(800, 1), C, 400, 'approach'), 1).actor
    expect(a.state).toBe('approach')
  })
  it('already there: no target (the caller uses the thing at once)', () => {
    expect(goTo(at(400), C, 400).target).toBeNull()
  })
  it('conversation, looking and scripted walking lock the controls', () => {
    for (const s of ['talk', 'examine', 'interact', 'scripted', 'locked'] as const) expect(LOCKED.has(s)).toBe(true)
    for (const s of ['idle', 'walk', 'turn', 'approach'] as const) expect(LOCKED.has(s)).toBe(false)
    // a locked figure does not move on its own
    expect(tick({ ...at(300), state: 'talk', target: 900 }, 1).actor.x).toBe(300)
  })
  it('finds what is in reach, nearest first', () => {
    const spots = [{ x: 700, k: 'a' }, { x: 760, k: 'b' }]
    expect(nearest(740, spots, 120)?.k).toBe('b')
    expect(nearest(300, spots, 120)).toBeUndefined()
  })
})

describe('walk: layouts point at real content', () => {
  for (const w of WALK_LAYOUTS) {
    const arc = ARCS.find((a) => a.locations.some((l) => l.id === w.location))
    const loc = arc?.locations.find((l) => l.id === w.location)
    it(`${w.location}: place, people and things exist; every spot can be reached`, () => {
      expect(loc).toBeTruthy()
      for (const id of Object.keys(w.people)) expect(loc!.present.some((p) => p.npc === id)).toBe(true)
      for (const id of Object.keys(w.things)) expect(loc!.objects?.some((o) => o.id === id)).toBe(true)
      for (const s of [...Object.values(w.people), ...Object.values(w.things)]) {
        const stand = standSpot(w.collision, w.start, s.x, s.gap)
        expect(Math.abs(stand - s.x)).toBeLessThanOrEqual(s.gap + 1)
      }
      expect(reach(w.collision, w.start, w.start)).toBe(w.start)
    })
  }
})
