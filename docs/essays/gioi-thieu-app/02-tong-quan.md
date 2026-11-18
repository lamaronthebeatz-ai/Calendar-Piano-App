# Chương 2. Tổng quan về ứng dụng

## 2.1. Quá trình hình thành

Ứng dụng ra đời từ một nhu cầu rất nhỏ: quản lý thời khoá biểu dạy đàn piano của người viết. Từ đó, nó lớn dần theo những gì người viết cần trong việc học ở nhạc viện. Trước hết là một thư viện ghi chép lý thuyết. Rồi những cuốn sách biên soạn theo giáo trình. Rồi các công cụ làm bài tập, và cuối cùng là các công cụ nghiên cứu. Tên ứng dụng — *Trung tâm lý thuyết âm nhạc học by Lamar* — phản ánh trọng tâm hiện nay: một nơi tập trung tri thức lý thuyết và âm nhạc học bằng tiếng Việt. "Lamar" là bút danh của người viết.

Ứng dụng được phát triển liên tục: mỗi khi dùng vào việc học hoặc dạy và phát hiện một vấn đề, người viết ghi lại, sửa, kiểm thử rồi phát hành phiên bản mới. Các quyết định thiết kế quan trọng được ghi thành văn bản kèm ngày tháng. Nhờ vậy có thể truy lại vì sao một phần được làm như hiện nay, chẳng hạn vì sao bộ giải phức điệu chỉ coi là luật bắt buộc những câu có chữ "phải", "không được", "cấm" trong giáo trình (mục 5.1).

## 2.2. Kiến trúc và nguyên tắc kỹ thuật

### 2.2.1. Ứng dụng web chạy trên trình duyệt

Ứng dụng là một *ứng dụng web tiến bộ* (progressive web app). Người dùng mở bằng trình duyệt trên máy tính, máy tính bảng hay điện thoại, không cần cài đặt. Nếu muốn, có thể "thêm vào màn hình chính" để dùng như một ứng dụng riêng. Sau lần mở đầu tiên, phần lớn nội dung được lưu sẵn trên máy nên vẫn đọc được khi không có mạng.

Về công nghệ, giao diện được viết bằng thư viện React, đóng gói bằng Vite. Bản nhạc được khắc bằng hai cách: Verovio (từ dữ liệu MEI) cho trình soạn nhạc và trang phân tích, LilyPond (khắc sẵn thành hình) cho các thí dụ trong thư viện. Âm thanh piano được phát ngay trong trình duyệt.

### 2.2.2. Không có máy chủ, dữ liệu thuộc về người dùng

Theo hướng *local-first* (Kleppmann và cộng sự 2019), ứng dụng không có máy chủ riêng và không yêu cầu tài khoản. Toàn bộ nội dung chung (bài viết, sách, từ điển) là các tệp tĩnh được phát hành qua dịch vụ GitHub Pages. Mọi thứ người dùng tạo ra — ghi chú, đánh dấu khi đọc sách, đề tài nghiên cứu, bài làm, tiến trình trò chơi — chỉ lưu trên máy của họ. Người dùng có thể xuất toàn bộ thành một tệp sao lưu và nhập lại trên máy khác.

Lựa chọn này có ba hệ quả thực tiễn:
- Ứng dụng không tốn chi phí vận hành và không phụ thuộc một đơn vị nào.
- Không có dữ liệu cá nhân nào của người học bị gửi đi.
- Ngược lại, chưa thể có những chức năng cần máy chủ như giao bài và thu bài cho cả lớp (mục 8.4).

### 2.2.3. Nội dung chia nhỏ, tải khi cần

Thư viện có 1.538 bài với khoảng 1,28 triệu chữ. Nếu nạp tất cả cùng lúc, ứng dụng sẽ rất chậm trên điện thoại. Vì vậy mỗi bài là một tệp riêng, chỉ tải khi người đọc mở bài đó. Ứng dụng khởi động chỉ với một *chỉ mục* gọn (tên bài, tóm tắt, mục, tên gọi khác) đủ để tìm kiếm và hiển thị danh sách. Ngân sách dung lượng được kiểm tự động mỗi lần phát hành: chỉ mục thư viện hiện khoảng 283 KB (nén), dưới mức trần 600 KB.

