import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 550px;
  height: 100vh;
  overflow-y: scroll;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.heading};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.offWhite};
  } */

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`
export const Inner = styled.div`
  padding: 0px 17px;
`

export const ButtonWrapper = styled.div`
  padding: 0px 17px 0px 17px;
  margin-bottom: 20px;
`

export const BlurOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(49, 51, 53, 0.46);
  backdrop-filter: blur(12px);
  opacity: 1;
`
