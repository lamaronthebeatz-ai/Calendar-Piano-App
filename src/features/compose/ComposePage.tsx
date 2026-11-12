import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import clsx from 'clsx'
import type { VerovioToolkit } from 'verovio/esm'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { loadInstruments, playNow, playSequence, type Inst } from '../theory/audio'
import {
  barAt, blank, CLEF_BOTTOM, INSTRUMENTS, instOf, transposeOf, ensureLane, fromTemplate, laneIndex, staffOfLane, TEMPLATES, voiceOfLane, clearEv, DUR, DUR_NAMES, dn, fromDn, keyLabel, layout, midiOf, migrate, newId, normalized, openTuplet, pitchName, resize,
  sigAlter, soundOf, spell, ticksOf, totalOf, TUPLETS, updateEv, writeAt, type Artic, type Clef, type DurName, type Dyn, type Ev, type Jump, type Left,
  type Note, type Orn, type Right, type Score, type Span, type Template,
} from './model'
import { chordText, toMei, type PieceInfo } from './mei'
import { engraver, render, renderPages } from './engrave'
import { fileName, fromMusicXml, toMidi, toMusicXml, unzipMxl } from './exchange'
import { usePageLoading } from '../../layout/pageCurtain'
import './compose.css'

/* ---------- storage: every score on this device, in localStorage ---------- */

const STORE = 'compose:scores'
const CURRENT = 'compose:current'
function loadAll(): Score[] {
  try {
    const raw = localStorage.getItem(STORE)
    const list = raw ? (JSON.parse(raw) as Score[]) : []
    return list.length ? list.map(migrate) : [blank()]
  } catch {
    return [blank()]
  }
}
function saveAll(list: Score[]) {
  try {
    localStorage.setItem(STORE, JSON.stringify(list))
  } catch {
    /* full or private mode: the score stays in memory */
  }
}
const loadPref = <T,>(k: string, d: T): T => {
  try {
    const v = localStorage.getItem(k)
    return v ? (JSON.parse(v) as T) : d
  } catch {
    return d
  }
}
const savePref = (k: string, v: unknown) => {
  try {
    localStorage.setItem(k, JSON.stringify(v))
  } catch {
    /* a lost preference is harmless */
  }
}

/* ---------- glyphs ---------- */

const NOTE_GLYPH: Record<DurName, string> = { 1: '𝅝', 2: '𝅗𝅥', 4: '♩', 8: '♪', 16: '𝅘𝅥𝅯', 32: '𝅘𝅥𝅰', 64: '𝅘𝅥𝅱' }
const REST_GLYPH: Record<DurName, string> = { 1: '𝄻', 2: '𝄼', 4: '𝄽', 8: '𝄾', 16: '𝄿', 32: '𝅀', 64: '𝅁' }
const DUR_LABEL: Record<DurName, string> = { 1: 'Tròn', 2: 'Trắng', 4: 'Đen', 8: 'Móc đơn', 16: 'Móc kép', 32: 'Móc ba', 64: 'Móc bốn' }
const CLEFS: [Clef, string, string][] = [['treble', '𝄞', 'Khoá Sol'], ['bass', '𝄢', 'Khoá Fa'], ['alto', '𝄡', 'Khoá Đô (alto)'], ['tenor', '𝄡', 'Khoá Đô (tenor)']]
const TIMES: [number, number][] = [[2, 4], [3, 4], [4, 4], [2, 2], [3, 8], [6, 8], [9, 8], [12, 8], [5, 4], [5, 8], [7, 8], [3, 2]]
const ACCIDENTALS: [number, string, string][] = [[-2, '𝄫', 'Giáng kép'], [-1, '♭', 'Giáng'], [0, '♮', 'Bình'], [1, '♯', 'Thăng'], [2, '𝄪', 'Thăng kép']]

type Sel = { staff: number; ids: string[]; note?: number } | null
type Caret = { staff: number; t: number }
type Radial = { x: number; y: number; staff: number; evId: string; note?: number; base: Score; steps: number; hover: string | null }
const RADIAL_ITEMS: { id: string; label: string; angle: number; title: string }[] = [
  { id: 'sharp', label: '♯', angle: 0, title: 'Thăng' },
  { id: 'dot', label: '·', angle: -45, title: 'Chấm dôi' },
  { id: 'natural', label: '♮', angle: -135, title: 'Bình' },
  { id: 'flat', label: '♭', angle: 180, title: 'Giáng' },
  { id: 'delete', label: '✕', angle: 135, title: 'Xoá' },
  { id: 'tie', label: '⁀', angle: 45, title: 'Nối' },
]
const RADIUS = 74

