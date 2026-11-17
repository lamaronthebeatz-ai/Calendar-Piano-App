# Giải phức điệu — hồ sơ luật và bộ giải (kiểm toán 17/11/2026)

Nguồn duy nhất: Phạm Tú Hương, *Phức điệu nghiêm khắc*, Nhạc viện Hà Nội 1991 (theo Taneyev). PDF Lamar gửi: tr. in = trang PDF − 2. Bài thư viện: `giai-dieu-phuc-dieu-nghiem-khac`, `doi-vi-don-gian-hai-be`, `doi-vi-chuyen-dong-chieu-doc`. Không lấy luật từ Fux/Palestrina/species.

## Bảng luật (cột "Mã" = `RuleId` trong `rules.ts`; B = bắt buộc, K = khuyến nghị/ghi chú, X = cần xác minh)
| Luật | Nguồn | Loại | Mã |
|---|---|---|---|
| Không nửa cung cromatic trong giai điệu | tr. 6 "không được sử dụng" | B | `leap` (`melodicOk`) — **lỗi cũ: trước 17/11 cho qua** |
| Âm nguyên và âm biến "phải ở xa nhau" | tr. 6, Thí dụ 9b "Không nên" | K (khoảng cách không định lượng; cách một nốt = ghi chú) | `chromatic-near` |
| Cấm nhảy quãng nghịch (7, tăng, giảm) và rộng hơn quãng 8 | tr. 6 | B | `leap` |
| Sau bước nhảy quãng thuận phải phản hồi ngược hướng; quãng 3 là bước nhảy | tr. 6 | B (**quãng 3 trước là K**) | `leap-response`, `leap3-response` |
| Tránh hai bước nhảy liên tiếp cùng hướng | tr. 6 "Tránh" | K | `two-leaps` |
| Âm hưởng ba cung khi đi liền bậc | tr. 7 "không nên" | K | `tritone-line` |
| Không nhắc một nốt nhiều lần | tr. 7 "không sử dụng" + Thí dụ 12 "Không nên" | B cho 3 lần liền (X: chữ và thí dụ lệch nhau), K cho 2 | `repeat3`, `repeat` |
| Mô tiến, nhiều dấu lặng | tr. 7 "Tránh", "không nên" | K — chưa cài (bè đối vị không có dấu lặng) | — |
| Không đảo phách, nghịch phách; nối nốt: trắng → tròn được, ngắn → dài không | tr. 8, Thí dụ 15 | B | `seg-place`, `tie` |
| Đổi sang nốt ngắn hơn ở phách mạnh phải chuẩn bị bằng nốt lưu | tr. 8 "không được thay đổi đột ngột, nhất là ở phách mạnh" | B ở phách đầu ô; phách khác: X (chưa cài) | `rhythm-change` |
| Tiết tấu hai bè giống nhau kéo dài | tr. 8–9 "Không nên" | K | `same-rhythm` |
| Song song, cùng hướng | tr. 9 "nên hạn chế" | K | `hidden` |
| Quãng hoàn toàn song song (cùng hướng) | tr. 9–10 "bị cấm" | B. **Trước 17/11 code cấm cả ngược hướng** — nay ngược hướng chỉ là `perfects` | `parallel` |
| Không dùng nhiều quãng thuận hoàn toàn liền nhau | tr. 9 "không được phép" | B từ 3 quãng (X: "nhiều" không định lượng), K cho 2 | `perfects3`, `perfects` |
| Quãng hoàn toàn chủ yếu ở mở đầu, kết; ở giữa nên ở phách yếu; đồng âm gây ngưng đọng | tr. 9 "chủ yếu", "nên" | K. **`final` trước là B** | `first`, `final`, `strong-perfect`, `unison` |
| Quãng nghịch: 2, 7, tăng, giảm, quãng 4 đúng | tr. 10 | định nghĩa (`interval`) | — |
| Trước và sau quãng nghịch là quãng thuận; không hai quãng nghịch liền nhau | tr. 10 | B | trong `dis-strong`/`dis-weak` |
| Phách mạnh: nốt lưu — chuẩn bị (≥ nốt lưu, không nốt đen), giải quyết xuống liền bậc | tr. 10 | B (nốt đen chuẩn bị: tuỳ chọn thầy `quarterPrep`) | `dis-strong` |
| Nốt chuẩn bị: chỉ cần thuận – nghịch – thuận (vào thuận, quãng ngay trước thuận) | tr. 10 (Lamar chốt 17/11) | B | `suspension()` |
| Vị trí nốt nghịch: 1 dưới · 3 trên/dưới · 6 trên · 8 dưới/trên · 10, 13 trên | tr. 11 sơ đồ 2 | B | `suspension()` |
| Nốt lưu ở các quãng nghịch ngoài sơ đồ 2 (quãng 5 giảm, quãng 12 giảm…) | sơ đồ 2 không nhắc | X — đang cho phép | — |
| Bè tự do không đánh nốt mới trước khi nốt lưu giải quyết | suy từ định nghĩa (nghịch phải giải quyết bằng chính nốt nghịch đi xuống, không hai quãng nghịch liền) | B | `suspension()` |
| Bè tự do nhảy đúng lúc giải quyết, miễn thuận | tr. 12, Thí dụ 30 | được phép | — |
| Nốt nghịch nhảy sang nốt thuận rồi mới xuống liền bậc | tr. 13, Thí dụ 31 (nốt nhảy là nốt đen ở cả hai thí dụ) | được phép (nốt đen: theo thí dụ) | `suspension()` |
| Giải quyết lướt khi nốt giải quyết rơi vào quãng nghịch ở biến thể | bài chuyển động chiều dọc, nguyên tắc 3 | được phép | `suspension()` |
| Phách nhẹ: nốt lướt, thêu (thường thêu dưới), sớm, thoát (= thêu dưới xuống quãng 3) | tr. 11–12 | B (phải là một trong các dạng) | `dis-weak`; thêu trên = `upper-neighbor` K |
| Nốt nghịch phách nhẹ: ở phách chỉ nốt lướt, dài hơn nốt đen chỉ nốt trắng lướt | chỉ thấy trong Thí dụ 25–28, không thành chữ | K (**trước là B**) | `weak-form` |
| Cả hai bè cùng đánh nốt mới vào quãng nghịch ở phách nhẹ | không nhắc | K nếu một bè thành dạng hợp lệ (**trước là B**) | `dis-both` |
| ✱ phải nghịch; ngoài ✱ không nghịch ở phách mạnh | quy ước đề của thầy (không phải luật sách) | B | `star`, `star-extra` |
| Biến thể: mọi bản đều đúng luật đối vị đơn giản; chéo bè = vượt giới hạn Iv | bài chuyển động chiều dọc | B | `crossing` + mọi luật trên ở từng bản |

