import Head from 'next/head'
import { Contact, OrderSuccessPopup } from '@/ksh-components'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'

export default function ContactPage() {
  const { showOrderSuccessPopup } = useContext(CartStates)
  return (
    <>
      <Head>
        <title>Contact - Kyaw San Htoo - Pharmacy in Pathein</title>
      </Head>
      {showOrderSuccessPopup && <OrderSuccessPopup />}
      <Contact />
    </>
  )
}
