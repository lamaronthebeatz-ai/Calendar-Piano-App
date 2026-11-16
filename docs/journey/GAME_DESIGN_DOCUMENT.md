# Hành trình — Maximum Edition: Tài liệu thiết kế game

## 1. Ba trải nghiệm, một vòng chơi
Mỗi phiên chơi đi qua cùng một vòng, ở mọi quy mô (một nhiệm vụ, một chương):

**Khám phá** (đi tới nơi, gặp người, thấy vật) → **Vấn đề** (ai đó cần một điều, một bản thảo khó hiểu, một lời đồn) → **Thực hành** (đọc ký âm, nghe, hát âm tiết, ghép bè — câu đố là *công cụ giải vấn đề*, không phải bài kiểm tra) → **Chứng cứ** (thu, phân loại, đối chiếu) → **Kết luận** (chọn lời giải *và* chứng cứ đỡ nó) → **Mở ra** (nơi mới, người mới, mục Codex, kỹ năng).

Luật chống "trắc nghiệm có bản đồ trang trí": một câu đố chỉ được đưa vào nếu kết quả của nó **làm thay đổi thế giới** (mở cửa, đổi thái độ NPC, thêm chứng cứ, rẽ nhánh) và nếu nó buộc *vận dụng* chứ không chỉ *nhớ*.

Giữ các quyết định đã có của Lamar: không có thua; đáp án nằm trong thư viện (nút "Đọc bài", Back quay lại đúng chỗ); lời thoại theo giọng thời kỳ; tình tiết bịa có nhãn; ảnh, nhạc thật của thời kỳ.

## 2. Hệ thống

| Hệ thống | Người chơi thấy gì |
|---|---|
| Thế giới | Bản đồ cổ của chương với nhiều **địa điểm** (không chỉ một tuyến); nơi ẩn hiện ra khi có manh mối; trong mỗi nơi có người và **vật tương tác** (giá sách, bản thảo, đàn monochord) |
| Hội thoại | Lựa chọn thật: hỏi chủ đề nào, trình chứng cứ nào, tin ai. NPC nhớ đã gặp, đã bàn gì, nhiệm vụ nào xong. Nhãn từng dòng: trích nguyên văn / lời dựng lại / ✦ hư cấu |
| Nhiệm vụ | Nhật ký nhiệm vụ: chính, phụ, điều tra, ẩn; nhiều giai đoạn; rẽ nhánh theo lựa chọn |
| Câu đố | 13 dạng (DATA_MODEL §7); gợi ý từng bậc; giải thích luôn hiện; sai thì phản hồi riêng cho lỗi thường gặp |
| Tiến trình | XP vừa phải; 6 nhánh kỹ năng (Lịch sử, Lý thuyết, Nghe, Phân tích bản nhạc, Phê bình nguồn, Tư duy nghiên cứu); mastery 4 bậc theo từng khái niệm |
| Túi đồ, Sưu tập | Tài liệu, bản thảo, nhạc cụ, hồ sơ nhạc sĩ, tác phẩm, thẻ chứng cứ — mỗi món có công dụng hoặc mở mục Codex |
| Codex | Bách khoa trong game = những gì người chơi đã khám phá trong mạng tri thức của app (người, tác phẩm, khái niệm, nhạc cụ, thể loại, thời kỳ, trường phái, chứng cứ), mở thẳng bài thư viện / `/graph` |
| Điều tra học thuật | Câu hỏi → tài liệu → so sánh → mâu thuẫn → độ tin cậy → kết luận; tranh luận nhiều nhân vật; phiên toà sử gia nâng cấp; báo cáo nghiên cứu ngắn xuất sang Bàn làm việc `/research` |

## 3. Kỹ năng và phần thưởng
- XP: câu đố 10–40 theo độ khó (trừ khi dùng gợi ý), nhiệm vụ 50–150, khám phá nơi 5, điều tra 100–200. Câu dễ (độ khó 1) lặp lại không cho XP.
- Cấp nhân vật chỉ là thước đo đã đi bao xa; **mở nội dung theo kỹ năng và chứng cứ**, không theo cấp (để không ép "cày").
- Nhánh kỹ năng: mỗi nhánh 5 bậc; bậc mở bằng việc làm cụ thể (vd. Phê bình nguồn 2: phân loại đúng 5 chứng cứ sơ cấp / thứ cấp ở 2 chương). Bậc cao mở hội thoại chuyên sâu, câu đố khó, nơi ẩn.
- Thành tích có nghĩa: "Người chép nhạc" (đọc 10 neume không gợi ý), "Không tin lời đồn" (phán đúng mọi giai thoại một phiên toà)…

## 4. Lát cắt dọc: Chương I — "Bản thảo thất lạc"
Tuyến mới *thêm vào* Chương I (tuyến 10 cảnh cũ giữ nguyên và vẫn là đường chính tới Chương II). Mở khi người chơi tới Sankt Gallen (cảnh neume) hoặc ngay nếu đã qua Chương I.

