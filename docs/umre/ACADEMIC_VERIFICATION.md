# Kiểm chứng học thuật (cập nhật Wave D, GĐ12A — 23/11/2026)

**Đây là kiểm chứng dựa trên tài liệu và bộ đối chiếu, không phải chứng nhận của chuyên gia.** Chưa có người thẩm định chuyên môn (thầy dạy phức điệu / hoà âm) duyệt các luật; số trang do trợ lý máy đọc từ bản scan Lamar gửi (`checkedBy: assistant`). Mục "Chờ người thẩm định" cuối trang là danh sách việc cho người.

## Phương pháp
1. **Nguồn:** mỗi luật trỏ tới trích dẫn trong kho bằng chứng; nguồn xuất bản phải có trong thư mục `curated.ts` (không gõ tay), kho từ chối nguồn chưa xác minh sinh trích dẫn "đã xác minh". Test giữ số trang khớp bảng kiểm toán (`docs/notes/counterpoint.md`) và đúng dòng của bài thư viện đã trích (Rimsky-Korsakov).
2. **Ca vi phạm viết tay:** mỗi luật có một ví dụ viết từ câu chữ của luật (`rulebook/cases.ts`, `domains/harmony/cases.ts`) — không do máy sinh. Ca phải bị **mọi** bộ kiểm độc lập phủ luật đó bắt.
3. **Thí dụ in trong giáo trình** (phức điệu): 5 nốt lưu chép từ scan (Thí dụ 21–24a) phải được chấp nhận, 2 hình mà sơ đồ 2 (tr. 11) cấm phải bị bác — bằng cả ngôn ngữ luật UMRE lẫn `verify.ts`.
4. **Chuẩn ngoài cho phân tích:** 19 hợp xướng Bach có phân tích số La Mã của Tymoczko và cs. (corpus music21), chạy bằng `scripts/analyze/eval.mjs` (trực tiếp và `--umre`).
5. **Kiểm thử sai khác:** 300 lời giải đột biến mỗi loại bài (phức điệu, bốn bè, phối hoà âm) — hai bộ kiểm độc lập không được bất đồng.

Nhãn kết luận từng luật: **đối chiếu tài liệu (trong phạm vi)** = nguồn là sách, trích dẫn đã xác minh có trang, không có ghi chú "cách hiểu", và ca vi phạm bị ≥ 2 bộ kiểm độc lập bắt · **đối chiếu một phần** = có chỗ sách không nói rõ (ghi trong `caveat`) hoặc chưa ghim trang · **quy ước người dạy, chưa có văn bản** · **cách hiểu của người biên soạn**. Nhãn "ACADEMICALLY VERIFIED WITHIN DECLARED SCOPE" của báo cáo Wave D chỉ dùng cho nhóm thứ nhất, và chỉ theo nghĩa kiểm chứng tài liệu nói trên.

## Bảng từng luật (sinh bởi `src/umre/rulebook/verification.test.ts`, sửa tay là test hỏng)
<!-- verification -->
Tổng: 51 luật — đối chiếu tài liệu (trong phạm vi) 20, đối chiếu một phần 12, có nguồn nhưng thiếu ca kiểm 11, quy ước chưa có văn bản 2, cách hiểu của người biên soạn 6.

