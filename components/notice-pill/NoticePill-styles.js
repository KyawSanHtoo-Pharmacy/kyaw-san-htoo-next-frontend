import styled from 'styled-components'

export const Pill = styled.div`
  font-size: 0.9em;
  color: ${({ availability, theme }) => (availability ? theme.colors.text : theme.colors.warning)};
  background-color: ${({ availability, theme }) => (availability ? theme.colors.testimonial : theme.colors.offWhite)};
  padding: 0.5em 1em;
  border-radius: 100vw;

  @media screen and (min-width: 361px) and (max-width: 400px) {
    padding: 0.47em 1.17em;
    font-size: 0.78em;
  }
`
