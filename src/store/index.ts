import { ResasPopulationCompositionWithPref, ResasTotalPopulationWithPref } from '@/types'
import { ResasTotalPopulation } from '@/types/api'
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
