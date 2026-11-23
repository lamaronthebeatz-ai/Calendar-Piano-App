# UMRE — Wave D (GĐ11 – 12), 23/11/2026 — máy 1.0.0, API 1.0.0

Mỗi giai đoạn báo 13 mục: (1) thành phần (2) tệp (3) API / hợp đồng đổi (4) vấn đề hiệu năng phát hiện (5) tối ưu đã làm (6) số đo trước / sau (7) kiểm thử (8) kiểm chứng học thuật (9) phạm vi tích hợp (10) chạy thật trong app (11) chưa xong (12) giới hạn (13) rủi ro.

## GĐ11 — Hiệu năng và độ tin cậy — IMPLEMENTED AND TESTED
1. Bộ đo tái lập (28 ca: biểu diễn, sổ luật, ràng buộc, tìm kiếm, kiểm chứng, điều phối, giải thích, phức điệu, hoà âm, 6 mô-đun phân tích, cache); dấu vân đầu vào; cache LRU có vô hiệu theo phiên bản; lỗi có mã – nhóm – giai đoạn – cách xử lý; nhật ký chẩn đoán có giới hạn, không chứa nốt nhạc; vòng đời tác vụ ở worker (`onEvent`, `state`).
2. `src/umre/bench/suite.ts`, `scripts/umre/bench.mjs`, `src/umre/runtime/ops.ts`, `src/umre/domains/harmony/analyzeOnce.ts`; sửa `api.ts`, `runtime/host.ts`, `repr/texture.ts`, `domains/general/rhythm.ts`, `domains/harmony/tonal.ts`, `domains/general/form.ts`.
3. `handle` → `Answer` (luôn có `meta`; lỗi là `op: 'error'`, không ném); thêm op `diagnostics`, `cache.clear`; `UmreHost(spawn, { onEvent })`. Test cũ mong lỗi bị ném đã đổi theo hợp đồng mới.
4. Hai bộ /analyze chạy hai lần khi dùng cả điệu tính và hình thức; `verticals` khử trùng bình phương + tìm nốt bằng quét lại từ đầu; tiết tấu lọc mọi nốt ở mỗi phách cho mỗi cặp bè. (Bộ nhớ 2 GB khi đọc MusicXML là của happy-dom dưới node, không phải UMRE.)
5. Dùng chung một lần /analyze (WeakMap theo tổng phổ); `verticals` khử trùng bằng Map + con trỏ (đúng ngữ nghĩa "nốt đầu tiên thoả"); đếm nốt mỗi phách một lần.
6. Maple Leaf Rag: 6 mô-đun 1.504 → 720 – 999 ms; tiết tấu 58 → 9 ms (đỉnh 738 → 525 MB); kết cấu 106 → 8 ms (đỉnh 844 → 500 MB). Bảng đủ: `BENCHMARKS.md`.
7. `runtime/reliability.test.ts` (9 ca: dấu vân, đổi phiên bản làm đổi dấu vân, không cache kết quả chưa kết luận, LRU, lỗi có mã, nhật ký không chứa nốt, tối ưu = chạy riêng, `verticals` mới = bản cũ trên mọi cặp bè hai bản nhạc thật, đầu vào hỏng); `runtime.test.ts` (huỷ < 200 ms, hết giờ cứng, superseded, kết quả cũ bị bỏ, vòng đời); `bench --check` (28/28 kết quả không đổi sau tối ưu và sau đổi phiên bản); rò bộ nhớ: heap giữ lại 2,3 MB (5 lần) vs 2,0 MB (25 lần).
8. —
9. Đầu mối dùng cho mọi tích hợp ở GĐ12B.
10. Worker UMRE chạy thật ở trang Phân tích và Soạn nhạc.
11. Báo tiến độ phần trăm (bộ tìm kiếm không có điểm báo).
12. Số đo của một máy (4 lõi Xeon, Node 22); giải bài phụ thuộc thời gian nên chỉ tái lập qua cache / kết quả lưu kèm dấu vân.
13. Thời gian bộ /analyze dao động ±20% trên máy dùng chung.

## GĐ12A — Kiểm chứng học thuật
1. Bảng từng luật (51 luật hai sổ luật) sinh từ test: nguồn, trang, mức đối chiếu, ai đối chiếu, bộ kiểm độc lập bắt ca vi phạm, thí dụ in, kết luận. Ca vi phạm viết tay cho đủ 17 luật hoà âm (thêm vào 19 ca phức điệu).
2. `rulebook/verification.test.ts`, `domains/harmony/cases.ts`, `docs/umre/ACADEMIC_VERIFICATION.md` (viết lại).
3. —  4–6. —
7. Âm tính giả trên ca viết tay 0/36; dương tính giả trên thí dụ in 0/5; âm tính giả trên hình sơ đồ cấm 0/2; 600 lời giải đột biến 0 bất đồng; 17 ca nhận diện hợp âm 0 sai; Bach: gốc 83,9%, giọng 77,1%, hợp âm phụ 34/90 (trực tiếp = qua UMRE).
8. **20/51 luật: ACADEMICALLY VERIFIED WITHIN DECLARED SCOPE** — theo nghĩa: nguồn là sách, trích dẫn có trang đã đối chiếu scan (bởi trợ lý máy), không có chỗ "cách hiểu", ca vi phạm bị ≥ 2 bộ kiểm độc lập bắt. **Không phải chứng nhận chuyên gia.** 12 đối chiếu một phần, 11 có nguồn nhưng chưa có ca kiểm (luật mềm phức điệu), 2 quy ước người dạy chưa có văn bản, 6 cách hiểu của người biên soạn. Mô-đun giai điệu / tiết tấu / kết cấu / hình thức / phong cách: IMPLEMENTED AND TESTED theo định nghĩa, không gắn nhãn kiểm chứng học thuật (không có bộ đáp án ngoài).
9–10. Bảng hiện cho người đọc qua khối "Luật trong bộ máy UMRE" ở Lý thuyết.
11. Người thẩm định thật (danh sách ở cuối `ACADEMIC_VERIFICATION.md`).
12. Bộ đối chiếu nhỏ, do người biên soạn viết theo câu chữ luật.
13. Một luật có thể bị đọc sai từ sách mà mọi test vẫn đạt — chỉ người thẩm định bắt được.

