import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar, Footer, MinimalFooter } from '@/ksh-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/ksh-theme/theme'
import { Cart } from '@/ksh-components'
import { CartProvider } from '@/ksh-contexts/Cart-Context'
import { GlobalStyles } from '@/ksh-styles/GlobalStyles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function MyKSHApp({ Component, pageProps }) {
  const router = useRouter()
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
          <Navbar />
          <Cart />
          <Component {...pageProps} />
        </CartProvider>
        {router.pathname === '/contact' ? <MinimalFooter /> : <Footer />}
      </ThemeProvider>
    </>
  )
}

export default MyKSHApp
