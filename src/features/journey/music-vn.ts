import type { Track } from './music'

/**
 * Nhạc nền Hành trình Việt Nam. Commons có rất ít bản thu tự do của nhạc cổ truyền Việt Nam (lượt dò 16/11/2026):
 * dùng tám bản có thật dưới đây, cảnh nào không có bản đúng thời kỳ thì ghi `note` là âm thanh minh hoạ.
 */
const C = 'https://commons.wikimedia.org/wiki/File:'
const T: Record<string, Track> = {
  kinh: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fe/T%E1%BB%A5ng_Kinh_Chi%E1%BB%81u_Ph%E1%BA%ADt_G%C3%ADao_Nguy%C3%AAn_Th%E1%BB%A7y.wav/T%E1%BB%A5ng_Kinh_Chi%E1%BB%81u_Ph%E1%BA%ADt_G%C3%ADao_Nguy%C3%AAn_Th%E1%BB%A7y.wav.mp3', title: 'Tụng kinh chiều — Phật giáo Nguyên thuỷ Việt Nam', by: 'Sila Viusuddhi (người đăng)', licence: 'CC BY-SA 4.0', page: C + 'T%E1%BB%A5ng_Kinh_Chi%E1%BB%81u_Ph%E1%BA%ADt_G%C3%ADao_Nguy%C3%AAn_Th%E1%BB%A7y.wav' },
  dangDan: { src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/%C4%90%C4%83ng_%C4%90%C3%A0n_cung_%28%E7%99%BB%E5%A3%87%E5%AE%AE%29_-_1941_Annam_Anthem_-_Recreation_by_Prof._Liam_C._Kelley_%28L%C3%AA_Minh_Kh%E1%BA%A3i%29.mp3', title: 'Đăng đàn cung — bản dựng lại', by: 'Liam C. Kelley (Lê Minh Khải)', licence: 'CC BY 3.0', page: C + '%C4%90%C4%83ng_%C4%90%C3%A0n_cung_%28%E7%99%BB%E5%A3%87%E5%AE%AE%29_-_1941_Annam_Anthem_-_Recreation_by_Prof._Liam_C._Kelley_%28L%C3%AA_Minh_Kh%E1%BA%A3i%29.mp3' },
  caiLuong: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/X%E1%BB%AD_%C3%A1n_B%C3%A0ng_Qu%C3%AD_Phi_%28c._1928%29.ogg/X%E1%BB%AD_%C3%A1n_B%C3%A0ng_Qu%C3%AD_Phi_%28c._1928%29.ogg.mp3', title: 'Xử án Bàng Quí Phi — cải lương, đĩa Beka (k. 1928)', by: 'Gánh Phước Cương', licence: 'Public domain', page: C + 'X%E1%BB%AD_%C3%A1n_B%C3%A0ng_Qu%C3%AD_Phi_%28c._1928%29.ogg' },
  quocCa: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Quoc_ca_Viet_Nam.ogg/Quoc_ca_Viet_Nam.ogg.mp3', title: 'Tiến quân ca (Văn Cao) — bản thu chính thức của Quốc ca', by: 'Bản thu chính thức', licence: 'Public domain', page: C + 'Quoc_ca_Viet_Nam.ogg' },
  tuyenNgon: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b4/Ho_Chi_Minh_reading_the_Proclamation_of_Independence_of_the_Democratic_Republic_of_Vietnam_on_2_September_1945.wav/Ho_Chi_Minh_reading_the_Proclamation_of_Independence_of_the_Democratic_Republic_of_Vietnam_on_2_September_1945.wav.mp3', title: 'Hồ Chí Minh đọc Tuyên ngôn độc lập', by: 'Hồ Chí Minh', licence: 'Public domain', page: C + 'Ho_Chi_Minh_reading_the_Proclamation_of_Independence_of_the_Democratic_Republic_of_Vietnam_on_2_September_1945.wav', note: 'Bản thu sau 1954, đọc lại Tuyên ngôn — không phải bản thu ngày 2/9/1945' },
  vnch: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/Call_to_the_Citizens-South_Vietnamese_Republic_of_Vietnam_National_Anthem.ogg/Call_to_the_Citizens-South_Vietnamese_Republic_of_Vietnam_National_Anthem.ogg.mp3', title: 'Tiếng gọi công dân — quốc ca Việt Nam Cộng hoà (1955 – 1975)', by: 'Bản thu tự do trên Commons', licence: 'Public domain', page: C + 'Call_to_the_Citizens-South_Vietnamese_Republic_of_Vietnam_National_Anthem.ogg' },
  afvn: { src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/South_Vietnamese_national_anthem_on_AFVN_radio.mp3', title: 'Quốc ca Việt Nam Cộng hoà trên đài AFVN', by: 'Đài AFVN', licence: 'Public domain', page: C + 'South_Vietnamese_national_anthem_on_AFVN_radio.mp3' },
  radio: { src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e4/Radio_Vietnam_%28Ti%E1%BA%BFng_n%C3%B3i_n%C6%B0%E1%BB%9Bc_Vi%E1%BB%87t_Nam%29_from_Saigon%2C_Republic_of_Vietnam_%28VNCH%29_circa_1974.ogg/Radio_Vietnam_%28Ti%E1%BA%BFng_n%C3%B3i_n%C6%B0%E1%BB%9Bc_Vi%E1%BB%87t_Nam%29_from_Saigon%2C_Republic_of_Vietnam_%28VNCH%29_circa_1974.ogg.mp3', title: 'Đài Tiếng nói nước Việt Nam, Sài Gòn (k. 1974)', by: 'Rudy van Dalen (thu từ sóng phát)', licence: 'Public domain', page: C + 'Radio_Vietnam_%28Ti%E1%BA%BFng_n%C3%B3i_n%C6%B0%E1%BB%9Bc_Vi%E1%BB%87t_Nam%29_from_Saigon%2C_Republic_of_Vietnam_%28VNCH%29_circa_1974.ogg' },
}
const ill = (t: Track, note: string): Track => ({ ...t, note })

const ancient = 'Âm thanh minh hoạ — chưa có bản thu tự do của nhạc thời kỳ này'
export const MUSIC_VN: Record<string, Track> = {
  'vn-co-dai': ill(T.kinh, ancient),
  'vn-dong-son': ill(T.kinh, ancient),
  'vn-bach-dang-938': ill(T.dangDan, ancient),
  'vn-trong-cham': ill(T.kinh, 'Tụng kinh — Phật giáo ảnh hưởng lớn tới âm nhạc thời Lý; bản thu hôm nay'),
  'vn-bach-dang-1288': ill(T.dangDan, ancient),
  'vn-nguyen-trai': ill(T.dangDan, 'Nhạc lễ cung đình đời sau (bản dựng lại) — minh hoạ cho nhạc lễ thời Lê'),
  'vn-tay-son': ill(T.dangDan, ancient),
  'vn-dong-da': ill(T.dangDan, ancient),

  'vn-nguyen': T.dangDan,
  'vn-nha-nhac': T.dangDan,
  'vn-ca-hue': ill(T.dangDan, 'Nhạc cung đình Huế (bản dựng lại) — chưa có bản thu tự do của ca Huế'),
  'vn-da-nang-1858': T.dangDan,
  'vn-ca-tru': ill(T.caiLuong, 'Đĩa cải lương k. 1928 — chưa có bản thu tự do của ca trù'),
  'vn-kinh-thanh-1885': T.dangDan,
  'vn-tai-tu': ill(T.caiLuong, 'Cải lương — lớn lên từ đờn ca tài tử'),
  'vn-bac-lieu': T.caiLuong,

  'vn-phap-thuoc': T.caiLuong,
  'vn-azoulay': ill(T.caiLuong, 'Một đĩa Beka thu ở Việt Nam, k. 1928'),
  'vn-nhac-vien-1927': T.caiLuong,
  'vn-tuyen-1938': ill(T.caiLuong, 'Đĩa cải lương cùng thời — chưa có bản thu tự do của nhạc cải cách'),
  'vn-ngay-nay': ill(T.caiLuong, 'Đĩa cải lương cùng thời — chưa có bản thu tự do của nhạc cải cách'),
  'vn-dang-the-phong': ill(T.caiLuong, 'Đĩa cải lương cùng thời — bài hát của Đặng Thế Phong còn bản quyền thu âm'),
  'vn-tien-quan-ca': T.quocCa,
  'vn-thang-tam': T.tuyenNgon,

  'vn-khang-chien': T.quocCa,
  'vn-ha-noi-1946': T.quocCa,
  'vn-song-lo': ill(T.quocCa, 'Tiến quân ca — các ca khúc kháng chiến khác chưa có bản thu tự do'),
  'vn-viet-bac': T.quocCa,
  'vn-ve-thanh': ill(T.caiLuong, 'Âm thanh minh hoạ — Tình ca của Phạm Duy còn bản quyền'),
  'vn-oria': ill(T.caiLuong, 'Âm thanh minh hoạ — chưa có bản thu tự do của đĩa Oria'),
  'vn-dien-bien': T.quocCa,
  'vn-geneve': ill(T.vnch, 'Quốc ca Việt Nam Cộng hoà — nhà nước miền Nam từ 1955'),

  'vn-hai-mien': T.radio,
  'vn-hai-truong': T.quocCa,
  'vn-phong-tra': ill(T.radio, 'Đài Sài Gòn k. 1974 — nhạc vàng còn bản quyền thu âm'),
  'vn-co-sao': T.quocCa,
  'vn-hoang-viet': T.quocCa,
  'vn-mau-than': ill(T.afvn, 'Âm thanh minh hoạ — nhạc Trịnh Công Sơn còn bản quyền'),
  'vn-du-ca': ill(T.vnch, 'Âm thanh minh hoạ — bài hát du ca còn bản quyền'),
  'vn-ha-noi-1972': T.quocCa,
  'vn-30-4': T.radio,

  'vn-sau-1975': ill(T.kinh, 'Âm thanh minh hoạ — nhạc sau 1975 còn bản quyền'),
  'vn-thong-nhat': ill(T.radio, 'Đài Sài Gòn những ngày cuối, k. 1974'),
  'vn-thuyen-nhan': ill(T.kinh, 'Âm thanh minh hoạ'),
  'vn-bien-gioi': ill(T.quocCa, 'Âm thanh minh hoạ'),
  'vn-chopin-1980': ill(T.kinh, 'Âm thanh minh hoạ — chưa có bản thu tự do của Đặng Thái Sơn'),
  'vn-paris-by-night': ill(T.caiLuong, 'Âm thanh minh hoạ — băng nhạc hải ngoại còn bản quyền'),
  'vn-doi-moi': ill(T.quocCa, 'Âm thanh minh hoạ — nhạc nhẹ thời Đổi mới còn bản quyền'),
  'vn-lan-song-xanh': ill(T.radio, 'Âm thanh minh hoạ — nhạc trẻ còn bản quyền'),
}
