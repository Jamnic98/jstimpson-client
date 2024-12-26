import React from 'react'
import Link from 'next/link'

import { useWidth } from 'utils'
import { MOBILE_SCREEN_WIDTH } from 'utils/constants'

export interface NavLogoProps {
  linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({ linkURL = '/' }) => {
  const width = useWidth()

  return (
    <Link
      className="text-3xl font-bold tracking-wide text-orange-600 transition-colors duration-300 ease-in-out hover:text-neutral-300"
      href={linkURL}
    >
      {width && (width >= MOBILE_SCREEN_WIDTH ? 'Jamie Stimpson' : 'JS')}
    </Link>
  )
}
