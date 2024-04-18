'use client'
import { ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'

import TabProvider from '@/components/context/TabProvider'

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
