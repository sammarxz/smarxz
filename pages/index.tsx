import { useEffect } from 'react';
import Head from 'next/head'
import { isBrowser } from 'framer-motion';

import { Header, Projects } from '@/components'

export default function Home() {
  useEffect(() => {
    if (!isBrowser) return;
    window.location.replace("#");

    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sam Marxz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <main className='main container container--large'>
          <Projects />
        </main>
      </>
    </>
  )
}
