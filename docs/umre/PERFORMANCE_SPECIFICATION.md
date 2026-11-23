# Đặc tả hiệu năng

## Số đo thật (container phiên làm việc, Node, 23/11/2026)
- Toàn bộ test `src/umre` (94 test): vài giây, phần lớn là các lần gọi bộ giải thật.
- Một lần chạy điều phối hai bè, 6 ô, 2 lời giải: ~15 ms gồm tìm + kiểm độc lập + giải thích. Ba bè 4 ô: ~14 ms. Vô nghiệm đã chứng minh (✱ ở phách đầu): ~1 ms.
- Kiểm một lời giải hai bè 6 ô (ba bộ kiểm): dưới 1 ms mỗi lần (300 đột biến trong khoảng 0,3 s).
- `src/umre` chưa được màn hình nào import nên không làm tăng gói tải (`npm run budget`).

## Chưa có
Đo có hệ thống trên bài dài (12 ô trở lên có biến thể), đo bộ nhớ, giới hạn kích thước truy vết. Bộ giải phức điệu chạy đồng bộ: gọi trên luồng chính sẽ chặn giao diện đến hết `timeMs` — trang phức điệu dùng web worker, UMRE chưa có lớp worker.
