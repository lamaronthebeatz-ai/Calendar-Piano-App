# Phần 9. Bảo mật, quyền riêng tư và tương thích

## 9.1. Hai lớp mã

| Lớp | Bảo vệ | Cách kiểm |
|---|---|---|
| Mã màn chào | Mở ứng dụng; mở kho mã hoá | Dấu kiểm PBKDF2-SHA-256 (600.000 vòng). Mã thật không lưu ở đâu |
| Mã khu riêng tư | Thời khoá biểu, Học viên | Bản băm SHA-256 (cũ; dự kiến chuyển sang PBKDF2) |

Mã thật không bao giờ được ghi vào mã nguồn, vào commit hay vào tài liệu, vì kho mã nguồn là công khai.

## 9.2. Kho mã hoá

Khi nhập đúng mã màn chào, ứng dụng suy ra khoá AES-GCM 256 bit (mục 4.4) và giữ khoá trong phiên. Ghi chú đọc, đề tài, sổ tay, kho tài liệu – luận điểm và thân bản nhạc phân tích được mã hoá trước khi lưu. Khi chưa mở khoá, những phần này bị khoá đọc và khoá ghi, nên không có gì bị ghi đè.

## 9.3. Giới hạn thật của bảo mật

- Mã nguồn và nội dung chung là công khai. Ai cũng tải được mọi thứ mà trình duyệt nhận về.
- Mã sáu chữ số chỉ có một triệu khả năng. PBKDF2 làm mỗi lần thử chậm lại, nhưng máy chuyên dụng vẫn có thể dò ra.
- Vì vậy lớp bảo vệ này phù hợp để chống người dùng chung máy, không phải chống một cuộc tấn công có chủ đích.
- Dữ liệu lịch – học viên trong IndexedDB chưa được mã hoá.

## 9.4. Quyền riêng tư

- Không có tài khoản, không có máy chủ, không thu thập số liệu dùng app.
- Micro chỉ được dùng khi người dùng bật Nghe hợp âm, Thu trong trình soạn nhạc, hoặc Xướng âm. Âm thanh được xử lý ngay trên máy, không gửi đi.
- Ảnh và dữ liệu Wikipedia, Commons, YouTube được tải từ các dịch vụ đó khi người dùng mở nội dung có nhúng.

## 9.5. Giấy phép

Ứng dụng giữ toàn quyền tác giả. Tệp LICENSE ghi bằng tiếng Việt và tiếng Anh, có ngoại lệ cho phần thuộc phạm vi công cộng và phần mã nguồn mở. Mỗi tệp JavaScript phát hành đều mang dòng bản quyền. Tư liệu bên thứ ba ghi rõ nguồn và giấy phép ngay tại chỗ dùng:
- bản quét Grove, Fux, Albrechtsberger thuộc phạm vi công cộng;
- tranh và bản thu thuộc phạm vi công cộng hoặc giấy phép CC trên Commons;
- mẫu âm thanh VSCO 2 CE theo giấy phép CC0;
- Verovio theo giấy phép LGPL-3.

## 9.6. Tương thích và hiệu năng

- **iPhone, Safari**: mọi hiệu ứng chỉ để trang trí; nội dung hiện ra cả khi hiệu ứng không chạy. Chữ vàng gradient không dùng text-shadow (iOS vẽ vệt tối).
- **Android**: tắt hiệu ứng nghiêng theo con quay, tắt làm mờ kính ở thanh tiêu đề, dùng bìa sách cỡ nhỏ (480 px). Những điều chỉnh này rút ra từ việc máy tính bảng Android bị giật.
- **Chuyển động**: chỉ dùng transform và opacity; không có hiệu ứng lặp vô hạn bằng thuộc tính tốn tài nguyên. Người dùng bật "giảm chuyển động" trong hệ điều hành thì hiệu ứng tắt.
- **Giao diện**: chỉ có giao diện tối, màu nhấn duy nhất là vàng; phông Libre Bodoni + Manrope (đủ dấu tiếng Việt); ký hiệu ♭ ♯ dùng Noto Music.
