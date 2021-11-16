import { CategoryCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
const { categoryCardData } = require('@/ksh-data/categoryCardData')
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

export default function CategoryCardContainer() {
  return (
    <CategoryCard.Section>
      <GlobalContainer>
        <CategoryCard.Heading>မရှိမဖြစ် ဆေးဝါးနှင့် ဆေးပစ္စည်းများ</CategoryCard.Heading>
        <CategoryCard.Frame>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
            {categoryCardData.map(category => (
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

// export default function CategoryCardContainer() {
//   return (
//     <CategoryCard.Section>
//       <GlobalContainer>
//         <CategoryCard.Frame>
//           {categoryCardData.map(category => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </CategoryCard.Frame>
//       </GlobalContainer>
//     </CategoryCard.Section>
//   )
// }
