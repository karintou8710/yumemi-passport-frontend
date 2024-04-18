'use client'

import { useRecoilValue } from 'recoil'

import { isLoadingState } from '@/store'

export default function Loading() {
  const isLoading = useRecoilValue(isLoadingState)

  return (
    <>
      {isLoading && (
        <div className='fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-scroll overscroll-contain bg-black opacity-30'>
          <div className='size-20 animate-spin rounded-full border-4 border-white border-t-transparent' />
          <div className='h-[calc(100vh+1px)] w-px bg-transparent' />
        </div>
      )}
    </>
  )
}
