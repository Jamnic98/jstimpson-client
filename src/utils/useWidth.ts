'use client'

import { useEffect, useState } from 'react'

export const useWidth = () => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize() // Set initial width
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return width
}
