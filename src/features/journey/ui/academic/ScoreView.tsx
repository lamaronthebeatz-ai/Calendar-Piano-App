import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { engraver, render } from '../../../compose/engrave'
import { toMei } from '../../../compose/mei'
import { noteName, type MusicDatum, type MusicNote } from '../../engine/academic'
import { composeOf } from './data'

/**
 * A music datum drawn by the app's own engraver (Verovio, via the editor's MEI). A tap on a drawn note is mapped back
 * through its id to the note in the data — never read from the pixel position. Zoom changes the engraving scale;
 * the line stays on one system and scrolls sideways. Below the drawing, the same notes as buttons (keyboard, screen
 * reader, and a fallback while the engraver loads).
 */
export function ScoreView({ datum, picked, seen, onPick, label }: { datum: MusicDatum; picked: string | null; seen: ReadonlySet<string>; onPick: (n: MusicNote, i: number) => void; label: string }) {
  const [scale, setScale] = useState(45)
  const [svg, setSvg] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let live = true
    engraver()
      .then((t) => {
        const { mei } = toMei(composeOf(datum))
        // one system: wide enough for every note at this scale
        const width = Math.round((datum.notes.length * 80 + 180) * (scale / 45))
        if (live) setSvg(render(t, mei, width, scale))
      })
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
  }, [datum, scale, attempt])

  // state classes on the drawn notes (the drawing is markup from the engraver, styled after it is inserted)
  useLayoutEffect(() => {
    const root = box.current
    if (!root || !svg) return
    for (const n of datum.notes) {
      const el = root.querySelector(`[data-id="${n.id}"]`)
      el?.classList.toggle('is-picked', n.id === picked)
      el?.classList.toggle('is-seen', seen.has(n.id))
    }
  }, [svg, picked, seen, datum])

  const tap = (e: React.MouseEvent) => {
    const el = (e.target as Element).closest('[data-class="note"]')
    const id = el?.getAttribute('data-id')
    const i = datum.notes.findIndex((n) => n.id === id)
    if (i >= 0) onPick(datum.notes[i], i)
  }
  return (
    <div className="ac-score">
      <div className="ac-zoom" role="group" aria-label="Phóng to, thu nhỏ bản nhạc">
        <button className="jr-ghost is-small" onClick={() => setScale((s) => Math.max(25, s - 10))} aria-label="Thu nhỏ">−</button>
        <span>{Math.round((scale / 45) * 100)}%</span>
        <button className="jr-ghost is-small" onClick={() => setScale((s) => Math.min(85, s + 10))} aria-label="Phóng to">+</button>
      </div>
      <div className="ac-sheet" ref={box} onClick={tap} aria-label={label} data-testid="ac-sheet">
        {svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : failed ? null : <p className="ar-small">Đang khắc bản nhạc…</p>}
        {failed && (
          <p className="ar-small" role="alert">
            Không tải được bộ khắc nhạc (cần mạng lần đầu).{' '}
            <button className="jr-ghost is-small" onClick={() => (setFailed(false), setAttempt((a) => a + 1))}>Thử lại</button> — các nốt vẫn chọn được ở dưới.
          </p>
        )}
      </div>
      <div className="ac-notes" role="group" aria-label="Các nốt">
        {datum.notes.map((n, i) => (
          <button key={n.id} className={`ac-note${n.id === picked ? ' is-picked' : ''}${seen.has(n.id) ? ' is-seen' : ''}`} onClick={() => onPick(n, i)} aria-pressed={n.id === picked} aria-label={`Nốt ${i + 1}: ${noteName(n)}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
