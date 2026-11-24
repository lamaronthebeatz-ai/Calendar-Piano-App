import { beforeEach, describe, expect, it, vi } from 'vitest'

/** The global key is the analyst's: saved per work, every change a new version, never shared between works. */
const mem = new Map<string, string>()
beforeEach(() => {
  mem.clear()
  vi.resetModules()
  vi.stubGlobal('localStorage', { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, v), removeItem: (k: string) => void mem.delete(k) })
})
const load = () => import('./globalKey')
const G = { step: 4, alter: 0, minor: false }
const Eb = { step: 2, alter: -1, minor: false }

describe('giọng chủ do người phân tích chọn', () => {
  it('chưa chọn thì không có giọng nào — không mặc định Đô trưởng', async () => {
    const k = await load()
    expect(k.currentKey('ps-a')).toBeNull()
    expect(k.keyHistory('ps-a')).toEqual([])
  })
  it('lưu theo từng tác phẩm, đổi giọng là phiên bản mới, lần chọn cũ giữ lại; chọn lại đúng giọng hiện tại không thêm phiên bản', async () => {
    const k = await load()
    k.chooseKey('ps-a', G)
    k.chooseKey('ps-a', G)
    k.chooseKey('ps-a', Eb)
    expect(k.keyHistory('ps-a').map((h) => h.key)).toEqual([G, Eb])
    expect(k.currentKey('ps-a')!.key).toEqual(Eb)
    expect(k.currentKey('bach-bwv269')).toBeNull() // another work does not inherit it
  })
  it('mở lại app (nạp lại mô-đun) thì khôi phục đúng giọng và lịch sử', async () => {
    ;(await load()).chooseKey('ps-a', G)
    await new Promise((r) => setTimeout(r, 0))
    const again = await load()
    expect(again.currentKey('ps-a')!.key).toEqual(G)
  })
  it('tên giọng rõ ràng, có tên quốc tế', async () => {
    const k = await load()
    expect(k.keyLabel({ step: 3, alter: 1, minor: false })).toBe('Fa♯ trưởng (F♯ major)')
    expect(k.keyLabel({ step: 1, alter: -1, minor: false })).toBe('Rê♭ trưởng (D♭ major)')
    expect(k.keyLabel({ step: 5, alter: 0, minor: true })).toBe('La thứ (A minor)')
    expect(new Set(k.TONICS.map((t) => ([0, 2, 4, 5, 7, 9, 11][t.step] + t.alter + 12) % 12)).size).toBe(12)
  })
})
