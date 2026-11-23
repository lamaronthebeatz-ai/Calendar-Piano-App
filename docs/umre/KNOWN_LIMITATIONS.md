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

## Wave B (GĐ5–7)
- **GĐ2–4 chưa đủ**: sổ luật chỉ là dữ liệu + kiểm toán, không có ngôn ngữ luật hay bộ chạy luật chung; không có bộ máy ràng buộc / tìm kiếm chung. Lĩnh vực mới phải tự mang bộ giải và bộ kiểm.
- **Một lĩnh vực**: chỉ phức điệu nghiêm khắc (hai bè; ba – bốn bè). Chưa có canon, hình thức phần IV, hoà âm cổ điển qua UMRE.
- **Độc lập có giới hạn**: `verify.ts` dùng chung với mô-đun phức điệu kiểu dữ liệu và hàm dựng biến thể (`makeVersion`, `shiftLine` — phép dịch giọng chính xác); bộ kiểm UMRE dùng chung cách đổi bài (`toProblem`) với adapter bộ giải. `umre-native` chỉ phủ 9 luật và chỉ nguyên thể cho luật chiều dọc. Luật quãng nghịch (nốt lưu, nốt lướt, thêu…) chỉ có MỘT bộ kiểm độc lập (`verify`).
- **Luật mềm** chỉ do bộ kiểm của bộ giải chấm (không độc lập); không ảnh hưởng trạng thái.
- **`suspension`** không tách riêng: lỗi nốt lưu báo dưới `dis-strong` / `dis-weak` (outcome `subsumed`).
- **Vị trí ở biến thể**: `eventIds` chỉ điền cho nguyên thể; ở bản biến thể có dời thời gian (Ih) `location.at` là thời điểm trong bản đó.
- **PROVEN_UNSAT không kiểm lại được độc lập** (không có phương án); tin vào bộ giải trong miền nó khai báo.
- **Huỷ / hết giờ**: hai bộ giải phức điệu chạy đồng bộ — huỷ giữa chừng và hẹn giờ của bộ điều phối chỉ có tác dụng với bộ giải bất đồng bộ; chúng tự dừng ở `timeMs`. Chưa có lớp web worker.
- **Giải thích** là mẫu câu tiếng Việt cố định từ dữ liệu; "nhánh bị loại" chỉ là các `blockers` ở điểm xa nhất bộ giải tới, không phải toàn bộ cây tìm kiếm.
- **Mã nguồn chưa xác minh**: ✱ và nốt đen chuẩn bị (quy ước người dạy, chưa có văn bản); độ mạnh phách (quy ước bộ giải).
- Chưa có giao diện; chưa màn hình nào gọi `createEngine()`.

## Phạm vi
- Chưa màn hình nào dùng UMRE; các mô-đun cũ chạy như trước.
- Trạng thái từng giai đoạn ở `MASTER_SPECIFICATION.md`.
