import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { update } from '../../progress'
import type { Save } from '../../engine/save'
import type { ArcDef, LocationDef } from '../../engine/types'
import { currentStage, effects, enter } from '../../engine/runtime'
import { holds } from '../../engine/world'
import { prefersReducedMotion } from '../../../../hooks/useEdgeSwipeBack'
import { DialoguePanel } from '../Arc'
import { LOCKED, goTo, moving, reach, standSpot, tick, type Actor, type ActorState } from '../../scene/actor'
import { SceneHost, type Loaded } from '../../scene/lifecycle'
import { centreOn, follow, layerTransform, layerWidth, screenToScene, viewOf, type View } from '../../scene/view'
import { live, type Live } from '../../scene/interact'
import { passage, sceneById, spawnOf } from '../../scene/world'
import { forgetStanding, keepStanding, markSaid, said, standingIn } from '../../scene/session'
import type { Facing, SceneDef } from '../../scene/types'
import { loadArt, type Art } from './art'
import { Examine, Figure, Lookout } from './parts'
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
  if (phase === 'failed')
    return (
      <section className="wk wk-status" role="alert">
        <p className="jr-kicker">Không mở được khung cảnh</p>
        <p className="jr-line">{host.error}</p>
        <div className="wk-status-acts">
          <button className="jr-cta" onClick={() => void host.retry(id)}>Thử lại</button>
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
  const [talk, setTalk] = useState<{ dialogue: string; npc: string; from: number } | null>(null)
  const [look, setLook] = useState<Live | null>(null)
  const [panel, setPanel] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [note, setNote] = useState<string | null>(null)
  const [bump, setBump] = useState(0)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const stage = useRef<HTMLDivElement>(null)
  const layerEls = useRef(new Map<string, HTMLDivElement>())
  const figure = useRef<HTMLDivElement>(null)
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
    if (figure.current) figure.current.style.transform = `translate3d(${a.x}px, 0, 0)`
  }, [view, def])
  /** what the figure is next to, and the event zones it stands in (state; called from the frame loop and handlers) */
  const sense = useCallback(() => {
    const a = actor.current
    let n: string | null = null
    if (!LOCKED.has(a.state))
      for (const s of spotsRef.current) {
        const at = standSpot(def.collision, a.x, s.x, s.approach)
        if (at !== null && Math.abs(at - a.x) <= NEAR) n = s.id
      }
    setNear((o) => (o === n ? o : n))
    if (!LOCKED.has(a.state) || a.state === 'scripted') events(a.x)
  }, [def, events])

  const show = () => setShown((o) => (o.state === actor.current.state && o.facing === actor.current.facing ? o : { state: actor.current.state, facing: actor.current.facing }))

  const operate = (s: Live) => {
    const a = actor.current
    const face: Facing = s.x >= a.x ? 1 : s.x < a.x - 1 ? -1 : a.facing
    if (s.kind === 'npc') {
      actor.current = { ...a, facing: face, state: 'talk', target: null }
      setTalk({ dialogue: s.dialogue!, npc: s.id, from: a.x })
    } else if (s.kind === 'lookout') {
      actor.current = { ...a, facing: face, state: 'examine', target: null }
      setLook(s)
    } else if (s.kind === 'door' || s.kind === 'exit') {
      const p = passage(arc, def, s.transition, saveRef.current)
      if (!p.ok) {
        say(p.reason)
        setBump((b) => b + 1)
      } else {
        actor.current = { ...a, state: 'locked', target: null }
        keepStanding(def.id, a.x, a.facing)
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
      }
    } else {
      actor.current = { ...a, facing: face, state: 'interact', target: null }
      const o = s.object!
      // a short reach toward the thing, then its effects run through the engine, as on the list screen
      later(380, () => {
        if (o.effects) update((sv) => effects(arc, o.effects, sv))
        if (o.puzzle) {
          keepStanding(def.id, actor.current.x, actor.current.facing)
          actor.current = { ...actor.current, state: 'idle' }
          go({ v: 'arc', a: arc.id, l: loc.id, p: o.puzzle, w: def.id })
          return
        }
        actor.current = { ...actor.current, state: 'examine' }
        setLook(s)
        show()
      })
    }
    show()
    paint()
    sense()
  }

  // the frame loop outlives renders: it reaches the latest paint and operate through refs, never a stale closure
  const activate = useRef(operate)
  const paintRef = useRef(paint)
  const senseRef = useRef(sense)
  useEffect(() => {
    activate.current = operate
    paintRef.current = paint
    senseRef.current = sense
  })

  const frame = useCallback(function frame(t: number) {
    // WebKit can hand rAF a timestamp earlier than the performance.now() taken when it was scheduled: never negative
    const dt = Math.min(0.05, Math.max(0, (t - last.current) / 1000))
    last.current = t
    const r = tick(actor.current, dt)
    actor.current = r.actor
    if (r.arrived) {
      const was = actor.current.state
      actor.current = { ...actor.current, state: 'idle' }
      if (blocked.current) {
        blocked.current = false
        setBump((b) => b + 1)
      }
      const p = pending.current
      pending.current = null
      if (p && was === 'approach') activate.current(p)
    }
    setShown((o) => (o.state === actor.current.state && o.facing === actor.current.facing ? o : { state: actor.current.state, facing: actor.current.facing }))
    paintRef.current()
    senseRef.current()
    raf.current = moving(actor.current) ? requestAnimationFrame(frame) : 0
  }, [])
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
        setBump((b) => b + 1)
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
    show()
  }
  const release = () => {
    actor.current = { ...actor.current, state: 'idle' }
    show()
    paint()
    sense()
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
    actor.current = goTo({ ...actor.current, state: 'idle' }, def.collision, spawnOf(def, null).x, 'scripted')
    show()
    run()
  }, [intro, run, def])

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
        host.suspend()
      } else {
        host.resume()
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
  }, [def.id, host])

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
  const npcFacing = (s: Live & { kind: 'npc' }) => (talk?.npc === s.id ? (talk.from < s.x ? -1 : 1) : s.facing)
  const npcs = def.interactables.filter((i): i is Extract<typeof i, { kind: 'npc' }> => i.kind === 'npc')

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
          {npcs.map((n) => {
            const s = spots.find((x) => x.id === n.id)
            if (!s) return null
            return (
              <div key={n.id} className={`wk-actor is-npc is-${n.look}${talk?.npc === n.id ? ' is-talk' : ''}`} style={{ transform: `translate3d(${n.x}px, 0, 0)`, top: floor }}>
                <Figure look={n.look} facing={npcFacing(s as Live & { kind: 'npc' })} />
              </div>
            )
          })}
          <div ref={figure} className={`wk-actor is-player is-${shown.state}`} data-state={shown.state} data-testid="walk-player" style={{ top: floor }}>
            <Figure look="traveller" facing={shown.facing} bump={bump} />
          </div>
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
            style={{ left: s.x - sw / 2, width: sw, top: s.top, height: s.height ?? floor - s.top }}
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
          onClose={() => {
            setTalk(null)
            release()
          }}
        />
      )}
      {look && look.kind === 'lookout' && (
        <Lookout
          label={look.label}
          text={look.text}
          onClose={() => {
            setLook(null)
            release()
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
            release()
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
