import { Jumbotron } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
const { jumbotronData } = require('@/ksh-data/jumbotronData.json')

export default function JumbotronContainer() {
  return (
    <Jumbotron.Section>
      <GlobalContainer>
        <Jumbotron.Heading>ကျော်စံထူးဝက်ဆိုဒ် မှာဘာတွေလုပ်နိုင်မလဲ</Jumbotron.Heading>
        <Jumbotron.Frame>
          {jumbotronData.map(jumbotron => (
            <Jumbotron key={jumbotron.id} data={jumbotron} />
          ))}
        </Jumbotron.Frame>
      </GlobalContainer>
    </Jumbotron.Section>
  )
}
