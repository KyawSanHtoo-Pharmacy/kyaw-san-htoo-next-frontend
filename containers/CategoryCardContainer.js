import { CategoryCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

export default function CategoryCardContainer({ categories }) {
  return (
    <CategoryCard.Section>
      <GlobalContainer>
        <CategoryCard.Heading>မရှိမဖြစ် ဆေးဝါးနှင့် ဆေးပစ္စည်းများ</CategoryCard.Heading>
        <CategoryCard.Frame>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            }}>
            {categories.map(category => (
              <SwiperSlide key={category.id}>
          
                <CategoryCard category={category} />
     
              </SwiperSlide>
            ))}
          </Swiper>
        </CategoryCard.Frame>
      </GlobalContainer>
    </CategoryCard.Section>
  )
}
