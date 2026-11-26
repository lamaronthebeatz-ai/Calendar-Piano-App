import { useCallback, useEffect, useRef, useState } from 'react'
import { update } from '../progress'
import type { Save } from '../engine/save'
import type { ArcDef } from '../engine/types'
import { advanceStory, due, type BeatDef, type Trigger } from '../engine/narrative'

export type StoryLine = { id: number; style: 'thought' | 'narration' | 'journal'; text: string }
let next = 1

/**
 * The narrative director for one arc on screen: `narrate(trigger)` runs the beats due (through the engine, written to
 * the save) and returns what to show — the player's thought, a narrator's line, "added to the journal". `state` beats
 * are checked whenever the save changes, so a beat that waits on a quest or an item happens wherever the player is.
 */
export function useStory(arc: ArcDef, save: Save) {
  const [lines, setLines] = useState<StoryLine[]>([])
  const timers = useRef<number[]>([])
  const narrate = useCallback(
    (t: Trigger) => {
      const n = arc.narrative
      if (!n) return
      let fired: BeatDef[] = []
      update((s) => {
        const r = advanceStory(arc, n, s, t)
        fired = r.fired
        return r.save
      })
      const add: StoryLine[] = fired.filter((b) => b.show).map((b) => ({ id: next++, style: b.show!.style, text: b.show!.text }))
      if (fired.some((b) => b.journal)) add.push({ id: next++, style: 'journal', text: 'Sổ tay có ghi chép mới' })
      if (!add.length) return
      setLines((l) => [...l, ...add].slice(-3))
      for (const x of add) timers.current.push(window.setTimeout(() => setLines((l) => l.filter((y) => y.id !== x.id)), x.style === 'journal' ? 3200 : 5200))
    },
    [arc],
  )
  // beats that wait on state (a quest done, an item in hand): checked after every change of the save
  useEffect(() => {
    if (!arc.narrative || !due(arc.narrative, save, { on: 'state' }).length) return
    const id = window.setTimeout(() => narrate({ on: 'state' }), 0)
    return () => clearTimeout(id)
  }, [arc, save, narrate])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  const dismiss = useCallback((id: number) => setLines((l) => l.filter((x) => x.id !== id)), [])
  return { narrate, lines, dismiss }
}
export type Narrate = (t: Trigger) => void
