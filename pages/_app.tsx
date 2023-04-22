import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

import '@/styles/main.css'

import { AppProvider } from '@/context/AppProvider'

const myFont = localFont({ src: '../public/fonts/NeueHaasDisplayRoman.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.className} container`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  )
}
