# Trạng thái làm việc — đọc ĐẦU mỗi phiên, sửa CUỐI mỗi phiên

> Sổ tay của Claude: đang ở đâu, chờ gì, làm gì tiếp. Ngắn, hiện tại; lịch sử thì để git log và `docs/roadmap.md`.
> Cập nhật lần cuối: 15/11/2026.

## Đang dở / chờ Lamar
- Dấu kiểm PBKDF2 **màn chào: xong (13/11)**. Khu riêng tư (Lịch, Học viên) vẫn SHA-256 cũ — Lamar có thể gửi dấu kiểm thứ hai (nhập mã khu riêng tư ở Cài đặt → Bảo mật); nhận thì thay `HASH` ở `PrivateArea.tsx`. Không bao giờ hỏi hay ghi mã thật.

## Vừa xong
- **Game Hành trình** (15/11): `/hanh-trinh`, Chương I Trung cổ + **Chương II Phục hưng**, **Chương III Baroque** (13 cảnh, lời thoại dày, tình tiết hư cấu gắn nhãn), **Chương IV Cổ điển** (11 cảnh, C. P. E. Bach → Giao hưởng số 9, phiên toà 9 lời khai), **Chương V Lãng mạn** (11 cảnh, Schubertiade → Brahms – Hanslick), **Chương VI Dân tộc và cuối Lãng mạn** (11 cảnh, Glinka 1836 → Mahler 1897), ảnh nền 1920/1080 cho mọi chương, **nhạc nền thật từng cảnh** (bản thu Commons, crossfade), tiểu sử chi tiết 17 + 40 + 49 + 26 + 73 nhạc sĩ Trung cổ → Lãng mạn — `notes/journey.md`. Mỗi chương mở đầu bằng **Bối cảnh lịch sử** và đi trên **bản đồ cổ của thời kỳ** (Ortelius 1570, Delisle 1724, Bonne 1780, Radefeld 1843…). **Lữ hành vô tận** (bộ sinh màn chơi từ 1.832 mốc tiểu sử + 809 giai thoại + danh mục tác phẩm, chuyến 5 chặng không lặp). **Tiếp:** Chương VII thế kỷ XX (cần tiểu sử thế kỷ XX trước); đề xuất mở rộng Baroque → Lãng mạn kèm bài học lý thuyết (chờ Lamar chốt trình độ và bài tập điền nốt); Chương VI dân tộc + cuối Lãng mạn.
- **Thánh ca Việt Nam** (15/11): mục mới `thanhca` 52 bài + sách *Nghiên Cứu Thánh Ca Việt Nam* (10 phần), tư liệu từ 5 lượt tra mạng lưu ở `docs/research/thanh-ca/` — `notes/thanh-ca.md`. **Chờ Lamar:** bản sách Văn Chi / Kim Long (nếu có) để tóm lược từng chương.
- **Thuật ngữ → từ điển** (15/11): 2.384 liên kết `[[g:id]]` tự động lúc build trong 690 bài (Lý thuyết + Âm nhạc học), thẻ Grove khi bấm, `/terms?g=` ghim mục, mục Grove có link về bài thư viện — `notes/terms.md`. Có thể còn nối sai lẻ tẻ: thấy chữ nào sai thì thêm vào `GROVE_STOP`.
- **Trang Về Trung tâm** (14/11): `/settings/center`, ảnh chụp app tràn viền, 12 hệ thống — `notes/features.md`.
- **Quay lại đúng trang** (14/11): đóng sách về lại trang đã mở sách; nút quay lại ở Thư mục/Sổ tay/Đề tài/Bản nhạc lùi lịch sử — `notes/ui.md`.
- **Trang Về Lamar** (14/11): `/settings/about`, thẻ ảnh ở đầu Cài đặt — `notes/features.md`. Sửa test soạn nhạc chập chờn trên WebKit (chờ màn che tắt + khuông ngừng dịch chuyển trước khi bấm).
- **Thẻ giới thiệu khi bấm link** (14/11): mọi `[[slug]]` mở thẻ ngắn (tóm tắt + thuật ngữ 5 thứ tiếng + mục Grove) trước khi vào bài — `notes/theory.md`.
- **Từ điển âm nhạc Lamar** (14/11): "Thuật ngữ" đổi tên; tab Grove 1904 – 1910 đủ 5 tập (6.430 mục A–Z + Phụ lục, nguyên văn + tập/trang + link bản quét; dữ liệu sinh lúc build) và tab thuật ngữ đa ngữ. **Dở:** tiếng Việt **đủ 6.430/6.430 mục** (15/11) — 150 phần `scripts/grove/vi/u001–u150.json` + các lô viết tay. Việc còn có thể làm: rà các mục ghi "đọc mờ" bằng ảnh quét; mục dài chỉ tóm phần đầu (ghi "bài viết trình bày tiếp").
- **Phân tích tác phẩm `/analyze`** (4 đợt, 13/11): lăng kính Cổ điển / Jazz / TK XX, hình thức, nhãn trên bản nhạc + văn bản + bảng từng ô — `notes/analyze.md` (có mốc độ đúng).

