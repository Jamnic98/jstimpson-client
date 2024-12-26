'use client'
import { Inter } from 'next/font/google'

import { Header, Footer, NavLogo } from 'components'
// import { navLinkDataArr } from 'utils/constants'
import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <NavLogo />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
