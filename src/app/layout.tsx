'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Footer, Header, MenuToggle, NavLogo, NavLink } from 'components'
import { MOBILE_SCREEN_WIDTH, navLinkDataArr, useWidth } from 'utils'
import { type NavLinkData } from 'types'

import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] }) // Load Inter font

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode
  }>
> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)

  const isMobile = (useWidth() || MOBILE_SCREEN_WIDTH) < MOBILE_SCREEN_WIDTH

  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Header>
          <NavLogo />
          <nav
            className={`flex h-full bg-gray-950 ${isMobile ? `absolute top-0 left-0 h-max w-full translate-y-16 flex-col ${isOpen ? '' : 'hidden'}` : 'transition-none'} `}
          >
            {navLinkDataArr.map((navLinkData: NavLinkData) => (
              <NavLink
                onClick={() => setIsOpen(false)}
                navlinkObj={navLinkData}
                key={navLinkData.label}
              />
            ))}
          </nav>
          <MenuToggle isOpen={isOpen} onClick={handleOnClick} />
        </Header>
        <main className="container mx-auto max-w-(--breakpoint-xl) px-6">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
