'use client'

import { useCallback } from 'react'

import CheckBox from '@/components/atom/CheckBox'
import { fetchResasPopulationCompositionAction } from '@/server/actions/prefecture'
import { selectedPrefListState } from '@/store'
import { ResasPrefecture } from '@/types/api'
import { useRecoilState } from 'recoil'

type Props = {
  title: string
  prefectures: ResasPrefecture[]
  className?: string
}

export default function RegionCheckBox({ title, prefectures, className }: Props) {
  const [_, setSelectedPrefList] = useRecoilState(selectedPrefListState)

  const handleChange = useCallback(
    async (isChecked: boolean, prefCode: number, prefName: string) => {
      if (isChecked) {
        // ONにする

        // Server Actionで県データを取得(API KEYを隠すため)
        const res = await fetchResasPopulationCompositionAction({
          prefCode: prefCode,
        })
        setSelectedPrefList((prev) => [
          ...prev,
          {
            prefCode: prefCode,
            prefName: prefName,
            ...res.result,
          },
        ])
      } else {
        // OFFにする
        setSelectedPrefList((prev) => prev.filter((v) => v.prefCode !== prefCode))
      }
    },
    [setSelectedPrefList],
  )

  return (
    <div className={className}>
      <h2 className='mb-4 text-2xl before:mr-2 before:rounded-full before:border-l-8 before:border-lime-400'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-x-6 gap-y-4'>
        {prefectures.map((v) => (
          <CheckBox
            key={v.prefCode}
            label={v.prefName}
            onChange={(e) => handleChange(e.target.checked, v.prefCode, v.prefName)}
          />
        ))}
      </div>
    </div>
  )
}
