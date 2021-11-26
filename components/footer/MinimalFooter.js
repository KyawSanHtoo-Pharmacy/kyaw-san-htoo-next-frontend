import Link from 'next/link'
import Image from 'next/image'
import { StyledFooter, Container, GroupWrapper, Group, InfoText, Logo } from './Footer-styles'

export default function MinimalFooter() {
  return (
    <StyledFooter>
      <Container>
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