### 2.2.4. Kiểm thử và phát hành tự động

Mỗi lần thay đổi được đưa lên kho mã, một quy trình tự động chạy toàn bộ các bước kiểm tra trước khi phát hành:
- kiểm tra kiểu dữ liệu;
- 255 kiểm thử đơn vị cho phần logic thuần (luật phức điệu, bộ phân tích hoà âm, câu đố của trò chơi…);
- kiểm tra mọi liên kết giữa các bài (hiện có 15.513 liên kết, không liên kết nào gãy);
- kiểm tra dung lượng;
- khoảng 320 kiểm thử giao diện chạy trên hai trình duyệt nền (Chromium và WebKit — nền của Safari), ở cả khổ điện thoại và máy tính.

Chỉ khi tất cả đều đạt, bản mới mới được phát hành. Cách làm này bảo đảm người dùng không gặp những lỗi đã từng được phát hiện.

## 2.3. Giao diện và điều hướng

### 2.3.1. Nhận diện "Phòng hoà nhạc"

Giao diện chỉ có một chế độ tối, với màu vàng là màu nhấn duy nhất, gợi không khí một phòng hoà nhạc lúc đèn tắt. Chữ tiêu đề dùng phông Libre Bodoni, chữ nội dung dùng Manrope; cả hai đều có đủ dấu tiếng Việt. Một số nguyên tắc thiết kế được giữ nhất quán:
- mỗi màn chỉ làm nổi một thứ;
- mỗi chỗ chỉ đưa ra ít lựa chọn;
- không đóng khung mọi thứ thành hộp.

Hiệu ứng chuyển động chỉ để trang trí. Nội dung luôn đọc được kể cả khi hiệu ứng bị tắt, một yêu cầu rút ra từ lỗi thật trên điện thoại iPhone.

::img home.png | Hình 2.1. Trang chủ ứng dụng: sân khấu tách lớp từ tranh *Song tấu* của P. S. Krøyer (1887) và lời giới thiệu

### 2.3.2. Bản đồ các trang

Trên điện thoại, thanh điều hướng dưới cùng dẫn tới các khu vực chính: Trang chủ, Lịch, Âm nhạc học, Lý thuyết, Tủ sách, Cài đặt. Nút "+" ở giữa mở bảng các công cụ. Trên máy tính, một ngăn kéo bên trái liệt kê đủ các trang. Ở mọi trang, tổ hợp phím ⌘K (hoặc Ctrl K) mở ô tìm kiếm chung cho bài viết, sách, thuật ngữ, ghi chú và lệnh. Bảng 2.1 liệt kê các trang công khai.

| Trang | Địa chỉ trong ứng dụng | Chức năng chính | Trình bày ở |
|---|---|---|---|
| Trang chủ | #/home | Giới thiệu, lối vào các khu vực | 2.3 |
| Lý thuyết | #/theory | Thư viện 1.538 bài theo 28 mục | 3.1 – 3.2 |
| Âm nhạc học | #/musicology | Bản đồ ngành, bầu trời chòm sao, bản đồ địa lý | 3.3 |
| Mạng tri thức | #/explore, #/graph | Người, tác phẩm, nơi chốn, quan hệ | 3.4 |
| Từ điển âm nhạc | #/terms | Grove 1904 – 1910, thuật ngữ đa ngữ | 3.5 |
| Thư mục học | #/sources | 4.337 nguồn, trích dẫn | 3.6 |
| Tủ sách | #/curriculum | 31 cuốn sách và trình đọc | Chương 4 |
| Giải phức điệu | #/counterpoint | Giải và chấm bài phức điệu nghiêm khắc | 5.1 |
| Phân tích tác phẩm | #/analyze | Phân tích hoà âm, giọng, hình thức tự động | 5.2 |
| Soạn nhạc | #/compose | Viết, nghe, xuất bản nhạc | 5.3 |
| Solfège | #/solfege | Đọc nốt, xướng âm | 5.4 |
| Luyện tai hợp âm | #/chord-ear | Nhận diện hợp âm và hướng đi | 5.4 |
| Bảng tính | #/tools | Tra hợp âm, âm giai, quãng | 5.4 |
| Sổ tay tri thức | #/brain | Ghi chú liên kết, đồ thị | 6.1 |
| Bàn làm việc | #/research | Đề tài, bản nháp, trích dẫn | 6.2 |
| Hành trình | #/hanh-trinh | Trò chơi nhập vai lịch sử âm nhạc | Chương 7 |

