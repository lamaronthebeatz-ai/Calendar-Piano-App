# Phần 4. Dữ liệu và lưu trữ

## 4.1. Nội dung chung (tệp tĩnh)

| Tệp | Nội dung | Ghi chú |
|---|---|---|
| content/index.‹hash›.json | Chỉ mục: meta 1.538 bài, dữ liệu tìm kiếm, số liên kết, tên tệp nguồn | Tải khi khởi động |
| content/‹slug›.‹hash›.json | Một bài: thân bài, tài liệu tham khảo, liên kết ngược, nguồn | Tải khi mở bài |
| content/search/*.json | Mảnh tìm kiếm toàn văn (lớn nhất khoảng 8 KB nén) | Tải theo từ khoá |
| content/people.‹hash›.json | 398 người, 785 tác phẩm tiêu biểu | Mạng tri thức |
| works.json | 4.899 tác phẩm Wikidata | Mạng tri thức, tải khi cần |
| relations.json | Quan hệ thầy – trò, ảnh hưởng (Wikidata) | Dòng truyền |
| grove-index.json + grove/‹vần›‹n›.json | Chỉ mục 6.430 mục Grove và các mảnh 80 mục | Mảnh tải khi mở mục |
| terms.json | 258 thuật ngữ đa ngữ | Từ điển |
| journey/pool.json | 324 người, 1.832 mốc, 809 giai thoại cho Lữ hành vô tận | Khoảng 390 KB, tải khi cần |
| scans/‹sách›/… | Thí dụ cắt từ bản quét giáo trình | Lưu đệm book-scans |
| covers/, images/ | Bìa sách (bản lớn 960 px, bản nhỏ 480 px), tranh trang chủ, tủ sách, trò chơi | Ảnh thuộc phạm vi công cộng, ghi nguồn |

Tên tệp mang mã băm (hash) theo nội dung. Bài nào sửa thì bài đó có tên tệp mới, trình duyệt tự tải lại bản mới. Bài không đổi thì dùng tiếp bản đã lưu đệm.

## 4.2. Dữ liệu người dùng trong IndexedDB

| Cơ sở dữ liệu | Bảng | Nội dung |
|---|---|---|
| piano-schedule | students, timetableSlots, settings | Học viên; các ô lịch dạy theo thứ và giờ; cài đặt |
| analyze-scores | bodies | Thân các bản nhạc người dùng đưa vào trang Phân tích (mã hoá khi kho mở) |
| musicology-knowledge | rows, meta | Kho tài liệu riêng, đoạn trích, luận điểm, bằng chứng (mã hoá); meta giữ bản chụp trước mỗi lần đổi lược đồ |

## 4.3. Dữ liệu người dùng trong localStorage

| Nhóm khoá | Ví dụ | Nội dung |
|---|---|---|
| app:* | app:salt, app:errors, app:private | Muối mã hoá của máy, nhật ký lỗi, trạng thái khu riêng tư |
| reader:* | reader:notes, reader:state | Tô màu – ghi chú khi đọc (mã hoá); vị trí đọc, dấu trang |
| research:projects | | Đề tài nghiên cứu (mã hoá) |
| brain:notes | | Ghi chú sổ tay (mã hoá) |
| theory:* | theory:library, theory:positions, theory:group | Trạng thái thư viện, vị trí cuộn từng bài, cách nhóm |
| counterpoint:v1 | | Đề, dạng bài, bài làm đang dở của Giải phức điệu |
| compose:* | compose:scores, compose:current, compose:palette, compose:zoom | Bản nhạc đã soạn, bản đang mở, vị trí bảng công cụ, cỡ phóng |
| solfege:* | solfege:tab, solfege:stats | Tab đang mở, thống kê đúng – sai |
| journey:* | journey:v2, journey:v1.bak, journey:repair-log | Tiến trình trò chơi (bản 2), bản cũ cất lại, nhật ký sửa dữ liệu hỏng |
| khác | chord-ear:style, musicology:view, tools:key, palette-recent, onboarding-done | Tuỳ chọn nhỏ, lịch sử ⌘K, đã xem tour |

Trong sessionStorage (mất khi đóng trình duyệt): app:unlocked (đã qua màn chào) và app:vault (khoá mã hoá của phiên).

## 4.4. Mã hoá dữ liệu người dùng

- Khoá AES-GCM 256 bit được suy ra từ mã màn chào bằng PBKDF2-SHA-256 với 600.000 vòng, kèm muối riêng của từng máy (app:salt).
- Những khoá localStorage nhạy cảm (reader:notes, research:projects, brain:notes) được lưu dưới dạng "enc1:" cộng dữ liệu mã hoá. Kho tài liệu – luận điểm và thân bản nhạc trong IndexedDB cũng được mã hoá.
- **Một phiên chưa mở khoá không bao giờ ghi đè dữ liệu đã mã hoá mà nó chưa đọc được.** Nhờ vậy dữ liệu không mất vì quên nhập mã.
- Lịch và học viên (piano-schedule) chưa được mã hoá. Đây là việc trong danh sách phát triển (Phần 13).

## 4.5. Tệp sao lưu

Tệp sao lưu là một tệp JSON, phiên bản 3, gồm:
- học viên, ô lịch, cài đặt;
- ghi chú đọc;
- đề tài;
- sổ tay;
- kho tri thức (kèm số phiên bản lược đồ);
- tiến trình trò chơi.

Khi nhập:
- **Gộp** dùng phép hợp, không xoá gì của máy hiện tại;
- **Thay thế** cất bản hiện có trước khi ghi.

Dữ liệu trò chơi hỏng được sửa từng trường, ghi nhật ký vào journey:repair-log. Nếu cả khối dữ liệu không đọc được thì nó được cất ra journey:v2.broken chứ không bị xoá.
