import styled from 'styled-components'
import { FadeInKeyframe } from '@/ksh-styles/keyframes/fadeIn'

export const Container = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 192px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 0.63em;
  border: 1px solid ${({ theme }) => theme.colors.heading};

  @media screen and (max-width: 400px) {
    max-width: 150px;
  }

  position: relative;
  transition: transform 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 400px) {
   font-size : 12px;
  }
`

export const Amount = styled.p`
  @media screen and (max-width: 400px) {
   font-size : 14px;
  }
`
export const Error = styled.p`
  width: 200%;
  position: absolute;
  bottom: -2.4em;
  left: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.warning};
  ${FadeInKeyframe}
`
