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
- **Tiểu luận viết thẳng bằng Markdown** (vd. `docs/essays/gioi-thieu-app/NN-*.md`, dòng đầu `# Tên chương`; chương đầu kết thúc "— Mở đầu", chương có `## Tài liệu tham khảo` tách thành Kết luận + TLTK, chương "Phụ lục …"): ghép thành `chapters.json` rồi `ESSAY_IMG=<thư mục ảnh> build.py …`. Ảnh chụp màn hình: `::img tên.png | Hình x.y. …`. Chụp với `timezoneId: 'Asia/Ho_Chi_Minh'` + `page.clock.install` giờ ban ngày, không thì lời chào theo giờ ra "Khuya rồi…". Bảng ≤ 14 dòng không bị cắt trang; danh sách đánh số giữ số khi bị chia bởi tiêu đề.
- **Sổ tay ứng dụng** `docs/manual/` dựng bằng cùng `build.py` với `cover.json` có `META_HTML` (thay khối Sinh viên/Chuyên ngành/Hệ). Danh sách lồng một cấp: dòng thụt ≥ 2 dấu cách sau một mục. Bẫy: sau `npm ci` trong phiên mới, Playwright của repo đòi bản Chromium khác bản có sẵn → chạy `render.cjs` từ một bản chép ngoài repo (dùng Playwright toàn cục).
- Bài viết mới (không có trong tủ sách): HTML + Paged.js (`float: footnote` cho cước chú, `target-counter` cho mục lục), mẫu CSS lấy từ `scripts/essay/template.html`. Sự kiện phải có nguồn; cái chưa kiểm được thì nói rõ trong bài hoặc bỏ.
- IMSLP: trang tải có lớp chuyển hướng / chờ → không vượt; tìm nguồn khác hoặc dùng scan đã có trong repo.

