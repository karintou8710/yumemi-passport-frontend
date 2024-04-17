import { ResasPopulationCompositionWithPref } from '@/types'
import { atom } from 'recoil'

export const selectedPrefListState = atom<ResasPopulationCompositionWithPref[]>({
  key: 'selectedPrefList',
  default: [],
})
