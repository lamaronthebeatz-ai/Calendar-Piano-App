# Ứng dụng Trung tâm lý thuyết âm nhạc học by Lamar — Mở đầu

## 1. Lý do chọn đề tài

Người học âm nhạc học ở Việt Nam hôm nay vừa thừa vừa thiếu tài liệu. Thừa, vì chỉ cần một chiếc điện thoại là đọc được hàng nghìn trang tiếng Anh, tiếng Nga, tiếng Đức về lịch sử, lý thuyết và phân tích âm nhạc. Thiếu, vì phần lớn những gì người học cần cho chương trình của mình — hoà âm theo hệ thống chức năng của trường phái Nga – Xô viết, phức điệu nghiêm khắc theo hệ thống Taneyev, phân tích tác phẩm theo giáo trình của các nhạc viện trong nước — lại nằm trong những cuốn giáo trình in, ít bản, khó tìm, và không có cách nào tự kiểm tra bài làm khi không có thầy bên cạnh.

Ba khó khăn cụ thể lặp lại trong quá trình học của người viết. *Thứ nhất*, kiến thức nằm rải rác: một khái niệm như "nốt lưu" xuất hiện trong giáo trình phức điệu, trong sách hoà âm, trong từ điển, với những cách gọi và cách định nghĩa không hoàn toàn trùng nhau. *Thứ hai*, thuật ngữ âm nhạc tiếng Việt chưa thống nhất: cùng một khái niệm có thể được gọi bằng hai, ba tên, và không có một tiêu chuẩn quốc gia nào để đối chiếu. *Thứ ba*, các môn có tính kỹ thuật cao như phức điệu hay hoà âm đòi hỏi làm bài tập thường xuyên, nhưng người học chỉ biết bài mình đúng hay sai khi được thầy chấm.

Từ những khó khăn đó, người viết đã tự xây dựng một ứng dụng web mang tên **Trung tâm lý thuyết âm nhạc học by Lamar** (sau đây gọi tắt là *ứng dụng*), truy cập công khai tại địa chỉ https://lamaronthebeatz-ai.github.io/Calendar-Piano-App/. Ban đầu ứng dụng chỉ là một thời khoá biểu dạy đàn cá nhân; qua nhiều giai đoạn, nó trở thành một hệ thống gồm thư viện hơn 1.500 bài viết tiếng Việt có nguồn, một tủ sách 31 cuốn, một từ điển thuật ngữ dựa trên bộ *Grove* 1904 – 1910, các công cụ giải và chấm bài phức điệu, phân tích hoà âm tự động, soạn nhạc, luyện tai, một bàn làm việc nghiên cứu và một trò chơi nhập vai về lịch sử âm nhạc.

Tiểu luận này giới thiệu chi tiết ứng dụng ấy dưới góc nhìn của âm nhạc học: mỗi phần của ứng dụng giải quyết vấn đề gì của việc dạy và học, dựa trên những giáo trình và nguồn nào, được thiết kế theo nguyên tắc gì, và có thể dùng vào việc dạy – học ra sao. Người viết cho rằng việc trình bày một cách có hệ thống một công cụ như vậy — kể cả những giới hạn của nó — là có ích cho đồng nghiệp, thầy cô và những người học khác, và cũng là một cách để công cụ được góp ý, kiểm chứng, sửa chữa.

## 2. Mục đích nghiên cứu

- Giới thiệu đầy đủ cấu trúc, nội dung và chức năng của ứng dụng, kể cả các công trình (sách, giáo trình biên soạn, tiểu luận) và các liên kết tri thức bên trong nó.
- Làm rõ cơ sở học thuật của từng phần: giáo trình, sách gốc và nguồn tư liệu được dùng; cách chuyển chúng thành nội dung số.
- Đánh giá khả năng ứng dụng của công cụ cho người dạy và người học âm nhạc học tại Việt Nam, dựa trên những số liệu kiểm chứng được, đồng thời chỉ ra giới hạn và hướng phát triển.

## 3. Đối tượng và phạm vi nghiên cứu

*Đối tượng nghiên cứu* là ứng dụng Trung tâm lý thuyết âm nhạc học by Lamar ở phiên bản tháng 11 năm 2026.

*Phạm vi*: tiểu luận khảo sát toàn bộ các phần công khai của ứng dụng — thư viện Lý thuyết, Âm nhạc học, Mạng tri thức, Từ điển, Thư mục học, Tủ sách, các công cụ thực hành, các công cụ nghiên cứu và trò chơi Hành trình. Phần thời khoá biểu và hồ sơ học viên là khu vực riêng tư của người viết, được khoá bằng mã, không thuộc phạm vi tiểu luận. Các chi tiết lập trình chỉ được nêu ở mức cần thiết để hiểu cách ứng dụng vận hành; mã nguồn không được trình bày.

## 4. Phương pháp nghiên cứu

- *Phương pháp mô tả – phân tích*: trình bày từng thành phần của ứng dụng theo trình tự vấn đề → giải pháp → căn cứ.
- *Phương pháp đối chiếu*: so nội dung số với giáo trình và sách gốc (số trang, nguyên văn luật, ví dụ).
- *Phương pháp thống kê*: các số liệu về quy mô (số bài, số liên kết, số nguồn, số mục từ) và về độ đúng (bộ phân tích hoà âm đo trên hợp xướng Bach; bộ giải phức điệu đối chiếu với một bộ kiểm độc lập) được lấy trực tiếp từ dữ liệu của ứng dụng và từ các bộ kiểm thử tự động.
- *Nghiên cứu dựa trên thiết kế* (design-based research): ứng dụng được xây dựng trong quá trình học và dạy thật, mỗi lần dùng phát hiện vấn đề thì sửa — cách làm mà Barab và Squire (2004) mô tả là vừa tác động trực tiếp vào thực tiễn vừa góp phần vào lý thuyết.

Tiểu luận *không* có khảo sát người dùng. Vì vậy các nhận định về tác dụng của ứng dụng được nêu dưới dạng *khả năng ứng dụng*, không phải hiệu quả đã được đo; điều này được bàn kỹ ở Chương 8.

## 5. Bố cục

Ngoài phần Mở đầu, Kết luận, Tài liệu tham khảo và Phụ lục, tiểu luận gồm tám chương:

- Chương 1. Cơ sở lý luận và thực tiễn
- Chương 2. Tổng quan về ứng dụng
- Chương 3. Kho tri thức: thư viện, âm nhạc học, từ điển, thư mục
- Chương 4. Tủ sách và các công trình biên soạn
- Chương 5. Công cụ thực hành
- Chương 6. Công cụ nghiên cứu
- Chương 7. Trò chơi nhập vai Hành trình âm nhạc
- Chương 8. Khả năng ứng dụng cho người dạy và người học
