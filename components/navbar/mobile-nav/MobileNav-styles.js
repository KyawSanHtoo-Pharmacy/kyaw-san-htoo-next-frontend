import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const flexCloumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6.25em 0 6.25em;
`

export const Container = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bodyBg};
  position: fixed;
  z-index: 100;
  inset: 0;
  width: 100%;
  height: 100%;
  ${flexCloumn}
`

export const LogoWrapper = styled(motion.div)`
  width: 15em;
  height: 2.3em;
  position: relative;
`

export const NavLinkWrapper = styled.nav`
  ${flexCloumn}
  padding: 0;
`

export const NavLink = styled(motion.a)`
  margin: 1.56em 0;
  font-size: ${({ active }) => (active ? '1.88em' : '1.25em')};
  color: ${({ theme, active }) => active && theme.colors.heading};
  font-weight: ${({ active }) => active && '700'};
  transition: color 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.heading};
  }
`

export const CloseButton = styled(motion.button)`
  width: 5em;
  aspect-ratio: 1;
  position: relative;
  border: none;
  border-radius: 100vw;
  background: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  width: 2.4em;
  aspect-ratio: 1;
  position: relative;
`
