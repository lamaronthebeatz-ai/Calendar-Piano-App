# UMRE — Đặc tả tổng (Unified Music Reasoning Engine)

UMRE là lõi suy luận âm nhạc dùng chung cho các phần đã có của app (phức điệu `/counterpoint`, soạn nhạc `/compose`, phân tích `/analyze`, bảng tính `/tools`). Nó **không thay** các phần đó: mỗi phần giữ mô hình và thuật toán riêng, nối vào UMRE qua bộ chuyển đổi (adapter). Chưa màn hình nào của app gọi UMRE.

## Các giai đoạn và trạng thái thật (đánh số theo chỉ thị của Lamar)

Nhãn: **IMPLEMENTED** có code · **TESTED** có test chạy thật · **INTEGRATED** nối với mô-đun thật của app · **NOT IMPLEMENTED** chưa có.

| Đợt | GĐ | Nội dung | Trạng thái (23/11, sau rà soát và bổ sung) |
|---|---|---|---|
| A | 1 | Biểu diễn âm nhạc thống nhất `src/umre/repr/` (+ `texture.ts`: điểm cùng vang, dẫn giọng, lớp quãng, vị trí trong ô) | IMPLEMENTED · TESTED · INTEGRATED |
| A | 2 | Sổ luật + ngôn ngữ luật `src/umre/rulebook/`, `src/umre/rules/` | IMPLEMENTED · TESTED — luật là dữ liệu, một bộ đánh giá chung, ngoại lệ có phạm vi, nguồn theo mã luật; hai sổ luật (phức điệu, hoà âm bốn bè) |
| A | 3 | Bộ máy ràng buộc chung `src/umre/constraints/` | IMPLEMENTED · TESTED — biến (nốt của bè tự do), miền (do lĩnh vực khai), ràng buộc = luật cứng của sổ luật, "chắc chắn vi phạm" mới cắt nhánh |
| A | 4 | Tìm kiếm chung `src/umre/search/` | IMPLEMENTED · TESTED · INTEGRATED — quay lui, nhớ trạng thái chết, ba kết luận (có / vô nghiệm trong miền / hết giờ); chạy cho cả phức điệu và hoà âm. Chưa có tối ưu theo luật mềm |
| B | 5 | Kiểm chứng độc lập `src/umre/validation/` | IMPLEMENTED · TESTED · INTEGRATED — xác nhận độc lập với bộ giải (bộ giải khai `consults`), phủ mọi biến thể; đáp án chuẩn từ thí dụ giáo trình |
| B | 6 | Giải thích, bằng chứng, truy vết | IMPLEMENTED · TESTED · INTEGRATED — dựng lại quyết định, không dựng lại cây tìm kiếm; trích dẫn ghi ai đã đối chiếu (hiện: trợ lý máy) |
| B | 7 | Điều phối `src/umre/orchestration/`, `src/umre/solvers/` | IMPLEMENTED · TESTED · INTEGRATED — 7 bộ giải / 2 lĩnh vực; huỷ thật và hết giờ cứng qua worker `runtime/host.ts` |
| C | 8 | Phức điệu thành bộ giải lĩnh vực: sổ luật chuẩn hoá + bảng phủ, phân tích, sinh đề/gợi ý/chẩn đoán, xếp hạng luật mềm, worker | IMPLEMENTED AND TESTED (chưa nối giao diện) — `WAVE_C.md` |
| C | 9 | Hoà âm cổ điển: nhận diện, suy luận, phối hoà âm § 13, adapter /analyze, chuẩn Bach | IMPLEMENTED AND TESTED (hợp âm ba thế gốc) — `WAVE_C.md` |
| C | 10 | Giai điệu, tiết tấu, kết cấu, hình thức, phong cách (chỉ quan sát) | IMPLEMENTED AND TESTED; phong cách PARTIALLY (cố ý) — `WAVE_C.md` |
| D | 11 | Hiệu năng và độ tin cậy: bộ đo tái lập (`scripts/umre/bench.mjs`, `BENCHMARKS.md`), 3 tối ưu có test giữ kết quả, dấu vân + cache có giới hạn, lỗi có mã, nhật ký chẩn đoán, worker huỷ thật | IMPLEMENTED AND TESTED |
| D | 12A | Kiểm chứng học thuật: bảng từng luật sinh từ test, ca vi phạm viết tay cho mọi luật, thí dụ in, chuẩn Bach | 20/51 luật ACADEMICALLY VERIFIED WITHIN DECLARED SCOPE (đối chiếu tài liệu, chưa chuyên gia) — `ACADEMIC_VERIFICATION.md` |
| D | 12B | Tích hợp: Phức điệu (giải, sinh đề, chấm bài, mức học thuật), Phân tích (khối UMRE, 3 mức, xuất báo cáo), Lý thuyết (luật UMRE dưới bài), Soạn nhạc (phối hoà âm bốn bè) | IMPLEMENTED AND TESTED (E2E) |
| D | 12C | Tài liệu, phiên bản 1.0.0, checklist phát hành | `API.md`, `EXTENSION_GUIDE.md`, `RULEBOOK_CHANGELOG.md`, `RELEASE_CHECKLIST.md` |

