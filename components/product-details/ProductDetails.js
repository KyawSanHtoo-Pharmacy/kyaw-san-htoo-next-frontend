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
  return (
    <Container>
      <MyanmarName>ဆောလ်မျုစ်</MyanmarName>
      <EnglishName>Solmux</EnglishName>
      <HorizontalGroup>
        <VerticleGroup>
          <Label>ထုတ်လုပ်သည့် ကုမ္ပဏီ</Label>
        </VerticleGroup>
        <VerticleGroup>
          <Label>KMD Phamaceuticals</Label>
          <PaleText>မြန်မာပြည်တွင် ထုတ်လုပ်သည်</PaleText>
        </VerticleGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <VerticleGroup>
          <Label>ပမာဏ</Label>
          <Counter />
        </VerticleGroup>
        <VerticleGroup>
          <Label>ကျသင့်ငွေ</Label>
          <InfoText>
            <span className='mm-number'>၈၀၀</span> ကျပ်
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
