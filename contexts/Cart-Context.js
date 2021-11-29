import React, { useState, createContext, useReducer } from 'react'
import { cartReducer } from 'reducers/CartReducers'

export const CartStates = createContext()

export const CartProvider = props => {
  const [cartVisibile, setCartVisible] = useState(false)
  const [medicineToBuy, dispatch] = useReducer( cartReducer ,[ ]) 
  
  const value = {
    visibility : [cartVisibile, setCartVisible],
    itemsInCart : [medicineToBuy],
    dispatch : dispatch
  }

  return <CartStates.Provider value={value}>{props.children}</CartStates.Provider>
}
