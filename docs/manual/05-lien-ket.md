# Phần 5. Hệ thống liên kết

Liên kết là "xương sống" của ứng dụng. Mọi khu vực dùng chung một bộ quy ước để trỏ tới nhau, và một bước kiểm tự động bảo đảm không có liên kết gãy.

## 5.1. Liên kết giữa các bài

- **Cú pháp**: trong thân bài, tên hoặc mã bài đặt trong *hai cặp ngoặc vuông*. Có thể thêm dấu gạch đứng và chữ muốn hiện ra. Ví dụ, mã bài "doi-vi-don-gian-hai-be" kèm chữ hiện "đối vị đơn giản".
- **Tên gọi khác (aliases)**: mỗi bài có danh sách tên gọi khác, nên liên kết viết bằng bất kỳ tên nào cũng tới đúng bài.
- **Phân giải tên trùng**: hiện có 297 tên gọi trùng giữa nhiều bài (ví dụ "FUGA" vừa là hãng phân phối nhạc vừa là cách viết của "fuga"). Thứ tự ưu tiên:
  1. mã bài;
  2. bài có tiêu đề đúng bằng tên đó;
  3. bài có mã đánh vần đúng tên đó;
  4. bài được liệt kê công khai trước bài ẩn;
  5. các quy tắc phụ.

  Toàn bộ nằm trong tệp keyIndex.ts.
- **Thẻ xem nhanh**: bấm vào liên kết thì hiện thẻ gồm tên, tóm tắt và hình của bài đích, đọc tiếp được ngay.
- **Liên kết ngược**: được tính lúc dựng nội dung. Mỗi bài biết những bài nào trỏ tới nó và hiện danh sách ấy ở cuối bài.

## 5.2. Trích dẫn nguồn

- **Cú pháp**: `[^mã-nguồn, tr. 45]` trong thân bài hiển thị thành "(Sposobin 1984, tr. 45)" và dẫn tới trang của nguồn.
- **Mã nguồn**: 30 công trình biên mục tay có mã riêng, ví dụ sposobin-1984, pham-tu-huong-1991, nguyen-thi-nhung-2005. Nguồn Wikipedia có mã dạng wp-‹tên› (ngôn ngữ khác thì wp-de-…). Các nguồn khác có mã sinh từ đường dẫn.
- Tài liệu tham khảo cuối mỗi bài cũng được quy về các mã này, nên trang Thư mục học biết chính xác nguồn nào được dùng ở những bài nào.
- Kiểm định kỳ: một lần quét gần đây đã kiểm 4.073 đường dẫn ngoài; 66 đường dẫn hỏng thật, 37 trong số đó có bản lưu Wayback để dẫn thay.

## 5.3. Mã thống nhất cho mọi đối tượng

Sổ tay, Đồ thị và Bàn làm việc dùng chung các *mã thống nhất* dạng "tiền tố:mã".

| Tiền tố | Đối tượng | Ví dụ trang |
|---|---|---|
| a: | Bài thư viện (người, thời kỳ, thể loại, hình thức, khái niệm, nhạc cụ, phân tích…) | #/theory/‹slug› |
| w: | Tác phẩm (mã Wikidata Q…) | #/graph?id=w:Q… |
| s: | Nguồn trong thư mục học | #/sources/‹mã› |
| ms: | Tài liệu trong "Nguồn của tôi" | #/sources/cua-toi?ms=… |
| p: | Đề tài nghiên cứu | #/research/‹mã› |
| n: | Ghi chú sổ tay | #/brain/‹mã› |
| c:, e:, m: | Luận điểm, bằng chứng, phương pháp phân tích | Trong đề tài, đồ thị |

Liên kết trong sổ tay dùng cùng cú pháp hai cặp ngoặc vuông, kèm tiền tố.

## 5.4. Quan hệ có nhãn nguồn gốc

Trong Đồ thị, mỗi quan hệ (cạnh) được lưu một lần và đọc được từ cả hai đầu, ví dụ "học trò của" và "thầy của". Mỗi cạnh mang **một trong bốn nhãn nguồn gốc**:

| Nhãn | Nghĩa |
|---|---|
| thư viện | Người biên soạn ghi, có nguồn ở bài viết |
| Wikidata | Thu tự động lúc dựng, chưa đối chiếu từng mục |
| máy suy ra | Ví dụ: nhóm thể loại đọc từ tên tác phẩm, phương pháp phân tích |
| nghiên cứu | Người dùng tự ghi, chỉ là nhận định cho tới khi kiểm chứng |

Các nhãn không bao giờ bị trộn. Thêm một loại quan hệ mới chỉ cần thêm một dòng vào bảng quan hệ (relations.ts).

## 5.5. Các khối nội dung đặc biệt trong bài

| Khối | Tác dụng |
|---|---|
| ::staff, ::grand, ::rhythm | Thí dụ ký âm khuông đơn, hệ piano, tiết tấu; khắc sẵn bằng LilyPond, bấm để nghe |
| ::scan | Thí dụ cắt từ bản quét giáo trình, ghi số thí dụ và trang |
| ::ex, ::sheet | Thí dụ và bản nhạc của bộ sách thiếu nhi |
| ::solf | Bài xướng âm: nghe, lấy âm chủ, phím đàn |
| ::licks | Khối lick jazz |
| ::keyboard, ::range | Bàn phím minh hoạ, âm vực nhạc cụ |
| ::circle-of-fifths, ::pc-clock | Vòng quãng 5, đồng hồ lớp cao độ (nhạc thế kỷ XX) |
| ::form, ::bars, ::timeline | Sơ đồ khối hình thức, sơ đồ ô nhịp, dòng thời gian |
| ::img, ::wiki | Hình minh hoạ, ảnh và tóm tắt từ Wikipedia |
| ::youtube, ::ytsearch | Video bản thu minh hoạ, đường tìm video |
| ::verify | Đánh dấu chỗ chưa đối chiếu được nguyên văn |

## 5.6. Liên kết từ công cụ và trò chơi về thư viện

Ngoài bài viết, nhiều nơi khác cũng dẫn về thư viện:
- tên luật trong Giải phức điệu;
- "hướng đi" trong Nghe hợp âm (mỗi hướng có mã bài nguồn, và có kiểm thử đòi mọi mã phải tồn tại);
- câu hỏi, thẻ chứng cứ và lời khai trong Hành trình;
- nhãn trong Phân tích tác phẩm;
- chương sách trong Tủ sách (mỗi chương là một bài).

## 5.7. Kiểm liên kết tự động

Lệnh `npm run check:links` chạy trước mỗi lần phát hành. Lệnh kiểm:
- mọi liên kết giữa các bài;
- mã bài trùng;
- các địa điểm và chặng trên bản đồ.

Chỉ cần một liên kết gãy là bản đó không được phát hành.
