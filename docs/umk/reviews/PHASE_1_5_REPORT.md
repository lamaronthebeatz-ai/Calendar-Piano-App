# UMK Phase 1.5 — Kiểm định học thuật và rà soát biên tập: báo cáo nghiệm thu (24/11/2026)

Branch `umk/phase-1-5-academic-verification` (từ `main` @ 4bbdc65). Người rà: trợ lý máy (Claude), làm trên mã nguồn và nội dung thư viện hiện tại; **chưa có người biên soạn hay người dạy duyệt**. Báo cáo chi tiết: `TERMINOLOGY_REVIEW.md`, `RULEBOOK_REVIEW.md`, `OPEN_QUESTIONS.md`. Dữ liệu rà soát: `src/umk/reviews.json`.

**Giới hạn lớn nhất:** bản scan giáo trình Phạm Tú Hương (1991) và sách Rimsky-Korsakov không có trong repo, nên không trang sách nào được đọc lại trong Phase 1.5. Vì vậy không mục nào được nâng lên "nguồn nói trực tiếp" hay "đã xác minh".

## 1. Số lượng đã rà soát
| Nhóm | Số mục | Ghi chú |
|---|---|---|
| Xung đột thuật ngữ (`termConflicts()` ở 4bbdc65) | 9 | gom theo gốc thành 7 mục rà soát |
| Luật dựa cách hiểu / quy ước (chưa xác minh) | 9 | khớp số liệu báo cáo trước |
| Luật có caveat, nguồn đối chiếu một phần, định nghĩa dựa cách hiểu | 15 | tiêu chí mở rộng của Phase 1.5 |
| Câu hỏi mở của sổ luật | 7 | 6 phức điệu + 1 hoà âm, khớp báo cáo trước |
| **Tổng** | **40** | hiện thành 38 vấn đề trong `/umk?tab=gaps` (các xung đột cùng gốc gộp một) |

## 2. Đã xác minh
- **0** luật được nâng mức căn cứ. Không có nguồn gốc nào được đọc lại, và test không chứng minh tính đúng học thuật.
- **1** xung đột thuật ngữ được xác định là dương tính giả của bộ dò: "Hòa âm" và "họa âm" khác dấu thanh. Đã sửa bộ dò, dữ liệu không đổi.
- **1** câu hỏi mở (`a.iv-v-adjacent`) được luật hiện có trả lời: đọc theo chặng tr. 23 / 25, § 34. Câu hỏi vẫn ở trong sổ luật tới khi người biên soạn xác nhận.

## 3. Cần người biên soạn quyết — 12
- 6 thuật ngữ: Âm nhạc học / Sử học âm nhạc; Hòa âm → Chuỗi bồi âm; Dấu hoá / Hoá biểu; Đại phong cầm; điệp khúc; Đàn tỳ bà / pipa.
- 5 luật:
  - `no-gap` mạnh hơn nguồn.
  - `h.repeat-change` yếu hơn nguồn.
  - `h.spacing` lệch với bài thư viện (quãng 6 so với quãng 8).
  - `h.upper-third`, `h.strong-weak` (phạm vi, cách tính phách).
- 1 câu hỏi: `a.rests`.

## 4. Cần nguồn gốc (đọc lại trang sách) — 9
- 7 luật: `end`, `range`, `cadence-step`, `h.crossing`, `crossing` (ghim trang), `def.strong-beat`, `def.perfect`.
- 2 câu hỏi: `a.suspension-intervals`, `a.repeat-count`.

## 5. Cần người dạy xác nhận — 13
- 11 luật: `dis-both`, `star`, `star-extra`, `quarter-prep`, `chromatic-near`, `repeat3`, `rhythm-change`, `perfects3`, `suspension`, `dis-weak`, `p.weak-suspension`.
- 2 câu hỏi: `a.many-perfects`, `a.rhythm-change-beats`.
- Ngoài ra: 1 câu hỏi chưa giải (`a.cross-relation`, giáo trình chưa thấy nói); 1 luật không cần làm gì (`weak-form`).

## 6. Thay đổi code thực tế
| Tệp | Thay đổi |
|---|---|
| `src/umk/terminology.ts` | Bộ dò dạng viết dùng chung so có dấu thanh (`toneKey`, chỉ gộp hai cách đặt dấu oà/òa, oè/òe, uỳ/ùy). Mã xung đột giữ dạng cũ để quyết định đã ghi vẫn khớp. Dạng viết là nhãn Wikidata (`viwiki`) được ghi `wikidata-label`, trừ khi người biên soạn cũng ghi nó làm bí danh bài. |
| `src/umk/schema.ts` | Lược đồ **1.1.0** (thêm, không phá): `TermFormRelation` thêm `wikidata-label`; `ProvenanceKind` thêm `unsourced-claim`; `Provenance.checkedBy`. Kiểm hợp lệ mới: cách hiểu / quy ước không được ghi "verified"; mục "verified" phải ghi người đối chiếu. |
| `src/umk/provenance.ts` | Quy ước người dạy (`unverified-claim`) không còn bị ánh xạ thành "cách hiểu người biên soạn". Thêm `CHECKED_BY_LABEL`, `basisLabel`. |
| `src/umk/rulebooks.ts` | Mỗi mục ghi người đối chiếu yếu nhất (`checkedBy`). |
| `src/umk/inventory.ts`, `reasoning.ts` | Lời báo khoảng trống phân biệt cách hiểu và quy ước. |
| `src/umk/reviews.ts`, `reviews.json` | Dữ liệu rà soát + `editorialIssues()`, `entriesNeedingReview()`. |
| `src/umk/feedback.ts` | Kho phản hồi **v2**: `recordDecision` (phương án, lý do, nguồn, trước/sau, người quyết chỉ khi người dùng gõ), `undoDecision` (giữ lịch sử), `decisionOf`; đọc được kho v1. |
| `src/umk/KnowledgeCenter.tsx`, `umk.css` | Tab Khoảng trống thêm "Vấn đề học thuật chờ quyết": lọc theo loại, mỗi mục hiện mã, lĩnh vực, vấn đề, nguồn, mức căn cứ, ảnh hưởng tới bộ giải, trạng thái, đề xuất; có ghi quyết định, lịch sử, hoàn tác; ghi rõ dữ liệu chỉ nằm trên thiết bị. Thẻ nguồn gốc hiện người đối chiếu. |

