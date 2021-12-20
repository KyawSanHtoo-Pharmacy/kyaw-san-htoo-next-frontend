import styled from 'styled-components'

export const Container = styled.main`
  margin-bottom: 4.6em;
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;

  @media screen and (max-width: 980px) {
    margin-top: 2em;
  }
`

export const MyanmarName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  @media screen and (max-width: 334px) {
    font-size: 2.5em;
  }
`

export const EnglishName = styled.h2`
  font-size: 3.13em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  margin-bottom: 0.8em;

  @media screen and (max-width: 334px) {
    font-size: 2.5em;
  }
`

export const HorizontalGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.4em;

  &:last-of-type {
    margin-bottom: 3.2em;
  }

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media screen and (max-width: 730px) {
    flex-direction: row;
  }

  @media screen and (max-width: 334px) {
    flex-direction: column;
  }
`

export const VerticleGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 400px) {
    margin-bottom : 15px;
  }
`

export const Label = styled.p`
  font-size: 1.25em;
`

export const InfoText = styled.p`
  font-size: 1.64em;
  font-weight: bold;
  margin-top: -0.4em;
`

export const PaleText = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.paleText};
`
