'use client'
import { ReactNode, useCallback, useContext } from 'react'
import { tv } from 'tailwind-variants'

import { TabContext } from '@/components/context/TabProvider'

const tabStyle = tv({
  base: 'cursor-pointer px-2 pb-1',
  variants: {
    isActive: {
      true: 'border-b-4 border-lime-400',
    },
  },
})

type Props = {
  value: string
  className?: string
  children?: ReactNode
}

export default function Tab({ value, className, children }: Props) {
  const { currentValue, setCurrentValue } = useContext(TabContext)
  const isActive = currentValue === value

  const handleClick = useCallback(() => {
    setCurrentValue?.(value)
  }, [setCurrentValue, value])

  return (
    <div className={tabStyle({ isActive, className })} onClick={handleClick}>
      {children}
    </div>
  )
}
