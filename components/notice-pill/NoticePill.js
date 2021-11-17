import { Pill } from './NoticePill-styles'

export default function NoticePill({ children, ...restProps }) {
  return (
    <Pill {...restProps}>
      <span>{children}</span>
    </Pill>
  )
}
