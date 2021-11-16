import { StyledButton } from './Button-styles'

export default function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>
}
