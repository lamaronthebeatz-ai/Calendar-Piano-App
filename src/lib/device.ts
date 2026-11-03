/**
 * Android browsers send motion-sensor events without asking, so a gyro-driven effect runs every frame, even while
 * the page scrolls (iOS only starts after the viewer allows it). Mid-range Android tablets drop frames under that,
 * so gyro tilt and a few costly paint effects are switched off there (`html.is-android`).
 */
export const IS_ANDROID = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent)
