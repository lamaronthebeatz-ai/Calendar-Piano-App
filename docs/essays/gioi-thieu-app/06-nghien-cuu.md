# Chương 6. Công cụ nghiên cứu

Các chương trước trình bày những gì ứng dụng *cung cấp* cho người dùng. Chương này trình bày những công cụ giúp người dùng *tạo ra* tri thức của riêng mình: ghi chép, tổ chức tài liệu, lập luận và viết. Đây là phần dành cho người học ở bậc đại học trở lên khi làm tiểu luận, luận văn, và cho người dạy khi chuẩn bị bài giảng hay viết nghiên cứu.

## 6.1. Sổ tay tri thức

### 6.1.1. Ghi chú có liên kết

Sổ tay tri thức (Hình 6.1) là nơi ghi chú tự do theo mô hình "bộ não thứ hai": mỗi ghi chú là một ý, và các ý nối với nhau. Ghi chú dùng chung cú pháp liên kết với thư viện. Có thể nối tới:
- một bài thư viện hay một người;
- một ghi chú khác;
- một đề tài nghiên cứu;
- một nguồn trong thư mục học, kèm số trang.

Khi gõ hai dấu ngoặc vuông, ứng dụng gợi ý tên bài, ghi chú và đề tài phù hợp. Có thể tạo ngay một ghi chú mới từ một cái tên chưa tồn tại.

::img brain.png | Hình 6.1. Sổ tay tri thức: ghi chú tự do, liên kết tới bài, ghi chú, đề tài và nguồn

### 6.1.2. Liên kết ngược và đồ thị

Mỗi ghi chú hiện danh sách những ghi chú và đề tài đã nhắc tới nó (liên kết ngược). Toàn bộ sổ tay được vẽ thành một đồ thị sống. Đồ thị gom các ghi chú, các đề tài (câu hỏi và bản nháp), và cả những lời người dùng đã ghi khi tô màu trong thư viện. Nhờ vậy người dùng nhìn thấy cấu trúc suy nghĩ của mình: ý nào là trung tâm, ý nào còn đứng một mình.

Để phân giải đúng tên bài khi người dùng gõ, ứng dụng phải xử lý những trường hợp một tên gọi trùng giữa nhiều bài; hiện có 297 tên gọi như vậy. Chẳng hạn "FUGA" vừa là tên một hãng phân phối nhạc vừa là cách viết khác của "fuga". Thứ tự ưu tiên được quy định rõ: mã bài trước, rồi bài có tiêu đề đúng bằng tên đó, rồi các trường hợp khác.

## 6.2. Bàn làm việc nghiên cứu

### 6.2.1. Đề tài

Bàn làm việc (Hình 6.2) tổ chức công việc theo *đề tài*. Mỗi đề tài có tên, câu hỏi nghiên cứu, một thẻ, một bản nháp, danh sách nguồn và danh sách bài thư viện liên quan. Ghi chú không phải chép vào đề tài. Mọi đánh dấu khi đọc sách hoặc đọc bài mang thẻ của đề tài sẽ tự hiện trong tab Ghi chú của đề tài đó. Từ đây, một nút bấm chèn đoạn trích cùng lời ghi vào bản nháp, kèm đường dẫn về chỗ gốc.

::img research.png | Hình 6.2. Bàn làm việc nghiên cứu: đề tài, câu hỏi, bản nháp có trích dẫn

### 6.2.2. Bản nháp và trích dẫn

Bản nháp được viết bằng cùng ngôn ngữ đánh dấu với thư viện, xem trước được ngay. Trong tab Nguồn, người dùng tìm trong thư mục học (mục 3.6), thêm nguồn vào đề tài, rồi bấm "Trích". Ứng dụng chèn mã trích dẫn vào bản nháp và đặt con trỏ đúng chỗ để gõ số trang.

Khi xuất, người dùng chọn một trong hai kiểu trích dẫn:
- **Chicago**: trích dẫn thành chú thích đánh số. Lần đầu ghi đủ thông tin, các lần sau rút gọn thành "Tác giả, Tên". Cuối bài có Thư mục.
- **APA**: trích dẫn dạng "(Tác giả, năm, tr. n)" ngay trong câu. Cuối bài có Tài liệu tham khảo.

