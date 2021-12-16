import Image from 'next/image'
import Link from 'next/link'
import { Section, Heading, Frame, Item, ImageWrapper, ContentWrapper, CategoryName } from './CategoryCard-styles'

export default function CategoryCard({ category }) {
  const { category_name_eng, category_name_long, slug, category_image } = category

  return (
    <Link href={`/categories/${slug}`} passHref>
      <Item>
        <ImageWrapper>
          {/* not sure bluring image works or not, just test */}
          <Image
            src={category_image.formats.medium.url}
            layout='fill'
            alt={`${category_name_eng} - ${category_name_long}`}
            placeholder='blur'
            blurDataURL={category_image.hash}
          />
        </ImageWrapper>
        <ContentWrapper>
          <CategoryName>{category_name_long}</CategoryName>
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