| Sổ luật | Luật | Mức | Nguồn | Trang | Đối chiếu nguồn | Bộ kiểm độc lập bắt ca vi phạm | Thí dụ in | Kết luận |
|---|---|---|---|---|---|---|---|---|
| Phức điệu | `leap` | bắt buộc | Phức điệu nghiêm khắc | tr. 6 | verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `chromatic-near` | khuyến nghị | Phức điệu nghiêm khắc | tr. 6 | verified (trợ lý) | — | — | **đối chiếu một phần** |
| Phức điệu | `leap-response` | bắt buộc | Phức điệu nghiêm khắc | tr. 6 | verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `leap3-response` | bắt buộc | Phức điệu nghiêm khắc | tr. 6 | verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `two-leaps` | khuyến nghị | Phức điệu nghiêm khắc | tr. 6 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `tritone-line` | khuyến nghị | Phức điệu nghiêm khắc | tr. 7 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `repeat3` | bắt buộc | Phức điệu nghiêm khắc | tr. 7 | partially-verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu một phần** |
| Phức điệu | `repeat` | khuyến nghị | Phức điệu nghiêm khắc | tr. 7 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `seg-place` | bắt buộc | Phức điệu nghiêm khắc | tr. 8 | verified (trợ lý) | verify, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `tie` | bắt buộc | Phức điệu nghiêm khắc | tr. 8 | verified (trợ lý) | verify, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `rhythm-change` | bắt buộc | Phức điệu nghiêm khắc | tr. 8 | verified (trợ lý) | verify, umre-rules | — | **đối chiếu một phần** |
| Phức điệu | `same-rhythm` | khuyến nghị | Phức điệu nghiêm khắc | tr. 8–9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `hidden` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `parallel` | bắt buộc | Phức điệu nghiêm khắc | tr. 9–10 | verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `perfects3` | bắt buộc | Phức điệu nghiêm khắc | tr. 9 | partially-verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu một phần** |
| Phức điệu | `perfects` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `first` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `final` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `strong-perfect` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `unison` | khuyến nghị | Phức điệu nghiêm khắc | tr. 9 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `dis-strong` | bắt buộc | Phức điệu nghiêm khắc | tr. 10 | verified (trợ lý) | verify, umre-rules | 7 | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `suspension` | bắt buộc | Phức điệu nghiêm khắc | tr. 10, tr. 11 | verified (trợ lý) | verify, umre-rules | 7 | **đối chiếu một phần** |
| Phức điệu | `dis-weak` | bắt buộc | Phức điệu nghiêm khắc | tr. 11–12 | verified (trợ lý) | verify, umre-rules | — | **đối chiếu một phần** |
| Phức điệu | `upper-neighbor` | khuyến nghị | Phức điệu nghiêm khắc | tr. 11–12 | verified (trợ lý) | — | — | **có nguồn, thiếu ca kiểm độc lập** |
| Phức điệu | `weak-form` | khuyến nghị | Phức điệu nghiêm khắc | Thí dụ 25–28 | partially-verified (trợ lý) | — | — | **đối chiếu một phần** |
| Phức điệu | `dis-both` | khuyến nghị | Cách hiểu của người biên soạn | — | unverified | — | — | **cách hiểu của người biên soạn** |
| Phức điệu | `star` | bắt buộc | Quy ước ra đề của người dạy (✱, nốt đen chuẩn bị) | — | unverified | verify, umre-rules | — | **quy ước người dạy, chưa có văn bản** |
| Phức điệu | `star-extra` | bắt buộc | Quy ước ra đề của người dạy (✱, nốt đen chuẩn bị) | — | unverified | verify, umre-rules | — | **quy ước người dạy, chưa có văn bản** |
| Phức điệu | `crossing` | bắt buộc | Phức điệu nghiêm khắc | — | partially-verified (trợ lý) | verify, umre-native, umre-rules | — | **đối chiếu một phần** |
| Phức điệu | `hidden-hard` | bắt buộc | Phức điệu nghiêm khắc | tr. 41–43 | verified (trợ lý) | verify, umre-rules | — | **đối chiếu tài liệu (trong phạm vi)** |
| Phức điệu | `end` | bắt buộc | Cách hiểu của người biên soạn | — | unverified | verify, umre-native, umre-rules | — | **cách hiểu của người biên soạn** |
| Phức điệu | `range` | khuyến nghị | Cách hiểu của người biên soạn | — | unverified | — | — | **cách hiểu của người biên soạn** |
| Phức điệu | `cadence-step` | khuyến nghị | Cách hiểu của người biên soạn | — | unverified | — | — | **cách hiểu của người biên soạn** |
| Phức điệu | `no-gap` | bắt buộc | Cách hiểu của người biên soạn | — | unverified | verify, umre-native, umre-rules | — | **cách hiểu của người biên soạn** |
| Hoà âm | `h.chord-tones` | bắt buộc | Практический учебник гармонии | tr. 11 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.root-position` | bắt buộc | Практический учебник гармонии | tr. 12 – 13 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.double-root` | bắt buộc | Практический учебник гармонии | tr. 19 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.spacing` | bắt buộc | Практический учебник гармонии | tr. 20 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu một phần** |
| Hoà âm | `h.parallels` | bắt buộc | Практический учебник гармонии | tr. 22 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.augmented` | bắt buộc | Практический учебник гармонии | tr. 22 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.crossing` | bắt buộc | Cách hiểu của người biên soạn | — | unverified | umre-rules, harmony-native | — | **cách hiểu của người biên soạn** |
| Hoà âm | `h.upper-third` | bắt buộc | Практический учебник гармонии | tr. 21 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu một phần** |
| Hoà âm | `h.second-relation` | bắt buộc | Практический учебник гармонии | tr. 21 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.primary-only` | bắt buộc | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.tonic-frame` | bắt buộc | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.leap-same-chord` | bắt buộc | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.repeat-change` | khuyến nghị | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu một phần** |
| Hoà âm | `h.strong-weak` | khuyến nghị | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu một phần** |
| Hoà âm | `h.bass-fourths` | khuyến nghị | Практический учебник гармонии | tr. 23 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.leading-tone` | bắt buộc | Практический учебник гармонии | tr. 24 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
| Hoà âm | `h.no-v-iv` | bắt buộc | Практический учебник гармонии | tr. 25 | verified (trợ lý) | umre-rules, harmony-native | — | **đối chiếu tài liệu (trong phạm vi)** |
<!-- /verification -->

