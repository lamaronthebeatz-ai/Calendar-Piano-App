# Đặc tả kiểm tra hợp lệ

## GĐ1 — kiểm tra cấu trúc (đã có: `src/umre/repr/validate.ts`)
`validateScore(s): Issue[]`, mỗi `Issue = {code, severity, path, message, ids?}`. Chỉ kiểm **cấu trúc và ký hiệu**, không kiểm luật âm nhạc.

| Mã | Mức | Ý nghĩa |
|---|---|---|
| `schema`, `version` | lỗi | sai tên lược đồ / phiên bản |
| `id-missing`, `id-duplicate`, `ref` | lỗi | thiếu id, trùng id, tham chiếu tới phần/khuông không có |
| `clef-start`, `meter-start`, `keysig-start` | lỗi | thiếu giá trị ở vị trí 0 |
| `order` | lỗi | các thay đổi không theo thứ tự thời gian |
| `meter`, `keysig`, `mode` | lỗi | số chỉ nhịp / hoá biểu / điệu thức sai |
| `pickup`, `meter-barline`, `layout` | lỗi | ô lấy đà sai, đổi nhịp không rơi vào vạch nhịp |
| `time`, `onset`, `duration` | lỗi | số hữu tỉ hỏng, vị trí âm, trường độ ≤ 0 |
| `pitch` | lỗi | cao độ ngoài miền |
| `overlap` | lỗi | sự kiện trong một bè chồng nhau (trừ nốt cùng hợp âm) |
| `tie` | lỗi | nốt nối không khớp cao độ hoặc không liền nhau |
| `span` | lỗi | nhãn/nút có `end ≤ start` |
| `chord-bass` | lỗi | bass của hợp âm không phải thành phần |
| `form-nest` | lỗi | nút con vượt ra ngoài nút cha |
| `range` | cảnh báo | cao độ ngoài phạm vi MIDI 0 – 127 |
| `group` | cảnh báo | các nốt cùng `onset` trong một bè mà không chung `group` |
| `span-end` | cảnh báo | nhãn vượt quá cuối bài |

`fromJson` = `migrate` + `validateScore`: có lỗi thì ném, chỉ cảnh báo thì trả kèm.

## Chưa có (GĐ2 trở đi)
Kiểm luật âm nhạc (quãng song song, xử lý nốt nghịch, giới hạn tầm giọng theo giáo trình…) thuộc sổ luật; mỗi vi phạm phải trỏ về luật có nguồn. Hiện kiểm luật phức điệu vẫn ở `features/counterpoint/` (`rules.ts`, `verify.ts`).
