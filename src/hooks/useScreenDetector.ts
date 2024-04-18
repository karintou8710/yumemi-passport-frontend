'use client'
import { useEffect, useState } from 'react'

export const useScreenDetector = () => {
  const [width, setWidth] = useState(0)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isSm = width <= 640
  const isMd = width <= 768
  const isLg = width <= 1024
  const isDesktop = width > 1024

  return { isSm, isMd, isLg, isDesktop }
}
