import Layout from '../components/Layout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</>
  )
}