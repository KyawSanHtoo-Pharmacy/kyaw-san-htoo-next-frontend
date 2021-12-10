export const cartReducer = (state, action) => {
  switch (action.type) {
    //Case - 1
    case 'ADD_TO_CART':
      const { id, quantity } = action.newItem
      console.log(action.newItem.price)
      const isAlreadyInCart = state.some(med => med.id === id)
      if (isAlreadyInCart) {
        console.log('update ha!!!')
        const updatedMed = state.map(med => {
          if (med.id === id) {
            const newq = (med.quantity += quantity)
            const newp = (med.price += med.UnitPrice * quantity)
            console.log( {newq, newp});
            console.log('id same detected!')
            return { ...med, quanity: newq, price : newp }
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
          return {
            ...item,
            quantity:
              PayloadAmount === -1
                ? item.quantity <= 0
                  ? 0
                  : item.quantity + PayloadAmount
                : item.quantity + PayloadAmount,
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
