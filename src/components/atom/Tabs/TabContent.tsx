'use client'
import { ReactNode, useContext } from 'react'

import { TabContext } from '@/components/context/TabProvider'

type Props = {
  value: string
  children?: ReactNode
}

export default function TabContent({ value, children }: Props) {
  const { currentValue } = useContext(TabContext)
  const isActive = currentValue === value

  if (!isActive) return null

  return <div>{children}</div>
}
