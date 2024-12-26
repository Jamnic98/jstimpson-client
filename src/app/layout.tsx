import { Inter } from 'next/font/google'
import { Navbar, Footer } from 'components'
import { navlinkObjArr } from 'utils/constants'
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
        <Navbar navlinkObjArr={navlinkObjArr} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
