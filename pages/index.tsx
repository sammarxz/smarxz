import { useEffect } from 'react';
import Head from 'next/head'
import { isBrowser } from 'framer-motion';

import { client, query } from '@/config/sanity.config'

import { Header, Projects, Footer } from '@/components'

import { scrollToTop } from '@/utils';

import { ProjectType } from '@/types/project.type';
import { AboutType } from '@/types/about.types';

type HomeProps = {
  projects: ProjectType[]
  info: AboutType[]
}

export default function Home({ projects, info }: HomeProps) {
  const { title, description } = info[0]

  useEffect(() => {
    if (!isBrowser) return;

    window.location.replace("#");
    scrollToTop()

    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="image" content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3DDwMQNgpgHgUABHAzlAvAbzfBcBmB7AOwBcQBDAWwEswBPALjgHIA5CAVwjgAlTTE4A4gCc8RCIgDWcACKVEABzCkacAAojGAGiwJ8xAOoRKAcwAWRBgFYADNe3ZchIgGVKALwgMAzJfvYckFCyQhAAxkSUhAyMoXhgbOQEWjpwpkZmFkwAjLYApMkO8qQAJsWUBMbRABzW8lBwNXWMWAC%252BLTAAfFjAADLlEimmITgojOZE8oh0APTTekSIAHShxQTzS7Hk06GIiNME7BAAtKa8iEfGImKSR2UKSjRH8hopIWCjiEQ0kIhpEETNBDTLoIUCBJCoDBwYykeQMABMdjgpDAJgIAEkxOQpkxQhBiBAhIw4G0QdhgAAhPCwBwIPijSjkYyA2mIIShUbjSYzabyCDFRYiaakABupCIpCEi3kFRZDmQ6EwtOwACM8EJioSAEolShsHGMACcxsNTT8yruimU0RVYDwoQkBWVcAA7pRikRTN5fCkHGkTOZvb6Se0HMCUsAACrQIgQxWOAzpQNwGzWEMdZwUOAAWUlUDcwGm0agRDJhfA0C63WLsYVUPImSR5DAVks6ek4jRhLgAFFjOUIITCzWuuXAh0gA%23" />
        <meta itemProp="image" content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3DDwMQNgpgHgUABHAzlAvAbzfBcBmB7AOwBcQBDAWwEswBPALjgHIA5CAVwjgAlTTE4A4gCc8RCIgDWcACKVEABzCkacAAojGAGiwJ8xAOoRKAcwAWRBgFYADNe3ZchIgGVKALwgMAzJfvYckFCyQhAAxkSUhAyMoXhgbOQEWjpwpkZmFkwAjLYApMkO8qQAJsWUBMbRABzW8lBwNXWMWAC%252BLTAAfFjAADLlEimmITgojOZE8oh0APTTekSIAHShxQTzS7Hk06GIiNME7BAAtKa8iEfGImKSR2UKSjRH8hopIWCjiEQ0kIhpEETNBDTLoIUCBJCoDBwYykeQMABMdjgpDAJgIAEkxOQpkxQhBiBAhIw4G0QdhgAAhPCwBwIPijSjkYyA2mIIShUbjSYzabyCDFRYiaakABupCIpCEi3kFRZDmQ6EwtOwACM8EJioSAEolShsHGMACcxsNTT8yruimU0RVYDwoQkBWVcAA7pRikRTN5fCkHGkTOZvb6Se0HMCUsAACrQIgQxWOAzpQNwGzWEMdZwUOAAWUlUDcwGm0agRDJhfA0C63WLsYVUPImSR5DAVks6ek4jRhLgAFFjOUIITCzWuuXAh0gA%23" />
        <meta name="twitter:image" content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3DDwMQNgpgHgUABHAzlAvAbzfBcBmB7AOwBcQBDAWwEswBPALjgHIA5CAVwjgAlTTE4A4gCc8RCIgDWcACKVEABzCkacAAojGAGiwJ8xAOoRKAcwAWRBgFYADNe3ZchIgGVKALwgMAzJfvYckFCyQhAAxkSUhAyMoXhgbOQEWjpwpkZmFkwAjLYApMkO8qQAJsWUBMbRABzW8lBwNXWMWAC%252BLTAAfFjAADLlEimmITgojOZE8oh0APTTekSIAHShxQTzS7Hk06GIiNME7BAAtKa8iEfGImKSR2UKSjRH8hopIWCjiEQ0kIhpEETNBDTLoIUCBJCoDBwYykeQMABMdjgpDAJgIAEkxOQpkxQhBiBAhIw4G0QdhgAAhPCwBwIPijSjkYyA2mIIShUbjSYzabyCDFRYiaakABupCIpCEi3kFRZDmQ6EwtOwACM8EJioSAEolShsHGMACcxsNTT8yruimU0RVYDwoQkBWVcAA7pRikRTN5fCkHGkTOZvb6Se0HMCUsAACrQIgQxWOAzpQNwGzWEMdZwUOAAWUlUDcwGm0agRDJhfA0C63WLsYVUPImSR5DAVks6ek4jRhLgAFFjOUIITCzWuuXAh0gA%23" />
        <meta property="og:image" content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3DDwMQNgpgHgUABHAzlAvAbzfBcBmB7AOwBcQBDAWwEswBPALjgHIA5CAVwjgAlTTE4A4gCc8RCIgDWcACKVEABzCkacAAojGAGiwJ8xAOoRKAcwAWRBgFYADNe3ZchIgGVKALwgMAzJfvYckFCyQhAAxkSUhAyMoXhgbOQEWjpwpkZmFkwAjLYApMkO8qQAJsWUBMbRABzW8lBwNXWMWAC%252BLTAAfFjAADLlEimmITgojOZE8oh0APTTekSIAHShxQTzS7Hk06GIiNME7BAAtKa8iEfGImKSR2UKSjRH8hopIWCjiEQ0kIhpEETNBDTLoIUCBJCoDBwYykeQMABMdjgpDAJgIAEkxOQpkxQhBiBAhIw4G0QdhgAAhPCwBwIPijSjkYyA2mIIShUbjSYzabyCDFRYiaakABupCIpCEi3kFRZDmQ6EwtOwACM8EJioSAEolShsHGMACcxsNTT8yruimU0RVYDwoQkBWVcAA7pRikRTN5fCkHGkTOZvb6Se0HMCUsAACrQIgQxWOAzpQNwGzWEMdZwUOAAWUlUDcwGm0agRDJhfA0C63WLsYVUPImSR5DAVks6ek4jRhLgAFFjOUIITCzWuuXAh0gA%23" />
      </Head>
      <>
        <Header />
        <Projects projects={projects} />
        <Footer />
      </>
    </>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(query)
  const info = await client.fetch('*[_type == "siteInfo"]')

  return {
    props: {
      projects,
      info
    }
  }
}