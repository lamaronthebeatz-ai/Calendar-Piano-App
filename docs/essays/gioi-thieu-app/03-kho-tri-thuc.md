# Chương 3. Kho tri thức: thư viện, âm nhạc học, từ điển, thư mục

Kho tri thức là phần lớn nhất và là nền cho mọi phần khác của ứng dụng: sách trong Tủ sách dẫn về bài thư viện, câu hỏi trong trò chơi dẫn về bài thư viện, công cụ phân tích gắn nhãn dẫn về bài thư viện. Chương này trình bày sáu thành phần của kho: thư viện Lý thuyết, cấu trúc một bài viết, khu Âm nhạc học, Mạng tri thức, Từ điển âm nhạc và Thư mục học.

## 3.1. Thư viện Lý thuyết

### 3.1.1. Quy mô

Thư viện có **1.538 bài viết tiếng Việt**, tổng cộng khoảng 1,28 triệu chữ, với **5.506 lượt tài liệu tham khảo** quy về **4.337 nguồn** khác nhau và **15.513 liên kết nội bộ** giữa các bài. Mọi liên kết được kiểm tự động mỗi lần phát hành; tại thời điểm viết tiểu luận không có liên kết nào gãy và không có hai bài nào trùng mã. Bài được xếp vào 28 mục (Bảng 3.1).

| Mục | Số bài | Mục | Số bài |
|---|---|---|---|
| Nhà soạn nhạc | 330 | Phân tích tác phẩm | 54 |
| Âm nhạc học | 178 | Thánh ca Việt Nam | 52 |
| Âm nhạc Việt Nam | 93 | Phức điệu | 41 |
| Jazz & hoà âm hiện đại | 90 | Ký âm cơ bản | 29 |
| Nhạc khí | 84 | Thể loại âm nhạc | 29 |
| Luyện tai & sư phạm | 76 | Nhịp & tiết tấu | 28 |
| Hợp âm & hoà âm | 73 | Âm giai & giọng | 23 |
| Giai điệu & hình thức | 70 | Sáng tác | 20 |
| Kỹ thuật & luyện tập piano | 68 | Diễn tấu & ký hiệu | 19 |
| Nghệ sĩ piano | 66 | Cao độ & quãng | 16 |
| Triết học & thẩm mỹ âm nhạc | 16 | Thời kỳ & âm nhạc thế kỷ 20 | 15 |
| Âm nhạc nhà thờ | 13 | Organ nhà thờ | 13 |
| Hoà âm cromatic & phân tích | 12 | Nghe, cảm thụ & âm học | 12 |
| Ngẫu hứng & ứng tác | 11 | Cây đàn piano | 7 |

Bảng 3.1 cho thấy ba trọng tâm. Thứ nhất là *lịch sử qua con người*: 330 bài tiểu sử nhà soạn nhạc và 66 bài về nghệ sĩ piano. Thứ hai là *âm nhạc học như một ngành*: 178 bài về phân ngành, phương pháp, nguồn tư liệu. Thứ ba là *âm nhạc Việt Nam*: 93 bài âm nhạc Việt Nam và 52 bài thánh ca Việt Nam. Các môn kỹ thuật (hoà âm, phức điệu, hình thức, phân tích) chiếm khoảng 250 bài và được tổ chức thêm thành sách (Chương 4).

### 3.1.2. Trang chủ Lý thuyết và bài tổng quan

Trang chủ Lý thuyết (Hình 3.1) hiển thị các mục dưới dạng thẻ có hình minh hoạ riêng, kèm một ô tìm kiếm. Mỗi mục có một *bài tổng quan* (hub). Bài này trình bày hệ thống của mục — các mảng, thứ tự học, những bài nên đọc trước — và dẫn tới từng bài chi tiết. Chẳng hạn, bài tổng quan về phức điệu nghiêm khắc trình bày lộ trình toàn môn theo bốn phần của giáo trình Phạm Tú Hương, mỗi phần dẫn tới các bài tương ứng.

::img theory.png | Hình 3.1. Trang chủ thư viện Lý thuyết

## 3.2. Cấu trúc một bài viết

### 3.2.1. Các thành phần

