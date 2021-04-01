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
        <title>Sovrakofanela.gr</title>
        <link rel="icon" href="/fav.jpg" />
      </Head>

      <PersistGate persistor={__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  )
}

export default wrapper.withRedux(MyApp)
