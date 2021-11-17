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
} from './ProductCard-styles'

export default function ProductCard({ availability }) {
  return (
    <Item>
      <ImageWrapper>
        <Image src='/temp/product-placeholder.jpg' alt='blah blah' layout='fill' />
      </ImageWrapper>
      <ContentWrapper>
        <Content>
          <MyanmarName>ဂျာနူမတ်</MyanmarName>
          <Group>
            <EnglishName>Janumet</EnglishName>
            <NoticePill availability={availability}>{availability ? 'ပစ္စည်း ရှိ' : 'ပစ္စည်း ကုန်'}</NoticePill>
          </Group>
          <Group>
            <Price>
              <span>၁၄၀၀</span>ကျပ်/ <span>၁</span>ကဒ်
            </Price>
            <PreviousPrice>
              <span>၁၆၀၀</span>ကျပ်
            </PreviousPrice>
          </Group>
        </Content>
        <Link href='/categories/chaung-soe-pyout-say/janumet'>
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
