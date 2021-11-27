import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import qs from 'qs'

export default function AllMedicinePage({ medicines, keyword }) {
  return (
    <>
      <GlobalContainer>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>Search Result for: {keyword}</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>{medicines.length}</span>
          </ProductCard.Count>
        </ProductCard.InfoBar>
      </GlobalContainer>

      <ProductCardContainer medicines={medicines} />
    </>
  )
}

export async function getServerSideProps({ query: { keyword } }) {
  const queryString = qs.stringify({
    _where: {
      _or: [
        { product_name_eng_contains: keyword },
        { slug_contains: keyword },
        { product_name_mm_contains: keyword },
        { product_nicknames_contains: keyword },
      ],
    },
  })

  const resp = await fetch(`${API_URL}/medicines?${queryString}`)
  const medicines = await resp.json()

  return {
    props: {
      keyword,
      medicines,
    },
  }
}
