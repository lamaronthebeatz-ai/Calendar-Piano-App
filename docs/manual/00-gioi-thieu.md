# Phần 0. Giới thiệu

## 0.1. Ứng dụng là gì

*Trung tâm lý thuyết âm nhạc học by Lamar* là một ứng dụng web cá nhân của Lamar, người dạy piano và học âm nhạc học. Ứng dụng có hai khu vực:

- **Khu riêng tư**: thời khoá biểu dạy đàn và hồ sơ học viên. Khu này được khoá bằng mã riêng.
- **Khu công khai**: một trung tâm tri thức âm nhạc học bằng tiếng Việt, gồm:
  - thư viện Lý thuyết hơn 1.500 bài;
  - khu Âm nhạc học, Mạng tri thức, Từ điển, Thư mục học;
  - Tủ sách 31 cuốn;
  - các công cụ thực hành: giải phức điệu, phân tích tác phẩm, soạn nhạc, Solfège, nghe hợp âm, bảng tính;
  - các công cụ nghiên cứu: sổ tay, bàn làm việc;
  - trò chơi nhập vai Hành trình âm nhạc.

Địa chỉ: **https://lamaronthebeatz-ai.github.io/Calendar-Piano-App/**

## 0.2. Tài liệu này dành cho ai, đọc thế nào

Tài liệu là sổ tay vận hành của ứng dụng tại thời điểm tháng 11 năm 2026, phục vụ ba nhóm người đọc.

| Người đọc | Nên đọc |
|---|---|
| Người dùng (học, dạy) | Phần 1 (bắt đầu), Phần 8 (hướng dẫn từng khu vực) |
| Chủ ứng dụng, người biên soạn nội dung | Thêm Phần 2 (route), Phần 5 (liên kết), Phần 10 (bảo trì nội dung) |
| Người phát triển tiếp | Toàn bộ, nhất là Phần 3 – 7 (kiến trúc, dữ liệu, build, kiểm thử), Phần 11 (quy tắc kỹ thuật) và Phần 13 (hướng phát triển) |

Tài liệu mô tả *những gì đang chạy*. Những gì chưa có được ghi rõ ở Phần 12 (giới hạn) và Phần 13 (hướng phát triển). Số liệu trong tài liệu đo từ dữ liệu thật của ứng dụng; khi ứng dụng lớn thêm, số liệu sẽ khác.

## 0.3. Số liệu nền

| Hạng mục | Số liệu |
|---|---|
| Bài thư viện | 1.538 bài, 28 mục, khoảng 1,28 triệu chữ |
| Liên kết nội bộ giữa các bài | 15.513, không liên kết nào gãy |
| Nguồn tham khảo | 4.337 nguồn có mã, 5.506 lượt tham khảo; 30 công trình biên mục tay |
| Tủ sách | 31 cuốn, 9 chủ đề, 868 bài |
| Từ điển | 6.430 mục Grove 1904 – 1910 (đều có tiếng Việt); 258 thuật ngữ đa ngữ |
| Mạng tri thức | 398 người, 785 tác phẩm tiêu biểu, 4.899 tác phẩm Wikidata, 153 địa điểm |
| Hành trình | 2 hành trình, 12 chương, 109 chặng, 12 tuyến điều tra |
| Kiểm thử | 255 kiểm thử đơn vị; khoảng 320 kiểm thử giao diện (Chromium + WebKit) |
| Trang (route) | 25 |

## 0.4. Nguyên tắc nền

Năm nguyên tắc chi phối mọi phần của ứng dụng. Mọi thay đổi về sau cũng phải giữ đúng năm nguyên tắc này.

1. **Có nguồn**: mọi sự kiện và trích dẫn trong nội dung phải có nguồn. Chỗ nào chưa đối chiếu được thì ghi rõ ngay trong bài.
2. **Tôn trọng bản quyền**: sách còn bản quyền chỉ được tóm lược và trích ngắn có ghi trang. Tư liệu thuộc phạm vi công cộng phải ghi giấy phép.
3. **Tách bạch hư cấu**: lời dựng lại, nhân vật hư cấu và tình tiết hư cấu trong trò chơi đều có nhãn.
4. **Luật là luật của giáo trình**: công cụ chấm bài chỉ coi là bắt buộc những gì giáo trình nói là bắt buộc.
5. **Nói rõ khi không chắc**: không báo "vô nghiệm" khi chỉ là hết giờ; không trình bày phân tích của máy như đáp án.
