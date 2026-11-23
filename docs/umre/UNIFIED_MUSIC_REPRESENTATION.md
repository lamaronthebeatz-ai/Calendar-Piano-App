# Biểu diễn âm nhạc thống nhất (GĐ1) — `src/umre/repr/`

Lược đồ `umre.score`, phiên bản **1**. Mọi kiểu là `readonly`, dữ liệu thuần JSON (không lớp, không hàm), nên lưu và gửi được nguyên vẹn.

## Đơn vị
| Đại lượng | Đơn vị | Ghi chú |
|---|---|---|
| Thời gian (`onset`, `duration`, `at`) | **số nốt tròn**, hữu tỉ `{n, d}` tối giản | nốt đen = 1/4; liên ba móc đơn = 1/12. Không dùng số thực nên không sai số. |
| Cao độ | chữ (0 = C … 6 = B) + `alter` (−3…+3) + `octave` (−1…9, khoa học: C4 = MIDI 60) | cao độ **viết** (nhạc cụ dịch giọng đổi ra âm thanh thật khi xuất MIDI) |
| Quãng | `{steps, semitones}` | `steps` = số bậc chữ (0 đồng âm, 7 quãng tám) = cách đếm Taneyev của giáo trình phức điệu; có dấu theo hướng |
| Hoá biểu | `fifths` (+ thăng, − giáng) | không giới hạn ±7 (giọng lý thuyết như Sol♯ trưởng = 8) |
| Tick | chỉ ở bộ chuyển đổi | `fromTicks(t, tpq)`; `toTicks` báo lỗi nếu không chia hết |

## Các kiểu chính
- **Pitch / Spelling** (`pitch.ts`): `midi`, `pitchClass`, `enharmonic`, `respell`, `fromMidi(m, 'sharps' | 'flats' | {fifths})`, `parsePitch('F#4')`, `formatPitch(p, 'en' | 'sym' | 'vi')`.
- **Interval** (`interval.ts`): `between`, `quality` (P M m A d AA dd AAA ddd), `intervalName` ('M3', '-m3'), `parseInterval`, `invert`, `simple`, `transpose` (viết theo chữ: C4 + A4 = F♯4).
- **Key / Mode** (`tonal.ts`): 11 điệu thức (`major`, ba dạng thứ, bảy điệu thức nhà thờ). **Hoá biểu (ký hiệu) tách khỏi giọng (khẳng định phân tích)**: một thăng có thể là Sol trưởng, Mi thứ hay một điệu thức.
- **Meter** (`time.ts`): mẫu số luỹ thừa của 2; `layoutBars` có ô lấy đà và đổi nhịp; `beatOf` chỉ nói phách **ký hiệu**, không nói phách mạnh – nhẹ.
- **Score** (`score.ts`):
  - `parts[]` (nhạc cụ, quãng dịch giọng, chương trình MIDI) → `staves[]` (khoá nhạc theo thời gian) → `voices[]` (một bè = một đường; `role` tuỳ chọn như `cantus-firmus`).
  - `events[]` của bè: `NoteEvent {id, onset, duration, pitch, tie?: start|stop|continue, group?}` hoặc `RestEvent`. Hợp âm trong một bè = các nốt cùng `onset`, cùng `duration`, cùng `group`.
  - Toàn bài: `meters[]`, `keySignatures[]`, `keys[]` (giọng kèm `basis`: source | analysis | exercise), `tempos[]`, `pickup`, `end`.
  - Lớp phân tích tuỳ chọn: `harmony[]` (`HarmonicLabel`), `structure[]` (`FormNode`).
  - `ext`: chỗ chứa có không gian tên (`ext.compose`, `ext.counterpoint`) để dữ liệu UMRE chưa mô hình hoá đi qua nguyên vẹn.
- **Hợp âm** (`harmony.ts`): 11 chất lượng (`major`, `minor`, `diminished`, `augmented`, `dominant-7`, `major-7`, `minor-7`, `half-diminished-7`, `diminished-7`, `minor-major-7`, `augmented-major-7`); `chordMembers`, `inversion`, `figures` (5/3, 6, 6/4; 7, 6/5, 4/3, 2), `chordsFromSpellings` (trả **mọi** ứng viên, không chọn hộ), `spacing`.
- **Nhãn hoà âm**: `{system, text, key?, chord?, provenance: {kind: 'source'|'analysis'|'user', ref?}, alternatives?}`; `FormNode.provenance.kind` thêm `'exercise'`.
- **Hình thức**: `FormNode {kind, label, start, end, system?, provenance, children?}`; con phải nằm trong cha.

## Định danh
`id` là chuỗi, duy nhất trong toàn tổng phổ (phần, khuông, bè, sự kiện, nhãn, nút hình thức chung một không gian). Bộ chuyển đổi sinh id ổn định (cùng đầu vào → cùng id): phức điệu `${id}-v1-n3`, soạn nhạc giữ id sự kiện (`ev.id`, nốt thứ j của hợp âm là `${ev.id}~${j}`).

## Phiên bản
`schema.ts`: `migrate(raw)` từ chối lược đồ khác tên và phiên bản **mới hơn** (không đọc bừa); `MIGRATIONS` rỗng vì mới có v1. Thêm trường tuỳ chọn không cần tăng phiên bản; đổi nghĩa trường thì tăng và viết hàm chuyển.
