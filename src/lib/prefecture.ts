import { PrefectureGroupByRegion } from '@/types'
import { ResasPrefecture } from '@/types/api'

export const HOKKAIDO_TOHOKU_PREF_IDS = [1, 2, 3, 4, 5, 6, 7]
export const KANTO_PREF_IDS = [8, 9, 10, 11, 12, 13, 14]
export const TYUBU_PREF_IDS = [15, 16, 17, 18, 19, 20, 21, 22, 23]
export const KINKI_PREF_IDS = [24, 25, 26, 27, 28, 29, 30]
export const TYUGOKU_SIKOKU_PREF_IDS = [31, 32, 33, 34, 35, 36, 37, 38, 39]
export const KYUSYU_OKINAWA_PREF_IDS = [40, 41, 42, 43, 44, 45, 46, 47]

export const groupByRegion = (prefectures: ResasPrefecture[]): PrefectureGroupByRegion => {
  return {
    hokkaidoTohoku: prefectures.filter((v) => HOKKAIDO_TOHOKU_PREF_IDS.includes(v.prefCode)),
    kanto: prefectures.filter((v) => KANTO_PREF_IDS.includes(v.prefCode)),
    tyubu: prefectures.filter((v) => TYUBU_PREF_IDS.includes(v.prefCode)),
    kinki: prefectures.filter((v) => KINKI_PREF_IDS.includes(v.prefCode)),
    tyugokuSikoku: prefectures.filter((v) => TYUGOKU_SIKOKU_PREF_IDS.includes(v.prefCode)),
    kyusyuOkinawa: prefectures.filter((v) => KYUSYU_OKINAWA_PREF_IDS.includes(v.prefCode)),
  }
}
