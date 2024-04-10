import '@/app/globals.css'
import Footer from '@/components/usecase/Footer'
import Header from '@/components/usecase/Header'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='h-full'>
      <body className='h-full'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
