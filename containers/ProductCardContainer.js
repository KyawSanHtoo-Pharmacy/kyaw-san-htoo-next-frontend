import { ProductCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function ProductCardContainer({ medicines }) {
  console.log(medicines)
  return (
    <ProductCard.Section>
      <GlobalContainer style={{ paddingTop: '0' }}>
        <ProductCard.Frame mt='0'>
          {medicines.map(medicine => (
            <ProductCard key={medicine.id} medicine={medicine} />
          ))}
        </ProductCard.Frame>
      </GlobalContainer>
    </ProductCard.Section>
  )
}
