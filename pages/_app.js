import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import UserContextProvider from '../contexts/UserContext'
import ReferralModalContextProvider from '../contexts/ReferralContext'

function MyApp({ Component, pageProps }) {

  return (
    <UserContextProvider>
      <ReferralModalContextProvider>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ReferralModalContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
