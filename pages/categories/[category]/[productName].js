import { ProductDetails } from '@/ksh-layouts'
import { ImageShowcase, ProductCard } from '@/ksh-components'
import ProductDetailsInfoContainer from '@/ksh-containers/ProductDetailsInfoContainer'
import { API_URL } from '@/ksh-config/index'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { memo } from 'react'

function ProductDetailsPage({ medicine_images, medicine_details, medicine_info, relatedMedicines }) {
  return (
    <>
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

export default memo(ProductDetailsPage)

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

  return {
    props: {
      medicine_images: medicine[0] ? medicine[0].product_images : null,
      medicine_details: medicine[0] ? medicine[0].product_details : null,
      medicine_info: {
        product_name_eng: medicine[0] ? medicine[0].product_name_eng : null,
        product_name_mm: medicine[0] ? medicine[0].product_name_mm : null,
        product_company: medicine[0] ? medicine[0].product_company : null,
        product_unit: medicine[0] ? medicine[0].product_unit : null,
        product_price: medicine[0] ? medicine[0].product_price : null,
      },
      relatedMedicines: relatedMedicines.filter(medicine => medicine.slug !== productName),
    },
  }
}
