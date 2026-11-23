# Đặc tả sổ luật (GĐ2) — **chưa triển khai**

Tài liệu này là thiết kế dự kiến, chưa có code. Không có luật nào trong UMRE hiện nay.

## Yêu cầu dự kiến
- Mỗi luật có: id ổn định, phát biểu, **nguồn** (sách, trang), phạm vi (hệ lý thuyết, trường phái, số bè, loại bài tập), mức (bắt buộc / khuyến nghị / cần xác minh), phiên bản.
- Luật đọc biểu diễn GĐ1 qua truy vấn (`soundingNotes`, `between`, `layoutBars`…), không đọc mô hình riêng của từng màn hình.
- Phán đoán phụ thuộc trường phái mà GĐ1 cố ý bỏ ra — tính thuận/nghịch của quãng, độ mạnh phách, tên chức năng — đặt ở đây, mỗi cái có nguồn.
- Bảng luật phức điệu đã đối chiếu giáo trình (`docs/notes/counterpoint.md`) là nguồn đầu vào đầu tiên; chuyển sang phải giữ nguyên mức và trang trích.

## Tiêu chí bắt đầu
GĐ1 đã nghiệm thu (xem `IMPLEMENTATION_LOG.md`).