## Dương tính giả / âm tính giả
| Bộ đối chiếu | Loại | Kết quả |
|---|---|---|
| Thí dụ in 21, 22, 23a, 23b, 24a (nốt lưu đúng luật) | dương tính giả | 0 / 5 (cả hai bộ kiểm) |
| Hai hình sơ đồ 2 cấm (số 1 ở bè trên, số 6 ở bè dưới) | âm tính giả | 0 / 2 |
| 19 ca vi phạm viết tay (phức điệu, 18 luật bắt buộc + `end`) | âm tính giả | 0 / 19 — mỗi ca bị 2–3 bộ kiểm độc lập bắt |
| 17 ca vi phạm viết tay (hoà âm, 14 bắt buộc + 3 khuyến nghị) | âm tính giả | 0 / 17 — cả hai bộ kiểm |
| 600 lời giải đột biến (bốn bè, phối hoà âm) | bất đồng giữa hai bộ kiểm | 0 |
| 17 ca nhận diện hợp âm từ định nghĩa (thể đảo, thiếu quãng 5, nốt ngoài, cách viết, mơ hồ, thiếu dữ liệu) | sai | 0 / 17 |

Giới hạn của các con số: bộ đối chiếu nhỏ (vài chục ca), do người biên soạn viết theo câu chữ luật — đo được việc bộ máy làm đúng điều luật nói, **không** đo được luật đã đọc đúng sách hay chưa (việc của người thẩm định).

## Hoà âm — chuẩn ngoài (Bach)
`node scripts/analyze/eval.mjs <thư mục gt> [--umre]`, 23/11/2026, 2.302 điểm thời gian: gốc hợp âm **83,9%**, đủ âm **78,1%**, giọng **77,1%**, gốc + thể đảo **78,3%**, gốc + đảo + giọng **61,4%**, hợp âm phụ (V/x…) tìm ra **34/90**. Qua UMRE và trực tiếp **giống hệt** (adapter không làm mất độ đúng). Phân tích nhiều cách đọc (Bach có chỗ tác giả phân tích chọn khác hợp lý) nên đây không phải "tỉ lệ đúng tuyệt đối". Chưa đo được: cadence, chuyển giọng (bộ đáp án không ghi riêng).

## Các mô-đun phân tích (GĐ10)
| Mô-đun | Phạm vi | Cơ sở | Phương pháp | Kiểm thử / chuẩn | Giới hạn chính |
|---|---|---|---|---|---|
| `harmony.tonal` | nhạc điệu tính thời kỳ thực hành chung | bộ /analyze (DP hợp âm, Viterbi giọng) | adapter | chuẩn Bach ở trên; 4 giọng chính đã công bố đúng 4/4 | Schoenberg op. 19 số 2 vẫn ra một giọng |
| `harmony.progression` | bốn bè, hợp âm ba thế gốc | Rimsky-Korsakov § 8, 11, 13 | sổ luật + bộ kiểm độc lập | ca viết tay, đột biến | không hợp âm bảy, hợp âm sáu trong bài tập |
| `melody.line` | từng bè | định nghĩa quãng, hình nét, mô tiến | đếm trên nốt | ca viết tay (mô tiến, hình nét) | motif chỉ lặp đúng; câu là giả thuyết |
| `rhythm.meter` | nhịp đã ghi | lưới phách, nghịch phách (nốt ở vị trí nhẹ ngân qua vị trí nặng) | đếm trên nốt | ca viết tay (nghịch phách, giãn ×2, 3:2) | chỉ số chỉ nhịp đầu |
| `texture.voices` | bè ghi trong bản | đồng bộ, chuyển động, mô phỏng | đếm + ngưỡng | canon viết tay, hợp xướng Bach | giai điệu + đệm không tách được → AMBIGUOUS |
| `form.sections` | /analyze | nhắc lại, kết, chỗ trở lại | adapter, giả thuyết | Maple Leaf Rag (đoạn) | tên hình thức chỉ là giả thuyết |
| `style.features` | quan sát | — | đếm | ca viết tay | không mô hình phong cách, không quy kết |

## Chờ người thẩm định (không máy nào làm thay được)
- Đọc lại số trang và câu chữ: Phạm Tú Hương 1991 (bảng trên) và Rimsky-Korsakov tr. 11 – 25.
- Các mục `ambiguous` của hai sổ luật (6 + 1) và các luật "đối chiếu một phần".
- Quy ước người dạy (✱, nốt đen chuẩn bị): cần văn bản hoặc xác nhận của thầy.
- Hợp âm chủ cuối thiếu quãng 5 (tr. 24): đã ghi `permitted`, chưa cài.

## Biểu diễn, quy ước (giữ từ trước)
Tên quãng, hoá biểu, âm giai, hợp âm được đối chiếu chéo với mô-đun có sẵn trên hơn 800 cặp nốt. Quy ước tự chọn (không phải sự kiện lý thuyết): không có "quãng đồng âm giảm" (viết `-A1`); thứ hoà thanh/giai điệu dùng hoá biểu thứ tự nhiên.
