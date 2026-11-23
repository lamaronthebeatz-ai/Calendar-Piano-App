# Nhật ký triển khai

## 2026-11-23 — GĐ1: Hệ biểu diễn âm nhạc thống nhất

**Tạo mới** (`src/umre/repr/`): `rational.ts`, `pitch.ts`, `interval.ts`, `tonal.ts`, `time.ts`, `score.ts`, `harmony.ts`, `structure.ts`, `validate.ts`, `schema.ts`, `index.ts`; `adapters/counterpoint.ts`, `adapters/compose.ts`, `adapters/midi.ts`, `adapters/harmonyCalc.ts`; test `core.test.ts` (50), `adapters/adapters.test.ts` (11). Tài liệu `docs/umre/*` (11 tệp).

**Sửa**: không sửa mã nguồn có sẵn. Chỉ thêm tài liệu (`CLAUDE.md` một dòng bảng, `docs/STATUS.md`, `docs/notes/decisions.md`).

### Kiểm thử (đã chạy thật: `npx vitest run src/umre` → 61/61 qua)
- Lõi (50): số hữu tỉ; cao độ – MIDI – viết lại; bảng quãng và khứ hồi tên ↔ quãng cho mọi chất lượng hợp lệ ở quãng 1 – 15; dịch giọng và đảo quãng; **đối chiếu với `interval()` của phức điệu trên > 800 cặp**; 15 hoá biểu trưởng và giọng song song; điệu thức nhà thờ trên phím trắng; `signatureAlter` = `sigAlter` (−7…7); `signatureOf` = `keySig` cho mọi giọng của trang phức điệu; âm giai và bậc; chia ô nhịp có đổi nhịp và ô lấy đà; tổng phổ mẫu hợp lệ, gộp nốt nối; **11 tổng phổ hỏng, mỗi cái ra đúng mã lỗi**; hợp âm, thế đảo, số bass, nhận hợp âm từ tên nốt, cách xếp; khứ hồi JSON và từ chối phiên bản lạ.
- Bộ chuyển đổi (11): phức điệu khứ hồi chính xác (nốt nối, biến âm, ba bè, giọng Dorian đặt tay); **lời giải thật của `msolve` (ba bè trên cantus firmus) → UMRE hợp lệ, khứ hồi không đổi**; trình soạn nhạc khứ hồi **bằng nhau tuyệt đối** với bản mẫu có hợp âm, nốt nối qua vạch nhịp, liên ba, dấu lặng, đổi giọng – nhịp – khoá, lời, sắc thái, luyến, nhạc cụ dịch giọng; MusicXML ghi – đọc lại giữ cao độ, vị trí, trường độ, nối; bài từ phức điệu ra được bản soạn nhạc và tệp MIDI; MIDI mức nốt áp dụng dịch giọng contrabass (−12), gộp nốt nối, khứ hồi; từ chối nốt chồng trong một track; bảng tính hoà âm.

### Lỗi gặp khi làm
- `-0` từ `-x || …` trong `signatureAlter` và phủ định quãng → thêm `|| 0`.
- Trùng tên `isCompound` (quãng / nhịp) → đổi bên nhịp thành `isCompoundMeter`.
- Test MusicXML cần `DOMParser` → `// @vitest-environment happy-dom` (như `features/compose/exchange.test.ts`).

### Nghiệm thu GĐ1
Đủ các yêu cầu trong chỉ thị: kiểu chặt, đơn vị rõ, id ổn định, kiểm hợp lệ, chuyển đổi hai chiều, phiên bản, tương thích MIDI và MusicXML, mở rộng qua `ext` và trường tuỳ chọn. Giới hạn ở `KNOWN_LIMITATIONS.md`.

## 2026-11-23 — Wave B: GĐ5 kiểm chứng độc lập, GĐ6 giải thích – bằng chứng, GĐ7 điều phối

