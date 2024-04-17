import { ComponentPropsWithoutRef } from 'react'

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label?: string
}

export default function CheckBox({ label, ...props }: Props) {
  return (
    <label className='flex cursor-pointer items-center gap-2'>
      <div>
        <input type='checkbox' className='peer hidden' {...props} />
        <div
          className='relative size-6 rounded border-2
                    peer-checked:border-none
                  peer-checked:bg-lime-400
                    peer-checked:before:absolute
                    peer-checked:before:left-2.5
                    peer-checked:before:top-[5px]
                    peer-checked:before:block
                    peer-checked:before:h-3
                    peer-checked:before:w-1.5
                    peer-checked:before:rotate-45
                    peer-checked:before:border-b-[3px]
                    peer-checked:before:border-r-[3px]
                    peer-checked:before:border-white
                    peer-checked:before:content-[""]'
        />
      </div>

      <span>{label}</span>
    </label>
  )
}
