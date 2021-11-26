import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const { navLinks } = require('@/ksh-data/navLinks.json')
import { Header, Container, Group, NavLink, Logo, Button, Icon, MobileMenuButton } from './Navbar-styles'

import { CartStates } from '@/ksh-contexts/Cart-Context'

export default function Navbar() {
  const [_, setCartVisible] = useContext(CartStates)
  const CartButtonHandler = () => {
    setCartVisible(true)
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const updateScrollState = () => (window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false))
  useEffect(() => {
    document.addEventListener('scroll', updateScrollState)
    return () => document.removeEventListener('scroll', updateScrollState)
  }, [])

  const router = useRouter()
  return (
    <Header isScrolled={isScrolled}>
      <Container as='nav' isScrolled={isScrolled}>
        <Group>
          {navLinks.map(link => (
            <Link href={link.path} key={link.id} passHref>
              <NavLink active={router.pathname === link.path}>{link.text}</NavLink>
            </Link>
          ))}
        </Group>

        <Group>
          <Link href='/' passHref>
            <Logo>
              <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' layout='fill' alt='kyaw-san-htoo-logo' />
            </Logo>
          </Link>
        </Group>

        <Group>
          <Button onClick={CartButtonHandler}>
            <Icon>
              <Image src='/icons/cart.svg' layout='fill' alt='cart-icon' />
            </Icon>
            <span>ဆေးဝယ်စာရင်း</span>
          </Button>
          <Link href='/help' passHref>
            <Icon>
              <Image src='/icons/help.svg' layout='fill' alt='help-icon' />
            </Icon>
          </Link>
        </Group>

        <MobileMenuButton>
          <Image src='/icons/mobile-menu.png' width='25' height='24' alt='mobile-menu-icon' />
        </MobileMenuButton>
      </Container>
    </Header>
  )
}
