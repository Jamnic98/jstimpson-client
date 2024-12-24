'use client'
import { useState } from 'react'

import { MobileMenuToggle, Navlink, NavLogo } from 'components'
import { NavlinkData } from 'types'

export interface NavbarProps {
	navlinkObjArr: NavlinkData[]
}

export const Navbar: React.FC<NavbarProps> = ({ navlinkObjArr }) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleClick = () => setIsOpen(!isOpen)

	return (
		<nav id="navbar" className="">
			<span className="container">
				<MobileMenuToggle handleClick={handleClick} isOpen={isOpen} />
				<NavLogo />
				<span>
					{navlinkObjArr.map((navlinkObj, index) => (
						<Navlink onClick={() => setIsOpen(false)} navlinkObj={navlinkObj} key={index} />
					))}
				</span>
			</span>
		</nav>
	)
}
