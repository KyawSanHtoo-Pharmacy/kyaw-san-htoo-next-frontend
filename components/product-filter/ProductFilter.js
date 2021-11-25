import { useState, useEffect } from 'react'
import { Button } from '@/ksh-components'
import {
  Container,
  BlurOverlay,
  SquareArrow,
  Frame,
  Item,
  TitleWrapper,
  Title,
  Icon,
  Body,
  Pill,
} from './ProductFilter-styles'

export default function ProductFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? 'hidden' : 'unset'
  }, [isFilterOpen])

  return (
    <>
      {isFilterOpen && (
        <BlurOverlay
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      )}
      <Container>
        <Button.OffWhite
          small
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          style={{ backgroundColor: isFilterOpen && '#fff' }}>
          <span>စစ်ထုတ်မယ်</span>
        </Button.OffWhite>

        {isFilterOpen && (
          <Frame
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 24,
            }}
            transition={{
              duration: 0.4,
              type: 'spring',
            }}>
            <Item>
              <TitleWrapper>
                <Title>ရောဂါများ</Title>
                <Icon src='/icons/plus.svg' alt='see-more-icon' />
              </TitleWrapper>
              <Body>
                <Pill>နှလုံးရောဂါ ဆေးများ</Pill>
                <Pill>ကျောက်ကပ်ရောဂါ ဆေးများ</Pill>
                <Pill>အဆုတ်ရောဂါ ဆေးများ</Pill>
                <Pill>နှလုံးရောဂါ ဆေးများ</Pill>
                <Pill>ကျောက်ကပ်ရောဂါ ဆေးများ</Pill>
                <Pill>အဆုတ်ရောဂါ ဆေးများ</Pill>
              </Body>
            </Item>

            <Item>
              <TitleWrapper>
                <Title>ရောဂါများ</Title>
                <Icon src='/icons/plus.svg' alt='see-more-icon' />
              </TitleWrapper>
              <Body>
                <Pill>နှလုံးရောဂါ ဆေးများ</Pill>
                <Pill>ကျောက်ကပ်ရောဂါ ဆေးများ</Pill>
                <Pill>အဆုတ်ရောဂါ ဆေးများ</Pill>
                <Pill>နှလုံးရောဂါ ဆေးများ</Pill>
                <Pill>ကျောက်ကပ်ရောဂါ ဆေးများ</Pill>
                <Pill>အဆုတ်ရောဂါ ဆေးများ</Pill>
              </Body>
            </Item>

            <Item>
              <TitleWrapper>
                <Title>အခြား</Title>
                <Icon src='/icons/plus.svg' alt='see-more-icon' />
              </TitleWrapper>
              <Body>
                <Pill>အသစ်ရောက်သော ဆေးများ</Pill>
                <Pill>ပရိုမိုးရှင်း ရှိသောဆေးများ</Pill>
              </Body>
            </Item>

            <SquareArrow />
          </Frame>
        )}
      </Container>
    </>
  )
}
