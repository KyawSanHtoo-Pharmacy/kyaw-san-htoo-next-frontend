import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import { changeMyanNum } from '@/ksh-helpers'

export default function AllMedicinePage({ medicines, count, category, longCat }) {
  return (
    <>
      <GlobalContainer>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter longCat = {longCat} />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>{category}</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>{changeMyanNum(count)}</span>
          </ProductCard.Count>
        </ProductCard.InfoBar>
      </GlobalContainer>

      <ProductCardContainer medicines={medicines} />
    </>
  )
}

export async function getStaticProps() {
  const resp = await fetch(`${API_URL}/medicines`)
  const medicines = await resp.json()
  const respCat = await fetch(`${API_URL}/categories`);
  const longCat = await respCat.json();
  console.log(longCat);
  return {
    props: {
      medicines,
      count: medicines.length,
      category: 'ဆေးအားလုံး',
      longCat : longCat
    },
  }
}
