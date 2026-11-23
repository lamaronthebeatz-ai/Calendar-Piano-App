# Đặc tả bộ giải (GĐ3) — **chưa triển khai**

Hiện có một bộ giải riêng cho phức điệu (`src/features/counterpoint/`: `solve`, `msolve`, ba trạng thái `valid` / `unsat` / `unknown`). UMRE chưa có bộ giải.

## Hướng dự kiến
- Bộ giải đọc ràng buộc từ sổ luật (GĐ2), xuất kết quả dưới dạng tổng phổ UMRE.
- Giữ ba trạng thái và không bao giờ báo `unsat` khi chỉ hết giờ.
- Kết quả luôn qua bộ kiểm độc lập (GĐ4) trước khi hiện.

## Đã có làm nền
Bộ chuyển đổi `fromCounterpoint` nhận thẳng lời giải của `msolve`; test hồi quy xác nhận lời giải thật chuyển sang UMRE vẫn hợp lệ và khứ hồi không đổi.
