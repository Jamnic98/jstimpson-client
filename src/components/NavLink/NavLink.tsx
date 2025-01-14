'use client'

// import { useState } from 'react'
import Link from 'next/link'

// import { Caret, Dropdown } from 'components'
// import { useWidth } from 'utils'
// import { MOBILE_SCREEN_WIDTH } from 'utils/constants'
import { type NavLinkData } from 'types'

interface NavlinkProps {
  navlinkObj: NavLinkData
  // onClick?: () => void
}

export const NavLink: React.FC<NavlinkProps> = ({ navlinkObj /* , onClick: handleClick */ }) => {
  // const [, /* isActive */ setIsActive] = useState(false)
  const { label, url /* , children  */ } = navlinkObj
  // const screenWidth = useWidth() || MOBILE_SCREEN_WIDTH
  return (
    <Link
      href={url}
      // onClick={handleClick}
      className="flex items-center justify-center px-6 text-3xl font-bold text-neutral-light hover:bg-orange-600"
    >
      {label}
    </Link>
    // <>
    //   {children.length ? (
    //     <Link
    //       href={url}
    //       className="flex items-center justify-center text-3xl font-bold text-neutral-light hover:bg-orange-600"
    //       onMouseOver={() => setIsActive(true)}
    //       onMouseOut={() => setIsActive(false)}
    //       onClick={handleClick}
    //     >
    //       {label}
    //       {/* <Dropdown
    //         isOpen={isActive}
    //         items={children}
    //         render={(navlinkObj: NavLinkData) => (
    //           <Link className={styles.navlink} href={navlinkObj.url}>
    //             {navlinkObj.label}
    //           </Link>
    //         )}
    //       /> */}
    //     </Link>
    //   ) : (

    //   )}
    // </>
  )
}
