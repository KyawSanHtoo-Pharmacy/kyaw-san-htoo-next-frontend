import { useState } from 'react'
import { Container, Button, Amount } from './Counter-styles'

export default function Counter() {
  const [amount, setAmount] = useState(1)
  return (
    <Container>
      <Button onClick={() => amount > 1 && setAmount(prev => prev - 1)}>
        <img src='/icons/minus-blue.svg' alt='minus-icon' />
      </Button>
      <Amount>
        <span className='mm-number'>{amount}</span> <span>ကဒ်</span>
      </Amount>
      <Button onClick={() => setAmount(prev => prev + 1)}>
        <img src='/icons/blue-plus.svg' alt='plus-icon' />
      </Button>
    </Container>
  )
}
