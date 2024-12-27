'use client'
// import { useState } from 'react'

export interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div id="header" className="top-0 z-10 h-16 bg-gray-950" aria-label="header">
    <div className="container relative flex h-full items-center">{children}</div>
  </div>
)

// import { MobileMenuToggle, Navlink, NavLogo } from 'components'
// import { type NavLinkData } from 'types'

// // navLinkDataArr: NavLinkData[]

// const [isOpen, setIsOpen] = useState(false)
// const handleClick = () => setIsOpen(!isOpen)

// <MobileMenuToggle handleClick={handleClick} isOpen={isOpen} />
// <NavLogo />
{
  /* <div>
  {navLinkDataArr.map((navlinkObj, index) => (
    <Navlink onClick={() => setIsOpen(false)} navlinkObj={navlinkObj} key={index} />
  ))}
</div> */
}
