import Link from 'next/link'
import Image from 'next/image'
import { StyledFooter, Container, GroupWrapper, Group, InfoText, MiniLogo } from './Footer-styles'
import { changeMyanNum } from '@/ksh-helpers'

export default function MinimalFooter() {
  return (
    <StyledFooter>
      <Container>
        <GroupWrapper>
          <Group>
            <Link href='/' passHref>
              <MiniLogo>
                <Image src='/logos/kyaw-san-htoo-logo-mini.svg' layout='fill' alt='kyaw-san-htoo-logo' />
              </MiniLogo>
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
