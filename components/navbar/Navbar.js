import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const { navLinks } = require('@/ksh-data/navLinks.json')
import { Header, Container, Group, NavLink, Logo, Button, ButtonText, Icon, MobileMenuButton } from './Navbar-styles'

export default function Navbar() {
  const router = useRouter()
  return (
    <Header>
      <Container>
        <Group as='nav'>
          {navLinks.map(link => (
            <Link href={link.path}>
              <NavLink key={link.id} active={router.pathname === link.path}>
                {link.text}
              </NavLink>
            </Link>
          ))}
        </Group>

        <Group>
          <Link href='/' passHref>
            <Logo src='/logos/kyaw-san-htoo-logo-landscape.svg' width='210' height='32' />
          </Link>
        </Group>

        <Group>
          <Button>
            <Icon src='/icons/cart.svg' width='24' height='24' />
            <ButtonText>ဆေးဝယ်စာရင်း</ButtonText>
          </Button>
          <Link href='/help' passHref>
            <Icon src='/icons/help.svg' width='24' height='24' />
          </Link>
        </Group>

        <MobileMenuButton>
          <Image src='/icons/mobile-menu.png' width='25' height='24' />
        </MobileMenuButton>
      </Container>
    </Header>
  )
}
