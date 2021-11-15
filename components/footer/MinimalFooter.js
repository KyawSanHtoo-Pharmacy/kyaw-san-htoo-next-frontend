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

export default function MinimalFooter() {
  return (
    <StyledFooter>
      <Container>
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
