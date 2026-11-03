# Mạng tri thức `/explore` (`src/features/explore/`, giai đoạn 4, 11/2026)

- **Dữ liệu**: không có kho đồ thị riêng — ghép những gì thư viện đã có, mỗi mối nối dẫn về chỗ nó được ghi:
  - **người + tác phẩm**: dòng dữ liệu `composers.ts` / `pianists.ts` (xuất `COMPOSER_ROWS`, `PIANIST_ROWS`), plugin `theory-content.ts` (`peopleData`) ghi `content/people.<h>.json` (398 người, 785 tác phẩm tiêu biểu, ~110 KB; năm sinh – mất đọc thành số — "1958–" là còn sống; thời kỳ + nhóm lấy tiêu đề từ `PERIODS`), tên file ở `PEOPLE_FILE`; chỉ mục bài đánh `person: true` cho trang người (đầu trang có link "Mạng tri thức").
  - **nơi chốn, sự kiện, hành trình**: `places.ts` (`PLACES_BY_SLUG`, `JOURNEYS`, `kindOf`, `yearsOf` — nay đọc cả năm 3 chữ số, "794 – 1185").
  - **phân ngành**: `branchesOf` (taxonomy); **khái niệm**: `topics` của người → bài thư viện.
- **Trang**: tab Người (lọc chữ, thời kỳ, quốc gia, khoảng năm — người sống chồng lên khoảng; xếp theo năm sinh) · Tác phẩm (cùng bộ lọc; *tác phẩm tiêu biểu* như ghi ở trang mỗi người, **chưa có thể loại / hình thức / năm sáng tác** — câu hỏi kiểu "sonata trước 1800" chưa trả lời được) · Dòng thời gian (sự kiện của bản đồ + tuỳ chọn năm sinh – mất, lọc vùng / năm / chữ, nhóm theo thế kỷ). `?p=<slug>` mở hồ sơ một người: thời kỳ, quốc gia, tác phẩm, nơi chốn kèm sự kiện, nút hành trình, khái niệm, phân ngành, người cùng thời – cùng nước. `?tab=tac-pham|thoi-gian`.
- Mục "Tra cứu" ở ngăn kéo máy tính (`navItems.ts`). CSS `explore.css` + dùng lại `src-*` (sources.css) và `mc-chip` (musicology-sky.css).
- Test: 3 trang trong `smoke.spec.ts`, 1 test hồ sơ Bach + lọc thời kỳ trong `library.spec.ts`.
