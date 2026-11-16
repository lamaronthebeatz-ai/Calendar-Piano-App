import type { ArcDef } from '../engine/types'
import { banThao } from './ban-thao'
import { thanhLe } from './thanh-le'
import { clavier } from './clavier'
import { loiDon } from './loi-don'
import { leitmotif } from './leitmotif'
import { goinHome } from './goin-home'

/** Story arcs built on the engine, by chapter. A new arc is one file and one line here. */
export const ARCS: ArcDef[] = [banThao, thanhLe, clavier, loiDon, leitmotif, goinHome]