## Bộ giải (`solver.ts`)
- **Miền tìm kiếm** (`domainOf`, ghi kèm mọi kết luận vô nghiệm): bè đối vị bắt đầu ở 0, không dấu lặng, không nốt móc đơn (sách cho móc đơn làm nốt lướt/thêu — chưa có), trường độ 1/2/3/4/6/8 phách đen, nốt của giọng + biến âm có trong đề, phía bè đối vị xa nhất 2 quãng 8 (`SPAN = 14`) — phía kia chặn đúng bằng luật chéo bè.
- **Ba trạng thái** (`SolveResult.status`): `valid` = có lời giải qua cả `check` lẫn `verify.ts`; `unsat` = duyệt hết miền (hoặc `starCheck` chứng minh một ✱ bất khả); `unknown` = hết giờ, hoặc hai bộ kiểm bất đồng (`disputed` > 0, không bao giờ thành đáp án). Trang hiện "Không có lời giải đúng luật" chỉ với `unsat`, kèm miền tìm kiếm.
- **Bộ kiểm độc lập** `verify.ts`: viết lại mọi luật B trên lưới phách đen, không dùng `rules.ts`. Test đổi từng nốt quanh lời giải của 6 đề sinh ra: hai bộ kiểm phải cùng kết luận.
- **Nhớ trạng thái chết**: khoá = thời điểm + 3 nốt cuối (bước + dấu hoá) + trường độ đoạn cuối; đúng vì luật B nhìn lùi tối đa 3 nốt (phản hồi bước nhảy, nhắc 3 lần, giải quyết hai bước). Thêm luật nhìn xa hơn thì phải nới khoá.
- **`starCheck`** chỉ dùng điều kiện cần (không xét cách giải quyết, không xét chỗ bắt đầu chuẩn bị) — trước 17/11 nó đòi giải quyết thuận ở mọi bản và chuẩn bị trong một ô, có thể báo vô nghiệm sai.
- Nút Giải chạy 15 s; hết giờ → "Chưa kết luận" + nút "Tìm tiếp (thêm 60 giây)". `check(…, from)` chỉ xét lại quanh 3 nốt cuối khi tìm (lời giải cuối vẫn kiểm toàn bài, hai bộ kiểm).
- `hints`: `dead` chỉ khi tìm hết; `rescue`: phương án nới (nốt đen chuẩn bị, bỏ một ✱, ít lỗi nhất) luôn ghi rõ điều đã đổi, không bao giờ là đáp án của đề gốc.

