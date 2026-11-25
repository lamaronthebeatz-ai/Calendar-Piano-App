import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { update } from '../../progress'
import type { Save } from '../../engine/save'
import type { ArcDef, LocationDef } from '../../engine/types'
import { currentStage, effects, enter } from '../../engine/runtime'
import { holds } from '../../engine/world'
import { prefersReducedMotion } from '../../../../hooks/useEdgeSwipeBack'
import { DialoguePanel } from '../Arc'
import { LOCKED, goTo, moving, reach, setState, standSpot, tick, type Actor, type ActorState } from '../../scene/actor'
import { Cast } from '../../scene/character/cast'
import { visualOf, type Mood } from '../../scene/character/defs'
import type { DNode } from '../../engine/types'
import { SceneHost, type Loaded } from '../../scene/lifecycle'
import { centreOn, follow, layerTransform, layerWidth, screenToScene, viewOf, type View } from '../../scene/view'
import { live, type Live } from '../../scene/interact'
import { passage, sceneById, spawnOf } from '../../scene/world'
import { forgetStanding, keepStanding, markSaid, said, standingIn } from '../../scene/session'
import type { Facing, SceneDef } from '../../scene/types'
import { loadArt, type Art } from './art'
import { Examine, Lookout } from './parts'
import { Character } from './Character'
import { RegionPanel } from './RegionPanel'
import './walk.css'

type Go = (p: Record<string, string>, how?: 'push' | 'replace' | 'back') => void
type Props = { arc: ArcDef; loc: LocationDef; scene: SceneDef; spawn: string | null; save: Save; go: Go }

const IMG = (id: string) => `${import.meta.env.BASE_URL}images/journey/${id}.webp`
const decode = (id: string) => {
  const i = new Image()
  i.src = IMG(id)
  return i.decode()
}
const NEAR = 34 // scene units: standing this close to the stand spot counts as "at" the thing

/**
 * A scene of a place, walked side-on. The scene host loads it (definition, drawings, images), this component shows
 * it while it is ready/active, pauses it when the app goes to the background, and unloads it when the player leaves.
 * What is there and what it does comes from the arc's LocationDef through the engine (enter, effects, the dialogue
 * runner) — the scene adds where things stand, how to walk there, and doors to other scenes.
 */
export function WalkScene(props: Props) {
  const [host] = useState(() => new SceneHost<Art>({ definition: sceneById, art: loadArt, image: decode }))
  const phase = useSyncExternalStore(
    (f) => host.subscribe(f),
    () => host.phase,
  )
  const id = props.scene.id
  useEffect(() => {
    void host.load(id)
    return () => host.unload()
  }, [host, id])
  const back = () => props.go({ v: 'arc', a: props.arc.id, l: props.loc.id }, 'replace')
  // WebKit keeps a failed import() failed for the life of the page (module map): if retrying fails again, reload
  const retry = async () => {
    await host.retry(id)
    if (host.phase === 'failed') location.reload()
  }
  if (phase === 'failed')
    return (
      <section className="wk wk-status" role="alert">
        <p className="jr-kicker">Không mở được khung cảnh</p>
        <p className="jr-line">{host.error}</p>
        <div className="wk-status-acts">
          <button className="jr-cta" onClick={() => void retry()}>Thử lại</button>
          <button className="jr-ghost" onClick={back}>← Danh sách</button>
        </div>
      </section>
    )
  if (!host.loaded || phase === 'loading' || phase === 'unloaded' || phase === 'unloading')
    return (
      <section className="wk wk-status" aria-busy="true">
        <p className="jr-kicker">Đang mở {props.scene.name.toLowerCase()}…</p>
      </section>
    )
  return <Playfield key={id} {...props} host={host} loaded={host.loaded} />
}

