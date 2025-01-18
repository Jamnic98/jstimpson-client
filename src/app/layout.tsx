'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'

import { Footer, Header, MenuToggle, NavLogo, NavLink } from 'components'
import { navLinkDataArr } from 'utils'
import { type NavLinkData } from 'types'

import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] }) // Load Inter font

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode
  }>
> = ({ children }) => {
  const [isOpen] = useState(false)

  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Header>
          <MenuToggle isOpen={isOpen} />
          <NavLogo />
          <nav className="flex h-full flex-row">
            {navLinkDataArr.map((navLinkData: NavLinkData) => (
              <NavLink navlinkObj={navLinkData} key={navLinkData.label} />
            ))}
          </nav>
        </Header>
        <main className="container mx-auto max-w-screen-xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
