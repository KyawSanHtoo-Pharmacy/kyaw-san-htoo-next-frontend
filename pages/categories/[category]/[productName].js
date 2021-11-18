import { ProductDetails } from '@/ksh-layouts'
import { ImageShowcase } from '@/ksh-components'
import ProductDetailsInfoContainer from '@/ksh-containers/ProductDetailsInfoContainer'

export default function ProductDetailsPage() {
  return (
    <ProductDetails>
      <ProductDetails.StickySide>
        <ImageShowcase />
      </ProductDetails.StickySide>
      <ProductDetails.NormalSide>
        <ProductDetailsInfoContainer />
      </ProductDetails.NormalSide>
    </ProductDetails>
  )
}
