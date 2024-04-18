'use client'
import { ReactNode, useState } from 'react'

import TabProvider from '@/components/context/TabProvider'
import { tv } from 'tailwind-variants'

const tabsStyle = tv({
  base: '',
})

type Props = {
  value: string
  className?: string
  children?: ReactNode
}

export default function Tabs({ value, className, children }: Props) {
  const [currentValue, setCurrentValue] = useState(value)

  return (
    <TabProvider
      value={{
        currentValue: currentValue,
        setCurrentValue: setCurrentValue,
      }}
    >
      <div className={tabsStyle({ className })}>{children}</div>
    </TabProvider>
  )
}
