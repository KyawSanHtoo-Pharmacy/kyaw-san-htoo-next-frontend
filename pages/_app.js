import Head from 'next/head'
import { Navbar, Footer } from '@/ksh-components'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from '@/ksh-theme/theme'
import GlobalStyles from '@/ksh-styles/GlobalStyles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function MyKSHApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Kyaw San Htoo - Pharmacy in Pathein</title>
        <meta name='description' content='The very first online pharmacy based in Pathein' />
        <meta name='keywords' content='' />
        <link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&display=swap'
          rel='stylesheet'
        />
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

export default MyKSHApp
