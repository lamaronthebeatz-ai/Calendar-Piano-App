import SLOTS from '../data/greetings.json'

/**
 * The greeting at the top of a main screen (brand "Phòng hoà nhạc"): six parts of the day, fifty short greetings each.
 * Within one part of one day the line stays the same (reopening never jumps); the next part or the next day brings
 * another, and each part goes through all fifty before repeating.
 */
export type Slot = { id: string; name: string; from: number; to: number; lines: string[] }
export const GREETING_SLOTS = SLOTS as Slot[]

export const slotOf = (hour: number): Slot =>
  GREETING_SLOTS.find((s) => (s.from < s.to ? hour >= s.from && hour < s.to : hour >= s.from || hour < s.to))!

/** A fixed shuffle per part of the day, so consecutive days are not consecutive lines. */
function order(n: number, seed: number): number[] {
  const a = [...Array(n).keys()]
  let x = seed * 9301 + 49297
  for (let i = n - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280
    const j = Math.floor((x / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Local calendar day number, so the line changes at local midnight. */
const dayOf = (d: Date) => Math.floor((d.getTime() - d.getTimezoneOffset() * 60_000) / 86_400_000)

export function greetingFor(d: Date = new Date()): string {
  const slot = slotOf(d.getHours())
  const n = slot.lines.length
  return slot.lines[order(n, GREETING_SLOTS.indexOf(slot) + 1)[dayOf(d) % n]]
}
