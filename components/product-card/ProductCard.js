import Image from 'next/image'
import Link from 'next/link'
import { NoticePill } from '@/ksh-components'
import {
  Section,
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
} from './ProductCard-styles'

export default function ProductCard({ availability }) {
  return (
    <Item>
      <ImageWrapper>
        <Image src='/temp/product-placeholder.jpg' alt='blah blah' layout='fill' />
      </ImageWrapper>
      <ContentWrapper>
        <Content>
          <MyanmarName>ဘိုင်အိုဂျက်ဆစ်</MyanmarName>
          <Group>
            <EnglishName>Biogesic</EnglishName>
            <NoticePill availability={availability}>{availability ? 'ပစ္စည်း ရှိ' : 'ပစ္စည်း ကုန်'}</NoticePill>
          </Group>
          <Group>
            <Price>
              <span>၅၀၀</span> ကျပ်/ <span>၁</span> ကဒ်
            </Price>
            <PreviousPrice>
              <span>၆၀၀</span> ကျပ်
            </PreviousPrice>
          </Group>
        </Content>
        <Link href='/categories/chaung-soe-pyout-say/biogesic'>
          <Button>အသေးစိတ် ကြည့်မယ်</Button>
        </Link>
      </ContentWrapper>
    </Item>
  )
}

ProductCard.Section = function ProductCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
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
