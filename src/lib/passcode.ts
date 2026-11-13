/**
 * Checking an entrance code against what ships in the (public) bundle. The old form is a bare SHA-256 hex — a
 * 6-digit code falls to it in under a second. The new form is a slow PBKDF2 verifier, `pbkdf2$<iterations>$<salt>$<hash>`
 * (base64), made on Lamar's own device in Settings → Bảo mật, so the code itself is never written anywhere.
 */
const b64 = (b: Uint8Array) => btoa(String.fromCharCode(...b))
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))
const hex = (b: ArrayBuffer) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('')

async function pbkdf2(code: string, salt: Uint8Array<ArrayBuffer>, iterations: number) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveBits'])
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, base, 256))
}

export async function makeVerifier(code: string, iterations = 1_000_000): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  return `pbkdf2$${iterations}$${b64(salt)}$${b64(await pbkdf2(code, salt, iterations))}`
}

export async function checkCode(code: string, verifier: string): Promise<boolean> {
  if (!verifier.startsWith('pbkdf2$')) return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(code))) === verifier
  const [, it, salt, hash] = verifier.split('$')
  const got = await pbkdf2(code, unb64(salt), Number(it))
  const want = unb64(hash)
  // constant-time compare
  let diff = got.length ^ want.length
  for (let i = 0; i < want.length; i++) diff |= got[i] ^ want[i]
  return diff === 0
}
