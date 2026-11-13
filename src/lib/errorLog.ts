import { useSyncExternalStore } from 'react'

/**
 * Errors seen on this device, kept locally (never sent anywhere) so a bug can be traced after the fact:
 * script errors, failed promises and screens that threw. The newest 30, in localStorage.
 */
export type LoggedError = { at: number; msg: string; where: string; stack?: string }

const KEY = 'app:errors'
const MAX = 30
const listeners = new Set<() => void>()
let cache: LoggedError[] | null = null

function read(): LoggedError[] {
  if (cache) return cache
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    cache = Array.isArray(v) ? v : []
  } catch {
    cache = []
  }
  return cache
}

function write(list: LoggedError[]) {
  cache = list
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // storage full or blocked: keep it for this session
  }
  listeners.forEach((l) => l())
}

export function logError(err: unknown, where = location.hash || '/') {
  const e = err instanceof Error ? err : null
  const msg = (e?.message ?? String(err)).slice(0, 400)
  // a reload loop must not flood the log with one error
  const last = read()[0]
  if (last && last.msg === msg && last.where === where && Date.now() - last.at < 2000) return
  const stack = e?.stack?.split('\n').slice(0, 4).join('\n')
  write([{ at: Date.now(), msg, where, stack }, ...read()].slice(0, MAX))
}

export const clearErrors = () => write([])

export const useErrors = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    read,
  )

let installed = false
export function installErrorLog() {
  if (installed) return
  installed = true
  addEventListener('error', (e) => logError(e.error ?? e.message))
  addEventListener('unhandledrejection', (e) => logError(e.reason))
}
