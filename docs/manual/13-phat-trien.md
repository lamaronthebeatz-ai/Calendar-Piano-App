# Phần 13. Hướng phát triển tiềm năng

Phần này trình bày những hướng có thể triển khai tiếp, sắp theo nhóm. Mỗi hướng ghi: *làm gì*, *vì sao đáng làm*, *cách làm phù hợp với kiến trúc hiện có*, và *điều kiện* (công sức, rủi ro, việc cần chủ ứng dụng quyết hoặc cung cấp). Nguyên tắc chung khi mở rộng:
- giữ chế độ không máy chủ làm mặc định cho người tự học; mọi phần cần máy chủ đều là tuỳ chọn;
- giữ năm nguyên tắc nội dung ở mục 0.4.

## 13.1. Nhóm A — Học thuật và nội dung

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| A1. Bảng "mỗi trường phái hiểu thế nào" | Mở rộng từ 4 khái niệm hiện có (chức năng, điệu thức, hình thức sonata…) ra hàng chục khái niệm gây tranh cãi. Giúp người học thấy chỗ các hệ lý thuyết khác nhau | Viết tay, mỗi dòng một nguồn; dựa trên các bài sẵn có (Sposobin, Riemann qua Ewell và Bakulina, jazz, Fux, Taneyev) |
| A2. Gắn thuật ngữ trong bài | Cú pháp kiểu {{mã-thuật-ngữ}}: chữ có gạch chân chấm, chạm hiện định nghĩa, tên năm thứ tiếng, cách các trường phái hiểu | Không tự gắn bằng máy (dễ sai nghĩa). Kèm một bộ soát báo chỗ bài dùng tên biến thể thay cho tên chuẩn |
| A3. Đối chiếu TCVN 14301:2024 | Chuẩn hoá thuật ngữ theo tiêu chuẩn quốc gia | Cần chủ ứng dụng cung cấp văn bản đầy đủ và quyết nguyên tắc khi TCVN khác cách dùng của nhạc viện. Đề xuất: theo TCVN, ghi cách dùng của nhạc viện là biến thể |
| A4. Bổ sung tiểu sử | 108 nhạc sĩ thế kỷ XX và ngoài châu Âu | Theo đợt, có nguồn; sau đó chạy lại kho Lữ hành vô tận và dữ liệu tác phẩm |
| A5. Số trang cho các sách còn thiếu | Mazel, Asafyev, Neuhaus | Cần bản quét tốt hơn; tách trang rồi dò số mục theo chương |
| A6. Âm nhạc Việt Nam chuyên sâu | Các bài về lý thuyết điệu thức cổ truyền, ca trù, nhã nhạc, đờn ca tài tử, kèm tư liệu âm thanh thật | Cần hợp tác với nơi giữ tư liệu (Viện Âm nhạc, các nghệ nhân) về quyền dùng bản thu |
| A7. Bản tiếng Anh | Phục vụ người đọc quốc tế, đưa nghiên cứu Việt Nam ra ngoài | Tách chuỗi giao diện ra tệp ngôn ngữ; nội dung dịch theo đợt, ưu tiên phần âm nhạc Việt Nam và các sách độc quyền |

## 13.2. Nhóm B — Công cụ thực hành

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| B1. Giải và chấm hoà âm bốn bè | Bước nhảy vọt có giá trị nhất: hoà âm là môn nặng nhất ở nhạc viện. Người học viết bài hoà âm cho bè bass hoặc giai điệu cho sẵn, máy chấm theo luật của sách bốn tác giả | Dùng lại kiến trúc của bộ giải phức điệu: luật đối chiếu nguyên văn, ba loại luật, bộ kiểm độc lập, ba trạng thái. Bắt đầu từ hợp âm ba chính và kết, rồi mở rộng dần |
| B2. Hoàn thiện phức điệu | Chuyển giọng thật ở đoạn 2 thể ba đoạn; chấm bài tự viết phần hình thức; phức điệu tự do và fugue (đề, đáp, đối đề, phần phát triển) | Chuyển giọng: dời theo quãng đúng, giống biến thể Iv; fugue là bộ giải mới dựa trên canon. Cần thầy cô duyệt các luật "cần xác minh" |
| B3. Nghe kèm phân tích | Phát bản nhạc kèm tiếng piano mẫu; ô nhịp sáng theo tiếng đàn; dải hình thức chạy theo | Đã có trong lộ trình (mục C); dùng lại trình phát và Verovio |
| B4. Nâng độ đúng phân tích | Đặc biệt át phụ và chuyển giọng | Thêm bộ dữ liệu có đáp án lớn hơn (When in Rome, ABC Beethoven); có thể dùng mô hình học máy nhỏ chạy trong trình duyệt |
| B5. Nhận dạng bản nhạc từ ảnh, PDF | Người học chụp bài tập, máy chuyển thành bản nhạc | OMR trong trình duyệt chưa đủ tốt. Hướng khả thi: một công cụ ngoài (Audiveris) chạy tuỳ chọn, rồi soát tay |
| B6. Chấm xướng âm bằng micro | Người học hát, máy chấm cao độ và tiết tấu từng nốt | Dùng lại bộ nhận cao độ đã có trong trình soạn nhạc; cần thử kỹ trên iPhone thật |
| B7. Luyện tai nâng cao | Nghe tiến trình hợp âm bốn bè, nghe chép giai điệu, đọc tiết tấu, máy đếm nhịp | Sinh bài theo luật như Solfège; nối với thống kê mức thông thạo |

