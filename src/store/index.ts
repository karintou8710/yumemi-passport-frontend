import { atom } from 'recoil'

export const selectedPrefListState = atom<number[]>({
  key: 'selectedPrefList',
  default: [],
})