Mỗi bài có: tên bài; các tên gọi khác (để tìm kiếm và để liên kết từ bài khác bằng bất kỳ tên nào); một đoạn tóm tắt; thân bài; danh sách tài liệu tham khảo; danh sách bài liên quan. Thân bài được viết bằng một ngôn ngữ đánh dấu riêng. Ngoài chữ, bảng và đề mục, nó cho phép nhúng nhiều loại nội dung âm nhạc:

- **Thí dụ ký âm khắc bằng LilyPond**: khuông đơn, khuông kép (hệ piano), tiết tấu. Có 448 khối thí dụ được khắc sẵn thành hình, và người đọc có thể bấm để nghe.
- **Thí dụ cắt từ bản quét giáo trình** (`::scan`): với những thí dụ dài trong sách gốc, người biên soạn không chép lại bằng tay mà cắt đúng vùng từ bản quét, ghi số thí dụ và số trang. Cách làm này vừa chính xác, vừa minh bạch về nguồn.
- **Bài xướng âm** (`::solf`): giai điệu kèm nút nghe, nút lên dây (cho nốt chủ âm) và phím đàn.
- **Video** nhúng từ YouTube cho những bản thu minh hoạ.
- **Trích dẫn nguồn trong câu** (mục 3.6).

### 3.2.2. Liên kết hai chiều và thẻ xem nhanh

Trong thân bài, một khái niệm được nối sang bài khác bằng cách đặt tên bài trong hai cặp ngoặc vuông. Khi bấm vào một liên kết, người đọc thấy một *thẻ xem nhanh* với tên, tóm tắt và hình của bài đích, và có thể đọc tiếp mà không rời trang. Ngược lại, cuối mỗi bài có mục *liên kết ngược*: danh sách mọi bài đã nhắc tới bài này. Nhờ đó người đọc đi được theo cả hai hướng — từ khái niệm tổng quát xuống chi tiết, và từ chi tiết ngược về những nơi nó được dùng.

Bài "Đối vị đơn giản hai bè" (Hình 3.2) là một ví dụ. Bài trình bày luật quãng thuận – quãng nghịch, nốt lưu, các vị trí của nốt nghịch theo giáo trình Phạm Tú Hương, cắt thí dụ từ bản quét giáo trình Taneyev, và dẫn sang các bài đối vị chiều dọc, chiều ngang, đảo ảnh, ba – bốn bè. Bài cũng có nút mở công cụ giải phức điệu để thực hành ngay.

::img article.png | Hình 3.2. Một bài viết trong thư viện: "Đối vị đơn giản hai bè"

### 3.2.3. Kiến thức từ nhiều sách, gộp vào một bài

Khi biên soạn từ một cuốn sách mới, người viết không tạo một loạt bài riêng theo cuốn sách đó mà *gộp vào bài cùng chủ đề*, dưới mục "Theo sách gốc …". Chẳng hạn, bài về một hình thức âm nhạc có thể có phần trình bày theo Sposobin, phần theo Mazel, phần theo giáo trình Nguyễn Thị Nhung. Người học thấy được chỗ các tác giả thống nhất và chỗ họ khác nhau, thay vì phải đọc ba bài rời rạc.

## 3.3. Khu Âm nhạc học

### 3.3.1. Bản đồ ngành

Khu Âm nhạc học tổ chức kiến thức theo các phân ngành của âm nhạc học, gồm năm phần:
- *Nhập môn*: ngành là gì, chia thế nào, nghiên cứu bằng phương pháp nào.
- *Âm nhạc học lịch sử* và *Âm nhạc học hệ thống*: hai nửa trong sơ đồ năm 1885 của Guido Adler.
- *Âm nhạc học ứng dụng*: công nghiệp âm nhạc và bản quyền, trị liệu, giáo dục, công nghệ.
- *Thực hành sáng tạo*: ngẫu hứng, sáng tác, đệm.

Mỗi phân ngành gom các bài liên quan thành nhóm, như "Cổ tự học và ký âm", "In ấn, văn bản và ấn bản", "Bản thu như một nguồn".

### 3.3.2. Bầu trời chòm sao

