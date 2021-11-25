import styled from 'styled-components'

export const Section = styled.section`
  /* background-color: ${({ theme }) => theme.colors.heading}; */
  background-image: url('/temp/cta-bg.jpg');
  background-position: center center;
  background-size: cover;
`

export const Content = styled.div`
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.bodyBg};
  margin-bottom: 1em;
`
