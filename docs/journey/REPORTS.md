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

---

## Phase 5–6 — Tiến trình, kỹ năng, điều tra học thuật (16/11)

### A. Đã làm
- **Cây kỹ năng** (`engine/skills.ts`): 6 nhánh × 5 bậc có tên (Lữ khách → Sử gia…), thước điểm tới bậc sau, **phần thưởng mở thật** (`PERKS`): Lý thuyết bậc 1 mở nhiệm vụ ẩn "Đổi lục âm"; Tư duy nghiên cứu bậc 1 mở "Báo cáo nghiên cứu". Tab "Kỹ năng" trong Sổ hành trình.
- **Mastery** hiển thị ở Codex (Chưa gặp / Đã gặp / Đã hiểu / Đã vận dụng / Thành thạo — luật ở Phase 1, một câu đúng không vượt "Đã gặp").
- **Codex** chia theo loại đối tượng của nền tảng tri thức (người, thời kỳ, khái niệm, thể loại…), mỗi mục mở bài và `/graph`.
- **Vật phẩm có công dụng**: `item.use.at` — "Bàn tay vẽ trên giấy da" cho gợi ý không mất điểm ở câu đổi lục âm.
- **Tranh luận** (dạng câu đố `debate`): 3 nhân vật, mỗi lượt chọn câu đáp; câu đúng dựa trên dữ kiện, câu sai dựa vào quê quán / uy tín / số đông / chứng cứ muộn, mỗi câu sai có lời giải thích riêng. Nhiệm vụ học thuật "Ai nghĩ ra khuông nhạc?".
- **Phiên toà sử gia nâng cấp** (cả 6 chương cũ): sau phán quyết phải **chỉ ra bài làm căn cứ** (3 bài để chọn), rồi mới thấy lời giải + "Đúng nguồn / căn cứ ở bài khác"; đúng lần đầu +5 Phê bình nguồn. Lưu `save.trial` (trường mới, có kiểm và gộp).
- **Báo cáo nghiên cứu** (`engine/report.ts` + khung trong game): câu hỏi, chứng cứ đã thu, phân tích, kết luận; bị chặn nếu < 2 chứng cứ có nguồn, dùng giai thoại / hư cấu làm chỗ dựa, phân tích quá ngắn; lưu thành **đề tài ở Bàn làm việc** (bản nháp Markdown có `[[slug]]`, danh mục tham khảo = nguồn của chứng cứ), +40 Nghiên cứu một lần.

### B. File
Thêm `engine/skills.ts`, `engine/report.ts`. Sửa `engine/puzzles.ts` (`debate`), `engine/save.ts` (`trial`), `engine/validate.ts` (kiểm `item.use`), `content/ban-thao.ts` (tranh luận, nhiệm vụ ẩn, công dụng vật), `ui/Arc.tsx` + `arc.css`, `JourneyPage.tsx` (phiên toà), `journey.css`, `knowledge/ids.ts` (trang thời kỳ trong mục Nhà soạn nhạc giờ là "Thời kỳ"), test.

### C. Kiến trúc
Phần thưởng kỹ năng là điều kiện dữ liệu (`{ skill, level }`) — nội dung tự khai báo cái gì mở ở bậc nào. Báo cáo không tạo kho mới: ghi thẳng vào đề tài `/research` (đã vào sao lưu).

### D. Kiểm thử
- Vitest 149/149 (thêm: bậc và phần thưởng, nhiệm vụ ẩn chỉ hiện khi đủ kỹ năng + vật, tranh luận và lời giải riêng, báo cáo bị chặn / bản nháp đúng tham khảo, `trial` khi gộp và khi hỏng).
- E2e (Chromium + WebKit, điện thoại + máy tính, 14/14): tuyến chính thêm tranh luận; sau khi khép: tab Kỹ năng có phần thưởng đã mở, nhiệm vụ ẩn mở + dùng vật lấy gợi ý + giải, báo cáo bị chặn khi có giai thoại rồi lưu thành đề tài với `[[hexachord-va-ban-tay-guido]]`; phiên toà Chương I: phán quyết → chỉ nguồn → lời giải.
- Ảnh điện thoại: tranh luận, màn tổng khép lại, Kỹ năng, Codex, báo cáo, phiên toà — không tràn ngang.

### E. Còn tồn tại
- Phần thưởng kỹ năng mới có 2 (Lý thuyết, Nghiên cứu); 4 nhánh còn lại chỉ có bậc + tên — sẽ thêm khi có nội dung chương sau.
- Phiên toà: 3 lựa chọn nguồn lấy từ chính các bài phiên toà chương đó; chưa phân loại "sự kiện / diễn giải / giả thuyết" riêng (vẫn 3 phán quyết cũ).
- Báo cáo chưa tạo luận điểm – bằng chứng trong kho tri thức (`knowledge`), vì chứng cứ game trỏ tới bài thư viện (a:), còn bằng chứng của kho cần tài liệu (s:/ms:).

