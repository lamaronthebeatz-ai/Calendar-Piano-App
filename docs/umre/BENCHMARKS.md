# UMRE — số đo hiệu năng (sinh bởi `node scripts/umre/bench.mjs`)

<!-- bench -->
Môi trường: Node v22.23.5, Intel(R) Xeon(R) Processor @ 2.30GHz (4 lõi), linux 6.18.44-fc-v726; máy UMRE 0.5.1-wave-c; ngày 2026-11-23.

Mỗi ca chạy trong một tiến trình riêng (`--expose-gc`). **Trung vị / p95** tính trên số lần chạy ghi ở cột *n* (p95 chỉ khi n ≥ 20). **Đỉnh RSS** là bộ nhớ đỉnh của cả tiến trình (gồm ~nền vite + mã nguồn); **giữ lại** là heap còn sau khi gom rác so với trước vòng đo (dấu hiệu rò). Cột *kết quả* là tóm tắt kết quả của ca — `--check` so nó với lần đo chuẩn để chắc tối ưu không đổi kết quả. Đây là số đo trên máy ghi trên, không phải mục tiêu; máy khác (điện thoại) sẽ chậm hơn.

| Ca | Thành phần | Quy mô | n | Trung vị (ms) | p95 (ms) | Đỉnh RSS (MB) | Giữ lại (KB) | Kết quả |
|---|---|---|---|---|---|---|---|---|
| `repr.compose-to-umr.joplin` | Biểu diễn | Maple Leaf Rag, ~1.600 nốt | 20 | 1.8 | 3.8 | 493 | 65 | `{"voices":4,"events":1643}` |
| `repr.umr-to-compose.joplin` | Biểu diễn | Maple Leaf Rag | 20 | 0.9 | 1.5 | 485 | 70 | `{"staves":4}` |
| `rulebook.build.counterpoint` | Sổ luật | 34 luật + 3 cho phép + 6 mơ hồ | 50 | 0.1 | 0.2 | 317 | 13 | `{"rules":34}` |
| `rules.evaluate.counterpoint` | Sổ luật | 17 luật cứng, 6 ô | 50 | 0.3 | 0.8 | 335 | 231 | `{"hits":4}` |
| `constraints.model.two-voice-11` | Ràng buộc | 11 ô | 50 | 0.1 | 0.2 | 313 | 70 | `{"free":1}` |
| `search.csp.two-voice-6` | Tìm kiếm | 6 ô, 6 lời giải | 10 | 8.2 | — | 315 | 598 | `{"status":"solved","nodes":80,"solutions":6}` |
| `search.csp.two-voice-11` | Tìm kiếm | 11 ô, 1 lời giải | 10 | 4.9 | — | 341 | 514 | `{"status":"solved","nodes":11}` |
| `validate.two-voice` | Kiểm chứng | 6 ô, 3 bộ kiểm | 50 | 0.9 | 1.8 | 334 | 708 | `{"status":"INVALID","checked":15}` |
| `validate.multi-voice` | Kiểm chứng | 3 bè, 4 ô | 30 | 0.2 | 0.4 | 337 | 208 | `{"status":"INCOMPLETE"}` |
| `orchestrate.counterpoint.page-solver` | Điều phối + giải thích | 6 ô, bộ giải trang phức điệu | 10 | 10.7 | — | 320 | 1328 | `{"status":"SOLVED","solutions":3,"steps":18}` |
| `explain.render-3-levels` | Giải thích | kết quả 6 ô | 50 | 0.0 | 0.1 | 336 | 28 | `{"chars":[1716,2611,6550]}` |
| `domain.counterpoint.page-solve+confirm` | Phức điệu | 6 ô, 6 lời giải | 10 | 12.7 | — | 329 | 1226 | `{"status":"valid","confirmed":6}` |
| `domain.harmony.harmonize-9` | Hoà âm | 9 nốt giai điệu, 4 phương án | 10 | 376.4 | — | 336 | 1242 | `{"status":"SOLVED","solutions":4}` |
| `domain.harmony.validate` | Hoà âm | 9 hợp âm, 2 bộ kiểm | 30 | 1.3 | 2.6 | 321 | 105 | `{"status":"VALID"}` |
| `analysis.harmony.tonal.bach-bwv269` | Phân tích (harmony.tonal) | hợp xướng Bach, 4 bè | 10 | 90.4 | — | 335 | 892 | `{"status":"COMPLETED","findings":136}` |
| `analysis.harmony.tonal.joplin-maple-leaf` | Phân tích (harmony.tonal) | Maple Leaf Rag, piano | 10 | 715.0 | — | 504 | 1250 | `{"status":"COMPLETED","findings":403}` |
| `analysis.melody.line.bach-bwv269` | Phân tích (melody.line) | hợp xướng Bach, 4 bè | 10 | 1.8 | — | 327 | 111 | `{"status":"COMPLETED","findings":68}` |
| `analysis.melody.line.joplin-maple-leaf` | Phân tích (melody.line) | Maple Leaf Rag, piano | 10 | 11.8 | — | 491 | 244 | `{"status":"COMPLETED","findings":63}` |
| `analysis.rhythm.meter.bach-bwv269` | Phân tích (rhythm.meter) | hợp xướng Bach, 4 bè | 10 | 1.0 | — | 331 | 113 | `{"status":"COMPLETED","findings":20}` |
| `analysis.rhythm.meter.joplin-maple-leaf` | Phân tích (rhythm.meter) | Maple Leaf Rag, piano | 10 | 9.0 | — | 525 | 215 | `{"status":"COMPLETED","findings":26}` |
| `analysis.texture.voices.bach-bwv269` | Phân tích (texture.voices) | hợp xướng Bach, 4 bè | 10 | 2.0 | — | 324 | 184 | `{"status":"COMPLETED","findings":8}` |
| `analysis.texture.voices.joplin-maple-leaf` | Phân tích (texture.voices) | Maple Leaf Rag, piano | 10 | 8.1 | — | 500 | 258 | `{"status":"AMBIGUOUS","findings":4}` |
| `analysis.form.sections.bach-bwv269` | Phân tích (form.sections) | hợp xướng Bach, 4 bè | 10 | 84.3 | — | 339 | 740 | `{"status":"AMBIGUOUS","findings":7}` |
| `analysis.form.sections.joplin-maple-leaf` | Phân tích (form.sections) | Maple Leaf Rag, piano | 10 | 910.1 | — | 498 | 1034 | `{"status":"COMPLETED","findings":13}` |
| `analysis.style.features.bach-bwv269` | Phân tích (style.features) | hợp xướng Bach, 4 bè | 10 | 0.4 | — | 328 | 32 | `{"status":"COMPLETED","findings":4}` |
| `analysis.style.features.joplin-maple-leaf` | Phân tích (style.features) | Maple Leaf Rag, piano | 10 | 1.9 | — | 488 | 133 | `{"status":"COMPLETED","findings":4}` |
| `analysis.six-modules.joplin` | Phân tích (cả 6 mô-đun) | Maple Leaf Rag, piano | 5 | 999.0 | — | 511 | 2335 | `{"status":"AMBIGUOUS","findings":513}` |
| `api.cache-hit.analyze` | Đầu mối (cache) | Bach, mô-đun điệu tính, lần lặp | 30 | 1.0 | 3.5 | 338 | 4 | `{"cached":true,"op":"analyze"}` |
<!-- /bench -->