## 13.3. Nhóm C — Nghiên cứu

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| C1. Đồ thị toàn mạng ghi chú | Thấy toàn bộ sổ tay, lọc theo loại nút | Mở rộng đồ thị lân cận hiện có |
| C2. Liên kết ghi chú với tác phẩm, người | Ghi chú trỏ tới tác phẩm (mã Wikidata) và hồ sơ người | Dùng mã thống nhất w: đã có |
| C3. Trao đổi với Zotero | Nhập và xuất thư mục dạng BibTeX, CSL-JSON | Bản đồ trường dữ liệu nguồn ↔ CSL |
| C4. Xuất tiểu luận ngay trong app | Bàn làm việc xuất thẳng PDF theo quy chuẩn TL-LV của nhạc viện, kèm bìa, mục lục, chú thích | Paged.js đã dùng cho bản in sách; mang bộ dựng tiểu luận vào app |
| C5. Tìm kiếm nghiên cứu | Tìm theo nhiều chiều trong toàn bộ thư viện, nguồn, ghi chú, ví dụ: "mọi chỗ nhắc nốt lưu theo Taneyev có trang" | Mở rộng chỉ mục; khi dữ liệu vượt khoảng 20 MB thì chuyển sang SQLite chạy trong trình duyệt (đọc từng trang qua HTTP range, vẫn không cần máy chủ) |

## 13.4. Nhóm D — Lớp học và cộng đồng (cần máy chủ tuỳ chọn)

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| D1. Đồng bộ nhiều máy | Điện thoại, máy tính bảng, máy tính có cùng dữ liệu | Hướng local-first đúng nghĩa: cấu trúc dữ liệu tự hợp nhất (CRDT), mã hoá đầu – cuối; máy chủ chỉ chuyển dữ liệu đã mã hoá |
| D2. Lớp học | Giáo viên tạo lớp, giao đề (phức điệu, hoà âm, câu hỏi), học viên nộp bài, máy chấm sơ bộ, giáo viên nhận xét, xem tiến độ | Cần tài khoản và máy chủ nhỏ. Bộ chấm vẫn chạy ở máy học viên, máy chủ chỉ lưu bài nộp |
| D3. Đóng góp nội dung | Người đọc đề xuất sửa lỗi, bổ sung nguồn; người biên soạn duyệt | Hàng đợi đề xuất; mỗi đề xuất phải kèm nguồn |
| D4. Chia sẻ đề và lời giải | Ngân hàng đề phức điệu, hoà âm có lời giải đã kiểm | Mã hoá đề vào đường dẫn (không cần máy chủ) cho bản đầu tiên |
| D5. Số liệu dùng app ẩn danh, tự nguyện | Biết phần nào được dùng, câu hỏi nào khó, để cải thiện nội dung | Chỉ khi người dùng đồng ý; không định danh |

