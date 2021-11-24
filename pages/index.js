import JumbotronContainer from '@/ksh-containers/JumbotronContainer'
import CategoryCardContainer from '@/ksh-containers/CategoryCardContainer'
import TestimonialContainer from '@/ksh-containers/TestimonialContainer'
import { CtaSection } from '@/ksh-components'
import BannerContainer from '@/ksh-containers/BannerContainer'
import { API_URL } from '@/ksh-config/index'

export default function HomePage({ testimonials }) {
  return (
    <>
      <BannerContainer />
      <CategoryCardContainer />
      <JumbotronContainer />
      <TestimonialContainer testimonials={testimonials} />
      <CtaSection />
    </>
  )
}

export async function getStaticProps() {
  const resp = await fetch(`${API_URL}/testimonials`)
  const testimonials = await resp.json()

  return {
    props: { testimonials },
    revalidate: 1,
  }
}
