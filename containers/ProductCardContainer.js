import { ProductCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function ProductCardContainer() {
  return (
    <ProductCard.Section>
      <GlobalContainer>
        <ProductCard.Frame>
          <ProductCard availability={true} />
          <ProductCard availability={true} />
          <ProductCard availability={false} />
          <ProductCard availability={true} />
          <ProductCard availability={true} />
          <ProductCard availability={false} />
          <ProductCard availability={true} />
          <ProductCard availability={false} />
          <ProductCard availability={true} />
          <ProductCard availability={true} />
        </ProductCard.Frame>
      </GlobalContainer>
    </ProductCard.Section>
  )
}
