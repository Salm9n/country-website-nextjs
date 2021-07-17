import Layout from '../components/Layout'
import Head from 'next/head'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {

  useEffect(() => {
      typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  
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
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</>
  )
}

