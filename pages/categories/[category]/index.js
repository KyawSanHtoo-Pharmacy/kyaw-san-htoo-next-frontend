import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { API_URL } from '@/ksh-config/index'

export default function AllMedicinePage({ medicines, count, category }) {
  return (
    <>
      <ProductCardContainer medicines={medicines} count={count} category={category} />
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
