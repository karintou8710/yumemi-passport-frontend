'use client'
import { ReactNode, useState } from 'react'

import TabProvider from '@/components/context/TabProvider'

type Props = {
  value: string
  children?: ReactNode
}

export default function Tabs({ value, children }: Props) {
  const [currentValue, setCurrentValue] = useState(value)

  return (
    <TabProvider
      value={{
        currentValue: currentValue,
        setCurrentValue: setCurrentValue,
      }}
    >
      <div>{children}</div>
    </TabProvider>
  )
}