**Không đổi:** sổ luật (luật, mức bắt buộc, phạm vi, ngoại lệ, logic bộ kiểm, phiên bản), UMRE, `terms.json`, nội dung bài, bí danh.

## 7. Thay đổi dữ liệu thực tế
- Dữ liệu tri thức: **không có**.
- Dữ liệu người dùng: kho `umk:feedback` lên v2 khi ghi lần đầu; dữ liệu v1 đọc nguyên (test).

## 8. Kết quả kiểm thử (chạy thật trên máy này, 24/11)
| Lệnh | Kết quả |
|---|---|
| `npx tsc -b` | đạt |
| `npm run lint` | 4 cảnh báo (đúng 4 cảnh báo cũ) |
| `npm test` | 50 tệp, **498/498** đạt (có `src/umk/review.test.ts` 11 ca mới, `umk.test.ts` 14 ca) |
| `npm run check:links` | 1.538 bài, 0 liên kết hỏng |
| `npm run build` + `budget` | đạt (JS khởi động 433/600 KB; precache 14.464/15.360 KB) |
| `node scripts/umre/bench.mjs --check` | "mọi kết quả giống lần đo chuẩn" |
| `npx playwright test --project='chromium-*'` | **348/348** đạt, gồm `tests/umk.spec.ts` (3 ca × điện thoại + màn rộng, có ca mới ghi/hoàn tác quyết định và không tràn ngang). Không có test hỏng cần chạy lại trong lượt này. |
| WebKit | chưa chạy ở máy này; chạy trên CI của PR |
| Ảnh chụp | tab Khoảng trống ở 393×852 và 1280×900: không tràn ngang, tên luật hiện thay vì chỉ mã |

## 9. Giới hạn còn tồn tại
- Không đọc lại nguồn gốc (scan không có trong repo). Mọi trích dẫn "đã đối chiếu" là trợ lý máy đọc scan ở phiên trước.
- Phân loại thuật ngữ và mức căn cứ là đánh giá của trợ lý máy dựa trên định nghĩa và nội dung thư viện, chưa có người biên soạn xác nhận.
- Quyết định lưu trên từng thiết bị, không đồng bộ. Áp quyết định vào dữ liệu là việc tay, trong commit riêng.
- Bộ phân giải liên kết của thư viện (`keyIndex`) vẫn bỏ dấu thanh: "Hòa âm" mở bài Chuỗi bồi âm (hiện chưa bài nào liên kết dạng này).
- `build.py` vẫn chèn nhãn Wikidata vào biến thể; UMK chỉ gắn đúng nhãn quan hệ, không sửa nguồn dữ liệu.

## 10. Quyết định cần Lamar đưa ra
1. **`no-gap`** (cấm mọi dấu lặng): giữ làm giới hạn miền tìm kiếm nhưng không chấm bài học viên là vi phạm bắt buộc; hay đổi thành khuyến nghị "nhiều dấu lặng" và mở miền tìm kiếm; hay giữ nguyên.
2. **`h.spacing`**: quãng 6 (sổ luật) hay quãng 8 (bài `luat-hoa-am-bon-be`) — đọc lại Rimsky tr. 20.
3. **`h.repeat-change`**: nâng thành bắt buộc như sách, hay giữ là khuyến nghị và ghi lý do.
4. **Quy ước ✱ và nốt đen chuẩn bị** (`star`, `star-extra`, `quarter-prep`): xác nhận bằng văn bản (ai, phạm vi).
5. **6 thuật ngữ** (`/umk?tab=gaps`, lọc "Xung đột thuật ngữ"), nhất là bỏ "Dấu hóa" khỏi biến thể của Hoá biểu và "Đàn tỳ bà" khỏi biến thể của Pipa.
6. **Bộ phân giải liên kết** có nên phân biệt dấu thanh không (đổi toàn thư viện).
7. **Đóng câu hỏi `a.iv-v-adjacent`** theo cách đọc theo chặng.
8. Các câu hỏi cho người dạy (`a.many-perfects`, `a.rhythm-change-beats`, `a.cross-relation`, ngưỡng `chromatic-near`).

PR này **không nên merge** trước khi các quyết định học thuật trên có người có thẩm quyền xác nhận. Riêng phần code (bộ dò, lược đồ 1.1.0, quy trình quyết định) không thay đổi kết quả suy luận, có thể merge riêng nếu Lamar muốn.
