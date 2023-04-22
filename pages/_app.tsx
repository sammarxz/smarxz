import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';

import { AppProvider } from '@/context/AppProvider'

import { GoogleAnalytics } from '@/components'

import '@/styles/main.css'

const myFont = localFont({ src: '../public/fonts/NeueHaasDisplayRoman.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={`${myFont.className} container`}>
        <>
          <Component {...pageProps} />
          <GoogleAnalytics />
          <Analytics />
        </>
      </main>
    </AppProvider>
  )
}
