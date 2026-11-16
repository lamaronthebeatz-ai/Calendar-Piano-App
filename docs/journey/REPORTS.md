# Hành trình Maximum Edition — Báo cáo từng phase

## Phase 1 — Nền móng (16/11, commit 3e36a55)
Tóm tắt: engine thuần (`engine/`), save v2 + chuyển đổi v1, chương đã mở không khoá lại, 6 chương cũ qua bộ kiểm, tiến trình vào sao lưu. Chi tiết ở `docs/notes/journey.md` § Engine. CI xanh (Chromium + WebKit) ở commit 4250fee.

---

## Phase 2–4 — Lát cắt Trung cổ "Bản thảo thất lạc" (16/11)

### A. Đã làm
- **Câu đố mới**: `neume` (khuông 4 dòng, khoá Đô/Fa; validator tự tính đáp án từ khoá), `hexachord` (ba lục âm; đáp án tự tính), `aural` (đoạn cắt từ **bản thu thật** trên Commons, sắp thứ tự / phân loại), `investigation` (kết luận + chứng cứ; chứng cứ yếu làm chỗ dựa bị bác, thiếu chứng cứ bị nhắc). Tổng 9 dạng.
- **Lát cắt** `content/ban-thao.ts` (`ArcDef`): 5 địa điểm (2 ẩn, mở theo tiến trình), 4 nhân vật (Guido lịch sử; quản thư, Rinaldo, ca trưởng Gualtiero hư cấu), 5 hội thoại phân nhánh (lựa chọn ẩn/hiện theo điều kiện, NPC nhớ chủ đề đã bàn), nhiệm vụ chính 5 giai đoạn + 2 nhiệm vụ phụ, 11 câu đố thuộc 8 dạng, 6 chứng cứ có loại (sơ cấp, thứ cấp, hiện vật, giai thoại, hư cấu), 2 vật phẩm.
- **Lớp chạy** `engine/runtime.ts` (vào nơi, dùng vật, hội thoại, giải câu đố → hiệu ứng → nhiệm vụ tự đi tiếp).
- **Giao diện** `ui/Arc.tsx` + `arc.css`: màn tổng (mục tiêu hiện tại, bản đồ cổ của chương với các địa điểm, danh sách nơi), màn địa điểm (nhân vật có nhãn lịch sử/hư cấu, vật tương tác), khung hội thoại (nhãn từng dòng: Lời dựng lại / ✦ Hư cấu / Trích nguyên văn; link bài thư viện), 9 giao diện câu đố (↑↓ thay kéo thả, ô chọn, ô điền, khuông SVG, nút nghe), Sổ hành trình (nhiệm vụ + kỹ năng, túi đồ, chứng cứ có độ tin cậy, Codex có bậc thành thạo).
- **Lối vào**: nút "✦ Bản thảo thất lạc" trên bản đồ Chương I, mở khi đã qua cảnh Sankt Gallen (`q:trung-co/neume`). URL `?v=arc&a=ban-thao&l=&p=`.
- **Thư viện**: bài mới `hexachord-va-ban-tay-guido` (có nguồn), nối từ `lich-su-ky-am`.

### B. File
Thêm: `engine/runtime.ts`, `content/ban-thao.ts`, `content/arcs.ts`, `ui/Arc.tsx`, `ui/arc.css`, `tests/journey-arc.spec.ts`, `docs/journey/REPORTS.md`. Sửa: `engine/puzzles.ts` (4 dạng), `engine/types.ts` (`ArcDef`), `engine/engine.test.ts`, `JourneyPage.tsx` (nút + view `arc`), `theory/content/history.ts` (bài hexachord), ghi chú.

### C. Kiến trúc
Lát cắt là **dữ liệu**; thêm lát cắt = một file + một dòng `ARCS`. Màn hình chỉ đọc dữ liệu và gọi `runtime`; không có luật chơi trong component. Bản đồ dùng lại `ChapterMap` của chương (địa điểm thay cho cảnh).

### D. Kiểm thử (kết quả thật)
- Vitest 145/145: lát cắt qua `validateChapter` (0 lỗi); đáp án neume/hexachord khớp khoá – lục âm (đáp án sai bị bắt); kết luận: sai kết luận / chứng cứ yếu / thiếu chứng cứ / đúng; **bot engine đi hết tuyến chính** (mỗi giai đoạn mở đúng nơi, kết thúc có phần thưởng).
- E2e `journey-arc.spec.ts` (Chromium điện thoại + máy tính, WebKit điện thoại + máy tính — tất cả qua): chơi trọn tuyến chính bằng giao diện (hội thoại có lựa chọn, nhặt vật, trả lời sai + gợi ý rồi đúng, đủ 8 dạng câu đố, kết luận sai bị bác có lý do rồi đúng, Sổ hành trình có chứng cứ và Codex, mở lại trang vẫn còn); nhiệm vụ phụ nghe; chưa có vật thì thử thách chưa mở.
- Ảnh chụp điện thoại 393×852 + màn rộng 1280: 8 màn, không tràn ngang. Đoạn thu thật phát và tự dừng đúng mốc (Chromium, mạng thật).
- Bộ kiểm đầy đủ: tsc, lint (4 warning cũ), check:links (1532 bài, 0 lỗi), build, budget đạt.

