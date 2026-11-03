# Trung tâm lý thuyết âm nhạc học by Lamar — ghi chú cho Claude

App cá nhân của Lamar (giáo viên piano): thời khoá biểu + học viên (riêng tư, có mã khoá) và thư viện âm nhạc lớn (Lý thuyết, Âm nhạc học, Tủ sách, Quiz). Giao diện tiếng Việt. Local-first, không backend. React + Vite + Tailwind, PWA, `createHashRouter`.

## Làm việc với chủ repo
- Trả lời bằng tiếng Việt, xưng "tao – mày" **chỉ trong khung chat**. Nội dung app không bao giờ dùng "mày/tao": gọi người đọc là "bạn", ghi chú người soạn viết "người biên soạn".
- **Trích dẫn và sự kiện phải có nguồn.** Chưa đối chiếu nguyên văn hoặc nguồn mâu thuẫn thì ghi rõ trong bài. Không đưa câu nổi tiếng nguồn gốc mập mờ. Không chép/phát tán sách còn bản quyền (chỉ tóm lược, trích ngắn có trang); không vượt captcha IMSLP.
- Repo **công khai**: không bao giờ ghi mã khoá app vào code/commit/file; kiểm thử màn khoá bằng cách giả `crypto.subtle.digest`.
- Làm trên `main`. Push lên `main` là GitHub Actions tự deploy GitHub Pages.
- Commit: tiếng Việt, một dòng tóm tắt + trailer phiên; không ghi tên/model ID trong commit hay code.

## Cách làm việc (tối ưu token, code chuẩn)
1. **Đọc ít, đọc đúng chỗ.** Ghi chú chi tiết từng phần nằm ở `docs/notes/*.md` (bảng dưới) — chỉ mở file của phần đang làm. Tìm bằng `grep -n` rồi đọc đoạn cần (`sed -n a,bp`), không đọc cả file lớn; không đọc lại file vừa sửa.
2. **Đề xuất ngắn, làm ngay khi đã rõ.** Chỉ hỏi khi quyết định thật sự thuộc về Lamar. Không kể lể phương án sẽ không làm.
3. **Sửa nhỏ bằng Edit / script thay thế có `assert`**, không viết lại cả file. Không code thừa, không comment kể lể; comment chỉ giải thích *vì sao*.
4. **Theo mẫu có sẵn** của repo (hook, lớp CSS, `tint.ts`, `useStageTilt`, `audio.ts`…) thay vì viết cái mới. CSS hiệu ứng để file riêng cạnh component.
5. **Kiểm tra trước khi báo xong:** chạy bộ lệnh dưới; thay đổi giao diện thì chụp ảnh Playwright (điện thoại 393×852 + màn rộng) và đo khung hình khi có hiệu ứng. File thử nghiệm chỉ ghi vào scratchpad, không vào repo. Tắt server bằng PID, không `pkill -f`.
6. **Cập nhật ghi chú** của phần vừa đổi trong `docs/notes/` (ngắn, ghi điều Claude sau cần biết: file, quyết định, lỗi đã gặp). Thêm phần mới thì thêm một dòng vào bảng dưới. Không phình CLAUDE.md.
7. Báo cáo cuối: vài gạch đầu dòng — đã làm gì, chưa kiểm được gì (vd. Safari thật).

## Trước khi push
```bash
npx tsc -b && npm run lint && npm run check:links && npm run build
```
Lint còn 4 warning cũ (setState trong effect, fast refresh) — chấp nhận được. `check:links` kiểm mọi `[[slug]]`, slug trùng, slug và chặng trên bản đồ.

## Luật code đã trả giá mới có
- **Effect không trả về giá trị** ngoài hàm dọn dẹp: `useEffect(() => { x() }, …)` — `scrollIntoView`/`scrollTo` trả Promise trên Chrome mới, React gọi nó như hàm dọn dẹp → sập (Android).
- **Hiệu ứng không bao giờ là điều kiện để nội dung hiện ra** (lỗi iPhone/Safari): nội dung phải thấy được cả khi animation không chạy. Ưu tiên hiệu ứng theo thời gian chạy một lần; scroll-driven chỉ trang trí.
- Chỉ animate `transform`/`opacity`. Không `mask-image`, `clip-path` động, `backdrop-filter` lồng nhau trên lớp đang chuyển động. Shorthand `animation` reset `animation-timeline` → khai báo timeline sau cùng.
- Trong callback `startViewTransition` chờ bằng `setTimeout`, không `requestAnimationFrame` (rAF không chạy → treo).
- Android (`IS_ANDROID`, `html.is-android`): không nghiêng theo con quay, không blur kính, bìa nhỏ `covers/thumb`.
- Chữ `.text-gold-gradient` không có `text-shadow` (iOS vẽ vệt tối) — dùng `filter: drop-shadow` ở dòng chứa.
- So sánh bài theo `slug`, không theo tham chiếu đối tượng.
- Chỉ giao diện tối (`applyDarkTheme`) — đừng thêm lại công tắc theme. Vàng là màu nhấn duy nhất; màu riêng đi qua `src/lib/tint.ts`.

## Bản đồ ghi chú (`docs/notes/`)
| File | Nội dung |
|---|---|
| `theory.md` | Thư viện bài: `content/`, chỉ mục ảo + JSON từng bài, thẻ chủ đề/bài, trang chủ Lý thuyết, trang bài, Markup, quiz, ví dụ quét `::scan` |
| `kids-books.md` | Bộ Piano & Nhạc lý cho Trẻ em (ABRSM), khắc nhạc LilyPond `build.py`, `::ex`, `::sheet` |
| `lamar-books.md` | Ví dụ Jazz Theory Book (`figures.mjs`), Jazz Licks (`scripts/licks`), Solfège (`scripts/xuongam`) |
| `musicology.md` | Bản đồ âm nhạc `/musicology/ban-do`, bầu trời 3D `Sky3D`, chòm từng phần, trích dẫn |
| `curriculum.md` | Tủ sách, danh sách sách/giáo trình, trình đọc (`reader/`), ghi chú – Sổ nghiên cứu, trang tủ sách 2,5D, Android |
| `home.md` | Trang chủ `/home` (sân khấu tranh tách lớp, chương dính) và màn khoá |
| `ui.md` | Theme, thương hiệu đen – vàng, điều hướng, ngăn kéo, View Transitions, hook hiệu ứng, âm thanh piano/máy nhịp, logo |
| `features.md` | Bảng tính `/tools`, trang Solfège, trợ lý lệnh, Ủng hộ, tour hướng dẫn |
| `library-content.md` | Danh sách các mục nội dung đã có |

Thời khoá biểu: `src/features/calendar`, `students`, `lessons`, `settings`, `search` (Dexie/IndexedDB, Zustand); route `/` và `/students` bọc `PrivateArea`; máy chưa có học viên tự nạp `data/seed-backup.json` (bản sao lưu thật, Lamar đồng ý công khai). Học viên mở từ nút "Học viên" trên thanh Thời khoá biểu.
