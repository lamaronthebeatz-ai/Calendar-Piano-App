# Lộ trình: trung tâm tri thức cho nhà âm nhạc học

Mục tiêu: biến thư viện (1.438 bài, 30 sách, bản đồ, bầu trời phân ngành) thành **công cụ nghiên cứu** — tra cứu, đối chiếu, trích dẫn được — bằng tiếng Việt, chạy offline, không backend. Không phải công cụ dạy học.

Nguyên tắc cho mọi giai đoạn:
- **Mỗi khẳng định truy được về nguồn** (có trang, có mức đối chiếu). Không có nguồn thì ghi rõ là chưa có.
- **Dữ liệu trước, giao diện sau.** Mỗi giai đoạn bắt đầu bằng kiểu dữ liệu + script kiểm (`check:links` mở rộng), rồi mới tới trang.
- **Chịu tải ×10** (~15.000 bài, ~5.000 nguồn, ~10.000 thuật ngữ): không gì được tải sẵn toàn bộ, không gì nằm trong gói JS chính nếu lớn lên theo nội dung.
- Một giai đoạn = vài phiên làm việc, mỗi phiên kết thúc bằng bản chạy được, đã kiểm, đã push.

---

## Giai đoạn 0 — Nền chịu tải ✅ (11/2026)
- Chỉ mục thư viện thành `content/index.<h>.json`, tải song song với mã (preload + top-level await); gói JS liên quan giảm từ 1 MB còn 215 KB.
- Tìm toàn văn chia 710 mảnh theo 2 chữ đầu của từ; một lần tìm tải vài mảnh, mỗi mảnh ≤ 30 KB (trước: một file 4,9 MB).
- Service worker chỉ precache chỉ mục (precache còn 9,2 MB); bài cache khi đọc; nút "Lưu để đọc offline" theo mục và theo sách.
- Chưa làm (chưa cần): chuyển nội dung từ `.ts` sang Markdown. Bước dựng nội dung hiện ~5 s; làm khi > 10 s hoặc > 4.000 bài (xem Giai đoạn 6).

## Giai đoạn 1 — Lưới an toàn ✅ (11/2026, chi tiết ở `notes/testing.md`)
Để các giai đoạn sau không làm vỡ app trên máy thật.
- `tests/smoke.spec.ts` (Playwright Test, cấu hình trong repo): mỗi trang chính (home, theory, một bài, một mục, musicology, bản đồ, tủ sách, trình đọc, tools, solfege, lịch khi đã mở khoá bằng mã giả) — mở không lỗi console, có nội dung; chạy ở **393×852 và 1280×820**, trên **Chromium + WebKit**.
- Kiểm "nội dung không phụ thuộc hiệu ứng": chạy lại cùng bộ test với `prefers-reduced-motion: reduce` và với `animation-timeline` bị tắt (thêm CSS ép `animation: none`), nội dung chính vẫn hiện.
- Kiểm tìm kiếm + offline: tìm một từ trong thân bài ra đúng bài; lưu một mục rồi tắt mạng vẫn đọc được.
- **Ngân sách dung lượng** (`scripts/budget.mjs`, chạy sau build): gói JS khởi động ≤ 600 KB nén, chỉ mục ≤ 600 KB nén, precache ≤ 15 MB, mảnh tìm kiếm lớn nhất ≤ 80 KB. Vượt thì build lỗi.
- GitHub Actions: workflow deploy chạy `tsc`, lint, `check:links`, build, budget, Playwright (cài WebKit); đỏ thì không deploy.
- Xong khi: một PR cố ý làm hỏng (ẩn nội dung sau animation) bị CI chặn.

## Giai đoạn 2 — Thư mục học — xương sống uy tín (đợt 1 ✅ 11/2026, chi tiết `notes/sources.md`)
**Đã có:** 4.042 nguồn dựng tự động từ mọi tài liệu tham khảo, 22 công trình chính đủ thông tin + mức đối chiếu, trang `/sources` (danh sách, chi tiết, việc còn treo), cú pháp `[^id, tr. n]` và `::verify` (sai mã thì build lỗi), trích dẫn Chicago/APA/BibTeX cho nguồn và cho từng bài (ngày cập nhật từ git).
**Đợt 2 ✅:** 1.248 số trang trong 5 bộ sách thành trích dẫn có liên kết, trang nguồn hiện trang được trích theo bài, +8 nghiên cứu vào danh mục chính (30), xuất BibTeX/Chicago cả danh sách.
**Đã khép (11/2026):** phần làm được tự động đã làm. **Việc làm dần khi đọc lại sách** (không suy đoán): số trang cho Sposobin, Mazel, Asafyev, Neuhaus, Fux, Levine; xác định cách đánh số trang bản Albrechtsberger 1855 rồi đổi "(§…, tr. …)" ở tiêu đề mục; thêm Grove/MGG/Riemann khi có bài dẫn trực tiếp; đổi câu "chưa đối chiếu" thành `::verify` khi soát từng bài.

