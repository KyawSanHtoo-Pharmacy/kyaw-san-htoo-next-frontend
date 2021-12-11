import React,{useContext} from 'react'
import {
EmptyCartWrapper,
CartHeading,
CartTitle,
ImageWrapper,
ButtonWrapper
}from './EmptyCartStyle';
import {useRouter} from 'next/router'
import Image from 'next/image';
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { Button } from '@/ksh-components'
function EmptyCart() {
const value = useContext(CartStates)
const [cartVisibile, setCartVisible] = value.visibility
const Router = useRouter();
const BackHandler = () => {
    setCartVisible(!cartVisibile)
 }

const reDirect = () => {
    Router.push("/categories/all");
    setCartVisible(false)
}

    return (
    <>
        <EmptyCartWrapper>
        <CartHeading>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={BackHandler}
            >
            <path
              d='M19.0005 11H7.83047L12.7105 6.11997C13.1005 5.72997 13.1005 5.08997 12.7105 4.69997C12.3205 4.30997 11.6905 4.30997 11.3005 4.69997L4.71047 11.29C4.32047 11.68 4.32047 12.31 4.71047 12.7L11.3005 19.29C11.6905 19.68 12.3205 19.68 12.7105 19.29C13.1005 18.9 13.1005 18.27 12.7105 17.88L7.83047 13H19.0005C19.5505 13 20.0005 12.55 20.0005 12C20.0005 11.45 19.5505 11 19.0005 11Z'
              fill='white'
            />
          </svg>
          <CartTitle>
            <span className='text'>ဆေးဝယ်စာရင်း</span>
          </CartTitle>

        </CartHeading>
        <ImageWrapper>
        <Image src= "/illustrations/cartempty.svg" layout = "fill" />
        </ImageWrapper>
        </EmptyCartWrapper>
                <ButtonWrapper onClick={ reDirect } >
                <Button Big>
                  <span >ဆေးတွေသွားကြည့်ဟာ</span>
                </Button>
              </ButtonWrapper>
        </>
    )
}

export default EmptyCart
