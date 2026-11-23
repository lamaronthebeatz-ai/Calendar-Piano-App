# Phần 6. Dựng nội dung (build)

## 6.1. Các lệnh

| Lệnh | Việc |
|---|---|
| npm run dev | Chạy thử trên máy (tự chạy npm run grove trước) |
| npm run build | Kiểm kiểu (tsc) rồi dựng bản phát hành vào dist/ (tự chạy npm run grove trước) |
| npm run preview | Phục vụ thử bản dist/ |
| npm run lint | Kiểm mã bằng oxlint (hiện còn 4 cảnh báo cũ được chấp nhận) |
| npm test | 255 kiểm thử đơn vị (Vitest) |
| npm run check:links | Kiểm liên kết, mã trùng, bản đồ |
| npm run budget | Kiểm ngân sách dung lượng |
| npm run test:e2e | Kiểm thử giao diện (Playwright) |
| npm run grove | Ghép phần tiếng Việt của Grove thành các mảnh phát hành |
| npm run journey:pool | Dựng lại kho câu hỏi Lữ hành vô tận từ tiểu sử |

## 6.2. Plugin dựng thư viện

Bài viết được soạn trong các tệp TypeScript ở src/features/theory/content/. Mỗi bài có các trường: slug, title, category, aliases, summary, body, refs, also… Nội dung bài **không nằm trong gói JavaScript**. Một plugin của Vite (scripts/theory-content.ts) đọc toàn bộ nội dung lúc dựng, rồi tạo ra:

1. tệp JSON riêng cho từng bài, tên mang mã băm;
2. chỉ mục thư viện và các mảnh tìm kiếm;
3. liên kết ngược cho mọi bài;
4. thư mục nguồn (gom tài liệu tham khảo, gán mã);
5. dữ liệu người – tác phẩm cho Mạng tri thức.

Bước này mất khoảng 5 giây cho 1.500 bài. Theo lộ trình, khi vượt khoảng 10 giây hoặc 4.000 bài thì nội dung sẽ chuyển sang tệp Markdown và dựng tăng dần (Phần 13).

## 6.3. Script soạn nội dung (chạy tay khi cần)

| Script | Việc |
|---|---|
| scripts/grove/parse.py | Tách văn bản nhận dạng của bản quét Grove (Internet Archive) thành mục từ |
| scripts/grove/build.py | Ghép phần tiếng Việt vào chỉ mục và các mảnh phát hành |
| scripts/terms/build.py | Dựng bảng thuật ngữ đa ngữ từ tên bài và nhãn Wikidata |
| scripts/works/build.py | Thu tác phẩm từ Wikidata cho người có bài Wikipedia |
| scripts/journey/pool.py | Dựng kho người – mốc – giai thoại cho Lữ hành vô tận |
| scripts/licks/ | Soạn và kiểm 1.001 lick jazz theo luật hoà âm |
| scripts/solfege/gen.py | Sinh bài xướng âm cromatic theo luật (hạt giống cố định) |
| Bộ khắc thí dụ (figures.mjs + LilyPond) | Khắc mọi thí dụ ký âm của thư viện thành SVG |
| Công cụ cắt bản quét | Cắt thí dụ từ bản quét giáo trình (::scan) |
| scripts/essay/ | Xuất sách – tiểu luận thành PDF theo quy chuẩn TL-LV |

## 6.4. Ngân sách dung lượng

npm run budget chặn phát hành khi vượt trần:

| Hạng mục | Hiện tại | Trần |
|---|---|---|
| Chỉ mục thư viện (nén) | khoảng 283 KB | 600 KB |
| Mảnh tìm kiếm lớn nhất (nén) | khoảng 8 KB | 80 KB |
| Precache (thô) | khoảng 13,9 MB | 15 MB |

Precache đang gần trần. Đây là một ràng buộc thực tế cho các phần mở rộng sau này (Phần 13).
