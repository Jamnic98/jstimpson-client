'use client'
import { Inter } from 'next/font/google'

import { Footer, Header, MenuToggle, NavLogo } from 'components'

import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <Header>
          <MenuToggle />
          <NavLogo />
        </Header>
        <main className="custom-container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
