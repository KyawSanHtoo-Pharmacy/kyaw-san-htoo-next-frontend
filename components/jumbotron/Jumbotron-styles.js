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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (max-width: 690px) {
    margin-top: 0;
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6.25em 0;

  &:first-of-type {
    margin: 3.13em 0;
  }

  &:last-of-type {
    margin-bottom: 6.25em;
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;

    @media screen and (max-width: 690px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
    margin-top: 0;
  }
`

export const ImageWrapper = styled.div`
  width: 49%;
  height: 22.03em;
  position: relative;

  @media screen and (max-width: 690px) {
    width: 100%;
    height: 32em;
  }
`

export const ContentWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.88em 0;

  @media screen and (max-width: 690px) {
    width: 100%;
    flex-direction: row;
    gap: 1.2em;
  }

  @media screen and (max-width: 316px) {
    flex-direction: column;
  }
`

export const Title = styled.h3`
  @media screen and (max-width: 690px) {
    flex: 1;
  }
`

export const Body = styled.p`
  font-size: 1.25em;

  @media screen and (max-width: 690px) {
    flex: 1;
    font-size: 1.09em;
  }
`
