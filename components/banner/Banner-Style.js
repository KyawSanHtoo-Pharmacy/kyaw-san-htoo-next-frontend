import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'
export const BannerContainer = styled.section``
export const BannerContent = styled.div`
  padding-top: 6.22em;
  padding-bottom: 13.97em;
  background: url('/illustrations/HeroBackground.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: relative;
`
export const DropdownWrapper = styled.div`
  width: fit-content;
  margin: 2.34em auto;
  display: flex;
  flex-direction: column;
`
export const ClickAble = styled.div`
  display: flex;
`
export const Dropdown = styled.div`
  font-size: 20px;
  padding: 0px 20px;
  svg {
    margin: 0px 6px;
    transform: ${({ dropdownState }) => (dropdownState ? 'rotate(180deg)' : 'unset')};
    transition: 0.03s all ease-in-out;
  }
`
export const Dropdown = styled.p`
  padding: 0 0.6em 0 0;
  svg {
    margin: 0px 6px;
  }
`
export const FixedText = styled.p``

export const BannerTitle = styled.h1`
  text-align: center;
`
export const DropdownData = styled(motion.div)`
  position: absolute;
  margin: 50px auto 0px auto;
  padding: 10px;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 8px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const PillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const ViewAll = styled(Link)`
  text-decoration: underline;
`

export const Pill = styled.p`
  font-size: 1.09em;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  padding: 0.2em 0.8em;
  margin: 0 0.5em 0.5em 0;
  cursor: pointer;
`
