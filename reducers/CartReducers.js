export const cartReducer = (state, action) => {
   
    switch(action.type) {
//Case - 1
        case 'ADD_TO_CART' :
                const {id, quantity} = action.newItem
                const isAlreadyInCart = state.some( med => med.id === id )
                if(isAlreadyInCart) {
                    console.log("update ha!!!")
                      const updatedMed = state.map( med => {
                        if(med.id === id) {
                          const newq =  med.quantity += quantity
                          console.log("id same detected!")
                          return {...med, quanity : newq}
                        }else{
                          return med
                        }
                      } )
                      return(updatedMed)
                  }
                  else{
                    console.log("new new!!")
                    return[...state, action.newItem]
                  }
//Case-2
        case 'updateItemQuantity' : 
                const updatedMedicineToBuyList = state.map(item => {
                const payloadId = action.payload.id
                const PayloadAmount = action.payload.amount
                if (item.id === payloadId) {
                  return {
                    ...item,
                    quantity: PayloadAmount === -1 ? (item.quantity <= 0 ? 0 : item.quantity + PayloadAmount) : item.quantity + PayloadAmount,
                  }
                }
                return item
              })
              return(updatedMedicineToBuyList)
//Case-3
        case 'handleQuantityChange' : 
                const updatedMedListQChange = state.map(item => {
                const case3Id = action.newQ.id;
                const case3val = action.newQ.val
                if (item.id === case3Id) {
                    return { ...item, quantity: parseInt(case3val) }
                }
                return item
                })
                return(updatedMedListQChange)
//Default Case
        default : return state
    }
}

