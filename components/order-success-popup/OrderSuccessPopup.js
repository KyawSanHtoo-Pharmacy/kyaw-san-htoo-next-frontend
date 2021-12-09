import Image from 'next/image'
import { Button } from '@/ksh-components'
import { Container, Popup, Icon, Heading, ListTitle, List } from './OrderSuccessPopup-styles'

export default function OrderSuccessPopup({ setShowOrderSuccessPopup }) {
  return (
    <Container>
      <Popup>
        <Icon />
        <Heading>အော်ဒါတင်ပြီးပါပြီ</Heading>
        <ListTitle>သတိပြုရန်များ</ListTitle>
        <List>
          <li>ဆိုင်လာယူမယ်ဆိုရင် မနက် ၉ နာရီ မှ ညနေ ၉ နာရီ အတွင်း လာယူနိုင်ပါတယ်။</li>
          <li>အိမ်အရောက်ပို့ အော်ဒါများကို ၅ နာရီအတွင်း ပို့ပေးမှာဖြစ်ပါတယ်။</li>
        </List>
        <Button onClick={() => setShowOrderSuccessPopup(false)}>
          <span>ပြန်ထွက်မယ်</span>
        </Button>
      </Popup>
    </Container>
  )
}
