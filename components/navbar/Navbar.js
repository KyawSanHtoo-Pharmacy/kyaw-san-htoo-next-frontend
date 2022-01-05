import { useState, useEffect, useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const { navLinks } = require('@/ksh-data/navLinks.json')
import { changeMyanNum } from '@/ksh-helpers'
import {
  Header,
  Container,
  Group,
  NavLink,
  Logo,
  Button,
  Icon,
  MobileMenuButton,
  MobileCartButton,
  MobileCartIcon,
  TotalCount,
  TotalCountMobile,
} from './Navbar-styles'

export default function Navbar({ isMobileNavOpen, setIsMobileNavOpen }) {
  const [_, setCartVisible] = useContext(CartStates).visibility
  const { itemsInCart } = useContext(CartStates)

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
          {navLinks
            .filter(link => link.text !== 'အသုံးပြုနည်းများ')
            .map(link => (
              <Link href={link.path} key={link.id} passHref>
                <NavLink active={router.pathname === link.path}>{link.text}</NavLink>
              </Link>
            ))}
        </Group>

        <Group>
          <Link href='/' passHref>
            <Logo isScrolled={isScrolled}>
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
            {itemsInCart[0].length > 0 && (
              <TotalCount>
                <span className='mm-number'>{changeMyanNum(itemsInCart[0].length)}</span>
              </TotalCount>
            )}
          </Button>
          <Link href='/help' passHref>
            <Icon>
              <Image src='/icons/help.svg' layout='fill' alt='help-icon' title='အသုံးပြုနည်းများ' />
            </Icon>
          </Link>
        </Group>

        <MobileCartButton onClick={CartButtonHandler}>
          <MobileCartIcon>
            <Image src='/icons/cart.svg' layout='fill' alt='cart-icon' />
          </MobileCartIcon>
          {itemsInCart[0].length > 0 && (
            <TotalCountMobile>
              <span className='mm-number'>{changeMyanNum(itemsInCart[0].length)}</span>
            </TotalCountMobile>
          )}
        </MobileCartButton>

        <MobileMenuButton onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          <Image src='/icons/mobile-menu.svg' width='29' height='24' alt='mobile-menu-icon' />
        </MobileMenuButton>
      </Container>
    </Header>
  )
}
