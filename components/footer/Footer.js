import Link from 'next/link'
import Image from 'next/image'
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
            <InfoText large>၀၉ ၀၁၀၁၀၁၀၁၀၊ ၀၁ ၀၀၁ ၀၀၁</InfoText>
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
            <InfoText small>ကျော်စံထူး မူပိုင်ခွင့်/ ၂၀၂၁ခုနှစ်</InfoText>
          </Group>
          <Group>
            <InfoText small>
              Designed & Developed by{' '}
              <a href='google.com' target='_blank'>
                Aung Pyae
              </a>{' '}
              |{' '}
              <a href='google.com' target='_blank'>
                Yaung
              </a>{' '}
              |{' '}
              <a href='google.com' target='_blank'>
                Ye
              </a>
            </InfoText>
          </Group>
        </GroupWrapper>
      </Container>
    </StyledFooter>
  )
}