## 13.5. Nhóm E — Trò chơi Hành trình

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| E1. Chương VII: thế kỷ XX | Debussy, Stravinsky – Diaghilev, Schoenberg, Bartók, Shostakovich… | Cần bổ sung tiểu sử thế kỷ XX trước (A4); thử thách âm nhạc: thang toàn cung, quãng 4 chồng, đồng hồ lớp cao độ |
| E2. Thêm chương Việt Nam, tuyến điều tra có bản thu thật | Cải lương, tân nhạc, nhạc cách mạng với tư liệu âm thanh gốc | Cần quyền dùng bản thu (A6) |
| E3. Chế độ lớp học | Cả lớp cùng chơi một chương, thi đua theo nhóm, giáo viên xem kết quả | Phụ thuộc D2 |
| E4. Giáo viên tự tạo câu hỏi, lời khai | Câu hỏi bám đúng bài giảng của mình | Trình soạn câu hỏi có kiểm: mỗi câu phải dẫn về một bài thư viện |
| E5. Lữ hành vô tận cho Việt Nam | Sinh chuyến từ tiểu sử nhạc sĩ Việt Nam | Cần tiểu sử có mốc năm đủ dày |

## 13.6. Nhóm F — Kỹ thuật nền

| Hướng | Làm gì, vì sao | Cách làm, điều kiện |
|---|---|---|
| F1. Mã hoá lịch – học viên | Đưa dữ liệu riêng tư nhất vào kho mã hoá | Bọc cơ sở dữ liệu bằng lớp mã hoá bất đồng bộ; làm cẩn thận, có bản chụp trước khi chuyển để không mất dữ liệu |
| F2. Mã khu riêng tư sang PBKDF2 | Đồng bộ với mã màn chào | Chủ ứng dụng tạo dấu kiểm mới ở Cài đặt → Bảo mật |
| F3. Kiểu dữ liệu chặt hơn | Bật noUncheckedIndexedAccess dần theo thư mục (hiện còn khoảng 1.053 lỗi) | Theo đợt, mỗi đợt một thư mục |
| F4. Nội dung dạng Markdown, dựng tăng dần | Khi vượt khoảng 10 giây hoặc 4.000 bài | Mỗi bài một tệp Markdown có phần đầu khai báo; chỉ dựng lại tệp đổi; "Cập nhật lần cuối" lấy từ lịch sử git; trang "Thay đổi gần đây" |
| F5. Kiểm chất lượng bài mới tự động | Có nguồn, có tóm tắt, liên kết sống, thuật ngữ chuẩn | Bổ sung vào check:links |
| F6. Ngân sách precache | Đang gần trần 15 MB | Chuyển thêm phần ít dùng sang tải khi cần; nén ảnh; tách gói theo khu vực |
| F7. Trợ năng | Đọc được bằng trình đọc màn hình, điều khiển bằng bàn phím, độ tương phản | Rà soát theo WCAG cho từng trang; bản nhạc có mô tả chữ |
| F8. Kiểm thử trên thiết bị thật | iPhone, iPad, Android thật, micro thật | Một vòng thử tay theo danh mục trước mỗi đợt lớn |

## 13.7. Thời khoá biểu (khu riêng tư)

| Hướng | Làm gì |
|---|---|
| G1. Học phí và điểm danh | Ghi buổi đã dạy, nghỉ, học bù; tính học phí theo tháng |
| G2. Nhắc lịch | Thông báo trước buổi dạy (thông báo đẩy của PWA) |
| G3. Nối học viên với nội dung | Gắn bài học, sách, bài tập của Tủ sách vào hồ sơ từng học viên; theo dõi tiến độ |
| G4. Báo cáo cho phụ huynh | Xuất tóm tắt tiến độ theo tháng |

## 13.8. Thứ tự đề xuất

| Giai đoạn | Nội dung | Lý do |
|---|---|---|
| 1 — Củng cố (ngắn hạn) | F1, F2, F8, B2 (chuyển giọng, chấm hình thức), A1, C1, C2 | Ít rủi ro, dùng nền có sẵn, vá giới hạn rõ nhất |
| 2 — Giá trị học thuật lớn | B1 (hoà âm bốn bè), B3, B6, A2, C4, E1 (sau A4) | Phục vụ trực tiếp chương trình nhạc viện |
| 3 — Mở rộng người dùng | D1, D2, D4, E3, A7 | Biến ứng dụng cá nhân thành công cụ cho lớp học, trường học |
| 4 — Quy mô lớn | F4, F5, C5, D3, B4, B5 | Khi nội dung và người dùng đủ lớn |

Mỗi giai đoạn nên bắt đầu bằng một bản thử nhỏ, có kiểm thử. Những việc phụ thuộc người khác — văn bản TCVN, quyền dùng bản thu, ý kiến thầy cô về luật — cần được chuẩn bị song song.
