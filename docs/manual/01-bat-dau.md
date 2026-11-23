# Phần 1. Bắt đầu sử dụng

## 1.1. Mở ứng dụng

1. Mở địa chỉ ở mục 0.1 bằng trình duyệt: Safari, Chrome, Edge hoặc Firefox, trên điện thoại, máy tính bảng hay máy tính.
2. Lần đầu mở, màn chào hiện logo và hỏi **mã màn chào**. Nhập đúng thì ứng dụng mở và đồng thời mở *kho mã hoá* (mục 9.2). Mã chỉ được hỏi lại khi mở phiên mới.
3. Ứng dụng vào thẳng **Trang chủ** (#/home).

Lần đầu dùng, một **tour hướng dẫn** ngắn chỉ các nút chính. Có thể bỏ qua tour; ứng dụng nhớ là đã xem.

## 1.2. Cài lên màn hình chính, dùng khi không có mạng

Ứng dụng là ứng dụng web tiến bộ (PWA), nên cài được như một ứng dụng riêng:

| Thiết bị | Cách cài |
|---|---|
| iPhone, iPad (Safari) | Nút Chia sẻ → "Thêm vào Màn hình chính" |
| Android (Chrome) | Menu ⋮ → "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính" |
| Máy tính (Chrome, Edge) | Biểu tượng cài đặt ở cuối thanh địa chỉ |

Sau lần mở đầu tiên, phần lõi của ứng dụng được lưu sẵn trên máy, khoảng 13,9 MB, dưới trần 15 MB. Những phần nặng chỉ tải khi mở lần đầu rồi được giữ lại: ảnh lớn, mảnh từ điển Grove, ảnh trang chủ, bản thu của trò chơi. Trong trình đọc sách có nút **"Lưu để đọc offline"** để tải trọn một cuốn.

Khi có bản mới, ứng dụng tự cập nhật ở lần mở sau.

## 1.3. Điều hướng

### 1.3.1. Trên điện thoại

Thanh dưới cùng có các mục: **Trang chủ · Lịch · Âm nhạc học · (+) · Lý thuyết · Tủ sách · Cài đặt**. Nút **+** ở giữa mở một bảng trượt gồm các công cụ: Giải phức điệu, Phân tích, Soạn nhạc, Solfège, Nghe hợp âm, Bảng tính, Sổ tay, Bàn làm việc, Hành trình…

Mục **Học viên** không nằm trên thanh dưới. Nó được mở từ nút "Học viên" trên thanh của Thời khoá biểu.

### 1.3.2. Trên máy tính

Nút logo ở góc trên bên trái mở **ngăn kéo** liệt kê đủ các trang. Ở tiêu đề trang chủ Lý thuyết có các nút nhanh: tìm kiếm, Solfège (𝄞), Nghe hợp âm (micro), Soạn nhạc (bút), Bảng tính (♫).

### 1.3.3. Tìm kiếm chung ⌘K

Ở mọi trang, **⌘K** (Mac) hoặc **Ctrl K** (Windows) mở bảng tìm kiếm chung. Bảng tìm trong bài thư viện, sách, thuật ngữ và ghi chú sổ tay. Bảng cũng chạy được lệnh, ví dụ gõ "Ghi nhanh: …" để tạo ngay một ghi chú. Các mục vừa mở được nhớ để mở lại nhanh.

### 1.3.4. Nút Quay lại

Ứng dụng dùng địa chỉ dạng `#/…` (hash router), nên nút Back của trình duyệt và cử chỉ vuốt lùi đều hoạt động. Mỗi trang, mỗi bài, mỗi cuốn sách có địa chỉ riêng, chép gửi cho người khác được (Phần 2). Trong trò chơi Hành trình, nút ← lùi đúng lịch sử: từ cảnh về bản đồ, rồi rời trò chơi.

## 1.4. Cài đặt

Trang Cài đặt (#/settings) có các mục:

| Mục | Dùng để |
|---|---|
| Hồ sơ | Thông tin người dạy |
| Lịch dạy | Tuỳ chọn thời khoá biểu, như thời lượng mặc định của một buổi |
| Tiền tệ | Đơn vị tiền cho học phí |
| Dữ liệu & sao lưu | Xuất, nhập tệp sao lưu (mục 1.5) |
| Nhập dữ liệu | Hộp thoại khi nhập tệp sao lưu: Gộp vào dữ liệu hiện có hoặc Ghi đè toàn bộ |
| Bảo mật | Mã khoá, kho mã hoá (Phần 9) |
| Nhật ký lỗi | Xem các lỗi đã xảy ra trên máy này, để báo lỗi |
| Hướng dẫn sử dụng | Mở lại tour hướng dẫn |
| Ủng hộ | Trang ủng hộ tác giả |

Từ Cài đặt còn vào được hai trang **Giới thiệu** (#/settings/about) và **Trung tâm** (#/settings/center).

## 1.5. Sao lưu và khôi phục

Mọi dữ liệu người dùng tự tạo chỉ nằm trên máy đang dùng (Phần 4), vì vậy **sao lưu định kỳ là việc của người dùng**.

- **Xuất**: Cài đặt → Dữ liệu & sao lưu → Xuất. Tệp sao lưu (phiên bản 3) chứa:
  - học viên và thời khoá biểu;
  - ghi chú và đánh dấu khi đọc;
  - đề tài nghiên cứu;
  - sổ tay;
  - kho tài liệu – luận điểm;
  - tiến trình trò chơi.
- **Nhập**: chọn tệp rồi chọn **Gộp** (hợp hai bên, không mất gì) hoặc **Thay thế**. Với Thay thế, bản hiện có được cất lại trước khi ghi đè.
- Tệp sao lưu phiên bản 2 cũ vẫn nhập được.

Máy chưa có học viên nào sẽ tự nạp một bản sao lưu mẫu kèm theo ứng dụng, để thời khoá biểu không trống.
