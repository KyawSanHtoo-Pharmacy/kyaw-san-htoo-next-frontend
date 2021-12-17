import { ProductDetails } from '@/ksh-layouts'
import { ImageShowcase, ProductCard, OrderSuccessPopup, Error } from '@/ksh-components'
import ProductDetailsInfoContainer from '@/ksh-containers/ProductDetailsInfoContainer'
import { API_URL } from '@/ksh-config/index'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'

function ProductDetailsPage({
  isInjected = false,
  medicine_images,
  medicine_details,
  medicine_info,
  relatedMedicines,
}) {
  const { showOrderSuccessPopup } = useContext(CartStates)

  if (isInjected) {
    return <Error message='URLကို မကလိပါနဲ့လား ကိုငြိမ်းမောင်' status='Error : tgg pan pr dl, plz.' />
  }

  return (
    <>
      {showOrderSuccessPopup && <OrderSuccessPopup />}
      <ProductDetails>
        <ProductDetails.StickySide>
          <ImageShowcase medicine_images={medicine_images} />
        </ProductDetails.StickySide>
        <ProductDetails.NormalSide>
          <ProductDetailsInfoContainer medicine_details={medicine_details} medicine_info={medicine_info} />
        </ProductDetails.NormalSide>
      </ProductDetails>

      <GlobalContainer style={{ marginTop: '-2.25em' }}>
        <ProductCard.Heading>ဆက်စပ် ဆေးဝါးများ</ProductCard.Heading>
        <ProductCard.Frame>
          {relatedMedicines.map(medicine => (
            <ProductCard key={medicine.id} medicine={medicine} />
          ))}
        </ProductCard.Frame>
      </GlobalContainer>
    </>
  )
}

export default ProductDetailsPage

export async function getStaticPaths() {
  const resp = await fetch(`${API_URL}/medicines`)
  const medicines = await resp.json()
  const paths = medicines.map(medicine => {
    return {
      params: {
        category: medicine.categories[0].slug,
        productName: medicine.slug,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { productName, category } }) {
  const resp = await fetch(`${API_URL}/medicines?slug=${productName}`)
  const medicine = await resp.json()

  const relatedMedicinesResp = await fetch(`${API_URL}/medicines?categories.slug_contains=${category}`)
  const relatedMedicines = await relatedMedicinesResp.json()

  const isMedicineInCMS = relatedMedicines.some(medicine => medicine.slug === productName)

  if (!isMedicineInCMS) {
    return {
      props: {
        isInjected: true,
      },
    }
  }

  return {
    props: {
      medicine_images: medicine[0] ? medicine[0].product_images : null,
      medicine_details: medicine[0] ? medicine[0].product_details : null,
      medicine_info: medicine[0] ? medicine[0] : 'null',
      relatedMedicines: relatedMedicines.filter(medicine => medicine.slug !== productName),
    },
    revalidate: 5,
  }
}
