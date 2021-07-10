import Layout from '../components/Layout'
import Head from 'next/head'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {
render() {
  const { Component, pageProps, router } = this.props

  if (router.pathname == '/') {
    return (
      <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
        <Component {...pageProps} />
    </>
    )
  }
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
}
export default MyApp