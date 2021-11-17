import { StyledButton, WhiteButton } from './Button-styles'

export default function Button({ children, ...restProps }) {
  return (
    <StyledButton {...restProps}>
      <span>{children}</span>
    </StyledButton>
  )
}

Button.White = function ButtonWhite({ children, ...restProps }) {
  return (
    <WhiteButton {...restProps}>
      <span>{children}</span>
    </WhiteButton>
  )
}
