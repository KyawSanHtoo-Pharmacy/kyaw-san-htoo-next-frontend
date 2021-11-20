import styled from '@emotion/styled';
import { motion } from 'framer-motion'
export const CartWrapper = styled(motion.div)`
    position : absolute;
    right : 0; top : 0;
    width: 550px; height : 100vh;
    overflow-y : scroll;
    background-color: white;
    z-index: 100;
    display : flex;
    flex-direction: column;
    justify-content: space-between;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px grey; 
      border-radius: 10px; */
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.heading}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.offWhite}; 
    }

    @media only screen and (max-width : 500px){
      width: 100%;
    }
`
export const Container = styled.div`
  padding : 0px 17px;
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

