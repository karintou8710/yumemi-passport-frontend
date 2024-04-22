'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
}

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='mx-auto mt-0 max-w-screen-lg rounded-md bg-white px-4 py-8 text-center lg:my-16 lg:p-16'>
      <h2 className='text-lg'>実行時にエラーが発生しました。管理者にお問い合わせください。</h2>
    </div>
  )
}
