import { useSyncExternalStore } from 'react'
import type { Verdict } from './types'

/** The player and where they are: kept on this device (localStorage), every access tolerant of it failing. */
export interface Save {
  name: string
  portrait: string
  /** Scenes finished, by `chapter/scene`. */
  done: string[]
  /** Cards kept, by id. */
  cards: string[]
  /** Verdicts given in a chapter's court, by `chapter/claim`. */
  verdicts: Record<string, Verdict>
  /** Within a scene: which line the player had reached, so reading an article and coming back resumes there. */
  step: Record<string, number>
  /** Chapters whose historical prologue has been watched. */
  seen: string[]
  /** Lữ hành vô tận, per chapter: the current trip (seed, stop reached), stops done, right first time, facts asked. */
  endless: Record<string, Endless>
}

export interface Endless {
  seed: number
  at: number
  total: number
  right: number
  asked: string[]
}

const KEY = 'journey:v1'
const EMPTY: Save = { name: '', portrait: '', done: [], cards: [], verdicts: {}, step: {}, seen: [], endless: {} }

let cache: Save | undefined
const listeners = new Set<() => void>()

function read(): Save {
  if (cache) return cache
  try {
    cache = { ...EMPTY, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }
  } catch {
    cache = { ...EMPTY }
  }
  return cache!
}

export function update(change: (s: Save) => Partial<Save>) {
  const next = { ...read(), ...change(read()) }
  cache = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // private mode: the journey still runs, it just is not remembered
  }
  listeners.forEach((l) => l())
}

export const resetJourney = () => update(() => ({ ...EMPTY }))

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const useSave = () => useSyncExternalStore(subscribe, read, read)

/** `{ten}` in the story becomes the player's name. */
export const named = (text: string, name: string) => text.replaceAll('{ten}', name || 'Lữ khách')
