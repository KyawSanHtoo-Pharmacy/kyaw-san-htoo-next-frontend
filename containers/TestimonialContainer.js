import { TestimonialCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function TestimonialContainer({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

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
    <TestimonialCard.Section>
      <GlobalContainer>
        <TestimonialCard.Heading>ဝယ်သူတို့ရဲ့ စကားသံများ</TestimonialCard.Heading>
        <TestimonialCard.Frame>
          
          {/* <Swiper
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
            ))
            }
          </Swiper> */}
          
            <Slider {...settings}>
            {testimonials.map(testimonial => (   
                <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))
            }
            {/* <div style = {{width : '500px', height : '300px', backgroundColor : "black"}} >
                wtf
            </div>
            <div style = {{width : '500px', height : '300px', backgroundColor : "black"}} >
                wtf
            </div>
            <div style = {{width : '500px', height : '300px', backgroundColor : "black"}} >
                wtf
            </div>
            <div style = {{width : '500px', height : '300px', backgroundColor : "black"}} >
                wtf
            </div> */}
           </Slider>
        </TestimonialCard.Frame>
      </GlobalContainer>
    </TestimonialCard.Section>
  )
}
