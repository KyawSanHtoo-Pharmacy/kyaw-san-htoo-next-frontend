import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Container, Button, Amount, Error } from './Counter-styles'
import { changeMyanNum } from '@/ksh-helpers'

export default function Counter({ setAmount, amount, medicine }) {
  const [overAmount, setOverAmount] = useState(false)
  const { product_name_mm, product_quantity, product_unit } = medicine

  //reset amount and overAmount check whenever medicine changes
  useEffect(() => {
    setAmount(1)
    setOverAmount(false)
  }, [medicine, setAmount])

  return (
    <Container>
      <Button
        onClick={() => {
          setOverAmount(false)
          amount > 1 && setAmount(prev => prev - 1)
        }}>
        <Image src='/icons/minus-blue.svg' alt='minus-icon' width={12} height={2} />
      </Button>
      <Amount>
        <span className='mm-number'>{changeMyanNum(amount)}</span> <span>{medicine.product_unit || 'ကဒ်'}</span>
      </Amount>
      <Button
        onClick={() => {
          if (amount === medicine.product_quantity) {
            setOverAmount(true)
          } else {
            setAmount(prev => prev + 1)
          }
        }}>
        <Image src='/icons/blue-plus.svg' alt='plus-icon' width={12} height={12} />
      </Button>
      {overAmount && (
        <Error>{`${product_name_mm} ${changeMyanNum(product_quantity)}${product_unit} သာကျန်ပါတော့တယ်`}</Error>
      )}
    </Container>
  )
}