## 2.4. Nguyên tắc nội dung

Ứng dụng là một công cụ học thuật nên nội dung tuân theo những nguyên tắc chặt hơn một trang thông tin thông thường. Những nguyên tắc này được ghi thành văn bản và áp dụng cho mọi phần:

1. **Mọi sự kiện và trích dẫn phải có nguồn.** Mỗi bài có danh sách tài liệu tham khảo. Trích dẫn trong bài ghi rõ nguồn và số trang khi có. Chỗ nào nguồn mâu thuẫn hoặc chưa đối chiếu được nguyên văn thì ghi rõ ngay trong bài. Những câu nói "nổi tiếng" mà nguồn gốc mập mờ thì không đưa vào.
2. **Không chép và phát tán sách còn bản quyền.** Với sách còn bản quyền, ứng dụng chỉ tóm lược bằng lời của người biên soạn, trích ngắn có ghi trang và dẫn về bản gốc. Với tư liệu đã thuộc phạm vi công cộng (bản quét *Grove* 1904 – 1910, tranh và bản thu âm tự do bản quyền trên Wikimedia Commons), ứng dụng ghi rõ giấy phép.
3. **Phân biệt sự thật, giai thoại và hư cấu.** Trong trò chơi Hành trình, lời thoại dựng lại được ghi "Lời dựng lại". Nhân vật hư cấu có nhãn "nhân vật hư cấu". Tình tiết hư cấu có nhãn riêng. Phiên toà sử gia buộc người chơi phân loại từng lời kể là có chứng cứ, là giai thoại, hay chưa chắc (Chương 7).
4. **Luật là luật của giáo trình.** Các công cụ chấm bài chỉ coi là bắt buộc những gì giáo trình nói là bắt buộc. Chỗ giáo trình chỉ khuyên hoặc mơ hồ thì được ghi là khuyến nghị hoặc "cần xác minh", không tự biến thành luật.
5. **Nói rõ giới hạn.** Khi một công cụ không chắc chắn — chẳng hạn bộ giải hết thời gian mà chưa tìm được lời giải — nó phải nói "chưa kết luận được", không được nói "vô nghiệm".

## 2.5. Bảo mật và quyền riêng tư

Phần thời khoá biểu và học viên được khoá bằng mã. Các ghi chú, đánh dấu và đề tài nghiên cứu của người dùng được mã hoá (chuẩn AES-GCM 256 bit, khoá suy ra từ mã khoá bằng PBKDF2 với 600.000 vòng) trước khi lưu xuống bộ nhớ trình duyệt. Người viết cũng ghi rõ giới hạn của cách bảo vệ này: mã nguồn công khai, và một mã sáu chữ số có thể bị dò bằng máy chuyên dụng. Vì vậy, nó bảo vệ trước người dùng chung máy hơn là trước một cuộc tấn công có chủ đích.

## 2.6. Tiểu kết chương 2

Ứng dụng là một ứng dụng web không có máy chủ, dữ liệu của người dùng nằm trên máy của họ. Nội dung chung được chia nhỏ để chạy tốt trên điện thoại, và mỗi lần phát hành đều qua kiểm thử tự động. Giao diện thống nhất theo nhận diện "Phòng hoà nhạc". Nội dung tuân theo năm nguyên tắc: có nguồn, tôn trọng bản quyền, phân biệt sự thật và hư cấu, bám luật của giáo trình, nói rõ giới hạn. Các chương tiếp theo đi vào từng khu vực.
