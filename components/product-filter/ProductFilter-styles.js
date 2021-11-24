import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    align-self: flex-end;
  }
`

export const Frame = styled(motion.div)`
  position: absolute;
  top: 5.6em;
  right: 0;
  width: 59vw;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  padding: 1.88em;
  border-radius: 1.25em;

  @media screen and (max-width: 872px) {
    width: 85vw;
  }

  @media screen and (max-width: 678px) {
    width: 80vw;
  }

  @media screen and (max-width: 440px) {
    width: 90vw;
  }
  @media screen and (max-width: 678px) {
    width: 89vw;
  }
  @media screen and (max-width: 320px) {
    width: 85vw;
  }
`

export const SquareArrow = styled.div`
  width: 1.41em;
  aspect-ratio: 1;
  position: absolute;
  top: -0.5em;
  right: 2.5em;
  background: ${({ theme }) => theme.colors.bodyBg};
  border-radius: 0.31em;
  transform: rotate(-45deg);
`

export const Item = styled.div`
  &:not(:first-of-type) {
    margin-top: 1.88em;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25em;
  padding-bottom: 0.4em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerOne};
`

export const Title = styled.p`
  font-size: 1.09em;
  color: ${({ theme }) => theme.colors.heading};
`

export const Icon = styled.img``

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Pill = styled.p`
  font-size: 1.09em;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  padding: 0.2em 0.8em;
  margin: 0 0.5em 0.5em 0;
`

export const BlurOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  background: rgba(49, 51, 53, 0.46);
  backdrop-filter: blur(12px);
  opacity: 1;
`
