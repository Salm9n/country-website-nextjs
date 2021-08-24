import Layout from '../components/Layout'
import Head from 'next/head'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useContext, useEffect, useState } from 'react'
import {NightContext, NightProvider } from '../contexts/nightmode'
import { ThemeProvider } from "next-themes";

// This default export is required in a new `pages/_app.js` file.
  const MyApp = ({ Component, pageProps, router }) => {

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
 <ThemeProvider attribute="class"> 
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
</>
  )
}

export default MyApp;

