# Chương 1. Cơ sở lý luận và thực tiễn

## 1.1. Âm nhạc học và công nghệ số

### 1.1.1. Từ truy xuất thông tin âm nhạc đến âm nhạc học có máy tính hỗ trợ

Việc dùng máy tính để nghiên cứu âm nhạc đã có lịch sử hơn nửa thế kỷ. Đến đầu thế kỷ XXI, nó đủ lớn để hình thành một lĩnh vực riêng với hội nghị thường niên (ISMIR) và các bài tổng quan. Downie (2003) tổng kết lĩnh vực *truy xuất thông tin âm nhạc* (music information retrieval) và chỉ ra rằng âm nhạc là loại thông tin đặc biệt khó xử lý: nó có nhiều mặt (cao độ, thời gian, hoà âm, âm sắc, lời, ký hiệu…), có nhiều dạng biểu diễn (bản ghi âm, bản nhạc, dữ liệu MIDI), và ý nghĩa của nó phụ thuộc vào văn hoá.

Ở phía âm nhạc học, Cuthbert và Ariza (2010) giới thiệu bộ công cụ *music21* với mục đích rõ ràng: giúp nhà âm nhạc học đặt và trả lời những câu hỏi trên một kho tác phẩm lớn mà nếu làm thủ công sẽ mất hàng năm. Bộ công cụ biểu diễn bản nhạc thành đối tượng có cấu trúc (nốt, quãng, hợp âm, khuông, giọng) để máy có thể đếm, so sánh, tìm mẫu. Ứng dụng được giới thiệu trong tiểu luận này đi theo cùng tinh thần đó, nhưng hướng vào người học và người dạy hơn là vào nhà nghiên cứu chuyên sâu.

### 1.1.2. Mã hoá và khắc bản nhạc trên web

Muốn máy "hiểu" một bản nhạc, trước hết phải có cách ghi bản nhạc thành dữ liệu. Sáng kiến Mã hoá Âm nhạc (Music Encoding Initiative, MEI) là một khung mã hoá ký hiệu âm nhạc bằng XML, được Hankinson, Roland và Fujinaga (2011) mô tả như một *nền tảng mở rộng được*: từ đó có thể tạo ra những lược đồ mã hoá cho các loại ký hiệu khác nhau thay vì mỗi loại một chuẩn riêng không tương thích. Để hiển thị MEI trên trình duyệt, Pugin, Zitellini và Roland (2014) phát triển thư viện *Verovio*, khắc bản nhạc thành đồ hoạ SVG. Vì mỗi ký hiệu trong SVG là một phần tử có địa chỉ, Verovio đặc biệt hợp với các ứng dụng tương tác trên web — điều mà trình soạn nhạc và trang phân tích tác phẩm của ứng dụng tận dụng (Chương 5).

### 1.1.3. Phân tích hoà âm và nhận diện giọng bằng máy

Hai bài toán cổ điển của âm nhạc học có máy tính hỗ trợ là gọi tên hợp âm và xác định giọng. Pardo và Birmingham (2002) đề xuất các thuật toán phân tích hợp âm bằng cách chia bản nhạc thành đoạn và khớp từng đoạn với các mẫu hợp âm; về sau, các tác giả khác mô tả cách làm này là quy hoạch động trên các cách chia đoạn. Về giọng, Krumhansl và Kessler (1982) đo bằng thực nghiệm mức độ "hợp giọng" mà người nghe cảm nhận được của từng bậc so với một trung tâm điệu tính, và theo dõi cảm giác giọng thay đổi theo thời gian khi nghe một chuỗi hợp âm. Các "hồ sơ giọng" rút từ nghiên cứu ấy đến nay vẫn là nền của nhiều thuật toán nhận diện giọng. Bộ phân tích của ứng dụng dùng cả hai ý tưởng này (mục 5.3).

## 1.2. Công nghệ trong dạy và học âm nhạc

### 1.2.1. Công nghệ như công cụ phục vụ việc học

Bauer (2014) đề xuất một khung tích hợp công nghệ vào dạy học âm nhạc xoay quanh ba quá trình âm nhạc: *sáng tạo*, *biểu diễn* và *cảm thụ – phản hồi*. Cuốn sách nhấn mạnh rằng công nghệ là công cụ hỗ trợ cho mục tiêu âm nhạc, không phải mục tiêu tự thân. Khung ấy giúp xếp các chức năng của ứng dụng: thư viện và từ điển phục vụ cảm thụ – hiểu biết; trình soạn nhạc, bộ giải phức điệu phục vụ sáng tạo; Solfège, luyện tai, thu âm phục vụ biểu diễn và kỹ năng nghe.

### 1.2.2. Trò chơi hoá

Deterding, Dixon, Khaled và Nacke (2011) định nghĩa *trò chơi hoá* (gamification) là việc dùng các yếu tố thiết kế trò chơi trong những bối cảnh không phải trò chơi. Họ phân biệt nó với "trò chơi nghiêm túc" — những trò chơi hoàn chỉnh được làm ra cho mục đích ngoài giải trí. Theo cách phân biệt đó, phần Hành trình của ứng dụng (Chương 7) gần với trò chơi nghiêm túc hơn: nó là một trò chơi nhập vai có cốt truyện, nhưng mọi câu hỏi đều dẫn về bài viết trong thư viện. Các yếu tố như điểm kinh nghiệm, cấp độ, thành tích thì là trò chơi hoá theo đúng nghĩa của Deterding và cộng sự.