## Tối ưu GĐ11 — trước / sau (cùng máy, cùng bộ đo; kết quả từng ca không đổi — `--check`)
| Ca | Trước | Sau | Thay đổi |
|---|---|---|---|
| `analysis.six-modules.joplin` (cả 6 mô-đun, Maple Leaf Rag) | 1.504 ms | 720 – 999 ms (ba lần đo) | `harmony.tonal` và `form.sections` dùng chung một lần /analyze cho cùng tổng phổ (`domains/harmony/analyzeOnce.ts`, WeakMap) |
| `analysis.rhythm.meter.joplin` | 58,4 ms · đỉnh 738 MB | 9,0 ms · đỉnh 525 MB | đếm nốt mỗi phách một lần (trước: lọc mọi nốt ở mỗi phách cho mỗi cặp bè) |
| `analysis.texture.voices.joplin` | 105,9 ms · đỉnh 844 MB | 8,1 ms · đỉnh 500 MB | `verticals` (lõi của mọi bộ kiểm): khử trùng thời điểm bằng Map thay `findIndex` lồng nhau; con trỏ bỏ các nốt đã tắt. Test `reliability.test.ts` so với bản cũ trên mọi cặp bè của hai bản nhạc thật |

Thời gian của bộ /analyze (`harmony.tonal`, `form.sections`) dao động 640 – 910 ms giữa các lần đo trên máy dùng chung này: con số đơn lẻ không chính xác hơn khoảng đó.

## Không tối ưu (có chủ ý)
- Bộ /analyze (~0,7 s trên một bản ragtime 1.600 nốt): mã của trang Phân tích, độ đúng đã đo trên Bach; tối ưu nó là việc riêng, không thuộc UMRE.
- Đọc MusicXML: mã của trang Soạn nhạc; dưới node dùng happy-dom (đỉnh tới 2 GB — không đại diện cho trình duyệt), nên không đưa vào bộ đo UMRE.

## Huỷ và hết giờ (đo trong `src/umre/runtime/runtime.test.ts`, luồng thật `node:worker_threads`)
Huỷ trả kết quả CANCELLED trong < 200 ms trong khi bộ giải đang chạy (giới hạn của nó 20 s); hết giờ cứng 2 s đúng hạn (< 2,5 s) và luồng chính vẫn chạy hẹn giờ trong lúc đó. Đây là khẳng định có ngưỡng trong test, chạy mỗi lần CI.
