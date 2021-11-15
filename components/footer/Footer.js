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
              <SocialIcon href='!#' target='_blank'>
                <Image src='/icons/facebook.svg' width='18' height='18' />
              </SocialIcon>
              <SocialIcon href='!#' target='_blank'>
                <Image src='/icons/viber.svg' width='19' height='19' />
              </SocialIcon>
            </SocialIconWrapper>
          </Group>
        </GroupWrapper>

        <Divider />

        <GroupWrapper>
          <Group>
            <Link href='/' passHref>
              <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' width='135' height='19' />
            </Link>
          </Group>
          <Group>
            <InfoText small>ကျော်စံထူး မူပိုင်ခွင့်/ ၂၀၂၁ခုနှစ်</InfoText>
          </Group>
          <Group>
            <InfoText small>
              Designed & Developed by{' '}
              <a href='!#' target='_blank'>
                Aung Pyae
              </a>{' '}
              |{' '}
              <a href='!#' target='_blank'>
                Yaung
              </a>{' '}
              |{' '}
              <a href='!#' target='_blank'>
                Ye
              </a>
            </InfoText>
          </Group>
        </GroupWrapper>
      </Container>
    </StyledFooter>
  )
}
