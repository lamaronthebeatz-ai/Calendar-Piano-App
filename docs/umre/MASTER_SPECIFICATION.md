# UMRE — Đặc tả tổng (Unified Music Reasoning Engine)

UMRE là lõi suy luận âm nhạc dùng chung cho các phần đã có của app (phức điệu `/counterpoint`, soạn nhạc `/compose`, phân tích `/analyze`, bảng tính `/tools`). Nó **không thay** các phần đó: mỗi phần giữ mô hình và thuật toán riêng, nối vào UMRE qua bộ chuyển đổi (adapter). Chưa màn hình nào của app gọi UMRE.

## Các giai đoạn và trạng thái thật (đánh số theo chỉ thị của Lamar)

Nhãn: **IMPLEMENTED** có code · **TESTED** có test chạy thật · **INTEGRATED** nối với mô-đun thật của app · **NOT IMPLEMENTED** chưa có.

| Đợt | GĐ | Nội dung | Trạng thái |
|---|---|---|---|
| A | 1 | Biểu diễn âm nhạc thống nhất `src/umre/repr/` | IMPLEMENTED · TESTED · INTEGRATED (bộ chuyển đổi phức điệu, soạn nhạc, MusicXML, MIDI) |
| A | 2 | Sổ luật + ngôn ngữ luật | IMPLEMENTED · TESTED cho phức điệu (23/11 sau rà soát): `src/umre/rules/` — luật là dữ liệu, bộ đánh giá chung, ngoại lệ có phạm vi, cùng mã với sổ luật. Trước đó: chỉ khai báo — hợp đồng tối thiểu `src/umre/rulebook/` + sổ luật phức điệu (dữ liệu, có nguồn) — làm trong Wave B vì GĐ5–7 cần mã luật và nguồn. Chưa có ngôn ngữ luật, chưa có bộ chạy luật chung. |
| A | 3 | Bộ máy ràng buộc chung | NOT IMPLEMENTED ở mức UMRE. Ràng buộc phức điệu nằm trong `features/counterpoint/rules.ts`. |
| A | 4 | Tìm kiếm – tối ưu chung | NOT IMPLEMENTED ở mức UMRE. Dùng bộ giải chuyên ngành có sẵn (`solveMany`, `msolve`) qua adapter. |
| B | 5 | Kiểm chứng độc lập `src/umre/validation/` | IMPLEMENTED · TESTED · INTEGRATED — xác nhận độc lập với bộ giải (bộ kiểm luật UMRE) cho bài không biến thể; bài có biến thể → UNKNOWN cho tới khi UMRE tự dựng biến thể; 5 thí dụ giáo trình làm đáp án chuẩn |
| B | 6 | Giải thích, bằng chứng, truy vết `src/umre/explain/`, `src/umre/evidence/` | IMPLEMENTED · TESTED · INTEGRATED — truy vết dựng lại được quyết định, **không** dựng lại được quá trình tìm; "verified" = máy đối chiếu theo bảng kiểm toán, chưa có người duyệt |
| B | 7 | Điều phối bộ giải `src/umre/orchestration/`, `src/umre/solvers/` | IMPLEMENTED · TESTED · INTEGRATED (hai bộ giải phức điệu) — hết giờ / huỷ vô hiệu với bộ giải đồng bộ |
| C–D | 8–12 | (chưa có chỉ thị chi tiết) | NOT IMPLEMENTED |

Vì sao làm GĐ5–7 khi GĐ2–4 chưa đủ: chỉ thị Wave B cho phép "chỉ sửa phần cần thiết". GĐ5–7 cần (a) mã luật ổn định có nguồn — đã làm bản tối thiểu; (b) một bộ tìm kiếm — dùng bộ giải phức điệu có sẵn, vốn đã có ba trạng thái valid/unsat/unknown và bộ kiểm độc lập. Không có bộ máy ràng buộc chung thì UMRE **chưa** giải được bài của lĩnh vực mới nếu lĩnh vực đó không tự mang bộ giải.

**Rà soát 23/11:** `AUDIT_2026-11-23.md` — trạng thái từng tiêu chí, rủi ro R1–R8, thứ tự việc cần làm. Chưa sang Wave C.

## Nguyên tắc
1. **Không bịa luật.** Biểu diễn không chứa phán đoán phụ thuộc trường phái; sổ luật lấy luật từ code đang chạy và số trang từ bảng kiểm toán, có test giữ.
2. **Không trộn hệ lý thuyết.** Nhãn hoà âm mang hệ của nó; sổ luật mang lĩnh vực và nguồn.
3. **Thiếu bằng chứng thì ghi "chưa xác minh".** Nguồn chưa xác minh không sinh được trích dẫn "đã đối chiếu" (kho bằng chứng từ chối).
4. **Bộ giải tìm, bộ kiểm kiểm.** Kết quả chỉ là SOLVED khi bộ kiểm độc lập công nhận ít nhất một phương án.
5. **Không phá dữ liệu cũ, không sửa mô-đun cũ.** Wave B không sửa dòng nào trong `features/`.

## Tài liệu
`ARCHITECTURE.md` · `UNIFIED_MUSIC_REPRESENTATION.md` · `RULEBOOK_SPECIFICATION.md` · `SOLVER_SPECIFICATION.md` · `VALIDATION_SPECIFICATION.md` · `EVIDENCE_AND_EXPLANATION.md` · `PERFORMANCE_SPECIFICATION.md` · `ACADEMIC_VERIFICATION.md` · `IMPLEMENTATION_LOG.md` · `KNOWN_LIMITATIONS.md`
