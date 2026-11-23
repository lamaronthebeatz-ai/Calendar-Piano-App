# UMRE — Đặc tả tổng (Unified Music Reasoning Engine)

UMRE là lõi suy luận âm nhạc dùng chung cho các phần đã có của app (phức điệu `/counterpoint`, soạn nhạc `/compose`, phân tích `/analyze`, bảng tính `/tools`). Nó **không thay** các phần đó: mỗi phần giữ mô hình riêng và nối vào UMRE qua bộ chuyển đổi.

## Mười hai giai đoạn và trạng thái thật

| GĐ | Nội dung | Trạng thái |
|---|---|---|
| 1 | Hệ biểu diễn âm nhạc thống nhất (`src/umre/repr/`) | **Đã triển khai, có kiểm thử** (xem `IMPLEMENTATION_LOG.md`) |
| 2 | Sổ luật (rulebook) có nguồn, phiên bản, phạm vi trường phái | Chưa triển khai — có đặc tả dự kiến (`RULEBOOK_SPECIFICATION.md`) |
| 3 | Bộ giải ràng buộc dùng chung | Chưa triển khai — bộ giải phức điệu cũ vẫn chạy riêng |
| 4 | Kiểm định độc lập kết quả | Chưa triển khai ở mức UMRE (phức điệu có `verify.ts` riêng) |
| 5 | Bằng chứng và giải thích | Chưa triển khai |
| 6 – 12 | Hiệu năng, kiểm chứng học thuật, mở rộng hệ thống lý thuyết, giao diện… | Chưa triển khai |

Bảng này chỉ đổi khi có code và test thật. Giai đoạn sau không bắt đầu khi tiêu chí nghiệm thu của giai đoạn trước chưa qua.

## Nguyên tắc
1. **Không bịa luật.** Biểu diễn không chứa phán đoán phụ thuộc trường phái (quãng 4 thuận hay nghịch, phách nào mạnh, nhãn chức năng). Những thứ đó thuộc sổ luật (GĐ2), có nguồn.
2. **Không trộn hệ lý thuyết.** Nhãn hoà âm mang hệ của nó (`russian-soviet-function`, `roman-numeral`, `jazz-chord-symbol`, `figured-bass`) và nguồn gốc (`provenance`). Hai hệ cùng tồn tại, không quy đổi ngầm.
3. **Thiếu bằng chứng thì ghi "chưa xác minh".**
4. **Không phá dữ liệu cũ.** Lược đồ có tên và số phiên bản; dữ liệu phiên bản mới hơn bị từ chối thay vì đọc sai.

## Tài liệu
`ARCHITECTURE.md` · `UNIFIED_MUSIC_REPRESENTATION.md` · `RULEBOOK_SPECIFICATION.md` · `SOLVER_SPECIFICATION.md` · `VALIDATION_SPECIFICATION.md` · `EVIDENCE_AND_EXPLANATION.md` · `PERFORMANCE_SPECIFICATION.md` · `ACADEMIC_VERIFICATION.md` · `IMPLEMENTATION_LOG.md` · `KNOWN_LIMITATIONS.md`
