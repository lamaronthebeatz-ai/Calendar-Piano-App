# Phần 10. Bảo trì và mở rộng nội dung

## 10.1. Thêm hoặc sửa một bài thư viện

1. Mở tệp nội dung đúng chủ đề trong src/features/theory/content/. Mỗi tệp là một mảng bài.
2. Mỗi bài có:
   - slug: mã bài, chữ thường không dấu, nối bằng gạch ngang, không trùng;
   - title: tên bài;
   - category: một trong 28 mục;
   - aliases: các tên gọi khác;
   - summary: một – hai câu tóm tắt;
   - body: thân bài, theo cú pháp ở Phần 5;
   - refs: danh sách tài liệu tham khảo (nhãn, đường dẫn).
   Các trường tuỳ chọn: also (bài liên quan), unlisted (bài ẩn khỏi danh sách nhưng vẫn mở được, dùng cho bài phụ của sách), person (bài về một người).
3. Kiến thức từ sách mới thì gộp vào bài cùng chủ đề, dưới mục "Theo sách gốc …". Không tạo loạt bài riêng cho từng cuốn.
4. Chạy npm run check:links để chắc mọi liên kết đúng. Liên kết ngược, chỉ mục và tìm kiếm tự cập nhật lúc dựng.

## 10.2. Thêm một cuốn sách vào Tủ sách

1. Khai báo sách trong src/features/curriculum/books.ts với các trường id, title, volume, subtitle, author, audience, hue (màu), glyph, preface và parts. Mỗi phần có các chương; mỗi chương là slug của một bài thư viện.
2. Nếu là công trình nghiên cứu (tiểu luận), đặt essay: true để trình đọc bỏ khung bài học.
3. Gán sách vào một chủ đề trong shelfTopics.ts. Sách chưa gán chủ đề tự vào kệ "Sách khác".
4. Bìa ảnh: thêm bản 960 px vào assets/covers/ và bản 480 px vào covers/thumb/ (cho Android và cho các chỗ hiện bìa nhỏ). Không có bìa ảnh thì trình đọc tự vẽ bìa chữ.
5. Thí dụ dài trong sách gốc: cắt từ bản quét bằng khối ::scan, không chép tay.

## 10.3. Thêm một nguồn biên mục

Các công trình quan trọng được khai báo trong src/features/sources/curated.ts. Mỗi nguồn có mã, loại, tác giả, tên, lần in, năm, nhà xuất bản, nơi xuất bản, ngôn ngữ, cách tiếp cận, tình trạng bản quyền và mẫu đường dẫn để khớp. **Chỉ điền những gì đã kiểm được, không điền theo trí nhớ.** Sau đó dùng mã trong bài bằng cú pháp trích dẫn `[^mã, tr. n]`.

## 10.4. Thêm nội dung cho Hành trình

- **Chương mới**: một tệp trong src/features/journey/chapters/, gồm các chặng (cảnh, lời thoại có nhãn, nhân vật, câu hỏi kèm bài căn cứ, thẻ chứng cứ, nhạc nền) và phiên toà (các lời khai, phán quyết, bài căn cứ, giải thích).
  - Mọi dữ kiện phải có bài thư viện; thiếu thì viết bài trước.
  - Thêm chương mới thì cập nhật tệp khoá id. Có kiểm thử đòi không id nào đã phát hành bị mất.
- **Tuyến điều tra**: một tệp trong content/, đăng ký trong arcs.ts. Một kiểm thử chung chạy cho mọi tuyến; thiếu chứng cứ cho một kết luận là kiểm thử báo đỏ.
- **Thử thách âm nhạc**: sinh tự động theo chương (engine/challenge.ts). Thêm chương ở thời kỳ mới thì thêm bộ sinh phù hợp.
- **Kho Lữ hành vô tận**: chạy npm run journey:pool sau khi tiểu sử thay đổi.

## 10.5. Thêm hoặc sửa luật phức điệu

Luật nằm trong src/features/counterpoint/rules.ts. Bộ kiểm độc lập nằm ở verify.ts, viết lại theo cách khác.

Mỗi luật phải:
- được đối chiếu với nguyên văn và số trang giáo trình;
- được xếp đúng loại: bắt buộc, khuyến nghị, hoặc cần xác minh;
- được ghi vào bảng luật ở docs/notes/counterpoint.md;
- có kiểm thử: trường hợp đúng, sai, biên, ngoại lệ;
- được sửa ở **cả hai** bộ kiểm.

Đổi luật mà hai bộ kiểm không còn đồng ý thì kiểm thử đối chiếu sẽ báo.

## 10.6. Grove, thuật ngữ, tác phẩm Wikidata

- **Grove**: phần tiếng Việt nằm ở scripts/grove/vi/*.json; npm run grove ghép thành các mảnh phát hành (tự chạy trước dev và build).
- **Thuật ngữ đa ngữ**: chạy scripts/terms/build.py. Mỗi cặp tên được soát bằng mắt; cặp nào lệch khái niệm thì loại.
- **Tác phẩm**: chạy scripts/works/build.py sau khi dựng, khi danh sách người thay đổi.
