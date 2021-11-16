import Image from 'next/image'
import Link from 'next/link'
import { Section, Heading, Frame, Item, ImageWrapper, ContentWrapper, CategoryName } from './CategoryCard-styles'

export default function CategoryCard({ category: { name, path, image, altText } }) {
  return (
    <Link href={`/categories/${path}`} passHref>
      <Item>
        <ImageWrapper>
          <Image src={image} layout='fill' alt={altText} />
        </ImageWrapper>
        <ContentWrapper>
          <CategoryName>{name}</CategoryName>
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
