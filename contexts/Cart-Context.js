import React, { useState, createContext, useReducer, useEffect } from 'react'
import { cartReducer } from 'reducers/CartReducers'

export const CartStates = createContext()

export const CartProvider = props => {
  
  const [cartVisibile, setCartVisible] = useState(false)
  const [medicineToBuy, dispatch] = useReducer(cartReducer, [],function(){
    const storageData = typeof window !== 'undefined' ? localStorage.getItem('Cart') : null;
    return storageData ? JSON.parse(storageData) : [];
  })

  useEffect( () => {
    localStorage.setItem('Cart', JSON.stringify(medicineToBuy))
  }, [medicineToBuy] )

  const value = {
    visibility: [cartVisibile, setCartVisible],
    itemsInCart: [medicineToBuy],
    dispatch: dispatch,
  }

  return <CartStates.Provider value={value}>{props.children}</CartStates.Provider>
}
