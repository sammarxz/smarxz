import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

import '@/styles/main.css'

import { AppContextProvider } from '@/context/state'

const myFont = localFont({ src: '../public/fonts/NeueHaasDisplayRoman.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.className} container`}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </main>
  )
}
