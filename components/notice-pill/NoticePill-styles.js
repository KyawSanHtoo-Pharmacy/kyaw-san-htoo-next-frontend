import styled from '@emotion/styled'

export const Pill = styled.div`
  font-size: 0.9em;
  color: ${({ availability, theme }) => (availability ? theme.colors.text : theme.colors.warning)};
  background-color: ${({ availability, theme }) => (availability ? theme.colors.testimonial : theme.colors.offWhite)};
  padding: 0.5em 1em;
  border-radius: 100vw;
`
