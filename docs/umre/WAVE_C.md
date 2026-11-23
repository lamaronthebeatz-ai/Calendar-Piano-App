# UMRE — Wave C (GĐ8 – 10 + tích hợp), 23/11/2026

Nhãn: **IMPLEMENTED AND TESTED** · **IMPLEMENTED BUT NOT FULLY TESTED** · **PARTIALLY IMPLEMENTED** · **NOT IMPLEMENTED** · **BLOCKED**.
Mỗi giai đoạn báo đủ 12 mục: (1) đã làm (2) tệp (3) thiết kế (4) kiểm thử đã chạy (5) kết quả (6) độ phủ (7) đối chiếu chuẩn (8) hiệu năng (9) giới hạn (10) rủi ro (11) chưa làm (12) nhãn.

## Đầu mối chung — `src/umre/api.ts`
Mọi phần app nói với UMRE bằng `handle(req)` với dữ liệu thuần; cùng yêu cầu chạy trong luồng chính hoặc trong worker (`runtime/host.ts`).

| `op` | Dùng cho | Trả |
|---|---|---|
| `solve` | Phức điệu, Soạn nhạc (hoà âm) | `UnifiedResult`: SOLVED / PROVEN_UNSAT / UNKNOWN / TIMEOUT / CANCELLED / ERROR; từng phương án VALID / INVALID / INCOMPLETE / UNKNOWN; xếp hạng luật mềm |
| `analyze` | Phân tích, Soạn nhạc, Nghiên cứu | `AnalysisResult`: COMPLETED / PARTIAL / AMBIGUOUS / INSUFFICIENT_DATA / UNKNOWN / ERROR; mỗi phát hiện là `fact` / `interpretation` / `hypothesis` / `estimate` / `rule-check` |
| `counterpoint.generate` · `.hints` · `.diagnose` | Phức điệu | đề + đáp án đã kiểm độc lập; nốt tiếp ok/dead/unknown; chẩn đoán vô nghiệm |
| `harmony.identify` · `.continuations` · `.consequences` | Phân tích, Lý thuyết | các cách đọc hợp âm; nước đi tiếp; hệ quả của một thay đổi |
| `rulebook` | Lý thuyết, Nghiên cứu | các mục sổ luật theo phân loại + trích dẫn |

Giải thích ba mức: `renderExplanation` (lời giải) và `renderFinding` (phân tích) — basic / technical / academic; mức academic chỉ in trích dẫn có trong kho bằng chứng.
**Chưa màn hình nào gọi `api.ts`** (chỉ thị: không đổi hành vi giao diện, không làm UI demo). Trang phức điệu vẫn chạy worker cũ của nó.

## GĐ8 — Phức điệu thành bộ giải lĩnh vực chính thức
1. **Đã làm:** sổ luật chuẩn hoá (tên, logic đánh giá — luật ngôn ngữ luật + bộ kiểm nào, trọng số luật mềm, `permitted` ×3, `ambiguous` ×6 từ mục "Còn mở", phân loại hard / recommendation / permitted / exception / ambiguous); ca vi phạm viết tay cho cả 18 luật bắt buộc; bảng phủ công khai sinh từ test (`COVERAGE.md`); hợp đồng phân tích; mô-đun `counterpoint.check`; sinh đề / gợi ý / chẩn đoán qua UMRE (đáp án của máy sinh được bộ kiểm độc lập chấm lại); xếp hạng lời giải hợp lệ theo luật mềm tách khỏi heuristic và ràng buộc; worker có huỷ thật.
2. **Tệp:** `rulebook/{rulebook,counterpoint,cases}.ts`, `validation/coverage.ts`, `orchestration/rank.ts`, `analysis/{types,run}.ts`, `domains/counterpoint/{ops,analysis}.ts`, `api.ts`, `runtime/{host,serve,umre.worker}.ts`; ngoài UMRE chỉ thêm `softWeight` ở `features/counterpoint/rules.ts` (không đổi hành vi).
3. **Thiết kế:** heuristic = thứ tự thử giá trị (`csp.ts`); ràng buộc = luật cứng cắt nhánh; tối ưu = `rankSolutions` sau kiểm chứng, ổn định (hoà điểm giữ thứ tự bộ giải). Huỷ: tìm kiếm đồng bộ nên host **terminate** worker, mỗi yêu cầu có mã, trả lời mang mã cũ bị bỏ; yêu cầu mới thay yêu cầu đang chạy ("superseded").
4. **Kiểm thử:** `rulebook/rulebook.test.ts`, `domains/counterpoint/phase8.test.ts`, `runtime/runtime.test.ts` (worker thật bằng `node:worker_threads`, bundle esbuild), cộng toàn bộ test cũ.
5. **Kết quả:** đạt hết. Huỷ trả về < 200 ms dù bộ giải đang chạy 20 s; hết giờ cứng 2 s đúng hạn, luồng chính vẫn chạy hẹn giờ; hai lần chạy cùng bài cho cùng digest.
6. **Độ phủ:** 18/18 luật bắt buộc có ca kiểm; mỗi ca bị **mọi** bộ kiểm độc lập phủ luật đó bắt (2 – 3 bộ kiểm). Luật mềm (16) chỉ dùng xếp hạng.
7. **Chuẩn:** 5 thí dụ giáo trình (Wave B) vẫn là đáp án chuẩn; ca vi phạm viết tay theo câu chữ sách.
8. **Hiệu năng:** sinh đề "dễ" ~3 s; gợi ý < 0,1 s; chẩn đoán ~2 s; worker khởi động < 0,3 s.
9. **Giới hạn:** chẩn đoán/gợi ý chỉ hai bè (như trang phức điệu); test worker chạy trên node, chưa chạy trong trình duyệt thật.
10. **Rủi ro:** `esbuild` là phụ thuộc gián tiếp (qua vite) — test worker cần nó.
11. **Chưa làm:** nối trang phức điệu sang `UmreHost` (đổi hành vi UI — cần Lamar).
12. **Nhãn:** IMPLEMENTED AND TESTED (tích hợp UI: NOT IMPLEMENTED theo chỉ thị).

