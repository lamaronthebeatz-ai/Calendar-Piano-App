# Quyết định Lamar đã chốt — tra ở đây trước khi hỏi lại

Mỗi dòng: quyết định · khi nào · ghi chú. Lamar đổi ý thì sửa dòng, không thêm dòng mâu thuẫn.

## Sản phẩm, giao diện
- Chỉ giao diện tối, vàng là màu nhấn duy nhất; không công tắc theme.
- Bỏ hẳn trợ lý lệnh (nút + trợ lý) — 11/2026.
- Nút góc phải gom vào nút **+** ở thanh dưới, bấm thì xoè quạt 2 hàng × 4 mục có tên và sáng lên — 11/2026. Thêm mục thứ 9 phải hỏi.
- Chuyển trang: mờ dần vào/ra; tải lâu thì màn logo Lamar che rồi mở — 11/2026.
- Trang chủ Lý thuyết gọn (6 nhóm chủ đề) vì kéo xuống mệt — 11/2026.
- **Thương hiệu "Phòng hoà nhạc"** (13/11/2026): Lamar chọn mẫu 3 từ 3 hệ nhận diện; bỏ ngôn ngữ "tiết mục / chương trình"; lời chào đổi theo 6 buổi, chỉ là câu chào ngắn (không slogan). **Cấm đụng `/home` và bầu trời chòm sao.** Chi tiết `notes/brand.md`.
- Thương hiệu áp cho Âm nhạc học (trừ bầu trời chòm sao); trình đọc sách giữ nguyên; Tủ sách không có lời chào theo giờ — 14/11/2026.
- Thứ tự trang Lý thuyết: Có thể bạn chưa biết → phím đi tắt → Chủ đề → Công cụ nghiên cứu → Câu đố — 14/11/2026.
- Đầu trang Lý thuyết **không đóng khung**: tranh tràn viền mờ vào nền (phương án A) + thẻ Đọc tiếp và 3 ô bấm nhanh ngay dưới (phương án B) — 13/11/2026 (Lamar chọn từ 3 mẫu A/B/C).
- Bầu trời âm nhạc học: các bài lý thuyết thành mạng nơron, tự xoay chậm — 11/2026.
- Soạn nhạc: tablet = bàn phím piano tràn ngang + thanh công cụ trên phím; máy tính = bảng công cụ + phím tắt giống MuseScore 4; thu bằng 3 cách (phím ảo, micro, line-in) — 11/2026.

## Nội dung thư viện
- Kiến thức từ sách mới **gộp vào bài cùng chủ đề** (`## Theo sách gốc …`), không tạo loạt bài theo từng cuốn — trừ khi Lamar yêu cầu.
- Thí dụ sách: **cắt ảnh từ scan** (`::scan`), không khắc LilyPond.
- Thuật ngữ: không có TCVN 14301:2024 → tên Việt = tên bài, ngoại ngữ = nhãn Wikidata.
- Tiểu luận Scriabin trong tủ sách là công trình hoàn chỉnh (giọng "chúng tôi", `Book.essay`); ch. 1 dùng ký hiệu Nga – Xô viết, ch. 2–4 ghi bậc cụ thể.
- Kiểu trích dẫn khi xuất: chọn được Chicago / APA (đề xuất mặc định Chicago, Lamar chưa phản đối).

## Bảo mật (11/2026)
- Repo **vẫn công khai**; chỉ giấy phép giữ toàn quyền + dòng bản quyền.
- **Giữ mã 6 số** + mã hoá dữ liệu riêng (đã biết giới hạn).
- Thư viện **mở cho người xem**; chỉ dữ liệu riêng bị khoá.
- `data/seed-backup.json` (học viên thật) **giữ trong repo**, tự nạp máy mới.
- Tên trên `LICENSE` / dòng bản quyền: giữ như hiện tại (tên thật + Lamar) — Lamar để tuỳ, 11/2026. Không thêm thông tin cá nhân khác vào repo.

