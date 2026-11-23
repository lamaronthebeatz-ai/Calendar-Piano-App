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
| B | 7 | Điều phối `src/umre/orchestration/`, `src/umre/solvers/` | IMPLEMENTED · TESTED · INTEGRATED — 5 bộ giải thật / 2 lĩnh vực; hết giờ / huỷ chưa có tác dụng với bộ giải đồng bộ (chưa có lớp worker) |
| C–D | 8–12 | (chưa có chỉ thị chi tiết) | NOT IMPLEMENTED |

**Tiêu chí vào Wave C — đạt (có bằng chứng test):** lĩnh vực thứ hai (hoà âm bốn bè) chạy trên phần chung mà không viết bộ giải hay thuật toán tìm kiếm riêng: chỉ thêm sổ luật có nguồn, 7 luật trong ngôn ngữ luật, mô hình miền (nốt của hợp âm trong âm vực), và một bộ kiểm viết tay để có xác nhận độc lập (`src/umre/domains/harmony/harmony.test.ts`).

(Lịch sử) Vì sao từng làm GĐ5–7 khi GĐ2–4 chưa đủ: chỉ thị Wave B cho phép "chỉ sửa phần cần thiết". GĐ5–7 cần (a) mã luật ổn định có nguồn — đã làm bản tối thiểu; (b) một bộ tìm kiếm — dùng bộ giải phức điệu có sẵn, vốn đã có ba trạng thái valid/unsat/unknown và bộ kiểm độc lập. Không có bộ máy ràng buộc chung thì UMRE **chưa** giải được bài của lĩnh vực mới nếu lĩnh vực đó không tự mang bộ giải.

**Rà soát 23/11:** `AUDIT_2026-11-23.md` — trạng thái từng tiêu chí, rủi ro R1–R8, thứ tự việc cần làm. Chưa sang Wave C.

## Nguyên tắc
1. **Không bịa luật.** Biểu diễn không chứa phán đoán phụ thuộc trường phái; sổ luật lấy luật từ code đang chạy và số trang từ bảng kiểm toán, có test giữ.
2. **Không trộn hệ lý thuyết.** Nhãn hoà âm mang hệ của nó; sổ luật mang lĩnh vực và nguồn.
3. **Thiếu bằng chứng thì ghi "chưa xác minh".** Nguồn chưa xác minh không sinh được trích dẫn "đã đối chiếu" (kho bằng chứng từ chối).
4. **Bộ giải tìm, bộ kiểm kiểm.** Kết quả chỉ là SOLVED khi bộ kiểm độc lập công nhận ít nhất một phương án.
5. **Không phá dữ liệu cũ, không sửa mô-đun cũ.** Wave B không sửa dòng nào trong `features/`.

## Tài liệu
`ARCHITECTURE.md` · `UNIFIED_MUSIC_REPRESENTATION.md` · `RULEBOOK_SPECIFICATION.md` · `SOLVER_SPECIFICATION.md` · `VALIDATION_SPECIFICATION.md` · `EVIDENCE_AND_EXPLANATION.md` · `PERFORMANCE_SPECIFICATION.md` · `ACADEMIC_VERIFICATION.md` · `IMPLEMENTATION_LOG.md` · `KNOWN_LIMITATIONS.md`
