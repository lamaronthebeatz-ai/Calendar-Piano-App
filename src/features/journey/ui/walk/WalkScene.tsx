import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { findArticle } from '../../../theory/wiki'
import { update } from '../../progress'
import type { Save } from '../../engine/save'
import type { ArcDef, LocationDef } from '../../engine/types'
import { currentStage, effects, enter } from '../../engine/runtime'
import { holds } from '../../engine/world'
import { prefersReducedMotion } from '../../../../hooks/useEdgeSwipeBack'
import { DialoguePanel } from '../Arc'
import { KIND, useEscape } from '../arcShared'
import { LOCKED, goTo, moving, nearest, reach, standSpot, tick, type Actor, type ActorState, type Facing } from './actor'
import { LibraryFront, LibraryMid } from './Library'
import type { WalkLayout } from './scenes'
import './walk.css'

type Go = (p: Record<string, string>, how?: 'push' | 'replace' | 'back') => void
type Spot = { key: string; x: number; gap: number; top: number; label: string; verb: string; kind: 'npc' | 'thing'; dialogue?: string; object?: NonNullable<LocationDef['objects']>[number] }

const RANGE = 120 // world units: close enough to use something
const MIN_VIEW = 560 // the narrowest slice of the room shown, in world units (a phone held upright)
const FAR = 0.4 // the far layer moves at this fraction of the room's speed
const NEAR = 1.18 // the front layer, a little faster

/** Where the figure stood when the player left for a puzzle or an article: memory only, gone on reload (not a save). */
const lastSpot = new Map<string, { x: number; facing: Facing }>()

const IMG = (id: string) => `${import.meta.env.BASE_URL}images/journey/${id}.webp`

/**
 * One place of an arc, walked through side-on: tap the floor to walk, tap a person or a thing to walk up to it and
 * use it, or hold ◀ ▶ (arrow keys, E to use). What is there, when, and what it does comes from the arc's LocationDef
 * through the same engine calls as the list screen (enter, effects, the dialogue runner); this screen adds only where
 * things stand and a figure to walk. Moving is locked while a conversation or a look is open.
 */
