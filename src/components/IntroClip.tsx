import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import './intro.css'
import { INTRO_KEY as KEY } from './introGate'

/**
 * The opening clip, before the lock screen (Lamar's two cuts: portrait for phones held upright, landscape otherwise).
 * Lamar's rule: everyone watches it whole, with sound — no skip, no mute. Browsers refuse to start a video with sound
 * before the user has touched the page, so when the unmuted play() is refused a black screen asks for one tap, and
 * the clip then plays from the start. The only way past it without watching is a clip that cannot play at all
 * (offline — the clips are not precached — or neither the H.264 nor the VP9 file decodes, or nothing loaded after LOAD_MS): then the lock
 * screen comes at once, so no one is locked out of the app. Shown once per app session.
 *
 * The same player opens the Journey game (`clip="journey"`, media/journey-*): every time the game is entered, same
 * rules (whole, with sound); it remembers nothing, so `remember` is off there.
 */
const base = (clip: string) => `${import.meta.env.BASE_URL}media/${clip}-`
/** nothing playable loaded by then: the network cannot deliver it */
const LOAD_MS = 8000
/** after playback starts, the lock screen comes by this time even if 'ended' never fires (clips are 10 s) */
const CAP_MS = 13_000

export function IntroClip({ onLeave, onDone, clip = 'intro', label = 'Đoạn mở đầu của ứng dụng', remember = true }: { onLeave: () => void; onDone: () => void; clip?: 'intro' | 'journey'; label?: string; remember?: boolean }) {
  const BASE = base(clip)
  const video = useRef<HTMLVideoElement>(null)
  const [cut] = useState(() => (typeof matchMedia === 'function' && matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape'))
  const [leaving, setLeaving] = useState(false)
  const [needTap, setNeedTap] = useState(false)
  const done = useRef(false)
  const capTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const finish = (fade: boolean) => {
    if (done.current) return
    done.current = true
    clearTimeout(capTimer.current)
    if (remember)
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

  const start = () => {
    const v = video.current
    if (!v) return
    v.muted = false
    v.currentTime = 0
    v.play()
      ?.then(() => setNeedTap(false))
      .catch((e: DOMException) => {
        // refused because no one has touched the page yet: ask for the tap; any other refusal means it cannot play
        if (e?.name === 'NotAllowedError') setNeedTap(true)
        else finish(false)
      })
  }

  useEffect(() => {
    const v = video.current
    if (!v) return
    const onPlaying = () => {
      clearTimeout(capTimer.current)
      capTimer.current = setTimeout(() => finish(true), CAP_MS)
    }
    v.addEventListener('playing', onPlaying)
    const loadTimer = setTimeout(() => v.readyState < 2 && finish(false), LOAD_MS)
    start()
    return () => {
      v.removeEventListener('playing', onPlaying)
      clearTimeout(loadTimer)
      clearTimeout(capTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx('intro', leaving && 'is-leaving')} data-cut={cut}>
      <video
        ref={video}
        className="intro-video"
        poster={`${BASE}${cut}.webp`}
        playsInline
        preload="auto"
        onEnded={() => finish(true)}
        aria-label={label}
      >
        {/* H.264 for Safari and most browsers; VP9 for builds without H.264 (Firefox / Chromium on Linux). An error on
            the last source means neither could be played. */}
        <source src={`${BASE}${cut}.mp4`} type="video/mp4" />
        <source src={`${BASE}${cut}.webm`} type="video/webm" onError={() => finish(false)} />
      </video>
      {needTap && (
        <button type="button" className="intro-tap" onClick={start}>
          Chạm để bắt đầu
        </button>
      )}
    </div>
  )
}
