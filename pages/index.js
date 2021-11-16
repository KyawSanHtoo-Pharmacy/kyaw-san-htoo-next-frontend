import JumbotronContainer from '@/ksh-containers/JumbotronContainer'
import CategoryCardContainer from '@/ksh-containers/CategoryCardContainer'
import TestimonialContainer from '@/ksh-containers/TestimonialContainer'
import { CtaSection } from '@/ksh-components'


import BannerContainer from '@/ksh-containers/BannerContainer'
export default function HomePage() {
  return (
    <>
      <BannerContainer/>
      <CategoryCardContainer />
      <JumbotronContainer />
      <TestimonialContainer />
      <CtaSection />
    </>
  )
}
