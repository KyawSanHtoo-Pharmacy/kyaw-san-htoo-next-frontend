import React, {useState, useContext, useEffect} from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import {CartWrapper, 
        Container,
        BlurOverlay
        } from './Cart-Styles'
import { Button } from '@/ksh-components'
import {CartStates} from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'

function Cart() {
    const [cartVisibile] = useContext(CartStates); //call the context
    const [pages, setPages] = useState(1);
    const nextPage = () => {
        setPages(pages + 1)
    }

    useEffect( () => {
        if(cartVisibile){       //to alter scrollablity of the entire page
          document.body.style.overflow = 'hidden';      
        }
        else{
          document.body.style.overflow = "unset";
        }
      }, [cartVisibile] )

    return (
        <> 
        <AnimatePresence>
        {
            cartVisibile ? (<>   <BlurOverlay initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0,
              }} />
                <CartWrapper
                initial={{
                    opacity: 0,
                    y: 1000,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 1000,
                  }}
                  transition={{
                    duration: 0.3,
                    type: 'Tween',
                  }}
                >
                {pages === 1 ?  <CartContent nextPage={nextPage} /> :   <Payment/>}
                </CartWrapper> </>

            ) : ""
        }
        </AnimatePresence>
    </>
    )
}

export default Cart

Cart.Container = ({children, ...restProps}) => {
  return (
    <Container {...restProps} >
      {children}
    </Container>
  )
}
