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

export const BannerBackgroundHuman = styled.div`
  width: 32em;
  height: 22em;
  position: absolute;
  bottom: 0;
  left: 0;
`
export const BannerBackgroundHumanMobile = styled.div`
  width: 100%;
  height: 30em;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const BannerBackgroundBedo = styled.div`
  width: 30em;
  height: 30em;
  position: absolute;
  bottom: 0;
  right: 0;
`
export const BannerBackgroundThoughts = styled.div`
  width: 484px;
  height: 144px;
  position: absolute;
  top: 4em;
  left: 50%;
  transform: translateX(-50%);
`

export const BannerBackgroundThoughtsMobile = styled.div`
  width: 13.5em;
  height: 13em;
  position: absolute;
  top: 6.5em;
  left: 60%;
  transform: translateX(-50%);
  opacity: 0.5;
`

export const BannerContent = styled.div`
  margin-top: -10em;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 700px) {
    margin-top: -20em;
  }
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
  user-select: none;
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
  width: 30em;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadows.green};

  @media screen and (max-width: 500px) {
    width: 90vw;
  }
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
