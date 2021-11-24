import styled from 'styled-components'

export const Section = styled.section``

export const Heading = styled.h2`
  text-align: center;
`

export const Frame = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 5em;
`

export const Item = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 1.25em;
  position: relative;
  margin-top: 1.72em;
`

export const Text = styled.p`
  text-align: center;
  padding: 3.13em 0.63em 2.5em;
`

export const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.testimonial};
  border-radius: 0 0 1.25em 1.25em;
  display: flex;
`

export const Info = styled.div`
  flex: 1;
  text-align: center;
  padding: 1.56em 0.63em;
`

export const InfoText = styled.p`
  font-size: 1.09em;
`

export const Icon = styled.img`
  position: absolute;
  top: -1.72em;
  left: 1.88em;
  width: 3.44em;
  height: 3.16em;
`