### Kiểm tra điều kiện đầu vào (Wave A)
| Thành phần | Thực trạng khi bắt đầu | Ảnh hưởng tới Wave B | Đã làm |
|---|---|---|---|
| GĐ1 biểu diễn | đủ, 61 test | — | dùng nguyên |
| GĐ2 sổ luật | **không có** ở mức UMRE; luật phức điệu nằm trong `rules.ts` (RuleId, RULES, isSoft) và bảng kiểm toán `docs/notes/counterpoint.md` | GĐ5 cần mã luật + mức; GĐ6 cần nguồn | thêm hợp đồng tối thiểu `rulebook/` + sổ luật phức điệu dạng dữ liệu (không đổi luật nào) |
| GĐ3 ràng buộc | **không có** ở mức UMRE | không chặn: bộ giải lĩnh vực tự mang ràng buộc | không làm |
| GĐ4 tìm kiếm | **không có** ở mức UMRE; `solveMany`/`msolve` có sẵn, ba trạng thái, có bộ kiểm độc lập riêng | dùng làm bộ giải đầu tiên qua adapter | không viết lại |

### Tạo mới
`src/umre/version.ts`, `task.ts`, `engine.ts`; `rulebook/rulebook.ts`, `rulebook/counterpoint.ts`; `evidence/evidence.ts`; `domains/counterpoint/task.ts`; `validation/types.ts`, `validation/native.ts`, `validation/counterpoint.ts`; `explain/trace.ts`, `explain/explain.ts`; `orchestration/solver.ts`, `orchestration/registry.ts`, `orchestration/orchestrator.ts`; `solvers/counterpoint.ts`; `testing/fixtures.ts`. Test: `validation/validation.test.ts` (13), `explain/explain.test.ts` (8), `orchestration/orchestration.test.ts` (12).

**Sửa:** không sửa mã nguồn có sẵn nào (kể cả `features/counterpoint/`). Tài liệu: `docs/umre/*`, `docs/STATUS.md`, `docs/notes/decisions.md`, `CLAUDE.md` (một dòng bảng).

### Kết quả chạy thật
- `npx vitest run src/umre`: 94/94 (GĐ1 61 + Wave B 33).
- `npm test` toàn app: 349/349 (316 cũ không đổi + 33 mới). `tsc -b` sạch; `lint` 4 cảnh báo cũ, không cảnh báo mới; `check:links`, `build`, `budget` qua.
- Kiểm sai khác: 300 lời giải đột biến — hai bộ kiểm độc lập không bất đồng lần nào; `VALID` ⇔ `verify` sạch ⇔ `check` sạch. (Thử ngoài repo trước đó: 1.197 đột biến trên ba bài, có bài có biến thể Iv: 178 VALID, 1.019 INVALID, 0 bất đồng.)
- Tích hợp: hai bè → SOLVED (mọi lời giải VALID, bè đề giữ nguyên); ba bè → SOLVED; ✱ ở phách đầu → PROVEN_UNSAT; bài 12 ô hai biến thể với 5 ms → TIMEOUT; bộ giải "nói dối" (đổi một nốt thành bước quãng 7 sau khi tìm) → UNKNOWN, mọi phương án INVALID với lỗi `leap`; sai một nửa → SOLVED, phương án sai bị tách ra.

### Lỗi gặp khi làm
- Đếm tay sai số trích dẫn có trang (32 → đúng là 29); test đã bắt.
- Bộ giải thích tự tra kho bằng chứng nên sập khi kho hỏng (thành `explanation-error`) → nay tra an toàn, nói rõ "không truy được nguồn của …".
- `erasableSyntaxOnly`: không dùng tham số thuộc tính (`constructor(readonly x)`) trong class.

