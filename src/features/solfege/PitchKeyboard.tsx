import { useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { playNow } from '../theory/audio'
import './pitch-keyboard.css'

const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
const WHITE_PC = [0, 2, 4, 5, 7, 9, 11]
const octaveOf = (m: number) => Math.floor(m / 12) - 1

/**
 * Piano keys to check a pitch while reading (default A3 – B5, where the sight-singing exercises lie): tap a key to
 * hear it; C keys and A4 are labelled with their octave.
 */
export function PitchKeyboard({ lo = 57, hi = 83 }: { lo?: number; hi?: number }) {
  const keys = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i)
  const KB_WHITES = keys.filter((m) => WHITE_PC.includes(m % 12))
  const KB_BLACKS = keys.filter((m) => !WHITE_PC.includes(m % 12))
  const [down, setDown] = useState<number | null>(null)
  const box = useRef<HTMLDivElement>(null)
  // start scrolled so that middle C sits near the left edge on a narrow screen
  useLayoutEffect(() => {
    const el = box.current
    const c4 = el?.querySelector<HTMLElement>('[data-midi="60"]')
    if (el && c4 && el.scrollWidth > el.clientWidth) el.scrollLeft = c4.offsetLeft - 8
  }, [])
  const press = (m: number) => {
    playNow([m], 1.6)
    setDown(m)
    window.setTimeout(() => setDown((d) => (d === m ? null : d)), 220)
  }
  return (
    <div className="sf-kb-wrap">
      <p className="sf-kb-title">Đàn kiểm tra cao độ · chạm phím để nghe</p>
      <div ref={box} className="sf-kb-scroll">
        <div className="sf-kb" style={{ ['--n' as string]: KB_WHITES.length }}>
          {KB_WHITES.map((m, i) => (
            <button
              key={m}
              data-midi={m}
              onPointerDown={(e) => (e.preventDefault(), press(m))}
              className={clsx('sf-kb-w', down === m && 'is-down', m === 69 && 'is-a4')}
              style={{ ['--i' as string]: i }}
              aria-label={`${SOLFA[WHITE_PC.indexOf(m % 12)]} ${octaveOf(m)}`}
            >
              <span>{m % 12 === 0 || m === 69 ? `${SOLFA[WHITE_PC.indexOf(m % 12)]}${octaveOf(m)}` : SOLFA[WHITE_PC.indexOf(m % 12)]}</span>
            </button>
          ))}
          {KB_BLACKS.map((m) => {
            const left = KB_WHITES.indexOf(m - 1) + 1
            return (
              <button
                key={m}
                onPointerDown={(e) => (e.preventDefault(), press(m))}
                className={clsx('sf-kb-b', down === m && 'is-down')}
                style={{ ['--i' as string]: left }}
                aria-label={`${SOLFA[WHITE_PC.indexOf((m - 1) % 12)]} thăng ${octaveOf(m)}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
