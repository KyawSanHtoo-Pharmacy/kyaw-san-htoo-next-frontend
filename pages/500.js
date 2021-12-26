import { Error } from '@/ksh-components'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { OrderSuccessPopup } from '@/ksh-components'

export default function ServerErrorPage() {
  const { showOrderSuccessPopup } = useContext(CartStates)
  return (
    <>
      {showOrderSuccessPopup && <OrderSuccessPopup />}
      <Error message='ဆာဗာerror တတ်နေတယ် ကိုငြိမ်းမောင်' status='Error : 500 Internal Server Error' />
    </>
  )
}