### F. Kiểm chứng học thuật (dữ kiện mới)
| Dữ kiện | Nguồn | Trạng thái |
|---|---|---|
| Musica enchiriadis (thế kỷ 9) dùng lưới giống khuông | `lich-su-ky-am` §1 | theo bài |
| Giáo hoàng John XIX mời Guido tới Roma k. 1028 | `guido-d-arezzo` (Tiểu sử) | theo bài |
| Mutation đổi tên âm tiết ở nốt chung; La = la (naturale) / mi (molle), Si♭ = fa (molle) | `hexachord-va-ban-tay-guido` | đáp án tự tính bởi validator |

### G. Nghiệm thu
| Tiêu chí (Phase 5–6) | Đạt | Bằng chứng |
|---|---|---|
| Thấy rõ tiến trình phát triển | ✓ | tab Kỹ năng: cấp, bậc, thước, phần thưởng |
| Phần thưởng có ý nghĩa; mở khoá đúng | ✓ | nhiệm vụ ẩn, báo cáo — e2e + unit |
| Mastery không tăng vô lý | ✓ | unit (Phase 1) + hiển thị Codex |
| Túi đồ không trùng, vật có công dụng | ✓ | `add()` không trùng; validator đòi `links` hoặc `use` |
| Codex cập nhật theo khám phá, nối thư viện | ✓ | e2e Codex có bài hexachord; link `/graph` |
| Mỗi kết luận truy ngược được chứng cứ | ✓ | điều tra + báo cáo (tham khảo = nguồn chứng cứ) |
| Phân biệt dữ kiện / diễn giải / giai thoại / hư cấu | ✓ | loại chứng cứ, phân loại chứng cứ, báo cáo chặn giai thoại |
| Không có nguồn bịa | ✓ | mọi nguồn là bài thư viện có thật (validator) |
| Chứng cứ dùng lại ở nhiều nhiệm vụ | ✓ | cùng thẻ dùng ở phân loại, kết luận, báo cáo |
| Tranh luận nhiều nhân vật, chọn lập luận | ✓ | `debate` 3 lượt |
| Phiên toà: xác định nguồn, phán quyết có lý do | ✓ | bước chỉ nguồn ở 6 chương |

---

## Phase 8 — Lữ hành vô tận và chơi lại (16/11)

### A. Đã làm (`engine/replay.ts` + giao diện)
- **Độ khó theo năng lực thật**: `levelFrom` — tỉ lệ đúng ngay ở 20 chặng gần nhất (dưới 5 chặng = vừa; ≥ 80 % = khó; ≤ 50 % = dễ). Mức chốt khi chuyến bắt đầu (câu trả lời trong chuyến tính cho chuyến sau). `KIND_WEIGHTS`: chuyến khó nhiều câu "năm nào" và "nguồn nói gì về giai thoại", chuyến dễ nhiều câu "việc gì" và "tác phẩm nào". Nhãn "độ khó …" trên màn chuyến. Không theo cấp nhân vật.
- **Thử thách hôm nay** (`?v=daily`): cùng hạt giống cho cả ngày (theo giờ máy người chơi), ở một chương đã mở, chọn theo ngày; không lặp câu đã hỏi ở Lữ hành vô tận của chương đó; ✓ trên nút khi xong; **chuỗi ngày liên tiếp**.
- **Ôn luyện** (lặp lại giãn cách): câu đố đã giải đến hạn sau 1 / 1 / 2 / 4 ngày tuỳ mức thành thạo yếu nhất của khái niệm liên quan (hết ôn khi Thành thạo); làm lại từ đầu, **không cộng XP**, câu đúng sạch tính vào mức thành thạo (thêm dạng, thêm ngày vận dụng); ôn sai thì đến hạn lại ngay. Ô "Ôn luyện" trên màn tổng của lát cắt.
- **Chơi lại chương** (khi chương đã xong): chặng, bước thoại, phán quyết, nguồn phiên toà của chương làm lại; thẻ, XP, kỹ năng, Codex giữ; chương sau vẫn mở.
- **Hành trình mới+** (khi xong cả 6 chương): cốt truyện, nhiệm vụ, nơi, túi đồ, trí nhớ NPC làm lại; kỹ năng, XP, thẻ, Codex, mức thành thạo, thành tích, câu đố đã giải (không cho XP lần hai) giữ; `save.ngPlus` đếm số lần.
- Lưu: `Endless.recent` (tuỳ chọn), `save.ngPlus` (có kiểm, có gộp).

