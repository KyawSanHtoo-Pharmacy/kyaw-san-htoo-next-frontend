import Link from 'next/link'
import Image from 'next/image'
import { changeMyanNum } from '@/ksh-helpers'
import {
  StyledFooter,
  Container,
  GroupWrapper,
  Group,
  InfoText,
  SocialIconWrapper,
  SocialIcon,
  Divider,
  Logo,
} from './Footer-styles'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <GroupWrapper>
          <Group>
            <InfoText>
              ကျော်စံထူး ဆေးဆိုင်တွင် ဆေးမျိုးစုံကို
              <br /> လက်လီ လက်ကား ဝယ်ယူရရှိနိုင်ပါပြီ
            </InfoText>
          </Group>
          <Group mt='-0.4em 0 0 0'>
            <InfoText large>
              <a href='tel:04224747'>၀၄၂ ၂၄၇၄၇</a>၊ <a href='tel:095021252'>၀၉ ၅၀၂၁ ၂၅၂</a>
            </InfoText>
            <InfoText>အမှတ် ကျူ/ဘီ၊ ပုသိမ်ဆေးရုံကြီးရှေ့၊ ပုသိမ်မြို့။</InfoText>
          </Group>
          <Group>
            <InfoText>info@kyawsanhtoopharmacy.com</InfoText>
            <SocialIconWrapper>
              <SocialIcon href='google.com' target='_blank'>
                <Image src='/icons/facebook.svg' width='18' height='18' alt='facebook-icon' />
              </SocialIcon>
              <SocialIcon href='google.com' target='_blank'>
                <Image src='/icons/viber.svg' width='19' height='19' alt='viber-icon' />
              </SocialIcon>
            </SocialIconWrapper>
          </Group>
        </GroupWrapper>

        <Divider />

        <GroupWrapper>
          <Group>
            <Link href='/' passHref>
              <Logo>
                <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' layout='fill' alt='kyaw-san-htoo-logo' />
              </Logo>
            </Link>
          </Group>
          <Group>
            <InfoText small>ကျော်စံထူး မူပိုင်ခွင့်/ {changeMyanNum(new Date().getFullYear())}ခုနှစ် </InfoText>
          </Group>
          <Group>
            <InfoText small>
              Designed & Developed by{' '}
              <a
                href='https://www.linkedin.com/in/aung-pyae-kyaw-2346aa16b/'
                style={{ textDecoration: 'underline' }}
                target='_blank'
                rel='noreferrer'>
                Aung Pyae
              </a>{' '}
              |{' '}
              <a
                href='https://www.linkedin.com/in/yanaunghein/'
                style={{ textDecoration: 'underline' }}
                target='_blank'
                rel='noreferrer'>
                Yaung
              </a>{' '}
              |{' '}
              <a
                href='https://www.linkedin.com/in/ye-min-htun-464622175/'
                style={{ textDecoration: 'underline' }}
                target='_blank'
                rel='noreferrer'>
                Yè Min
              </a>
            </InfoText>
          </Group>
        </GroupWrapper>
      </Container>
    </StyledFooter>
  )
}
