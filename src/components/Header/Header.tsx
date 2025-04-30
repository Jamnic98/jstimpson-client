'use client'
// import { useState } from 'react'

export interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div id="header" className="relative top-0 z-10 h-16 bg-gray-950" aria-label="header">
    <div
      id="header-content"
      className="container mx-auto flex h-full max-w-(--breakpoint-xl) flex-row items-center justify-between px-8"
    >
      {children}
    </div>
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