### D. Kiểm thử
- Vitest 154/154 (thêm: ngưỡng độ khó; chuyến khó có nhiều câu năm/giai thoại hơn chuyến dễ trên 40 chuyến thật; hạt giống ngày ổn định, chương ngày, chuỗi ngày; đến hạn ôn, ôn không cộng XP mà nâng mức, ôn sai không dời đồng hồ; chơi lại chương và NG+ giữ đúng phần cần giữ).
- E2e (Chromium + WebKit, 20/20 phần game): thử thách hôm nay có nhãn độ khó và đếm chặng; chơi lại chương (0/10 chặng, thẻ còn, Chương II vẫn mở); ôn luyện một câu đến hạn (XP không đổi, mức đúng tăng).

### E. Còn tồn tại
- Câu hỏi vô tận vẫn là trắc nghiệm 4 lựa chọn từ kho tiểu sử; chưa trộn câu đố của lát cắt vào chuyến vô tận (sẽ có ý nghĩa khi các chương có lát cắt).
- Thử thách ngày đổi theo nửa đêm giờ máy; hai máy khác múi giờ có thể khác ngày.
- NG+ chưa đổi nội dung (chỉ chơi lại); chưa có "biến thể khó hơn".

### G. Nghiệm thu (Phase 8)
| Tiêu chí | Đạt | Bằng chứng |
|---|---|---|
| Không lặp nội dung quá thường | ✓ | `asked` (≤ 1.500) dùng chung cho chuyến và thử thách ngày; test "câu đã hỏi không lặp" |
| Không có câu hỏi thiếu đáp án | ✓ | test 40 chuyến/thời kỳ đủ 4 lựa chọn khác nhau; câu chỉ lấy từ kho đã kiểm |
| Tiếp tục được sau khi đóng game | ✓ | tiến độ chuyến, ngày, ôn luyện nằm trong save v2 |
| Không mất tiến trình | ✓ | chơi lại / NG+ giữ thẻ, kỹ năng, Codex — unit + e2e |
| Điều chỉnh độ khó theo năng lực thực tế | ✓ | `levelFrom` + `KIND_WEIGHTS`, không dùng cấp |

---

## Phase 9 — Hoàn thiện và kiểm định (16/11)

### A. Đã làm
- **Lỗi L4** (WebKit CI: chạm vào cảnh chờ "đứng yên" tới hết giờ, từng làm đỏ 2 lượt CI): khung cảnh phủ cả màn với hiệu ứng lặp có lúc không bao giờ "stable" dưới tải; chạm đi tiếp trong test dùng `force`, nút đáp án vẫn kiểm đủ. Lặp 42/42 trên WebKit tại máy dưới tải 4 luồng.
- **Ngoại tuyến**: bản thu không tải được thì nút nghe báo "Không phát được bản thu — cần kết nối mạng" (trước im lặng). E2e chặn Wikimedia để kiểm.
- **Bàn phím**: khung hội thoại tự đặt focus ở nút chính (Tiếp / lựa chọn đầu); Esc đóng hội thoại, Sổ hành trình, khung báo cáo. E2e.
- **Giảm chuyển động**: giao diện lát cắt theo `prefers-reduced-motion` như phần game cũ.
- **Tràn khung**: e2e kiểm không tràn ngang ở mỗi địa điểm và mỗi câu đố; chạy thêm ở 360×640 (11/11 test game qua).
- **Hiệu năng**: gói trang game 173 KB thô / 51 KB nén (6 chương + lát cắt + engine); `pool.json` tải lười; ảnh không precache, hai cỡ — chưa cần tách thêm.

### D. Kiểm thử chức năng (tổng hợp, kết quả thật)
| Hạng mục | Kiểm bằng |
|---|---|
| Mở chương, mở nơi | unit (`opened`, `chaptersOpen`), e2e (Chương II còn mở sau khi chơi lại) |
| Hội thoại phân nhánh, không cụt, không vòng kín | `analyzeDialogue` trên mọi hội thoại (unit) + e2e |
| Phụ thuộc nhiệm vụ | `analyzeQuest`, bot engine đi hết tuyến (unit), e2e |
| Hoàn thành câu đố, đáp án tự giải được | `puzzleProblem` trên 77 câu (66 cũ + 13 lát cắt) |
| Phần thưởng, túi đồ, kỹ năng | unit + e2e (Sổ hành trình) |
| Lưu / tải, chuyển đổi v1 → v2 | unit (localStorage giả) + e2e trình duyệt |
| Lữ hành vô tận, thử thách ngày, chơi lại | unit + e2e |
| Liên kết tri thức | mọi `a:` qua validator; `check:links` |

### E. Còn tồn tại
- Chưa thử Safari thật trên iPhone (chỉ WebKit của Playwright).
- Chưa dùng công cụ đo tương phản / ARIA tự động (axe không có trong dự án).
- Trang bầu trời 3D (ngoài game, vùng cấm đụng) thỉnh thoảng làm WebKit điện thoại sập trên CI; lần thử lại qua.

