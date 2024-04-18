import {
  ResasElderlyPopulation,
  ResasPopulationComposition,
  ResasPrefecture,
  ResasTotalPopulation,
  ResasWorkingPopulation,
  ResasYoungPopulation,
} from '@/types/api'

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

export type ResasTotalPopulationWithPref = ResasTotalPopulation & {
  prefCode: number
  prefName: string
}

export type ResasYoungPopulationWithPref = ResasYoungPopulation & {
  prefCode: number
  prefName: string
}

export type ResasWorkingPopulationWithPref = ResasWorkingPopulation & {
  prefCode: number
  prefName: string
}

export type ResasElderlyPopulationWithPref = ResasElderlyPopulation & {
  prefCode: number
  prefName: string
}