### E. Còn tồn tại
- Thử thách nghe cần mạng (bản thu phát từ Commons như nhạc nền). Ngoại tuyến thì nút nghe không phát — câu đố vẫn trả lời được nhưng mất ý nghĩa; chưa có thông báo riêng.
- Màn tổng dùng ảnh nền cố định (`guido-hand`), chưa theo lát cắt.
- Gợi ý chưa trừ XP rõ ràng trên màn (có trừ trong engine).
- WebKit của Playwright sập khi tải lại sau `pushState → back → pushState` (lỗi trình duyệt test, tái hiện trên trang trống) — test dùng trang mới để kiểm lưu; chưa thử Safari thật.
- Chưa làm: hội thoại nhiều nhân vật cùng lúc, nhiệm vụ ẩn, báo cáo nghiên cứu xuất sang `/research` (Phase 6).

### F. Kiểm chứng học thuật
| Dữ kiện trong lát cắt | Nguồn trong thư viện | Trạng thái |
|---|---|---|
| Guido vào Pomposa k. 1013, rời k. 1025 sau bất đồng, sang Arezzo dạy ca đoàn dưới giám mục Tedald | `guido-d-arezzo` (bảng Tiểu sử) | theo bài (Wikipedia Anh) |
| Neume thế kỷ 9 chỉ nhắc hướng; k. 1000 Ý đặt neume theo độ cao; Guido: dòng kẻ + chữ cái làm khoá | `lich-su-ky-am` §1–2 | theo bài |
| Micrologus 1025 hoặc 1026 | `lich-su-ky-am` §2 | theo bài |
| Ut queant laxis: 6 nửa câu cao dần, ut–re–mi–fa–sol–la; lời gán Paulus Diaconus; không rõ ai viết giai điệu | `hexachord-va-ban-tay-guido` (mới), `lich-su-ky-am` | đối chiếu Wikipedia 16/11 |
| Ba hexachord (naturale Đô, durum Sol, molle Fa), mi–fa nửa cung, mutation | `hexachord-va-ban-tay-guido` | đối chiếu Wikipedia (Guidonian hand) 16/11 |
| Guido mô tả hexachord trong Epistola và Micrologus; Sigebert k. 1105–1110 kể chuyện khớp tay; hình bàn tay đầy đủ từ thế kỷ 12 | `hexachord-va-ban-tay-guido`, `guido-d-arezzo` (mục giai thoại) | đối chiếu Wikipedia 16/11; **chưa đối chiếu nguyên văn Latin** |
| Bốn văn bản của Guido và nội dung | `guido-d-arezzo` | theo bài |
| Franco xứ Köln k. 1250–1280 | `lich-su-ky-am` §4 | theo bài |
| Khoá Đô/Fa chỉ dòng do/fa, khuông 4 dòng | `ky-am-binh-ca-gregorian` | theo bài |
| Thầy quản thư, Rinaldo, ca trưởng Gualtiero, trang chép tay ở Pomposa, cuốn sách nốt vuông của lữ khách | — | **hư cấu, có nhãn** |
| Đầu các nửa câu trong bản thu Membeth: 2,3 s ut · 10,0 s mi · 20,4 s sol · 27,1 s la | đo bằng dò cao độ (YIN) trên bản thu | đo 16/11 |
| Đoạn Palestrina 27–35 s có ≈ 3 cao độ đồng thời; Gaudeamus 6–14 s ≈ 1 | đo phổ trên bản thu | đo 16/11 |

### G. Danh sách nghiệm thu (kế hoạch §VI.3)
| Tiêu chí | Đạt | Bằng chứng |
|---|---|---|
| Bắt đầu và kết thúc được tuyến truyện | ✓ | e2e "chơi trọn" |
| Khám phá các địa điểm (mở theo tiến trình) | ✓ | e2e + test engine (cờ `open:loc:…`) |
| Nói chuyện với NPC, lựa chọn có tác dụng | ✓ | e2e (lựa chọn ẩn sau khi hỏi; câu "Tôi sẽ thử bài tập" chỉ hiện sau khi học Ut queant) |
| Hoàn thành được mọi câu đố, có giải thích | ✓ | validator `puzzleProblem` + e2e giải đủ 11/11 qua giao diện (2 câu phụ: một qua e2e, một qua validator) |
| Ít nhất 6 dạng câu đố | ✓ | 8 dạng trong lát cắt |
| Ít nhất một thử thách nghe thật | ✓ | 2 câu `aural` từ bản thu Commons |
| Ít nhất một thử thách đọc ký âm | ✓ | 2 câu `neume` |
| Ít nhất một thử thách lý thuyết | ✓ | `hexachord`, `neume` |
| Nhiệm vụ điều tra sử liệu | ✓ | `investigation` bàn tay Guido |
| Thu thập và dùng chứng cứ | ✓ | chứng cứ thu qua hội thoại/nhiệm vụ, dùng ở kết luận |
| Mở nội dung tri thức liên quan | ✓ | link bài trong thoại, giải thích, Codex |
| Lưu và tiếp tục | ✓ | e2e mở trang mới vẫn "Đã khép lại" |
| Không lỗi chặn; chơi được trên máy tính và điện thoại | ✓ | e2e 2 cỡ màn × 2 engine; ảnh chụp không tràn |
