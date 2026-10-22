# Lịch Dạy Piano — ghi chú cho Claude

App cá nhân của Lamar (giáo viên piano): thời khoá biểu + học viên (riêng tư, có mã khoá) và một thư viện âm nhạc lớn (Lý thuyết, Âm nhạc học, Giáo trình, Quiz). Giao diện tiếng Việt. Local-first, không backend.

## Làm việc với chủ repo
- Trả lời bằng tiếng Việt, xưng "tao – mày" như chủ repo.
- **Tối ưu token**: không đọc lại cả repo, không code thừa, không tự bịa. Chỉ đọc file cần cho việc đang làm.
- **Trích dẫn và sự kiện phải có nguồn.** Chỗ nào chưa đối chiếu nguyên văn hoặc nguồn mâu thuẫn thì ghi rõ ngay trong bài. Không đưa câu nổi tiếng nhưng nguồn gốc mập mờ.
- Làm trên `main`. Push lên `main` là GitHub Actions tự deploy GitHub Pages (`.github/workflows/deploy-pages.yml`).

## Trước khi push
```bash
npx tsc -b && npm run lint && npm run check:links && npm run build
```
`check:links` kiểm mọi liên kết `[[slug]]` trong thư viện và slug trùng. Lint còn 4 warning cũ (setState trong effect, fast refresh) — chấp nhận được.

## Cấu trúc
- `src/features/calendar`, `students`, `lessons`, `settings`, `search` — phần thời khoá biểu (Dexie/IndexedDB, Zustand). Route `/` và `/students` bọc trong `PrivateArea`.
- `src/features/theory/` — thư viện bài viết:
  - `content/<nhóm>.ts`: mỗi file một mảng `Article` (xem kiểu ở `wiki.ts`: slug, title, category, aliases, summary, body, refs, also…).
  - `articles.ts`: `CATEGORIES` (tiêu đề, hue, mô tả) và mảng `ARTICLES`. Thêm mục mới = import file, thêm vào `CATEGORIES` và `ARTICLES`, thêm glyph ở `categoryStyle.ts`.
  - Body dùng markup riêng (`Markup.tsx`): `##` tiêu đề, bảng `| … |`, `[[slug]]` hoặc `[[slug|chữ]]`, directive `::timeline`, `::ytsearch`, `::wiki`, `::bars`, `::range`, `::staff`, `::keyboard`…
  - Trang nhà soạn nhạc/nghệ sĩ sinh tự động từ dòng dữ liệu (`composers.ts`, `pianists.ts`, `people.ts`); slug = `slugify(tên)`, vd. `johann-sebastian-bach`.
  - Mỗi mục có một bài "lộ trình" làm trang mở đầu (bài đầu tiên của mục); bài trong mục liên kết ngược về nó.
  - `quiz/`: ngân hàng câu hỏi (`library.ts` viết tay, `generated.ts` sinh theo quy tắc).
- `src/features/musicology/` — bản đồ Âm nhạc học (`taxonomy.ts` gom bài theo nhánh bằng `slugs`/`cats`) và banner trích dẫn:
  - `quotes/index.ts`: mảng `ROWS` `[tiếng Việt, nguyên văn, tác giả, vai trò, nguồn]` (347 câu). Ảnh chân dung tự lấy từ Wikipedia theo tên tác giả; tên viết kiểu Việt cần thêm vào `WIKI_TITLE` trong `QuoteBanner.tsx`.
- `src/features/curriculum/` — tủ sách: 2 giáo trình piano theo cấp (`curricula.ts`) và 4 sách lý thuyết trong `books.ts` (*Nhạc Lý Cơ Bản* Quyển 1 – 2; *Hoà Âm Cổ Điển — Trường phái Nga – Xô viết* theo thứ tự chủ đề sách bốn tác giả Dubovsky – Evseev – Sposobin – Sokolov, bìa ảnh `src/assets/covers/hoa-am-co-dien.webp` qua `coverImage`; *Phức Điệu Nghiêm Khắc — Sergei Taneev* theo giáo trình Nhạc viện Hà Nội (Phạm Tú Hương 1991, hệ Taneyev) + 3 phần hệ thống Fux, bìa `phuc-dieu-nghiem-khac.webp`): phần → bài = slug bài thư viện, lời nói đầu, bài tập cuối phần. Mọi sách và giáo trình có "Lời nói đầu" mở bằng `foreword()` (Lamar biên soạn – tổng hợp, Lamar hướng đến) và trang "Về tác giả" (`ABOUT_AUTHOR`). Tick "đã học" lưu localStorage.
  - `reader/`: trình đọc kiểu EPUB (`Reader.tsx`, phân trang bằng CSS columns, 2 trang trên màn rộng, vuốt/phím/lăn chuột, mục lục, dấu trang, tìm trong sách, cỡ chữ – phông – nền Giấy/Sepia/Đêm; vị trí đọc và dấu trang ở `store.ts`), `model.ts` dựng mọi sách/giáo trình thành chuỗi mục (bìa, lời nói đầu, mục lục, phần, chương), `PrintBook.tsx` dàn trang in → "Lưu dưới dạng PDF". `Pages.tsx` trình bày như sách giáo khoa (dùng chung cho đọc và in): mỗi chương là **Bài n** — mục tiêu, mục đánh số n.1, Hình/Bảng n.k (CSS counters), tham chiếu chéo "(Bài k)" qua `theory/linkRef.ts`, Tóm tắt, Câu hỏi ôn tập (lấy từ quiz theo slug), tài liệu tham khảo; trang mở phần, trang Ôn tập cuối phần, Đáp án cuối sách; tiêu đề chạy và số trang n.p.
  - Route: `/curriculum` giá sách · `/curriculum/:id/:slug` đọc (chương = slug thư viện) · `/curriculum/:id/in` in/PDF · `/curriculum/:id/tong-quan` tổng quan giáo trình piano.

## Mục đã có (tóm tắt)
Kỹ thuật piano, cây đàn, luyện tai & sư phạm, ký âm, nhịp, cao độ, âm giai, hoà âm (2 trường phái), cromatic, hình thức, phức điệu (kèm loạt **hệ thống Fux** ở `content/fux.ts`: hub `he-thong-fux-gradus-ad-parnassum`, 10 bài đọc từ bản dịch Anh *Practical Rules for Learning Composition* — năm ấn bản chưa chắc, LOC ghi [1791?]), diễn tấu, jazz, ngẫu hứng, thời kỳ/thế kỷ 20, nghe & âm học, triết học, phân tích, nghệ sĩ piano, thể loại, âm nhạc học, nhạc khí (organology), âm nhạc Việt Nam (kèm loạt **lịch sử tân nhạc** ở `content/tan-nhac.ts`: hub `lich-su-tan-nhac-viet-nam`, 10 bài theo giai đoạn 1861–1975 + 6 trang nhạc sĩ tiên phong; mốc 1922 và 1923–1925 trong bài giảng chưa có nguồn đối chiếu), âm nhạc nhà thờ, **organ nhà thờ** (13 bài, hub `ky-thuat-organ-lo-trinh`), **sáng tác** (`content/composition.ts`, 20 bài, hub `lo-trinh-sang-tac`: quy trình, chủ đề, giai điệu, hoà âm – bè trầm, kết cấu piano, kiến trúc, phổ lời, nhạc cụ, 5 bài thủ pháp theo thời kỳ, ca khúc, nhạc phim, công nghệ/AI, chất liệu Việt, chương trình 24 tuần), nhà soạn nhạc.