## Dạng bài (ô "Dạng bài" trên trang, `Saved.form`)
| Dạng | Biến thể dựng thế nào | Nguồn |
|---|---|---|
| `doc` Chuyển động chiều dọc | `shift` (Iv), chọn các cách chia I + II | tr. 13–30 |
| `ngang` Chuyển động chiều ngang | `ih` = độ trễ của bè I (phách đen); Ih theo ô, "−" = bè I vào muộn; nửa ô chỉ ở nhịp chẵn | tr. 30–33 |
| `ngang-doc` Ngang – dọc | `ih` + `shift {I: Iv}` + `swap` (bè đối vị nằm giữa hai bè canon giả) | tr. 33–35 |
| `dao-anh` Đảo ảnh | `mirror`: soi cả hai bè quanh trục (trưởng bậc II, thứ bậc IV — Đô trưởng và La thứ cùng trục Rê), nốt biến soi thành biến ngược; hai bè đổi chỗ | tr. 35–36 |
- Mọi dạng quy về một luật: mỗi bản (NT + BT) đúng đối vị đơn giản; ✱ chỉ thuộc NT. `isOriginal(v)` thay cho "shift = 0" (Ih/đảo ảnh có shift 0 mà không phải NT).
- Biến thể dời thời gian chỉ xét chỗ hai bè cùng vang; nốt chuẩn bị phải vào lúc bè kia đang vang (cả `rules.ts` lẫn `verify.ts`). `starCheck` bỏ qua biến thể có `ih` (ghép ✱ với nốt khác của đề) — ít điều kiện hơn nên vẫn chặt chẽ.
- Bài mẫu: Ih −1 giải được (~5,5 s node); ngang – dọc (Ih −1, Iv −7) và đảo ảnh: vô nghiệm đã chứng minh.
- Sách: đảo ảnh làm quãng 2, 7 không dùng được ở phách mạnh — máy tự suy ra (test).
- Máy sinh đề vẫn chỉ sinh dạng `doc`.

## Ba – bốn bè (`multi.ts`, `MultiPanel.tsx`, `multi.worker.ts`; dạng `ba-be`, `tam-trung`, `bon-be`, `tu-trung`)
- Luật (tr. 37–45): mỗi cặp của mỗi bản theo đối vị đơn giản (`check` với `noLine` + `pair`), cộng: quãng 4 thuận ở cặp trên (`pair.fourthOk`: ba bè I–II; bốn bè I–II, II–III); cùng hướng vào quãng hoàn toàn khi bè trên nhảy cấm ở cặp ngoài (`pair.outer` → `hidden-hard`); đối vị phức tạp: cặp nào là cặp ngoài ở một bản nào đó thì cấm hẳn cùng hướng vào quãng hoàn toàn (`hiddenHard`, theo chữ "không được" ở BT1, BT2, tam trùng tr. 41–43). Các lời dặn riêng từng biến thể (số 3 cặp trên phải/không phải chuẩn bị, không song song quãng 4 vì thành quãng 5…) tự suy ra khi kiểm từng bản.
- Biến thể: `MVersion {steps, order}`; `octaveVersions(n)` = mọi hoán vị bằng quãng 8 (bè dời 7 × đổi hạng) — tam trùng 5, tứ trùng 23 (tick chọn). Chưa có Iv tự chọn từng cặp (Thí dụ 77–78: Iv1 = −7, Iv2 = 7…).
- Tìm chung mọi bè tự do: luôn kéo bè đang ngắn nhất; nhớ trạng thái chết theo 3 nốt cuối của từng bè; cấm chéo bè ngay khi sinh nước; thứ tự thử ưu tiên quãng bán thuận, khoảng 3–6 với bè cạnh (chỉ là thứ tự). Kiểm độc lập `mverify` (verify.ts từng cặp + luật giai điệu từng bè).
- **Chưa cài (ghi trong miền tìm kiếm):** "chồng âm thuận hoàn toàn", hợp âm đảo 1 tránh ở kết (khuyến nghị). Chưa chấm bài tự viết cho ba – bốn bè.
- Đo (node): ba bè 4 ô < 0,1 s, bốn bè 0,4 s, tứ trùng 23 bản 3,2 s. Đúng luật mà xấu vẫn nhận (vd. bốn bè cùng tên nốt) — test.
- Hiển thị: mỗi bản hai khuông (hai bè trên / các bè dưới), mỗi khuông tự xuống dòng nên không thẳng hàng theo ô.

