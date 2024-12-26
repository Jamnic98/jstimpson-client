'use client'
import { useState } from 'react'
import Link from 'next/link'

// import { Caret, Dropdown } from 'components'
import { useWidth } from 'utils'
import { MOBILE_SCREEN_WIDTH } from 'utils/constants'
import { type NavlinkData } from 'types'

interface NavlinkProps {
  navlinkObj: NavlinkData
  onClick: () => void
}

export const Navlink: React.FC<NavlinkProps> = ({ navlinkObj, onClick: handleClick }) => {
  const [, /* isActive */ setIsActive] = useState(false)
  const { label, url, children } = navlinkObj
  const screenWidth = useWidth() || MOBILE_SCREEN_WIDTH
  return (
    <>
      {screenWidth >= MOBILE_SCREEN_WIDTH && children.length ? (
        <div
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
          onClick={handleClick}
        >
          <Link href={url}>{label}</Link>
          <div data-testid="dropdownContainer">
            {/* <Dropdown
							isOpen={isActive}
							items={children}
							render={(navlinkObj: NavlinkData) => (
								<Link className={styles.navlink} href={navlinkObj.url}>
									{navlinkObj.label}
								</Link>
							)}
						/> */}
          </div>
        </div>
      ) : (
        <Link href={url} onClick={handleClick}>
          {label}
        </Link>
      )}
    </>
  )
}
