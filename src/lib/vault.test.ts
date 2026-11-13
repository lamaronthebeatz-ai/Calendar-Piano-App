// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest'

beforeEach(() => {
  localStorage.clear()
  sessionStorage.clear()
  vi.resetModules()
})

const load = async () => ({ ...(await import('./vault')), ...(await import('./secureStore')) })
const list = (v: unknown) => (Array.isArray(v) ? (v as string[]) : null)

describe('vault', () => {
  it('seals and unseals with the same code, fails with another', async () => {
    const { deriveKey, seal, unseal } = await load()
    const salt = new Uint8Array(16)
    const k = await deriveKey('123456', salt, 1000)
    const sealed = await seal(k, { a: [1, 'hai'] })
    expect(sealed.startsWith('enc1:')).toBe(true)
    expect(sealed).not.toContain('hai')
    expect(await unseal(k, sealed)).toEqual({ a: [1, 'hai'] })
    await expect(unseal(await deriveKey('654321', salt, 1000), sealed)).rejects.toThrow()
  })

  it('plain data is sealed once the vault opens, and reads back after a fresh start', async () => {
    localStorage.setItem('t:list', JSON.stringify(['ghi chú riêng']))
    let m = await load()
    const s = m.secureStore('t:list', [] as string[], list)
    expect(s.get()).toEqual(['ghi chú riêng'])
    await m.openVault('111111', 1000)
    await new Promise((r) => setTimeout(r, 20))
    await s.flushed()
    expect(localStorage.getItem('t:list')!.startsWith('enc1:')).toBe(true)
    expect(localStorage.getItem('t:list')).not.toContain('ghi')

    // a fresh launch: sealed data waits for the code, then fills in
    sessionStorage.clear()
    vi.resetModules()
    m = await load()
    const s2 = m.secureStore('t:list', [] as string[], list)
    expect(s2.get()).toEqual([])
    expect(s2.locked()).toBe(true)
    await m.openVault('111111', 1000)
    await new Promise((r) => setTimeout(r, 20))
    expect(s2.get()).toEqual(['ghi chú riêng'])
  })

  it('a locked session never overwrites sealed data it has not read', async () => {
    let m = await load()
    await m.openVault('222222', 1000)
    const s = m.secureStore('t:list', [] as string[], list)
    s.set(['a', 'b'])
    await s.flushed()
    const sealed = localStorage.getItem('t:list')

    sessionStorage.clear()
    vi.resetModules()
    m = await load()
    const s2 = m.secureStore('t:list', [] as string[], list)
    s2.set(['viết khi chưa mở'])
    await s2.flushed()
    expect(localStorage.getItem('t:list')).toBe(sealed)
  })

  it('a reload in the same session stays open (key restored from the session)', async () => {
    let m = await load()
    await m.openVault('333333', 1000)
    const s = m.secureStore('t:list', [] as string[], list)
    s.set(['x'])
    await s.flushed()
    vi.resetModules()
    m = await load()
    const s2 = m.secureStore('t:list', [] as string[], list)
    await new Promise((r) => setTimeout(r, 30))
    expect(s2.get()).toEqual(['x'])
  })
})
