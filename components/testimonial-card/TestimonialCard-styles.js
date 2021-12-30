import styled from 'styled-components'

export const Section = styled.section`
  overflow: hidden;

  @media screen and (max-width: 500px) {
    padding: 0 1em 3em 1em;
  }
`

export const Heading = styled.h2`
  text-align: center;
`

export const Frame = styled.div`
  margin-top: 5em;

  @media screen and (max-width: 980px) {
    padding-right: 3.91em;
  }

  @media screen and (max-width: 500px) {
    padding-right: 1.251em;
  }
`

export const Item = styled.div`
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 1.25em;
  position: relative;
  margin-top: 1.72em;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 500px) {
    width: 24em;
  }
`

export const Text = styled.p`
  text-align: center;
  padding: 3em 1.2em 2em 1.2em;
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