## Bẫy công cụ đã gặp
- **WebKit + `toBeInViewport` trên `<g>` của SVG** (24/11, CI lần 495): luôn ra tỉ lệ 0 dù phần tử đã cuộn tới. Đo bằng `getBoundingClientRect()` sau `scrollIntoView` (mẫu ở `tests/analyze.spec.ts`, bản 105 ô).
- WebKit trên CI đôi khi không bao giờ phát sự kiện `load` khi `page.reload()` ở trang có service worker + IndexedDB (`analyze.spec`, lần 469/484/490/491) → `reload({ waitUntil: 'domcontentloaded' })` rồi chờ nội dung bằng `expect`.
- Chromium trên CI (ảnh Playwright) có thể không phát mp4 H.264: video luôn kèm bản WebM VP9 (`<source>` thứ hai).
- `cat > $TMPDIR/x <<EOF` khi lệnh trước trong cùng dòng là `cat > file` KHÔNG có heredoc → `cat` chờ stdin mãi, lệnh treo tới hết giờ. Ghi file bằng công cụ Write hoặc mỗi `cat` một heredoc riêng.
- Test cần một worker thật: bundle entry bằng `esbuild` (API `build`, có sẵn qua vite) ra thư mục tạm rồi `new Worker(file)` của `node:worker_threads` — mẫu ở `src/umre/runtime/runtime.test.ts`.
- Chuẩn Bach cho `/analyze` và UMRE: venv ở scratchpad, `pip install --no-index --find-links . music21` (wheel ở gốc repo), chạy `export_gt.py` trong thư mục có `eval/`, rồi `node scripts/analyze/eval.mjs <dir>/eval [--umre]`.
- Test đơn vị chạy bộ giải trên CI chậm hơn máy phiên ~3 lần: thời hạn chung `testTimeout: 30_000` trong `vitest.config.ts`; test nào gần 10 s ở máy phiên thì tự đặt thời hạn riêng.
- **Chép nốt từ scan:** khuông in hay nghiêng — đọc bằng mắt lệch được cả quãng 3. Dò dòng kẻ theo từng cột (mỗi cột lấy các hàng tối > 50 % trong cửa sổ 24 px) rồi vẽ vạch khe lên ảnh phóng 3–4 lần mới đọc; luôn so với chú số / chú thích sách in dưới nốt.
- **CI đỏ 17–23/11 dù test qua**: (1) vitest "Timeout calling onTaskUpdate" — test phức điệu chạy bộ giải đồng bộ ~60 s liền, giữa các test vitest chỉ nhường microtask nên worker không đọc được RPC → `vitest.setup.ts` nhường một macrotask trước mỗi test. (2) Playwright: `test.slow()` nhân ba timeout HIỆN TẠI nên phải đặt SAU `test.setTimeout()`; đặt trước thì bị ghi đè (journey-arc WebKit chỉ còn 120 s). Sau mỗi push phải xem CI thật — 4 lần đỏ liền không ai thấy.
- Chạy Playwright của repo (1.56.1) trong container mới: tạo thư mục trình duyệt giả trong scratchpad — `pw/chromium_headless_shell-1194/chrome-linux/headless_shell` symlink tới `/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell` — rồi `PLAYWRIGHT_BROWSERS_PATH=<đó> npx playwright test …` (đã chạy qua 23/11).
- WebKit trên CI coi các nút của Hành trình (lựa chọn, dòng chặng) là "không stable" → test bấm bằng `dispatchEvent('click')`.
- Vitest mặc định môi trường `node`: test chạm `DOMParser` (MusicXML, kể cả qua bộ chuyển đổi UMRE) cần dòng `// @vitest-environment happy-dom` ở đầu file.
- **L4 — chạm vào cảnh game trên WebKit CI** (16/11): `.jr-scene` (phủ cả màn, nhiều hiệu ứng lặp bên trong) có lúc không bao giờ "stable" dưới tải → click chờ tới hết giờ. Mọi click trong cảnh (chạm, nút đáp án `.jr-choice`, nút thoát) dùng `force: true` — nút đáp án cũng từng "not stable" 45 giây trên CI; bù lại test khẳng định `.jr-reward` hiện ra sau vòng đáp án. Sau đó cả nút hội thoại ở `journey-arc` cũng "not stable" → hai file test game bật `emulateMedia({ reducedMotion: 'reduce' })` khi project là WebKit (Chromium vẫn chạy đủ hiệu ứng).
- **WebKit của Playwright sập khi tải lại** (16/11) sau chuỗi `pushState → pushState → back → pushState` — tái hiện được trên trang trống, không phải lỗi app (game đi tới đi lui đúng như vậy). Test kiểm "lưu còn sau khi mở lại" dùng `page.context().newPage()` + `goto`, không `page.reload()` sau khi đã lùi lịch sử.
- **Chạy WebKit tại máy (16/11):** máy chỉ có Chromium. Cài WebKit vào thư mục riêng, không đụng Chromium: `PLAYWRIGHT_BROWSERS_PATH=<scratchpad>/pwb npx playwright install webkit` + `npx playwright install-deps webkit` (apt, ~2 phút), rồi chạy test `--project='webkit-*'` với cùng biến đó (đừng gộp với `chromium-*` trong một lệnh: Chromium không có ở thư mục đó).
- **Đọc lại canvas WebGL trong test:** `toDataURL()` cả khung bầu trời làm tiến trình trang WebKit sập trên CI ("Target page … has been closed"). Dùng ảnh thu nhỏ 48×48 (`thumb` trong `library.spec.ts`).
- **Test bấm vào danh sách vừa lọc** (16/11, Grove "mordent"): ô tìm lọc trễ một nhịp; trên WebKit CI dòng đầu vẫn là mục cũ khi bấm → đợi dòng đầu chứa từ khoá rồi mới bấm.
- **Bầu trời 3D trên WebKit điện thoại (CI):** tiến trình trang thỉnh thoảng sập ("Target page… closed") ngay cả khi không đọc canvas — lần thử lại qua. Vùng `Sky3D` cấm đụng; chỉ theo dõi.
- **Ép tải ≠ CI:** `--workers=6 --repeat-each` làm vài test WebKit cũ (Grove ghim, bầu trời) hỏng vì máy quá tải; lỗi chỉ ở chế độ đó không phải lỗi mới.
- **Test thu micro** (`chord-ear`, `compose-mic*`) hỏng trên CI vì máy bận làm micro giả giật (nốt ma C4, E7…) → tách thành project `mic-phone`/`mic-desktop`, CI chạy riêng một bước `--workers=1` sau các test khác (`deploy-pages.yml`); `chromium-*` không còn chứa chúng. Local: `npx playwright test --project='mic-*' --workers=1`.
- Server preview thử nghiệm sót lại chiếm cổng 4174 → script chụp ảnh/bot chạy trên bản build cũ mà không báo. Ghi PID server, tắt bằng PID; kiểm `ps aux | grep 'vite preview --port 4174'` trước khi chạy.
- `journey.spec.ts` trên **WebKit CI quá 45 s** khi bấm qua cả 5 tấm bối cảnh (ảnh nền 1920 + Ken Burns vẽ chậm) → test chỉ xem tấm 1–2 rồi "Bỏ qua". Test e2e đừng đi qua nhiều màn ảnh lớn liên tiếp.
- **Agent hết hạn mức giữa chừng** (429 "5-hour limit"): file đã ghi vẫn còn trên đĩa — kiểm `ls` + `esbuild` + đếm mục từng người, rồi `SendMessage` cho agent cũ làm tiếp phần thiếu khi hạn mức mở lại (đừng tạo agent mới làm lại từ đầu).
- Nhạc Commons "thật" vẫn có thể là dàn nhạc giả lập (sample library, vd. Philip Milman) — `vet.py` không bắt được; đọc mục Description/Author trước khi dùng.
- WebKit-phone trên CI có lúc **sập trang Âm nhạc học** (bầu trời 3D) ở smoke "không hiệu ứng": `Target page, context or browser has been closed`, sập cả lần retry trong cùng job; chạy lại job thì qua (15/11, commit chỉ thêm nội dung). Nghi giới hạn bộ nhớ WebKit; nếu lặp lại thường xuyên thì giảm tải `Sky3D` trên WebKit.
- **Wikimedia API 429** khi nhiều agent cùng tra (cả `en.wikipedia.org/w/api.php` lẫn Commons API): đọc trang HTML (`/wiki/<Bài>`, `commons…/wiki/File:<tên>`) để lấy tên ảnh và giấy phép; tải ảnh qua `upload.wikimedia.org/.../thumb/.../<960|1920>px-<tên>` — cỡ lạ (640, 800) trả 400. Script mẫu `scratchpad/journey/fetch.py`.
- Agent viết nội dung đôi khi xưng "tôi" ("nguồn tôi đối chiếu") — `grep -n '\btôi\b'` trước khi commit, đổi thành "người biên soạn".
- `compose.spec.ts` "chạm đặt nốt" đỏ 2 lần trên WebKit CI (bấm trước khi khuông đứng yên/màn che còn) → `open()` nay chờ `.pc-root` biến mất, `document.fonts.ready` và khung ô nhịp đứng yên. Máy cloud không có WebKit (`/opt/pw-browsers/webkit-*` thiếu) — WebKit chỉ kiểm được trên CI.
- **Đã sửa gốc (15/11):** nốt ma quãng tám (C4 trên C3, G3 trên G2) lọt bộ lọc `fixOctaves` khi máy chậm làm lệch onset > 0,07 s hoặc cắt ngắn nốt trầm — nới dung sai 0,12 s và đọc phổ ở chỗ nốt trên khi nốt trầm quá ngắn; lặp 48/49 lần qua (một lần lẻ "D5+E5" gộp hai nốt liền nhau, chưa rõ gốc). Lịch sử: - `compose-mic-low.spec.ts` (thu micro, nốt trầm thiếu âm cơ bản) từng đỏ trên CI chromium (14/11: ra hợp âm thừa C4+E5…) nhưng qua 6/6 trên máy — chập chờn khi máy CI chậm; chạy lại job hỏng một lần thì xanh. Nếu đỏ lần nữa: sửa test (nới thời gian/ngưỡng), đừng chạy lại mãi.
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
- Ảnh Commons (11/2026): bản gốc và API hay trả 429 → tải qua `/thumb/` đúng bề rộng chuẩn (1920/1280/1024/800; 2560 hỏng), nghỉ ≥15 s giữa file. Thumb của PNG nhỏ hơn bề rộng xin thì hỏng → chọn JPG. Xem tờ ghép trước khi cài: tên file Commons có thể không khớp nội dung (một ảnh "sông nước" thực ra là đèn trang trí).
- Playwright chạy `vite preview` trên `dist` có sẵn → sửa code xong phải `npm run build` rồi mới chạy test, không thì test chạy bản cũ và "qua" giả (17/11: lỗi lọt lên CI).
- Bộ giải phức điệu trong WebKit trên CI chậm hơn V8 khoảng 10 lần (bài mẫu: 1,6 s ở node, >15 s ở WebKit CI) → test E2E không được dựa vào một mốc giờ để thấy "vô nghiệm"; hết giờ là `unknown`, bấm "Tìm tiếp". Hãm CPU bằng CDP không tác động lên Web Worker.
- WebKit trên CI: nút trong cảnh Hành trình/câu đố hay kẹt "not stable" (cả `force: true` cũng từng bấm trượt). Test kiểm logic thì bấm bằng `dispatchEvent('click')`; giữ `.click()` thật cho test giao diện.
- (17/11) WebKit-desktop trên CI: nút địa điểm trong tuyến điều tra (`.ar-places .jr-stop-row`) không bao giờ "stable" dù đã bật reduced motion → `toBeVisible` rồi `dispatchEvent('click')`; test chơi trọn tuyến cần `test.slow()` trên WebKit.
- WebKit: timestamp `requestAnimationFrame` có thể **nhỏ hơn** `performance.now()` lấy lúc lên lịch → `dt` âm, vật chạy lùi mãi (CI lần 499, khung cảnh Hành trình kẹt "walk"). Luôn kẹp `dt` ≥ 0.
- WebKit: `import()` hỏng một lần thì hỏng mãi trong trang đó (module map) — nút "Thử lại" tải lại trang khi lần thử lại vẫn hỏng; trên CI WebKit còn giữ lỗi qua cả lần tải lại, nên test chấp nhận màn lỗi còn lại miễn là "← Danh sách" vẫn dùng được. Đừng chặn trần `dt` quá thấp (0,05 s): WebKit trên CI chạy ~10 khung/giây, nhân vật đi chậm một nửa và test hết giờ.
- (26/11) WebKit-desktop trên CI, shard 2 hay quá tải (trang trắng ở smoke, đối âm, soạn nhạc chập chờn cùng lúc): mỗi lần một test `journey-walk` khác hỏng — reload không xong, nút thanh trên không "stable", hội thoại >15 s. Test dài dùng `test.slow()`, nút thanh trên bấm bằng `evaluate(b => b.click())`, chờ hội thoại 30 s. Kiểm nhịp truyện bằng cờ `beat:` trong save, không bằng dòng chữ tự tắt.
