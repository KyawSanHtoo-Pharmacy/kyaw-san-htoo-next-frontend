import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Frame, Message, Button } from './Empty-styles'
import { useRouter } from 'next/router'

export default function Empty() {
  const router = useRouter()
  return (
    <GlobalContainer style={{ paddingTop: '0', marginTop: '-1em' }}>
      <Frame>
        <Message>This is a message.</Message>
        <Button onClick={() => router.back()}>{'<'} Go Back</Button>
      </Frame>
    </GlobalContainer>
  )
}
