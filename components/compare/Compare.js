import Image from 'next/image'
import { Section, Frame, Column, NameWrapper, MyanmarName, EnglishName, ImageWrapper } from './Compare-styles'
import { NoticePill } from '@/ksh-components'

export default function Compare({ outstockMedicine, instockMedicine }) {
  return (
    <Frame>
      <Column>
        <NameWrapper>
          <MyanmarName>{outstockMedicine.product_name_mm}</MyanmarName>
          <EnglishName>{outstockMedicine.product_name_eng}</EnglishName>
          <NoticePill availability={false}>ကုန်နေသော ဆေး</NoticePill>
        </NameWrapper>
        <ImageWrapper>
          <Image
            src={
              outstockMedicine.product_images[0].formats.large
                ? outstockMedicine.product_images[0].formats.large.url
                : outstockMedicine.product_images[0].url
            }
            alt={`${outstockMedicine.product_name_mm} - ${outstockMedicine.product_name_eng}`}
            layout='fill'
            placeholder='blur'
            blurDataURL={outstockMedicine.product_images[0].hash}
          />
        </ImageWrapper>
      </Column>
      <Column>
        <NameWrapper>
          <MyanmarName>{instockMedicine.product_name_mm}</MyanmarName>
          <EnglishName>{instockMedicine.product_name_eng}</EnglishName>
          <NoticePill availability={true}>အကြံပေးသော ဆေး</NoticePill>
        </NameWrapper>
        <ImageWrapper>
          <Image
            src={
              instockMedicine.product_images[0].formats.large
                ? instockMedicine.product_images[0].formats.large.url
                : instockMedicine.product_images[0].url
            }
            alt={`${instockMedicine.product_name_mm} - ${instockMedicine.product_name_eng}`}
            layout='fill'
            placeholder='blur'
            blurDataURL={instockMedicine.product_images[0].hash}
          />
        </ImageWrapper>
      </Column>
    </Frame>
  )
}

Compare.Section = function CompareSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}
