import { useContext } from 'react'
import {
  Container,
  MyanmarName,
  EnglishName,
  HorizontalGroup,
  VerticleGroup,
  Label,
  InfoText,
  PaleText,
} from './ProductDetails-styles'
import { Counter, Button } from '@/ksh-components'
<<<<<<< HEAD

export default function ProductDetails({ medicine_info }) {
  const { product_name_eng, product_name_mm, product_company, product_unit, product_price } = medicine_info

=======
import { CartStates } from '@/ksh-contexts/Cart-Context'
export default function ProductDetails() {

  const value = useContext(CartStates);
  const {dispatch} = useContext(CartStates)
  console.log(dispatch);

  const newItem = {
    id : 11,
    image: '/temp/product-placeholder.jpg',
    name: 'ဆောလ်မျုစ်',
    quantity: 10,
    price: '80000'
  }
>>>>>>> implementing-cart
  return (
    <Container>
      <MyanmarName>{product_name_mm}</MyanmarName>
      <EnglishName>{product_name_eng}</EnglishName>
      <HorizontalGroup>
        <VerticleGroup>
          <Label>ထုတ်လုပ်သည့် ကုမ္ပဏီ</Label>
        </VerticleGroup>
        <VerticleGroup>
          <Label>{product_company}</Label>
          <PaleText>မြန်မာပြည်တွင် ထုတ်လုပ်သည်</PaleText>
        </VerticleGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <VerticleGroup>
          <Label>ပမာဏ</Label>
          <Counter product_uni={product_unit} />
        </VerticleGroup>
        <VerticleGroup>
          <Label>ကျသင့်ငွေ</Label>
          <InfoText>
            <span className='mm-number'>{product_price}</span> ကျပ်
          </InfoText>
        </VerticleGroup>
      </HorizontalGroup>
      <Button 
      onClick = { () => dispatch({type : 'ADD_TO_CART', newItem} )} 
      >
        <span>ဝယ်မယ့် စာရင်းထဲ ထည့်မယ်</span>
      </Button>
    </Container>
  )
}