## GĐ9 — Hoà âm cổ điển
1. **Đã làm:** nhận diện hợp âm từ nốt có cách viết (ba, bảy, thể đảo, thiếu quãng 5, nốt ngoài, cách viết lại trùng âm, mơ hồ khi không có cách viết); sổ luật hoà âm thêm 10 luật có trang Rimsky-Korsakov (§ 11 tr. 21; § 13 tr. 23; tr. 24, 25) — 7 bắt buộc, 3 khuyến nghị — ở **cả** ngôn ngữ luật lẫn bộ kiểm viết tay; bài mới "phối hoà âm giai điệu" + bộ giải `umre.harmonize` (liệt kê chuỗi I/IV/V hợp luật, xếp bè bằng tìm kiếm chung, nhiều phương án = các chuỗi khác nhau, chứng minh vô nghiệm); suy luận: quan hệ – âm chung – kiểu nối, chức năng T/S/D, nước đi tiếp, hệ quả khi sửa một nốt; adapter `/analyze` (`harmony.tonal`) tách dữ kiện (âm vang) khỏi diễn giải (gốc, giọng, chức năng, kết), độ tin cậy kèm cơ sở, cách đọc khác từ bộ nhận diện; `harmony.progression` giải thích + kiểm luật một bài bốn bè.
2. **Tệp:** `domains/harmony/{identify,harmonize,reasoning,tonal,analysis}.ts`, sửa `domains/harmony/{task,check}.ts`, `rules/{harmony,queries}.ts` (truy vấn `harmony.progression`), `rulebook/harmony.ts`, `validation/harmony.ts`, `solvers/csp.ts`, `engine.ts`, `scripts/analyze/eval.mjs` (`--umre`).
3. **Thiết kế:** hai tầng — chọn hợp âm (luật cấp hợp âm) rồi xếp bè (luật § 11 + bốn bè); luật chọn hợp âm `not-applicable` khi đề cho sẵn hợp âm; luật mềm không bao giờ cắt nhánh (`hardOnly`), bộ kiểm vẫn chấm chúng.
4. **Kiểm thử:** `domains/harmony/phase9.test.ts` (31 ca), `harmony.test.ts` (đột biến 300 lời giải bốn bè), đột biến 300 lời giải phối hoà âm.
5. **Kết quả:** đạt hết; 0 bất đồng giữa hai bộ kiểm trên 600 lời giải đột biến.
6. **Độ phủ:** 17 luật hoà âm, mỗi luật hai bộ kiểm độc lập.
7. **Chuẩn ngoài:** 19 hợp xướng Bach (Tymoczko và cs., corpus music21; xuất bằng `scripts/analyze/export_gt.py`, không đưa vào repo) — qua UMRE **bằng hệt** bộ máy gốc: 2.302 điểm, gốc 83,9%, đủ âm 78,1%, giọng 77,1%, gốc + thể đảo 78,3%, hợp âm phụ 34/90. Giọng chính đã công bố của 4 bản mẫu (Bach BWV 269 Sol trưởng, K. 545 Đô trưởng, Clair de lune Rê♭ trưởng, Maple Leaf Rag La♭ trưởng): đúng 4/4. Nhận diện hợp âm: 17 ca viết tay từ định nghĩa (đúng, sai cách viết, biên, mơ hồ, thiếu dữ liệu).
8. **Hiệu năng:** phối hoà âm 5 – 9 nốt: 0,1 – 0,4 s / 4 phương án.
9. **Giới hạn:** chỉ hợp âm ba thế gốc trong bài bốn bè (chặng § 8 – § 13); hợp âm chủ cuối thiếu quãng 5 (tr. 24) ghi `permitted` nhưng **chưa cài** nên "vô nghiệm" chỉ đúng trong miền nhân đôi âm gốc; hợp âm bảy, hợp âm sáu chưa có trong bài tập; Schoenberg op. 19 số 2 bị đọc ra giọng (86% nốt trong âm giai) — lỗi đã biết.
10. **Rủi ro:** trang sách do trợ lý đọc từ scan, chưa người kiểm (`checkedBy: assistant`).
11. **Chưa làm:** điều biến/ly giọng tự suy (đang dùng của `/analyze`); luật D7 (tr. 47 – 52) trong bài tập.
12. **Nhãn:** IMPLEMENTED AND TESTED (phạm vi trên); hợp âm bảy trong bài tập: NOT IMPLEMENTED.

