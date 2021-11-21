import React, { useState, useContext, useEffect } from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import { CartWrapper, Inner, BlurOverlay } from './Cart-Styles'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'

const list = [
  { id: 1, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 2, price: '800' },
  { id: 2, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 4, price: '800' },
  { id: 3, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 4, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 5, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 6, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 7, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 8, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 9, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
  { id: 10, image: '/temp/product-placeholder.jpg', name: 'ဆောလ်မျုစ်', quantity: 1, price: '800' },
]

function Cart() {
  const [medicineToBuy, setMedicineToBuy] = useState(list)
  const [cartVisibile] = useContext(CartStates) //call the context
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

  const updateItemQuantity = (id, amount) => {
    const updatedMedicineToBuyList = medicineToBuy.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: amount === -1 ? (item.quantity <= 0 ? 0 : item.quantity + amount) : item.quantity + amount,
        }
      }
      return item
    })
    setMedicineToBuy(updatedMedicineToBuyList)
  }

  const handleQuantityChange = (id, inputValue) => {
    const updatedMedicineToBuyList = medicineToBuy.map(item => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(inputValue) }
      }
      return item
    })
    setMedicineToBuy(updatedMedicineToBuyList)
  }

  return (
    <>
      <AnimatePresence>
        {cartVisibile ? (
          <>
            <BlurOverlay />
            <CartWrapper>
              {pages === 1 ? (
                <CartContent
                  nextPage={nextPage}
                  medicineToBuy={medicineToBuy}
                  updateItemQuantity={updateItemQuantity}
                  handleQuantityChange={handleQuantityChange}
                />
              ) : (
                <Payment prePage={prePage} />
              )}
            </CartWrapper>{' '}
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
