import { ProductCard, SearchBar, ProductFilter } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function ProductCardContainer() {
  return (
    <ProductCard.Section>
      <GlobalContainer>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>ဆေးအားလုံး</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>၈၄,၀၀၀</span>
          </ProductCard.Count>
        </ProductCard.InfoBar>

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
