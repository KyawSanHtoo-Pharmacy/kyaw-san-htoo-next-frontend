import { Section, Frame, StickySide, NormalSide } from './ProductDetails-styles'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function ProductDetails({ children }) {
  return (
    <Section>
      <GlobalContainer padding='2em 7.81em 6.25em 7.81em'>
        <Frame>{children}</Frame>
      </GlobalContainer>
    </Section>
  )
}

ProductDetails.StickySide = function ProductDetailsStickySide({ children, ...restProps }) {
  return <StickySide {...restProps}>{children}</StickySide>
}

ProductDetails.NormalSide = function ProductDetailsNormalSide({ children, ...restProps }) {
  return <NormalSide {...restProps}>{children}</NormalSide>
}
