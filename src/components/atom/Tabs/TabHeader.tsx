import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function TabHeader({ children }: Props) {
  return <div className='flex gap-4'>{children}</div>
}
