import Head from 'next/head'
import { Navbar, Footer } from '@/ksh-components'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/ksh-theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kyaw San Htoo Pharmacy</title>
        <meta name='description' content='The very first online pharmacy based in Pathein' />
        <meta name='keywords' content='' />
        <link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
