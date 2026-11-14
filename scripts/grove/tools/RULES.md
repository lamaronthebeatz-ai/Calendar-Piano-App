# Luật viết tiếng Việt cho mục Grove (Từ điển âm nhạc Lamar)

Nguồn: Grove's Dictionary of Music and Musicians, bản 2 (1904–1910), 5 tập. Văn bản là chữ nhận dạng (OCR) từ bản quét, có lỗi ký tự.

## Định dạng đầu ra
Một file JSON duy nhất, dạng:
```json
{
 "<id>": {"title": "<tên tiếng Việt ngắn>", "kind": "term|person|work|institution", "vi": "<văn bản tiếng Việt>"},
 ...
}
```
- Phải có **đủ mọi id** trong file unit, viết đúng id (kể cả lỗi chính tả OCR trong id).
- `title`: thuật ngữ → tên Việt + tên gốc trong ngoặc nếu cần ("Quãng năm (fifth)"); người → "Họ, Tên" theo Grove nhưng sửa lỗi OCR hiển nhiên ("Galliard, John Ernest"); tác phẩm → tên gốc in nghiêng không cần, ghi tên + loại ("Don Giovanni (opera)").
- `kind`: sửa nếu "kind đoán" sai (người = person, tác phẩm = work, hội/nhà hát/trường/tạp chí = institution, còn lại term).
- `vi`: đoạn văn cách nhau bằng một dòng trống (`\n\n`). Tên tác phẩm, chữ nước ngoài in nghiêng bằng `*...*`. Dấu ngoặc kép trong chuỗi JSON phải escape `\"`.

## Nội dung
1. **Chỉ viết điều có trong đoạn nguyên văn được cấp.** Không thêm kiến thức ngoài, không đoán. Không bịa ngày, số opus, tên. Mọi con số (năm, ngày, opus, số trang) phải lấy từ nguyên văn. Số mà nguyên văn viết bằng chữ ("twenty-seven", "five") thì viết bằng chữ tiếng Việt ("hai mươi bảy", "năm"), vì bộ kiểm so chữ số với nguyên văn.
2. Bài bị trích ("[TRÍCH … bài còn tiếp]"): tóm phần đã có, kết bằng "(bài viết trình bày tiếp)". Không nêu số chữ của bài.
3. Độ dài: mục ngắn → dịch gần đủ ý; mục dài → 80–220 chữ tiếng Việt, giữ sự kiện chính (ngày sinh–mất, nơi, chức vụ, tác phẩm chính, định nghĩa).
4. Năm OCR có chữ lẫn số hiển nhiên ("1S67" = 1867, "l845" = 1845, "179S" = 1798) thì viết số đã sửa — bộ kiểm hiểu S/B = 8, l/I = 1, O = 0. Chỗ OCR hỏng không đọc được → bỏ qua chi tiết đó, hoặc ghi "(bản quét chỗ này đọc mờ)". Lỗi OCR hiển nhiên (bom → born, Wiirzburg → Würzburg) thì sửa ngầm.
5. Ý kiến của Grove (khen chê, "không đúng", "vô lý") → ghi là của Grove: "Theo Grove, …". Thông tin là của năm 1904–1910: viết "nay (thời Grove)" khi Grove nói "now", "hiện nay" — không tự thêm năm.
6. Mục là **mảnh rác OCR** (danh mục tác phẩm bị tách, chữ ký, tiêu đề phụ như "LIST OF WORKS", "FROM OP", "XIV", số trang, tên quảng cáo sách) → `kind` để nguyên, `title` = đầu mục nguyên văn, `vi` = "Đoạn tách lẻ của bản quét (…mô tả ngắn: danh mục tác phẩm / ví dụ nhạc / phần tiếp của bài trước…); xem nguyên văn."
7. Mục chỉ là tham chiếu ("See X") → "Xem mục *X*."
8. Văn phong: tiếng Việt chuẩn, trung tính, gọi người đọc là "bạn" nếu cần; **không bao giờ dùng "mày", "tao"**. Tên riêng giữ nguyên chữ gốc (Bach, Leipzig); tên nước, thành phố quen dùng tiếng Việt được (Ý, Đức, Pháp, Anh, Vienna, Paris, Rome, Florence).
9. Thuật ngữ: quãng, hợp âm, giọng, điệu thức, chủ âm, át âm, đối vị, phức điệu, chủ điệu, bè, ô nhịp, nốt tròn/trắng/đen/móc đơn/móc kép, dấu thăng/giáng/bình, khuông nhạc, khoá Sol/Fa/Đô, tổng phổ, thánh ca, bình ca, Thánh lễ, oratorio, opera, sonata, giao hưởng, tứ tấu.

## Kiểm trước khi xong
Chạy: `python3 <scratchpad>/grove/verify.py <file.json> <unit.txt>` — phải in "OK". Nếu báo số không có trong nguyên văn hoặc thiếu id thì sửa rồi chạy lại.
