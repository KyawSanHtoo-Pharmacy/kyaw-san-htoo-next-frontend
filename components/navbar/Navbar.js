import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const { navLinks } = require('@/ksh-data/navLinks.json')
import { Header, Container, Group, NavLink, Logo, Button, ButtonText, Icon, MobileMenuButton } from './Navbar-styles'

export default function Navbar() {
  const router = useRouter()
  return (
    <Header>
      <Container as='nav'>
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
              <Image src='/logos/kyaw-san-htoo-logo-landscape.svg' width='210' height='32' alt='kyaw-san-htoo-logo' />
            </Logo>
          </Link>
        </Group>

        <Group>
          <Button>
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
