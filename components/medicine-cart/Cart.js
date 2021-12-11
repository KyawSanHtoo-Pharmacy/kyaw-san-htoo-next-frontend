import React, { useState, useContext, useEffect } from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import { CartWrapper, Inner, BlurOverlay } from './Cart-Styles'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'
import EmptyCart from './Empaty-Cart/EmptyCart'
const orderFormInitialState = {
  name: '',
  phone: '',
  address: '',
  delivery_method: 'ဆိုင်လာယူမယ်',
  payment_method: 'ငွေသားနဲ့ ပေးချေမယ်',
}

function Cart() {
  const [orderFormData, setOrderFormData] = useState(orderFormInitialState)
  const value = useContext(CartStates)
  const [medicineToBuy] = value.itemsInCart
  const [cartVisibile] = value.visibility //call the context
  const [pages, setPages] = useState(1)

  const nextPage = () => {
    setPages(pages + 1)
  }

  const prePage = () => {
    setPages(pages - 1)
  }

  useEffect(() => {
    if (cartVisibile) {
      //to alter scrollablity of the entire page
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [cartVisibile])
  console.log(medicineToBuy.length) 
  return (
    <>
      <AnimatePresence>
        {cartVisibile ? (
          <>
            <BlurOverlay />
            <CartWrapper>
              {
              
              medicineToBuy.length > 0 ? (
              pages === 1 ? (
                <CartContent nextPage={nextPage} medicineToBuy={medicineToBuy} />
              ) : (
                <Payment
                  prePage={prePage}
                  orderFormData={orderFormData}
                  setOrderFormData={setOrderFormData}
                  medicineToBuy={medicineToBuy}
                />
              ) ) : <EmptyCart/> }
            </CartWrapper>
          </>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart

Cart.Inner = function CartInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}
