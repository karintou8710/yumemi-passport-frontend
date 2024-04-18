import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const tabBodyStyle = tv({
  base: '',
})

type Props = {
  className?: string
  children?: ReactNode
}

export default function TabBody({ className, children }: Props) {
  return <div className={tabBodyStyle({ className })}>{children}</div>
}
