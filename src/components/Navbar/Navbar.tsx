'use client'
import { useState } from 'react'

import { MobileMenuToggle, Navlink, NavLogo } from 'components'
import { type NavlinkData } from 'types'

export interface NavbarProps {
  navlinkObjArr: NavlinkData[]
}

export const Navbar: React.FC<NavbarProps> = ({ navlinkObjArr }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <nav id="navbar" className="top-0 z-10 h-8 items-center bg-indigo-950">
      <div className="container">
        <MobileMenuToggle handleClick={handleClick} isOpen={isOpen} />
        <NavLogo />
        <div>
          {navlinkObjArr.map((navlinkObj, index) => (
            <Navlink onClick={() => setIsOpen(false)} navlinkObj={navlinkObj} key={index} />
          ))}
        </div>
      </div>
    </nav>
  )
}
