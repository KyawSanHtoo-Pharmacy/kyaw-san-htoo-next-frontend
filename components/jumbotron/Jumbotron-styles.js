import styled from '@emotion/styled'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.offWhite};
`
export const Heading = styled.h2`
  text-align: center;
`

export const Frame = styled.div`
  padding-left: 16.33em;
  padding-right: 16.33em;
  margin-top: 6.25em;

  @media screen and (max-width: 1200px) {
    margin-top: 3.13em;
    padding-left: 0;
    padding-right: 0;
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12.5em 0;

  &:first-of-type {
    margin: 6.25em 0;
  }

  &:last-of-type {
    margin-bottom: 6.25em;
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;

    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin: 6.25em 0;
  }
`

export const ImageWrapper = styled.div`
  width: 49%;
  height: 22.03em;
  position: relative;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

export const ContentWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 1.88em;
  }
`

export const Title = styled.h3`
  font-size: 2.34em;

  @media screen and (max-width: 500px) {
    font-size: 1.41em;
    line-height: 1.8;
  }
`

export const Body = styled.p`
  font-size: 1.25em;

  @media screen and (max-width: 500px) {
    margin-top: 0.5em;
  }
`