- **Thương hiệu — đợt 2** (14/11): toàn app (trừ /home và trình đọc; Âm nhạc học có nhưng bầu trời giữ nguyên), thanh điều hướng dưới, nút + thành bảng trượt dòng, nút công cụ máy tính — `notes/brand.md`.
- **Thương hiệu "Phòng hoà nhạc" — đợt 1** (13/11): trang Lý thuyết + lời chào theo giờ (300 câu) — `notes/brand.md`. **Tiếp:** áp dụng từng trang theo thứ tự trong brand.md; không đụng `/home` và bầu trời chòm sao.
- **Đầu trang Lý thuyết** (13/11): bỏ khung — tranh tràn viền + "Đọc tiếp" và 3 ô bấm nhanh (`notes/theory.md`).
- **Kho bản nhạc `/analyze`** (13/11): bản mẫu + bản nhập + trình soạn chung một kho, ô tìm + lọc nguồn; thân bản nhập chuyển sang IndexedDB (mã hoá); thêm bản mẫu Clair de lune.
- Nhập file ở `/analyze`, `/compose`: bỏ `accept` (iPhone làm xám .musicxml), nhận theo nội dung.
- **Giọng chính** sửa xong (13/11): `homeOf` thay cho "giọng hợp âm cuối"; Clair de lune → Rê♭ trưởng, Georgia (Jazz) → Fa trưởng; Bach giữ 77,1%. Clair de lune MusicXML dựng từ Mutopia — công thức ở `notes/analyze.md`.

## Trước đó (đợt 11/2026, commit a2c4d21)
- Vitest + CI, test chặn route chưa kiểm, nhật ký lỗi, TS chặt hơn — `notes/testing.md`.
- Sổ tay tri thức `/brain` (second brain) — `notes/brain.md`.
- Bảo mật: LICENSE, banner, kho mã hoá, dấu kiểm — `notes/security.md`.
- Luật phân giải alias trùng `theory/keyIndex.ts`.
- Quy trình xuất tiểu luận PDF vào repo: `scripts/essay/` — `notes/workflow.md` § Tiểu luận.

## Việc tiếp theo đề xuất (chưa được giao)
0. Phân tích tác phẩm: Lamar gửi PDF → Claude chuyển MusicXML (Audiveris + soát tay) → thêm vào `public/analyze/` nếu phạm vi công cộng; Scriabin Sonata số 2 chương I để đối chiếu với bảng phụ lục tiểu luận. Nâng độ đúng giọng (đang ~77%) bằng bộ đáp án lớn hơn (When in Rome / ABC Beethoven).
1. Bản đồ toàn mạng ghi chú (đồ thị toàn cục ở `/brain`, có lọc theo loại nút).
2. Liên kết ghi chú ↔ tác phẩm Wikidata (`[[w:Q…]]`) và ↔ người trong `/explore`.
3. Mã hoá Dexie (học viên, lịch) — cần lớp bọc bất đồng bộ quanh `db`, cẩn thận mất dữ liệu.
4. Bật `noUncheckedIndexedAccess` dần theo thư mục (hiện 1.053 lỗi).
5. Nút + quạt: thêm "Ghi nhanh" cần đổi bố cục 8 → 9 mục (hỏi Lamar trước).

## Số liệu nền (để biết khi có gì lệch)
- 1.531 bài, 153 nơi trên bản đồ, 0 link hỏng; 297 alias trùng (đã có luật, không cần sửa nội dung).
- 60 unit test; Playwright Chromium ~215 test, ~5 phút; lint đúng **4 warning** cũ.
- Phân tích (hợp xướng Bach): gốc hợp âm 83,9% · giọng 77,1% · gốc + thể đảo 78,3%.
- Ngân sách: JS khởi động 419/600 KB, chỉ mục 272/600 KB, precache 10,6/15 MB.
