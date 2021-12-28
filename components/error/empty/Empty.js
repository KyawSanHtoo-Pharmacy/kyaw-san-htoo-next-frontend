import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Frame, Message, Button } from './Empty-styles'
import { useRouter } from 'next/router'
import { Chevron } from '@/ksh-components'

export default function Empty({ message, children }) {
  const router = useRouter()
  return (
    <GlobalContainer style={{ paddingTop: '0', marginTop: '-1em' }}>
      <Frame>
        <Message>{message}</Message>
        {children}
        <Button onClick={() => router.back()}>
          <Chevron direction='left' />
          နောက်သို့
        </Button>
      </Frame>
    </GlobalContainer>
  )
}
