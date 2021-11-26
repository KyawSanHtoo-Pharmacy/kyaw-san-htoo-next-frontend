import { ProductCard, SearchBar, ProductFilter } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function ProductCardContainer({ medicines, count, category }) {
  return (
    <ProductCard.Section>
      <GlobalContainer>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>{category}</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>{count}</span>
          </ProductCard.Count>
        </ProductCard.InfoBar>

        <ProductCard.Frame>
          {medicines.map(medicine => (
            <ProductCard key={medicine.id} medicine={medicine} />
          ))}
        </ProductCard.Frame>
      </GlobalContainer>
    </ProductCard.Section>
  )
}
