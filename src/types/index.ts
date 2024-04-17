import { ResasPopulationComposition, ResasPrefecture } from '@/types/api'

export type PrefectureGroupByRegion = {
  hokkaidoTohoku: ResasPrefecture[]
  kanto: ResasPrefecture[]
  tyubu: ResasPrefecture[]
  kinki: ResasPrefecture[]
  tyugokuSikoku: ResasPrefecture[]
  kyusyuOkinawa: ResasPrefecture[]
}

export type ResasPopulationCompositionWithPref = ResasPopulationComposition & {
  prefCode: number
  prefName: string
}
