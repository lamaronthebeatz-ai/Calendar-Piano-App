# Nhật ký triển khai

## 2026-11-23 — GĐ1: Hệ biểu diễn âm nhạc thống nhất

**Tạo mới** (`src/umre/repr/`): `rational.ts`, `pitch.ts`, `interval.ts`, `tonal.ts`, `time.ts`, `score.ts`, `harmony.ts`, `structure.ts`, `validate.ts`, `schema.ts`, `index.ts`; `adapters/counterpoint.ts`, `adapters/compose.ts`, `adapters/midi.ts`, `adapters/harmonyCalc.ts`; test `core.test.ts` (50), `adapters/adapters.test.ts` (11). Tài liệu `docs/umre/*` (11 tệp).

**Sửa**: không sửa mã nguồn có sẵn. Chỉ thêm tài liệu (`CLAUDE.md` một dòng bảng, `docs/STATUS.md`, `docs/notes/decisions.md`).

### Kiểm thử (đã chạy thật: `npx vitest run src/umre` → 61/61 qua)
- Lõi (50): số hữu tỉ; cao độ – MIDI – viết lại; bảng quãng và khứ hồi tên ↔ quãng cho mọi chất lượng hợp lệ ở quãng 1 – 15; dịch giọng và đảo quãng; **đối chiếu với `interval()` của phức điệu trên > 800 cặp**; 15 hoá biểu trưởng và giọng song song; điệu thức nhà thờ trên phím trắng; `signatureAlter` = `sigAlter` (−7…7); `signatureOf` = `keySig` cho mọi giọng của trang phức điệu; âm giai và bậc; chia ô nhịp có đổi nhịp và ô lấy đà; tổng phổ mẫu hợp lệ, gộp nốt nối; **11 tổng phổ hỏng, mỗi cái ra đúng mã lỗi**; hợp âm, thế đảo, số bass, nhận hợp âm từ tên nốt, cách xếp; khứ hồi JSON và từ chối phiên bản lạ.
- Bộ chuyển đổi (11): phức điệu khứ hồi chính xác (nốt nối, biến âm, ba bè, giọng Dorian đặt tay); **lời giải thật của `msolve` (ba bè trên cantus firmus) → UMRE hợp lệ, khứ hồi không đổi**; trình soạn nhạc khứ hồi **bằng nhau tuyệt đối** với bản mẫu có hợp âm, nốt nối qua vạch nhịp, liên ba, dấu lặng, đổi giọng – nhịp – khoá, lời, sắc thái, luyến, nhạc cụ dịch giọng; MusicXML ghi – đọc lại giữ cao độ, vị trí, trường độ, nối; bài từ phức điệu ra được bản soạn nhạc và tệp MIDI; MIDI mức nốt áp dụng dịch giọng contrabass (−12), gộp nốt nối, khứ hồi; từ chối nốt chồng trong một track; bảng tính hoà âm.

### Lỗi gặp khi làm
- `-0` từ `-x || …` trong `signatureAlter` và phủ định quãng → thêm `|| 0`.
- Trùng tên `isCompound` (quãng / nhịp) → đổi bên nhịp thành `isCompoundMeter`.
- Test MusicXML cần `DOMParser` → `// @vitest-environment happy-dom` (như `features/compose/exchange.test.ts`).

### Nghiệm thu GĐ1
Đủ các yêu cầu trong chỉ thị: kiểu chặt, đơn vị rõ, id ổn định, kiểm hợp lệ, chuyển đổi hai chiều, phiên bản, tương thích MIDI và MusicXML, mở rộng qua `ext` và trường tuỳ chọn. Giới hạn ở `KNOWN_LIMITATIONS.md`.
