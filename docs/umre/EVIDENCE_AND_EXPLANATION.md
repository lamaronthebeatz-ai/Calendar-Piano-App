# Bằng chứng và giải thích (GĐ5) — **chưa triển khai**

## Đã có trong GĐ1 làm nền
- `HarmonicLabel.provenance.kind` và `FormNode.provenance.kind`: `source` (ghi trong nguồn), `analysis` (phân tích), `user` (người dùng; hình thức thêm `exercise`); kèm `ref` (trích nguồn). Chưa có loại riêng cho kết luận của máy và chưa trỏ tới luật — để GĐ5.
- `HarmonicLabel.alternatives`: giữ các cách đọc khác thay vì chọn một.
- `KeyArea.basis`: giọng do nguồn ghi, do phân tích, hay do đề bài.

## Dự kiến
Mỗi kết luận của máy (nhãn, vi phạm, lời giải) trỏ tới: các sự kiện liên quan (id), luật đã dùng (id + nguồn), và mức tin cậy. Giải thích sinh từ chuỗi đó, không viết tay.
