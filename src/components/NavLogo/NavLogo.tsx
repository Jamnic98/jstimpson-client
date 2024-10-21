import React from 'react'
import Link from 'next/link'

import { useWidth } from 'utils'
import styles from './navLogo.module.css'

export interface NavLogoProps {
	handleClick?: () => void
	linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({
	handleClick,
	linkURL = '/',
}) => {
	const width = useWidth() || 800

	return (
		<Link
			className={styles.navLogo}
			href={linkURL}
			onClick={handleClick ? () => handleClick() : undefined}
		>
			{width >= 800 ? 'Jamie Stimpson' : 'JS'}
		</Link>
	)
}
