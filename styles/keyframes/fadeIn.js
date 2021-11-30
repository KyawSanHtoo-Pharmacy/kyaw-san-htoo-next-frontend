import { css, keyframes } from 'styled-components'

const fadeIn = keyframes`${css`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`}`

export const FadeInKeyframe = css`
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-out forwards;
`
