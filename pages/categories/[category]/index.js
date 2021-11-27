import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'

export default function AllMedicinePage({ medicines, count, category }) {
  return (
    <>
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
      </GlobalContainer>

      <ProductCardContainer medicines={medicines} />
    </>
  )
}

export async function getStaticPaths() {
  const resp = await fetch(`${API_URL}/categories`)
  const categories = await resp.json()
  const paths = categories.map(category => {
    return {
      params: {
        category: category.slug,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { category } }) {
  const resp = await fetch(`${API_URL}/medicines?categories.slug_contains=${category === 'all' ? '' : category}`)
  const categoryData = await resp.json()

  const categoryResp = await fetch(`${API_URL}/categories?slug=${category}`)
  const singleCategory = await categoryResp.json()

  return {
    props: {
      medicines: categoryData,
      count: categoryData.length,
      category: category === 'all' ? 'ဆေးအားလုံး' : singleCategory[0].category_name_mm,
    },
  }
}
