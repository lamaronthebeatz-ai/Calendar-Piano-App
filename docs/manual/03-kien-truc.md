# Phần 3. Kiến trúc tổng thể

## 3.1. Mô hình: ứng dụng tĩnh, dữ liệu ở máy người dùng

Ứng dụng **không có máy chủ riêng**. Toàn bộ là các tệp tĩnh (HTML, JavaScript, CSS, JSON, hình, âm thanh) được dựng sẵn rồi phát hành lên GitHub Pages. Mọi xử lý chạy trong trình duyệt: tìm kiếm, khắc bản nhạc, giải phức điệu, phân tích hoà âm, nghe micro. Dữ liệu người dùng tạo ra nằm trong bộ nhớ trình duyệt của chính máy đó. Cách làm này gọi là *local-first*.

Ứng dụng có ba tầng:

| Tầng | Gồm | Nằm ở |
|---|---|---|
| Nội dung chung | Bài viết, sách, từ điển, nguồn, dữ liệu người – tác phẩm, kho câu hỏi trò chơi, bản quét, bìa, ảnh | Tệp tĩnh trên GitHub Pages, trình duyệt lưu đệm |
| Mã ứng dụng | Giao diện React, các bộ máy (luật phức điệu, phân tích, trò chơi), Web Worker | Tệp JavaScript tĩnh, tải theo trang |
| Dữ liệu người dùng | Lịch, học viên, ghi chú, đề tài, sổ tay, kho tài liệu, bài làm, tiến trình trò chơi, tuỳ chọn | localStorage và IndexedDB của trình duyệt, một phần được mã hoá |

## 3.2. Công nghệ

| Thành phần | Công nghệ | Vai trò |
|---|---|---|
| Giao diện | React 19, React Router 7 (hash router) | Trang, điều hướng |
| Ngôn ngữ | TypeScript 6 | Kiểu dữ liệu chặt cho toàn bộ mã |
| Đóng gói | Vite 8, plugin React | Dựng, tách mã theo trang, plugin dựng nội dung |
| Giao diện CSS | Tailwind CSS 4 + CSS riêng từng khu vực | Màu, bố cục; hiệu ứng để tệp riêng cạnh từng thành phần |
| PWA | vite-plugin-pwa (Workbox) | Lưu đệm, dùng không mạng, tự cập nhật |
| Cơ sở dữ liệu trình duyệt | Dexie 4 (IndexedDB) | Lịch – học viên, kho bản nhạc phân tích, kho tài liệu – luận điểm |
| Trạng thái | Zustand 5, useSyncExternalStore | Trạng thái dùng chung giữa các thành phần |
| Khắc bản nhạc khi chạy | Verovio 6 (MEI → SVG) | Trình soạn nhạc, trang phân tích |
| Khắc sẵn | LilyPond (chạy lúc soạn nội dung) | 448 khối thí dụ trong thư viện, tác phẩm sách thiếu nhi, lick |
| Âm thanh → nốt | Basic Pitch (Spotify), tải khi cần | Thu bằng micro trong trình soạn nhạc và nghe hợp âm |
| Âm thanh | Web Audio API + mẫu piano; VSCO 2 CE (CC0) cho dây, kèn | Nghe thí dụ, phát bản nhạc, nhạc nền trò chơi |
| Xuất PDF | Paged.js | Tiểu luận và bản in sách |
| Kiểm thử | Vitest (đơn vị), Playwright (giao diện), oxlint | Phần 7 |

## 3.3. Tổ chức thư mục mã nguồn

