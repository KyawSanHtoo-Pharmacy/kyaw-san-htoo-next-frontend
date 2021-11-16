import { Section, Heading, Frame, Item, Text, InfoWrapper, Info, InfoText, Icon } from './TestimonialCard-styles'

export default function TestimonialCard({ testimonial: { text, customer, what } }) {
  return (
    <Item>
      <Text>{text}</Text>
      <InfoWrapper>
        <Info>
          <InfoText>{customer}</InfoText>
        </Info>
        <Info>
          <InfoText>{what}</InfoText>
        </Info>
      </InfoWrapper>
      <Icon src='/icons/quote.svg' alt='testimonial-icon' />
    </Item>
  )
}

TestimonialCard.Section = function TestimonialCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

TestimonialCard.Heading = function TestimonialCardHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

TestimonialCard.Frame = function TestimonialCardFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}