## 2026-11-23 — Sau rà soát: bước 1–4 (xem `AUDIT_2026-11-23.md` § 6)
**Tạo mới:** `repr/texture.ts` (+ test), `rules/lang.ts`, `rules/queries.ts`, `rules/counterpoint.ts`, `rules/rules.test.ts`, `validation/independence.ts`, `testing/gold.ts`.
**Sửa:** `validation/counterpoint.ts` (thêm bộ kiểm `umre-rules`, so mọi cặp bộ kiểm độc lập, `complete` theo biến thể), `validation/native.ts` (dùng `verticals`), `validation/types.ts`, `orchestration/{solver,orchestrator}.ts` (`consults`, xác nhận độc lập, bước `confirm`), `solvers/counterpoint.ts`, `rulebook/{rulebook,counterpoint}.ts` (`data` cho định nghĩa, caveat `dis-weak`, `checkedBy`), `evidence/evidence.ts` (`checkedBy` bắt buộc khi trên mức chưa xác minh), `explain/explain.ts`. Không sửa `features/`.
**Kết quả:** `npx vitest run src/umre` 111/111. Thử đột biến ngoài repo: 2.004 + 1.775 phương án — 0 bất đồng trên lời giải thật; mọi bất đồng còn lại là `umre-rules` chặt hơn `verify.ts` (hai loại đã ghi).

## 2026-11-23 — Biến thể, GĐ3–4, thí điểm hoà âm
**Tạo mới:** `domains/counterpoint/{versions,csp}.ts` (+ test), `constraints/model.ts`, `search/search.ts` (+ test), `rules/harmony.ts`, `rulebook/harmony.ts`, `domains/harmony/{task,check}.ts` (+ test), `validation/harmony.ts`, `solvers/csp.ts` (hai bộ giải).
**Sửa ngoài UMRE:** `features/counterpoint/{rules,verify,multi}.ts` — ba chỗ lệch giáo trình (ghi ở `docs/notes/counterpoint.md`).
**Kết quả:** `src/umre` 124/124; phức điệu 56/56; E2E phức điệu Chromium 16/16.

## 2026-11-23 — Wave C (GĐ8 – 10 + tích hợp)
**Tạo mới:** `api.ts`, `analysis/{types,run}.ts`, `runtime/{host,serve,umre.worker}.ts`, `orchestration/rank.ts`, `validation/coverage.ts`, `rulebook/cases.ts`, `domains/counterpoint/{ops,analysis}.ts`, `domains/harmony/{identify,harmonize,reasoning,tonal,analysis}.ts`, `domains/general/*`, tài liệu `WAVE_C.md`, `COVERAGE.md`.
**Sửa:** sổ luật (phân loại, logic, permitted/ambiguous, trọng số), truy vấn `harmony.progression`, luật hoà âm + bộ kiểm viết tay, bộ kiểm hoà âm (hai loại bài, luật mềm, not-applicable), bộ điều phối (bước xếp hạng), `scripts/analyze/eval.mjs --umre`. Ngoài UMRE: chỉ thêm `softWeight` (`features/counterpoint/rules.ts`).
**Kết quả:** toàn bộ vitest đạt; Bach qua UMRE = bộ máy gốc (83,9 / 78,1 / 77,1%).

## 2026-11-23 — Wave D (GĐ11 – 12)
**Tạo mới:** `bench/suite.ts`, `scripts/umre/bench.mjs`, `runtime/ops.ts` (dấu vân, cache, lỗi, chẩn đoán), `domains/harmony/{analyzeOnce,cases}.ts`, `theory.ts`, `theorySlugs.ts`, `domains/counterpoint/page.ts` (Wave C, mở rộng), giao diện `features/analyze/UmrePanel.tsx`, `features/theory/UmreRules.tsx`, `features/compose/HarmonizePanel.tsx`; test `runtime/reliability.test.ts`, `rulebook/verification.test.ts`, `theory.test.ts`, `tests/umre-analyze.spec.ts`; tài liệu `BENCHMARKS.md`, `API.md`, `EXTENSION_GUIDE.md`, `RULEBOOK_CHANGELOG.md`, `RELEASE_CHECKLIST.md`, `WAVE_D.md`.
**Sửa lõi (có đánh giá ảnh hưởng):** `repr/texture.ts verticals` (khử trùng bằng Map, con trỏ — test so với bản cũ trên mọi cặp bè hai bản nhạc thật); `api.ts handle` không còn ném lỗi (trả `op: 'error'`); phiên bản máy 1.0.0, sổ luật 2.