## Mô phỏng – canon (`canon.ts`, `CanonPanel.tsx`, `canon.worker.ts`; dạng `mo-phong`, `canon-vo-tan`, `canon-mo-tien`, `canon-ba-be`; tr. 46–63)
- Một hình chung: bè P = đoạn A (đề) + phần máy viết; bè R = bản sao của P vào sau `delay`, dời `steps`; mô phỏng đơn giản chép riêng A, có thể đảo ảnh / phóng to / thu nhỏ / ngược hướng (`transformLine`); canon chép cả P và lặp `cycles` chu kỳ, mô tiến thêm `step` mỗi chu kỳ. Ba bè: hai R. Thứ tự bè trên – dưới suy từ quãng (cao hơn ở trên).
- Kiểm: kết cấu dựng lại từ P rồi đưa vào `mcheck` (mọi cặp, quãng 4 thuận ở cặp trên của ba bè); trong lúc tìm chỉ xét phần đã biết liền từ đầu (P tới h, R tới delay + h); khi P xong xét đủ mọi chu kỳ, rồi `mverify`. `MProblem.ends`: các bè dừng lệch nhau, mỗi cặp chỉ xét đoạn hai bè cùng vang.
- Lỗi đã sửa nhờ bộ kiểm độc lập (17/11): nốt nghịch sát chỗ một bè dừng bị `rules.ts` hoãn xét ("later") mãi — nay hết đoạn chung là xét luôn.
- Loại I / loại II không phải hai thuật toán: chọn "Vào sau" bằng A là loại I, sớm hơn là loại II. 6 cách xuất phát của canon ba bè = chọn quãng của R1, R2 (trên/dưới).
- **Cần xác minh (X):** dời cao độ theo giọng (mặc định) hay đúng quãng (ô tick) — Thí dụ 101 có bè mang hoá biểu khác (đúng quãng), chuỗi mô tiến chưa rõ. **Chưa có:** mô phỏng ba bè có một bè tự do (tr. 55), mô phỏng tiết tấu (tr. 48, R chỉ giữ tiết tấu), đoạn kết riêng (các bè dừng lần lượt), thu nhỏ ra nốt móc đơn. Canon nhiều chu kỳ không dùng bảng nhớ trạng thái chết (chu kỳ sau mang cả P trở lại) nên có thể chậm.
- Đo (node, A 2 ô 2/2): mô phỏng < 10 ms, vô tận loại I < 10 ms, mô tiến 3 chu kỳ 0,8 s, canon ba bè 1,9 s.

## Bổ sung 17/11 (đợt 4)
- Ba – bốn bè: "Biến thể tự chọn" (`MultiPanel`, `custom`): mỗi biến thể chọn độ dời từng bè + thứ tự; trang hiện Iv từng cặp theo cách ghi sách (`pairIv`: bè trên lên +, bè dưới lên −; Iv1 + Iv2 = Iv3).
- `canon.ts` tổng quát: ngoài phần tiếp của P còn các đoạn máy viết (`plan(spec).items`): bè R "chỉ nhắc tiết tấu" (`transform: 'rhythm'`, cao độ tự do, trường độ khoá theo A), bè tự do thứ ba (`extraFree`, mô phỏng ba bè tr. 55), đoạn kết (`coda`, mọi bè cùng dừng). Luôn kéo đoạn đang ngắn nhất; đoạn kết chờ phần nó nối vào viết xong. **Lỗi đã sửa:** khi P xong mà kết cấu vẫn dựng một chu kỳ thì đoạn kết không được kiểm từng bước (mọi lỗi dồn tới cuối, tìm mãi không ra) — `judge` dựng đủ chu kỳ ngay khi P xong.
- Chấm bài tự viết cho ba – bốn bè và canon: trình nhập có ô cho từng bè học viên viết (`Saved.extra`, panel báo `onSlots` gồm tên + chỗ bắt đầu); `gradeMulti`, `gradeCanon` (kiểm thêm bè tiết tấu giữ đúng tiết tấu A, báo đoạn chưa viết xong); thẻ `GradeCard`.
- Xếp hạng: ba – bốn bè thử trước âm vực "nhà" của từng bè (cách bè đề ~ quãng 5 mỗi bè) — chỉ là thứ tự; `msolveMany`/`canonSolveMany` tìm dư rồi xếp theo luật mềm.
- **Móc xích nốt nghịch (tr. 38)**: luật từng cặp vốn đã cho — nốt giải quyết nghịch với bè thứ ba thì quãng nghịch mới được xét như nốt lưu của bè kia ở cặp đó (chuẩn bị thuận, giải quyết xuống). Không nới luật; test trong `multi.test.ts`.

