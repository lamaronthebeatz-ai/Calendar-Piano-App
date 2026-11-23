# Giới hạn đã biết (cập nhật theo code thật)

## Biểu diễn (GĐ1)
- **Không có tính thuận/nghịch, độ mạnh phách, nhãn chức năng tự động** — cố ý: phụ thuộc trường phái, để sổ luật (GĐ2). Chưa có sổ luật nên hiện chưa ai trả lời được các câu đó trong UMRE.
- **Quãng đồng âm giảm không dùng**: `parseInterval('d1')` báo lỗi; viết `-A1`. Là quy ước của UMRE, không phải khẳng định lý thuyết.
- Dấu hoá tối đa ±3; quãng tám −1…9.
- Hợp âm: 11 chất lượng ba và bảy. Chưa có hợp âm chín, sus, add6, hợp âm Napoli/tăng sáu như loại riêng (biểu diễn được bằng nốt, chưa đặt tên được). `chordsFromSpellings` trả mọi ứng viên, không chọn.
- `relative()` chỉ cho trưởng – thứ.
- Liên ba và các nhóm liên khác chỉ là trường độ hữu tỉ; cách **ghi** (ngoặc, số 3) chỉ còn trong `ext.compose`.
- Dấu diễn tấu, lời ca, sắc thái, luyến, dấu nhắc lại, segno/coda: **chưa mô hình hoá**, chỉ đi qua nguyên vẹn trong `ext.compose`. Nốt hoa mỹ (grace) chưa có (trình soạn nhạc cũng chưa có).
- Hình thức (`FormNode`) và nhãn hoà âm có kiểu và kiểm hợp lệ, nhưng chưa có gì sinh ra chúng (không bộ chuyển đổi nào điền).
- Kiểm hợp lệ không kiểm ô nhịp có đủ phách hay không (bè được phép có khoảng trống).

## Bộ chuyển đổi
- **MIDI**: `fromMidiNotes` nhận danh sách nốt, **chưa đọc tệp .mid** (chưa có bộ đọc SMF). Mất cách viết (spelling) — chọn lại theo chính sách thăng/giáng/hoá biểu; không tự tách bè (nốt chồng nhau trong một track → lỗi). Tệp .mid xuất qua bộ ghi của trình soạn nhạc.
- **MusicXML**: qua bộ đọc/ghi của trình soạn nhạc, nên chỉ được những gì trình soạn nhạc hiểu (giới hạn của nó ở `docs/notes/compose.md`).
- **Trình soạn nhạc**: thời gian phải là số tick nguyên ở TPQ 240 (không làm tròn — báo lỗi); chỉ một tempo; khoá `percussion` ra thành khoá Sol; đổi nhịp/khoá giữa ô nhịp sẽ dời về đầu ô; dịch giọng nhạc cụ chỉ có cho các mức nửa cung trong bảng `TRANSPOSE`.
- **Phức điệu**: chỉ nhịp có mẫu 2 hoặc 4; dấu lặng bị bỏ khi ra (mô hình phức điệu không có dấu lặng); khoá nhạc đoán theo cao độ trung bình (Sol hay Fa).
- **Bảng tính hoà âm**: chỉ đổi tên nốt `{l, a}` ⇄ `Spelling`.

## Phạm vi
- Chưa màn hình nào dùng UMRE; các mô-đun cũ chạy như trước.
- GĐ2 – 12 chưa triển khai (xem `MASTER_SPECIFICATION.md`).
