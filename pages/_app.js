import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import BonusContextProvider from '../contexts/BonusContext'

function MyApp({ Component, pageProps }) {

  return (
    <Layout >

      <Component {...pageProps} />


    </Layout>
  )
}

export default MyApp