Trang chủ Âm nhạc học vẽ các phân ngành thành một bầu trời ba chiều (Hình 3.3). Mỗi phân ngành là một ngôi sao, mỗi phần là một chòm sao. Đường nối giữa hai sao biểu thị số bài mà hai phân ngành dùng chung. Quanh bầu trời, các chủ đề lý thuyết hiện như những "thân nơron", mỗi bài là một chấm nhỏ. Người dùng có thể xoay, phóng to và bấm vào một ngôi sao để mở phân ngành đó. Cách trình bày này giúp người mới thấy ngay rằng âm nhạc học là một mạng lưới, không phải một danh sách môn học rời nhau.

::img musicology.png | Hình 3.3. Trang chủ Âm nhạc học: các phân ngành như một bầu trời chòm sao

### 3.3.3. Bản đồ âm nhạc

Bản đồ âm nhạc (Hình 3.4) đặt **153 địa điểm** lên bản đồ thế giới theo phép chiếu Equal Earth. Đó là những nơi diễn ra sự kiện âm nhạc quan trọng: tu viện, nhà thờ, triều đình, nhà hát, nhạc viện. Mỗi địa điểm có năm, loại sự kiện, ảnh minh hoạ kèm nguồn và đường dẫn tới bài viết. Một thanh thời gian cho phép lọc theo thế kỷ. Màu chấm theo thời kỳ. Các *hành trình* nối những nơi một nhà soạn nhạc đã sống và làm việc theo thứ tự thời gian.

::img map.png | Hình 3.4. Bản đồ âm nhạc: 153 địa điểm, lọc theo thời gian và loại sự kiện

## 3.4. Mạng tri thức

### 3.4.1. Người, tác phẩm, nơi chốn

Trang Mạng tri thức (Hình 3.5) trả lời câu hỏi "ai, ở đâu, khi nào, viết gì". Dữ liệu được ghép từ những gì thư viện đã có, không nhập lại từ đầu:
- **398 người** (nhà soạn nhạc, nghệ sĩ), mỗi người có năm sinh – mất, quốc gia, thời kỳ, nhóm, kèm **785 tác phẩm tiêu biểu** do người biên soạn ghi trong bài tiểu sử.
- **4.899 tác phẩm** lấy từ cơ sở dữ liệu mở Wikidata. Mỗi người tối đa 60 tác phẩm, chỉ lấy những tác phẩm có bài Wikipedia tiếng Anh.

Người dùng lọc theo thời kỳ, quốc gia, khoảng năm. Ngoài ra còn có dòng thời gian và các "dòng truyền" thầy – trò.

::img explore.png | Hình 3.5. Mạng tri thức: danh sách 398 người, lọc theo thời kỳ, quốc gia và năm

### 3.4.2. Quan hệ có nguồn gốc

Trang Đồ thị hiển thị mọi đối tượng — bài viết, người, tác phẩm, nguồn, ghi chú — như các nút nối với nhau bằng quan hệ có tên: "học trò của", "sáng tác", "được nhắc trong", v.v. Điểm quan trọng về mặt học thuật là **mỗi quan hệ đều mang nhãn nguồn gốc**, gồm bốn loại:
- *thư viện*: người biên soạn ghi, có nguồn ở bài viết;
- *Wikidata*: thu tự động, chưa đối chiếu từng mục;
- *máy suy ra*: ví dụ nhóm thể loại đọc từ tên tác phẩm;
- *nghiên cứu*: người dùng tự ghi, là nhận định cho tới khi được kiểm chứng.

Các loại này không bao giờ bị trộn lẫn, nên người dùng luôn biết một mối nối đáng tin tới đâu.

## 3.5. Từ điển âm nhạc

### 3.5.1. Grove 1904 – 1910

Phần chính của Từ điển là bản tiếng Việt của *Grove's Dictionary of Music and Musicians*, ấn bản thứ hai do J. A. Fuller Maitland biên tập (5 tập, Macmillan, New York, 1904 – 1910). Ấn bản này đã thuộc phạm vi công cộng. Người viết dùng bản quét của thư viện Đại học Cornell trên Internet Archive. Văn bản nhận dạng ký tự của cả năm tập, kể cả phần phụ lục bổ sung và đính chính ở cuối tập V, được tách thành **6.430 mục từ**. Tất cả đều đã có phần tiếng Việt.

