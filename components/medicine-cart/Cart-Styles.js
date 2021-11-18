import styled from '@emotion/styled';
import { motion } from 'framer-motion'
export const CartWrapper = styled(motion.div)`
    position : absolute;
    right : 0; top : 0;
    width: 550px; height : 100vh;
    background-color: white;
    z-index: 100;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
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
  z-index: 8;
  background: rgba(49, 51, 53, 0.46);
  backdrop-filter: blur(12px);
  opacity: 1;
`