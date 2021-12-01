import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Section, Content, Message, Status } from './Error-styles'

export default function Error({ message, status }) {
  return (
    <Section>
      <GlobalContainer>
        <Content>
          <Message>{message}</Message>
          <Status>{status}</Status>
        </Content>
      </GlobalContainer>
    </Section>
  )
}
