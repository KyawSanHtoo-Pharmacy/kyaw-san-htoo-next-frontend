import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(49, 51, 53, 0.46);
  backdrop-filter: blur(12px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Popup = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bodyBg};
  padding: 1.88em;
  padding-top: 4.2em;
  border-radius: 1.25em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 27em;
`

export const Icon = styled.div`
  width: 5em;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.heading};
  border-radius: 0.63em;
  position: absolute;
  top: -2.5em;
  left: 50%;
  transform: translateX(-50%);
`

export const Heading = styled.h2`
  font-size: 1.88em;
`

export const ListTitle = styled.p`
  align-self: flex-start;
  font-size: 1.09em;
  font-weight: bold;
  margin-top: 1.6em;
  margin-bottom: 0.5em;
`

export const List = styled.ul`
  margin-bottom: 1.88em;
  padding-left: 1em;
  & li {
    font-size: 1.09em;
  }
`
