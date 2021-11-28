import React, { useState, createContext } from 'react'

export const CartStates = createContext()

export const CartProvider = props => {
  const [cartVisibile, setCartVisible] = useState(false)
  const [medicineToBuy, setMedicineToBuy] = useState([
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
  ])

  const value = {
    visibility : [cartVisibile, setCartVisible],
    itemsInCart : [medicineToBuy, setMedicineToBuy]
  }

  return <CartStates.Provider value={value}>{props.children}</CartStates.Provider>
}
