import JumbotronContainer from '@/ksh-containers/JumbotronContainer'
import CategoryCardContainer from '@/ksh-containers/CategoryCardContainer'
import TestimonialContainer from '@/ksh-containers/TestimonialContainer'
import { CtaSection } from '@/ksh-components'

export default function HomePage() {
  return (
    <>
      <CategoryCardContainer />
      <JumbotronContainer />
      <TestimonialContainer />
      <CtaSection />
    </>
  )
}
