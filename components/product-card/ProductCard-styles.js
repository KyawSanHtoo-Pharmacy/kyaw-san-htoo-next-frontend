import styled from '@emotion/styled'

export const Section = styled.section``

export const Heading = styled.h2`
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const Frame = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(19.8em, 1fr));
  margin-top: ${({ mt }) => mt || '5em'};

  @media screen and (max-width: 1022px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  width: 80%;
  aspect-ratio: 5 / 4;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.testimonial};
  border-radius: 0.63em;
  align-self: center;
  margin-bottom: -34%;
`

export const ContentWrapper = styled.div`
  padding-top: 34%;
  border-radius: 0.63em;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.greenBoxShadow};

  @media screen and (max-width: 400px) {
    padding-top: 36%;
  }
`

export const Content = styled.div`
  padding: 1.88em;

  @media screen and (max-width: 400px) {
    padding: 0.94em;
  }
`

export const MyanmarName = styled.h3`
  font-weight: normal;
  margin-bottom: 0.34em;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 361px) and (max-width: 400px) {
    font-size: 1.25em;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    &:not(:last-of-type) {
      margin-bottom: 0.6em;
    }
  }
`

export const EnglishName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;

  @media screen and (min-width: 361px) and (max-width: 400px) {
    font-size: 1.09em;
  }
`

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3em;

  @media screen and (min-width: 361px) and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0;
    align-items: flex-start;
  }

  @media screen and (max-width: 361px) {
    margin-top: -0.5em;
  }
`

export const Price = styled.p`
  font-weight: bold;
  font-weight: normal;
  & > span {
    font-size: 1.3em;
  }

  @media screen and (min-width: 361px) and (max-width: 400px) {
    font-size: 1.25em;
  }
`

export const PreviousPrice = styled.p`
  font-size: 0.9em;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.paleText};
  font-weight: normal;

  & > span {
    font-size: 1.3em;
  }

  @media screen and (min-width: 361px) and (max-width: 600px) {
    font-size: 1.09em;
    order: -1;
    margin-bottom: -0.6em;
  }
`

export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.heading};
  color: ${({ theme }) => theme.colors.bodyBg};
  font-size: 1.09em;
  display: inline-block;
  width: 100%;
  padding: 1em;
  text-align: center;

  @media screen and (min-width: 361px) and (max-width: 400px) {
    font-size: 0.94em;
  }
`

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8em;
  margin-top: 3.13em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerOne};

  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }
`

export const CategoryName = styled.p`
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.heading};
`

export const Count = styled.p`
  font-size: 1.25em;
  margin-left: 12em;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`
