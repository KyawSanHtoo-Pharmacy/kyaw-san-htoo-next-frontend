import { useContext, useState } from 'react'
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
import { Counter, Button, NoticePill } from '@/ksh-components'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { changeMyanNum } from '@/ksh-helpers'
import { useRouter } from 'next/router'

export default function ProductDetails({ medicine_info }) {
  const router = useRouter()
  const {
    product_images,
    id,
    product_name_eng,
    product_name_mm,
    product_company,
    product_country,
    product_unit,
    product_price,
    product_quantity,
    product_to_compare,
    slug,
  } = medicine_info
  const [amount, setAmount] = useState(1)
  const value = useContext(CartStates)
  const { dispatch } = useContext(CartStates)
  const [_, setCartVisible] = value.visibility

  const newItem = {
    id,
    image: product_images[0].formats.thumbnail.url,
    name: product_name_mm,
    quantity: amount,
    price: product_price * amount,
    hash: product_images[0].hash,
    UnitPrice: product_price,
    isOverAmount: false,
    product_quantity: product_quantity,
    product_unit,
  }

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
          {product_country ? <PaleText>{product_country}</PaleText> : ''}
        </VerticleGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <VerticleGroup>
          <Label>ပမာဏ</Label>
          {product_quantity === 0 ? (
            <NoticePill availability={false}>ပစ္စည်း ကုန်နေပါတယ်</NoticePill>
          ) : (
            <Counter amount={amount} setAmount={setAmount} medicine={medicine_info} />
          )}
        </VerticleGroup>
        <VerticleGroup>
          <Label>ကျသင့်ငွေ</Label>
          <InfoText>
            <span className='mm-number'>{changeMyanNum(product_price * amount)}</span> ကျပ်
          </InfoText>
        </VerticleGroup>
      </HorizontalGroup>
      {product_quantity !== 0 ? (
        <Button
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART', newItem })
            setCartVisible(true)
          }}>
          <span>ဝယ်မယ့် စာရင်းထဲ ထည့်မယ်</span>
        </Button>
      ) : (
        <Button
          onClick={e => {
            e.preventDefault()
            router.push(`/compare?outstock=${slug}&instock=${product_to_compare[0].slug}`)
          }}>
          <span>အနီးစပ်ဆုံးဆေးနဲ့ နှိုင်းယှဉ်မယ်</span>
        </Button>
      )}
    </Container>
  )
}
