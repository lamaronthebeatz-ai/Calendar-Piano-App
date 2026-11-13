import { describe, expect, it } from 'vitest'
import { GREETING_SLOTS, greetingFor, slotOf } from './greeting'

describe('greeting', () => {
  it('has a part of the day for every hour, six parts of fifty different lines', () => {
    for (let h = 0; h < 24; h++) expect(slotOf(h)).toBeTruthy()
    expect(GREETING_SLOTS).toHaveLength(6)
    for (const s of GREETING_SLOTS) {
      expect(new Set(s.lines).size).toBe(50)
      for (const l of s.lines) expect(l.length).toBeLessThanOrEqual(26)
    }
  })

  it('keeps one line through a part of the day and changes with the part', () => {
    expect(greetingFor(new Date(2026, 10, 13, 19, 0))).toBe(greetingFor(new Date(2026, 10, 13, 22, 59)))
    expect(slotOf(19).lines).toContain(greetingFor(new Date(2026, 10, 13, 19, 0)))
    expect(slotOf(8).lines).toContain(greetingFor(new Date(2026, 10, 13, 8, 0)))
    expect(slotOf(23).id).toBe(slotOf(3).id)
  })

  it('goes through all fifty lines of a part in fifty days before repeating', () => {
    const seen = new Set<string>()
    for (let day = 0; day < 50; day++) seen.add(greetingFor(new Date(2026, 0, 1 + day, 9)))
    expect(seen.size).toBe(50)
  })
})
