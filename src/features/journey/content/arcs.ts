import type { ArcDef } from '../engine/types'
import { banThao } from './ban-thao'
import { thanhLe } from './thanh-le'
import { clavier } from './clavier'
import { loiDon } from './loi-don'
import { leitmotif } from './leitmotif'
import { goinHome } from './goin-home'
import { conKhongCha } from './con-khong-cha'
import { nhacLe } from './nhac-le'
import { nguoiDauTien } from './nguoi-dau-tien'
import { baConSo } from './ba-con-so'
import { nhacVang } from './nhac-vang'
import { warszawa } from './warszawa'

/** Story arcs built on the engine, by chapter. A new arc is one file and one line here. */
export const ARCS: ArcDef[] = [banThao, thanhLe, clavier, loiDon, leitmotif, goinHome, nhacLe, conKhongCha, nguoiDauTien, baConSo, nhacVang, warszawa]
