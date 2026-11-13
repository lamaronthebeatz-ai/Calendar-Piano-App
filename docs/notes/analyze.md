# Phân tích tác phẩm `/analyze` (score intelligence, 11/2026)

Lamar muốn: đưa bản nhạc vào → nhận diện khoá, nhịp, hoá biểu, dấu hoá bất thường, hợp âm và bè, cấu trúc câu, đoạn tương đồng → nối thư viện; ba lăng kính Cổ điển / Jazz / TK XX; nhãn hiện thẳng trên bản nhạc + văn bản bên dưới đồng bộ. Đầu vào: MusicXML / MXL / MIDI / bản trong trình soạn nhạc; PDF → Lamar gửi Claude chuyển (OMR trong trình duyệt không dùng được, `omr.md`).

## Bộ máy (`src/features/analyze/engine/`, thuần TS, chạy trong Web Worker `analyze.worker.ts` qua `runAnalysis.ts`)
- `extract.ts`: Score (mô hình soạn nhạc) → `AScore` (nốt đã nối dấu nối, `refs` {ev, j, n} để tô màu trong MEI, `orn` = độ "giống nốt trang trí" theo dáng giai điệu, `fermata`).
- `chords.ts`: lát salami → **DP chia đoạn** (Σ điểm × độ dài − giá đổi hợp âm `changeCost`) + **khớp mẫu có cách viết** (Pardo & Birmingham): trọng số = thời gian × phách × khởi âm × bè trầm × (1 − 0,8·orn); hợp âm bảy/chín phải nghe rõ nốt 7 (`seventhShare` 0,2); bè trầm = nốt thấp nhất của 1–2 phách đầu (**Alberti**); tách T → T6 chỉ khi bè trầm mới *giữ được* (không có nốt thấp hơn / bè trầm cũ không quay lại trong 1 phách). Vốn hợp âm Cổ điển `CLASSICAL` (chín át chỉ cho jazz / TK XX).
- `key.ts`: Viterbi 24 giọng (hợp âm hợp giọng + át → chủ + tương quan Krumhansl–Kessler cửa sổ 2 ô; đổi giọng giá `change` 6, giọng gần rẻ hơn; ưu tiên hoá biểu). Hợp âm át phụ dẫn vào bậc của giọng không bị phạt (ly điệu, không phải chuyển giọng). `foldTonicizations`: vùng giọng ≤ 960 tick kẹp giữa cùng một giọng → **ly điệu**, gộp về giọng chính. `respell` (index.ts): tên giọng theo cách viết nốt của bản nhạc (La♭ thứ, không Sol♯ thứ).
- `roman.ts`: đọc bậc theo **chữ** (F♯ trong Đô = ♯IV). Nhãn Nga – Xô viết theo bảng 1.1 tiểu luận Scriabin (T/S/D + thể đảo, K64, D7, II, VI, III, VII7, II♯3 / II7♯3 = át của át, D7→x, VII7→x, II♭6, IV♯6♭3 / II43♯3♭5 / IV♯65♭3) + số La Mã quốc tế (V65, V7/V, N6, Ger65, Cad64).
- `nct.ts` (nốt lướt, thêu, trễ, dựa, thoát, đón, pedal — tên như bài `not-ngoai-hop-am`), `accidentals.ts` (lý do của từng dấu hoá khác hoá biểu), `cadence.ts` (PAC/IAC/HC/DC/PC ở chỗ nhạc dừng), `report.ts` (văn bản theo khối; `Run` có `concept` → bài thư viện, `bars` → tô ô), `symbols.ts` (tên hợp âm chữ).
- `../links.ts` `THEORY`: khái niệm → slug; `check-links` kiểm từng slug.

## Đo độ đúng (bắt buộc chạy lại khi đổi bộ máy)
- `python3 scripts/analyze/export_gt.py` (venv có music21 — wheel ở gốc repo) → thư mục ngoài repo: 19 hợp xướng Bach + phân tích chuyên gia (rntxt Tymoczko và cộng sự trong kho music21; 011 bị loại: kho có cả chương cantata). `node scripts/analyze/eval.mjs <dir> [--verbose --key|--sec|--chord] [--opts '{...}']` tự dò dịch giọng / lệch ô.
- **Mốc 11/2026:** gốc hợp âm 83,9% · đủ nốt 78% · giọng 77,5% · gốc + thể đảo 78% · át phụ 36/90. Câu kết: 98/127 dấu lưu có câu kết. Giọng kẹt ~80% vì người phân tích ghi cả đổi giọng ngắn — chênh nhau ở ranh ly điệu / chuyển giọng là chuyện quan điểm.
- `node scripts/analyze/run.mjs <xml>` in văn bản; `chords.mjs <xml> [n]` in từng hợp âm.

## Trang (`AnalyzePage.tsx`, `analyze.css`)
- `/analyze`: bản mẫu (`samples.ts`, `public/analyze/*.musicxml` — từ kho mẫu music21, tác phẩm phạm vi công cộng; không precache), "Bản của bạn" (`store.ts`, `secureStore('analyze:scores')`, trong sao lưu `analyses`), "Từ trình soạn nhạc" (`/analyze/c-<id>`, đọc `compose:scores`). Nhập `.musicxml/.xml/.mxl/.mid` (`midi.ts`: lượng tử móc kép / liên ba, tách khuông ở Đô giữa).
- `/analyze/:id`: lăng kính, cách ghi (Nga – Xô viết / Quốc tế / Tên hợp âm), lớp (hợp âm, giọng, câu kết, dấu hoá bất thường cam, nốt ngoài hợp âm xanh). **`annotate.ts` ghi phân tích vào MEI** trước khi Verovio khắc: `<harm xml:id="ah{i}" place="below">` ở khuông thấp nhất, `<dir>` cho giọng (`ak`), ly điệu (`at`), câu kết (`ac`); `color` trên `<note>`. Bấm nhãn: `closest('.harm, .dir')` (tspan bên trong có data-id riêng!) → thẻ `PickCard` (`explain.ts`). Văn bản: ô nhịp là nút tô `.measure.is-focus` + cuộn; bấm ô trên bản nhạc → cuộn văn bản tới chỗ nhắc ô đó.
- Trình soạn nhạc: nút "Phân tích bản này" (bảng ⋯ → Xuất – nhập). Xuất MIDI nay ghi nhịp độ thật, số chỉ nhịp, hoá biểu (trước cố định 120).
- Test: `engine.test.ts` (cadence, thể đảo, K64, II♯3, D7→IV, Napoli, sáu tăng Đức, tìm giọng, chuyển giọng), `midi.test.ts`, e2e `tests/analyze.spec.ts`, smoke 2 trang.
