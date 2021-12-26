import { CategoryCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
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
