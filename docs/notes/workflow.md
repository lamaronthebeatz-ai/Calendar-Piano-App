# Quy trình và công thức của Claude

Đọc mục cần dùng, không đọc hết. Mỗi công thức là đường ngắn nhất đã chạy được; lỗi đã gặp ghi ngay dưới.

## Vòng làm việc một phiên
1. Đọc `docs/STATUS.md` → biết việc dở / chờ Lamar. Đọc đúng file `docs/notes/<phần>.md` của việc đang làm (bảng trong CLAUDE.md).
2. Việc ≥ 3 bước: tạo task (TaskCreate), đánh `in_progress` / `completed` khi đổi bước.
3. Quyết định thuộc về Lamar (bảo mật, chi phí, bố cục đã được Lamar thiết kế, cắt nội dung) → hỏi bằng AskUserQuestion **một lần, gom nhiều câu**, có phương án đề xuất. Quyết định đã chốt ghi ở `notes/decisions.md` — tra trước khi hỏi.
4. Sửa → kiểm nhanh (`npx tsc -b`, `npx vitest run <thư mục>`) sau mỗi cụm → kiểm đủ **một lần** trước push (CLAUDE.md § Trước khi push).
5. Push → chờ CI (công thức dưới) → báo một dòng.
6. Cuối phiên: cập nhật `docs/notes/<phần>.md`, `docs/STATUS.md`; phần mới thì thêm dòng vào bảng CLAUDE.md.

## Kiểm tra
- Bộ đủ: `set -o pipefail && npx tsc -b && npm run lint 2>&1 | grep -cE "warning|error" && npm test 2>&1 | grep -E "Tests|×" && npm run check:links 2>&1 | tail -1 && npm run build >/dev/null 2>&1 && npm run budget 2>&1 | tail -4` (lint phải ra **4**).
- Playwright đủ mất ~5 phút > giới hạn 2 phút của Bash → chạy nền, ghi log vào scratchpad, rồi chờ bằng vòng `until grep -q "^exit" <log>`: `npx playwright test --project='chromium-*' --trace off > $S/pw.log 2>&1; echo exit $?`. **Đừng** `| tail` trong lệnh nền: tail giữ output tới khi xong, không đọc dở được.
- Chạy một nhóm: `npx playwright test tests/x.spec.ts -g "tên" --project='chromium-*' --trace off`. Playwright tự bật `vite preview` cổng 4173 trên **bản build** → đổi code phải `npm run build` trước. Tự bật preview cho script riêng: `(npx vite preview --port 4173 >/dev/null 2>&1 &)`; tắt: `for p in $(pgrep -f "vite preview --port 4173"); do kill $p; done`.
- Test smoke đọc `src/App.tsx`: thêm route mới = thêm dòng `PAGES` (tên, url, bộ chọn nội dung, ngưỡng chữ nếu trang ít chữ).
- Unit test: `src/**/*.test.ts`; cần DOM / localStorage / DOMParser thì dòng đầu `// @vitest-environment happy-dom`. Module có state cấp module (store) → `vi.resetModules()` rồi `await import()` lại để giả "mở app lần mới".

## Thêm một trang mới (route)
`src/App.tsx` (lazy + `<Route>`) → `tests/smoke.spec.ts` `PAGES` → lối vào: `navItems.ts` (`desktop: true`), `ResearchTools.tsx` (điện thoại), ⌘K tự có qua `navItems`. CSS riêng cạnh component. Bỏ sót `PAGES` là CI đỏ (cố ý).

## Dữ liệu riêng của Lamar (localStorage)
Mọi store mới chứa dữ liệu cá nhân dùng `secureStore(key, fallback, accept)` (`lib/secureStore.ts`) — tự mã hoá khi kho mở; thêm vào sao lưu (`services/backup.ts`: payload, export, import, kiểm `…Locked()`).

## Đọc nội dung thư viện từ script Node
`createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })` rồi `ssrLoadModule('/src/features/theory/articles.source.ts')` (cũng `books.ts`, `wiki.ts`). Mẫu: `scripts/check-links.mjs`, `scripts/essay/export-book.mjs`. Script tạm đặt trong `scripts/_x_tmp.mjs` (cần nằm trong repo để vite phân giải) và **xoá ngay** sau khi chạy.

## Chụp ảnh giao diện
Script trong scratchpad: `chromium.launch()`, `addInitScript` đặt `sessionStorage['app:unlocked']='1'`, `localStorage['onboarding-done']='1'` (+ dữ liệu mẫu nếu cần), điện thoại 393×852 và 1280×820. Trang cuộn trong `ScrollArea` → `fullPage` không chụp được phần dưới: `locator(...).scrollIntoViewIfNeeded()` rồi chụp. Ghép nhiều ảnh thành một tờ bằng PIL, xem một lần.
- Màn khoá: giả `crypto.subtle.digest` trả bản băm trong `LockScreen.tsx` cho chuỗi 6 byte (mẫu đã chạy: phiên 11/2026, xem `notes/security.md`). Không dùng mã thật.

