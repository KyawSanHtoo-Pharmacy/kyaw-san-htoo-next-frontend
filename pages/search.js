import ProductCardContainer from '@/ksh-containers/ProductCardContainer'
import { ProductCard, SearchBar, ProductFilter, OrderSuccessPopup, Empty } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import { changeMyanNum } from '@/ksh-helpers'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'
import qs from 'qs'

export default function AllMedicinePage({ medicines, keyword, longCat }) {
  const { showOrderSuccessPopup } = useContext(CartStates)

  return (
    <>
      <AnimatePresence>{showOrderSuccessPopup && <OrderSuccessPopup />}</AnimatePresence>

      <GlobalContainer padding='6.25em 7.81em 4.4em 7.81em'>
        <SearchBar.Container>
          <SearchBar />
          <ProductFilter longCat={longCat} />
        </SearchBar.Container>

        <ProductCard.InfoBar>
          <ProductCard.CategoryName>{`"${keyword}" အတွက်ရှာဖွေမှူရလဒ်များ`}</ProductCard.CategoryName>
          <ProductCard.Count>
            ရလဒ်ပေါင်း <span className='mm-number'>{changeMyanNum(medicines.length)}</span>
          </ProductCard.Count>
        </ProductCard.InfoBar>
      </GlobalContainer>

      {medicines.length > 0 ? (
        <ProductCardContainer medicines={medicines} />
      ) : (
        <Empty message={`"${keyword}"  နဲ့ပတ်သတ်သောဆေးရှာမတွေ့ပါ။`}>
          <ul
            style={{
              padding: '0.7em 0 0.7em 1em',
            }}>
            <li
              style={{
                margin: '0.3em 0',
              }}>
              စာလုံးပေါင်းမှန်မမှန် ပြန်စစ်ကြည့်ပေးပါ။
            </li>
            <li
              style={{
                margin: '0.3em 0',
              }}>
              <strong>&quot;စစ်ထုတ်မယ်&quot;</strong> ခလုတ်ကိုနှိပ်ပြီးတော့လဲ ဆေးများကို ရောဂါအလိုက်ဖြစ်စေ၊ အစ
              စာလုံးဖြင့်ဖြစ်စေ ရှာကြည့်နိုင်ပါတယ်။
            </li>
            <li
              style={{
                margin: '0.3em 0',
              }}>
              မီနျူးတွင်ရှိသော <strong>&quot;ဆေးမျိုးစုံ&quot;</strong> လင့်ကိုလဲ ပြန်သွားကြည့်နိုင်ပါတယ်။
            </li>
          </ul>
        </Empty>
      )}
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
