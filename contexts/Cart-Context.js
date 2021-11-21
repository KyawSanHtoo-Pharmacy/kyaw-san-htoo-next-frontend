import React, { useState, createContext } from 'react'

export const CartStates = createContext()

export const CartProvider = props => {
  const [cartVisibile, setCartVisible] = useState(false)
  return <CartStates.Provider value={[cartVisibile, setCartVisible]}>{props.children}</CartStates.Provider>
}
