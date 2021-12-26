import { Error } from '@/ksh-components'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { OrderSuccessPopup } from '@/ksh-components'

export default function NotFoundPage() {
  const { showOrderSuccessPopup } = useContext(CartStates)
  return (
    <>
      {showOrderSuccessPopup && <OrderSuccessPopup />}
      <Error message='ဒီပေ့ခ်ျ ကျွန်မတို့ဝက်ဘ်ဆိုက်မှာမရှိဘူး ကိုငြိမ်းမောင်' status='Error : 404 Page Not Found' />
    </>
  )
}