**Tiêu chí vào Wave C — đạt (có bằng chứng test):** lĩnh vực thứ hai (hoà âm bốn bè) chạy trên phần chung mà không viết bộ giải hay thuật toán tìm kiếm riêng: chỉ thêm sổ luật có nguồn, 7 luật trong ngôn ngữ luật, mô hình miền (nốt của hợp âm trong âm vực), và một bộ kiểm viết tay để có xác nhận độc lập (`src/umre/domains/harmony/harmony.test.ts`).

(Lịch sử) Vì sao từng làm GĐ5–7 khi GĐ2–4 chưa đủ: chỉ thị Wave B cho phép "chỉ sửa phần cần thiết". GĐ5–7 cần (a) mã luật ổn định có nguồn — đã làm bản tối thiểu; (b) một bộ tìm kiếm — dùng bộ giải phức điệu có sẵn, vốn đã có ba trạng thái valid/unsat/unknown và bộ kiểm độc lập. Không có bộ máy ràng buộc chung thì UMRE **chưa** giải được bài của lĩnh vực mới nếu lĩnh vực đó không tự mang bộ giải.

**Rà soát 23/11:** `AUDIT_2026-11-23.md`. **Wave C (23/11):** `WAVE_C.md` — đầu mối `src/umre/api.ts`, báo cáo 12 mục từng giai đoạn; bảng phủ `COVERAGE.md`.

## Nguyên tắc
1. **Không bịa luật.** Biểu diễn không chứa phán đoán phụ thuộc trường phái; sổ luật lấy luật từ code đang chạy và số trang từ bảng kiểm toán, có test giữ.
2. **Không trộn hệ lý thuyết.** Nhãn hoà âm mang hệ của nó; sổ luật mang lĩnh vực và nguồn.
3. **Thiếu bằng chứng thì ghi "chưa xác minh".** Nguồn chưa xác minh không sinh được trích dẫn "đã đối chiếu" (kho bằng chứng từ chối).
4. **Bộ giải tìm, bộ kiểm kiểm.** Kết quả chỉ là SOLVED khi bộ kiểm độc lập công nhận ít nhất một phương án.
5. **Không phá dữ liệu cũ, không sửa mô-đun cũ.** Wave B không sửa dòng nào trong `features/`.

## Tài liệu
`WAVE_D.md` · `API.md` · `EXTENSION_GUIDE.md` · `RULEBOOK_CHANGELOG.md` · `RELEASE_CHECKLIST.md` · `BENCHMARKS.md` · `WAVE_C.md` · `COVERAGE.md` · `ARCHITECTURE.md` · `UNIFIED_MUSIC_REPRESENTATION.md` · `RULEBOOK_SPECIFICATION.md` · `SOLVER_SPECIFICATION.md` · `VALIDATION_SPECIFICATION.md` · `EVIDENCE_AND_EXPLANATION.md` · `PERFORMANCE_SPECIFICATION.md` · `ACADEMIC_VERIFICATION.md` · `IMPLEMENTATION_LOG.md` · `KNOWN_LIMITATIONS.md`
