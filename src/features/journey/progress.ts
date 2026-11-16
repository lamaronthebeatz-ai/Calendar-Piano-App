import { useSyncExternalStore } from 'react'
import { CHAPTERS } from './chapters'
import { emptySave, fromV1, readSave, type Save } from './engine/save'
import { newAchievements, puzzleXp } from './engine/progression'
import type { Chapter } from './types'

export type { Endless, Save } from './engine/save'

/**
 * The player and where they are, on this device (localStorage), every access tolerant of it failing.
 * `journey:v2` is the save; a version-1 save is converted once and its original kept as `journey:v1.bak`.
 */
const KEY = 'journey:v2'
const V1 = 'journey:v1'
const V1_BAK = 'journey:v1.bak'
const LOG = 'journey:repair-log'

/** A chapter is finished once every story scene in it is done. */
export const finished = (c: Chapter, s: Pick<Save, 'done'>) => c.scenes.every((x) => s.done.includes(`${c.id}/${x.id}`))
/** Open: the first chapter, any chapter ever opened, or the one after a finished chapter. */
export const opened = (i: number, s: Pick<Save, 'done' | 'chaptersOpen'>) => i === 0 || s.chaptersOpen.includes(CHAPTERS[i].id) || finished(CHAPTERS[i - 1], s)

const openNow = (s: Save) => CHAPTERS.filter((_, i) => opened(i, s)).map((c) => c.id)
/** What the finished story scenes taught: the articles they ask about and the people met. */
const learned = (s: Save) =>
  CHAPTERS.flatMap((c) => c.scenes.filter((x) => s.done.includes(`${c.id}/${x.id}`)).flatMap((x) => [x.quest.read, x.card.read, ...(x.npc.slug ? [x.npc.slug] : [])])).map((slug) => `a:${slug}`)

/** Opening is an event: what the rule opens today stays open even if an older chapter later gains content. */
const settle = (s: Save): Save => {
  const open = openNow(s)
  const next = open.every((id) => s.chaptersOpen.includes(id)) ? s : { ...s, chaptersOpen: [...new Set([...s.chaptersOpen, ...open])] }
  const earned = newAchievements(next)
  return earned.length ? { ...next, achievements: [...next.achievements, ...earned] } : next
}

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // private mode: the journey still runs, it just is not remembered
  }
}
const get = (key: string) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
const parse = (text: string | null): unknown => {
  if (text === null) return undefined
  try {
    return JSON.parse(text)
  } catch {
    return '!'
  }
}

function report(repaired: string[]) {
  if (!repaired.length) return
  const log = parse(get(LOG))
  store(LOG, JSON.stringify([...(Array.isArray(log) ? log : []), { at: new Date().toISOString(), fields: repaired }].slice(-20)))
}

function load(): Save {
  const v2 = get(KEY)
  if (v2 !== null) {
    const raw = parse(v2)
    // an unreadable save is set aside, not overwritten
    if (raw === '!') store(`${KEY}.broken`, v2)
    else {
      const { save, repaired } = readSave(raw)
      report(repaired)
      return settle(save)
    }
  }
  const v1 = get(V1)
  if (v1 !== null) {
    if (get(V1_BAK) === null) store(V1_BAK, v1)
    const { save, repaired } = fromV1(parse(v1), openNow, learned)
    report(repaired)
    // scenes finished before the engine count as first solves of their puzzle, as they would for a new player
    const xp = save.done.length * puzzleXp({ difficulty: 2 }, 0, 0)
    const migrated = settle({ ...save, xp: save.xp + xp, skills: { ...save.skills, history: save.skills.history + xp } })
    store(KEY, JSON.stringify(migrated))
    return migrated
  }
  return emptySave()
}

let cache: Save | undefined
const listeners = new Set<() => void>()
const read = (): Save => (cache ??= load())

export function update(change: (s: Save) => Partial<Save>) {
  const next = settle({ ...read(), ...change(read()) })
  cache = next
  store(KEY, JSON.stringify(next))
  listeners.forEach((l) => l())
}

/** Replaces the whole save (a restored backup); the one it replaces is kept aside first. */
export function replaceSave(next: Save) {
  store(`${KEY}.bak`, JSON.stringify(read()))
  update(() => next)
}

/** Starting over keeps the old journey aside (`journey:v2.reset`), in case it was a slip of the finger. */
export function resetJourney() {
  store(`${KEY}.reset`, JSON.stringify(read()))
  update(() => emptySave())
}

export const currentSave = () => read()

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const useSave = () => useSyncExternalStore(subscribe, read, read)

/** `{ten}` in the story becomes the player's name. */
export const named = (text: string, name: string) => text.replaceAll('{ten}', name || 'Lữ khách')
