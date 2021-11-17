import styled from '@emotion/styled'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.offWhite};
`
export const Heading = styled.h2`
  text-align: center;
  font-size: 3.13em;
  font-family: 'Noto Sans Myanmar', sans-serif;
`

export const Frame = styled.div`
  padding-left: 16.33em;
  padding-right: 16.33em;
  margin-top: 6.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }
`

export const ImageWrapper = styled.div`
  width: 49%;
  height: 22.03em;
  position: relative;
`

export const ContentWrapper = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 2.34em;
`

export const Body = styled.p`
  font-size: 1.25em;
`
