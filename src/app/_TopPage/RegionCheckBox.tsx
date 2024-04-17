'use client'

import { useCallback } from 'react'

import CheckBox from '@/components/atom/CheckBox'
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
    (isChecked: boolean, prefCode: number) => {
      if (isChecked) {
        // ONにする
        setSelectedPrefList((prev) => [...prev, prefCode])
      } else {
        // OFFにする
        setSelectedPrefList((prev) => prev.filter((v) => v !== prefCode))
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
            onChange={(e) => handleChange(e.target.checked, v.prefCode)}
          />
        ))}
      </div>
    </div>
  )
}
