# Thương hiệu "Phòng hoà nhạc" (Lamar chọn 13/11/2026)

Bộ quy chuẩn bản xem trực tiếp (Artifact) đã xoá theo ý Lamar 14/11; mọi luật nằm ở file này.

## Luật cứng
- **Không đụng trang chủ `/home` và bầu trời chòm sao (`Sky3D`, Âm nhạc học)** — Lamar cấm, làm rất cực. Vì vậy thương hiệu **không đổi token toàn cục**: trang nào làm lại thì gắn lớp `phn` lên gốc trang (`src/phn.css`). Trong `.phn`, `--font-display` = Libre Bodoni, `--font-sans` = Manrope, màu `--phn-*`.
- **Không dùng ngôn ngữ "tiết mục / chương trình"** hay giả lập tờ chương trình (Lamar bỏ). Danh sách lựa chọn không đánh số; số La Mã chỉ cho các phần của một bài.
- Bốn nguyên tắc: một luồng sáng (một thứ được chiếu sáng mỗi màn), ba lựa chọn (luật Hick), không có hộp (dòng + đường kẻ `--phn-velvet` 1px; chỉ bảng trượt đáy và nút chính có hình khối), biết trước thời lượng.
- Màu nhấn duy nhất `--phn-spot` (#e0b764). Chữ: `--phn-candle` / `--phn-candle-dim` / `--phn-ash` (≥ 4,9:1 trên nền). Chỉ giao diện tối.
- **Font:** Libre Bodoni (đủ dấu tiếng Việt) + Manrope, tải qua Google Fonts ở `index.html`. **Không dùng Bodoni Moda** — thiếu toàn bộ chữ có dấu (ạ ợ ư ơ…), trình duyệt lén thay font. ♭ ♯ dùng Noto Music (cả hai font đều thiếu).
- Chuyển động: đèn khán phòng tắt dần một lần khi mở (`th-house-dim`, 0,6 s), chỉ transform/opacity; nội dung đọc được khi hiệu ứng không chạy.

## Lời chào theo giờ
- `src/data/greetings.json`: 6 buổi × 50 lời chào ngắn (rạng sáng 4–7, sáng 7–11, trưa 11–14, chiều 14–18, tối 18–23, khuya 23–4). Chỉ chào như người quen (Lamar: "câu chào thôi, không phải slogan"), ~1/10 bằng tiếng Ý/Pháp/Đức/Anh/Tây Ban Nha; một dòng ≤ 26 ký tự; không ẩn dụ âm nhạc, không trích dẫn; khuya thì chúc ngủ ngon.
- `src/lib/greeting.ts`: buổi theo giờ máy; mỗi buổi một thứ tự xáo cố định; ngày n lấy câu n mod 50 → cùng buổi cùng câu, 50 ngày mới lặp. `useGreeting` (hooks) đổi câu ở đầu giờ kế tiếp và khi app quay lại từ nền. Test `greeting.test.ts`.

## Đã áp dụng
- Đợt 1 (13/11): trang Lý thuyết (`TheoryPage` Index, `.phn-theory`, CSS ở `theory-home.css` mục "the Lý thuyết index…"): tranh tràn viền dưới lớp màn có luồng sáng, lời chào căn giữa, ô tìm là đường kẻ, gợi ý tìm là chữ gạch chân, `QuickStart` thành 3 dòng (Đọc tiếp + % + phút còn lại · Câu đố · Ngẫu nhiên = bài chưa từng mở, lấy từ `library.read`), Công cụ nghiên cứu / Đọc dở / Chủ đề / Câu đố / Có thể bạn chưa biết / Nguồn bỏ khung.
- Thứ tự khối trang Lý thuyết (Lamar chốt 14/11): lời chào → Có thể bạn chưa biết → phím đi tắt (`QuickStart` + Đọc dở khác) → Chủ đề → Công cụ nghiên cứu → Câu đố → Nguồn.
- Đợt 2 (14/11):
  - **Toàn app:** `AppShell` gắn `phn phn-app` lên `<main>` trừ `/home`, `/musicology…` (bầu trời) và `/curriculum/:id…` (trình đọc giữ giấy/sepia riêng). Đổi font mọi trang qua `--font-display`/`--font-sans` trong `.phn`. `src/phn-pages.css` bỏ khung: lớp thẻ của app (`an-card`, `rt-card`, `term-card`, `rs-note`, `src-row`, `tl-fact`, `cr-card`, `bn-mine`, `cp-card`) + mọi thẻ Tailwind có `rounded-2xl|3xl|[2x px]` + `border-[var(--color-border)]` + `bg-[var(--color-surface-raised)]` (bộ chọn thuộc tính `[class*=…]`, chỉ phần tử khối, không đụng `rounded-xl/full` = nút, ô nhập); `.cat-head` bỏ hộp. Hộp thoại, ô tìm ⌘K, bảng trượt nằm ngoài `<main>` nên không bị ảnh hưởng.
  - **Thanh điều hướng dưới** (`BottomNav` + `layout/bottom-nav.css`): không kính/blur, nền `--phn-stage` + đường kẻ velvet, biểu tượng mảnh + nhãn chữ thường, mục đang ở = chữ sáng + biểu tượng vàng + **chấm vàng** trượt giữa các tab (giữ hoạt ảnh "giọt"), nút + là đĩa vàng 44 px ngang thanh (không nổi lên). `/home` vẫn ẩn thanh này nên trang chủ không đổi.
  - **Nút +** (`QuickActionsSheet` + `quick-sheet.css`, thay quạt bong bóng `quick-fan.css` đã xoá): bảng trượt đáy (`--phn-box`, bo 26 px trên) với hai nhóm dòng `.phn-row` "Công cụ" (Tìm & đi nhanh, Soạn nhạc, Giải phức điệu, Nghe hợp âm, Solfège, Bảng tính) và "Lịch dạy" (Thêm buổi học, Thêm học viên); mỗi dòng có `aria-label` = tên (test tìm theo tên). 𝄪 trong Noto Music vẽ rất nhỏ → `.qs-glyph.is-x` 30 px, `.cp-glyph` 28 px.
  - **Nút công cụ đầu trang Lý thuyết trên máy tính** (`.tools-btn`, `theory-motion.css`): không còn bong bóng — biểu tượng mảnh màu mực, vàng khi trỏ + vạch vàng ngắn bên dưới (cùng ý chấm vàng của thanh dưới); bỏ hoạt ảnh lắc lặp vô hạn.
  - Trang chủ đề Lý thuyết: ô tìm cũng là một đường kẻ (bỏ viên nang tối).
- Chưa làm: lời chào theo giờ mới chỉ ở Lý thuyết (Tủ sách có sân khấu 2,5D riêng — hỏi trước khi đụng); thanh bên máy tính (`Sidebar`, hiện cả ở /home) giữ nguyên; Âm nhạc học và trình đọc chưa áp thương hiệu.
