/** Bản đồ cổ của từng chương (ảnh đã cắt quanh tuyến đường). Toạ độ: đa thức bậc 2 khớp từ các thành phố mốc trên bản đồ (scratchpad fit.py) — sai số vài chục điểm ảnh, đủ cho một chấm trên bản đồ. */
export interface OldMap { img: string; w: number; h: number; x: number[]; y: number[] }
export const MAPS: Record<string, OldMap> = {
  'trung-co': { img: 'map-trung-co', w: 1461, h: 1359, x: [510.858589, 97.667753, -16.935871, -0.33332, -1.035653, 0.316185], y: [3677.896694, 14.394861, -65.143879, -0.379072, -0.033996, -0.019696] },
  'phuc-hung': { img: 'map-phuc-hung', w: 1493, h: 1446, x: [-935.672111, 84.302008, 44.382701, 0.226666, -1.093912, -0.318937], y: [1988.92151, 4.293161, -0.026522, -0.2862, -0.028462, -0.579002] },
  'baroque': { img: 'map-baroque', w: 1955, h: 2014, x: [757.970326, 96.190805, -17.575893, -0.203058, -0.864396, 0.352249], y: [3808.144388, 14.563347, -39.812313, -0.218342, -0.092465, -0.399737] },
  'co-dien': { img: 'map-co-dien', w: 1668, h: 1209, x: [-571.119614, 110.713716, 25.617708, -0.479655, -1.2516, -0.091042], y: [3682.231317, 34.317403, -68.210104, -0.384641, -0.480282, 0.106778] },
  'lang-man': { img: 'map-lang-man', w: 1425, h: 1198, x: [249.023715, 58.207093, -6.859673, -0.119775, -0.520067, 0.213817], y: [3114.1794, 20.861798, -63.795845, -0.266081, -0.227293, 0.222799] },
}

/** Kinh độ, vĩ độ → điểm ảnh trên bản đồ của chương. */
export function onMap(m: OldMap, lat: number, lon: number): [number, number] {
  const t = [1, lon, lat, lon * lon, lon * lat, lat * lat]
  return [t.reduce((s, v, i) => s + v * m.x[i], 0), t.reduce((s, v, i) => s + v * m.y[i], 0)]
}
