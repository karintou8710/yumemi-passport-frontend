import { ReactNode } from 'react'

import { type VariantProps, tv } from 'tailwind-variants'

const tabHeaderStyle = tv({
  base: 'flex gap-4',
  variants: {
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
  },
})

type Props = VariantProps<typeof tabHeaderStyle> & {
  className?: string
  children?: ReactNode
}

export default function TabHeader({ align = 'left', className, children }: Props) {
  return <div className={tabHeaderStyle({ align, className })}>{children}</div>
}
