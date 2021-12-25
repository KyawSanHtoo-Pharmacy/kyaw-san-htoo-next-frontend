import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter, OrderSuccessPopup } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import { changeMyanNum } from '@/ksh-helpers'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'

export default function AllMedicinePage({ medicines, count, category, longCat }) {
  const { showOrderSuccessPopup, setShowOrderSuccessPopup } = useContext(CartStates)
  return (
    <>
      <button onClick={() => setShowOrderSuccessPopup(!showOrderSuccessPopup)}>Click Me!</button>
      <AnimatePresence>{showOrderSuccessPopup && <OrderSuccessPopup />}</AnimatePresence>
      <GlobalContainer padding='6.25em 7.81em 4.4em 7.81em'>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter longCat={longCat} />
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
  const respCat = await fetch(`${API_URL}/categories`)
  const longCat = await respCat.json()

  return {
    props: {
      medicines,
      count: medicines.length,
      category: 'ဆေးအားလုံး',
      longCat: longCat,
    },
    revalidate: 5,
  }
}