Bản xuất ra ở dạng Markdown hoặc tệp Word (.docx), dùng tiếp được trong các trình soạn thảo thông thường.

## 6.3. Nguồn của tôi, luận điểm và bằng chứng

### 6.3.1. Kho tài liệu riêng

Ngoài thư mục học chung, mỗi người dùng có kho *Nguồn của tôi* để ghi những tài liệu riêng: sách, chương sách, bài báo, luận văn, bản nhạc, tư liệu lưu trữ, bản thu, trang web. Mỗi tài liệu có các trường thông tin xuất bản quen thuộc (tác giả, năm, nhà xuất bản, tạp chí, tập, trang, ISBN, DOI, nơi lưu trữ) và được đánh dấu là nguồn sơ cấp hay thứ cấp.

Trường quan trọng nhất là *tình trạng kiểm chứng*: chưa kiểm, đã đối chiếu với bản ghi thư viện, đã đối chiếu với bản gốc, hay có nghi vấn. Khi đánh dấu "đã đối chiếu", người dùng phải ghi đối chiếu với cái gì.

Ứng dụng **không tự điền thông tin** cho tài liệu. Ô nào người dùng để trống thì giữ trống. Mã ISBN chỉ được kiểm số kiểm tra, mã DOI chỉ được kiểm cú pháp. Ứng dụng không tra mạng và không đoán. Đây là một lựa chọn có chủ đích: thông tin thư mục sai do máy tự điền là một nguồn lỗi phổ biến trong bài viết học thuật.

### 6.3.2. Chuỗi luận điểm – bằng chứng

Trong mỗi đề tài, tab Luận điểm cho phép ghi các *luận điểm* và gắn *bằng chứng* cho từng luận điểm. Mỗi bằng chứng có:
- vai trò: ủng hộ, phản bác hay chỉ là bối cảnh;
- nguồn và số trang;
- câu trích;
- cho biết câu trích đã được đối chiếu với bản gốc hay chưa.

Ứng dụng dựng thành chuỗi **Luận điểm → Bằng chứng → Trích dẫn → Tài liệu gốc → Trang** và tự kiểm:
- *lỗi*: luận điểm không có bằng chứng, không có bằng chứng ủng hộ, hoặc dẫn tới tài liệu đã bị xoá;
- *cảnh báo*: thiếu số trang, tài liệu chưa đối chiếu hoặc đang có nghi vấn, luận điểm được đánh dấu "đã vững" trong khi vẫn còn bằng chứng phản bác;
- *ghi chú*: luận điểm chỉ dựa trên nguồn thứ cấp.

Ứng dụng còn chỉ ra những đoạn văn dài trong bản nháp chưa có trích dẫn nào. Có thể coi đây là một "người hướng dẫn" luôn nhắc nguyên tắc cơ bản của viết học thuật: mỗi khẳng định phải đứng trên một nguồn kiểm được.

## 6.4. Dữ liệu và an toàn

Ghi chú, đánh dấu, đề tài và kho tài liệu riêng đều nằm trên máy người dùng và được mã hoá (mục 2.5). Kho tài liệu riêng có *phiên bản lược đồ*. Khi ứng dụng nâng cấp cấu trúc dữ liệu, bản cũ được chép lại trước khi chuyển đổi, nên dữ liệu của người dùng không bị mất. Mọi thứ nằm trong tệp sao lưu chung. Khi nhập tệp sao lưu, người dùng chọn "gộp" (không mất gì) hoặc "thay thế"; nếu thay thế, bản hiện có được cất trước.

## 6.5. Tiểu kết chương 6

Các công cụ nghiên cứu khép kín vòng làm việc của một người viết học thuật:
- đọc và đánh dấu trong thư viện, Tủ sách;
- ghi ý vào Sổ tay;
- gom tài liệu và đánh dấu tình trạng kiểm chứng;
- dựng luận điểm có bằng chứng;
- viết bản nháp có trích dẫn rồi xuất ra Word theo kiểu Chicago hoặc APA.

Điểm khác biệt so với các công cụ ghi chú thông thường là ở chỗ ứng dụng *kiểm* chất lượng lập luận — luận điểm nào thiếu nguồn, câu trích nào chưa đối chiếu — chứ không chỉ lưu trữ.
