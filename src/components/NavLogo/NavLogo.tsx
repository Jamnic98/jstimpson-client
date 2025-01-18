'use client'

import Link from 'next/link'

import { MOBILE_SCREEN_WIDTH, useWidth } from 'utils'

export interface NavLogoProps {
  linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({ linkURL = '/' }) => {
  const width = useWidth()

  return (
    <Link
      className="text-4xl font-bold tracking-wide text-orange-600 transition-colors duration-300 ease-in-out hover:text-neutral"
      href={linkURL}
    >
      {width && (width >= MOBILE_SCREEN_WIDTH ? 'Jamie Stimpson' : 'JS')}
    </Link>
  )
}
