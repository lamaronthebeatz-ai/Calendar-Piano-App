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
- Lamar học **Đại học II/IV, chuyên ngành Âm nhạc học**, Nhạc viện TP.HCM (Lamar báo 18/11; trước ghi Cao học II/II). Bìa: "Bộ Văn hoá, Thể thao và Du lịch" / "Nhạc viện Thành phố Hồ Chí Minh" / logo / TIỂU LUẬN / tên đề tài / "Sinh viên thực hiện: <tên thật>" / "Chuyên ngành: Âm nhạc học" / "Hệ: Đại học II/IV" / "Thành phố Hồ Chí Minh, tháng … năm …". **Tên thật không ghi vào repo công khai** — chỉ đưa vào cover.json trong scratchpad.
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
- (16/11) **Hành trình Việt Nam**: chơi độc lập với chuỗi chương thế giới, cùng công thức (chương theo thời kỳ, chặng, phiên toà, bối cảnh, bản đồ cổ, sau đó tuyến điều tra), gắn với lịch sử và chiến tranh Việt Nam, kể sinh động. Người biên soạn chọn: kể trung lập, dùng cả hai tên gọi các cuộc chiến, ghi con số của từng bên; không gán lời bịa cho người còn sống.
- (17/11) **Giải phức điệu — nốt chuẩn bị**: chỉ cần thuận – nghịch – thuận (nốt chuẩn bị vào thuận, quãng ngay trước nốt lưu thuận); nốt chuẩn bị có thể vào xa hơn, trong lúc ngân bè kia được lướt/thêu nghịch phách yếu. Căn cứ Phạm Tú Hương tr. 10.
- (17/11) **Giải phức điệu theo nguyên văn giáo trình**: luật có chữ "phải/không được/cấm" là bắt buộc; luật chỉ thấy trong thí dụ hoặc ghi "nên/chủ yếu/tránh" là khuyến nghị; chỗ mơ hồ ghi "cần xác minh", không tự thành luật. Không bao giờ báo "vô nghiệm" khi chỉ hết giờ (`notes/counterpoint.md`).
- (17/11) **Giải phức điệu — mọi chương sau**: máy giải đầy đủ mọi dạng bài của giáo trình (chuyển động chiều ngang, ngang – dọc, đảo ảnh, ba – bốn bè, mô phỏng, canon), có chỗ tick chọn dạng bài; làm theo thứ tự sách, đợt nào xong push đợt đó.
- (17/11) **Móc xích nốt nghịch (tr. 38) — cách hiểu hẹp (a)**: nốt giải quyết của một nốt lưu được tạo quãng nghịch mới với **bè khác**, miễn quãng nghịch mới đó tự đúng luật ở cặp của nó (được chuẩn bị bằng quãng thuận, giải quyết xuống liền bậc). Luật từng cặp vốn đã cho phép, không nới luật nào; không có "nghịch bỏ lửng". Test trong `multi.test.ts`.
- (17/11) **Phần IV hình thức phức điệu**: máy dựng thể hai đoạn / ba đoạn tương phản (đoạn 1 nguyên thể, câu nối máy viết, đoạn 2 – 3 là biến thể đổi chỗ bè do học viên chọn) và thể hai đoạn mô phỏng (đoạn 1 canon ba bè, đoạn 2 canon theo thủ pháp học viên chọn); phần "phát triển cho hay" không phải luật — máy chỉ kiểm luật.
- (17/11) **Hành trình — mỗi chặng có thử thách âm nhạc** (sau câu hỏi, theo kỹ năng của thời kỳ, được bỏ qua) và **hồ sơ người chơi** hiện trên bản đồ; tuyến điều tra hiện trong danh sách chặng từ đầu. Lamar báo game "chỉ đi", không thấy thông tin người chơi.
- (17/11) **Giải phức điệu — dạng Ih**: nguyên thể và biến thể vẽ chung một tổng phổ ba khuông (I, I′, II hoặc I, II, II′) thẳng hàng từng ô như ví dụ trong sách.
- (18/11) **Tiểu luận giới thiệu app** "Ứng dụng Trung tâm lý thuyết âm nhạc học by Lamar: công cụ hỗ trợ dạy và học âm nhạc học cho người Việt Nam — thiết kế, nội dung và khả năng ứng dụng": không giới hạn số trang, không khảo sát người dùng (viết "khả năng ứng dụng"), chỉ ghi địa chỉ trang web, không ghi link GitHub. Nguồn bài: `docs/essays/gioi-thieu-app/`.

## UMRE (23/11/2026, chỉ thị kỹ thuật 12 giai đoạn)
- Làm từng giai đoạn; chỉ sang giai đoạn sau khi nghiệm thu giai đoạn trước. Làm xong thì push thẳng `main`, không cần hỏi.
- Không bịa luật, không trộn hệ lý thuyết, thiếu bằng chứng ghi "chưa xác minh"; không dựng lại app, không bỏ tính năng có sẵn — mô-đun cũ nối vào UMRE qua bộ chuyển đổi.
- Tài liệu ở `docs/umre/` phải phản ánh đúng trạng thái thật.
- (23/11) **Wave B** (GĐ5 kiểm chứng, GĐ6 giải thích – bằng chứng, GĐ7 điều phối): bộ giải tìm, bộ kiểm kiểm; LLM không được quyết định đúng sai; phân biệt dữ kiện / luật / suy luận / giả thuyết / giới hạn; lỗi kỹ thuật không bao giờ là vô nghiệm; không đánh giá thẩm mỹ trước khi xong cả bốn đợt.
