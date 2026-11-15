/** Equal Earth, as in scripts/map/world.py: the map of places and the journey game share one world. */
export const W = 1000
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2
function raw(lon: number, lat: number): [number, number] {
  const l = (lon * Math.PI) / 180, t = Math.asin(M * Math.sin((lat * Math.PI) / 180)), t2 = t * t, t6 = t2 * t2 * t2
  return [(l * Math.cos(t)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))), t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))]
}
const XMAX = raw(180, 0)[0], YMAX = raw(0, 90)[1], S = W / (2 * XMAX)
export const H = 2 * YMAX * S
export const proj = (lon: number, lat: number): [number, number] => {
  const [x, y] = raw(lon, lat)
  return [W / 2 + x * S, (YMAX - y) * S]
}
