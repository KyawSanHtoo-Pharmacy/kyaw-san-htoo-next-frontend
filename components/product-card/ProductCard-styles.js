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
`

export const Content = styled.div`
  padding: 1.88em;
`

export const MyanmarName = styled.h3`
  font-weight: normal;
  margin-bottom: 0.34em;
  color: ${({ theme }) => theme.colors.text};
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EnglishName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
`

//NoticePill Component Lote Yan

export const Price = styled.p`
  font-weight: bold;
  font-weight: normal;
  & > span {
    font-size: 1.3em;
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
`

export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.heading};
  color: ${({ theme }) => theme.colors.bodyBg};
  font-size: 1.09em;
  display: inline-block;
  width: 100%;
  padding: 1em;
  text-align: center;
`

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8em;
  margin-top: 6.25em;
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
