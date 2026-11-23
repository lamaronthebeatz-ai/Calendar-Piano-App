# Thêm một lĩnh vực mới vào UMRE (không sửa lõi)

Mẫu đã làm thật hai lần: hoà âm bốn bè (Wave B–C) và phối hoà âm giai điệu (Wave C). Các bước, theo thứ tự:

1. **Nguồn trước.** Sách / bài phải có trong thư mục `src/features/sources/curated.ts` (kho bằng chứng từ chối nguồn gõ tay). Ghi trang của từng luật; chỗ sách không nói rõ ghi `caveat`, chỗ mâu thuẫn ghi mục `ambiguous`.
2. **Sổ luật** `src/umre/rulebook/<lĩnh vực>.ts`: `RuleSpec` (id ổn định, name, statement, severity hard/soft, weight cho soft, citations, scope, caveat, logic), `permitted`, `ambiguous`, `definitions` (bảng máy đọc nằm trong `data`, một chỗ duy nhất). Hằng `<X>_RULEBOOK_ID`, `<X>_RULEBOOK_VERSION`. `auditRulebook` phải sạch.
3. **Luật trong ngôn ngữ luật** `src/umre/rules/<lĩnh vực>.ts` trên các truy vấn của `rules/queries.ts` (thêm truy vấn mới nếu cần — truy vấn chỉ tính dữ kiện, mọi phán xét ở luật). Luật mềm KHÔNG được dùng để cắt nhánh tìm kiếm (`hardOnly`).
4. **Bộ kiểm độc lập thứ hai** viết tay, không dùng ngôn ngữ luật (mẫu `domains/harmony/check.ts`). Bộ kiểm (`validation/<lĩnh vực>.ts`) so hai bộ kiểm từng luật; bất đồng → UNKNOWN, không bao giờ VALID.
5. **Bài và mô hình ràng buộc** `domains/<lĩnh vực>/task.ts`: kiểu bài, `check<X>Task`, `<x>Model` (CspModel: miền = biến + ứng viên; miền là giới hạn tìm kiếm, ghi rõ trong `domain`, không phải luật).
6. **Bộ giải**: dùng `search()` chung (mẫu `solvers/csp.ts`) hoặc bọc bộ giải sẵn có (mẫu `solvers/counterpoint.ts`). `SolverDescriptor` khai `consults` (bộ kiểm nó tự chạy — những bộ này không xác nhận được kết quả của nó), `capabilities.proofOfUnsat` chỉ khi "vô nghiệm" thật sự là chứng minh trong miền, `requires.umre` = major.minor hiện tại.
7. **Đăng ký** trong `engine.ts` (sổ luật, bộ kiểm, bộ giải). Mô-đun phân tích: `AnalysisModule` (descriptor kind formalizable / analytical / probabilistic, limits) thêm vào danh sách ở `api.ts` hoặc `registerAnalysis`. Mọi dấu vân tự đổi.
8. **Giải thích**: `orchestration/orchestrator` tự dựng giải thích ba mức từ truy vết và sổ luật; mô-đun phân tích viết `text` {basic, technical, academic} cho từng phát hiện.
9. **Bằng chứng kiểm thử bắt buộc**: ca vi phạm viết tay cho MỌI luật (bị mọi bộ kiểm độc lập bắt), một trường hợp vô nghiệm có chứng minh, kiểm thử sai khác ≥ 300 lời giải đột biến (0 bất đồng), một ca trong `bench/suite.ts`, dòng trong bảng kiểm chứng (`rulebook/verification.test.ts`).
10. **Tài liệu**: `KNOWN_LIMITATIONS.md`, `RULEBOOK_CHANGELOG.md`, `ACADEMIC_VERIFICATION.md`.

Không cần sửa: biểu diễn, ngôn ngữ luật, bộ máy ràng buộc, tìm kiếm, điều phối, giải thích, worker, đầu mối. Nếu thấy phải sửa một trong các thứ đó, đó là quyết định kiến trúc — ghi lý do, đánh giá ảnh hưởng, chạy hồi quy toàn bộ.
