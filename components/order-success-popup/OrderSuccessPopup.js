import Image from 'next/image'
import { Button } from '@/ksh-components'
import { Container, Popup, Icon, Heading, ListTitle, List } from './OrderSuccessPopup-styles'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'

export default function OrderSuccessPopup() {
  const { setShowOrderSuccessPopup } = useContext(CartStates)

  return (
    <Container
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.86, 0, 0.07, 1],
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.86, 0, 0.07, 1],
        },
      }}>
      <Popup
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 1,
            duration: 0.8,
            ease: [0.86, 0, 0.07, 1],
          },
        }}
        exit={{
          opacity: 0,
          y: 24,
          transition: {
            duration: 0.8,
            ease: [0.86, 0, 0.07, 1],
          },
        }}>
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