Kế hoạch ban đầu:
**Dữ liệu** `src/features/sources/sources.ts` (+ tách file theo nhóm khi lớn):
```ts
interface Source {
  id: string                 // 'sposobin-1984', 'levine-1995'
  kind: 'book' | 'article' | 'chapter' | 'score' | 'recording' | 'web' | 'thesis' | 'standard'
  authors: string[]          // 'Sposobin, Igor'
  title: string; original?: string        // tên gốc (Nga, Đức…)
  translator?: string; edition?: string; year: number | string
  publisher?: string; place?: string; isbn?: string; url?: string; lang: string
  /** mức người biên soạn đã kiểm với nguồn này */
  access: 'nguyen-van' | 'ban-dich' | 'thu-cap' | 'chua-doi-chieu'
  rights: 'public-domain' | 'copyrighted' | 'open-license'
  note?: string              // vd. "bản OCR từ PDF Lamar gửi", "năm ấn bản chưa chắc"
}
```
**Trích dẫn trong bài:** cú pháp mới `[^sposobin-1984, tr. 45]` → chú thích có số, cuối bài thành mục "Nguồn" tự sinh; `refs` cũ giữ chạy song song tới khi chuyển xong.
- Script `scripts/sources/migrate.mjs`: gom mọi `refs` hiện có, nhóm theo URL/tên → bản nháp `sources.ts` + báo cáo bài nào dùng nguồn nào; người biên soạn duyệt rồi mới thay.
- Bộ "nguồn chung" đã có (`formru-refs.ts`, `levine-refs.ts`, `allen-refs.ts`, `borg-refs.ts`, `hang-dia-refs.ts`) chuyển trước — mỗi cái thành một `Source`.
- **Trang** `/sources` (lọc theo loại, ngôn ngữ, mức đối chiếu, bản quyền) và `/sources/:id` (thông tin + mọi bài/sách dùng nó, kèm trang được trích).
- **Việc còn treo** `/sources/open`: gom directive mới `::verify <lý do>` (thay cho các câu "chưa đối chiếu" viết tự do — script tìm và đề xuất chuyển) + nguồn `chua-doi-chieu`.
- **Xuất trích dẫn**: Chicago, APA, BibTeX cho một nguồn, một bài, hoặc cả danh sách đang lọc.
- **Trích dẫn chính app**: mỗi bài có "Cách trích dẫn bài này" (tác giả Lamar, tên bài, ngày cập nhật lấy từ git lúc build, địa chỉ cố định).
- `check:links` mở rộng: mọi `[^id]` trỏ tới nguồn có thật; nguồn không ai dùng thì cảnh báo.
- Dữ liệu tải lười (`content/sources.<h>.json`), không vào gói JS.

## Giai đoạn 3 — Thuật ngữ đa ngữ, đối chiếu trường phái (3–4 phiên)
**Cần Lamar cung cấp:** bản đầy đủ TCVN 14301:2024 "Âm nhạc – Thuật ngữ và định nghĩa" (trang thuvienphapluat chỉ hiện một phần) để làm chuẩn đối chiếu; quyết định khi TCVN khác cách dùng của nhạc viện.
**Dữ liệu** `src/features/terms/`:
```ts
interface Term {
  id: string                       // 'quang-5-dung'
  vi: string                       // tên chuẩn app dùng
  tcvn?: string                    // tên theo TCVN 14301:2024 nếu khác
  variants: string[]               // tên khác còn gặp ('quãng 5 thuần')
  en?: string; ru?: string; de?: string; fr?: string; it?: string
  definition: string               // một – hai câu, có nguồn
  sources: { id: string; page?: string }[]
  schools?: { school: 'nga-xo-viet' | 'riemann' | 'anh-my' | 'jazz' | 'fux' | 'taneyev' | 'viet-nam'; view: string; source: string }[]
  article?: string                 // bài gốc trong thư viện
  related?: string[]
}
```
- Khởi đầu bằng ~300 thuật ngữ lõi (nhạc lý, hoà âm, phức điệu, hình thức), sinh nháp từ tiêu đề + `aliases` của bài, người biên soạn duyệt.
- Cú pháp trong bài `{{quang-5-dung}}` hoặc `{{quang-5-dung|chữ hiện}}` → gạch chân chấm, chạm hiện thẻ (định nghĩa, tên 5 thứ tiếng, "mỗi trường phái hiểu thế nào", nút đọc bài). Không tự gắn thuật ngữ vào văn bản (dễ sai nghĩa).
- `scripts/terms/lint.mjs`: báo chỗ bài dùng `variants` thay cho tên chuẩn; đề xuất chỗ nên gắn `{{…}}` lần đầu xuất hiện.
- Trang `/terms` (A–Z, lọc theo ngành, tìm theo mọi thứ tiếng) và `/terms/:id`; bảng so sánh trường phái là trang riêng cho các khái niệm gây tranh cãi (chức năng, điệu thức, hình thức sonata, hợp âm thay thế…).
- Tìm kiếm thư viện hiểu thuật ngữ: gõ "perfect fifth" hoặc "чистая квинта" ra bài tiếng Việt (gộp mọi tên vào chỉ mục tìm kiếm).