**Nhân vật**
- **Thầy Wolfram** (ca viên, người chép sách hát) và **Thầy quản thư** — *hư cấu*, đã có trong Ch. I (cảnh Sankt Gallen, Pomposa); quản thư dẫn chuyện. Thầy Anselm (Bourgogne) có thể xuất hiện lại.
- **Sơ Adela** — *hư cấu*, người chép nhạc trẻ, nghi ngờ bản thảo lạ.
- **Guido d'Arezzo** — *lịch sử* (`a:guido-d-arezzo`): chỉ nói điều có trong tiểu sử/bài thư viện; câu trích (vd. lời tựa *Prologus in antiphonarium*) chỉ dùng khi có nguồn nguyên văn — nếu chưa có, dùng lời dựng lại có nhãn.
- **Giáo sĩ Theodoric** — *hư cấu*, ca trưởng bảo thủ, tin "Guido phát minh cả bàn tay" (giai thoại có trong tiểu sử Guido: chưa chắc).

**Chuỗi nhiệm vụ** (main, 11 bước như kế hoạch, gom thành 5 giai đoạn)
| Giai đoạn | Nơi | Việc | Câu đố (dạng) | Mở ra |
|---|---|---|---|---|
| 1. Bản thảo lạ | Thư viện tu viện | Tìm bản thảo trên giá (vật tương tác), nói với Thầy quản thư | — | Nhiệm vụ, Codex `a:ky-am-binh-ca-gregorian` |
| 2. Người chép nhạc | Phòng chép sách | Adela chỉ neume không dòng kẻ; so với neume trên dòng | **classify** (neume không dòng / trên dòng) · **neume** (đọc 4 nốt vuông trên khoá Đô) | Chứng cứ "hai lối ghi", kỹ năng Lý thuyết |
| 3. Thầy dạy hát | Arezzo | Guido và cách dạy hát; giai điệu *Ut queant laxis* | **aural** (nghe câu đầu mỗi dòng: câu nào bắt đầu cao hơn) · **blank** (điền âm tiết ut–re–mi–fa–sol–la) · **hexachord** (đặt âm tiết cho một nốt trong hexachord naturale/durum) | Vật phẩm "Bàn tay vẽ trên giấy da", Codex hexachord |
| 4. Hai tài liệu | Thư viện + nhà ca trưởng | So bản thảo với một bản chép khác: lời đồn "Guido phát minh bàn tay" | **order** (niên đại: neume không dòng → dòng kẻ màu → khuông 4 dòng — theo `lich-su-ky-am`) · **classify** chứng cứ (sơ cấp / thứ cấp / giai thoại) · **match** (tác phẩm của Guido ↔ nội dung) | 3–4 thẻ chứng cứ |
| 5. Kết luận | Phòng họp tu viện | Tranh luận Theodoric – Adela; người chơi chọn kết luận *và* chứng cứ | **investigation** | Kết thúc tuyến, mở nhiệm vụ phụ, thành tích |

**Nhiệm vụ phụ**: "Cung thánh vịnh" (8 điệu thức, `tam-dieu-thuc-va-giong-thanh-vinh`: nghe một cung, chọn điệu thức — aural); "Hai bè song song" (organum song song quãng 4/5 — **counterpoint** dạng đơn giản dùng `counterpoint/model.ts interval`).

**Nghe**: ưu tiên bản thu *Ut queant laxis* / thánh ca của người hát thật trên Commons (cùng nguồn với `music.ts`); quãng/điệu thức có thể dùng sampler sẵn có (`theory/audio.ts`, sáo/organ không có → chọn nhạc cụ trung tính và ghi "âm minh hoạ") — **chờ Lamar chốt** (MIGRATION_PLAN §6.4).

**Ký âm**: neume vuông vẽ bằng SVG riêng (khuông 4 dòng đỏ, khoá Đô/Fa, punctum, virga, podatus, clivis) — không dùng Verovio / khuông 5 dòng.

**Kiểm chứng trước khi viết**: mọi dữ kiện của tuyến phải có trong `guido-d-arezzo` (tiểu sử chi tiết), `lich-su-ky-am`, `ky-am-binh-ca-gregorian`, `thanh-ca-gregorian`, `basics` (Ut queant laxis), `tam-dieu-thuc-va-giong-thanh-vinh`; điều gì thư viện chưa có → bổ sung bài có nguồn trước, hoặc bỏ.

**Nghiệm thu lát cắt**: đúng danh sách ở kế hoạch §VI.3, chứng minh bằng e2e (desktop + điện thoại, Chromium + WebKit) và bot sweep.

## 5. Sáu chương sau lát cắt
Mỗi chương nhận bộ gameplay đặc trưng theo kế hoạch Phase 7, dựng trên cùng engine; chương cũ giữ tuyến hiện có làm xương sống, thêm tuyến điều tra + câu đố đặc trưng (Phục hưng: ghép bè mô phỏng; Baroque: bass số `tools/harmony.ts`; Cổ điển: sắp xếp sonata, `analyze/engine` hình thức; Lãng mạn: leitmotif nghe; Dân tộc: thang âm dân gian). Từng chương có danh sách nguồn kiểm chứng riêng trước khi viết.

## 6. Ngoài phạm vi (giữ để không phình)
- Không sinh hội thoại bằng AI lúc chơi.
- Không thử thách hát vào micro ở lát cắt (có hạ tầng nhận cao độ nhưng micro trên CI chập chờn) — cân nhắc sau.
- Không nhiều người chơi, không bảng xếp hạng.