## GĐ10 — Giai điệu, tiết tấu, kết cấu, hình thức, phong cách
| Mô-đun | Phân loại | Có | Nhãn |
|---|---|---|---|
| `melody.line` | hình thức hoá (dữ kiện) + giả thuyết (câu) | âm vực, quãng, hình nét, mẫu lặp (motif), mô tiến, câu, kiểm giới hạn | IMPLEMENTED AND TESTED |
| `rhythm.meter` | hình thức hoá | trường độ, nhịp (đọc từ bản), lưới trọng âm, nghịch phách, mẫu ô nhịp, giãn ×2, đa tiết tấu 3:2, kiểm giới hạn | IMPLEMENTED AND TESTED |
| `texture.voices` | phân tích | số bè, đồng bộ, chuyển động từng cặp, chéo bè, mô phỏng; loại kết cấu có cơ sở hoặc AMBIGUOUS | IMPLEMENTED AND TESTED |
| `form.sections` | phân tích (giả thuyết) | adapter `formOf` của /analyze: nhắc lại, câu, đoạn, tên hình thức | IMPLEMENTED AND TESTED |
| `style.features` | xác suất — chỉ quan sát | biến âm, độ trải cao độ, mật độ, âm vực; quy kết tác giả → UNKNOWN | PARTIALLY IMPLEMENTED (cố ý: không có mô hình phong cách) |

1. **Đã làm:** 5 mô-đun trên, qua cùng hợp đồng phân tích và đầu mối `analyze`.
2. **Tệp:** `domains/general/{common,melody,rhythm,texture,form,style}.ts`.
3. **Thiết kế:** dữ kiện đếm trên nốt; mọi diễn giải kèm cơ sở; ngưỡng ghi là quy ước của người biên soạn.
4. **Kiểm thử:** `domains/general/phase10.test.ts` (10 ca, đáp án từ định nghĩa: mô tiến, nghịch phách, đa tiết tấu, canon…).
5. **Kết quả:** đạt hết.
6. **Độ phủ:** mỗi mô-đun có ca dương tính, ca thiếu dữ liệu hoặc mơ hồ.
7. **Chuẩn:** hợp xướng Bach → chủ điệu; canon viết tay → phức điệu mô phỏng; piano Mozart/Joplin → AMBIGUOUS (thử ba tiêu chí, không tiêu chí nào tách được giai điệu + đệm khỏi phức điệu tự do một cách đáng tin — nên báo mơ hồ thay vì đoán).
8. **Hiệu năng:** cả 8 mô-đun trên Maple Leaf Rag (~1.600 nốt) ~0,8 s.
9. **Giới hạn:** motif chỉ lặp đúng (chưa đảo, nghịch hành, giãn); câu không dùng hoà âm; một bè piano nhiều giọng không tách; nhịp chỉ lấy số chỉ nhịp đầu.
10. **Rủi ro:** ngưỡng kết cấu/câu chỉnh trên ít bản.
11. **Chưa làm:** giai điệu + đệm đáng tin; sonata/rondo như kiểm định (hiện chỉ giả thuyết của /analyze); mô hình phong cách.
12. **Nhãn:** xem bảng.

## Tích hợp và cổng kiểm thử
- Đơn vị / tích hợp / kiểm chứng / hồi quy / biên / hết giờ – huỷ / chuẩn đối chiếu / truy vết: có (các tệp test trên + Wave A–B).
- **E2E:** đường worker → engine → kiểm chứng chạy thật trên luồng thật (`runtime.test.ts`). Playwright không chạy lại ở máy vì giao diện không đổi; CI chạy đủ Chromium + WebKit.
- Không dùng mock làm bằng chứng tích hợp (trừ một ca giả trả lời mang mã cũ để thử chống kết quả cũ).
- Logic sinh và logic kiểm tách nhau: máy sinh đề/phối hoà âm không tự chấm; bộ kiểm viết tay không dùng ngôn ngữ luật.
