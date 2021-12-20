import { useRouter } from 'next/router'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Section, Content, Message, Status, Button } from './Error-styles'

export default function Error({ message, status }) {
  const router = useRouter()
  return (
    <Section>
      <GlobalContainer>
        <Content>
          <Message>{message}</Message>
          <Status>{status}</Status>
          <Button onClick={() => router.back()}>{'< '} Go Back</Button>
        </Content>
      </GlobalContainer>
    </Section>
  )
}
