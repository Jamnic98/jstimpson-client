'use client'

import { Inter } from 'next/font/google'

import { Footer, Header, /* MenuToggle, */ NavLogo, NavLink } from 'components'
import { navLinkDataArr } from 'utils'
import { type NavLinkData } from 'types'

import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] }) // Load Inter font

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Header>
          {/* <MenuToggle /> */}
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
