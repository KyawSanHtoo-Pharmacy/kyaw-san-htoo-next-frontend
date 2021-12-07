import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Navbar, MobileNav, Footer, MinimalFooter } from '@/ksh-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/ksh-theme/theme'
import { Cart } from '@/ksh-components'
import { CartProvider } from '@/ksh-contexts/Cart-Context'
import { GlobalStyles } from '@/ksh-styles/GlobalStyles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let progressBarTimeout = null
const startProgressBar = () => {
  clearTimeout(progressBarTimeout)
  progressBarTimeout = setTimeout(NProgress.start, 200)
}
const stopProgressBar = () => {
  clearTimeout(progressBarTimeout)
  NProgress.done()
}
Router.events.on('routeChangeStart', () => startProgressBar())
Router.events.on('routeChangeComplete', () => stopProgressBar())
Router.events.on('routeChangeError', () => stopProgressBar())
NProgress.configure({ showSpinner: false })

function MyKSHApp({ Component, pageProps }) {
  const router = useRouter()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
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
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <CartProvider>
          <Navbar isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
          {isMobileNavOpen && <MobileNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />}
          <Cart />
          <Component {...pageProps} />
        </CartProvider>
        {router.pathname === '/contact' ? <MinimalFooter /> : <Footer />}
      </ThemeProvider>
    </>
  )
}

export default MyKSHApp
