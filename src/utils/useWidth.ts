'use client'
import { useEffect, useState } from 'react'

type WindowDimensions = number | undefined

export const useWidth = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>()

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
