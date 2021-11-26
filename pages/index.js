import JumbotronContainer from '@/ksh-containers/JumbotronContainer'
import CategoryCardContainer from '@/ksh-containers/CategoryCardContainer'
import TestimonialContainer from '@/ksh-containers/TestimonialContainer'
import { CtaSection } from '@/ksh-components'
import BannerContainer from '@/ksh-containers/BannerContainer'
import { API_URL } from '@/ksh-config/index'

export default function HomePage({ testimonials, categories }) {
  return (
    <>
      <BannerContainer />
      <CategoryCardContainer categories={categories} />
      <JumbotronContainer />
      <TestimonialContainer testimonials={testimonials} />
      <CtaSection />
    </>
  )
}

export async function getStaticProps() {
  const testimonialsResp = await fetch(`${API_URL}/testimonials`)
  const testimonials = await testimonialsResp.json()

  const categoriesResp = await fetch(`${API_URL}/categories`)
  const categories = await categoriesResp.json()

  return {
    props: { testimonials, categories },
    revalidate: 1,
  }
}
