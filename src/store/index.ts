import {
  ResasElderlyPopulationWithPref,
  ResasPopulationCompositionWithPref,
  ResasTotalPopulationWithPref,
  ResasWorkingPopulationWithPref,
  ResasYoungPopulationWithPref,
} from '@/types'
import {
  ResasElderlyPopulation,
  ResasTotalPopulation,
  ResasWorkingPopulation,
  ResasYoungPopulation,
} from '@/types/api'
import { atom, selector } from 'recoil'

export const selectedPrefListState = atom<ResasPopulationCompositionWithPref[]>({
  key: 'selectedPrefList',
  default: [],
})

export const selectedTotalPrefListSelector = selector<ResasTotalPopulationWithPref[]>({
  key: 'selectedTotalPrefListSelector',
  get: ({ get }) => {
    const selectedPrefList = get(selectedPrefListState)
    const totalPopulation = selectedPrefList.map<ResasTotalPopulationWithPref>((pref) => {
      const d = pref.data.find((v) => v.label === '総人口') as ResasTotalPopulation
      return {
        prefCode: pref.prefCode,
        prefName: pref.prefName,
        ...d,
      }
    })
    return totalPopulation
  },
})

export const selectedYoungPrefListSelector = selector<ResasYoungPopulationWithPref[]>({
  key: 'selectedYoungPrefListSelector',
  get: ({ get }) => {
    const selectedPrefList = get(selectedPrefListState)
    const youngPopulation = selectedPrefList.map<ResasYoungPopulationWithPref>((pref) => {
      const d = pref.data.find((v) => v.label === '年少人口') as ResasYoungPopulation
      return {
        prefCode: pref.prefCode,
        prefName: pref.prefName,
        ...d,
      }
    })
    return youngPopulation
  },
})

export const selectedWorkingPrefListSelector = selector<ResasWorkingPopulationWithPref[]>({
  key: 'selectedWorkingPrefListSelector',
  get: ({ get }) => {
    const selectedPrefList = get(selectedPrefListState)
    const workingPopulation = selectedPrefList.map<ResasWorkingPopulationWithPref>((pref) => {
      const d = pref.data.find((v) => v.label === '生産年齢人口') as ResasWorkingPopulation
      return {
        prefCode: pref.prefCode,
        prefName: pref.prefName,
        ...d,
      }
    })
    return workingPopulation
  },
})

export const selectedElderlyPrefListSelector = selector<ResasElderlyPopulationWithPref[]>({
  key: 'selectedElderlyPrefListSelector',
  get: ({ get }) => {
    const selectedPrefList = get(selectedPrefListState)
    const elderlyPopulation = selectedPrefList.map<ResasElderlyPopulationWithPref>((pref) => {
      const d = pref.data.find((v) => v.label === '老年人口') as ResasElderlyPopulation
      return {
        prefCode: pref.prefCode,
        prefName: pref.prefName,
        ...d,
      }
    })
    return elderlyPopulation
  },
})
