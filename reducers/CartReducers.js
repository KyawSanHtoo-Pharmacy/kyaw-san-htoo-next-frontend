export const cartReducer = (state, action) => {
  switch (action.type) {
    //Case - 1
    case 'ADD_TO_CART':
      const { id, quantity, product_quantity, UnitPrice } = action.newItem
      console.log(action.newItem.price) //del later
      const isAlreadyInCart = state.some(med => med.id === id)
      if (isAlreadyInCart) {
        console.log('update!!!') //del later
        const updatedMed = state.map(med => {
          if (med.id === id) {
            if (med.quantity + quantity > product_quantity) {
              console.log('not ok') //del later
              return { ...med, quantity: product_quantity, isOverAmount: true, price: product_quantity * UnitPrice }
            } else {
              console.log('ok') //del later
              return {
                ...med,
                quantity: med.quantity + quantity,
                price: (med.quantity + quantity) * UnitPrice,
              }
            }
          } else {
            return med
          }
        })
        return updatedMed
      } else {
        console.log('new new!!')
        return [...state, action.newItem]
      }

    //Case-2
    case 'updateItemQuantity':
      const updatedMedicineToBuyList = state.map(item => {
        const payloadId = action.payload.id
        const PayloadAmount = action.payload.amount
        if (item.id === payloadId) {
          if (PayloadAmount === -1) {
            if (item.quantity <= 0) {
              return {
                ...item,
                quantity: 0,
                isOverAmount: false,
              }
            } else {
              return {
                ...item,
                quantity: item.quantity + PayloadAmount,
                isOverAmount: false,
              }
            }
          } else {
            const updatedQuantity = item.quantity + PayloadAmount
            if (updatedQuantity > item.product_quantity) {
              return {
                ...item,
                quantity: item.quantity,
                isOverAmount: true,
              }
            } else {
              return {
                ...item,
                quantity: updatedQuantity,
                isOverAmount: false,
              }
            }
          }
        }
        return item
      })
      const updatedPriceState = updatedMedicineToBuyList.map(item => {
        const payloadId = action.payload.id
        if (item.id === payloadId) {
          return {
            ...item,
            price: item.UnitPrice * item.quantity,
          }
        }
        return item
      })
      return updatedPriceState

    //Case-3
    case 'handleQuantityChange':
      const updatedMedListQChange = state.map(item => {
        const case3Id = action.newQ.id
        const case3val = action.newQ.val
        if (item.id === case3Id) {
          return { ...item, quantity: parseInt(case3val) }
        }
        return item
      })
      return updatedMedListQChange

    // Case-4
    case 'deleteItem':
      const payloadId = action.payload.id
      console.log(payloadId)
      return state.filter(med => med.id !== payloadId)
    // Default case
    default:
      return state

    // Case-5
    case 'CLEAR_CART':
      return []
  }
}
