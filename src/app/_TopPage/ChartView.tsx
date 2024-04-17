'use client'

import { selectedPrefListState } from '@/store'
import { useRecoilState } from 'recoil'

type Props = {
  className?: string
}

export default function ChartView({ className }: Props) {
  const [selectedPrefList, _] = useRecoilState(selectedPrefListState)

  return <div className={className}></div>
}
