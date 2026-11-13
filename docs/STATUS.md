# Trạng thái làm việc — đọc ĐẦU mỗi phiên, sửa CUỐI mỗi phiên

> Sổ tay của Claude: đang ở đâu, chờ gì, làm gì tiếp. Ngắn, hiện tại; lịch sử thì để git log và `docs/roadmap.md`.
> Cập nhật lần cuối: 13/11/2026.

## Đang dở / chờ Lamar
- Dấu kiểm PBKDF2 **màn chào: xong (13/11)**. Khu riêng tư (Lịch, Học viên) vẫn SHA-256 cũ — Lamar có thể gửi dấu kiểm thứ hai (nhập mã khu riêng tư ở Cài đặt → Bảo mật); nhận thì thay `HASH` ở `PrivateArea.tsx`. Không bao giờ hỏi hay ghi mã thật.

## Vừa xong
- **Phân tích tác phẩm `/analyze`** (4 đợt, 13/11): lăng kính Cổ điển / Jazz / TK XX, hình thức, nhãn trên bản nhạc + văn bản + bảng từng ô — `notes/analyze.md` (có mốc độ đúng).

- **Kho bản nhạc `/analyze`** (13/11): bản mẫu + bản nhập + trình soạn chung một kho, ô tìm + lọc nguồn; thân bản nhập chuyển sang IndexedDB (mã hoá); thêm bản mẫu Clair de lune.
- Nhập file ở `/analyze`, `/compose`: bỏ `accept` (iPhone làm xám .musicxml), nhận theo nội dung.
- **Lỗi đã thấy, chưa sửa (chờ Lamar gật):** "giọng chính" = giọng của hợp âm cuối (`report.ts:47`); thưởng cuối bài trong `keysOf` có comment nhưng chưa viết. Sai ở Clair de lune (ra La♭ thứ) và khung Georgia (ra Rê thứ). Hướng sửa: chọn giọng chính theo hợp âm chủ cuối + hoá biểu + số ô; thêm 2 bài vào test; đo lại Bach. Clair de lune MusicXML dựng từ Mutopia (.mid + chính tả từ .ly qua engraver `spy`) — công thức ở `notes/analyze.md`.

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
- 1.479 bài, 153 nơi trên bản đồ, 0 link hỏng; 297 alias trùng (đã có luật, không cần sửa nội dung).
- 60 unit test; Playwright Chromium ~215 test, ~5 phút; lint đúng **4 warning** cũ.
- Phân tích (hợp xướng Bach): gốc hợp âm 83,9% · giọng 77,1% · gốc + thể đảo 78,3%.
- Ngân sách: JS khởi động 419/600 KB, chỉ mục 272/600 KB, precache 10,6/15 MB.
