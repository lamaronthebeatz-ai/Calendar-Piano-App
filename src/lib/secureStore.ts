import { onVaultOpen, seal, SEALED, unseal, vaultKey } from './vault'

/**
 * A value kept in localStorage that is encrypted once the vault is open. Reading is synchronous for the UI: plain
 * (older) data shows at once; sealed data shows as `fallback` until the vault opens, then fills in. Nothing is
 * written over sealed data that has not been read yet, so a locked session cannot wipe what it could not see.
 */
export function secureStore<T>(storageKey: string, fallback: T, accept: (v: unknown) => T | null) {
  let state: T = fallback
  let sealedUnread = false
  const listeners = new Set<() => void>()
  let writing: Promise<void> = Promise.resolve()

  const raw = (() => {
    try {
      return localStorage.getItem(storageKey)
    } catch {
      return null
    }
  })()
  if (raw?.startsWith(SEALED)) sealedUnread = true
  else if (raw) {
    try {
      state = accept(JSON.parse(raw)) ?? fallback
    } catch {
      state = fallback
    }
  }

  const emit = () => listeners.forEach((l) => l())

  function persist() {
    const value = state
    writing = writing.then(async () => {
      const k = vaultKey()
      try {
        localStorage.setItem(storageKey, k ? await seal(k, value) : JSON.stringify(value))
      } catch {
        // storage full or blocked: keep it for this session
      }
    })
    return writing
  }

  onVaultOpen(async () => {
    const k = vaultKey()
    if (!k) return
    let current: string | null = null
    try {
      current = localStorage.getItem(storageKey)
    } catch {
      return
    }
    if (current?.startsWith(SEALED)) {
      try {
        const v = accept(await unseal(k, current))
        sealedUnread = false
        if (v !== null) {
          state = v
          emit()
        }
      } catch {
        // sealed with another key (another device's backup copied in?): leave it untouched
      }
    } else if (current) void persist() // plain data from before the vault: seal it now
  })

  return {
    get: () => state,
    set(next: T) {
      state = next
      emit()
      if (!sealedUnread) void persist()
    },
    subscribe(l: () => void) {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    /** resolves when the last write has reached storage */
    flushed: () => writing,
    /** sealed data is waiting for the vault */
    locked: () => sealedUnread,
  }
}
