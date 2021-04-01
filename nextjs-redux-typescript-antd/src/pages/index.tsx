import { FC } from 'react'
import Home from '../components/Home/Home'
import Head from 'next/head'

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta name="title" content="Next.js" />
        <meta name="description" content="Next.js Description" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Next.js" />
        <meta property="og:description" content="Next.js Description" />
        <meta property="og:image" content="/placeholder.png" />

        <meta property="twitter:card" content="Next.js Description" />
        <meta property="twitter:title" content="Next.js" />
        <meta property="twitter:description" content="Next.js Description" />
        <meta property="twitter:image" content="/placeholder.png" />
      </Head>
      <Home />
    </>
  )
}

export default Index
