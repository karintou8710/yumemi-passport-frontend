import '@fontsource/noto-sans-jp'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '@/app/globals.css'
import RecoilProvider from '@/components/context/RecoilProvider'
import Footer from '@/components/usecase/Footer'
import Header from '@/components/usecase/Header'
import Loading from '@/components/usecase/Loading'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'トップページ | PreP',
  description: 'PrePでは都道府県別の人口構成の推移をグラフで視覚的に確認することができます。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja' className='h-full'>
      <body className='h-full bg-gray-100'>
        <RecoilProvider>
          <Header />
          {children}
          <Footer />
          <Loading />
        </RecoilProvider>
      </body>
    </html>
  )
}