function Playfield({ arc, loc, spawn, save, go, host, loaded }: Props & { host: SceneHost<Art>; loaded: Loaded<Art> }) {
  const { def, art, missing } = loaded
  const [{ init, intro }] = useState(() => {
    const at = spawn ? null : standingIn(def.id)
    const sp = spawnOf(def, spawn)
    // the scripted entrance: only the first time a scene is entered in this tab, not through a door, motion allowed
    const intro = !spawn && !at && !prefersReducedMotion()
    if (spawn) forgetStanding(def.id)
    const x = at?.x ?? (intro ? def.collision.min - 130 : sp.x)
    return { intro, init: { x, facing: at?.facing ?? sp.facing, state: 'idle', target: null, turnLeft: 0 } as Actor }
  })
  const actor = useRef<Actor>(init)
  const cam = useRef(0)
  const [shown, setShown] = useState<{ state: ActorState; facing: Facing }>({ state: init.state, facing: init.facing })
  const [near, setNear] = useState<string | null>(null)
  const [talk, setTalk] = useState<{ dialogue: string; npc: string } | null>(null)
  // the scene's characters: NPCs from the scene data (shown while the arc has them here), extras added by events
  const [cast] = useState(() => {
    const c = new Cast(prefersReducedMotion())
    for (const i of def.interactables) if (i.kind === 'npc') c.addNpc(i.id, i.ref, i.x, i.facing, i.watch)
    return c
  })
  const [, setVersion] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced] = useState(prefersReducedMotion)
  const charEls = useRef(new Map<string, HTMLDivElement>())
  const [look, setLook] = useState<Live | null>(null)
  const [panel, setPanel] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [note, setNote] = useState<string | null>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const stage = useRef<HTMLDivElement>(null)
  const layerEls = useRef(new Map<string, HTMLDivElement>())
  const pending = useRef<Live | null>(null)
  const blocked = useRef(false)
  const raf = useRef(0)
  const last = useRef(0)
  const timers = useRef<number[]>([])
  const held = useRef(new Set<string>())
  const fired = useRef(new Set<string>())
  const saveRef = useRef(save)
  const introDone = useRef(false)

  useEffect(() => {
    host.activate()
    update((s) => enter(arc, loc, s))
  }, [host, arc, loc])
  // the spawn is used once: dropped from the address, so a reload restores where the figure stood instead
  useEffect(() => {
    if (spawn) go({ v: 'arc', a: arc.id, l: loc.id, w: def.id }, 'replace')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const spots = live(arc, loc, def, save)
  const spotsRef = useRef(spots)
  useEffect(() => {
    spotsRef.current = spots
    saveRef.current = save
  })

  const view: View | null = viewOf(def, size.w, size.h)
  const layers = [...def.layers].sort((a, b) => a.z - b.z).filter((l) => !(l.source && 'image' in l.source && missing.includes(l.source.image)))

  /** where to stand to use a spot from here (null: out of reach) */
  const standFor = (s: Live, from: number) => standSpot(def.collision, from, s.x, s.approach)
  const say = (t: string) => {
    setNote(t)
    later(2600, () => setNote((o) => (o === t ? null : o)))
  }
  const later = (ms: number, f: () => void) => timers.current.push(window.setTimeout(f, ms))

  // events: a zone walked into says its line / runs its effects (through the engine), once per tab or per visit
  const events = useCallback(
    (x: number) => {
      for (const e of def.events ?? []) {
        if (x < e.x0 || x > e.x1 || fired.current.has(e.id) || (e.once === 'session' && said(e.id))) continue
        if (e.when && !holds(e.when, saveRef.current)) continue
        fired.current.add(e.id)
        if (e.once === 'session') markSaid(e.id)
        if (e.note) say(e.note)
        if (e.effects) update((s) => effects(arc, e.effects, s))
        if (e.extra) {
          cast.addNpc(`extra:${e.id}`, e.extra.look, e.extra.x, e.extra.facing, undefined, e.extra.steps)
          runRef.current()
        }
      }
    },
    // say/later only touch state setters and refs
    [def, arc], // eslint-disable-line react-hooks/exhaustive-deps
  )

  const paint = useCallback(() => {
    const a = actor.current
    if (!view) return
    cam.current = follow(def, view, cam.current, a.x)
    for (const l of def.layers) {
      const el = layerEls.current.get(l.id)
      if (el) el.style.transform = layerTransform(def, view, cam.current, l.parallax)
    }
    charEls.current.get('player')?.style.setProperty('transform', `translate3d(${a.x}px, 0, 0)`)
    for (const n of cast.npcs) charEls.current.get(n.id)?.style.setProperty('transform', `translate3d(${n.actor.x}px, 0, 0)`)
  }, [view, def, cast])
  /** what the figure is next to, and the event zones it stands in (state; called from the frame loop and handlers) */
  const sense = useCallback(() => {
    const a = actor.current
    let n: string | null = null
    if (!LOCKED.has(a.state))
      for (const s of spotsRef.current) {
        const at = standSpot(def.collision, a.x, s.kind === 'npc' ? (cast.npc(s.id)?.actor.x ?? s.x) : s.x, s.approach)
        if (at !== null && Math.abs(at - a.x) <= NEAR) n = s.id
      }
    setNear((o) => (o === n ? o : n))
    if (!LOCKED.has(a.state) || a.state === 'scripted') events(a.x)
  }, [def, events, cast])

  const xOf = (s: Live) => (s.kind === 'npc' ? (cast.npc(s.id)?.actor.x ?? s.x) : s.x)
  const refresh = () => setVersion(cast.version)
  const show = () => setShown((o) => (o.state === actor.current.state && o.facing === actor.current.facing ? o : { state: actor.current.state, facing: actor.current.facing }))

  /** the player's control state, through the machine (a move it does not allow is ignored) */
  const playerTo = (to: ActorState, facing?: Facing) => {
    actor.current = setState({ ...actor.current, ...(facing ? { facing } : {}) }, to)
    cast.sync('player', actor.current.state, performance.now())
  }
  /**
   * Using something, once the figure stands at it: face it, play the act's clip, and let the clip's events do the
   * rest — the hand touches the shelf (take), the door gives (leave), the greeting ends (the conversation opens).
   */
  const operate = (s: Live) => {
    const a = actor.current
    const now = performance.now()
    const face: Facing = xOf(s) >= a.x ? 1 : -1
    if (s.kind === 'npc') {
      playerTo('interact', face)
      cast.engage(s.id, a.x, now)
      cast.play('player', 'greet', now, { ready: () => setTalk({ dialogue: s.dialogue!, npc: s.id }) })
    } else if (s.kind === 'lookout') {
      playerTo('interact', face)
      cast.play('player', 'look-up', now, {
        open: () => {
          playerTo('inspect')
          setLook(s)
        },
      })
    } else if (s.kind === 'door' || s.kind === 'exit') {
      const p = passage(arc, def, s.transition, saveRef.current)
      playerTo('interact', face)
      cast.play('player', 'push', now, {
        open: () => {
          if (!p.ok) {
            say(p.reason)
            cast.play('player', 'settle', performance.now(), { end: () => release() })
            return
          }
          playerTo('disabled')
          keepStanding(def.id, actor.current.x, actor.current.facing)
          const t = def.transitions.find((x) => x.id === s.transition)!
          const leave = () => {
            host.suspend()
            if (p.scene) {
              forgetStanding(p.scene.id)
              go({ v: 'arc', a: arc.id, l: p.location.id, w: p.scene.id, ...(p.spawn ? { sp: p.spawn } : {}) }, 'replace')
            } else go({ v: 'arc', a: arc.id, l: p.location.id })
          }
          if (t.effect === 'none' || prefersReducedMotion()) leave()
          else {
            setLeaving(true)
            later(280, leave)
          }
        },
      })
    } else {
      const o = s.object!
      playerTo('interact', face)
      cast.play('player', 'reach', now, {
        // the hand is at the thing: its effects run now, through the engine, as on the list screen
        contact: () => {
          if (o.effects) update((sv) => effects(arc, o.effects, sv))
        },
        done: () => {
          if (o.puzzle) {
            keepStanding(def.id, actor.current.x, actor.current.facing)
            release()
            go({ v: 'arc', a: arc.id, l: loc.id, p: o.puzzle, w: def.id })
            return
          }
          playerTo('inspect')
          cast.play('player', 'read', performance.now())
          setLook(s)
          refresh()
        },
      })
    }
    refresh()
    show()
    paint()
    sense()
    runRef.current()
  }

  // the frame loop outlives renders: it reaches the latest paint and operate through refs, never a stale closure
  const activate = useRef(operate)
  const paintRef = useRef(paint)
  const senseRef = useRef(sense)
  const runRef = useRef(() => {})
  const sayRef = useRef<(t: string) => void>(() => {})
  useEffect(() => {
    activate.current = operate
    paintRef.current = paint
    senseRef.current = sense
    runRef.current = run
    sayRef.current = say
  })

  const frame = useCallback(function frame(t: number) {
    // WebKit can hand rAF a timestamp earlier than the performance.now() taken when it was scheduled: never negative
    // capped so a long stall (a tab coming back) does not jump far, but high enough that a slow device (10 fps)
    // still walks at full speed
    const dt = Math.min(0.2, Math.max(0, (t - last.current) / 1000))
    last.current = t
    const r = tick(actor.current, dt)
    actor.current = r.actor
    if (r.arrived) {
      const was = actor.current.state
      actor.current = setState(actor.current, 'idle')
      cast.sync('player', 'idle', t)
      if (blocked.current) {
        blocked.current = false
        cast.play('player', 'surprise', t)
      }
      const p = pending.current
      pending.current = null
      if (p && was === 'approach') activate.current(p)
    }
    cast.sync('player', actor.current.state, t)
    for (const line of cast.frame(t, dt, actor.current.x, def.collision)) sayRef.current(line)
    setShown((o) => (o.state === actor.current.state && o.facing === actor.current.facing ? o : { state: actor.current.state, facing: actor.current.facing }))
    setVersion(cast.version)
    paintRef.current()
    senseRef.current()
    raf.current = moving(actor.current) || cast.busy(t) ? requestAnimationFrame(frame) : 0
  }, [cast, def])
  const run = useCallback(() => {
    if (raf.current || host.phase !== 'active') return
    last.current = performance.now()
    raf.current = requestAnimationFrame(frame)
  }, [frame, host])

  const walkTo = (x: number, state: 'walk' | 'approach' = 'walk') => {
    if (LOCKED.has(actor.current.state)) return
    const c = def.collision
    const got = reach(c, actor.current.x, x)
    blocked.current = state === 'walk' && Math.abs(got - Math.min(c.max, Math.max(c.min, x))) > 4
    if (blocked.current) say('Không đi qua được.')
    if (state === 'walk') pending.current = null
    actor.current = goTo(actor.current, c, x, state)
    if (actor.current.target === null) {
      if (blocked.current) {
        blocked.current = false
        cast.play('player', 'surprise', performance.now())
        run()
      }
      const p = pending.current
      pending.current = null
      if (p) activate.current(p)
      else show()
      return
    }
    show()
    run()
  }
  const approach = (s: Live) => {
    if (LOCKED.has(actor.current.state)) return
    const at = standFor(s, actor.current.x)
    if (at === null) {
      say('Không tới gần được chỗ ấy.')
      return
    }
    pending.current = s
    walkTo(at, 'approach')
  }
  const stop = () => {
    const a = actor.current
    if (a.state !== 'walk' && a.state !== 'turn') return
    actor.current = { ...a, target: null, state: 'idle', then: undefined }
    cast.sync('player', 'idle', performance.now())
    show()
    run()
  }
  /** an act is over: the player is free again (the machine allows idle from every engaged state) */
  const release = () => {
    playerTo('idle')
    if (!actor.current.target) cast.play('player', 'idle', performance.now())
    refresh()
    show()
    paint()
    sense()
  }
  const settle = () => {
    cast.play('player', 'settle', performance.now(), { end: () => release() })
    playerTo('idle')
    show()
    run()
  }
  /** the conversation moved to another line: who speaks, who listens, with what face */
  const onLine = (n: DNode) => {
    if (!talk) return
    const ref = (def.interactables.find((i) => i.id === talk.npc) as { ref?: string } | undefined)?.ref
    const talker = n.speaker === 'me' ? 'player' : n.speaker === ref ? talk.npc : null
    playerTo(talker === 'player' ? 'talk' : 'listen')
    cast.speak(talker, ['player', talk.npc], (n.mood ?? 'neutral') as Mood, performance.now())
    refresh()
    show()
    run()
  }

  // stage size → view; on the first view (and on rotation) the camera is placed on the figure
  useLayoutEffect(() => {
    const el = stage.current
    if (!el) return
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  useLayoutEffect(() => {
    if (view) cam.current = centreOn(def, view, actor.current.x)
    paint()
    // only when the stage size changes, not on every paint identity change
  }, [size.w, size.h]) // eslint-disable-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    paint()
    // near / events once laid out (a frame later: not a state change inside the effect itself)
    const f = requestAnimationFrame(() => senseRef.current())
    return () => cancelAnimationFrame(f)
  }, [paint])

  useEffect(() => {
    if (!intro || introDone.current) return
    introDone.current = true
    actor.current = goTo(actor.current, def.collision, spawnOf(def, null).x, 'scripted')
    cast.sync('player', actor.current.state, performance.now())
    show()
    run()
  }, [intro, run, def, cast])

  // the app in the background: the scene pauses (no frames), the figure stops where it is; back: it resumes
  useEffect(() => {
    const vis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf.current)
        raf.current = 0
        held.current.clear()
        const a = actor.current
        if (a.state === 'walk' || a.state === 'approach' || a.state === 'turn' || a.state === 'scripted') actor.current = { ...a, target: null, state: 'idle', then: undefined }
        keepStanding(def.id, actor.current.x, actor.current.facing)
        cast.pause(performance.now())
        setPaused(true)
        host.suspend()
      } else {
        host.resume()
        cast.resume(performance.now())
        setPaused(false)
        runRef.current()
        show()
        paintRef.current()
        senseRef.current()
      }
    }
    const hide = () => keepStanding(def.id, actor.current.x, actor.current.facing)
    document.addEventListener('visibilitychange', vis)
    addEventListener('pagehide', hide)
    return () => {
      document.removeEventListener('visibilitychange', vis)
      removeEventListener('pagehide', hide)
    }
  }, [def.id, host, cast])

  // keyboard: hold ← → to walk, E / Enter to use what is near
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (talk || look || panel || e.repeat || (e.target as HTMLElement).closest?.('input, textarea')) return
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        held.current.add(e.key)
        walkTo(e.key === 'ArrowLeft' ? -1e4 : 1e4)
        e.preventDefault()
      } else if (e.key === 'e' || e.key === 'E' || (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'BUTTON')) {
        const s = spotsRef.current.find((x) => x.id === near)
        if (s) approach(s)
      }
    }
    const up = (e: KeyboardEvent) => {
      if (held.current.delete(e.key) && !held.current.size) stop()
    }
    // a key let go in another window never sends keyup here
    const blur = () => {
      held.current.clear()
      stop()
    }
    addEventListener('keydown', down)
    addEventListener('keyup', up)
    addEventListener('blur', blur)
    return () => {
      removeEventListener('keydown', down)
      removeEventListener('keyup', up)
      removeEventListener('blur', blur)
    }
  })

  useEffect(
    () => () => {
      cancelAnimationFrame(raf.current)
      timers.current.forEach(clearTimeout)
      const a = actor.current
      if (a.state !== 'scripted') keepStanding(def.id, a.x, a.facing)
    },
    [def.id],
  )

  const onStage = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a') || !view) return
    const r = stage.current!.getBoundingClientRect()
    walkTo(screenToScene(view, cam.current, e.clientX - r.left, e.clientY - r.top).x)
  }
  const hold = (dir: -1 | 1) => ({
    onPointerDown: (e: React.PointerEvent) => {
      ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
      walkTo(dir * 1e4)
    },
    onPointerUp: stop,
    onPointerCancel: stop,
    onLostPointerCapture: stop,
  })

  const locked = LOCKED.has(shown.state) || panel
  const nearSpot = spots.find((s) => s.id === near)
  const stageText = currentStage(arc, save)?.text
  const { width, height, floor } = def.dimensions
  // who is on stage: NPCs the arc has here now (live spots), extras of events, and the player
  const present = new Set(spots.filter((x) => x.kind === 'npc').map((x) => x.id))
  const cast_ = cast.views({ x: 0, facing: shown.facing, state: shown.state, target: null, turnLeft: 0 }).filter((v) => v.id === 'player' || v.extra || present.has(v.id))
  const charRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) charEls.current.set(id, el)
    else charEls.current.delete(id)
  }

  const layerNode = (l: SceneDef['layers'][number]) => {
    if (l.when && !holds(l.when, save)) return null
    const w = view ? layerWidth(def, view, l.parallax) : width
    const style = { width: w, height, opacity: l.opacity, zIndex: l.z }
    const ref = (el: HTMLDivElement | null) => {
      if (el) layerEls.current.set(l.id, el)
      else layerEls.current.delete(l.id)
    }
    let body: React.ReactNode = null
    if (l.role === 'characters')
      body = (
        <>
          {cast_.map((c) => (
            <Character
              key={c.id}
              ref={charRef(c.id)}
              className={c.id === 'player' ? 'is-player' : 'is-npc'}
              visual={visualOf(c.look)}
              facing={c.facing}
              clip={c.clip}
              token={c.token}
              mood={c.mood}
              paused={paused}
              reduced={reduced}
              state={c.state}
              testId={c.id === 'player' ? 'walk-player' : `walk-npc-${c.id}`}
              top={floor}
              x={c.id === 'player' ? undefined : c.x}
            />
          ))}
        </>
      )
    else if (l.role === 'interaction')
      body = spots.map((s) => {
        const sw = s.width ?? 130
        const shut = (s.kind === 'door' || s.kind === 'exit') && !s.open
        return (
          <button
            key={s.id}
            className={`wk-spot is-${s.kind}${near === s.id ? ' is-near' : ''}${shut ? ' is-shut' : ''}`}
            style={{ left: xOf(s) - sw / 2, width: sw, top: s.top, height: s.height ?? floor - s.top }}
            aria-label={s.kind === 'npc' ? `Nói chuyện với ${s.label}` : `${s.verb}: ${s.label}${shut ? ' (đang đóng)' : ''}`}
            disabled={locked}
            onClick={() => approach(s)}
          >
            <span className="wk-mark" aria-hidden="true" />
            <span className="wk-tag">{s.label}</span>
          </button>
        )
      })
    else if (l.source && 'image' in l.source) body = <img className="wk-img" src={IMG(l.source.image)} alt="" />
    else if (l.source && 'art' in l.source) {
      const A = art[l.source.art]
      body = A ? <A width={w} height={height} floor={floor} /> : null
    }
    return (
      <div key={l.id} ref={ref} className={`wk-layer is-${l.role}`} data-layer={l.id} style={style}>
        {body}
      </div>
    )
  }

  return (
    <section className={`wk${locked ? ' is-locked' : ''}`} aria-label={`${loc.name} — khám phá`} data-scene={def.id} data-phase={host.phase}>
      <header className="wk-top">
        <button className="jr-ghost is-small" onClick={() => go({ v: 'arc', a: arc.id, l: loc.id }, 'replace')}>← Danh sách</button>
        <div className="wk-title">
          <h2>{loc.name}</h2>
          {stageText && <p>{stageText}</p>}
        </div>
        <button
          className="jr-ghost is-small wk-map"
          disabled={LOCKED.has(shown.state)}
          onClick={() => {
            stop()
            setPanel(true)
          }}
        >
          Khu vực
        </button>
      </header>

      <div className="wk-stage" ref={stage} onPointerDown={onStage} onScroll={(e) => e.currentTarget.scrollTo(0, 0)} data-testid="walk-stage">
        {layers.map(layerNode)}
        {note && <p className="wk-note" role="status">{note}</p>}
        <div className={`wk-fade${leaving ? ' is-out' : ''}`} aria-hidden="true" />
      </div>

      <div className="wk-controls" hidden={!!talk || !!look || panel}>
        <button className="wk-dir" aria-label="Đi sang trái" disabled={locked} {...hold(-1)}>◀</button>
        <div className="wk-prompt">
          {nearSpot && !locked ? (
            <button className="jr-cta wk-use" onClick={() => approach(nearSpot)}>
              {nearSpot.verb} · {nearSpot.label}
            </button>
          ) : (
            <p className="wk-help">{shown.state === 'scripted' ? 'Bạn bước vào…' : 'Chạm sàn để đi · chạm người, đồ vật hay cửa để tới gần'}</p>
          )}
        </div>
        <button className="wk-dir" aria-label="Đi sang phải" disabled={locked} {...hold(1)}>▶</button>
      </div>

      {talk && (
        <DialoguePanel
          arc={arc}
          id={talk.dialogue}
          save={save}
          onNode={onLine}
          onClose={() => {
            const i = def.interactables.find((x) => x.id === talk.npc)
            const after = i?.kind === 'npc' && i.afterTalk && (!i.afterTalk.when || holds(i.afterTalk.when, saveRef.current)) ? i.afterTalk.steps : []
            setTalk(null)
            cast.release(talk.npc, performance.now(), after)
            settle()
          }}
        />
      )}
      {look && look.kind === 'lookout' && (
        <Lookout
          label={look.label}
          text={look.text}
          onClose={() => {
            setLook(null)
            settle()
          }}
        />
      )}
      {look && look.kind === 'object' && (
        <Examine
          arc={arc}
          label={look.label}
          object={look.object}
          onClose={() => {
            setLook(null)
            settle()
          }}
        />
      )}
      {panel && (
        <RegionPanel
          arc={arc}
          here={loc.id}
          save={save}
          go={go}
          onClose={() => {
            setPanel(false)
            paint()
            sense()
          }}
        />
      )}
    </section>
  )
}
