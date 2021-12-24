import {
  Section,
  Heading,
  Frame,
  Item,
  Text,
  InfoWrapper,
  Info,
  InfoText,
  Icon,
  OverflowAera,
} from './TestimonialCard-styles'

export default function TestimonialCard({ testimonial: { customer_name, occupation, text } }) {
  return (
    <Item>
      <Text>{text}</Text>
      <InfoWrapper>
        <Info>
          <InfoText>{customer_name}</InfoText>
        </Info>
        <Info>
          <InfoText>{occupation}</InfoText>
        </Info>
      </InfoWrapper>
      <Icon src='/icons/quote.svg' alt='testimonial-icon' />
    </Item>
  )
}

TestimonialCard.OverflowAera = function TestimonialCardOverflowAera({ children, ...restProps }) {
  return <OverflowAera {...restProps}>{children}</OverflowAera>
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
