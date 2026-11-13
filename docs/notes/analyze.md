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
- **Trần của mô hình luật (13/11):** lưới chordW × profW × sigBonus (`--opts`) — mặc định 1,6 / 2,2 / 0,35 đã tốt nhất (giọng 77,1%). Đẩy cao hơn cần mô hình học từ dữ liệu + bộ đáp án lớn (When in Rome, ABC Beethoven, DCML Mozart) — chưa làm.
- `node scripts/analyze/run.mjs <xml>` in văn bản; `chords.mjs <xml> [n]` in từng hợp âm.

## Trang (`AnalyzePage.tsx`, `analyze.css`)
- `/analyze`: bản mẫu (`samples.ts`, `public/analyze/*.musicxml` — từ kho mẫu music21, tác phẩm phạm vi công cộng; không precache), "Bản của bạn" (`store.ts`, `secureStore('analyze:scores')`, trong sao lưu `analyses`), "Từ trình soạn nhạc" (`/analyze/c-<id>`, đọc `compose:scores`). Nhập `.musicxml/.xml/.mxl/.mid` (`midi.ts`: lượng tử móc kép / liên ba, tách khuông ở Đô giữa).
- `/analyze/:id`: lăng kính, cách ghi (Nga – Xô viết / Quốc tế / Tên hợp âm), lớp (hợp âm, giọng, câu kết, dấu hoá bất thường cam, nốt ngoài hợp âm xanh). **`annotate.ts` ghi phân tích vào MEI** trước khi Verovio khắc: `<harm xml:id="ah{i}" place="below">` ở khuông thấp nhất, `<dir>` cho giọng (`ak`), ly điệu (`at`), câu kết (`ac`); `color` trên `<note>`. Bấm nhãn: `closest('.harm, .dir')` (tspan bên trong có data-id riêng!) → thẻ `PickCard` (`explain.ts`). Văn bản: ô nhịp là nút tô `.measure.is-focus` + cuộn; bấm ô trên bản nhạc → cuộn văn bản tới chỗ nhắc ô đó.
- Trình soạn nhạc: nút "Phân tích bản này" (bảng ⋯ → Xuất – nhập). Xuất MIDI nay ghi nhịp độ thật, số chỉ nhịp, hoá biểu (trước cố định 120).
- Test: `engine.test.ts` (cadence, thể đảo, K64, II♯3, D7→IV, Napoli, sáu tăng Đức, tìm giọng, chuyển giọng), `midi.test.ts`, e2e `tests/analyze.spec.ts`, smoke 2 trang.

## Lăng kính Jazz (đợt 2)
- `chords.ts` `JAZZ` (thêm 6, m6, maj9, m9, 7♯9, 7♯11, 13, 7sus4, sus4, 6/9, m11, 7alt), `core(q)` = hợp âm ba bên dưới (tìm giọng và chức năng đọc theo nó). `leadsheet.ts`: bản có ký hiệu hợp âm (MusicXML `<harmony>` → `ev.harm`) thì **dùng chính ký hiệu đó** (≥ 4 ký hiệu), `parseSymbol` đọc Dm7, G7♭9, F♯ø7, E-7, AΔ7, C/E…
- `jazz.ts`: số La Mã tính từ âm giai trưởng của chủ âm (♭VII7, IIm7), SubV, V/x, backdoor ♭VII7 → I, vòng I–VI–II–V; **thang âm theo Levine** (II Dorian, III Phrygian, VI Aeolian, IV Lydian, V7 Mixolydian, át về thứ → Phrygian dominant, ♭9 → giảm nửa cung – cung, alt → altered, ø7 → Locrian ♮2, °7 → giảm cung – nửa cung); nốt dẫn hướng (quãng 3 – 7; hợp âm ba chỉ quãng 3).
- Tìm giọng ở lăng kính Jazz (`keysOf {jazz}`): I7 là chủ (blues), IV7 hợp giọng; gộp ly điệu tới 2.880 tick (vòng quay đầu cuối bài không thành giọng mới). Không thưởng hợp âm đầu bài (bài jazz hay mở bằng II).
- Bản nhạc: ký hiệu hợp âm **trên** khuông 1 (`ah`), số La Mã jazz **dưới** khuông thấp nhất (`aj`), tên mẫu tiến hành (`ap`). Văn bản: chuỗi hợp âm từng ô, mẫu tiến hành, thang âm + nốt dẫn hướng, khung blues 12 ô.

