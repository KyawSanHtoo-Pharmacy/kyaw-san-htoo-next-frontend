import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container, LogoWrapper, NavLinkWrapper, NavLink, CloseButton, Icon } from './MobileNav-styles'
const { navLinks } = require('@/ksh-data/navLinks.json')

export default function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const router = useRouter()

  const logo_wrapper = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
    exit: { opacity: 0, 
      transition: {
        duration: 0.6,
        when: 'afterChildren',
        staggerChildren: 0.05,
      }  },
  }

  const links = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: 20 },
  }

  return (

          <Container key='logo_wrapper' initial='hidden' animate='visible' exit='exit' variants={logo_wrapper} >
              <LogoWrapper variants={links} key='logo_wrapper'>
                <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' layout='fill' alt='kyaw-san-htoo-logo' />
              </LogoWrapper>
              <NavLinkWrapper>
                {navLinks.map(link => (
                  <Link href={link.path} key={link.id} passHref>
                    <NavLink
                      active={router.pathname === link.path}
                      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                      variants={links}
                      key={`${link.path}${link.id}`}>
                      {link.text}
                    </NavLink>
                  </Link>
                ))}
              </NavLinkWrapper>
              <CloseButton onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} key='close_button' variants={links}>
                <Icon>
                  <Image src='/icons/close.svg' layout='fill' alt='close-icon' />
                </Icon>
              </CloseButton>
          </Container>
  )
}