/** The page that opens a score and edits it: white paper, black staves, a floating palette and touch gestures. */
export function ComposePage() {
  const back = useBack('/theory')
  const [list, setList] = useState<Score[]>(loadAll)
  const [currentId, setCurrentId] = useState<string>(() => loadPref(CURRENT, ''))
  const score = list.find((s) => s.id === currentId) ?? list[0]
  const [past, setPast] = useState<Score[]>([])
  const [future, setFuture] = useState<Score[]>([])

  const [dur, setDur] = useState<DurName>(4)
  const [dots, setDots] = useState(0)
  const [restMode, setRestMode] = useState(false)
  const [chordMode, setChordMode] = useState(false)
  const [tupletMode, setTupletMode] = useState<number | null>(null) // 3, 5 or 6 while on
  const [voice, setVoice] = useState(1) // the voice a tap on a staff writes into
  const [entry, setEntry] = useState<{ kind: 'lyric' | 'harm'; lane: number; evId: string; text: string } | null>(null)
  const [flash, setFlash] = useState('')
  useEffect(() => {
    if (!flash) return
    const t = window.setTimeout(() => setFlash(''), 2600)
    return () => clearTimeout(t)
  }, [flash])
  const [armed, setArmed] = useState<number | null>(null) // accidental for the next note
  const [tieNext, setTieNext] = useState(false)
  const [caret, setCaret] = useState<Caret>({ staff: 0, t: 0 })
  const [sel, setSel] = useState<Sel>(null)
  const [zoom, setZoom] = useState<number>(() => loadPref('compose:zoom', 52))
  const [ivory, setIvory] = useState<boolean>(() => loadPref('compose:ivory', false))
  const [showKeys, setShowKeys] = useState<boolean>(() => loadPref('compose:keys', true))
  const [menu, setMenu] = useState(false)
  const [playing, setPlaying] = useState(false)
  const stopPlay = useRef<(() => void) | null>(null)
  const playToken = useRef(0) // a press of Stop while the strings load cancels the start

  const [tk, setTk] = useState<VerovioToolkit | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let live = true
    engraver()
      .then((t) => live && setTk(t))
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
  }, [])
  // the first visit fetches the engraver (several MB): the Lamar curtain covers the wait
  usePageLoading(!tk && !failed)
  useEffect(() => saveAll(list), [list])
  // a score with strings fetches their samples as it opens, so the first tap already sounds right
  const instKey = (score.instruments ?? []).filter((i) => i !== 'piano').join()
  useEffect(() => {
    if (instKey) void loadInstruments(instKey.split(',') as Inst[])
  }, [instKey])
  useEffect(() => savePref(CURRENT, score.id), [score.id])
  useEffect(() => savePref('compose:zoom', zoom), [zoom])
  useEffect(() => savePref('compose:ivory', ivory), [ivory])
  useEffect(() => savePref('compose:keys', showKeys), [showKeys])
  useEffect(() => () => stopPlay.current?.(), [])

  /** Every edit goes through here: one undo step, saved, the caret kept inside the score. */
  const commit = useCallback(
    (next: Score) => {
      setPast((p) => [...p.slice(-199), score])
      setFuture([])
      setList((l) => l.map((s) => (s.id === score.id ? { ...next, updated: Date.now() } : s)))
    },
    [score],
  )
  const undo = () => {
    const prev = past[past.length - 1]
    if (!prev) return
    setPast((p) => p.slice(0, -1))
    setFuture((f) => [score, ...f])
    setList((l) => l.map((s) => (s.id === score.id ? prev : s)))
    setSel(null)
  }
  const redo = () => {
    const nx = future[0]
    if (!nx) return
    setFuture((f) => f.slice(1))
    setPast((p) => [...p, score])
    setList((l) => l.map((s) => (s.id === score.id ? nx : s)))
    setSel(null)
  }

  /* ---------- engraving ---------- */

  const paperRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(360)
  useEffect(() => {
    const el = paperRef.current
    if (!el) return
    // the sheet sits inside the paper's 10 px padding
    const ro = new ResizeObserver(() => setWidth(Math.max(260, Math.floor(el.clientWidth) - 20)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const bars = useMemo(() => layout(score), [score])
  const physOf = (lane: number) => staffOfLane(score, lane)
  const { svg, pieces } = useMemo(() => {
    if (!tk) return { svg: '', pieces: new Map<string, PieceInfo>() }
    const { mei, pieces } = toMei(score)
    return { svg: render(tk, mei, width, zoom), pieces }
  }, [tk, score, width, zoom])

  // selection marks and the caret are placed after the SVG is in the page
  const [caretBox, setCaretBox] = useState<{ x: number; y: number; h: number } | null>(null)
  // the engraving is put in by hand, only when it changes: React re-setting it would wipe the selection marks
  useLayoutEffect(() => {
    if (svgRef.current) svgRef.current.innerHTML = svg
  }, [svg])
  useLayoutEffect(() => {
    const root = svgRef.current
    if (!root) return
    root.querySelectorAll('.is-sel').forEach((e) => e.classList.remove('is-sel'))
    if (sel) {
      for (const [id, p] of pieces) {
        if (p.staff !== sel.staff || !sel.ids.includes(p.evId)) continue
        if (sel.note !== undefined && p.note !== sel.note) continue
        if (sel.note === undefined && p.note !== undefined) continue
        root.querySelector(`[data-id="${id}"]`)?.classList.add('is-sel')
      }
    }
    setCaretBox(caretGeometry(root, paperRef.current!, pieces, bars, caret, staffOfLane(score, caret.staff)))
  }, [svg, sel, caret, pieces, bars, score])

  /* ---------- input ---------- */

  const inputTicks = ticksOf(dur, dots)
  /** A note as it sounds on its staff's instrument (the double bass an octave down). */
  const sound = (notes: Note[], lane: number) => {
    const inst = instOf(score, staffOfLane(score, lane))
    if (notes.length) playNow(notes.map((n) => midiOf(n) + transposeOf(inst)), 0.6, 0, inst)
  }

  /**
   * Put a note (spelled `alter`, or by the armed accidental, or by the key signature) or a rest at `t` on a staff, or
   * add it to the chord just written when chord mode is on. The caret moves past it and a bar of room stays ahead.
   */
  const insert = (staff: number, t: number, d: number, alter?: number, from: Score = score) => {
    const bar = barAt(bars, Math.min(t, totalOf(from) - 1))
    const spelled = alter ?? armed ?? sigAlter(bar.key, ((d % 7) + 7) % 7)
    if (chordMode && !restMode) {
      const evs = from.staves[staff]
      const host = evs.find((e) => e.start + e.dur === t && e.notes.length) ?? evs.find((e) => e.start === t && e.notes.length)
      if (host) {
        const note: Note = fromDn(d, spelled)
        if (!host.notes.some((n) => midiOf(n) === midiOf(note))) {
          commit(updateEv(from, staff, host.id, (e) => ({ ...e, notes: [...e.notes, note].sort((a, b) => dn(a) - dn(b)) })))
          sound([note], staff)
        }
        setArmed(null)
        return
      }
    }
    const notes: Note[] = restMode ? [] : [{ ...fromDn(d, spelled), tie: tieNext }]
    // inside a tuplet the note fills the slot; with tuplet input on, the first note opens a new group
    let base = from
    let slot = from.staves[staff].find((e) => e.tup && e.start === t)
    if (!slot && tupletMode) {
      const kind = TUPLETS.find((x) => x.n === tupletMode)!
      const open = openTuplet(from, staff, t, inputTicks, kind.n, kind.base)
      if (!open) {
        setFlash(`${kind.label} ${DUR_LABEL[dur].toLowerCase()} không vừa phần còn lại của ô`)
        return
      }
      base = open.score
      slot = base.staves[staff].find((e) => e.tup?.g === open.g && e.start === t)
    }
    const { score: next } = slot ? writeAt(base, staff, t, slot.dur, notes, newId(), { tup: slot.tup }) : writeAt(base, staff, t, inputTicks, notes)
    const end = t + (slot ? slot.dur : inputTicks)
    const room = totalOf(next) - end < barAt(layout(next), Math.max(0, end - 1)).len ? normalized({ ...next, measures: next.measures + 1 }) : next
    commit(room)
    sound(notes, staff)
    setCaret({ staff, t: end })
    setSel(null)
    setArmed(null)
    setTieNext(false)
  }

  /** Apply to the selection, or arm it for the next note when nothing is selected. */
  const applyAlter = (alter: number) => {
    if (!sel) return setArmed((a) => (a === alter ? null : alter))
    let s = score
    for (const id of sel.ids)
      s = updateEv(s, sel.staff, id, (e) => ({ ...e, notes: e.notes.map((n, j) => (sel.note === undefined || sel.note === j ? { ...n, alter } : n)) }))
    commit(s)
    const ev = s.staves[sel.staff].find((e) => e.id === sel.ids[0])
    if (ev) sound(sel.note === undefined ? ev.notes : [ev.notes[sel.note]], sel.staff)
  }
  const applyDur = (d: DurName, dts = 0) => {
    setDur(d)
    setDots(dts)
    if (!sel) return
    if (inTuplet(sel)) return
    let s = score
    for (const id of sel.ids) s = resize(s, sel.staff, id, ticksOf(d, dts))
    commit(s)
  }
  /** A note inside a tuplet keeps its slot: the group must still add up to its length. */
  const inTuplet = (x: NonNullable<Sel>) => {
    const hit = score.staves[x.staff].some((e) => x.ids.includes(e.id) && e.tup)
    if (hit) setFlash('Nốt trong nhóm liên ba giữ nguyên trường độ — xoá nhóm (viết đè nốt thường) để đổi')
    return hit
  }
  const toggleDot = (n: number) => {
    if (!sel) return setDots((x) => (x === n ? 0 : n))
    if (inTuplet(sel)) return
    let s = score
    for (const id of sel.ids) {
      const e = s.staves[sel.staff].find((x) => x.id === id)
      if (!e) continue
      const one = spell(e.dur)
      const base = one.length === 1 ? DUR[one[0].dur] : e.dur
      s = resize(s, sel.staff, id, one.length === 1 && one[0].dots === n ? base : base * (n === 2 ? 1.75 : 1.5))
    }
    commit(s)
  }
  const toggleTie = () => {
    if (!sel) return setTieNext((x) => !x)
    let s = score
    for (const id of sel.ids) s = updateEv(s, sel.staff, id, (e) => ({ ...e, notes: e.notes.map((n, j) => (sel.note === undefined || sel.note === j ? { ...n, tie: !n.tie } : n)) }))
    commit(s)
  }
  const transpose = (steps: number, from = score, s0 = sel) => {
    if (!s0) return from
    let s = from
    for (const id of s0.ids) {
      const e = s.staves[s0.staff].find((x) => x.id === id)
      if (!e) continue
      const key = barAt(layout(s), e.start).key
      s = updateEv(s, s0.staff, id, (ev) => ({
        ...ev,
        notes: ev.notes.map((n, j) => {
          if (s0.note !== undefined && s0.note !== j) return n
          const d = dn(n) + steps
          return { ...n, ...fromDn(d, sigAlter(key, ((d % 7) + 7) % 7)) }
        }),
      }))
    }
    return s
  }
  const remove = () => {
    if (!sel) {
      // backspace in input: clear the event just before the caret and step back onto it
      const e = score.staves[caret.staff].find((x) => x.start + x.dur === caret.t && x.notes.length)
      if (!e) return
      commit(clearEv(score, caret.staff, e.id))
      setCaret({ ...caret, t: e.start })
      return
    }
    let s = score
    for (const id of sel.ids)
      s = sel.note !== undefined && (s.staves[sel.staff].find((e) => e.id === id)?.notes.length ?? 0) > 1
        ? updateEv(s, sel.staff, id, (e) => ({ ...e, notes: e.notes.filter((_, j) => j !== sel.note) }))
        : clearEv(s, sel.staff, id)
    commit(s)
    setSel(null)
  }
  const toRest = () => {
    if (!sel) return setRestMode((r) => !r)
    let s = score
    for (const id of sel.ids) s = clearEv(s, sel.staff, id)
    commit(s)
  }

  /** Clef, key, time and bar lines apply from the measure of the selection or caret. */
  const here = () => {
    const t = sel ? (score.staves[sel.staff].find((e) => e.id === sel.ids[0])?.start ?? caret.t) : caret.t
    return { bar: barAt(bars, Math.min(t, totalOf(score) - 1)).index, staff: physOf(sel?.staff ?? caret.staff) }
  }
  const setAttr = (f: (a: Score['attrs'][number], bar: number, staff: number) => Score['attrs'][number]) => {
    const { bar, staff } = here()
    if (bar === 0) {
      // the first measure's key, time and clefs are the score's own
      const { key, time, clefs, ...rest } = f({ ...score.attrs[0] }, 0, staff)
      commit(normalized({ ...score, key: key ?? score.key, time: time ?? score.time, clefs: score.clefs.map((c, i) => clefs?.[i] ?? c), attrs: { ...score.attrs, 0: rest } }))
      return
    }
    commit(normalized({ ...score, attrs: { ...score.attrs, [bar]: f({ ...score.attrs[bar] }, bar, staff) } }))
  }

  /* ---------- gestures on the paper ---------- */

  const [radial, setRadial] = useState<Radial | null>(null)
  const [range, setRange] = useState<{ staff: number; x0: number; x1: number; y: number; ox: number; oy: number } | null>(null)
  const g = useRef<{ x: number; y: number; id: number; at: number; hit: Element | null; timer: number; mode: 'tap' | 'radial' | 'range' | 'none' } | null>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinch = useRef<{ d0: number; z0: number } | null>(null)
  const [pinchScale, setPinchScale] = useState(1)
  const radialRef = useRef<Radial | null>(null)
  useLayoutEffect(() => {
    radialRef.current = radial
  }, [radial])

  // a held finger must not scroll the page once the ring is open or a range is being drawn
  useEffect(() => {
    const el = paperRef.current
    if (!el) return
    const stop = (e: TouchEvent) => {
      if (g.current?.mode === 'radial' || g.current?.mode === 'range' || pinch.current) e.preventDefault()
    }
    // a finger that starts on a note holds or drags it, never scrolls the page. One listener here rather than
    // touch-action on every note: thousands of touch regions made each repaint of a big score slow (layerize)
    const onNote = (e: TouchEvent) => {
      if ((e.target as Element).closest?.('[data-class="note"], [data-class="chord"]')) e.preventDefault()
    }
    el.addEventListener('touchmove', stop, { passive: false })
    el.addEventListener('touchstart', onNote, { passive: false })
    return () => {
      el.removeEventListener('touchmove', stop)
      el.removeEventListener('touchstart', onNote)
    }
  }, [])

  const onDown = (e: React.PointerEvent) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 2) {
      // two fingers: zoom
      if (g.current) clearTimeout(g.current.timer)
      g.current = null
      const [a, b] = [...pointers.current.values()]
      pinch.current = { d0: Math.hypot(a.x - b.x, a.y - b.y), z0: zoom }
      return
    }
    const hit = nearestElement(svgRef.current!, e.clientX, e.clientY)
    const timer = window.setTimeout(() => {
      const cur = g.current
      if (!cur || cur.mode !== 'tap' || !hit) return
      const p = pieces.get(hit.getAttribute('data-id') ?? '')
      if (!p) return
      const ev = score.staves[p.staff].find((x) => x.id === p.evId)
      if (!ev?.notes.length) return
      cur.mode = 'radial'
      setSel({ staff: p.staff, ids: [p.evId], note: p.note })
      setRadial({ x: cur.x, y: cur.y, staff: p.staff, evId: p.evId, note: p.note, base: score, steps: 0, hover: null })
      navigator.vibrate?.(12)
    }, 420)
    g.current = { x: e.clientX, y: e.clientY, id: e.pointerId, at: e.timeStamp, hit, timer, mode: 'tap' }
  }
  const onMove = (e: React.PointerEvent) => {
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pinch.current && pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      setPinchScale(Math.min(2, Math.max(0.5, Math.hypot(a.x - b.x, a.y - b.y) / pinch.current.d0)))
      return
    }
    const cur = g.current
    if (!cur || cur.id !== e.pointerId) return
    const dx = e.clientX - cur.x
    const dy = e.clientY - cur.y
    if (cur.mode === 'radial') {
      const r = radialRef.current
      if (!r) return
      // straight up or down moves the pitch; towards a petal picks it
      if (Math.abs(dx) < 26 && Math.abs(dy) > 16) {
        const steps = -Math.round(dy / 14)
        if (steps !== r.steps) {
          const s = transpose(steps, r.base, { staff: r.staff, ids: [r.evId], note: r.note })
          setList((l) => l.map((x) => (x.id === score.id ? s : x)))
          const ev = s.staves[r.staff].find((x) => x.id === r.evId)
          if (ev) sound(r.note === undefined ? ev.notes : [ev.notes[r.note]], r.staff)
        }
        setRadial({ ...r, steps, hover: null })
      } else if (Math.hypot(dx, dy) > 40) {
        const ang = (Math.atan2(dy, dx) * 180) / Math.PI
        const best = RADIAL_ITEMS.reduce((a, b) => (angDiff(b.angle, ang) < angDiff(a.angle, ang) ? b : a))
        setRadial({ ...r, hover: angDiff(best.angle, ang) < 30 ? best.id : null })
      } else setRadial({ ...r, hover: null })
      return
    }
    if (cur.mode === 'range') {
      setRange((rg) => (rg ? { ...rg, x1: e.clientX } : rg))
      return
    }
    if (cur.mode === 'tap' && Math.hypot(dx, dy) > 10) {
      clearTimeout(cur.timer)
      if (Math.abs(dx) > Math.abs(dy)) {
        const spot = staffAt(svgRef.current!, cur.x, cur.y)
        if (spot) {
          cur.mode = 'range'
          const pr = paperRef.current!.getBoundingClientRect()
          setRange({ staff: spot.staff, x0: cur.x, x1: e.clientX, y: cur.y, ox: pr.left, oy: pr.top - paperRef.current!.scrollTop })
          return
        }
      }
      cur.mode = 'none' // a vertical move is the page scrolling
    }
  }
  const onUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pinch.current) {
      if (pointers.current.size === 0) {
        setZoom(Math.round(Math.min(110, Math.max(26, pinch.current.z0 * pinchScale))))
        setPinchScale(1)
        pinch.current = null
      }
      return
    }
    const cur = g.current
    if (!cur || cur.id !== e.pointerId) return
    clearTimeout(cur.timer)
    g.current = null
    if (cur.mode === 'radial') {
      const r = radialRef.current
      setRadial(null)
      if (!r) return
      if (r.steps) {
        // the pitch was already changed live; make it one undo step from the score before the hold
        setPast((p) => [...p.slice(-199), r.base])
        setFuture([])
        return
      }
      const one = { staff: r.staff, ids: [r.evId], note: r.note }
      const act = r.hover
      if (!act) return
      const base = r.base
      const run = (s: Score) => {
        setPast((p) => [...p.slice(-199), base])
        setFuture([])
        setList((l) => l.map((x) => (x.id === score.id ? { ...s, updated: Date.now() } : x)))
      }
      const withNotes = (f: (n: Note) => Note) => updateEv(base, r.staff, r.evId, (ev) => ({ ...ev, notes: ev.notes.map((n, j) => (r.note === undefined || r.note === j ? f(n) : n)) }))
      if (act === 'sharp' || act === 'flat' || act === 'natural') run(withNotes((n) => ({ ...n, alter: act === 'sharp' ? 1 : act === 'flat' ? -1 : 0 })))
      else if (act === 'tie') run(withNotes((n) => ({ ...n, tie: !n.tie })))
      else if (act === 'delete') {
        const ev = base.staves[r.staff].find((x) => x.id === r.evId)
        run(r.note !== undefined && (ev?.notes.length ?? 0) > 1 ? updateEv(base, r.staff, r.evId, (x) => ({ ...x, notes: x.notes.filter((_, j) => j !== r.note) })) : clearEv(base, r.staff, r.evId))
        setSel(null)
      } else if (act === 'dot') {
        const ev = base.staves[r.staff].find((x) => x.id === r.evId)
        if (ev?.tup) setFlash('Nốt trong nhóm liên ba giữ nguyên trường độ')
        else if (ev) {
          const sp = spell(ev.dur)
          const plainDur = sp.length === 1 ? DUR[sp[0].dur] : ev.dur
          run(resize(base, r.staff, r.evId, sp.length === 1 && sp[0].dots ? plainDur : plainDur * 1.5))
        }
      }
      setSel(one)
      return
    }
    if (cur.mode === 'range') {
      const rg = range
      setRange(null)
      if (rg) {
        const lo = Math.min(rg.x0, rg.x1)
        const hi = Math.max(rg.x0, rg.x1)
        const ids = new Set<string>()
        for (const [id, p] of pieces) {
          if (p.staff !== laneIndex(score, rg.staff, voice) || p.note !== undefined) continue
          const r = svgRef.current!.querySelector(`[data-id="${id}"]`)?.getBoundingClientRect()
          if (r && r.right >= lo && r.left <= hi) ids.add(p.evId)
        }
        const lane = laneIndex(score, rg.staff, voice)
        const evs = lane < 0 ? [] : score.staves[lane].filter((x) => ids.has(x.id) && x.notes.length).map((x) => x.id)
        setSel(evs.length ? { staff: lane, ids: evs } : null)
      }
      return
    }
    if (cur.mode !== 'tap' || e.timeStamp - cur.at > 600) return
    tap(cur.x, cur.y, cur.hit)
  }

  /** A tap selects what it lands on; on an empty part of a staff it writes a note at that pitch and beat. */
  const tap = (x: number, y: number, hit: Element | null) => {
    if (hit) {
      const p = pieces.get(hit.getAttribute('data-id') ?? '')
      const ev = p && score.staves[p.staff].find((e) => e.id === p.evId)
      if (p && ev?.notes.length) {
        setSel({ staff: p.staff, ids: [p.evId], note: p.note })
        setCaret({ staff: p.staff, t: ev.start })
        setVoice(voiceOfLane(score, p.staff))
        sound(p.note === undefined ? ev.notes : [ev.notes[p.note]], p.staff)
        return
      }
    }
    const spot = staffAt(svgRef.current!, x, y)
    if (!spot) {
      setSel(null)
      return
    }
    const bar = bars[spot.bar]
    const d = CLEF_BOTTOM[bar.clefs[spot.staff]] + Math.round((spot.bottom - y) / (spot.space / 2))
    // the chosen voice on the tapped staff (its line is added the first time it is written in)
    const { score: withLane, lane } = ensureLane(score, spot.staff, voice)
    const t = timeAt(svgRef.current!, pieces, lane, spot.staff, spot.bar, x, inputTicks, bars)
    setSel(null)
    insert(lane, t, d, undefined, withLane)
  }

  /* ---------- marks: on the selection, or on the note just written ---------- */

  const targets = (): { staff: number; ids: string[] } | null => {
    if (sel) return { staff: sel.staff, ids: sel.ids }
    const last = [...score.staves[caret.staff]].reverse().find((e) => e.start < caret.t && e.notes.length)
    return last ? { staff: caret.staff, ids: [last.id] } : null
  }
  const target = (() => {
    const tg = targets()
    return tg ? score.staves[tg.staff].find((e) => e.id === tg.ids[0]) : undefined
  })()
  const onTargets = (f: (e: Ev, all: Ev[]) => Ev) => {
    const tg = targets()
    if (!tg) return setFlash('Chọn một nốt (hoặc viết một nốt) trước đã')
    const all = score.staves[tg.staff].filter((e) => tg.ids.includes(e.id))
    let s = score
    for (const id of tg.ids) s = updateEv(s, tg.staff, id, (e) => f(e, all))
    commit(s)
  }
  const toggleArtic = (a: Artic) =>
    onTargets((e, all) => {
      const on = all.every((x) => x.artic?.includes(a))
      const rest = (e.artic ?? []).filter((x) => x !== a)
      return { ...e, artic: on ? rest : [...rest, a] }
    })
  const toggleOrn = (o: Orn) => onTargets((e, all) => ({ ...e, orn: all.every((x) => x.orn === o) ? undefined : o }))
  const toggleFlag = (k: 'fermata' | 'arpeg') => onTargets((e, all) => ({ ...e, [k]: !all.every((x) => x[k]) }))
  const setDyn = (d: Dyn) => {
    const tg = targets()
    if (!tg) return setFlash('Chọn một nốt (hoặc viết một nốt) trước đã')
    commit(updateEv(score, tg.staff, tg.ids[0], (e) => ({ ...e, dyn: e.dyn === d ? undefined : d })))
  }
  const setText = (kind: 'tempo' | 'expr', preset?: string) => {
    const tg = targets()
    if (!tg) return setFlash('Chọn một nốt (hoặc viết một nốt) trước đã')
    let text = preset
    if (text === undefined) {
      const ask = window.prompt(kind === 'tempo' ? 'Chữ nhịp độ — thêm số nếu muốn máy nghe theo (vd. Andante ♩ = 72)' : 'Chỉ dẫn diễn tấu (vd. dolce, con fuoco)', target?.text?.kind === kind ? target.text.text : '')
      if (ask === null) return
      text = ask.trim()
    }
    const bpm = kind === 'tempo' ? Number(/(\d{2,3})\s*$/.exec(text)?.[1]) || undefined : undefined
    commit(updateEv(score, tg.staff, tg.ids[0], (e) => ({ ...e, text: text ? { kind, text, bpm } : undefined })))
  }
  const toggleSpan = (kind: Span['kind']) => {
    const tg = targets()
    if (!tg) return setFlash('Chọn các nốt cần nối trước đã')
    const evs = score.staves[tg.staff]
    const chosen = evs.filter((e) => tg.ids.includes(e.id)).sort((a, b) => a.start - b.start)
    const from = chosen[0]
    // one note chosen: to the next note on the staff
    const to = chosen.length > 1 ? chosen[chosen.length - 1] : evs.find((e) => e.start > from.start && e.notes.length)
    if (!to) return setFlash('Cần ít nhất hai nốt')
    const same = score.spans.find((sp) => sp.staff === tg.staff && sp.kind === kind && sp.from === from.id && sp.to === to.id)
    commit({ ...score, spans: same ? score.spans.filter((sp) => sp !== same) : [...score.spans, { id: newId(), kind, staff: tg.staff, from: from.id, to: to.id }] })
  }
  const toggleNav = (k: 'segno' | 'coda' | Jump) =>
    setAttr((a) => (k === 'segno' || k === 'coda' ? { ...a, [k]: !a[k] } : { ...a, jump: a.jump === k ? undefined : k }))

  /* ---------- lyrics and chord symbols: typed note after note ---------- */

  const startEntry = (kind: 'lyric' | 'harm') => {
    const tg = targets()
    const lane = tg?.staff ?? caret.staff
    const ev = tg ? score.staves[lane].find((e) => e.id === tg.ids[0]) : score.staves[lane].find((e) => e.notes.length)
    if (!ev) return setFlash('Viết vài nốt trước đã')
    setEntry({ kind, lane, evId: ev.id, text: (kind === 'lyric' ? ev.lyric?.text : ev.harm) ?? '' })
    setSel({ staff: lane, ids: [ev.id] })
  }
  /** Keep what was typed for this note; with `move`, go on to the next note (a hyphen joins the syllables). */
  const entryNext = (text: string, hyph: boolean, move: boolean) => {
    if (!entry) return
    const t = text.trim()
    const s = updateEv(score, entry.lane, entry.evId, (e) =>
      entry.kind === 'lyric' ? { ...e, lyric: t ? { text: t, hyph: hyph || undefined } : undefined } : { ...e, harm: t || undefined },
    )
    commit(s)
    const evs = s.staves[entry.lane]
    const cur = evs.find((e) => e.id === entry.evId)
    const next = move && cur ? evs.find((e) => e.start > cur.start && e.notes.length) : undefined
    if (!next) {
      setEntry(null)
      return
    }
    setEntry({ ...entry, evId: next.id, text: (entry.kind === 'lyric' ? next.lyric?.text : next.harm) ?? '' })
    setSel({ staff: entry.lane, ids: [next.id] })
  }

  /* ---------- playback ---------- */

  const togglePlay = () => {
    playToken.current++
    if (playing) {
      stopPlay.current?.()
      setPlaying(false)
      return
    }
    const token = playToken.current
    const from = sel ? (score.staves[sel.staff].find((e) => e.id === sel.ids[0])?.start ?? 0) : 0
    const { steps, anchors } = soundOf(score, from)
    setPlaying(true)
    // string samples come on first use: wait for them so the opening is not played on the piano
    const insts = [...new Set(steps.map((x) => x.inst))]
    const ready = insts.some((i) => i !== 'piano') ? (setFlash('Đang tải tiếng nhạc cụ…'), loadInstruments(insts)) : null
    if (ready) {
      void ready.then(() => {
        setFlash('')
        if (token === playToken.current) start(steps, anchors)
      })
      return
    }
    start(steps, anchors)
  }
  const start = (steps: ReturnType<typeof soundOf>['steps'], anchors: ReturnType<typeof soundOf>['anchors']) => {
    const staff = caret.staff
    const total = totalOf(score)
    stopPlay.current = playSequence(steps, {
      // the caret follows the bars as they sound, back to the segno or the start when the score repeats
      onFrame: (sec) => {
        const a = [...anchors].reverse().find((x) => x.sec <= sec) ?? anchors[0]
        // the caret steps from beat to beat: a new object every frame re-rendered the editor 60 times a second, and
        // each move repaints the whole score, which is heavy for a big orchestral page
        if (a) {
          const t = Math.min(total, a.tick + Math.floor((sec - a.sec) / a.tps / 240) * 240)
          setCaret((c) => (c.t === t && c.staff === staff ? c : { staff, t }))
        }
      },
      onEnd: () => {
        setPlaying(false)
        stopPlay.current = null
      },
    })
  }

  /* ---------- keyboard shortcuts on a computer (Sibelius-like) ---------- */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('input, textarea, select')) return
      const k = e.key
      if ((e.metaKey || e.ctrlKey) && k.toLowerCase() === 'z') {
        e.preventDefault()
        return e.shiftKey ? redo() : undo()
      }
      if (/^[a-gA-G]$/.test(k)) {
        // the octave nearest the last note written on this staff
        const step = 'cdefgab'.indexOf(k.toLowerCase())
        const prev = [...score.staves[caret.staff]].reverse().find((x) => x.start < caret.t && x.notes.length)
        const ref = prev ? dn(prev.notes[0]) : CLEF_BOTTOM[barAt(bars, caret.t).clefs[physOf(caret.staff)]] + 4
        let best = step + 7 * Math.floor(ref / 7)
        for (const c of [best - 7, best + 7]) if (Math.abs(c - ref) < Math.abs(best - ref)) best = c
        insert(caret.staff, caret.t, best)
      } else if (/^[1-7]$/.test(k)) applyDur(DUR_NAMES[7 - +k], 0)
      else if (k === '.') toggleDot(1)
      else if (k === '0') toRest()
      else if (k === '+' || k === '=') applyAlter(k === '+' ? 1 : 0)
      else if (k === '-') applyAlter(-1)
      else if (k === 'Backspace' || k === 'Delete') remove()
      else if (k === 'ArrowUp' || k === 'ArrowDown') {
        if (!sel) return
        e.preventDefault()
        commit(transpose(k === 'ArrowUp' ? (e.ctrlKey ? 7 : 1) : e.ctrlKey ? -7 : -1))
      } else if (k === 'ArrowRight' || k === 'ArrowLeft') {
        e.preventDefault()
        const evs = score.staves[caret.staff]
        const i = evs.findIndex((x) => x.start >= caret.t)
        const j = k === 'ArrowRight' ? Math.min(evs.length - 1, (i < 0 ? evs.length : i) + 1) : Math.max(0, (i < 0 ? evs.length : i) - 1)
        setCaret({ ...caret, t: evs[j]?.start ?? 0 })
        setSel(evs[j]?.notes.length ? { staff: caret.staff, ids: [evs[j].id] } : null)
      } else if (k === 'Escape') setSel(null)
      else if (k === ' ') {
        e.preventDefault()
        togglePlay()
      } else return
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  /* ---------- scores ---------- */

  const newScore = (t: Template) => {
    const s = fromTemplate(t)
    setList((l) => [s, ...l])
    setCurrentId(s.id)
    setPast([])
    setFuture([])
    setCaret({ staff: 0, t: 0 })
    setSel(null)
    setMenu(false)
  }
  /* ---------- files in and out ---------- */

  const save = (data: BlobPart, type: string, name: string) => {
    const url = URL.createObjectURL(new Blob([data], { type }))
    const a = Object.assign(document.createElement('a'), { href: url, download: name })
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 10_000)
  }
  const exportXml = () => save(toMusicXml(score), 'application/vnd.recordare.musicxml+xml', fileName(score, 'musicxml'))
  const exportMidi = () => save(toMidi(score), 'audio/midi', fileName(score, 'mid'))
  /** The browser's print dialog, with only the engraved A4 pages in the document (Lưu thành PDF there). */
  const printScore = () => {
    if (!tk) return
    const pages = renderPages(tk, toMei(score).mei)
    // the screen keeps its SVG; the next edit sets the screen options on the toolkit again (render)
    document.getElementById('score-print')?.remove()
    const root = Object.assign(document.createElement('div'), { id: 'score-print' })
    root.innerHTML = pages.map((p) => `<div>${p}</div>`).join('')
    document.body.appendChild(root)
    document.documentElement.classList.add('is-printing-score')
    const done = () => {
      document.documentElement.classList.remove('is-printing-score')
      root.remove()
    }
    window.addEventListener('afterprint', done, { once: true })
    setMenu(false)
    setTimeout(() => window.print(), 50)
  }
  const importFile = async (file: File) => {
    try {
      const text = /\.mxl$/i.test(file.name) ? await unzipMxl(await file.arrayBuffer()) : await file.text()
      const s = fromMusicXml(text, file.name.replace(/\.(musicxml|xml|mxl)$/i, ''))
      setList((l) => [s, ...l])
      setCurrentId(s.id)
      setPast([])
      setFuture([])
      setCaret({ staff: 0, t: 0 })
      setSel(null)
      setMenu(false)
      setFlash(`Đã mở “${s.title}”`)
    } catch (e) {
      setMenu(false)
      setFlash(e instanceof Error ? e.message : 'Không mở được tệp này')
    }
  }

  /** A staff's sound; a staff named after its old instrument takes the new name, and a string its usual clef. */
  const setInstrument = (staff: number, inst: Inst) => {
    const old = instOf(score, staff)
    const meta = INSTRUMENTS.find((x) => x.id === inst)!
    const oldLabel = INSTRUMENTS.find((x) => x.id === old)!.label
    const label = score.labels?.[staff]
    const labels = !label || label === oldLabel ? score.clefs.map((_, i) => (i === staff ? (inst === 'piano' ? '' : meta.label) : score.labels?.[i] ?? '')) : score.labels
    commit({
      ...score,
      instruments: score.clefs.map((_, i) => (i === staff ? inst : instOf(score, i))),
      labels: labels?.some(Boolean) ? labels : undefined,
      clefs: inst === 'piano' ? score.clefs : score.clefs.map((c, i) => (i === staff ? meta.clef : c)),
    })
    if (inst !== 'piano') void loadInstruments([inst])
  }

  const openScore = (id: string) => {
    setCurrentId(id)
    setPast([])
    setFuture([])
    setCaret({ staff: 0, t: 0 })
    setSel(null)
    setMenu(false)
  }
  const deleteScore = () => {
    if (!window.confirm(`Xoá "${score.title}"? Không hoàn tác được.`)) return
    const rest = list.filter((s) => s.id !== score.id)
    const next = rest.length ? rest : [blank()]
    setList(next)
    openScore(next[0].id)
  }

  const selEv: Ev | undefined = sel ? score.staves[sel.staff].find((e) => e.id === sel.ids[0]) : undefined
  const status = flash ? flash : sel
    ? selEv?.notes.length
      ? `${sel.ids.length > 1 ? `${sel.ids.length} nốt · ` : ''}${(sel.note === undefined ? selEv.notes : [selEv.notes[sel.note]]).map(pitchName).join(' + ')} · ô ${barAt(bars, selEv.start).index + 1}`
      : ''
    : `Nhập: ${restMode ? 'dấu lặng' : 'nốt'} ${DUR_LABEL[dur].toLowerCase()}${dots ? ' ' + '·'.repeat(dots) : ''}${armed !== null ? ` ${ACCIDENTALS.find((a) => a[0] === armed)?.[1]}` : ''}${chordMode ? ' · hợp âm' : ''}${tupletMode ? ` · liên ${tupletMode}` : ''}${voice > 1 ? ` · bè ${voice}` : ''} · ô ${barAt(bars, Math.min(caret.t, totalOf(score) - 1)).index + 1}`

  return (
    <div className="cmp-page">
      <header className="cmp-top">
        <button onClick={back} aria-label="Quay lại" className="cmp-icon">
          <ArrowLeftIcon width={18} height={18} />
        </button>
        <button className="cmp-title" onClick={() => {
          const t = window.prompt('Tên bản nhạc', score.title)
          if (t?.trim()) commit({ ...score, title: t.trim() })
        }}>{score.title}</button>
        <button className="cmp-icon" onClick={undo} disabled={!past.length} aria-label="Hoàn tác">↶</button>
        <button className="cmp-icon" onClick={redo} disabled={!future.length} aria-label="Làm lại">↷</button>
        <button className={clsx('cmp-icon cmp-play', playing && 'is-on')} onClick={togglePlay} aria-label={playing ? 'Dừng' : 'Nghe'}>{playing ? '■' : '▶'}</button>
        <button className="cmp-icon" onClick={() => setMenu(true)} aria-label="Bản nhạc và tuỳ chọn">⋯</button>
      </header>
      <p className="cmp-status" aria-live="polite">{status}</p>

      <div
        ref={paperRef}
        className={clsx('cmp-paper', ivory && 'is-ivory')}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={(e) => {
          // the browser took the gesture over (it began a scroll): a ring or range already open ends as if released
          if (g.current?.mode === 'radial' || g.current?.mode === 'range') return onUp(e)
          pointers.current.delete(e.pointerId)
          if (g.current) clearTimeout(g.current.timer)
          g.current = null
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {!tk && <p className="cmp-loading">{failed ? 'Không nạp được bộ khắc nhạc — kiểm tra mạng rồi mở lại trang.' : 'Đang nạp bộ khắc nhạc…'}</p>}
        <div ref={svgRef} className="cmp-svg" style={pinchScale !== 1 ? { transform: `scale(${pinchScale})`, transformOrigin: 'top center' } : undefined} />
        {caretBox && !sel && <span className={clsx('cmp-caret', playing && 'is-playing')} style={{ transform: `translate(${caretBox.x}px, ${caretBox.y}px)`, height: caretBox.h }} aria-hidden />}
        {range && <span className="cmp-range" style={{ left: Math.min(range.x0, range.x1) - range.ox, width: Math.abs(range.x1 - range.x0), top: range.y - range.oy - 40 }} aria-hidden />}
      </div>

      {radial && (
        <div className="cmp-radial" style={{ left: radial.x, top: radial.y }} aria-hidden>
          <span className="cmp-radial-hub">{(() => {
            const ev = score.staves[radial.staff].find((e) => e.id === radial.evId)
            return ev ? (radial.note === undefined ? ev.notes : [ev.notes[radial.note]]).map(pitchName).join(' ') : ''
          })()}<small>↕ kéo để đổi cao độ</small></span>
          {RADIAL_ITEMS.map((it) => (
            <span
              key={it.id}
              className={clsx('cmp-petal', radial.hover === it.id && 'is-on')}
              style={{ transform: `translate(${Math.cos((it.angle * Math.PI) / 180) * RADIUS}px, ${Math.sin((it.angle * Math.PI) / 180) * RADIUS}px)` }}
            >
              <b>{it.label}</b>
              <small>{it.title}</small>
            </span>
          ))}
        </div>
      )}

      <Palette
        dur={dur}
        dots={dots}
        restMode={restMode}
        chordMode={chordMode}
        armed={armed}
        tieNext={tieNext}
        hasSel={!!sel}
        selEv={selEv}
        bars={bars}
        here={here}
        onDur={applyDur}
        onDot={toggleDot}
        onRest={toRest}
        onChord={() => setChordMode((c) => !c)}
        onTie={toggleTie}
        onAlter={applyAlter}
        onUp={() => sel && commit(transpose(1))}
        onDown={() => sel && commit(transpose(-1))}
        onDelete={remove}
        onClef={(c) => setAttr((a, _b, st) => ({ ...a, clefs: { ...a.clefs, [st]: c } }))}
        onKey={(k) => setAttr((a) => ({ ...a, key: k }))}
        onTime={(t) => setAttr((a) => ({ ...a, time: t }))}
        onBarline={(kind) =>
          setAttr((a) => (kind === 'rptstart' ? { ...a, left: a.left ? undefined : 'rptstart' } : { ...a, right: kind as Right }))
        }
        onAddBar={() => commit(normalized({ ...score, measures: score.measures + 1 }))}
        target={target}
        spans={score.spans}
        tupletMode={tupletMode}
        attrs={score.attrs}
        onTuplet={(n) => setTupletMode((m) => (m === n ? null : n))}
        onSpan={toggleSpan}
        onArtic={toggleArtic}
        onOrn={toggleOrn}
        onFlag={toggleFlag}
        onDyn={setDyn}
        onText={setText}
        onNav={toggleNav}
        voice={voice}
        onVoice={(v) => {
          // the new voice starts at the bar of the note just written or chosen (as in Sibelius), not after it
          const tg = targets()
          const ev = tg && score.staves[tg.staff].find((e) => e.id === tg.ids[0])
          const t = ev ? barAt(bars, ev.start).start : caret.t
          const { score: withLane, lane } = ensureLane(score, physOf(tg?.staff ?? caret.staff), v)
          if (withLane !== score) commit(withLane)
          setVoice(v)
          setSel(null)
          setCaret({ staff: lane, t })
        }}
        onEntry={startEntry}
        onRemoveBar={() => {
          if (score.measures <= 1) return
          const lastBar = bars[bars.length - 1]
          const busy = score.staves.some((evs) => evs.some((e) => e.notes.length && e.start + e.dur > lastBar.start))
          if (busy && !window.confirm('Ô cuối còn nốt. Vẫn bỏ?')) return
          commit(normalized({ ...score, measures: score.measures - 1 }))
        }}
      />

      {entry && (
        <EntryBar
          entry={entry}
          where={(() => {
            const ev = score.staves[entry.lane].find((e) => e.id === entry.evId)
            return ev ? `${ev.notes.map(pitchName).join(' + ')} · ô ${barAt(bars, ev.start).index + 1}` : ''
          })()}
          onText={(text) => setEntry({ ...entry, text })}
          onNext={entryNext}
          onClose={() => setEntry(null)}
        />
      )}
      {showKeys && !entry && (
        <Keys
          staff={caret.staff}
          clef={barAt(bars, Math.min(caret.t, totalOf(score) - 1)).clefs[physOf(caret.staff)]}
          keySig={barAt(bars, Math.min(caret.t, totalOf(score) - 1)).key}
          onKey={(d, alter) => insert(caret.staff, caret.t, d, alter)}
        />
      )}

      {menu && (
        <Sheet onClose={() => setMenu(false)}>
          <h2>Bản nhạc của tôi</h2>
          <ul className="cmp-list">
            {list.map((s) => (
              <li key={s.id}>
                <button className={clsx(s.id === score.id && 'is-on')} onClick={() => openScore(s.id)}>
                  <b>{s.title}</b>
                  <small>{s.instruments?.some((i) => i !== 'piano') ? 'Hoà tấu' : s.labels?.length ? 'Hợp xướng' : s.clefs.length > 1 ? 'Khuông đôi' : 'Khuông đơn'} · {s.measures} ô · {new Date(s.updated).toLocaleDateString('vi-VN')}</small>
                </button>
              </li>
            ))}
          </ul>
          <div className="cmp-row">
            {TEMPLATES.map((t) => (
              <button key={t.id} onClick={() => newScore(t.id)}>+ {t.label}</button>
            ))}
          </div>
          <h2>Nhạc cụ</h2>
          <div className="cmp-insts">
            {score.clefs.map((_, i) => (
              <label key={i} className="cmp-select">
                <span>{score.labels?.[i] || `Khuông ${i + 1}`}</span>
                <select aria-label={`Nhạc cụ khuông ${i + 1}`} value={instOf(score, i)} onChange={(e) => setInstrument(i, e.target.value as Inst)}>
                  {INSTRUMENTS.map((x) => (
                    <option key={x.id} value={x.id}>{x.label}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
          <h2>Xuất – nhập</h2>
          <div className="cmp-row">
            <button onClick={exportXml}>MusicXML</button>
            <button onClick={exportMidi}>MIDI</button>
            <button onClick={printScore} disabled={!tk}>In / PDF</button>
            <label className="cmp-file">
              Mở MusicXML…
              <input type="file" accept=".musicxml,.xml,.mxl,application/vnd.recordare.musicxml+xml,application/vnd.recordare.musicxml" onChange={(e) => {
                const f = e.target.files?.[0]
                e.target.value = ''
                if (f) void importFile(f)
              }} />
            </label>
          </div>
          <p className="cmp-help">MusicXML mở được trong Sibelius, MuseScore, Finale, Dorico. MIDI phát đúng như nút Nghe (kể cả nhắc lại). PDF: chọn “Lưu thành PDF” trong hộp thoại in.</p>
          <h2>Tuỳ chọn</h2>
          <div className="cmp-row">
            <label>Nhịp độ ♩ = <input type="number" min={20} max={300} value={score.tempo} onChange={(e) => commit({ ...score, tempo: Math.max(20, Math.min(300, +e.target.value || 80)) })} /></label>
          </div>
          <div className="cmp-row">
            <span>Cỡ nhạc</span>
            <button onClick={() => setZoom((z) => Math.max(26, z - 6))}>−</button>
            <b>{zoom}%</b>
            <button onClick={() => setZoom((z) => Math.min(110, z + 6))}>+</button>
          </div>
          <div className="cmp-row">
            <button className={clsx(!ivory && 'is-on')} onClick={() => setIvory(false)}>Giấy trắng</button>
            <button className={clsx(ivory && 'is-on')} onClick={() => setIvory(true)}>Giấy ngà</button>
            <button className={clsx(showKeys && 'is-on')} onClick={() => setShowKeys((k) => !k)}>Phím đàn</button>
          </div>
          <div className="cmp-row">
            <button className="is-danger" onClick={deleteScore}>Xoá bản này</button>
          </div>
          <p className="cmp-help">
            Chạm lên khuông để đặt nốt đúng cao độ chỗ chạm. Chạm vào nốt để chọn. Nhấn giữ một nốt: vòng lựa chọn hiện ra — trượt tới mục rồi nhả tay, hoặc kéo thẳng lên xuống để đổi cao độ. Kéo ngang trên khuông để chọn nhiều nốt. Hai ngón để phóng to, thu nhỏ. Máy tính: A – G đặt nốt, 1 – 7 trường độ (7 = tròn), dấu chấm = chấm dôi, + − = thăng giáng, 0 = dấu lặng, mũi tên, Ctrl+Z, phím cách để nghe.
          </p>
          <p className="cmp-help">Bộ khắc nhạc: Verovio (giấy phép LGPL-3.0). Tiếng dàn nhạc (dây, kèn gỗ, kèn đồng): <a href="https://versilian-studios.com/vsco-community/" target="_blank" rel="noreferrer">VSCO 2: Community Edition</a> của Versilian Studios (CC0).</p>
        </Sheet>
      )}
    </div>
  )

}

/* ---------- geometry read from the engraved SVG ---------- */

const angDiff = (a: number, b: number) => {
  const d = Math.abs(a - b) % 360
  return d > 180 ? 360 - d : d
}

/** The note, chord note or rest nearest to a point, if it is within reach of a finger. */
function nearestElement(root: HTMLElement, x: number, y: number): Element | null {
  let best: Element | null = null
  let bestD = 10
  root.querySelectorAll('[data-class="note"],[data-class="rest"],[data-class="mRest"]').forEach((el) => {
    const r = el.querySelector(':scope > .notehead, :scope > use, :scope > g')?.getBoundingClientRect() ?? el.getBoundingClientRect()
    const dx = Math.max(r.left - x, 0, x - r.right)
    const dy = Math.max(r.top - y, 0, y - r.bottom)
    const d = Math.hypot(dx, dy)
    if (d < bestD) {
      bestD = d
      best = el
    }
  })
  return best
}

type Spot = { bar: number; staff: number; top: number; bottom: number; space: number; left: number; right: number }

/** Which staff of which measure a point is on, with that staff's line positions (screen pixels). */
function staffAt(root: HTMLElement, x: number, y: number): Spot | null {
  let best: Spot | null = null
  let bestD = Infinity
  root.querySelectorAll('[data-class="measure"]').forEach((m) => {
    const mr = m.getBoundingClientRect()
    if (x < mr.left - 4 || x > mr.right + 4) return
    const bar = +(m.getAttribute('data-id') ?? 'm0').slice(1)
    m.querySelectorAll(':scope > [data-class="staff"]').forEach((st, staff) => {
      const lines = [...st.querySelectorAll(':scope > path')].slice(0, 5).map((p) => p.getBoundingClientRect())
      if (lines.length < 5) return
      const top = (lines[0].top + lines[0].bottom) / 2
      const bottom = (lines[4].top + lines[4].bottom) / 2
      const space = (bottom - top) / 4
      if (y < top - space * 5 || y > bottom + space * 5) return
      const d = Math.abs(y - (top + bottom) / 2)
      if (d < bestD) {
        bestD = d
        best = { bar, staff, top, bottom, space, left: lines[0].left, right: lines[0].right }
      }
    })
  })
  return best
}

/** The time a point in a measure stands for: the start of the element under it, finer inside a long rest. */
function timeAt(root: HTMLElement, pieces: Map<string, PieceInfo>, staff: number, phys: number, bar: number, x: number, grid: number, bars: ReturnType<typeof layout>): number {
  const here = [...pieces.entries()].filter(([, p]) => p.staff === staff && p.bar === bar && p.note === undefined).sort((a, b) => a[1].start - b[1].start)
  const b = bars[bar]
  if (!here.length) return b.start
  const xs = here.map(([id]) => root.querySelector(`[data-id="${id}"]`)?.getBoundingClientRect())
  // the space after an element belongs to the next one: once past its right edge, the finger is on the next beat
  let i = 0
  for (let k = 1; k < here.length; k++) {
    const a = xs[k - 1]
    if (a && x > a.right + 4) i = k
  }
  const [id, p] = here[i]
  const r = xs[i]
  const el = root.querySelector(`[data-id="${id}"]`)
  // inside a rest longer than the note being written, place it where the finger is, on the grid
  if (r && el && (el.getAttribute('data-class') === 'rest' || el.getAttribute('data-class') === 'mRest') && p.dur > grid) {
    const measure = root.querySelector(`[data-id="m${bar}"]`)?.getBoundingClientRect()
    const left = el.getAttribute('data-class') === 'mRest' && measure ? contentLeft(root, bar, phys) ?? measure.left : r.left
    const right = xs[i + 1]?.left ?? measure?.right ?? r.right
    const f = Math.min(0.999, Math.max(0, (x - left) / Math.max(1, right - left)))
    const off = Math.floor((f * p.dur) / grid) * grid
    return p.start + Math.min(off, p.dur - grid > 0 ? p.dur - grid : 0)
  }
  return p.start
}

/** Where the notes of a measure may begin: after a clef, key or time signature drawn at its start. */
function contentLeft(root: HTMLElement, bar: number, staff: number): number | null {
  const st = root.querySelectorAll(`[data-id="m${bar}"] > [data-class="staff"]`)[staff]
  if (!st) return null
  let left: number | null = null
  st.querySelectorAll(':scope > [data-class="clef"], :scope > [data-class="keySig"], :scope > [data-class="meterSig"]').forEach((e) => {
    left = Math.max(left ?? 0, e.getBoundingClientRect().right + 6)
  })
  return left ?? st.getBoundingClientRect().left + 6
}

/** The caret: a thin line across the caret's staff, just before the element at its time. */
function caretGeometry(root: HTMLElement, paper: HTMLElement, pieces: Map<string, PieceInfo>, bars: ReturnType<typeof layout>, c: Caret, phys: number) {
  if (!root.firstElementChild) return null
  const pr = paper.getBoundingClientRect()
  const total = bars.reduce((n, b) => n + b.len, 0)
  const bar = barAt(bars, Math.min(c.t, total - 1))
  const st = root.querySelectorAll(`[data-id="m${bar.index}"] > [data-class="staff"]`)[phys]
  if (!st) return null
  const lines = [...st.querySelectorAll(':scope > path')].slice(0, 5).map((p) => p.getBoundingClientRect())
  if (lines.length < 5) return null
  const top = lines[0].top
  const bottom = lines[4].bottom
  const here = [...pieces.entries()].filter(([, p]) => p.staff === c.staff && p.note === undefined && p.start <= c.t && c.t < p.start + p.dur)[0]
  let x: number
  if (c.t >= total) x = lines[0].right - 4
  else if (here) {
    const el = root.querySelector(`[data-id="${here[0]}"]`)
    const r = el?.getBoundingClientRect()
    if (r && here[1].start === c.t && el?.getAttribute('data-class') !== 'mRest') x = r.left - 4
    else {
      const left = contentLeft(root, bar.index, phys) ?? lines[0].left
      x = left + ((c.t - bar.start) / bar.len) * (lines[0].right - left)
    }
  } else x = lines[0].left
  const pad = (bottom - top) * 0.35
  return { x: x - pr.left, y: top - pad - pr.top + paper.scrollTop, h: bottom - top + pad * 2 }
}

/* ---------- the floating palette ---------- */

type PaletteProps = {
  dur: DurName
  dots: number
  restMode: boolean
  chordMode: boolean
  armed: number | null
  tieNext: boolean
  hasSel: boolean
  selEv?: Ev
  bars: ReturnType<typeof layout>
  here: () => { bar: number; staff: number }
  onDur: (d: DurName, dots?: number) => void
  onDot: (n: number) => void
  onRest: () => void
  onChord: () => void
  onTie: () => void
  onAlter: (a: number) => void
  onUp: () => void
  onDown: () => void
  onDelete: () => void
  onClef: (c: Clef) => void
  onKey: (k: number) => void
  onTime: (t: [number, number]) => void
  onBarline: (kind: Right | Left) => void
  onAddBar: () => void
  onRemoveBar: () => void
  target?: Ev
  spans: Span[]
  tupletMode: number | null
  attrs: Score['attrs']
  onTuplet: (n: number) => void
  onSpan: (k: Span['kind']) => void
  onArtic: (a: Artic) => void
  onOrn: (o: Orn) => void
  onFlag: (k: 'fermata' | 'arpeg') => void
  onDyn: (d: Dyn) => void
  onText: (kind: 'tempo' | 'expr', preset?: string) => void
  onNav: (k: 'segno' | 'coda' | Jump) => void
  voice: number
  onVoice: (v: number) => void
  onEntry: (k: 'lyric' | 'harm') => void
}
const TABS = [['notes', 'Nốt'], ['acc', 'Dấu hoá'], ['link', 'Liên kết'], ['artic', 'Kỹ thuật'], ['dyn', 'Sắc thái'], ['text', 'Chữ'], ['words', 'Lời · Hợp âm'], ['sig', 'Khoá · Giọng · Nhịp'], ['bar', 'Vạch nhịp · Nhắc lại']] as const
const ARTICS: [Artic, string, string][] = [['stacc', '•', 'Staccato'], ['stacciss', '▾', 'Staccatissimo'], ['ten', '–', 'Tenuto'], ['acc', '>', 'Accent'], ['marc', '^', 'Marcato']]
const ORNS: [Orn, string, string][] = [['trill', '𝆖', 'Láy rền (tr)'], ['mordent', '∿', 'Láy dưới'], ['mordentInv', '≈', 'Láy trên'], ['turn', '𝆗', 'Láy vòng']]
const DYNS: [Dyn, string][] = [['ppp', '𝆏𝆏𝆏'], ['pp', '𝆏𝆏'], ['p', '𝆏'], ['mp', '𝆐𝆏'], ['mf', '𝆐𝆑'], ['f', '𝆑'], ['ff', '𝆑𝆑'], ['fff', '𝆑𝆑𝆑'], ['sf', '𝆍𝆑'], ['sfz', '𝆍𝆑𝆎'], ['fp', '𝆑𝆏']]
const TEMPOS = ['Largo', 'Adagio', 'Andante', 'Moderato', 'Allegro', 'Presto', 'rit.', 'a tempo']
const EXPRS = ['dolce', 'cantabile', 'espressivo', 'legato', 'leggiero', 'con moto', 'cresc.', 'dim.']
const NAVS: ['segno' | 'coda' | Jump, string, string, 'start' | 'end'][] = [
  ['segno', '𝄋', 'Segno', 'start'], ['coda', '𝄌', 'Coda', 'start'], ['fine', 'Fine', 'Fine', 'end'], ['dc', '𝄊', 'D.C.', 'end'], ['dcfine', 'D.C.', 'D.C. al Fine', 'end'],
  ['dccoda', 'D.C.', 'D.C. al Coda', 'end'], ['ds', '𝄉', 'D.S.', 'end'], ['dsfine', 'D.S.', 'D.S. al Fine', 'end'], ['dscoda', 'D.S.', 'D.S. al Coda', 'end'], ['tocoda', '→𝄌', 'To Coda', 'end'],
]

/**
 * Tools in a panel that floats over the paper: dragged by its handle anywhere on screen, folded into a round button,
 * and remembered where it was left.
 */
function Palette(p: PaletteProps) {
  const [pos, setPos] = useState<{ x: number; y: number }>(() => loadPref('compose:palette', { x: 12, y: -1 }))
  const [open, setOpen] = useState<boolean>(() => loadPref('compose:palette-open', true))
  const [tab, setTab] = useState<(typeof TABS)[number][0]>('notes')
  const drag = useRef<{ dx: number; dy: number; id: number } | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => savePref('compose:palette', pos), [pos])
  useEffect(() => savePref('compose:palette-open', open), [open])
  // a first visit, or a window that got smaller: keep the panel on screen
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const w = el.offsetWidth
    const h = el.offsetHeight
    const x = Math.min(Math.max(6, pos.x), window.innerWidth - w - 6)
    const y = pos.y < 0 ? window.innerHeight - h - (loadPref('compose:keys', true) ? 132 : 18) : Math.min(Math.max(60, pos.y), window.innerHeight - h - 6)
    if (x !== pos.x || y !== pos.y) setPos({ x, y })
  }, [pos, open, tab])
  const grip = {
    onPointerDown: (e: React.PointerEvent) => {
      e.currentTarget.setPointerCapture(e.pointerId)
      drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y, id: e.pointerId }
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (drag.current?.id === e.pointerId) setPos({ x: e.clientX - drag.current.dx, y: e.clientY - drag.current.dy })
    },
    onPointerUp: () => (drag.current = null),
  }
  const selNotes = p.selEv?.notes ?? []
  const one = p.selEv ? spell(p.selEv.dur) : null
  const curDur = p.hasSel && one?.length === 1 ? one[0].dur : p.dur
  const curDots = p.hasSel && one?.length === 1 ? one[0].dots : p.dots
  const { bar } = p.here()
  const b = p.bars[bar]

  if (!open)
    return (
      <button ref={ref as never} className="cmp-fab" style={{ left: pos.x, top: pos.y }} {...grip} onClick={() => !drag.current && setOpen(true)} aria-label="Mở bảng công cụ">
        <span>{p.restMode ? REST_GLYPH[p.dur] : NOTE_GLYPH[p.dur]}</span>
      </button>
    )
  return (
    <div ref={ref} className="cmp-palette" style={{ left: pos.x, top: pos.y } as CSSProperties} role="toolbar" aria-label="Bảng công cụ">
      <div className="cmp-grip" {...grip}>
        <span aria-hidden className="cmp-grip-bar" />
        <button onPointerDown={(e) => e.stopPropagation()} onClick={() => setOpen(false)} aria-label="Thu gọn bảng công cụ">–</button>
      </div>
      <div className="cmp-tabs" role="tablist">
        {TABS.map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} className={clsx(tab === id && 'is-on')} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>
      {tab === 'notes' && (
        <div className="cmp-grid">
          {DUR_NAMES.map((d) => (
            <Tool key={d} on={curDur === d} title={DUR_LABEL[d]} onClick={() => p.onDur(d, 0)} glyph={p.restMode && !p.hasSel ? REST_GLYPH[d] : NOTE_GLYPH[d]} label={DUR_LABEL[d]} />
          ))}
          <Tool on={curDots === 1} title="Chấm dôi" onClick={() => p.onDot(1)} glyph="·" label="Chấm dôi" />
          <Tool on={curDots === 2} title="Chấm dôi kép" onClick={() => p.onDot(2)} glyph="··" label="Chấm kép" />
          <Tool on={p.restMode && !p.hasSel} title="Dấu lặng" onClick={p.onRest} glyph="𝄽" label={p.hasSel ? 'Thành lặng' : 'Dấu lặng'} />
          <Tool on={p.chordMode} title="Thêm nốt vào hợp âm" onClick={p.onChord} glyph="♫" label="Hợp âm" />
          <Tool on={p.hasSel ? selNotes.some((n) => n.tie) : p.tieNext} title="Dấu nối" onClick={p.onTie} glyph="⁀" label="Nối" />
          <Tool disabled={!p.hasSel} title="Lên một bậc" onClick={p.onUp} glyph="↑" label="Lên" />
          <Tool disabled={!p.hasSel} title="Xuống một bậc" onClick={p.onDown} glyph="↓" label="Xuống" />
          <Tool title="Xoá" onClick={p.onDelete} glyph="⌫" label="Xoá" />
          <Tool on={p.voice === 1} title="Bè 1 (đuôi lên)" onClick={() => p.onVoice(1)} glyph="①" label="Bè 1" />
          <Tool on={p.voice === 2} title="Bè 2 (đuôi xuống, cùng khuông)" onClick={() => p.onVoice(2)} glyph="②" label="Bè 2" />
        </div>
      )}
      {tab === 'words' && (
        <div className="cmp-grid">
          <Tool on={false} title="Lời ca" onClick={() => p.onEntry('lyric')} glyph={<span className="cmp-word">La</span>} label="Lời ca" />
          <Tool on={false} title="Tên hợp âm" onClick={() => p.onEntry('harm')} glyph={<span className="cmp-word">C7</span>} label="Hợp âm" />
          <p className="cmp-note">Bắt đầu ở nốt đang chọn (hoặc nốt vừa viết). Gõ một âm tiết rồi bấm dấu cách để sang nốt sau, dấu gạch (-) để nối âm tiết. Tên hợp âm gõ kiểu Bb7, F#m7b5, G/B — máy tự đổi b, # thành ♭, ♯.</p>
        </div>
      )}
      {tab === 'acc' && (
        <div className="cmp-grid">
          {ACCIDENTALS.map(([a, g, label]) => (
            <Tool key={a} on={p.hasSel ? selNotes.length > 0 && selNotes.every((n) => n.alter === a) : p.armed === a} title={label} onClick={() => p.onAlter(a)} glyph={g} label={label} />
          ))}
          <p className="cmp-note">{p.hasSel ? 'Đổi dấu hoá của nốt đang chọn.' : 'Chọn dấu hoá cho nốt kế tiếp.'}</p>
        </div>
      )}
      {tab === 'sig' && (
        <div className="cmp-sig">
          <p className="cmp-note">Áp từ ô {bar + 1}{p.bars.length > 1 && b.clefs.length > 1 ? `, khuông ${p.here().staff === 0 ? 'trên' : 'dưới'}` : ''}.</p>
          <div className="cmp-grid">
            {CLEFS.map(([c, g, label]) => (
              <Tool key={c} on={b.clefs[p.here().staff] === c} title={label} onClick={() => p.onClef(c)} glyph={g} label={label.replace('Khoá ', '')} />
            ))}
          </div>
          <label className="cmp-select">
            Giọng
            <select value={b.key} onChange={(e) => p.onKey(+e.target.value)}>
              {Array.from({ length: 15 }, (_, i) => 7 - i).map((k) => (
                <option key={k} value={k}>{k === 0 ? 'Không dấu' : k > 0 ? `${k}♯` : `${-k}♭`} — {keyLabel(k)}</option>
              ))}
            </select>
          </label>
          <div className="cmp-grid">
            {TIMES.map((t) => (
              <Tool key={t.join('/')} on={b.time[0] === t[0] && b.time[1] === t[1]} title={`Nhịp ${t.join('/')}`} onClick={() => p.onTime(t)} glyph={<span className="cmp-frac"><b>{t[0]}</b><b>{t[1]}</b></span>} label="" />
            ))}
            <Tool title="Nhịp khác" onClick={() => {
              const v = window.prompt('Số chỉ nhịp (ví dụ 7/8, 11/16)', `${b.time[0]}/${b.time[1]}`)
              const m = v && /^(\d{1,2})\s*\/\s*(1|2|4|8|16|32)$/.exec(v.trim())
              if (m) p.onTime([+m[1], +m[2]])
            }} glyph="?/?" label="Khác" />
          </div>
        </div>
      )}
      {tab === 'bar' && (
        <div className="cmp-grid">
          <Tool on={!b.right || b.right === 'single'} title="Vạch đơn" onClick={() => p.onBarline('single')} glyph="𝄀" label="Vạch đơn" />
          <Tool on={b.right === 'dbl'} title="Vạch kép" onClick={() => p.onBarline('dbl')} glyph="𝄁" label="Vạch kép" />
          <Tool on={b.right === 'end'} title="Vạch kết" onClick={() => p.onBarline('end')} glyph="𝄂" label="Vạch kết" />
          <Tool on={b.left === 'rptstart'} title="Mở nhắc lại (đầu ô)" onClick={() => p.onBarline('rptstart')} glyph="𝄆" label="Mở nhắc lại" />
          <Tool on={b.right === 'rptend'} title="Đóng nhắc lại (cuối ô)" onClick={() => p.onBarline('rptend')} glyph="𝄇" label="Đóng nhắc lại" />
          <Tool title="Thêm một ô ở cuối" onClick={p.onAddBar} glyph="+" label="Thêm ô" />
          <Tool title="Bỏ ô cuối" onClick={p.onRemoveBar} glyph="−" label="Bỏ ô cuối" />
          <p className="cmp-note">Vạch nhịp đặt ở cuối ô {bar + 1}.</p>
          {NAVS.map(([k, g, label, where]) => {
            const a = p.attrs[bar] ?? {}
            const on = k === 'segno' || k === 'coda' ? !!a[k] : a.jump === k
            return <Tool key={k} on={on} title={`${label} (${where === 'start' ? 'đầu' : 'cuối'} ô ${bar + 1})`} onClick={() => p.onNav(k)} glyph={<span className={clsx(g.length > 3 && 'cmp-word')}>{g}</span>} label={label} />
          })}
          <p className="cmp-note">Segno, Coda ở đầu ô; Fine, D.C., D.S., To Coda ở cuối ô. Khi nghe lại, máy đi theo các dấu này.</p>
        </div>
      )}
      {tab === 'link' && (
        <div className="cmp-grid">
          <Tool on={!!p.target && p.spans.some((sp) => sp.kind === 'slur' && sp.from === p.target!.id)} title="Dấu luyến" onClick={() => p.onSpan('slur')} glyph="⁀" label="Luyến" />
          <Tool on={!!p.target && p.spans.some((sp) => sp.kind === 'cres' && sp.from === p.target!.id)} title="Mạnh dần (hình nêm)" onClick={() => p.onSpan('cres')} glyph="𝆒" label="Mạnh dần" />
          <Tool on={!!p.target && p.spans.some((sp) => sp.kind === 'dim' && sp.from === p.target!.id)} title="Nhỏ dần (hình nêm)" onClick={() => p.onSpan('dim')} glyph="𝆓" label="Nhỏ dần" />
          {TUPLETS.map((t) => (
            <Tool key={t.n} on={p.tupletMode === t.n} title={`${t.label}: ${t.n} nốt trong thời gian ${t.base}`} onClick={() => p.onTuplet(t.n)} glyph={<span className="cmp-tup">{t.n}</span>} label={t.label} />
          ))}
          <p className="cmp-note">Luyến, hình nêm: chọn nhiều nốt (kéo ngang), hoặc một nốt để nối tới nốt kế. Liên ba/năm/sáu: bật lên rồi viết — nốt đầu mở cả nhóm theo trường độ đang chọn.</p>
        </div>
      )}
      {tab === 'artic' && (
        <div className="cmp-grid">
          {ARTICS.map(([a, g, label]) => (
            <Tool key={a} on={!!p.target?.artic?.includes(a)} title={label} onClick={() => p.onArtic(a)} glyph={g} label={label} />
          ))}
          <Tool on={!!p.target?.fermata} title="Dấu lưu (fermata)" onClick={() => p.onFlag('fermata')} glyph="𝄐" label="Fermata" />
          {ORNS.map(([o, g, label]) => (
            <Tool key={o} on={p.target?.orn === o} title={label} onClick={() => p.onOrn(o)} glyph={g} label={label} />
          ))}
          <Tool on={!!p.target?.arpeg} disabled={(p.target?.notes.length ?? 0) < 2} title="Rải hợp âm (arpeggio)" onClick={() => p.onFlag('arpeg')} glyph="≀" label="Rải" />
          <p className="cmp-note">{p.hasSel ? 'Gắn vào nốt đang chọn.' : 'Gắn vào nốt vừa viết.'}</p>
        </div>
      )}
      {tab === 'dyn' && (
        <div className="cmp-grid">
          {DYNS.map(([d, g]) => (
            <Tool key={d} on={p.target?.dyn === d} title={d} onClick={() => p.onDyn(d)} glyph={<span className="cmp-dyn">{g}</span>} label={d} />
          ))}
          <Tool title="Mạnh dần (hình nêm)" onClick={() => p.onSpan('cres')} glyph="𝆒" label="Mạnh dần" />
          <Tool title="Nhỏ dần (hình nêm)" onClick={() => p.onSpan('dim')} glyph="𝆓" label="Nhỏ dần" />
          <p className="cmp-note">{p.hasSel ? 'Gắn vào nốt đang chọn.' : 'Gắn vào nốt vừa viết.'} Hình nêm cần chọn nhiều nốt.</p>
        </div>
      )}
      {tab === 'text' && (
        <div className="cmp-sig">
          <p className="cmp-note">Nhịp độ (in đậm, trên khuông) — thêm số để máy nghe theo, vd. "Andante ♩ = 72".</p>
          <div className="cmp-words">
            {TEMPOS.map((w) => (
              <button key={w} className={clsx(p.target?.text?.text === w && 'is-on')} onClick={() => p.onText('tempo', w)}>{w}</button>
            ))}
            <button onClick={() => p.onText('tempo')}>Khác…</button>
          </div>
          <p className="cmp-note">Chỉ dẫn diễn tấu (in nghiêng).</p>
          <div className="cmp-words">
            {EXPRS.map((w) => (
              <button key={w} className={clsx('is-italic', p.target?.text?.text === w && 'is-on')} onClick={() => p.onText('expr', w)}>{w}</button>
            ))}
            <button onClick={() => p.onText('expr')}>Khác…</button>
            <button disabled={!p.target?.text} onClick={() => p.onText(p.target?.text?.kind ?? 'expr', '')}>Bỏ chữ</button>
          </div>
        </div>
      )}
    </div>
  )
}

function Tool({ glyph, label, title, on, disabled, onClick }: { glyph: ReactNode; label: string; title: string; on?: boolean; disabled?: boolean; onClick: () => void }) {
  return (
    <button className={clsx('cmp-tool', on && 'is-on')} title={title} aria-label={title} aria-pressed={on} disabled={disabled} onClick={onClick}>
      <span className="cmp-glyph">{glyph}</span>
      {label && <small>{label}</small>}
    </button>
  )
}

/* ---------- the on-screen keyboard ---------- */

const WHITE = [0, 2, 4, 5, 7, 9, 11]

/** Two octaves and a half of keys around the caret's staff; a black key is spelled sharp, or flat in a flat key. */
function Keys({ staff, clef, keySig, onKey }: { staff: number; clef: Clef; keySig: number; onKey: (dn: number, alter: number) => void }) {
  const low = clef === 'bass' ? 36 : clef === 'treble' ? 55 : 48 // C2, G3, C3
  const keys: { midi: number; black: boolean }[] = []
  for (let m = low; m <= low + 31; m++) keys.push({ midi: m, black: !WHITE.includes(m % 12) })
  const scroller = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const c = el.querySelector<HTMLElement>('[data-c4]') ?? el.querySelector<HTMLElement>('.cmp-white')
    if (c) el.scrollLeft = c.offsetLeft - 12
  }, [staff, clef])
  const spellKey = (m: number) => {
    const pc = m % 12
    const oct = Math.floor(m / 12) - 1
    if (WHITE.includes(pc)) return { d: oct * 7 + WHITE.indexOf(pc), alter: 0 }
    if (keySig < 0) return { d: oct * 7 + WHITE.indexOf(pc + 1), alter: -1 }
    return { d: oct * 7 + WHITE.indexOf(pc - 1), alter: 1 }
  }
  const whites = keys.filter((k) => !k.black)
  return (
    <div ref={scroller} className="cmp-keys" aria-label="Phím đàn: bấm để đặt nốt">
      <div className="cmp-keys-row" style={{ width: whites.length * 34 }}>
        {whites.map((k, i) => {
          const s = spellKey(k.midi)
          return (
            <button key={k.midi} className="cmp-white" data-c4={k.midi === 60 || undefined} style={{ left: i * 34 }} onClick={() => onKey(s.d, s.alter)} aria-label={pitchName(fromDn(s.d, s.alter))}>
              {k.midi % 12 === 0 && <small>Đô{Math.floor(k.midi / 12) - 1}</small>}
            </button>
          )
        })}
        {keys.map((k) => {
          if (!k.black) return null
          const i = whites.findIndex((w) => w.midi === k.midi - 1)
          const s = spellKey(k.midi)
          return <button key={k.midi} className="cmp-black" style={{ left: i * 34 + 23 }} onClick={() => onKey(s.d, s.alter)} aria-label={pitchName(fromDn(s.d, s.alter))} />
        })}
      </div>
    </div>
  )
}

function Sheet({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="cmp-sheet-bg" onClick={onClose}>
      <div className="cmp-sheet" role="dialog" aria-label="Bản nhạc và tuỳ chọn" onClick={(e) => e.stopPropagation()}>
        <button className="cmp-sheet-x" onClick={onClose} aria-label="Đóng">✕</button>
        {children}
      </div>
    </div>
  )
}

/** The line where lyrics or chord symbols are typed, one note at a time. */
function EntryBar({ entry, where, onText, onNext, onClose }: {
  entry: { kind: 'lyric' | 'harm'; text: string }
  where: string
  onText: (t: string) => void
  onNext: (text: string, hyph: boolean, move: boolean) => void
  onClose: () => void
}) {
  const lyric = entry.kind === 'lyric'
  return (
    <div className="cmp-entry" role="group" aria-label={lyric ? 'Gõ lời ca' : 'Gõ tên hợp âm'}>
      <div className="cmp-entry-head">
        <b>{lyric ? 'Lời ca' : 'Tên hợp âm'}</b>
        <span>{where}</span>
      </div>
      <div className="cmp-entry-row">
        <input
          autoFocus
          value={entry.text}
          placeholder={lyric ? 'Âm tiết…' : 'Vd. Cmaj7, Bb7, G/B'}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          // the last character decides: a space moves on, a hyphen joins (phone keyboards send no reliable key codes)
          onChange={(e) => {
            const v = e.target.value
            if (/\s$/.test(v) && v.trim()) onNext(v, false, true)
            else if (lyric && v.endsWith('-') && v.length > 1) onNext(v.slice(0, -1), true, true)
            else onText(v)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onNext(entry.text, false, true)
            else if (e.key === 'Escape') onClose()
          }}
        />
        <button onClick={() => onNext(entry.text, false, true)}>Tiếp →</button>
        {lyric && <button onClick={() => onNext(entry.text, true, true)}>– Nối</button>}
        <button onClick={() => onNext(entry.text, false, false)}>Xong</button>
      </div>
      {lyric ? null : <p className="cmp-entry-show">{entry.text ? chordText(entry.text) : ' '}</p>}
    </div>
  )
}
