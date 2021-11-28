import styled from 'styled-components'

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.bodyBg};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme, isScrolled }) => (isScrolled ? theme.boxShadows.nav : '')};
  transition: all 0.2s ease-out;
`

export const Container = styled.div`
  /* padding: 1em 7.81em; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isScrolled }) => (isScrolled ? '0.8em 7.81em' : '1.2em 7.81em')};
  transition: all 0.2s ease-out;

  @media screen and (max-width: 980px) {
    padding: 1.56em 3.91em;
  }

  @media screen and (max-width: 500px) {
    padding: 1.56em 1.25em;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  &:nth-of-type(1) {
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }

  &:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
      justify-content: flex-start;
    }
  }

  &:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
`

export const NavLink = styled.a`
  margin-right: 1.88em;
  font-size: 1.25em;
  color: ${({ theme, active }) => active && theme.colors.heading};
  font-weight: ${({ active }) => active && '700'};
`

export const Logo = styled.a`
  width: ${({ isScrolled }) => (isScrolled ? '14em' : '15em')};
  height: ${({ isScrolled }) => (isScrolled ? '2.2em' : '2.3em')};
  position: relative;
  transition: all 0.2s ease-out;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 100vw;
  padding: 1.17em 1.56em;
  margin-right: 1.88em;
  font-size: 1em;

  & > span {
    margin-bottom: -0.4em;
  }
`

export const Icon = styled.a`
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 1.88em;
  aspect-ratio: 1;
  position: relative;
`
export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`
