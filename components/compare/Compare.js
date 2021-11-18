import Image from 'next/image'
import { Section, Frame, Column, NameWrapper, MyanmarName, EnglishName, ImageWrapper } from './Compare-styles'
import { NoticePill } from '@/ksh-components'

export default function Compare() {
  return (
    <Frame>
      <Column>
        <NameWrapper>
          <MyanmarName>ဝုဒ်စ်</MyanmarName>
          <EnglishName>Wood’s</EnglishName>
          <NoticePill availability={false}>ကုန်နေသော ဆေး</NoticePill>
        </NameWrapper>
        <ImageWrapper>
          <Image src='/temp/compare-placeholder.jpg' alt='blah' layout='fill' />
        </ImageWrapper>
      </Column>
      <Column>
        <NameWrapper>
          <MyanmarName>ဆောလ်မျုစ်</MyanmarName>
          <EnglishName>Solmux</EnglishName>
          <NoticePill availability={true}>အကြံပေးသော ဆေး</NoticePill>
        </NameWrapper>
        <ImageWrapper>
          <Image src='/temp/contact-placeholder.jpg' alt='blah' layout='fill' />
        </ImageWrapper>
      </Column>
    </Frame>
  )
}

Compare.Section = function CompareSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}