## Trình bày dạng Ih (17/11, Lamar: "ba khuông I, I′, II phải xếp đều song song từng ô nhịp như ví dụ trong sách")
- `ScoreSvg` nhận `staves` (nhiều khuông một hàng, vạch nhịp chạy suốt, nhãn bè bên trái, chiều cao mỗi khuông chỉ chừa chỗ số quãng khi có); không truyền `staves` thì như cũ.
- `Versions` trong `CounterpointPage` thay mọi chỗ liệt kê biến thể: đúng một NT + một BT có `ih` (dạng Ih, ngang – dọc) → `IhScore`: một tổng phổ I · I′ · II (hoặc I · II · II′ khi bè II vào muộn), xếp khuông theo âm vực, số quãng NT dưới khuông II, của BT dưới khuông chép; ba nút nghe Nguyên thể / Biến thể / Cả ba bè (`stepsOf` nhận cả mảng bè).

## Phần IV hình thức (`forms.ts`, `FormPanel.tsx`, `forms.worker.ts`; dạng `hai-doan`, `hai-doan-mo-phong`, `ba-doan`; tr. 64–68)
- Giáo trình chỉ tả cấu trúc, không có luật riêng → máy dựng từng đoạn bằng bộ giải chương trước, viết câu nối, rồi kiểm **cả bài** bằng `mcheck` + `mverify` (luật ba – bốn bè).
- Hai đoạn tương phản: đoạn 1 = `msolve` nguyên thể với đúng một biến thể đổi chỗ quãng 8 được tick (để đoạn 2 hợp lệ); đoạn 2 = biến thể đó **xếp theo âm vực** (`versionByRegister`: dòng trên cùng chơi bè mà biến thể đặt lên trên). Ba đoạn: đoạn 2 = mô phỏng (`kind: 'simple'`, thủ pháp chọn) trên ≤ 2 ô đầu của đề, đoạn 3 = biến thể của đoạn 1. Hai đoạn mô phỏng: đoạn 1 = canon ba bè (`preset('ba-be-1')`) trên đề, đoạn 2 = mô phỏng ba bè với thủ pháp chọn; mọi đoạn canon có đoạn kết 1 ô (sách: đoạn nhạc kết khi mọi bè cùng dừng). Chưa chuyển giọng ở đoạn 2.
- Câu nối: `MProblem.head`/`tail` — mỗi bè tự do giữa đầu cố định và đuôi cố định (đuôi bắt đầu muộn với bè mô phỏng vào sau → bè đó đi tự do tới lúc vào). Nước đi chạm đuôi gắn luôn cả đuôi (bẫy đã gặp: gắn muộn làm máy thử mọi câu nối của các bè khác trước khi thấy chỗ nối hỏng, 30 s → 1 s; lỗi hay gặp là `rhythm-change` ở đầu ô).
- `MProblem.fixed`: vùng đề (cantus firmus) trong bài dài không bị chấm luật giai điệu bè tự do (đề E–F–D–C phạm `leap3-response`); luật giữa các cặp vẫn chấm.
- Trạng thái: đoạn nào `unsat`/`unknown` thì cả bài như thế kèm lý do (`why`); các đoạn có lời giải mà câu nối không ghép được với các lời giải đã thử → `unknown` (không phải chứng minh). Mỗi lần thử câu nối tối đa ~1/10 thời gian.
- Chưa chấm bài tự viết cho Phần IV.

## Test
`src/features/counterpoint/counterpoint.test.ts` (31 test) + `multi.test.ts` (8 test) + `canon.test.ts` (7 test) + `forms.test.ts` (4 test: ba hình thức qua hai bộ kiểm; phóng to phạm luật ngay trong A → `unsat` có lý do): từng luật (đúng/sai/biên/ngoại lệ), đúng ở NT sai ở BT, vô nghiệm (bài mẫu: `unsat` sau ~2 s), hết giờ → `unknown`, nhiều seed, `starCheck` không báo sai trên đề sinh ra, đối chiếu hai bộ kiểm. E2E: `tests/counterpoint.spec.ts`.

## Còn mở (X)
Nốt lưu ở quãng nghịch ngoài sơ đồ 2; "nhiều" quãng hoàn toàn/nhắc nốt là bao nhiêu; đổi trường độ ở phách không phải đầu ô; quan hệ đối chéo giữa hai bè; móc đơn và dấu lặng trong bè đối vị. Cần hỏi Lamar/thầy.
