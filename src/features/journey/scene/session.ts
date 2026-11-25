import type { Facing } from './types'

/**
 * Screen state that outlives a reload or a trip to a puzzle but is NOT progress: where the figure stood in each scene
 * and which once-per-session lines were already said. sessionStorage (this tab only), every access guarded — a
 * private window without storage just starts each scene at its spawn. Progress lives only in the Journey save.
 */
const KEY = 'journey:walk'
type State = { at: Record<string, { x: number; facing: Facing }>; said: string[] }
const read = (): State => {
  try {
    const s = JSON.parse(sessionStorage.getItem(KEY) ?? '') as State
    return { at: s.at ?? {}, said: s.said ?? [] }
  } catch {
    return { at: {}, said: [] }
  }
}
const write = (s: State) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* no storage: nothing kept, nothing breaks */
  }
}
export const standingIn = (scene: string) => read().at[scene]
export const keepStanding = (scene: string, x: number, facing: Facing) => {
  const s = read()
  write({ ...s, at: { ...s.at, [scene]: { x: Math.round(x), facing } } })
}
/** Forget where the figure stood (it arrives through a door: the spawn decides). */
export const forgetStanding = (scene: string) => {
  const s = read()
  delete s.at[scene]
  write(s)
}
export const said = (event: string) => read().said.includes(event)
export const markSaid = (event: string) => {
  const s = read()
  if (!s.said.includes(event)) write({ ...s, said: [...s.said, event] })
}
