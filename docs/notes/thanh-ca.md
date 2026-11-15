# Thánh ca Việt Nam (mục `thanhca`, sách `nghien-cuu-thanh-ca-viet-nam`)

Lamar yêu cầu 15/11/2026: tập trung nghiên cứu thánh ca Công giáo Việt Nam, mục riêng trong Âm nhạc Việt Nam, sách "Nghiên cứu Thánh ca Việt Nam", ưu tiên sách Paul Văn Chi, Kim Long và các luận án đọc được trên mạng.

## File
- Mục lý thuyết mới `thanhca` (`categories.ts`, glyph ✠, hue 52, nhóm "Việt Nam & Âm nhạc học" ở `topicGroups.ts`); ảnh mục `assets/topics/thanhca.webp` = *Phát Diệm Cathedral, 1920s* (Commons, PD, ghi ở `topicCredits.ts`). Nhóm "Thánh ca Công giáo Việt Nam" trong nhánh Âm nhạc Việt Nam của `musicology/taxonomy.ts`.
- Bài: `content/thanh-ca.ts` (hub `thanh-ca-viet-nam`) + `thanh-ca-a.ts` (lịch sử, 11) · `-b` (văn kiện, phụng vụ, thể chế, 11) · `-c` (thanh điệu – giai điệu, hội nhập, 12) · `-d` (nhạc sĩ, luận án, khoảng trống, 17) = 52 bài. `-d` dùng hằng ref khai báo đầu file.
- Sách `books.ts` id `nghien-cuu-thanh-ca-viet-nam`, 10 phần theo bảng của hub, kệ `viet-nam` ở `shelfTopics.ts`; bìa `covers/nghien-cuu-thanh-ca-viet-nam.webp` (+ thumb) vẽ bằng `scratchpad/acover/mk_tc.py` từ ảnh Phát Diệm.
- **Tư liệu gốc của đợt viết:** `docs/research/thanh-ca/r1…r5.md` (5 agent tra mạng: lịch sử, Văn Chi – Kim Long, luận án, phụng vụ, nhạc sĩ) — mỗi URL trong `refs` của 52 bài đều có trong các file này (đã kiểm bằng script). Bổ sung bài thì tra đây trước.

## Điều cần biết
- **Sách Văn Chi và Kim Long chưa đọc được toàn văn** (không có bản hợp pháp trên mạng): bài "Theo Văn Chi…" chỉ mô tả sách theo OCP; "Theo Kim Long…" dựa phỏng vấn RFA và bài của Xuân Thảo. Lamar gửi bản sách thật → viết lại thành tóm lược từng chương có trang.
- Đọc toàn văn được: luận án D.Min. Nguyễn Xuân Thảo (CTU 2007) Chương II tr. 63–184; đồ án Tùng Công Kiều (BU 2009, OCR, trang ghi "tr. ~"); luận án Nguyễn Bách (HVANQG 2015, phần dấu giọng); Hướng dẫn mục vụ Thánh nhạc HĐGMVN (bản 12-2022 — phần lớn dựa *Sing to the Lord* của Mỹ).
- Chỗ nguồn lệch đã ghi trong bài, không chọn bên: năm lập Uỷ ban Thánh nhạc (1967 / 1971–72 / 1994 / 1996), tác giả lời "Cao Cung Lên", "Trăm triệu lời ca", số bài Kim Long (3.000 – 5.000), ngày *Tra le sollecitudini* (22-11 gốc / 21-11 UBTN).
- Không dùng: bảng gán nốt theo thanh trên Wikipedia (chưa rõ gốc), tên "Trinh Cát", "Đinh Công Huỳnh" làm nhạc sĩ, chi tiết 1865/Vincentian về Ngắm.
- `portrait` đã bỏ ở bài nhân vật: `WikiImage` tra en.wikipedia, các nhạc sĩ này chỉ có trang tiếng Việt.
- Gallica bị chặn nên mảng tư liệu PD tiếng Pháp (MEP, "cantiques annamites") còn trống — xem bài `nhung-dieu-chua-biet-ve-thanh-ca-viet-nam`.
- Commons API trả 429 khi nhiều agent cùng tra: tải trang `File:` HTML để đọc giấy phép, ảnh lấy qua `upload.wikimedia.org/.../thumb/...` với độ rộng chuẩn (960px; 640/800 bị 400).
