# Thương hiệu "Phòng hoà nhạc" (Lamar chọn 13/11/2026)

Bộ quy chuẩn đầy đủ (màu, chữ, thành phần có xem trước sống): Artifact Design System "Phòng hoà nhạc" của Lamar — https://claude.ai/artifact/Pagv97hgQ1Trnj3DZ1cy9D (riêng tư). Bản nguồn khi soạn: scratchpad `ds/project/` (không trong repo).

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
- Còn lại (đề xuất thứ tự): trang bài, Tủ sách + trình đọc, `/analyze`, `/brain`, `/research`, Âm nhạc học (trừ bầu trời), Lịch / Học viên, thanh điều hướng dưới (dùng chung với /home — hỏi Lamar trước).