| Thư mục | Nội dung |
|---|---|
| src/App.tsx | Khai báo route, màn chào, tải lười các trang |
| src/layout/ | Khung chung: thanh điều hướng, ngăn kéo, thẻ xem nhanh, trang lỗi |
| src/features/‹khu vực›/ | Mỗi khu vực một thư mục: theory, curriculum, musicology, explore, knowledge, terms, sources, counterpoint, analyze, compose, solfege, chordear, tools, brain, research, notebook, journey, home, calendar, students, lessons, settings, about… |
| src/features/theory/content/ | 134 tệp nội dung bài viết, mỗi tệp một mảng bài |
| src/data/ | Cơ sở dữ liệu lịch – học viên (db.ts), lời chào theo giờ |
| src/lib/ | Mã hoá (vault.ts, secureStore.ts), mã khoá (passcode.ts), nhật ký lỗi, nhận diện thiết bị, màu riêng (tint.ts) |
| src/hooks/ | Hook dùng chung: vuốt lùi, phím tắt, nhớ vị trí cuộn, hiệu ứng sân khấu (useStageTilt), lời chào theo giờ… |
| public/ | Tệp tĩnh: bản quét giáo trình, mảnh Grove, bìa sách, ảnh, mẫu âm thanh, bản nhạc mẫu cho phân tích |
| scripts/ | Script dựng và soạn nội dung (Phần 6) |
| tests/ | Kiểm thử giao diện Playwright |
| docs/ | Ghi chú phát triển (docs/notes), trạng thái (STATUS.md), lộ trình (roadmap.md), tiểu luận và sổ tay này |

## 3.4. Luồng chạy khi mở một trang

1. Trình duyệt tải khung ứng dụng và **chỉ mục thư viện** (khoảng 283 KB nén). Chỉ mục gồm tên, tóm tắt, mục, tên gọi khác của 1.538 bài, đủ để tìm kiếm và vẽ danh sách.
2. Màn chào kiểm mã. Nếu đúng, khoá mã hoá được suy ra và giữ cho phiên làm việc.
3. Router xác định trang theo địa chỉ, rồi tải mã của trang đó.
4. Trang tải thêm dữ liệu riêng khi cần:
   - mở bài nào tải tệp JSON của bài đó;
   - mở một mục Grove tải mảnh 80 mục chứa nó;
   - mở Mạng tri thức tải dữ liệu người và tác phẩm.
5. Việc nặng chạy trong **Web Worker** để giao diện không đứng (mục 3.5).
6. Mọi tệp đã tải được lưu đệm. Lần sau mở ngay, kể cả khi không có mạng.

## 3.5. Web Worker và việc chạy nền

| Worker | Việc |
|---|---|
| analyze.worker | Phân tích hợp âm, giọng, câu kết, hình thức của một bản nhạc |
| solver.worker | Bộ giải phức điệu hai bè |
| multi.worker | Ba – bốn bè, tam trùng, tứ trùng |
| canon.worker | Mô phỏng và canon |
| forms.worker | Hình thức (thể hai đoạn, ba đoạn): dựng các đoạn, viết câu nối |

Mỗi lần giải có giới hạn thời gian, mặc định 15 giây; người dùng có thể bấm "Tìm tiếp" thêm 60 giây. Hết giờ thì Worker trả kết quả "chưa kết luận" và tự tắt. Trang không bao giờ bị treo.

## 3.6. Lưu đệm (PWA)

Phần lõi được lưu sẵn khi cài (precache). Những phần nặng được tách khỏi precache và lưu đệm theo nhóm khi dùng tới:

| Nhóm lưu đệm | Nội dung | Giới hạn |
|---|---|---|
| library | Tệp JSON từng bài, mảnh tìm kiếm | 12.000 mục |
| piano-samples, instrument-samples | Mẫu âm thanh piano, dây, kèn | 1 năm |
| book-scans | Bản quét giáo trình (thí dụ cắt) | 3.000 mục, 1 năm |
| home-images | Ảnh lớn trang chủ, tủ sách | 1 năm |
| ml-models | Mô hình nhận cao độ | 10 mục |
| wiki-api, wiki-images | Ảnh và dữ liệu Wikipedia, Commons | 90 – 180 ngày |
| yt-thumbs | Ảnh xem trước video YouTube | 90 ngày |
| fonts | Phông chữ | 1 năm |

Không lưu sẵn: mã Verovio và mã nhận cao độ (chỉ tải khi mở trình soạn nhạc, nghe hợp âm), bản quét, mảnh Grove.