### G. Nghiệm thu (Phase 9 + Definition of Done phần kỹ thuật)
| Tiêu chí | Đạt |
|---|---|
| TypeScript không lỗi mới, build đạt, test đạt | ✓ |
| Không lỗi nghiêm trọng ở luồng chính | ✓ (e2e 2 engine × 3 cỡ màn) |
| Không mất dữ liệu cũ | ✓ (chuyển đổi + bản dự phòng + test) |
| Không nút giả, không nhiệm vụ không hoàn thành được, không hội thoại cụt, không câu đố không giải được | ✓ (validator + e2e chơi trọn) |
| Responsive | ✓ (393, 360, 1280) |

## Phase 7 — Nhân rộng ra Chương II–VI (16/11)
**A. Đã làm.** Năm tuyến điều tra trên cùng engine, mỗi tuyến 4 nơi, 3 nhân vật (1 người thật nói đúng tiểu sử, 2 hư cấu có nhãn), tuyến chính 4 giai đoạn + nhiệm vụ phụ + tranh luận + kết luận bằng chứng cứ:
| Chương | Tuyến (`content/`) | Câu hỏi | Câu đố đặc trưng |
|---|---|---|---|
| II | Thánh lễ của Giáo hoàng Marcellus (`thanh-le.ts`) | Missa Papae Marcelli có "cứu" nhạc nhiều bè ở Trent? | phân biệt lối Palestrina / madrigal, năm loại đối âm Fux, nghe thánh lễ – chanson – madrigal |
| III | Đàn phím được lên dây tốt (`clavier.ts`) | Clavier bình quân có viết cho bình quân 12? | **bass số** (`figured`, Đô và Sol trưởng), bốn hệ thống lên dây |
| IV | Lời đồn ở bệnh viện (`loi-don.ts`) | Salieri có đầu độc Mozart? | xếp các phần hình thức sonata, giọng từng phần, ai đặt tên (Marx) |
| V | Cái tên của một giai điệu (`leitmotif.ts`) | Wagner có đặt ra chữ "leitmotif"? | tuần hoàn / biến đổi chủ đề / leitmotif, Gesamtkunstwerk, nghe Lied – nocturne – nhạc kịch |
| VI | Bài hát trở về (`goin-home.ts`) | Largo Thế giới mới có phải spiritual cổ? | **thang âm** (`scale`: ngũ cung, mixolydian, dorian, thứ hoà thanh), màu điệu thức theo Mazel |

**B. Engine.** `figured`: đáp án tính từ giọng + bè trầm + số (`figuredNotes`, dùng `tools/harmony.ts`); `scale`: tính từ `SCALES`, bảng chọn là nốt của giọng trưởng và thứ cùng tên gộp lại (`scalePalette`) để thang âm không lộ. Cả hai vào `APPLIED` (mastery "áp dụng"); `APPLIED` nay một bản duy nhất ở `progression.ts`. Màn tuyến bỏ câu kết thúc viết cứng cho tuyến Guido.

**C. Nguồn.** Mọi dữ kiện lấy từ bài thư viện đã có (không cần viết bài mới): `giovanni-pierluigi-da-palestrina`, `thanh-le-va-requiem`, `thoi-ky-phuc-hung`, `doi-am-5-loai`, `luat-binh-quan`, `fugue`, `bass-so`, `am-nhac-truyen-thong-trung-hoa`, `antonio-salieri`, `phuong-phap-su-hoc-am-nhac`, `hinh-thuc-sonata`, `bien-doi-chu-de`, `richard-wagner`, `hector-berlioz`, `antonin-dvorak`, `hinh-thuc-nga-phuong-tien`, `am-giai-ngu-cung`. Câu nhìn từ hôm nay ghi "(Lời người biên soạn)".

**D. Nghe.** 15 đoạn thu thật (Commons), mỗi đoạn kiểm độ dài và âm lượng trung bình bằng ffmpeg để không rơi vào chỗ lặng (Tristan lấy 180 – 192 s, Largo 60 – 70 s, Vltava 90 – 100 s).

**E. Kiểm.** Vitest: mỗi tuyến qua `validateChapter`, mọi câu đố tự giải, tuyến chính đi hết bằng engine, mọi nơi ẩn có giai đoạn mở, mọi chứng cứ của câu kết luận đều nhặt được trong tuyến. E2E: nút mở từng tuyến trên bản đồ chương, giải `figured`/`scale` qua giao diện (sai đánh dấu đúng hàng).

**F. Chưa.** Chưa có e2e chơi trọn từng tuyến mới như tuyến Guido; chưa thử Safari thật.

**G. Tiếp.** Tuyến thứ hai cho mỗi chương, hoặc Chương VII.