Mỗi mục hiển thị: tên mục, loại (người, thuật ngữ, nhạc cụ…), phần tiếng Việt, nguyên văn tiếng Anh, số tập và số trang, kèm đường dẫn tới đúng trang bản quét. Nhờ vậy người đọc luôn đối chiếu được bản dịch với bản gốc. Khi một mục trùng với một bài thư viện, hai bên được nối với nhau.

Từ điển này có giá trị như một nguồn lịch sử: nó cho biết giới âm nhạc học Anh đầu thế kỷ XX hiểu và trình bày các khái niệm ra sao. Nhiều nhận định của nó đã lạc hậu, và trang từ điển ghi rõ điều đó: thông tin đúng với những năm 1904 – 1910, không phải hiện nay.

::img terms.png | Hình 3.6. Từ điển âm nhạc: Grove 1904 – 1910, 6.430 mục, đều có tiếng Việt

### 3.5.2. Thuật ngữ đa ngữ

Phần thứ hai là bảng **258 thuật ngữ** đối chiếu đa ngữ. Mỗi thuật ngữ có:
- tên tiếng Việt chính và các biến thể (ví dụ "Accordion và harmonium" với các tên "đàn accordion", "đàn harmonium", "lưỡi gà tự do", "phong cầm");
- tên trong tiếng Anh, Nga, Đức, Pháp, Ý;
- mã Wikidata và một định nghĩa ngắn có nguồn;
- số lần mỗi biến thể được dùng trong thư viện.

Con số cuối cùng giúp thấy cách gọi nào phổ biến hơn trong chính kho bài.

Như đã nêu ở mục 1.3.2, người viết không tìm thấy tiêu chuẩn quốc gia nào cho thuật ngữ âm nhạc. Vì vậy tên tiếng Việt được chọn theo cách dùng trong bài thư viện và nhãn của Wikidata, với các biến thể ghi đầy đủ. Từ điển không đặt chuẩn, chỉ đối chiếu.

## 3.6. Thư mục học

### 3.6.1. Một nguồn, một mã

Mỗi tài liệu tham khảo trong mọi bài viết được quy về một *nguồn* có mã ổn định. Toàn thư viện có 4.337 nguồn. Ba mươi công trình chính được người viết biên mục bằng tay với đầy đủ thông tin xuất bản, gồm 22 sách và 8 nghiên cứu. Đó là các giáo trình (Phạm Tú Hương, Nguyễn Thị Nhung, Sposobin, Mazel, Tyulin…), các sách gốc của Tủ sách, và các bài nghiên cứu như Ewell (2020) về thuyết chức năng hoà âm trong lý thuyết Nga hay Bakulina (2020) về sách giáo khoa bốn tác giả. Thông tin chỉ điền đúng những gì đã kiểm được, không điền theo trí nhớ.

### 3.6.2. Trích dẫn trong câu và xuất trích dẫn

Trong bài, người biên soạn trích bằng cú pháp `[^mã-nguồn, tr. 45]`. Ứng dụng hiển thị thành "(Sposobin 1984, tr. 45)" và dẫn tới trang của nguồn đó. Trang Thư mục học (Hình 3.7) liệt kê mọi nguồn, lọc được theo loại, ngôn ngữ, tình trạng bản quyền. Mỗi nguồn có trang riêng cho biết những bài nào dùng nó. Từ trang nguồn, người dùng chép được trích dẫn theo kiểu Chicago, APA hoặc BibTeX. Đây là tiện ích trực tiếp cho người viết tiểu luận, luận văn.

::img sources.png | Hình 3.7. Thư mục học: 4.337 nguồn, xuất trích dẫn Chicago / APA / BibTeX

## 3.7. Tiểu kết chương 3

Kho tri thức gồm:
- một thư viện 1.538 bài có nguồn, liên kết hai chiều;
- khu Âm nhạc học tổ chức theo sơ đồ phân ngành, có bầu trời chòm sao và bản đồ 153 địa điểm;
- Mạng tri thức với 398 người và gần 5.700 tác phẩm, mỗi quan hệ có nhãn nguồn gốc;
- Từ điển Grove 6.430 mục và 258 thuật ngữ đa ngữ;
- Thư mục học 4.337 nguồn.

Đặc điểm chung của mọi thành phần là *truy được về nguồn*: từ một câu trong bài, một mục từ điển hay một mối quan hệ trong đồ thị, người đọc luôn đi được tới nơi thông tin ấy được ghi.
