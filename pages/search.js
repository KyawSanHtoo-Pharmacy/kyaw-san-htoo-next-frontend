import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter, OrderSuccessPopup } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import { changeMyanNum } from '@/ksh-helpers'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import qs from 'qs'

export default function AllMedicinePage({ medicines, keyword, longCat }) {
  const { showOrderSuccessPopup } = useContext(CartStates)

  return (
    <>
      {showOrderSuccessPopup && <OrderSuccessPopup />}

      <GlobalContainer padding='6.25em 7.81em 4.4em 7.81em'>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter longCat={longCat} />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>Search Result for: {keyword}</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>{changeMyanNum(medicines.length)}</span>
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

  const categoriesResp = await fetch(`${API_URL}/categories`)
  const longCat = await categoriesResp.json()

  return {
    props: { keyword, medicines, longCat },
  }
}
