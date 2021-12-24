import React, { useState, useContext, useEffect } from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import { CartWrapper, Inner, BlurOverlay } from './Cart-Styles'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'
import EmptyCart from './Empaty-Cart/EmptyCart'
import { useWindowSize } from 'react-use'
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

  const { width } = useWindowSize()
  const ismobile = width < 550;

  const Cartvariants = {
    visible: {
      [ ismobile ? 'y' : 'x' ]  : ismobile ? "0vh" : "0vw",
      opacity : 1,
      transition: 
      {
        duration: 0.2,
        ease : [.55,.13,.86,.74]
      },
    },
    hidden: {
      [ ismobile ? 'y' : 'x' ]  : ismobile ? "10vh" : "10vw",
      opacity : 0
    },
    exit: { 
      [ ismobile ? 'y' : 'x' ]  : ismobile ? "10vh" : "10vw",
    opacity: 0,
    transition: {
      duration: 0.4,
    }}
}
  const OverlayVarients = {
    visible: {
      opacity : 1,
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      opacity : 0,
    },
    exit: {  opacity : 0,
    transition: {
      duration: 0.4,
    }}
  }


  return (
    <>
      <AnimatePresence>
        {cartVisibile ? (
          <>
            <BlurOverlay  variants={OverlayVarients}
                    initial='hidden' animate='visible' exit='exit' />
            <CartWrapper 
                    variants={Cartvariants}
                    initial='hidden' animate='visible' exit='exit'
            >
              {medicineToBuy.length > 0 ? (
                pages === 1 ? (
                  <CartContent nextPage={nextPage} medicineToBuy={medicineToBuy} />
                ) : (
                  <Payment
                    prePage={prePage}
                    orderFormData={orderFormData}
                    setOrderFormData={setOrderFormData}
                    medicineToBuy={medicineToBuy}
                  />
                )
              ) : (
                <EmptyCart />
              )}
            </CartWrapper>
          </>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart

Cart.Inner = function CartInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}
