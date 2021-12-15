import Image from 'next/image'
import Link from 'next/link'
import { NoticePill } from '@/ksh-components'
import { changeMyanNum } from '@/ksh-helpers'
import {
  Section,
  Heading,
  Frame,
  Item,
  Group,
  ImageWrapper,
  ContentWrapper,
  Content,
  MyanmarName,
  EnglishName,
  PreviousPrice,
  Price,
  Button,
  InfoBar,
  CategoryName,
  Count,
  PriceWrapper,
} from './ProductCard-styles'

export default function ProductCard({ medicine }) {
  const {
    product_images,
    product_name_eng,
    product_name_mm,
    product_nicknames,
    product_quantity,
    product_price,
    product_previous_price,
    product_unit,
    slug,
    categories,
  } = medicine
  const isAvailable = product_quantity > 0

  return (
    <Item>
      <ImageWrapper>
        {/* not sure bluring image works or not, just test */}
        <Image
          src={product_images[0].formats.medium.url || product_images[0].url}
          alt={`${product_name_eng} - ${product_name_mm} - ${product_nicknames}`}
          layout='fill'
          placeholder='blur'
          blurDataURL={product_images[0].hash}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Content>
          <MyanmarName>{product_name_mm}</MyanmarName>
          <Group>
            <EnglishName>{product_name_eng}</EnglishName>
            <NoticePill availability={isAvailable}>{isAvailable ? 'ပစ္စည်းရှိ' : 'ပစ္စည်းကုန်'}</NoticePill>
          </Group>
          <Group>
            <PriceWrapper>
              <Price>
                <span>{changeMyanNum(product_price)}</span> ကျပ်/ <span>၁</span> {product_unit}
              </Price>
              {product_previous_price && (
                <PreviousPrice>
                  <span>{changeMyanNum(product_previous_price)}</span> ကျပ်
                </PreviousPrice>
              )}
            </PriceWrapper>
          </Group>
        </Content>
        <Link href={`/categories/${categories[0].slug}/${slug}`} passHref>
          <Button>အသေးစိတ် ကြည့်မယ်</Button>
        </Link>
      </ContentWrapper>
    </Item>
  )
}

ProductCard.Section = function ProductCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

ProductCard.Heading = function ProductCardHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

ProductCard.Frame = function ProductCardFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

ProductCard.InfoBar = function ProductCardInfoBar({ children, ...restProps }) {
  return <InfoBar {...restProps}>{children}</InfoBar>
}

ProductCard.CategoryName = function ProductCardCategoryName({ children, ...restProps }) {
  return <CategoryName {...restProps}>{children}</CategoryName>
}

ProductCard.Count = function ProductCardCount({ children, ...restProps }) {
  return <Count {...restProps}>{children}</Count>
}