## Lăng kính TK XX (đợt 3)
- `xx.ts`: hợp âm theo phách (nốt vang ≥ 1/5 phách), gộp giống nhau liền nhau; **tên Forte** tra bảng `forte.ts` (208 lớp 3–9 âm, sinh bằng music21, khoá = mặt nạ 12 bit nhỏ nhất qua mọi chuyển vị và đảo → không phụ thuộc quy ước dạng nguyên thuỷ Forte/Rahn); `SET_NAMES` tên quen (3-11 hợp âm ba, 4-28 bảy giảm, 6-34 hợp âm huyền bí, 8-28 bát cung…). Tập hợp theo ô (≥ 5 lớp cao độ): toàn cung, lục cung, ngũ cung, bát cung, diatonic, âm học, thứ hoà âm, đủ 12 âm. Kỹ thuật: quãng 4, chuyển động song song, pedal (≥ 2 ô ở bè trầm), ostinato (2–8 nốt × ≥ 3), dãy 12 âm + 48 dạng (P/I/R/RI) + ma trận. Trung tâm cao độ (âm dài nhất, bè trầm ×2, phải trội 1,35×), tổng vectơ quãng.
- Lăng kính TK XX **không vẽ giọng, câu kết** (ý niệm điệu tính) và văn bản bỏ "Giọng chính".

## Hình thức (đợt 4, mọi lăng kính)
- `form.ts`: "dấu vân tay" mỗi ô (giai điệu bè cao theo **bậc chữ** — mô tiến đi theo bậc, nửa cung đổi từ ô này sang ô khác; nhịp điệu; chroma). Câu: ranh giới ở câu kết đủ mạnh (`strength` ≥ 0,55; nốt dài ở bè cao +0,15) và dấu lưu. Nhắc lại ≥ 2 ô (nguyên / dời cao độ / mô tiến / biến đổi) + **mô tiến từng ô** (≥ 3 ô liền, cùng số bậc dời). Phần: cắt ở cuối câu + đầu/cuối khối nhắc lại ≥ 4 ô; phần nhắc lại lấy chữ của phần gốc (′ khi biến đổi); hai phần chỉ nghe một lần đứng cạnh nhau gộp thành một.
- Đoán hình thức: AABA 32 ô (jazz), đoạn nhạc hai câu (HC/IAC → PAC), A–B–A, rondo, A–B, **sonata theo tiêu chí sách** (B nghe hai lần: lần đầu giọng khác, lần sau giọng chính; A trở lại), **march / ragtime** (A–B–A–C, trio ở giọng IV), biến tấu. Maple Leaf Rag ra đúng "A–B–A′–C, trio ở giọng hạ át".
- Giao diện: sơ đồ khối (bấm → tô ô), lớp "Hình thức" (chữ phần `as`, nhắc lại / mô tiến `ar`), bảng từng ô (cột theo lăng kính), xuất: Lưu vào Sổ tay (Markdown có `[[slug|thuật ngữ]]` → vào mạng second brain), Gắn vào đề tài (nối vào bản nháp), Tải Markdown.
- Lỗi đã gặp: `Work` giữ lăng kính khi đổi bản nhạc → `key={id}`.
- Test: `jazz.test.ts`, `xx.test.ts`, `form.test.ts`, e2e 3 lăng kính.

## Dựng MusicXML từ Mutopia (Clair de lune, 13/11)
Mutopia chỉ có .ly + .mid. `python-ly` không chuyển được. Cách đã chạy: music21 đọc .mid (2 phần, ô và hoá biểu đúng) → chính tả nốt lấy từ LilyPond: thêm engraver Scheme in `SPY <thời điểm×4> <midi> <tên nốt> <dấu>` cho mỗi `note-event` (`lilypond -dno-print-pages`), ghép theo (thời điểm, midi), lệch thì lấy nốt cùng midi gần nhất (±2 phách) → 1.503/1.503 nốt. Khoá khuông dưới chọn theo cao độ trung bình từng ô. Chia bè do music21 tự xếp nên rối hơn bản in.
