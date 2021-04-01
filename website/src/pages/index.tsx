import { FC, useEffect } from 'react'
import Home from '../components/Home/Home'
import Head from 'next/head'
import { IIndexProps, IUser } from '../types'
import axios from 'axios'
import { apiUrl } from '../config/vars'
import { useDispatch } from 'react-redux'
import { loadUsers } from '../store/actions/users'

const Index: FC<{ users: IUser[] }> = ({ users }) => {
  const dispatch = useDispatch()

  const usersImport = (): void => {
    setTimeout(() => {
      dispatch(loadUsers(users))
    }, 2000)
  }

  useEffect(() => {
    usersImport()
  }, [])

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

export async function getServerSideProps(): Promise<IIndexProps> {
  const response = await axios.get(apiUrl.uri)

  return {
    props: {
      users: response.data,
    }, // will be passed to the page component as props
  }
}

export default Index
