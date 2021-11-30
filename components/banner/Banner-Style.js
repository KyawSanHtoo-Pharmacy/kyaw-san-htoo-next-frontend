import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeInKeyframe } from '@/ksh-styles/keyframes/fadeIn'

export const BannerContainer = styled.section`
  min-height: calc(100vh - 6em);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${FadeInKeyframe}
`

export const BannerBackground = styled(Image)``

export const BannerContent = styled.div`
  margin-top: -10em;
  position: relative;
  z-index: 1;
`
export const DropdownWrapper = styled.div`
  width: fit-content;
  margin: 2.34em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
`
export const ClickAble = styled.div`
  display: flex;
`

const arrow = keyframes`${css`
  from {
    opacity: 0;
    transform: translateY(-0.3em);
  }
  to {
    opacity: 1;
    transform: translateY(0.3em);
  }
`}
`

export const Dropdown = styled.p`
  svg {
    opacity: 0;
    transform: translateY(-0.3em);
    margin: 0 1.25em 0 0.2em;
    /* transform: ${({ dropdownState }) => (dropdownState ? 'rotate(180deg)' : 'unset')}; */
    /* transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); */
    animation: ${arrow} 1s ease-out infinite alternate;
  }
`

export const FixedText = styled.p``

export const BannerTitle = styled.h1`
  text-align: center;
`
export const DropdownData = styled(motion.div)`
  position: absolute;
  padding: 1.25em;
  top: 3em;
  text-align: center;
  border-radius: 8px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadows.green};
`
export const PillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1em;
`
export const ViewAll = styled.a`
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
