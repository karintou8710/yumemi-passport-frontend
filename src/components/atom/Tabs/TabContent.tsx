'use client'
import { ReactNode, useContext } from 'react'

import { TabContext } from '@/components/context/TabProvider'
import { tv } from 'tailwind-variants'

const tabContentStyle = tv({
  base: '',
})

type Props = {
  value: string
  className?: string
  children?: ReactNode
}

export default function TabContent({ value, className, children }: Props) {
  const { currentValue } = useContext(TabContext)
  const isActive = currentValue === value

  if (!isActive) return null

  return <div className={tabContentStyle({ className })}>{children}</div>
}
