import styled from 'styled-components'
import { FadeInKeyframe } from '@/ksh-styles/keyframes/fadeIn'
import { motion } from 'framer-motion'

export const Cart1stPage = styled.div``
export const CartHeading = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  svg {
    display: flex;
    align-items: center;
    height: inherit;
    cursor: pointer;
    position: absolute;
    left: 17px;
    top: 50%;
    transform: translateY(-50%);
  }
`
export const CartTitle = styled.h1`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 1.4em;
  font-weight: 700px;
  line-height: 32px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .number {
    background-color: white;
    color: ${({ theme }) => theme.colors.heading};
    width: 40px;
    aspect-ratio: 1;
    border-radius: 100vw;
    margin-left: 10px;
    position: relative;
    @media only screen and (max-width: 550px) {
      width: 30px;
    }
    .num {
      position: absolute;
      right: 38%;
      top: 7%;
      @media only screen and (max-width: 550px) {
        right: 37%;
        top: -10%;
      }
    }
  }
`

export const ItemTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
`
export const ItemTitles = styled.h5`
  padding: 1.5em 0px 2em;
  text-align: center;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`
export const ItemsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  margin-bottom: 2em;
`
//1st column
export const ItemsToBuy = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0em 1em;
`

export const ItemImg = styled.div`
  position: relative;
  height: 100%;
  img {
    border-radius: 10px;
  }
`
export const ItemName = styled.p`
  flex: 2;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  margin-left: 10px;

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`

//2nd column
export const ItemQuentity = styled.a`
  flex: 1;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 10px;
  position: relative;
  transition: transform 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }
`
export const QuantityShow = styled.p`
  padding-top: 4.5px;
  text-align: center;
  width: 100%;
  font-size: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.offWhite};
  outline: none;
  /* background-color : red; */
  &:focus-within {
    border: 0;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  @media only screen and (max-width: 550px) {
    padding-top: 4px;
    font-size: 14px;
  }
`
export const Error = styled.span`
  width: 200%;
  position: absolute;
  bottom: -2em;
  left: 0;
  font-size: 0.6em;
  text-align: left;
  color: ${({ theme }) => theme.colors.warning};
  ${FadeInKeyframe}
`

export const Plus = styled.button`
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 900;
  border-radius: 0 0.8em 0.8em 0;

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`
export const Min = styled.button`
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 900;
  border-radius: 0.8em 0 0 0.8em;

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`

//3rd column
export const ItemCost = styled.div`
  flex: 1;
  text-align: center;
  p {
    font-size: 18px;
    margin: 0 auto;
    width: 80%;
    padding: 0.6em 0em;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.offWhite};

    @media only screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
`

export const ButtonWrapper = styled.div`
  padding: 0px 17px 0px 17px;
  margin-bottom: 20px;
`