### 1.2.3. Phần mềm "dữ liệu nằm trên máy người dùng"

Kleppmann, Wiggins, van Hardenberg và McGranaghan (2019) gọi là *phần mềm local-first* những ứng dụng giữ dữ liệu chủ yếu trên thiết bị của người dùng thay vì trên máy chủ. Theo các tác giả, cách làm này vẫn giữ được tiện ích của ứng dụng đám mây mà không lấy mất quyền sở hữu dữ liệu của người dùng. Ứng dụng được thiết kế theo hướng này (mục 2.2): không có máy chủ, không cần tài khoản, ghi chú và bài làm của người học nằm trên máy của chính họ. Đây là lựa chọn có ý nghĩa thực tiễn trong bối cảnh nhà trường ở Việt Nam: không tốn chi phí vận hành, không phụ thuộc mạng, không thu thập dữ liệu cá nhân.

## 1.3. Thực trạng tài liệu và giáo trình âm nhạc học ở Việt Nam

### 1.3.1. Các giáo trình đang dùng

Chương trình lý luận âm nhạc ở các nhạc viện Việt Nam được xây dựng phần lớn trên nền giáo trình của trường phái Nga – Xô viết. Nhiều giáo trình trong nước là biên soạn hoặc biên dịch từ hệ thống đó. Ứng dụng số hoá và đối chiếu một số giáo trình tiêu biểu:

- *Phức điệu nghiêm khắc* của Phạm Tú Hương (Nhạc viện Hà Nội, 1991), dựa trên hệ thống của S. I. Taneyev — nền cho bộ giải phức điệu (mục 5.1).
- *Giáo trình Phân tích tác phẩm âm nhạc, Quyển 1 – bậc đại học* của Nguyễn Thị Nhung (Nhạc viện Hà Nội, 2006) — nền cho cuốn "Phân tích tác phẩm âm nhạc" trong Tủ sách (mục 4.3).
- Hệ thống hoà âm chức năng của sách giáo khoa bốn tác giả Dubovsky – Evseev – Sposobin – Sokolov, mà Bakulina (2020) đã khảo cứu vai trò trong việc truyền bá di sản Riemann ở Nga – Xô viết; cùng với các sách hình thức của Sposobin (1984), Mazel (1979), Asafyev (1971).

### 1.3.2. Ba khoảng trống

Khi đặt các giáo trình này cạnh nhu cầu của người học, có ba khoảng trống mà ứng dụng nhắm tới.

**Khoảng trống về liên kết.** Giáo trình in là văn bản tuyến tính. Người học gặp khái niệm "đối vị phức tạp" trong giáo trình phức điệu sẽ không có đường dẫn trực tiếp sang hình thức fugue, sang tiểu sử Taneyev hay sang một bài phân tích canon của Bach. Thư viện có liên kết hai chiều (Chương 3) lấp khoảng trống này.

**Khoảng trống về thuật ngữ.** Theo khảo sát của người viết khi xây dựng từ điển (mục 3.5), không có tiêu chuẩn quốc gia nào cho thuật ngữ âm nhạc tiếng Việt. Cùng một khái niệm, các giáo trình dịch từ tiếng Nga và các tài liệu dịch từ tiếng Anh, tiếng Pháp có thể dùng những tên khác nhau. Ứng dụng không tự đặt chuẩn mà đối chiếu: mỗi thuật ngữ có tên tiếng Việt kèm các biến thể và tên trong năm ngôn ngữ.

**Khoảng trống về phản hồi.** Với các môn kỹ thuật như phức điệu, người học cần làm rất nhiều bài và biết ngay mình sai ở đâu. Một bộ giải và chấm bài bám sát nguyên văn giáo trình (mục 5.1) cho phản hồi tức thì, kèm tên luật và số trang của giáo trình. Nó cũng giúp người dạy kiểm một đề bài trước khi giao: đề có lời giải hay không.

## 1.4. Tiểu kết chương 1

Âm nhạc học có máy tính hỗ trợ đã có những công cụ và chuẩn mực quốc tế: MEI và Verovio cho việc mã hoá và khắc bản nhạc, music21 cho phân tích, các mô hình nhận diện hợp âm và giọng. Giáo dục âm nhạc có các khung tích hợp công nghệ như của Bauer, và đã có định nghĩa rõ ràng về trò chơi hoá. Ở Việt Nam, giáo trình lý luận âm nhạc chủ yếu theo hệ Nga – Xô viết, tồn tại dưới dạng sách in, với ba khoảng trống về liên kết, thuật ngữ và phản hồi. Các chương sau trình bày ứng dụng như một nỗ lực lấp ba khoảng trống ấy bằng những công cụ và chuẩn mực vừa nêu.
