import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { ARTICLES } from '../theory/articles.source'
import { CHAPTERS } from './chapters'
import { CONTEXT } from './context'
import { CREDITS } from './credits'
import { MAPS, onMap } from './maps'
import { MUSIC } from './music'

// The story is read through the library: every question, card and verdict must point at a real article, and every
// picture must be on disk with a credit — the same guarantee check:links gives to [[links]].
const slugs = new Set(ARTICLES.map((a) => a.slug))
const picture = (id: string) => existsSync(`public/images/journey/${id}.webp`) && !!CREDITS[id]
/** A background also has its phone-sized copy. */
const backdrop = (id: string) => picture(id) && existsSync(`public/images/journey/${id}-m.webp`)

describe.each(CHAPTERS)('chương $numeral — $title', (ch) => {
  it('mỗi cảnh trỏ tới bài có thật, ảnh có nguồn, đáp án nằm trong các lựa chọn', () => {
    expect(backdrop(ch.cover), `cover ${ch.cover}`).toBe(true)
    expect(MUSIC[ch.theme], `theme ${ch.theme}`).toBeDefined()
    for (const s of ch.scenes) {
      expect(slugs.has(s.quest.read), `${s.id}: quest.read ${s.quest.read}`).toBe(true)
      expect(slugs.has(s.card.read), `${s.id}: card.read ${s.card.read}`).toBe(true)
      if (s.npc.slug) expect(slugs.has(s.npc.slug), `${s.id}: npc ${s.npc.slug}`).toBe(true)
      expect(backdrop(s.bg), `${s.id}: bg ${s.bg}`).toBe(true)
      expect(MUSIC[s.id]?.src, `${s.id}: nhạc nền`).toMatch(/^https:\/\/upload\.wikimedia\.org\//)
      if (s.npc.img) expect(picture(s.npc.img), `${s.id}: img ${s.npc.img}`).toBe(true)
      expect(s.quest.answer).toBeGreaterThanOrEqual(0)
      expect(s.quest.answer).toBeLessThan(s.quest.choices.length)
      expect(s.lines.length).toBeGreaterThan(0)
      for (const l of s.lines) if (l.quote) expect(slugs.has(l.quote), `${s.id}: quote ${l.quote}`).toBe(true)
    }
    for (const c of ch.court.claims) expect(slugs.has(c.read), `court ${c.id}: ${c.read}`).toBe(true)
  })

  it('có phần bối cảnh lịch sử và bản đồ cổ chứa mọi chặng', () => {
    const ctx = CONTEXT[ch.id]
    expect(ctx?.length, 'bối cảnh').toBeGreaterThan(2)
    for (const p of ctx) {
      expect(slugs.has(p.read), `bối cảnh ${p.title}: ${p.read}`).toBe(true)
      expect(backdrop(p.img), `bối cảnh ${p.title}: ${p.img}`).toBe(true)
    }
    const m = MAPS[ch.id]
    expect(m && picture(m.img), 'bản đồ').toBe(true)
    for (const s of ch.scenes.filter((s) => !s.far)) {
      const [x, y] = onMap(m, s.lat, s.lon)
      expect(x > 0 && x < m.w && y > 0 && y < m.h, `${s.id} nằm ngoài bản đồ (${Math.round(x)}, ${Math.round(y)})`).toBe(true)
    }
  })

  it('không trùng id cảnh, thẻ, lời khai', () => {
    const ids = [...ch.scenes.map((s) => s.id), ...ch.scenes.map((s) => 'card:' + s.card.id), ...ch.court.claims.map((c) => 'claim:' + c.id)]
    expect(new Set(ids).size).toBe(ids.length)
  })
})
