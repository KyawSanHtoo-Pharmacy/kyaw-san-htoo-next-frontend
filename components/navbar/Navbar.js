import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const { navLinks } = require('@/ksh-data/navLinks.json')
import { Header, Container, Group, NavLink, Logo, Button, ButtonText, Icon, MobileMenuButton } from './Navbar-styles'

import { CartStates } from '@/ksh-contexts/Cart-Context'

export default function Navbar() {
  const [cartVisibile, setCartVisible] = useContext(CartStates).visibility

  const CartButtonHandler = () => {
    setCartVisible(true)
  }

  const router = useRouter()
  return (
    <Header>
      <Container as='nav'>
        <Group>
          {navLinks.map(link => (
            <Link href={link.path} key={link.id}>
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
              <Image src='/icons/cart.svg' width='24' height='24' alt='cart-icon' />
            </Icon>
            <ButtonText>ဆေးဝယ်စာရင်း</ButtonText>
          </Button>
          <Link href='/help' passHref>
            <Icon>
              <Image src='/icons/help.svg' width='24' height='24' alt='help-icon' />
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