## GĐ12B — Tích hợp ứng dụng — IMPLEMENTED AND TESTED (E2E)
1. **Phức điệu** (từ Wave C, hoàn thiện): giải → chỉ hiện lời giải được xác nhận độc lập, xếp hạng; đề máy sinh qua kiểm độc lập; chấm bài có kết luận độc lập; thêm "Chi tiết học thuật" (sổ luật + phiên bản, bộ kiểm). **Phân tích**: khối "Phân tích và kiểm chứng của UMRE" (6 mô-đun, worker, ba mức Cơ bản / Kỹ thuật / Học thuật, xuất báo cáo `.md` cho Nghiên cứu). **Lý thuyết**: "Luật trong bộ máy UMRE" dưới 8 bài. **Soạn nhạc**: "Phối hoà âm bốn bè (UMRE)" — giai điệu khuông 1 → phương án đã xác nhận → mở thành bản mới.
2. `features/analyze/{UmrePanel.tsx,umre-panel.css}`, `features/theory/UmreRules.tsx`, `features/compose/HarmonizePanel.tsx`, `umre/{theory,theorySlugs}.ts`; sửa `AnalyzePage.tsx`, `TheoryPage.tsx`, `ComposePage.tsx`, `CounterpointPage.tsx`, `umre/domains/counterpoint/page.ts`.
3. `PageCheck.rulebook`; `SolveResult.umre.rulebook`.
4–6. Mọi khối UMRE tải lười: JS lúc mở app không đổi (433/600 KB).
7. `tests/umre-analyze.spec.ts` (Phân tích, Lý thuyết, Soạn nhạc — điện thoại + màn rộng), `tests/counterpoint.spec.ts`, `tests/intro.spec.ts`; `src/umre/theory.test.ts`, `src/umre/crossdomain.test.ts` (nhiều lĩnh vực trên cùng một bản, mỗi sổ luật kết luận riêng). Hồi quy Playwright Chromium toàn app.
8. —
9. Có: Phức điệu, Phân tích, Lý thuyết, Soạn nhạc, Nghiên cứu (qua báo cáo xuất). Không: Solfège, Nghe hợp âm, Công cụ, Hành trình, Sổ tay, Khám phá — các chức năng này không cần bộ suy luận (luyện tai, bảng tính, trò chơi, ghi chú, đồ thị tri thức) hoặc chưa có lĩnh vực UMRE tương ứng.
10. Cả bốn chạy thật trong app (không mock): worker UMRE, bộ kiểm độc lập, sổ luật thật.
11. Phức điệu ba – bốn bè, canon, Phần IV chưa qua UMRE; Nghiên cứu chưa có nút "gửi thẳng vào đề tài" (dùng tệp `.md`).
12. Phối hoà âm: ≤ 16 nốt, không dấu lặng, nhịp mẫu 2/4, chỉ hợp âm ba thế gốc.
13. Chưa thử Safari / iPhone thật (WebKit trên CI).

## GĐ12C — Tài liệu và phát hành
`API.md` (hợp đồng, trạng thái, worker, dấu vân, phiên bản), `EXTENSION_GUIDE.md`, `RULEBOOK_CHANGELOG.md`, `RELEASE_CHECKLIST.md` (đã chạy cho 1.0.0), `BENCHMARKS.md`, `ACADEMIC_VERIFICATION.md`, `KNOWN_LIMITATIONS.md`, `MASTER_SPECIFICATION.md`, `IMPLEMENTATION_LOG.md`. Phiên bản: máy 1.0.0, API 1.0.0, sổ luật phức điệu 2 và hoà âm 2 (đã đổi nội dung ở Wave C mà chưa tăng số — sửa ở đây).

## Nghiệm thu
Có bằng chứng cho: kiến trúc chạy (hồi quy + liên lĩnh vực), các lĩnh vực chạy (test từng lĩnh vực), kết quả được kiểm định độc lập (bộ kiểm không phải của bộ giải), nguồn truy được (bảng kiểm chứng, khối luật ở Lý thuyết), app thật sự dùng UMRE (4 phân hệ, E2E). Giới hạn quan trọng nhất còn lại: **chưa có người thẩm định chuyên môn**; mọi nhãn kiểm chứng là đối chiếu tài liệu.
