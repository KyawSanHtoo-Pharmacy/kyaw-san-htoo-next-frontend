import styled from '@emotion/styled'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.heading};
`

export const Heading = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.bodyBg};
  padding: 100px 0;
`
