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
- `src/features/curriculum/` — giáo trình theo cấp (`curricula.ts`), tick "đã học" lưu localStorage.

## Mục đã có (tóm tắt)
Kỹ thuật piano, cây đàn, luyện tai & sư phạm, ký âm, nhịp, cao độ, âm giai, hoà âm (2 trường phái), cromatic, hình thức, phức điệu, diễn tấu, jazz, ngẫu hứng, thời kỳ/thế kỷ 20, nghe & âm học, triết học, phân tích, nghệ sĩ piano, thể loại, âm nhạc học, nhạc khí (organology), âm nhạc Việt Nam (kèm loạt **lịch sử tân nhạc** ở `content/tan-nhac.ts`: hub `lich-su-tan-nhac-viet-nam`, 10 bài theo giai đoạn 1861–1975 + 6 trang nhạc sĩ tiên phong; mốc 1922 và 1923–1925 trong bài giảng chưa có nguồn đối chiếu), âm nhạc nhà thờ, **organ nhà thờ** (13 bài, hub `ky-thuat-organ-lo-trinh`), **sáng tác** (`content/composition.ts`, 20 bài, hub `lo-trinh-sang-tac`: quy trình, chủ đề, giai điệu, hoà âm – bè trầm, kết cấu piano, kiến trúc, phổ lời, nhạc cụ, 5 bài thủ pháp theo thời kỳ, ca khúc, nhạc phim, công nghệ/AI, chất liệu Việt, chương trình 24 tuần), nhà soạn nhạc.
