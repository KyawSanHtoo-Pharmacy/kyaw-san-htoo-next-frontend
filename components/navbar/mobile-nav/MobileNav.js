import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container, LogoWrapper, NavLinkWrapper, NavLink, CloseButton, Icon } from './MobileNav-styles'
const { navLinks } = require('@/ksh-data/navLinks.json')

export default function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const router = useRouter()
  return (
    <Container>
      <LogoWrapper>
        <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' layout='fill' alt='kyaw-san-htoo-logo' />
      </LogoWrapper>
      <NavLinkWrapper>
        {navLinks.map(link => (
          <Link href={link.path} key={link.id} passHref>
            <NavLink active={router.pathname === link.path} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
              {link.text}
            </NavLink>
          </Link>
        ))}
      </NavLinkWrapper>
      <CloseButton onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        <Icon>
          <Image src='/icons/close.svg' layout='fill' alt='close-icon' />
        </Icon>
      </CloseButton>
    </Container>
  )
}
