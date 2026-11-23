# Đặc tả hiệu năng

## Hiện trạng đo được (GĐ1)
- Bộ test `src/umre` (61 test, gồm một lần chạy bộ giải ba bè thật) chạy trong vài giây trên máy CI/container; phần lõi biểu diễn mỗi test < 10 ms.
- `src/umre` chưa được màn hình nào import nên **không làm tăng gói tải** của app (kiểm bằng `npm run budget`).

## Chưa có
Chưa có đo hiệu năng có hệ thống (tổng phổ lớn, bộ giải chung). Ghi chú thiết kế: thời gian dùng số hữu tỉ — đúng tuyệt đối nhưng chậm hơn số nguyên; nếu sau này chậm, chuyển nội bộ sang tick theo bội chung nhỏ nhất của mẫu số, giữ hữu tỉ ở API.
