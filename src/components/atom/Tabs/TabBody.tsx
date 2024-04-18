import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function TabBody({ children }: Props) {
  return <div>{children}</div>
}
