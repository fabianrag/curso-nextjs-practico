import Head from 'next/head'
import '../styles/globals.css'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import Header from '@components/Header'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default MyApp
