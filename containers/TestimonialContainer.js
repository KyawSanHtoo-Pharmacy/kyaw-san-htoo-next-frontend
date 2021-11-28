import { TestimonialCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

export default function TestimonialContainer({ testimonials }) {
  return (
    <GlobalContainer>
      <TestimonialCard.Heading>ဝယ်သူတို့ရဲ့ စကားသံများ</TestimonialCard.Heading>
      <TestimonialCard.Frame>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={3}
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
              slidesPerView: 3,
            },
          }}>
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialCard.Frame>
    </GlobalContainer>
  )
}
