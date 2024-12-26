import React from 'react'
import Link from 'next/link'

import { useWidth } from 'utils'
import { MOBILE_SCREEN_WIDTH } from 'utils/constants'

export interface NavLogoProps {
  linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({ linkURL = '/' }) => {
  const width = useWidth() || MOBILE_SCREEN_WIDTH

  return (
    <Link
      className="font-bold leading-8 text-orange-600 transition-colors duration-300 ease-in-out hover:text-neutral-light"
      href={linkURL}
    >
      {width >= MOBILE_SCREEN_WIDTH ? 'Jamie Stimpson' : 'JS'}
    </Link>
  )
}
// test comment
