import Head from 'next/head'
import { wrapper } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
import { persistStore } from 'redux-persist'
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }): JSX.Element => {
  const store = useStore()

  const __persistor = persistStore(store)

  return (
    <>
      <Head>
        <title>Connect Now</title>
        <link rel="icon" href="/fav.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PersistGate persistor={__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  )
}

export default wrapper.withRedux(MyApp)
