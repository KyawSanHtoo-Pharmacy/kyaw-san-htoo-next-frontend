import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Frame, Message, Button } from './Empty-styles'
import { useRouter } from 'next/router'

export default function Empty({ message }) {
  const router = useRouter()
  return (
    <GlobalContainer style={{ paddingTop: '0', marginTop: '-1em' }}>
      <Frame>
        <Message>{message}</Message>
        <Button onClick={() => router.back()}>{'<'} နောက်သို့</Button>
      </Frame>
    </GlobalContainer>
  )
}
