'use client'
import { useState } from 'react'
import classNames from 'classnames'

import { MobileMenuToggle, Navlink, NavLogo } from 'components'
import { type NavlinkDataType } from 'types'
import styles from './navbar.module.css'

export interface NavbarProps {
	navlinkObjArr: NavlinkDataType[]
}

export const Navbar: React.FC<NavbarProps> = ({ navlinkObjArr }) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleClick = () => setIsOpen(!isOpen)

	return (
		<nav className={styles.navbar} data-testid="application-navbar" aria-label="navbar">
			<span className="container">
				<MobileMenuToggle handleClick={handleClick} isOpen={isOpen} />
				<NavLogo />
				<span
					className={classNames(styles.navlinks, { [styles.open]: isOpen })}
					aria-label="navlinks"
				>
					{navlinkObjArr.map((navlinkObj, index) => (
						<Navlink onClick={() => setIsOpen(false)} navlinkObj={navlinkObj} key={index} />
					))}
				</span>
			</span>
		</nav>
	)
}
