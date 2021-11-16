import Image from 'next/image'
import { Section, Frame, Heading, Item, ImageWrapper, ContentWrapper, Title, Body } from './Jumbotron-styles'

export default function Jumbotron({ data: { title, body, image, altText } }) {
  return (
    <Item>
      <ImageWrapper>
        <Image src={image} alt={altText} layout='fill' />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ContentWrapper>
    </Item>
  )
}

Jumbotron.Section = function JumbotronSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

Jumbotron.Frame = function JumbotronFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Jumbotron.Heading = function JumbotronHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}
