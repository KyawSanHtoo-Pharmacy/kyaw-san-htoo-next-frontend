import { CategoryCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function CategoryCardContainer({ categories }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <CategoryCard.Section>
      <GlobalContainer>
        <CategoryCard.Heading>မရှိမဖြစ် ဆေးဝါးနှင့် ဆေးပစ္စည်းများ</CategoryCard.Heading>
        <CategoryCard.Frame>
          {/* <Swiper
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
          </Swiper> */}
           <Slider {...settings}>
           {categories.map(category => (   
                <CategoryCard category={category} key = {category.id} />
            ))}
           </Slider>
        </CategoryCard.Frame>
      </GlobalContainer>
    </CategoryCard.Section>
  )
}
