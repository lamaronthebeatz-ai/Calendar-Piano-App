# UMK — Unified Music Knowledge (`src/umk/`, trang `/umk`)

Báo cáo đầy đủ + kiểm kê: `docs/umk/REPORT.md`. Ở đây: điều Claude sau cần biết.

- **Không chép tri thức.** UMK đọc tại chỗ: bài (`virtual:theory-index`), bản đồ âm nhạc học, mục thư viện, `terms.json` (fetch qua `?url`, `loadGlossary()`; trước khi tải xong `glossaryTerms()` rỗng — giao diện dựng lại bằng `key`), `curated.ts`, thư mục build (`loadBibliography`), sổ luật. Thêm tri thức = sửa nhà của nó, UMK tự thấy.
- **Sổ đăng ký sổ luật** `rulebooks.ts`: nơi duy nhất dựng sổ luật (`rulebook(id)`, `allRulebooks()`); UMRE (`engine.ts`, `solvers/csp.ts`, `domains/counterpoint/page.ts`, `umre/theory.ts`) lấy từ đây. Thêm sổ luật = thêm một dòng `REGISTERED` (truyền thống, lĩnh vực, tệp test, bài nêu luật). Hai truyền thống không trộn: sổ mới, không luật mới trong sổ cũ.
- **Mã**: thêm `x:` thuật ngữ, `d:` lĩnh vực, `rb:<id>@<bản>`, `r:<sổ>/<mục>` vào `knowledge/ids.ts` (một hệ mã). Quan hệ mới là cạnh của đồ thị tri thức (`RELATIONS`: states, inRulebook, lifts, within, affects, names, formalizes) — `edges.ts`; `/graph` nạp qua `graphBridge.ts` (lười).
- **Nguồn gốc** `provenance.ts`: một bộ từ vựng, luôn giữ `original`; máy không bao giờ "verified".
- **Suy luận** `reasoning.ts`: `assembleReasoningContext` → `toUmreRequest` (từ chối sai sổ luật, từ chối câu hỏi không hình thức hoá) → `recordOf`. Phân tích: không gắn sổ luật bốn bè (sổ đó cho viết, không cho phân tích). `analyze` gửi thêm `context.umk` → dấu vân UMRE đổi theo ngữ cảnh (đúng ý).
- **Phản hồi** `feedback.ts` (`umk:feedback`, v1): khoảng trống + đề xuất có trạng thái; không bao giờ sửa tri thức.
- **Test**: `vitest.config.ts` alias `virtual:theory-index` → `src/umk/testing/theoryIndex.node.ts` (thư viện thật từ content modules, có `BODIES`). Test đơn vị nào cũng dùng được bài thật từ nay.
- Giao diện: `KnowledgeUsed.tsx` (khối "Tri thức UMK đã dùng" dưới kết quả UMRE), `KnowledgeCenter.tsx`, `umk.css`; nhãn ở `labels.ts` (tách khỏi component vì fast refresh).
