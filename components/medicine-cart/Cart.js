import React, { useState, useContext, useEffect } from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import { CartWrapper, Inner, BlurOverlay } from './Cart-Styles'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'
import EmptyCart from './Empaty-Cart/EmptyCart'
import { useWindowSize } from 'react-use'
const orderFormInitialState = {
  name: {
    value : "",
    isValid : false,
    pattern : "test",
    require : true
  },
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


  const { width } = useWindowSize()
  const isMobile = width < 550

  const cartVariants = {
    visible: {
      [isMobile ? 'y' : 'x']: isMobile ? '0vh' : '0vw',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    hidden: {
      [isMobile ? 'y' : 'x']: isMobile ? '10vh' : '10vw',
      opacity: 0,
    },
    exit: {
      [isMobile ? 'y' : 'x']: isMobile ? '10vh' : '10vw',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  }
  const overlayVarients = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {cartVisibile ? (
          <>
            <BlurOverlay variants={overlayVarients} initial='hidden' animate='visible' exit='exit' />
            <CartWrapper variants={cartVariants} initial='hidden' animate='visible' exit='exit'>
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