## Chờ CI sau push
Bash nền: `until curl -s "https://api.github.com/repos/lamaronthebeatz-ai/Calendar-Piano-App/actions/runs?per_page=3" | python3 -c "...status=='completed' của head_sha..."; do sleep 30; done` rồi in `conclusion`. Một thông báo duy nhất khi xong (~8–12 phút). Đỏ → xem log job bằng `mcp__github__get_job_logs`.
- Deploy treo phía GitHub: chạy lại cùng commit bị huỷ; cần commit mới có nội dung (`notes/testing.md`).

## Tiểu luận / văn bản xuất PDF (Lamar học Cao học Âm nhạc học, Nhạc viện TP.HCM)
- Quy chuẩn TL-LV của trường (ảnh Lamar gửi 11/2026): A4, Times New Roman 13, giãn chữ bình thường, cách dòng 1,5, lề trên/dưới 2,5 cm, trái 4 cm, phải 2 cm, số trang dưới góc phải, 1 trang ≈ 300 từ (không tính sơ đồ, bảng, hình, ví dụ).
- Sách tiểu luận trong tủ sách → PDF: `node scripts/essay/export-book.mjs <book-id> > ch.json` → chép `scripts/essay/cover.example.json` thành cover.json (điền) → `python3 scripts/essay/build.py ch.json cover.json <thư mục ra>` → `node scripts/essay/render.cjs <ra>/essay.html out.pdf`. Ra thư mục scratchpad, gửi bằng SendUserFile. Bìa đúng hiện nay xem `notes/decisions.md`.
- `build.py` đọc Markup: `##`/`###`/dòng `**2.1. …**` → mục lục 3 cấp; `::scan <sách> #n` → ảnh `public/scans/`; `::grand` → khắc LilyPond (SVG); `::form` → sơ đồ khối; bảng liền nhau cùng tiêu đề được gộp; `(xem [[…]])` bị bỏ (trên giấy không bấm được).
- Logo Nhạc viện: `https://vi.wikipedia.org/wiki/Special:FilePath/HCMCONS_Logo.svg` (tải vào scratchpad, không commit — logo có chủ quyền). Wikipedia API giới hạn tần suất: gửi User-Agent riêng, ít request.
- Máy không có Times New Roman: Liberation Serif cùng số đo (số trang không đổi) — báo Lamar.
- Bài viết mới (không có trong tủ sách): HTML + Paged.js (`float: footnote` cho cước chú, `target-counter` cho mục lục), mẫu CSS lấy từ `scripts/essay/template.html`. Sự kiện phải có nguồn; cái chưa kiểm được thì nói rõ trong bài hoặc bỏ.
- IMSLP: trang tải có lớp chuyển hướng / chờ → không vượt; tìm nguồn khác hoặc dùng scan đã có trong repo.

## Bẫy công cụ đã gặp
- `compose-mic-low.spec.ts` (thu micro, nốt trầm thiếu âm cơ bản) từng đỏ trên CI chromium (14/11: ra hợp âm thừa C4+E5…) nhưng qua 6/6 trên máy — chập chờn khi máy CI chậm; chạy lại job hỏng một lần thì xanh. Nếu đỏ lần nữa: sửa test (nới thời gian/ngưỡng), đừng chạy lại mãi.
- Push liên tiếp: lần chạy CI trước bị **huỷ** (concurrency) — gom commit rồi push một lần, chờ CI xanh rồi mới push tiếp.
- `compose.spec.ts` (soạn nhạc, bước lưu bản nháp) từng hỏng một lần trên WebKit rồi tự qua ở lần sau — chập chờn, không do từ điển.
- Bash giới hạn 2 phút: build ~1 phút, Playwright đủ ~5 phút → nền.
- `npm run lint | tail -1` có thể là một warning chứ không phải dòng tổng → đếm bằng `grep -cE "warning|error"`.
- Comment `/*! … */` trong mã nguồn bị bộ nén xoá → bản quyền gắn bằng `postBanner` (vite.config.ts).
- Python heredoc sửa file: dùng `<<'EOF'` (có nháy) để `$`/`\` không bị shell ăn; trong chuỗi Python thường, `\s` `\d` sinh SyntaxWarning nhưng vẫn giữ nguyên — kiểm lại file bằng `grep -n`.
- `git status --short | head` có thể cắt mất file mới → đếm `| wc -l` trước khi commit.
- `<input type=file accept=".musicxml…">`: iPhone làm xám file `.musicxml`/`.mxl` (hệ máy không biết loại này) → không đặt `accept`, nhận diện theo nội dung (`MThd` = MIDI, `PK` = .mxl, `<score-partwise` = MusicXML) — `AnalyzePage`, `ComposePage` (13/11).
- Test IndexedDB: đừng ghi/xoá vào DB mà app đang mở bằng kết nối thứ hai trong `page.evaluate` rồi `reload` — WebKit trên CI "Page crashed" (13/11). Dựng dữ liệu cũ trong `browser.newContext()` sạch + `addInitScript` trước khi app chạy.
- Smoke chỉ chờ 2,5 s sau màn che: đừng lấy phần cần Verovio (bản nhạc khắc) làm bộ chọn — WebKit trên CI tải chậm, từng đỏ (13/11). Kiểm bản khắc ở spec riêng với timeout dài.
