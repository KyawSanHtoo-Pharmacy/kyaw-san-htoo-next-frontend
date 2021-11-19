import React,{useContext} from 'react'
import Image from 'next/image'
import {
    Cart1stPage,
    CartHeading, 
    CartTitle, 
    ItemTitleWrapper, 
    ItemTitles,
    ItemsWrapper, 
    ItemsToBuy, 
    ItemImg, 
    ItemName, 
    ItemQuentity, 
    QuantityShow,
    ItemCost,
    Plus, Min,
    MNum,
    ButtonWrapper
} from './CartContent-Styles';
import { Button } from '@/ksh-components'
import {CartStates} from '@/ksh-contexts/Cart-Context'

function CartContent({nextPage}) {
    const [cartVisibile, setCartVisible] = useContext(CartStates);
    const BackHandler = () => {
        setCartVisible(!cartVisibile);
    }
    return (
        <>
        <Cart1stPage>
        <CartHeading>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={BackHandler}  >
        <path d="M19.0005 11H7.83047L12.7105 6.11997C13.1005 5.72997 13.1005 5.08997 12.7105 4.69997C12.3205 4.30997 11.6905 4.30997 11.3005 4.69997L4.71047 11.29C4.32047 11.68 4.32047 12.31 4.71047 12.7L11.3005 19.29C11.6905 19.68 12.3205 19.68 12.7105 19.29C13.1005 18.9 13.1005 18.27 12.7105 17.88L7.83047 13H19.0005C19.5505 13 20.0005 12.55 20.0005 12C20.0005 11.45 19.5505 11 19.0005 11Z" fill="white"/>
        </svg>
        <CartTitle>ဆေးဝယ်စာရင်း <MNum><span>၃</span></MNum> </CartTitle>
        </CartHeading>

        <ItemTitleWrapper>
            <ItemTitles>ဝယ်မယ့်ဆေး</ItemTitles>
            <ItemTitles>ပမာဏ</ItemTitles>
            <ItemTitles>ကျသင့်ငွေ <br/> (ကျပ်)</ItemTitles>
        </ItemTitleWrapper>

        <ItemsWrapper>
            <ItemsToBuy>
                <ItemImg><Image src = '/temp/product-placeholder.jpg' layout="fill" /></ItemImg>
                <ItemName>ဆောလ်မျုစ်</ItemName>
            </ItemsToBuy>
            <ItemQuentity>
            <Plus>-</Plus>
            <QuantityShow type="text" value="၁"/>
            <Min>+</Min>
            </ItemQuentity>            
            <ItemCost>
               <p> ၈၀၀</p>
            </ItemCost>
        </ItemsWrapper>

        
        <ItemsWrapper>
            <ItemsToBuy>
                <ItemImg><Image src = '/temp/product-placeholder.jpg' layout="fill" /></ItemImg>
                <ItemName>ဆောလ်မျုစ်</ItemName>
            </ItemsToBuy>
            <ItemQuentity>
            <Plus>-</Plus>
            <QuantityShow type="text" value="၁"/>
            <Min>+</Min>
            </ItemQuentity>            
            <ItemCost>
               <p> ၈၀၀</p>
            </ItemCost>
        </ItemsWrapper>

        
        <ItemsWrapper>
            <ItemsToBuy>
                <ItemImg><Image src = '/temp/product-placeholder.jpg' layout="fill" /></ItemImg>
                <ItemName>ဆောလ်မျုစ်</ItemName>
            </ItemsToBuy>
            <ItemQuentity>
            <Plus>-</Plus>
            <QuantityShow type="text" value="၁"/>
            <Min>+</Min>
            </ItemQuentity>
              
            <ItemCost>
               <p> ၈၀၀</p>
            </ItemCost>
        </ItemsWrapper>
        </Cart1stPage>
        {/* // <h1>Here Cart Comes</h1> */}
        <ButtonWrapper>
                <Button Big onClick = {nextPage} >ဆက်လုပ်ဆောင်မယ်</Button>
        </ButtonWrapper>
        </>
    )
}

export default CartContent
