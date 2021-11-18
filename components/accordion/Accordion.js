import {
  Container,
  Item,
  TitleWrapper,
  Title,
  Icon,
  AnswerWrapper,
  Answer,
  TwoColAnswerWrapper,
  TwoColAnswerColumn,
} from './Accordion-styles'
import { useState, createContext, useContext } from 'react'

const AccordionContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <Item {...restProps}> {children}</Item>
    </AccordionContext.Provider>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(AccordionContext)
  return (
    <TitleWrapper onClick={() => setIsOpen(!isOpen)}>
      <Title {...restProps}>{children}</Title>
      <Icon src='/icons/blue-plus.svg' alt='plus-icon' show={isOpen} />
    </TitleWrapper>
  )
}

Accordion.AnswerWrapper = function AccordionAnswerWrapper({ children, ...restProps }) {
  const { isOpen } = useContext(AccordionContext)
  return (
    <AnswerWrapper show={isOpen} {...restProps}>
      {children}
    </AnswerWrapper>
  )
}

Accordion.Answer = function AccordionAnswer({ children, ...restProps }) {
  return <Answer {...restProps}>{children}</Answer>
}

Accordion.TwoColAnswer = function AccordionTwoColAnswer({ children, ...restProps }) {
  return <TwoColAnswerWrapper {...restProps}>{children}</TwoColAnswerWrapper>
}

Accordion.TwoColAnswerColumn = function AccordionTwoColAnswerColumn({ children, ...restProps }) {
  return <TwoColAnswerColumn {...restProps}>{children}</TwoColAnswerColumn>
}
