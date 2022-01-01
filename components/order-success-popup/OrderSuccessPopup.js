import Image from 'next/image'
import { Button } from '@/ksh-components'
import { Container, Popup, IconWrapper, Heading, ListTitle, List } from './OrderSuccessPopup-styles'
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
          y: -40,
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
          y: 40,
          transition: {
            duration: 0.8,
            ease: [0.86, 0, 0.07, 1],
          },
        }}>
        <IconWrapper>
          <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17.3 6.30004C16.91 5.91004 16.28 5.91004 15.89 6.30004L10.25 11.94L11.66 13.35L17.3 7.70004C17.68 7.32004 17.68 6.68004 17.3 6.30004V6.30004ZM21.54 6.29004L11.66 16.17L8.18002 12.7C7.79002 12.31 7.16001 12.31 6.77001 12.7C6.38001 13.09 6.38001 13.72 6.77001 14.11L10.95 18.29C11.34 18.68 11.97 18.68 12.36 18.29L22.95 7.71004C23.34 7.32004 23.34 6.69004 22.95 6.30004H22.94C22.56 5.90004 21.93 5.90004 21.54 6.29004ZM1.12001 14.12L5.30001 18.3C5.69001 18.69 6.32001 18.69 6.71001 18.3L7.41001 17.6L2.53001 12.7C2.14001 12.31 1.51001 12.31 1.12001 12.7C0.730015 13.09 0.730015 13.73 1.12001 14.12V14.12Z'
              fill='white'
            />
          </svg>
        </IconWrapper>
        <Heading>အော်ဒါတင်ပြီးပါပြီ</Heading>
        <ListTitle>သတိပြုရန်များ</ListTitle>
        <List>
          <li>ဆိုင်လာယူမယ်ဆိုရင် မနက် ၉ နာရီ မှ ညနေ ၉ နာရီ အတွင်း လာယူနိုင်ပါတယ်။</li>
          <li>အိမ်အရောက်ပို့ အော်ဒါများကို ၅ နာရီအတွင်း ပို့ပေးမှာဖြစ်ပါတယ်။</li>
        </List>
        <Button onClick={() => setShowOrderSuccessPopup(false)}>
          <span>ပိတ်မယ်</span>
        </Button>
      </Popup>
    </Container>
  )
}