## Hành trình Maximum Edition (16/11/2026, duyệt thiết kế `docs/journey/`)
- Lời của nhân vật lịch sử vẫn là lời dựng lại, nhưng **mỗi dòng có nhãn** (dựng lại / trích nguyên văn / ✦ hư cấu).
- Giữ **không có thua**: sai thì mất điểm, có gợi ý, rẽ nhánh, thử lại.
- **Push thẳng `main`, không cần hỏi** (không branch/PR cho game).
- Thứ tự: làm xong các phase (5–6, rồi 8–9) trước, sau đó mới nhân rộng nội dung ra các chương khác (16/11).
- Thử thách nghe dùng **bản thu thật** (người hát/chơi thật, giấy phép tự do), không dùng âm tổng hợp.

## Nền tảng tri thức (16/11/2026)
- Mọi đối tượng một mã `<tiền tố>:<mã>` (mở rộng ngữ pháp sổ tay); đồ thị dựng trong trình duyệt từ dữ liệu sẵn có, không server đồ thị, không đổi công nghệ lõi.
- Mỗi quan hệ mang nguồn gốc: thư viện / Wikidata / máy tính / nghiên cứu — tách bạch dữ liệu xác thực, kết quả tính toán, nhận định nghiên cứu.
- Tài liệu, luận điểm, bằng chứng của Lamar ở IndexedDB riêng `musicology-knowledge`, niêm phong theo kho khoá, có phiên bản lược đồ + bản chụp trước chuyển đổi; nằm trong sao lưu (v3).
- App không tự điền metadata thư mục; không có dữ liệu mẫu trong kho; đánh dấu "đã đối chiếu" phải ghi đối chiếu ở đâu.

## Văn bản học thuật của Lamar
- Lamar học **Cao học II/II, chuyên ngành Âm nhạc học**, Nhạc viện TP.HCM. Bìa: "Bộ Văn hoá, Thể thao và Du lịch" / "Nhạc viện Thành phố Hồ Chí Minh" / logo / TIỂU LUẬN / tên đề tài / "Học viên thực hiện: <tên thật>" / "Chuyên ngành: Âm nhạc học" / "Hệ: Cao học II/II" / "Thành phố Hồ Chí Minh, tháng … năm …". **Tên thật không ghi vào repo công khai** — dùng tên Lamar đưa trong chat; không có thì hỏi.
- Định dạng TL-LV của trường: `notes/workflow.md` § Tiểu luận.
- Tiểu luận Scriabin: **giữ bản đầy đủ** (59 trang thân bài) dù đề yêu cầu 30 trang — 11/2026.
- "Lấy từ tủ sách" = dùng nguyên văn bài trong app, không phân tích lại.
- (14/11) Bấm link `[[slug]]` ở bất cứ đâu → thẻ giới thiệu ngắn trước, nút "Đọc bài" mới vào bài; bài thuật ngữ gắn tên đa ngữ + mục Grove. Việc viết tiếng Việt Grove bằng phiên phụ: tạm ngưng.
- (15/11) Game: lời thoại càng nhiều càng tốt, được hư cấu một chút cho đặc sắc nhưng không làm mất tính lịch sử (dòng hư cấu có nhãn); hình ảnh phân giải cao.
- (15/11) Game: nhạc nền lấy từ bản nhạc của thời kỳ / của nhà soạn nhạc đang trò chuyện.
- (15/11) **Game Hành trình:** lời thoại dựng lại theo giọng từng thời kỳ; tên tự đặt, chân dung Phục hưng; không có thua — NPC hỏi, phải đọc bài lý thuyết để trả lời; bắt đầu Trung cổ; bổ sung tiểu sử nhà soạn nhạc từng thời kỳ; hiệu ứng điện ảnh; game dài, cập nhật dần; dùng mọi nguồn của app.
- (15/11) Thánh ca Công giáo Việt Nam là **mục riêng** (`thanhca`, nhóm Việt Nam) + sách riêng; sách còn bản quyền (Văn Chi, Kim Long) chỉ tóm lược có trang, chưa có bản thì chỉ mô tả.
- (15/11) Mọi thuật ngữ trong Lý thuyết + Âm nhạc học nối vào Từ điển Grove (`[[g:id]]`, tự động lúc build, một lần mỗi mục mỗi bài, gạch chấm để phân biệt với link bài).
- Hành trình (16/11): mỗi chương mở đầu bằng bối cảnh lịch sử của thời kỳ; bản đồ dùng bản đồ cổ đúng thời kỳ (PD) thay bản đồ phác, chi tiết, phóng to được.
