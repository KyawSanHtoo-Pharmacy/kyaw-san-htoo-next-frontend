import Head from 'next/head'
import { Navbar, Footer } from '@/ksh-components'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from '@/ksh-theme/theme'
import GlobalStyles from '@/ksh-styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kyaw San Htoo - Pharmacy in Pathein</title>
        <meta name='description' content='The very first online pharmacy based in Pathein' />
        <meta name='keywords' content='' />
        <link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles theme={lightTheme} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
