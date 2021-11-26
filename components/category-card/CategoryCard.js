import Image from 'next/image'
import Link from 'next/link'
import { Section, Heading, Frame, Item, ImageWrapper, ContentWrapper, CategoryName } from './CategoryCard-styles'
import { API_URL } from '@/ksh-config/index'

export default function CategoryCard({ category }) {
   const { category_name_eng, category_name_mm, slug, category_image } = category
  console.log(category);

  return (
    <Link href={`/categories/${slug}`} passHref>
      <Item>
        {/* <ImageWrapper>
          <Image
            src={`${API_URL}${category_image.formats.medium.url}`}
            layout='fill'
            alt={`${category_name_eng} - ${category_name_mm}`}
          />
        </ImageWrapper> */}
        <ContentWrapper>
          <CategoryName>{category_name_mm}</CategoryName>
        </ContentWrapper>
      </Item>
    </Link>

  )
}

CategoryCard.Section = function CategoryCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

CategoryCard.Frame = function CategoryCardFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

CategoryCard.Heading = function CategoryCardHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}
