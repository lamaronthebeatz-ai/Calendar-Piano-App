import { describe, expect, it } from 'vitest'
import { checkCode, makeVerifier } from './passcode'

describe('passcode', () => {
  it('a PBKDF2 verifier accepts its code only', async () => {
    const v = await makeVerifier('000111', 2000)
    expect(v).toMatch(/^pbkdf2\$2000\$/)
    expect(v).not.toContain('000111')
    expect(await checkCode('000111', v)).toBe(true)
    expect(await checkCode('000112', v)).toBe(false)
  })
  it('two verifiers of one code differ (random salt)', async () => {
    expect(await makeVerifier('1', 1000)).not.toBe(await makeVerifier('1', 1000))
  })
  it('still reads the old bare SHA-256 form', async () => {
    // SHA-256("abc")
    expect(await checkCode('abc', 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad')).toBe(true)
  })
})
