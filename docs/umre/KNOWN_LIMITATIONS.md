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

## Sau rà soát (23/11)
- ~~Bài có biến thể: UNKNOWN~~ — đã gỡ: UMRE tự dựng biến thể (23/11).
- Tìm kiếm chung chưa tối ưu theo luật mềm (chưa có luật mềm trong ngôn ngữ luật); chậm hơn bộ riêng ở ba – bốn bè.
- Hoà âm bốn bè mới có 7 luật cứng, hợp âm ba thế gốc, nốt đối nốt, giọng trưởng; chưa có thể đảo, hợp âm bảy, nốt khuynh hướng, chuyển giọng.
- Chưa có lớp web worker: gọi bộ giải trên luồng chính sẽ đứng giao diện; huỷ / hết giờ của bộ điều phối không cắt được vòng lặp đồng bộ.
- Đáp án chuẩn mới có 5 thí dụ nốt lưu, do trợ lý chép từ scan, chưa có người duyệt; thí dụ 18–19, 24b, 25–29 bỏ vì không đọc chắc.
- `verify.ts` lỏng hơn câu chữ ở hai chỗ (nốt sớm theo tên nốt; nốt nghịch ngay sau nốt nghịch) — đã ghi, chưa sửa.
- Luật mềm vẫn chỉ do bộ kiểm của bộ giải chấm.

## Wave B (GĐ5–7)
- **Vòng tròn kiểm chứng (rà soát 23/11):** bộ giải phức điệu đã chạy `verify.ts` trước khi trả phương án, nên `verify` không phải xác nhận mới cho phương án của bộ giải; họ luật quãng nghịch không có bộ kiểm độc lập với bộ giải. Không có tập đáp án chuẩn từ thí dụ giáo trình.
- **GĐ2–4 chưa đủ**: sổ luật chỉ là dữ liệu + kiểm toán, không có ngôn ngữ luật hay bộ chạy luật chung; không có bộ máy ràng buộc / tìm kiếm chung. Lĩnh vực mới phải tự mang bộ giải và bộ kiểm.
- **Một lĩnh vực**: chỉ phức điệu nghiêm khắc (hai bè; ba – bốn bè). Chưa có canon, hình thức phần IV, hoà âm cổ điển qua UMRE.
- **Độc lập có giới hạn**: `verify.ts` dùng chung với mô-đun phức điệu kiểu dữ liệu và hàm dựng biến thể (`makeVersion`, `shiftLine` — phép dịch giọng chính xác); bộ kiểm UMRE dùng chung cách đổi bài (`toProblem`) với adapter bộ giải. `umre-native` chỉ phủ 9 luật và chỉ nguyên thể cho luật chiều dọc. Luật quãng nghịch (nốt lưu, nốt lướt, thêu…) chỉ có MỘT bộ kiểm độc lập (`verify`).
- **Luật mềm** chỉ do bộ kiểm của bộ giải chấm (không độc lập); không ảnh hưởng trạng thái.
- **`suspension`** không tách riêng: lỗi nốt lưu báo dưới `dis-strong` / `dis-weak` (outcome `subsumed`).
- **Vị trí ở biến thể**: `eventIds` chỉ điền cho nguyên thể; ở bản biến thể có dời thời gian (Ih) `location.at` là thời điểm trong bản đó.
- **PROVEN_UNSAT không kiểm lại được độc lập** (không có phương án); tin vào bộ giải trong miền nó khai báo.
- **Huỷ / hết giờ**: trong luồng chính, bộ giải đồng bộ chỉ tự dừng ở `timeMs`; huỷ thật (terminate) chỉ khi chạy qua `runtime/host.ts`. Trang phức điệu chưa dùng host này.
- **Giải thích** là mẫu câu tiếng Việt cố định từ dữ liệu; "nhánh bị loại" chỉ là các `blockers` ở điểm xa nhất bộ giải tới, không phải toàn bộ cây tìm kiếm.
- **Mã nguồn chưa xác minh**: ✱ và nốt đen chuẩn bị (quy ước người dạy, chưa có văn bản); độ mạnh phách (quy ước bộ giải).
- Chưa có giao diện; chưa màn hình nào gọi `createEngine()` hay `api.ts`.

## Phạm vi
- Chưa màn hình nào dùng UMRE; các mô-đun cũ chạy như trước.
- Trạng thái từng giai đoạn ở `MASTER_SPECIFICATION.md`.

## Wave C (23/11)
- **Hoà âm:** chỉ hợp âm ba thế gốc trong bài bốn bè; hợp âm chủ cuối thiếu quãng 5 (tr. 24) chưa cài → "vô nghiệm" chỉ trong miền nhân đôi âm gốc. "Phách mạnh" = phách đầu ô (4/4: phách 3 coi là nhẹ).
- **Phân tích điệu tính** (`harmony.tonal`): Schoenberg op. 19 số 2 vẫn ra COMPLETED với một "giọng chính" — độ điệu tính 86% vượt ngưỡng 80%. Nhạc phi điệu tính nên dùng lăng kính xx của /analyze.
- **Kết cấu:** giai điệu + đệm không tách được khỏi phức điệu tự do bằng số đo hiện có → AMBIGUOUS có hai cách đọc. Phức điệu chỉ khẳng định khi thấy mô phỏng (mẫu 7 nốt có bước nhảy).
- **Giai điệu:** motif = lặp đúng hoặc dịch giọng; chưa nhận đảo / nghịch hành / giãn. Câu chỉ theo dấu lặng và nốt dài.
- **Tiết tấu:** chỉ số chỉ nhịp đầu; đa tiết tấu chỉ 2 chồng 3 trong một phách.
- **Phong cách:** không có mô hình; không quy kết.
- **Worker:** test trên `node:worker_threads`; chưa chạy trong trình duyệt thật.
