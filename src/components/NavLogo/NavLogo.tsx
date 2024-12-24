import React from 'react'
import Link from 'next/link'

import { useWidth } from 'utils'

export interface NavLogoProps {
  linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({ linkURL = '/' }) => {
  const width = useWidth() || 800

  return (
    <Link
      className=" font-bold text-orange-600 hover:text-neutral-light transition-colors duration-300 ease-in-out"
      href={linkURL}
    >
      {width >= 800 ? 'Jamie Stimpson' : 'JS'}
    </Link>
  )
}
// test comment