## Giai đoạn 4 — Mạng tri thức (4–5 phiên)
Nối các "hòn đảo" đang có (bài, nhà soạn nhạc, nơi chốn, phân ngành, sách, nguồn, thuật ngữ) thành một đồ thị tra hỏi được.
- **Thực thể**: người, tác phẩm, khái niệm (= thuật ngữ), nơi, thời kỳ, trường phái, thể loại, nguồn, bài. Phần lớn sinh tự động từ dữ liệu sẵn có (`composers.ts`, `pianists.ts`, `people.ts`, `places.ts`, `taxonomy.ts`, sách, `sources`, `terms`).
- **Quan hệ** dạng bộ ba `[chủ thể, quan hệ, đối tượng, nguồn]`: sinh tại, sống ở, sáng tác, thuộc thể loại, thuộc trường phái, định nghĩa bởi, phân tích trong, ảnh hưởng tới, học với… Quan hệ "ảnh hưởng tới" **bắt buộc có nguồn**.
- **Tác phẩm** là thực thể mới: tên, số hiệu (BWV, K., Op.), năm, thể loại, giọng, hình thức, bài phân tích trong thư viện, bản nhạc phạm vi công cộng (Mutopia/IMSLP — chỉ link).
- **Trang tra cứu** `/explore`: lọc nhiều chiều (thể loại × thời kỳ × nơi × trường phái), vd. "tác phẩm hình thức sonata trước 1800 có phân tích", "khái niệm Taneyev và Fux định nghĩa khác nhau".
- **Trục thời gian chung** `/timeline`: mọi sự kiện có năm (bản đồ, tiểu sử, tác phẩm, xuất bản nguồn), lọc theo vùng/trường phái, nhảy sang bản đồ / bài.
- Lưu trữ: JSON chia mảnh theo loại thực thể; khi tổng > ~20 MB thì chuyển sang SQLite (FTS5) chạy trong trình duyệt, đọc từng trang file qua HTTP range (`sql.js-httpvfs`) — vẫn không cần backend.
- Bầu trời 3D và bản đồ đọc từ cùng đồ thị (không giữ dữ liệu riêng).

## Giai đoạn 5 — Bàn làm việc nghiên cứu (2–3 phiên)
Nâng Sổ nghiên cứu (`features/notebook/`) thành nơi làm đề tài.
- **Đề tài** (Dexie, như dữ liệu lịch): tên, câu hỏi nghiên cứu, ghi chú (kéo từ đánh dấu trong bài/sách), thực thể liên quan, nguồn — thư mục tự gom từ các ghi chú.
- Ghi chú có thể trích kèm nguồn + trang (từ Giai đoạn 2), gắn thuật ngữ (Giai đoạn 3).
- **Xuất bản nháp**: Markdown và DOCX, chú thích cuối trang đúng chuẩn đã chọn, thư mục cuối bài.
- Sao lưu đề tài nằm trong bản sao lưu ở Cài đặt (như ghi chú hiện nay).

## Giai đoạn 6 — Quy trình nội dung ở quy mô lớn (khi cần)
Kích hoạt khi bước dựng nội dung > 10 s hoặc > 4.000 bài.
- Nội dung chuyển sang `content/<mục>/<slug>.md` (frontmatter: title, aliases, summary, category, also, sources, terms); trang sinh tự động (nhà soạn nhạc…) vẫn là script.
- Dựng tăng dần: chỉ đọc lại file đổi (so hash), cache kết quả giữa các lần build.
- "Cập nhật lần cuối" mỗi bài lấy từ `git log`; trang "Thay đổi gần đây".
- Kiểm chất lượng tự động cho bài mới: có nguồn, có tóm tắt, link sống, thuật ngữ chuẩn.

---

## Thứ tự và phụ thuộc
1 (lưới an toàn) → 2 (nguồn) → 3 (thuật ngữ, dùng nguồn) → 4 (đồ thị, dùng nguồn + thuật ngữ) → 5 (bàn làm việc, dùng cả ba). 6 chạy song song khi chạm ngưỡng.

## Việc cần Lamar quyết / cung cấp
- Giai đoạn 2: kiểu trích dẫn mặc định (đề xuất **Chicago ghi chú cuối trang**, phổ biến trong âm nhạc học); có hiện mức đối chiếu cho người đọc không (đề xuất: có).
- Giai đoạn 3: văn bản TCVN 14301:2024; nguyên tắc khi TCVN lệch thói quen nhạc viện (đề xuất: tên chuẩn theo TCVN, ghi tên nhạc viện là biến thể).
- Giai đoạn 4: danh sách quan hệ ưu tiên; có mở rộng sang âm nhạc ngoài phương Tây/Việt Nam ngay không.
