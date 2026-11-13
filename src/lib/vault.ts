/**
 * The vault: a key derived from the entrance code that encrypts the private data kept on this device (notes,
 * research projects). PBKDF2-SHA-256 with a per-device salt, AES-GCM-256. The derived key — never the code — is kept
 * in sessionStorage so a reload stays open; a fresh launch asks for the code again.
 *
 * What this protects against: someone opening the browser's storage on this device reads ciphertext, not notes.
 * A 6-digit code has only a million values, so a determined attacker with the stored data can still try them all;
 * the slow derivation makes each try cost ~0.3 s on a phone. A longer code would make it out of reach.
 */
const ITER = 600_000
const SALT_KEY = 'app:salt'
const KEY_KEY = 'app:vault'
export const SEALED = 'enc1:'

const b64 = (b: Uint8Array) => btoa(String.fromCharCode(...b))
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))

let key: CryptoKey | null = null
const waiting = new Set<() => void>()

function salt(): Uint8Array<ArrayBuffer> {
  try {
    const s = localStorage.getItem(SALT_KEY)
    if (s) return unb64(s)
    const fresh = crypto.getRandomValues(new Uint8Array(16))
    localStorage.setItem(SALT_KEY, b64(fresh))
    return fresh
  } catch {
    return new Uint8Array(16)
  }
}

export async function deriveKey(code: string, saltBytes: Uint8Array<ArrayBuffer>, iterations = ITER): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: saltBytes, iterations }, base, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
}

export async function seal(k: CryptoKey, value: unknown): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, k, new TextEncoder().encode(JSON.stringify(value))))
  const out = new Uint8Array(12 + ct.length)
  out.set(iv)
  out.set(ct, 12)
  return SEALED + b64(out)
}

export async function unseal(k: CryptoKey, text: string): Promise<unknown> {
  const raw = unb64(text.slice(SEALED.length))
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: raw.slice(0, 12) }, k, raw.slice(12))
  return JSON.parse(new TextDecoder().decode(pt))
}

/** The key, if the vault is open in this session. */
export const vaultKey = () => key

/** Open the vault with the entrance code (already checked by the lock screen). */
export async function openVault(code: string, iterations = ITER) {
  key = await deriveKey(code, salt(), iterations)
  try {
    sessionStorage.setItem(KEY_KEY, b64(new Uint8Array(await crypto.subtle.exportKey('raw', key))))
  } catch {
    // no session storage: open until reload
  }
  waiting.forEach((f) => f())
}

/** Called whenever the vault opens (now, if it already is). */
export function onVaultOpen(f: () => void) {
  waiting.add(f)
  if (key) f()
  return () => waiting.delete(f)
}

/** Back from sessionStorage after a reload. */
async function restore() {
  try {
    const s = sessionStorage.getItem(KEY_KEY)
    if (!s) return
    key = await crypto.subtle.importKey('raw', unb64(s), { name: 'AES-GCM' }, true, ['encrypt', 'decrypt'])
    waiting.forEach((f) => f())
  } catch {
    key = null
  }
}
if (typeof sessionStorage !== 'undefined') void restore()

/** For tests: forget the key. */
export const closeVault = () => {
  key = null
  try {
    sessionStorage.removeItem(KEY_KEY)
  } catch {
    // ignore
  }
}
