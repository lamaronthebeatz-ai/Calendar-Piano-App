import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import './intro.css'
import { INTRO_KEY as KEY } from './introGate'

/**
 * The opening clip, before the lock screen (Lamar's two cuts: portrait for phones held upright, landscape otherwise).
 * It never stands between the user and the app: it starts muted (browsers refuse sound without a tap), can be skipped
 * at once, and gives way by itself when the video cannot play — offline (the clips are not precached), autoplay
 * blocked (iOS Low Power Mode), an error, or a stall. Shown once per app session.
 */
const BASE = `${import.meta.env.BASE_URL}media/intro-`
/** if playback has not begun by then, go straight to the lock screen */
const START_MS = 2500
/** the clips are 10 s: whatever happens, the lock screen comes after this */
const CAP_MS = 14_000

export function IntroClip({ onLeave, onDone }: { onLeave: () => void; onDone: () => void }) {
  const video = useRef<HTMLVideoElement>(null)
  const [cut] = useState(() => (typeof matchMedia === 'function' && matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape'))
  const [leaving, setLeaving] = useState(false)
  const [muted, setMuted] = useState(true)
  const done = useRef(false)

  const finish = (fade: boolean) => {
    if (done.current) return
    done.current = true
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {
      /* not remembered: it shows again on reload */
    }
    onLeave()
    if (!fade) return onDone()
    setLeaving(true)
    // the fade is decoration: the lock screen comes after this delay whether or not the transition runs
    setTimeout(onDone, 700)
  }

  useEffect(() => {
    const v = video.current
    if (!v) return
    let started = false
    const onPlaying = () => {
      started = true
    }
    v.addEventListener('playing', onPlaying)
    v.play()?.catch(() => finish(false))
    const startTimer = setTimeout(() => !started && finish(false), START_MS)
    const capTimer = setTimeout(() => finish(true), CAP_MS)
    return () => {
      v.removeEventListener('playing', onPlaying)
      clearTimeout(startTimer)
      clearTimeout(capTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx('intro', leaving && 'is-leaving')} data-cut={cut}>
      <video
        ref={video}
        className="intro-video"
        src={`${BASE}${cut}.mp4`}
        poster={`${BASE}${cut}.webp`}
        muted={muted}
        playsInline
        autoPlay
        preload="auto"
        onEnded={() => finish(true)}
        onError={() => finish(false)}
        aria-label="Đoạn mở đầu của ứng dụng"
      />
      <div className="intro-bar">
        <button
          type="button"
          className="intro-btn"
          onClick={() => {
            const v = video.current
            setMuted((m) => !m)
            if (v) v.muted = !muted
          }}
        >
          {muted ? 'Bật tiếng' : 'Tắt tiếng'}
        </button>
        <button type="button" className="intro-btn" onClick={() => finish(true)}>
          Bỏ qua
        </button>
      </div>
    </div>
  )
}
