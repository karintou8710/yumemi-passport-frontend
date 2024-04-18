'use client'
import { ReactNode, useCallback, useContext } from 'react'

import { TabContext } from '@/components/context/TabProvider'

type Props = {
  value: string
  children?: ReactNode
}

export default function Tab({ value, children }: Props) {
  const { currentValue, setCurrentValue } = useContext(TabContext)
  const isActive = currentValue === value

  const handleClick = useCallback(() => {
    setCurrentValue?.(value)
  }, [setCurrentValue, value])

  return (
    <div className='cursor-pointer' onClick={handleClick}>
      {children}
    </div>
  )
}