export function WalkScene({ arc, loc, layout, save, go }: { arc: ArcDef; loc: LocationDef; layout: WalkLayout; save: Save; go: Go }) {
  const [{ init, intro }] = useState(() => {
    const remembered = lastSpot.get(loc.id)
    const intro = !remembered && !prefersReducedMotion()
    return { intro, init: { x: remembered?.x ?? (intro ? layout.enterFrom : layout.start), facing: remembered?.facing ?? 1, state: 'idle', target: null, turnLeft: 0 } as Actor }
  })
  const actor = useRef<Actor>(init)
  const introDone = useRef(false)
  const [shown, setShown] = useState<{ state: ActorState; facing: Facing }>({ state: init.state, facing: init.facing })
  const [near, setNear] = useState<string | null>(null)
  const [talk, setTalk] = useState<{ dialogue: string; npc: string; from: number } | null>(null)
  const [look, setLook] = useState<Spot | null>(null)
  const [note, setNote] = useState<string | null>(null)
  const [bump, setBump] = useState(0)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const stage = useRef<HTMLDivElement>(null)
  const world = useRef<HTMLDivElement>(null)
  const far = useRef<HTMLDivElement>(null)
  const front = useRef<HTMLDivElement>(null)
  const figure = useRef<HTMLDivElement>(null)
  const pending = useRef<Spot | null>(null)
  const blocked = useRef(false)
  const raf = useRef(0)
  const last = useRef(0)
  const timers = useRef<number[]>([])
  const held = useRef(new Set<string>())

  useEffect(() => {
    update((s) => enter(arc, loc, s))
  }, [arc, loc])

  // people and things the layout places, filtered by their conditions on the current save
  const spots: Spot[] = [
    ...loc.present
      .filter((p) => layout.people[p.npc] && (!p.when || holds(p.when, save)))
      .map((p) => {
        const at = layout.people[p.npc]
        const c = arc.characters.find((x) => x.id === p.npc)!
        return { key: p.npc, x: at.x, gap: at.gap, top: 300, label: c.name, verb: 'Nói chuyện', kind: 'npc' as const, dialogue: p.dialogue }
      }),
    ...(loc.objects ?? [])
      .filter((o) => layout.things[o.id] && (!o.when || holds(o.when, save)))
      .map((o) => ({ key: o.id, x: layout.things[o.id].x, gap: layout.things[o.id].gap, top: layout.things[o.id].top, label: o.label, verb: layout.things[o.id].verb, kind: 'thing' as const, object: o })),
  ]
  const spotsRef = useRef(spots)
  useEffect(() => {
    spotsRef.current = spots
  })

  // scale: the room's height fills the stage, unless that would show less than MIN_VIEW of it across
  const scale = size.h ? Math.min(size.h / layout.height, size.w / MIN_VIEW) : 0
  const viewW = scale ? size.w / scale : layout.width
  const offY = scale ? (size.h - layout.height * scale) / 2 : 0

  const paint = useCallback(() => {
    const a = actor.current
    if (!scale) return
    // the camera follows the figure inside the room's bounds; a room narrower than the view stays centred
    const cam = viewW >= layout.width ? (layout.width - viewW) / 2 : Math.min(layout.width - viewW, Math.max(0, a.x - viewW / 2))
    if (world.current) world.current.style.transform = `translate3d(${-cam * scale}px, ${offY}px, 0) scale(${scale})`
    if (far.current) far.current.style.transform = `translate3d(${-cam * FAR * scale}px, ${offY}px, 0) scale(${scale})`
    if (front.current) front.current.style.transform = `translate3d(${-cam * NEAR * scale}px, ${offY}px, 0) scale(${scale})`
    if (figure.current) figure.current.style.transform = `translate3d(${a.x}px, 0, 0)`
    const n = LOCKED.has(a.state) ? null : (nearest(a.x, spotsRef.current, RANGE)?.key ?? null)
    setNear((o) => (o === n ? o : n))
  }, [scale, viewW, offY, layout.width])

  const show = () => setShown((o) => (o.state === actor.current.state && o.facing === actor.current.facing ? o : { state: actor.current.state, facing: actor.current.facing }))
  const later = (ms: number, f: () => void) => timers.current.push(window.setTimeout(f, ms))

  const activate = useRef<(s: Spot) => void>(() => {})
  const operate = (s: Spot) => {
    const a = actor.current
    const face: Facing = s.x >= a.x ? 1 : -1
    if (s.kind === 'npc') {
      actor.current = { ...a, facing: face, state: 'talk', target: null }
      setTalk({ dialogue: s.dialogue!, npc: s.key, from: a.x })
    } else {
      actor.current = { ...a, facing: face, state: 'interact', target: null }
      const o = s.object!
      // a short reach toward the thing, then its effects run through the engine, as on the list screen
      later(380, () => {
        if (o.effects) update((sv) => effects(arc, o.effects, sv))
        if (o.puzzle) {
          lastSpot.set(loc.id, { x: actor.current.x, facing: actor.current.facing })
          actor.current = { ...actor.current, state: 'idle' }
          go({ v: 'arc', a: arc.id, l: loc.id, p: o.puzzle, w: '1' })
          return
        }
        actor.current = { ...actor.current, state: 'examine' }
        setLook(s)
        show()
      })
    }
    show()
    paint()
  }

  // the frame loop outlives renders: it reaches the latest paint and use through refs, never a stale closure
  const paintRef = useRef(paint)
  useEffect(() => {
    activate.current = operate
    paintRef.current = paint
  })

  const frame = useCallback(
    function frame(t: number) {
      const dt = Math.min(0.05, (t - last.current) / 1000)
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
      show()
      paintRef.current()
      raf.current = moving(actor.current) ? requestAnimationFrame(frame) : 0
    },
    [],
  )
  const run = useCallback(() => {
    if (raf.current) return
    last.current = performance.now()
    raf.current = requestAnimationFrame(frame)
  }, [frame])

  const walkTo = (x: number, state: 'walk' | 'approach' = 'walk') => {
    if (LOCKED.has(actor.current.state)) return
    const c = layout.collision
    const got = reach(c, actor.current.x, x)
    blocked.current = state === 'walk' && Math.abs(got - Math.min(c.max, Math.max(c.min, x))) > 4
    if (blocked.current) say(layout.blocked)
    if (state === 'walk') pending.current = null
    actor.current = goTo(actor.current, c, x, state)
    if (actor.current.target === null) {
      // already standing there
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
  const approach = (s: Spot) => {
    if (LOCKED.has(actor.current.state)) return
    pending.current = s
    walkTo(standSpot(layout.collision, actor.current.x, s.x, s.gap), 'approach')
  }
  const stop = () => {
    const a = actor.current
    if (a.state !== 'walk' && a.state !== 'turn') return
    actor.current = { ...a, target: null, state: 'idle', then: undefined }
    show()
  }
  const say = (t: string) => {
    setNote(t)
    later(2400, () => setNote((o) => (o === t ? null : o)))
  }
  const release = () => {
    actor.current = { ...actor.current, state: 'idle' }
    show()
    paint()
  }

  // the stage's size decides the scale; paint whenever it (or the scale) changes
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
    paint()
  }, [paint])

  // the scripted entrance: walks in from the edge with the controls locked, once per visit
  useEffect(() => {
    if (!intro || introDone.current) return
    introDone.current = true
    actor.current = goTo({ ...actor.current, state: 'idle' }, layout.collision, layout.start, 'scripted')
    show()
    run()
  }, [intro, run, layout.start, layout.collision])

  // keyboard: hold ← → to walk, E / Enter to use what is near
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (talk || look || e.repeat || (e.target as HTMLElement).closest?.('input, textarea')) return
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        held.current.add(e.key)
        walkTo(e.key === 'ArrowLeft' ? -1e4 : 1e4)
        e.preventDefault()
      } else if ((e.key === 'e' || e.key === 'E' || (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'BUTTON'))) {
        const s = spotsRef.current.find((x) => x.key === near)
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
      lastSpot.set(loc.id, { x: actor.current.state === 'scripted' ? layout.start : actor.current.x, facing: actor.current.facing })
    },
    [loc.id, layout.start],
  )

  const onStage = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a') || !scale) return
    const r = stage.current!.getBoundingClientRect()
    const a = actor.current
    const cam = viewW >= layout.width ? (layout.width - viewW) / 2 : Math.min(layout.width - viewW, Math.max(0, a.x - viewW / 2))
    walkTo((e.clientX - r.left) / scale + cam)
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

  const locked = LOCKED.has(shown.state)
  const nearSpot = spots.find((s) => s.key === near)
  const stageText = currentStage(arc, save)?.text
  const npcFacing = (key: string) => (talk?.npc === key ? (talk.from < layout.people[key].x ? -1 : 1) : layout.people[key].facing)

  return (
    <section className={`wk${locked ? ' is-locked' : ''}`} aria-label={`${loc.name} — khám phá`}>
      <header className="wk-top">
        <button className="jr-ghost is-small" onClick={() => go({ v: 'arc', a: arc.id, l: loc.id }, 'replace')}>← Danh sách</button>
        <div className="wk-title">
          <h2>{loc.name}</h2>
          {stageText && <p>{stageText}</p>}
        </div>
      </header>

      <div className="wk-stage" ref={stage} onPointerDown={onStage} onScroll={(e) => e.currentTarget.scrollTo(0, 0)} data-testid="walk-stage">
        <div className="wk-layer wk-far" ref={far} style={{ width: layout.width * FAR + viewW, height: layout.height }}>
          <img src={IMG(loc.bg)} alt="" />
        </div>
        <div className="wk-layer" ref={world} style={{ width: layout.width, height: layout.height }}>
          <LibraryMid width={layout.width} height={layout.height} floor={layout.floor} />
          {loc.present.filter((p) => layout.people[p.npc]).map((p) => (
            <div key={p.npc} className={`wk-actor is-npc is-${layout.people[p.npc].look}${talk?.npc === p.npc ? ' is-talk' : ''}`} style={{ transform: `translate3d(${layout.people[p.npc].x}px, 0, 0)`, top: layout.floor }}>
              <Figure look={layout.people[p.npc].look} facing={npcFacing(p.npc)} />
            </div>
          ))}
          <div ref={figure} className={`wk-actor is-player is-${shown.state}`} data-state={shown.state} data-testid="walk-player" style={{ top: layout.floor }}>
            <Figure look="traveller" facing={shown.facing} bump={bump} />
          </div>
          {spots.map((s) => (
            <button
              key={s.key}
              className={`wk-spot is-${s.kind}${near === s.key ? ' is-near' : ''}`}
              style={{ left: s.x - 65, top: s.top, height: layout.floor - s.top }}
              aria-label={s.kind === 'npc' ? `Nói chuyện với ${s.label}` : `${s.verb}: ${s.label}`}
              disabled={locked}
              onClick={() => approach(s)}
            >
              <span className="wk-mark" aria-hidden="true" />
              <span className="wk-tag">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="wk-layer wk-front-layer" ref={front} style={{ width: layout.width * NEAR + viewW, height: layout.height }}>
          <LibraryFront width={Math.round(layout.width * NEAR + viewW)} height={layout.height} />
        </div>
        {note && <p className="wk-note" role="status">{note}</p>}
      </div>

      <div className="wk-controls" hidden={!!talk || !!look}>
        <button className="wk-dir" aria-label="Đi sang trái" disabled={locked} {...hold(-1)}>◀</button>
        <div className="wk-prompt">
          {nearSpot && !locked ? (
            <button className="jr-cta wk-use" onClick={() => approach(nearSpot)}>
              {nearSpot.verb} · {nearSpot.label}
            </button>
          ) : (
            <p className="wk-help">{shown.state === 'scripted' ? 'Bạn bước vào thư viện…' : 'Chạm sàn để đi · chạm người hay đồ vật để tới gần'}</p>
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
      {look && (
        <Examine
          arc={arc}
          spot={look}
          onClose={() => {
            setLook(null)
            release()
          }}
        />
      )}
    </section>
  )
}

/** A close look at a thing: what it gave (items, evidence, articles), read from the arc's own definitions. */
function Examine({ arc, spot, onClose }: { arc: ArcDef; spot: Spot; onClose: () => void }) {
  useEscape(onClose)
  const fx = spot.object?.effects ?? []
  const items = fx.flatMap((e) => ('give' in e ? [arc.items.find((i) => i.id === e.give)] : [])).filter((x) => !!x)
  const evidence = fx.flatMap((e) => ('evidence' in e ? [arc.evidence.find((v) => v.id === e.evidence)] : [])).filter((x) => !!x)
  const reads = fx.flatMap((e) => ('discover' in e && e.discover.startsWith('a:') ? [findArticle(e.discover.slice(2))] : [])).filter((x) => !!x)
  return (
    <div className="ar-dialog" role="dialog" aria-label={`Xem: ${spot.label}`}>
      <div className="jr-dialog ar-dialog-box wk-examine">
        <p className="jr-kicker">Xem xét</p>
        <p className="jr-speaker-name">{spot.label}</p>
        {items.map((i) => (
          <div key={i.id} className="wk-found">
            <b>{i.name}</b>
            <p className="jr-line">{i.text}</p>
            <small>Đã cho vào túi đồ.</small>
          </div>
        ))}
        {evidence.map((v) => (
          <div key={v.id} className="wk-found is-evidence">
            <span className="ar-voice is-fiction">{KIND[v.kind]}</span> <b>{v.title}</b>
            <p className="ar-small">{v.reliability}</p>
            <small>Đã ghi vào sổ chứng cứ.</small>
          </div>
        ))}
        {!items.length && !evidence.length && <p className="jr-line">Không có gì mới ở đây.</p>}
        {reads.length ? (
          <p className="ar-refs">
            {reads.map((a) => (
              <Link key={a.slug} to={`/theory/${a.slug}`} className="ar-ref">📖 {a.title}</Link>
            ))}
          </p>
        ) : null}
        <button className="jr-cta ar-next" autoFocus onClick={onClose}>Xong</button>
        <button className="ar-close" onClick={onClose} aria-label="Đóng">✕</button>
      </div>
    </div>
  )
}

/** A flat, ink-outlined figure; the state classes on its wrapper move its parts (transforms only). */
function Figure({ look, facing, bump }: { look: 'traveller' | 'monk' | 'scholar'; facing: Facing; bump?: number }) {
  return (
    <div className="wk-flip" style={{ transform: `scaleX(${facing})` }}>
      <div className="wk-body" key={bump ? `b${bump}` : undefined} data-bump={bump ? '1' : undefined}>
        <span className="wk-shadow" />
        <span className="wk-leg is-back" />
        <span className="wk-leg is-front" />
        <svg className="wk-robe" viewBox="0 0 80 120" aria-hidden="true">
          {look === 'traveller' ? (
            <>
              <path d="M22 4H58L72 116H8Z" fill="#8a5a24" stroke="#24170d" strokeWidth="3" />
              <path d="M22 4L40 60L58 4" fill="#6b4318" stroke="#24170d" strokeWidth="2" />
              <path d="M14 70H66" stroke="#d6ae60" strokeWidth="4" />
              <rect x="50" y="62" width="18" height="22" rx="3" fill="#5e3a1e" stroke="#24170d" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M20 4H60L74 116H6Z" fill="#3b2a1e" stroke="#24170d" strokeWidth="3" />
              <path d="M40 10V116" stroke="#24170d" strokeWidth="2" />
              <path d="M18 52H62" stroke="#a88a5a" strokeWidth="3" />
            </>
          )}
        </svg>
        <span className="wk-arm" />
        <span className={`wk-head is-${look}`} />
      </div>
    </div>
  )
}
