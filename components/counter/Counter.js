import { useState } from 'react'
import { Container, Button, Amount, Error } from './Counter-styles'
import { changeMyanNum } from '@/ksh-helpers'

export default function Counter({ setAmount, amount, medicine }) {
  const [overAmount, setOverAmount] = useState(false)
  const { product_name_mm, product_quantity, product_unit } = medicine
  console.log(medicine)
  return (
    <Container>
      <Button
        onClick={() => {
          setOverAmount(false)
          amount > 1 && setAmount(prev => prev - 1)
        }}>
        <img src='/icons/minus-blue.svg' alt='minus-icon' />
      </Button>
      <Amount>
        <span className='mm-number'>{changeMyanNum(amount)}</span> <span>{medicine.product_unit || 'ကဒ်'}</span>
      </Amount>
      <Button
        onClick={() => {
          if (amount === medicine.product_quantity) {
            setOverAmount(true)
            return
          } else {
            setAmount(prev => prev + 1)
          }
        }}>
        <img src='/icons/blue-plus.svg' alt='plus-icon' />
      </Button>
      {overAmount && <Error>{`${product_name_mm} ${product_quantity}${product_unit} thr kyn pr tot tl!`}</Error>}
    </Container>
  )
}
