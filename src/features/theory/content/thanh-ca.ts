import type { Article } from '../wiki'

/** Thánh ca Việt Nam — bài mở đầu toàn mục. Các bài ở thanh-ca-a…d.ts. */
export const thanhCaHub: Article[] = [
  {
    slug: "thanh-ca-viet-nam",
    title: "Thánh ca Công giáo Việt Nam: hệ thống và lộ trình",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["thánh ca Việt Nam", "thánh nhạc Việt Nam", "thánh ca Công giáo", "thánh nhạc Công giáo Việt Nam", "Vietnamese Catholic hymns", "Vietnamese Catholic music"],
    summary: "Bản đồ của mục Thánh ca Việt Nam: từ đọc kinh, cung kinh và Ngắm thời truyền giáo, các nhạc đoàn 1945 – 1975, tiếng Việt vào phụng vụ (1964 – 1971), văn kiện và Uỷ ban Thánh nhạc, đến thanh điệu – giai điệu, dân ca trong thánh ca, chân dung nhạc sĩ và các công trình nghiên cứu.",
    refs: [
      ["Hội đồng Giám mục Việt Nam — Hướng dẫn mục vụ Thánh nhạc (2017, cập nhật 2022)", "https://hdgmvietnam.com"],
      ["UCA News — Vietnam's Catholic hymns resonate beyond church walls", "https://www.ucanews.com/news/vietnams-catholic-hymns-resonate-beyond-church-walls/109430"],
      ["OCP — Paul Văn Chi, Catholic Choral Music in Vietnam 1945–1975", "https://www.ocp.org/en-us/collections/dg/630/catholic-choral-music-in-vietnam-1945-1975"],
    ],
    body: `
## Mục này nói về gì
Thánh ca Công giáo Việt Nam là một mảng lớn của âm nhạc Việt Nam nhưng ít được viết thành sách giáo khoa. Mục này gom những gì có nguồn: văn kiện của Giáo hội, các luận án và bài tạp chí đọc được, tổng kết của các Uỷ ban Thánh nhạc, báo chí Công giáo và thế tục. Mục này đặt cạnh [[am-nhac-nha-tho|âm nhạc nhà thờ phương Tây]] (bình ca Gregorian, organ) và [[am-nhac-ton-giao-va-dan-toc-viet-nam|âm nhạc tôn giáo ở Việt Nam]].

## Cách đọc mục này
- Mỗi bài ghi nguồn ở cuối trang; chỗ có số trang thì ghi ngay trong câu.
- Khi các nguồn lệch nhau (năm thành lập Uỷ ban Thánh nhạc, số bài của một nhạc sĩ, tác giả lời một bài hát), bài nêu cả hai và nói rõ chưa thống nhất.
- Sách còn bản quyền (của Văn Chi, Kim Long, Xuân Thảo…) chỉ được tóm lược bằng lời của người biên soạn, trích ngắn có trang. Phần chưa đọc được toàn văn được ghi rõ.
- Những gì chưa có tư liệu được gom vào [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]].

## Bản đồ
| Phần | Bài |
|---|---|
| **1. Tổng quan và phân kỳ** | [[phan-ky-thanh-nhac-viet-nam]] |
| **2. Thời truyền giáo đến 1944** | [[dem-tuan-thanh-thoi-rhodes]], [[maiorica-va-sach-nom-cong-giao]], [[ca-van-va-van-van-cong-giao]], [[nhung-bai-hat-tieng-viet-dau-tien]] |
| **3. 1945 – 1975** | [[nhac-doan-le-bao-tinh]], [[cac-nhac-doan-mien-bac-1946-1957]], [[thanh-nhac-mien-nam-1954-1975]], [[tieng-viet-vao-phung-vu-1964-1971]] |
| **4. Sau 1975, trong nước và hải ngoại** | [[thanh-ca-sau-1975]], [[thanh-ca-hai-ngoai]] |
| **5. Văn kiện và phụng vụ** | [[tu-tra-le-sollecitudini-den-vatican-ii]], [[sacrosanctum-concilium-chuong-vi]], [[musicam-sacram-1967]], [[latinh-va-tieng-viet-trong-thanh-nhac]], [[cac-bai-hat-trong-thanh-le]], [[nam-phung-vu-va-chon-bai-hat]] |
| **6. Thể chế và thực hành** | [[huong-dan-muc-vu-thanh-nhac]], [[uy-ban-thanh-nhac]], [[chuan-nhan-imprimatur-thanh-ca]], [[ca-doan-ca-truong-ca-xuong-vien]], [[nhac-cu-trong-phung-vu-viet-nam]] |
| **7. Lý thuyết: lời Việt và giai điệu** | [[thanh-dieu-va-giai-dieu-thanh-ca]], [[cung-kinh-cung-sach]], [[ngam-mua-chay]], [[thanh-ca-co-truyen-va-van-dang-hoa]], [[thanh-vinh-dap-ca-va-dau-tru]], [[dau-giong-trong-hop-xuong]], [[hoang-kieu-thanh-dieu-va-dieu-thuc]] |
| **8. Sáng tác và hội nhập văn hoá** | [[bon-huong-sang-tac-thanh-ca]], [[ngu-cung-trong-thanh-ca]], [[hoi-nhap-van-hoa-trong-thanh-ca]], [[thanh-ca-lan-dieu-quan-ho]], [[thanh-nhac-nguoi-muong-phat-diem]] |
| **9. Nhạc sĩ** | [[bang-tra-nhac-si-thanh-ca]]; [[kim-long]], [[van-chi]], [[hai-linh]], [[hung-lan]], [[hoai-duc-va-cao-cung-len]], [[tien-dung]], [[vinh-hanh-huong-thanh-kinh]], [[ngo-duy-linh]], [[thanh-tam-va-ban-nhac-alleluia]], [[nguyen-van-hoa-seraphim]]; bài hát [[hang-belem-1945]] |
| **10. Theo sách và luận án** | [[kim-long-ve-thanh-nhac]], [[van-chi-catholic-choral-music-in-vietnam]], [[luan-an-xuan-thao-2007]], [[cac-cong-trinh-nghien-cuu-thanh-ca]], [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]] |

## Lộ trình gợi ý
*(Đề xuất của người biên soạn.)*
1. **Toàn cảnh:** [[phan-ky-thanh-nhac-viet-nam]] → [[nhac-doan-le-bao-tinh]] → [[tieng-viet-vao-phung-vu-1964-1971]].
2. **Hiểu một bài thánh ca được dùng thế nào:** [[cac-bai-hat-trong-thanh-le]] → [[nam-phung-vu-va-chon-bai-hat]] → [[chuan-nhan-imprimatur-thanh-ca]].
3. **Viết giai điệu cho lời Việt:** [[thanh-dieu-va-giai-dieu-thanh-ca]] → [[cung-kinh-cung-sach]] → [[thanh-vinh-dap-ca-va-dau-tru]] → [[dau-giong-trong-hop-xuong]]; nối với [[am-nhac-va-ngon-ngu]] và [[viet-binh-ca-cho-tieng-ban-dia]].
4. **Chất liệu Việt:** [[ngu-cung-trong-thanh-ca]] → [[thanh-ca-lan-dieu-quan-ho]] → [[thanh-nhac-nguoi-muong-phat-diem]]; nền lý thuyết ở [[am-giai-ngu-cung]] và [[hoa-am-cho-giai-dieu-ngu-cung]].
5. **Người làm nghiên cứu:** [[cac-cong-trinh-nghien-cuu-thanh-ca]] → [[luan-an-xuan-thao-2007]] → [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]].

## Liên quan
- Bình ca và organ ở Việt Nam: [[binh-ca-va-organ-o-viet-nam]].
- Toàn mục Âm nhạc Việt Nam: [[am-nhac-viet-nam]].
- Phương pháp nghiên cứu: [[dan-toc-nhac-hoc]], [[nghien-cuu-am-nhac-viet-nam]].
`,
  },
]
