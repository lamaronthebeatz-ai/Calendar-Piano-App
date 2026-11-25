import type { Collision, Facing } from './actor'

/**
 * How a place of an arc is laid out when walked through side-on. Presentation only: who is there, what can be used,
 * when, and what it does all stay in the arc's LocationDef (content/*.ts) — the layout just says where each one
 * stands. A person or thing the layout does not place is not shown in the walk view (the list screen still has it).
 */
export type WalkLayout = {
  location: string
  /** world size in scene units; the floor line is where feet stand */
  width: number
  height: number
  floor: number
  start: number
  /** where the scripted entrance walks in from (off the floor's left edge) */
  enterFrom: number
  collision: Collision
  /** said when the player walks into a block */
  blocked: string
  people: Record<string, { x: number; facing: Facing; look: 'monk' | 'scholar'; gap: number }>
  things: Record<string, { x: number; gap: number; top: number; verb: string }>
  scenery: 'library'
}

export const WALK_LAYOUTS: readonly WalkLayout[] = [
  {
    location: 'loc:bt/thu-vien',
    width: 2000,
    height: 600,
    floor: 540,
    start: 260,
    enterFrom: -60,
    collision: { min: 70, max: 1940, blocks: [{ x0: 1690, x1: 1716 }] },
    blocked: 'Rào gỗ chắn lối: kho lưu trữ phía sau đang khoá.',
    people: { 'npc:bt/quan-thu': { x: 700, facing: -1, look: 'monk', gap: 78 } },
    things: {
      'gia-sach': { x: 1290, gap: 70, top: 190, verb: 'Xem' },
      'hop-nhac': { x: 1560, gap: 74, top: 420, verb: 'Mở' },
    },
    scenery: 'library',
  },
]

export const walkLayout = (location: string) => WALK_LAYOUTS.find((w) => w.location === location)
