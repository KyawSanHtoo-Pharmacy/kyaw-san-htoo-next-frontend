import React, {useState, useEffect} from 'react'
import CartContent from './Cart-Content/CartContent'
import Payment from './Payment/Payment'
import {CartWrapper, 
        ButtonWrapper,
        BlurOverlay
        } from './Cart-Styles'
import Image from 'next/image'
import { Button } from '@/ksh-components'

function Cart() {
    const [pages, setPages] = useState(1);
    const nextPage = () => {
        setPages(pages + 1)
    }

    return (
        <> 
        <BlurOverlay/>
        <CartWrapper>

        {pages === 1 ?  <CartContent/> :   <Payment/>}

        <ButtonWrapper>
        <Button Big onClick = {nextPage} >ဆက်လုပ်ဆောင်မယ်</Button>
        </ButtonWrapper>
        </CartWrapper>
    </>
    )
}

export default Cart
